import { authors, type Post } from "@/lib/blog";
import { offices, site } from "@/lib/data";

/**
 * Structured data. This is the machine-readable half of SEO and the main
 * lever for AEO — answer engines lean on FAQPage and Article markup when
 * deciding what to quote and who to credit.
 */
function Ld({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Content is authored by us, not user input, so this is safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Site-wide identity. Render once, in the root layout. */
export function OrganizationLd() {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: site.name,
        url: site.url,
        logo: `${site.url}/icon.svg`,
        email: site.email,
        telephone: site.phone,
        foundingDate: String(site.founded),
        address: offices.map((o) => ({
          "@type": "PostalAddress",
          streetAddress: o.address[0],
          addressLocality: o.city,
          addressCountry: o.country,
        })),
        contactPoint: offices.map((o) => ({
          "@type": "ContactPoint",
          telephone: o.phone,
          email: o.email,
          areaServed: o.country,
          contactType: "customer support",
        })),
      }}
    />
  );
}

export function BreadcrumbLd({
  trail,
}: {
  trail: { name: string; path: string }[];
}) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: `${site.url}${crumb.path}`,
        })),
      }}
    />
  );
}

export function ArticleLd({ post }: { post: Post }) {
  const author = authors[post.authorId];

  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        wordCount: post.body
          .map((b) =>
            "text" in b ? b.text : "items" in b ? b.items.join(" ") : ""
          )
          .join(" ")
          .split(/\s+/).length,
        articleSection: post.category,
        keywords: post.tags.join(", "),
        inLanguage: "en",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${site.url}/blog/${post.slug}`,
        },
        author: {
          "@type": "Person",
          name: author.name,
          jobTitle: author.role,
          worksFor: { "@type": "Organization", name: site.name },
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          logo: { "@type": "ImageObject", url: `${site.url}/icon.svg` },
        },
        // Points answer engines at the summary block rather than the intro prose
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#key-takeaways", "h1"],
        },
      }}
    />
  );
}

/** The highest-leverage markup for answer engines. */
export function FaqLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;

  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}
