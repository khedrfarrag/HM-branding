import { ICity } from '../../types';

// Original 24 Cities
import { guangzhouCity } from './guangzhou';
import { shenzhenCity } from './shenzhen';
import { yiwuCity } from './yiwu';
import { foshanCity } from './foshan';
import { dongguanCity } from './dongguan';
import { ningboCity } from './ningbo';
import { hangzhouCity } from './hangzhou';
import { shanghaiCity } from './shanghai';
import { shundeCity } from './shunde';
import { zhongshanCity } from './zhongshan';
import { xiamenCity } from './xiamen';
import { quanzhouCity } from './quanzhou';
import { wenzhouCity } from './wenzhou';
import { qingdaoCity } from './qingdao';
import { linyiCity } from './linyi';
import { chengduCity } from './chengdu';
import { chongqingCity } from './chongqing';
import { suzhouCity } from './suzhou';
import { yongkangCity } from './yongkang';
import { cixiCity } from './cixi';
import { shaoxingCity } from './shaoxing';
import { hainingCity } from './haining';
import { ningdeCity } from './ningde';
import { cangzhouCity } from './cangzhou';

// 10 New Specialized Industrial Cities (Expansion)
import { beijingCity } from './beijing';
import { tianjinCity } from './tianjin';
import { wuhanCity } from './wuhan';
import { nantongCity } from './nantong';
import { zhengzhouCity } from './zhengzhou';
import { changzhouCity } from './changzhou';
import { wuxiCity } from './wuxi';
import { taizhouCity } from './taizhou';
import { tongxiangCity } from './tongxiang';
import { shantouCity } from './shantou';

// Re-export individual city data objects
export {
  guangzhouCity,
  shenzhenCity,
  yiwuCity,
  foshanCity,
  dongguanCity,
  ningboCity,
  hangzhouCity,
  shanghaiCity,
  shundeCity,
  zhongshanCity,
  xiamenCity,
  quanzhouCity,
  wenzhouCity,
  qingdaoCity,
  linyiCity,
  chengduCity,
  chongqingCity,
  suzhouCity,
  yongkangCity,
  cixiCity,
  shaoxingCity,
  hainingCity,
  ningdeCity,
  cangzhouCity,
  // 10 New Cities
  beijingCity,
  tianjinCity,
  wuhanCity,
  nantongCity,
  zhengzhouCity,
  changzhouCity,
  wuxiCity,
  taizhouCity,
  tongxiangCity,
  shantouCity,
};

export const CHINA_CITIES_DATA: ICity[] = [
  // Tier 1 & Core Tech / Trade Centers
  beijingCity,
  shanghaiCity,
  guangzhouCity,
  shenzhenCity,
  // Pearl River Delta / Greater Bay Area
  foshanCity,
  dongguanCity,
  shundeCity,
  zhongshanCity,
  shantouCity,
  // Yangtze River Delta
  hangzhouCity,
  ningboCity,
  suzhouCity,
  wuxiCity,
  changzhouCity,
  nantongCity,
  shaoxingCity,
  yiwuCity,
  yongkangCity,
  cixiCity,
  hainingCity,
  tongxiangCity,
  taizhouCity,
  wenzhouCity,
  // Southeast Coast (Fujian)
  xiamenCity,
  quanzhouCity,
  ningdeCity,
  // Bohai Rim & Northern Industrial Hubs
  tianjinCity,
  qingdaoCity,
  linyiCity,
  cangzhouCity,
  // Central & Inland Logistics & Manufacturing
  wuhanCity,
  zhengzhouCity,
  chengduCity,
  chongqingCity,
];

export const CITIES_BY_SLUG: Record<string, ICity> = Object.fromEntries(
  CHINA_CITIES_DATA.map((city) => [city.slug, city])
);

export function getCityBySlug(slug: string): ICity | undefined {
  return CITIES_BY_SLUG[slug];
}

export function getAllCitySlugs(): string[] {
  return CHINA_CITIES_DATA.map((c) => c.slug);
}
