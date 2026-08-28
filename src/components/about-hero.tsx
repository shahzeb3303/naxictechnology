import { site } from "@/lib/data";
import { Reveal } from "./reveal";
import { ShapedImage } from "./shaped-image";

/**
 * About hero. Dark, matching services, contact, work and blog — every page
 * on the site opens on ink, and this one opening on paper read as a different
 * site rather than as variety.
 */

/** Studio photo, 1600x1200 (4:3). Undefined until artwork arrives. */
const heroImage: string | undefined = undefined;

export function AboutHero() {
  return (
    <section className="grain relative overflow-hidden bg-ink pt-[4.5rem] text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-[32rem] w-[32rem] rounded-full bg-flare/18 blur-[130px]"
      />

      <div className="shell relative grid items-center gap-16 py-20 md:py-28 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-flare" aria-hidden="true" />
              <span className="eyebrow text-paper/60">About us</span>
            </div>

            <h1 className="text-display mt-7 max-w-[13ch] font-display text-paper">
              We sell it. We also build it<span className="text-flare">.</span>
            </h1>

            <p className="mt-8 max-w-[54ch] text-[1.0625rem] leading-relaxed text-paper/75 md:text-lg">
              {site.name} is a marketing agency with a build team inside it. We
              run paid advertising, SEO and content for brands in Pakistan and
              the UK, and we design and build the websites, apps, video and
              creative those campaigns depend on.
            </p>

            <p className="mt-5 max-w-[54ch] text-[1.0625rem] font-medium leading-relaxed text-paper">
              That combination is rarer than it sounds.
            </p>

            <p className="mt-5 max-w-[54ch] text-[1.0625rem] leading-relaxed text-paper/75">
              Most agencies hand the website to someone else and hope it
              converts. Most studios can build the thing but have never bought a
              click in their lives. We do both, in one team across Islamabad and
              Manchester.
            </p>

            <p className="mt-5 max-w-[54ch] text-[1.0625rem] leading-relaxed text-paper/75">
              No subcontractors, no account manager relaying messages. You talk
              to the people doing the work.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6">
          {/* The shape sits behind and offset — pr/pb reserve room for it */}
          <div className="pb-4 pr-4 md:pb-6 md:pr-6">
            <ShapedImage
              src={heroImage}
              alt={`The ${site.short} team at work`}
              shape="flare"
              corner="tr"
              ratio="4/3"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
