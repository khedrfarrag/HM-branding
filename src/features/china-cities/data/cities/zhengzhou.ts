import { ICity } from '../../types';

export const zhengzhouCity: ICity = {
  id: 'zhengzhou',
  slug: 'zhengzhou',
  name: {
    ar: 'تشنغتشو (عاصمة تصنيع الآيفون والحافلات واللوجستيات المركزية)',
    en: 'Zhengzhou',
    zh: '郑州'
  },
  province: { ar: 'خنان', en: 'Henan' },
  region: 'Central China / Yellow River Basin',
  tier: 'tier-2',
  commercialImportanceScore: 93,
  heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
  description: {
    ar: 'عاصمة مقاطعة خنان وأهم عقدة لوجستية لشبكات السكك الحديدية والشحن الجوي في وسط الصين. تشتهر عالمياً بـ "مدينة الآيفون" لاحتضانها مجمع فوكسكون الأضخم عالمياً لتجميع أكثر من نصف هواتف Apple iPhone في العالم، ومقر مجموعة يوتونغ لصناعة الحافلات (Yutong Bus - أكبر صانع حافلات في العالم ومورد أساطيل النقل العام بالسعودية ومصر والإمارات)، وتتمتع بمجتمع إسلامي عريق لقومية هوي وثقافة طعام حلال غنية.',
    en: 'The capital of Henan province and Central China primary rail and air freight logistics crossroad. Globally renowned as "iPhone City" for housing the massive Foxconn complex that produces over 50% of Apple smartphones, the global headquarters of Yutong Bus (world leading commercial passenger bus manufacturer), and a vibrant centuries-old Hui Muslim culture with exceptional halal culinary traditions.'
  },
  keyIndustries: [
    'smart-electronics-smartphones',
    'commercial-buses-automotive',
    'cross-border-logistics-rail',
    'machinery-equipment',
    'food-processing-agriculture'
  ],
  primaryProducts: {
    ar: [
      'الهواتف الذكية والأجهزة اللوحية والإلكترونيات الاستهلاكية (Foxconn Hub)',
      'حافلات الركاب السياحية وحافلات النقل العام الكهربائية (Yutong Bus)',
      'قطع غيار ومستلزمات السيارات والشاحنات التجارية',
      'ماكينات التعدين ومعدات البناء وحفر الأنفاق (CRCHI / ZMJ)',
      'المنتجات الغذائية المجمدة وتكنولوجيا سلاسل التبريد',
      'خدمات الشحن عبر قطارات الشحن الصينية-الأوروبية المباشرة'
    ],
    en: [
      'Smartphones, Tablets & Consumer Electronics Hardware (Foxconn)',
      'Electric & Diesel Commercial Passenger Buses (Yutong Bus Group)',
      'Automotive Components, Fleet Replacement Parts & Suspensions',
      'Heavy Mining Machinery, Tunnel Boring & Construction Equipment',
      'Frozen Food Products & Cold Chain Logistics Technology',
      'Direct Transcontinental Rail Freight to Central Asia & Europe'
    ]
  },
  bestFor: [
    'Consumer Electronics & Smartphone Accessory Importers',
    'Public Transit & Commercial Fleet Bus Buyers',
    'Heavy Machinery & Construction Hardware Contractors',
    'Cross-Border E-Commerce & Intermodal Logistics Operators',
    'Central China Regional Wholesale Buyers'
  ],
  districts: [
    {
      id: 'airport-economy-zone-foxconn',
      cityId: 'zhengzhou',
      name: {
        ar: 'منطقة اقتصاد مطار تشنغتشو ومجمع فوكسكون (ZAEZ / Foxconn)',
        en: 'Zhengzhou Airport Economy Zone (ZAEZ & Foxconn Tech City)',
        zh: '郑州航空港经济综合实验区 (富士康)'
      },
      activityType: {
        ar: 'المنطقة الجمركية الشاملة التي تضم أضخم مجمع تصنيع للهواتف الذكية في العالم (أكثر من 200,000 عامل) ومستودعات الشحن الجوي الدولي',
        en: 'World largest smartphone manufacturing cluster hosting Foxconn mega-complex and bonded air freight distribution hubs.'
      },
      mainProducts: [
        'هواتف ذكية وأجهزة لوحية',
        'مكونات شاشات وبطاريات إلكترونية',
        'شحنات الشحن الجوي السريع'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'guancheng-hui-historic-district',
      cityId: 'zhengzhou',
      name: {
        ar: 'حي قوانتشنغ الذاتي الحكم لقومية هوي والمسجد الكبير',
        en: 'Guancheng Hui District & Historic Beida Mosque',
        zh: '管城回族区 (北大清真寺)'
      },
      activityType: {
        ar: 'القلب التاريخي للمجتمع الإسلامي في تشنغتشو، يضم مسجد بيدا التراثي (المبني في عهد أسرة مينغ) وأشهر شوارع الأغذية واللحوم الحلال',
        en: 'Historic center of Zhengzhou Hui Muslim population, home to the Ming-dynasty Beida Mosque and traditional halal culinary streets.'
      },
      mainProducts: [
        'لحوم ضأن وبقر حلال طازجة',
        'مأكولات شعبية وتوابل إسلامية',
        'أسواق السلع التراثية'
      ],
      tradeFocus: 'Retail',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'jinshui-commercial-core-zhengdong',
      cityId: 'zhengzhou',
      name: {
        ar: 'حي جينشوي ومنطقة تشنغدونغ الجديدة (CBD)',
        en: 'Jinshui District & Zhengdong New District (CBD)',
        zh: '金水区 / 郑东新区 (CBD)'
      },
      activityType: {
        ar: 'المركز المالي والإداري الأحدث، يضم برج الذرة الشهير والفنادق العالمية الفاخرة ومراكز المؤتمرات والمعارض الدولية',
        en: 'Ultra-modern financial and business core featuring iconic Millennium Tower, luxury 5-star hotels, and international exhibition halls.'
      },
      mainProducts: [
        'مكاتب الشركات والمؤسسات المالية',
        'خدمات الاستشارات الاستيرادية',
        'مراكز المؤتمرات والصفقات'
      ],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'xingyang-yutong-bus-industrial-base',
      cityId: 'zhengzhou',
      name: {
        ar: 'المجمع الصناعي لحافلات يوتونغ والمركبات التجارية',
        en: 'Yutong Commercial Bus Industrial Manufacturing Base',
        zh: '宇通客车高端制造基地'
      },
      activityType: {
        ar: 'أكبر مجمع لتصنيع وتجميع الحافلات في العالم؛ إنتاج وتصدير الحافلات السياحية والنقل العام والمركبات الكهربائية',
        en: 'World largest bus manufacturing facility producing electric, hybrid, and diesel commercial transit coaches exported globally.'
      },
      mainProducts: [
        'حافلات سياحية ونقل عام فاخرة',
        'حافلات كهربائية عديمة الانبعاثات',
        'قطع غيار أساطيل الحافلات'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    }
  ],
  wholesaleMarkets: [
    {
      id: 'zhengzhou-auto-parts-wholesale-city',
      cityId: 'zhengzhou',
      name: {
        ar: 'مدينة تشنغتشو الدولية لقطع غيار ومستلزمات السيارات',
        en: 'Zhengzhou International Auto Parts Wholesale City',
        zh: '郑州国际汽配五金城'
      },
      type: 'Wholesale',
      category: 'Automotive & Hardware',
      description: {
        ar: 'أكبر مركز جملة في وسط الصين لقطع غيار الشاحنات والحافلات والسيارات، فلاتر المحركات، أنظمة الفرامل، والكماليات.',
        en: 'Central China leading wholesale market for commercial bus/truck replacement parts, suspension systems, and automotive consumables.'
      },
      address: {
        ar: 'طريق حديقة تشنغتشو اللوجستية، تشنغتشو',
        en: 'Auto Logistics Avenue, Guancheng District, Zhengzhou',
        zh: '郑州市管城区中州大道汽配产业园'
      },
      moqLevel: 'Medium'
    },
    {
      id: 'zhengzhou-wulipu-hardware-market',
      cityId: 'zhengzhou',
      name: {
        ar: 'سوق وولي بو للعدد والأدوات والمعدات الميكانيكية',
        en: 'Wulipu Hardware & Electromechanical Wholesale Market',
        zh: '郑州五里堡五金机电批发市场'
      },
      type: 'Wholesale',
      category: 'Hardware & Tools',
      description: {
        ar: 'سوق الجملة المعتمد للعدد الصناعية، ماكينات اللحام، المضخات، والمعدات الكهروميكانيكية لمشاريع البناء.',
        en: 'Established wholesale center for industrial hardware tools, electric motors, water pumps, and construction electromechanical gear.'
      },
      address: {
        ar: 'طريق هانغهاي، حي قوانتشنغ، تشنغتشو',
        en: 'Hanghai Road, Guancheng District, Zhengzhou',
        zh: '郑州市管城区航海路五里堡'
      },
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'foxconn-zhengzhou-tech-park',
      cityId: 'zhengzhou',
      name: {
        ar: 'مجمع فوكسكون تشنغتشو لصناعة الهواتف الذكية (Foxconn City)',
        en: 'Foxconn Zhengzhou Smart Terminal Mega-Industrial Complex',
        zh: '富士康郑州科技园'
      },
      clusterSpecialization: {
        ar: 'أكبر مصنع للهواتف الذكية في العالم؛ يجمع أكثر من نصف هواتف الآيفون بالعالم بمئات خطوط الإنتاج الآلية والروبوتات الدقيقة',
        en: 'World flagship smartphone assembly facility assembling over half of all global iPhones with automated SMT and robotic testing.'
      },
      factoryTypes: [
        'Surface Mount Technology (SMT) Lines',
        'Precision Metal Stamping & CNC Milling Shops',
        'Final Electronic Assembly & Testing Facilities'
      ],
      keyProducts: [
        'هواتف ذكية وأجهزة حوسبة كفية',
        'كاميرات ومجسات إلكترونية دقيقة',
        'ملحقات الشحن والبطاريات الذكية'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'yutong-bus-mega-industrial-cluster',
      cityId: 'zhengzhou',
      name: {
        ar: 'المجمع الصناعي لمركبات وحافلات يوتونغ (Yutong Bus Complex)',
        en: 'Yutong Bus Intelligent Vehicle Manufacturing Cluster',
        zh: '宇通客车新能源智能制造产业园'
      },
      clusterSpecialization: {
        ar: 'أكبر مجمع تجميع حافلات في العالم بقدرة إنتاجية تتجاوز 70,000 حافلة سنوياً وتصدير واسع لجميع الدول العربية',
        en: 'World largest bus production facility with an annual capacity of over 70,000 coaches, dominant across Middle Eastern public transit.'
      },
      factoryTypes: [
        'Cathodic Electrodeposition Coating Lines',
        'Robotic Chassis & Body Welding Cells',
        'EV High-Voltage Battery Packaging Plants'
      ],
      keyProducts: [
        'حافلات سياحية فاخرة وحافلات مطارات',
        'حافلات نقل عام كهربائية وهجينة',
        'مركبات تجارية متخصصة'
      ],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'zz-yutong-commercial-buses',
      productName: {
        ar: 'حافلات الركاب السياحية والنقل العام (Commercial Transit Buses)',
        en: 'Electric & Diesel Commercial Passenger & Tourist Buses'
      },
      industryCategory: 'commercial-buses-automotive',
      whyThisCity: {
        ar: 'تشنغتشو هي المقر الرئيسي لمجموعة يوتونغ العالمية، وتوفر أفضل حافلات نقل ركاب معتمدة للمواصفات الخليجية والمصرية بأسعار تنافسية ودعم قطع غيار دائم.',
        en: 'Zhengzhou is home to Yutong Bus, offering top-tier GCC-compliant transit coaches with dedicated Middle Eastern after-sales and spare parts support.'
      },
      mainManufacturingArea: {
        ar: 'مجمع يوتونغ الصناعي، تشنغتشو',
        en: 'Yutong Industrial Park, Zhengzhou'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'zz-smartphone-electronics-hardware',
      productName: {
        ar: 'الهواتف الذكية ومكوناتها وملحقاتها (Smartphones & Electronics)',
        en: 'Smartphones, Tablets, Electronic Accessories & Components'
      },
      industryCategory: 'smart-electronics-smartphones',
      whyThisCity: {
        ar: 'تنتج تشنغتشو أكثر من نصف هواتف العالم وتضم سلاسل إمداد الإلكترونيات الاستهلاكية الأسرع شحناً عبر مطارها الدولي.',
        en: 'Zhengzhou assembles over half of global premium smartphones, supported by lightning-fast air cargo logistics via its airport economic zone.'
      },
      mainManufacturingArea: {
        ar: 'منطقة مطار تشنغتشو (ZAEZ)',
        en: 'Zhengzhou Airport Economy Zone (Foxconn Base)'
      },
      wholesaleAvailability: 'Medium',
      exportSuitability: 'High'
    }
  ],
  tradeFairs: [
    {
      id: 'china-zhengzhou-international-logistics-fair',
      name: {
        ar: 'معرض الصين (تشنغتشو) الدولي للخدمات اللوجستية والشحن عبر القارات',
        en: 'China (Zhengzhou) International Logistics & Supply Chain Expo',
        zh: '中国·郑州国际物流博览会'
      },
      industry: 'Multimodal Transport, Rail Freight, Air Cargo & Cold Chain Logistics',
      venue: {
        ar: 'مركز تشنغتشو الدولي للمؤتمرات والمعارض، تشنغدونغ الجديدة',
        en: 'Zhengzhou International Convention & Exhibition Centre (ZZICEC)',
        zh: '郑州国际会展中心'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر مايو',
        en: 'Annually in May'
      },
      bestFor: ['Logistics Directors', 'Rail Freight Forwarders', 'Supply Chain Managers']
    },
    {
      id: 'zhengzhou-industrial-equipment-expo',
      name: {
        ar: 'معرض تشنغتشو الدولي للمعدات والآلات الصناعية وتكنولوجيا التصنيع',
        en: 'Zhengzhou International Industrial Equipment & Machinery Expo',
        zh: '郑州国际工业装备博览会'
      },
      industry: 'CNC Machine Tools, Industrial Robotics, Automation & Hardware',
      venue: {
        ar: 'مركز تشنغتشو الدولي للمؤتمرات والمعارض (ZZICEC)',
        en: 'Zhengzhou International Convention & Exhibition Centre',
        zh: '郑州国际会展中心'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر مارس',
        en: 'Annually in March'
      },
      bestFor: ['Machinery Importers', 'Automotive Tooling Engineers', 'Factory Owners']
    }
  ],
  logistics: {
    nearestAirports: [
      'Zhengzhou Xinzheng International Airport (CGO) - Top air cargo airport in Central China with direct Middle East cargo routes'
    ],
    seaPorts: [
      'Qingdao Port & Lianyungang Port (مرتبطان بقطارات شحن حديدية بحرية سريعة تنقل الحاويات في ساعات إلى أرصفة المحيط)'
    ],
    highSpeedRailwayStations: [
      'Zhengzhou East Railway Station (郑州东站 - أكبر محطة تقاطع قطارات فائقة السرعة على شكل حرف X في الصين: خطوط بكين-غوانزو ولانتشو-ليانيونغانغ)',
      'Zhengzhou Railway Station (郑州站 - المحطة التاريخية الكبرى في قلب المدينة)'
    ],
    seaFreightSuitability: {
      ar: 'ممتازة عبر الموانئ الجافة؛ تنطلق قطارات الحاويات المباشرة من ميناء تشنغتشو الجاف إلى ميناء تشينغداو البحري وميناء تيانجين للشحن البحري السريع.',
      en: 'High-efficiency sea-rail intermodal freight corridors linking Zhengzhou dry port to Qingdao and Tianjin seaports.'
    },
    airFreightSuitability: {
      ar: 'استثنائية؛ مطار شينتشنغ هو أحد أكبر 5 مطارات شحن في الصين ومحطة رئيسية لرحلات شحن الإلكترونيات والهواتف لجميع أنحاء العالم.',
      en: 'Exceptional; Xinzheng Airport (CGO) is a top-5 national cargo hub operating direct freighter charters worldwide.'
    },
    primaryCargoRoutes: {
      ar: [
        'قطار الشحن السريع الصيني-الأوروبي (تشنغتشو - آسيا الوسطى / أوروبا)',
        'الشحن الجوي فائق السرعة للإلكترونيات عبر مطار شينتشنغ الدولي',
        'خط النقل الحديدي المباشر لحاويات التصدير إلى موانئ تشينغداو وتيانجين'
      ],
      en: [
        'China-Europe Railway Express direct transcontinental rail link from Zhengzhou',
        'Direct air cargo freighter network connecting CGO to Dubai, Riyadh, and Frankfurt',
        'Dedicated sea-rail intermodal container corridors to Qingdao Port berths'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['أبريل', 'مايو', 'سبتمبر', 'أكتوبر'],
    suggestedStayDays: 2,
    weatherSummary: {
      ar: 'مناخ قاري معتدل وممتع في فصلي الربيع والخريف، دافئ صيفاً وبارد جاف شتاءً.',
      en: 'Four distinct seasons; autumn (September-October) and spring (April-May) provide pleasant sunny weather.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة تشنغدونغ الجديدة (CBD) بالقرب من محطة القطار السريع الشرقية وبرج الذرة وفنادق 5 نجوم.',
        en: 'Zhengdong New District (CBD) near Zhengzhou East HSR station and luxury business hospitality.'
      },
      {
        ar: 'حي قوانتشنغ للمسلمين للاستمتاع بالطعام الحلال التاريخي وقرب المسجد الكبير.',
        en: 'Guancheng Hui District for historic Islamic cultural heritage and abundant certified halal dining.'
      }
    ],
    localTransportAdvice: {
      ar: 'مترو تشنغتشو يربط المطار ومحطة القطار السريع الشرقية ووسط المدينة بانتظام؛ Didi متاح دائماً للتنقل.',
      en: 'Zhengzhou Metro connects Xinzheng Airport, East HSR station, and downtown; Didi is prompt and economical.'
    },
    languageTips: {
      ar: 'المندرينية هي اللغة السائدة؛ في الفنادق الكبرى ومصانع يوتونغ الكبرى تتوفر الإنجليزية بشكل جيد.',
      en: 'Mandarin is spoken universally; English is well understood at international hotels and Yutong corporate export offices.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'jw-marriott-hotel-zhengzhou',
        name: {
          ar: 'فندق جي دبليو ماريوت تشنغتشو (JW Marriott Zhengzhou)',
          en: 'JW Marriott Hotel Zhengzhou',
          zh: '郑州绿地JW万豪酒店'
        },
        category: { ar: 'ألترا فاخر 5 نجوم', en: 'Ultra-Luxury 5-Star' },
        area: {
          ar: 'برج الذرة، منطقة تشنغدونغ الجديدة (CBD)',
          en: 'Millennium Tower, Zhengdong New District (CBD)'
        },
        address: {
          ar: 'برج الألفية الأخضر، حي جينشوي، تشنغتشو',
          en: 'Millennium Royal Plaza, Zhengdong New District, Zhengzhou',
          zh: '郑州市金水区郑东新区CBD千玺广场'
        },
        highlights: {
          ar: 'الفندق الأشهر وأعلى معلم في وسط الصين، يقع داخل برج الذرة الذهبي بإطلالة بانورامية كاملة على البحيرة والمدينة',
          en: 'Iconic luxury landmark inside the Millennium Tower (Big Corn) offering breathtaking views and world-class executive amenities.'
        }
      },
      {
        id: 'sheraton-grand-zhengzhou-hotel',
        name: {
          ar: 'فندق شيراتون جراند تشنغتشو (Sheraton Grand Zhengzhou)',
          en: 'Sheraton Grand Zhengzhou Hotel',
          zh: '郑州美盛喜来登大酒店'
        },
        category: { ar: 'أعمال فاخر 5 نجوم', en: 'Luxury Business 5-Star' },
        area: {
          ar: 'بجوار محطة قطار تشنغتشو الشرقية فائقة السرعة',
          en: 'Adjacent to Zhengzhou East High-Speed Railway Station'
        },
        address: {
          ar: '33 طريق جينغكاي، حي جينشوي، تشنغتشو',
          en: '33 Jinshui East Road, Zhengdong New District, Zhengzhou',
          zh: '郑州市金水区金水东路33号'
        },
        highlights: {
          ar: 'الموقع الأفضل لرجال الأعمال المسافرين بالقطار السريع، غرف فسيحة ومراكز اجتماعات راقية',
          en: 'Ideal location adjacent to Zhengzhou East HSR station for high-speed intercity business travel.'
        }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'zhengzhou-beida-mosque-halal-quarter',
        name: {
          ar: 'مطاعم شارع مسجد بيدا الكبير الحلال بتشنغتشو',
          en: 'Zhengzhou Beida Mosque Historic Halal Food Quarter',
          zh: '郑州北大清真寺清真美食街'
        },
        cuisineType: {
          ar: 'أشهر أطباق خنان الحلال: حساء لحم الضأن المتبل (Huimian)، واللحم البقري المحمر',
          en: 'Authentic Henan Halal Mutton Huimian Noodles & Braised Beef'
        },
        isHalal: true,
        address: {
          ar: 'شارع المسجد الكبير، حي قوانتشنغ، تشنغتشو',
          en: 'Beida Mosque Street, Guancheng Hui District, Zhengzhou',
          zh: '郑州市管城回族区清真寺街北大寺旁'
        },
        recommendedFor: {
          ar: 'تناول أشهى أطباق النودلز الحلال التاريخية بلحم الضأن وأداء الصلوات في المسجد المبني في عهد أسرة مينغ',
          en: 'Tasting Zhengzhou most iconic halal lamb Huimian noodles with prayer access at the historic Ming-era Grand Mosque.'
        }
      },
      {
        id: 'xiaozhang-halal-lamb-zhengzhou',
        name: {
          ar: 'مطعم شياو تشانغ التراثي للحوم الحلال',
          en: 'Xiao Zhang Halal Mutton & Beef Restaurant',
          zh: '小张清真牛羊肉庄'
        },
        cuisineType: {
          ar: 'لحوم ضأن مسلوقة ومشوية، كباب، وفطائر هوي المحشوة باللحم الحلال',
          en: 'Tender Boiled Mutton, Lamb Skewers & Stuffed Halal Meat Pies'
        },
        isHalal: true,
        address: {
          ar: 'طريق تشنغشينغ، حي قوانتشنغ، تشنغتشو',
          en: 'Zhengxing Road, Guancheng District, Zhengzhou',
          zh: '郑州市管城区城东路商圈'
        },
        recommendedFor: {
          ar: 'وجبات عشاء حلال طازجة وموثوقة لمستوردي الحافلات والمعدات',
          en: 'Hearty certified halal dinners for bus fleet buyers and machinery delegations.'
        }
      }
    ]
  },
  relatedCitySlugs: ['wuhan', 'beijing', 'cangzhou', 'qingdao', 'chongqing'],
  relatedProductSlugs: [
    'smart-electronics-smartphones',
    'commercial-buses-automotive',
    'cross-border-logistics-rail',
    'machinery'
  ],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل تشنغتشو التجاري والصناعي | حافلات يوتونغ، إلكترونيات فوكسكون، واللوجستيات',
      en: 'Zhengzhou Sourcing Guide | Yutong Bus, Foxconn Electronics & Halal Dining'
    },
    description: {
      ar: 'دليل الاستيراد والتجارة في تشنغتشو: مصانع حافلات يوتونغ، مجمع فوكسكون للهواتف الذكية، أسواق قطع غيار السيارات، شبكات السكك الحديدية، الفنادق والمطاعم الحلال.',
      en: 'Complete Zhengzhou sourcing guide: Yutong commercial buses, Foxconn smartphone manufacturing, auto parts wholesale, rail logistics, hotels, and Beida Mosque halal dining.'
    }
  }
};
