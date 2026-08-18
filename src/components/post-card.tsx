import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate, type Post } from "@/lib/blog";

const palettes = {
  ink: { bg: "#0a0a0a", line: "#242424", solid: "#fafaf9", accent: "#ff5a1f" },
  flare: { bg: "#ff5a1f", line: "rgba(10,10,10,0.20)", solid: "#0a0a0a", accent: "#fafaf9" },
  paper: { bg: "#f3f2f1", line: "#dedbd8", solid: "#0a0a0a", accent: "#ff5a1f" },
} as const;

/** Drawn cover, same geometry family as the project artwork. */
function PostArt({ post }: { post: Post }) {
  const c = palettes[post.tone];
  const seed = post.slug.length % 3;

  return (
    <svg
      viewBox="0 0 480 270"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect width="480" height="270" fill={c.bg} />
      <g stroke={c.line} strokeWidth="1">
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="270" />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="480" y2={i * 48} />
        ))}
      </g>

      {seed === 0 && (
        <>
          <circle cx="360" cy="96" r="66" fill={c.accent} />
          <rect x="60" y="150" width="120" height="72" rx="12" fill={c.solid} />
        </>
      )}
      {seed === 1 && (
        <>
          <rect x="288" y="48" width="132" height="132" rx="66" fill={c.solid} />
          <rect x="60" y="168" width="180" height="12" rx="6" fill={c.accent} />
        </>
      )}
      {seed === 2 && (
        <>
          <path d="M336 42 L426 186 L246 186 Z" fill={c.accent} />
          <circle cx="120" cy="150" r="54" fill={c.solid} />
        </>
      )}
    </svg>
  );
}

export function PostCard({ post, featured }: { post: Post; featured?: boolean }) {
  return (
    <article className="group h-full">
      <Link href={`/blog/${post.slug}`} className="flex h-full cursor-pointer flex-col">
        <div
          className={`overflow-hidden rounded-2xl border border-line ${
            featured ? "aspect-[16/9]" : "aspect-[16/10]"
          }`}
        >
          <div className="h-full w-full transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]">
            {post.cover ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.cover}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <PostArt post={post} />
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col pt-6">
          <div className="flex items-center gap-3">
            <span className="eyebrow text-flare-ink">{post.category}</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <time dateTime={post.publishedAt} className="text-[0.75rem] text-ink-muted">
              {formatDate(post.publishedAt)}
            </time>
          </div>

          <h3
            className={`mt-4 max-w-[26ch] font-display leading-[1.14] tracking-[-0.03em] transition-colors duration-200 group-hover:text-flare-ink ${
              featured ? "text-[1.625rem] md:text-[2rem]" : "text-[1.25rem]"
            }`}
          >
            {post.title}
          </h3>

          <p className="mt-3 max-w-[56ch] text-[0.9375rem] leading-relaxed text-ink-muted">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center gap-3 pt-6 text-[0.75rem] text-ink-muted">
            <span>{post.readMinutes} min read</span>
            <ArrowUpRight
              className="ml-auto h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
