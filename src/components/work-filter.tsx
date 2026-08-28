"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mediumLabels, type Medium, type Project } from "@/lib/data";
import { ProjectArt } from "./project-art";
import { Reveal } from "./reveal";

/**
 * Filterable work index. Chips are derived from the projects themselves, so a
 * discipline only appears once there is work to show under it — no empty
 * "Video" tab sitting there advertising that the section is unfinished.
 */
export function WorkFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Medium | "all">("all");

  const available = useMemo(() => {
    const present = new Set(projects.map((p) => p.medium));
    return (Object.keys(mediumLabels) as Medium[]).filter((m) => present.has(m));
  }, [projects]);

  const shown = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.medium === active)),
    [projects, active]
  );

  return (
    <>
      {available.length > 1 && (
        <Reveal>
          <div
            role="group"
            aria-label="Filter work by discipline"
            className="mt-14 flex flex-wrap gap-2 border-b border-line pb-8"
          >
            <Chip
              label="All"
              count={projects.length}
              active={active === "all"}
              onClick={() => setActive("all")}
            />
            {available.map((m) => (
              <Chip
                key={m}
                label={mediumLabels[m]}
                count={projects.filter((p) => p.medium === m).length}
                active={active === m}
                onClick={() => setActive(m)}
              />
            ))}
          </div>
        </Reveal>
      )}

      <div className="mt-14 grid items-start gap-x-8 gap-y-16 md:grid-cols-2">
        {shown.map((project, i) => (
          <Reveal
            key={project.id}
            delay={i * 0.06}
            className={i % 2 ? "md:mt-20" : undefined}
          >
            <Card project={project} />
          </Reveal>
        ))}
      </div>

      {/* aria-live so filtering is announced rather than silently swapping */}
      <p aria-live="polite" className="sr-only">
        Showing {shown.length} of {projects.length} projects
      </p>
    </>
  );
}

function Chip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`btn-label inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border px-5 transition-colors duration-200 ${
        active
          ? "border-ink bg-ink text-paper"
          : "border-line bg-paper-pure text-ink hover:border-ink"
      }`}
    >
      {label}
      <span className={`tnum ${active ? "text-paper/60" : "text-ink-muted"}`}>
        {count}
      </span>
    </button>
  );
}

function Card({ project }: { project: Project }) {
  return (
    <article className="group h-full">
      <Link
        href={`/work/${project.id}`}
        aria-label={`${project.client}: ${project.title}`}
        className="flex h-full cursor-pointer flex-col"
      >
        <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-line">
          <div className="h-full w-full transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]">
            {project.cover ? (
              <Image
                src={project.cover}
                alt={`${project.client}: ${project.title}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <ProjectArt project={project} />
            )}
          </div>

          <span className="absolute left-4 top-4 rounded-full bg-paper-pure/90 px-3 py-1 text-[0.75rem] font-medium text-ink backdrop-blur-sm">
            {mediumLabels[project.medium]}
          </span>

          <span className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-between rounded-full bg-paper-pure px-5 py-3 opacity-0 transition-all duration-400 ease-[var(--ease-out-soft)] group-hover:translate-y-0 group-hover:opacity-100">
            <span className="btn-label text-ink">Open case</span>
            <ArrowUpRight className="h-4 w-4 text-ink" aria-hidden="true" />
          </span>
        </div>

        <div className="flex flex-1 flex-col pt-6">
          <div className="flex items-center gap-3">
            <span className="eyebrow text-flare-ink">{project.client}</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <span className="tnum text-[0.75rem] text-ink-muted">{project.year}</span>
          </div>

          <h3 className="mt-4 max-w-[24ch] font-display text-[1.375rem] leading-[1.12] tracking-tight transition-colors duration-200 group-hover:text-flare-ink md:text-[1.5rem]">
            {project.title}
          </h3>

          <p className="mt-4 max-w-[54ch] text-[0.9375rem] leading-relaxed text-ink-muted">
            {project.summary}
          </p>

          <div className="mt-6 flex items-end gap-3 border-t border-line pt-5">
            <span className="tnum font-display text-[2rem] leading-none tracking-tight">
              {project.metric.value}
            </span>
            <span className="pb-0.5 text-[0.8125rem] text-ink-muted">
              {project.metric.label}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
