import { site, stats } from "@/lib/data";
import { Reveal } from "./reveal";
import { ShapedImage } from "./shaped-image";

/**
 * About hero. Light rather than dark, so the page opens differently from
 * every other section entry point on the site — and so the orange shape
 * behind the photo carries the accent instead of a glow.
 */

/** Studio photo, 1600x1200 (4:3). Undefined until artwork arrives. */
const heroImage: string | undefined = undefined;

export function AboutHero() {
  return (
    <section className="bg-paper pt-[4.5rem]">
      <div className="shell grid items-center gap-16 py-20 md:py-28 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-flare" aria-hidden="true" />
              <span className="eyebrow text-ink-muted">About us</span>
            </div>

            <h1 className="text-display mt-7 max-w-[11ch] font-display">
              We build, then we leave<span className="text-flare">.</span>
            </h1>

            <p className="mt-8 max-w-[54ch] text-[1.0625rem] leading-relaxed text-ink-muted md:text-lg">
              {site.name} is an independent software studio in Islamabad and
              Manchester. We design and build web platforms, mobile apps, and AI
              products for teams who need the thing to work — then hand it over
              documented, tested, and entirely theirs.
            </p>

            <p className="mt-5 max-w-[54ch] text-[1.0625rem] leading-relaxed text-ink-muted">
              We stay at {stats.engineers} people on purpose. There is no bench,
              no juniors learning on your budget, and nobody between you and the
              engineers doing the work.
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
