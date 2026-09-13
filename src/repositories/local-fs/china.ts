import { Locale, ChinaSubdomain } from "@/domains/shared/value-objects";
import { ChinaCity, Market, ChinaSubdomainEntity } from "@/domains/china/entities";
import { IChinaRepository } from "@/domains/china/repository";
import { CHINA_CITIES_DATA } from "@/features/china-cities/data/cities";
import {
  getEntitiesBySubdomain,
  getEntityBySlug,
  getAllSubdomainEntitySlugs,
} from "@/features/china-guide/data";

export class LocalFsChinaRepository implements IChinaRepository {
  async getCities(locale: Locale): Promise<ChinaCity[]> {
    const isAr = locale === "ar";
    return CHINA_CITIES_DATA.map(c => ({
      slug: c.slug,
      status: "published" as const,
      publishedAt: "2026-08-25T00:00:00Z",
      updatedAt: c.lastUpdated || "2026-09-13T00:00:00Z",
      seo: {
        title: `${c.seo.title[isAr ? "ar" : "en"]} — حسام مبروك`,
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
    const marketEntities = getEntitiesBySubdomain("markets", citySlug);

    return marketEntities.map(m => ({
      slug: m.slug,
      status: "published" as const,
      publishedAt: "2026-08-25T00:00:00Z",
      updatedAt: m.lastUpdated || "2026-09-13T00:00:00Z",
      seo: {
        title: `${m.name[isAr ? "ar" : "en"]} | دليل الأسواق في الصين — حسام مبروك`,
        description: m.description[isAr ? "ar" : "en"],
        canonicalPath: `/${locale}/china/markets/${m.slug}`
      },
      name: m.name[isAr ? "ar" : "en"],
      nameEn: m.name.en,
      citySlug: m.citySlug,
      coordinates: m.coordinates,
      description: m.description[isAr ? "ar" : "en"],
      specialties: [m.category[isAr ? "ar" : "en"]]
    }));
  }

  async getMarketBySlug(locale: Locale, slug: string): Promise<Market | null> {
    const markets = await this.getMarkets(locale);
    return markets.find(m => m.slug === slug) || null;
  }

  async getSubdomainItems(locale: Locale, subdomain: string, citySlug?: string): Promise<ChinaSubdomainEntity[]> {
    const isAr = locale === "ar";
    const sub = subdomain as ChinaSubdomain;
    const entities = getEntitiesBySubdomain(sub, citySlug);

    return entities.map(item => ({
      slug: item.slug,
      status: "published" as const,
      publishedAt: "2026-08-25T00:00:00Z",
      updatedAt: item.lastUpdated || "2026-09-13T00:00:00Z",
      seo: {
        title: `${item.name[isAr ? "ar" : "en"]} | دليل ${subdomain} في الصين — حسام مبروك`,
        description: item.description[isAr ? "ar" : "en"],
        canonicalPath: `/${locale}/china/${subdomain}/${item.slug}`
      },
      subdomain: item.subdomain,
      name: item.name[isAr ? "ar" : "en"],
      citySlug: item.citySlug,
      description: item.description[isAr ? "ar" : "en"],
      coordinates: item.coordinates,
      contactInfo: item.contactInfo.phone || item.contactInfo.wechat || null,
      websiteUrl: item.websiteUrl || null
    }));
  }

  async getSubdomainItemBySlug(locale: Locale, subdomain: string, slug: string): Promise<ChinaSubdomainEntity | null> {
    const isAr = locale === "ar";
    const sub = subdomain as ChinaSubdomain;
    const entity = getEntityBySlug(sub, slug);
    if (!entity) return null;

    return {
      slug: entity.slug,
      status: "published" as const,
      publishedAt: "2026-08-25T00:00:00Z",
      updatedAt: entity.lastUpdated || "2026-09-13T00:00:00Z",
      seo: {
        title: `${entity.name[isAr ? "ar" : "en"]} | دليل ${subdomain} في الصين — حسام مبروك`,
        description: entity.description[isAr ? "ar" : "en"],
        canonicalPath: `/${locale}/china/${subdomain}/${entity.slug}`
      },
      subdomain: entity.subdomain,
      name: entity.name[isAr ? "ar" : "en"],
      citySlug: entity.citySlug,
      description: entity.description[isAr ? "ar" : "en"],
      coordinates: entity.coordinates,
      contactInfo: entity.contactInfo.phone || entity.contactInfo.wechat || null,
      websiteUrl: entity.websiteUrl || null
    };
  }

  async getAllSubdomainSlugs(locale: Locale): Promise<{ subdomain: string; slug: string }[]> {
    const results: { subdomain: string; slug: string }[] = [];

    // Cities
    const cities = await this.getCities(locale);
    cities.forEach(c => results.push({ subdomain: "cities", slug: c.slug }));

    // All Subdomain Entities (markets, restaurants, hotels, factories, translators, shipping, ports)
    const entitySlugs = getAllSubdomainEntitySlugs();
    entitySlugs.forEach(item => results.push({ subdomain: item.subdomain, slug: item.slug }));

    return results;
  }
}
