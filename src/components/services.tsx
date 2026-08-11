import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 md:py-32">
      <div className="shell">
        <SectionHead
          eyebrow="What we do"
          title="Four disciplines, one team"
          lede="No handoffs between agencies. The people who scope your project are the ones who write the code and answer the pager afterwards."
        />

        <ul className="mt-16 border-t border-line">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={i * 0.06}>
              <div className="group relative grid cursor-default items-start gap-5 border-b border-line py-9 transition-colors duration-300 hover:bg-paper-pure md:grid-cols-12 md:gap-8 md:py-11">
                {/* Orange rail that draws in on hover */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-flare transition-transform duration-400 ease-[var(--ease-out-soft)] group-hover:scale-y-100"
                />

                <div className="flex items-baseline gap-4 md:col-span-4 md:pl-6">
                  <span className="eyebrow tnum text-flare-ink">{service.index}</span>
                  <h3 className="text-[1.5rem] font-display leading-tight md:text-[1.75rem]">
                    {service.title}
                  </h3>
                </div>

                <p className="max-w-[58ch] text-[0.9375rem] leading-relaxed text-ink-muted md:col-span-5 md:text-base">
                  {service.summary}
                </p>

                <ul className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-line bg-paper-pure px-3 py-1 text-[0.75rem] text-ink-muted"
                    >
                      {d}
                    </li>
                  ))}
                </ul>

                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute right-0 top-9 hidden h-5 w-5 text-ink-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block md:-translate-x-2"
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
