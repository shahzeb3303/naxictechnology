import { Headset, Target, Users, Workflow } from "lucide-react";
import { reasons, site } from "@/lib/data";
import { Mosaic } from "./mosaic";
import { Reveal } from "./reveal";

const icons = {
  results: Target,
  strategy: Workflow,
  team: Users,
  support: Headset,
} as const;

export function WhyChoose() {
  return (
    <section
      id="why"
      className="scroll-mt-24 border-t border-line bg-paper-pure py-24 md:py-32"
    >
      {/* No items-start here: the right column must stretch to the row height,
          otherwise the sticky child has no room to travel. */}
      <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-flare" aria-hidden="true" />
              <span className="eyebrow text-ink-muted">Why us</span>
            </div>

            <h2 className="text-section mt-7 max-w-[18ch] font-display">
              Why choose {site.name} Web &amp; Digital
              <span className="text-flare">?</span>
            </h2>

            <p className="mt-6 max-w-[56ch] text-[1.0625rem] leading-relaxed text-ink-muted">
              Our team specialises in custom software, web platforms, and
              digital products — tailored to the problem in front of you rather
              than the one our last client had. With a focus on performance,
              clarity, and support that outlasts the launch, we help businesses
              ship and keep shipping.
            </p>
          </Reveal>

          <dl className="mt-12 border-t border-line">
            {reasons.map((reason, i) => {
              const Icon = icons[reason.id as keyof typeof icons];
              return (
                <Reveal key={reason.id} delay={i * 0.06}>
                  <div className="group flex gap-5 border-b border-line py-7">
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-paper transition-colors duration-300 group-hover:border-flare group-hover:bg-flare">
                      <Icon
                        className="h-5 w-5 text-ink"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <dt className="font-display text-[1.25rem] leading-tight tracking-tight">
                        {reason.title}
                      </dt>
                      <dd className="mt-2 max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                        {reason.body}
                      </dd>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </dl>
        </div>

        {/* Tile cluster — rides alongside the list as it scrolls */}
        <div>
          <div className="lg:sticky lg:top-28">
            <Reveal delay={0.12}>
              <Mosaic />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
