import { WithContext, Hotel, Restaurant, ShoppingCenter, City } from "schema-dts";
import { Locale } from "@/domains/shared/value-objects";
import { ICity } from "@/features/china-cities/types";

export const buildCitySchema = (city: ICity, locale: Locale): WithContext<City> => {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "City",
    "@id": `https://hussam-mabrouk.com/${locale}/china-cities/${city.slug}#city`,
    "name": isAr ? city.name.ar : city.name.en,
    "alternateName": [city.name.zh, city.name.en],
    "description": isAr ? city.description.ar : city.description.en,
    "url": `https://hussam-mabrouk.com/${locale}/china-cities/${city.slug}`,
  };
};

export const buildHotelSchemas = (city: ICity, locale: Locale): WithContext<Hotel>[] => {
  const isAr = locale === "ar";
  const hotels = city.businessTravelGuide?.recommendedHotels;
  if (!hotels || hotels.length === 0) return [];

  return hotels.map((hotel) => ({
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `https://hussam-mabrouk.com/${locale}/china-cities/${city.slug}/hotels#${hotel.name.en.toLowerCase().replace(/\s+/g, "-")}`,
    "name": isAr ? hotel.name.ar : hotel.name.en,
    "alternateName": hotel.name.zh,
    "address": isAr ? hotel.address?.ar || `${city.name.ar}، الصين` : hotel.address?.en || `${city.name.en}, China`,
    "starRating": hotel.starRating ? { "@type": "Rating", "ratingValue": hotel.starRating } : undefined,
    "description": isAr
      ? `فندق معتمد بالقرب من أسواق المعارض في ${city.name.ar}. توصيات وإشراف حسام مبروك.`
      : `Vetted hotel near commercial trade hubs in ${city.name.en}. Curated by Hussam Mabrouk.`,
  }));
};

export const buildRestaurantSchemas = (city: ICity, locale: Locale): WithContext<Restaurant>[] => {
  const isAr = locale === "ar";
  const restaurants = city.businessTravelGuide?.recommendedRestaurants;
  if (!restaurants || restaurants.length === 0) return [];

  return restaurants.map((rest) => ({
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `https://hussam-mabrouk.com/${locale}/china-cities/${city.slug}/restaurants#${rest.name.en.toLowerCase().replace(/\s+/g, "-")}`,
    "name": isAr ? rest.name.ar : rest.name.en,
    "alternateName": rest.name.zh,
    "servesCuisine": "Halal / Middle Eastern",
    "address": isAr ? rest.address?.ar || `${city.name.ar}، الصين` : rest.address?.en || `${city.name.en}, China`,
    "description": isAr
      ? `مطعم حلال وعربي معتمد في ${city.name.ar}. إشراف وتوصيات حسام مبروك.`
      : `Verified Halal & Middle Eastern dining venue in ${city.name.en}. Curated by Hussam Mabrouk.`,
  }));
};

export const buildMarketSchemas = (city: ICity, locale: Locale): WithContext<ShoppingCenter>[] => {
  const isAr = locale === "ar";
  const markets = city.wholesaleMarkets;
  if (!markets || markets.length === 0) return [];

  return markets.map((market) => ({
    "@context": "https://schema.org",
    "@type": "ShoppingCenter",
    "@id": `https://hussam-mabrouk.com/${locale}/china-cities/${city.slug}/markets#${market.name.en.toLowerCase().replace(/\s+/g, "-")}`,
    "name": isAr ? market.name.ar : market.name.en,
    "alternateName": market.name.zh,
    "address": isAr ? market.address?.ar || `${city.name.ar}، الصين` : market.address?.en || `${city.name.en}, China`,
    "description": isAr ? market.description?.ar : market.description?.en,
  }));
};
