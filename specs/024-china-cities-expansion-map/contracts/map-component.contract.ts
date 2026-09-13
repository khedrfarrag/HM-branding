/**
 * Map Component Contracts: China Interactive Map 2.0
 */

import { ICity } from '@/features/china-cities/types';

export type IndustrialRegionKey = 'all' | 'gba' | 'yangtze' | 'north' | 'central' | 'southeast';

export interface ICityCoordinate {
  x: number;
  y: number;
  regionKey: Exclude<IndustrialRegionKey, 'all'>;
  isAnchorCity?: boolean;
}

export interface IIndustrialBeltConfig {
  id: IndustrialRegionKey;
  name: { ar: string; en: string };
  citySlugs: string[];
  accentColor: string;
}

export interface ChinaInteractiveMapProps {
  cities: ICity[];
  locale: 'ar' | 'en';
  defaultCitySlug?: string;
  className?: string;
}
