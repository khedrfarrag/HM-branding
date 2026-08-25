import { Locale } from "@/domains/shared/value-objects";
import { ChinaCity, Market, ChinaSubdomainEntity } from "@/domains/china/entities";
import { IChinaRepository } from "@/domains/china/repository";
import { CHINA_CITIES_DATA } from "@/features/china-cities/data/cities";
import { CHINA_MARKETS_DATA } from "@/features/china-cities/data/markets";

export class LocalFsChinaRepository implements IChinaRepository {
  async getCities(locale: Locale): Promise<ChinaCity[]> {
    const isAr = locale === "ar";
    return CHINA_CITIES_DATA.map(c => ({
      slug: c.slug,
      status: "published" as const,
      publishedAt: "2026-08-25T00:00:00Z",
      updatedAt: c.lastUpdated || "2026-08-25T00:00:00Z",
      seo: {
        title: c.seo.title[isAr ? "ar" : "en"],
        description: c.seo.description[isAr ? "ar" : "en"],
        canonicalPath: `/${locale}/china-cities/${c.slug}`
      },
      name: c.name[isAr ? "ar" : "en"],
      nameEn: c.name.en,
      region: c.province[isAr ? "ar" : "en"],
      coordinates: { latitude: 23.1291, longitude: 113.2644 },
      description: c.description[isAr ? "ar" : "en"],
      bestVisitMonths: c.businessTravelGuide.bestVisitMonths,
      coverImage: c.heroImage
    }));
  }

  async getCityBySlug(locale: Locale, slug: string): Promise<ChinaCity | null> {
    const cities = await this.getCities(locale);
    return cities.find(c => c.slug === slug) || null;
  }

  async getMarkets(locale: Locale, citySlug?: string): Promise<Market[]> {
    const isAr = locale === "ar";
    const markets: Market[] = CHINA_MARKETS_DATA.map(m => ({
      slug: m.id,
      status: "published" as const,
      publishedAt: "2026-08-25T00:00:00Z",
      updatedAt: "2026-08-25T00:00:00Z",
      seo: {
        title: m.name[isAr ? "ar" : "en"],
        description: m.description[isAr ? "ar" : "en"],
        canonicalPath: `/${locale}/china-cities/${m.cityId}`
      },
      name: m.name[isAr ? "ar" : "en"],
      nameEn: m.name.en,
      citySlug: m.cityId,
      coordinates: { latitude: 23.0380, longitude: 113.3264 },
      description: m.description[isAr ? "ar" : "en"],
      specialties: [m.category]
    }));

    if (citySlug) return markets.filter(m => m.citySlug === citySlug);
    return markets;
  }

  async getMarketBySlug(locale: Locale, slug: string): Promise<Market | null> {
    const markets = await this.getMarkets(locale);
    return markets.find(m => m.slug === slug) || null;
  }

  async getSubdomainItems(locale: Locale, subdomain: string): Promise<ChinaSubdomainEntity[]> {
    const isAr = locale === "ar";
    return [
      {
        slug: `${subdomain}-sample-01`,
        status: "published",
        publishedAt: "2026-08-25T00:00:00Z",
        updatedAt: "2026-08-25T00:00:00Z",
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

    const cities = await this.getCities(locale);
    cities.forEach(c => results.push({ subdomain: "cities", slug: c.slug }));

    const markets = await this.getMarkets(locale);
    markets.forEach(m => results.push({ subdomain: "markets", slug: m.slug }));

    const otherSubdomains = subdomains.filter(s => !["cities", "markets"].includes(s));
    for (const sub of otherSubdomains) {
      results.push({ subdomain: sub, slug: `${sub}-sample-01` });
    }

    return results;
  }
}
