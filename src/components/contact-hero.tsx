import { ArrowDown, Clock, Mail, Phone } from "lucide-react";
import { site } from "@/lib/data";
import { Reveal } from "./reveal";

/**
 * Contact hero. Mirrors the homepage hero's dark, grainy treatment so the two
 * pages read as one site, but drops the video — a contact page should get to
 * the point.
 *
 * The right column is an image slot: drop a path into `heroImage` in
 * src/lib/data.ts (or swap the constant below) and it takes over from the
 * drawn placeholder without shifting the layout.
 */

/** Studio photo, 1200x1500 (4:5). Undefined until artwork arrives. */
const heroImage: string | undefined = undefined;

export function ContactHero() {
  return (
    <section className="grain relative overflow-hidden bg-ink pt-[4.5rem] text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-20 h-[30rem] w-[30rem] rounded-full bg-flare/18 blur-[130px]"
      />

      <div className="shell relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        {/* Copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-flare" aria-hidden="true" />
              <span className="eyebrow text-paper/60">Contact</span>
            </div>

            <h1 className="text-display mt-7 max-w-[12ch] font-display text-paper">
              Let&rsquo;s build
              <br />
              something
              <br />
              real<span className="text-flare">.</span>
            </h1>

            <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-relaxed text-paper/75 md:text-lg">
              Tell us what is not working, what you have already tried, and what
              &ldquo;done&rdquo; looks like. You will get a reply from an
              engineer — not a sales rep — within one business day.
            </p>
          </Reveal>

          {/* Direct lines, for people who would rather not fill in a form */}
          <Reveal delay={0.1}>
            <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="btn-label inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-flare px-7 text-ink transition-transform duration-200 hover:scale-[1.03] sm:w-auto"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="btn-label inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 px-7 text-paper transition-colors duration-200 hover:border-white hover:bg-white/10 sm:w-auto"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href="#brief"
                  className="btn-label inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 px-7 text-paper transition-colors duration-200 hover:border-white hover:bg-white/10 sm:w-auto"
                >
                  Send a brief
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 flex items-center gap-2 text-[0.8125rem] text-paper/55">
              <Clock className="h-4 w-4 text-flare" aria-hidden="true" />
              Typical first reply: under 1 business day
            </p>
          </Reveal>
        </div>

        {/* Image slot */}
        <Reveal delay={0.12} className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line-dark bg-ink-soft">
            {heroImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={heroImage}
                alt="The Nexic Technologies studio"
                className="h-full w-full object-cover"
              />
            ) : (
              <PlaceholderArt />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Drawn stand-in using the same geometry as the project covers, so the page
 * looks finished before photography exists.
 */
function PlaceholderArt() {
  return (
    <svg
      viewBox="0 0 480 600"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect width="480" height="600" fill="#171717" />

      <g stroke="#262626" strokeWidth="1">
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="600" />
        ))}
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="480" y2={i * 48} />
        ))}
      </g>

      <circle cx="312" cy="192" r="96" fill="#ff5a1f" />
      <rect x="72" y="288" width="168" height="168" rx="16" fill="#fafaf9" />
      <path
        d="M96 528 L384 528"
        stroke="#ff5a1f"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </svg>
  );
}
