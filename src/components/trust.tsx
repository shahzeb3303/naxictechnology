import { badges, clients } from "@/lib/data";
import { Reveal } from "./reveal";

/**
 * Client logos plus third-party credentials. For a buyer who will never visit
 * the office, an AWS partner mark and a Clutch score do the job a handshake
 * does locally — which is why this sits above the contact CTA, not below it.
 *
 * Both rows are logo slots. Until real SVGs arrive, names render as typeset
 * lockups at the same box size, so nothing reflows when they land.
 */
export function Trust() {
  return (
    <section className="border-t border-line bg-paper-pure py-20 md:py-24">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-center text-ink-muted">Trusted by teams at</p>
        </Reveal>

        <Reveal delay={0.06}>
          <ul className="mt-10 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-4">
            {clients.map((client) => (
              <li key={client.name} className="flex h-10 items-center justify-center">
                {client.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-10 w-auto max-w-[160px] opacity-60 grayscale transition-opacity duration-300 hover:opacity-100"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-center font-display text-[1.0625rem] tracking-tight text-ink-muted transition-colors duration-300 hover:text-ink md:text-[1.25rem]">
                    {client.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Credentials */}
        <Reveal delay={0.12}>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((badge) => (
              <li
                key={badge.label}
                className="flex flex-col items-center gap-2 bg-paper-pure px-6 py-8 text-center"
              >
                {badge.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={badge.logo}
                    alt={badge.label}
                    className="h-10 w-auto max-w-[140px]"
                    loading="lazy"
                  />
                ) : (
                  <span className="flex h-10 items-center font-display text-[1.125rem] tracking-tight text-ink">
                    {badge.label}
                  </span>
                )}
                <span className="text-[0.8125rem] leading-snug text-ink-muted">
                  {badge.detail}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
