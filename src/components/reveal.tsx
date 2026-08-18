"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger position in seconds — applied as a CSS transition-delay. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Scroll-triggered entrance, done in CSS.
 *
 * This used to render a motion component per element, which meant ~60 animation
 * instances and ~60 IntersectionObservers on the longer pages. The visual
 * result is identical, but now the browser runs one shared observer and a
 * plain CSS transition — the animation never touches the main thread.
 *
 * The hidden state and the transition live in globals.css under `.reveal`;
 * the `data-reveal` attribute is what the <noscript> rule keys off so the
 * content is still visible with JavaScript disabled.
 */

let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        // Reveal once, then stop watching — nothing re-hides on scroll up
        observer?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -80px 0px", threshold: 0 }
  );

  return observer;
}

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      data-reveal=""
      className={className ? `reveal ${className}` : "reveal"}
      style={
        delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined
      }
    >
      {children}
    </Tag>
  );
}
