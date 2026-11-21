import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lavistarealestate.ae";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llms.txt", "/sitemap.xml"],
        disallow: ["/admin", "/admin/*", "/api/*", "/_next/*"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "OAI-SearchBot",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended",
          "PerplexityBot",
          "Applebot",
          "cohere-ai",
        ],
        allow: ["/", "/llms.txt", "/sitemap.xml"],
        disallow: ["/admin", "/admin/*", "/api/*"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
