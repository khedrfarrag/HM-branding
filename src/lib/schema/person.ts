import { WithContext, Person } from "schema-dts";
import { Locale } from "@/domains/shared/value-objects";

export const buildPersonSchema = (locale: Locale): WithContext<Person> => {
  const isAr = locale === "ar";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.hossammabrouk.com";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    "name": isAr ? "حسام مبروك" : "Hussam Mabrouk",
    "alternateName": isAr ? "Hussam Mabrouk" : "حسام مبروك",
    "jobTitle": isAr ? "خبير التجارة والتوريد والتصنيع ومؤسس دلتا للاستيراد والتصدير" : "International Trade, Sourcing & Manufacturing Specialist & Founder of Delta Import & Export",
    "image": `${siteUrl}/images/hossam-mabrouk-hero.jpg`,
    "url": siteUrl,
    "sameAs": [
      "https://wa.me/201070707166",
      "https://www.instagram.com/hossam.mabrouk9",
      "https://snapchat.com/t/EwaOf46A",
      "https://www.facebook.com/share/1Buf9pVnFe/?mibextid=wwXIfr",
      "https://www.tiktok.com/@hossammabrouk9"
    ],
    "knowsAbout": isAr
      ? [
          "الاستيراد من الصين",
          "التجارة الدولية",
          "التصنيع وتطوير المنتجات OEM و ODM",
          "فحص المصانع ومراقبة الجودة",
          "مصطلحات الشحن والتجارة Incoterms",
          "التخليص الجمركي واللوائح التجارية",
          "حساب تكلفة الوصول Landed Cost",
          "شحن الحاويات وسلاسل الإمداد"
        ]
      : [
          "China Sourcing",
          "International Trade",
          "OEM & ODM Manufacturing",
          "Factory Auditing & Quality Inspection",
          "Incoterms 2020",
          "Customs Clearance",
          "Landed Cost Calculation",
          "Container Logistics & Ocean Freight"
        ],
    "description": isAr
      ? "خبير ومستشار الاستيراد المباشر من الصين، إدارة سلاسل الإمداد، ومؤسس مؤسسة دلتا للاستيراد والتصدير."
      : "China Sourcing Consultant, International Trade Specialist, and Founder of Delta Import & Export.",
    "worksFor": {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`
    }
  };
};
