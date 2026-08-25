import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

/**
 * Homepage summary of the offering. Every row links through to its full
 * write-up on /services rather than repeating the detail here.
 */
export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 md:py-32">
      <div className="shell">
        <SectionHead
          eyebrow="What we do"
          title="Eight disciplines, one team"
          lede="Build, market, and creative under one roof. The people who scope your project are the ones who write the code and answer the pager afterwards."
        />

        <ul className="mt-16 border-t border-line">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={i * 0.04}>
              <Link
                href={`/services#${service.id}`}
                className="group relative grid cursor-pointer items-start gap-5 border-b border-line py-8 transition-colors duration-300 hover:bg-paper-pure md:grid-cols-12 md:gap-8 md:py-9 md:pr-12"
              >
                {/* Orange rail that draws in on hover */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-flare transition-transform duration-400 ease-[var(--ease-out-soft)] group-hover:scale-y-100"
                />

                <div className="flex items-baseline gap-4 md:col-span-4 md:pl-6">
                  <span className="eyebrow tnum text-flare-ink">{service.index}</span>
                  <h3 className="text-[1.375rem] font-display leading-tight md:text-[1.625rem]">
                    {service.title}
                  </h3>
                </div>

                <p className="max-w-[58ch] text-[0.9375rem] leading-relaxed text-ink-muted md:col-span-5">
                  {service.summary}
                </p>

                <ul className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
                  {service.deliverables.slice(0, 3).map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-line bg-paper-pure px-3 py-1 text-[0.75rem] text-ink-muted"
                    >
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Sits in the md:pr-12 gutter the row reserves, so it never
                    lands on top of the right-aligned deliverable chips. */}
                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute right-3 top-9 hidden h-5 w-5 text-ink-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block md:-translate-x-2"
                />
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-14 flex justify-center">
            <Link
              href="/services"
              className="btn-label group inline-flex min-h-[52px] cursor-pointer items-center gap-2 rounded-full border border-ink/15 px-7 transition-colors duration-200 hover:border-ink hover:bg-ink/[0.03]"
            >
              Explore all services
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
