"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/data";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile sheet so the background can't scroll away.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-flare-deep text-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(255,255,255,0.18)]" : ""
      }`}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="flex items-center gap-2.5 rounded-sm"
        >
          <Wordmark className="h-9 w-9" onOrange />
          <span className="font-display text-[0.95rem] font-semibold tracking-tight text-white">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative cursor-pointer py-1 text-sm text-white/85 transition-colors duration-200 hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="btn-label hidden cursor-pointer items-center gap-1.5 rounded-full bg-white px-5 py-3 text-ink transition-colors duration-200 hover:bg-ink hover:text-white md:inline-flex"
          >
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-white transition-colors duration-200 hover:bg-white/15 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet — stays inside the orange band so the bar reads as one block */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-white/20 bg-flare-deep md:hidden"
      >
        <nav aria-label="Mobile" className="shell flex flex-col py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[52px] items-center justify-between border-b border-white/20 font-display text-lg tracking-tight text-white"
            >
              {item.label}
              <ArrowUpRight className="h-4 w-4 text-white/70" aria-hidden="true" />
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-label mt-5 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-white px-6 text-ink"
          >
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
