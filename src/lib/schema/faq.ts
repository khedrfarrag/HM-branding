import { WithContext, FAQPage } from "schema-dts";
import { FAQItem } from "@/data/faqs";
import { Locale } from "@/domains/shared/value-objects";

export const buildFAQPageSchema = (faqs: FAQItem[], locale: Locale): WithContext<FAQPage> => {
  const isAr = locale === "ar";

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": isAr ? f.questionAr : f.questionEn,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": isAr ? f.answerAr : f.answerEn,
      },
    })),
  };
};
