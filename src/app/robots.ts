import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.hossammabrouk.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/admin/*", "/api/", "/api/*"],
      },
      {
        // Explicit Allowance for AI Crawlers & Search Engines
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "Bytespider",
          "CCBot",
          "cohere-ai",
          "Bingbot",
        ],
        allow: "/",
        disallow: ["/admin/", "/admin/*", "/api/", "/api/*"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
