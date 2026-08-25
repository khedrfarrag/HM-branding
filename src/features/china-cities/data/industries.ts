export interface IIndustryCategory {
  id: string;
  slug: string;
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  topCitySlugs: string[];
}

export const CHINA_INDUSTRIES_DATA: IIndustryCategory[] = [
  {
    id: 'furniture',
    slug: 'furniture',
    name: { ar: 'الأثاث والديكور', en: 'Furniture & Decor' },
    description: {
      ar: 'أثاث المنازل، المكاتب، الفنادق، الحدائق والديكورات الداخلية.',
      en: 'Home, office, hotel, outdoor furniture and interior decorations.'
    },
    topCitySlugs: ['foshan', 'shunde', 'guangzhou', 'dongguan']
  },
  {
    id: 'electronics',
    slug: 'electronics',
    name: { ar: 'الإلكترونيات والتكنولوجيا', en: 'Electronics & Tech' },
    description: {
      ar: 'الهواتف الذكية، المكونات الصلبة، الشاشات، الطائرات المسيرة، والأجهزة.',
      en: 'Smartphones, hardware components, displays, drones, and gadgets.'
    },
    topCitySlugs: ['shenzhen', 'dongguan', 'guangzhou', 'suzhou']
  },
  {
    id: 'small-commodities',
    slug: 'small-commodities',
    name: { ar: 'السلع الصغيرة والكماليات', en: 'Small Commodities & Gifts' },
    description: {
      ar: 'الألعاب، الهدايا، الإكسسوارات، القرطاسية، والأدوات المنزلية.',
      en: 'Toys, gifts, fashion accessories, stationery, and household items.'
    },
    topCitySlugs: ['yiwu', 'ningbo', 'linyi', 'guangzhou']
  },
  {
    id: 'building-materials',
    slug: 'building-materials',
    name: { ar: 'مواد البناء والسيراميك', en: 'Building Materials & Tiles' },
    description: {
      ar: 'السيراميك، البورسلين، الرخام، الأدوات الصحية، ومعدات الإضاءة.',
      en: 'Ceramic tiles, porcelain, marble, sanitary ware, and lighting.'
    },
    topCitySlugs: ['foshan', 'xiamen', 'guangzhou', 'yongkang']
  },
  {
    id: 'textiles',
    slug: 'textiles',
    name: { ar: 'الأقمشة والمنسوجات', en: 'Textiles & Fabrics' },
    description: {
      ar: 'أقمشة الأزياء، الستائر والمفروشات، الحرير، والمنسوجات الصناعية.',
      en: 'Fashion fabrics, curtain textiles, upholstery, and natural silk.'
    },
    topCitySlugs: ['shaoxing', 'hangzhou', 'suzhou', 'haining']
  },
  {
    id: 'apparel',
    slug: 'apparel',
    name: { ar: 'الملابس والأزياء', en: 'Apparel & Fashion' },
    description: {
      ar: 'الملابس الجاهزة، الأحذية الرياضية، فساتين الزفاف، والمستلزمات.',
      en: 'Ready-made garments, athletic footwear, bridal gowns, and fashion items.'
    },
    topCitySlugs: ['guangzhou', 'quanzhou', 'dongguan', 'suzhou', 'puning']
  },
  {
    id: 'home-appliances',
    slug: 'home-appliances',
    name: { ar: 'الأجهزة المنزلية', en: 'Home Appliances' },
    description: {
      ar: 'التكييفات، الثلاجات، المدافئ، مبردات المياه، والأجهزة الصغيرة.',
      en: 'Air conditioners, refrigerators, electric heaters, water dispensers, and small appliances.'
    },
    topCitySlugs: ['foshan', 'ningbo', 'cixi', 'shunde', 'qingdao']
  },
  {
    id: 'machinery',
    slug: 'machinery',
    name: { ar: 'الآلات والقوالب الصناعية', en: 'Machinery & Industrial Molds' },
    description: {
      ar: 'معدات التصنيع، آلات CNC، وقوالب حقن البلاستيك، وآلات التغليف.',
      en: 'Manufacturing equipment, CNC machinery, plastic injection molds, and packaging machines.'
    },
    topCitySlugs: ['dongguan', 'ningbo', 'chongqing', 'cangzhou', 'wenzhou']
  },
  {
    id: 'hardware-tools',
    slug: 'hardware-tools',
    name: { ar: 'الأدوات والأبواب والمعدات', en: 'Hardware, Doors & Tools' },
    description: {
      ar: 'الأبواب المصفحة، أدوات الطاقة، المعدات الهيدروليكية، والخردوات.',
      en: 'Security doors, power tools, hydraulic equipment, and hardware fittings.'
    },
    topCitySlugs: ['yongkang', 'wenzhou', 'jinhua', 'linyi']
  },
  {
    id: 'lighting',
    slug: 'lighting',
    name: { ar: 'الإضاءة والنجف', en: 'Lighting & LEDs' },
    description: {
      ar: 'إضاءات LED، النجف الكريستالي، كشافات الشوارع، والمفاتيح.',
      en: 'LED lights, chandeliers, solar street lights, and electrical fittings.'
    },
    topCitySlugs: ['zhongshan', 'foshan', 'guangzhou']
  },
  {
    id: 'auto-parts',
    slug: 'auto-parts',
    name: { ar: 'قطع غيار السيارات والدراجات', en: 'Auto & Motorcycle Parts' },
    description: {
      ar: 'قطع غيار السيارات، الدراجات النارية، الإطارات، ومعدات الصيانة.',
      en: 'Auto spare parts, motorcycles, tires, and automotive maintenance tools.'
    },
    topCitySlugs: ['chongqing', 'guangzhou', 'qingdao', 'ruian']
  },
  {
    id: 'solar-renewable',
    slug: 'solar-renewable',
    name: { ar: 'الطاقة الشمسية والبطاريات', en: 'Solar Energy & EV Batteries' },
    description: {
      ar: 'أنظمة تخزين الطاقة، بطاريات الليثيوم للسيارات، والألواح الشمسية.',
      en: 'Solar storage systems, lithium EV batteries, and solar panels.'
    },
    topCitySlugs: ['ningde', 'shenzhen', 'wuxi']
  },
  {
    id: 'logistics-shipping',
    slug: 'logistics-shipping',
    name: { ar: 'الشحن والخدمات اللوجستية', en: 'Logistics & Shipping Ports' },
    description: {
      ar: 'الموانئ البحرية، خطوط الشحن، ومستودعات التجميع والترانزيت.',
      en: 'Ocean shipping ports, freight forwarding, and container logistics hubs.'
    },
    topCitySlugs: ['shanghai', 'ningbo', 'qingdao', 'xiamen', 'guangzhou']
  }
];
