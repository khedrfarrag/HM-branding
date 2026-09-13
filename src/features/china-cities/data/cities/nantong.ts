import { ICity } from '../../types';

export const nantongCity: ICity = {
  id: 'nantong',
  slug: 'nantong',
  name: {
    ar: 'نانتونغ (عاصمة المفروشات والمنسوجات المنزلية وبناء السفن والمعدات)',
    en: 'Nantong',
    zh: '南通'
  },
  province: { ar: 'جيانغسو', en: 'Jiangsu' },
  region: 'East China / Yangtze River Delta',
  tier: 'tier-2',
  commercialImportanceScore: 91,
  heroImage: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1200&q=80',
  description: {
    ar: 'عاصمة المنسوجات والمفروشات المنزلية الأولى في العالم (World Home Textiles Capital)؛ تنتج منطقتا دي شيكياو (叠石桥) وتشيهوا في نانتونغ أكثر من 60% من إجمالي أطقم الأسرة والمفارش والوسائد واللحاف وبياضات الفنادق في الصين. تقع شمال شنغهاي مباشرة عبر جسر سوتونغ، وتعتبر أيضاً مركزاً رائداً لصناعة منصات النفط البحرية وبناء السفن، وقاعدة لتصنيع الأدوات الكهربائية والعدد في تشيدونغ.',
    en: 'The world undisputed capital for home textiles and bedroom furnishings. Nantong twin clusters of Dieshiqiao and Zhihao produce over 60% of China bed linens, comforters, duvets, pillows, and luxury hotel textiles. Located directly across the Yangtze River from Shanghai, Nantong is also a world-class shipbuilding and offshore engineering hub, and a major power tool manufacturing base in Qidong.'
  },
  keyIndustries: [
    'home-textiles-bedding',
    'shipbuilding-marine-engineering',
    'power-tools-hardware',
    'chemical-fibers-fabrics',
    'advanced-materials'
  ],
  primaryProducts: {
    ar: [
      'أطقم الأسرة والمفارش والملاءات والوسائد واللحاف (Dieshiqiao Hub)',
      'بياضات ومفروشات ومناشف الفنادق الفاخرة (Hotel Linen)',
      'الأقمشة القطنية والمطرزة وخامات المنسوجات المنزلية',
      'العدد والآلات الكهربائية المحمولة والشنيورات (Qidong Power Tools)',
      'منصات الحفر البحرية ومعدات هندسة السفن العملاقة',
      'ألياف البوليستر والمنسوجات التقنية المتقدمة'
    ],
    en: [
      'Bedding Sets, Duvet Covers, Fitted Sheets & Quilts (Dieshiqiao)',
      'Luxury Hospitality Bed Linen, Comforters & Hotel Towels',
      'Embroidered Fabrics, Jacquard Weaving & Upholstery Materials',
      'Cordless Power Tools, Angle Grinders & Drills (Qidong Hub)',
      'Offshore Oil Platforms, Heavy Cargo Vessels & Marine Gear',
      'Functional Chemical Fiber Yarns & Technical Textiles'
    ]
  },
  bestFor: [
    'Home Textiles & Bedding Importers',
    'Hotel & Hospitality Procurement Managers',
    'Fabric & Textile Wholesalers',
    'Power Tools & Hardware Brand Distributors',
    'Marine Engineering & Heavy Equipment Buyers'
  ],
  districts: [
    {
      id: 'haimen-dieshiqiao-home-textiles',
      cityId: 'nantong',
      name: {
        ar: 'منطقة هايمن (عاصمة المفروشات الدولية - دي شيكياو)',
        en: 'Haimen District (Dieshiqiao Home Textile Capital)',
        zh: '海门区 (叠石桥)'
      },
      activityType: {
        ar: 'المركز التجاري الأضخم عالمياً لتجارة المنسوجات والمفروشات المنزلية؛ يضم أكثر من 10,000 مصنع ومتجر جملة لجميع مستلزمات غرف النوم والفنادق',
        en: 'World largest marketplace and manufacturing hub for home textiles, housing over 10,000 factories and wholesale supplier showrooms.'
      },
      mainProducts: [
        'أطقم ملاءات ومفارش السرير',
        'وسائد طبية ولحاف شتوي وصيفي',
        'مفروشات فندقية معتمدة'
      ],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'tongzhou-zhihao-textile-cluster',
      cityId: 'nantong',
      name: {
        ar: 'منطقة تونغتشو (سوق تشيهاو لخامات وأقمشة المفروشات)',
        en: 'Tongzhou District (Zhihao Fabric & Textile Sourcing)',
        zh: '通州区 (志浩)'
      },
      activityType: {
        ar: 'المورد الرئيسي للأقمشة الخام، التطريز، أقمشة الجاكار، وخامات حشو الألحفة والوسائد التي تغذي مصانع المفروشات حول العالم',
        en: 'Primary fabric sourcing and finishing center supplying jacquard, cotton prints, batting, and raw materials for global bedding manufacturers.'
      },
      mainProducts: [
        'أقمشة قطنية وجاكار للمفروشات',
        'إكسسوارات وسحابات وتطريز',
        'خامات حشو البوليستر والريش'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'qidong-power-tools-base',
      cityId: 'nantong',
      name: {
        ar: 'مدينة تشيدونغ (عاصمة الأدوات والعدد الكهربائية بالصين)',
        en: 'Qidong City (China Power Tools Manufacturing Capital)',
        zh: '启东市 (电动工具之乡)'
      },
      activityType: {
        ar: 'تنتج أكثر من 60% من الأدوات والعدد الكهربائية اليدوية بالصين (شنيورات، صواريخ تقطيع، مناشير، ماكينات سنفرة)',
        en: 'Produces over 60% of China portable power tools (cordless drills, rotary hammers, angle grinders, circular saws).'
      },
      mainProducts: [
        'شنيورات ومثاقب كهربائية',
        'صواريخ تقطيع المعادن والرخام',
        'بطاريات ومحركات العدد الكهربائية'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'chongchuan-urban-business-core',
      cityId: 'nantong',
      name: {
        ar: 'حي تشونغتشوان (قلب نانتونغ التجاري والفندقي)',
        en: 'Chongchuan District (Downtown Commercial & Hospitality Hub)',
        zh: '崇川区'
      },
      activityType: {
        ar: 'المركز الإداري والمالي لنانتونغ على ضفاف نهر يانغتسي، يضم الفنادق العالمية ومكاتب التصدير والمطاعم الحلال',
        en: 'Downtown administrative and business core featuring 5-star international hotels, trade trading houses, and halal dining.'
      },
      mainProducts: [
        'خدمات التصدير والتفتيش الدولي',
        'مراكز الفنادق والمؤتمرات',
        'مكاتب التخليص اللوجستي'
      ],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    }
  ],
  wholesaleMarkets: [
    {
      id: 'dieshiqiao-international-home-textile-city',
      cityId: 'nantong',
      name: {
        ar: 'مدينة دي شيكياو الدولية للمنسوجات والمفروشات المنزلية (Dieshiqiao)',
        en: 'Dieshiqiao International Home Textile Trade City',
        zh: '中国叠石桥国际家纺城'
      },
      type: 'Wholesale',
      category: 'Home & Kitchen',
      description: {
        ar: 'أضخم بورصة وسوق جملة في العالم للمفروشات؛ تغطي مساحة تتجاوز مليون متر مربع وتضم أكثر من 10,000 صالة عرض لمصانع أطقم الأسرة، البطاطين، والوسائد.',
        en: 'World largest dedicated home textile exchange with over 10,000 factory showrooms offering ready-to-ship and OEM customized bedding.'
      },
      address: {
        ar: 'بلدة سنجياو، حي هايمن، نانتونغ',
        en: 'Sanjiao Town, Haimen District, Nantong',
        zh: '南通市海门区叠石桥国际家纺产业园'
      },
      moqLevel: 'Low'
    },
    {
      id: 'zhihao-textile-raw-materials-market',
      cityId: 'nantong',
      name: {
        ar: 'سوق تشيهاو الدولي لأقمشة ومستلزمات المنسوجات المنزلية',
        en: 'Zhihao Home Textile Fabrics & Materials Market',
        zh: '中国南通志浩家纺面料市场'
      },
      type: 'Wholesale',
      category: 'Textiles & Apparel',
      description: {
        ar: 'السوق التخصصي الأكبر لتوريد أقمشة المفارش القطنية، أقمشة الميكروفايبر، أقمشة التول والمخمل، ومستلزمات الخياطة لمصانع المفروشات.',
        en: 'Premier textile market specializing in bedding fabrics, jacquards, reactive printed cottons, velvet, and textile accessories.'
      },
      address: {
        ar: 'حي تونغتشو، نانتونغ',
        en: 'Chuanjiang Town, Tongzhou District, Nantong',
        zh: '南通市通州区川姜镇志浩家纺城'
      },
      moqLevel: 'Medium'
    },
    {
      id: 'qidong-international-power-tools-market',
      cityId: 'nantong',
      name: {
        ar: 'مركز تشيدونغ الدولي لتجارة وتصدير العدد والأدوات الكهربائية',
        en: 'Qidong International Power Tools Trade Plaza',
        zh: '启东国际电动工具大厦交易中心'
      },
      type: 'Wholesale',
      category: 'Hardware & Tools',
      description: {
        ar: 'صالة العرض والمبيعات المركزية لمصانع تشيدونغ لإنتاج الشنيورات، صواريخ الجلخ، والمعدات اليدوية والكهربائية بأسعار التصدير المباشرة.',
        en: 'Central wholesale procurement hub for professional and DIY power tools, cordless battery equipment, and replacement armatures.'
      },
      address: {
        ar: 'بلدة تشنهاي، تشيدونغ، نانتونغ',
        en: 'Lvsi Town, Qidong City, Nantong',
        zh: '南通市启东市天汾电动工具产业园'
      },
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'dieshiqiao-home-textile-manufacturing-base',
      cityId: 'nantong',
      name: {
        ar: 'القاعدة الصناعية لتصنيع وتطريز المفروشات بـ دي شيكياو',
        en: 'Dieshiqiao Home Textile Industrial Manufacturing Park',
        zh: '叠石桥家纺智能制造产业集聚区'
      },
      clusterSpecialization: {
        ar: 'أكبر مجمع صناعي لحياكة وتطريز وتجهيز وتعبئة أطقم الأسرة، البطاطين المضغوطة، والألحفة الفندقية وتصدير الحاويات للشرق الأوسط',
        en: 'World largest automated quilting, computer embroidery, and packaging cluster for high-volume consumer and hotel bed sets.'
      },
      factoryTypes: [
        'Automated Computer Quilting Lines',
        'Bedding Cutting & Hemming Plants',
        'Vacuum Compression Packing Facilities'
      ],
      keyProducts: [
        'أطقم لحاف 4 و6 و8 قطع',
        'وسائد مايكروفايبر وميموري فوم',
        'بطاطين منسوجة ومفارش صيفية'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'qidong-power-tools-industrial-park',
      cityId: 'nantong',
      name: {
        ar: 'المجمع الصناعي لتصنيع الأدوات والمحركات الكهربائية بتشيدونغ',
        en: 'Qidong Power Tools & Motor Manufacturing Cluster',
        zh: '启东天汾电动工具特色产业基地'
      },
      clusterSpecialization: {
        ar: 'تصنيع المحركات الكهربائية، التروس الميكانيكية، قوالب الهياكل البلاستيكية للعدد، وتجميع أجهزة الحفر والقطع المحمولة',
        en: 'Complete supply-chain cluster for power tool armatures, commutators, gearboxes, injection-molded housings, and lithium packs.'
      },
      factoryTypes: [
        'Electric Motor Winding Factories',
        'Precision Gear CNC Machining Shops',
        'Finished Power Tool Assembly Lines'
      ],
      keyProducts: [
        'شنيورات لاسلكية ببطاريات الليثيوم',
        'صواريخ قطع المعادن (Angle Grinders)',
        'مناشير خشب ورخام كهربائية'
      ],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'nt-bedding-and-home-textiles',
      productName: {
        ar: 'المفارش وأطقم الأسرة والوسائد وبياضات الفنادق (Bedding & Home Textiles)',
        en: 'Bedding Sets, Comforters, Pillows & Hotel Linen'
      },
      industryCategory: 'home-textiles-bedding',
      whyThisCity: {
        ar: 'نانتونغ هي عاصمة المفروشات في العالم؛ مئات الآلاف من التصاميم الجاهزة للتسليم الفوري وسرعة فائقة في إنتاج العينات والتفصيل بحسب المقاسات العربية بأقل تكلفة ممكنة.',
        en: 'Nantong produces over half of the world bed sets and hotel linens, offering limitless designs, instant inventory, and customized sizing for Middle Eastern markets.'
      },
      mainManufacturingArea: {
        ar: 'دي شيكياو وتشيهوا، نانتونغ',
        en: 'Dieshiqiao (Haimen) & Zhihao (Tongzhou), Nantong'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'nt-cordless-power-tools',
      productName: {
        ar: 'العدد والأدوات الكهربائية اليدوية (Cordless & Electric Power Tools)',
        en: 'Professional & DIY Cordless Power Tools & Accessories'
      },
      industryCategory: 'power-tools-hardware',
      whyThisCity: {
        ar: 'تشيدونغ بنانتونغ تصنع معظم الأدوات الكهربائية للعلامات الصينية والعالمية بأسعار منافسة جداً وقدرة على طباعة وتخصيص العلامات التجارية (OEM).',
        en: 'Qidong produces over 60% of China power tools, offering full OEM branding, international safety certifications, and robust brushless motor technology.'
      },
      mainManufacturingArea: {
        ar: 'مدينة تشيدونغ، نانتونغ',
        en: 'Qidong City, Nantong'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  tradeFairs: [
    {
      id: 'china-dieshiqiao-home-textile-fair',
      name: {
        ar: 'معرض الصين (دي شيكياو) الدولي للمنسوجات والمفروشات المنزلية',
        en: 'China Dieshiqiao International Home Textile Expo',
        zh: '中国叠石桥国际家纺博览会'
      },
      industry: 'Bedding Sets, Hotel Linens, Quilts, Fabrics & Home Decor',
      venue: {
        ar: 'مركز دي شيكياو الدولي للمعارض، نانتونغ',
        en: 'Dieshiqiao International Exhibition Center, Haimen, Nantong',
        zh: '叠石桥国际家纺城展馆'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهري مارس وسبتمبر',
        en: 'Biannually in March & September'
      },
      bestFor: ['Bedding Importers', 'Hotel Procurement Executives', 'Home Decor Retailers']
    },
    {
      id: 'qidong-power-tools-expo',
      name: {
        ar: 'معرض تشيدونغ الدولي للعدد والأدوات والمعدات الكهربائية',
        en: 'China (Qidong) International Power Tools & Hardware Expo',
        zh: '中国·启东国际电动工具博览会'
      },
      industry: 'Power Tools, Hardware Accessories, Lithium Batteries & Hand Tools',
      venue: {
        ar: 'مركز المعارض الدولي بتشيدونغ، نانتونغ',
        en: 'Qidong International Exhibition Center, Nantong',
        zh: '启东国际会展中心'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر أكتوبر',
        en: 'Annually in October'
      },
      bestFor: ['Hardware Importers', 'Tool Wholesalers', 'Construction Supply Contractors']
    }
  ],
  logistics: {
    nearestAirports: [
      'Nantong Xingdong International Airport (NTG) - 15 km from downtown',
      'Shanghai Pudong International Airport (PVG) - 1.5 hrs by car via Sutong Bridge',
      'Shanghai Hongqiao International Airport (SHA) - 1.2 hrs by HSR'
    ],
    seaPorts: [
      'Nantong Port (ميناء نانتونغ النهري والبحري على مصب نهر يانغتسي)',
      'Shanghai Port (ميناء شنغهاي - البوابة التصديرية الرئيسية المجاورة على بعد ساعة ونصف)'
    ],
    highSpeedRailwayStations: [
      'Nantong Railway Station (南通站)',
      'Nantong West Railway Station (南通西站 - خط قطار سريع مباشر إلى شنغهاي في 40 دقيقة)',
      'Haimen Railway Station (海门站 - يخدم مباشرة أسواق دي شيكياو)'
    ],
    seaFreightSuitability: {
      ar: 'ممتازة للغاية؛ تقع نانتونغ مباشرة في مواجهة ميناء شنغهاي الأكبر عالمياً، مما يتيح نقل حاويات المفروشات والعدد مباشرة إلى أرصفة شنغهاي أو التصدير عبر ميناء نانتونغ بتكلفة لوجستية منخفضة.',
      en: 'Superb; directly facing Shanghai across the Yangtze River with seamless drayage to Shanghai deepwater container terminals or via Nantong River Port.'
    },
    airFreightSuitability: {
      ar: 'سهلة ومريحة عبر مطاري شنغهاي بودونغ وهونغتشياو لنقل عينات المفروشات والطلبات السريعة إلى الشرق الأوسط.',
      en: 'Convenient access to Shanghai Pudong (PVG) cargo hubs for airfreighting bedding samples and urgent consignments.'
    },
    primaryCargoRoutes: {
      ar: [
        'خط النقل البري السريع لحاويات المفروشات من مصانع دي شيكياو إلى أرصفة ميناء شنغهاي',
        'شحن الأدوات والعدد الكهربائية من تشيدونغ في حاويات مجمعة عبر ميناء شنغهاي',
        'خدمات البوارج النهرية لنقل الحاويات من ميناء نانتونغ إلى سفن المحيط في شنغهاي'
      ],
      en: [
        'Direct container trucking corridor from Dieshiqiao bedding plants to Shanghai Port berths',
        'Consolidated hardware container dispatch from Qidong factories via Shanghai',
        'Barge feeder logistics from Nantong Port connecting ocean-going vessels at Shanghai'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['مارس', 'أبريل', 'سبتمبر', 'أكتوبر'],
    suggestedStayDays: 2,
    weatherSummary: {
      ar: 'طقس معتدل وجميل في فصلي الربيع والخريف، دافئ صيفاً وبارد رطب شتاءً.',
      en: 'Pleasant subtropical maritime climate; spring and autumn offer the most comfortable conditions for factory audits.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة هايمن بالقرب من أسواق دي شيكياو لتوفير وقت التنقل اليومي بين مصانع المفروشات.',
        en: 'Haimen District near Dieshiqiao Market to maximize time inspecting bedding factories.'
      },
      {
        ar: 'وسط مدينة نانتونغ (حي تشونغتشوان) للفنادق الفاخرة وخيارات المطاعم الحلال.',
        en: 'Downtown Nantong (Chongchuan District) for luxury hospitality and certified halal dining.'
      }
    ],
    localTransportAdvice: {
      ar: 'القطار السريع يربط نانتونغ بشنغهاي في 40 دقيقة فقط؛ يُفضل استئجار سيارة بسائق لزيارة أسواق دي شيكياو وتشيدونغ المتباعدة.',
      en: 'HSR connects Nantong to Shanghai in only 40 minutes; hiring a private car with driver is recommended to tour distant textile and tool hubs.'
    },
    languageTips: {
      ar: 'المندرينية هي الأساسية؛ معظم أصحاب المصانع الكبرى في دي شيكياو لديهم فرق مبيعات تجيد الإنجليزية لتصدير المفروشات.',
      en: 'Mandarin is primary; leading Dieshiqiao home textile manufacturers employ English-speaking sales export teams.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'intercontinental-nantong',
        name: {
          ar: 'فندق إنتركونتيننتال نانتونغ (InterContinental Nantong)',
          en: 'InterContinental Nantong',
          zh: '南通洲际酒店'
        },
        category: { ar: 'فاخر 5 نجوم دولي', en: 'Luxury 5-Star International' },
        area: {
          ar: 'منطقة وولانغ، حي تشونغتشوان، نانتونغ',
          en: 'Wulang Scenic Area, Chongchuan District, Nantong'
        },
        address: {
          ar: '1 طريق بينجيانغ، حي تشونغتشوان، نانتونغ',
          en: '1 Binjiang Road, Chongchuan District, Nantong',
          zh: '南通市崇川区滨江路1号'
        },
        highlights: {
          ar: 'أرقى فندق بالمدينة بإطلالة مباشرة على نهر يانغتسي، مرافق أعمال متكاملة واستقبال تنفيذي لرجال الأعمال الدوليين',
          en: 'Premier luxury hotel in Nantong overlooking the Yangtze River with superior executive hospitality.'
        }
      },
      {
        id: 'haimen-dieshiqiao-grand-hotel',
        name: {
          ar: 'فندق هايمن دي شيكياو الدولي (Haimen Dieshiqiao Hotel)',
          en: 'Haimen Dieshiqiao International Hotel',
          zh: '海门叠石桥大酒店'
        },
        category: { ar: 'أعمال 4 نجوم', en: 'Business 4-Star' },
        area: {
          ar: 'بجوار سوق دي شيكياو للمفروشات، هايمن',
          en: 'Adjacent to Dieshiqiao Home Textile City, Haimen'
        },
        address: {
          ar: 'سوق دي شيكياو الدولي، هايمن، نانتونغ',
          en: 'Dieshiqiao Commercial Complex, Haimen, Nantong',
          zh: '南通市海门区叠石桥家纺城核心区'
        },
        highlights: {
          ar: 'الموقع الأفضل على الإطلاق لمشتري المفروشات، يقع داخل نطاق أسواق ومصانع دي شيكياو لتوفير الوقت',
          en: 'The most strategic location for bedding buyers, situated directly within the Dieshiqiao wholesale market zone.'
        }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'nantong-grand-mosque-halal-dining',
        name: {
          ar: 'مطعم مسجد نانتونغ التاريخي الحلال (Nantong Mosque Halal Restaurant)',
          en: 'Nantong Mosque Halal Restaurant',
          zh: '南通清真寺清真饭庄'
        },
        cuisineType: {
          ar: 'أطباق إسلامية صينية، لحم ضأن طازج، وأطباق المطبخ الشرقي الحلال',
          en: 'Traditional Chinese Muslim Braised Mutton & Local Dishes'
        },
        isHalal: true,
        address: {
          ar: 'بجوار مسجد نانتونغ، حي تشونغتشوان، نانتونغ',
          en: 'Adjacent to Nantong Mosque, Chongchuan District, Nantong',
          zh: '南通市崇川区南大街清真寺旁'
        },
        recommendedFor: {
          ar: 'وجبات حلال موثوقة لمستوردي المفروشات وإمكانية أداء الصلوات في مسجد المدينة',
          en: 'Certified halal lunches for textile buyers with prayer access at the central mosque.'
        }
      },
      {
        id: 'haimen-dieshiqiao-halal-lamb',
        name: {
          ar: 'مطعم هايمن دي شيكياو الإسلامي للحوم الحلال',
          en: 'Haimen Dieshiqiao Halal Muslim Restaurant',
          zh: '海门叠石桥伊穆斋清真饭庄'
        },
        cuisineType: {
          ar: 'لحوم ضأن وبقر حلال، حساء اللحم، ومعجنات هوي الساخنة',
          en: 'Halal Beef & Mutton Soup, BBQ & Fresh Buns'
        },
        isHalal: true,
        address: {
          ar: 'شارع دي شيكياو التجاري، هايمن، نانتونغ',
          en: 'Dieshiqiao Commercial Street, Haimen, Nantong',
          zh: '南通市海门区叠石桥商业步行街'
        },
        recommendedFor: {
          ar: 'غداء حلال سريع ومضمون أثناء جولات شراء وتفقد مصانع المفروشات بدي شيكياو',
          en: 'Convenient certified halal dining during busy sourcing rounds inside Dieshiqiao market.'
        }
      }
    ]
  },
  relatedCitySlugs: ['shanghai', 'suzhou', 'wuxi', 'changzhou', 'hangzhou'],
  relatedProductSlugs: [
    'home-textiles-bedding',
    'power-tools-hardware',
    'chemical-fibers-fabrics'
  ],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل نانتونغ التجاري والصناعي | مصانع المفروشات في دي شيكياو والعدد في تشيدونغ',
      en: 'Nantong Sourcing Guide | Dieshiqiao Home Textiles, Bedding & Qidong Power Tools'
    },
    description: {
      ar: 'دليل الاستيراد من نانتونغ: مصانع أطقم الأسرة والمفروشات في دي شيكياو وتونغتشو، مصانع الأدوات والعدد الكهربائية في تشيدونغ، الفنادق والمطاعم الحلال.',
      en: 'Complete Nantong sourcing guide: Bedding and home textiles in Dieshiqiao, portable power tools in Qidong, shipping, hotels, and certified halal dining.'
    }
  }
};
