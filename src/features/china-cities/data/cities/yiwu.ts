import { ICity } from '../../types';

export const yiwuCity: ICity = {
  id: 'yiwu',
  slug: 'yiwu',
  name: {
    ar: 'إيوو (ييوو)',
    en: 'Yiwu',
    zh: '义乌'
  },
  province: {
    ar: 'تشيجيانغ',
    en: 'Zhejiang'
  },
  region: 'Yangtze River Delta',
  tier: 'tier-1',
  commercialImportanceScore: 98,
  heroImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80',
  skylineImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'عاصمة السلع الصغيرة والمنتجات الاستهلاكية الأولى في العالم ومستودع الكوكب التجاري (Supermarket of the World). تضم مدينة التجارة الدولية الشهيرة بـ "سوق فوتيان" (Futian Market) بمناطقه الـ 5 العملاقة التي تحتوي على أكثر من 75,000 كشك وصالة عرض جملة، وتعد الوجهة التجارية المفضلة لمستوردي الشرق الأوسط والخليج العربي.',
    en: 'The Small Commodities Capital of the World and undisputed sourcing paradise for general merchandise. Home to the legendary Yiwu International Trade City (Futian Market) spanning 5 massive districts with over 75,000 wholesale supplier booths serving buyers from over 210 countries.'
  },
  keyIndustries: [
    'small-commodities',
    'toys-games',
    'stationery-office',
    'kitchenware-household',
    'fashion-jewelry',
    'hardware-tools',
    'socks-hosiery',
    'holiday-gifts',
    'luggage-bags'
  ],
  primaryProducts: {
    ar: [
      'الألعاب الإلكترونية والبلاستيكية والدمى التعليمية (فوتيان المنطقة 1)',
      'المجوهرات التقليدية والإكسسوارات والزهور الاصطناعية (فوتيان المنطقة 1)',
      'العدد اليدوية والكهربائية وأدوات المطبخ والضيافة (فوتيان المنطقة 2)',
      'القرطاسية والأدوات المكتبية والنظارات ومستلزمات الحياكة (فوتيان المنطقة 3)',
      'الجوارب والمناشف والملابس الداخلية والقفازات والأحذية (فوتيان المنطقة 4)',
      'الملابس الجاهزة والبدلات وفساتين الأطفال والجينز (سوق هوانغيوان)',
      'ماكينات التعبئة والتغليف ومعدات الطباعة (سوق مواد الإنتاج الدولي)'
    ],
    en: [
      'Toys, Plush Dolls, Electronic Games & Artificial Flowers (District 1)',
      'Fashion Jewelry, Hair Accessories & Porcelain Ornaments (District 1)',
      'Hardware Tools, Locks, Clocks & Kitchenware (District 2)',
      'Stationery, Office Supplies, Eyewear & Sewing Trims (District 3)',
      'Socks, Hosiery, Daily Necessities, Footwear & Gloves (District 4)',
      'Ready-to-Wear Fashion, Children’s Wear & Denim (Huangyuan Garment Market)',
      'Packaging Machinery, Raw Materials & Printing Equipment (Production Market)'
    ]
  },
  bestFor: [
    'General Merchandise Importer',
    'Retail Chain & Supermarket Buyer',
    'E-Commerce & Amazon/Noon Sellers',
    'Toy & Stationery Wholesaler',
    'Fashion Accessories Merchant',
    'Arab Trade Delegations'
  ],

  // ─── 1. ALL WHOLESALE MARKETS (EXHAUSTIVE) ──────────────────────────────────
  wholesaleMarkets: [
    {
      id: 'yiwu-trade-city-district-1',
      cityId: 'yiwu',
      name: {
        ar: 'سوق فوتيان - المنطقة الأولى (Futian District 1)',
        en: 'Yiwu International Trade City - District 1',
        zh: '义乌国际商贸城一区'
      },
      type: 'Wholesale',
      category: 'Toys, Artificial Flowers & Jewelry',
      description: {
        ar: 'المرحلة الأولى تضم 4 طوابق ضخمة: الطابق 1 للألعاب والدمى القطنية والمجسمات؛ الطابق 2 للزهور الاصطناعية وزينة الحدائق؛ الطابق 3 للمجوهرات والإكسسوارات ومستلزمات الزينة؛ الطابق 4 لصالات عرض المصانع المباشرة.',
        en: '4 massive floors: Floor 1 features toys, inflatable items & plush dolls; Floor 2 houses artificial flowers & decorative plants; Floor 3 is dedicated to fashion jewelry & hair accessories; Floor 4 offers direct factory manufacturer outlets.'
      },
      address: {
        ar: 'طريق شوتشوانغ الشمالي، تقاطع طريق جينهاي، إيوو',
        en: 'Chouzhou North Road, Futian, Yiwu, Zhejiang'
      },
      nearestMetro: 'Yiwu BRT Line 1 (Futian 1 Station)',
      operatingHours: '09:00 - 17:00',
      moqLevel: 'Low'
    },
    {
      id: 'yiwu-trade-city-district-2',
      cityId: 'yiwu',
      name: {
        ar: 'سوق فوتيان - المنطقة الثانية (Futian District 2)',
        en: 'Yiwu International Trade City - District 2',
        zh: '义乌国际商贸城二区'
      },
      type: 'Wholesale',
      category: 'Hardware, Kitchenware & Electronics',
      description: {
        ar: 'الطابق 1 لحقائب السفر والمظلات؛ الطابق 2 للأدوات اليدوية، الأقفال، والعدد ومعدات الكهرباء؛ الطابق 3 للأدوات المنزلية وأواني المطبخ والساعات؛ الطابق 4 لقاعات المصدرين والغرف التجارية الإقليمية.',
        en: 'Floor 1 showcases luggage, bags & rainwear umbrellas; Floor 2 is the premier hardware, tools & electrical gear market; Floor 3 offers kitchenware, cutlery, small appliances & clocks; Floor 4 hosts government and manufacturer trade halls.'
      },
      address: {
        ar: 'طريق شوتشوانغ الشمالي، إيوو',
        en: 'Chouzhou North Road, Futian, Yiwu, Zhejiang'
      },
      nearestMetro: 'Yiwu BRT Line 1 (Futian 2 Station)',
      operatingHours: '09:00 - 17:00',
      moqLevel: 'Low'
    },
    {
      id: 'yiwu-trade-city-district-3',
      cityId: 'yiwu',
      name: {
        ar: 'سوق فوتيان - المنطقة الثالثة (Futian District 3)',
        en: 'Yiwu International Trade City - District 3',
        zh: '义乌国际商贸城三区'
      },
      type: 'Wholesale',
      category: 'Stationery, Eyewear & Sewing Accessories',
      description: {
        ar: 'الطابق 1 لمستلزمات الحياكة والأزرار والسحابات؛ الطابق 2 للأدوات الرياضية والمعدات الترفيهية؛ الطابق 3 للأدوات المكتبية وأقلام ومواد القرطاسية الفاخرة والنظارات الطبية والشمسية؛ الطابق 4 لمنتجات التجميل ومرايا الزينة.',
        en: 'Floor 1 features sewing zippers, buttons & garment trims; Floor 2 displays sports goods & fitness equipment; Floor 3 is the stationery, pen & eyewear optical hub; Floor 4 features mirrors and personal care beauty items.'
      },
      address: {
        ar: 'طريق شوتشوانغ الشمالي، إيوو',
        en: 'Chouzhou North Road, Futian, Yiwu, Zhejiang'
      },
      nearestMetro: 'Yiwu BRT Line 1',
      operatingHours: '09:00 - 17:00',
      moqLevel: 'Low'
    },
    {
      id: 'yiwu-trade-city-district-4',
      cityId: 'yiwu',
      name: {
        ar: 'سوق فوتيان - المنطقة الرابعة (Futian District 4)',
        en: 'Yiwu International Trade City - District 4',
        zh: '义乌国际商贸城四区'
      },
      type: 'Wholesale',
      category: 'Socks, Daily Necessities & Footwear',
      description: {
        ar: 'أضخم مجمع في العالم للجوارب والمنسوجات الاستهلاكية؛ الطابق 1 للجوارب؛ الطابق 2 للسلع اليومية والمناشف والقفازات؛ الطابق 3 للأحذية، الخيوط، وأربطة العنق والأحزمة؛ الطابق 4 للملابس الداخلية والشالات والأوشحة الحريرية.',
        en: 'The world’s central exchange for socks and consumer hosiery; Floor 1 features socks & pantyhose; Floor 2 offers daily necessities & towels; Floor 3 holds shoes, lace, ties & belts; Floor 4 features underwear, bras, and fashion scarves.'
      },
      address: {
        ar: 'طريق شوتشوانغ الشمالي، إيوو',
        en: 'Chouzhou North Road, Futian, Yiwu, Zhejiang'
      },
      nearestMetro: 'Yiwu BRT Line 1',
      operatingHours: '09:00 - 17:00',
      moqLevel: 'Medium'
    },
    {
      id: 'yiwu-trade-city-district-5',
      cityId: 'yiwu',
      name: {
        ar: 'سوق فوتيان - المنطقة الخامسة (Futian District 5)',
        en: 'Yiwu International Trade City - District 5',
        zh: '义乌国际商贸城五区'
      },
      type: 'Wholesale',
      category: 'Auto Accessories, Home Textiles & Imports',
      description: {
        ar: 'الطابق 1 لمركز السلع المستوردة عالمياً؛ الطابق 2 للمفروشات المنزلية وأغطية الأسرة والأقمشة الجاهزة؛ الطابق 3 لمستلزمات الحياكة الستائر؛ الطابق 4 لقطع غيار وإكسسوارات ومستلزمات السيارات والتعديل.',
        en: 'Floor 1 hosts international imported commodities; Floor 2 features beddings, curtains & home textiles; Floor 3 offers knitted materials; Floor 4 is dedicated to automotive accessories, car seat covers, and vehicle repair parts.'
      },
      address: {
        ar: 'طريق شوتشوانغ الشمالي، إيوو',
        en: 'Chouzhou North Road, Futian, Yiwu, Zhejiang'
      },
      nearestMetro: 'Yiwu BRT Line 1',
      operatingHours: '09:00 - 17:00',
      moqLevel: 'Medium'
    },
    {
      id: 'huangyuan-clothing-wholesale-market',
      cityId: 'yiwu',
      name: {
        ar: 'سوق هوانغيوان للملابس الجاهزة (Huangyuan Garment Market)',
        en: 'Huangyuan Garment Wholesale Market',
        zh: '篁园服装市场'
      },
      type: 'Wholesale',
      category: 'Ready-to-Wear Apparel & Children’s Fashion',
      description: {
        ar: 'مجمع تجاري عملاق من 8 طوابق مخصص بالكامل لملابس الرجال، النساء، ملابس الأطفال، ملابس النوم، والمعاطف الشتوية بأسعار جملة تنافسية وجودة تصديرية.',
        en: '8-story mega apparel wholesale mall dedicated to men’s clothing, women’s wear, children’s apparel, knitwear, sleepwear, and winter down jackets.'
      },
      address: {
        ar: 'طريق جيانغهوا، تقاطع طريق هوانغيوان، إيوو',
        en: 'Jiangbin Road & Huangyuan Road, Yiwu, Zhejiang'
      },
      nearestMetro: 'Yiwu Downtown Public Transport Hub',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'Low'
    },
    {
      id: 'yiwu-production-materials-market',
      cityId: 'yiwu',
      name: {
        ar: 'سوق إيوو الدولي لمواد ومعدات الإنتاج (Production Materials Market)',
        en: 'Yiwu International Production Materials Market',
        zh: '义乌国际生产资料市场'
      },
      type: 'Wholesale',
      category: 'Machinery, Raw Materials & Packaging',
      description: {
        ar: 'مخصص للمعدات الصناعية الخفيفة، ماكينات التعبئة والتغليف، خطوط الطباعة، ماكينات حقن البلاستيك، خامات المواد الأولية، واللوجستيات والمخازن.',
        en: 'Specialized industrial market for light manufacturing machinery, food packaging automation lines, commercial printing equipment, plastic raw materials, and warehouse fittings.'
      },
      address: {
        ar: 'طريق شوهاي الجنوبي، منطقة تشوجيانغ، إيوو',
        en: 'Xuehai South Road, Choujiang District, Yiwu, Zhejiang'
      },
      nearestMetro: 'BRT Western Express Route',
      operatingHours: '09:00 - 17:00',
      moqLevel: 'Medium'
    }
  ],

  // ─── 2. COMMERCIAL DISTRICTS ────────────────────────────────────────────────
  districts: [
    {
      id: 'futian-district-yiwu',
      cityId: 'yiwu',
      name: { ar: 'منطقة سوق فوتيان (Futian Market Zone 1-5)', en: 'Futian International Trade Zone' },
      activityType: { ar: 'مدينة التجارة الدولية ومجمعات المعارض الكبرى', en: 'International Trade City & Sourcing Megaplex' },
      mainProducts: ['ألعاب', 'أدوات مطبخ', 'إكسسوارات', 'قرطاسية', 'أدوات كهربائية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Yiwu BRT Line 1'
    },
    {
      id: 'choucheng-downtown-yiwu',
      cityId: 'yiwu',
      name: { ar: 'وسط المدينة والحي العربي التجاري (Choucheng)', en: 'Choucheng Downtown & Arab Commercial Quarter' },
      activityType: { ar: 'مكاتب الشحن العربية، المطاعم الحلال، والبنوك الدولية', en: 'Arab Freight Forwarders, Halal Dining & Forex Banks' },
      mainProducts: ['شركات شحن وتخليص', 'مكاتب تجارية دولية', 'فنادق تجار'],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Chouzhou Road Commercial Center'
    },
    {
      id: 'beiyuan-industrial-yiwu',
      cityId: 'yiwu',
      name: { ar: 'منطقة باييوان الصناعية (Beiyuan Industrial District)', en: 'Beiyuan Industrial Zone' },
      activityType: { ar: 'مصانع الألعاب ومستحضرات التجميل والطباعة والتغليف', en: 'Toy, Cosmetics & Packaging Industrial Factories' },
      mainProducts: ['ألعاب بلاستيكية', 'عبوات تغليف', 'مواد مطبوعة'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Beiyuan Express Road'
    },
    {
      id: 'choujiang-socks-hardware',
      cityId: 'yiwu',
      name: { ar: 'منطقة تشوجيانغ لصناعة الجوارب والعدد (Choujiang)', en: 'Choujiang Hosiery & Hardware Manufacturing Hub' },
      activityType: { ar: 'مصانع الجوارب الآلية ومعدات التثبيت والبلاستيك', en: 'Automated Hosiery Weaving & Hardware Fabrication' },
      mainProducts: ['جوارب قطنية ونايلون', 'سحابات', 'أدوات يدوية'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Choujiang South Line'
    }
  ],

  // ─── 3. INDUSTRIAL CLUSTERS & FACTORIES ─────────────────────────────────────
  industrialZones: [
    {
      id: 'yiwu-hosiery-industrial-base',
      cityId: 'yiwu',
      name: {
        ar: 'تجمع إيوو لصناعة الجوارب والمنسوجات الدائرية',
        en: 'Yiwu Hosiery & Circular Knitting Industrial Cluster'
      },
      clusterSpecialization: {
        ar: 'تنتج وتصدر أكثر من 35% من جوارب العالم بالتعاون مع مصانع داتانغ المجاورة',
        en: 'Produces & Exports >35% of the Global Sock Supply with Datang Cluster'
      },
      factoryTypes: ['Computerized Knitting Mills', 'Packaging & Quality Sorting Lines'],
      keyProducts: ['جوارب رجالية ونسائية', 'جوارب رياضية قطنية', 'كولونات نسائية'],
      specializationLevel: 'High'
    },
    {
      id: 'yiwu-accessories-jewelry-cluster',
      cityId: 'yiwu',
      name: {
        ar: 'تجمع إيوو لصناعة الإكسسوارات والمجوهرات التقليدية',
        en: 'Yiwu Fashion Jewelry & Hair Accessories Cluster'
      },
      clusterSpecialization: {
        ar: 'أكبر مركز تصنيع في العالم لإكسسوارات الشعر والمجوهرات الاصطناعية',
        en: 'World’s Largest Manufacturing Base for Fashion Hair Accessories & Costume Jewelry'
      },
      factoryTypes: ['Alloy Die Casting Foundries', 'Electroplating Workshops', 'Manual Assembly Lines'],
      keyProducts: ['سلاسل وخواتم تقليدية', 'ربطات ومشابك شعر', 'أطقم إكسسوارات كريستال'],
      specializationLevel: 'High'
    }
  ],

  // ─── 4. TRADE FAIRS ─────────────────────────────────────────────────────────
  tradeFairs: [
    {
      id: 'yiwu-fair-commodities',
      name: {
        ar: 'معرض إيوو الدولي للسلع الاستهلاكية (Yiwu Fair)',
        en: 'China Yiwu International Commodities Fair (Yiwu Fair)'
      },
      industry: 'Small Commodities, Hardware, Toys & Household',
      venue: {
        ar: 'مركز إيوو الدولي للمعارض (Yiwu International Expo Center)',
        en: 'Yiwu International Expo Center, Zongze Road'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر أكتوبر (21-25 أكتوبر)',
        en: 'Annually October 21–25'
      },
      officialWebsite: 'http://en.yiwufair.com',
      bestFor: ['Global Importers', 'Department Store Buyers', 'Amazon/Noon Sellers']
    },
    {
      id: 'yiwu-hardware-electrical-fair',
      name: {
        ar: 'معرض إيوو الدولي للعدد والأدوات الكهربائية',
        en: 'China Yiwu Hardware & Electrical Appliances Expo'
      },
      industry: 'Tools, Hardware, Locks & Electrical Appliances',
      venue: {
        ar: 'مركز إيوو الدولي للمعارض والمؤتمرات',
        en: 'Yiwu International Expo Center'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر أبريل',
        en: 'Annually in April'
      },
      officialWebsite: 'http://www.hardwareexpo.cn',
      bestFor: ['Hardware Importers', 'Tool Wholesalers', 'Electrical Contractors']
    }
  ],

  // ─── 5. SOURCING PRODUCTS DEEP DIVE ─────────────────────────────────────────
  sourcingProducts: [
    {
      id: 'yw-small-commodities',
      productName: { ar: 'السلع الصغيرة والأدوات المنزلية المتنوعة', en: 'Small Commodities & Household Goods' },
      industryCategory: 'General Merchandise',
      whyThisCity: { ar: 'أكبر تنوع عالمي بأسعار مصنع مباشرة وإمكانية دمج مئات الأصناف في حاوية واحدة (LCL / FCL).', en: 'Infinite product variety allowing consolidated container shipping across hundreds of suppliers.' },
      mainManufacturingArea: { ar: 'مدينة التجارة الدولية (فوتيان)', en: 'Futian International Trade City' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],

  // ─── 6. LOGISTICS INFRASTRUCTURE ────────────────────────────────────────────
  logistics: {
    nearestAirports: [
      'Yiwu Airport (YIW - مطار إيوو الداخلي - رحلات يومية إلى كوانزو وشينزن وبكين)',
      'Hangzhou Xiaoshan International Airport (HGH - ساعة ونصف عبر الحافلة السريعة أو القطار)',
      'Shanghai Pudong International Airport (PVG - ساعتان ونصف عبر القطار السريع)'
    ],
    seaPorts: [
      'Port of Ningbo-Zhoushan (ميناء نينغبو - المنفذ البحري الرئيسي لإيوو؛ قطار شحن بضائع مباشر كل ساعتين إلى رصيف الميناء)',
      'Shanghai Port (ميناء شنغهاي الدولي)'
    ],
    highSpeedRailwayStations: [
      'Yiwu Railway Station (محطة قطار إيوو - قطارات فائقة السرعة كل 15 دقيقة إلى شنغهاي وهانغتشو ونينغبو)'
    ],
    seaFreightSuitability: {
      ar: 'ربط مباشر وسلس مع ميناء نينغبو عبر ميناء إيوو الجاف (Yiwu Port / Inland Port) مع تخليص جمركي محلي وتشميع الحاويات في إيوو مباشرة.',
      en: 'Seamless direct connection to Ningbo Port via Yiwu Inland Port, featuring on-site container customs clearance and seal inspection.'
    },
    airFreightSuitability: {
      ar: 'شحن جوي سريع للعينات والطرود عبر مطار إيوو ومطار هانغتشو الدولي.',
      en: 'Rapid sample air courier and freight connections through Yiwu and Hangzhou International Airports.'
    },
    primaryCargoRoutes: {
      ar: [
        'خط نينغبو البحري المباشر إلى موانئ الخليج (جبل علي، الدمام، الشويخ)',
        'خط البحر الأحمر المباشر (جدة، العقبة، السخنة)',
        'قطار طريق الحرير البري (Yixinou Express) من إيوو مباشرة إلى مدريد وأوروبا وآسيا الوسطى'
      ],
      en: [
        'Ningbo Direct Liner to Arabian Gulf (Jebel Ali, Dammam)',
        'Red Sea Express (Jeddah, Sokhna)',
        'Yixinou Silk Road Freight Train connecting Yiwu to Central Asia & Madrid'
      ]
    }
  },

  // ─── 7. BUSINESS TRAVEL GUIDE (HOTELS & HALAL DINING) ───────────────────────
  businessTravelGuide: {
    bestVisitMonths: ['مارس', 'أبريل', 'مايو', 'سبتمبر', 'أكتوبر', 'نوفمبر'],
    suggestedStayDays: 6,
    weatherSummary: {
      ar: 'مناخ معتدل؛ الربيع والخريف رائعان ومريحان جداً للمشي الطويل في أروقة سوق فوتيان، بينما الشتاء بارد والصيف دافئ.',
      en: 'Four distinct seasons; spring and autumn are comfortable and ideal for long walking sessions inside Futian Market.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة سوق فوتيان: الفنادق القريبة من بوابات سوق فوتيان (District 1 to 5) هي الخيار العملي الأول.',
        en: 'Futian Market Area: Walking distance to market gates saves immense commute time.'
      },
      {
        ar: 'شارع شوتشوانغ الشمالي (الشارع العربي): يجمع الفنادق التجارية والمطاعم العربية ومكاتب الصرافة والشحن.',
        en: 'Chouzhou North Road (Arab Commercial Street): Best for halal dining and Arab shipping agencies.'
      }
    ],
    localTransportAdvice: {
      ar: 'حافلات BRT مخصصة لربط جميع بوابات سوق فوتيان بوسط المدينة، وسيارات الأجرة وتطبيق Didi متوفرة بكثرة.',
      en: 'Dedicated BRT rapid bus lines connect all Futian market gates directly with downtown hotels.'
    },
    languageTips: {
      ar: 'إيوو هي المدينة الصينية الأكثر تعاملاً باللغة العربية؛ مئات البائعين يتحدثون العربية التجارية والإنجليزية، والمترجمون متوفرون بكثرة.',
      en: 'Yiwu is China’s most Arabic-friendly city. Thousands of shopkeepers speak commercial Arabic, and multilingual translators are readily available.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi', 'Baidu Translate', 'MetroMan'],

    // ─── Recommended Hotels ───
    recommendedHotels: [
      {
        id: 'yiwu-marriott-hotel',
        name: {
          ar: 'فندق ماريوت إيوو (Yiwu Marriott Hotel)',
          en: 'Yiwu Marriott Hotel',
          zh: '义乌万豪酒店'
        },
        starRating: 5,
        category: { ar: 'فاخر 5 نجوم - مقابل سوق فوتيان 3', en: 'Luxury 5-Star - Opposite Market' },
        area: { ar: 'أمام البوابة الرئيسية لسوق فوتيان المنطقة 3', en: 'Directly opposite Futian District 3' },
        highlights: {
          ar: 'الفندق الأكثر تفضيلاً للوفود التجارية ورجال الأعمال؛ موقع استثنائي يعبر منه النزلاء مشياً إلى السوق.',
          en: 'Top choice for VIP trade delegations; pedestrian crosswalk directly connects hotel to Futian market halls.'
        },
        address: {
          ar: '188 طريق فوتيان، إيوو، تشيجيانغ',
          en: '188 Futian Road, Yiwu, Zhejiang'
        }
      },
      {
        id: 'your-world-international-hotel-yw',
        name: {
          ar: 'فندق يور وورلد الدولي (Your World International Hotel)',
          en: 'Your World International Hotel Yiwu',
          zh: '义乌幸福湖国际会议中心'
        },
        starRating: 5,
        category: { ar: 'منتجع ومؤتمرات 5 نجوم', en: 'Luxury Resort & Conference 5-Star' },
        area: { ar: 'منطقة بحيرة شينغفو الهادئة، إيوو', en: 'Xingfu Lake Area, Yiwu' },
        highlights: {
          ar: 'أجنحة رحبة ومساحات خضراء هادئة وملاعب جولف؛ مناسب للإقامات المطولة والاجتماعات التجارية الكبرى.',
          en: 'Expansive landscaped grounds and golf courses; ideal for executive retreats and confidential trade summits.'
        },
        address: {
          ar: 'طريق هوانشان، بحيرة شينغفو، إيوو',
          en: 'Huanhu Road, Xingfu Lake, Yiwu, Zhejiang'
        }
      },
      {
        id: 'shangri-la-hotel-yiwu',
        name: {
          ar: 'فندق شانغريلا إيوو (Shangri-La Yiwu)',
          en: 'Shangri-La Hotel Yiwu',
          zh: '义乌香格里拉大酒店'
        },
        starRating: 5,
        category: { ar: 'فاخر 5 نجوم - مركز التجارة العالمي', en: '5-Star World Trade Center' },
        area: { ar: 'طريق بينهاي التجاري، إيوو', en: 'Binjiang Road Commercial Center, Yiwu' },
        highlights: {
          ar: 'ناطحة سحاب أيقونية بإطلالات بانورامية على مدينة إيوو، وخدمات ضيافة عالمية وقريب من الأسواق ومراكز الشحن.',
          en: 'Iconic skyscraper with panoramic skyline views, world-class amenities, and seamless transport links.'
        },
        address: {
          ar: '6-8 طريق فوتيان، مركز التجارة العالمي، إيوو',
          en: '6-8 Futian Road, World Trade Center, Yiwu, Zhejiang'
        }
      }
    ],

    // ─── Verified Halal & Arab Dining ───
    recommendedRestaurants: [
      {
        id: 'al-basha-arab-restaurant-yw',
        name: {
          ar: 'مطعم الباشا العربي (Al-Basha Restaurant)',
          en: 'Al-Basha Arabic Restaurant Yiwu',
          zh: '巴夏阿拉伯餐厅'
        },
        cuisineType: { ar: 'مأكولات عربية وخليجية وشامية ومشاوي حلال', en: 'Halal Arab, Levantine & Gulf Cuisine' },
        isHalal: true,
        address: {
          ar: 'طريق شوتشوانغ الشمالي (الشارع العربي)، إيوو',
          en: 'Chouzhou North Road (Arab Street), Yiwu, Zhejiang'
        },
        recommendedFor: {
          ar: 'مشاوي مشكلة، خروف محشي، كبسة سعودية، حمص ومتبل مع جلسات عربية راقية ومساحات لاجتماعات التجار',
          en: 'Charcoal grills, stuffed lamb, Saudi kabsa, fresh mezze, and private VIP business dining booths'
        }
      },
      {
        id: 'sultan-turkish-restaurant-yw',
        name: {
          ar: 'مطعم السلطان التركي (Sultan Restaurant Yiwu)',
          en: 'Sultan Turkish Restaurant Yiwu',
          zh: '苏丹土耳其餐厅（义乌店）'
        },
        cuisineType: { ar: 'مأكولات تركية وعثمانية ومشويات حلال', en: 'Authentic Halal Turkish Grills' },
        isHalal: true,
        address: {
          ar: 'طريق شوتشوانغ الشمالي، قرب فندق بست ويسترن، إيوو',
          en: 'Chouzhou North Road, Yiwu, Zhejiang'
        },
        recommendedFor: {
          ar: 'كباب أضنة، لحم بعجين، إسكندر كباب، طواجن تركية، وشاي عثماني مخمر؛ ملتقى يومي للتجار الدوليين',
          en: 'Adana kebabs, Turkish pide, Iskender steaks, and authentic brewed tea; legendary trade community hub'
        }
      },
      {
        id: 'ward-al-sham-restaurant-yw',
        name: {
          ar: 'مطعم ورد الشام (Ward Al Sham)',
          en: 'Ward Al Sham Syrian & Lebanese Restaurant',
          zh: '沙姆玫瑰餐厅'
        },
        cuisineType: { ar: 'مأكولات سورية وشامية حلال', en: 'Halal Syrian & Lebanese Cuisine' },
        isHalal: true,
        address: {
          ar: 'طريق بينهاي، الحي العربي التجاري، إيوو',
          en: 'Binjiang Road, Arab Trade Quarter, Yiwu, Zhejiang'
        },
        recommendedFor: {
          ar: 'شاورما سورية أصلية، كباب حلبي، فلافل، فطائر صفيحة، ووجبات سريعة يومية للتجار أثناء جولات الشراء',
          en: 'Authentic Syrian shawarma, Aleppo kebabs, crispy falafel, and rapid hot lunches during sourcing rounds'
        }
      }
    ],

    // ─── Tourist & Cultural Landmarks ───
    touristAttractions: [
      {
        id: 'futian-wetland-park',
        name: {
          ar: 'منتزه وحدائق بحيرة فوتيان (Futian Wetland Park)',
          en: 'Futian Wetland Park',
          zh: '福田湿地公园'
        },
        category: { ar: 'حديقة بيئية للاسترخاء', en: 'Scenic Waterfront Park' },
        description: {
          ar: 'مساحات خضراء وبحيرات مائية ملاصقة لمجمع سوق فوتيان للاسترخاء بعد يوم عمل طويل وممارسة رياضة المشي.',
          en: 'Peaceful waterfront gardens adjacent to Futian market complex for walking and unwinding after trade hours.'
        },
        nearestMetro: 'Opposite Futian District 4'
      },
      {
        id: 'santang-night-market-yiwu',
        name: {
          ar: 'سوق إيوو الليلي الشعبي (Santang / Binwang Night Market)',
          en: 'Yiwu Santang Night Market',
          zh: '三挺路夜市（宾王夜市）'
        },
        category: { ar: 'سوق ليلي وتسوق شعبي', en: 'Bustling Night Street Market' },
        description: {
          ar: 'أكبر سوق ليلي في إيوو؛ يضم مئات الأكشاك للملابس، الإكسسوارات، الهدايا، والمأكولات الخفيفة الممتعة حتى منتصف الليل.',
          en: 'Yiwu’s liveliest night bazaar packed with hundreds of stalls selling clothing, gadgets, souvenirs, and snacks.'
        },
        nearestMetro: 'Santang Road Pedestrian Street'
      }
    ]
  },

  relatedCitySlugs: ['ningbo', 'hangzhou', 'shanghai', 'shaoxing', 'yongkang', 'cixi'],
  relatedProductSlugs: ['small-commodities', 'toys', 'stationery', 'kitchenware', 'hardware-tools'],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل إيوو التجاري الشامل 2026 | سوق فوتيان، السلع الصغيرة، والفنادق والمطاعم',
      en: 'Yiwu Complete Sourcing Guide 2026 | Futian Market, Small Commodities & Arab Hub'
    },
    description: {
      ar: 'دليل الاستيراد من إيوو: خريطة سوق فوتيان (المناطق 1-5)، سوق هوانغيوان، أسواق الجملة، الفنادق، والمطاعم العربية ومكاتب الشحن.',
      en: 'Exhaustive trade guide to Yiwu: Futian market districts 1-5, Huangyuan garment market, shipping ports, hotels, and Arab restaurants.'
    }
  }
};
