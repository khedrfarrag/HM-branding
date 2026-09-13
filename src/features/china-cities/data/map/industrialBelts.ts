import { IndustrialRegionKey } from './chinaMapCoordinates';

export interface IIndustrialBeltConfig {
  id: IndustrialRegionKey;
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  citySlugs: string[];
  accentColor: string; // Tailwind color class or hex
  highlightRing: string;
}

export const INDUSTRIAL_BELTS: IIndustrialBeltConfig[] = [
  {
    id: 'all',
    name: { ar: 'كل الصين (34 مدينة)', en: 'All China (34 Hubs)' },
    description: {
      ar: 'نظرة شاملة على كبرى المراكز التجارية وعواصم التصنيع المتخصصة في أنحاء الصين.',
      en: 'Comprehensive overview of all 34 premier commercial and manufacturing capitals across China.'
    },
    citySlugs: [], // Means all
    accentColor: '#f59e0b', // amber-500
    highlightRing: 'ring-amber-400'
  },
  {
    id: 'gba',
    name: { ar: 'حوض دلتا نهر اللؤلؤ (GBA)', en: 'Pearl River Delta (GBA)' },
    description: {
      ar: 'أقوى قاعدة تصديرية في العالم: الإلكترونيات، الإضاءة، الأثاث، الألعاب، والملابس الجاهزة.',
      en: 'World foremost export cluster: consumer electronics, lighting, furniture, toys & fast fashion.'
    },
    citySlugs: ['guangzhou', 'shenzhen', 'foshan', 'shunde', 'dongguan', 'zhongshan', 'shantou'],
    accentColor: '#f59e0b', // amber
    highlightRing: 'ring-amber-500'
  },
  {
    id: 'yangtze',
    name: { ar: 'دلتا نهر يانغتسي', en: 'Yangtze River Delta' },
    description: {
      ar: 'المارد الاقتصادي الأضخم: المنسوجات، الطاقة الجديدة، أشباه الموصلات، الموانئ، والحرير.',
      en: 'China economic engine: advanced textiles, new energy batteries, semiconductors, shipping & silk.'
    },
    citySlugs: [
      'shanghai',
      'hangzhou',
      'ningbo',
      'suzhou',
      'shaoxing',
      'cixi',
      'haining',
      'changzhou',
      'wuxi',
      'nantong',
      'tongxiang'
    ],
    accentColor: '#38bdf8', // sky-400
    highlightRing: 'ring-sky-500'
  },
  {
    id: 'north',
    name: { ar: 'شمال الصين وحوض بوهاي', en: 'Bohai Rim & North China' },
    description: {
      ar: 'عاصمة التكنولوجيا والسيارات، الموانئ الشمالية، دراجات المستقبل، توصيلات الأنابيب والسجاد.',
      en: 'National technology capital, mega container ports, bicycles/e-bikes, steel pipes & carpets.'
    },
    citySlugs: ['beijing', 'tianjin', 'qingdao', 'linyi', 'cangzhou'],
    accentColor: '#a855f7', // purple-500
    highlightRing: 'ring-purple-500'
  },
  {
    id: 'central',
    name: { ar: 'الوسط والجنوب الداخلي', en: 'Central & Inland Hubs' },
    description: {
      ar: 'محركات الصناعات الثقيلة: الليزر والبصريات، تصنيع الآيفون والسيارات والدراجات النارية.',
      en: 'Industrial titans: fiber-optics & lasers, iPhone assembly, automotive, motorcycles & rail corridors.'
    },
    citySlugs: ['wuhan', 'zhengzhou', 'chengdu', 'chongqing'],
    accentColor: '#10b981', // emerald-500
    highlightRing: 'ring-emerald-500'
  },
  {
    id: 'southeast',
    name: { ar: 'الساحل الجنوبي الشرقي', en: 'Southeast Coastal Belt' },
    description: {
      ar: 'عواصم الصناعات الخفيفة: السلع الصغيرة بإيوو، الأحذية، الرخام، بطاريات الليثيوم، والأدوات.',
      en: 'Light manufacturing capitals: Yiwu commodities, footwear, stone & marble, CATL EV batteries.'
    },
    citySlugs: ['yiwu', 'yongkang', 'taizhou', 'wenzhou', 'ningde', 'quanzhou', 'xiamen'],
    accentColor: '#ec4899', // pink-500
    highlightRing: 'ring-pink-500'
  }
];
