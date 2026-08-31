import { Mail, MapPin, Phone } from "lucide-react";
import { contactChannels, offices } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function Offices() {
  return (
    <section id="offices" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="shell">
        <SectionHead
          eyebrow="Where we are"
          title="Two offices, one team"
          lede="Projects are staffed from the office with the most overlap with you, never fewer than four shared working hours a day."
        />

        <ul className="mt-16 grid gap-8 md:grid-cols-2">
          {offices.map((office, i) => (
            <Reveal as="li" key={office.id} delay={i * 0.07}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper-pure">
                {/* Photo slot. Deliberately a short band rather than 4:3 — the
                    abstract art is decoration and was taking more of the card
                    than the address it sits above. */}
                <div className="relative aspect-[16/5] overflow-hidden border-b border-line">
                  {office.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={office.photo}
                      alt={`${site_alt(office.city)}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <OfficeArt seed={i} />
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-paper-pure/90 px-3 py-1 text-[0.75rem] font-medium text-ink backdrop-blur-sm">
                    {office.country}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-[1.75rem] leading-tight tracking-tight md:text-[2rem]">
                    {office.city}
                  </h3>

                  <address className="mt-5 space-y-4 text-[1rem] not-italic leading-relaxed text-ink-muted">
                    <span className="flex gap-3">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-flare-ink"
                        aria-hidden="true"
                      />
                      <span>
                        {office.address.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </span>

                    <span className="flex gap-3">
                      <Phone
                        className="mt-0.5 h-4 w-4 shrink-0 text-flare-ink"
                        aria-hidden="true"
                      />
                      <a
                        href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                        className="cursor-pointer transition-colors duration-200 hover:text-ink"
                      >
                        {office.phone}
                      </a>
                    </span>

                    <span className="flex gap-3">
                      <Mail
                        className="mt-0.5 h-4 w-4 shrink-0 text-flare-ink"
                        aria-hidden="true"
                      />
                      <a
                        href={`mailto:${office.email}`}
                        className="cursor-pointer transition-colors duration-200 hover:text-ink"
                      >
                        {office.email}
                      </a>
                    </span>
                  </address>

                  <p className="mt-auto border-t border-line pt-5 text-[0.8125rem] text-ink-muted">
                    <span className="eyebrow text-ink">Hours</span>
                    <span className="mt-1.5 block">{office.hours}</span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Routed inboxes. Hidden while there is a single mailbox: three
            cards carrying the same address under a heading that promises
            routing reads as broken. */}
        {contactChannels.length > 0 && (
        <Reveal>
          <div className="mt-20 border-t border-line pt-12">
            <p className="eyebrow text-ink-muted">Or write to the right inbox</p>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
              {contactChannels.map((channel) => (
                <li key={channel.id} className="bg-paper-pure p-7">
                  <h3 className="font-display text-[1.125rem] tracking-tight">
                    {channel.label}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">
                    {channel.detail}
                  </p>
                  <a
                    href={`mailto:${channel.email}`}
                    className="mt-4 inline-block cursor-pointer py-1 text-[0.875rem] font-medium text-flare-ink transition-colors duration-200 hover:text-ink"
                  >
                    {channel.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        )}
      </div>
    </section>
  );
}

function site_alt(city: string) {
  return `The Nexic Technologies office in ${city}`;
}

/** Drawn stand-in for office photography — same geometry family as the rest. */
function OfficeArt({ seed }: { seed: number }) {
  const palettes = [
    { bg: "#0a0a0a", line: "#242424", solid: "#fafaf9", accent: "#ff5a1f" },
    { bg: "#ff5a1f", line: "rgba(10,10,10,0.20)", solid: "#0a0a0a", accent: "#fafaf9" },
    { bg: "#f3f2f1", line: "#dedbd8", solid: "#0a0a0a", accent: "#ff5a1f" },
  ];
  const c = palettes[seed % palettes.length];

  return (
    <svg
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect width="480" height="360" fill={c.bg} />
      <g stroke={c.line} strokeWidth="1">
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="360" />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="480" y2={i * 48} />
        ))}
      </g>

      {seed % 3 === 0 && (
        <>
          <circle cx="336" cy="132" r="78" fill={c.accent} />
          <rect x="72" y="168" width="132" height="132" rx="14" fill={c.solid} />
        </>
      )}
      {seed % 3 === 1 && (
        <>
          <rect x="96" y="84" width="180" height="180" rx="90" fill={c.solid} />
          <rect x="264" y="180" width="150" height="84" rx="12" fill={c.accent} />
        </>
      )}
      {seed % 3 === 2 && (
        <>
          <circle cx="150" cy="180" r="72" fill="none" stroke={c.solid} strokeWidth="10" />
          <rect x="264" y="108" width="144" height="144" rx="16" fill={c.solid} />
          <circle cx="336" cy="180" r="34" fill={c.accent} />
        </>
      )}
    </svg>
  );
}
