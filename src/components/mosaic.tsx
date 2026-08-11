/**
 * A 3x3 tile cluster. Each tile keeps three soft corners and drops the one
 * facing the middle, so neighbouring tiles read as petals around a centre —
 * the shape language from the reference, rebuilt in the black/white/orange
 * palette. Solid tiles stand in for photography; swap any `grid` tile for an
 * <Image> and the composition still holds.
 */

type Tile = {
  kind: "ink" | "flare" | "grid";
  /** Radius recipe — the omitted corner points toward the cluster centre. */
  shape: string;
};

const TILES: Tile[] = [
  { kind: "flare", shape: "rounded-[2.5rem] rounded-br-none" },
  { kind: "grid", shape: "rounded-[2.5rem] rounded-bl-none" },
  { kind: "ink", shape: "rounded-full" },

  { kind: "ink", shape: "rounded-[2.5rem] rounded-tr-none" },
  { kind: "flare", shape: "rounded-full" },
  { kind: "grid", shape: "rounded-[2.5rem] rounded-bl-none" },

  { kind: "grid", shape: "rounded-[2.5rem] rounded-tl-none" },
  { kind: "ink", shape: "rounded-[2.5rem] rounded-tr-none" },
  { kind: "flare", shape: "rounded-[2.5rem] rounded-tl-none" },
];

const surfaces: Record<Tile["kind"], string> = {
  ink: "bg-ink",
  flare: "bg-flare",
  grid: "bg-paper-pure border border-line",
};

export function Mosaic() {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4" aria-hidden="true">
      {TILES.map((tile, i) => (
        <div
          key={i}
          className={`relative aspect-square overflow-hidden transition-transform duration-500 ease-[var(--ease-out-soft)] hover:scale-[1.04] ${tile.shape} ${surfaces[tile.kind]}`}
        >
          {tile.kind === "grid" && (
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g stroke="var(--color-line)" strokeWidth="0.6">
                {Array.from({ length: 5 }, (_, n) => (
                  <line key={`v${n}`} x1={n * 25} y1="0" x2={n * 25} y2="100" />
                ))}
                {Array.from({ length: 5 }, (_, n) => (
                  <line key={`h${n}`} x1="0" y1={n * 25} x2="100" y2={n * 25} />
                ))}
              </g>
              <circle cx="50" cy="50" r="11" fill="var(--color-flare)" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
