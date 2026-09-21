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

/**
 * Header anchor nav — links scroll to home-page sections.
 * Hrefs starting with /#  are converted to /{locale}#section at runtime.
 * Hrefs without a matching home section keep their full page path.
 */
const HEADER_NAV = [
  { labelAr: "عن حسام",          labelEn: "About Hossam",       href: "/#about" },
  { labelAr: "ماذا ستجد هنا",    labelEn: "What You'll Find",   href: "/#what-you-will-find" },
  { labelAr: "الخدمات",          labelEn: "Services",           href: "/#services" },
  { labelAr: "الخبرات",          labelEn: "Experiences",        href: "/#journey" },
  { labelAr: "دليل الصين",       labelEn: "China Guide",        href: "/china" },
  { labelAr: "الخبرة والتغطية",  labelEn: "Global Reach",       href: "/#global" },
  { labelAr: "ذكاء التجارة",     labelEn: "Trade Intel",        href: "/trade-intelligence" },
  { labelAr: "أدوات التاجر",     labelEn: "Merchant Tools",     href: "/tools" },
] as const;

/** Full nav tree — used for sitemap and full reference. */
export const PRIMARY_NAV = [
  {
    labelAr: "عن حسام",
    labelEn: "About Hossam",
    href: "/about/bio",
    children: [
      { labelAr: "السيرة الذاتية", labelEn: "Biography", href: "/about/bio" },
      { labelAr: "الإنجازات", labelEn: "Achievements", href: "/about/achievements" },
      { labelAr: "مسيرة العمل", labelEn: "Timeline", href: "/about/timeline" },
      { labelAr: "الحسابات المعتمدة", labelEn: "Verified Directory", href: "/about/directory" },
      { labelAr: "الأسئلة الشائعة", labelEn: "FAQ", href: "/about/faq" },
      { labelAr: "الوسائط", labelEn: "Media", href: "/media" },
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
] as const;

const FOOTER_COLUMNS = [
  {
    labelAr: "عن حسام",
    labelEn: "About",
    links: [
      { labelAr: "السيرة الذاتية", labelEn: "Biography", href: "/about/bio" },
      { labelAr: "الإنجازات", labelEn: "Achievements", href: "/about/achievements" },
      { labelAr: "المسيرة المهنية", labelEn: "Timeline", href: "/about/timeline" },
      { labelAr: "الحسابات المعتمدة", labelEn: "Verified Directory", href: "/about/directory" },
      { labelAr: "الأسئلة الشائعة", labelEn: "FAQ", href: "/about/faq" },
      { labelAr: "الوسائط", labelEn: "Media", href: "/media" },
    ],
  },
  {
    labelAr: "الخبرات",
    labelEn: "Experiences",
    links: [
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
    links: [
      { labelAr: "مصادر المنتجات", labelEn: "Product Sourcing", href: "/services/sourcing" },
      { labelAr: "فحص الجودة", labelEn: "Quality Control", href: "/services/quality-control" },
      { labelAr: "التحقق من الموردين", labelEn: "Supplier Verification", href: "/services/verification" },
      { labelAr: "قصص النجاح", labelEn: "Success Stories", href: "/success-stories" },
      { labelAr: "تواصل معنا", labelEn: "Contact", href: "/contact" },
    ],
  },
  {
    labelAr: "الصين والتجارة",
    labelEn: "China & Trade",
    links: [
      { labelAr: "دليل الصين", labelEn: "China Guide", href: "/china" },
      { labelAr: "المدن والأسواق", labelEn: "Cities & Markets", href: "/china/cities" },
      { labelAr: "المصانع والموانئ", labelEn: "Factories & Ports", href: "/china/factories" },
      { labelAr: "ذكاء التجارة", labelEn: "Trade Intel", href: "/trade-intelligence" },
      { labelAr: "أخبار الشحن والجمارك", labelEn: "Shipping & Customs", href: "/trade-intelligence/shipping-news" },
    ],
  },
  {
    labelAr: "أدوات مجانية",
    labelEn: "Free Tools",
    links: [
      { labelAr: "حاسبة CBM والحاوية", labelEn: "CBM Calculator", href: "/tools" },
      { labelAr: "حاسبة الوزن الحجمي", labelEn: "Volumetric Weight", href: "/tools" },
      { labelAr: "حاسبة التكلفة الواصلة", labelEn: "Landed Cost", href: "/tools" },
      { labelAr: "حاسبة هامش الربح", labelEn: "Profit Margin & ROI", href: "/tools" },
      { labelAr: "مقدر تكاليف الشحن", labelEn: "Freight Estimator", href: "/tools" },
    ],
  },
] as const;

const LEGAL_LINKS = [
  { labelAr: "سياسة الخصوصية", labelEn: "Privacy Policy", href: "/legal/privacy" },
  { labelAr: "شروط الاستخدام", labelEn: "Terms of Service", href: "/legal/terms" },
  { labelAr: "خريطة الموقع", labelEn: "Sitemap", href: "/sitemap.xml" },
] as const;

const SOCIALS = [
  { platform: "WhatsApp", url: "https://wa.me/201070707166" },
  { platform: "Instagram", url: "https://www.instagram.com/hossam.mabrouk9" },
  { platform: "Snapchat", url: "https://snapchat.com/t/EwaOf46A" },
  { platform: "Facebook", url: "https://www.facebook.com/share/1Buf9pVnFe/?mibextid=wwXIfr" },
  { platform: "TikTok", url: "https://www.tiktok.com/@hossammabrouk9" },
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
  // /#about  →  /ar#about  (home-section anchor)
  if (href.startsWith("/#")) {
    return `/${locale}${href.slice(1)}`;
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
    header: HEADER_NAV.map((item) => toNavItem(locale, isAr, item)),
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
