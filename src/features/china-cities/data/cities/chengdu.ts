import { ICity } from '../../types';

export const chengduCity: ICity = {
  id: 'chengdu',
  slug: 'chengdu',
  name: { ar: 'تشنغدو', en: 'Chengdu', zh: '成都' },
  province: { ar: 'سيتشوان', en: 'Sichuan', zh: '四川省' },
  region: 'West China',
  tier: 'tier-1',
  commercialImportanceScore: 94,
  heroImage: 'https://images.unsplash.com/photo-1543097692-fa13c6cd8595?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1543097692-fa13c6cd8595?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'العاصمة التجارية والصناعية الأولى لغرب الصين ومركز التكنولوجيا الفائقة (يُصنع فيها جهاز من كل جهازين iPad في العالم، وتضم أكبر قاعدة لاختبار شرائح Intel). تشتهر بأنها "عاصمة الأحذية النسائية الصينية" في ووهو (Wuhou Ladies Footwear Capital)، وبوابة قطار الشحن السريع المباشر إلى أوروبا (Rong\'ou Express)، وموطن معرض السكر والأغذية الوطني الأكبر في الصين (CFDF).',
    en: 'Western China premier commercial, industrial, and high-tech powerhouse (assembling 1 in every 2 global iPads and hosting Intel chip testing). Celebrated as China Women Footwear Capital in Wuhou, premier origin of China-Europe direct freight rail (Rong\'ou Express), and home to China largest national food & beverage trade expo (CFDF).'
  },
  keyIndustries: ['women-footwear', 'electronics-assembly', 'technology-it', 'rail-logistics', 'biomedical', 'food-beverage'],
  primaryProducts: {
    ar: [
      'الأحذية النسائية الجلدية الفاخرة، أحذية الكعب العالي، والصنادل والبوتات (Wuhou Shoe Capital)',
      'أجهزة الكمبيوتر اللوحية (iPad)، الحواسيب المحمولة، والشاشات المجمعة (Foxconn)',
      'الشرائح الإلكترونية وأشباه الموصلات المجمعة ومعدات الاتصالات',
      'قطارات الشحن السريع بالسكك الحديدية إلى آسيا الوسطى وأوروبا',
      'المعدات الصيدلانية الحيوية والأجهزة الطبية',
      'الأغذية المعلبة ومكونات بهارات سيتشوان والصلصات التصديرية'
    ],
    en: [
      'Women Genuine Leather Shoes, High Heels, Fashion Boots & Sandals (Wuhou Hub)',
      'Tablet Computers (iPad Assembly), Laptops & Precision Smart Devices (Foxconn Base)',
      'Semiconductor Packaging, Microchips & Telecommunication Equipment (Intel Base)',
      'China-Europe Trans-Eurasian Express Rail Freight Logistics',
      'Biomedical Diagnostic Equipment & Surgical Devices',
      'Processed Specialty Foods, Sichuan Spices, Hotpot Base & Sauces'
    ]
  },
  bestFor: ['Women Footwear Importers', 'Electronics Assembly Buyers', 'Cross-Border Rail Logistics', 'Food & Beverage Wholesalers'],
  districts: [
    {
      id: 'wuhou-women-shoe-capital',
      cityId: 'chengdu',
      name: { ar: 'منطقة ووهو - عاصمة الأحذية النسائية (Wuhou Shoe Capital)', en: 'Wuhou District (China Women Footwear Capital)', zh: '武侯区（中国女鞋之都核心区）' },
      activityType: { ar: 'المركز العالمي الأول لتصميم وتصنيع وتصدير الأحذية النسائية الفاخرة والجلدية', en: 'World Premier Sourcing Hub for Ladies Genuine Leather Footwear' },
      mainProducts: ['أحذية نسائية جلدية', 'أحذية كعب عالي', 'صنادل صيفية', 'بوتات شتوية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Wuhou Flyover Station (Line 3)'
    },
    {
      id: 'chengdu-hi-tech-zone-cdht',
      cityId: 'chengdu',
      name: { ar: 'منطقة تشنغدو للتكنولوجيا العالية (CDHT & Foxconn)', en: 'Chengdu Hi-Tech Industrial Development Zone (CDHT)', zh: '成都高新技术产业开发区（高新南区/西区）' },
      activityType: { ar: 'مصانع فوكسكون العملاقة لتجميع أجهزة آبل، مصنع إنتل لشرائح الكمبيوتر، ومقرات برمجيات الألعاب والذكاء الاصطناعي', en: 'Foxconn iPad Assembly Megafactory, Intel Chip Packaging & Software Park' },
      mainProducts: ['أجهزة كمبيوتر لوحي iPad', 'أشباه موصلات', 'حلول برمجية وإنترنت أشياء'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Hi-Tech Zone Station (Line 1)'
    },
    {
      id: 'jinjiang-chunxi-road-cbd',
      cityId: 'chengdu',
      name: { ar: 'منطقة جينجيانغ وشارع تشونكسي التجاري (Chunxi Road & IFS)', en: 'Jinjiang District, Chunxi Road & IFS Financial Core', zh: '锦江区 / 春熙路商圈 / 成都IFS' },
      activityType: { ar: 'قلب تشنغدو التجاري والمالي، مقرات كبرى الشركات الأجنبية، البنوك، وأفخم الفنادق العالمية', en: 'Financial Core, Luxury Commercial Skyscrapers, Consulates & Luxury Flagships' },
      mainProducts: ['خدمات بنكية وتمويل دولي', 'مقرات تجارية إقليمية', 'فنادق أعمال فاخرة'],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Chunxi Road Station (Lines 2 & 3)'
    },
    {
      id: 'qingbaijiang-rail-port',
      cityId: 'chengdu',
      name: { ar: 'منطقة تشينغبايجيانغ وميناء السكك الحديدية الدولي (Qingbaijiang Rail Port)', en: 'Qingbaijiang Chengdu International Railway Port', zh: '青白江区 / 成都国际铁路港' },
      activityType: { ar: 'محطة انطلاق قطارات الشحن السريع إلى أوروبا، مستودعات الترانزيت الجمركية الحرة ومنصات الشحن المتعدد', en: 'Origin Terminal of China-Europe Express Train, Bonded Logistics & Multimodal Hub' },
      mainProducts: ['حاويات قطارات دولية', 'سيارات مستوردة وتصديرية', 'بضائع تجارة عابرة للحدود'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestStation: 'Qingbaijiang East Railway Station'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'china-women-shoe-capital-mart',
      cityId: 'chengdu',
      name: { ar: 'مدينة الأحذية النسائية الصينية في ووهو (China Women Footwear Sourcing City)', en: 'China Women Footwear Sourcing City (Wuhou)', zh: '中国女鞋之都鞋都工业园 / 女鞋批发采购中心' },
      type: 'Wholesale',
      category: 'Women Leather Shoes, High Heels & Boots',
      description: {
        ar: 'أكبر مجمع تجاري وسوق متخصص في العالم للأحذية النسائية الجلدية، يضم أكثر من 1500 صالة عرض لمصانع الأحذية ومصممي الموضة. يشتهر بتصاميم الكعب العالي الأنيقة، البوتات الجلدية الطويلة، الصنادل، والأحذية الكاجوال المريحة المصنوعة من جلود الأبقار والماعز الطبيعية بأسعار جملة تنافسية وتصدير فوري.',
        en: 'The definitive national market dedicated exclusively to women genuine leather shoes, fashion pumps, boots, and comfort sandals. Features over 1,500 manufacturing showrooms offering bespoke design collections and high-volume export lines.'
      },
      address: { ar: 'طريق ووهو الغربي، منطقة ووهو، تشنغدو، سيتشوان', en: 'Wuhou Avenue, Wuhou District, Chengdu, Sichuan', zh: '四川省成都市武侯区武侯大道中国女鞋之都' },
      nearestMetro: 'Wuhou Flyover Station (Line 3, 10 min taxi)',
      operatingHours: '09:00 - 17:30',
      moqLevel: 'Low'
    },
    {
      id: 'chengdu-international-trade-city',
      cityId: 'chengdu',
      name: { ar: 'مدينة تشنغدو للتجارة الدولية (Chengdu International Trade City)', en: 'Chengdu International Trade City (Hexin Mart)', zh: '成都国际商贸城（荷花池升级版）' },
      type: 'Wholesale',
      category: 'General Commodities, Apparel, Luggage & Home Goods',
      description: {
        ar: 'أضخم مجمع تجاري في غرب الصين يمتد على مساحة 5 ملايين متر مربع ويعد الامتداد الحديث لأسواق خيخوا تشي التاريخية. يغطي الملابس الجاهزة، الحقائب والأحذية، السلع الاستهلاكية الصغيرة، ومستلزمات الفنادق والديكور.',
        en: 'Western China largest comprehensive wholesale trade mega-complex (5M sqm) encompassing apparel, fabrics, luggage, daily sundries, hotel supplies, and traditional Chinese medicine herbs.'
      },
      address: { ar: 'طريق بيدوشان، منطقة جيننيو، تشنغدو', en: 'Beidoushan Rd, Jinniu District, Chengdu', zh: '四川省成都市金牛区聚霞路1号成都国际商贸城' },
      nearestMetro: 'Chengdu International Trade City Station (Line 5)',
      operatingHours: '08:30 - 17:00',
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'foxconn-chengdu-ipad-base',
      cityId: 'chengdu',
      name: { ar: 'قاعدة فوكسكون العالمية لتجميع أجهزة اللاب توب والآيباد (Foxconn Chengdu)', en: 'Foxconn Technology Group Chengdu Megabase', zh: '富士康成都科技园（高新西区）' },
      clusterSpecialization: { ar: 'أكبر مجمع في العالم لتجميع أجهزة iPad اللوحية وحواسيب ماك بوك المحمولة، يوظف أكثر من 100,000 مهندس وفني', en: 'World Largest Tablet & Laptop Assembly Plant assembling over 50% of global iPads with automated robotic lines' },
      factoryTypes: ['Robotic Final Assembly Megaplants', 'Precision Stamping & Tooling'],
      keyProducts: ['أجهزة كمبيوتر لوحية iPad', 'حواسيب محمولة ذكية', 'لوحات إلكترونية دقيقة'],
      specializationLevel: 'High'
    },
    {
      id: 'intel-products-chengdu-base',
      cityId: 'chengdu',
      name: { ar: 'مجمع إنتل العالمي لتغليف واختبار الرقائق (Intel Products Chengdu)', en: 'Intel Products (Chengdu) Chip Packaging & Test Megafab', zh: '英特尔产品（成都）有限公司芯片封装测试基地' },
      clusterSpecialization: { ar: 'واحدة من أضخم قواعد شركة إنتل العالمية لاختبار وتغليف معالجات الكمبيوتر وأشباه الموصلات المتطورة', en: 'One of Intel largest global high-volume packaging and test facilities for advanced microprocessors' },
      factoryTypes: ['Advanced Semiconductor Cleanrooms', 'Wafer Testing Facilities'],
      keyProducts: ['معالجات كمبيوتر Intel', 'رقائق إلكترونية ذكية'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'cd-women-leather-footwear',
      productName: { ar: 'الأحذية النسائية الجلدية وأحذية الكعب العالي والأزياء العصرية', en: 'Women Genuine Leather Shoes, High Heels, Pumps & Boots' },
      industryCategory: 'women-footwear',
      whyThisCity: { ar: 'المركز الأول لتصميم الأحذية النسائية في الصين، تشتهر بمرونة تصنيع الموديلات العصرية ومواكبة موضة ميلانو وباريس بأسعار جملة تنافسية.', en: 'China undisputed capital for ladies footwear styling, fast trend reproduction, and genuine leather comfort lasting.' },
      mainManufacturingArea: { ar: 'منطقة ووهو (Wuhou Shoe Belt)', en: 'Wuhou District' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'cd-cross-border-rail-freight',
      productName: { ar: 'شحن الحاويات بالسكك الحديدية السريعة إلى آسيا وأوروبا', en: 'Trans-Eurasian Express Container Rail Freight (Rong\'ou)', zh: '中欧班列（蓉欧快铁）' },
      industryCategory: 'rail-logistics',
      whyThisCity: { ar: 'قطار تشنغدو-أوروبا يقطع المسافة إلى أوروبا وآسيا الوسطى في 12-14 يوماً فقط (ثلث وقت الشحن البحري)، وبثلث تكلفة الشحن الجوي.', en: 'Delivers container cargo across Central Asia to Europe in 12-14 days (1/3 maritime time and 1/3 air freight cost).' },
      mainManufacturingArea: { ar: 'تشينغبايجيانغ (Qingbaijiang)', en: 'Chengdu International Railway Port' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Chengdu Tianfu International Airport (TFU - مطار تيانفو الدولي العملاق، ثاني أكبر مطار محوري في غرب الصين فئة 4F)',
      'Chengdu Shuangliu International Airport (CTU - مطار شوانغليو للشحن الجوي السريع والرحلات الداخلية)'
    ],
    seaPorts: [
      'Chengdu International Inland Dry Port (الميناء الجاف المرتبط بموانئ نهر يانغتسي وشنغهاي)',
      'Direct River-Sea Port Access via Luzhou / Yibin Ports'
    ],
    highSpeedRailwayStations: [
      'Chengdu East Railway Station (成都东站 - أضخم عقدة قطارات فائقة السرعة في غرب الصين)',
      'Chengdu South Railway Station (成都南站)',
      'Chengdu West Railway Station (成都西站)'
    ],
    seaFreightSuitability: {
      ar: 'شحن البضائع الثقيلة يتم عبر شبكة قطارات الحاويات المباشرة إلى موانئ نهر يانغتسي (لوتشو وييبين) ومنها بنهر يانغتسي إلى ميناء شانغهاي، أو بالقطار السريع إلى ميناء تشنجانغ وشنتشن.',
      en: 'Intermodal rail-river container freight connects to Yangtze River barges down to Shanghai Port, and express block trains reach Shenzhen and Beibu Gulf.'
    },
    airFreightSuitability: {
      ar: 'تشنغدو هي إحدى مدينتين فقط في البر الصيني تمتلكان مطارين دوليين ضخمين (تيانفو وشوانغليو)، مما يجعلها المركز الجوي الأقوى للشحن الجوي في غرب الصين.',
      en: 'One of only two Chinese mainland cities operating dual mega international airports (TFU and CTU), dominating western air cargo logistics.'
    },
    primaryCargoRoutes: {
      ar: [
        'قطارات الشحن السريع الأسبوعية المنتظمة عبر طريق الحرير إلى كازاخستان، أوزبكستان، إسطنبول، وبولندا وألمانيا',
        'رحلات شحن جوي مباشرة من مطار تيانفو إلى دبي، الرياض، الدوحة، والقاهرة'
      ],
      en: [
        'Scheduled Silk Road Express container trains to Central Asia, Istanbul, Poland, and Germany',
        'Direct scheduled air cargo freighters to Dubai, Riyadh, Doha, and European hubs'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['مارس (معرض الأغذية والسكر الوطني الأضخم)', 'أبريل', 'مايو', 'سبتمبر', 'أكتوبر', 'نوفمبر'],
    suggestedStayDays: 4,
    weatherSummary: {
      ar: 'مناخ حوض سيتشوان معتدل وغائم غالباً، الصيف دافئ ورطب، والخريف والربيع ممتعان للغاية للتجول في المدينة وزيارة محميات الباندا والمصانع.',
      en: 'Mild and pleasant subtropical climate, famously overcast with pleasant autumns and lush spring greenery.'
    },
    recommendedStayAreas: [
      {
        ar: 'وسط المدينة وشارع تشونكسي (Chunxi Road & IFS): قلب تشنغدو النابض، أفخم الفنادق العالمية، المطاعم، وسهولة الوصول بالمترو لكافة المناطق.',
        en: 'Chunxi Road & IFS Plaza: Central commercial hub with 5-star hotels, luxury retail, and direct metro interchange.'
      },
      {
        ar: 'منطقة ووهو (Wuhou District): الأنسب لمستوردي الأحذية النسائية للنزول على مقربة من مجمع مصانع وصالات عرض الأحذية.',
        en: 'Wuhou District: Closest location to China Women Footwear Sourcing City and leather marts.'
      }
    ],
    localTransportAdvice: {
      ar: 'مترو تشنغدو هو الرابع عالمياً من حيث طول الشبكة ويضم 13 خطاً حديثاً يغطي المطارين ومحطات القطار السريع وسوق التجارة الدولية بدقة بالغة. استخدم مسح Alipay أو تطبيق MetroMan.',
      en: 'Chengdu Metro is the world #4 largest metro network with 13 lines connecting both airports and railway hubs. Scan Alipay QR for instant ride.'
    },
    languageTips: {
      ar: 'اللغة الإنجليزية شائعة في فنادق الـ 5 نجوم ومقرات الشركات الدولية. في سوق الأحذية النسائية بووهو، استعن بتطبيق WeChat للترجمة الفورية أو بمترجم محلي.',
      en: 'English is spoken in international hotels and hi-tech parks. For wholesale footwear negotiations in Wuhou, an interpreter is recommended.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'MetroMan Chengdu', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'niccolo-chengdu-hotel',
        name: { ar: 'فندق نيكولو تشنغدو - مجمع IFS (Niccolo Chengdu)', en: 'Niccolo Chengdu (IFS Mall)', zh: '成都尼依格罗酒店' },
        category: { ar: 'أفخم فندق 5 نجوم وسطي', en: 'Ultra-Luxury 5-Star' },
        area: { ar: 'شارع تشونكسي، مجمع IFS التجاري', en: 'Chunxi Road Commercial Core, IFS' },
        highlights: { ar: 'يقع مباشرة فوق مجمع IFS الشهير بتمثال الباندا العملاق المتسلق، تصميم عصري فائق الفخامة وموقع وسطي لا يضاهى', en: 'Directly atop Chengdu landmark IFS mall with the giant panda sculpture, prime luxury downtown setting' }
      },
      {
        id: 'the-ritz-carlton-chengdu',
        name: { ar: 'فندق ريتز كارلتون تشنغدو (The Ritz-Carlton Chengdu)', en: 'The Ritz-Carlton Chengdu', zh: '成都富力丽思卡尔顿酒店' },
        category: { ar: 'فاخر 5 نجوم كلاسيكي', en: 'Classic Luxury 5-Star' },
        area: { ar: 'ساحة تيانفو، وسط المدينة', en: 'Tianfu Square Core, Downtown' },
        highlights: { ar: 'إطلالة على ساحة تيانفو التاريخية، خدمة مساعد شخصي عريقة، قاعات مؤتمرات فخمة وقريب من مراكز الأعمال', en: 'Prestigious location overlooking Tianfu Square, world-class butler service, top business amenities' }
      },
      {
        id: 'grand-hyatt-chengdu',
        name: { ar: 'فندق جراند حياة تشنغدو (Grand Hyatt Chengdu)', en: 'Grand Hyatt Chengdu', zh: '成都群光君悦酒店' },
        category: { ar: 'فاخر 5 نجوم تجاري', en: 'Upscale Business 5-Star' },
        area: { ar: 'شارع تشونكسي، منطقة جينجيانغ', en: 'Chunxi Road, Jinjiang District' },
        highlights: { ar: 'حدائق معلقة داخلية مذهلة، مطاعم صينية وعالمية فاخرة، متصل بمحطة المترو والأسواق مباشرة', en: 'Magnificent rooftop gardens, fine dining, directly connected to Chunxi Road subway' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'huangcheng-mosque-halal-chengdu',
        name: { ar: 'مطعم جامع هوانغتشينغ الإسلامي العريق (Huangcheng Mosque Halal)', en: 'Huangcheng Mosque Historic Halal Restaurant', zh: '皇城清真寺清真餐厅' },
        cuisineType: { ar: 'مأكولات سيتشوان إسلامية حلال عريقة', en: 'Traditional Halal Sichuan Chinese Cuisine' },
        isHalal: true,
        address: { ar: 'طريق شييوي، منطقة تشينغيانغ، تشنغدو', en: 'Xiyu St, Qingyang District, Chengdu', zh: '四川省成都市青羊区西御街皇城清真寺' },
        recommendedFor: { ar: 'صلاة الجمعة، أطباق سيتشوان الشهيرة بطريقة حلال 100%، لحم بقري بالصلصة الحارة، ولحم ضأن متبل', en: 'Friday congregation prayers and authentic spicy Halal Sichuan beef & lamb specialties' }
      },
      {
        id: 'yufulou-halal-chengdu',
        name: { ar: 'مطعم يوفولو الإسلامي الفاخر (Yufulou Halal Restaurant)', en: 'Yufulou Halal Restaurant Chengdu', zh: '御福楼清真饭店' },
        cuisineType: { ar: 'مأكولات إسلامية حلال راقية ولحوم مشوية', en: 'Upscale Halal Dining & Roast Lamb' },
        isHalal: true,
        address: { ar: 'طريق المطار، منطقة ووهو، تشنغدو', en: 'Airport Expressway Rd, Wuhou District, Chengdu', zh: '四川省成都市武侯区机场路' },
        recommendedFor: { ar: 'لحم ضأن مشوي كامل، كباب فحم، وأجواء راقية لغداء عمل لرجال الأعمال والمستوردين في ووهو', en: 'Whole roast lamb banquets, clean executive dining near Wuhou shoe district' }
      }
    ],
    touristAttractions: [
      {
        id: 'chengdu-giant-panda-base',
        name: { ar: 'قاعدة ومحمية تشنغدو لأبحاث وتربية الباندا العملاقة (Chengdu Giant Panda Base)', en: 'Chengdu Research Base of Giant Panda Breeding', zh: '成都大熊猫繁育研究基地' },
        category: { ar: 'الموطن الطبيعي العالمي الأشهر لحيوان الباندا', en: 'World Famous Giant Panda Conservation Sanctuary' },
        description: { ar: 'أشهر محمية في العالم لحماية وإكثار حيوان الباندا العملاق والباندا الحمراء، حيث تتجول في غابات الخيزران الطبيعية والوديان الخضراء المنعشة.', en: 'World-renowned conservation center where visitors observe giant pandas and red pandas in lush bamboo habitats.' },
        nearestMetro: 'Panda Avenue Station (Line 3)'
      },
      {
        id: 'jinli-ancient-street-wuhou',
        name: { ar: 'شارع جينلي التراثي العريق (Jinli Ancient Street - 锦里古街)', en: 'Jinli Ancient Folk & Culture Street', zh: '成都锦里古街' },
        category: { ar: 'شارع تراثي صيني عريق يعود لعصر الممالك الثلاث', en: 'Historic Three Kingdoms Dynasty Pedestrian Street' },
        description: { ar: 'شارع مشاة تاريخي مرصوف بالحجارة يضاء بالفوانيس الحمراء ليلاً، مجاور لمعبد ووهو، يضم عروض أوبرا سيتشوان وتغيير الأقنعة والمأكولات التقليدية.', en: 'Atmospheric lantern-lit pedestrian street featuring traditional Sichuan opera face-changing shows, folk crafts, and teahouses.' },
        nearestMetro: 'Gaoshengqiao Station (Lines 3 & 5)'
      }
    ],
    essentialServices: [
      {
        id: 'chengdu-railway-port-customs',
        serviceType: { ar: 'الجمارك والشحن السككي الدولي', en: 'Rail Port Customs & Multimodal Clearance' },
        title: { ar: 'مركز التخليص الجمركي بميناء تشنغدو السككي الدولي (Chengdu Railway Port Customs)', en: 'Chengdu International Railway Port Customs Declaration Hub', zh: '成都国际铁路港综合保税区通关大厅' },
        description: { ar: 'إنهاء إجراءات شحن الحاويات بالقطار السريع إلى أوروبا وآسيا الوسطى، التخليص المسبق وإصدار بوالص الشحن الموحدة.', en: 'Customs declaration for Trans-Eurasian Express trains, TIR road-rail intermodal logistics, and bonded export warehousing.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'china-food-drinks-fair-cfdf',
      name: { ar: 'معرض الصين الوطني للسلع الغذائية والسكر (CFDF - أكبر معرض غذائي في الصين)', en: 'China Food & Drinks Fair (CFDF)', zh: '全国糖酒商品交易会（春季/秋季糖酒会）' },
      industry: 'Food, Beverages, Packaging & Confectionery (Largest Food Fair in China)',
      venue: { ar: 'مركز ويسترن تشاينا الدولي للمعارض والمؤتمرات (تشنغدو)', en: 'Western China International Expo City (Chengdu)', zh: '中国西部国际博览城（成都）' },
      occurrence: { ar: 'مارس سنوياً (الربيع بـ تشنغدو دائماً)', en: 'Annually in March (Spring Session Permanently in Chengdu)' },
      officialWebsite: 'http://www.qgtjh.com',
      bestFor: ['Food & Beverage Importers', 'Packaging Manufacturers', 'Agricultural Product Wholesalers']
    },
    {
      id: 'western-china-international-fair',
      name: { ar: 'المعرض الدولي لغرب الصين (WCIF)', en: 'Western China International Fair (WCIF)', zh: '中国西部国际博览会（西博会）' },
      industry: 'Multi-Industry, Hi-Tech, Heavy Machinery & Global Investment',
      venue: { ar: 'مركز ويسترن تشاينا الدولي للمعارض (Expo City)', en: 'Western China International Expo City', zh: '中国西部国际博览城' },
      occurrence: { ar: 'يونيو / يوليو كل عامين', en: 'Biennially in Summer' },
      officialWebsite: 'http://www.wcif.cn',
      bestFor: ['Corporate Investors', 'Electronics Buyers', 'International Delegations']
    }
  ],
  relatedCitySlugs: ['chongqing', 'xi-an', 'kunming', 'guangzhou', 'shanghai'],
  relatedProductSlugs: ['women-footwear', 'electronics-assembly', 'rail-logistics'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل تشنغدو التجاري الشامل | عاصمة غرب الصين، الأحذية النسائية، والتكنولوجيا', en: 'Chengdu Commercial Sourcing Guide | Western China Hub & Women Shoes' },
    description: { ar: 'دليل شامل للاستيراد من تشنغدو: عاصمة الأحذية النسائية في ووهو، مصانع تجميع الإلكترونيات، قطار الشحن السريع إلى أوروبا، وفنادق ومطاعم حلال.', en: 'Complete sourcing guide to Chengdu: China Women Footwear Capital in Wuhou, Foxconn & Intel hi-tech base, Rong\'ou rail express & halal guide.' }
  }
};
