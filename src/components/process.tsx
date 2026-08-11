import { process, stats } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function Process() {
  return (
    <section
      id="process"
      className="relative grain scroll-mt-24 overflow-hidden bg-ink py-24 text-paper md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-[30rem] w-[30rem] rounded-full bg-flare/20 blur-[140px]"
      />

      <div className="shell relative">
        <SectionHead
          inverted
          eyebrow="How we work"
          title="A process built to kill bad ideas early"
          lede="Most failed projects were doomed in week two and discovered in month six. Ours are structured so the expensive surprises surface while they're still cheap."
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark md:grid-cols-2 lg:grid-cols-4">
          {process.map((stage, i) => (
            <Reveal as="li" key={stage.step} delay={i * 0.07} className="h-full">
              <div className="group flex h-full flex-col bg-ink p-7 transition-colors duration-300 hover:bg-ink-soft md:p-8">
                <div className="flex items-center justify-between">
                  <span className="tnum font-display text-[2.5rem] leading-none text-paper/20 transition-colors duration-300 group-hover:text-flare">
                    {stage.step}
                  </span>
                  <span className="eyebrow rounded-full border border-line-dark px-2.5 py-1 text-paper/50">
                    {stage.duration}
                  </span>
                </div>

                <h3 className="mt-8 text-[1.375rem] font-display leading-tight text-paper">
                  {stage.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-paper/60">
                  {stage.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* Studio numbers */}
        <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-line-dark pt-14 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <div>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="tnum block font-display text-[3rem] leading-none tracking-tight text-paper md:text-[4rem]">
                    {stat.value}
                    <span className="text-flare">{stat.suffix || "."}</span>
                  </span>
                  <span className="mt-3 block text-sm text-paper/55">{stat.label}</span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
