import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LocalFsKnowledgeRepository } from "@/repositories/local-fs/knowledge";
import { Locale } from "@/domains/shared/value-objects";
import JsonLd from "@/components/JsonLd";
import { buildPersonSchema } from "@/lib/schema/person";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import SourcingCTA from "@/components/SourcingCTA";

interface PageProps {
  params: Promise<{
    locale: string;
    category: string;
    slug: string;
  }>;
}

const knowledgeRepository = new LocalFsKnowledgeRepository();

export async function generateStaticParams() {
  const paramsList: { locale: Locale; category: string; slug: string }[] = [];
  const locales: Locale[] = ["ar", "en"];

  for (const locale of locales) {
    try {
      const slugs = await knowledgeRepository.getAllArticleSlugs(locale);
      for (const item of slugs) {
        paramsList.push({
          locale,
          category: item.category,
          slug: item.slug
        });
      }
    } catch {
      paramsList.push({
        locale,
        category: "importing",
        slug: "how-to-import-from-china"
      });
    }
  }

  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, category, slug } = await params;
  const article = await knowledgeRepository.getArticleBySlug(locale as Locale, category, slug);
  if (!article) return {};

  return {
    title: article.seo.title,
    description: article.seo.description,
    alternates: {
      canonical: `https://hussam-mabrouk.com${article.seo.canonicalPath}`
    }
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { locale, category, slug } = await params;
  const activeLocale = locale as Locale;
  const article = await knowledgeRepository.getArticleBySlug(activeLocale, category, slug);

  if (!article) {
    notFound();
  }

  const isAr = activeLocale === "ar";
  const personSchema = buildPersonSchema(activeLocale);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", item: `/${activeLocale}` },
    { name: isAr ? "منصة المعرفة" : "Knowledge Base", item: `/${activeLocale}/knowledge` },
    { name: article.title, item: article.seo.canonicalPath }
  ]);

  const articleSchema = {
    "@context": "https://schema.org" as const,
    "@type": "Article" as const,
    "@id": `https://hussam-mabrouk.com${article.seo.canonicalPath}#article`,
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    "author": {
      "@type": "Person" as const,
      "@id": "https://hussam-mabrouk.com/#person"
    },
    "publisher": {
      "@type": "Organization" as const,
      "@id": "https://hussam-mabrouk.com/#organization"
    }
  };

  return (
    <main className="container mx-auto px-4 py-8" id="article-detail">
      <JsonLd schema={personSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={articleSchema} />

      <article className="max-w-3xl mx-auto bg-black/40 backdrop-blur-md border border-amber-500/20 rounded-xl p-6 md:p-8">
        <header className="mb-6 border-b border-gray-800 pb-6">
          <div className="flex gap-2 text-sm mb-3">
            <span className="text-amber-500 font-semibold uppercase">{article.category}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">{article.readingTimeMinutes} {isAr ? "دقائق قراءة" : "min read"}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {article.title}
          </h1>
          <p className="text-gray-300 text-lg italic leading-relaxed">
            {article.excerpt}
          </p>
        </header>

        <section className="prose prose-invert max-w-none text-gray-200 leading-relaxed space-y-4">
          <p>{article.body}</p>
        </section>

        <SourcingCTA locale={activeLocale} />

        {article.tags.length > 0 && (
          <footer className="mt-8 pt-6 border-t border-gray-800 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="bg-white/5 border border-white/10 text-gray-300 rounded-full px-3 py-1 text-xs">
                #{tag}
              </span>
            ))}
          </footer>
        )}
      </article>
    </main>
  );
}
