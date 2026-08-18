import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "./reveal";
import { ServiceArt } from "./service-art";

/**
 * One block per service, sides alternating. Eight identical rows would read as
 * a spreadsheet; swapping the art column on odd rows keeps the eye moving and
 * gives each service its own moment.
 */
export function ServiceBlocks() {
  return (
    <div>
      {services.map((service, i) => {
        const flipped = i % 2 === 1;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-24 border-b border-line py-20 md:py-28 ${
              i % 2 === 0 ? "bg-paper" : "bg-paper-pure"
            }`}
          >
            <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Art */}
              <Reveal
                delay={0.06}
                className={`lg:col-span-5 ${flipped ? "lg:order-2" : ""}`}
              >
                <ServiceArt service={service} position={i} />
              </Reveal>

              {/* Copy */}
              <div className={`lg:col-span-7 ${flipped ? "lg:order-1" : ""}`}>
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="tnum eyebrow text-flare-ink">{service.index}</span>
                    <span className="h-px w-8 bg-flare" aria-hidden="true" />
                    <span className="eyebrow text-ink-muted">{service.tagline}</span>
                  </div>

                  <h2 className="mt-6 max-w-[18ch] font-display text-[2rem] leading-[1.05] tracking-[-0.04em] md:text-[2.75rem]">
                    {service.title}
                  </h2>

                  <p className="mt-6 max-w-[58ch] text-[1.0625rem] leading-relaxed text-ink-muted">
                    {service.summary}
                  </p>

                  {service.detail && (
                    <p className="mt-4 max-w-[58ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                      {service.detail}
                    </p>
                  )}
                </Reveal>

                {/* What you actually get */}
                {service.includes && (
                  <Reveal delay={0.08}>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span
                            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flare"
                            aria-hidden="true"
                          >
                            <Check className="h-3 w-3 text-ink" strokeWidth={3} />
                          </span>
                          <span className="text-[0.9375rem] leading-snug text-ink">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}

                <Reveal delay={0.12}>
                  <div className="mt-9 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-line pt-7">
                    {service.deliverables.map((d) => (
                      <span
                        key={d}
                        className="rounded-full border border-line bg-paper-pure px-3 py-1 text-[0.75rem] text-ink-muted"
                      >
                        {d}
                      </span>
                    ))}

                    <Link
                      href="/contact"
                      className="btn-label group ml-auto inline-flex min-h-[44px] cursor-pointer items-center gap-2 text-ink transition-colors duration-200 hover:text-flare-ink"
                    >
                      Discuss this
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
