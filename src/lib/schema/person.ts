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
      "https://linkedin.com/in/hossammabrouk",
      "https://youtube.com/@hossammabrouk",
      "https://facebook.com/hossammabrouk"
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
