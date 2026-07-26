import { WithContext, Organization } from "schema-dts";
import { Locale } from "@/domains/shared/value-objects";

export const buildOrganizationSchema = (locale: Locale): WithContext<Organization> => {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hussam-mabrouk.com/#organization",
    "name": isAr ? "دلتا للاستيراد والتصدير" : "Delta Import & Export",
    "url": "https://hussam-mabrouk.com",
    "logo": "https://hussam-mabrouk.com/images/logo.png",
    "description": isAr
      ? "شركة رائدة في مجال الاستيراد والتصدير والخدمات اللوجستية وتأمين سلاسل الإمداد من الصين"
      : "A leading company in import, export, logistics, and supply chain security from China.",
    "founder": {
      "@type": "Person",
      "@id": "https://hussam-mabrouk.com/#person"
    }
  };
};
