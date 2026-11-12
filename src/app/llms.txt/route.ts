import { posts } from "@/lib/blog";
import { offices, projects, services, site } from "@/lib/data";

/**
 * llms.txt — a plain-text map of the site for AI crawlers.
 *
 * Google ignores it; Perplexity and several smaller crawlers read it. It is
 * cheap, so the only real risk is drift, which is why this is generated from
 * the same data the pages render rather than hand-written.
 */
export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.tagline}. A marketing agency with a build team inside it: paid advertising, SEO, social and content, plus the websites, apps, video and creative those campaigns depend on.

Offices in ${offices.map((o) => `${o.city}, ${o.country}`).join(" and ")}.
Contact: ${site.email}

## Services

${services.map((s) => `- [${s.title}](${site.url}/services#${s.id}): ${s.summary}`).join("\n")}

## Case studies

${projects
  .map((p) => `- [${p.client}: ${p.title}](${site.url}/work/${p.id}): ${p.summary}`)
  .join("\n")}

## Articles

${posts.map((p) => `- [${p.title}](${site.url}/blog/${p.slug}): ${p.excerpt}`).join("\n")}

## Pages

- [Home](${site.url}/)
- [Services](${site.url}/services)
- [Work](${site.url}/work)
- [About](${site.url}/about)
- [Blog](${site.url}/blog)
- [Contact](${site.url}/contact)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
