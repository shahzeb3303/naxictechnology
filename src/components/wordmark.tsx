import Image from "next/image";

/**
 * The Nexic mark — the real brand logo, a circular black badge carrying the
 * orange wordmark.
 *
 * It ships as a PNG with the corners knocked out, so the same file sits
 * correctly on the orange header, the dark footer, and paper alike. That is
 * why the `inverted` and `onOrange` props are accepted but no longer switch
 * anything: they exist so the call sites did not all have to change, and a
 * transparent circle needs no per-background variant.
 *
 * The lockup contains three lines of type, which are illegible below roughly
 * 100px. At mark sizes it reads as a badge, and the adjacent wordmark text in
 * the header and footer carries the name — the usual treatment for a circular
 * logo of this kind.
 */
export function Wordmark({
  className,
  inverted: _inverted = false,
  onOrange: _onOrange = false,
}: {
  className?: string;
  /** Retained for call-site compatibility; the transparent PNG needs no variant. */
  inverted?: boolean;
  /** Retained for call-site compatibility; the transparent PNG needs no variant. */
  onOrange?: boolean;
}) {
  return (
    <Image
      src="/brand/mark.png"
      alt="Nexic Technologies"
      width={512}
      height={512}
      className={className}
      priority
    />
  );
}
