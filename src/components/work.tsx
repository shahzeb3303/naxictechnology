import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, stats, type Project } from "@/lib/data";
import { ProjectArt } from "./project-art";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <article className="group h-full">
      <Link
        href={`/work/${project.id}`}
        aria-label={`${project.client} — ${project.title}`}
        className="flex h-full cursor-pointer flex-col"
      >
        {/* Cover */}
        <div
          className={`relative overflow-hidden rounded-2xl border border-line ${
            featured ? "aspect-[16/10]" : "aspect-[16/11]"
          }`}
        >
          <div className="h-full w-full transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]">
            {project.cover ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.cover}
                alt={`${project.client} — ${project.title}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <ProjectArt project={project} />
            )}
          </div>

          {/* Year chip */}
          <span className="absolute left-4 top-4 rounded-full bg-paper-pure/90 px-3 py-1 text-[0.75rem] font-medium text-ink backdrop-blur-sm">
            {project.year}
          </span>

          {/* "Open case" rides in from the bottom edge on hover — a label
              reads as an invitation where a bare arrow reads as decoration. */}
          <span className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-between rounded-full bg-paper-pure px-5 py-3 opacity-0 transition-all duration-400 ease-[var(--ease-out-soft)] group-hover:translate-y-0 group-hover:opacity-100">
            <span className="btn-label text-ink">Open case</span>
            <ArrowUpRight className="h-4 w-4 text-ink" aria-hidden="true" />
          </span>
        </div>

        {/* Meta */}
        <div className="flex flex-1 flex-col pt-6">
          <div className="flex items-center gap-3">
            <span className="eyebrow text-flare-ink">{project.client}</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <span className="text-[0.75rem] text-ink-muted">{project.category}</span>
          </div>

          <h3
            className={`mt-4 max-w-[24ch] font-display leading-[1.12] transition-colors duration-200 group-hover:text-flare-ink ${
              featured ? "text-[1.75rem] md:text-[2.125rem]" : "text-[1.375rem] md:text-[1.5rem]"
            }`}
          >
            {project.title}
          </h3>

          <p className="mt-4 max-w-[54ch] text-[0.9375rem] leading-relaxed text-ink-muted">
            {project.summary}
          </p>

          {/* Headline metric — the reason the case study exists */}
          <div className="mt-6 flex items-end gap-3 border-t border-line pt-5">
            <span className="tnum font-display text-[2rem] leading-none tracking-tight">
              {project.metric.value}
            </span>
            <span className="pb-0.5 text-[0.8125rem] text-ink-muted">
              {project.metric.label}
            </span>
          </div>

          <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1.5">
            {project.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-line px-2.5 py-0.5 text-[0.6875rem] tracking-wide text-ink-muted"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}

/**
 * `showHead` is off on /work, where the page hero already carries the
 * heading — running both would say the same thing twice in a row.
 */
export function Work({ showHead = true }: { showHead?: boolean } = {}) {
  /**
   * The homepage shows a curated four, not the whole catalogue. Twelve cards at
   * identical weight is what made the portfolio unreadable — a visitor scanning
   * for proof could not tell which piece we would want them to judge us on.
   * /work carries the full set behind discipline filters.
   */
  const shown = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="work" className="scroll-mt-24 border-t border-line bg-paper-pure py-24 md:py-32">
      <div className="shell">
        {showHead && (
          <SectionHead
            eyebrow="Selected work"
            title="Our best work"
            lede="Four pieces that show the range — paid social that moved revenue, a storefront, and a product build. The rest are on the work page."
          />
        )}

        {/* Odd cards drop half a step so the columns never read as a table.
            Only above md, where there are actually two columns to offset. */}
        <div className="mt-16 grid items-start gap-x-8 gap-y-16 md:grid-cols-2">
          {shown.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className={i % 2 ? "md:mt-20" : undefined}>
              <ProjectCard project={p} featured />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex justify-center">
            <Link
              href="/work"
              className="group inline-flex min-h-[52px] cursor-pointer items-center gap-2 rounded-full border border-ink/15 px-7 text-[0.9375rem] font-medium transition-colors duration-200 hover:border-ink hover:bg-ink/[0.03]"
            >
              View all {stats.projects} projects
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
