import { Locale, TradeIntelType, AlertSeverity } from "@/domains/shared/value-objects";
import { TradeIntel } from "@/domains/trade-intel/entities";
import { ITradeIntelRepository } from "@/domains/trade-intel/repository";

export class LocalFsTradeIntelRepository implements ITradeIntelRepository {
  async getTradeIntelItems(locale: Locale, type?: TradeIntelType): Promise<TradeIntel[]> {
    const isAr = locale === "ar";

    const items: TradeIntel[] = [
      {
        slug: "container-rate-surge-2026",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "ارتفاع أسعار الحاويات البحرية - تنبيه عاجل" : "Container Shipping Rate Surge - Urgent Alert",
          description: isAr ? "تحذير من ارتفاع أسعار الشحن البحري وتأثيره على المستوردين العرب" : "Alert on rising container shipping rates impacting Arab importers",
          canonicalPath: `/${locale}/trade-intelligence/shipping-news/container-rate-surge-2026`
        },
        feedType: "shipping-news",
        title: isAr ? "موجة ارتفاع تكاليف الشحن البحري الجديدة" : "New Wave of Maritime Shipping Cost Increases",
        body: isAr
          ? "شهدت أسعار الحاويات ارتفاعاً حاداً بسبب ضغط الطلب وتراجع سعة الأسطول، مما يؤثر مباشرة على تكاليف الاستيراد."
          : "Container rates surged sharply due to demand pressure and fleet capacity reduction, directly impacting import costs.",
        severity: "high" as AlertSeverity,
        active: true,
        region: isAr ? "مضيق هرمز - البحر الأحمر" : "Strait of Hormuz - Red Sea",
        sourceUrl: null
      },
      {
        slug: "china-customs-update-july-2026",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "تحديثات الجمارك الصينية - يوليو 2026" : "China Customs Updates - July 2026",
          description: isAr ? "آخر التعديلات على متطلبات التخليص الجمركي في الصين" : "Latest changes to Chinese customs clearance requirements",
          canonicalPath: `/${locale}/trade-intelligence/customs-updates/china-customs-update-july-2026`
        },
        feedType: "customs-updates",
        title: isAr ? "تعديلات على قوائم الفحص الجمركي الصينية" : "Revisions to Chinese Customs Inspection Lists",
        body: isAr
          ? "أجرت السلطات الصينية تعديلات على إجراءات الفحص لبعض فئات المنتجات."
          : "Chinese authorities revised inspection procedures for certain product categories.",
        severity: "medium" as AlertSeverity,
        active: true,
        region: "China",
        sourceUrl: null
      }
    ];

    if (type) return items.filter(i => i.feedType === type);
    return items;
  }

  async getTradeIntelBySlug(locale: Locale, type: TradeIntelType, slug: string): Promise<TradeIntel | null> {
    const items = await this.getTradeIntelItems(locale, type);
    return items.find(i => i.slug === slug) || null;
  }

  async getAllSlugs(locale: Locale): Promise<{ type: TradeIntelType; slug: string }[]> {
    const items = await this.getTradeIntelItems(locale);
    return items.map(i => ({ type: i.feedType, slug: i.slug }));
  }
}
