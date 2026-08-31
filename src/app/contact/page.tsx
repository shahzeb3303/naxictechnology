import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ContactHero } from "@/components/contact-hero";
import { Faq } from "@/components/faq";
import { Offices } from "@/components/offices";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { process, site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
  description:
    "Start a project with Nexic Technologies. Offices in Islamabad and Manchester. A reply from an engineer within one business day.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <ContactHero />

        {/* Brief, the conversion point, so it sits immediately under the hero */}
        <section id="brief" className="scroll-mt-24 bg-paper-pure py-24 md:py-32">
          <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-flare" aria-hidden="true" />
                  <span className="eyebrow text-ink-muted">Send a brief</span>
                </div>

                <h2 className="text-section mt-7 max-w-[14ch] font-display">
                  Tell us what is not working
                  <span className="text-flare">.</span>
                </h2>

                <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-relaxed text-ink-muted">
                  A paragraph is enough. A forty-page spec also works. Whatever
                  you send, a person reads it.
                </p>
              </Reveal>

              {/* What happens next — removes the "then what?" hesitation */}
              <Reveal delay={0.1}>
                <ol className="mt-12 space-y-6 border-t border-line pt-8">
                  {process.slice(0, 3).map((stage, i) => (
                    <li key={stage.step} className="flex gap-4">
                      <span className="tnum eyebrow mt-1 text-flare-ink">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block font-display text-[1.0625rem] tracking-tight">
                          {i === 0
                            ? "We read it and reply"
                            : i === 1
                              ? "A 30-minute scoping call"
                              : "A written estimate"}
                        </span>
                        <span className="mt-1 block text-[0.875rem] leading-relaxed text-ink-muted">
                          {i === 0
                            ? "Within one business day, from an engineer."
                            : i === 1
                              ? "No pitch deck. We ask questions and push back."
                              : "Scope, price, and timeline in writing before anything starts."}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.06}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        <Offices />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
