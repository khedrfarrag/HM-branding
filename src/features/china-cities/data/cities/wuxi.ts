import { ICity } from '../../types';

export const wuxiCity: ICity = {
  id: 'wuxi',
  slug: 'wuxi',
  name: {
    ar: 'ووشي (عاصمة السكوتر والدراجات الكهربائية وأشباه الموصلات والفولاذ المقاوم للصدأ)',
    en: 'Wuxi',
    zh: '无锡'
  },
  province: { ar: 'جيانغسو', en: 'Jiangsu' },
  region: 'East China / Yangtze River Delta',
  tier: 'tier-2',
  commercialImportanceScore: 92,
  heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
  description: {
    ar: 'عاصمة صناعة السكوترات والدراجات الكهربائية الأولى في العالم (World Electric Scooter Capital)؛ تنتج منطقة شيشان (锡山) في ووشي أكثر من 35% من إجمالي الدراجات والسكوترات الكهربائية عالمياً وتضم المقرات الرئيسية لأشهر العلامات التجارية مثل Yadea وNiu وXinri. كما تعد ووشي مهد صناعة أشباه الموصلات والدوائر المتكاملة الصينية، وأكبر مركز لتجارة وتداول صفائح الفولاذ المقاوم للصدأ (الستانلس ستيل) في الصين.',
    en: 'The undisputed global capital for electric two-wheelers and commuter scooters. Wuxi Xishan District produces over 35% of the world electric mopeds and scooters, hosting global headquarters of industry leaders Yadea, Niu Technologies, and Xinri. Wuxi is also a premier Chinese semiconductor and IC manufacturing hub, and home to the nation largest stainless steel distribution exchange.'
  },
  keyIndustries: [
    'electric-scooters-two-wheelers',
    'semiconductors-integrated-circuits',
    'stainless-steel-metallurgy',
    'internet-of-things-iot',
    'precision-machinery',
    'biomedical-engineering'
  ],
  primaryProducts: {
    ar: [
      'السكوترات الكهربائية ودراجات التوصيل الذكية (Yadea / Niu / Xinri)',
      'الدراجات النارية الكهربائية وبطاريات وسكوترات الركاب (Xishan Hub)',
      'لفائف وألواح الفولاذ المقاوم للصدأ (Stainless Steel Coils & Sheets)',
      'رقائق أشباه الموصلات والدوائر المتكاملة وأجهزة الاستشعار (IoT)',
      'المحركات الكهربائية عديمة المسفرات (Brushless Motors & Controllers)',
      'المعدات والأجهزة الطبية الدقيقة ومعدات غسيل الكلى'
    ],
    en: [
      'Smart Electric Scooters, Mopeds & Delivery Bikes (Yadea, Niu, Xinri)',
      'Electric Motorcycles, Swappable Batteries & Hub Motors (Xishan)',
      'Stainless Steel Coils, Plates & Welded Pipes (Southern Steel Market)',
      'Semiconductor Chips, Power MOSFETs & IoT Sensors',
      'Brushless DC (BLDC) Motors, Controllers & Smart Displays',
      'Precision Dialysis Equipment & Biomedical Hardware'
    ]
  },
  bestFor: [
    'Electric Scooter & Micromobility Brand Importers',
    'Delivery Fleet & Commercial E-Bike Buyers',
    'Stainless Steel Sheet & Coil Wholesalers',
    'Semiconductor & IoT Hardware Engineers',
    'Precision Machinery & Motor Sourcing Agents'
  ],
  districts: [
    {
      id: 'xishan-electric-scooter-capital',
      cityId: 'wuxi',
      name: {
        ar: 'منطقة شيشان (عاصمة السكوترات والدراجات الكهربائية بالعالم)',
        en: 'Xishan District (Global Electric Scooter Capital)',
        zh: '锡山区 (中国电动车之都)'
      },
      activityType: {
        ar: 'أضخم مجمع صناعي في العالم لتصنيع وتجميع السكوترات والدراجات الكهربائية؛ يضم أكثر من 500 مصنع ومقرات شركات Yadea وNiu وXinri',
        en: 'World largest manufacturing base for electric two-wheelers, with 500+ OEMs and global headquarters for Yadea, Niu, and Xinri.'
      },
      mainProducts: [
        'سكوترات كهربائية ذكية للمدن',
        'دراجات كهربائية لشركات التوصيل السريع',
        'محركات كهربائية وبطاريات ليثيوم قابلة للاستبدال'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'xinwu-high-tech-semiconductor-zone',
      cityId: 'wuxi',
      name: {
        ar: 'منطقة شينوو للتكنولوجيا الفائقة (وادي الرقائق وإنترنت الأشياء - WND)',
        en: 'Xinwu District / Wuxi High-Tech Zone (WND)',
        zh: '新吴区 (无锡高新区)'
      },
      activityType: {
        ar: 'قاعدة صناعة أشباه الموصلات والدوائر المتكاملة الأولى في الصين (SK Hynix, CR Micro) والمركز الوطني لتطوير إنترنت الأشياء (IoT)',
        en: 'National integrated circuit and semiconductor manufacturing hub hosting SK Hynix mega-fabs and national IoT research institutes.'
      },
      mainProducts: [
        'رقائق ذاكرة إلكترونية ومعالجات',
        'أجهزة ومجسات إنترنت الأشياء الذكية',
        'معدات إلكترونية دقيقة ومحولات طاقة'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'liangxi-urban-stainless-steel-market',
      cityId: 'wuxi',
      name: {
        ar: 'حي ليانغشي وبورصة الفولاذ المقاوم للصدأ (وسط ووشي التاريخي)',
        en: 'Liangxi District & Southern Stainless Steel Market',
        zh: '梁溪区 (南方不锈钢市场)'
      },
      activityType: {
        ar: 'المركز التجاري والتاريخي للمدينة، يضم أضخم سوق لتداول صفائح ولفائف الستانلس ستيل في الصين، ومسجد ووشي الكبير',
        en: 'Downtown commercial core hosting China largest stainless steel market, financial headquarters, and historic Wuxi Mosque.'
      },
      mainProducts: [
        'لفائف وصفائح ستانلس ستيل 304/316',
        'مكاتب التجارة والخدمات اللوجستية',
        'المطاعم الحلال التاريخية والفنادق'
      ],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    }
  ],
  wholesaleMarkets: [
    {
      id: 'xishan-electric-vehicle-trade-center',
      cityId: 'wuxi',
      name: {
        ar: 'المركز الدولي لتجارة وتصدير الدراجات والسكوترات الكهربائية بشيشان',
        en: 'China (Wuxi/Xishan) International Electric Vehicle Trade Mall',
        zh: '中国无锡锡山电动车国际贸易展示中心'
      },
      type: 'Wholesale',
      category: 'Bicycles & Vehicles',
      description: {
        ar: 'المعرض والبورصة المركزية الأكبر عالمياً لمصانع السكوترات الكهربائية؛ يضم صالات عرض لمئات الموديلات من سكوترات الركاب، سكوترات الشحن، ومحركات الدفع.',
        en: 'World foremost wholesale showroom and trading complex for electric scooters, delivery e-bikes, brushless motors, and lithium battery modules.'
      },
      address: {
        ar: 'المنطقة الصناعية للدراجات، حي شيشان، ووشي',
        en: 'Electric Vehicle Industrial Park, Xishan District, Wuxi',
        zh: '无锡市锡山区安镇锡沪路电动车产业带'
      },
      moqLevel: 'Low'
    },
    {
      id: 'wuxi-southern-stainless-steel-market',
      cityId: 'wuxi',
      name: {
        ar: 'سوق وبورصة الجنوب للفولاذ المقاوم للصدأ (الستانلس ستيل)',
        en: 'Southern Stainless Steel International Trading Market',
        zh: '无锡南方不锈钢国际交易中心'
      },
      type: 'Wholesale',
      category: 'Building Materials & Hardware',
      description: {
        ar: 'أضخم بورصة وسوق فعلي لتداول لفائف وألواح الستانلس ستيل (درجات 201، 304، 316L) وخدمات التقطيع بالليزر والدرفلة للتصدير الفوري.',
        en: 'China premier stainless steel physical exchange handling over 3 million tons annually of coils, perforated sheets, and industrial pipes.'
      },
      address: {
        ar: 'طريق شيخه، حي ليانغشي، ووشي',
        en: 'Xihe Road, Liangxi District, Wuxi',
        zh: '无锡市梁溪区锡沪路不锈钢产业市场'
      },
      moqLevel: 'High'
    }
  ],
  industrialZones: [
    {
      id: 'xishan-e-bike-industrial-cluster',
      cityId: 'wuxi',
      name: {
        ar: 'المدينة الصناعية الكبرى للدراجات الكهربائية بـ شيشان',
        en: 'Xishan Electric Two-Wheeler Mega-Industrial Cluster',
        zh: '锡山电动车特色产业集群制造基地'
      },
      clusterSpecialization: {
        ar: 'تنتج أكثر من 15 مليون سكوتر ودراجة كهربائية سنوياً مع سلسلة توريد متكاملة بنسبة 100% (هياكل، محركات BLDC، أجهزة تحكم، بطاريات، إطارات)',
        en: 'Produces over 15 million electric scooters annually with 100% localized supply chains from chassis welding to smart motor controllers.'
      },
      factoryTypes: [
        'Automated Scooter Frame Robotic Welding Lines',
        'Brushless Hub Motor Manufacturing Shops',
        'End-of-Line Dynamic Scooter Test Tracks'
      ],
      keyProducts: [
        'سكوترات كهربائية ذكية متصلة بالتطبيقات',
        'دراجات كهربائية سريعة لخدمات التوصيل',
        'محركات عجلات كهربائية وأجهزة تحكم ذكية'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'wuxi-semiconductor-ic-base',
      cityId: 'wuxi',
      name: {
        ar: 'القاعدة الوطنية لصناعة الدوائر المتكاملة وأشباه الموصلات بووشي',
        en: 'Wuxi National Integrated Circuit Industrial Base',
        zh: '无锡国家集成电路产业基地'
      },
      clusterSpecialization: {
        ar: 'تصنيع وتغليف واختبار رقائق السيليكون، ترانزستورات الطاقة (MOSFET وIGBT)، ودوائر الأجهزة الإلكترونية الذكية',
        en: 'Leading manufacturing and packaging cluster for power semiconductors, smart sensors, and advanced silicon microchips.'
      },
      factoryTypes: [
        'Semiconductor Wafer Fabs (Cleanroom Class 10/100)',
        'IC Packaging & Wire Bonding Plants',
        'Automated Electronic Testing Facilities'
      ],
      keyProducts: [
        'شرائح معالجة الطاقة الإلكترونية',
        'دوائر أجهزة إنترنت الأشياء والتحكم',
        'أجهزة استشعار وحساسات ذكية'
      ],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'wx-electric-scooters-mopeds',
      productName: {
        ar: 'السكوترات والدراجات الكهربائية ومستلزماتها (Electric Scooters & Mopeds)',
        en: 'Smart Electric Scooters, E-Mopeds & Delivery Fleets'
      },
      industryCategory: 'electric-scooters-two-wheelers',
      whyThisCity: {
        ar: 'ووشي هي عاصمة السكوتر الكهربائي في العالم؛ موطن عمالقة الصناعة (Yadea وNiu)، وتوفر تصاميم معتمدة بمواصفات EEC وDOT وGCC بأعلى موثوقية وبطاريات ليثيوم طويلة المدى.',
        en: 'Wuxi is the global capital for electric scooters, offering international EEC/DOT certified models, swappable battery systems, and direct factory pricing.'
      },
      mainManufacturingArea: {
        ar: 'منطقة شيشان، ووشي',
        en: 'Xishan District (Anzhen Electric Vehicle Base)'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'wx-stainless-steel-coils-sheets',
      productName: {
        ar: 'لفائف وألواح الفولاذ المقاوم للصدأ (Stainless Steel Coils & Sheets)',
        en: 'Grade 304/316 Stainless Steel Coils, Plates & Pipes'
      },
      industryCategory: 'stainless-steel-metallurgy',
      whyThisCity: {
        ar: 'ووشي هي أكبر مركز لتداول وتصدير الستانلس ستيل في الصين، وتتيح شراء كميات فورية مع خدمات التقطيع بالليزر والمعالجة السطحية (Mirror/Hairline) للشحن الفوري.',
        en: 'Wuxi is China largest stainless steel trading hub, providing massive spot inventory, custom surface finishes, and direct container stuffing.'
      },
      mainManufacturingArea: {
        ar: 'سوق الجنوب، حي ليانغشي، ووشي',
        en: 'Southern Stainless Steel Trading Market, Wuxi'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  tradeFairs: [
    {
      id: 'china-wuxi-international-electric-vehicle-expo',
      name: {
        ar: 'معرض الصين (ووشي) الدولي للمركبات والدراجات الكهربائية ومكوناتها',
        en: 'China (Wuxi) International Electric Vehicle & Parts Expo',
        zh: '中国·无锡国际新能源电动车展览会'
      },
      industry: 'Electric Scooters, Delivery E-Bikes, Lithium Batteries, Hub Motors & Smart Tech',
      venue: {
        ar: 'مركز ووشي تايهو الدولي للمعارض، شينوو',
        en: 'Wuxi Taihu International Expo Center, Xinwu District, Wuxi',
        zh: '无锡太湖国际博览中心'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر مايو',
        en: 'Annually in May'
      },
      bestFor: ['E-Scooter Distributors', 'Micromobility Fleet Operators', 'Lithium Battery Importers']
    },
    {
      id: 'world-iot-expo-wuxi',
      name: {
        ar: 'المعرض العالمي لإنترنت الأشياء وأشباه الموصلات بووشي (World IoT Expo)',
        en: 'World Internet of Things Exposition (WIOT Expo Wuxi)',
        zh: '世界物联网博览会 (无锡)'
      },
      industry: 'Internet of Things (IoT), Semiconductors, Sensors & Smart Hardware',
      venue: {
        ar: 'مركز ووشي تايهو الدولي للمعارض، ووشي',
        en: 'Wuxi Taihu International Expo Center, Wuxi',
        zh: '无锡太湖国际博览中心'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر سبتمبر',
        en: 'Annually in September'
      },
      bestFor: ['IoT Device Importers', 'Hardware Developers', 'Smart City Contractors']
    }
  ],
  logistics: {
    nearestAirports: [
      'Sunan Shuofang International Airport (WUX) - Located in Wuxi Xinwu District with international flights',
      'Shanghai Hongqiao International Airport (SHA) - 30 mins by High-Speed Rail'
    ],
    seaPorts: [
      'Wuxi Inland Port (ميناء ووشي النهري على شبكة قنوات يانغتسي الكبرى)',
      'Shanghai Port (ميناء شنغهاي - الميناء التصديري الرئيسي على بعد 120 كم فقط)'
    ],
    highSpeedRailwayStations: [
      'Wuxi Railway Station (无锡站 - وسط المدينة على خط بكين-شنغهاي فائق السرعة)',
      'Wuxi East Railway Station (无锡东站 - يخدم مباشرة منطقة مصانع السكوترات في شيشان)'
    ],
    seaFreightSuitability: {
      ar: 'ممتازة؛ تقع ووشي على بعد 30 دقيقة فقط من شنغهاي وسوتشو، وترتبط بشبكة طرق سريعة وشاحنات مخصصة تنقل حاويات السكوترات والستانلس ستيل إلى أرصفة ميناء شنغهاي يومياً.',
      en: 'Outstanding; only 30 minutes from Shanghai by HSR, with daily container drayage fleets moving scooters and steel directly to Shanghai deepwater berths.'
    },
    airFreightSuitability: {
      ar: 'سريعة ومباشرة عبر مطار سونان شوفانغ بووشي ومطار شنغهاي هونغتشياو لنقل عينات الدوائر المتكاملة والسكوترات.',
      en: 'Prompt via Wuxi Shuofang (WUX) and Shanghai Hongqiao airports for sample dispatch and electronics air cargo.'
    },
    primaryCargoRoutes: {
      ar: [
        'خط النقل المباشر لحاويات السكوترات والدراجات الكهربائية من مصانع شيشان إلى ميناء شنغهاي',
        'شحن حاويات الفولاذ المقاوم للصدأ الثقيلة عبر الموانئ النهرية والبحرية لشنغهاي',
        'شحن أشباه الموصلات والدوائر الإلكترونية جواً عبر مطار شوفانغ وشنغهاي'
      ],
      en: [
        'Direct container trucking corridor for electric scooters from Xishan to Shanghai Port berths',
        'Heavy-gauge stainless steel container logistics dispatched to ocean carriers in Shanghai',
        'Dedicated air freight routes for semiconductor components via Wuxi and Shanghai hubs'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['مارس', 'أبريل', 'أكتوبر', 'نوفمبر'],
    suggestedStayDays: 2,
    weatherSummary: {
      ar: 'مناخ شبه استوائي لطيف للغاية بجوار بحيرة تايهو الشهيرة، ربيع وخريف معتدلان وخلابين.',
      en: 'Charming lakeside climate along Lake Taihu; spring and autumn offer picturesque and pleasant conditions for factory visits.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة شيشان (بالقرب من محطة قطار ووشي الشرقية) لزيارة مصانع السكوترات والدراجات الكهربائية.',
        en: 'Xishan District near Wuxi East HSR station for direct access to electric scooter gigafactories.'
      },
      {
        ar: 'وسط مدينة ووشي (حي ليانغشي) للإقامة بالقرب من أسواق الستانلس ستيل ومسجد ووشي والمطاعم الحلال.',
        en: 'Downtown Liangxi District near the Stainless Steel Market, Wuxi Mosque, and halal eateries.'
      }
    ],
    localTransportAdvice: {
      ar: 'مترو ووشي يربط محطة القطار السريع الشرقية بالمطار ووسط المدينة؛ استخدام Didi مريح وسريع لزيارة مصانع شيشان.',
      en: 'Wuxi Metro seamlessly connects Wuxi East HSR station, the airport, and city center; Didi is prompt for touring Xishan industrial parks.'
    },
    languageTips: {
      ar: 'المندرينية هي اللغة السائدة؛ شركات السكوترات الكهربائية العالمية (Yadea, Niu) تمتلك أقسام مبيعات تصديرية تجيد الإنجليزية بطلاقة.',
      en: 'Mandarin is universally spoken; export divisions at top e-mobility brands (Yadea, Niu) have dedicated English-speaking account executives.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'intercontinental-wuxi',
        name: {
          ar: 'فندق إنتركونتيننتال ووشي (InterContinental Wuxi)',
          en: 'InterContinental Wuxi',
          zh: '无锡洲际酒店'
        },
        category: { ar: 'فاخر 5 نجوم دولي', en: 'Luxury 5-Star International' },
        area: {
          ar: 'طريق تايهو، حي ليانغشي، ووشي',
          en: 'Taihu Avenue, Liangxi District, Wuxi'
        },
        address: {
          ar: '6 طريق تايهو، حي ليانغشي، ووشي',
          en: '6 Taihu Avenue, Liangxi District, Wuxi',
          zh: '无锡市梁溪区太湖大道6号'
        },
        highlights: {
          ar: 'أفخم فندق أعمال بالمدينة بالقرب من بحيرة تايهو والقناة الكبرى، خدمات تنفيذية راقية للوفود التجارية الدولية',
          en: 'Flagship luxury business hotel overlooking the Grand Canal and Taihu Plaza, providing premier executive hospitality.'
        }
      },
      {
        id: 'grand-metropark-hotel-wuxi',
        name: {
          ar: 'فندق جراند متروبارك ووشي (Grand Metropark Hotel Wuxi)',
          en: 'Grand Metropark Hotel Wuxi',
          zh: '无锡维景大酒店'
        },
        category: { ar: 'أعمال فاخر 5 نجوم', en: 'Luxury Business 5-Star' },
        area: {
          ar: 'حي شينوو، منطقة التكنولوجيا الفائقة',
          en: 'Xinwu District, High-Tech Industrial Zone'
        },
        address: {
          ar: '100 طريق بينغانغ، حي شينوو، ووشي',
          en: '100 Bin-ang Road, Xinwu District, Wuxi',
          zh: '无锡市新吴区汉江路1号'
        },
        highlights: {
          ar: 'موقع ممتاز لرجال الأعمال وزوار مصانع الإلكترونيات وأشباه الموصلات، وقريب من محطة قطار ووشي الشرقية',
          en: 'Strategically located in the high-tech semiconductor corridor, ideal for industrial procurement visits.'
        }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'wuxi-grand-mosque-halal-quarter',
        name: {
          ar: 'مطعم مسجد ووشي التاريخي الحلال (Wuxi Mosque Halal Restaurant)',
          en: 'Wuxi Mosque Halal Restaurant',
          zh: '无锡清真寺清真饭庄'
        },
        cuisineType: {
          ar: 'أطباق إسلامية عريقة، لحوم ضأن وبقر حلال طازجة، وحساء اللحم المتبل',
          en: 'Traditional Chinese Muslim Braised Mutton, Beef Soup & Steamed Buns'
        },
        isHalal: true,
        address: {
          ar: 'بجوار مسجد ووشي، حي ليانغشي، ووشي',
          en: 'Adjacent to Wuxi Mosque, Liangxi District, Wuxi',
          zh: '无锡市梁溪区解放南路清真寺旁'
        },
        recommendedFor: {
          ar: 'تناول وجبات حلال معتمدة وأداء الصلوات في مسجد ووشي المركزي',
          en: 'Certified halal dining and prayer access at the central city mosque for business visitors.'
        }
      },
      {
        id: 'xishan-halal-lamb-skewer-house',
        name: {
          ar: 'مطعم شيشان الإسلامي لمشويات اللحم الحلال',
          en: 'Xishan E-Bike Zone Halal Lamb BBQ Restaurant',
          zh: '锡山安镇清真伊兰香牛羊肉庄'
        },
        cuisineType: {
          ar: 'مشويات لحم الضأن الحلال، كباب، وأرز بيلاف بالبخار',
          en: 'Xinjiang Halal Lamb Skewers, Pilaf & Roasted Meat'
        },
        isHalal: true,
        address: {
          ar: 'شارع شيهو، بلدة آن تشن، حي شيشان، ووشي',
          en: 'Xihu Road, Anzhen Town, Xishan District, Wuxi',
          zh: '无锡市锡山区安镇锡沪路电动车商圈'
        },
        recommendedFor: {
          ar: 'غداء حلال شهي ومريح لمشتري السكوترات الكهربائية أثناء جولات المصانع في شيشان',
          en: 'Convenient certified halal lunches for scooter buyers touring gigafactories in Xishan.'
        }
      }
    ]
  },
  relatedCitySlugs: ['changzhou', 'suzhou', 'shanghai', 'nantong', 'hangzhou'],
  relatedProductSlugs: [
    'electric-scooters-two-wheelers',
    'stainless-steel-metallurgy',
    'semiconductors-integrated-circuits'
  ],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل ووشي التجاري والصناعي | مصانع السكوترات الكهربائية في شيشان والستانلس ستيل',
      en: 'Wuxi Sourcing Guide | Electric Scooters in Xishan, Stainless Steel & Semiconductors'
    },
    description: {
      ar: 'دليل الاستيراد من ووشي: مصانع السكوترات والدراجات الكهربائية في شيشان (Yadea وNiu)، بورصة الستانلس ستيل، رقائق أشباه الموصلات، الفنادق والمطاعم الحلال.',
      en: 'Complete Wuxi sourcing guide: Electric scooters and mopeds in Xishan (Yadea, Niu), stainless steel trading market, semiconductors, logistics, and halal dining.'
    }
  }
};
