import { ICity } from '../../types';

export const chongqingCity: ICity = {
  id: 'chongqing',
  slug: 'chongqing',
  name: { ar: 'تشونغتشينغ', en: 'Chongqing', zh: '重庆' },
  province: { ar: 'بلدية تشونغتشينغ المباشرة', en: 'Chongqing Municipality', zh: '重庆市' },
  region: 'West China',
  tier: 'tier-1',
  commercialImportanceScore: 95,
  heroImage: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'العاصمة العالمية الأولى لصناعة الدراجات النارية والسيارات (تنتج أكثر من ثلث دراجات العالم النارية وتضم عمالقة الصناعة Loncin وZongshen وLifan وChangan Auto). أكبر بلدية صناعية وسكانية في الصين (32 مليون نسمة)، تقع عند ملتقى نهري اليانغتسي وجيالينغ، وتضم مجمع شاوتيانمين التجاري التاريخي الضخم، وميناء نهر يانغتسي الداخلي الأكبر، ومحطة انطلاق قطار الشحن الأوراسي يوكسينو (Yuxinou).',
    en: 'World Capital of Motorcycles & Automobiles (producing over 1/3 of global motorcycles and hosting automotive giant Changan Auto, Loncin, Zongshen, and Lifan). China largest municipal industrial metropolis (32 million population) set on the Yangtze River, featuring the historic Chaotianmen wholesale belt and origin of the Yuxinou China-Europe rail freight route.'
  },
  keyIndustries: ['motorcycles-atv', 'automobiles-ev', 'machinery-generators', 'laptop-assembly', 'river-shipping', 'general-merchandise'],
  primaryProducts: {
    ar: [
      'الدراجات النارية، الدراجات الترابية، الدراجات ثلاثية العجلات، ومركبات الـ ATV (Loncin & Zongshen)',
      'السيارات والمركبات الكهربائية الذكية ومحركات الاحتراق (المقر العالمي لشركة Changan Auto)',
      'مولدات الكهرباء بالبنزين والديزل والمضخات ومحركات الحدائق الصغيرة',
      'قطع غيار الدراجات النارية والسيارات، التروس، المساعدين، والفرامل',
      'أجهزة الكمبيوتر المحمولة المجمعة والشاشات (تصنع ثلث أجهزة الكمبيوتر المحمولة في العالم)',
      'الملابس الجاهزة والمنسوجات والسلع المنزلية بالجملة (مجمع شاوتيانمين)'
    ],
    en: [
      'Motorcycles, Dirt Bikes, Cargo Tricycles & All-Terrain Vehicles (ATVs) (Loncin, Zongshen HQs)',
      'Smart Electric Vehicles (EVs), Sedans, SUVs & Powertrains (Changan Auto Global HQ)',
      'Gasoline & Diesel Portable Generators, Water Pumps & Small Power Machinery',
      'Motorcycle & Automotive Components (Gears, shock absorbers, clutches, braking systems)',
      'Laptop Computer Assembly (Produces 1 in every 3 laptops globally via Quanta/Compal bases)',
      'Ready-to-Wear Apparel, Soft Home Goods & Commodities Wholesale (Chaotianmen Belt)'
    ]
  },
  bestFor: ['Motorcycle & ATV Importers', 'Automotive & EV Parts Wholesalers', 'Generator & Small Engine Buyers', 'Laptop & Electronics Sourcing'],
  districts: [
    {
      id: 'yuzhong-chaotianmen-core',
      cityId: 'chongqing',
      name: { ar: 'منطقة يوتشونغ وشاوتيانمين (Yuzhong & Chaotianmen)', en: 'Yuzhong District & Chaotianmen Wholesale Hub', zh: '渝中区 / 朝天门综合批发市场群' },
      activityType: { ar: 'شبه جزيرة تشونغتشينغ التاريخية، مجمع شاوتيانمين التجاري الضخم (28 مبنى جملة)، وناطحة سحاب رافلز سيتي', en: 'Historic Commercial Peninsula, Chaotianmen 28-Building Wholesale Hub & Raffles City' },
      mainProducts: ['ملابس جاهزة', 'أقمشة ومنسوجات', 'أحذية وحقائب', 'سلع صغيرة'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Chaotianmen Station (Line 1)'
    },
    {
      id: 'jiangbei-changan-auto',
      cityId: 'chongqing',
      name: { ar: 'منطقة جيانغباي والمقر العالمي لسيارات شانغان (Jiangbei Changan HQ)', en: 'Jiangbei District & Changan Auto Global Base', zh: '江北区 / 长安汽车全球总部 / 鱼复工业园' },
      activityType: { ar: 'المقر العالمي لسيارات شانغان (Changan Automobile)، مركز جيانغبايتزوي المالي والتقني', en: 'Changan Auto Global HQ, Yufu Automotive Megapark & Financial CBD' },
      mainProducts: ['سيارات ركاب وسيارات كهربائية', 'مكونات دفع ذكية', 'خدمات مصرفية'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Jiangbeizui Station (Line 6 / Line 9)'
    },
    {
      id: 'nanan-zongshen-motorcycle',
      cityId: 'chongqing',
      name: { ar: 'منطقة نانآن ومجمع تصنيع الدراجات النارية (Nan\'an Motorcycle Base)', en: 'Nan\'an District & Zongshen/Loncin Motorcycle Hub', zh: '南岸区 / 巴南区摩托车产业带（宗申/隆鑫）' },
      activityType: { ar: 'عاصمة مصانع الدراجات النارية الكبرى، المحركات، ومولدات الكهرباء المحمولة', en: 'Core Manufacturing Belt for Motorcycles, Quads, Tricycles & Small Engines' },
      mainProducts: ['دراجات نارية 125cc إلى 650cc', 'دراجات نقل بضائع ثلاثية', 'مولدات كهربائية'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Chongqing East High-Speed Station'
    },
    {
      id: 'lianglu-cuntan-bonded-port',
      cityId: 'chongqing',
      name: { ar: 'منطقة ليانغلو كونتان الحرة وميناء الحاويات (Lianglu Cuntan Port)', en: 'Lianglu Cuntan Free Trade Port Area & Guoyuan Port', zh: '两江新区 / 寸滩保税港区 / 果园港' },
      activityType: { ar: 'ميناء غويوان أكبر ميناء نهري متعدد الوسائط في الصين، تجميع حواسيب كوانتا وكومبال، ومحطة حاويات نهر يانغتسي', en: 'Guoyuan Multimodal Port, Quanta/Compal Laptop Megafactories & Inland Container Hub' },
      mainProducts: ['حواسيب محمولة', 'شحن حاويات نهري وبحري', 'سيارات تصديرية'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Baoshan Road Station (Line 9)'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'chongqing-chaotianmen-wholesale-complex',
      cityId: 'chongqing',
      name: { ar: 'مجمع شاوتيانمين التجاري الشامل بالجملة (Chaotianmen Wholesale Complex)', en: 'Chaotianmen Comprehensive Wholesale Market Complex', zh: '朝天门综合批发市场群（大生/金海洋/圣名）' },
      type: 'Wholesale',
      category: 'Apparel, Footwear, Bags & Daily Sundries',
      description: {
        ar: 'أضخم مجمع تجاري متكامل لأسواق الجملة في جنوب غرب الصين، يضم أكثر من 28 مبنى تجارياً عملاقاً متصلاً (أشهرها جينهاييانغ، داتشنغ، وسينغمينغ) يضم أكثر من 15,000 تاجر. يغطي الملابس الرجالية والنسائية، ملابس الأطفال، الأحذية الجلدية، الحقائب، السلع الاستهلاكية الصغيرة، ومستلزمات الفنادق والديكور بأسعار جملة تنافسية تخدم أسواق غرب الصين والتصدير البري.',
        en: 'Southwest China largest multi-tower wholesale commercial complex comprising 28 interconnected wholesale buildings housing over 15,000 merchants. Core trading ground for outerwear, casual clothing, footwear, travel bags, and household commodities directly supplying domestic and cross-border traders.'
      },
      address: { ar: 'طريق شينخوا، منطقة يوتشونغ، تشونغتشينغ', en: 'Xinhua Rd, Yuzhong District, Chongqing', zh: '重庆市渝中区新华路朝天门市场群' },
      nearestMetro: 'Chaotianmen Station (Line 1, Direct Underground Access)',
      operatingHours: '07:30 - 17:00',
      moqLevel: 'Low'
    },
    {
      id: 'chongqing-auto-motorcycle-parts-market',
      cityId: 'chongqing',
      name: { ar: 'سوق تشونغتشينغ الدولي لقطع غيار الدراجات والسيارات (Chongqing Auto & Moto Parts Mart)', en: 'Chongqing International Auto & Motorcycle Parts Market', zh: '重庆老顶坡汽摩配件城 / 白彭路国际汽摩城' },
      type: 'Wholesale',
      category: 'Motorcycle Spare Parts, Auto Components & Accessories',
      description: {
        ar: 'أكبر سوق مجمع لقطع غيار الدراجات النارية والسيارات في الصين، يضم أكثر من 2000 شركة ومصنع لتوريد محركات الدراجات، المكابس، الكربراتير، الإطارات، المساعدين، وقطع تعديل الدراجات والسيارات بأسعار تصدير فورية.',
        en: 'China largest auto and motorcycle components trade center. Directly links foreign buyers with manufacturers of motorcycle engines, carburetors, cylinders, suspension, brake pads, and aftermarket modification accessories.'
      },
      address: { ar: 'طريق بايبينغ، منطقة جيولونغبو، تشونغتشينغ', en: 'Baipeng Rd, Jiulongpo District, Chongqing', zh: '重庆市九龙坡区老顶坡汽配城' },
      nearestStation: 'Chongqing West Railway Station (15 min taxi)',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'changan-automobile-global-base',
      cityId: 'chongqing',
      name: { ar: 'قاعدة التصنيع والمقر العالمي لشركة شانغان للسيارات (Changan Automobile Global Base)', en: 'Changan Automobile Global Smart Manufacturing Base', zh: '长安汽车全球总部及智能网联汽车制造基地（两江新区）' },
      clusterSpecialization: { ar: 'المقر العالمي لشركة شانغان (Changan Auto) إحدى أضخم 4 شركات سيارات في الصين، ومصانع السيارات الكهربائية الذكية (Deepal, Avatr) ومصانع المحركات الروبوتية', en: 'Global HQ of Changan Automobile, operating advanced robotic manufacturing lines for smart EVs (Deepal, Avatr) and internal combustion engines' },
      factoryTypes: ['Automated Stamping & Welding Megaplants', 'EV Battery Pack Assembly Fabs', 'Proving Test Tracks'],
      keyProducts: ['سيارات دفع رباعي وسيارات كهربائية ذكية', 'محركات سيارات Blue Core', 'شاسيهات ومحاور نقل حركة'],
      specializationLevel: 'High'
    },
    {
      id: 'zongshen-loncin-motorcycle-cluster',
      cityId: 'chongqing',
      name: { ar: 'المجمع الصناعي العالمي لشركتي زونغشن ولونشين للدراجات (Zongshen & Loncin Base)', en: 'Zongshen & Loncin Global Motorcycle & Engine Industrial Base', zh: '宗申产业园与隆鑫通用动力制造基地（巴南/高新）' },
      clusterSpecialization: { ar: 'أكبر مركز في العالم لتصنيع وتصدير الدراجات النارية، المحركات البنزين الصغيرة، الدرجات ثلاثية العجلات، ومولدات الكهرباء المحمولة', en: 'World #1 Production Base for Motorcycles, Tricycles, Quad ATVs, and Small Gasoline Engines' },
      factoryTypes: ['Motorcycle Robotic Assembly Lines', 'Engine Die-Casting Fabs', 'Dyno Testing Cells'],
      keyProducts: ['دراجات نارية كروزر وسكوترات', 'محركات دراجات نارية 50cc-1000cc', 'مولدات كهربائية عاكسة Inverter Generators'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'cq-motorcycles-trikes-atvs',
      productName: { ar: 'الدراجات النارية، الدراجات ثلاثية العجلات، ومركبات الـ ATV وقطع الغيار', en: 'Motorcycles, Cargo Tricycles, Quad ATVs & Engine Parts' },
      industryCategory: 'motorcycles-atv',
      whyThisCity: { ar: 'عاصمة الدراجات النارية العالمية، تصنع أكثر من ثلث إنتاج العالم من الدراجات النارية، وتوفر حلول تجميع CKD وSKD فائقة المرونة للمستوردين.', en: 'World Motorcycle Capital manufacturing over 30% of global motorbikes, offering complete CKD/SKD knock-down kit export solutions.' },
      mainManufacturingArea: { ar: 'نانآن وبانان وجيولونغبو (Banan & Nan\'an)', en: 'Banan, Nan\'an & Jiulongpo Districts' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'cq-automobiles-evs-spares',
      productName: { ar: 'السيارات والمركبات الكهربائية وقطع غيار السيارات الأصلية', en: 'Automobiles, Electric Vehicles (EVs) & OEM Auto Parts' },
      industryCategory: 'automobiles-ev',
      whyThisCity: { ar: 'مقر سيارات Changan ومورديها، مما يتيح استيراد قطع غيار أصلية ومعدات الصيانة وتصدير المركبات بأسعار المصنع المباشرة.', en: 'Home to Changan and hundreds of tier-1 automotive suppliers with full international homologation certifications.' },
      mainManufacturingArea: { ar: 'ليانغجيانغ وجيانغباي (Liangjiang & Jiangbei)', en: 'Liangjiang New Area & Jiangbei' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'cq-gasoline-generators-engines',
      productName: { ar: 'مولدات الكهرباء المحمولة ومضخات المياه ومحركات البنزين الصغيرة', en: 'Portable Inverter Generators, Water Pumps & General Machinery' },
      industryCategory: 'machinery-generators',
      whyThisCity: { ar: 'تضم كبرى مصانع المولدات الكهربائية المصدرة للشرق الأوسط وإفريقيا (Loncin & Lifan) بموثوقية تشغيل عالية في درجات الحرارة المرتفعة.', en: 'Leading global export base for portable silent inverter generators and heavy-duty water pumps engineered for demanding climates.' },
      mainManufacturingArea: { ar: 'بانان وجيولونغبو', en: 'Banan & Jiulongpo' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Chongqing Jiangbei International Airport (CKG - مطار دولي محوري عملاق فئة 4F يضم 3 مدارج ومحطة شحن دولية كبرى)'
    ],
    seaPorts: [
      'Chongqing Guoyuan Port (果园港 - أكبر ميناء نهري متعدد الوسائط لشحن الحاويات في حوض نهر يانغتسي الداخلي)',
      'Lianglu Cuntan Bonded Port Area (محطات حاويات نهر يانغتسي المتصلة بميناء شانغهاي يانغشان)'
    ],
    highSpeedRailwayStations: [
      'Chongqing North Railway Station (重庆北站 - المحطة الرئيسية للقطارات السريعة)',
      'Chongqing West Railway Station (重庆西站 - محطة الربط مع جنوب وغرب الصين)',
      'Chongqing East Station (قيد الإنشاء كأضخم محطة قطار في آسيا)'
    ],
    seaFreightSuitability: {
      ar: 'شحن الحاويات النهري-البحري (River-Sea Intermodal) عبر نهر يانغتسي العملاق يربط تشونغتشينغ مباشرة بميناء شانغهاي يانغشان البحري بسفن حاويات نهرية مخصصة بأقل تكلفة شحن ممكنة للبضائع الثقيلة.',
      en: 'Yangtze River container barges provide continuous river-sea intermodal connection down to Shanghai Yangshan Port at rock-bottom heavy freight rates.'
    },
    airFreightSuitability: {
      ar: 'مطار جيانغبي (CKG) هو أحد أكبر بوابات الشحن الجوي في غرب الصين، ويوفر رحلات شحن بضائع مباشرة على متن طائرات شحن عملاقة.',
      en: 'Jiangbei (CKG) operates dedicated 747/777 freighter routes with cold chain, pharmaceutical, and high-tech electronics logistics facilities.'
    },
    primaryCargoRoutes: {
      ar: [
        'قطار الشحن الأوراسي السريع (Yuxinou Railway Express) ينطلق من تشونغتشينغ إلى كازاخستان، روسيا، بولندا، وألمانيا في 12 يوماً',
        'شحن بحري عبر صنادل نهر يانغتسي إلى ميناء شانغهاي ثم إلى كافة موانئ الخليج العربي والبحر الأحمر',
        'ممر الشحن التجاري البري-البحري الجديد (New International Land-Sea Trade Corridor) إلى ميناء بيبو وخليج تونكين'
      ],
      en: [
        'Pioneer Yuxinou Trans-Eurasian freight rail to Europe via Alashankou in 12 days',
        'Yangtze river barge container feeders linking to Shanghai ocean liners for global export',
        'New International Land-Sea Trade Corridor rail route south to Beibu Gulf ports'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['مارس', 'أبريل', 'مايو', 'أكتوبر', 'نوفمبر (أفضل الأوقات لتجنب حرارة الصيف الشديدة)'],
    suggestedStayDays: 4,
    weatherSummary: {
      ar: 'تُلقب بـ "المدينة الضبابية" وإحدى أفران الصين الصيفية؛ الصيف حار جداً ورطب، أما الربيع والخريف فمعتدلان وممتعان للغاية للتجول وزيارة المصانع وركوب القطارات المعلقة.',
      en: 'Subtropical climate famous for foggy skylines; summers are famously hot, while spring and autumn are remarkably pleasant for factory visits.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة يوتشونغ وجيفانغبي (Yuzhong / Jiefangbei CBD): قلب المدينة التاريخي والمالي، بالقرب من مجمع أسواق شاوتيانمين ومبنى رافلز سيتي وهونغيا دونغ.',
        en: 'Jiefangbei & Chaotianmen: Downtown core walking distance to wholesale markets, Raffles City, and Hongyadong.'
      },
      {
        ar: 'منطقة جيانغبايتزوي (Jiangbeizui Financial CBD): أحدث ناطحات السحاب والفنادق الفاخرة المطلة على التقاء النهرين ومقرات شركة شانغان للسيارات.',
        en: 'Jiangbeizui Financial CBD: Ultra-modern financial center facing the river confluence with 5-star luxury hotels.'
      }
    ],
    localTransportAdvice: {
      ar: 'قطار تشونغتشينغ الجبلي المعلق (Monorail Lines 2 & 3) ومترو الأنفاق يشكلان إحدى أعاجيب النقل الحضري في العالم؛ حيث يخترق القطار المباني السكنية (محطة Liziba الشهيرة). استخدم تطبيق DiDi أو مسح Alipay للتنقل بسهولة بين الجبال والجسور.',
      en: 'Chongqing Monorail and Metro system (including the famous Liziba station where the train passes through an apartment building) is an engineering marvel. DiDi is essential for navigating the hilly multi-tier terrain.'
    },
    languageTips: {
      ar: 'في مقرات شركات السيارات والدراجات النارية الكبرى (Changan, Loncin, Zongshen)، مدراء التصدير يتحدثون الإنجليزية بطلاقة وملمون بالمواصفات القياسية. في أسواق شاوتيانمين، استخدم WeChat للترجمة الفورية.',
      en: 'Export executives at Changan and motorcycle plants speak proficient business English and handle global homologation. In Chaotianmen wholesale stalls, WeChat voice translate is handy.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'MetroMan Chongqing', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'intercontinental-chongqing-raffles-city',
        name: { ar: 'فندق إنتركونتيننتال تشونغتشينغ رافلز سيتي (InterContinental Raffles City)', en: 'InterContinental Chongqing Raffles City', zh: '重庆来福士洲际酒店' },
        category: { ar: 'أفخم فندق 5 نجوم أيقوني', en: 'Ultra-Luxury 5-Star' },
        area: { ar: 'مجمع رافلز سيتي، شاوتيانمين، يوتشونغ', en: 'Raffles City, Chaotianmen' },
        highlights: { ar: 'يقع داخل الجسر الكريستالي المعلق الأسطوري (The Crystal Skybridge) بارتفاع 250 متراً فوق التقاء نهري اليانغتسي وجيالينغ، ملاصق لأسواق شاوتيانمين للجملة ومحطة المترو', en: 'Set inside the iconic Crystal Skybridge suspended 250m above the river confluence, directly above Chaotianmen wholesale hub and subway' }
      },
      {
        id: 'regent-chongqing',
        name: { ar: 'فندق ريجنت تشونغتشينغ (Regent Chongqing)', en: 'Regent Chongqing', zh: '重庆丽晶酒店' },
        category: { ar: 'فاخر 5 نجوم تنفيذي', en: 'Executive Luxury 5-Star' },
        area: { ar: 'جيانغبايتزوي المالي، على ضفاف النهر', en: 'Jiangbeizui Financial CBD' },
        highlights: { ar: 'إطلالة ليلية ساحرة لا تُنسى على مباني هونغيا دونغ المضاءة عبر النهر، قاعات اجتماعات واسعة وخدمة ضيافة رفيعة المستوى لرجال الأعمال', en: 'Iconic riverfront views facing illuminated Hongyadong stilt houses, premier business lounge and executive boardrooms' }
      },
      {
        id: 'jw-marriott-chongqing',
        name: { ar: 'فندق جي دبليو ماريوت تشونغتشينغ (JW Marriott Hotel Chongqing)', en: 'JW Marriott Hotel Chongqing', zh: '重庆JW万豪酒店' },
        category: { ar: 'أعمال فاخر 5 نجوم', en: 'Upscale Business 5-Star' },
        area: { ar: 'برج التحرير جيفانغبي، وسط المدينة', en: 'Jiefangbei Commercial Core, Yuzhong' },
        highlights: { ar: 'موقع استراتيجي وسط مراكز التسوق والمطاعم الفاخرة ومحطة المترو المركزية', en: 'Prime downtown location next to Jiefangbei pedestrian mall and premier corporate offices' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'chongqing-islamic-association-halal',
        name: { ar: 'مطعم ومطبخ الجمعية الإسلامية ومسجد تشونغتشينغ (Chongqing Islamic Halal Hall)', en: 'Chongqing Grand Mosque Halal Dining', zh: '重庆清真寺清真餐厅' },
        cuisineType: { ar: 'مأكولات إسلامية سيتشوانية وحلال 100%', en: 'Authentic Sichuan Halal Cuisine' },
        isHalal: true,
        address: { ar: 'طريق تشونغشينغ، منطقة يوتشونغ، تشونغتشينغ', en: 'Zhongxing Rd, Yuzhong District, Chongqing', zh: '重庆市渝中区中兴路清真寺' },
        recommendedFor: { ar: 'صلاة الجمعة، وجبات حلال موثوقة طازجة، هوت بوت إسلامي حلال، ولحم ضأن متبل', en: 'Friday congregational prayers, authentic certified halal Sichuan hotpot, and tender beef dishes' }
      },
      {
        id: 'chongqing-halal-hotpot-palace',
        name: { ar: 'مطعم قصر الهوت بوت الإسلامي الحلال بـ تشونغتشينغ', en: 'Chongqing Authentic Halal Spicy Hotpot Palace', zh: '老真源清真火锅（解放碑店）' },
        cuisineType: { ar: 'هوت بوت سيتشواني حلال أصيل بمكونات طازجة معتمدة', en: 'Certified Halal Traditional Sichuan Hotpot' },
        isHalal: true,
        address: { ar: 'شارع مينهوا، بالقرب من جيفانغبي، تشونغتشينغ', en: 'Minhua St, near Jiefangbei, Yuzhong', zh: '重庆市渝中区解放碑民生路商圈' },
        recommendedFor: { ar: 'تجربة طبق تشونغتشينغ الأشهر عالمياً (الهوت بوت الحار) بطريقة حلال 100% مع شرائح لحم الضأن والبقر المتبلة', en: 'Famous authentic spicy Sichuan hotpot experience using certified halal beef tallow and fresh meats' }
      }
    ],
    touristAttractions: [
      {
        id: 'hongyadong-stilt-complex',
        name: { ar: 'مجمع هونغيا دونغ التراثي المعلق (Hongya Cave - 洪崖洞)', en: 'Hongya Cave (Hongyadong) Cliffside Complex', zh: '洪崖洞民俗风貌区' },
        category: { ar: 'معلم معماري وسياحي عالمي فريد على الجرف الجبلي', en: '11-Story Cliffside Traditional Stilt House Landmark' },
        description: { ar: 'مجمع معماري تاريخي مذهل يمتد بارتفاع 11 طابقاً على جرف صخري حاد يطل على نهر جيالينغ، يضاء ليلاً بالآلاف من الفوانيس الذهبية ليبدو كقصر سحري عائم.', en: 'World-famous multi-tiered traditional Diaojiaolou stilt architecture built on steep cliffs overlooking the river, brilliantly illuminated like a fairytale palace at night.' },
        nearestMetro: 'Xiaoshizi Station (Lines 1 & 6)'
      },
      {
        id: 'chongqing-raffles-crystal-skybridge',
        name: { ar: 'الجسر المعلق الكريستالي في رافلز سيتي (Raffles City Crystal Skybridge)', en: 'The Crystal Skybridge at Raffles City Chongqing', zh: '重庆来福士水晶连廊 / 朝天门观景台' },
        category: { ar: 'أعجوبة هندسية ومعمارية حديثة بارتفاع 250 متراً', en: 'Modern Architectural Skybridge Wonder' },
        description: { ar: 'أول ناطحة سحاب أفقية في العالم؛ جسر زجاجي معلق يربط بين 4 ناطحات سحاب بطول 300 متر، يضم منصة مراقبة زجاجية بارتفاع 250 متراً فوق التقاء النهرين.', en: 'The world first horizontal skyscraper: a 300m long crystal skybridge connecting four 250m towers with transparent glass viewing decks.' }
      }
    ],
    essentialServices: [
      {
        id: 'chongqing-motorcycle-auto-testing',
        serviceType: { ar: 'فحص الدراجات النارية والسيارات واعتمادها', en: 'Automotive & Motorcycle Inspection & Testing' },
        title: { ar: 'المركز الوطني لفحص واختبار جودة الدراجات النارية والسيارات بـ تشونغتشينغ', en: 'National Motorcycle & Auto Quality Inspection and Testing Center', zh: '国家摩托车质量监督检验中心（重庆）' },
        description: { ar: 'إجراء اختبارات انبعاثات العوادم الأوروبية والخليجية (Euro 5/EPA)، اختبارات كفاءة الفرامل والسرعة، وإصدار شهادات مطابقة المواصفات القياسية الدولية للتصدير.', en: 'Accredited testing facility conducting engine emissions, brake endurance, frame durability, and export certificate verification for global markets.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'cimamotor-chongqing',
      name: { ar: 'معرض الصين الدولي لتجارة الدراجات النارية (CIMAMotor - الأكبر في آسيا)', en: 'China International Motorcycle Trade Exhibition (CIMAMotor)', zh: '中国国际摩托车博览会（中国摩博会）' },
      industry: 'Motorcycles, Quads, ATVs, E-Bikes & Motorcycle Parts',
      venue: { ar: 'مركز تشونغتشينغ الدولي للمعارض (Yuelai Expo)', en: 'Chongqing International Expo Center (Yuelai)', zh: '重庆国际博览中心（悦来）' },
      occurrence: { ar: 'سبتمبر سنوياً (الحدث الأكبر للدراجات النارية في الصين)', en: 'Annually in September (Asia Largest Motorcycle Show)' },
      officialWebsite: 'http://www.cimamotor.com',
      bestFor: ['Motorcycle Importers', 'ATV & Dirt Bike Wholesalers', 'Aftermarket Parts Traders', 'E-Scooter Distributors']
    },
    {
      id: 'wcifit-chongqing',
      name: { ar: 'المعرض الدولي لغرب الصين للاستثمار والتجارة (WCIFIT)', en: 'Western China International Fair for Investment & Trade (WCIFIT)', zh: '中国西部国际投资贸易洽谈会（西洽会）' },
      industry: 'Multimodal Logistics, Smart Manufacturing, Auto Tech & Global Investment',
      venue: { ar: 'مركز تشونغتشينغ الدولي للمعارض', en: 'Chongqing International Expo Center', zh: '重庆国际博览中心' },
      occurrence: { ar: 'مايو سنوياً', en: 'Annually in May' },
      officialWebsite: 'http://www.wcifit.com',
      bestFor: ['Automotive Importers', 'Logistics Freight Forwarders', 'Manufacturing Investors']
    }
  ],
  relatedCitySlugs: ['chengdu', 'wuhan', 'guangzhou', 'shanghai', 'xi-an'],
  relatedProductSlugs: ['motorcycles-atv', 'automobiles-ev', 'machinery-generators'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل تشونغتشينغ التجاري الشامل | عاصمة الدراجات النارية والسيارات ومول شاوتيانمين', en: 'Chongqing Commercial Sourcing Guide | World Motorcycle & Auto Capital' },
    description: { ar: 'دليل شامل للاستيراد من تشونغتشينغ: مصانع الدراجات النارية (Loncin وZongshen)، سيارات Changan، مجمع شاوتيانمين للجملة، وقطار الشحن الأوراسي يوكسينو.', en: 'Complete sourcing guide to Chongqing: World Motorcycle Capital, Changan Auto, Chaotianmen wholesale hub, Yuxinou rail express & halal guide.' }
  }
};
