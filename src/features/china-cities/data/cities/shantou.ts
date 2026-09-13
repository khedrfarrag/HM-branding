import { ICity } from '../../types';

export const shantouCity: ICity = {
  id: 'shantou',
  slug: 'shantou',
  name: {
    ar: 'شانتو - تشينغهاي (عاصمة الألعاب العالمية والملابس الداخلية ولانجيري السلس الأولى دولياً)',
    en: 'Shantou - Chenghai (Guangdong)',
    zh: '汕头 (澄海)'
  },
  province: { ar: 'غوانغدونغ', en: 'Guangdong', zh: '广东省' },
  region: 'Greater Bay Area & South China',
  tier: 'tier-3',
  commercialImportanceScore: 92,
  heroImage: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80',
  description: {
    ar: 'عاصمة الألعاب العالمية الأولى وعاصمة الملابس الداخلية واللانجيري بدون درزات (Seamless Underwear) في الصين؛ تقع في منطقة تشاوشان الساحلية بمقاطعة غوانغدونغ. تحتضن منطقة تشينغهاي (澄海) أكبر تجمع لتصنيع وتصدير ألعاب الأطفال البلاستيكية والذكية وطائرات الدرون وسيارات التحكم عن بعد بنسبة تتجاوز 70% من المعروض العالمي، بينما تنتج منطقتا تشاونان (潮南) وتشاويانغ (潮阳) أكثر من 60% من حمالات الصدر واللانجيري والملابس الداخلية وملابس النوم المنزلية المصدرة عالمياً.',
    en: 'The undisputed World Toy Capital and China premier hub for seamless lingerie and knit loungewear, situated in the coastal Chaoshan region of Guangdong. Its Chenghai district (澄海) manufactures and exports over 70% of global plastic, electronic, RC, and educational toys, backed by titan corporations like Alpha Group, Sembo Blocks, and Rastar. Concurrently, neighboring Chaonan and Chaoyang districts produce over 60% of China seamless underwear, brassieres, and thermal homewear.'
  },
  keyIndustries: [
    'toys-robotics-rc-models',
    'seamless-underwear-lingerie',
    'loungewear-sleepwear-knitting',
    'plastic-raw-materials-molding',
    'packaging-gravure-printing',
    'marine-logistics-port'
  ],
  primaryProducts: {
    ar: [
      'ألعاب الأطفال البلاستيكية ومكعبات التركيب الذكية (Sembo & Lego-compatible Blocks)',
      'سيارات التحكم عن بعد وطائرات الدرون والروبوتات التفاعلية (RC Cars & Drones)',
      'الملابس الداخلية الحريمي واللانجيري بدون درزات (Seamless Lingerie & Bras)',
      'ملابس النوم والبيجامات المنزلية والملابس القطنية الحرارية (Homewear & Pajamas)',
      'حبيبات البلاستيك الخام وماكينات الطباعة وتغليف المواد الغذائية',
      'ألعاب تعليمية ومنتجات التوزيع للرسوم المتحركة والهدايا الدعائية'
    ],
    en: [
      'Plastic Toys, Educational DIY Kits & Interlocking Bricks (Sembo & Chenghai OEM)',
      'Remote-Controlled (RC) Cars, Quadcopters, Drones & Interactive Electronics',
      'Seamless Bras, Panties, Shapewear & Lingerie Sets (Chaonan & Gurao Hubs)',
      'Cotton & Modal Pajamas, Loungewear Sets & Thermal Underwear',
      'Plastic Resins (PP, ABS, PS) & High-Speed Gravure Flexible Packaging Film',
      'Baby Dolls, Action Figures, Beach Toys & Custom Corporate Promotional Gifts'
    ]
  },
  bestFor: [
    'Toy Importers, Distributors & Amusement Retailers',
    'Lingerie, Bra & Seamless Underwear Brand Sourcing',
    'Pajama, Sleepwear & Loungewear Volume Wholesalers',
    'E-Commerce & Amazon/Noon Sellers in Toys & Kids Categories',
    'Flexible Plastic Packaging & Rotogravure Printing Importers'
  ],
  districts: [
    {
      id: 'chenghai-toy-capital',
      cityId: 'shantou',
      name: {
        ar: 'منطقة تشينغهاي (عاصمة ألعاب الأطفال العالمية)',
        en: 'Chenghai District (World Toy Capital)',
        zh: '澄海区 (世界玩具之都)'
      },
      activityType: {
        ar: 'أضخم مركز لتصنيع وتصدير ألعاب الأطفال والسيارات اللاسلكية وطائرات التحكم ومكعبات البناء والألعاب التعليمية في العالم',
        en: 'World largest R&D, manufacturing, and export hub for plastic toys, RC models, drones, and educational block kits.'
      },
      mainProducts: [
        'ألعاب سيارات لاسلكية وطائرات مسيرة (RC)',
        'مكعبات بناء متوافقة مع الليغو ومجموعات تركيب',
        'دمى وألعاب موسيقية وتعليمية للأطفال'
      ],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Chaoshan Railway Station (潮汕站)'
    },
    {
      id: 'chaonan-lingerie-homewear-cluster',
      cityId: 'shantou',
      name: {
        ar: 'منطقة تشاونان وبلدة شياشان (عاصمة اللانجيري والملابس الداخلية بدون درزات)',
        en: 'Chaonan & Xiashan Underwear Hub',
        zh: '潮南区 (峡山针织内衣名城)'
      },
      activityType: {
        ar: 'المركز الأول في آسيا لتصنيع الأقمشة المحبوكة واللانجيري والملابس الداخلية السلسة وملابس التخسيس (Seamless Shapewear)',
        en: 'Asia primary base for circular knitted fabrics, seamless bras, panty collections, and functional shapewear.'
      },
      mainProducts: [
        'حمالات صدر بدون أسلاك ولانجيري سلس',
        'بيجامات وملابس نوم قطنية ومخملية',
        'ملابس تخسيس وكورسيهات مرنة'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Chaoyang Railway Station (潮阳站)'
    },
    {
      id: 'chaoyang-knitwear-apparel-zone',
      cityId: 'shantou',
      name: {
        ar: 'منطقة تشاويانغ (عاصمة ملابس النوم والبيجامات المنزلية)',
        en: 'Chaoyang Garment & Loungewear Base',
        zh: '潮阳区 (家居服制造基地)'
      },
      activityType: {
        ar: 'قاعدة صناعية ضخمة لإنتاج بيجامات النوم وأرواب الحمام القطنية والملابس المنزلية المريحة',
        en: 'Extensive cluster producing cotton loungewear, sleepwear sets, bathrobes, and comfortable casual wear.'
      },
      mainProducts: [
        'أطقم بيجامات صيفية وشتوية',
        'أرواب حمام وأقمشة قطنية منسوجة',
        'ملابس رياضية منزلية خفيفة'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    }
  ],
  wholesaleMarkets: [
    {
      id: 'baoao-international-toy-city',
      cityId: 'shantou',
      name: {
        ar: 'مدينة باواو الدولية للألعاب (BaoAo Toy City - أضخم معرض ألعاب في العالم)',
        en: 'BaoAo International Toy City Mega Complex',
        zh: '宝奥国际玩具城 (澄海金鸿公路)'
      },
      type: 'Wholesale',
      category: 'Toys, RC Models & Kids Entertainment',
      description: {
        ar: 'المعلم الأهم في العالم لتجارة الألعاب؛ يعتمد نظام متطور لمسح الباركود (Barcode Sampling System)، حيث يحمل التاجر جهاز ماسح ويختار أي عينة من بين مئات الآلاف لتسجيل بيانات المصنع وسعر الجملة مباشرة وإرسال قائمة الطلبيات بنقرة واحدة.',
        en: 'The global toy epicentre utilizing high-efficiency barcode scanner sampling. Buyers can scan hundreds of thousands of toy samples across multi-floor showrooms to instantly receive factory quotes, packaging specs, and export carton dimensions.'
      },
      address: {
        ar: 'طريق جينهونغ، منطقة تشينغهاي، شانتو، غوانغدونغ',
        en: 'Jinhong Highway, Chenghai District, Shantou, Guangdong',
        zh: '广东省汕头市澄海区金鸿公路宝奥国际玩具城'
      },
      nearestStation: 'Chaoshan High-Speed Railway Station + 30 mins Taxi',
      moqLevel: 'Flexible'
    },
    {
      id: 'hongteng-toy-exhibition-center',
      cityId: 'shantou',
      name: {
        ar: 'معرض هونغتنغ الدولي لعينات الألعاب (Hongteng Toy Sourcing Center)',
        en: 'Hongteng Toy Exhibition & Sourcing Showroom',
        zh: '宏腾玩具展厅 (澄海玩具一条街)'
      },
      type: 'Factory Showroom',
      category: 'Direct OEM/ODM Toy Sampling',
      description: {
        ar: 'يقدم خدمات الضيافة والتصدير للمشترين الدوليين، مع قاعات اجتماعات خاصة وخدمات شحن العينات المجانية إلى بلدك.',
        en: 'Provides high-touch export coordination, dedicated private meeting suites, and rapid express sample shipping services for global buyers.'
      },
      address: {
        ar: 'شارع دينغهاي الشرقي، تشينغهاي، شانتو',
        en: 'Denghai East Road, Chenghai District, Shantou, Guangdong',
        zh: '广东省汕头市澄海区澄华街道澄江路宏腾展厅'
      },
      nearestStation: 'Chenghai Center + 5 mins Taxi',
      moqLevel: 'Medium'
    },
    {
      id: 'xiashan-underwear-garment-market',
      cityId: 'shantou',
      name: {
        ar: 'سوق شياشان للملابس الداخلية واللانجيري (峡山针织内衣城)',
        en: 'Xiashan International Underwear & Lingerie Wholesale Market',
        zh: '峡山针织内衣城 (潮南区)'
      },
      type: 'Wholesale',
      category: 'Seamless Underwear, Bras & Pajamas',
      description: {
        ar: 'عاصمة اللانجيري بدون درزات الأولى في الصين؛ تصنع منتجات كبرى الماركات العالمية (Victoria Secret, Calvin Klein) بأسعار تصنيع رخيصة وإمكانيات تخصيص لا محدودة للأقمشة والمقاسات.',
        en: 'China primary manufacturing hub for seamless underwear and bras, supplying top global fashion brands with custom elastic weaves, cup moldings, and private label tags.'
      },
      address: {
        ar: 'شارع شياشان، منطقة تشاونان، شانتو، غوانغدونغ',
        en: 'Xiashan Street, Chaonan District, Shantou, Guangdong',
        zh: '广东省汕头市潮南区峡山街道广汕公路旁'
      },
      nearestStation: 'Chaoyang High-Speed Station + 20 mins Taxi',
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'chenghai-toy-smart-manufacturing-park',
      cityId: 'shantou',
      name: {
        ar: 'المنطقة الصناعية الذكية لصناعة ألعاب تشينغهاي',
        en: 'Chenghai Toy Intelligent Manufacturing Park',
        zh: '澄海智能玩具与创意产业集聚区'
      },
      clusterSpecialization: {
        ar: 'تضم مقرات كبرى شركات ألعاب الأطفال والرسوم المتحركة مثل ألفا غروب (Alpha Group) وراستار (Rastar) وسيمبو (Sembo) مع سلاسل توريد كاملة تشمل قوالب الحقن ومحركات ومكبرات الصوت المصغرة',
        en: 'Home to stock-listed toy titans like Alpha Group (Super Wings) and Rastar (licensed BMW/Ferrari RC cars), supported by localized micro-motor and mold supply chains.'
      },
      factoryTypes: [
        'Automated Plastic Injection Molding Plants',
        'Electronic PCB SMT Surface Mount Lines',
        'Precision Toy CNC Die & Mold Workshops'
      ],
      keyProducts: [
        'سيارات تحكم لاسلكي وطائرات درون للأطفال',
        'مكعبات تركيب وبناء روبوتات ذكية',
        'ألعاب تعليمية وإلكترونية تفاعلية'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'chaonan-textile-environmental-park',
      cityId: 'shantou',
      name: {
        ar: 'المجمع الصناعي البيئي لطباعة وصباغة أقمشة الملابس الداخلية في تشاونان',
        en: 'Chaonan Textile Dyeing & Underwear Environmental Industrial Complex',
        zh: '潮南纺织印染环保综合处理中心'
      },
      clusterSpecialization: {
        ar: 'أكبر مجمع معتمد بيئياً لغزل وصباغة أقمشة اللانجيري والملابس الداخلية والبيجامات، ما يضمن الاستدامة والامتثال للمواصفات الأوروبية والأمريكية (OEKO-TEX Standard 100)',
        en: 'State-of-the-art circular industrial zone ensuring OEKO-TEX Standard 100 environmental compliance for dyed fabrics, elastics, and lace.'
      },
      factoryTypes: [
        'Circular Tube Seamless Underwear Knitting Plants',
        'Eco-Friendly Fabric Dyeing & Finishing Facilities',
        'Molded Foam Bra Cup Pressing & Lamination Units'
      ],
      keyProducts: [
        'حمالات صدر بدون درزات وكورسيهات',
        'أقمشة ميكروفايبر ومودال ناعمة للملابس الداخلية',
        'أطقم بيجامات قطنية ناعمة'
      ],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'st-plastic-and-rc-toys',
      productName: {
        ar: 'ألعاب الأطفال وسيارات التحكم وطائرات الدرون (Chenghai Toys)',
        en: 'Plastic Toys, Remote Control Cars, STEM Kits & Drones'
      },
      industryCategory: 'toys-robotics-rc-models',
      whyThisCity: {
        ar: 'تشينغهاي في شانتو هي عاصمة الألعاب العالمية؛ تنتج 70% من ألعاب العالم وتملك نظام العينات الفوري بالباركود في معارض باواو وهونغتنغ بأسعار تصنيع رخيصة للغاية.',
        en: 'Chenghai manufactures over 70% of global toys with immediate barcode scanning showrooms at BaoAo and Hongteng, offering unbeatable factory pricing.'
      },
      mainManufacturingArea: {
        ar: 'منطقة تشينغهاي، شانتو',
        en: 'Chenghai Toy Manufacturing Hub, Shantou'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'st-seamless-underwear',
      productName: {
        ar: 'الملابس الداخلية بدون درزات واللانجيري (Seamless Lingerie & Bras)',
        en: 'Seamless Bras, Panties, Shapewear & Loungewear'
      },
      industryCategory: 'seamless-underwear-lingerie',
      whyThisCity: {
        ar: 'تشاونان وشياشان تنتجان أكثر من 60% من اللانجيري السلس في الصين؛ توفر تقنيات حياكة دائرية إيطالية متطورة مع تخصيص كامل للعلامات التجارية بكميات مرنة.',
        en: 'Chaonan and Xiashan produce over 60% of China seamless lingerie and shapewear using Italian Santoni seamless knitting machines for private label OEM.'
      },
      mainManufacturingArea: {
        ar: 'منطقة تشاونان وبلدة شياشان، شانتو',
        en: 'Chaonan District & Xiashan Town, Shantou'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Jieyang Chaoshan International Airport (SWA) - 35 mins drive to Chenghai',
      'Shenzhen Baoan International Airport (SZX) - 2 hrs via bullet train',
      'Guangzhou Baiyun International Airport (CAN) - 2.5 hrs via bullet train'
    ],
    seaPorts: [
      'Port of Shantou International Container Terminal (Direct routes to Middle East & Europe)',
      'Shenzhen Yantian Container Port (via Coastal Feeder)'
    ],
    highSpeedRailwayStations: [
      'Chaoshan Railway Station (潮汕站 - Bullet trains to Shenzhen in 1.5 hrs, Guangzhou in 2 hrs)',
      'Shantou Railway Station (汕头站 - Downtown direct connections)',
      'Chaoyang Railway Station (潮阳站 - Serving Chaonan and underwear clusters)'
    ],
    seaFreightSuitability: {
      ar: 'ممتازة جداً؛ ميناء شانتو يوفر خطوط شحن بحرية مباشرة لحاويات الألعاب والمنسوجات، بالإضافة إلى التغذية السريعة لميناء يانتيان في شينزن.',
      en: 'Excellent ocean logistics with direct container calls at Shantou Port and rapid coastal feeder links to Shenzhen Yantian terminal.'
    },
    airFreightSuitability: {
      ar: 'جيدة وسريعة عبر مطار جييانغ تشاوشان الدولي (SWA) للرحلات الداخلية ولجنوب شرق آسيا، مع ربط سريع بالسكك الحديدية لشحن العينات عبر هونغ كونغ وشينزن.',
      en: 'Fast air cargo via Jieyang Chaoshan Airport (SWA) and high-speed rail connections to Hong Kong and Shenzhen cargo gateways.'
    },
    primaryCargoRoutes: {
      ar: [
        'تشينغهاي / شانتو ← ميناء شانتو الدولي ← شحن بحري مباشر لحاويات الألعاب لموانئ الشرق الأوسط (جبل علي، جدة، السخنة)',
        'تشاونان ← شاحنات النقل السريع ← ميناء شينزن يانتيان ← موانئ أوروبا وأمريكا'
      ],
      en: [
        'Chenghai/Shantou -> Shantou International Container Port -> Middle East / Red Sea / Arabian Gulf',
        'Chaonan Underwear Hub -> Expressway Drayage -> Shenzhen Yantian Port -> North America / Europe'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['April', 'May', 'September', 'October', 'November'],
    suggestedStayDays: 4,
    weatherSummary: {
      ar: 'مناخ شبه استوائي ساحلي دافئ؛ موسم معارض الألعاب في أبريل وأكتوبر هو التوقيت الأفضل للزيارة.',
      en: 'Warm coastal subtropical climate. April and October during toy fair seasons offer optimal weather and commercial activity.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة تشينغهاي (بجوار معارض الألعاب الكبرى باواو وهونغتنغ)',
        en: 'Chenghai District near BaoAo and Hongteng toy showroom clusters'
      },
      {
        ar: 'وسط مدينة شانتو (حي لونغهو وجينبينغ بالقرب من الفنادق العالمية والمطاعم)',
        en: 'Downtown Shantou (Longhu/Jinping) near international business hotels and dining'
      }
    ],
    localTransportAdvice: {
      ar: 'استخدم تطبيق Didi للتنقل السريع بين وسط شانتو وتشينغهاي (حوالي 25 دقيقة). للذهاب إلى مصانع الملابس الداخلية في تشاونان، يستحسن استئجار سيارة بسائق ليوم كامل.',
      en: 'Didi is readily available between Shantou center and Chenghai (25 mins). For visits to Chaonan underwear plants, hiring a daily private car is recommended.'
    },
    languageTips: {
      ar: 'اللغة الصينية الماندرين ولهجة تيوتشيو (Teochew) هما السائدتان؛ معارض الألعاب الكبرى توفر موظفين يجيدون الإنجليزية لتسجيل الباركود وتسهيل طلبيات التصدير.',
      en: 'Mandarin and Teochew dialect prevail. Major toy sample showrooms have English-speaking account reps for barcode scanner coordination.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'sheraton-shantou-hotel',
        name: {
          ar: 'فندق شيراتون شانتو (Sheraton Shantou Hotel 5 Stars)',
          en: 'Sheraton Shantou Hotel',
          zh: '汕头喜来登酒店'
        },
        starRating: 5,
        category: { ar: 'فاخر 5 نجوم دولي', en: 'Luxury 5-Star International' },
        area: {
          ar: 'الحي التجاري المركزي، منطقة لونغهو، شانتو',
          en: 'Central Business District, Longhu District, Shantou'
        },
        address: {
          ar: 'رقم 11 شارع تشانغبينغ، منطقة لونغهو، شانتو',
          en: 'No. 11 Changping Road, Longhu District, Shantou, Guangdong',
          zh: '广东省汕头市龙湖区长平路11号'
        },
        highlights: {
          ar: 'فندق أعمال دولي راقي في قلب المدينة، على بعد 10 دقائق من محطة القطارات و25 دقيقة من تشينغهاي',
          en: 'Premier international business hotel in downtown Shantou, 10 mins from rail station and 25 mins to Chenghai.'
        }
      },
      {
        id: 'chenghai-garden-hotel',
        name: {
          ar: 'فندق غاردين تشينغهاي (Chenghai Garden Hotel)',
          en: 'Chenghai Garden Hotel Shantou',
          zh: '澄海国瑞豪生大酒店 / 花园酒店'
        },
        starRating: 5,
        category: { ar: 'أعمال فاخر 5 نجوم', en: 'Luxury Business 5-Star' },
        area: {
          ar: 'منطقة تشينغهاي، قلب تجمع مصانع الألعاب',
          en: 'Chenghai District, Toy Industrial Core'
        },
        address: {
          ar: 'شارع وينغهوا، منطقة تشينغهاي، شانتو',
          en: 'Chenghua Road, Chenghai District, Shantou, Guangdong',
          zh: '广东省汕头市澄海区文冠路与澄华路交汇处'
        },
        highlights: {
          ar: 'الفندق المفضل عالمياً لرجال الأعمال وتجار الألعاب؛ يقع على بعد 8 دقائق فقط من مدينة باواو للألعاب',
          en: 'The top choice for international toy merchants, situated just 8 minutes from BaoAo International Toy City.'
        }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'shantou-mosque-halal-dining',
        name: {
          ar: 'مطعم ومطبخ جامع شانتو الإسلامي الحلال (Shantou Mosque Halal Restaurant)',
          en: 'Shantou Grand Mosque Halal Muslim Canteen',
          zh: '汕头市清真寺穆斯林回民餐馆'
        },
        cuisineType: {
          ar: 'مأكولات إسلامية حلال، لحوم بقر وضأن طازجة، وأطباق المطبخ التشاوشاني الحلال',
          en: 'Traditional Halal Chinese Muslim Dishes, Braised Beef & Chaoshan Halal Specialties'
        },
        isHalal: true,
        address: {
          ar: 'شارع دونغشيا بجوار مسجد شانتو، منطقة جينبينغ، شانتو',
          en: 'Dongxia Road adjacent to Shantou Grand Mosque, Jinping District, Shantou',
          zh: '广东省汕头市金平区东厦路清真寺旁'
        },
        recommendedFor: {
          ar: 'أداء صلاة الجمعة وتناول طعام حلال موثوق ومصادق عليه من الجمعية الإسلامية في شانتو',
          en: 'Certified halal cuisine and Friday congregational prayers with the local Muslim community.'
        }
      },
      {
        id: 'chenghai-xibei-halal-beef-noodles',
        name: {
          ar: 'مطعم إخوان المسلمين شمال غرب شينجيانغ في تشينغهاي (Chenghai Halal Muslim Diner)',
          en: 'Chenghai Northwest Lanzhou Halal Restaurant',
          zh: '澄海清真·西北穆斯林牛肉拉面馆 (澄华路店)'
        },
        cuisineType: {
          ar: 'نودلز اللحم البقري الحلال الطازجة، أسياخ لحم الضأن المشوي، وأرز مقلي إسلامي',
          en: 'Hand-Pulled Halal Beef Noodles & Xinjiang Roasted Lamb Kebabs'
        },
        isHalal: true,
        address: {
          ar: 'طريق تشنغهوا بالقرب من مجمع شركات الألعاب، تشينغهاي، شانتو',
          en: 'Chenghua Road near Toy Headquarters Cluster, Chenghai, Shantou',
          zh: '广东省汕头市澄海区澄华路与文冠路交叉口'
        },
        recommendedFor: {
          ar: 'وجبات غداء حلال سريعة ولذيذة لمستوردي الألعاب أثناء جولات المصانع والمعارض في تشينغهاي',
          en: 'Convenient certified halal lunch option during busy toy factory and showroom audits in Chenghai.'
        }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'chenghai-international-toy-expo-ccitf',
      name: {
        ar: 'معرض تشينغهاي الدولي لألعاب الأطفال والهدايا (CCITF - 澄海玩博会)',
        en: 'China Chenghai International Toy & Gift Fair (CCITF)',
        zh: '中国澄海国际玩具礼品博览会 (玩博会)'
      },
      industry: 'Toys, Educational Games, Drones, RC Models & Baby Products',
      venue: {
        ar: 'مركز تشينغهاي الدولي للمؤتمرات والمعارض / مدينة باواو، شانتو',
        en: 'Chenghai International Exhibition Center & BaoAo Expo Hall, Shantou',
        zh: '汕头市澄海区宝奥国际博览中心'
      },
      occurrence: {
        ar: 'سنوياً (دورة الربيع في أبريل ودورة الخريف في أكتوبر)',
        en: 'Biannually in April (Spring) & October (Autumn)'
      },
      bestFor: [
        'Toy Importers & Wholesalers',
        'Amusement Park & Gift Retailers',
        'Amazon & E-Commerce Merchants',
        'Educational STEM Toy Brands'
      ]
    },
    {
      id: 'chaoshan-international-textile-clothing-expo',
      name: {
        ar: 'معرض تشاوشان الدولي للأقمشة والملابس الداخلية وملابس النوم (CTCE)',
        en: 'Chaoshan International Textile, Underwear & Loungewear Expo (CTCE)',
        zh: '中国·潮汕国际纺织服装博览会'
      },
      industry: 'Seamless Lingerie, Bras, Loungewear, Pajamas & Knitting Machinery',
      venue: {
        ar: 'مركز شانتو الدولي للمعارض والمؤتمرات، شانتو، غوانغدونغ',
        en: 'Shantou International Convention & Exhibition Center, Shantou',
        zh: '汕头国际会展中心'
      },
      occurrence: {
        ar: 'سنوياً في مارس / أبريل',
        en: 'Annual (March / April)'
      },
      bestFor: [
        'Underwear Brand Owners',
        'Lingerie & Sleepwear Importers',
        'Textile Wholesale Buyers',
        'Department Store Procurement Teams'
      ]
    }
  ],
  relatedCitySlugs: ['guangzhou', 'shenzhen', 'dongguan', 'foshan', 'quanzhou', 'yiwu'],
  relatedProductSlugs: [
    'toys-robotics-rc-models',
    'seamless-underwear-lingerie',
    'apparel',
    'small-commodities'
  ],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل شانتو وتشينغهاي التجاري | عاصمة الألعاب العالمية والملابس الداخلية السلسة',
      en: 'Shantou Chenghai Sourcing Guide | World Toy Capital & Seamless Lingerie'
    },
    description: {
      ar: 'دليل شامل للاستيراد من شانتو وتشينغهاي: معارض وأسواق ألعاب الأطفال بالجملة (باواو وهونغتنغ)، مصانع الملابس الداخلية السلسة في تشاونان، فنادق ومطاعم حلال، وخدمات الشحن.',
      en: 'Comprehensive sourcing guide to Shantou & Chenghai: World Toy Capital, BaoAo toy city, Chaonan seamless lingerie cluster, logistics, hotels, and halal dining.'
    }
  }
};
