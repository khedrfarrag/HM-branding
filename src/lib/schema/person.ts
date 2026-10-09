import { WithContext, Person } from "schema-dts";
import { Locale } from "@/domains/shared/value-objects";

export const buildPersonSchema = (locale: Locale): WithContext<Person> => {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://hussam-mabrouk.com/#person",
    "name": isAr ? "حسام مبروك" : "Hussam Mabrouk",
    "jobTitle": isAr ? "مستشار التجارة الدولية والاستيراد والتوريد من الصين" : "International Trade & China Sourcing Advisor",
    "url": "https://hussam-mabrouk.com",
    "email": "support@hossammabrouk.com",
    "sameAs": [
      "https://wa.me/201070707166",
      "https://www.instagram.com/hossam.mabrouk9",
      "https://snapchat.com/t/EwaOf46A",
      "https://www.facebook.com/share/1Buf9pVnFe/?mibextid=wwXIfr",
      "https://www.tiktok.com/@hossammabrouk9"
    ],
    "description": isAr
      ? "مستشار التجارة الدولية والاستيراد والتوريد من الصين. متخصص في فحص المصانع، تأسيس التجارة وإدارة الصفقات الدولية."
      : "International Trade & China Sourcing Advisor. Specializing in Factory Audits, Trade Setup & Global Deal Management.",
    "worksFor": {
      "@type": "Organization",
      "@id": "https://hussam-mabrouk.com/#organization"
    }
  };
};
