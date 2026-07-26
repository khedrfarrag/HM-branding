import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LocalFsTradeIntelRepository } from "@/repositories/local-fs/trade-intel";
import { Locale, TradeIntelType } from "@/domains/shared/value-objects";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";

interface PageProps {
  params: Promise<{
    locale: string;
    type: string;
    slug: string;
  }>;
}

const tradeIntelRepo = new LocalFsTradeIntelRepository();

const severityColors: Record<string, string> = {
  low: "text-green-400 bg-green-500/10 border-green-500/30",
  medium: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
  high: "text-orange-400 bg-orange-500/10 border-orange-500/30",
  critical: "text-red-400 bg-red-500/10 border-red-500/30",
};

export async function generateStaticParams() {
  const locales: Locale[] = ["ar", "en"];
  const paramsList: { locale: Locale; type: string; slug: string }[] = [];

  for (const locale of locales) {
    try {
      const slugs = await tradeIntelRepo.getAllSlugs(locale);
      for (const item of slugs) {
        paramsList.push({ locale, type: item.type, slug: item.slug });
      }
    } catch {
      paramsList.push({ locale, type: "shipping-news", slug: "container-rate-surge-2026" });
    }
  }

  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, type, slug } = await params;
  const item = await tradeIntelRepo.getTradeIntelBySlug(locale as Locale, type as TradeIntelType, slug);
  if (!item) return {};

  return {
    title: item.seo.title,
    description: item.seo.description,
    alternates: { canonical: `https://hussam-mabrouk.com${item.seo.canonicalPath}` }
  };
}

export default async function TradeIntelDetailPage({ params }: PageProps) {
  const { locale, type, slug } = await params;
  const intelType = type as TradeIntelType;
  const activeLocale = locale as Locale;
  const item = await tradeIntelRepo.getTradeIntelBySlug(activeLocale, intelType, slug);

  if (!item) notFound();

  const isAr = activeLocale === "ar";
  const breadcrumb = buildBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", item: `/${activeLocale}` },
    { name: isAr ? "ذكاء التجارة" : "Trade Intelligence", item: `/${activeLocale}/trade-intelligence` },
    { name: item.title, item: item.seo.canonicalPath }
  ]);

  const severityClass = item.severity ? severityColors[item.severity] : severityColors.low;

  return (
    <main className="container mx-auto px-4 py-8" id="trade-intel-detail">
      <JsonLd schema={breadcrumb} />

      <article className="max-w-3xl mx-auto bg-black/40 backdrop-blur-md border border-amber-500/20 rounded-xl p-6 md:p-8">
        <header className="mb-6 pb-6 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-amber-500 uppercase tracking-wider text-xs font-semibold">
              {item.feedType.replace(/-/g, " ")}
            </span>
            {item.severity && (
              <span className={`text-xs font-bold px-2 py-1 rounded-full border ${severityClass}`}>
                {item.severity.toUpperCase()}
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">{item.title}</h1>
          {item.region && (
            <p className="text-gray-400 text-sm">
              📍 {item.region}
            </p>
          )}
        </header>

        <section className="text-gray-200 leading-relaxed text-lg">
          <p>{item.body}</p>
        </section>

        {item.publishedAt && (
          <footer className="mt-8 pt-4 border-t border-gray-800 text-gray-500 text-sm">
            {isAr ? "تاريخ النشر:" : "Published:"} {new Date(item.publishedAt).toLocaleDateString(locale === "ar" ? "ar-EG" : "en-US")}
          </footer>
        )}
      </article>
    </main>
  );
}
