import { Metadata } from "next";
import { notFound } from "next/navigation";
import HubIndexPage from "@/components/HubIndexPage";
import { LocalFsChinaRepository } from "@/repositories/local-fs/china";
import type { ChinaSubdomain, Locale } from "@/domains/shared/value-objects";

interface PageProps {
  params: Promise<{ locale: string; subdomain: string }>;
}

const chinaRepo = new LocalFsChinaRepository();

const SUBDOMAIN_LABELS: Record<ChinaSubdomain, { ar: string; en: string }> = {
  cities: { ar: "المدن", en: "Cities" },
  markets: { ar: "الأسواق", en: "Markets" },
  factories: { ar: "المصانع", en: "Factories" },
  hotels: { ar: "الفنادق", en: "Hotels" },
  restaurants: { ar: "المطاعم", en: "Restaurants" },
  translators: { ar: "المترجمون", en: "Translators" },
  "shipping-companies": { ar: "شركات الشحن", en: "Shipping Companies" },
  ports: { ar: "الموانئ", en: "Ports" },
};

const SUBDOMAINS = Object.keys(SUBDOMAIN_LABELS) as ChinaSubdomain[];

export async function generateStaticParams() {
  const locales: Locale[] = ["ar", "en"];
  return locales.flatMap((locale) =>
    SUBDOMAINS.map((subdomain) => ({ locale, subdomain }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, subdomain } = await params;
  if (!SUBDOMAINS.includes(subdomain as ChinaSubdomain)) return {};
  const sub = subdomain as ChinaSubdomain;
  const isAr = locale === "ar";
  const label = isAr ? SUBDOMAIN_LABELS[sub].ar : SUBDOMAIN_LABELS[sub].en;
  return {
    title: `${label} — ${isAr ? "دليل الصين" : "China Guide"}`,
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/china/${subdomain}` },
  };
}

export default async function ChinaSubdomainHubPage({ params }: PageProps) {
  const { locale, subdomain } = await params;
  if (!SUBDOMAINS.includes(subdomain as ChinaSubdomain)) notFound();

  const sub = subdomain as ChinaSubdomain;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const label = isAr ? SUBDOMAIN_LABELS[sub].ar : SUBDOMAIN_LABELS[sub].en;

  let cards: { title: string; description?: string; href: string }[] = [];

  if (sub === "cities") {
    const cities = await chinaRepo.getCities(activeLocale);
    cards = cities.map((c) => ({
      title: c.name,
      description: c.description,
      href: `/${activeLocale}/china/cities/${c.slug}`,
    }));
  } else if (sub === "markets") {
    const markets = await chinaRepo.getMarkets(activeLocale);
    cards = markets.map((m) => ({
      title: m.name,
      description: m.description,
      href: `/${activeLocale}/china/markets/${m.slug}`,
    }));
  } else {
    const items = await chinaRepo.getSubdomainItems(activeLocale, sub);
    cards = items.map((item) => ({
      title: item.name,
      description: item.description,
      href: `/${activeLocale}/china/${sub}/${item.slug}`,
    }));
  }

  return (
    <HubIndexPage
      locale={activeLocale}
      title={label}
      description={
        isAr
          ? `دليل ${label} في الصين للمستوردين العرب.`
          : `${label} directory for importers sourcing from China.`
      }
      hubPath={`/${activeLocale}/china/${subdomain}`}
      cards={cards}
    />
  );
}
