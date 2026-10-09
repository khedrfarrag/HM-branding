import { Locale } from "@/domains/shared/value-objects";
import { buildPersonSchema } from "./person";
import { buildOrganizationSchema } from "./organization";

export interface EntityGraph extends Record<string, unknown> {
  "@context": "https://schema.org";
  "@graph": Array<Record<string, unknown>>;
}

export function buildEntityGraph(locale: Locale): EntityGraph {
  const isAr = locale === "ar";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.hossammabrouk.com";

  const person = buildPersonSchema(locale);
  const organization = buildOrganizationSchema(locale);

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": isAr ? "حسام مبروك | خبير التجارة والتوريد والتصنيع" : "Hussam Mabrouk | Global Trade, Sourcing & Manufacturing Specialist",
    "description": isAr
      ? "المنصة الرسمية للمستشار حسام مبروك لتأمين صفقات الاستيراد المباشر من الصين، ودليل المدن الصناعية، وحاسبات التاجر المجانية."
      : "Official portal of Hossam Mabrouk for direct China sourcing, industrial cluster guides, and free merchant calculators.",
    "publisher": {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`
    },
    "inLanguage": isAr ? "ar-EG" : "en-US"
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      person as unknown as Record<string, unknown>,
      organization as unknown as Record<string, unknown>,
      website
    ]
  };
}
