import { ArrowUpRight, Calendar, Mail } from "lucide-react";
import { site } from "@/lib/data";
import { Reveal } from "./reveal";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-line bg-paper-pure py-24 md:py-32"
    >
      <div className="shell">
        <Reveal>
          <div className="relative grain overflow-hidden rounded-3xl bg-ink px-7 py-16 text-paper md:px-16 md:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -right-16 h-[28rem] w-[28rem] rounded-full bg-flare/25 blur-[130px]"
            />

            <div className="relative max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-flare" aria-hidden="true" />
                <span className="eyebrow text-paper/60">Next steps</span>
              </div>

              <h2 className="text-section mt-7 max-w-[16ch] font-display text-paper">
                Tell us what's
                <br />
                not working<span className="text-flare">.</span>
              </h2>

              <p className="mt-6 max-w-[54ch] text-[1.0625rem] leading-relaxed text-paper/70">
                Send a paragraph or a 40-page spec. Either works. You'll get a
                real reply from an engineer within one business day, and a
                no-obligation scoping call if it looks like a fit.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex min-h-[54px] cursor-pointer items-center justify-center gap-2 rounded-full bg-flare px-8 text-[0.9375rem] font-medium text-ink transition-transform duration-200 hover:scale-[1.02]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {site.email}
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-[54px] cursor-pointer items-center justify-center gap-2 rounded-full border border-paper/25 px-8 text-[0.9375rem] font-medium text-paper transition-colors duration-200 hover:border-paper hover:bg-paper/5"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Book a 30-minute call
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <dl className="mt-14 grid gap-8 border-t border-line-dark pt-10 sm:grid-cols-3">
                <div>
                  <dt className="eyebrow text-paper/60">Studio</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-paper/80">
                    {site.address}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-paper/60">Phone</dt>
                  <dd className="mt-2 text-sm text-paper/80">{site.phone}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-paper/60">Response time</dt>
                  <dd className="mt-2 text-sm text-paper/80">
                    Within 1 business day
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
