import { SearchDocument } from "@/integrations/search/provider";
import { LocalFsKnowledgeRepository } from "@/repositories/local-fs/knowledge";
import { LocalFsExperienceRepository } from "@/repositories/local-fs/experiences";
import { LocalFsMediaRepository } from "@/repositories/local-fs/media";
import { LocalFsTradeIntelRepository } from "@/repositories/local-fs/trade-intel";

/**
 * Build-time search index compiler.
 * Aggregates all published content into a flat SearchDocument list
 * suitable for any ISearchProvider implementation.
 */
export async function buildSearchIndex(): Promise<SearchDocument[]> {
  const documents: SearchDocument[] = [];
  const locales = ["ar"] as const; // Index Arabic primary; extend to ["ar","en"] if needed

  const knowledge = new LocalFsKnowledgeRepository();
  const experiences = new LocalFsExperienceRepository();
  const media = new LocalFsMediaRepository();
  const tradeIntel = new LocalFsTradeIntelRepository();

  for (const locale of locales) {
    // Articles
    try {
      const articles = await knowledge.getArticles(locale);
      for (const a of articles) {
        documents.push({
          id: `${locale}-article-${a.slug}`,
          title: a.title,
          excerpt: a.excerpt,
          url: `/${locale}/knowledge/${a.category}/${a.slug}`,
          type: "article",
          tags: a.tags
        });
      }
    } catch { /* skip on failure */ }

    // Experiences
    try {
      const exps = await experiences.getExperiences(locale);
      for (const e of exps) {
        documents.push({
          id: `${locale}-experience-${e.slug}`,
          title: e.title,
          excerpt: e.shortDescription,
          url: `/${locale}/experiences/${e.type}/${e.slug}`,
          type: "experience"
        });
      }
    } catch { /* skip on failure */ }

    // Media
    try {
      const mediaItems = await media.getMediaItems(locale);
      for (const m of mediaItems) {
        documents.push({
          id: `${locale}-media-${m.slug}`,
          title: m.title,
          excerpt: m.description,
          url: `/${locale}/media/${m.mediaType}/${m.slug}`,
          type: "media"
        });
      }
    } catch { /* skip on failure */ }

    // Trade Intelligence
    try {
      const items = await tradeIntel.getTradeIntelItems(locale);
      for (const t of items) {
        documents.push({
          id: `${locale}-trade-intel-${t.slug}`,
          title: t.title,
          excerpt: t.body.slice(0, 160),
          url: `/${locale}/trade-intelligence/${t.feedType}/${t.slug}`,
          type: "trade-intel"
        });
      }
    } catch { /* skip on failure */ }
  }

  return documents;
}
