import { ICity } from '../../types';

export const cixiCity: ICity = {
  id: 'cixi',
  slug: 'cixi',
  name: { ar: 'سيشي', en: 'Cixi', zh: '慈溪' },
  province: { ar: 'تشيجيانغ', en: 'Zhejiang', zh: '浙江省' },
  region: 'Yangtze River Delta',
  tier: 'tier-2',
  commercialImportanceScore: 92,
  heroImage: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'العاصمة العالمية الأولى لتصنيع الأجهزة المنزلية والمطبخية الصغيرة (تنتج أكثر من 50% من مدافئ ودفيات الكهرباء ومبردات المياه في العالم). تضم أكثر من 2000 مصنع لتجميع الأجهزة و10,000 مصنع للمكونات، ومقر عملاق المفاتيح والمقابس الكهربائية Bull Group، وعملاق فلاتر المياه Qinyuan، وعاصمة المحامل والرمانات الدقيقة (Miniature Bearings).',
    en: 'The undisputed Capital of Small Home Appliances in China, producing over 50% of the world electric space heaters, water coolers, and purifiers. Hosts over 2,000 complete appliance assembly plants, 10,000 component suppliers, Bull Group global HQ (electrical sockets), Qinyuan water systems, and China precision miniature bearing base.'
  },
  keyIndustries: ['home-appliances', 'electronics', 'hardware-bearings', 'plastics-rubber', 'power-plugs'],
  primaryProducts: {
    ar: [
      'المدافئ والدفيات الكهربائية (دفايات زيتية، سيراميك PTC، مدافئ هالوجين وكربونية)',
      'مبردات وموزعات وأجهزة تنقية المياه والفلاتر المنزلية والتجارية (Qinyuan)',
      'توصيلات الكهرباء والمقابس والمفاتيح الجدارية ومحولات الطاقة (المقر العالمي لشركة Bull Group)',
      'أجهزة المطبخ الكهربائية (مقالي هوائية، غلايات كهربائية، خلاطات، صانعات ساندويتش)',
      'المراوح الكهربائية ومكيفات الهواء الصحراوية وأجهزة إزالة الرطوبة',
      'مكاوي البخار العمودية وأجهزة إزالة الوبر عن الملابس',
      'المحامل والرمانات الدقيقة فائقة السرعة (Miniature Bearings)'
    ],
    en: [
      'Electric Space Heaters (Oil radiators, PTC ceramic, quartz, halogen & carbon heaters)',
      'Water Dispensers, Instant Water Boilers & RO Water Purifiers (Qinyuan HQ)',
      'Electrical Power Strips, Extension Sockets, Wall Switches & Plugs (Bull Group Global HQ)',
      'Small Kitchen Appliances (Air fryers, electric kettles, sandwich makers, blenders)',
      'Electric Table/Stand Fans, Evaporative Air Coolers & Dehumidifiers',
      'Garment Steamers, Travel Steam Irons & Fabric Lint Removers',
      'Precision Miniature Steel Bearings for motors and appliances'
    ]
  },
  bestFor: ['Home Appliance Importers', 'Kitchenware Buyers', 'Electrical Socket Wholesalers', 'OEM/ODM Brand Sourcing'],
  districts: [
    {
      id: 'zhouxiang-appliance-town',
      cityId: 'cixi',
      name: { ar: 'بلدة تشوشيانغ للأجهزة الكهربائية (Zhouxiang Town)', en: 'Zhouxiang Small Appliance Industrial Town', zh: '周巷镇（中国小家电之都核心区）' },
      activityType: { ar: 'عاصمة صناعة المدافئ الكهربائية ومبردات المياه ومكاوي البخار في العالم', en: 'Global Manufacturing Core for Electric Heaters & Steamers' },
      mainProducts: ['دفيات زيتية وكهربائية', 'مبردات مياه', 'مكاوي بخار', 'غلايات مياه'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Yuyao North High-Speed Rail Station (15 min taxi)'
    },
    {
      id: 'fuhai-radiator-hub',
      cityId: 'cixi',
      name: { ar: 'بلدة فوهاي لصناعة الدفيات والمبردات (Fuhai Town)', en: 'Fuhai Heater & Dispenser Town', zh: '附海镇（电暖器与饮水机制造重镇）' },
      activityType: { ar: 'أكبر قاعدة لتصدير الدفيات وموزعات المياه بتكلفة مصنعية تنافسية للغاية', en: 'Mass Production Cluster for Electric Radiators & Water Coolers' },
      mainProducts: ['دفايات شتوية', 'أجهزة تنقية مياه', 'مراوح تبريد', 'حقن بلاستيك أجهزة'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestStation: 'Yuyao North Station'
    },
    {
      id: 'guanhaiwei-bull-sockets',
      cityId: 'cixi',
      name: { ar: 'بلدة قوانهايوي ومقر شركة بول للمقابس (Guanhaiwei Town)', en: 'Guanhaiwei Electrical Hardware & Bull Group HQ', zh: '观海卫镇（公牛集团总部及插座开关基地）' },
      activityType: { ar: 'عاصمة المقابس والوصلات الكهربائية ومفاتيح الإضاءة المنزلية والصناعية', en: 'Global Benchmark for Extension Power Sockets & Wall Switches' },
      mainProducts: ['مشتركات كهرباء وتوصيلات', 'مفاتيح وقواطع كهربائية', 'شواحن سيارات كهربائية منزلية', 'كابلات تمديد'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Cixi Center'
    },
    {
      id: 'cixi-cidong-hangzhou-bay',
      cityId: 'cixi',
      name: { ar: 'منطقة سي دونغ وخليج هانغتشو الصناعية (Cidong & Hangzhou Bay)', en: 'Cidong High-Tech & Hangzhou Bay Smart Appliance Base', zh: '慈东工业区 / 杭州湾新区智能家电产业园' },
      activityType: { ar: 'المصانع المؤتمتة الضخمة للأجهزة الذكية، تصنيع سيارات جيلي الكهربائية ومصانع التصدير العالمية', en: 'Automated Smart Home Appliance Megafactories & Geely EV Base' },
      mainProducts: ['أجهزة منزلية متصلة بالإنترنت IoT', 'ثلاجات سيارات وغسالات صغيرة', 'مركبات كهربائية'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Hangzhou Bay New Zone'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'cixi-international-appliance-center',
      cityId: 'cixi',
      name: { ar: 'مركز سيشي الدولي لمعارض وأسواق الأجهزة المنزلية (Cixi Appliance Expo Center)', en: 'Cixi International Home Appliance Sourcing Center', zh: '慈溪市会展中心 / 慈溪家电博览城' },
      type: 'Wholesale',
      category: 'Small Home Appliances & Kitchenware',
      description: {
        ar: 'المركز الدائم لعرض وتسويق أحدث منتجات الأجهزة المنزلية لمصانع سيشي. يضم صالات عرض متخصصة لآلاف الماركات والمصانع لعرض المدافئ الجديدة، المقالي الهوائية، المكاوي، مبردات المياه، والأجهزة الحاصلة على شهادات المواصفات الخليجية SASO وGCC والشهادات الأوروبية CE/CB.',
        en: 'Permanent sourcing and exhibition center showcasing the latest small appliance innovations from Cixi factories. Features hundreds of manufacturer pavilions displaying electric heaters, air fryers, water dispensers with full SASO, GCC, and CE/CB test certificates.'
      },
      address: { ar: '588 طريق بيتشوان، مدينة سيشي، نينغبو', en: '588 Beichuan Rd, Cixi City, Ningbo, Zhejiang', zh: '浙江省宁波市慈溪市北三环东路588号慈溪国际会展中心' },
      nearestStation: 'Yuyao North High-Speed Rail Station (20 min taxi)',
      operatingHours: '08:30 - 17:00',
      moqLevel: 'Medium'
    },
    {
      id: 'zhouxiang-small-appliance-market',
      cityId: 'cixi',
      name: { ar: 'سوق بلدة تشوشيانغ للأجهزة المنزلية وقطع الغيار (Zhouxiang Appliance Mart)', en: 'Zhouxiang Small Home Appliance & Parts Market', zh: '周巷小家电电子配件市场' },
      type: 'Wholesale',
      category: 'Home Appliances & Electrical Spare Parts',
      description: {
        ar: 'سوق الجملة المباشر في بلدة تشوشيانغ يربط المستوردين بمصانع التجميع وموردي القطع (هيترات تسخين، ثيرموستات، محركات مراوح، أسلاك نحاسية، وقوالب بلاستيك).',
        en: 'Wholesale hub connecting global buyers directly with Zhouxiang assembly plants and component vendors for heating elements, fan motors, thermostats, and plastic shells.'
      },
      address: { ar: 'طريق تشنغنان، بلدة تشوشيانغ، سيشي', en: 'Chengnan Rd, Zhouxiang Town, Cixi', zh: '浙江省宁波市慈溪市周巷镇' },
      nearestStation: 'Yuyao North Railway Station',
      operatingHours: '08:00 - 16:30',
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'bull-group-global-hq-park',
      cityId: 'cixi',
      name: { ar: 'المقر والمجمع الصناعي العالمي لشركة بول للكهرباء (Bull Group Global Park)', en: 'Bull Group Global Smart Electrical Headquarters Base', zh: '公牛集团全球总部及智能电气产业基地（观海卫）' },
      clusterSpecialization: { ar: 'أكبر مصنع ومبتكر لمقابس الكهرباء ومحولات الشحن والتجهيزات الكهربائية الذكية في آسيا', en: 'Asia Largest Electrical Power Strip, Wall Switch & Smart EV Charger Manufacturer' },
      factoryTypes: ['Fully Automated Injection & Assembly Lines', 'National Certified Testing Labs'],
      keyProducts: ['توصيلات كهربائية بمواصفات أمان دولية', 'مفاتيح إنارة جدارية فاخرة', 'محولات وشواحن USB ذكية'],
      specializationLevel: 'High'
    },
    {
      id: 'qinyuan-water-purification-base',
      cityId: 'cixi',
      name: { ar: 'قاعدة تشينيوان لأنظمة تنقية وتبريد المياه (Qinyuan Water Systems Base)', en: 'Qinyuan Water Treatment & Dispenser Manufacturing Base', zh: '沁园集团总部及净水设备制造中心' },
      clusterSpecialization: { ar: 'تصنيع محطات ومبردات وفلاتر تنقية المياه المنزلية والتجارية وأجهزة التناضح العكسي RO', en: 'Commercial & Household Water Dispensers, RO Water Purifiers & Filter Cartridges' },
      factoryTypes: ['Cleanroom Filter Assembly', 'Automated Sheet Metal Stamping'],
      keyProducts: ['مبردات مياه قائمة ومكتبية', 'فلاتر تنقية RO التناضح العكسي', 'غلايات مياه فورية ذكية'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'cx-space-heaters-radiators',
      productName: { ar: 'المدافئ والدفيات الكهربائية المنزلية بأنواعها', en: 'Electric Space Heaters, Oil Radiators & Convection Heaters' },
      industryCategory: 'home-appliances',
      whyThisCity: { ar: 'تنتج سيشي أكثر من 50% من مدافئ الكهرباء المصدرة في العالم، وتتميز بأقوى قدرة على تسليم طلبيات الخريف والشتاء الضخمة في أوقات قياسية.', en: 'Cixi manufactures over half of the world electric room heaters, offering unbeatable scale and certified export compliance.' },
      mainManufacturingArea: { ar: 'تشوشيانغ وفوهاي (Zhouxiang & Fuhai)', en: 'Zhouxiang and Fuhai Towns' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'cx-water-dispensers-coolers',
      productName: { ar: 'مبردات وموزعات المياه المنزلية والمكتبية وأجهزة التنقية', en: 'Water Coolers, Commercial Dispensers & Purifiers' },
      industryCategory: 'home-appliances',
      whyThisCity: { ar: 'المصدر الأكبر لمبردات المياه للشرق الأوسط والخليج، مصممة لتحمل درجات الحرارة المرتفعة ومزودة بضواغط تبريد قوية معتمدة.', en: 'Premier supplier of heavy-duty compressor water coolers designed specifically for high-temperature Middle Eastern climates.' },
      mainManufacturingArea: { ar: 'تشوشيانغ وفوهاي', en: 'Zhouxiang and Fuhai' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'cx-electrical-sockets-switches',
      productName: { ar: 'المقابس والمشتركات الكهربائية وتوصيلات الأمان والمفاتيح', en: 'Electrical Power Strips, Universal Extension Cords & Wall Switches' },
      industryCategory: 'electronics',
      whyThisCity: { ar: 'مقر مجموعة Bull Group ومئات المصانع المتخصصة يوفران مقابس بريطانية وأمريكية وأوروبية بمقاومة فائقة للحرارة والحرائق.', en: 'Global leader in fire-retardant power extension cords and international socket adapters (UK, EU, US, Gulf plugs).' },
      mainManufacturingArea: { ar: 'قوانهايوي (Guanhaiwei)', en: 'Guanhaiwei Town' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Ningbo Lishe International Airport (NGB - 60 دقيقة بالسيارة)',
      'Hangzhou Xiaoshan Airport (HGH - 70 دقيقة عبر جسر خليج هانغتشو)'
    ],
    seaPorts: [
      'Ningbo-Zhoushan Port (ميناء نينغبو العملاق - على بعد 45 دقيقة فقط بالشاحنات السريعة، الميناء المباشر لشحن الأجهزة)',
      'Shanghai Port (عبر جسر خليج هانغتشو البحري 36 كم في ساعتين)'
    ],
    highSpeedRailwayStations: [
      'Yuyao North Railway Station (余姚北站 - المحطة الرئيسية للقطار السريع الأقرب لسيشي وتشوشيانغ، 15 دقيقة بالتاكسي)',
      'Cixi Railway Station (محطة سيشي المستقبلية لخط نينغبو-شانغهاي السريع)'
    ],
    seaFreightSuitability: {
      ar: 'مثالية واستثنائية؛ ترتبط مصانع سيشي مباشرة بميناء نينغبو الأكبر عالمياً عبر طرق شاحنات سريعة تتيح نقل وتفريغ الحاويات على متن السفن خلال ساعات قليلة وبأقل تكلفة نقل بري.',
      en: 'Exceptional; Cixi factories are directly linked via multi-lane expressways to Ningbo-Zhoushan port, enabling rapid container turnarounds at lowest inland drayage rates.'
    },
    airFreightSuitability: {
      ar: 'شحن العينات الجوي سريع وسهل عبر مطاري نينغبو وهانغتشو.',
      en: 'Fast air sample export through Ningbo NGB and Hangzhou HGH airports.'
    },
    primaryCargoRoutes: {
      ar: [
        'خطوط حاويات بحرية يومية من ميناء نينغبو إلى كافة موانئ الخليج العربي والبحر الأحمر وإفريقيا',
        'شحن سريع لعينات الأجهزة الكهربائية الجديدة عبر وكلاء البريد السريع'
      ],
      en: [
        'Daily container sailings from Ningbo Port to Jebel Ali, Jeddah, Dammam, Salalah, and Sokhna',
        'Air courier express sample dispatch for seasonal appliance certifications'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['مارس (معرض سيشي الدولي للأجهزة)', 'أبريل', 'سبتمبر', 'أكتوبر', 'نوفمبر'],
    suggestedStayDays: 3,
    weatherSummary: {
      ar: 'طقس معتدل في الربيع والخريف، مناسب جداً للقيام بجولات ميدانية بين مصانع تشوشيانغ وفوهاي ومجمع خليج هانغتشو.',
      en: 'Mild and pleasant in Spring and Autumn, ideal for touring Zhouxiang and Fuhai appliance assembly lines.'
    },
    recommendedStayAreas: [
      {
        ar: 'وسط مدينة سيشي الحديث (Cixi Downtown): بالقرب من الفنادق الفاخرة ومركز المعارض والمطاعم.',
        en: 'Cixi Downtown: Near Hyatt Regency, exhibition center, and premium amenities.'
      },
      {
        ar: 'منطقة خليج هانغتشو الجديدة (Hangzhou Bay New Zone): للمستثمرين في مصانع التكنولوجيا والسيارات والأجهزة الذكية الكبرى.',
        en: 'Hangzhou Bay New Zone: Next to mega automated factories and Geely auto park.'
      }
    ],
    localTransportAdvice: {
      ar: 'للوصول إلى سيشي، استقل القطار فائق السرعة إلى محطة يويوان الشمالية (Yuyao North Station)، ثم خذ تاكسي لمدة 15 دقيقة لتصل إلى فنادق سيشي. داخل المدينة، استخدم تطبيق DiDi للتنقل بين المصانع.',
      en: 'Take high-speed rail to Yuyao North Station, then a 15-minute taxi to Cixi hotels. Use DiDi for visiting suburban industrial towns.'
    },
    languageTips: {
      ar: 'مديرو المبيعات في مصانع الأجهزة الكبرى يتحدثون الإنجليزية بطلاقة ومطلعون على مواصفات التصدير ومقابس الشرق الأوسط. في ورش المكونات الصغيرة، يفضل استخدام WeChat للترجمة الفورية.',
      en: 'Export sales reps at major appliance plants speak good business English and know GCC/SASO standards. WeChat translate works well in component shops.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'hyatt-regency-cixi',
        name: { ar: 'فندق حياة ريجنسي سيشي (Hyatt Regency Cixi)', en: 'Hyatt Regency Cixi', zh: '慈溪凯悦酒店' },
        category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
        area: { ar: 'وسط مدينة سيشي، طريق بيتشوان', en: 'Cixi Downtown, Beichuan Rd' },
        highlights: { ar: 'أفخم فندق أعمال في سيشي، غرف عصرية أنيقة، مركز لياقة ومسابح، وردهة تنفيذية لرجال الأعمال والمستوردين', en: 'Top international luxury hotel in Cixi, executive business lounge, near Cixi Expo Center' }
      },
      {
        id: 'grand-skylight-cixi',
        name: { ar: 'فندق جراند سكايلايت سيشي (Grand Skylight Hotel Cixi)', en: 'Grand Skylight Hotel Cixi', zh: '慈溪格兰云天大酒店' },
        category: { ar: 'فاخر 5 نجوم تجاري', en: 'Upscale Business 5-Star' },
        area: { ar: 'المنطقة التجارية الجديدة، سيشي', en: 'New Commercial CBD, Cixi' },
        highlights: { ar: 'خدمات أعمال ممتازة، قاعات مؤتمرات دولية، وموقع وسطي مريح للتنقل بين المصانع', en: 'Spacious business suites, banquet halls, and central access to factory belts' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'lanzhou-halal-beef-cixi',
        name: { ar: 'مطعم لانتشو الإسلامي الحلال بـ سيشي (Lanzhou Halal Beef)', en: 'Lanzhou Halal Beef Noodles Cixi', zh: '兰州正宗清真牛肉拉面（慈溪文化商务区店）' },
        cuisineType: { ar: 'مأكولات إسلامية صينية ونودلز ولحم ضأن حلال', en: 'Traditional Halal Beef Noodles & Lamb' },
        isHalal: true,
        address: { ar: 'طريق تشيشينغ، المنطقة الثقافية والتجارية، سيشي', en: 'Qixing Rd, Cultural Commercial District, Cixi', zh: '浙江省宁波市慈溪市七星路' },
        recommendedFor: { ar: 'وجبات حلال سريعة ونظيفة، لحم ضأن مشوي، ونودلز طازجة للمسافرين لزيارة المصانع', en: 'Fresh hand-pulled halal noodles, beef soup, and clean quick lunch' }
      },
      {
        id: 'oasis-xinjiang-halal-cixi',
        name: { ar: 'مطعم واحة شينجيانغ الحلال (Oasis Xinjiang Halal)', en: 'Oasis Xinjiang Halal Restaurant Cixi', zh: '绿洲新疆清真餐厅' },
        cuisineType: { ar: 'مأكولات شينجيانغ ومشاوي حلال معتمدة', en: 'Xinjiang Halal BBQ & Roast Lamb' },
        isHalal: true,
        address: { ar: 'طريق هانشنغ، مدينة سيشي', en: 'Hansheng Rd, Cixi City', zh: '浙江省宁波市慈溪市汉城路' },
        recommendedFor: { ar: 'مشاوي لحم الضأن بالعظم، أرز البلوف بالزبيب، ودجاج دابانجي، مناسب لغداء عمل مريح', en: 'Charcoal grilled lamb skewers, Xinjiang pilaf, and business dinner' }
      }
    ],
    touristAttractions: [
      {
        id: 'hangzhou-bay-bridge',
        name: { ar: 'جسر خليج هانغتشو البحري العملاق (Hangzhou Bay Bridge - 杭州湾跨海大桥)', en: 'Hangzhou Bay Trans-Oceanic Bridge', zh: '杭州湾跨海大桥' },
        category: { ar: 'أحد أطول الجسور البحرية في العالم ومعلم هندسي', en: 'Engineering Wonder & Scenic Ocean Bridge' },
        description: { ar: 'تحفة هندسية عالمية بطول 36 كم تعبر خليج هانغتشو وتربط سيشي ونينغبو مباشرة بمدينة شانغهاي، وتضم في منتصفها منصة برج المراقبة البحري (Sea View Tower).', en: '36km mega cross-sea bridge connecting Cixi and Ningbo to Shanghai, featuring a sea-view observation tower.' }
      },
      {
        id: 'minghe-ancient-town',
        name: { ar: 'بلدة مينغهي المائية التاريخية (Minghe Ancient Town - 鸣鹤古镇)', en: 'Minghe Ancient Water Town', zh: '鸣鹤古镇' },
        category: { ar: 'بلدة تاريخية تراثية عريقة', en: 'Historical 1,200-Year-Old Water Town' },
        description: { ar: 'بلدة تراثية يعود تاريخها لأسرة تانغ (أكثر من 1200 عام) على ضفاف بحيرة باييانغ، تشتهر بالطب الصيني التقليدي والمباني التراثية الرمادية.', en: 'Ancient scenic lakeside town dating to the Tang Dynasty, renowned for traditional Chinese medicine heritage and waterside architecture.' }
      }
    ],
    essentialServices: [
      {
        id: 'cixi-appliance-export-testing',
        serviceType: { ar: 'الفحص المخبري واعتمادات الأجهزة المنزلية', en: 'Appliance Testing & Certification' },
        title: { ar: 'معهد فحص وتفتيش الأجهزة المنزلية والتصدير بـ سيشي (Cixi Appliance Testing Lab)', en: 'Cixi Export Home Appliance Testing Center', zh: '慈溪市家用电器产品质量检测中心' },
        description: { ar: 'فحص مطابقة المواصفات القياسية الدولية والخليجية للأجهزة الكهربائية وإصدار تقارير الاختبار (CE, CB, SASO, GCC, RoHS).', en: 'Accredited testing laboratory for electrical safety, energy efficiency, and SASO/GCC compliance certifications.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'china-cixi-home-appliance-expo',
      name: { ar: 'معرض الصين سيشي الدولي للأجهزة المنزلية الصغيرة (China Cixi Home Appliance Expo)', en: 'China (Cixi) International Home Appliance Expo', zh: '中国慈溪小家电博览会' },
      industry: 'Small Home Appliances, Kitchen Electronics & Components',
      venue: { ar: 'مركز سيشي الدولي للمعارض والمؤتمرات', en: 'Cixi International Convention and Exhibition Center', zh: '慈溪国际会展中心' },
      occurrence: { ar: 'مارس سنوياً', en: 'Annually in March' },
      officialWebsite: 'http://www.cixiexpo.com',
      bestFor: ['Appliance Importers', 'Kitchenware Retailers', 'Wholesalers', 'Component Sourcing']
    }
  ],
  relatedCitySlugs: ['ningbo', 'yuyao', 'yiwu', 'hangzhou', 'shunde'],
  relatedProductSlugs: ['home-appliances', 'electronics', 'hardware-tools'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل سيشي التجاري الشامل | عاصمة الأجهزة المنزلية الصغيرة والدفيات', en: 'Cixi Sourcing Guide | Capital of Small Home Appliances in China' },
    description: { ar: 'دليل شامل للاستيراد من سيشي نينغبو: مصانع المدافئ الكهربائية والدفيات، مبردات وفلاتر المياه، مقابس Bull، والفنادق والمطاعم الحلال.', en: 'Comprehensive guide to sourcing in Cixi: Electric space heaters, water dispensers, Bull electrical sockets, Zhouxiang appliance hub, and halal guide.' }
  }
};
