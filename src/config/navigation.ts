import { Locale } from "@/domains/shared/value-objects";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterColumn {
  label: string;
  links: NavItem[];
}

export interface NavigationConfig {
  header: NavItem[];
  footer: {
    columns: FooterColumn[];
    legal: NavItem[];
    socials: { platform: string; url: string }[];
  };
  cta: NavItem;
}

/** Locale-relative path segments — prepended with /{locale} at runtime. */
const PRIMARY_NAV = [
  {
    labelAr: "المعرفة",
    labelEn: "Knowledge",
    href: "/knowledge",
    children: [
      { labelAr: "المقالات", labelEn: "Articles", href: "/knowledge" },
      { labelAr: "قاموس المصطلحات", labelEn: "Glossary", href: "/knowledge/glossary" },
      { labelAr: "الأسئلة الشائعة", labelEn: "FAQ", href: "/knowledge/faq" },
    ],
  },
  {
    labelAr: "الخبرات",
    labelEn: "Experiences",
    href: "/experiences",
    children: [
      { labelAr: "رحلات الأعمال", labelEn: "Business Trips", href: "/experiences/business-trips" },
      { labelAr: "جولات المصانع", labelEn: "Factory Tours", href: "/experiences/factory-tours" },
      { labelAr: "برنامج كانتون", labelEn: "Canton Fair", href: "/experiences/canton-fair-programs" },
      { labelAr: "برامج الشركات", labelEn: "Corporate Programs", href: "/experiences/corporate-programs" },
      { labelAr: "VIP", labelEn: "VIP Experiences", href: "/experiences/vip-experiences" },
      { labelAr: "الإرشاد الخاص", labelEn: "Private Mentorship", href: "/experiences/private-mentorship" },
    ],
  },
  {
    labelAr: "الخدمات",
    labelEn: "Services",
    href: "/services",
    children: [
      { labelAr: "مصادر المنتجات", labelEn: "Product Sourcing", href: "/services/sourcing" },
      { labelAr: "فحص الجودة", labelEn: "Quality Control", href: "/services/quality-control" },
      { labelAr: "التحقق من الموردين", labelEn: "Supplier Verification", href: "/services/verification" },
    ],
  },
  {
    labelAr: "دليل الصين",
    labelEn: "China Guide",
    href: "/china",
    children: [
      { labelAr: "المدن", labelEn: "Cities", href: "/china/cities" },
      { labelAr: "الأسواق", labelEn: "Markets", href: "/china/markets" },
      { labelAr: "المصانع", labelEn: "Factories", href: "/china/factories" },
      { labelAr: "الموانئ", labelEn: "Ports", href: "/china/ports" },
    ],
  },
  {
    labelAr: "ذكاء التجارة",
    labelEn: "Trade Intel",
    href: "/trade-intelligence",
    children: [
      { labelAr: "أخبار الشحن", labelEn: "Shipping News", href: "/trade-intelligence/shipping-news" },
      { labelAr: "تحديثات الجمارك", labelEn: "Customs Updates", href: "/trade-intelligence/customs-updates" },
      { labelAr: "أسعار العملات", labelEn: "Currency Rates", href: "/trade-intelligence/currency-rates" },
      { labelAr: "تنبيهات سلسلة التوريد", labelEn: "Supply Chain Alerts", href: "/trade-intelligence/supply-chain-alerts" },
    ],
  },
] as const;

const FOOTER_COLUMNS = [
  {
    labelAr: "عن حسام",
    labelEn: "About",
    links: [
      { labelAr: "السيرة الذاتية", labelEn: "Biography", href: "/about/bio" },
      { labelAr: "الإنجازات", labelEn: "Achievements", href: "/about/achievements" },
      { labelAr: "الشهادات", labelEn: "Certificates", href: "/about/certificates" },
      { labelAr: "المسيرة المهنية", labelEn: "Timeline", href: "/about/timeline" },
      { labelAr: "الوسائط", labelEn: "Media", href: "/media" },
    ],
  },
  {
    labelAr: "المعرفة",
    labelEn: "Knowledge",
    links: PRIMARY_NAV[0].children,
  },
  {
    labelAr: "الخبرات",
    labelEn: "Experiences",
    links: PRIMARY_NAV[1].children,
  },
  {
    labelAr: "الخدمات",
    labelEn: "Services",
    links: [
      ...PRIMARY_NAV[2].children,
      { labelAr: "قصص النجاح", labelEn: "Success Stories", href: "/success-stories" },
      { labelAr: "تواصل معنا", labelEn: "Contact", href: "/contact" },
    ],
  },
  {
    labelAr: "الصين والتجارة",
    labelEn: "China & Trade",
    links: [
      { labelAr: "دليل الصين", labelEn: "China Guide", href: "/china" },
      ...PRIMARY_NAV[3].children,
      { labelAr: "ذكاء التجارة", labelEn: "Trade Intel", href: "/trade-intelligence" },
      ...PRIMARY_NAV[4].children,
    ],
  },
] as const;

const LEGAL_LINKS = [
  { labelAr: "سياسة الخصوصية", labelEn: "Privacy Policy", href: "/legal/privacy" },
  { labelAr: "شروط الاستخدام", labelEn: "Terms of Service", href: "/legal/terms" },
  { labelAr: "خريطة الموقع", labelEn: "Sitemap", href: "/sitemap.xml" },
] as const;

const SOCIALS = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/hossammabrouk" },
  { platform: "YouTube", url: "https://youtube.com/@hossammabrouk" },
  { platform: "Facebook", url: "https://facebook.com/hossammabrouk" },
] as const;

const CTA = {
  labelAr: "احجز مكالمة",
  labelEn: "Book a Call",
  href: "/booking/consultation/general",
} as const;

type LocalizedEntry = {
  labelAr: string;
  labelEn: string;
  href: string;
  children?: readonly LocalizedEntry[];
};

function localizePath(locale: Locale, href: string): string {
  if (href.startsWith("http") || href.startsWith("/sitemap")) {
    return href;
  }
  return `/${locale}${href}`;
}

function toNavItem(locale: Locale, isAr: boolean, entry: LocalizedEntry): NavItem {
  return {
    label: isAr ? entry.labelAr : entry.labelEn,
    href: localizePath(locale, entry.href),
    children: entry.children?.map((child) => toNavItem(locale, isAr, child)),
  };
}

export const getNavigationConfig = (locale: Locale): NavigationConfig => {
  const isAr = locale === "ar";

  return {
    header: PRIMARY_NAV.map((item) => toNavItem(locale, isAr, item)),
    footer: {
      columns: FOOTER_COLUMNS.map((col) => ({
        label: isAr ? col.labelAr : col.labelEn,
        links: col.links.map((link) => toNavItem(locale, isAr, link)),
      })),
      legal: LEGAL_LINKS.map((link) => toNavItem(locale, isAr, link)),
      socials: [...SOCIALS],
    },
    cta: toNavItem(locale, isAr, CTA),
  };
};
