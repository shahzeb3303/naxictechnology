import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Ticker } from "@/components/ticker";
import { WorkFilter } from "@/components/work-filter";
import { Reveal } from "@/components/reveal";
import { BreadcrumbLd } from "@/components/jsonld";
import { projects, site, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: `Work | ${site.name}`,
  description:
    "Case studies from Nexic Technologies: paid social and LinkedIn campaigns, brand and social design, e-commerce storefronts, and Flutter apps.",
  alternates: { canonical: `${site.url}/work` },
};

export default function WorkPage() {
  return (
    <>
      <BreadcrumbLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ]}
      />
      <SiteHeader />
      <main id="main">
        <section className="grain relative overflow-hidden bg-ink pt-[4.5rem] text-paper">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-flare/18 blur-[130px]"
          />

          <div className="shell relative py-20 md:py-28">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-flare" aria-hidden="true" />
                <span className="eyebrow text-paper/60">Selected work</span>
              </div>

              <h1 className="text-display mt-7 max-w-[13ch] font-display text-paper">
                Proof, not promises<span className="text-flare">.</span>
              </h1>
            </Reveal>

            <div className="mt-12 grid gap-10 border-t border-white/20 pt-8 md:grid-cols-12 md:gap-8">
              <Reveal className="md:col-span-7">
                <p className="max-w-[54ch] text-[1.0625rem] leading-relaxed text-paper/75 md:text-lg">
                  A sample of what we&rsquo;ve shipped. Each one started as a
                  problem someone had already tried to solve twice. Open any
                  case study for the challenge, the approach, and the numbers
                  that came out the other side.
                </p>
              </Reveal>

              <Reveal delay={0.08} className="md:col-span-5">
                <dl className="flex flex-wrap items-baseline gap-x-8 gap-y-3 md:justify-end">
                  {[
                    { v: stats.projects, l: "projects delivered" },
                    { v: stats.clients, l: "clients worldwide" },
                  ].map((s) => (
                    <div key={s.l} className="flex items-baseline gap-2">
                      <dt className="sr-only">{s.l}</dt>
                      <dd className="flex items-baseline gap-2">
                        <span className="tnum font-display text-[1.75rem] leading-none tracking-tight text-paper">
                          {s.v}
                        </span>
                        <span className="text-[0.8125rem] text-paper/60">{s.l}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        <Ticker />

        <section className="bg-paper-pure py-20 md:py-24">
          <div className="shell">
            <WorkFilter projects={projects} />
          </div>
        </section>

        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
