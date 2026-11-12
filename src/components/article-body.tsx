import Image from "next/image";
import Link from "next/link";
import type { Block } from "@/lib/blog";

/**
 * Resolves [text](url) inside a block's plain text. Keeping the markup out of
 * the content file means a post stays readable as data, and an author does not
 * have to write JSX to cite a source.
 */
function withLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    const [, label, href] = m;
    const external = /^https?:/.test(href);
    const className =
      "cursor-pointer font-medium text-flare-ink underline underline-offset-4 decoration-flare/40 transition-colors duration-200 hover:decoration-flare";
    return external ? (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    ) : (
      <Link key={i} href={href} className={className}>
        {label}
      </Link>
    );
  });
}

/**
 * Renders a post's typed blocks. Headings emit stable ids so the table of
 * contents, in-page anchors, and the `speakable` selectors in the structured
 * data all point at the same targets.
 */
export function ArticleBody({ body }: { body: Block[] }) {
  return (
    <div className="max-w-[68ch]">
      {body.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={block.id}
                className="mt-14 scroll-mt-28 font-display text-[1.625rem] leading-tight tracking-[-0.035em] first:mt-0 md:text-[2rem]"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={i}
                id={block.id}
                className="mt-10 scroll-mt-28 font-display text-[1.25rem] leading-tight tracking-[-0.025em] md:text-[1.4375rem]"
              >
                {block.text}
              </h3>
            );

          case "p":
            return (
              <p
                key={i}
                className="mt-5 text-[1.0625rem] leading-[1.75] text-ink-muted md:text-[1.125rem]"
              >
                {withLinks(block.text)}
              </p>
            );

          case "ul":
            return (
              <ul key={i} className="mt-6 space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3.5">
                    <span
                      className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-flare"
                      aria-hidden="true"
                    />
                    <span className="text-[1.0625rem] leading-[1.7] text-ink-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={i} className="mt-6 space-y-3">
                {block.items.map((item, n) => (
                  <li key={item} className="flex gap-3.5">
                    <span className="tnum mt-[0.15em] shrink-0 font-display text-[0.9375rem] text-flare-ink">
                      {String(n + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1.0625rem] leading-[1.7] text-ink-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            );

          case "quote":
            return (
              <figure key={i} className="mt-10 border-l-2 border-flare pl-6">
                <blockquote>
                  <p className="font-display text-[1.375rem] leading-[1.3] tracking-[-0.02em] text-ink md:text-[1.5rem]">
                    {block.text}
                  </p>
                </blockquote>
                {/* A rule carries the attribution instead of a leading dash,
                    which keeps the em dash out of rendered copy entirely. */}
                {block.cite && (
                  <figcaption className="mt-3 flex items-center gap-2.5 text-[0.8125rem] text-ink-muted">
                    <span className="h-px w-5 bg-line" aria-hidden="true" />
                    {block.cite}
                  </figcaption>
                )}
              </figure>
            );

          case "callout":
            return (
              <aside
                key={i}
                className="mt-10 rounded-2xl border border-line bg-flare-wash p-6 md:p-7"
              >
                <p className="text-[1rem] leading-[1.7] text-ink">{block.text}</p>
              </aside>
            );

          case "figure":
            return (
              /* Breaks the 68ch measure on purpose: a dashboard screenshot is
                 unreadable at body width. */
              <figure key={i} className="mt-10 lg:-mx-16 xl:-mx-24">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  className="w-full rounded-2xl border border-line"
                  sizes="(min-width: 1280px) 60rem, (min-width: 1024px) 52rem, 100vw"
                />
                {block.caption && (
                  <figcaption className="mt-3 text-[0.875rem] leading-relaxed text-ink-muted">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
