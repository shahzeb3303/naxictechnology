import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { BreadcrumbLd } from "@/components/jsonld";
import { PostCard } from "@/components/post-card";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { categories, sortedPosts } from "@/lib/blog";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Blog | ${site.name}`,
  description:
    "Practical writing on software, AI, and digital marketing from the Nexic Technologies team. Straight answers, real numbers, no vendor spin.",
  alternates: { canonical: `${site.url}/blog` },
};

export default function BlogPage() {
  const [lead, ...rest] = sortedPosts;

  return (
    <>
      <BreadcrumbLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <SiteHeader />
      <main id="main">
        {/* Hero */}
        <section className="grain relative overflow-hidden bg-ink pt-[4.5rem] text-paper">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-flare/18 blur-[130px]"
          />

          <div className="shell relative py-20 md:py-28">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-flare" aria-hidden="true" />
                <span className="eyebrow text-paper/60">Writing</span>
              </div>

              <h1 className="text-display mt-7 max-w-[13ch] font-display text-paper">
                Straight answers<span className="text-flare">.</span>
              </h1>

              <p className="mt-8 max-w-[54ch] text-[1.0625rem] leading-relaxed text-paper/75 md:text-lg">
                What things cost, what actually works, and what we got wrong.
                Written by the engineers and designers doing the work rather
                than by a content team who have never shipped any of it.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-12 flex flex-wrap gap-2 border-t border-white/20 pt-8">
                {categories.map((c) => (
                  <li key={c}>
                    <span className="inline-block rounded-full border border-white/25 px-4 py-1.5 text-[0.8125rem] text-paper/75">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Lead post */}
        <section className="border-b border-line bg-paper-pure py-20 md:py-24">
          <div className="shell">
            <Reveal>
              <div className="mb-10 flex items-center gap-3">
                <span className="h-px w-8 bg-flare" aria-hidden="true" />
                <span className="eyebrow text-ink-muted">Latest</span>
              </div>
              <PostCard post={lead} featured />
            </Reveal>
          </div>
        </section>

        {/* Archive */}
        <section className="bg-paper py-20 md:py-24">
          <div className="shell">
            <Reveal>
              <div className="mb-12 flex items-center gap-3">
                <span className="h-px w-8 bg-flare" aria-hidden="true" />
                <span className="eyebrow text-ink-muted">More reading</span>
              </div>
            </Reveal>

            <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <Reveal as="li" key={post.slug} delay={i * 0.07}>
                  <PostCard post={post} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
