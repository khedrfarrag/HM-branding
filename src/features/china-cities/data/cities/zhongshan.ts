import { ICity } from '../../types';

export const zhongshanCity: ICity = {
  id: 'zhongshan',
  slug: 'zhongshan',
  name: {
    ar: 'تشونغشان (عاصمة الإضاءة)',
    en: 'Zhongshan',
    zh: '中山'
  },
  province: {
    ar: 'غوانغدونغ',
    en: 'Guangdong'
  },
  region: 'Pearl River Delta',
  tier: 'tier-2',
  commercialImportanceScore: 94,
  heroImage: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=1200&q=80',
  skylineImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'عاصمة الإضاءة والإنارة الأولى في العالم بدون منازع وموطن بلدة غوتشن (Guzhen Lighting Capital) التي تنتج وتصدر أكثر من 70% من إجمالي وحدات وثريات الإضاءة في الصين. تضم مراكز تجارية أسطورية مثل ستار ألاينس (Star Alliance) وقصر هوايي، إضافة إلى بلدة شياولان (عاصمة الأقفال والخردوات) وبلدة داتشونغ (عاصمة أثاث خشب الورد).',
    en: 'The Lighting Capital of the World and home to legendary Guzhen Town, which produces over 70% of China’s domestic and export lighting fixtures. Houses architectural lighting megaplexes like Star Alliance and Huayi Plaza, alongside Xiaolan (China’s lock & hardware capital) and Dachong (rosewood furniture capital).'
  },
  keyIndustries: [
    'lighting-fixtures',
    'led-optics',
    'hardware-locks',
    'rosewood-furniture',
    'home-appliances'
  ],
  primaryProducts: {
    ar: [
      'الثريات الكريستالية الضخمة وثريات القصور والفنادق (ستار ألاينس)',
      'إضاءات الليد التجارية والمعمارية والإنارة المخفية (غوتشن)',
      'أعمدة ومصابيح الشوارع بالطاقة الشمسية والكشافات الصناعية (LED Park)',
      'أقفال الأبواب الذكية الرقمية ومقابض وخردوات الأبواب (شياولان)',
      'أثاث خشب الورد والماهوجني الصيني الكلاسيكي (داتشونغ)'
    ],
    en: [
      'Monumental Crystal Chandeliers & Custom Hospitality Fixtures (Star Alliance)',
      'Commercial Architectural LED Lighting & Linear Profiles (Guzhen)',
      'Solar Street Lighting, Stadium Floodlights & Industrial LED Units',
      'Smart Fingerprint Door Locks & Architectural Hardware (Xiaolan Town)',
      'Traditional Rosewood & Solid Mahogany Classical Furniture (Dachong)'
    ]
  },
  bestFor: [
    'Lighting & Chandelier Importer',
    'Electrical Contractor',
    'Interior Designer & Project Furnisher',
    'Lock & Security Hardware Merchant',
    'Solar Street Light Buyer'
  ],

  // ─── 1. ALL WHOLESALE MARKETS ───────────────────────────────────────────────
  wholesaleMarkets: [
    {
      id: 'star-alliance-global-lighting-center',
      cityId: 'zhongshan',
      name: {
        ar: 'مركز ستار ألاينس العالمي للإضاءة الفاخرة (Star Alliance)',
        en: 'Star Alliance Global Brand Lighting Center',
        zh: '星光联盟全球品牌灯饰中心'
      },
      type: 'Wholesale',
      category: 'Luxury Chandeliers & Architectural Lighting',
      description: {
        ar: 'أفخم صرح إضاءة في العالم؛ قصر تجاري من 11 طابقاً بتصميم مستقبلي وشاشات ليد عملاقة، يضم صالات عرض لأرقى علامات الثريات الكريستالية، الإضاءة الحديثة، والإنارة الذكية للفنادق والفلل.',
        en: 'The world’s most prestigious lighting palace spanning 11 stories with a futuristic LED ceiling. Showcases premier global crystal chandeliers, modern designer pendants, and smart hospitality lighting.'
      },
      address: {
        ar: '68 طريق جونغشينغ، بلدة غوتشن، تشونغشان',
        en: '68 Zhongxing Avenue, Guzhen Town, Zhongshan, Guangdong'
      },
      nearestMetro: 'Guzhen Railway Station (5 minutes by taxi)',
      operatingHours: '09:00 - 18:30',
      moqLevel: 'Flexible'
    },
    {
      id: 'huayi-lighting-plaza',
      cityId: 'zhongshan',
      name: {
        ar: 'مجمع هوايي الدولي للإضاءة ومشاريع الإنارة (Huayi Plaza)',
        en: 'Huayi Lighting Plaza (International Expo Center)',
        zh: '华艺广场'
      },
      type: 'Wholesale',
      category: 'Commercial Lighting & Custom Project Engineering',
      description: {
        ar: 'مجمع تجاري ضخم بمساحة 300 ألف متر مربع، يجمع بين ثريات القصور، الإضاءة الخارجية، وتجهيز وتصنيع إضاءات المشاريع الحكومية والفندقية المخصصة.',
        en: '300,000 sqm commercial mega-complex specializing in contract hospitality lighting engineering, outdoor facade illumination, and custom crystal fabrication.'
      },
      address: {
        ar: 'طريق تشيلينغغوان، بلدة غوتشن، تشونغشان',
        en: 'Qilinguan Road, Guzhen Town, Zhongshan'
      },
      nearestMetro: 'Connected to Westin Hotel Zhongshan Guzhen',
      operatingHours: '09:00 - 18:00',
      moqLevel: 'Low'
    },
    {
      id: 'guzhen-lighting-plaza',
      cityId: 'zhongshan',
      name: {
        ar: 'سوق غوتشن التاريخي للإنارة (Guzhen Lighting Plaza)',
        en: 'Guzhen Lighting Wholesale Plaza',
        zh: '古镇灯饰广场'
      },
      type: 'Wholesale',
      category: 'General Residential & Commercial Lighting',
      description: {
        ar: 'السوق المركزي الأشهر لوحدات الإضاءة المنزلية؛ إضاءات الأسقف، الأبجورات، الإضاءات الجدارية، ولمبات الليد بأسعار المصنع المباشرة للتجار.',
        en: 'Historic core marketplace for residential ceiling fixtures, downlights, wall sconces, modern pendant lamps, and wholesale LED bulb packaging.'
      },
      address: {
        ar: 'شارع تونغشينغ، بلدة غوتشن، تشونغشان',
        en: 'Tongxing Road, Guzhen Town, Zhongshan'
      },
      nearestMetro: 'Guzhen Central Corridor',
      operatingHours: '09:00 - 18:00',
      moqLevel: 'Low'
    }
  ],

  // ─── 2. DISTRICTS & TOWNS ───────────────────────────────────────────────────
  districts: [
    {
      id: 'guzhen-town',
      cityId: 'zhongshan',
      name: { ar: 'بلدة غوتشن (عاصمة الإضاءة العالمية)', en: 'Guzhen Lighting Capital Town (古镇镇)' },
      activityType: { ar: 'عاصمة صناعة وتجارة الثريات والإضاءة والمصابيح الذكية', en: 'Global Lighting & Chandelier Capital' },
      mainProducts: ['ثريات كريستال', 'إضاءات معمارية', 'أعمدة ليد طاقة شمسية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Guzhen Railway Station (Guangzhou-Zhuhai HSR)'
    },
    {
      id: 'xiaolan-town',
      cityId: 'zhongshan',
      name: { ar: 'بلدة شياولان (عاصمة الأقفال والخردوات)', en: 'Xiaolan Lock & Hardware Town (小榄镇)' },
      activityType: { ar: 'تصنيع أقفال الأبواب الذكية والمفصلات ومقابض المعادن', en: 'Smart Locks & Architectural Hardware Hub' },
      mainProducts: ['أقفال بصمة وبطاقات ذكية', 'مقابض أبواب نحاسية', 'خردوات ألمنيوم'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: false
    }
  ],

  // ─── 3. INDUSTRIAL CLUSTERS ─────────────────────────────────────────────────
  industrialZones: [
    {
      id: 'guzhen-led-park',
      cityId: 'zhongshan',
      name: {
        ar: 'مجمع غوتشن الصناعي لرقائق الليد والإضاءة المتقدمة',
        en: 'Guzhen Optoelectronic & High-Tech LED Industrial Park'
      },
      clusterSpecialization: {
        ar: 'تصنيع وتجميع شرائح الليد (SMD/COB)، ومحولات الطاقة (Drivers)، وهياكل الألمنيوم المصبوب',
        en: 'LED Packaging (SMD/COB), Waterproof Drivers, Die-Cast Aluminum Housings'
      },
      factoryTypes: ['Automated SMT LED Placement Plants', 'Aluminum Pressure Die-Casting Foundries'],
      keyProducts: ['كشافات ملاعب LED', 'كشافات إنارة شوارع بالطاقة الشمسية', 'محولات طاقة مقاومة للماء'],
      specializationLevel: 'High'
    }
  ],

  // ─── 4. TRADE FAIRS ─────────────────────────────────────────────────────────
  tradeFairs: [
    {
      id: 'gilf-guzhen-lighting-fair',
      name: {
        ar: 'معرض غوتشن الدولي للإضاءة (GILF Lighting Fair)',
        en: 'China (Guzhen) International Lighting Fair (GILF)'
      },
      industry: 'Lighting Fixtures, Chandeliers & LED Engineering',
      venue: {
        ar: 'مركز غوتشن للمؤتمرات والمعارض (Guzhen Convention & Exhibition Center)',
        en: 'Guzhen Convention & Exhibition Center, Zhongshan'
      },
      occurrence: {
        ar: 'دورتان سنوياً: دورة الربيع (مارس) ودورة الخريف (أكتوبر)',
        en: 'Biannually: Spring Edition (March) & Autumn Edition (October)'
      },
      officialWebsite: 'http://en.jiagle.com',
      bestFor: ['Lighting Importers', 'Electrical Distributors', 'Project Contractors']
    }
  ],

  // ─── 5. SOURCING PRODUCTS ───────────────────────────────────────────────────
  sourcingProducts: [
    {
      id: 'zs-lighting-fixtures',
      productName: { ar: 'الثريات الكريستالية ووحدات الإضاءة المعمارية', en: 'Crystal Chandeliers & Commercial Lighting' },
      industryCategory: 'Lighting',
      whyThisCity: { ar: 'تنوع غير محدود وأسعار تصنيع مباشرة للقصور والفنادق مع إمكانية التعديل على الجهد الكهربائي ومقاييس الأمان الدولية.', en: 'Infinite variety of bespoke crystal chandeliers meeting international electrical UL/CE/SASO standards.' },
      mainManufacturingArea: { ar: 'بلدة غوتشن (Guzhen)', en: 'Guzhen Town' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],

  // ─── 6. LOGISTICS ───────────────────────────────────────────────────────────
  logistics: {
    nearestAirports: [
      'Guangzhou Baiyun Airport (CAN - ساعة وعشر دقائق)',
      'Shenzhen Bao’an Airport (SZX - 40 دقيقة عبر جسر شينزن-تشونغشان العملاق الجديد Shenzhen-Zhongshan Link)'
    ],
    seaPorts: [
      'Zhongshan Port (ميناء تشونغشان للعبارات السريعة إلى هونغ كونغ وشحن الحاويات)',
      'Nansha Port & Shekou Port'
    ],
    highSpeedRailwayStations: [
      'Guzhen Railway Station (محطة قطار غوتشن - قطارات سريعة مباشرة إلى كوانزو في 30 دقيقة)',
      'Zhongshan North Railway Station'
    ],
    seaFreightSuitability: {
      ar: 'جسر شينزن-تشونغشان البحري الجديد يربط تشونغشان بموانئ ومطارات شينزن في أقل من 35 دقيقة.',
      en: 'The groundbreaking Shenzhen-Zhongshan Link connects Zhongshan directly to Shenzhen ports in under 35 minutes.'
    },
    airFreightSuitability: {
      ar: 'شحن العينات وقطع الكريستال الحساسة جواً عبر مطارات كوانزو وشينزن.',
      en: 'Fast air express freight for fragile crystal samples and optical components.'
    },
    primaryCargoRoutes: {
      ar: ['شحن حاويات الإضاءة المباشرة إلى جبل علي، جدة، والسخنة'],
      en: ['Direct Middle East Lighting Container Express']
    }
  },

  // ─── 7. BUSINESS TRAVEL GUIDE ───────────────────────────────────────────────
  businessTravelGuide: {
    bestVisitMonths: ['مارس', 'أبريل', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    suggestedStayDays: 3,
    weatherSummary: {
      ar: 'معتدل ولطيف في الشتاء والربيع (16°C إلى 25°C).',
      en: 'Comfortable subtropical climate in autumn/spring.'
    },
    recommendedStayAreas: [
      {
        ar: 'بلدة غوتشن: الإقامة في فندق ويستن غوتشن أو هيلتون غاردن إن بالقرب من ستار ألاينس وقاعات الإضاءة.',
        en: 'Guzhen Town: Staying at The Westin or Hilton next to Star Alliance saves commute time.'
      }
    ],
    localTransportAdvice: {
      ar: 'قطار السرعة العالية يربط محطة جوانزو الجنوبية بمحطة غوتشن في 30 دقيقة فقط.',
      en: 'High-speed rail connects Guangzhou South to Guzhen Station in exactly 30 minutes.'
    },
    languageTips: {
      ar: 'المعارض الكبرى في ستار ألاينس وهوايي توفر موظفين يتحدثون الإنجليزية وكتالوجات مواصفات رقمية.',
      en: 'Major showrooms at Star Alliance provide English specification sheets and lumen test reports.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi'],

    recommendedHotels: [
      {
        id: 'the-westin-zhongshan-guzhen',
        name: {
          ar: 'فندق ويستن تشونغشان غوتشن (The Westin Guzhen)',
          en: 'The Westin Zhongshan Guzhen',
          zh: '中山古镇威斯汀酒店'
        },
        starRating: 5,
        category: { ar: 'أفخم فندق إضاءة 5 نجوم', en: 'Luxury 5-Star Lighting Hub Hotel' },
        area: { ar: 'مجمع هوايي بلازا للإضاءة مباشرة، غوتشن', en: 'Directly inside Huayi Lighting Plaza' },
        highlights: {
          ar: 'ناطحة سحاب أيقونية مدمجة داخل مجمع هوايي بلازا، يتيح النزول بالمصعد مباشرة إلى أكبر معارض الإضاءة.',
          en: 'Soaring skyscraper built inside Huayi Plaza; take the elevator directly into premier lighting showrooms.'
        },
        address: {
          ar: 'طريق تشيلينغغوان، مجمع هوايي، غوتشن، تشونغشان',
          en: 'Huayi Plaza, Qilinguan Road, Guzhen Town, Zhongshan'
        }
      }
    ],

    recommendedRestaurants: [
      {
        id: 'guzhen-halal-muslim-noodles',
        name: {
          ar: 'مطاعم لانتشو ونودلز لحم البقر الحلال بـ غوتشن (Guzhen Halal)',
          en: 'Guzhen Lanzhou Halal Beef Noodles & Grills',
          zh: '古镇清真兰州拉面馆'
        },
        cuisineType: { ar: 'مأكولات إسلامية صينية حلال موثقة', en: 'Certified Chinese Muslim Halal' },
        isHalal: true,
        address: {
          ar: 'شارع تونغشينغ، بالقرب من سوق غوتشن للإنارة، تشونغشان',
          en: 'Tongxing Road, Near Guzhen Lighting Plaza, Zhongshan'
        },
        recommendedFor: {
          ar: 'نودلز طازجة مع شرائح لحم بقر حلال، وأطباق لحم ضأن مقلي مع خضار، وشاي حلال للتجار',
          en: 'Hand-pulled beef noodle soup, halal fried mutton with scallions, and quick dining for buyers'
        }
      }
    ],

    touristAttractions: [
      {
        id: 'sun-yat-sen-former-residence',
        name: {
          ar: 'متحف وقرية الزعيم الصيني سون يات سين التاريخية',
          en: 'Museum of the Former Residence of Dr. Sun Yat-sen',
          zh: '孙中山故居纪念馆'
        },
        category: { ar: 'معلم تاريخي ووطني صيني عريق', en: 'Historic Heritage Landmark' },
        description: {
          ar: 'مسقط رأس مؤسس الصين الحديثة الدكتور سون يات سين؛ متحف تاريخي وقرية كلاسيكية ساحرة توثق تاريخ التحول الصيني.',
          en: 'Birthplace of modern China’s founding father Dr. Sun Yat-sen, showcasing preserved Lingnan architecture.'
        },
        nearestMetro: 'Cuiheng District Corridor'
      }
    ]
  },

  relatedCitySlugs: ['foshan', 'shunde', 'guangzhou', 'dongguan', 'shenzhen'],
  relatedProductSlugs: ['lighting', 'hardware-tools', 'building-materials'],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل تشونغشان وغوتشن التجاري 2026 | أسواق الثريات، الإضاءة، ستار ألاينس',
      en: 'Zhongshan Guzhen Lighting Guide 2026 | Star Alliance, Chandeliers & LED Factories'
    },
    description: {
      ar: 'دليل استيراد الإضاءة والثريات من غوتشن وتشونغشان: مركز ستار ألاينس، مجمع هوايي، معارض GILF، الفنادق، ومطاعم الحلال.',
      en: 'Exhaustive trade guide to Guzhen Zhongshan: Star Alliance lighting center, Huayi plaza, crystal chandeliers, LED factories, and hotels.'
    }
  }
};
