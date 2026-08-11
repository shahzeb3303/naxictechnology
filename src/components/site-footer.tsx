import { ArrowUp } from "lucide-react";
import { nav, site } from "@/lib/data";
import { Wordmark } from "./wordmark";

const social = [
  { label: "GitHub", href: "#github" },
  { label: "LinkedIn", href: "#linkedin" },
  { label: "Dribbble", href: "#dribbble" },
  { label: "X", href: "#x" },
];

const legal = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Careers", href: "#careers" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <Wordmark className="h-8 w-8" />
              <span className="font-display text-base font-semibold tracking-tight">
                {site.name}
              </span>
            </div>
            <p className="mt-5 max-w-[38ch] text-sm leading-relaxed text-ink-muted">
              An independent software studio in San Francisco. We build web
              platforms, mobile apps, and AI products — then hand them over
              properly.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="eyebrow text-ink-muted">Explore</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block cursor-pointer py-1 text-sm text-ink transition-colors duration-200 hover:text-flare-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h2 className="eyebrow text-ink-muted">Social</h2>
            <ul className="mt-5 space-y-3">
              {social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block cursor-pointer py-1 text-sm text-ink transition-colors duration-200 hover:text-flare-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="eyebrow text-ink-muted">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="cursor-pointer break-all text-ink transition-colors duration-200 hover:text-flare-ink"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-ink-muted">{site.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-[0.8125rem] text-ink-muted">
            © {site.founded}–2026 {site.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {legal.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block cursor-pointer py-1.5 text-[0.8125rem] text-ink-muted transition-colors duration-200 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#main"
              aria-label="Back to top"
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
