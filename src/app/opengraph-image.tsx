import { ImageResponse } from "next/og";
import { site, stats } from "@/lib/data";

export const runtime = "nodejs";
export const alt = `${site.name} — ${site.tagline}`;
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
          <svg width="56" height="56" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="7" fill="#fafaf9" />
            <rect x="8" y="8" width="3.4" height="16" rx="1.2" fill="#0a0a0a" />
            <path d="M11.4 8.4 L14.6 8.4 L23.2 23.6 L20 23.6 Z" fill="#ff5a1f" />
            <rect x="20.6" y="8" width="3.4" height="16" rx="1.2" fill="#0a0a0a" />
          </svg>
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
            {stats.projects} projects · {stats.clients} clients · {stats.years} years
          </div>
          <div style={{ display: "flex", color: "#ff5a1f" }}>nexic.tech</div>
        </div>
      </div>
    ),
    size
  );
}
