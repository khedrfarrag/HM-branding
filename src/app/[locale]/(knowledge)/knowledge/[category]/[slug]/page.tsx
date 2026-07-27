import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
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

const STATIC_ARTICLES: Record<string, Record<string, { title: string; excerpt: string; body: string; tags: string[] }>> = {
  ar: {
    "how-to-import-from-china": {
      title: "كيف تستورد من الصين: الدليل العملي الأول",
      excerpt: "تعلم أساسيات التفاوض، فحص الجودة، والشحن بأمان.",
      body: "يُعدّ الاستيراد من الصين أحد أكثر المسارات ربحية في التجارة الدولية. يوفر هذا الدليل الخطوات الأساسية من اختيار المورد الموثوق، والتفاوض على الأسعار، وفحص جودة المنتجات، وإتمام عملية الشحن بأمان.",
      tags: ["china", "importing", "sourcing"],
    },
  },
  en: {
    "how-to-import-from-china": {
      title: "How to Import from China: The Ultimate Guide",
      excerpt: "Learn the basics of negotiation, quality checks, and shipping safely.",
      body: "Importing from China is one of the most profitable paths in international trade. This guide covers selecting trusted suppliers, price negotiation, quality inspection, and completing the shipping process safely.",
      tags: ["china", "importing", "sourcing"],
    },
  },
};

export async function generateStaticParams() {
  return [
    { locale: "ar", category: "importing", slug: "how-to-import-from-china" },
    { locale: "en", category: "importing", slug: "how-to-import-from-china" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = STATIC_ARTICLES[locale]?.[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { locale, category, slug } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";

  const article = STATIC_ARTICLES[locale]?.[slug];
  if (!article) notFound();

  const personSchema = buildPersonSchema(activeLocale);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", item: `/${activeLocale}` },
    { name: isAr ? "منصة المعرفة" : "Knowledge Base", item: `/${activeLocale}/knowledge` },
    { name: article!.title, item: `/${activeLocale}/knowledge/${category}/${slug}` },
  ]);

  return (
    <main className="container mx-auto px-4 py-8" id="article-detail">
      <JsonLd schema={personSchema} />
      <JsonLd schema={breadcrumbSchema} />

      <article className="max-w-3xl mx-auto bg-black/40 backdrop-blur-md border border-amber-500/20 rounded-xl p-6 md:p-8">
        <header className="mb-6 border-b border-gray-800 pb-6">
          <div className="flex gap-2 text-sm mb-3">
            <span className="text-amber-500 font-semibold uppercase">{category}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">6 {isAr ? "دقائق قراءة" : "min read"}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{article!.title}</h1>
          <p className="text-gray-300 text-lg italic leading-relaxed">{article!.excerpt}</p>
        </header>

        <section className="prose prose-invert max-w-none text-gray-200 leading-relaxed space-y-4">
          <p>{article!.body}</p>
        </section>

        <SourcingCTA locale={activeLocale} />

        {article!.tags.length > 0 && (
          <footer className="mt-8 pt-6 border-t border-gray-800 flex flex-wrap gap-2">
            {article!.tags.map((tag) => (
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
