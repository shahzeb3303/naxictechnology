import { scale } from "@/lib/data";
import { Reveal } from "./reveal";

/**
 * A single-sentence scale statement. It sits on its own between the ticker
 * and the services list so the two numbers land without competing with a
 * heading, a lede, or a CTA.
 */
export function ScaleBanner() {
  return (
    <section className="border-b border-line bg-paper py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <p className="text-section max-w-[22ch] font-display text-ink">
            We&rsquo;ve worked on over{" "}
            <span className="tnum text-flare-ink">{scale.projects}</span>{" "}
            projects with{" "}
            <span className="tnum text-flare-ink">{scale.clients}</span>{" "}
            clients<span className="text-flare">.</span>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[54ch] text-[1.0625rem] leading-relaxed text-ink-muted">
            Nine years, four continents, and a client list that ranges from
            two-person startups to banks older than the internet. The work below
            is a small, deliberate sample.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
