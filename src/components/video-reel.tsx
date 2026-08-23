"use client";

import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import type { VideoItem } from "@/lib/data";

/**
 * Video showcase. Nothing loads until the poster is clicked — an embed per
 * tile would pull in a player (and, on Instagram, a tracking script) for every
 * video on the page whether or not anyone watches it.
 *
 * Instagram is deliberately link-out rather than embed: their embed requires a
 * third-party script, carries their chrome, and breaks the moment a post is
 * made private. Re-host the original export and the tile plays inline instead.
 */
export function VideoReel({ videos }: { videos: VideoItem[] }) {
  if (videos.length === 0) return null;

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <li key={video.id}>
          <Tile video={video} />
        </li>
      ))}
    </ul>
  );
}

function embedUrl(video: VideoItem): string | null {
  switch (video.provider) {
    case "stream":
      return `https://customer-${video.id}.cloudflarestream.com/${video.id}/iframe?autoplay=true`;
    case "vimeo":
      return `https://player.vimeo.com/video/${video.id}?autoplay=1`;
    case "youtube":
      return `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`;
    case "instagram":
      return null; // link out instead
  }
}

function Tile({ video }: { video: VideoItem }) {
  const [playing, setPlaying] = useState(false);
  const src = embedUrl(video);

  const frame = (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line bg-ink ${
        video.aspect === "9/16"
          ? "aspect-[9/16]"
          : video.aspect === "1/1"
            ? "aspect-square"
            : "aspect-video"
      }`}
    >
      {playing && src ? (
        <iframe
          src={src}
          title={video.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <>
          {video.poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={video.poster}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
              loading="lazy"
            />
          ) : (
            <PosterFallback />
          )}

          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-flare text-ink transition-transform duration-200 group-hover:scale-110">
              {src ? (
                <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
              ) : (
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              )}
            </span>
          </span>

          {video.duration && (
            <span className="tnum absolute bottom-3 right-3 rounded-full bg-ink/80 px-2.5 py-1 text-[0.75rem] text-paper backdrop-blur-sm">
              {video.duration}
            </span>
          )}
        </>
      )}
    </div>
  );

  const caption = (
    <div className="mt-3">
      <p className="font-display text-[0.9375rem] leading-tight tracking-tight">
        {video.title}
      </p>
      {video.client && (
        <p className="mt-1 text-[0.8125rem] text-ink-muted">{video.client}</p>
      )}
    </div>
  );

  // Instagram has no inline player — the tile becomes a link
  if (!src) {
    return (
      <a
        href={video.id}
        target="_blank"
        rel="noopener noreferrer"
        className="group block cursor-pointer"
      >
        {frame}
        {caption}
        <span className="sr-only">(opens Instagram in a new tab)</span>
      </a>
    );
  }

  return (
    <div className="group">
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label={`Play ${video.title}`}
        className="block w-full cursor-pointer text-left"
      >
        {frame}
      </button>
      {caption}
    </div>
  );
}

/** Drawn stand-in so the grid looks composed before posters exist. */
function PosterFallback() {
  return (
    <svg
      viewBox="0 0 90 160"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect width="90" height="160" fill="#171717" />
      <g stroke="#262626" strokeWidth="0.5">
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`v${i}`} x1={i * 15} y1="0" x2={i * 15} y2="160" />
        ))}
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 16} x2="90" y2={i * 16} />
        ))}
      </g>
      <circle cx="62" cy="44" r="18" fill="#ff5a1f" />
      <rect x="14" y="96" width="34" height="34" rx="4" fill="#fafaf9" />
    </svg>
  );
}
