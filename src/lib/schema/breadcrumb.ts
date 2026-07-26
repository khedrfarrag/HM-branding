import { WithContext, BreadcrumbList } from "schema-dts";

export interface BreadcrumbItem {
  name: string;
  item: string; // Absolute URL or path
}

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]): WithContext<BreadcrumbList> => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item.startsWith("http")
        ? item.item
        : `https://hussam-mabrouk.com${item.item}`
    }))
  };
};
