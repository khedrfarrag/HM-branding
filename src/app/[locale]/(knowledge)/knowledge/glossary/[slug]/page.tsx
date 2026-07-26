import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { LocalFsKnowledgeRepository } from "@/repositories/local-fs/knowledge";
import { Locale } from "@/domains/shared/value-objects";
import JsonLd from "@/components/JsonLd";
import { buildPersonSchema } from "@/lib/schema/person";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

const knowledgeRepository = new LocalFsKnowledgeRepository();

export async function generateStaticParams() {
  const paramsList: { locale: Locale; slug: string }[] = [];
  const locales: Locale[] = ["ar", "en"];

  for (const locale of locales) {
    try {
      const terms = await knowledgeRepository.getGlossaryTerms(locale);
      for (const item of terms) {
        paramsList.push({
          locale,
          slug: item.slug,
        });
      }
    } catch {
      paramsList.push({
        locale,
        slug: "fob",
      });
    }
  }

  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const term = await knowledgeRepository.getGlossaryTermBySlug(locale as Locale, slug);
  if (!term) return {};

  return {
    title: term.seo.title,
    description: term.seo.description,
    alternates: {
      canonical: `https://hussam-mabrouk.com${term.seo.canonicalPath}`,
    },
  };
}

export default async function GlossaryTermDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const activeLocale = locale as Locale;
  const term = await knowledgeRepository.getGlossaryTermBySlug(activeLocale, slug);

  if (!term) {
    notFound();
  }

  const isAr = activeLocale === "ar";
  const personSchema = buildPersonSchema(activeLocale);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", item: `/${activeLocale}` },
    { name: isAr ? "قاموس المصطلحات" : "Trade Glossary", item: `/${activeLocale}/knowledge/glossary` },
    { name: term.term, item: term.seo.canonicalPath },
  ]);

  const definedTermSchema = {
    "@context": "https://schema.org" as const,
    "@type": "DefinedTerm" as const,
    "@id": `https://hussam-mabrouk.com${term.seo.canonicalPath}#term`,
    "name": term.term,
    "alternateName": term.termEn,
    "description": term.definition,
    "inDefinedTermSet": `https://hussam-mabrouk.com/${activeLocale}/knowledge/glossary`,
  };

  return (
    <main className="container mx-auto px-4 py-16" id="glossary-term-detail">
      <JsonLd schema={personSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={definedTermSchema} />

      <div className="max-w-2xl mx-auto">
        {/* Back Link */}
        <Link
          href={`/${activeLocale}/knowledge/glossary`}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm mb-8 transition-colors"
        >
          {isAr ? "← العودة إلى القاموس" : "← Back to Glossary"}
        </Link>

        {/* Term Card */}
        <article className="bg-black/40 backdrop-blur-md border border-gold/20 rounded-2xl p-8 md:p-10 space-y-6">
          <header className="border-b border-white/10 pb-6">
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-gold/10 border border-gold/30 text-gold rounded px-2.5 py-1 text-xs font-mono font-bold tracking-wider uppercase">
                {term.term}
              </span>
              <span className="text-gray-500 text-sm font-medium">
                {term.termEn}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white mt-4">
              {isAr ? `تعريف مصطلح ${term.term}` : `${term.term} Definition`}
            </h1>
          </header>

          <section className="text-gray-300 leading-relaxed text-lg space-y-4">
            <p>{term.definition}</p>
          </section>

          {/* Related Terms */}
          {term.relatedTermSlugs.length > 0 && (
            <footer className="pt-6 border-t border-white/10 space-y-3">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {isAr ? "مصطلحات ذات صلة" : "Related Terms"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {term.relatedTermSlugs.map((slugItem) => (
                  <Link
                    key={slugItem}
                    href={`/${activeLocale}/knowledge/glossary/${slugItem}`}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-gray-300 hover:border-gold/40 hover:text-white transition-colors uppercase font-mono"
                  >
                    {slugItem}
                  </Link>
                ))}
              </div>
            </footer>
          )}
        </article>
      </div>
    </main>
  );
}
