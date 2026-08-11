"use client";

import { motion, useReducedMotion } from "motion/react";
import { mosaicMedia } from "@/lib/data";

/**
 * A 3x3 tile cluster. Each tile keeps three soft corners and drops the one
 * facing the middle, so neighbours read as petals around a centre — the shape
 * language from the reference, rebuilt in the black/white/orange palette.
 *
 * Tiles animate in individually rather than as one block: a 60ms stagger with
 * a slight overshoot, which is what makes the cluster assemble itself instead
 * of just fading on.
 *
 * Three tiles are media slots. Give `mosaicMedia` real square images and they
 * take over; leave it empty and a drawn grid stands in.
 */

type Tile = {
  kind: "paper" | "flare" | "media";
  /** Radius recipe — the omitted corner points toward the cluster centre. */
  shape: string;
};

const TILES: Tile[] = [
  { kind: "flare", shape: "rounded-[2.5rem] rounded-br-none" },
  { kind: "media", shape: "rounded-[2.5rem] rounded-bl-none" },
  { kind: "paper", shape: "rounded-full" },

  { kind: "paper", shape: "rounded-[2.5rem] rounded-tr-none" },
  { kind: "flare", shape: "rounded-full" },
  { kind: "media", shape: "rounded-[2.5rem] rounded-bl-none" },

  { kind: "media", shape: "rounded-[2.5rem] rounded-tl-none" },
  { kind: "paper", shape: "rounded-[2.5rem] rounded-tr-none" },
  { kind: "flare", shape: "rounded-[2.5rem] rounded-tl-none" },
];

/**
 * Media tiles sit on a lifted translucent white rather than a near-black.
 * At bg-ink-soft they disappeared into the dark section, which cost the
 * cluster three of its nine shapes.
 */
const surfaces: Record<Tile["kind"], string> = {
  paper: "bg-paper",
  flare: "bg-flare",
  media: "bg-white/[0.07] border border-white/20",
};

/** Distance from the centre tile (index 4), so the wave radiates outward. */
const ringDelay = (i: number) => {
  const dx = Math.abs((i % 3) - 1);
  const dy = Math.abs(Math.floor(i / 3) - 1);
  return Math.max(dx, dy) * 0.09;
};

export function Mosaic() {
  const reduced = useReducedMotion();
  let mediaIndex = -1;

  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4" aria-hidden="true">
      {TILES.map((tile, i) => {
        if (tile.kind === "media") mediaIndex += 1;
        const src = tile.kind === "media" ? mosaicMedia[mediaIndex] : undefined;

        return (
          <motion.div
            key={i}
            data-reveal=""
            initial={reduced ? false : { opacity: 0, scale: 0.86, y: 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: ringDelay(i),
              // Slight overshoot so tiles settle into place rather than stop dead
              ease: [0.34, 1.56, 0.64, 1],
            }}
            whileHover={reduced ? undefined : { scale: 1.05 }}
            className={`relative aspect-square overflow-hidden ${tile.shape} ${surfaces[tile.kind]}`}
          >
            {src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt="" className="h-full w-full object-cover" />
            ) : (
              tile.kind === "media" && (
                <svg
                  className="h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <g stroke="rgba(255,255,255,0.16)" strokeWidth="0.8">
                    {Array.from({ length: 5 }, (_, n) => (
                      <line key={`v${n}`} x1={n * 25} y1="0" x2={n * 25} y2="100" />
                    ))}
                    {Array.from({ length: 5 }, (_, n) => (
                      <line key={`h${n}`} x1="0" y1={n * 25} x2="100" y2={n * 25} />
                    ))}
                  </g>
                  <circle cx="50" cy="50" r="11" fill="var(--color-flare)" />
                </svg>
              )
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
