import { ICity } from '../types';

export function generateCitySchemaJsonLd(city: ICity, locale: 'ar' | 'en') {
  const isAr = locale === 'ar';
  const cityName = isAr ? city.name.ar : city.name.en;
  const description = isAr ? city.description.ar : city.description.en;

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': isAr ? 'الرئيسية' : 'Home',
        'item': `https://hossammabrouk.com/${locale}`
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': isAr ? 'دليل مدن الصين' : 'China Cities Guide',
        'item': `https://hossammabrouk.com/${locale}/china-cities`
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
    'containedInPlace': {
      '@type': 'AdministrativeArea',
      'name': isAr ? city.province.ar : city.province.en,
      'containedInPlace': {
        '@type': 'Country',
        'name': 'China'
      }
    }
  };

  return [breadcrumbs, placeSchema];
}
