/**
 * Nexic mark — a monogram "N" cut from a solid square, with the ascending
 * stroke carrying the brand orange. Pure geometry, so it stays crisp at
 * favicon size and inverts cleanly on dark sections.
 */
export function Wordmark({
  className,
  inverted = false,
  onOrange = false,
}: {
  className?: string;
  inverted?: boolean;
  /** On the orange header the mark goes white-on-ink so it stays legible. */
  onOrange?: boolean;
}) {
  if (onOrange) {
    return (
      <svg
        viewBox="0 0 32 32"
        className={className}
        role="img"
        aria-label="Nexic Technologies"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="7" fill="#ffffff" />
        <rect x="8" y="8" width="3.4" height="16" rx="1.2" fill="#0a0a0a" />
        <path d="M11.4 8.4 L14.6 8.4 L23.2 23.6 L20 23.6 Z" fill="#c24f20" />
        <rect x="20.6" y="8" width="3.4" height="16" rx="1.2" fill="#0a0a0a" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Nexic Technologies"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="32"
        height="32"
        rx="7"
        fill={inverted ? "#fafaf9" : "#0a0a0a"}
      />
      {/* Left stem */}
      <rect x="8" y="8" width="3.4" height="16" rx="1.2" fill={inverted ? "#0a0a0a" : "#fafaf9"} />
      {/* Diagonal — the orange carries the eye upward */}
      <path d="M11.4 8.4 L14.6 8.4 L23.2 23.6 L20 23.6 Z" fill="#ff5a1f" />
      {/* Right stem */}
      <rect
        x="20.6"
        y="8"
        width="3.4"
        height="16"
        rx="1.2"
        fill={inverted ? "#0a0a0a" : "#fafaf9"}
      />
    </svg>
  );
}
