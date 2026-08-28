import type { Project } from "@/lib/data";
import { ProjectArt } from "./project-art";

/**
 * Desktop frame with a phone overlapping it — the standard way to show a
 * responsive build in one image. Both screens are slots: set
 * `project.shots.desktop` (1600x1000) and `.mobile` (750x1500) and they take
 * over from the drawn placeholder without any layout change.
 */
export function DeviceMockup({ project }: { project: Project }) {
  const desktop = project.shots?.desktop;
  const mobile = project.shots?.mobile;

  return (
    <div className="relative pb-16 pr-6 sm:pb-20 sm:pr-0">
      {/* Desktop */}
      <div className="relative w-full overflow-hidden rounded-xl border border-line-dark bg-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.55)] sm:rounded-2xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-line-dark bg-ink-soft px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" aria-hidden="true" />
          {project.website && (
            <span className="ml-4 truncate rounded-full bg-white/10 px-3 py-0.5 text-[0.6875rem] text-paper/60">
              {project.website.label}
            </span>
          )}
        </div>

        <div className="aspect-[16/10] w-full">
          {desktop ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={desktop}
              alt={`${project.client} desktop interface`}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          ) : (
            <ProjectArt project={project} />
          )}
        </div>
      </div>

      {/* Phone, overlapping the desktop's bottom-right corner */}
      <div className="absolute -bottom-2 right-0 w-[26%] max-w-[190px] sm:-right-6 sm:bottom-4">
        <div className="overflow-hidden rounded-[1.25rem] border-[3px] border-ink bg-ink shadow-[0_24px_48px_-20px_rgba(0,0,0,0.6)] sm:rounded-[1.75rem] sm:border-4">
          <div className="aspect-[9/18] w-full bg-ink-soft">
            {mobile ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={mobile}
                alt={`${project.client} mobile interface`}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            ) : (
              <MobilePlaceholder tone={project.tone} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobilePlaceholder({ tone }: { tone: Project["tone"] }) {
  const palettes = {
    ink: { bg: "#0a0a0a", line: "#242424", solid: "#fafaf9", accent: "#ff5a1f" },
    flare: { bg: "#ff5a1f", line: "rgba(10,10,10,0.2)", solid: "#0a0a0a", accent: "#fafaf9" },
    paper: { bg: "#f3f2f1", line: "#dedbd8", solid: "#0a0a0a", accent: "#ff5a1f" },
  } as const;
  const c = palettes[tone];

  return (
    <svg
      viewBox="0 0 180 360"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect width="180" height="360" fill={c.bg} />
      <g stroke={c.line} strokeWidth="1">
        {Array.from({ length: 5 }, (_, i) => (
          <line key={`v${i}`} x1={i * 45} y1="0" x2={i * 45} y2="360" />
        ))}
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 45} x2="180" y2={i * 45} />
        ))}
      </g>
      <circle cx="120" cy="96" r="42" fill={c.accent} />
      <rect x="24" y="168" width="84" height="84" rx="12" fill={c.solid} />
      <rect x="24" y="288" width="108" height="8" rx="4" fill={c.accent} />
    </svg>
  );
}
