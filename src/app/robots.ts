import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

/**
 * Answer-engine crawlers are allowed explicitly. They generally respect the
 * wildcard rule, but naming them makes the intent unambiguous — and makes it
 * a one-line change if you ever want to opt out of a specific one.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
