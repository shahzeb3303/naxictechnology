"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

/**
 * Native <details> would be simpler, but it cannot animate its own height and
 * gives no control over the icon state, so this is a controlled disclosure
 * with the matching ARIA wiring.
 */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-line bg-paper py-24 md:py-32">
      <div className="shell">
        <SectionHead
          eyebrow="Questions"
          title="The things clients ask first"
          lede="If your question is not here, send it over — you will get a straight answer, not a discovery call."
        />

        <ul className="mt-16 border-t border-line">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={faq.q} delay={i * 0.04}>
                <div className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-trigger-${i}`}
                      className="flex w-full cursor-pointer items-start justify-between gap-6 py-7 text-left"
                    >
                      <span className="max-w-[34ch] font-display text-[1.25rem] leading-tight tracking-tight md:text-[1.5rem]">
                        {faq.q}
                      </span>
                      <span
                        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? "border-flare bg-flare text-ink"
                            : "border-line text-ink-muted"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <Plus className="h-4 w-4" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    hidden={!isOpen}
                  >
                    <p className="max-w-[64ch] pb-8 pr-12 text-[0.9375rem] leading-relaxed text-ink-muted md:text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
