import { Locale } from "@/domains/shared/value-objects";
import { Article, GlossaryTerm, FAQItem } from "./entities";

export interface IKnowledgeRepository {
  getArticles(locale: Locale, options?: { category?: string; topic?: string; series?: string; tag?: string }): Promise<Article[]>;
  getArticleBySlug(locale: Locale, category: string, slug: string): Promise<Article | null>;
  getGlossaryTerms(locale: Locale): Promise<GlossaryTerm[]>;
  getGlossaryTermBySlug(locale: Locale, slug: string): Promise<GlossaryTerm | null>;
  getFAQs(locale: Locale, category?: string): Promise<FAQItem[]>;
  getAllArticleSlugs(locale: Locale): Promise<{ category: string; slug: string }[]>;
}
