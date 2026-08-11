import { Reveal } from "./reveal";

type SectionHeadProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  /** Flips text colours for use on the dark sections. */
  inverted?: boolean;
};

/** Shared section opener so every section keeps the same vertical rhythm. */
export function SectionHead({ eyebrow, title, lede, inverted }: SectionHeadProps) {
  return (
    <Reveal>
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        <div className="flex items-center gap-3 md:col-span-4">
          <span className="h-px w-8 bg-flare" aria-hidden="true" />
          <span className={`eyebrow ${inverted ? "text-paper/60" : "text-ink-muted"}`}>
            {eyebrow}
          </span>
        </div>

        <div className="md:col-span-8">
          <h2
            className={`text-section max-w-[20ch] font-display ${
              inverted ? "text-paper" : "text-ink"
            }`}
          >
            {title}
          </h2>
          {lede && (
            <p
              className={`mt-5 max-w-[58ch] text-[1.0625rem] leading-relaxed ${
                inverted ? "text-paper/70" : "text-ink-muted"
              }`}
            >
              {lede}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}
