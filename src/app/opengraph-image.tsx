import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site, stats } from "@/lib/data";

export const runtime = "nodejs";

/**
 * Satori cannot fetch over the network, so the mark is inlined as a data URI
 * at build time. Read once at module scope rather than per render.
 */
const MARK = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "brand", "mark.png")
).toString("base64")}`;
export const alt = `${site.name} | ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Link-preview card, rendered at build time. Satori (which powers this) only
 * supports flexbox — no grid, no shorthand `background` with gradients on
 * arbitrary elements — so the layout here is deliberately plain.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Mark + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* The mark is a black badge and the card is near-black, so it needs
              a light ring to separate from the background. */}
          <div
            style={{
              display: "flex",
              width: 68,
              height: 68,
              borderRadius: 34,
              backgroundColor: "#fafaf9",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={MARK} alt="" width={60} height={60} />
          </div>
          <div style={{ fontSize: 30, color: "#fafaf9", fontWeight: 600 }}>
            {site.name}
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 92,
            fontWeight: 700,
            color: "#fafaf9",
            letterSpacing: "-0.04em",
            lineHeight: 1.02,
          }}
        >
          <div style={{ display: "flex" }}>We build software</div>
          <div style={{ display: "flex" }}>
            that ships
            <span style={{ color: "#ff5a1f" }}>.</span>
          </div>
        </div>

        {/* Footer rule + proof */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #2a2a2a",
            paddingTop: "28px",
            fontSize: 24,
            color: "#a3a3a3",
          }}
        >
          <div style={{ display: "flex" }}>
            {stats.projects} projects · {stats.clients} clients · {stats.disciplines} disciplines
          </div>
          <div style={{ display: "flex", color: "#ff5a1f" }}>
            {site.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    size
  );
}
