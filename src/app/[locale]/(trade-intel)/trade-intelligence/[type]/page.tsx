import { Metadata } from "next";
import { notFound } from "next/navigation";
import HubIndexPage from "@/components/HubIndexPage";
import { LocalFsTradeIntelRepository } from "@/repositories/local-fs/trade-intel";
import type { TradeIntelType, Locale } from "@/domains/shared/value-objects";

interface PageProps {
  params: Promise<{ locale: string; type: string }>;
}

const tradeIntelRepo = new LocalFsTradeIntelRepository();

const FEED_LABELS: Record<TradeIntelType, { ar: string; en: string }> = {
  "shipping-news": { ar: "أخبار الشحن", en: "Shipping News" },
  "customs-updates": { ar: "تحديثات الجمارك", en: "Customs Updates" },
  "currency-rates": { ar: "أسعار العملات", en: "Currency Rates" },
  "market-updates": { ar: "تحديثات السوق", en: "Market Updates" },
  "trade-regulations": { ar: "اللوائح التجارية", en: "Trade Regulations" },
  "factory-news": { ar: "أخبار المصانع", en: "Factory News" },
  "global-trade-news": { ar: "أخبار التجارة العالمية", en: "Global Trade News" },
  "china-exhibitions": { ar: "معارض الصين", en: "China Exhibitions" },
  "supply-chain-alerts": { ar: "تنبيهات سلسلة التوريد", en: "Supply Chain Alerts" },
};

const ALL_TYPES = Object.keys(FEED_LABELS) as TradeIntelType[];

export async function generateStaticParams() {
  const locales = ["ar", "en"];
  const params = [];
  for (const locale of locales) {
    for (const type of ALL_TYPES) {
      params.push({ locale, type });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, type } = await params;
  const feedType = type as TradeIntelType;
  if (!ALL_TYPES.includes(feedType)) return {};

  const isAr = locale === "ar";
  const titleText = isAr ? FEED_LABELS[feedType].ar : FEED_LABELS[feedType].en;

  return {
    title: isAr ? `${titleText} — حسام مبروك` : `${titleText} — Hussam Mabrouk`,
    description: isAr
      ? `تحديثات وتحليلات حول ${titleText} في الصين والشرق الأوسط`
      : `Updates and analysis on ${titleText} in China and the Middle East`,
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/trade-intelligence/${type}` },
  };
}

export default async function TradeIntelTypeHubPage({ params }: PageProps) {
  const { locale, type } = await params;
  const activeLocale = locale as Locale;
  const feedType = type as TradeIntelType;

  if (!ALL_TYPES.includes(feedType)) {
    notFound();
  }

  const isAr = activeLocale === "ar";
  const items = await tradeIntelRepo.getTradeIntelItems(activeLocale, feedType);
  const titleText = isAr ? FEED_LABELS[feedType].ar : FEED_LABELS[feedType].en;

  const articleCards = items.map((item) => ({
    title: item.title,
    description: item.body.slice(0, 150) + (item.body.length > 150 ? "…" : ""),
    href: `/${activeLocale}/trade-intelligence/${item.feedType}/${item.slug}`,
    badge: isAr ? FEED_LABELS[item.feedType].ar : FEED_LABELS[item.feedType].en,
  }));

  return (
    <HubIndexPage
      locale={activeLocale}
      title={titleText}
      description={
        isAr
          ? `آخر تحديثات وقوائم التغذية لـ ${titleText}.`
          : `Latest updates and feed updates for ${titleText}.`
      }
      hubPath={`/${activeLocale}/trade-intelligence`}
      cards={articleCards}
    />
  );
}
