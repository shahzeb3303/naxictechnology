import { Quote } from "lucide-react";
import { clients, testimonials } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function Studio() {
  return (
    <section id="studio" className="scroll-mt-24 py-24 md:py-32">
      <div className="shell">
        <SectionHead
          eyebrow="The studio"
          title="Small on purpose"
          lede="We stay at two dozen people so every project gets senior attention. There is no bench, no juniors learning on your budget, and no account manager between you and the engineers."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-paper-pure p-8 md:p-10">
                <Quote
                  className="h-7 w-7 shrink-0 text-flare"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <blockquote className="mt-6 flex-1">
                  <p className="text-[1.25rem] font-display leading-[1.35] tracking-[-0.02em] md:text-[1.5rem]">
                    “{t.quote}”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                  {/* Monogram stands in for a headshot */}
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-medium text-paper"
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span className="text-sm leading-snug">
                    <span className="block font-medium text-ink">{t.name}</span>
                    <span className="block text-ink-muted">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Client roster */}
        <Reveal>
          <div className="mt-20 border-t border-line pt-12">
            <p className="eyebrow text-center text-ink-muted">
              Trusted by teams at
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {clients.map((client) => (
                <li
                  key={client}
                  className="text-center font-display text-[1.0625rem] tracking-tight text-ink-muted transition-colors duration-300 hover:text-ink md:text-[1.25rem]"
                >
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
