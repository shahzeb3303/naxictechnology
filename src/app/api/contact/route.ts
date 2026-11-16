import { NextResponse } from "next/server";
import { site } from "@/lib/data";

/**
 * Contact form endpoint.
 *
 * Delivery goes through Resend's REST API over fetch rather than the `resend`
 * package, which keeps the dependency list at five and the cold start small.
 *
 * The one rule this file exists to enforce: never tell someone their message
 * was sent unless it was. Every failure path below returns a non-OK status so
 * the form can show the mailbox address instead of a receipt.
 */

export const runtime = "nodejs";
// The handler sends mail on every call, so nothing here may be prerendered.
export const dynamic = "force-dynamic";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/** Caps that stop a single request carrying a payload worth abusing. */
const LIMITS = {
  name: 120,
  email: 200,
  company: 160,
  type: 80,
  budget: 80,
  timeline: 80,
  message: 6000,
} as const;

type Payload = Record<keyof typeof LIMITS | "companyUrl", unknown>;

const looksLikeEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

/**
 * Per instance throttle. Serverless spreads requests across instances, so this
 * cannot be a real rate limit and is not treated as one. It costs nothing and
 * stops the naive case of one browser firing the form repeatedly.
 */
const recent = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function throttled(key: string) {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  if (recent.size > 500) {
    // Keep the map from growing without bound on a long lived instance.
    for (const [k, v] of recent) if (!v.some((t) => now - t < WINDOW_MS)) recent.delete(k);
  }
  return hits.length > MAX_PER_WINDOW;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot. A real person never sees this field, so anything in it is a bot.
  // Answer 200 so the sender learns nothing from the response.
  if (clean(body.companyUrl, 200)) {
    return NextResponse.json({ ok: true });
  }

  const values = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    company: clean(body.company, LIMITS.company),
    type: clean(body.type, LIMITS.type),
    budget: clean(body.budget, LIMITS.budget),
    timeline: clean(body.timeline, LIMITS.timeline),
    message: clean(body.message, LIMITS.message),
  };

  // Server side validation, mirroring the form. The client rules are a
  // courtesy; these are the ones that count.
  const errors: Record<string, string> = {};
  if (!values.name) errors.name = "required";
  if (!values.email) errors.email = "required";
  else if (!looksLikeEmail(values.email)) errors.email = "invalid";
  if (!values.message) errors.message = "required";
  else if (values.message.length < 20) errors.message = "too_short";

  if (Object.keys(errors).length) {
    return NextResponse.json({ error: "validation", fields: errors }, { status: 422 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (throttled(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not configured. Say so plainly rather than pretending the mail went out.
    console.error("[contact] RESEND_API_KEY is not set, enquiry not delivered");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const to = process.env.CONTACT_TO || site.email;
  const from = process.env.CONTACT_FROM || `${site.name} Website <onboarding@resend.dev>`;

  const rows: [string, string][] = [
    ["Name", values.name],
    ["Email", values.email],
    ["Company", values.company || "Not given"],
    ["Project type", values.type || "Not given"],
    ["Budget", values.budget || "Not given"],
    ["Timeline", values.timeline || "Not given"],
  ];

  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    values.message,
  ].join("\n");

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;line-height:1.6;color:#111">
      <h2 style="margin:0 0 16px;font-size:18px">New enquiry from the website</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:20px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#666;vertical-align:top">${k}</td>` +
              `<td style="padding:4px 0">${escapeHtml(v)}</td></tr>`
          )
          .join("")}
      </table>
      <div style="padding:16px;background:#f5f4f2;border-radius:8px;white-space:pre-wrap">${escapeHtml(
        values.message
      )}</div>
    </div>`;

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        // So hitting reply in the inbox goes to the enquirer, not to us.
        reply_to: values.email,
        subject: `Enquiry from ${values.name}${values.company ? ` at ${values.company}` : ""}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] Resend rejected the send", res.status, detail.slice(0, 500));
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] Could not reach Resend", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
