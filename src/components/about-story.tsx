import { milestones, statBlocks, values } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";
import { ShapedImage } from "./shaped-image";

/** Orange band. Same figures as everywhere else — one source in data.ts. */
export function AboutStats() {
  return (
    <section className="bg-flare-deep py-16 text-white md:py-20">
      <div className="shell">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {statBlocks.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <div>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="tnum block font-display text-[2.75rem] leading-none tracking-[-0.05em] md:text-[3.5rem]">
                    {stat.value}
                  </span>
                  <span className="mt-3 block text-[0.875rem] text-white/75">
                    {stat.label}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** Founding story as a dated timeline rather than three paragraphs of prose. */
export function AboutStory() {
  // Nexic was founded in 2026 — there is no history to date yet. Render nothing
  // rather than an invented timeline; the section returns as milestones land.
  if (milestones.length === 0) return null;

  return (
    <section className="bg-paper-pure py-24 md:py-32">
      <div className="shell">
        <SectionHead
          eyebrow="How we got here"
          title="How we got here"
          lede="We have turned down more work than we have taken. That is the whole strategy — stay small enough that senior people are on every project rather than supervising from a distance."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <ol className="lg:col-span-7">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 0.06}>
                <div className="grid gap-4 border-t border-line py-8 sm:grid-cols-12 sm:gap-8">
                  <span className="tnum eyebrow text-flare-ink sm:col-span-3">
                    {m.year}
                  </span>
                  <div className="sm:col-span-9">
                    <h3 className="font-display text-[1.25rem] leading-tight tracking-tight">
                      {m.title}
                    </h3>
                    <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                      {m.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="pb-4 pr-4 md:pb-6 md:pr-6 lg:sticky lg:top-28">
              <ShapedImage shape="ink" corner="bl" ratio="4/5" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** What we actually argue about internally, stated plainly. */
export function AboutValues() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-24 text-paper md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-[30rem] w-[30rem] rounded-full bg-flare/20 blur-[140px]"
      />

      <div className="shell relative">
        <SectionHead
          inverted
          eyebrow="What we believe"
          title="Four things we will not trade away"
          lede="These are not posters on a wall. Each one has cost us work at some point, which is roughly how you know a value is real."
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark md:grid-cols-2">
          {values.map((value, i) => (
            <Reveal as="li" key={value.id} delay={i * 0.06} className="h-full">
              <div className="group flex h-full flex-col bg-ink p-8 transition-colors duration-300 hover:bg-ink-soft md:p-10">
                <span className="tnum font-display text-[2rem] leading-none text-paper/20 transition-colors duration-300 group-hover:text-flare">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 max-w-[20ch] font-display text-[1.375rem] leading-tight tracking-tight text-paper">
                  {value.title}
                </h3>
                <p className="mt-3 max-w-[48ch] text-[0.9375rem] leading-relaxed text-paper/65">
                  {value.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
