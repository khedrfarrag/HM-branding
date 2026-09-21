import { WithContext, Person } from "schema-dts";
import { Locale } from "@/domains/shared/value-objects";

export const buildPersonSchema = (locale: Locale): WithContext<Person> => {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://hussam-mabrouk.com/#person",
    "name": isAr ? "حسام مبروك" : "Hussam Mabrouk",
    "jobTitle": isAr ? "مؤسس دلتا للاستيراد والتصدير" : "Founder of Delta Import & Export",
    "url": "https://hussam-mabrouk.com",
    "sameAs": [
      "https://wa.me/201070707166",
      "https://www.instagram.com/hossam.mabrouk9",
      "https://snapchat.com/t/EwaOf46A",
      "https://www.facebook.com/share/1Buf9pVnFe/?mibextid=wwXIfr",
      "https://www.tiktok.com/@hossammabrouk9"
    ],
    "description": isAr
      ? "خبير ومستشار الاستيراد من الصين ومؤسس شركة دلتا للاستيراد والتصدير والخدمات اللوجستية"
      : "China Sourcing Consultant, Import Specialist, and Founder of Delta Import & Export.",
    "worksFor": {
      "@type": "Organization",
      "@id": "https://hussam-mabrouk.com/#organization"
    }
  };
};
