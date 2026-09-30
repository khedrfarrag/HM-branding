import { MetadataRoute } from "next";
import { LocalFsKnowledgeRepository } from "@/repositories/local-fs/knowledge";
import { SupabaseExperienceRepository } from "@/repositories/supabase/experiences";
import { Locale } from "@/domains/shared/value-objects";

interface RouteConfig {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.hossammabrouk.com";
  const baseUrl = rawBaseUrl.replace(/\/$/, "");
  const locales: Locale[] = ["ar", "en"];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  const knowledgeRepo = new LocalFsKnowledgeRepository();
  const experienceRepo = new SupabaseExperienceRepository();

  // Tiered static routes definition with semantic priorities and change frequencies
  const staticRouteConfigs: RouteConfig[] = [
    // Tier 1: Root / Home
    { path: "", changeFrequency: "daily", priority: 1.0 },

    // Tier 2: Core Conversion Hubs & High-Value Knowledge (Priority 0.9)
    { path: "/tools", changeFrequency: "weekly", priority: 0.9 },
    { path: "/about/faq", changeFrequency: "weekly", priority: 0.9 },
    { path: "/china", changeFrequency: "weekly", priority: 0.9 },
    { path: "/china/cities", changeFrequency: "weekly", priority: 0.9 },
    { path: "/china/coverage", changeFrequency: "weekly", priority: 0.9 },
    { path: "/services/sourcing", changeFrequency: "weekly", priority: 0.9 },
    { path: "/services/quality-control", changeFrequency: "weekly", priority: 0.9 },
    { path: "/services/verification", changeFrequency: "weekly", priority: 0.9 },
    { path: "/booking/consultation/general", changeFrequency: "weekly", priority: 0.9 },

    // Tier 3: Authority Profiles & General Background Content (Priority 0.8)
    { path: "/about/bio", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about/achievements", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about/certificates", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about/timeline", changeFrequency: "monthly", priority: 0.8 },
    { path: "/experiences", changeFrequency: "weekly", priority: 0.8 },
    { path: "/knowledge", changeFrequency: "weekly", priority: 0.8 },
    { path: "/knowledge/glossary", changeFrequency: "monthly", priority: 0.8 },
    { path: "/media", changeFrequency: "monthly", priority: 0.8 },
  ];

  for (const locale of locales) {
    // 1. Static Routes
    for (const config of staticRouteConfigs) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${config.path}`,
        lastModified: new Date().toISOString(),
        changeFrequency: config.changeFrequency,
        priority: config.priority,
      });
    }

    // 2. Dynamic Knowledge Article Routes
    try {
      const articles = await knowledgeRepo.getAllArticleSlugs(locale);
      for (const item of articles) {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/knowledge/${item.category}/${item.slug}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }
    } catch (err) {
      console.warn(`[Sitemap] Failed to fetch articles for locale ${locale}:`, err);
    }

    // 3. Dynamic Experience Routes
    try {
      const experiences = await experienceRepo.getAllSlugs(locale);
      for (const item of experiences) {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/experiences/${item.type}/${item.slug}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "weekly",
          priority: 0.8,
        });
      }
    } catch (err) {
      console.warn(`[Sitemap] Failed to fetch experiences for locale ${locale}:`, err);
    }
  }

  return sitemapEntries;
}
