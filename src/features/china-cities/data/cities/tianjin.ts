import { ICity } from '../../types';

export const tianjinCity: ICity = {
  id: 'tianjin',
  slug: 'tianjin',
  name: {
    ar: 'تيانجين (بوابة الشمال البحرية وعاصمة الدراجات والسجاد وأنابيب الصلب)',
    en: 'Tianjin',
    zh: '天津'
  },
  province: { ar: 'بلدية تيانجين المركزية', en: 'Tianjin Municipality' },
  region: 'North China / Bohai Rim',
  tier: 'tier-2',
  commercialImportanceScore: 93,
  heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
  description: {
    ar: 'البوابة البحرية الكبرى لشمال الصين وميناء بكين التصديري الأول (ميناء تيانجين الأضخم شمالاً). تعتبر عاصمة صناعة الدراجات العادية والكهربائية الأولى عالمياً في وانغ تشينغ تيو (تنتج أكثر من 40% من دراجات الصين)، وعاصمة صناعة وتصدير السجاد والموكيت في تسويهوانغكو، ومركز صناعات أنابيب الصلب الإنشائية في دا تشيو تشوانغ، وقاعدة تجميع طائرات إيرباص والصناعات البتروكيماوية في منطقة بينهاي الجديدة.',
    en: 'North China maritime gateway and premier seaport hub for the capital economic circle. Renowned as the world largest bicycle and e-bike manufacturing capital (Wangqingtuo produces over 40% of China two-wheelers), the national carpet and rug weaving center (Cuihuangkou), the steel structural pipe forging cluster (Daqiuzhuang), and hosting Binhai New Area advanced aviation and petrochemical complexes.'
  },
  keyIndustries: [
    'maritime-shipping-logistics',
    'bicycles-electric-bikes',
    'carpets-home-textiles',
    'steel-pipes-metallurgy',
    'automotive-aerospace',
    'petrochemicals'
  ],
  primaryProducts: {
    ar: [
      'الدراجات الهوائية والكهربائية وسكوترات الركاب (Wangqingtuo Hub)',
      'السجاد المنزلي والمكتبي وسجاد الصلاة الفاخر (Cuihuangkou Hub)',
      'أنابيب الصلب الملحومة والمجلفنة ومستلزمات السقالات (Daqiuzhuang)',
      'قطع غيار السيارات ومكونات هياكل المركبات والشاحنات',
      'المنتجات البتروكيماوية واللدائن ومواد التعبئة',
      'خدمات شحن الحاويات والتخزين الجمركي بالميناء العملاق'
    ],
    en: [
      'Bicycles, Electric Bikes & Commuter Scooters (Wangqingtuo)',
      'Woven Carpets, Rugs & Luxury Prayer Mats (Cuihuangkou)',
      'Welded & Galvanized Structural Steel Pipes (Daqiuzhuang)',
      'Automotive Components, Stamping Parts & Truck Assemblies',
      'Petrochemical Resins, Specialty Polymers & Coatings',
      'Deepwater Container Logistics & Bonded Port Warehousing'
    ]
  },
  bestFor: [
    'Bicycle & E-Bike Importers',
    'Carpet & Floor Covering Wholesalers',
    'Steel Pipe & Construction Hardware Contractors',
    'Port Logistics & Container Freight Operators',
    'Automotive & Industrial Equipment Buyers'
  ],
  districts: [
    {
      id: 'binhai-new-area-port',
      cityId: 'tianjin',
      name: {
        ar: 'منطقة بينهاي الجديدة وميناء تيانجين الدولي',
        en: 'Binhai New Area & Tianjin International Port',
        zh: '滨海新区 (天津港)'
      },
      activityType: {
        ar: 'رابع أكبر ميناء بحري في العالم، مركز الصناعات الثقيلة وتجميع الطائرات (Airbus A320)، وتكرير البتروكيماويات والسيارات المستوردة',
        en: 'World top-10 deepwater container port, aviation assembly (Airbus Final Assembly Line), automotive manufacturing, and petrochemical refining.'
      },
      mainProducts: [
        'خدمات شحن الحاويات الدولية',
        'سيارات مستوردة ومركبات ركاب',
        'منتجات بتروكيماوية متطورة'
      ],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'wuqing-wangqingtuo-bicycles',
      cityId: 'tianjin',
      name: {
        ar: 'محافظة ووتشينغ (عاصمة الدراجات والسجاد - وانغ تشينغ تيو وتسويهوانغكو)',
        en: 'Wuqing District (Bicycle & Carpet Capital)',
        zh: '武清区 (王庆坨 / 崔黄口)'
      },
      activityType: {
        ar: 'تنتج بلدة وانغ تشينغ تيو أكثر من 40% من دراجات الصين العادية والكهربائية، وتنتج تسويهوانغكو السجاد الفاخر المصدر للشرق الأوسط وأوروبا',
        en: 'Wangqingtuo town produces over 40% of China bicycles and e-bikes; Cuihuangkou is China #1 carpet weaving cluster exporting globally.'
      },
      mainProducts: [
        'دراجات جبلية وهوائية وكهربائية',
        'سجاد منسوج وموكيت وسجاد مساجد',
        'إطارات ومحركات الدراجات الكهربائية'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'jinghai-daqiuzhuang-steel',
      cityId: 'tianjin',
      name: {
        ar: 'محافظة جينغهاي (عاصمة أنابيب الصلب الإنشائية - دا تشيو تشوانغ)',
        en: 'Jinghai District (Daqiuzhuang Steel Pipe Capital)',
        zh: '静海区 (大邱庄)'
      },
      activityType: {
        ar: 'أكبر قاعدة في شمال الصين لتصنيع أنابيب الصلب غير الملحومة والملحومة، قطاعات الصلب المجلفن، ومستلزمات الإنشاءات والسقالات',
        en: 'Premier northern base for welded steel pipes, galvanized hollow sections, pipeline equipment, and scaffolding materials.'
      },
      mainProducts: [
        'أنابيب صلب مجلفنة ومربعة',
        'مواسير خطوط الغاز والمياه',
        'مستلزمات سقالات وهياكل معدنية'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'hongqiao-muslim-historic-center',
      cityId: 'tianjin',
      name: {
        ar: 'حي هونغتشياو والمركز التاريخي الإسلامي (المسجد الكبير)',
        en: 'Hongqiao District & Historic Grand Mosque Quarter',
        zh: '红桥区'
      },
      activityType: {
        ar: 'القلب التراثي للمجتمع الإسلامي في تيانجين، يضم مسجد تيانجين الكبير العريق (أكثر من 300 عام) وأكبر تجمع لأسواق الأغذية والمطاعم الحلال',
        en: 'Historic center of Tianjin Hui Muslim community, home to the 300-year-old Tianjin Grand Mosque and traditional halal food markets.'
      },
      mainProducts: [
        'أغذية ولحوم حلال طازجة',
        'حلويات ومعجنات تقليدية',
        'مراكز تجارة التجزئة العريقة'
      ],
      tradeFocus: 'Retail',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    }
  ],
  wholesaleMarkets: [
    {
      id: 'wangqingtuo-bicycle-trade-market',
      cityId: 'tianjin',
      name: {
        ar: 'سوق وانغ تشينغ تيو الدولي للدراجات الهوائية والكهربائية',
        en: 'Wangqingtuo International Bicycle & E-Bike Wholesale Market',
        zh: '天津王庆坨自行车产业博览中心'
      },
      type: 'Wholesale',
      category: 'Bicycles & Vehicles',
      description: {
        ar: 'المركز التجاري والمعرض الدائم الأكبر بالصين لشراء الدراجات الهوائية، الدراجات الجبلية، سكوترات الأطفال، ومكونات الدراجات الكهربائية بأسعار المصنع المباشرة.',
        en: 'World largest wholesale and trade center for mountain bikes, commuter bicycles, kids scooters, electric bikes, and replacement components.'
      },
      address: {
        ar: 'بلدة وانغ تشينغ تيو، محافظة ووتشينغ، تيانجين',
        en: 'Wangqingtuo Town, Wuqing District, Tianjin',
        zh: '天津市武清区王庆坨镇产业园'
      },
      moqLevel: 'Medium'
    },
    {
      id: 'cuihuangkou-carpet-trade-center',
      cityId: 'tianjin',
      name: {
        ar: 'المركز الدولي لتجارة السجاد والموكيت بتسويهوانغكو',
        en: 'Cuihuangkou International Carpet & Rug Trading Center',
        zh: '天津崔黄口国际地毯城'
      },
      type: 'Wholesale',
      category: 'Home & Kitchen',
      description: {
        ar: 'السوق المركزي لأكبر تجمع لمصانع السجاد بالصين؛ يعرض آلاف الأنواع من السجاد المنسوج آلياً، سجاد الحرير، السجاد الصوفي، وسجاد المساجد والصالات الفندقية.',
        en: 'National wholesale exchange for machine-woven rugs, tufted carpets, commercial hotel carpets, prayer mats, and decorative floor coverings.'
      },
      address: {
        ar: 'بلدة تسويهوانغكو، محافظة ووتشينغ، تيانجين',
        en: 'Cuihuangkou Town, Wuqing District, Tianjin',
        zh: '天津市武清区崔黄口地毯产业园'
      },
      moqLevel: 'Medium'
    },
    {
      id: 'daqiuzhuang-steel-pipe-exchange',
      cityId: 'tianjin',
      name: {
        ar: 'بورصة وسوق دا تشيو تشوانغ لمنتجات وأنابيب الصلب',
        en: 'Daqiuzhuang Steel Pipe & Metal Products Wholesale Market',
        zh: '大邱庄钢管五金交易市场'
      },
      type: 'Wholesale',
      category: 'Building Materials & Hardware',
      description: {
        ar: 'أكبر سوق مادي لتداول أنابيب الصلب، المواسير الملحومة، الفلنجات ومقاطع التيوبات المجلفنة للمشاريع الإنشائية بالشرق الأوسط وإفريقيا.',
        en: 'Comprehensive wholesale market for round/square welded steel tubes, galvanized pipes, and scaffolding hardware directly supplied by local mills.'
      },
      address: {
        ar: 'بلدة دا تشيو تشوانغ، محافظة جينغهاي، تيانجين',
        en: 'Daqiuzhuang Town, Jinghai District, Tianjin',
        zh: '天津市静海区大邱庄镇'
      },
      moqLevel: 'High'
    }
  ],
  industrialZones: [
    {
      id: 'wangqingtuo-bicycle-industrial-park',
      cityId: 'tianjin',
      name: {
        ar: 'المنطقة الصناعية الكبرى للدراجات بـ وانغ تشينغ تيو',
        en: 'Wangqingtuo Bicycle & E-Bike Manufacturing Base',
        zh: '天津王庆坨自行车产业园'
      },
      clusterSpecialization: {
        ar: 'أكبر مجمع صناعي بالعالم لإنتاج هياكل الدراجات الألمنيوم والصلب، تجميع الدراجات الجبلية، ومجموعات الدفع للدراجات الكهربائية',
        en: 'Global manufacturing cluster producing bicycle aluminum/steel frames, drivetrain components, and complete electric two-wheelers.'
      },
      factoryTypes: [
        'Automated Frame Welding Plants',
        'Powder Coating & Painting Lines',
        'Final Bicycle Assembly Factories'
      ],
      keyProducts: [
        'دراجات هوائية رياضية وجبلية',
        'دراجات كهربائية للمدن',
        'قطع غيار وهياكل الدراجات'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'cuihuangkou-carpet-industrial-base',
      cityId: 'tianjin',
      name: {
        ar: 'القاعدة الصناعية للسجاد والمنسوجات بـ تسويهوانغكو',
        en: 'Cuihuangkou Carpet & Rug Industrial Manufacturing Base',
        zh: '天津崔黄口地毯特色产业聚集区'
      },
      clusterSpecialization: {
        ar: 'أكثر من 1200 منشأة لغزل وتطريز ونسج السجاد الميكانيكي، والطباعة ثلاثية الأبعاد على السجاد وموكيت الفنادق',
        en: 'Over 1,200 enterprises engaged in machine yarn spinning, tufting, jacquard carpet weaving, and 3D printed floor mats.'
      },
      factoryTypes: [
        'Jacquard Carpet Weaving Mills',
        'Digital Carpet Printing Facilities',
        'Latex Backing Coating Plants'
      ],
      keyProducts: [
        'سجاد تركي وصيني فاخر',
        'سجاد مساجد وصلوات مقاوم للاهتراء',
        'موكيت فنادق ومكاتب'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'daqiuzhuang-steel-industrial-zone',
      cityId: 'tianjin',
      name: {
        ar: 'المنطقة الصناعية العملاقة لأنابيب الصلب بـ دا تشيو تشوانغ',
        en: 'Daqiuzhuang Heavy Steel Pipe Industrial Complex',
        zh: '大邱庄新型钢管产业基地'
      },
      clusterSpecialization: {
        ar: 'إنتاج أنابيب الصلب الإنشائية، أنابيب التبطين، والمواسير المجلفنة على الساخن بجميع المعايير الدولية (ASTM / BS / EN)',
        en: 'Heavy industrial production of longitudinal welded pipes, hot-dip galvanized conduits, and hollow structural sections.'
      },
      factoryTypes: [
        'High-Frequency Welded Pipe Mills',
        'Hot-Dip Galvanizing Plants',
        'Pipe Hydrostatic Testing Stations'
      ],
      keyProducts: [
        'أنابيب صلب ملحومة ومجلفنة',
        'مواسير مجوفة مربعة ومستطيلة',
        'أنظمة سقالات ومقاطع معدنية'
      ],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'tj-bicycles-and-ebikes',
      productName: {
        ar: 'الدراجات الهوائية والكهربائية ومستلزماتها (Bicycles & Electric Bikes)',
        en: 'Bicycles, Electric Bikes & Cycling Accessories'
      },
      industryCategory: 'bicycles-electric-bikes',
      whyThisCity: {
        ar: 'تنتج تيانجين أكثر من 40% من دراجات العالم سنوياً، وتضم مئات المصانع المتكاملة وسلاسل توريد سريعة توفر أفضل أسعار منافسة وجودة معتمدة للتصدير.',
        en: 'Tianjin manufactures over 40% of the world bicycles, offering complete component supply chains, rapid OEM customization, and direct port shipments.'
      },
      mainManufacturingArea: {
        ar: 'بلدة وانغ تشينغ تيو، ووتشينغ',
        en: 'Wangqingtuo Town, Wuqing District'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'tj-woven-carpets-and-rugs',
      productName: {
        ar: 'السجاد المنسوج والموكيت وسجاد الصلاة (Carpets, Rugs & Floor Coverings)',
        en: 'Machine-Woven Carpets, Luxury Rugs & Commercial Flooring'
      },
      industryCategory: 'carpets-home-textiles',
      whyThisCity: {
        ar: 'تسويهوانغكو في تيانجين هي عاصمة السجاد بالصين ومورد رئيسي لأسواق الخليج والدول العربية لجميع أنواع سجاد المساجد والقصور والمنازل.',
        en: 'Cuihuangkou in Tianjin is China undisputed carpet capital, renowned across the Middle East for premium jacquard rugs, prayer carpets, and hotel floor textiles.'
      },
      mainManufacturingArea: {
        ar: 'بلدة تسويهوانغكو، ووتشينغ',
        en: 'Cuihuangkou Town, Wuqing District'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'tj-steel-pipes-scaffolding',
      productName: {
        ar: 'أنابيب الصلب الإنشائية ومستلزمات السقالات (Structural Steel Pipes & Scaffolding)',
        en: 'Galvanized Steel Pipes, Welded Tubing & Scaffolding Equipment'
      },
      industryCategory: 'steel-pipes-metallurgy',
      whyThisCity: {
        ar: 'دا تشيو تشوانغ بتيانجين هي القاعدة الأولى لتصنيع أنابيب الصلب الإنشائية في الصين، وتمتاز بقربها المباشر من ميناء تيانجين لتقليل تكاليف الشحن الداخلي.',
        en: 'Daqiuzhuang is China leading structural steel pipe cluster, leveraging immediate proximity to Tianjin Port for unmatched low FOB logistics rates.'
      },
      mainManufacturingArea: {
        ar: 'بلدة دا تشيو تشوانغ، جينغهاي',
        en: 'Daqiuzhuang Town, Jinghai District'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  tradeFairs: [
    {
      id: 'china-northern-bicycle-expo-tianjin',
      name: {
        ar: 'معرض شمال الصين الدولي للدراجات والدراجات الكهربائية بتيانجين',
        en: 'China Northern International Bicycle & E-Bike Exhibition',
        zh: '中国北方国际自行车电动车展览会'
      },
      industry: 'Bicycles, E-Bikes, Lithium Scooters, Cycling Gears & Spare Parts',
      venue: {
        ar: 'مركز تيانجين ميكوان الدولي للمعارض، تيانجين',
        en: 'Tianjin Meijiang Convention & Exhibition Center, Tianjin',
        zh: '天津梅江会展中心'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر مارس',
        en: 'Annually in March'
      },
      officialWebsite: 'http://www.tjnebike.com',
      bestFor: ['Bicycle Brands & Retailers', 'E-Bike Sourcing Agents', 'Micromobility Distributors']
    },
    {
      id: 'tianjin-international-shipping-expo',
      name: {
        ar: 'معرض تيانجين الدولي للملاحة والخدمات اللوجستية والموانئ',
        en: 'Tianjin International Shipping Industry Expo',
        zh: '天津国际航运产业博览会'
      },
      industry: 'Port Logistics, Maritime Cargo, Container Shipping & Multimodal Transport',
      venue: {
        ar: 'مركز المعارض الدولي الوطني بتيانجين',
        en: 'National Exhibition & Convention Center (Tianjin), Tianjin',
        zh: '国家会展中心 (天津)'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر أكتوبر',
        en: 'Annually in October'
      },
      bestFor: ['Freight Forwarders', 'Container Importers', 'Supply Chain Directors']
    }
  ],
  logistics: {
    nearestAirports: [
      'Tianjin Binhai International Airport (TSN) - 15 km from downtown (Metro Line 2 direct)',
      'Beijing Daxing International Airport (PKX) - 45 mins via Beijing-Tianjin Intercity HSR connection'
    ],
    seaPorts: [
      'Tianjin Port (ميناء تيانجين - أكبر ميناء بحري اصطناعي عميق في شمال الصين، يتصدر العالم في مناولة الصب الجاف ورابع أكبر ميناء للحاويات)'
    ],
    highSpeedRailwayStations: [
      'Tianjin Railway Station (天津站 - وسط المدينة، 30 دقيقة قطار سريع لبكين)',
      'Tianjin West Railway Station (天津西站 - تقاطع خط بكين-شنغهاي السريع)',
      'Binhai Railway Station (滨海站 - يخدم منطقة الميناء والمناطق الحرة)'
    ],
    seaFreightSuitability: {
      ar: 'استثنائية وفائقة؛ ميناء تيانجين يقع في المدينة مباشرة ويرتبط بأكثر من 600 ميناء في 180 دولة، ويوفر خطوطاً أسبوعية مباشرة لموانئ جبل علي، جدة، السخنة، وبيروت.',
      en: 'Exceptional; Tianjin Port is situated right within the municipality connecting to 600+ ports across 180 countries with direct weekly sailings to the Middle East and Europe.'
    },
    airFreightSuitability: {
      ar: 'ممتازة؛ مطار تيانجين بنهاي هو المركز اللوجستي الجوي الأكبر لشمال الصين للشحنات الخاصة وتجارة الطرود السريعة.',
      en: 'Major northern air freight hub handling extensive dedicated freighter flights and cargo charters.'
    },
    primaryCargoRoutes: {
      ar: [
        'خط شحن حاويات الدراجات والسجاد مباشرة من أرصفة ميناء تيانجين إلى موانئ الخليج العربي',
        'شحن أنابيب الصلب الإنشائية في شحنات صب بحري وحاويات مفتوحة عبر تيانجين',
        'ممرات قطارات الشحن المتعددة الوسائط إلى آسيا الوسطى وروسيا'
      ],
      en: [
        'Direct container routes from Tianjin Port berths to Jebel Ali, Dammam, and Jeddah',
        'Breakbulk and open-top container shipping for steel tubular products through Tianjin terminals',
        'China-Europe / Central Asia intermodal freight trains departing from Binhai'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['أبريل', 'مايو', 'سبتمبر', 'أكتوبر'],
    suggestedStayDays: 3,
    weatherSummary: {
      ar: 'مناخ قاري ساحلي معتدل في فصلي الربيع والخريف، دافئ صيفاً ومنعش مع نسيم البحر في الميناء.',
      en: 'Pleasant coastal climate during spring and autumn; warm summers and crisp winters.'
    },
    recommendedStayAreas: [
      {
        ar: 'وسط مدينة تيانجين (حي خه بينغ وحي هونغتشياو) لقربه من محطة القطار السريع والفنادق الكبرى والمطاعم الحلال.',
        en: 'Downtown Tianjin (Heping & Hongqiao Districts) near Tianjin HSR station, Grand Mosque, and luxury business hotels.'
      },
      {
        ar: 'منطقة بينهاي الجديدة (TEDA) لزيارات المصانع وميناء تيانجين والمناطق الحرة.',
        en: 'Binhai New Area (TEDA) for proximity to container terminals, bonded zones, and industrial plants.'
      }
    ],
    localTransportAdvice: {
      ar: 'مترو أنفاق تيانجين يربط وسط المدينة بالميناء ومحطات القطار السريع والمطار بدقة بالغة؛ التاكسي وDidi متوفران بتكلفة منخفضة.',
      en: 'Tianjin Metro network seamlessly links the central city, Binhai port zone, and airport; Didi ride-hailing is fast and inexpensive.'
    },
    languageTips: {
      ar: 'المندرينية القياسية هي السائدة؛ يُفضل الاستعانة بمترجم تجاري أثناء زيارة مصانع الدراجات والسجاد في القرى الصناعية.',
      en: 'Standard Mandarin is universally spoken; a local sourcing guide is recommended when inspecting manufacturing plants in Wuqing.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'the-ritz-carlton-tianjin',
        name: {
          ar: 'فندق ريتز كارلتون تيانجين (The Ritz-Carlton, Tianjin)',
          en: 'The Ritz-Carlton, Tianjin',
          zh: '天津丽思卡尔顿酒店'
        },
        category: { ar: 'ألترا فاخر 5 نجوم', en: 'Ultra-Luxury 5-Star' },
        area: {
          ar: 'حي خه بينغ التاريخي، وسط تيانجين',
          en: 'Heping District, Downtown Tianjin'
        },
        address: {
          ar: '167 طريق دا قو الشمالي، حي خه بينغ، تيانجين',
          en: '167 Dagubei Road, Heping District, Tianjin',
          zh: '天津市和平区大沽北路167号'
        },
        highlights: {
          ar: 'أفخم فندق أعمال بالمدينة على الطراز الكلاسيكي الأنيق، خدمات تنفيذية راقية بالقرب من المركز المالي ونهر هايخه',
          en: 'Tianjin premier luxury landmark hotel overlooking the Haihe River with opulent executive amenities and English-speaking staff.'
        }
      },
      {
        id: 'renaissance-tianjin-teda-hotel',
        name: {
          ar: 'فندق رينيسانس تيانجين تيدا (Renaissance Tianjin TEDA)',
          en: 'Renaissance Tianjin TEDA Convention Centre Hotel',
          zh: '天津万丽泰达酒店'
        },
        category: { ar: 'أعمال فاخر 5 نجوم', en: 'Business 5-Star' },
        area: {
          ar: 'منطقة بينهاي الجديدة (TEDA)، بالقرب من الميناء',
          en: 'Binhai New Area (TEDA), Port Corridor'
        },
        address: {
          ar: '29 طريق نان هاي، منطقة بينهاي الجديدة، تيانجين',
          en: '29 Nanhai Road, TEDA, Binhai New Area, Tianjin',
          zh: '天津市滨海新区泰达南海路29号'
        },
        highlights: {
          ar: 'الفندق المفضل لرجال الأعمال ومستوردي الحاويات وزوار مصانع الميناء والمنطقة الحرة الدولية',
          en: 'Top choice for port shipping executives and industrial buyers visiting Binhai factories and bonded logistics zones.'
        }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'tianjin-grand-mosque-halal-street',
        name: {
          ar: 'مطاعم شارع المسجد الكبير الحلال بتيانجين',
          en: 'Tianjin Grand Mosque Halal Food Quarter',
          zh: '天津清真大寺美食街'
        },
        cuisineType: {
          ar: 'مأكولات إسلامية عريقة، لحوم ضأن مشوية، وحلويات ومعجنات هوي التقليدية',
          en: 'Authentic Tianjin Hui Muslim Cuisine, Roasted Lamb & Steamed Buns'
        },
        isHalal: true,
        address: {
          ar: 'شارع تسيتشوان، حي هونغتشياو، تيانجين',
          en: 'Dafeng Road near Grand Mosque, Hongqiao District, Tianjin',
          zh: '天津市红桥区大丰路清真大寺旁'
        },
        recommendedFor: {
          ar: 'تناول أشهى الأطباق الحلال المعتمدة وزيارة مسجد تيانجين الكبير التراثي للصلاة',
          en: 'Savoring authentic certified halal mutton dishes and performing prayers at the historic Grand Mosque.'
        }
      },
      {
        id: 'hongshun-halal-restaurant-tianjin',
        name: {
          ar: 'مطعم هونغ شون التراثي للمأكولات الحلال (تأسس منذ عقود)',
          en: 'Hong Shun Halal Restaurant Tianjin',
          zh: '天津清真鸿顺饭庄'
        },
        cuisineType: {
          ar: 'أطباق إسلامية كلاسيكية، لحم بقري متبل، ومعجنات تيانجين الشهيرة',
          en: 'Classic Chinese Halal Braised Beef, Mutton & Delicacies'
        },
        isHalal: true,
        address: {
          ar: 'حي هونغتشياو، تيانجين',
          en: 'Hongqiao District Commercial Area, Tianjin',
          zh: '天津市红桥区西关大街'
        },
        recommendedFor: {
          ar: 'وجبات عمل حلال مريحة وأصيلة لمستوردي الدراجات ومعدات الموانئ',
          en: 'Reliable authentic halal business luncheons for industrial and commercial delegations.'
        }
      }
    ]
  },
  relatedCitySlugs: ['beijing', 'cangzhou', 'qingdao', 'linyi', 'shanghai'],
  relatedProductSlugs: [
    'bicycles-electric-bikes',
    'carpets-home-textiles',
    'steel-pipes-metallurgy',
    'maritime-shipping-logistics'
  ],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل تيانجين التجاري والصناعي | مصانع الدراجات، السجاد، أنابيب الصلب وميناء تيانجين',
      en: 'Tianjin Sourcing Guide | Bicycles, Carpets, Steel Pipes & Port Logistics'
    },
    description: {
      ar: 'دليل الاستيراد من تيانجين: مصانع الدراجات في وانغ تشينغ تيو، السجاد في تسويهوانغكو، أنابيب الصلب في دا تشيو تشوانغ، خدمات ميناء تيانجين، الفنادق والمطاعم الحلال.',
      en: 'Complete Tianjin sourcing guide: Bicycles & e-bikes in Wangqingtuo, carpets in Cuihuangkou, steel pipes in Daqiuzhuang, port logistics, hotels, and certified halal dining.'
    }
  }
};
