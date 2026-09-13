import { ICity } from '../../types';

export const changzhouCity: ICity = {
  id: 'changzhou',
  slug: 'changzhou',
  name: {
    ar: 'تشانغتشو (عاصمة الطاقة الجديدة وبطاريات الليثيوم وأرضيات SPC)',
    en: 'Changzhou',
    zh: '常州'
  },
  province: { ar: 'جيانغسو', en: 'Jiangsu' },
  region: 'East China / Yangtze River Delta',
  tier: 'tier-2',
  commercialImportanceScore: 90,
  heroImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  description: {
    ar: 'عاصمة الطاقة الجديدة في الصين (China New Energy Capital) وأحد أسرع المراكز الصناعية نمواً في دلتا نهر يانغتسي. تحتضن مقرات عمالقة الطاقة الشمسية (Trina Solar) وبطاريات الليثيوم (CALB وSVOLT ومصانع CATL)، وتضم مصانع سيارات Li Auto الكهربائية، إلى جانب كونها عاصمة صناعة وتصدير أرضيات الفينيل والـ SPC والأرضيات الخشبية في هنغلين (横林) التي تغطي أكثر من 40% من صادرات الصين.',
    en: 'China official "New Energy Capital" and a powerhouse manufacturing city in the Yangtze River Delta. Home to solar photovoltaic leader Trina Solar, lithium battery giants CALB and SVOLT, the Li Auto mega-EV plant, and Henglin—the undisputed global capital for SPC luxury vinyl tile (LVT) and laminate flooring exporting to over 150 countries.'
  },
  keyIndustries: [
    'new-energy-batteries',
    'solar-photovoltaic',
    'spc-laminate-flooring',
    'industrial-robotics',
    'smart-ev-automotive',
    'textile-machinery'
  ],
  primaryProducts: {
    ar: [
      'بطاريات الليثيوم أيون وأنظمة تخزين الطاقة (CALB / SVOLT)',
      'ألواح وخلايا الطاقة الشمسية الكهروضوئية (Trina Solar Hub)',
      'أرضيات الفينيل المقاومة للماء SPC وأرضيات الباركيه (Henglin)',
      'السيارات الكهربائية الذكية ومكوناتها (Li Auto Mega-Plant)',
      'روبوتات الأتمتة الصناعية ومخفضات السرعة الدقيقة',
      'ماكينات النسيج الدقيقة وقطع غيار خطوط الإنتاج'
    ],
    en: [
      'Lithium-Ion EV Batteries & Energy Storage Systems (ESS)',
      'Solar Photovoltaic Modules, Cells & Inverters (Trina Solar)',
      'Rigid Core SPC Flooring, LVT & Laminate Wood Flooring (Henglin)',
      'Smart Electric Vehicles & Advanced Drive Units (Li Auto)',
      'Industrial Automation Robotics & Precision Speed Reducers',
      'High-Speed Warp Knitting & Textile Finishing Machinery'
    ]
  },
  bestFor: [
    'Solar & Renewable Energy Sourcing Importers',
    'Lithium Battery & Energy Storage Contractors',
    'Flooring, SPC & Building Material Wholesalers',
    'EV Component & Smart Vehicle Sourcing Buyers',
    'Industrial Robotics & Machinery Buyers'
  ],
  districts: [
    {
      id: 'wujin-new-energy-auto-hub',
      cityId: 'changzhou',
      name: {
        ar: 'حي ووجين (وادي الطاقة الجديدة ومصانع السيارات الذكية)',
        en: 'Wujin District (New Energy & Smart EV Hub)',
        zh: '武进区'
      },
      activityType: {
        ar: 'المركز الصناعي الأكبر في تشانغتشو، يضم مصانع سيارات Li Auto ومقرات كبرى شركات بطاريات الليثيوم والروبوتات الصناعية',
        en: 'Changzhou core manufacturing base hosting Li Auto mega assembly plants, EV battery suppliers, and robotics industrial parks.'
      },
      mainProducts: [
        'سيارات كهربائية ذكية (Li Auto)',
        'حزم بطاريات الليثيوم للمركبات',
        'أذرع روبوتية صناعية'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'henglin-spc-flooring-capital',
      cityId: 'changzhou',
      name: {
        ar: 'بلدة هنغلين (عاصمة أرضيات الفينيل والـ SPC في الصين والعالم)',
        en: 'Henglin Town (Global Capital of SPC & Laminate Flooring)',
        zh: '横林镇 (中国强化木地板之都)'
      },
      activityType: {
        ar: 'تنتج وتصدر أكثر من 40% من أرضيات الـ SPC والأرضيات الخشبية المضغوطة بالصين، وتضم أكثر من 400 مصنع لأرضيات الديكور الفاخرة',
        en: 'Produces over 40% of China laminate and rigid core SPC waterproof vinyl flooring with 400+ specialized manufacturing mills.'
      },
      mainProducts: [
        'أرضيات فينيل صلبة SPC عازلة للماء',
        'باركيه خشب مضغوط Laminate',
        'ألواح تكسية الجدران الداخلية'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'xinbei-photovoltaic-chemical-zone',
      cityId: 'changzhou',
      name: {
        ar: 'منطقة شينبي (عاصمة الطاقة الشمسية والصناعات المتقدمة)',
        en: 'Xinbei District (Trina Solar & High-Tech Zone)',
        zh: '新北区 (天合光能)'
      },
      activityType: {
        ar: 'مقر ومصانع شركة Trina Solar العالمية للألواح الكهروضوئية، ومجمعات الصناعات الكيميائية والمعدات الطبية المتقدمة',
        en: 'Global headquarters and gigafactories for Trina Solar, smart microgrid labs, and precision mechanical engineering clusters.'
      },
      mainProducts: [
        'ألواح طاقة شمسية عالية الكفاءة',
        'محولات طاقة شمسية وأنظمة تتبع',
        'معدات كيميائية ومواد مركبة'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'tianning-urban-commercial-center',
      cityId: 'changzhou',
      name: {
        ar: 'حي تيانينغ والمركز التجاري التاريخي (معبد تيانينغ والمسجد)',
        en: 'Tianning District (Downtown Commercial & Cultural Core)',
        zh: '天宁区'
      },
      activityType: {
        ar: 'قلب المدينة التاريخي والتجاري، يضم معبد تيانينغ البوذي الشهير، الفنادق العالمية، ومسجد تشانغتشو والمطاعم الحلال',
        en: 'Downtown cultural and commercial hub, featuring international business hotels, Changzhou Mosque, and authentic halal restaurants.'
      },
      mainProducts: [
        'مكاتب التجارة والخدمات المالية',
        'مراكز التسوق والفنادق الراقية',
        'مطاعم الضيافة الإسلامية'
      ],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    }
  ],
  wholesaleMarkets: [
    {
      id: 'henglin-international-flooring-market',
      cityId: 'changzhou',
      name: {
        ar: 'سوق هنغلين الدولي لتجارة وتصدير أرضيات الـ SPC والباركيه',
        en: 'Henglin International Flooring Procurement & Expo Center',
        zh: '中国常州横林国际地板城'
      },
      type: 'Wholesale',
      category: 'Building Materials & Flooring',
      description: {
        ar: 'أضخم تجمع تجاري في العالم لأرضيات الفينيل المقاومة للماء (SPC)، الأرضيات الخشبية المضغوطة (Laminate)، وحشوات العزل الصوتي والحراري بأسعار المصنع المباشرة.',
        en: 'World largest wholesale center for rigid core SPC vinyl flooring, HDF laminate wood flooring, luxury vinyl tiles, and underlayment materials.'
      },
      address: {
        ar: 'بلدة هنغلين، حي ووجين، تشانغتشو',
        en: 'Henglin Town, Wujin District, Changzhou',
        zh: '常州市武进区横林镇顺通路'
      },
      moqLevel: 'Medium'
    },
    {
      id: 'changzhou-new-energy-components-mart',
      cityId: 'changzhou',
      name: {
        ar: 'مركز تشانغتشو الدولي لمعدات وتجهيزات الطاقة الجديدة والبطاريات',
        en: 'Changzhou New Energy Equipment & Battery Sourcing Mart',
        zh: '常州新能源产业装备展示交易中心'
      },
      type: 'Factory Showroom',
      category: 'New Energy & Electronics',
      description: {
        ar: 'المعرض الدائم لمصانع بطاريات الليثيوم، كابلات وأنظمة تخزين الطاقة الشمسية، ومحطات شحن السيارات الكهربائية.',
        en: 'Dedicated technology mart showcasing lithium battery packs, solar inverter hardware, EV charging stations, and storage enclosures.'
      },
      address: {
        ar: 'المنطقة التنموية، حي ووجين، تشانغتشو',
        en: 'Wujin High-Tech Industrial Zone, Changzhou',
        zh: '常州市武进区武宜中路新能源展示中心'
      },
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'henglin-spc-flooring-manufacturing-park',
      cityId: 'changzhou',
      name: {
        ar: 'المنطقة الصناعية لإنتاج أرضيات الـ SPC بـ هنغلين',
        en: 'Henglin SPC Flooring & Eco-Board Industrial Park',
        zh: '横林绿色家居与SPC地板工业园'
      },
      clusterSpecialization: {
        ar: 'تنتج أكثر من 200 مليون متر مربع من أرضيات الـ SPC والبلاستيك الحجري سنوياً بجميع طبقات الحماية (0.3mm/0.5mm) ونظام القفل Unilin النقر السريع',
        en: 'Produces over 200 million square meters of SPC vinyl flooring annually with Unilin click systems, acoustic IXPE backings, and UV wear layers.'
      },
      factoryTypes: [
        'SPC Extrusion Board Production Lines',
        'Hot-Press UV Coating & Annealing Plants',
        'Precision Slotting & Click-Lock Profilers'
      ],
      keyProducts: [
        'أرضيات SPC عازلة للماء 4mm/5mm/6mm',
        'أرضيات باركيه خشب مضغوط AC3/AC4',
        'ألواح جدران ديكورية ثلاثية الأبعاد'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'wujin-battery-new-energy-cluster',
      cityId: 'changzhou',
      name: {
        ar: 'المجمع الصناعي لبطاريات الليثيوم والمركبات بووجين',
        en: 'Wujin Power Battery & New Energy Vehicle Industrial Complex',
        zh: '武进新能源动力电池产业集群'
      },
      clusterSpecialization: {
        ar: 'مجمع تصنيع خلايا بطاريات الليثيوم أيون وفوسفات الحديد الليثيوم (LFP)، أنظمة إدارة البطاريات (BMS)، وتجميع السيارات الكهربائية',
        en: 'World-leading cluster for prismatic and blade lithium battery cells, battery management systems (BMS), and EV integration.'
      },
      factoryTypes: [
        'Lithium Cell Automated Gigafactories',
        'BMS Circuit Packaging Plants',
        'Energy Storage Cabinet Fabricators'
      ],
      keyProducts: [
        'خلايا بطاريات LiFePO4 وNMC',
        'أنظمة تخزين الطاقة المنزلية والتجارية (ESS)',
        'محطات شحن سريع للسيارات'
      ],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'cz-spc-waterproof-flooring',
      productName: {
        ar: 'أرضيات الفينيل والـ SPC المقاومة للماء (Rigid Core SPC Flooring)',
        en: 'Waterproof Rigid Core SPC Vinyl Flooring & LVT Planks'
      },
      industryCategory: 'spc-laminate-flooring',
      whyThisCity: {
        ar: 'هنغلين بتشانغتشو هي عاصمة الأرضيات في العالم؛ تقدم مئات النقشات الخشبية والرخامية بأسعار تصدير مباشرة وقدرة على شحن مئات الحاويات شهرياً للمشاريع العقارية.',
        en: 'Henglin is the world #1 source for SPC vinyl flooring, offering realistic wood/stone textures, certified low-VOC emissions, and massive production capacity.'
      },
      mainManufacturingArea: {
        ar: 'بلدة هنغلين، ووجين',
        en: 'Henglin Town, Wujin District'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'cz-solar-pv-panels-storage',
      productName: {
        ar: 'ألواح الطاقة الشمسية وأنظمة بطاريات التخزين (Solar PV & Energy Storage)',
        en: 'Tier-1 Solar Photovoltaic Panels & Lithium Energy Storage'
      },
      industryCategory: 'solar-photovoltaic',
      whyThisCity: {
        ar: 'تضم تشانغتشو مقر شركة Trina Solar ومصانع كبرى بطاريات الطاقة الشمسية، وتوفر أحدث الألواح عالية الكفاءة (TopCon وHJT) بضمانات دولية 25 عاماً.',
        en: 'Changzhou hosts Tier-1 solar titan Trina Solar and battery gigafactories, delivering high-efficiency TOPCon solar modules with international 25-year performance warranties.'
      },
      mainManufacturingArea: {
        ar: 'منطقة شينبي وحي ووجين',
        en: 'Xinbei District & Wujin High-Tech Park'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  tradeFairs: [
    {
      id: 'world-new-energy-expo-changzhou',
      name: {
        ar: 'مؤتمر ومعرض العالم للطاقة الجديدة بتشانغتشو (World New Energy Expo)',
        en: 'World New Energy Expo (Changzhou)',
        zh: '世界新能源博览会 (常州)'
      },
      industry: 'EV Batteries, Solar Photovoltaics, Smart Charging & Energy Storage',
      venue: {
        ar: 'مركز تشانغتشو الدولي للمؤتمرات والمعارض، شينبي',
        en: 'Changzhou International Convention & Exhibition Center, Xinbei',
        zh: '常州国际会展中心'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر يونيو',
        en: 'Annually in June'
      },
      bestFor: ['Renewable Energy Importers', 'EV Component Buyers', 'Battery Storage Distributors']
    },
    {
      id: 'china-henglin-flooring-festival',
      name: {
        ar: 'مهرجان ومعرض هنغلين الدولي للأرضيات ومواد الديكور',
        en: 'China (Henglin) International Flooring & Home Decor Fair',
        zh: '中国·横林国际地板家居采购博览会'
      },
      industry: 'SPC Flooring, Laminate Parquet, Wall Cladding & Underlayment',
      venue: {
        ar: 'مركز هنغلين الدولي للأرضيات، ووجين، تشانغتشو',
        en: 'Henglin International Flooring Center, Wujin, Changzhou',
        zh: '横林地板城展厅'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر أكتوبر',
        en: 'Annually in October'
      },
      bestFor: ['Flooring Importers', 'Interior Contractors', 'Building Material Dealers']
    }
  ],
  logistics: {
    nearestAirports: [
      'Changzhou Benniu International Airport (CZX) - 20 km from downtown',
      'Sunan Shuofang International Airport (WUX) - 40 mins by highway',
      'Shanghai Hongqiao International Airport (SHA) - 50 mins by HSR'
    ],
    seaPorts: [
      'Changzhou Yangtze River Port (ميناء تشانغتشو على نهر يانغتسي)',
      'Shanghai Port (ميناء شنغهاي - البوابة التصديرية الرئيسية على بعد 150 كم)'
    ],
    highSpeedRailwayStations: [
      'Changzhou Railway Station (常州站 - وسط المدينة على خط بكين-شنغهاي السريع)',
      'Changzhou North Railway Station (常州北站 - محطة فائقة السرعة حديثة)'
    ],
    seaFreightSuitability: {
      ar: 'ممتازة؛ تقع تشانغتشو في قلب دلتا يانغتسي وترتبط بطرق سريعة وشبكة نهرية مباشرة مع ميناء شنغهاي وميناء تايتسانغ لشحن حاويات الأرضيات الثقيلة بكفاءة عالية.',
      en: 'Superb; positioned centrally in the Yangtze Delta with dense inland waterways and highway corridors linking directly to Shanghai container berths.'
    },
    airFreightSuitability: {
      ar: 'سريعة ومباشرة عبر مطار شنغهاي هونغتشياو ومطار سونان شوفانغ لنقل عينات البطاريات والقطع الإلكترونية.',
      en: 'Convenient via Shanghai Hongqiao and Wuxi Shuofang airports for rapid international sample dispatch.'
    },
    primaryCargoRoutes: {
      ar: [
        'خط النقل المباشر لحاويات أرضيات الـ SPC من مصانع هنغلين إلى ميناء شنغهاي',
        'شحن بطاريات الليثيوم المعتمدة بنظام البضائع الخطرة (DG) عبر موانئ شنغهاي',
        'تصدير ألواح الطاقة الشمسية من شينبي في حاويات 40HQ إلى موانئ الشرق الأوسط'
      ],
      en: [
        'Direct heavy trucking corridor for SPC flooring containers from Henglin to Shanghai Port',
        'Certified dangerous goods (DG Class 9) lithium battery shipping through Shanghai terminals',
        'Solar PV module container logistics from Xinbei to Arabian Gulf ports'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['أبريل', 'مايو', 'سبتمبر', 'أكتوبر'],
    suggestedStayDays: 2,
    weatherSummary: {
      ar: 'مناخ معتدل ورائع في فصلي الربيع والخريف، دافئ صيفاً وبارد شتاءً.',
      en: 'Pleasant temperate climate; spring and autumn provide optimal conditions for industrial factory audits.'
    },
    recommendedStayAreas: [
      {
        ar: 'حي ووجين بالقرب من مصانع الطاقة الجديدة ومصانع أرضيات هنغلين.',
        en: 'Wujin District for immediate proximity to new energy plants and Henglin flooring mills.'
      },
      {
        ar: 'حي شينبي للمسافرين لزيارة مصانع الطاقة الشمسية ومحطة القطار السريع الشمالية.',
        en: 'Xinbei District for Trina Solar facilities and Changzhou North HSR station.'
      }
    ],
    localTransportAdvice: {
      ar: 'قطارات السكك الحديدية فائقة السرعة تربط تشانغتشو بشنغهاي في 50 دقيقة فقط، وبسوتشو ونينغبو في وقت وجيز؛ Didi متاح دائماً للتنقل.',
      en: 'HSR connects Changzhou to Shanghai in under 50 minutes; Didi is prompt for visiting Henglin and Wujin factories.'
    },
    languageTips: {
      ar: 'المندرينية هي الأساسية؛ فرق المبيعات في مصانع الأرضيات والطاقة الشمسية الكبرى تجيد الإنجليزية بطلاقة.',
      en: 'Mandarin is universally spoken; export managers at major flooring and solar PV plants are fluent in English.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'sheraton-changzhou-wujin-hotel',
        name: {
          ar: 'فندق شيراتون تشانغتشو ووجين (Sheraton Changzhou Wujin)',
          en: 'Sheraton Changzhou Wujin Hotel',
          zh: '常州武进喜来登酒店'
        },
        category: { ar: 'فاخر 5 نجوم دولي', en: 'Luxury 5-Star International' },
        area: {
          ar: 'طريق يان تشنغ، حي ووجين، تشانغتشو',
          en: 'Yancheng Middle Road, Wujin District, Changzhou'
        },
        address: {
          ar: '555 طريق يان تشنغ الأوسط، حي ووجين، تشانغتشو',
          en: '555 Yancheng Middle Road, Wujin District, Changzhou',
          zh: '常州市武进区延政中大道555号'
        },
        highlights: {
          ar: 'الموقع الأفضل لرجال الأعمال وزوار مصانع الطاقة الجديدة ومصانع أرضيات هنغلين، خدمات تنفيذية ممتازة',
          en: 'Prime hotel for executives touring Wujin new energy plants and Henglin flooring facilities.'
        }
      },
      {
        id: 'changzhou-marriott-hotel',
        name: {
          ar: 'فندق ماريوت تشانغتشو (Changzhou Marriott Hotel)',
          en: 'Changzhou Marriott Hotel',
          zh: '常州万豪酒店'
        },
        category: { ar: 'أعمال فاخر 5 نجوم', en: 'Luxury Business 5-Star' },
        area: {
          ar: 'حي شينبي، بالقرب من محطة القطار السريع الشمالية',
          en: 'Xinbei District, near Changzhou North HSR Station'
        },
        address: {
          ar: '88 طريق لونغجين، حي شينبي، تشانغتشو',
          en: '88 Longjin Road, Xinbei District, Changzhou',
          zh: '常州市新北区龙锦路88号'
        },
        highlights: {
          ar: 'فندق أعمال فاخر داخل ناطحة سحاب حديثة، قريب جداً من شركة Trina Solar ومحطة القطار فائق السرعة',
          en: 'Upscale skyscraper hotel offering panoramic city views, close to Trina Solar and Changzhou North Station.'
        }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'changzhou-grand-mosque-halal-restaurant',
        name: {
          ar: 'مطعم مسجد تشانغتشو التاريخي الحلال (Changzhou Mosque Halal Restaurant)',
          en: 'Changzhou Mosque Halal Restaurant',
          zh: '常州清真寺清真饭庄'
        },
        cuisineType: {
          ar: 'مأكولات إسلامية محلية، لحم ضأن وبقر حلال طازج، ومعجنات هوي التقليدية',
          en: 'Traditional Chinese Muslim Braised Beef, Mutton & Local Dishes'
        },
        isHalal: true,
        address: {
          ar: 'بجوار مسجد تشانغتشو، حي تيانينغ، تشانغتشو',
          en: 'Adjacent to Changzhou Mosque, Tianning District, Changzhou',
          zh: '常州市天宁区迎春桥清真寺旁'
        },
        recommendedFor: {
          ar: 'تناول وجبات حلال موثوقة أثناء رحلات العمل وأداء الصلوات في مسجد المدينة',
          en: 'Certified halal dining and prayer access for industrial delegations visiting Changzhou.'
        }
      },
      {
        id: 'henglin-muslim-halal-beef-mutton',
        name: {
          ar: 'مطعم هنغلين الإسلامي للحوم الحلال',
          en: 'Henglin Muslim Halal Beef & Mutton Eatery',
          zh: '横林清真伊味香牛羊肉庄'
        },
        cuisineType: {
          ar: 'لحوم ضأن مسلوقة ومشوية، حساء لحم بقري حلال، وخبز النان الساخن',
          en: 'Halal Mutton Soup, Xinjiang BBQ Skewers & Fresh Flatbread'
        },
        isHalal: true,
        address: {
          ar: 'الشارع التجاري الرئيسي، بلدة هنغلين، ووجين، تشانغتشو',
          en: 'Main Commercial Street, Henglin Town, Wujin, Changzhou',
          zh: '常州市武进区横林镇顺通路商业区'
        },
        recommendedFor: {
          ar: 'غداء حلال سريع ومضمون لمستوردي أرضيات الـ SPC أثناء جولات المصانع في هنغلين',
          en: 'Convenient halal dining for flooring buyers conducting factory audits in Henglin.'
        }
      }
    ]
  },
  relatedCitySlugs: ['wuxi', 'suzhou', 'nantong', 'shanghai', 'hangzhou'],
  relatedProductSlugs: [
    'new-energy-batteries',
    'solar-photovoltaic',
    'spc-laminate-flooring'
  ],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل تشانغتشو التجاري والصناعي | مصانع الطاقة الجديدة وأرضيات SPC في هنغلين',
      en: 'Changzhou Sourcing Guide | New Energy Batteries, Solar PV & Henglin SPC Flooring'
    },
    description: {
      ar: 'دليل الاستيراد من تشانغتشو: مصانع بطاريات الليثيوم والسيارات الكهربائية، أرضيات الفينيل والـ SPC في هنغلين، ألواح Trina Solar الشمسية، الفنادق والمطاعم الحلال.',
      en: 'Complete Changzhou sourcing guide: Lithium batteries, solar PV modules, Henglin SPC luxury vinyl flooring, Li Auto smart EVs, logistics, and halal dining.'
    }
  }
};
