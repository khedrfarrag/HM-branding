export type IndustrialRegionKey = 'all' | 'gba' | 'yangtze' | 'north' | 'central' | 'southeast';

export interface ICityCoordinate {
  x: number;
  y: number;
  regionKey: Exclude<IndustrialRegionKey, 'all'>;
  isAnchorCity?: boolean;
}

/**
 * Calibrated coordinates on a 900 x 680 SVG canvas representing the 34 Chinese commercial cities.
 */
export const CHINA_CITY_MAP_COORDINATES: Record<string, ICityCoordinate> = {
  // Bohai Rim & North China
  beijing: { x: 605, y: 205, regionKey: 'north', isAnchorCity: true },
  tianjin: { x: 622, y: 228, regionKey: 'north', isAnchorCity: true },
  cangzhou: { x: 610, y: 252, regionKey: 'north' },
  qingdao: { x: 672, y: 275, regionKey: 'north', isAnchorCity: true },
  linyi: { x: 636, y: 308, regionKey: 'north' },

  // Yangtze River Delta (East China)
  shanghai: { x: 728, y: 375, regionKey: 'yangtze', isAnchorCity: true },
  suzhou: { x: 706, y: 368, regionKey: 'yangtze' },
  wuxi: { x: 692, y: 362, regionKey: 'yangtze' },
  changzhou: { x: 678, y: 355, regionKey: 'yangtze' },
  nantong: { x: 715, y: 345, regionKey: 'yangtze' },
  hangzhou: { x: 686, y: 402, regionKey: 'yangtze', isAnchorCity: true },
  shaoxing: { x: 696, y: 414, regionKey: 'yangtze' },
  ningbo: { x: 732, y: 416, regionKey: 'yangtze', isAnchorCity: true },
  cixi: { x: 720, y: 396, regionKey: 'yangtze' },
  haining: { x: 698, y: 388, regionKey: 'yangtze' },
  tongxiang: { x: 692, y: 380, regionKey: 'yangtze' },

  // Southeast Coast (Zhejiang & Fujian)
  yiwu: { x: 672, y: 432, regionKey: 'southeast', isAnchorCity: true },
  yongkang: { x: 678, y: 450, regionKey: 'southeast' },
  taizhou: { x: 715, y: 452, regionKey: 'southeast' },
  wenzhou: { x: 702, y: 482, regionKey: 'southeast', isAnchorCity: true },
  ningde: { x: 686, y: 516, regionKey: 'southeast' },
  quanzhou: { x: 666, y: 546, regionKey: 'southeast' },
  xiamen: { x: 652, y: 560, regionKey: 'southeast', isAnchorCity: true },

  // Pearl River Delta (Greater Bay Area / South China)
  guangzhou: { x: 576, y: 568, regionKey: 'gba', isAnchorCity: true },
  foshan: { x: 560, y: 574, regionKey: 'gba' },
  shunde: { x: 563, y: 585, regionKey: 'gba' },
  dongguan: { x: 588, y: 575, regionKey: 'gba' },
  zhongshan: { x: 572, y: 592, regionKey: 'gba' },
  shenzhen: { x: 598, y: 588, regionKey: 'gba', isAnchorCity: true },
  shantou: { x: 642, y: 565, regionKey: 'gba' },

  // Central & Inland Powerhouses
  wuhan: { x: 576, y: 396, regionKey: 'central', isAnchorCity: true },
  zhengzhou: { x: 556, y: 296, regionKey: 'central', isAnchorCity: true },
  chengdu: { x: 396, y: 412, regionKey: 'central', isAnchorCity: true },
  chongqing: { x: 446, y: 436, regionKey: 'central', isAnchorCity: true },
};
