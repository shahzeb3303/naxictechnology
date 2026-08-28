import { ArrowUpRight } from "lucide-react";
import { services, stats } from "@/lib/data";
import { Reveal } from "./reveal";

/**
 * Services hero. Doubles as an index — with eight disciplines, a jump list
 * beats making people scroll blind to find the one they came for.
 */
export function ServicesHero() {
  return (
    <section className="grain relative overflow-hidden bg-ink pt-[4.5rem] text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-[32rem] w-[32rem] rounded-full bg-flare/18 blur-[130px]"
      />

      <div className="shell relative py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-flare" aria-hidden="true" />
            <span className="eyebrow text-paper/60">What we do</span>
          </div>

          <h1 className="text-display mt-7 max-w-[14ch] font-display text-paper">
            Eight disciplines, one team<span className="text-flare">.</span>
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-10 border-t border-white/20 pt-8 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-6">
            <p className="max-w-[54ch] text-[1.0625rem] leading-relaxed text-paper/75 md:text-lg">
              Build, market, and creative under one roof, so the people who
              design the thing are the people who ship it and the people who
              promote it. No handoffs between three agencies who have never
              spoken to each other.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-6">
            <dl className="flex flex-wrap items-baseline gap-x-8 gap-y-3 md:justify-end">
              {[
                { v: stats.projects, l: "projects delivered" },
                { v: stats.clients, l: "clients worldwide" },
                { v: stats.retention, l: "come back" },
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

        {/* Jump index */}
        <Reveal delay={0.14}>
          <nav aria-label="Services" className="mt-14 border-t border-white/20 pt-8">
            <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    className="group flex items-center gap-3 py-2.5 text-paper/75 transition-colors duration-200 hover:text-paper"
                  >
                    <span className="tnum eyebrow text-flare">{service.index}</span>
                    <span className="text-[0.9375rem]">{service.title}</span>
                    <ArrowUpRight
                      className="ml-auto h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
