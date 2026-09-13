import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getEntitiesBySubdomain } from "@/features/china-guide/data";
import SubdomainCardGrid from "@/features/china-guide/components/SubdomainCardGrid";
import type { ChinaSubdomain, Locale } from "@/domains/shared/value-objects";
import { ChevronRight, ChevronLeft, ShieldCheck, Compass } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string; subdomain: string }>;
}

const SUBDOMAIN_LABELS: Record<ChinaSubdomain, { ar: string; en: string; subtitleAr: string; subtitleEn: string }> = {
  cities: {
    ar: "المدن والمحافظات الصينية",
    en: "Cities & Municipalities",
    subtitleAr: "دليل جغرافي وتجاري شامل يغطي 315 مدينة صينية ومقاطعاتها وميزاتها الصناعية والتجارية.",
    subtitleEn: "Comprehensive geographic and sourcing directory covering 315 Chinese cities and industrial hubs."
  },
  markets: {
    ar: "أسواق الجملة والمراكز التجارية",
    en: "Wholesale Markets",
    subtitleAr: "دليل أسواق الجملة الكبرى ومجمعات المعارض في الـ 34 مدينة صناعية بالصين.",
    subtitleEn: "Directory of major wholesale markets and exhibition pavilions across China."
  },
  factories: {
    ar: "المصانع وقواعد التصنيع",
    en: "Factories & Industrial Parks",
    subtitleAr: "أكبر المجمعات الصناعية ومصانع OEM/ODM المعتمدة لتوريد المنتجات عالية الجودة.",
    subtitleEn: "Leading certified manufacturing clusters and OEM/ODM assembly facilities."
  },
  hotels: {
    ar: "فنادق رجال الأعمال والتجارة",
    en: "Business Hotels",
    subtitleAr: "أفضل فنادق 4 و 5 نجوم المختارة لرجال الأعمال بالقرب من الأسواق ومراكز المعارض.",
    subtitleEn: "Top 4-star and 5-star executive hotels near wholesale hubs and expos."
  },
  restaurants: {
    ar: "المطاعم الحلال والإسلامية",
    en: "Halal & Muslim Dining",
    subtitleAr: "دليل موثق لأشهى المطاعم الحلال المعتمدة وقاعات الولائم لرجال الأعمال في الصين.",
    subtitleEn: "Verified guide to certified halal dining and executive business restaurants in China."
  },
  translators: {
    ar: "المترجمون والخدمات التجارية",
    en: "Commercial Translators",
    subtitleAr: "مكاتب وخدمات الترجمة الفورية المعتمدة ومرافقة المعارض والمصانع والتفاوض.",
    subtitleEn: "Certified commercial interpreters and factory audit accompaniment services."
  },
  "shipping-lines": {
    ar: "خطوط الملاحة البحرية (الناقلون)",
    en: "Shipping Lines (Ocean Carriers)",
    subtitleAr: "أكبر خطوط وشركات الملاحة البحرية العالمية وناقلو الحاويات العاملين في الموانئ الصينية.",
    subtitleEn: "Major global ocean container carriers and liner services operating in Chinese ports."
  },
  logistics: {
    ar: "شركات الشحن واللوجستيات",
    en: "Freight Forwarders & Logistics",
    subtitleAr: "شركات ووكلاء الشحن الدولي، التخليص الجمركي، ومستودعات التجميع المعتمدة في الصين.",
    subtitleEn: "International freight forwarders, customs brokerage, and cargo consolidation hubs."
  },
  "shipping-companies": {
    ar: "شركات الشحن واللوجستيات",
    en: "Shipping & Freight Forwarders",
    subtitleAr: "وكلاء وخطوط الشحن البحري والجوي والتخليص الجمركي المباشر للشرق الأوسط والخليج.",
    subtitleEn: "Premier freight forwarders with direct ocean and air container routes to Arab ports."
  },
  ports: {
    ar: "الموانئ والمنافذ اللوجستية",
    en: "Ports & Cargo Hubs",
    subtitleAr: "الموانئ البحرية والجافة ومحطات الشحن الأضخم في الصين مع رموز UN/LOCODE وسعات التداول.",
    subtitleEn: "China premier deepwater container seaports and river ports with UN/LOCODE and capacity."
  },
  "industrial-zones": {
    ar: "المدن والمجمعات الصناعية",
    en: "Industrial Zones & Parks",
    subtitleAr: "مناطق التنمية الصناعية، مدن التكنولوجيا الفائقة، والتجمعات القطاعية المتخصصة في الصين.",
    subtitleEn: "National development zones, high-tech industrial parks, and specialized manufacturing clusters."
  },
  "economic-zones": {
    ar: "المناطق الاقتصادية الخاصة",
    en: "Special Economic Zones (SEZ / FTZ)",
    subtitleAr: "المناطق الاقتصادية الخاصة (SEZ)، مناطق التجارة الحرة التجريبية (FTZ)، والمناطق الجمركية المعفاة.",
    subtitleEn: "Special Economic Zones (SEZ), Pilot Free Trade Zones (FTZ), and bonded port logistics areas."
  },
  airports: {
    ar: "مطارات الشحن والسفر الدولي",
    en: "Cargo & International Airports",
    subtitleAr: "مطارات الشحن الجوي والمطارات الدولية في الصين مع رموز IATA و ICAO والقدرات التشغيلية.",
    subtitleEn: "China major international air cargo hubs and passenger airports with IATA and ICAO codes."
  },
  "trade-fairs": {
    ar: "المعارض التجارية والمؤتمرات",
    en: "Trade Fairs & Expos",
    subtitleAr: "دليل المعارض التجارية الدورية ومجمعات المعارض الكبرى مثل معرض كانتون ومعرض إيوو الدولي.",
    subtitleEn: "Comprehensive calendar and guide to major Chinese trade exhibitions and expo centers."
  },
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
    title: isAr
      ? `دليل ${label} في الصين للمستوردين — حسام مبروك`
      : `China ${label} Sourcing Guide — Hussam Mabrouk`,
    description: isAr
      ? `دليل شامل وميداني لـ ${label} في الصين: عناوين بالصينية، تقييمات موثقة، إحداثيات GPS، وتوصيات المستشار التجاري حسام مبروك.`
      : `Comprehensive ground sourcing guide for ${label} in China with Chinese addresses, GPS coordinates, and verified insights by Hussam Mabrouk.`,
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/china/${subdomain}` },
  };
}

export default async function ChinaSubdomainHubPage({ params }: PageProps) {
  const { locale, subdomain } = await params;
  if (!SUBDOMAINS.includes(subdomain as ChinaSubdomain)) notFound();

  const sub = subdomain as ChinaSubdomain;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const subInfo = SUBDOMAIN_LABELS[sub];
  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;

  // Retrieve entities for this subdomain
  const entities = getEntitiesBySubdomain(sub);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href={`/${activeLocale}`} className="hover:text-amber-400 transition-colors">
            {isAr ? "الرئيسية" : "Home"}
          </Link>
          <ChevronIcon className="w-3.5 h-3.5" />
          <Link href={`/${activeLocale}/china`} className="hover:text-amber-400 transition-colors">
            {isAr ? "دليل الصين" : "China Guide"}
          </Link>
          <ChevronIcon className="w-3.5 h-3.5" />
          <span className="text-amber-400 font-bold">{isAr ? subInfo.ar : subInfo.en}</span>
        </nav>

        {/* Hero Section */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-black">
            <Compass className="w-3.5 h-3.5" />
            <span>{isAr ? "دليل الصين المعتمد" : "China Verified Guide"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {isAr ? subInfo.ar : subInfo.en}
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {isAr ? subInfo.subtitleAr : subInfo.subtitleEn}
          </p>

          {/* Verification Banner */}
          <div className="flex items-center gap-2 pt-2 text-xs font-bold text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 px-3 py-2 rounded-xl w-fit">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              {isAr
                ? "تم التوثيق والتدقيق الميداني بواسطة المستشار التجاري حسام مبروك"
                : "Field-verified and curated by Trade Consultant Hussam Mabrouk"}
            </span>
          </div>
        </div>

        {/* Visual Entity Grid with Search & Filters */}
        <SubdomainCardGrid
          locale={activeLocale}
          subdomain={sub}
          entities={entities}
        />
      </div>
    </div>
  );
}
