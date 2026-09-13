import { ICity } from '../../types';

export const foshanCity: ICity = {
  id: 'foshan',
  slug: 'foshan',
  name: {
    ar: 'فوشان',
    en: 'Foshan',
    zh: '佛山'
  },
  province: {
    ar: 'غوانغدونغ',
    en: 'Guangdong'
  },
  region: 'Pearl River Delta',
  tier: 'tier-1',
  commercialImportanceScore: 97,
  heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  skylineImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'العاصمة العالمية الأولى لصناعة وتجارة الأثاث المنزلي والفندقي، السيراميك، والبورسلين، والأدوات الصحية، ومقاطع الألمنيوم الإنشائية. تضم بلدة ليكتشونغ (Lecong) بشارع الأثاث الممتد لأكثر من 10 كم، وقصر اللوفر الفاخر (Louvre Furniture Mall)، ومدينة الصين للسيراميك (China Ceramics City). الوجهة الإلزامية لمقاولي المشاريع، الفنادق، والقصور.',
    en: 'The Furniture, Ceramic Tiles & Building Materials Capital of the World. Home to Shunde Lecong 10-kilometer furniture avenue, the palatial Louvre International Furniture Exhibition Center, and China Ceramics City. The definitive global sourcing destination for hotel developers, interior designers, and contractors.'
  },
  keyIndustries: [
    'furniture-furnishings',
    'ceramics-porcelain',
    'sanitary-ware-faucets',
    'aluminum-profiles',
    'home-appliances',
    'building-materials',
    'jade-carving'
  ],
  primaryProducts: {
    ar: [
      'الأثاث المنزلي والفاخر والفندقي وأثاث المكاتب (ليكتشونغ وقصر اللوفر)',
      'بلاط السيراميك والبورسلين ورخام الأرضيات والجدران (مدينة الصين للسيراميك)',
      'الأدوات الصحية، كبائن الاستحمام، وأحواض الجاكوزي والخلاطات (شيوان وهيواي)',
      'مقاطع وأبواب ونوافذ الألمنيوم والواجهات الزجاجية (دالي)',
      'الأجهزة الكهرومنزلية: مكيفات، غسالات، وأفران (مقر ميديا Midea Group)',
      'أساور ومجوهرات اليشم الطبيعي واليشم المنحوت (بينغتشو)'
    ],
    en: [
      'Home, Luxury, Hotel & Office Furniture (Lecong Furniture City & Louvre Mall)',
      'Ceramic Tiles, Large Porcelain Slabs & Marble Flooring (China Ceramics City)',
      'Sanitary Ware, Smart Toilets, Shower Enclosures & Faucets (Shiwan Hub)',
      'Architectural Aluminum Profiles, Curtain Walls & Doors (Dali Cluster)',
      'Household Appliances: Air Conditioners, Washing Machines (Midea HQ)',
      'Natural Jade Bangles, Jewelry & Carvings (Pingzhou Jade Street)'
    ]
  },
  bestFor: [
    'Furniture Importer',
    'Hotel & Resort Developer',
    'Interior Designer & Architect',
    'Ceramic Tiles & Sanitary Wholesaler',
    'Building Contractor',
    'Villa & Real Estate Furnisher'
  ],

  // ─── 1. ALL WHOLESALE MARKETS (EXHAUSTIVE) ──────────────────────────────────
  wholesaleMarkets: [
    {
      id: 'louvre-furniture-mall',
      cityId: 'foshan',
      name: {
        ar: 'قصر اللوفر الدولي للمفروشات والأثاث الفاخر (Louvre Furniture Mall)',
        en: 'Louvre International Furniture Exhibition Center',
        zh: '罗浮宫国际家具博览中心'
      },
      type: 'Wholesale',
      category: 'Luxury & Bespoke Furniture',
      description: {
        ar: 'أفخم وأكبر صرح أثاث في العالم؛ قصر معماري يمتد على مساحة تتجاوز 380 ألف متر مربع، يضم أجنحة لأشهر مصممي الأثاث في العالم، الأثاث الكلاسيكي الإيطالي والفرنسي، الأثاث المودرن الفاخر، وأثاث الفنادق 5 نجوم.',
        en: 'The world’s most prestigious furniture palace spanning over 380,000 sqm. Features global luxury designer brands, classic European palace furniture, bespoke contemporary suites, and turn-key hospitality furniture.'
      },
      address: {
        ar: 'طريق لوشين، بلدة ليكتشونغ، منطقة شوند، فوشان',
        en: 'Section B, 325 National Highway, Lecong, Shunde, Foshan, Guangdong'
      },
      nearestMetro: 'Guangfo Metro Line (Connected to Sofitel Foshan)',
      operatingHours: '09:00 - 18:30',
      moqLevel: 'Flexible'
    },
    {
      id: 'lecong-international-furniture-city',
      cityId: 'foshan',
      name: {
        ar: 'مدينة ليكتشونغ الدولية للأثاث (شارع الـ 10 كم)',
        en: 'Lecong International Furniture Avenue (10km Furniture Row)',
        zh: '乐从国际家具城'
      },
      type: 'Wholesale',
      category: 'Commercial, Residential & Office Furniture',
      description: {
        ar: 'أضخم تجمع لمعارض الأثاث على كوكب الأرض؛ يمتد لأكثر من 10 كيلومترات على جانبي طريق 325 الوطني ويضم أكثر من 200 مجمع تجاري، منها مجمعات سونلينك (Sunlink) وريد ستار ماكلاين ومئات صالات المصانع المباشرة.',
        en: 'The planet’s largest physical furniture retail and wholesale strip stretching 10 km along National Highway 325. Encompasses over 200 dedicated shopping malls including Sunlink North/South and Red Star Macalline.'
      },
      address: {
        ar: 'طريق 325 الوطني، ليكتشونغ، شوند، فوشان',
        en: '325 National Highway, Lecong Town, Shunde, Foshan'
      },
      nearestMetro: 'Guangfo Line to Kuiqi Road + Shuttle/Taxi',
      operatingHours: '09:00 - 18:00',
      moqLevel: 'Low'
    },
    {
      id: 'china-ceramics-city',
      cityId: 'foshan',
      name: {
        ar: 'مدينة الصين للسيراميك والأدوات الصحية (China Ceramics City)',
        en: 'China Ceramics City (CCC Foshan)',
        zh: '中国陶瓷城'
      },
      type: 'Wholesale',
      category: 'Ceramic Tiles, Sanitary Ware & Faucets',
      description: {
        ar: 'المنصة العالمية الأولى لتصدير السيراميك الصيني والبورسلين؛ تضم صالات عرض لأكثر من 200 علامة تجارية عالمية وصينية لأرضيات البورسلين، بلاط الحمامات والمطابخ، والمراحيض الذكية وخلاطات المياه الفاخرة.',
        en: 'The world’s premier export sourcing platform for architectural ceramics, porcelain slabs, mosaic tiles, luxury sanitary ware, smart toilets, and commercial bathroom fittings.'
      },
      address: {
        ar: '2 شارع جيانغوا الثالث، منطقة شانشنغ، فوشان',
        en: '2 Jiangwan 3rd Road, Chancheng District, Foshan, Guangdong'
      },
      nearestMetro: 'Shilong Station / Tongji Lu Station (Guangfo Line)',
      operatingHours: '09:00 - 17:30',
      moqLevel: 'Medium'
    },
    {
      id: 'huayi-sanitary-ware-ceramics-market',
      cityId: 'foshan',
      name: {
        ar: 'سوق هوايي للأدوات الصحية والسيراميك (Huayi Market)',
        en: 'Huayi Sanitary Ware & Bath Accessories Wholesale City',
        zh: '华艺装饰材料物流城 / 卫浴城'
      },
      type: 'Wholesale',
      category: 'Sanitary Ware, Faucets & Hardware',
      description: {
        ar: 'مركز الجملة الأول لمستلزمات السباكة، كبائن الاستحمام الزجاجية، أحواض المغاسل، البانيوهات، وخلاطات المغاسل والدش بأسعار المصنع المباشرة للتجار والمشاريع الكبرى.',
        en: 'Major wholesale exchange for plumbing accessories, glass shower cubicles, ceramic washbasins, bathtubs, and brass/chrome shower mixers directly from regional foundries.'
      },
      address: {
        ar: 'طريق ووتشوانغ، منطقة شانشنغ، فوشان',
        en: 'Wugang Road, Chancheng District, Foshan'
      },
      nearestMetro: 'Chancheng Bus & Metro Line',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'Medium'
    },
    {
      id: 'dali-aluminum-profiles-market',
      cityId: 'foshan',
      name: {
        ar: 'سوق دالي لمقاطع وقطاعات الألمنيوم الإنشائي (Dali Aluminum)',
        en: 'Nanhai Dali Aluminum Profile Wholesale Market',
        zh: '大沥有色金属铝材批发市场'
      },
      type: 'Wholesale',
      category: 'Aluminum Profiles & Architectural Hardware',
      description: {
        ar: 'عاصمة الألمنيوم الإنشائي في الصين؛ مئات المصانع المتخصصة في سحب وبثق قطاعات الألمنيوم للأبواب والشبابيك المعمارية، الواجهات الزجاجية، والألواح المركبة المقاومة للحريق (ACP).',
        en: 'China’s architectural aluminum extrusion capital. Houses hundreds of manufacturers producing window & door profile systems, curtain walls, and aluminum composite panels.'
      },
      address: {
        ar: 'بلدة دالي، منطقة نانهاي، فوشان',
        en: 'Dali Town, Nanhai District, Foshan'
      },
      nearestMetro: 'Nanhai Dali Express Corridor',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'High'
    }
  ],

  // ─── 2. ALL 5 DISTRICTS ─────────────────────────────────────────────────────
  districts: [
    {
      id: 'shunde-district',
      cityId: 'foshan',
      name: { ar: 'منطقة شوند (Shunde District)', en: 'Shunde District (顺德区)' },
      activityType: { ar: 'عاصمة الأثاث العالمية والأجهزة الكهربائية (Midea)', en: 'Global Furniture Hub & Midea Appliance Mega-Base' },
      mainProducts: ['أثاث منازل وفنادق ليكتشونغ', 'قصر اللوفر', 'أجهزة كهرومنزلية Midea'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Guangfo Line & Shunde Metro Line 3'
    },
    {
      id: 'chancheng-district',
      cityId: 'foshan',
      name: { ar: 'منطقة شانشنغ (Chancheng District)', en: 'Chancheng District (禅城区)' },
      activityType: { ar: 'مدينة السيراميك والبورسلين والأدوات الصحية ومقر فوشان الإداري', en: 'China Ceramics Capital & City Administrative Center' },
      mainProducts: ['سيراميك وبورسلين', 'أدوات صحية شيوان', 'رخام صناعي'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Ancestral Temple Station (Guangfo Line)'
    },
    {
      id: 'nanhai-district',
      cityId: 'foshan',
      name: { ar: 'منطقة نانهاي (Nanhai District)', en: 'Nanhai District (南海区)' },
      activityType: { ar: 'عاصمة قطاعات الألمنيوم (دالي) وتجارة اليشم (بينغتشو)', en: 'Dali Aluminum Profiles & Pingzhou Jade Capital' },
      mainProducts: ['ألمنيوم إنشائي دالي', 'أساور يشم بينغتشو', 'إكسسوارات أبواب وشبابيك'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Guangfo Line (Leigang / Qiandenghu)'
    },
    {
      id: 'gaoming-district',
      cityId: 'foshan',
      name: { ar: 'منطقة غاومينغ (Gaoming District)', en: 'Gaoming District (高明区)' },
      activityType: { ar: 'صناعة النسيج والألياف والمواد البلاستيكية الجديدة', en: 'Textiles, New Materials & Chemical Products' },
      mainProducts: ['أقمشة منسوجة', 'مواد كيميائية إنشائية', 'بلاستيك'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: false,
      suitableForBusinessTravel: false,
      nearestMetro: 'Gaoming Modern Tram'
    },
    {
      id: 'sanshui-district',
      cityId: 'foshan',
      name: { ar: 'منطقة سانشوي (Sanshui District)', en: 'Sanshui District (三水区)' },
      activityType: { ar: 'صناعة المشروبات، الأغذية، ومواد البناء الثقيلة', en: 'Beverages, Food Manufacturing & Heavy Building Materials' },
      mainProducts: ['مشروبات معلبة', 'مواد بناء ومعدات ميكانيكية'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: false,
      suitableForBusinessTravel: false,
      nearestMetro: 'Sanshui Railway Station'
    }
  ],

  // ─── 3. INDUSTRIAL CLUSTERS & FACTORY BASES ─────────────────────────────────
  industrialZones: [
    {
      id: 'shunde-lecong-furniture-zone',
      cityId: 'foshan',
      name: {
        ar: 'التجمع الصناعي للأثاث المنزلي والفندقي في شوند',
        en: 'Shunde Lecong & Longjiang Furniture Manufacturing Base'
      },
      clusterSpecialization: {
        ar: 'أكبر قاعدة لتصنيع الأثاث المنجد، غرف النوم، الصالونات، وأثاث الفنادق في العالم',
        en: 'World’s Largest Manufacturing Base for Upholstered Sofas, Bedding & Turnkey Hotel Suites'
      },
      factoryTypes: ['Solid Wood Furniture Plants', 'Sofa Upholstery Lines', 'Hardware Framing Mills'],
      keyProducts: ['أطقم صالونات جلدية وقماشية', 'طاولات طعام رخام وخشب', 'غرف نوم فندقية'],
      specializationLevel: 'High'
    },
    {
      id: 'shiwan-ceramics-sanitary-base',
      cityId: 'foshan',
      name: {
        ar: 'قاعدة شيوان لتصنيع السيراميك والأدوات الصحية',
        en: 'Foshan Shiwan Ceramics & Bathroom Ware Industrial Base'
      },
      clusterSpecialization: {
        ar: 'عاصمة حرق وتصنيع بلاط السيراميك والبورسلين الكبير وأحواض الاستحمام',
        en: 'Historical Kiln Capital of China: Sintered Slabs, Tiles & Porcelain Bath Equipment'
      },
      factoryTypes: ['Kiln Ceramic Firing Plants', 'Sanitary Glaze Lines', 'CNC Slab Cutting Centers'],
      keyProducts: ['ألواح بورسلين عملاقة (Sintered Slabs)', 'سيراميك حمامات مقاوم للانزلاق'],
      specializationLevel: 'High'
    },
    {
      id: 'beijiao-midea-home-appliances',
      cityId: 'foshan',
      name: {
        ar: 'مجمع بيجياو لصناعة الأجهزة المنزلية (Midea Global HQ)',
        en: 'Beijiao Midea Home Appliances Industrial Mega-Cluster'
      },
      clusterSpecialization: {
        ar: 'تصنيع أجهزة التكييف والغسالات والمكانس والميكروويف (مقر ميديا العالمي)',
        en: 'Global Manufacturing of Air Conditioners, Microwaves, Refrigerators (Midea HQ)'
      },
      factoryTypes: ['Robotic Appliance Assembly Plants', 'Compressor Foundries'],
      keyProducts: ['مكيفات سبليت ومركزية', 'ثلاجات ذكية', 'غسالات ومجففات'],
      specializationLevel: 'High'
    }
  ],

  // ─── 4. TRADE FAIRS ─────────────────────────────────────────────────────────
  tradeFairs: [
    {
      id: 'ciff-furniture-foshan',
      name: {
        ar: 'معرض فوشان الدولي للأثاث والديكور (Dragon Furniture Fair)',
        en: 'Dragon Furniture Fair (Longjiang / Lecong Foshan)'
      },
      industry: 'Residential, Upholstered & Office Furniture',
      venue: {
        ar: 'مركز فوشان الدولي للمعارض، لونغجيانغ، شوند',
        en: 'Forward Exhibition Center, Longjiang, Shunde, Foshan'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر مارس وشهر أغسطس',
        en: 'Biannually in March and August'
      },
      officialWebsite: 'http://www.leadshow.com.cn',
      bestFor: ['Furniture Importers', 'Showroom Owners', 'Hotel Procurement']
    },
    {
      id: 'ceramics-china-foshan',
      name: {
        ar: 'معرض فوشان الدولي للسيراميك والأدوات الصحية (CeramBath)',
        en: 'China (Foshan) International Ceramic & Bathroom Fair (CeramBath)'
      },
      industry: 'Ceramic Tiles, Sintered Slabs & Bathroom Sanitary',
      venue: {
        ar: 'مدينة الصين للسيراميك (CCC) ومركز مؤتمرات هوايي',
        en: 'China Ceramics City & China Ceramics Industry Headquarters'
      },
      occurrence: {
        ar: 'دورتان سنوياً: دورة الربيع (أبريل) ودورة الخريف (أكتوبر)',
        en: 'Twice a year: Spring (April) & Autumn (October)'
      },
      officialWebsite: 'http://en.cerambath.org',
      bestFor: ['Tile Wholesalers', 'Sanitary Ware Importers', 'Contractors']
    }
  ],

  // ─── 5. SOURCING PRODUCTS DEEP DIVE ─────────────────────────────────────────
  sourcingProducts: [
    {
      id: 'fs-furniture-building',
      productName: { ar: 'الأثاث المنزلي والفندقي الفاخر', en: 'Luxury Home & Hospitality Furniture' },
      industryCategory: 'Furniture',
      whyThisCity: { ar: 'أكبر تنوع في العالم وجودة مطابقة للتصاميم الإيطالية مع أسعار تصنيع تنافسية وإمكانية التفصيل المخصص.', en: 'Unrivaled variety, Italian-grade aesthetics, and full custom manufacturing for private residences and hotels.' },
      mainManufacturingArea: { ar: 'شوند (ليكتشونغ ولونغجيانغ)', en: 'Shunde (Lecong & Longjiang)' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'fs-ceramic-tiles',
      productName: { ar: 'بلاط البورسلين والسيراميك والأدوات الصحية', en: 'Porcelain Slabs, Tiles & Sanitary Ware' },
      industryCategory: 'Ceramics',
      whyThisCity: { ar: 'عاصمة السيراميك الأولى في آسيا مع مئات التقنيات للأسطح المضادة للبكتيريا والرخام الصناعي فائق الصلابة.', en: 'Asia’s ceramics capital producing durable porcelain slabs, anti-bacterial glazed tiles, and designer sanitary sets.' },
      mainManufacturingArea: { ar: 'شانشنغ وشيوان ونانهاي', en: 'Chancheng, Shiwan & Nanhai' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],

  // ─── 6. LOGISTICS INFRASTRUCTURE ────────────────────────────────────────────
  logistics: {
    nearestAirports: [
      'Guangzhou Baiyun International Airport (CAN - 50 دقيقة عبر الطريق السريع المباشر أو خط المترو المشترك)',
      'Foshan Shadi Airport (FUO - مطار فوشان الداخلي)'
    ],
    seaPorts: [
      'Foshan Sanshui Port & Shunde Port (ميناء فوشان النهري لنقل الحاويات إلى موانئ هونغ كونغ وشينزن)',
      'Nansha Deepwater Port (ميناء نانشا جوانزو - 45 دقيقة بالحاوية)'
    ],
    highSpeedRailwayStations: [
      'Foshan West Railway Station (محطة فوشان الغربية فائقة السرعة)',
      'Guangzhou South Railway Station (محطة جوانزو الجنوبية - 20 دقيقة بالتاكسي أو المترو من فوشان)'
    ],
    seaFreightSuitability: {
      ar: 'يتم شحن الحاويات والأثاث والسيراميك الثقيل عبر الصنادل النهرية مباشرة إلى ميناء نانشا أو شينزن للتصدير العالمي.',
      en: 'Direct barge and feeder container loops transfer heavy furniture and ceramic containers to Nansha and Shenzhen seaports.'
    },
    airFreightSuitability: {
      ar: 'شحن العينات وكتالوجات الأقمشة والجلود عبر مطار كوانزو باييون المجاور.',
      en: 'Swift sample and catalog air cargo dispatched via neighboring Guangzhou Baiyun Airport.'
    },
    primaryCargoRoutes: {
      ar: [
        'خط حاويات الأثاث والسيراميك إلى موانئ جبل علي، الدمام، وجدة',
        'خط البحر الأحمر المباشر لميناء السخنة والعقبة للمشاريع الإنشائية'
      ],
      en: [
        'Middle East Heavy Container Line (Jebel Ali, Dammam, Jeddah)',
        'Red Sea Construction Liner (Sokhna, Aqaba)'
      ]
    }
  },

  // ─── 7. BUSINESS TRAVEL GUIDE (HOTELS & HALAL DINING) ───────────────────────
  businessTravelGuide: {
    bestVisitMonths: ['أكتوبر', 'نوفمبر', 'ديسمبر', 'مارس', 'أبريل'],
    suggestedStayDays: 4,
    weatherSummary: {
      ar: 'مناخ دافئ معتدل في الشتاء والربيع (16°C إلى 25°C) وصيف حار ورطب.',
      en: 'Pleasant and comfortable in winter/spring; warm and humid in summer.'
    },
    recommendedStayAreas: [
      {
        ar: 'بلدة ليكتشونغ (شوند): الإقامة بجوار قصر اللوفر وسوق الأثاث لتوفير وقت التنقل اليومي.',
        en: 'Lecong Town (Shunde): Staying next to Louvre and Lecong Furniture City maximizes sourcing time.'
      },
      {
        ar: 'حي شانشنغ (وسط فوشان): الأفضل لتجار السيراميك والبورسلين بالقرب من مدينة الصين للسيراميك.',
        en: 'Chancheng District: Ideal for ceramic and tile buyers near China Ceramics City.'
      }
    ],
    localTransportAdvice: {
      ar: 'خط مترو Guangfo يربط وسط كوانزو بقلب مدينة فوشان خلال 30 دقيقة بدون أي تبديل.',
      en: 'Guangfo Metro Line seamlessly connects downtown Guangzhou with central Foshan in 30 minutes.'
    },
    languageTips: {
      ar: 'في مجمع اللوفر ومدينة السيراميك تتوفر خدمات الترجمة باللغتين الإنجليزية والعربية.',
      en: 'Louvre and China Ceramics City staff regularly assist international buyers with English and Arabic support.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi', 'MetroMan'],

    // ─── Recommended Hotels ───
    recommendedHotels: [
      {
        id: 'sofitel-foshan-shunde-louvre',
        name: {
          ar: 'فندق سوفيتيل فوشان قصر اللوفر (Sofitel Foshan)',
          en: 'Sofitel Foshan (Connected to Louvre Furniture Mall)',
          zh: '佛山罗浮宫索菲特酒店'
        },
        starRating: 5,
        category: { ar: 'أفخم فندق أثاث بالعالم 5 نجوم', en: 'World Luxury 5-Star Furniture Hotel' },
        area: { ar: 'قصر اللوفر للأثاث مباشرة، ليكتشونغ، شوند', en: 'Directly linked to Louvre Furniture Mall' },
        highlights: {
          ar: 'فندق فريد من نوعه؛ كل قطعة أثاث في غرفه وقاعاته معروضة للبيع والشحن، وملاصق مباشرة لقاعات قصر اللوفر.',
          en: 'Unique luxury concept hotel where all guestroom furniture is sourceable and buyable; built directly on top of Louvre Mall.'
        },
        address: {
          ar: 'طريق 325 الوطني، ليكتشونغ، شوند، فوشان',
          en: '325 National Highway, Lecong, Shunde, Foshan'
        }
      },
      {
        id: 'intercontinental-foshan-chancheng',
        name: {
          ar: 'فندق إنتركونتيننتال فوشان (InterContinental Foshan)',
          en: 'InterContinental Foshan',
          zh: '佛山保利洲际酒店'
        },
        starRating: 5,
        category: { ar: 'فاخر 5 نجوم لرجال الأعمال', en: 'Luxury 5-Star Business Hotel' },
        area: { ar: 'بحيرة تشياندنغ، نانهاي/شانشنغ', en: 'Qiandenghu Lake, Nanhai/Chancheng, Foshan' },
        highlights: {
          ar: 'إطلالة بحرية خلابة، وقاعات مؤتمرات راقية، وقريب من محطة المترو الرابطة بكوانزو وأسواق السيراميك.',
          en: 'Stunning lakeside business hotel 15 minutes from China Ceramics City with express metro links.'
        },
        address: {
          ar: '20 طريق دينغهوانغ، بحيرة تشياندنغ، نانهاي، فوشان',
          en: '20 Denghu East Road, Nanhai District, Foshan'
        }
      }
    ],

    // ─── Verified Halal & Arab Dining ───
    recommendedRestaurants: [
      {
        id: 'mevlana-turkish-restaurant-lecong',
        name: {
          ar: 'مطعم مولانا التركي الحلال بـ ليكتشونغ (Mevlana Lecong)',
          en: 'Mevlana Turkish Restaurant Lecong Foshan',
          zh: '梅夫拉那土耳其餐厅（乐从店）'
        },
        cuisineType: { ar: 'مشاوي تركية وعثمانية حلال', en: 'Halal Turkish Grills & Steaks' },
        isHalal: true,
        address: {
          ar: 'شارع الأثاث، قرب مجمع سونلينك، ليكتشونغ، شوند، فوشان',
          en: 'Near Sunlink Furniture Market, Lecong, Shunde, Foshan'
        },
        recommendedFor: {
          ar: 'كباب تركي، ريش ضأن، لحم عجين، وشاي؛ الخيار المفضل لتجار الأثاث العرب أثناء جولات التسوق في ليكتشونغ',
          en: 'Adana kebab, lamb chops, Turkish bread, and tea; favored lunch haven for furniture buyers'
        }
      },
      {
        id: 'lanzhou-halal-beef-noodles-foshan',
        name: {
          ar: 'مطاعم لانتشو الإسلامية للحوم البقر الحلال (Lanzhou Halal)',
          en: 'Lanzhou Hand-Pulled Beef Noodles Chancheng',
          zh: '兰州正宗牛肉拉面（禅城店）'
        },
        cuisineType: { ar: 'مأكولات إسلامية صينية حلال موثقة', en: 'Certified Chinese Muslim Hand-Pulled Noodles' },
        isHalal: true,
        address: {
          ar: 'طريق جيانغوا، بجوار مدينة الصين للسيراميك، شانشنغ، فوشان',
          en: 'Near China Ceramics City, Chancheng, Foshan'
        },
        recommendedFor: {
          ar: 'حساء نودلز لحم البقر الطازج، لحم ضأن مسلوق بالكمون، ووجبات سريعة ونظيفة للتجار',
          en: 'Fresh hand-pulled beef noodles, sliced spiced beef, and quick authentic halal lunch'
        }
      }
    ],

    // ─── Tourist Attractions ───
    touristAttractions: [
      {
        id: 'ancestral-temple-foshan',
        name: {
          ar: 'معبد فوشان التاريخي ومعرض الفنون القتالية (Ancestral Temple)',
          en: 'Foshan Ancestral Temple (Zumiao)',
          zh: '佛山祖庙'
        },
        category: { ar: 'معلم تاريخي وثقافي عريق', en: 'Historic Daoist & Kung Fu Temple' },
        description: {
          ar: 'مهد الفنون القتالية الصينية وموطن أسطورة الكونغ فو "وونغ فاي هونغ" و"إيب مان"؛ عروض رقص الأسد اليومية وعمارة لينغنان المذهلة.',
          en: 'The birthplace of Southern Kung Fu (Wong Fei-hung & Ip Man) featuring daily traditional Lion Dance performances.'
        },
        nearestMetro: 'Zumiao Station (Guangfo Line)'
      }
    ]
  },

  relatedCitySlugs: ['guangzhou', 'shunde', 'zhongshan', 'dongguan', 'shenzhen'],
  relatedProductSlugs: ['furniture', 'building-materials', 'lighting', 'home-appliances'],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل فوشان التجاري الشامل 2026 | أسواق الأثاث، السيراميك، قصر اللوفر والمصانع',
      en: 'Foshan Sourcing & Business Guide 2026 | Furniture, Louvre Mall & Ceramics City'
    },
    description: {
      ar: 'دليل الاستيراد من فوشان: خريطة أسواق ليكتشونغ للأثاث، قصر اللوفر، مدينة الصين للسيراميك، الأدوات الصحية، الفنادق، والمطاعم الحلال.',
      en: 'Complete trade guide to Foshan: Lecong furniture avenue, Louvre Palace mall, China Ceramics City, sanitary ware factories, and hotels.'
    }
  }
};
