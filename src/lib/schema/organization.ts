import { WithContext, Organization } from "schema-dts";
import { Locale } from "@/domains/shared/value-objects";

export const buildOrganizationSchema = (locale: Locale): WithContext<Organization> => {
  const isAr = locale === "ar";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.hossammabrouk.com";

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": isAr ? "مؤسسة دلتا للاستيراد والتصدير" : "Delta Import & Export",
    "alternateName": isAr ? "Delta Import & Export" : "دلتا للاستيراد والتصدير",
    "url": siteUrl,
    "logo": `${siteUrl}/og-image.png`,
    "description": isAr
      ? "مؤسسة متخصصة في خدمات الاستيراد المباشر من الصين، التخليص الجمركي، فحص الجودة وتأمين سلاسل الإمداد للشركات والمصانع."
      : "Specialized enterprise in direct China sourcing, customs clearance, quality inspection, and global supply chain security.",
    "founder": {
      "@type": "Person",
      "@id": `${siteUrl}/#person`
    },
    "areaServed": isAr
      ? [
          "الصين",
          "مصر",
          "المملكة العربية السعودية",
          "الإمارات العربية المتحدة",
          "دول الخليج العربي",
          "الشرق الأوسط"
        ]
      : [
          "China",
          "Egypt",
          "Saudi Arabia",
          "United Arab Emirates",
          "GCC",
          "Middle East"
        ]
  };
};
