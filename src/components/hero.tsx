"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/data";

const HEADLINE = ["We build", "software that", "ships."];

export function Hero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video drifts slower than the page and scales gently — the parallax
  // separates foreground type from background footage.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // A looping background clip is exactly the kind of motion the reduced-motion
  // preference exists to stop. Hold frame one instead of autoplaying.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduced) v.pause();
    else void v.play().catch(() => {});
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pt-[4.5rem] text-paper"
    >
      {/* Footage */}
      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { y: videoY, scale: videoScale }}
        className="absolute inset-0 -z-20 h-full w-full will-change-transform"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay={!reduced}
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
        />
      </motion.div>

      {/* Legibility stack: a vertical gradient for the type, plus a flat floor
          so the ticker seam never lands on a bright frame. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/60 to-ink/95"
      />
      <div aria-hidden="true" className="grain absolute inset-0 -z-10" />

      <motion.div
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        className="shell relative w-full pb-14 pt-24 md:pb-20 md:pt-32"
      >
        {/* Availability pill */}
        <Masked delay={0} reduced={reduced}>
          <span className="mb-9 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 py-1.5 pl-2 pr-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              {!reduced && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flare opacity-70" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-flare" />
            </span>
            <span className="text-[0.8125rem] text-paper/90">
              Taking on 2 new projects for Q3
            </span>
          </span>
        </Masked>

        <h1 className="text-display max-w-[15ch] font-display text-paper">
          {HEADLINE.map((text, i) => (
            <Masked key={text} delay={0.08 * (i + 1)} reduced={reduced}>
              {i === 2 ? (
                <span>
                  ships<span className="text-flare">.</span>
                </span>
              ) : (
                text
              )}
            </Masked>
          ))}
        </h1>

        {/* Layout lives on plain wrappers — Masked only supplies the clipping
            box, so putting flex classes on it would strand the children. */}
        <div className="mt-12 grid gap-10 border-t border-white/20 pt-8 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <Masked as="div" delay={0.36} reduced={reduced}>
              <p className="max-w-[52ch] text-[1.0625rem] leading-relaxed text-paper/75 md:text-lg">
                {site.name} is an independent studio of 24 engineers and
                designers. We partner with founders and product teams to turn
                ambitious briefs into systems that survive contact with real
                users — then hand them over documented, tested, and yours.
              </p>
            </Masked>
          </div>

          <div className="flex flex-col items-start gap-6 md:col-span-6 md:items-end">
            <Masked as="div" delay={0.44} reduced={reduced}>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="btn-label group inline-flex min-h-[52px] cursor-pointer items-center gap-2 rounded-full bg-flare px-7 text-ink transition-transform duration-200 hover:scale-[1.03]"
                >
                  Start a project
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#work"
                  className="btn-label inline-flex min-h-[52px] cursor-pointer items-center gap-2 rounded-full border border-white/30 px-7 text-paper transition-colors duration-200 hover:border-white hover:bg-white/10"
                >
                  See our work
                  <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </Masked>

            <Masked as="div" delay={0.52} reduced={reduced}>
              <p className="eyebrow text-paper/60">
                Est. {site.founded} · San Francisco
              </p>
            </Masked>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/**
 * One line of type inside an overflow-hidden box, sliding up from below its
 * own baseline. Collapses to a plain element when motion is reduced.
 */
function Masked({
  children,
  delay,
  reduced,
  as = "span",
  className,
}: {
  children: React.ReactNode;
  delay: number;
  reduced: boolean | null;
  as?: "span" | "div";
  className?: string;
}) {
  const Tag = as;

  if (reduced) return <Tag className={className}>{children}</Tag>;

  const Inner = as === "div" ? motion.div : motion.span;

  return (
    <Tag className={`line-mask ${className ?? ""}`}>
      <Inner
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {children}
      </Inner>
    </Tag>
  );
}
