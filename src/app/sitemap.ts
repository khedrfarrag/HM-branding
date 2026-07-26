import { MetadataRoute } from "next";
import { LocalFsKnowledgeRepository } from "@/repositories/local-fs/knowledge";
import { SupabaseExperienceRepository } from "@/repositories/supabase/experiences";
import { Locale } from "@/domains/shared/value-objects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://hussam-mabrouk.com";
  const locales: Locale[] = ["ar", "en"];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  const knowledgeRepo = new LocalFsKnowledgeRepository();
  const experienceRepo = new SupabaseExperienceRepository();

  // Define base static routes
  const staticRoutes = [
    "",
    "/about/bio",
    "/about/achievements",
    "/about/certificates",
    "/about/timeline",
    "/experiences",
    "/services/sourcing",
    "/services/quality-control",
    "/services/verification",
    "/knowledge",
    "/knowledge/glossary",
    "/knowledge/faq",
    "/trade-intelligence",
    "/media"
  ];

  for (const locale of locales) {
    // 1. Static Routes
    for (const route of staticRoutes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8
      });
    }

    // 2. Dynamic Article Routes
    try {
      const articles = await knowledgeRepo.getAllArticleSlugs(locale);
      for (const item of articles) {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/knowledge/${item.category}/${item.slug}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "weekly",
          priority: 0.7
        });
      }
    } catch {
      // Ignore sitemap query failures
    }

    // 3. Dynamic Experience Routes
    try {
      const experiences = await experienceRepo.getAllSlugs(locale);
      for (const item of experiences) {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/experiences/${item.type}/${item.slug}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "weekly",
          priority: 0.8
        });
      }
    } catch {
      // Ignore sitemap query failures
    }
  }

  return sitemapEntries;
}
