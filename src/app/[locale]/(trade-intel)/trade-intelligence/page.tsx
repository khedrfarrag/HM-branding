import { Metadata } from "next";
import HubIndexPage from "@/components/HubIndexPage";
import { LocalFsTradeIntelRepository } from "@/repositories/local-fs/trade-intel";
import type { TradeIntelType, Locale } from "@/domains/shared/value-objects";

interface PageProps {
  params: Promise<{ locale: string }>;
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "ذكاء التجارة — حسام مبروك" : "Trade Intelligence — Hussam Mabrouk",
    description: isAr
      ? "أخبار الشحن، تحديثات الجمارك، وتنبيهات سلسلة التوريد"
      : "Shipping news, customs updates, and supply chain alerts",
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/trade-intelligence` },
  };
}

export default async function TradeIntelHubPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const items = await tradeIntelRepo.getTradeIntelItems(activeLocale);

  const feedCards = (Object.keys(FEED_LABELS) as TradeIntelType[]).map((type) => ({
    title: isAr ? FEED_LABELS[type].ar : FEED_LABELS[type].en,
    href: `/${activeLocale}/trade-intelligence/${type}`,
    badge: isAr ? "تغذية" : "Feed",
  }));

  const recentCards = items.map((item) => ({
    title: item.title,
    description: item.body.slice(0, 120) + (item.body.length > 120 ? "…" : ""),
    href: `/${activeLocale}/trade-intelligence/${item.feedType}/${item.slug}`,
    badge: isAr ? FEED_LABELS[item.feedType].ar : FEED_LABELS[item.feedType].en,
  }));

  return (
    <HubIndexPage
      locale={activeLocale}
      title={isAr ? "ذكاء التجارة" : "Trade Intelligence"}
      description={
        isAr
          ? "تحديثات فورية عن الشحن، الجمارك، أسعار العملات، وتنبيهات سلسلة التوريد."
          : "Real-time updates on shipping, customs, currency rates, and supply chain alerts."
      }
      hubPath={`/${activeLocale}/trade-intelligence`}
      cards={feedCards}
      sections={
        recentCards.length > 0
          ? [{ title: isAr ? "آخر التحديثات" : "Latest Updates", cards: recentCards }]
          : undefined
      }
    />
  );
}
