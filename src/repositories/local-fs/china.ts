import { Locale } from "@/domains/shared/value-objects";
import { ChinaCity, Market, ChinaSubdomainEntity } from "@/domains/china/entities";
import { IChinaRepository } from "@/domains/china/repository";

export class LocalFsChinaRepository implements IChinaRepository {
  async getCities(locale: Locale): Promise<ChinaCity[]> {
    const isAr = locale === "ar";
    return [
      {
        slug: "guangzhou",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "غوانزو - مركز التجارة والاستيراد في الصين" : "Guangzhou - China's Trade & Sourcing Hub",
          description: isAr ? "دليلك الشامل لمدينة غوانزو التجارية في الصين وأبرز أسواقها" : "Complete guide to Guangzhou's trade markets and sourcing opportunities",
          canonicalPath: `/${locale}/china/cities/guangzhou`
        },
        name: isAr ? "غوانزو" : "Guangzhou",
        nameEn: "Guangzhou",
        region: isAr ? "غوانغدونغ" : "Guangdong",
        coordinates: { latitude: 23.1291, longitude: 113.2644 },
        description: isAr
          ? "مدينة غوانزو هي عاصمة التجارة الصينية ومقر معرض كانتون الشهير."
          : "Guangzhou is China's commercial capital and home to the renowned Canton Fair.",
        bestVisitMonths: [isAr ? "أبريل" : "April", isAr ? "أكتوبر" : "October"],
        coverImage: "/images/china/guangzhou.jpg"
      },
      {
        slug: "yiwu",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "يووو - مدينة البضائع الصغيرة والهدايا" : "Yiwu - World's Largest Small Goods Market",
          description: isAr ? "أكبر سوق للبضائع الصغيرة في العالم" : "World's largest wholesale market for small commodities",
          canonicalPath: `/${locale}/china/cities/yiwu`
        },
        name: isAr ? "يووو" : "Yiwu",
        nameEn: "Yiwu",
        region: isAr ? "تشجيانغ" : "Zhejiang",
        coordinates: { latitude: 29.3064, longitude: 120.0750 },
        description: isAr
          ? "يووو هي موطن السوق الدولي لبضائع الجملة الصغيرة، ومقصد كل مستورد يبحث عن تنوع المنتجات."
          : "Yiwu hosts the world's largest wholesale market for small commodities.",
        bestVisitMonths: [isAr ? "مارس" : "March", isAr ? "سبتمبر" : "September"],
        coverImage: "/images/china/yiwu.jpg"
      }
    ];
  }

  async getCityBySlug(locale: Locale, slug: string): Promise<ChinaCity | null> {
    const cities = await this.getCities(locale);
    return cities.find(c => c.slug === slug) || null;
  }

  async getMarkets(locale: Locale, citySlug?: string): Promise<Market[]> {
    const isAr = locale === "ar";
    const markets: Market[] = [
      {
        slug: "canton-fair",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "معرض كانتون الدولي - أكبر معرض تجاري في الصين" : "Canton Fair - China's Largest International Trade Fair",
          description: isAr ? "دليل معرض كانتون ومواعيده وأهم القطاعات والأجنحة" : "Canton Fair guide, schedule, and key sectors",
          canonicalPath: `/${locale}/china/markets/canton-fair`
        },
        name: isAr ? "معرض كانتون الدولي" : "Canton Fair",
        nameEn: "Canton Fair",
        citySlug: "guangzhou",
        coordinates: { latitude: 23.0380, longitude: 113.3264 },
        description: isAr
          ? "معرض الاستيراد والتصدير الصيني الدولي في غوانزو، يُقام مرتين سنوياً."
          : "The China Import and Export Fair held biannually in Guangzhou.",
        specialties: [isAr ? "الآليات" : "Machinery", isAr ? "الإلكترونيات" : "Electronics", isAr ? "منتجات البناء" : "Building Materials"]
      }
    ];
    if (citySlug) return markets.filter(m => m.citySlug === citySlug);
    return markets;
  }

  async getMarketBySlug(locale: Locale, slug: string): Promise<Market | null> {
    const markets = await this.getMarkets(locale);
    return markets.find(m => m.slug === slug) || null;
  }

  async getSubdomainItems(locale: Locale, subdomain: string): Promise<ChinaSubdomainEntity[]> {
    const isAr = locale === "ar";
    // Return sample items for each subdomain
    return [
      {
        slug: `${subdomain}-sample-01`,
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? `دليل ${subdomain} في الصين` : `China ${subdomain} Directory`,
          description: isAr ? `أفضل ${subdomain} في مدن الاستيراد الرئيسية` : `Top ${subdomain} in China's sourcing cities`,
          canonicalPath: `/${locale}/china/${subdomain}/${subdomain}-sample-01`
        },
        subdomain: subdomain as ChinaSubdomainEntity["subdomain"],
        name: isAr ? `عينة ${subdomain} 01` : `Sample ${subdomain} 01`,
        citySlug: "guangzhou",
        description: isAr ? `وصف تفصيلي لـ ${subdomain}` : `Detailed description for ${subdomain}`,
        coordinates: { latitude: 23.1291, longitude: 113.2644 },
        contactInfo: "+86-20-0000-0001",
        websiteUrl: null
      }
    ];
  }

  async getSubdomainItemBySlug(locale: Locale, subdomain: string, slug: string): Promise<ChinaSubdomainEntity | null> {
    const items = await this.getSubdomainItems(locale, subdomain);
    return items.find(i => i.slug === slug) || null;
  }

  async getAllSubdomainSlugs(locale: Locale): Promise<{ subdomain: string; slug: string }[]> {
    const subdomains = ["cities", "markets", "factories", "hotels", "restaurants", "translators", "shipping-companies", "ports"];
    const results: { subdomain: string; slug: string }[] = [];

    // Cities
    const cities = await this.getCities(locale);
    cities.forEach(c => results.push({ subdomain: "cities", slug: c.slug }));

    // Markets
    const markets = await this.getMarkets(locale);
    markets.forEach(m => results.push({ subdomain: "markets", slug: m.slug }));

    // Other subdomains — use sample slugs for now
    const otherSubdomains = subdomains.filter(s => !["cities", "markets"].includes(s));
    for (const sub of otherSubdomains) {
      results.push({ subdomain: sub, slug: `${sub}-sample-01` });
    }

    return results;
  }
}
