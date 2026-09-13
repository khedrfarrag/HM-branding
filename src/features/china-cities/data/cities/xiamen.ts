import { ICity } from '../../types';

export const xiamenCity: ICity = {
  id: 'xiamen',
  slug: 'xiamen',
  name: { ar: 'شيامن', en: 'Xiamen', zh: '厦门' },
  province: { ar: 'فوجيان', en: 'Fujian', zh: '福建省' },
  region: 'East Coast (Fujian)',
  tier: 'tier-2',
  commercialImportanceScore: 93,
  heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'العاصمة العالمية الأولى لتجارة ومعارض الحجر والرخام والجرانيت الطبيعي (معرض شيامن الدولي للحجر - Xiamen Stone Fair الأكبر في العالم). البوابة البحرية الدولية الأولى لمقاطعة فوجيان (أحد أكبر 15 ميناء حاويات في العالم)، ومركز تصدير رئيسي لمواد البناء الفاخرة، حقائب الظهر والسفر، والإلكترونيات والشاشات.',
    en: 'World Capital of Natural Stone, Marble & Granite Trade (home to the world largest Xiamen Stone Fair). Premier maritime container gateway in Fujian (Top-15 global port), and leading export base for luxury building materials, backpacks, luggage, and optoelectronics.'
  },
  keyIndustries: ['building-materials', 'logistics-shipping', 'stone-marble', 'electronics', 'apparel-bags'],
  primaryProducts: {
    ar: [
      'ألواح الرخام الطبيعي والجرانيت وأحجار الواجهات الفاخرة (معرض شيامن وشويتو)',
      'ألواح الكوارتز الصناعي والبورسلين الحجري وبلاط الترازو',
      'مكائن ومعدات قص وجلي وتشكيل الرخام وأقراص الألماس الصناعية',
      'حقائب السفر وحقائب الظهر المدرسية والرياضية ومستلزمات الهواء الطلق',
      'شاشات الكريستال السائل ومصابيح الـ LED والإلكترونيات البصرية',
      'الأحذية الرياضية والتجهيزات التصديرية'
    ],
    en: [
      'Natural Marble Slabs, Granite Blocks, Onyx & Luxury Cladding Stones',
      'Engineered Quartz Slabs, Sintered Stone & Terrazzo Floorings',
      'Diamond Saw Blades, CNC Bridge Cutters & Marble Polishing Abrasives',
      'Travel Luggage, Outdoor Backpacks & High-Volume School Bags',
      'Optoelectronics, LED Lighting Fixtures & Flat Panel Displays',
      'Sports Shoes & Performance Athletic Apparel'
    ]
  },
  bestFor: ['Stone & Marble Importers', 'Building Contractors & Architects', 'Luggage & Backpack Wholesalers', 'Freight Forwarders'],
  districts: [
    {
      id: 'siming-district',
      cityId: 'xiamen',
      name: { ar: 'منطقة سيمينغ الساحلية والتجارية (Siming CBD)', en: 'Siming Waterfront Commercial District', zh: '思明区 / 厦门国际会展中心' },
      activityType: { ar: 'مركز المعارض الدولية (Xiamen Stone Fair)، مقرات شركات التصدير البحرية، والفنادق الفاخرة', en: 'International Convention Hub, Foreign Trade Houses & Luxury Coastal Hotels' },
      mainProducts: ['معارض رخام دولية', 'خدمات مصرفية وشحن', 'حقائب وأزياء'],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Convention & Exhibition Center Station (Line 2)'
    },
    {
      id: 'huli-ftz-district',
      cityId: 'xiamen',
      name: { ar: 'منطقة هولي وميناء التجارة الحرة (Huli District & FTZ)', en: 'Huli District & Free Trade Zone', zh: '湖里区 / 厦门自贸试验区' },
      activityType: { ar: 'منطقة التجارة الحرة، مطار غاوتشي الدولي، ومستودعات الترانزيت وتجارة الحجر والأجهزة', en: 'Free Trade Bonded Zone, Gaoqi Airport Logistics & Stone Trading' },
      mainProducts: ['ألواح حجرية ورخام', 'مستلزمات شحن وموانئ', 'إلكترونيات دقيقة'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Gaoqi Station (Line 1)'
    },
    {
      id: 'haicang-port-district',
      cityId: 'xiamen',
      name: { ar: 'منطقة هايتشانغ وميناء الحاويات الدولي (Haicang Port)', en: 'Haicang International Container Port Hub', zh: '海沧区 / 海沧保税港区' },
      activityType: { ar: 'محطات تفريغ وشحن الحاويات العملاقة المتخصصة في كتل الرخام الخام والحاويات الثقيلة', en: 'Deep-Water Berth Terminals for Heavy Stone Containers & Petrochem Base' },
      mainProducts: ['حاويات شحن بحري', 'كتل رخام خام مستوردة', 'صناعات بيوكيميائية'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Haicang Business Center Station (Line 2)'
    },
    {
      id: 'shuitou-nanan-stone-strip',
      cityId: 'xiamen',
      name: { ar: 'محور شويتو الحدودي للرخام والحجر (Shuitou Stone Belt)', en: 'Shuitou Stone Capital Belt (Xiamen/Nan\'an Border)', zh: '南安水头石材产业集聚区（厦门辐射圈）' },
      activityType: { ar: 'المركز العالمي الأول لقص وتوزيع واستيراد كتل الرخام والجرانيت من إيطاليا واليونان وتركيا وإسبانيا', en: 'World Premier Stone Slabs & Blocks Wholesale and Processing Hub' },
      mainProducts: ['كتل رخام خام', 'ألواح جرانيت مصقولة', 'فسيفساء ومغاسل رخام'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Quanzhou South Railway Station / Xiamen North'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'xiamen-stone-trade-center',
      cityId: 'xiamen',
      name: { ar: 'مركز شيامن الدولي لتجارة الحجر والرخام (Xiamen Stone Center)', en: 'Xiamen International Stone Trading Center', zh: '厦门国际石材交易中心' },
      type: 'Wholesale',
      category: 'Natural Marble, Granite & Stone Blocks',
      description: {
        ar: 'المركز الرئيسي لتداول وشحن الرخام والجرانيت المصقول في شيامن، يوفر منصة عرض للمستوردين للمعاينة بالكونتينر والتعاقد المباشر مع المصانع مع توفير كافة خدمات الفحص الجمركي والتعبئة الخشبية المؤمنة (Wooden Crates).',
        en: 'Central trade venue for natural marble and granite slabs, connecting international builders and stone importers with verified processing mills and fumigated wooden bundle shipping.'
      },
      address: { ar: 'منطقة هولي، شيامن، فوجيان', en: 'Huli District, Xiamen, Fujian', zh: '福建省厦门市湖里区象屿保税区石材展销中心' },
      nearestMetro: 'Huli Innovation Park Station (Line 3)',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'High'
    },
    {
      id: 'shuitou-china-stone-city',
      cityId: 'xiamen',
      name: { ar: 'مدينة الحجر الصينية العالمية في شويتو (China Stone City Shuitou)', en: 'China Stone City (Shuitou Nan\'an)', zh: '中国水头闽南建材第一市场 / 海西石材城' },
      type: 'Wholesale',
      category: 'Natural Marble Slabs & Granite Warehouses',
      description: {
        ar: 'أكبر سوق ومستودعات لتجارة الرخام والجرانيت الطبيعي في العالم (تبعد 40 دقيقة عن شيامن). تمتد لملايين الأمتار المربعة وتضم أكثر من 3000 مستودع ومعرض لألواح الرخام الإيطالي والتركي والإسباني واليوناني والمحلي بأسعار الجملة المصنعية المباشرة.',
        en: 'The world absolute largest stone market and mega slab warehouse district (40 mins from Xiamen). Spans millions of square meters housing over 3,000 showrooms for Italian, Turkish, Spanish, and domestic marble.'
      },
      address: { ar: 'بلدة شويتو، مدينة نانآن، بالقرب من شيامن', en: 'Shuitou Town, Nan\'an, on Xiamen border', zh: '福建省南安市水头镇海西石材城' },
      nearestStation: 'Xiamen North / Quanzhou South (30 min taxi)',
      operatingHours: '08:00 - 18:00',
      moqLevel: 'High'
    }
  ],
  industrialZones: [
    {
      id: 'xiamen-torch-hi-tech-park',
      cityId: 'xiamen',
      name: { ar: 'مجمع شعلة شيامن للتكنولوجيا والإلكترونيات (Torch Hi-Tech Park)', en: 'Xiamen Torch Development Zone for High Technology', zh: '厦门火炬高新区（翔安/湖里）' },
      clusterSpecialization: { ar: 'تصنيع الشاشات المسطحة والمكونات البصرية LED، أجهزة الاتصالات، ومعدات الطاقة الشمسية', en: 'Flat Panel Displays (AUO, Tianma), Mini-LED Packaging & Optoelectronics' },
      factoryTypes: ['TFT-LCD Panel Fabs', 'Automated Surface Mount SMT Plants'],
      keyProducts: ['شاشات تلفزيون وحواسيب', 'كشافات إنارة LED', 'مكونات بصرية'],
      specializationLevel: 'High'
    },
    {
      id: 'shuitou-stone-processing-megacluster',
      cityId: 'xiamen',
      name: { ar: 'مجمع شويتو العالمي لمناشير ومصانع الرخام (Shuitou Stone Processing Hub)', en: 'Shuitou Gangshi Marble & Granite Fabrication Mega Cluster', zh: '水头镇石材加工产业集聚区' },
      clusterSpecialization: { ar: 'أكبر طاقة في العالم لمناشير قطع الصخور العملاقة وماكينات الجلي الراتنجية والتفريغ باستخدام الـ Waterjet CNC', en: 'World Largest Stone Sawing, Resin Polishing & 5-Axis Waterjet CNC Profiling Cluster' },
      factoryTypes: ['Gang Saw Cutting Plants', 'Resin Slab Polishing Lines', 'Waterjet CNC Workshops'],
      keyProducts: ['ألواح رخام مصقولة', 'أعمدة وقواطع رخامية منحوتة', 'أرضيات ووترجيت زخرفية'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'xm-natural-marble-granite',
      productName: { ar: 'ألواح الرخام والجرانيت الطبيعي وأحجار الواجهات والووترجيت', en: 'Natural Marble Slabs, Granite, Luxury Onyx & Waterjet Medallions' },
      industryCategory: 'building-materials',
      whyThisCity: { ar: 'تستورد وتعيد تصدير شيامن وشويتو أكثر من 60% من الحجر الطبيعي في العالم، وتوفر أرقى معايير الفرز واختيار البلوكات والقص الدقيق.', en: 'Xiamen and Shuitou control over 60% of global marble and granite supply with state-of-the-art gang-sawing and custom architectural fabrication.' },
      mainManufacturingArea: { ar: 'شويتو وهولي (Shuitou & Huli)', en: 'Shuitou Town & Huli Port Area' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'xm-backpacks-luggage',
      productName: { ar: 'حقائب السفر وحقائب الظهر المدرسية والرياضية ومعدات التخييم', en: 'Travel Luggage, Outdoor Tactical Backpacks & School Bags' },
      industryCategory: 'apparel-bags',
      whyThisCity: { ar: 'تضم شيامن كبرى مصانع حقائب الظهر التصديرية لماركات عالمية، وتوفر خامات أقمشة مقاومة للماء وسحابات متينة بأسعار ممتازة.', en: 'Major export hub for branded OEM backpacks and luggage bags with superior stitching and waterproof textiles.' },
      mainManufacturingArea: { ar: 'تونغآن وجيمي (Tong\'an & Jimei)', en: 'Tong\'an & Jimei Districts' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Xiamen Gaoqi International Airport (XMN - مطار دولي محوري للشحن والمسافرين)',
      'Xiamen Xiang\'an International Airport (قيد الإنشاء كمطار عملاق جديد)'
    ],
    seaPorts: [
      'Xiamen Port (厦门港 - أحد أكبر 15 ميناء حاويات في العالم بمناولة تتجاوز 12.5 مليون حاوية TEU)',
      'Haicang Port Area (أرصفة الحاويات الثقيلة المجهزة للأحجار والرخام)',
      'Dongdu Port Area'
    ],
    highSpeedRailwayStations: [
      'Xiamen North Railway Station (厦门北站 - محطة القطار السريع الرئيسية)',
      'Xiamen Railway Station (厦门站 - وسط المدينة)'
    ],
    seaFreightSuitability: {
      ar: 'الميناء المفضل في العالم لشحن الحاويات الثقيلة من الحجر والرخام (Heavy Weight 20ft Containers)، مع تجهيزات رافعات عملاقة وخبرة لوجستية فائقة في تأمين كتل وألواح الرخام.',
      en: 'World preferred heavy-weight container port with specialized cranes and fumigation yards designed specifically for dense stone block and slab freight.'
    },
    airFreightSuitability: {
      ar: 'مطار غاوتشي يوفر رحلات شحن جوي دولية مباشرة للشرق الأوسط وآسيا وأوروبا.',
      en: 'Gaoqi (XMN) maintains regular international air freighter services.'
    },
    primaryCargoRoutes: {
      ar: [
        'خطوط حاويات بحرية مباشرة ومكثفة إلى موانئ جبل علي، جدة، الدمام، صلالة، ميناء خليفة، وميناء الشويخ',
        'رحلات شحن جوي للمنتجات البصرية والإلكترونيات'
      ],
      en: [
        'Intensive direct ocean container sailings to Jebel Ali, Jeddah, Dammam, Salalah, and Khalifa Port',
        'Direct air cargo routes for optoelectronics and consumer goods'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['مارس (موسم معرض الحجر الدولي الأضخم عالمياً)', 'أبريل', 'أكتوبر', 'نوفمبر'],
    suggestedStayDays: 4,
    weatherSummary: {
      ar: 'مناخ ساحلي رائع شبه استوائي، نسيم البحر منعش في الربيع والخريف، والصيف دافئ ومناسب للاستمتاع بالشواطئ والحدائق.',
      en: 'Superb subtropical coastal climate; spring and autumn offer fresh ocean breezes perfect for visiting the Stone Fair and Gulangyu Island.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة سيمينغ ومركز المعارض (Siming Convention & Exhibition Hub): الأنسب لزوار معرض الحجر وفنادق الإطلالة البحرية الفاخرة.',
        en: 'Siming Exhibition Center Area: Optimal for Stone Fair attendees with luxury coastal hotels.'
      },
      {
        ar: 'منطقة بحيرة يونغدانغ (Yundang Lake / Hubin): أرقى مناطق وسط شيامن بالمقاهي والمطاعم ومكاتب الشحن.',
        en: 'Yundang Lake: Downtown dining hub, expat cafes, and scenic lakeside strolling.'
      }
    ],
    localTransportAdvice: {
      ar: 'مترو شيامن يضم 3 خطوط حديثة تربط مركز المعارض ومحطة القطار والمطار. التنقل إلى بلدة شويتو للرخام يستغرق 40 دقيقة بالتاكسي أو سيارات DiDi.',
      en: 'Xiamen Metro Lines 1, 2 & 3 reach the Expo Center and North Station. DiDi to Shuitou Stone Market takes about 40 minutes.'
    },
    languageTips: {
      ar: 'شركات تصدير الرخام في شيامن لديها خبرة واسعة مع المستوردين العرب من السعودية والإمارات وقطر، ويتوفر مترجمون عرب بانتظام خلال معرض الحجر الدولي في مارس.',
      en: 'Stone exporters in Xiamen are deeply experienced with Arab buyers. Arabic translators are abundant during the March Stone Fair.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'MetroMan Xiamen'],
    recommendedHotels: [
      {
        id: 'waldorf-astoria-xiamen',
        name: { ar: 'فندق والدورف أستوريا شيامن (Waldorf Astoria Xiamen)', en: 'Waldorf Astoria Xiamen', zh: '厦门华尔道夫酒店' },
        category: { ar: 'أفخم فندق 5 نجوم', en: 'Ultra-Luxury 5-Star' },
        area: { ar: 'منطقة سيمينغ التجارية، باراغون سنتر', en: 'Siming Commercial Center' },
        highlights: { ar: 'الفندق الأكثر فخامة في شيامن، خدمة مساعد شخصي، مطاعم حائزة على جوائز، وتصميم كلاسيكي ساحر', en: 'Top-tier luxury hotel with bespoke butler services and world-class fine dining' }
      },
      {
        id: 'shangri-la-xiamen',
        name: { ar: 'فندق شانغريلا شيامن (Shangri-La Xiamen)', en: 'Shangri-La Hotel Xiamen', zh: '厦门香格里拉大酒店' },
        category: { ar: 'فاخر 5 نجوم بحري', en: 'Luxury 5-Star Waterfront' },
        area: { ar: 'طريق غوانينشان الساحلي، سيمينغ', en: 'Guanyinshan Coastal Area, Siming' },
        highlights: { ar: 'يبعد 5 دقائق فقط عن مركز شيامن الدولي للمعارض، إطلالة مباشرة على البحر وخدمات رجال أعمال فائقة', en: '5 minutes from International Stone Fair, panoramic oceanfront views' }
      },
      {
        id: 'marco-polo-xiamen',
        name: { ar: 'فندق ماركو بولو شيامن (Marco Polo Xiamen)', en: 'Marco Polo Xiamen', zh: '厦门马哥孛罗东方大酒店' },
        category: { ar: 'أعمال فاخر 5 نجوم', en: 'Upscale Business 5-Star' },
        area: { ar: 'بحيرة يونغدانغ، وسط المدينة', en: 'Yundang Lake Downtown' },
        highlights: { ar: 'موقع عريق ومفضل لدى رجال الأعمال والمستوردين الأجانب، بالقرب من المقاهي والمكاتب التجارية', en: 'Beloved classic business hotel on scenic Yundang Lake' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'xiamen-ancient-mosque-halal',
        name: { ar: 'مطعم جامع شيامن الإسلامي التاريخي (Xiamen Mosque Halal)', en: 'Xiamen Ancient Mosque Halal Restaurant', zh: '厦门清真寺清真餐厅' },
        cuisineType: { ar: 'مأكولات إسلامية صينية ولحم ضأن حلال 100%', en: 'Authentic Local Chinese Muslim Halal' },
        isHalal: true,
        address: { ar: 'طريق شياخه، منطقة سيمينغ، شيامن', en: 'Xiahe Rd, Siming District, Xiamen', zh: '福建省厦门市思明区夏禾路清真寺' },
        recommendedFor: { ar: 'صلاة الجمعة، وجبات حلال موثوقة طازجة، لحم ضأن ونودلز إسلامية أصيلة', en: 'Friday congregation prayers and certified halal mutton and beef noodles' }
      },
      {
        id: 'turpan-xinjiang-halal-xm',
        name: { ar: 'مطعم توربان شينجيانغ الحلال بـ شيامن (Turpan Halal)', en: 'Turpan Xinjiang Halal Restaurant Xiamen', zh: '吐鲁番新疆清真餐厅' },
        cuisineType: { ar: 'مأكولات شينجيانغ ومشاوي حلال معتمدة', en: 'Xinjiang Halal Lamb & Kebabs' },
        isHalal: true,
        address: { ar: 'طريق هو بين الغربي، سيمينغ، شيامن', en: 'Hubin West Rd, Siming District, Xiamen', zh: '福建省厦门市思明区湖滨西路' },
        recommendedFor: { ar: 'مشاوي فحمية، كباب لحم ضأن طازج، أرز باللحم، وأجواء ملائمة لرجال الأعمال', en: 'Tender lamb skewers, Uyghur polo rice, and clean business lunch' }
      }
    ],
    touristAttractions: [
      {
        id: 'gulangyu-island-unesco',
        name: { ar: 'جزيرة غولانغيو التراثية العالمية (Gulangyu Island - 鼓浪屿)', en: 'Gulangyu Island UNESCO World Heritage', zh: '鼓浪屿风景名胜区' },
        category: { ar: 'تراث تاريخي عالمي لليونسكو وخالية تماماً من السيارات', en: 'UNESCO World Heritage Historic Island' },
        description: { ar: 'جزيرة تاريخية رومانسية خالية من المركبات الآلية تضم قصوراً أثرية على الطراز الفيكتوري والنيوكلاسيكي ومتحف البيانو العالمي وشواطئ خلابة.', en: 'Pedestrian-only historic settlement island celebrated for colonial architecture, international consulates, and the world Piano Museum.' },
        nearestMetro: 'Ferry Terminal / Cruise Center'
      },
      {
        id: 'nanputuo-temple-xiamen',
        name: { ar: 'معبد نانبوتو البوذي العريق (Nanputuo Temple - 南普陀寺)', en: 'Nanputuo Temple', zh: '南普陀寺' },
        category: { ar: 'معلم ديني وثقافي تاريخي شهير', en: 'Historic Buddhist Temple & Botanical Mount' },
        description: { ar: 'معبد تاريخي يعود لأسرة تانغ محاط ببرك اللوتس وجبال ووتشي، ويقع بجواره الحرم الجامعي الشهير لجامعة شيامن.', en: 'Ancient Buddhist temple at the foot of Wulao Peak, adjacent to beautiful Xiamen University.' }
      }
    ],
    essentialServices: [
      {
        id: 'xiamen-stone-customs-testing',
        serviceType: { ar: 'فحص الحجر والتبخير الجمركي', en: 'Stone Inspection & Fumigation Services' },
        title: { ar: 'مركز فحص الحجر والشهادات الجمركية بميناء شيامن', en: 'Xiamen Port Stone & Bulk Minerals Inspection Center', zh: '厦门海关石材检验检测技术中心' },
        description: { ar: 'إصدار شهادات التبخير الرسمية (Fumigation Certificates) لصناديق الخشب الحاملة للرخام، وفحص السلامة الإشعاعية والتحميل.', en: 'Official wood packaging fumigation certification and radiological testing reports required for global stone container clearance.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'xiamen-stone-fair',
      name: { ar: 'معرض شيامن الدولي للحجر والرخام (Xiamen Stone Fair)', en: 'Xiamen International Stone Fair', zh: '厦门国际石材展览会（全球最大石材展）' },
      industry: 'Natural Stone, Marble Slabs, Granite & Stone Machinery',
      venue: { ar: 'مركز شيامن الدولي للمؤتمرات والمعارض', en: 'Xiamen International Conference & Exhibition Center', zh: '厦门国际会展中心' },
      occurrence: { ar: 'مارس سنوياً (الحدث الأكبر عالمياً)', en: 'Annually in March (World #1 Stone Fair)' },
      officialWebsite: 'https://www.stonefair.org.cn',
      bestFor: ['Marble Importers', 'Architects & Interior Designers', 'Stone Fabricators', 'Machinery Buyers']
    },
    {
      id: 'cifit-xiamen',
      name: { ar: 'معرض الصين الدولي للاستثمار والتجارة (CIFIT)', en: 'China International Fair for Investment & Trade (CIFIT)', zh: '中国国际投资贸易洽谈会（投洽会）' },
      industry: 'Global Investment, Free Trade & Cross-Border Commerce',
      venue: { ar: 'مركز شيامن الدولي للمعارض والمؤتمرات', en: 'Xiamen International Conference & Exhibition Center', zh: '厦门国际会展中心' },
      occurrence: { ar: '8-11 سبتمبر سنوياً', en: 'Annually in September (Sep 8-11)' },
      officialWebsite: 'https://www.chinafair.org.cn',
      bestFor: ['Corporate Investors', 'Trade Delegations', 'Logistics Companies']
    }
  ],
  relatedCitySlugs: ['quanzhou', 'fuzhou', 'ningbo', 'shanghai'],
  relatedProductSlugs: ['building-materials', 'logistics', 'apparel'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل شيامن التجاري الشامل | الرخام والجرانيت، معرض الحجر، وميناء شيامن', en: 'Xiamen Commercial Sourcing Guide | Stone Fair, Marble & Port' },
    description: { ar: 'دليل الاستيراد والتجارة من شيامن: معرض شيامن الدولي للحجر الأكبر عالمياً، مجمع شويتو للرخام، ميناء الحاويات، وفنادق ومطاعم حلال.', en: 'Complete sourcing guide to Xiamen: World #1 Xiamen Stone Fair, Shuitou marble cluster, top-15 container port & halal travel.' }
  }
};
