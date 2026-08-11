import { capabilities } from "@/lib/data";

/** Capability ticker — a straight full-bleed band between hero and services. */
export function Ticker() {
  return (
    <div className="border-y border-ink bg-flare py-3.5">
      <div className="flex overflow-hidden">
        <ul
          className="marquee-track flex shrink-0 items-center gap-10 pr-10"
          aria-label="Core technologies"
        >
          {[...capabilities, ...capabilities].map((tech, i) => (
            <li
              key={`${tech}-${i}`}
              aria-hidden={i >= capabilities.length}
              className="btn-label flex shrink-0 items-center gap-10 whitespace-nowrap text-ink"
            >
              {tech}
              <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
