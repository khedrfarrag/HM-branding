import { Locale } from "@/domains/shared/value-objects";
import { ChinaCity, Market, ChinaSubdomainEntity } from "./entities";

export interface IChinaRepository {
  getCities(locale: Locale): Promise<ChinaCity[]>;
  getCityBySlug(locale: Locale, slug: string): Promise<ChinaCity | null>;
  getMarkets(locale: Locale, citySlug?: string): Promise<Market[]>;
  getMarketBySlug(locale: Locale, slug: string): Promise<Market | null>;
  getSubdomainItems(locale: Locale, subdomain: string): Promise<ChinaSubdomainEntity[]>;
  getSubdomainItemBySlug(locale: Locale, subdomain: string, slug: string): Promise<ChinaSubdomainEntity | null>;
  getAllSubdomainSlugs(locale: Locale): Promise<{ subdomain: string; slug: string }[]>;
}
