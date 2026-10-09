import { ICity } from '../types';
import {
  buildHotelSchemas,
  buildRestaurantSchemas,
  buildMarketSchemas,
} from '@/lib/schema/china-directory';

export function generateCitySchemaJsonLd(city: ICity, locale: 'ar' | 'en') {
  const isAr = locale === 'ar';
  const cityName = isAr ? city.name.ar : city.name.en;
  const description = isAr ? city.description.ar : city.description.en;

  const PERSON_ATTRIBUTION = {
    '@type': 'Person',
    '@id': 'https://hussam-mabrouk.com/#person',
    'name': isAr ? 'حسام مبروك' : 'Hussam Mabrouk',
    'jobTitle': isAr ? 'مستشار التجارة الدولية والاستيراد والتوريد من الصين' : 'International Trade & China Sourcing Advisor',
    'url': 'https://hussam-mabrouk.com'
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': isAr ? 'الرئيسية' : 'Home',
        'item': `https://hussam-mabrouk.com/${locale}`
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': isAr ? 'دليل مدن الصين' : 'China Cities Guide',
        'item': `https://hussam-mabrouk.com/${locale}/china-cities`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': cityName,
        'item': `https://hossammabrouk.com/${locale}/china-cities/${city.slug}`
      }
    ]
  };

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'City',
    'name': cityName,
    'alternateName': [city.name.zh, city.name.en, city.name.ar],
    'description': description,
    'image': city.heroImage,
    'reviewedBy': PERSON_ATTRIBUTION,
    'containedInPlace': {
      '@type': 'AdministrativeArea',
      'name': isAr ? city.province.ar : city.province.en,
      'containedInPlace': {
        '@type': 'Country',
        'name': 'China'
      }
    }
  };

  const hotelSchemas = buildHotelSchemas(city, locale);
  const restaurantSchemas = buildRestaurantSchemas(city, locale);
  const marketSchemas = buildMarketSchemas(city, locale);

  return [breadcrumbs, placeSchema, ...hotelSchemas, ...restaurantSchemas, ...marketSchemas];
}
