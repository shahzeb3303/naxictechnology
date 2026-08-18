import {
  Bot,
  Clapperboard,
  Code2,
  LineChart,
  Megaphone,
  MessagesSquare,
  PenTool,
  Smartphone,
} from "lucide-react";
import type { Service } from "@/lib/data";

const icons = {
  web: Code2,
  mobile: Smartphone,
  ai: Bot,
  marketing: LineChart,
  social: MessagesSquare,
  ads: Megaphone,
  design: PenTool,
  video: Clapperboard,
} as const;

/**
 * Rotating three-tone panel behind each service. Same grid-and-geometry
 * language as the project covers, so the services page reads as part of the
 * same system rather than a different template.
 */
const palettes = [
  { bg: "bg-ink", grid: "#242424", shape: "#ff5a1f", icon: "text-paper" },
  { bg: "bg-flare", grid: "rgba(10,10,10,0.20)", shape: "#0a0a0a", icon: "text-ink" },
  { bg: "bg-paper", grid: "#dedbd8", shape: "#0a0a0a", icon: "text-ink" },
] as const;

export function ServiceArt({ service, position }: { service: Service; position: number }) {
  const Icon = icons[service.icon];
  const p = palettes[position % palettes.length];

  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-line ${p.bg}`}
    >
      <svg
        viewBox="0 0 480 360"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g stroke={p.grid} strokeWidth="1">
          {Array.from({ length: 11 }, (_, i) => (
            <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="360" />
          ))}
          {Array.from({ length: 8 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 48} x2="480" y2={i * 48} />
          ))}
        </g>

        {/* Composition varies with position so no two adjacent panels match */}
        {position % 4 === 0 && (
          <circle cx="372" cy="96" r="70" fill={p.shape} opacity="0.9" />
        )}
        {position % 4 === 1 && (
          <rect x="300" y="48" width="140" height="140" rx="70" fill={p.shape} opacity="0.9" />
        )}
        {position % 4 === 2 && (
          <path d="M312 40 L432 200 L192 200 Z" fill={p.shape} opacity="0.9" />
        )}
        {position % 4 === 3 && (
          <rect x="304" y="56" width="136" height="136" rx="18" fill={p.shape} opacity="0.9" />
        )}

        <rect x="48" y="264" width="132" height="10" rx="5" fill={p.shape} opacity="0.9" />
      </svg>

      {/* The icon carries the meaning; the geometry is just texture behind it */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          className={`h-20 w-20 ${p.icon}`}
          strokeWidth={1.25}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
