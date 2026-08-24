import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { nav, site } from "@/lib/data";
import { Wordmark } from "./wordmark";

/**
 * Real destinations only. A footer link that goes nowhere costs more trust
 * than the missing link does — and a dead Privacy link is a compliance
 * question, not just a polish one. Add entries as the pages and profiles
 * actually exist.
 */
const social: { label: string; href: string }[] = [];

const legal: { label: string; href: string }[] = [];

/** Dark, to bookend the dark hero and close the page on a solid edge. */
export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden bg-ink text-paper">
      <div className="shell relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <Wordmark className="h-8 w-8" inverted />
              <span className="font-display text-base font-semibold tracking-tight text-paper">
                {site.name}
              </span>
            </div>
            <p className="mt-5 max-w-[38ch] text-sm leading-relaxed text-paper/60">
              An independent software studio in Islamabad and Manchester. We build web
              platforms, mobile apps, and AI products — then hand them over
              properly.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="eyebrow text-paper/50">Explore</h2>
            <ul className="mt-5 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block cursor-pointer py-1 text-sm text-paper/85 transition-colors duration-200 hover:text-flare"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={social.length ? "md:col-span-2" : "hidden"}>
            <h2 className="eyebrow text-paper/50">Social</h2>
            <ul className="mt-5 space-y-2">
              {social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block cursor-pointer py-1 text-sm text-paper/85 transition-colors duration-200 hover:text-flare"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="eyebrow text-paper/50">Contact</h2>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-block cursor-pointer break-all py-1 text-paper/85 transition-colors duration-200 hover:text-flare"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-paper/60">{site.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-line-dark pt-8 sm:flex-row sm:items-center">
          <p className="text-[0.8125rem] text-paper/55">
            © {site.founded}–2026 {site.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {legal.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block cursor-pointer py-1.5 text-[0.8125rem] text-paper/55 transition-colors duration-200 hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#main"
              aria-label="Back to top"
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line-dark transition-colors duration-200 hover:border-flare hover:bg-flare hover:text-ink"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
