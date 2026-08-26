import { coverage, site, stats, team } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

/**
 * Faces plus timezone coverage. Both exist to answer the two questions a
 * cross-border client asks silently: who am I actually hiring, and will
 * anyone be awake when I need them.
 */
export function Team() {
  return (
    <section id="studio" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="shell">
        <SectionHead
          eyebrow="The studio"
          title="Small on purpose"
          lede={`We stay at ${stats.engineers} people so every project gets senior attention. There is no bench, no juniors learning on your budget, and no account manager between you and the engineers.`}
        />

        {/* Capped rather than spread across four columns. With two people a
            4-col grid left half the row empty and stretched each portrait to
            ~280px, which is where a small source file starts to show. */}
        <ul className="mt-16 grid max-w-md grid-cols-2 gap-x-6 gap-y-10 sm:max-w-lg sm:gap-x-8">
          {team.map((person, i) => (
            <Reveal as="li" key={person.id} delay={i * 0.06}>
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-paper-pure">
                  {person.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                      loading="lazy"
                    />
                  ) : (
                    /* Monogram stands in until portraits land. Sized and
                       cropped exactly like the real thing, so dropping in
                       photos shifts nothing. */
                    <div className="flex h-full w-full items-center justify-center bg-ink">
                      <span className="font-display text-[3rem] tracking-tight text-paper/25">
                        {person.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                </div>

                <figcaption className="mt-4">
                  <span className="block font-display text-[1.0625rem] tracking-tight">
                    {person.name}
                  </span>
                  <span className="mt-1 block text-[0.8125rem] leading-snug text-ink-muted">
                    {person.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        {/* Coverage — the timezone answer, stated before it is asked */}
        <Reveal>
          <div className="mt-20 border-t border-line pt-10">
            <p className="eyebrow text-ink-muted">Working hours</p>
            <dl className="mt-6 grid gap-8 sm:grid-cols-2">
              {coverage.map((c) => (
                <div key={c.region} className="flex items-baseline gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-flare"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-display text-[1.0625rem] tracking-tight">
                      {c.region}
                    </dt>
                    <dd className="mt-1 text-[0.8125rem] text-ink-muted">
                      {c.city} · {c.hours}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
            <p className="mt-8 max-w-[56ch] text-[0.9375rem] leading-relaxed text-ink-muted">
              Wherever you are, {site.short} staffs your project from the office
              with the most overlap — never fewer than four shared hours a day.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
