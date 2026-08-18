import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { projects, site } from "@/lib/data";

/**
 * Generated at build time from the same data the pages render, so a new post
 * or case study cannot be published without appearing here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  ].map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const caseStudies = projects.map((p) => ({
    url: `${site.url}/work/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const articles = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...caseStudies, ...articles];
}
