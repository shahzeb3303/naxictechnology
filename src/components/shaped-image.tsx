/**
 * Image with a solid shape offset behind it. The shape and the frame share the
 * same asymmetric radius — three soft corners, one exaggerated — so the pair
 * reads as one layered form rather than a photo with a border. Same corner
 * language as the tile mosaic.
 *
 * `src` is a slot: leave it undefined and a drawn placeholder holds the exact
 * frame, so dropping a photo in shifts nothing.
 */

type ShapedImageProps = {
  src?: string;
  alt?: string;
  /** Colour of the shape sitting behind the frame. */
  shape?: "flare" | "ink";
  /** Which corner gets the exaggerated radius. */
  corner?: "tr" | "tl" | "br" | "bl";
  /** Aspect of the frame. */
  ratio?: "4/3" | "1/1" | "4/5";
  className?: string;
};

const corners = {
  tr: "rounded-[2rem] rounded-tr-[6rem]",
  tl: "rounded-[2rem] rounded-tl-[6rem]",
  br: "rounded-[2rem] rounded-br-[6rem]",
  bl: "rounded-[2rem] rounded-bl-[6rem]",
} as const;

const ratios = {
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
} as const;

export function ShapedImage({
  src,
  alt = "",
  shape = "flare",
  corner = "tr",
  ratio = "4/3",
  className,
}: ShapedImageProps) {
  const radius = corners[corner];

  return (
    <div className={`relative ${className ?? ""}`}>
      {/* The offset shape. Sized to the frame and nudged out from behind it. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 ${radius} ${
          shape === "flare" ? "bg-flare" : "bg-ink"
        }`}
      />

      <div
        className={`relative overflow-hidden border border-line bg-ink-soft ${radius} ${ratios[ratio]}`}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <PlaceholderArt shape={shape} />
        )}
      </div>
    </div>
  );
}

/** Drawn stand-in, using the same grid-and-geometry family as the covers. */
function PlaceholderArt({ shape }: { shape: "flare" | "ink" }) {
  // Contrast against whichever colour is sitting behind the frame
  const accent = shape === "flare" ? "#fafaf9" : "#ff5a1f";

  return (
    <svg
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect width="480" height="360" fill="#171717" />

      <g stroke="#262626" strokeWidth="1">
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="360" />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="480" y2={i * 48} />
        ))}
      </g>

      <circle cx="336" cy="120" r="76" fill={accent} />
      <rect x="72" y="168" width="150" height="150" rx="16" fill="#fafaf9" />
      <path
        d="M264 300 L420 300"
        stroke={accent}
        strokeWidth="12"
        strokeLinecap="round"
      />
    </svg>
  );
}
