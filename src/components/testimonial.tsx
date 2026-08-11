"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/data";

/**
 * One quote at a time, full width, on orange. Two small bordered cards was the
 * weakest treatment on the page; a single large pull quote is what a premium
 * studio would actually run, and the orange gives the scroll its second
 * accent beat.
 */
export function Testimonial() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];
  const go = (step: number) =>
    setIndex((i) => (i + step + testimonials.length) % testimonials.length);

  return (
    <section className="bg-flare-deep py-24 text-white md:py-32">
      <div className="shell">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-white/50" aria-hidden="true" />
          <span className="eyebrow text-white/70">Client words</span>
        </div>

        <figure className="mt-10">
          <blockquote>
            {/* aria-live so the quote is announced when the arrows swap it */}
            <p
              aria-live="polite"
              className="max-w-[22ch] font-display text-[2rem] leading-[1.05] tracking-[-0.045em] text-white sm:max-w-[26ch] sm:text-[2.75rem] lg:max-w-[30ch] lg:text-[4rem]"
            >
              &ldquo;{active.quote}&rdquo;
            </p>
          </blockquote>

          <figcaption className="mt-12 flex flex-wrap items-center justify-between gap-8 border-t border-white/25 pt-8">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/15">
                {active.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={active.photo}
                    alt={active.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-display text-[1.0625rem] text-white">
                    {active.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                )}
              </span>

              <span className="text-sm leading-snug">
                <span className="block font-medium text-white">{active.name}</span>
                <span className="block text-white/75">
                  {active.role}, {active.company}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="tnum eyebrow text-white/70">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/40 transition-colors duration-200 hover:bg-white hover:text-flare-deep"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/40 transition-colors duration-200 hover:bg-white hover:text-flare-deep"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
