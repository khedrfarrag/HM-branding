import { Metadata } from "next";
import HubIndexPage from "@/components/HubIndexPage";
import { LocalFsChinaRepository } from "@/repositories/local-fs/china";
import type { ChinaSubdomain, Locale } from "@/domains/shared/value-objects";

interface PageProps {
  params: Promise<{ locale: string }>;
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "دليل الصين — حسام مبروك" : "China Guide — Hussam Mabrouk",
    description: isAr
      ? "دليل شامل للمدن، الأسواق، المصانع، والموانئ في الصين"
      : "Complete guide to cities, markets, factories, and ports in China",
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/china` },
  };
}

export default async function ChinaHubPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const cities = await chinaRepo.getCities(activeLocale);

  const subdomainCards = (Object.keys(SUBDOMAIN_LABELS) as ChinaSubdomain[]).map((sub) => ({
    title: isAr ? SUBDOMAIN_LABELS[sub].ar : SUBDOMAIN_LABELS[sub].en,
    href: `/${activeLocale}/china/${sub}`,
    badge: isAr ? "قسم" : "Section",
  }));

  const cityCards = cities.map((city) => ({
    title: city.name,
    description: city.description,
    href: `/${activeLocale}/china/cities/${city.slug}`,
    badge: isAr ? "مدينة" : "City",
  }));

  return (
    <HubIndexPage
      locale={activeLocale}
      title={isAr ? "دليل الصين" : "China Guide"}
      description={
        isAr
          ? "مرجعك الجغرافي والتجاري للاستيراد من الصين — مدن، أسواق، مصانع، وموانئ."
          : "Your geographic and commercial reference for importing from China — cities, markets, factories, and ports."
      }
      hubPath={`/${activeLocale}/china`}
      cards={subdomainCards}
      sections={
        cityCards.length > 0
          ? [{ title: isAr ? "المدن الرئيسية" : "Featured Cities", cards: cityCards }]
          : undefined
      }
    />
  );
}
