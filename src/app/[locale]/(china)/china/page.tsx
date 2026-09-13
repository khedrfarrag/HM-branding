import { Metadata } from "next";
import HubIndexPage from "@/components/HubIndexPage";
import { LocalFsChinaRepository } from "@/repositories/local-fs/china";
import { getSubdomainEntityCount } from "@/features/china-guide/data";
import type { ChinaSubdomain, Locale } from "@/domains/shared/value-objects";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const chinaRepo = new LocalFsChinaRepository();

interface SubdomainConfig {
  ar: string;
  en: string;
  descriptionAr: string;
  descriptionEn: string;
}

const DISPLAY_SUBDOMAINS: { sub: ChinaSubdomain; config: SubdomainConfig }[] = [
  {
    sub: "cities",
    config: {
      ar: "المدن والمحافظات الصينية",
      en: "Cities & Municipalities",
      descriptionAr: "دليل جغرافي وتجاري يغطي 315 مدينة صينية ومقاطعاتها وقدراتها الإنتاجية.",
      descriptionEn: "Geographic and trade coverage across 315 Chinese cities and production clusters.",
    },
  },
  {
    sub: "ports",
    config: {
      ar: "الموانئ البحرية والنهرية",
      en: "Seaports & River Ports",
      descriptionAr: "160 ميناء بحري ونهري رئيسي مع رموز UN/LOCODE وسعات التداول ومحطات الحاويات.",
      descriptionEn: "160 deepwater seaports and river ports with UN/LOCODE, TEU capacity, and terminals.",
    },
  },
  {
    sub: "shipping-lines",
    config: {
      ar: "خطوط الملاحة البحرية (الناقلون)",
      en: "Shipping Lines (Ocean Carriers)",
      descriptionAr: "أكبر خطوط الحاويات العالمية العاملة في الموانئ الصينية مع مسارات الشرق الأوسط.",
      descriptionEn: "Global container carriers serving Chinese ports with direct Middle East routes.",
    },
  },
  {
    sub: "logistics",
    config: {
      ar: "شركات الشحن واللوجستيات",
      en: "Freight Forwarders & Logistics",
      descriptionAr: "وكلاء شحن دوليون، تخليص جمركي، ومستودعات التجميع المعتمدة في الموانئ الصينية.",
      descriptionEn: "International freight forwarders, customs brokers, and consolidation hubs.",
    },
  },
  {
    sub: "markets",
    config: {
      ar: "أسواق الجملة والمراكز التجارية",
      en: "Wholesale Markets",
      descriptionAr: "أكبر أسواق الجملة المتخصصة في إيوو، كوانزو، شنزن، فوشان وغيرها.",
      descriptionEn: "Specialized wholesale markets and procurement complexes across China.",
    },
  },
  {
    sub: "factories",
    config: {
      ar: "المصانع وقواعد التصنيع",
      en: "Manufacturing & Factories",
      descriptionAr: "مصانع OEM/ODM ومجمعات تصنيع معتمدة وموثقة لرجال الأعمال والمستوردين.",
      descriptionEn: "Verified OEM/ODM factories and manufacturing plants across industrial belts.",
    },
  },
  {
    sub: "industrial-zones",
    config: {
      ar: "المدن والمجمعات الصناعية",
      en: "Industrial Zones & Parks",
      descriptionAr: "مجمعات التصنيع المتخصصة، مدن التكنولوجيا الفائقة، والتجمعات القطاعية.",
      descriptionEn: "Specialized industrial parks, high-tech development zones, and clusters.",
    },
  },
  {
    sub: "economic-zones",
    config: {
      ar: "المناطق الاقتصادية الخاصة (SEZ / FTZ)",
      en: "Special Economic Zones",
      descriptionAr: "مناطق التجارة الحرة، المناطق الاقتصادية الخاصة ومناطق الإيداع الجمركي.",
      descriptionEn: "Special Economic Zones (SEZ), Pilot Free Trade Zones (FTZ), and bonded ports.",
    },
  },
  {
    sub: "airports",
    config: {
      ar: "مطارات الشحن والسفر الدولي",
      en: "Airports & Air Cargo Hubs",
      descriptionAr: "مطارات الشحن الجوي والركاب مع رموز IATA/ICAO ومحطات الشحن الجوي السريع.",
      descriptionEn: "Commercial and air cargo hubs with IATA/ICAO codes and terminal facilities.",
    },
  },
  {
    sub: "trade-fairs",
    config: {
      ar: "المعارض التجارية والمؤتمرات",
      en: "Trade Fairs & Expos",
      descriptionAr: "معرض كانتون، معرض إيوو، ومعارض الصناعات الكبرى مع المواعيد والمراكز.",
      descriptionEn: "Canton Fair, Yiwu Fair, and leading industrial trade exhibitions.",
    },
  },
  {
    sub: "hotels",
    config: {
      ar: "فنادق رجال الأعمال والتجارة",
      en: "Business Hotels",
      descriptionAr: "فنادق 4 و 5 نجوم المختارة بالقرب من مجمعات الأسواق ومراكز المعارض.",
      descriptionEn: "Selected 4-star and 5-star executive hotels near markets and expo centres.",
    },
  },
  {
    sub: "translators",
    config: {
      ar: "المترجمون والخدمات التجارية",
      en: "Commercial Translators",
      descriptionAr: "مترجمون تجاريون معتمدون وخدمات مرافقة المصانع والتدقيق والتفاوض.",
      descriptionEn: "Certified commercial translators and negotiation accompaniment services.",
    },
  },
  {
    sub: "restaurants",
    config: {
      ar: "المطاعم الحلال والإسلامية",
      en: "Halal & Muslim-Friendly Dining",
      descriptionAr: "مطاعم حلال موثقة لرجال الأعمال والوفود التجارية في المدن الصناعية.",
      descriptionEn: "Verified halal dining and Muslim-friendly executive restaurants across cities.",
    },
  },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "دليل الصين التجاري الشامل للاستيراد والتصدير — المستشار حسام مبروك"
      : "China Business & Trade Directory — Consultant Hussam Mabrouk",
    description: isAr
      ? "الدليل الأكبر للاستيراد من الصين: أكثر من 3,000 منشأة موثقة تشمل 315 مدينة، 160 ميناء، مصانع، أسواق جملة، خطوط ملاحة، ومناطق اقتصادية بإشراف المستشار التجاري حسام مبروك."
      : "The premier China sourcing directory: over 3,000 verified entities covering 315 cities, 160 ports, factories, wholesale markets, shipping lines, and economic zones curated by Trade Consultant Hussam Mabrouk.",
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/china` },
  };
}

export default async function ChinaHubPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const cities = await chinaRepo.getCities(activeLocale);

  const subdomainCards = DISPLAY_SUBDOMAINS.map(({ sub, config }) => {
    const count = getSubdomainEntityCount(sub);
    const countBadge = isAr ? `${count} منشأة موثقة` : `${count} Verified`;

    return {
      title: isAr ? config.ar : config.en,
      description: isAr ? config.descriptionAr : config.descriptionEn,
      href: `/${activeLocale}/china/${sub}`,
      badge: countBadge,
    };
  });

  const cityCards = cities.map((city) => ({
    title: city.name,
    description: city.description,
    href: `/${activeLocale}/china-cities/${city.slug}`,
    badge: isAr ? "دليل استيراد تفصيلي" : "Deep-Dive Sourcing Guide",
  }));

  const auditCard = [
    {
      title: isAr ? "لوحة تدقيق التغطية ومصداقية البيانات (Live Coverage Audit)" : "Live Database Coverage & Source Audit",
      description: isAr
        ? "فحص مباشر لامتثال 3,062 منشأة: نسبة التوثيق الميداني من حسام مبروك، مصادر السجلات الرسمية، ومؤشرات الجودة."
        : "Live audit of 3,062 entities: field verification rates by Hussam Mabrouk, official source backing, and compliance stats.",
      href: `/${activeLocale}/china/coverage`,
      badge: isAr ? "100% موثّق بالكامل" : "100% Source Backed",
    },
  ];

  return (
    <HubIndexPage
      locale={activeLocale}
      title={isAr ? "دليل الصين التجاري الشامل للاستيراد والتصدير" : "China Business & Sourcing Directory"}
      description={
        isAr
          ? "المرجع الأضخم والأشمل المعتمد للتجارة والاستيراد من الصين — أكثر من 3,000 منشأة موثقة تشمل المدن، الموانئ، خطوط الملاحة، أسواق الجملة، المصانع، المناطق الاقتصادية والمطارات، بإشراف وتدقيق المستشار التجاري حسام مبروك."
          : "The most comprehensive ground-verified business and sourcing directory for China — over 3,000 entities covering cities, seaports, shipping lines, wholesale markets, manufacturing plants, SEZs, and airports, curated by Trade Consultant Hussam Mabrouk."
      }
      hubPath={`/${activeLocale}/china`}
      cards={subdomainCards}
      sections={[
        {
          title: isAr ? "تدقيق الجودة والمصداقية" : "Quality & Compliance Audit",
          cards: auditCard,
        },
        ...(cityCards.length > 0
          ? [
              {
                title: isAr
                  ? "أهم 34 مدينة صناعية وتجارية (ملفات تفصيلية)"
                  : "Top 34 Industrial Cities (Deep-Dive Guides)",
                cards: cityCards,
              },
            ]
          : []),
      ]}
    />
  );
}
