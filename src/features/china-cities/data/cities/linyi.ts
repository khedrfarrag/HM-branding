import { ICity } from '../../types';

export const linyiCity: ICity = {
  id: 'linyi',
  slug: 'linyi',
  name: { ar: 'لينيي (لينبي)', en: 'Linyi', zh: '临沂' },
  province: { ar: 'شاندونغ', en: 'Shandong', zh: '山东省' },
  region: 'North China / Shandong',
  tier: 'tier-2',
  commercialImportanceScore: 93,
  heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'عاصمة أسواق الجملة واللوجستيات الأولى في شمال الصين (تُلقب رسمياً بـ "إيوو الشمال" - South has Yiwu, North has Linyi). تضم مجمع لينيي التجاري أكثر من 120 سوق جملة تخصصي ضخم و60,000 تاجر، وتعتبر "عاصمة خشب الأبلكاش والألواح في الصين" (تنتج 40% من خشب البلاي وود والألواح الإنشائية)، وأكبر قاعدة لأسواق الخردوات والعدد اليدوية ومعدات السلامة المهنية ومستلزمات البلاستيك.',
    en: 'Northern China premier wholesale marketplace and Logistics Capital (celebrated in China as the "Yiwu of the North"). Houses over 120 specialized wholesale market complexes with 60,000 vendor booths. Officially recognized as China Plywood & Wood Panel Capital (producing 40% of China plywood exports), and premier hub for hardware hand tools, PPE safety supplies, and plastic homeware.'
  },
  keyIndustries: ['small-commodities', 'plywood-wood-panels', 'hardware-tools', 'building-materials', 'ppe-safety-gear', 'logistics'],
  primaryProducts: {
    ar: [
      'خشب الأبلكاش (Plywood)، ألواح الصب الأسود المصفح (Film-Faced Plywood)، وMDF',
      'العدد اليدوية والخردوات ومفاتيح الربط والمسامير والشبك السلكي (سوق لينيي للخردوات)',
      'مهمات ومعدات السلامة المهنية (قفازات قطنية ومطاطية، خوذ، سترات فسفورية، كمامات)',
      'السلع الاستهلاكية الصغيرة والأدوات المنزلية ولوازم المطبخ البلاستيكية',
      'سيراميك الأرضيات والأدوات الصحية والأبواب الخشبية الداخلية',
      'أكياس التعبئة والتغليف المنسوجة PP والمشمعات البلاستيكية (Tarpaulins)'
    ],
    en: [
      'Commercial Plywood, Film-Faced Concrete Shuttering Plywood & Melamine MDF Boards',
      'Hardware Hand Tools, Socket Wrenches, Pliers, Fasteners & Wire Mesh (Linyi Hardware City)',
      'Personal Protective Equipment (PPE Cotton/Latex Work Gloves, Helmets, Safety Vests)',
      'Daily Consumer Commodities, Plastic Houseware, Kitchen Organizers & Cleaning Supplies',
      'Ceramic Floor Tiles, Sanitary Ware Fixtures & Interior Composite Wooden Doors',
      'PP Woven Packaging Sacks, Heavy-Duty Tarpaulins & Plastic Film Sheets'
    ]
  },
  bestFor: ['Plywood & Building Materials Importers', 'Hardware & Hand Tool Wholesalers', 'PPE Safety Equipment Buyers', 'General Merchandise Traders'],
  districts: [
    {
      id: 'lanshan-market-belt',
      cityId: 'linyi',
      name: { ar: 'منطقة لAction لأسواق الجملة ومول لينيي (Lanshan Linyi Mall Hub)', en: 'Lanshan District & Linyi Mall Core', zh: '兰山区 / 临沂商城核心区' },
      activityType: { ar: 'أضخم تجمع لأسواق الجملة البرية في الصين (أكثر من 120 سوقاً)، ومراكز الشحن واللوجستيات', en: 'Core Belt of 120 Specialized Wholesale Markets & Inland Logistics Freight Depots' },
      mainProducts: ['أخشاب أبلكاش', 'خردوات وعدد يدوية', 'سلع صغيرة', 'بلاستيك'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Linyi Railway Station / Linyi North High-Speed Station'
    },
    {
      id: 'feixian-wood-panel-base',
      cityId: 'linyi',
      name: { ar: 'مقاطعة فيشيان وقاعدة تصنيع خشب الأبلكاش (Feixian Plywood Base)', en: 'Feixian County Plywood & Timber Processing Base', zh: '费县木业产业园（全国人造板产业基地）' },
      activityType: { ar: 'القاعدة الصناعية الأولى في الصين لتقشير الأخشاب وكبس ألواح الأبلكاش والبلاي وود للتصدير', en: 'China Premier Veneer Peeling, Hot-Pressing & Plywood Manufacturing Hub' },
      mainProducts: ['خشب أبلكاش إنشائي', 'ألواح فورمايكا وميلامين', 'قشرة خشب طبيعي'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestStation: 'Feixian Railway Station'
    },
    {
      id: 'hedong-hardware-machinery',
      cityId: 'linyi',
      name: { ar: 'منطقة هيدونغ للخردوات والآلات الزراعية (Hedong Hardware Base)', en: 'Hedong District Hardware & Agricultural Machinery Base', zh: '河东区（五金机械制造之乡）' },
      activityType: { ar: 'عاصمة تصنيع المفاتيح والمطارق والمقصات، ومعدات الري والآلات الزراعية الخفيفة', en: 'Hardware Forging, Hand Tool Fabrication & Agricultural Machinery Cluster' },
      mainProducts: ['مفاتيح ومبارد يدوية', 'معدات رش زراعي', 'مضخات مياه ومحركات ديزل'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestStation: 'Linyi Qiyang Airport'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'linyi-mall-plywood-timber-city',
      cityId: 'linyi',
      name: { ar: 'مدينة لينيي الدولية للألواح الخشبية ومواد البناء (Linyi Timber & Plywood City)', en: 'Linyi International Timber & Wood Panel Market', zh: '临沂国际木业城 / 临沂板材批发市场' },
      type: 'Wholesale',
      category: 'Plywood, MDF & Decorative Panels',
      description: {
        ar: 'أكبر مركز تجاري لتوزيع وتصدير ألواح خشب الأبلكاش في العالم، بمساحة تفوق 500,000 متر مربع. يضم أكثر من 2500 صالة عرض لمصانع خشب الأبلكاش التجاري، خشب الصب الخرساني المقاوم للماء (WBP Film Faced)، خشب المارين، وألواح الميلامين بأسعار المصنع المباشرة وشحن كونتينرات فوري عبر ميناء تشينغداو وريتشاو.',
        en: 'World largest wholesale and export center for commercial plywood, film-faced concrete formwork boards, marine plywood, and melamine faced MDF. Directly supplies construction contractors in the Middle East and Africa with immediate bulk container loading.'
      },
      address: { ar: 'طريق لينكسي، منطقة لAction، لينيي، شاندونغ', en: 'Linxi 11th Rd, Lanshan District, Linyi, Shandong', zh: '山东省临沂市兰山区临西十一路国际木业市场' },
      nearestStation: 'Linyi North High-Speed Rail Station (25 min taxi)',
      operatingHours: '08:00 - 17:30',
      moqLevel: 'High'
    },
    {
      id: 'linyi-hardware-tools-city',
      cityId: 'linyi',
      name: { ar: 'مدينة لينيي الدولية للخردوات والعدد اليدوية (Linyi Hardware City)', en: 'Linyi International Hardware & Tools Wholesale Market', zh: '临沂五金城（江北最大五金交易中心）' },
      type: 'Wholesale',
      category: 'Hardware, Hand Tools & Fasteners',
      description: {
        ar: 'أضخم سوق خردوات وعدد يدوية ومعدات ورش في شمال الصين يضم أكثر من 3500 متجر ومصنع متخصص. يغطي مفاتيح الربط، الكماشات، المطارق، المسامير، أدوات القياس، أدوات السباكة والكهرباء، وعربات اليد للبناء بأسعار جملة فائقة التنافسية.',
        en: 'Northern China largest hardware mart housing 3,500 specialized wholesale stalls. Offers socket wrench sets, pliers, hammers, steel fasteners, wheelbarrows, plumbing fixtures, and construction hand tools.'
      },
      address: { ar: 'طريق لينكسي 7، منطقة لAction، لينيي', en: 'Linxi 7th Rd, Lanshan District, Linyi', zh: '山东省临沂市兰山区临西七路五金市场' },
      nearestStation: 'Linyi Railway Station (10 min taxi)',
      operatingHours: '08:00 - 17:00',
      moqLevel: 'Low'
    },
    {
      id: 'linyi-small-commodities-city',
      cityId: 'linyi',
      name: { ar: 'سوق لينيي للسلع الصغيرة والأدوات المنزلية (Linyi Small Commodities Mart)', en: 'Linyi Small Commodities Wholesale Market', zh: '临沂小商品城' },
      type: 'Wholesale',
      category: 'Daily Consumer Sundries, Plastics & Houseware',
      description: {
        ar: 'سوق ضخم متعدد الطوابق مكرس للسلع الاستهلاكية، أدوات التنظيف، المنتجات البلاستيكية للمطابخ والمنازل، الألعاب، الحقائب، والهدايا الترويجية، ويشكل الوجهة الأولى لتجار الجملة في شمال الصين والشرق الأوسط.',
        en: 'Vast multi-story commodity mart for daily household sundries, plastic storage containers, kitchen gadgets, toys, school stationery, and cleaning supplies.'
      },
      address: { ar: 'طريق جورا، منطقة لAction، لينيي', en: 'Ju\'er Rd, Lanshan District, Linyi', zh: '山东省临沂市兰山区聚才路小商品城' },
      nearestStation: 'Linyi Railway Station',
      operatingHours: '08:00 - 17:00',
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'linyi-plywood-export-processing-park',
      cityId: 'linyi',
      name: { ar: 'مجمع تصنيع وتصدير الألواح الخشبية في فيشيان (Feixian Plywood Export Base)', en: 'Feixian Mega Plywood & Shuttering Board Manufacturing Base', zh: '临沂费县木业出口加工产业基地' },
      clusterSpecialization: { ar: 'أكبر طاقة إنتاجية في العالم لخشب الأبلكاش وألواح الخرسانة المصفحة، أكثر من 3000 خط كبس هيدروليكي حراري', en: 'World Largest Plywood & Shuttering Board Fabrication Base with over 3,000 multi-opening hot press lines' },
      factoryTypes: ['Continuous Veneer Dryers', 'Multi-Daylight Hydraulic Press Lines', 'Sanding & Sizing Fabs'],
      keyProducts: ['خشب أبلكاش مصفح للخرسانة (Film-Faced)', 'خشب أبلكاش تجاري حور وبيرش', 'ألواح ميلامين ديكورية'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'ly-film-faced-plywood',
      productName: { ar: 'خشب الأبلكاش الإنشائي وألواح صب الخرسانة المصفحة (Film-Faced Plywood)', en: 'Film-Faced Shuttering Plywood & Commercial Plywood Boards' },
      industryCategory: 'plywood-wood-panels',
      whyThisCity: { ar: 'عاصمة الأبلكاش في الصين، وتنتج ألواح مقاومة للماء والرطوبة قابلة للاستخدام المتكرر لصب الخرسانة بأسعار أقل بـ 20-30% من الأسواق الأخرى.', en: 'China Plywood Capital producing WBP waterproof concrete formwork panels with superior reuse cycles and unbeatable wholesale price points.' },
      mainManufacturingArea: { ar: 'لAction وفيشيان (Lanshan & Feixian)', en: 'Lanshan and Feixian' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'ly-hardware-hand-tools',
      productName: { ar: 'العدد اليدوية وأدوات الورش ومعدات البناء والخردوات', en: 'Hardware Hand Tools, Fasteners, Wire Mesh & Construction Tools' },
      industryCategory: 'hardware-tools',
      whyThisCity: { ar: 'سوق لينيي للخردوات يجمع مئات المصانع المتخصصة، مما يتيح تجميع حاويات مشكلة (Mixed Containers) من كافة أنواع العدد والأدوات في مكان واحد.', en: 'Enables high-efficiency mixed container consolidation of hundreds of hand tool and hardware SKUs in a single shipment.' },
      mainManufacturingArea: { ar: 'لAction وهيدونغ (Lanshan & Hedong)', en: 'Lanshan and Hedong' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Linyi Qiyang International Airport (LYI - مطار لينيي الدولي للشحن والمسافرين)',
      'Qingdao Jiaodong Airport (TAO - ساعتان بالقطار السريع)'
    ],
    seaPorts: [
      'Qingdao Port (ميناء تشينغداو البحري - ساعتان بالشاحنات السريعة، الميناء الرئيسي لصادرات لينيي)',
      'Rizhao Port (ميناء ريتشاو - 60 دقيقة فقط بالسيارة، متخصص في الحبوب والأخشاب والحاويات)'
    ],
    highSpeedRailwayStations: [
      'Linyi North Railway Station (临沂北站 - محطة القطار السريع الحديثة)',
      'Linyi Railway Station (临沂站 - وسط المدينة التجاري)'
    ],
    seaFreightSuitability: {
      ar: 'ميناء لينيي البري الجاف (Linyi Dry Port) يرتبط مباشرة بقطارات مكوكية لنقل الحاويات إلى ميناء تشينغداو وميناء ريتشاو، مع إنهاء التخليص الجمركي الداخلي وشحن الحاويات للسفن فوراً.',
      en: 'Linyi Comprehensive Bonded Dry Port operates dedicated rail shuttles to Qingdao Port and Rizhao Port with direct on-site customs clearance.'
    },
    airFreightSuitability: {
      ar: 'شحن العينات الجوية السريع متوفر عبر مطار لينيي تشيانغ ومطار تشينغداو.',
      en: 'Fast sample air courier forwarding via Linyi Qiyang (LYI) and Qingdao airports.'
    },
    primaryCargoRoutes: {
      ar: [
        'خطوط حاويات مكوكية يومية عبر ميناء تشينغداو إلى جبل علي، جدة، الدمام، صلالة، طرابلس، وموانئ الخليج العربي',
        'شبكة نقل بري ضخمة تضم 3000 خط شاحنات تربط لينيي بكافة مدن وموانئ الصين'
      ],
      en: [
        'Daily container train shuttles connecting to Qingdao Port direct vessels for Middle East terminals',
        'Over 3,000 direct domestic highway trucking freight lines originating from Linyi'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['أبريل', 'مايو (معرض الخردوات)', 'سبتمبر (معرض الأخشاب والألواح العالمي)', 'أكتوبر'],
    suggestedStayDays: 3,
    weatherSummary: {
      ar: 'معتدل ولطيف في فصلي الربيع والخريف، دافئ صيفاً وبارد شتاءً. موسم معارض الألواح والخردوات في الخريف هو الأنسب للزيارة.',
      en: 'Mild and pleasant in Spring and Autumn. The Wood & Panel Expo in September is the peak business season.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة لAction ووسط لينيي التجاري (Lanshan Downtown): الأنسب للإقامة بالقرب من أسواق الجملة، الفنادق الفاخرة، والمطاعم.',
        en: 'Lanshan District: Walking distance to Linyi Mall wholesale hubs and upscale hotels.'
      }
    ],
    localTransportAdvice: {
      ar: 'محطة قطارات لينيي الشمالية السريعة (Linyi North Station) تربط المدينة بقطارات فائقة السرعة مع بكين وشانغهاي وتشينغداو وجينان. داخل المدينة، استخدم سيارات الأجرة وتطبيق DiDi للتنقل بين أسواق الجملة المتجاورة.',
      en: 'Linyi North High-Speed Rail Station offers fast bullet trains to Beijing, Shanghai, and Qingdao. Use DiDi for intra-market travel.'
    },
    languageTips: {
      ar: 'في أسواق الأخشاب الكبرى ومصانع الأبلكاش المصدرة للشرق الأوسط، الإنجليزية مقبولة لدى مديري التصدير. داخل أسواق السلع والخردوات، يفضل استخدام تطبيق WeChat للترجمة أو الاستعانة بمترجم تجاري.',
      en: 'Plywood export factories regularly supply the Middle East and have English-speaking sales staff. For general hardware stalls, WeChat translation is recommended.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'pullman-linyi-hotel',
        name: { ar: 'فندق بولمان لينيي لوشينغ (Pullman Linyi Lusheng)', en: 'Pullman Linyi Lusheng', zh: '临沂鲁商铂尔曼大酒店' },
        category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
        area: { ar: 'طريق بينهاي، ضفاف نهر يي، لAction', en: 'Yi River Waterfront, Lanshan District' },
        highlights: { ar: 'أفخم فندق أعمال في لينيي، إطلالة نهرية ساحرة، غرف تنفيذية واسعة، مركز أعمال متكامل وقريب من أسواق الجملة', en: 'Premier international luxury hotel in Linyi, scenic Yi River views, and top business center' }
      },
      {
        id: 'blue-horizon-linyi',
        name: { ar: 'فندق بلو هورايزون الدولي لينيي (Blue Horizon International Hotel)', en: 'Blue Horizon International Hotel Linyi', zh: '临沂蓝海国际大饭店' },
        category: { ar: 'فاخر 5 نجوم للمؤتمرات', en: 'Upscale Business 5-Star' },
        area: { ar: 'طريق شوانغبو، منطقة لAction التجارية', en: 'Shuangling Rd, Lanshan District' },
        highlights: { ar: 'الأقرب لمجمع أسواق لينيي ومراكز اللوجستيات، قاعات اجتماعات عملاقة وخدمات ضيافة ممتازة للمستوردين', en: 'Closest luxury hotel to Linyi Mall wholesale plazas, large exhibition meeting facilities' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'linyi-grand-mosque-halal',
        name: { ar: 'مطعم جامع لينيي الإسلامي التاريخي (Linyi Grand Mosque Halal)', en: 'Linyi Grand Mosque Halal Dining Hall', zh: '临沂清真寺清真餐厅' },
        cuisineType: { ar: 'مأكولات إسلامية صينية ولحم ضأن حلال 100%', en: 'Traditional Chinese Muslim Halal' },
        isHalal: true,
        address: { ar: 'شارع المسجد، منطقة لAction، لينيي', en: 'Mosque St, Lanshan District, Linyi', zh: '山东省临沂市兰山区清真寺' },
        recommendedFor: { ar: 'صلاة الجمعة، وجبات حلال موثوقة طازجة، حساء اللحم البقري ولحم الضأن الطازج', en: 'Friday congregational prayers and certified halal mutton and beef meals' }
      },
      {
        id: 'lanzhou-halal-linyi-mall',
        name: { ar: 'مطعم لانتشو الإسلامي الحلال - فرع مجمع أسواق لينيي', en: 'Lanzhou Halal Beef Noodles Linyi Mall', zh: '兰州正宗清真牛肉拉面（临沂商城店）' },
        cuisineType: { ar: 'مأكولات حلال ونودلز سريعة', en: 'Halal Beef Noodles & Quick Lunch' },
        isHalal: true,
        address: { ar: 'شارع السوق، منطقة لAction، لينيي', en: 'Market St, Lanshan District, Linyi', zh: '山东省临沂市兰山区商城路' },
        recommendedFor: { ar: 'غداء حلال سريع ونظيف أثناء جولات أسواق الخشب والخردوات', en: 'Fast, clean halal lunch during wholesale market inspections' }
      }
    ],
    touristAttractions: [
      {
        id: 'yihe-river-scenic-belt',
        name: { ar: 'كورنيش نهر يي والحدائق البانورامية (Yi River Waterfront Scenic Belt - 沂河风景区)', en: 'Yi River Scenic Waterfront Promenade', zh: '临沂沂河风景区' },
        category: { ar: 'أطول كورنيش نهري حضري في شمال الصين', en: 'Grand Waterfront Cultural Park' },
        description: { ar: 'شريط مائي سياحي ساحر يمتد على ضفاف نهر يي في قلب لينيي يضم أكبر سد مطاطي في العالم، وحدائق خضراء ونوافير موسيقية ليلية مذهلة.', en: 'Sprawling riverfront promenade featuring the world largest rubber dam, illuminated fountains, and historic riverside pavilions.' }
      }
    ],
    essentialServices: [
      {
        id: 'linyi-timber-inspection-center',
        serviceType: { ar: 'فحص الأخشاب والتبخير الجمركي', en: 'Wood Panel Inspection & Fumigation' },
        title: { ar: 'المركز الوطني لفحص واختبار الألواح الخشبية والأبلكاش بـ لينيي', en: 'National Wood-Based Panel Product Quality Inspection Center', zh: '国家人造板产品质量检验检测中心（山东临沂）' },
        description: { ar: 'إجراء اختبارات انبعاث الفورمالديهايد (Formaldehyde Emission E0/CARB)، قوة اللصق، مقاومة الرطوبة WBP، وإصدار شهادات التبخير الرسمية للتصدير.', en: 'Accredited testing lab for bond strength, water-boil resistance (WBP), and CARB/CE formaldehyde emission certification.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'world-wood-industry-expo-linyi',
      name: { ar: 'المعرض العالمي لصناعة الأخشاب والألواح في لينيي (World Wood Industry Expo)', en: 'World Wood Industry Expo & China (Linyi) Wood Expo', zh: '世界木业大会暨中国（临沂）木业博览会' },
      industry: 'Plywood, Timber, Wood-Based Panels & Woodworking Machinery',
      venue: { ar: 'مركز لينيي الدولي للمعارض والمؤتمرات', en: 'Linyi International Convention and Exhibition Center', zh: '临沂国际会展中心' },
      occurrence: { ar: 'سبتمبر سنوياً', en: 'Annually in September' },
      officialWebsite: 'http://www.woodfair.com.cn',
      bestFor: ['Plywood Importers', 'Timber Traders', 'Construction Contractors', 'Furniture Material Buyers']
    },
    {
      id: 'linyi-hardware-expo',
      name: { ar: 'معرض لينيي الدولي للخردوات والعدد والآلات الميكانيكية', en: 'China (Linyi) Hardware & Tools Exhibition', zh: '中国（临沂）五金博览会' },
      industry: 'Hardware, Hand Tools, Power Tools & Fasteners',
      venue: { ar: 'مركز لينيي الدولي للمعارض', en: 'Linyi International Exhibition Center', zh: '临沂国际会展中心' },
      occurrence: { ar: 'مايو سنوياً', en: 'Annually in May' },
      bestFor: ['Hardware Importers', 'Tool Distributors', 'Contractors']
    }
  ],
  relatedCitySlugs: ['qingdao', 'jinan', 'cangzhou', 'yiwu', 'yongkang'],
  relatedProductSlugs: ['plywood-wood-panels', 'hardware-tools', 'building-materials', 'small-commodities'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل لينيي التجاري الشامل | إيوو الشمال، خشب الأبلكاش والخردوات ومواد البناء', en: 'Linyi Sourcing Guide | Yiwu of the North, Plywood & Hardware' },
    description: { ar: 'دليل شامل للاستيراد من لينيي شاندونغ: عاصمة أسواق الجملة في الشمال، مصانع خشب الأبلكاش والبلاي وود، سوق الخردوات والعدد، وفنادق ومطاعم حلال.', en: 'Complete sourcing guide to Linyi: Yiwu of the North, China Plywood Capital, Linyi Hardware City, building materials, and business halal travel.' }
  }
};
