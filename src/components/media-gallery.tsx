"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { GalleryItem } from "@/lib/data";

/**
 * Design gallery with a lightbox. Every item carries its intrinsic dimensions
 * so the grid reserves space before the image loads — a masonry of design work
 * is exactly where cumulative layout shift is worst.
 */
export function MediaGallery({ items }: { items: GalleryItem[] }) {
  const [openAt, setOpenAt] = useState<number | null>(null);

  const close = useCallback(() => setOpenAt(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenAt((i) => (i === null ? null : (i + delta + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (openAt === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openAt, close, step]);

  if (items.length === 0) return null;

  // Three or more items earn the feature block; fewer just flow in the grid.
  const feature = items.length >= 3 ? items.slice(0, 3) : [];
  const rest = items.slice(feature.length);

  const active = openAt === null ? null : items[openAt];

  return (
    <>
      {/* Feature block: item 0 large on the left, items 1 and 2 stacked to
          its right. row-span-2 makes the tall cell match the two short ones
          exactly, instead of overhanging into empty space. */}
      {feature.length === 3 && (
        <ul className="mb-4 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {feature.map((item, i) => (
            <li
              key={item.src}
              className={i === 0 ? "lg:col-span-2 lg:row-span-2" : undefined}
            >
              <Tile item={item} index={i} onOpen={setOpenAt} fill />
            </li>
          ))}
        </ul>
      )}

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((item, i) => (
          <li key={item.src} className={item.wide ? "sm:col-span-2" : undefined}>
            <button
              type="button"
              onClick={() => setOpenAt(i + feature.length)}
              aria-label={`View ${item.alt}`}
              className="group block w-full cursor-pointer overflow-hidden rounded-2xl border border-line bg-paper-pure"
            >
              {/* next/image negotiates WebP/AVIF and emits a srcset — the
                  source PNGs are ~700KB each, which is fine to store but not
                  to ship. */}
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4"
          onClick={close}
        >
          <Image
            src={active.src}
            alt={active.alt}
            width={active.width}
            height={active.height}
            sizes="90vw"
            priority
            className="max-h-[88vh] w-auto rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-paper transition-colors duration-200 hover:bg-white/20"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {items.length > 1 && (
            <>
              <NavButton side="left" onClick={() => step(-1)} />
              <NavButton side="right" onClick={() => step(1)} />
              <p className="tnum eyebrow absolute bottom-6 left-1/2 -translate-x-1/2 text-paper/70">
                {openAt! + 1} / {items.length}
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}

/** Feature-block cell. `fill` makes the image cover its grid cell so the
 *  large item and the two stacked ones line up on the same bottom edge. */
function Tile({
  item,
  index,
  onOpen,
  fill,
}: {
  item: GalleryItem;
  index: number;
  onOpen: (i: number) => void;
  fill?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`View ${item.alt}`}
      className={`group block w-full cursor-pointer overflow-hidden rounded-2xl border border-line bg-paper-pure ${
        fill ? "relative h-full min-h-[13rem]" : ""
      }`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        {...(fill
          ? { fill: true as const, className: "object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]" }
          : {
              width: item.width,
              height: item.height,
              className:
                "h-auto w-full transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]",
            })}
        sizes="(min-width: 1024px) 45vw, 100vw"
      />
    </button>
  );
}

function NavButton({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: () => void;
}) {
  const Icon = side === "left" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      aria-label={side === "left" ? "Previous image" : "Next image"}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`absolute top-1/2 inline-flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-paper transition-colors duration-200 hover:bg-white/20 ${
        side === "left" ? "left-4" : "right-4"
      }`}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
