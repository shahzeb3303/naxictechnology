import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Building2, Layers, Quote } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { DeviceMockup } from "./device-mockup";
import { MediaGallery } from "./media-gallery";
import { ProjectArt } from "./project-art";
import { Reveal } from "./reveal";
import { VideoReel } from "./video-reel";

/**
 * Marketing work has no artifact to photograph — the growth numbers are the
 * artifact. This gives them the space a screenshot would otherwise occupy.
 */
function ResultWall({ project }: { project: Project }) {
  return (
    <div className="rounded-3xl border border-line bg-ink px-7 py-14 text-paper md:px-14 md:py-20">
      <p className="eyebrow text-paper/60">What the work produced</p>
      <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
        {project.results.map((r) => (
          <div key={r.label}>
            <dt className="sr-only">{r.label}</dt>
            <dd>
              <span className="tnum block font-display text-[2.5rem] leading-none tracking-tight text-flare md:text-[3.5rem]">
                {r.value}
              </span>
              <span className="mt-3 block text-[0.8125rem] leading-snug text-paper/65">
                {r.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Numbered section, matching the 01/02/03 rhythm used across the site. */
function Chapter({
  step,
  label,
  children,
}: {
  step: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="grid gap-6 border-t border-line py-14 md:grid-cols-12 md:gap-8 md:py-16">
        <div className="md:col-span-3">
          <span className="tnum eyebrow block text-flare-ink">{step}</span>
          <span className="eyebrow mt-2 block text-ink">{label}</span>
        </div>
        <div className="md:col-span-9">{children}</div>
      </div>
    </Reveal>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  const others = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="grain relative overflow-hidden bg-ink pt-[4.5rem] text-paper">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-flare/18 blur-[130px]"
        />

        <div className="shell relative py-16 md:py-24">
          <Reveal>
            <Link
              href="/work"
              className="btn-label group inline-flex min-h-[44px] cursor-pointer items-center gap-2 text-paper/70 transition-colors duration-200 hover:text-paper"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              All work
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="eyebrow text-flare">{project.client}</span>
              <span className="h-1 w-1 rounded-full bg-paper/40" aria-hidden="true" />
              <span className="text-[0.8125rem] text-paper/60">{project.category}</span>
              <span className="h-1 w-1 rounded-full bg-paper/40" aria-hidden="true" />
              <span className="tnum text-[0.8125rem] text-paper/60">{project.year}</span>
            </div>

            <h1 className="mt-6 max-w-[20ch] font-display text-[2.25rem] leading-[0.98] tracking-[-0.05em] text-paper sm:text-[3rem] lg:text-[4.5rem]">
              {project.title}
            </h1>

            <p className="mt-8 max-w-[58ch] text-[1.0625rem] leading-relaxed text-paper/75 md:text-lg">
              {project.summary}
            </p>
          </Reveal>

          {/* Headline metrics */}
          <Reveal delay={0.1}>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-white/20 pt-10 lg:grid-cols-4">
              {project.results.map((r) => (
                <div key={r.label}>
                  <dt className="sr-only">{r.label}</dt>
                  <dd>
                    <span className="tnum block font-display text-[2.25rem] leading-none tracking-tight text-paper md:text-[3rem]">
                      {r.value}
                    </span>
                    <span className="mt-3 block text-[0.8125rem] leading-snug text-paper/60">
                      {r.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---- Showcase: the proof this discipline actually trades in ---- */}
      <section className="border-b border-line bg-paper py-20 md:py-28">
        <div className="shell">
          <Reveal>
            {/* Marketing has no artifact, so the numbers are the showcase.
                Otherwise prefer whatever real media exists — app screenshots
                arrive as finished mockups, so they belong in the gallery
                rather than inside another device frame. */}
            {project.medium === "marketing" ? (
              <ResultWall project={project} />
            ) : project.videos?.length ? (
              <VideoReel videos={project.videos} />
            ) : project.gallery?.length ? (
              <MediaGallery items={project.gallery} />
            ) : (
              <DeviceMockup project={project} />
            )}
          </Reveal>
        </div>
      </section>

      {/* ---- Chapters ---- */}
      <section className="bg-paper-pure py-8 md:py-12">
        <div className="shell">
          <Chapter step="01" label="Overview">
            <h2 className="max-w-[24ch] font-display text-[1.75rem] leading-tight tracking-[-0.03em] md:text-[2.25rem]">
              {project.overviewTitle}
            </h2>
            <p className="mt-6 max-w-[64ch] text-[1.0625rem] leading-relaxed text-ink-muted">
              {project.overview}
            </p>

            {/* Fact table */}
            <dl className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <dt className="eyebrow text-ink-muted">Client</dt>
                <dd className="mt-2 text-[0.9375rem] text-ink">{project.client}</dd>
              </div>
              <div>
                <dt className="eyebrow text-ink-muted">Year</dt>
                <dd className="tnum mt-2 text-[0.9375rem] text-ink">{project.year}</dd>
              </div>
              <div>
                <dt className="eyebrow text-ink-muted">Industry</dt>
                <dd className="mt-2 text-[0.9375rem] text-ink">{project.industry}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="eyebrow text-ink-muted">Expertise</dt>
                <dd className="mt-2 text-[0.9375rem] text-ink">
                  {project.expertise.join(", ")}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-ink-muted">Platform</dt>
                <dd className="mt-2 text-[0.9375rem] text-ink">{project.platform}</dd>
              </div>
              {project.lead && (
                <div>
                  <dt className="eyebrow text-ink-muted">Led by</dt>
                  <dd className="mt-2 text-[0.9375rem] text-ink">{project.lead}</dd>
                </div>
              )}
            </dl>

            {/* Technology */}
            <div className="mt-10 border-t border-line pt-8">
              <span className="eyebrow flex items-center gap-2 text-ink-muted">
                <Layers className="h-4 w-4 text-flare-ink" aria-hidden="true" />
                Technology
              </span>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line bg-paper px-4 py-1.5 text-[0.8125rem] text-ink"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {project.website && (
              <a
                href={project.website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-label group mt-10 inline-flex min-h-[54px] cursor-pointer items-center gap-2 rounded-full bg-ink px-8 text-paper transition-colors duration-200 hover:bg-flare hover:text-ink"
              >
                Visit the website
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            )}
          </Chapter>

          <Chapter step="02" label="The challenge">
            <p className="max-w-[64ch] text-[1.0625rem] leading-relaxed text-ink-muted">
              {project.challenge}
            </p>
          </Chapter>

          <Chapter step="03" label="Our approach">
            <p className="max-w-[64ch] text-[1.0625rem] leading-relaxed text-ink-muted">
              {project.approach}
            </p>
          </Chapter>

          <Chapter step="04" label="The outcome">
            <p className="max-w-[64ch] text-[1.0625rem] leading-relaxed text-ink-muted">
              {project.outcome}
            </p>
          </Chapter>
        </div>
      </section>

      {/* ---- Client quote ---- */}
      {project.quote && (
        <section className="bg-flare-deep py-20 text-white md:py-28">
          <div className="shell">
            <Reveal>
              <figure className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <Quote className="h-8 w-8 text-white/70" strokeWidth={1.5} aria-hidden="true" />
                  <h2 className="mt-6 max-w-[14ch] font-display text-[1.75rem] leading-tight tracking-[-0.03em] md:text-[2.25rem]">
                    Client success, in their words
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <blockquote>
                    <p className="max-w-[40ch] font-display text-[1.5rem] leading-[1.15] tracking-[-0.035em] md:text-[2.25rem]">
                      &ldquo;{project.quote.text}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-white/25 pt-6">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 font-display text-[0.9375rem]"
                    >
                      {project.quote.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <span className="text-sm leading-snug">
                      <span className="block font-medium">{project.quote.name}</span>
                      <span className="block text-white/75">{project.quote.role}</span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---- More work ---- */}
      <section className="border-t border-line bg-paper py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-flare" aria-hidden="true" />
                  <span className="eyebrow text-ink-muted">More work</span>
                </div>
                <h2 className="mt-6 max-w-[18ch] font-display text-[2rem] leading-tight tracking-[-0.04em] md:text-[2.75rem]">
                  Other things we&rsquo;ve shipped
                </h2>
              </div>

              <Link
                href="/work"
                className="btn-label group inline-flex min-h-[48px] cursor-pointer items-center gap-2 rounded-full border border-ink/15 px-6 transition-colors duration-200 hover:border-ink"
              >
                View all work
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {others.map((other, i) => (
              <Reveal as="li" key={other.id} delay={i * 0.07}>
                <Link href={`/work/${other.id}`} className="group block cursor-pointer">
                  <div className="aspect-[16/11] overflow-hidden rounded-2xl border border-line">
                    <div className="h-full w-full transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]">
                      {other.cover ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={other.cover}
                          alt={`${other.client} — ${other.title}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <ProjectArt project={other} />
                      )}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="eyebrow text-flare-ink">{other.client}</span>
                    <span className="h-px flex-1 bg-line" aria-hidden="true" />
                    <span className="flex items-center gap-1.5 text-[0.75rem] text-ink-muted">
                      <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                      {other.platform.split(" · ")[0]}
                    </span>
                  </div>

                  <h3 className="mt-3 max-w-[26ch] font-display text-[1.25rem] leading-tight tracking-tight transition-colors duration-200 group-hover:text-flare-ink">
                    {other.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
