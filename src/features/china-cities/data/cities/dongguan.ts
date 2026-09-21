import { ICity } from '../../types';

export const dongguanCity: ICity = {
  id: 'dongguan',
  slug: 'dongguan',
  name: {
    ar: 'دونغقوان (دونغ جوان)',
    en: 'Dongguan',
    zh: '东莞'
  },
  province: {
    ar: 'غوانغدونغ',
    en: 'Guangdong'
  },
  region: 'Pearl River Delta',
  tier: 'tier-2',
  commercialImportanceScore: 96,
  heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  skylineImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'مصنع العالم الحقيقي (World’s Factory) وحلقة الوصل الصناعية بين كوانزو وشينزن. تشتهر بتجمعات بلداتها الصناعية المتخصصة عالمياً: بلدة هومين (عاصمة ملابس النساء وأسواق فومين)، بلدة تشانغآن (عاصمة قوالب المعادن ومقرات هواتف أوبو وفيو)، بلدة هوجي (عاصمة الأحذية ومواد الجلود)، بلدة دالانغ (عاصمة التريكو وحياكة الصوف)، وبحيرة سونغشان التكنولوجية (مقر هواوي الأوروبي).',
    en: 'The definitive Factory of the World nestled between Guangzhou and Shenzhen. Famous for dedicated manufacturing powerhouse towns: Humen (women’s fashion & Fumin markets), Chang’an (precision mold tooling & Oppo/Vivo smartphone HQs), Houjie (footwear capital), Dalang (knitwear sweater capital), and Songshan Lake tech hub.'
  },
  keyIndustries: [
    'apparel-textiles',
    'precision-molds',
    'smartphones-hardware',
    'footwear-shoes',
    'knitwear-sweaters',
    'industrial-robotics',
    'furniture'
  ],
  primaryProducts: {
    ar: [
      'ملابس النساء والفساتين والأزياء الجاهزة (أسواق فومين وهوانغهي بهومين)',
      'قوالب حقن البلاستيك، الاسطمبات المعدنية الدقيقة، والماكينات (تشانغآن)',
      'الهواتف الذكية ومكوناتها وملحقاتها (مقرات أوبو Oppo وفيفو Vivo)',
      'الأحذية الرياضية، الأحذية الجلدية وخامات النعال والجلود (هوجي)',
      'بلوفرات الصوف، التريكو، والملابس المحبوكة آلياً (دالانغ)',
      'روبوتات الأتمتة والمعدات الإلكترونية (مجمع سونغشان ليك)'
    ],
    en: [
      'Women’s Ready-to-Wear Fashion & Streetwear (Fumin & Yellow River Markets in Humen)',
      'High-Precision Plastic Injection Molds & Metal Stamping Dies (Chang’an)',
      'Smartphones & Mobile Hardware Components (Oppo & Vivo Global HQs)',
      'Footwear, Athletic Shoes & Leather Materials (Houjie Shoe Capital)',
      'Knitwear, Woolen Sweaters & Cardigans (Dalang Sweater Capital)',
      'Industrial Automation Robotics & Advanced Electronics (Songshan Lake)'
    ]
  },
  bestFor: [
    'Apparel & Fashion Wholesaler',
    'Plastic Injection Mold & Tooling Buyer',
    'Footwear & Shoe Importer',
    'Knitwear & Sweater Brand Owner',
    'Electronics OEM/ODM Sourcing'
  ],

  // ─── 1. ALL WHOLESALE MARKETS ───────────────────────────────────────────────
  wholesaleMarkets: [
    {
      id: 'dongguan-humen-fumin-garment',
      cityId: 'dongguan',
      name: {
        ar: 'مدينة فومين للملابس الجاهزة بـ هومين (Humen Fumin)',
        en: 'Humen Fumin Wholesale Garment City',
        zh: '虎门富民服装城'
      },
      type: 'Wholesale',
      category: 'Women’s Apparel & Fast Fashion',
      description: {
        ar: 'القلب النابض لتجارة الملابس في دونغقوان وإحدى أشهر أسواق الملابس في الصين؛ تصدر ملابس النساء والأزياء السريعة والجينز لمئات الدول.',
        en: 'The legendary nerve center of Dongguan’s apparel trade; thousands of manufacturer showrooms specializing in rapid women’s fashion and denim.'
      },
      address: {
        ar: 'شارع رنمين، بلدة هومين، دونغقوان',
        en: 'Renmin South Road, Humen Town, Dongguan, Guangdong'
      },
      nearestMetro: 'Humen Railway Station (High-Speed Rail)',
      operatingHours: '08:30 - 18:00',
      moqLevel: 'Medium'
    },
    {
      id: 'humen-yellow-river-commercial-city',
      cityId: 'dongguan',
      name: {
        ar: 'مدينة النهر الأصفر للأزياء (Yellow River Fashion City)',
        en: 'Humen Yellow River Commercial Fashion City',
        zh: '虎门黄河时装城'
      },
      type: 'Wholesale',
      category: 'Fashion Apparel, Boutique & Accessories',
      description: {
        ar: 'مجمع تجاري شاهق وحديث لملابس البوتيكات، الملابس الكاجوال، الأزياء الشبابية، الأحذية والإكسسوارات بأسعار الجملة المباشرة.',
        en: 'Modern high-rise wholesale complex housing hundreds of boutique fashion showrooms, casualwear, streetwear, and matching accessories.'
      },
      address: {
        ar: 'طريق هومين، بلدة هومين، دونغقوان',
        en: 'Humen Avenue, Humen Town, Dongguan'
      },
      nearestMetro: 'Humen Downtown Corridor',
      operatingHours: '09:00 - 18:30',
      moqLevel: 'Low'
    },
    {
      id: 'houjie-shoe-materials-market',
      cityId: 'dongguan',
      name: {
        ar: 'سوق هوجي العالمي للأحذية وخامات الجلود (Houjie Shoes)',
        en: 'Houjie International Shoe & Material Wholesale City',
        zh: '厚街国际鞋城 / 河田鞋材市场'
      },
      type: 'Wholesale',
      category: 'Shoes, Soles & Shoe Materials',
      description: {
        ar: 'عاصمة تجارة خامات ومستلزمات الأحذية في العالم؛ جلود طبيعية وصناعية، قوالب النعال EVA ومطاط، أربطة، وإكسسوارات وتصنيع الأحذية لماركات عالمية كبرى.',
        en: 'World’s foremost materials market for footwear: PU/PVC leather, rubber & EVA soles, shoe lasts, hardware, and finished footwear collections.'
      },
      address: {
        ar: 'بلدة هوجي، دونغقوان (قرب مركز المعارض الدولي الحديث)',
        en: 'Houjie Town (near Guangdong Modern International Exhibition Center)'
      },
      nearestMetro: 'Dongguan Metro Line 2 (Exhibition Center Station)',
      operatingHours: '09:00 - 17:30',
      moqLevel: 'Medium'
    }
  ],

  // ─── 2. INDUSTRIAL TOWNS & DISTRICTS ────────────────────────────────────────
  districts: [
    {
      id: 'humen-district',
      cityId: 'dongguan',
      name: { ar: 'بلدة هومين للأزياء (Humen Town)', en: 'Humen Apparel & Fashion Town (虎门镇)' },
      activityType: { ar: 'عاصمة صناعة الملابس والمنسوجات السريعة ومحطة قطار هومين', en: 'Global Fast Fashion & Garment Manufacturing Hub' },
      mainProducts: ['ملابس نسائية', 'فساتين', 'جينز', 'أقمشة ملابس'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Humen Railway Station (Guangzhou-Shenzhen-HK HSR)'
    },
    {
      id: 'chang-an-district',
      cityId: 'dongguan',
      name: { ar: 'بلدة تشانغآن للقوالب والهواتف (Chang’an Town)', en: 'Chang’an Precision Mold & Smartphone Town (长安镇)' },
      activityType: { ar: 'عاصمة قوالب المعادن والاسطمبات ومقرات هواتف Oppo و Vivo', en: 'Precision Mold Tooling & Smartphone Capital (Oppo/Vivo)' },
      mainProducts: ['قوالب حقن بلاستيك', 'اسطمبات معدنية', 'هواتف ذكية', 'إلكترونيات دقيقة'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'houjie-district',
      cityId: 'dongguan',
      name: { ar: 'بلدة هوجي للأحذية والمعارض (Houjie Town)', en: 'Houjie Footwear & Exhibition Town (厚街镇)' },
      activityType: { ar: 'صناعة وتجارة الأحذية ومركز المعارض الدولي الحديث', en: 'Footwear Manufacturing & Modern International Expo Center' },
      mainProducts: ['أحذية رياضية وجلدية', 'خامات أحذية ونعال', 'أثاث منزلي'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Exhibition Center Station (Dongguan Line 2)'
    },
    {
      id: 'dalang-district',
      cityId: 'dongguan',
      name: { ar: 'بلدة دالانغ لبلوفرات الصوف والتريكو (Dalang Town)', en: 'Dalang Sweater & Knitwear Town (大朗镇)' },
      activityType: { ar: 'عاصمة حياكة وتصنيع الملابس الصوفية والتريكو عالمياً', en: 'World Capital of Sweaters & Machine Knitwear' },
      mainProducts: ['بلوفرات صوف', 'تريكو آلي', 'خيوط غزل صوفية'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: false
    }
  ],

  // ─── 3. INDUSTRIAL CLUSTERS ─────────────────────────────────────────────────
  industrialZones: [
    {
      id: 'changan-mold-park',
      cityId: 'dongguan',
      name: {
        ar: 'تجمع تشانغآن لصناعة القوالب والمعدات الدقيقة',
        en: 'Chang’an Precision Hardware & Mold Industrial Base'
      },
      clusterSpecialization: {
        ar: 'أضخم تجمع في آسيا لتصميم وتصنيع قوالب حقن البلاستيك والاسطمبات الدقيقة',
        en: 'Asia’s Largest Precision Mold Tooling and Metal Stamping Die Cluster'
      },
      factoryTypes: ['CNC High-Speed Milling Shops', 'EDM Wire Cutting Foundries', 'Precision Tooling Labs'],
      keyProducts: ['قوالب إلكترونيات وسيارات', 'اسطمبات ختم معدني', 'ماكينات حقن بلاستيك'],
      specializationLevel: 'High'
    },
    {
      id: 'songshan-lake-tech-hub',
      cityId: 'dongguan',
      name: {
        ar: 'مدينة سونغشان ليك للتقنيات العالية ومقر هواوي (Songshan Lake)',
        en: 'Songshan Lake High-Tech Industrial Development Zone'
      },
      clusterSpecialization: {
        ar: 'أبحاث هواوي وتصنيع الروبوتات الصناعية والطاقة الجديدة ومعدات الأتمتة',
        en: 'Huawei Global R&D European Campus, Industrial Robotics & Automation'
      },
      factoryTypes: ['R&D Campuses', 'Advanced Robotics Assembly Facilities'],
      keyProducts: ['خوادم وشبكات ذكية', 'روبوتات أتمتة صناعية', 'أجهزة إلكترونية فائقة الدقة'],
      specializationLevel: 'High'
    }
  ],

  // ─── 4. TRADE FAIRS ─────────────────────────────────────────────────────────
  tradeFairs: [
    {
      id: 'dongguan-famous-furniture-fair',
      name: {
        ar: 'معرض دونغقوان الدولي للأثاث الفاخر (3F Fair)',
        en: 'International Famous Furniture Fair (3F Dongguan)'
      },
      industry: 'Luxury Furniture, Upholstery & Machinery',
      venue: {
        ar: 'مركز قوانغدونغ الدولي الحديث للمعارض (GDE)، بلدة هوجي، دونغقوان',
        en: 'Guangdong Modern International Exhibition Center, Houjie, Dongguan'
      },
      occurrence: {
        ar: 'دورتان سنوياً: دورة الربيع (مارس) ودورة الخريف (أغسطس)',
        en: 'Biannually in March and August'
      },
      officialWebsite: 'http://www.gde.cc',
      bestFor: ['Furniture Buyers', 'Showroom Owners', 'Interior Designers']
    }
  ],

  // ─── 5. SOURCING PRODUCTS ───────────────────────────────────────────────────
  sourcingProducts: [
    {
      id: 'dg-molds-machinery',
      productName: { ar: 'قوالب البلاستيك والاسطمبات الدقيقة والماكينات', en: 'Plastic Injection Molds & Metal Dies' },
      industryCategory: 'Machinery & Tooling',
      whyThisCity: { ar: 'دقة تصنيع متناهية، كفاءة فولاذ القوالب، وسرعة تسليم العينات الأولية خلال أيام معدودة.', en: 'World-class tooling accuracy, premium mold steels, and rapid prototype sample turnarounds.' },
      mainManufacturingArea: { ar: 'بلدة تشانغآن (Chang’an)', en: 'Chang’an Town' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],

  // ─── 6. LOGISTICS ───────────────────────────────────────────────────────────
  logistics: {
    nearestAirports: [
      'Shenzhen Bao’an Airport (SZX - 35 دقيقة عبر الطريق السريع)',
      'Guangzhou Baiyun Airport (CAN - 55 دقيقة)'
    ],
    seaPorts: [
      'Dongguan Humen Port (ميناء هومين النهري للحاويات)',
      'Shenzhen Yantian & Shekou Ports (40 دقيقة بالحاوية البرية)'
    ],
    highSpeedRailwayStations: [
      'Humen Railway Station (محطة هومين لقطارات السرعة العالية بين كوانزو وهونغ كونغ وشينزن - 17 دقيقة إلى كوانزو أو شينزن)'
    ],
    seaFreightSuitability: {
      ar: 'موقع استراتيجي يتيح شحن الحاويات عبر موانئ شينزن أو موانئ كوانزو بسرعة وسهولة.',
      en: 'Strategic midpoint with direct container trucking routes to Shenzhen and Guangzhou deepwater berths.'
    },
    airFreightSuitability: {
      ar: 'شحن جوي سريع للعينات عبر مطار شينزن باوان المجاور مباشرة.',
      en: 'Swift express air dispatch via nearby Shenzhen Bao’an International Airport.'
    },
    primaryCargoRoutes: {
      ar: ['شحن بري سريع إلى موانئ شينزن للتصدير المباشر للخليج والشرق الأوسط'],
      en: ['Direct truck-to-ship corridors to Shenzhen Yantian and Shekou terminals']
    }
  },

  // ─── 7. BUSINESS TRAVEL GUIDE ───────────────────────────────────────────────
  businessTravelGuide: {
    bestVisitMonths: ['أكتوبر', 'نوفمبر', 'ديسمبر', 'مارس', 'أبريل'],
    suggestedStayDays: 3,
    weatherSummary: {
      ar: 'مناخ استوائي دافئ؛ ممتاز للتنقل بين البلدات الصناعية.',
      en: 'Subtropical and pleasant in winter/spring.'
    },
    recommendedStayAreas: [
      {
        ar: 'بلدة هوجي (Houjie): الأفضل لزوار المعارض الدولية بفندق كاندي وفندق شيراتون.',
        en: 'Houjie: Best for expo attendees near the Modern Exhibition Center.'
      },
      {
        ar: 'بلدة هومين (Humen): الأفضل لتجار الملابس والأزياء السريعة.',
        en: 'Humen: Ideal for clothing and fashion buyers near Fumin market.'
      }
    ],
    localTransportAdvice: {
      ar: 'مترو دونغقوان الخط 2 يربط محطة قطار هومين بمركز المعارض بوسط المدينة.',
      en: 'Dongguan Metro Line 2 connects Humen High-Speed Rail Station with the Exhibition Center.'
    },
    languageTips: {
      ar: 'تنتشر الإنجليزية في مصانع التصدير والمجمعات الدولية الكبرى.',
      en: 'English is commonly spoken in export tooling factories and international hotels.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi'],

    recommendedHotels: [
      {
        id: 'kande-international-dg',
        name: {
          ar: 'فندق كاندي الدولي دونغقوان (Kande International)',
          en: 'Kande International Hotel Dongguan',
          zh: '东莞康帝国际酒店'
        },
        starRating: 5,
        category: { ar: 'فاخر 5 نجوم - مركز دونغقوان', en: 'Luxury 5-Star CBD' },
        area: { ar: 'مركز مدينة دونغقوان التجاري (CBD)', en: 'Dongguan City CBD' },
        highlights: {
          ar: 'برج أيقوني بارتفاع 39 طابقاً؛ فندق رجال الأعمال الأول في دونغقوان بخدمات ومطاعم عالمية.',
          en: 'Premier 39-story landmark luxury business hotel with executive business amenities.'
        },
        address: {
          ar: 'طريق هونغ فو، نانتشنغ، دونغقوان',
          en: 'Hongfu Road, Nancheng District, Dongguan'
        }
      }
    ],

    recommendedRestaurants: [
      {
        id: 'dongguan-lanzhou-halal',
        name: {
          ar: 'مطاعم لانتشو ودونغشيانغ الإسلامية الحلال (Halal Lanzhou DG)',
          en: 'Dongguan Lanzhou & Xinjiang Halal Restaurants',
          zh: '东莞清真牛肉拉面馆'
        },
        cuisineType: { ar: 'مأكولات إسلامية صينية حلال موثقة', en: 'Certified Chinese Muslim Halal' },
        isHalal: true,
        address: {
          ar: 'طريق هومين التجاري وطريق نانتشنغ، دونغقوان',
          en: 'Humen Commercial Avenue and Nancheng, Dongguan'
        },
        recommendedFor: {
          ar: 'لحم ضأن طازج بالكمون، نودلز لحم بقر مسحوبة باليد، ووجبات غداء سريعة ونظيفة للتجار',
          en: 'Spiced halal lamb, hand-pulled noodles, and fresh hot meals during factory tours'
        }
      }
    ],

    touristAttractions: [
      {
        id: 'songshan-lake-scenic-area',
        name: {
          ar: 'بحيرة سونغشان ومجمع القصور الأوروبية (Songshan Lake)',
          en: 'Songshan Lake & Huawei European Castle',
          zh: '松山湖风景区（华为欧洲小镇）'
        },
        category: { ar: 'بحيرة طبيعية ومجمع معماري خلاب', en: 'Scenic Lake & European Architecture' },
        description: {
          ar: 'بحيرة خضراء شاسعة تحتضن الحرم الأوروبي لشركة هواوي الذي يضم قطارات كلاسيكية وقصوراً تحاكي 12 مدينة أوروبية.',
          en: 'Expansive scenic parkland hosting Huawei’s fairytale campus with vintage trams and European replica castles.'
        },
        nearestMetro: 'Songshan Lake Express'
      }
    ]
  },

  relatedCitySlugs: ['guangzhou', 'shenzhen', 'foshan', 'zhongshan', 'huizhou'],
  relatedProductSlugs: ['apparel', 'hardware-tools', 'smartphones', 'footwear'],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل دونغقوان التجاري الشامل 2026 | مصانع القوالب، ملابس هومين، والأحذية',
      en: 'Dongguan Sourcing Guide 2026 | Factory of the World, Humen Apparel & Chang’an Molds'
    },
    description: {
      ar: 'دليل الاستيراد من دونغقوان: أسواق هومين للأزياء، مصانع قوالب تشانغآن، أحذية هوجي، بلوفرات دالانغ، الفنادق، ومطاعم الحلال.',
      en: 'Exhaustive trade guide to Dongguan: Humen garment markets, Chang’an precision mold cluster, Houjie shoes, and logistics.'
    }
  }
};
