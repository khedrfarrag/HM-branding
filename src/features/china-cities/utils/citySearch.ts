import { ICity } from '../types';
import { CHINA_CITIES_DATA } from '../data/cities';

export interface ICitySearchFilter {
  query?: string;
  tier?: string;
  region?: string;
  industry?: string;
  bestFor?: string;
}

export function searchCities(
  cities: ICity[] = CHINA_CITIES_DATA,
  filters: ICitySearchFilter = {}
): ICity[] {
  const { query, tier, region, industry, bestFor } = filters;
  const normalizedQuery = query?.trim().toLowerCase();

  return cities.filter(city => {
    // 1. Filter by Tier
    if (tier && tier !== 'all' && city.tier !== tier) {
      return false;
    }

    // 2. Filter by Region
    if (region && region !== 'all' && city.region !== region) {
      return false;
    }

    // 3. Filter by Industry
    if (industry && industry !== 'all') {
      const matchIndustry = city.keyIndustries.includes(industry) || 
        city.relatedProductSlugs.includes(industry);
      if (!matchIndustry) return false;
    }

    // 4. Filter by Best For
    if (bestFor && bestFor !== 'all') {
      const matchBestFor = city.bestFor.some(b => b.toLowerCase() === bestFor.toLowerCase());
      if (!matchBestFor) return false;
    }

    // 5. Filter by Text Query across AR/EN/ZH fields, products, markets, districts
    if (normalizedQuery) {
      const matchNameAr = city.name.ar.toLowerCase().includes(normalizedQuery);
      const matchNameEn = city.name.en.toLowerCase().includes(normalizedQuery);
      const matchNameZh = city.name.zh.toLowerCase().includes(normalizedQuery);
      const matchProvinceAr = city.province.ar.toLowerCase().includes(normalizedQuery);
      const matchProvinceEn = city.province.en.toLowerCase().includes(normalizedQuery);
      
      const matchProductsAr = city.primaryProducts.ar.some(p => p.toLowerCase().includes(normalizedQuery));
      const matchProductsEn = city.primaryProducts.en.some(p => p.toLowerCase().includes(normalizedQuery));
      
      const matchMarkets = city.wholesaleMarkets?.some(m => 
        m.name.ar.toLowerCase().includes(normalizedQuery) ||
        m.name.en.toLowerCase().includes(normalizedQuery) ||
        m.category.toLowerCase().includes(normalizedQuery)
      );

      const matchDistricts = city.districts?.some(d => 
        d.name.ar.toLowerCase().includes(normalizedQuery) ||
        d.name.en.toLowerCase().includes(normalizedQuery)
      );

      return matchNameAr || matchNameEn || matchNameZh || 
        matchProvinceAr || matchProvinceEn || 
        matchProductsAr || matchProductsEn || 
        matchMarkets || matchDistricts;
    }

    return true;
  });
}
