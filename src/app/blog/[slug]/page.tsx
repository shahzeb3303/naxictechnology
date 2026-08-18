import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { ArticleBody } from "@/components/article-body";
import { ContactCta } from "@/components/contact-cta";
import { ArticleLd, BreadcrumbLd, FaqLd } from "@/components/jsonld";
import { PostCard } from "@/components/post-card";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  authors,
  formatDate,
  getPost,
  posts,
  relatedPosts,
} from "@/lib/blog";
import { site } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: `Blog — ${site.name}` };

  const url = `${site.url}/blog/${post.slug}`;

  return {
    title: `${post.title} | ${site.name}`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [authors[post.authorId].name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = authors[post.authorId];
  const related = relatedPosts(post.slug);
  // Only h2s go in the contents — h3s would make it a wall of links
  const toc = post.body.filter((b) => b.type === "h2");

  return (
    <>
      <ArticleLd post={post} />
      <FaqLd faqs={post.faqs} />
      <BreadcrumbLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <SiteHeader />
      <main id="main">
        {/* ---- Header ---- */}
        <article>
          <header className="grain relative overflow-hidden bg-ink pt-[4.5rem] text-paper">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-flare/18 blur-[130px]"
            />

            <div className="shell relative py-16 md:py-20">
              <Reveal>
                <Link
                  href="/blog"
                  className="btn-label group inline-flex min-h-[44px] cursor-pointer items-center gap-2 text-paper/70 transition-colors duration-200 hover:text-paper"
                >
                  <ArrowLeft
                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                    aria-hidden="true"
                  />
                  All writing
                </Link>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <span className="eyebrow text-flare">{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-paper/40" aria-hidden="true" />
                  <time dateTime={post.publishedAt} className="text-[0.8125rem] text-paper/60">
                    {formatDate(post.publishedAt)}
                  </time>
                  <span className="h-1 w-1 rounded-full bg-paper/40" aria-hidden="true" />
                  <span className="flex items-center gap-1.5 text-[0.8125rem] text-paper/60">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.readMinutes} min read
                  </span>
                </div>

                {/* The h1 doubles as the question an answer engine matches on */}
                <h1 className="mt-6 max-w-[20ch] font-display text-[2.25rem] leading-[1.0] tracking-[-0.05em] text-paper sm:text-[3rem] lg:text-[4rem]">
                  {post.title}
                </h1>

                <p className="mt-8 max-w-[58ch] text-[1.0625rem] leading-relaxed text-paper/75 md:text-lg">
                  {post.excerpt}
                </p>

                <div className="mt-10 flex items-center gap-4 border-t border-white/20 pt-8">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/12 font-display text-[0.9375rem] text-paper"
                  >
                    {author.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <span className="text-sm leading-snug">
                    <span className="block font-medium text-paper">{author.name}</span>
                    <span className="block text-paper/65">{author.role}</span>
                  </span>
                  {post.updatedAt && (
                    <span className="ml-auto text-[0.75rem] text-paper/50">
                      Updated {formatDate(post.updatedAt)}
                    </span>
                  )}
                </div>
              </Reveal>
            </div>
          </header>

          {/* ---- Body ---- */}
          <div className="bg-paper-pure py-16 md:py-20">
            <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Contents rail */}
              <aside className="lg:col-span-3">
                <div className="lg:sticky lg:top-28">
                  <Reveal>
                    <nav aria-labelledby="toc-heading">
                      <h2 id="toc-heading" className="eyebrow text-ink-muted">
                        Contents
                      </h2>
                      <ul className="mt-5 space-y-1 border-l border-line">
                        {toc.map((h) => (
                          <li key={h.id}>
                            <a
                              href={`#${h.id}`}
                              className="-ml-px block border-l border-transparent py-2 pl-4 text-[0.875rem] leading-snug text-ink-muted transition-colors duration-200 hover:border-flare hover:text-ink"
                            >
                              {h.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </Reveal>
                </div>
              </aside>

              <div className="lg:col-span-9">
                {/* Key takeaways — the block answer engines quote */}
                <Reveal>
                  <section
                    id="key-takeaways"
                    aria-labelledby="takeaways-heading"
                    className="mb-14 rounded-2xl border border-line bg-paper p-7 md:p-8"
                  >
                    <h2
                      id="takeaways-heading"
                      className="flex items-center gap-2.5 font-display text-[1.125rem] tracking-tight"
                    >
                      <Sparkles className="h-4 w-4 text-flare-ink" aria-hidden="true" />
                      Key takeaways
                    </h2>
                    <ul className="mt-5 space-y-3">
                      {post.takeaways.map((t) => (
                        <li key={t} className="flex gap-3.5">
                          <span
                            className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-flare"
                            aria-hidden="true"
                          />
                          <span className="text-[0.9375rem] leading-relaxed text-ink">
                            {t}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </Reveal>

                <Reveal>
                  <ArticleBody body={post.body} />
                </Reveal>

                {/* Tags */}
                <Reveal>
                  <ul className="mt-14 flex flex-wrap gap-2 border-t border-line pt-8">
                    {post.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line bg-paper px-3.5 py-1 text-[0.75rem] text-ink-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>

          {/* ---- FAQ (FAQPage schema above) ---- */}
          {post.faqs.length > 0 && (
            <section
              aria-labelledby="faq-heading"
              className="border-t border-line bg-paper py-20 md:py-24"
            >
              <div className="shell">
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-flare" aria-hidden="true" />
                    <span className="eyebrow text-ink-muted">Frequently asked</span>
                  </div>
                  <h2
                    id="faq-heading"
                    className="mt-6 max-w-[20ch] font-display text-[1.75rem] leading-tight tracking-[-0.035em] md:text-[2.25rem]"
                  >
                    Questions this raises
                  </h2>
                </Reveal>

                {/* Plain markup, not an accordion — hidden text is weaker for
                    answer engines and there is no space problem to solve here */}
                <dl className="mt-12 max-w-[76ch] border-t border-line">
                  {post.faqs.map((faq, i) => (
                    <Reveal key={faq.q} delay={i * 0.05}>
                      <div className="border-b border-line py-8">
                        <dt className="max-w-[40ch] font-display text-[1.1875rem] leading-tight tracking-tight md:text-[1.375rem]">
                          {faq.q}
                        </dt>
                        <dd className="mt-4 max-w-[68ch] text-[1rem] leading-[1.7] text-ink-muted">
                          {faq.a}
                        </dd>
                      </div>
                    </Reveal>
                  ))}
                </dl>
              </div>
            </section>
          )}
        </article>

        {/* ---- Related ---- */}
        <section className="border-t border-line bg-paper-pure py-20 md:py-24">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-flare" aria-hidden="true" />
                    <span className="eyebrow text-ink-muted">Keep reading</span>
                  </div>
                  <h2 className="mt-6 font-display text-[1.75rem] leading-tight tracking-[-0.035em] md:text-[2.25rem]">
                    More from the team
                  </h2>
                </div>

                <Link
                  href="/blog"
                  className="btn-label group inline-flex min-h-[48px] cursor-pointer items-center gap-2 rounded-full border border-ink/15 px-6 transition-colors duration-200 hover:border-ink"
                >
                  All writing
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>

            <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal as="li" key={p.slug} delay={i * 0.07}>
                  <PostCard post={p} />
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
