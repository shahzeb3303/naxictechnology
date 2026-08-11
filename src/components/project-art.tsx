import type { Project } from "@/lib/data";

const palettes: Record<
  Project["tone"],
  { bg: string; line: string; solid: string; accent: string }
> = {
  ink: { bg: "#0a0a0a", line: "#242424", solid: "#fafaf9", accent: "#ff5a1f" },
  flare: { bg: "#ff5a1f", line: "rgba(10,10,10,0.20)", solid: "#0a0a0a", accent: "#fafaf9" },
  paper: { bg: "#f3f2f1", line: "#dedbd8", solid: "#0a0a0a", accent: "#ff5a1f" },
};

/**
 * Placeholder cover art. `tone` picks the palette and `art` picks the
 * composition, so no two cards repeat even when they share a colourway.
 * Swap the whole component for <Image> once real case-study photography
 * exists — nothing else needs to change.
 */
export function ProjectArt({ project }: { project: Project }) {
  const c = palettes[project.tone];

  return (
    <svg
      viewBox="0 0 480 320"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect width="480" height="320" fill={c.bg} />

      {/* Baseline grid — shared by every card so the set reads as a family */}
      <g stroke={c.line} strokeWidth="1">
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="320" />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="480" y2={i * 48} />
        ))}
      </g>

      {/* 1 — Sphere over peak: a threshold being crossed */}
      {project.art === 1 && (
        <>
          <circle cx="340" cy="118" r="84" fill={c.accent} />
          <path d="M92 244 L188 100 L284 244 Z" fill={c.solid} />
          <rect x="48" y="268" width="188" height="10" rx="5" fill={c.accent} />
        </>
      )}

      {/* 2 — Eclipse and slab: retrieval, one form revealing another */}
      {project.art === 2 && (
        <>
          <circle cx="176" cy="152" r="88" fill={c.solid} />
          <rect x="216" y="150" width="200" height="106" rx="14" fill={c.accent} />
          <circle cx="366" cy="92" r="36" fill={c.solid} />
        </>
      )}

      {/* 3 — Staggered bars and orbit: movement across a network */}
      {project.art === 3 && (
        <>
          <rect x="56" y="128" width="58" height="130" rx="8" fill={c.solid} />
          <rect x="126" y="92" width="58" height="166" rx="8" fill={c.solid} />
          <rect x="196" y="160" width="58" height="98" rx="8" fill={c.solid} />
          <circle cx="356" cy="132" r="70" fill={c.accent} />
          <path
            d="M300 258 L432 258"
            stroke={c.solid}
            strokeWidth="12"
            strokeLinecap="round"
          />
        </>
      )}

      {/* 4 — Concentric pulse: telemetry radiating from a source */}
      {project.art === 4 && (
        <>
          <circle cx="150" cy="160" r="96" fill="none" stroke={c.solid} strokeWidth="10" />
          <circle cx="150" cy="160" r="58" fill="none" stroke={c.solid} strokeWidth="10" />
          <circle cx="150" cy="160" r="22" fill={c.accent} />
          <rect x="286" y="76" width="140" height="140" rx="16" fill={c.solid} />
          <circle cx="356" cy="146" r="34" fill={c.accent} />
        </>
      )}
    </svg>
  );
}
