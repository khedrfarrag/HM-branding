import { ICity } from '../../types';

export const ningdeCity: ICity = {
  id: 'ningde',
  slug: 'ningde',
  name: { ar: 'نينغدي', en: 'Ningde', zh: '宁德' },
  province: { ar: 'فوجيان', en: 'Fujian', zh: '福建省' },
  region: 'East Coast (Fujian)',
  tier: 'tier-3',
  commercialImportanceScore: 92,
  heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'العاصمة العالمية الأولى لبطاريات السيارات الكهربائية وتخزين الطاقة النظيفة (المقر الرئيسي والمصانع العملاقة لشركة CATL - أكبر مصنع لبطاريات الليثيوم في العالم وتستحوذ على أكثر من 37% من السوق العالمي)، ومقر شركة ATL لبطاريات الهواتف الذكية. تشتهر أيضاً بأنها "عاصمة أجهزة وكراسي المساج والتدليك في الصين" في مدينة فوآن (Fu\'an Massage Chairs)، وتضم أضخم مجمع لإنتاج الفولاذ المقاوم للصدأ (ستانلس ستيل) لشركة Tsingshan Holding.',
    en: 'World Capital of Lithium Batteries & Clean Energy Storage, home to global headquarters of CATL (world #1 EV battery titan controlling over 37% of global market share) and ATL smartphone batteries. Celebrated as China Massage Chair Capital in Fu\'an (producing over 60% of China massage appliances), and home to Tsingshan, the world largest stainless steel industrial base.'
  },
  keyIndustries: ['ev-batteries', 'solar-energy-storage', 'massage-chairs', 'stainless-steel', 'marine-equipment'],
  primaryProducts: {
    ar: [
      'بطاريات السيارات الكهربائية فوسفات الحديد والنيكل (LFP & NCM EV Battery Packs)',
      'حاويات وأنظمة تخزين الطاقة الشمسية الكبرى (CATL EnerOne & EnerC ESS)',
      'كراسي المساج الذكية، مسدسات التدليك، وأجهزة تدليك القدمين والرقبة (Fu\'an)',
      'ألواح ولفائف الفولاذ المقاوم للصدأ 304 و316 (Tsingshan Stainless Steel)',
      'بطاريات الليثيوم-بوليمر للهواتف الذكية والأجهزة المحمولة والطائرات المسيرة (ATL)',
      'محركات الديزل البحرية والمولدات ومعدات المزارع المائية'
    ],
    en: [
      'Electric Vehicle Lithium Batteries (CATL LFP & NCM Cells, Modules & Packs)',
      'Utility-Scale Solar Energy Storage Systems & Battery Storage Containers (ESS)',
      'Smart Luxury Massage Chairs, Percussion Massage Guns & Foot Massagers (Fu\'an Hub)',
      'Stainless Steel Coils, Heavy Plates & Seamless Pipes (Tsingshan / Qingtuo Base)',
      'Lithium-Polymer Consumer Batteries for Smart Devices & Drones (ATL Base)',
      'Marine Diesel Engines, Generators & Aquaculture Processing Equipment'
    ]
  },
  bestFor: ['EV & Solar Battery Importers', 'Clean Energy Storage Developers', 'Massage Chair & Wellness Wholesalers', 'Stainless Steel Buyers'],
  districts: [
    {
      id: 'jiaocheng-catl-headquarters',
      cityId: 'ningde',
      name: { ar: 'منطقة جياوتشينغ والمقر العالمي لـ CATL (Jiaocheng & Dongqiao)', en: 'Jiaocheng District & CATL Global Headquarters', zh: '蕉城区 / 东侨经济技术开发区 / 宁德时代全球总部' },
      activityType: { ar: 'المقر العالمي لشركة CATL، مجمع مصانع الليثيوم المنارة (Lighthouse Megafactories)، ومراكز أبحاث الطاقة', en: 'CATL Global HQ, World #1 Battery Gigafactories & Advanced Energy R&D Labs' },
      mainProducts: ['بطاريات سيارات كهربائية', 'حاويات تخزين طاقة شمسية', 'خلايا بطاريات منشورية'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Ningde High-Speed Railway Station (10 min taxi)'
    },
    {
      id: 'fuan-massage-chair-hub',
      cityId: 'ningde',
      name: { ar: 'مدينة فوآن - عاصمة كراسي المساج والتدليك (Fu\'an City)', en: 'Fu\'an City (China Massage Equipment Capital)', zh: '福安市（中国按摩保健器具之都）' },
      activityType: { ar: 'المركز العالمي الأول لتصنيع وتصدير كراسي المساج الفاخرة، أجهزة التدليك المنزلي والمحركات الكهربائية', en: 'Global #1 Manufacturing Hub for Luxury Massage Chairs & Wellness Equipment' },
      mainProducts: ['كراسي مساج ذكية بتقنية 4D', 'مسدسات تدليك العضلات', 'أجهزة تدليك الأقدام', 'محركات كهربائية'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Fu\'an High-Speed Railway Station'
    },
    {
      id: 'fuan-wanwu-stainless-steel',
      cityId: 'ningde',
      name: { ar: 'منطقة وانوو ومجمع تشينغتو للستانلس ستيل (Qingtuo Base)', en: 'Wanwu Bay & Qingtuo Stainless Steel Mega Park', zh: '福安湾坞半岛 / 青拓集团不锈钢产业园' },
      activityType: { ar: 'المجمع الصناعي الأكبر في العالم لإنتاج خام النيكل والفولاذ المقاوم للصدأ (أكثر من 30 مليون طن سنوياً)', en: 'World Largest Single Stainless Steel & Nickel Alloy Manufacturing Base' },
      mainProducts: ['لفائف ستانلس ستيل 304/316', 'قضبان فولاذية صناعية', 'ألواح فولاذ مقاوم للصدأ'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestStation: 'Fu\'an Station'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'fuan-massage-appliances-market',
      cityId: 'ningde',
      name: { ar: 'مركز معارض وجملة أجهزة وكراسي المساج في فوآن (Fu\'an Massage Expo Center)', en: 'Fu\'an International Massage Equipment Sourcing Center', zh: '福安市按摩保健器材城 / 福安奥体展示中心' },
      type: 'Wholesale',
      category: 'Massage Chairs, Wellness Appliances & Motors',
      description: {
        ar: 'المركز الدائم لعرض وتسويق كراسي المساج والتدليك في مدينة فوآن. يضم مئات صالات العرض للمصانع المتخصصة في كراسي التدليك الفاخرة بتقنية الذكاء الاصطناعي 4D وSL-Track، أجهزة تدليك الرقبة والظهر، ومسدسات التدليك المحمولة بشهادات CE وFDA وCB وRoHS للتصدير الدولي بأسعار المصنع.',
        en: 'Permanent sourcing and wholesale pavilion for massage wellness devices. Displays 4D AI-scanning full-body luxury massage chairs, cordless deep-tissue massage guns, heated foot massagers with CE, FDA, and CB export compliance.'
      },
      address: { ar: 'طريق شيوانشي، مدينة فوآن، نينغدي، فوجيان', en: 'Xuanxi Rd, Fu\'an City, Ningde, Fujian', zh: '福建省宁德市福安市秦溪路按摩器具交易中心' },
      nearestStation: 'Fu\'an Railway Station (15 min taxi)',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'Low'
    },
    {
      id: 'ningde-new-energy-materials-center',
      cityId: 'ningde',
      name: { ar: 'مركز نينغدي لتجارة مستلزمات الطاقة الجديدة والبطاريات (Ningde New Energy Center)', en: 'Ningde New Energy Battery & Materials Trade Pavilion', zh: '宁德新能源汽车与储能设备展示中心' },
      type: 'Wholesale',
      category: 'Lithium Battery Modules, ESS & Solar Hardware',
      description: {
        ar: 'مركز عرض وتوريد أنظمة تخزين الطاقة الشمسية المنزلية والتجارية، وحدات بطاريات الليثيوم المعيارية، محولات الطاقة الذكية ومستلزمات التركيب.',
        en: 'Exhibition and sourcing platform for commercial & residential solar energy storage battery modules, lithium packs, and hybrid solar inverters.'
      },
      address: { ar: 'طريق بينهاي، منطقة دونغتشياو، نينغدي', en: 'Binhai Rd, Dongqiao Zone, Ningde', zh: '福建省宁德市东侨经济技术开发区' },
      nearestStation: 'Ningde Railway Station',
      operatingHours: '09:00 - 17:00',
      moqLevel: 'Medium'
    }
  ],
  industrialZones: [
    {
      id: 'catl-huxilu-gigafactory',
      cityId: 'ningde',
      name: { ar: 'مجمع مصانع CATL هوشيلو العملاق (CATL Huxilu Gigafactory Base)', en: 'CATL Huxilu Smart Gigafactory Mega Complex', zh: '宁德时代湖西/车里湾超级制造基地' },
      clusterSpecialization: { ar: 'أكبر مجمع لتصنيع بطاريات السيارات الكهربائية وتخزين الطاقة في العالم، مصانع منارة ذكية مؤتمتة تعتمد الذكاء الاصطناعي لفحص الخلايا', en: 'World Largest Lithium EV Battery Gigafactory with automated AI quality inspection lines' },
      factoryTypes: ['Automated Battery Cell Coating & Stacking Fabs', 'Laser Welding Module Lines', 'Dry Rooms'],
      keyProducts: ['خلايا بطاريات فوسفات الحديد الليثيوم LFP', 'حزم بطاريات Shenxing فائقة الشحن', 'أنظمة بطاريات سيارات تسلا وفولكس فاجن وبي إم دبليو'],
      specializationLevel: 'High'
    },
    {
      id: 'fuan-massage-chair-industrial-base',
      cityId: 'ningde',
      name: { ar: 'قاعدة تصنيع أجهزة التدليك والمساج في فوآن (Fu\'an Massage Chair Base)', en: 'Fu\'an Health Massage Appliance Industrial Cluster', zh: '福安市健康按摩器产业基地' },
      clusterSpecialization: { ar: 'تنتج أكثر من 60% من كراسي وأجهزة المساج في الصين وتصدر إلى أكثر من 100 دولة حول العالم', en: 'Produces over 60% of China massage chairs and health wellness appliances with complete plastic, leather, and motor supply chain' },
      factoryTypes: ['Robotic Massage Chair Assembly Lines', 'Motor Stamping Plants', 'Leather Sewing Fabs'],
      keyProducts: ['كراسي تدليك منزلية وتجارية', 'وسائد تدليك ذكية للسيارات', 'أجهزة تدليك تدفئة بالأشعة تحت الحمراء'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'nd-catl-ev-storage-batteries',
      productName: { ar: 'بطاريات CATL وأنظمة تخزين الطاقة الشمسية ESS', en: 'CATL EV Lithium Batteries & Solar Energy Storage Systems (ESS)' },
      industryCategory: 'ev-batteries',
      whyThisCity: { ar: 'المقر العالمي لشركة CATL المصنعة لأكثر من 37% من بطاريات العالم، وتوفر أعلى معايير الأمان وطول العمر الافتراضي (أكثر من 6000 دورة شحن).', en: 'Global headquarters of CATL, offering world benchmark safety, UN38.3/UL9540A certifications, and 6,000+ cycle life.' },
      mainManufacturingArea: { ar: 'جياوتشينغ ودونغتشياو (Jiaocheng)', en: 'Jiaocheng District, Ningde' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'nd-fuan-massage-chairs',
      productName: { ar: 'كراسي المساج الذكية الفاخرة وأجهزة التدليك المحمولة', en: 'Smart Luxury Massage Chairs, Foot Massagers & Percussion Guns' },
      industryCategory: 'massage-chairs',
      whyThisCity: { ar: 'عاصمة كراسي المساج في الصين، وتتيح للمستوردين تصنيع كراسي التدليك الفاخرة بماركاتهم الخاصة OEM بأسعار أقل بـ 70% من أسواق التجزئة العالمية.', en: 'China massage capital offering full OEM private labeling, custom leather choices, and international electrical certifications.' },
      mainManufacturingArea: { ar: 'مدينة فوآن (Fu\'an City)', en: 'Fu\'an City, Ningde' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'nd-tsingshan-stainless-steel',
      productName: { ar: 'لفائف وألواح وأنابيب الفولاذ المقاوم للصدأ (ستانلس ستيل)', en: 'Stainless Steel Coils, Plates, Bars & Seamless Pipes' },
      industryCategory: 'stainless-steel',
      whyThisCity: { ar: 'مقر مجموعة Tsingshan الأضخم عالمياً لإنتاج الستانلس ستيل بتكلفة تنافسية هائلة وتوريد مباشر للمصانع والورش.', en: 'World largest single stainless steel production cluster offering direct mill-scale pricing for construction and kitchenware fabrication.' },
      mainManufacturingArea: { ar: 'فوآن وانوو (Wanwu)', en: 'Wanwu Peninsula, Fu\'an' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Fuzhou Changle International Airport (FOC - 70 دقيقة بالسيارة أو القطار السريع)',
      'Wenzhou Longwan International Airport (WNZ - 75 دقيقة بالقطار السريع)'
    ],
    seaPorts: [
      'Ningde Port (Sandu\'ao Deep-Water Port Area - 三都澳港区 أحد أفضل الموانئ الطبيعية المحمية في العالم)',
      'Fuzhou Port / Xiamen Port (الموانئ الرئيسية لشحن حاويات البطاريات والمساج الخطرة DG Cargo)'
    ],
    highSpeedRailwayStations: [
      'Ningde Railway Station (宁德站 - المحطة الرئيسية وسط المدينة)',
      'Fu\'an Railway Station (福安站 - تخدم مصانع كراسي المساج والصلب)'
    ],
    seaFreightSuitability: {
      ar: 'شحن حاويات بطاريات الليثيوم (Class 9 Dangerous Goods) يتم بكفاءة واحترافية عبر موانئ نينغدي وفوتشو وشيامن المجهزة بكافة تصاريح وتراخيص السلامة البحرية الدولية.',
      en: 'Specialized Dangerous Goods (Class 9 UN3480/UN3481) container handling compliance through Ningde and Fuzhou maritime container terminals.'
    },
    airFreightSuitability: {
      ar: 'مطار فوتشو شانغلي ومطار وينتشو يوفران رحلات شحن جوي سريع للأجهزة الطبية وعينات كراسي المساج.',
      en: 'Fuzhou FOC and Wenzhou WNZ provide rapid air sample delivery for wellness appliances.'
    },
    primaryCargoRoutes: {
      ar: [
        'خطوط بحرية منتظمة عبر موانئ فوجيان إلى جبل علي، جدة، الدمام، صلالة، وميناء السخنة',
        'شحن متخصص لحاويات بطاريات الطاقة النظيفة ESS إلى مشاريع الطاقة في الخليج العربي'
      ],
      en: [
        'Direct container sailings from Fujian ports to all Gulf and Red Sea destinations',
        'Specialized containerized ESS battery system shipping lanes to solar megaprojects in the Middle East'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['أبريل', 'مايو', 'سبتمبر', 'أكتوبر', 'نوفمبر'],
    suggestedStayDays: 3,
    weatherSummary: {
      ar: 'مناخ ساحلي دافئ ومعتدل، محاط بالجبال الخضراء والبحر، والربيع والخريف هما أفضل الفصول لزيارة المصانع في نينغدي وفوآن.',
      en: 'Pleasant coastal climate surrounded by misty green mountains and sea bays; spring and autumn offer optimal traveling conditions.'
    },
    recommendedStayAreas: [
      {
        ar: 'وسط مدينة نينغدي (Jiaocheng / Dongqiao): الأقرب لمقرات شركة CATL وفندق واندا ريلم الفاخر ومحطة القطار.',
        en: 'Dongqiao / Jiaocheng Core: Walking distance to CATL campuses, Wanda Realm Hotel, and central lake.'
      },
      {
        ar: 'مدينة فوآن (Fu\'an City Center): لمستوردي ومشتري كراسي وأجهزة المساج للنزول مباشرة بالقرب من المصانع.',
        en: 'Fu\'an City Center: Close to massage chair manufacturing zones and showrooms.'
      }
    ],
    localTransportAdvice: {
      ar: 'القطار فائق السرعة يربط نينغدي بمدينة فوتشو في 30 دقيقة، وبمدينة شيامن في ساعتين، وبمدينة هانغتشو في 3 ساعات. للذهاب من نينغدي إلى مصانع فوآن، يستغرق القطار السريع 18 دقيقة فقط.',
      en: 'High-speed bullet train reaches Fuzhou in 30 mins and Xiamen in 2 hours. Bullet train between Ningde and Fu\'an takes only 18 minutes.'
    },
    languageTips: {
      ar: 'في مقرات CATL وشركات كراسي المساج الكبرى، يتحدث مدراء المبيعات الإنجليزية بطلاقة وتتوفر عروض ومواصفات تقنية تفصيلية.',
      en: 'Engineers and sales staff at CATL and major massage chair makers speak fluent business English and provide comprehensive technical datasheets.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'wanda-realm-ningde-hotel',
        name: { ar: 'فندق واندا ريلم نينغدي (Wanda Realm Ningde)', en: 'Wanda Realm Ningde', zh: '宁德富力万达嘉华酒店' },
        category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
        area: { ar: 'طريق تاويوان، منطقة دونغتشياو، نينغدي', en: 'Dongqiao Development Zone, Ningde' },
        highlights: { ar: 'أفخم فندق أعمال في نينغدي، يبعد دقائق عن المقر العالمي لشركة CATL، مسبح داخلي، مطاعم راقية وقاعات مؤتمرات دولية', en: 'Premier luxury hotel in Ningde, minutes from CATL Global Headquarters, top executive business amenities' }
      },
      {
        id: 'haiyue-hotel-ningde',
        name: { ar: 'فندق هاييويه نينغدي جراند (Haiyue Grand Hotel)', en: 'Haiyue Grand Hotel Ningde', zh: '宁德海悦大酒店' },
        category: { ar: 'أعمال فاخر 5 نجوم', en: 'Upscale Business 5-Star' },
        area: { ar: 'منطقة جياوتشينغ، وسط المدينة', en: 'Jiaocheng District, Ningde' },
        highlights: { ar: 'موقع مركزي وسط المدينة، غرف واسعة بإطلالة على البحيرة وخدمات سريعة لرجال الأعمال والمستثمرين', en: 'Central downtown setting overlooking the lake with full business support' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'lanzhou-halal-ningde-wanda',
        name: { ar: 'مطعم لانتشو الإسلامي الحلال بـ نينغدي (Lanzhou Halal Beef Noodles)', en: 'Lanzhou Halal Beef Noodles Ningde Wanda', zh: '兰州正宗牛肉拉面（万达广场店）' },
        cuisineType: { ar: 'مأكولات إسلامية صينية ونودلز ولحم ضأن حلال', en: 'Traditional Halal Beef Noodles & Lamb' },
        isHalal: true,
        address: { ar: 'بجوار واندا بلازا، منطقة دونغتشياو، نينغدي', en: 'Adjacent to Wanda Plaza, Dongqiao, Ningde', zh: '福建省宁德市东侨区万达广场商圈' },
        recommendedFor: { ar: 'غداء حلال سريع وطازج ونظيف بجوار الفنادق الكبرى ومقرات CATL', en: 'Fast, hot halal beef noodles and clean dining near Wanda Realm and CATL' }
      },
      {
        id: 'ningde-muslim-restaurant',
        name: { ar: 'مطعم نينغدي الإسلامي للمأكولات الحلال', en: 'Ningde Muslim Halal Restaurant', zh: '宁德清真风味餐厅' },
        cuisineType: { ar: 'مأكولات حلال ومشاوي لحم ضأن طازجة', en: 'Halal Roast Lamb & Chinese Muslim Cuisine' },
        isHalal: true,
        address: { ar: 'طريق هيبين، منطقة جياوتشينغ، نينغدي', en: 'Hebin Rd, Jiaocheng District, Ningde', zh: '福建省宁德市蕉城区鹤峰路' },
        recommendedFor: { ar: 'مشاوي لحم الضأن بالعظم، حساء اللحم البقري، وطعام حلال مضمون لرجال الأعمال', en: 'Fresh halal roast lamb, beef soup, and reliable Muslim hospitality' }
      }
    ],
    touristAttractions: [
      {
        id: 'taimushan-mountain-unesco',
        name: { ar: 'جبال تايموشان التراثية الساحلية (Taimushan Mountain - 太姥山)', en: 'Taimushan Mountain UNESCO Global Geopark', zh: '太姥山国家地质公园' },
        category: { ar: 'حديقة جيولوجية عالمية لليونسكو تطل على البحر', en: 'UNESCO Global Geopark Coastal Granite Wonder' },
        description: { ar: 'جبال جرانيتية أسطورية تطل على بحر الصين الشرقي، تشتهر بكهوفها الصخرية الضيقة، التشكيلات الحجرية النادرة، ومزارع شاي الفودينغ الأبيض (Fuding White Tea).', en: 'Dramatic coastal granite mountain massif overlooking the East China Sea, celebrated for mist-shrouded labyrinths and white tea estates.' }
      }
    ],
    essentialServices: [
      {
        id: 'ningde-battery-safety-testing',
        serviceType: { ar: 'فحص البطاريات واختبارات الأمان', en: 'Lithium Battery Safety & Transport Certification' },
        title: { ar: 'المركز الوطني لفحص واختبار أمان بطاريات الليثيوم بـ نينغدي', en: 'National Lithium Battery Quality Inspection and Testing Center (Ningde)', zh: '国家动力电池产品质量检验检测中心（福建宁德）' },
        description: { ar: 'إصدار تقارير واختبارات أمان شحن بطاريات الليثيوم البحرية والجوية (UN 38.3, MSDS, IEC 62619, UL 1973/9540A).', en: 'Official accredited laboratory for UN38.3 transport safety reports, thermal runaway safety tests, and marine export compliance.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'ningde-international-battery-energy-expo',
      name: { ar: 'معرض نينغدي الدولي لبطاريات الطاقة الجديدة وتخزين الطاقة (Ningde Battery Expo)', en: 'China (Ningde) International New Energy Battery & Storage Expo', zh: '中国（宁德）国际新能源动力电池与储能技术展览会' },
      industry: 'EV Lithium Batteries, Solar ESS Storage & Battery Materials',
      venue: { ar: 'مركز نينغدي الدولي للمعارض والمؤتمرات', en: 'Ningde International Convention and Exhibition Center', zh: '宁德国际会展中心' },
      occurrence: { ar: 'سبتمبر / أكتوبر سنوياً', en: 'Annually in Autumn' },
      bestFor: ['EV Battery Buyers', 'Solar Storage Contractors', 'Clean Energy Utilities']
    },
    {
      id: 'fuan-massage-chair-expo',
      name: { ar: 'معرض فوآن الدولي لأجهزة وكراسي المساج والتدليك الصحي', en: 'China (Fu\'an) International Massage Equipment & Wellness Fair', zh: '中国（福安）国际按摩保健器具博览会' },
      industry: 'Massage Chairs, Wellness Equipment & Smart Health Hardware',
      venue: { ar: 'مركز فوآن للمعارض والمؤتمرات', en: 'Fu\'an Exhibition Center', zh: '福安市奥体展厅' },
      occurrence: { ar: 'نوفمبر سنوياً', en: 'Annually in November' },
      bestFor: ['Massage Chair Wholesalers', 'Wellness Retailers', 'Healthcare Importers']
    }
  ],
  relatedCitySlugs: ['fuzhou', 'xiamen', 'wenzhou', 'shenzhen'],
  relatedProductSlugs: ['ev-batteries', 'solar-renewable', 'massage-chairs'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل نينغدي التجاري الشامل | عاصمة بطاريات CATL وكراسي المساج في فوآن', en: 'Ningde Sourcing Guide | World Capital of CATL EV Batteries & Massage Chairs' },
    description: { ar: 'دليل شامل للاستيراد من نينغدي وفوجيان: مصانع بطاريات CATL العالمية، أنظمة تخزين الطاقة الشمسية، كراسي المساج في فوآن، وفنادق ومطاعم حلال.', en: 'Complete sourcing guide to Ningde: Global HQ of CATL EV batteries, solar ESS storage packs, Fu\'an massage chair capital & halal guide.' }
  }
};
