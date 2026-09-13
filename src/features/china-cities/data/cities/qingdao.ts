import { ICity } from '../../types';

export const qingdaoCity: ICity = {
  id: 'qingdao',
  slug: 'qingdao',
  name: { ar: 'تشينغداو', en: 'Qingdao', zh: '青岛' },
  province: { ar: 'شاندونغ', en: 'Shandong', zh: '山东省' },
  region: 'North China / Shandong',
  tier: 'tier-2',
  commercialImportanceScore: 95,
  heroImage: 'https://images.unsplash.com/photo-1548625361-185d2eb7b17d?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1548625361-185d2eb7b17d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'العاصمة الصناعية والميناء التجاري الأول لشمال الصين (ميناء تشينغداو رابع أضخم ميناء في العالم)، والمقر الرئيسي لعمالقة الأجهزة المنزلية والإلكترونيات العالمية (Haier Group وHisense Group). مهد تصنيع قطارات الصين السريعة فوشينغ (CRRC Sifang)، والمركز العالمي الأول لتصنيع وتصدير إطارات السيارات والشاحنات (Sailun & Doublestar)، وأضخم أسواق ملابس الجملة في شمال الصين (سوق جيمو).',
    en: 'Northern China premier industrial powerhouse and mega seaport (Qingdao Port, world #4 by total cargo volume). Global headquarters of electronics and home appliance titans Haier Group and Hisense. Birthplace of China Fuxing bullet trains (CRRC Sifang), global tire capital (Sailun, Doublestar), and home to North China largest apparel wholesale market (Jimo).'
  },
  keyIndustries: ['home-appliances', 'logistics-shipping', 'tires-rubber', 'rail-transit', 'apparel-fashion', 'marine-equipment'],
  primaryProducts: {
    ar: [
      'الأجهزة المنزلية الذكية، الثلاجات، الغسالات، والتكييفات المركزية (المقر العالمي لـ Haier)',
      'شاشات التلفزيون الذكية، أجهزة الليزر، والشاشات التجارية (المقر العالمي لـ Hisense)',
      'إطارات الشاحنات والحافلات وسيارات الركاب ومعدات تصنيع الإطارات (Sailun & Doublestar)',
      'قطارات السكك الحديدية فائقة السرعة وعربات المترو (CRRC Sifang)',
      'الملابس الجاهزة والملابس الشتوية وملابس التريكو بالجملة (سوق جيمو الدولي)',
      'المأكولات البحرية المجمدة ومستودعات التبريد اللوجستية الضخمة'
    ],
    en: [
      'Smart Home Appliances, Refrigerators, Washing Machines & HVAC Systems (Haier Global HQ)',
      'Smart TVs, Laser Displays, Commercial Refrigeration & Medical Electronics (Hisense Global HQ)',
      'Commercial Truck, Bus & Passenger Car Tires (Sailun, Doublestar HQs)',
      'High-Speed Electric Multiple Units (Fuxing Bullet Trains) & Metro Cars (CRRC Sifang)',
      'Ready-Made Fashion, Knitwear, Outerwear & Thermal Apparel (Jimo Wholesale City)',
      'Deep-Sea Frozen Seafood & Mega Cold-Chain Port Terminals'
    ]
  },
  bestFor: ['Major Home Appliance Importers', 'Tire & Automotive Parts Wholesalers', 'Apparel & Garment Buyers', 'Ocean Shipping & Logistics Firms'],
  districts: [
    {
      id: 'shinan-waterfront-cbd',
      cityId: 'qingdao',
      name: { ar: 'منطقة شينان والواجهة البحرية الأولمبية (Shinan Waterfront CBD)', en: 'Shinan Coastal CBD & Olympic Sailing Center', zh: '市南区 / 奥帆中心' },
      activityType: { ar: 'المركز المالي والإداري الأول، مركز الإبحار الأولمبي، مقرات البنوك الدولية، وأفخم الفنادق', en: 'Financial Core, Olympic Sailing Marina, Maritime Shipping Lines & Luxury Hotels' },
      mainProducts: ['خدمات بنكية وتمويل تجاري', 'شحن بحري دولي', 'فنادق أعمال فاخرة'],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'May Fourth Square Station (Lines 2 & 3)'
    },
    {
      id: 'laoshan-haier-tech-zone',
      cityId: 'qingdao',
      name: { ar: 'منطقة لاوشان ومجمع هايير التكنولوجي (Laoshan Haier Park)', en: 'Laoshan District & Haier Global Industrial Park', zh: '崂山区 / 海尔工业园' },
      activityType: { ar: 'المقر العالمي لشركة هايير (Haier Smart Home)، ومراكز أبحاث إنترنت الأشياء والبرمجيات', en: 'Haier Global Headquarters, Smart Home IoT Laboratories & High-Tech Parks' },
      mainProducts: ['أجهزة منزلية ذكية', 'حلول إنترنت الأشياء IoT', 'تكييفات مركزية تجارية'],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Haier Road Station (Line 2)'
    },
    {
      id: 'jimo-apparel-hub',
      cityId: 'qingdao',
      name: { ar: 'منطقة جيمو لملابس وأسواق الجملة (Jimo Wholesale City)', en: 'Jimo District & China Apparel Wholesale Hub', zh: '即墨区 / 即墨服装市场' },
      activityType: { ar: 'أضخم مركز لتجارة الملابس والمنسوجات وأزياء الأطفال والتريكو بالجملة في شمال الصين', en: 'North China Largest Ready-to-Wear Apparel Wholesale & Export Hub' },
      mainProducts: ['ملابس نسائية ورجالية', 'ملابس أطفال وتريكو', 'معاطف شتوية وجواكت', 'أقمشة'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Jimo North High-Speed Railway Station'
    },
    {
      id: 'huangdao-west-coast-port',
      cityId: 'qingdao',
      name: { ar: 'منطقة هوانغداو والساحل الغربي للموانئ (Huangdao & West Coast Port)', en: 'Huangdao District & Qingdao Deep-Water Mega Port', zh: '黄岛区 / 青岛西海岸新区（前湾港/董家口港）' },
      activityType: { ar: 'أكبر محطات الحاويات المؤتمتة بالكامل في العالم (Qianwan Container Terminal)، ومصانع إطارات السيارات', en: 'World Leading Fully-Automated Container Port & Mega Tire Manufacturing Belt' },
      mainProducts: ['حاويات شحن بحري', 'إطارات سيارات وشاحنات (Sailun)', 'أجهزة هايسنس (Hisense Park)'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Line 1 / Line 13 (Qingdao West Coast)'
    },
    {
      id: 'chengyang-crrc-rail-transit',
      cityId: 'qingdao',
      name: { ar: 'منطقة تشنغيانغ ومجمع القطارات السريعة (Chengyang CRRC Base)', en: 'Chengyang District & CRRC High-Speed Rail Base', zh: '城阳区 / 中车四方高速列车产业园' },
      activityType: { ar: 'قاعدة تصنيع قطارات فوشينغ الصينية السريعة وعربات المترو، ومصانع المكونات الدقيقة', en: 'CRRC Sifang Bullet Train Manufacturing & Rail Transit Equipment Cluster' },
      mainProducts: ['قطارات فائقة السرعة', 'عربات مترو أنفاق', 'مكونات سكك حديدية'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Chengyang Station (Line 1)'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'qingdao-jimo-clothing-market',
      cityId: 'qingdao',
      name: { ar: 'سوق جيمو الدولي لملابس الجملة (Jimo Garment Wholesale Market)', en: 'Jimo Garment Wholesale Market', zh: '即墨服装市场（长江以北最大服装集散地）' },
      type: 'Wholesale',
      category: 'Ready-to-Wear Apparel, Knitwear & Outerwear',
      description: {
        ar: 'أكبر مجمع لتجارة الملابس والمنسوجات بالجملة في شمال الصين (شمال نهر اليانغتسي) بمساحة تبلغ 365,000 متر مربع وأكثر من 9000 متجر ومصنع. ينقسم إلى أقسام متخصصة: ملابس الأطفال والمواليد، أزياء النساء السريعة، ملابس الرجال والبدل، المعاطف الشتوية، والملابس الداخلية الحرارية والتريكو بأسعار جملة تنافسية للغاية موجهة للتصدير الداخلي والدولي.',
        en: 'The absolute largest apparel wholesale mart north of the Yangtze River spanning 365,000 sqm with over 9,000 merchant stalls. Renowned across North China for children wear, casual knitwear, winter padded jackets, denim, and thermal base layers directly linked to Shandong knitting mills.'
      },
      address: { ar: 'طريق هيلونغ، منطقة جيمو، تشينغداو، شاندونغ', en: 'Helong Rd, Jimo District, Qingdao, Shandong', zh: '山东省青岛市即墨区鹤山路与墨城路交汇处' },
      nearestStation: 'Jimo North High-Speed Rail Station (15 min taxi)',
      operatingHours: '06:00 - 16:30',
      moqLevel: 'Low'
    },
    {
      id: 'qingdao-jimo-small-commodities-city',
      cityId: 'qingdao',
      name: { ar: 'مدينة جيمو للسلع الخفيفة والأدوات المنزلية (Jimo Small Commodities City)', en: 'Jimo Small Commodities New City', zh: '即墨小商品新城' },
      type: 'Wholesale',
      category: 'Small Commodities, Footwear, Bags & Household Goods',
      description: {
        ar: 'مجمع تجاري ضخم مجاور لسوق الملابس، مخصص للأحذية الرياضية والجلدية، الحقائب المدرسية وحقائب السفر، الإكسسوارات، والسلع الاستهلاكية وأدوات التجميل.',
        en: 'Mega wholesale center adjacent to the apparel market, offering footwear, school bags, luggage, household sundries, and small consumer goods.'
      },
      address: { ar: 'طريق شيوانغتانغ، منطقة جيمو، تشينغداو', en: 'Xiwangtang Rd, Jimo District, Qingdao', zh: '山东省青岛市即墨区小商品新城' },
      nearestStation: 'Jimo North Station',
      operatingHours: '07:30 - 17:00',
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'haier-smart-home-lighthouse-park',
      cityId: 'qingdao',
      name: { ar: 'مجمع هايير الصناعي العالمي للمصانع الذكية (Haier Smart Home Lighthouse Park)', en: 'Haier Smart Home Global Headquarters & Lighthouse Park', zh: '海尔中德生态园灯塔工厂基地（黄岛/崂山）' },
      clusterSpecialization: { ar: 'المقر العالمي لشركة هايير (Haier Group) أكبر مصنع للأجهزة المنزلية الكبرى في العالم لـ 15 عاماً متتالية، ومصانع الثلاجات والتكييفات المنارة الذكية المعتمدة للمنتدى الاقتصادي العالمي', en: 'Haier Group Global HQ, World #1 Major Appliance Manufacturer for 15 consecutive years, operating WEF-certified automated Lighthouse Megafactories' },
      factoryTypes: ['Automated Lighthouse Plants', 'Robotic Sheet Metal & Foaming Lines', 'IoT Labs'],
      keyProducts: ['ثلاجات منزلية ذكية', 'غسالات ومجففات ملابس', 'تكييفات هواء منزلية وتجارية VRF'],
      specializationLevel: 'High'
    },
    {
      id: 'hisense-information-industry-park',
      cityId: 'qingdao',
      name: { ar: 'مجمع هايسنس للمعلومات والشاشات الذكية (Hisense Information Industry Park)', en: 'Hisense Global Information & Commercial Display Base', zh: '海信集团总部及信息产业园（黄岛前湾港）' },
      clusterSpecialization: { ar: 'المقر العالمي لشركة هايسنس (Hisense) ثاني أكبر مصنع لشاشات التلفزيون في العالم، وتصنيع شاشات الليزر، مكيفات الهواء المركزية، وأنظمة التبريد التجاري للمتاجر والمستشفيات', en: 'Hisense Global HQ, World #2 TV Maker, Laser TV Innovator & Commercial Cold Chain Refrigeration' },
      factoryTypes: ['Laser TV Assembly Lines', 'SMT Surface Mount Displays', 'Cleanrooms'],
      keyProducts: ['تلفزيونات ULED وLaser TV', 'مكيفات هواء منزلية', 'ثلاجات عرض تجارية سوبرماركت'],
      specializationLevel: 'High'
    },
    {
      id: 'sailun-tire-manufacturing-base',
      cityId: 'qingdao',
      name: { ar: 'قاعدة تصنيع إطارات سايلون ودوبل ستار (Sailun & Doublestar Tire Mega Base)', en: 'Qingdao Global Tire & Rubber Manufacturing Base', zh: '青岛国家橡胶与轮胎工程技术研究中心（赛轮/双星）' },
      clusterSpecialization: { ar: 'عاصمة الإطارات الصينية، إنتاج إطارات الشاحنات الثقيلة TBR وإطارات سيارات الركاب PCR بمواد المطاط السائل المتقدم (EcoPoint3)', en: 'World Leading Radial Truck & Passenger Tire R&D Base producing EcoPoint3 green liquid-phase rubber tires' },
      factoryTypes: ['Mega Automated Tire Curing & Building Plants', 'Rubber Testing Proving Grounds'],
      keyProducts: ['إطارات شاحنات وحافلات ثقيلة TBR', 'إطارات سيارات ركاب PCR', 'إطارات معدات التعدين OTR'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'qd-major-home-appliances',
      productName: { ar: 'الثلاجات والغسالات والتكييفات والشاشات الذكية المعتمدة', en: 'Smart Refrigerators, Washing Machines, Air Conditioners & TVs' },
      industryCategory: 'home-appliances',
      whyThisCity: { ar: 'مقر عملاقي الأجهزة في العالم (Haier وHisense)، مما يوفر استيراد كميات ضخمة بضمانات معتمدة وشهادات SASO/GCC/CE وبأحدث تقنيات توفير الطاقة والإنفرتر.', en: 'Home to global giants Haier and Hisense, providing massive capacity, inverter technology, and certified Middle East compliance.' },
      mainManufacturingArea: { ar: 'لاوشان وهوانغداو (Laoshan & Huangdao)', en: 'Laoshan & Huangdao West Coast' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'qd-commercial-truck-tires',
      productName: { ar: 'إطارات الشاحنات والحافلات وإطارات سيارات الركاب المعتمدة', en: 'Heavy-Duty Truck & Bus Radial (TBR) Tires & Passenger Car Tires' },
      industryCategory: 'auto-parts',
      whyThisCity: { ar: 'تشينغداو هي مركز صناعة الإطارات الأول في الصين مع شهادات الخليج GSO وDOT الأمريكية وتوفير إطارات تتحمل درجات حرارة الصحراء العالية.', en: 'China premier tire export hub producing heavy-duty desert-heat rated truck tires with full GSO and DOT certifications.' },
      mainManufacturingArea: { ar: 'هوانغداو وجياوزو (Huangdao & Jiaozhou)', en: 'Huangdao and Jiaozhou' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'qd-jimo-knitwear-outerwear',
      productName: { ar: 'الملابس الجاهزة والملابس الشتوية وملابس الأطفال والتريكو', en: 'Ready-Made Knitwear, Winter Padded Jackets & Children Clothing' },
      industryCategory: 'apparel-fashion',
      whyThisCity: { ar: 'سوق جيمو يوفر أضخم مخزون ملابس جاهز للتصدير الفوري في شمال الصين بأسعار منافسة وجودة حياكة صوفية وقطنية متينة.', en: 'Jimo Wholesale City offers North China largest inventory of immediate-dispatch casual apparel, thermal wear, and winter coats.' },
      mainManufacturingArea: { ar: 'منطقة جيمو (Jimo District)', en: 'Jimo District' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Qingdao Jiaodong International Airport (TAO - مطار جياودونغ الدولي الجديد فئة 4F، أضخم مطار دولي محوري في شاندونغ)'
    ],
    seaPorts: [
      'Qingdao Port (青岛港 - رابع أضخم ميناء في العالم بحمولة 700 مليون طن وأكثر من 28 مليون حاوية TEU)',
      'Qianwan Automated Container Terminal (أول محطة حاويات مؤتمتة بالكامل وذكية في آسيا)',
      'Dongjiakou Deep-Water Port Area (محطات خام الحديد والناقلات العملاقة)'
    ],
    highSpeedRailwayStations: [
      'Qingdao Railway Station (青岛站 - محطة تاريخية وسط المدينة)',
      'Qingdao North Railway Station (青岛北站 - أضخم محطة قطارات سريعة في تشينغداو)',
      'Jimo North Railway Station (即墨北站 - تخدم سوق ملابس جيمو مباشرة)'
    ],
    seaFreightSuitability: {
      ar: 'الميناء الأول في شمال الصين دون منازع؛ محطة تشيانوان للحاويات تعمل بالروبوتات على مدار 24 ساعة وترتبط بأكثر من 220 خطاً ملاحياً دولياً مباشراً إلى الشرق الأوسط والخليج العربي والبحر الأحمر.',
      en: 'Undisputed #1 seaport in North China; Qianwan Automated Terminal operates 24/7 robotic container cranes connected directly to all major Gulf and Red Sea liner routes.'
    },
    airFreightSuitability: {
      ar: 'مطار جياودونغ الجديد (TAO) هو أحدث مطار شحن ذكي في شمال الصين مع رحلات شحن جوي دولية مباشرة ومستودعات تبريد ضخمة.',
      en: 'Jiaodong (TAO) is North China newest 4F mega international airport equipped with specialized temperature-controlled air cargo hubs.'
    },
    primaryCargoRoutes: {
      ar: [
        'خطوط ملاحية مباشرة يومية من ميناء تشينغداو إلى جبل علي، جدة، الدمام، صلالة، ميناء خليفة، وميناء السخنة (ترانزيت 18-24 يوماً)',
        'رحلات شحن بحري مبردة ضخمة (Reefer Containers) للأسماك والمنتجات الزراعية والأجهزة',
        'قطارات الشحن السريع إلى آسيا الوسطى وأوروبا (Qingdao SCO Express)'
      ],
      en: [
        'Daily direct ocean container sailings to Jebel Ali, Jeddah, Dammam, Salalah, and Sokhna (18-24 days transit)',
        'Extensive refrigerated reefer container services for marine foods and delicate electronics',
        'SCO China-Europe Railway Express freight routes departing Qingdao'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['مايو', 'يونيو', 'يوليو', 'سبتمبر', 'أكتوبر (أفضل الفصول الساحلية المعتدلة)'],
    suggestedStayDays: 4,
    weatherSummary: {
      ar: 'مناخ ساحلي رائع ومنعش، الصيف لطيف ومعتدل مقارنة بمدن الصين الداخلية، والخريف مشمس ونقي، أما الشتاء فبارد وجاف وتنشط فيه الرياح البحرية.',
      en: 'Superb coastal climate: mild, breezy summers and sunny autumns make Qingdao one of China top business and seaside travel destinations.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة شينان وساحة الرابع من مايو (Shinan / May Fourth Square): قلب المدينة الإداري والتجاري، أفخم الفنادق المطلة على البحر ومراكز التسوق.',
        en: 'Shinan / May Fourth Square: Downtown waterfront hub with 5-star hotels, international consulates, and dining.'
      },
      {
        ar: 'منطقة لاوشان (Laoshan CBD): الأنسب للمستثمرين وزوار شركة هايير ومراكز التكنولوجيا المالية وشاطئ شيلاورين.',
        en: 'Laoshan Financial CBD: Near Haier Global HQ, high-tech parks, and Shilaoren Beach.'
      }
    ],
    localTransportAdvice: {
      ar: 'مترو تشينغداو يضم 7 خطوط ممتازة؛ الخط رقم 8 يربط مطار جياودونغ الدولي الجديد بمحطة القطار الشمالية في 30 دقيقة. خط المترو رقم 1 يعبر خليج جياوتشو عبر أطول نفق بحري في الصين ليربط وسط المدينة بميناء هوانغداو.',
      en: 'Qingdao Metro features 7 modern lines. Line 8 links Jiaodong Airport to North Station in 30 mins. Line 1 runs through China longest subsea metro tunnel to Huangdao Port.'
    },
    languageTips: {
      ar: 'في مقرات هايير وهايسنس ومكاتب ميناء تشينغداو، اللغة الإنجليزية ممتازة ومستخدمة رسمياً. في سوق جيمو للملابس، ستحتاج لاستخدام تطبيق WeChat للترجمة الفورية للأرقام والمواصفات.',
      en: 'English is fluent at Haier, Hisense, and port authorities. In Jimo wholesale marts, bringing an interpreter or using WeChat translation is ideal.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'MetroMan Qingdao', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'the-st-regis-qingdao',
        name: { ar: 'فندق سانت ريجيس تشينغداو (The St. Regis Qingdao)', en: 'The St. Regis Qingdao', zh: '青岛瑞吉酒店' },
        category: { ar: 'أفخم فندق 5 نجوم ناطحة سحاب', en: 'Ultra-Luxury 5-Star' },
        area: { ar: 'برج هايتيان، الواجهة البحرية، شينان', en: 'Haitian Center, Shinan Waterfront' },
        highlights: { ar: 'يقع في أعلى ناطحة سحاب في مقاطعة شاندونغ (برج هايتيان بارتفاع 369 متراً)، إطلالة بحرية بانورامية أسطورية، وخدمة مساعد شخصي عريقة', en: 'Set inside Shandong tallest skyscraper (369m), panoramic Yellow Sea views, legendary St. Regis butler service' }
      },
      {
        id: 'intercontinental-qingdao-hotel',
        name: { ar: 'فندق إنتركونتيننتال تشينغداو (InterContinental Qingdao)', en: 'InterContinental Qingdao', zh: '青岛海尔洲际酒店' },
        category: { ar: 'فاخر 5 نجوم مارينا', en: 'Luxury 5-Star Marina' },
        area: { ar: 'مركز الإبحار الأولمبي، شينان', en: 'Olympic Sailing Center, Shinan' },
        highlights: { ar: 'يقع مباشرة داخل مرسى الإبحار الأولمبي الشهير، محاط باليخوت والواجهة البحرية، قاعات مؤتمرات دولية وخدمات رجال أعمال فائقة', en: 'Prime location directly inside Olympic Sailing Center marina, oceanfront suites and executive business facilities' }
      },
      {
        id: 'shangri-la-hotel-qingdao',
        name: { ar: 'فندق شانغريلا تشينغداو (Shangri-La Qingdao)', en: 'Shangri-La Hotel Qingdao', zh: '青岛香格里拉大酒店' },
        category: { ar: 'فاخر 5 نجوم وسطي عريق', en: 'Upscale Business 5-Star' },
        area: { ar: 'طريق هونغ كونغ الأوسط، وسط المدينة التجاري', en: 'Hong Kong Middle Rd CBD, Shinan' },
        highlights: { ar: 'موقع مركزي وسط مقرات الشركات والبنوك ومحطة المترو، غرف تنفيذية واسعة ومطاعم صينية وعالمية راقية', en: 'Central downtown CBD location, steps from May Fourth Square and luxury shopping malls' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'qingdao-grand-mosque-halal',
        name: { ar: 'مطعم جامع تشينغداو الكبير الإسلامي (Qingdao Grand Mosque Halal)', en: 'Qingdao Grand Mosque Halal Dining Hall', zh: '青岛清真寺清真餐厅' },
        cuisineType: { ar: 'مأكولات إسلامية صينية ولحم ضأن حلال 100%', en: 'Authentic Local Chinese Muslim Halal' },
        isHalal: true,
        address: { ar: 'طريق تشانغشو، منطقة شينان، تشينغداو', en: 'Changshu Rd, Shinan District, Qingdao', zh: '山东省青岛市市南区常熟路清真寺' },
        recommendedFor: { ar: 'صلاة الجمعة، وجبات حلال موثوقة طازجة، لحم ضأن مسلوق ونودلز إسلامية أصيلة', en: 'Friday congregation prayers, fresh halal boiled lamb, and authentic Muslim dining' }
      },
      {
        id: 'dongxiang-halal-qingdao',
        name: { ar: 'مطعم دونغشيانغ الإسلامي بـ تشينغداو (Dongxiang Halal Restaurant)', en: 'Qingdao Dongxiang Halal Mutton Restaurant', zh: '东乡手抓羊肉清真餐厅' },
        cuisineType: { ar: 'مأكولات إسلامية من قانسو وشينجيانغ ومشاوي حلال', en: 'Northwest Chinese Halal Lamb & Kebabs' },
        isHalal: true,
        address: { ar: 'طريق نانجينغ، منطقة شينان، تشينغداو', en: 'Nanjing Rd, Shinan District, Qingdao', zh: '山东省青岛市市南区南京路' },
        recommendedFor: { ar: 'لحم ضأن بالعظم (شوتشوا)، أسياخ كباب فحمية، وخبز نان ساخن لغداء عمل أنيق', en: 'Tender hand-pulled mutton, charcoal kebabs, and warm business dinner atmosphere' }
      }
    ],
    touristAttractions: [
      {
        id: 'tsingtao-beer-museum-street',
        name: { ar: 'متحف ومصنع تشينغداو التاريخي العريق (Tsingtao Brewery Museum - 青岛啤酒博物馆)', en: 'Tsingtao Beer Museum & Historic German Brewery', zh: '青岛啤酒博物馆' },
        category: { ar: 'تراث صناعي ومعماري ألماني عالمي تأسس عام 1903', en: 'Historic 1903 German Colonial Brewery & Museum' },
        description: { ar: 'أشهر مصنع تراثي في الصين تأسس عام 1903 على الطراز القوطي الألماني، يعرض تاريخ التخمير الطبيعي والمياه النقية لجبال لاوشان مع تذوق المشروبات الطازجة غير المفلترة.', en: 'World-famous red-brick German colonial brewery founded in 1903, featuring historical brewing equipment and fresh unpasteurized tastings.' },
        nearestMetro: 'Taidong Station (Lines 1 & 2)'
      },
      {
        id: 'zhanqiao-pier-qingdao',
        name: { ar: 'رصيف تشانكياو البحري التاريخي (Zhanqiao Pier - 栈桥)', en: 'Zhanqiao Pier & Huilan Pavilion (City Emblem)', zh: '青岛栈桥风景名胜区' },
        category: { ar: 'رمز مدينة تشينغداو الأيقوني التاريخي', en: 'Iconic 1892 Historic Pier & Marine Pavilion' },
        description: { ar: 'رصيف بحري حجري يمتد 440 متراً داخل البحر يعود لعام 1892، ينتهي بجناح هيلان المعماري الصيني الشهير ويشكل رمز المدينة الرسمي.', en: 'Historic 440m marine pier dating to 1892, crowned by octagonal Huilan Pavilion overlooking coastal waters.' }
      }
    ],
    essentialServices: [
      {
        id: 'qingdao-port-customs-clearance',
        serviceType: { ar: 'الجمارك والتفتيش البحري', en: 'Maritime Customs & Commodity Inspection' },
        title: { ar: 'مركز خدمات الجمارك بميناء تشينغداو (Qingdao Port Customs Center)', en: 'Qingdao Port Customs & International Commodity Inspection Center', zh: '青岛海关进出口通关服务大厅' },
        description: { ar: 'تخليص حاويات الأجهزة المنزلية، فحص الإطارات وشهادات المطابقة الجمركية، وشهادات المنشأ للصادرات إلى الشرق الأوسط.', en: 'Comprehensive customs declaration, tire export safety verification, and certificate of origin dispatch for Arab ports.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'cices-qingdao',
      name: { ar: 'معرض الصين الدولي للإلكترونيات الاستهلاكية والأجهزة الذكية (CICES)', en: 'China International Consumer Electronics Show (CICES)', zh: '中国国际消费电子博览会（电博会）' },
      industry: 'Smart Home Appliances, Consumer Electronics, AI Displays & Clean Energy',
      venue: { ar: 'مركز تشينغداو الدولي للمعارض والمؤتمرات (لاوشان)', en: 'Qingdao International Convention Center (Laoshan)', zh: '青岛国际会展中心（崂山）' },
      occurrence: { ar: 'سبتمبر / أكتوبر سنوياً', en: 'Annually in Autumn' },
      officialWebsite: 'http://www.cices.net',
      bestFor: ['Appliance Importers', 'Consumer Electronics Retailers', 'Smart Home System Buyers']
    },
    {
      id: 'china-fisheries-seafood-expo-qingdao',
      name: { ar: 'معرض الصين الدولي للأسماك والمأكولات البحرية (CFSE)', en: 'China Fisheries & Seafood Expo (CFSE)', zh: '中国国际渔业博览会（全球最大水产展）' },
      industry: 'Seafood, Frozen Marine Cargo, Aquaculture & Cold Chain Tech',
      venue: { ar: 'مركز تشينغداو هونغداو الدولي للمعارض (Hongdao Expo)', en: 'Qingdao Cosmopolitan Exposition Center', zh: '青岛红岛国际会议展览中心' },
      occurrence: { ar: 'أكتوبر / نوفمبر سنوياً (أضخم معرض بحري في العالم)', en: 'Annually in Autumn (World Largest Seafood Show)' },
      officialWebsite: 'https://chinaseafoodexpo.com',
      bestFor: ['Seafood Importers', 'Cold Chain Logistics Operators', 'Food Wholesalers']
    }
  ],
  relatedCitySlugs: ['linyi', 'tianjin', 'dalian', 'jinan', 'cangzhou'],
  relatedProductSlugs: ['home-appliances', 'logistics', 'auto-parts', 'machinery', 'apparel-fashion'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل تشينغداو التجاري الشامل | ميناء الشمال ومصانع هايير وهايسنس والإطارات', en: 'Qingdao Commercial Sourcing Guide | World Port, Haier Appliances & Tires' },
    description: { ar: 'دليل شامل للاستيراد من تشينغداو: ميناء تشينغداو البحري الرابع عالمياً، مصانع هايير وهايسنس للأجهزة، إطارات السيارات سايلون، سوق جيمو للملابس، وفنادق ومطاعم حلال.', en: 'Complete sourcing guide to Qingdao: World #4 container port, Haier & Hisense smart appliances, Sailun tire cluster, Jimo apparel city, and halal business guide.' }
  }
};
