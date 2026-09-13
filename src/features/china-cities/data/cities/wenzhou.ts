import { ICity } from '../../types';

export const wenzhouCity: ICity = {
  id: 'wenzhou',
  slug: 'wenzhou',
  name: { ar: 'وينتشو (وانتشو)', en: 'Wenzhou', zh: '温州' },
  province: { ar: 'تشيجيانغ', en: 'Zhejiang', zh: '浙江省' },
  region: 'Yangtze River Delta',
  tier: 'tier-2',
  commercialImportanceScore: 94,
  heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'العاصمة العالمية الأولى للمعدات الكهربائية ذات الجهد المنخفض (تنتج بلدة ليوشي أكثر من 65% من قواطع الكهرباء والمفاتيح والمرحلات في الصين)، والمقر العالمي لعملاقي الكهرباء CHINT وDelixi. تشتهر بأنها "عاصمة الأحذية الجلدية الصينية" في لوتشينغ (Aokang & Kangnai)، و"عاصمة النظارات والإطارات البصرية" في أوهاي (Ouhai)، وعاصمة الصمامات والمحابس الصناعية في يونغجيا (Valves Capital).',
    en: 'World Capital of Low-Voltage Electrical Equipment (Liushi Town produces over 65% of China breakers, relays, and switchgear), home to electrical giants CHINT and Delixi. Renowned as China Leather Shoe Capital (Lucheng), China Eyewear & Optical Capital (Ouhai), and the Pump & Valve Capital of China (Yongjia Oubei).'
  },
  keyIndustries: ['low-voltage-electrical', 'leather-footwear', 'eyewear-optics', 'industrial-valves', 'hardware-auto-parts'],
  primaryProducts: {
    ar: [
      'القواطع الكهربائية الذكية (MCB, MCCB, ACB) والمفاتيح والمحولات (CHINT & Delixi)',
      'لوحات التوزيع الكهربائية والمقابس الصناعية والمؤقتات الزمنية',
      'الأحذية الجلدية الرسمية والكاجوال وأحذية العمل الآمنة (Safety Shoes)',
      'إطارات النظارات البصرية والنظارات الشمسية وعدسات الحماية (Wenzhou Optics)',
      'الصمامات والمحابس الصناعية لمحطات النفط والغاز والمياه (Ball & Butterfly Valves)',
      'قطع غيار السيارات والفلاتر والولاعات المعدنية ومعدات التعبئة والتغليف'
    ],
    en: [
      'Low-Voltage Circuit Breakers (MCB, MCCB, ACB), Relays & Contactors (CHINT & Delixi HQs)',
      'Power Distribution Enclosures, Industrial Plugs, Sockets & Inverters',
      'Men & Women Genuine Leather Dress Shoes & Certified Safety Work Footwear',
      'Optical Eyewear Frames, Acetate/Titanium Sunglasses & Precision Lenses (Ouhai Hub)',
      'Industrial Valves (Ball, Gate, Globe, Check & Butterfly Valves) & Flanges (Yongjia Hub)',
      'Automotive Sensors, Spin-on Filters, Gas Lighters & Packaging Machinery'
    ]
  },
  bestFor: ['Electrical Contractors & Wholesalers', 'Leather Shoe Importers', 'Optical & Eyewear Buyers', 'Oil & Gas Valve Importers'],
  districts: [
    {
      id: 'yueqing-liushi-electrical',
      cityId: 'wenzhou',
      name: { ar: 'مدينة يويشينغ وبلدة ليوشي الكهربائية (Liushi Town Yueqing)', en: 'Liushi Electrical Town & Yueqing City', zh: '乐清市柳市镇（中国电器之都）' },
      activityType: { ar: 'عاصمة المفاتيح والقواطع الكهربائية والمحولات في العالم، المقر العالمي لشركتي CHINT وDelixi', en: 'Global Benchmark Core for Low-Voltage Electricals, Circuit Breakers & Switchgear' },
      mainProducts: ['قواطع كهربائية MCB/MCCB', 'كونتاكتورات', 'مفاتيح صناعية', 'محولات طاقة'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Yueqing Railway Station (15 min taxi)'
    },
    {
      id: 'lucheng-shoe-capital',
      cityId: 'wenzhou',
      name: { ar: 'منطقة لوتشينغ وعاصمة الأحذية الجلدية (Lucheng China Shoe Capital)', en: 'Lucheng District (China Shoe Capital)', zh: '鹿城区（中国鞋都 / 双屿产业园）' },
      activityType: { ar: 'عاصمة الأحذية الجلدية للرجال والنساء وأحذية السلامة الصناعية (Aokang, Kangnai, Red Dragonfly)', en: 'China Genuine Leather Footwear Capital & Safety Boot Manufacturing' },
      mainProducts: ['أحذية جلدية رسمية', 'أحذية سلامة صناعية', 'أحذية كاجوال', 'جلود طبيعية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Wenzhou Rail Transit Line S1 (Lucheng Stations)'
    },
    {
      id: 'ouhai-eyewear-capital',
      cityId: 'wenzhou',
      name: { ar: 'منطقة أوهاي وعاصمة النظارات البصرية (Ouhai Eyewear District)', en: 'Ouhai Eyewear & Optics Capital', zh: '瓯海区（中国眼镜之都）' },
      activityType: { ar: 'أكبر قاعدة لتصنيع وتصدير إطارات النظارات الطبية والشمسية المصنوعة من الأسيتات والتيتانيوم في آسيا', en: 'Asia Largest Eyewear Manufacturing Hub: Optical Frames & Sunglasses' },
      mainProducts: ['إطارات نظارات طبية', 'نظارات شمسية مستقطبة', 'حافظات نظارات', 'عدسات بصرية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Wenzhou South Railway Station'
    },
    {
      id: 'yongjia-oubei-valve-town',
      cityId: 'wenzhou',
      name: { ar: 'مقاطعة يونغجيا وبلدة أوبي للصمامات والمحابس (Yongjia Oubei Valve Hub)', en: 'Yongjia Oubei Valve & Pump Town', zh: '永嘉县瓯北镇（中国泵阀之乡）' },
      activityType: { ar: 'أكبر تجمع لتصنيع الصمامات الصناعية، محابس النفط والغاز، والصمامات الكروية والمعدات الهيدروليكية', en: 'China Premier Industrial Valve Manufacturing Cluster for Petrochem & Pipelines' },
      mainProducts: ['صمامات كروية Ball Valves', 'صمامات فراشة Butterfly Valves', 'مضخات صناعية', 'شفاه وأنابيب'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestStation: 'Yongjia Railway Station'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'china-electrical-city-liushi',
      cityId: 'wenzhou',
      name: { ar: 'مدينة الكهربائيات الصينية في ليوشي (China Electrical City Liushi)', en: 'China Electrical City (Liushi Yueqing)', zh: '中国电器城（乐清柳市）' },
      type: 'Wholesale',
      category: 'Low-Voltage Electricals, Circuit Breakers & Switchgear',
      description: {
        ar: 'أضخم مركز تجاري في العالم للمنتجات الكهربائية ذات الجهد المنخفض، يمتد على مساحة شاسعة ويضم أكثر من 4000 صالة عرض لمصانع القواطع الكهربائية، الكونتاكتورات، المفاتيح الذكية، الإنفرترات، محولات الطاقة الشمسية، ومكونات لوحات التحكم بمواصفات مطابقة لشهادات IEC وCE وCB وSASO.',
        en: 'World largest marketplace for low-voltage electrical apparatus spanning thousands of showrooms. Direct factory sourcing for miniature circuit breakers, moulded-case breakers, contactors, solar inverters, and switchgear meeting international IEC, CE, and SASO standards.'
      },
      address: { ar: 'طريق شيوديان، بلدة ليوشي، مدينة يويشينغ، وينتشو', en: 'Xiudian Rd, Liushi Town, Yueqing, Wenzhou, Zhejiang', zh: '浙江省温州市乐清市柳市镇柳青南路中国电器城' },
      nearestStation: 'Yueqing Railway Station (15 min taxi)',
      operatingHours: '08:00 - 17:00',
      moqLevel: 'Low'
    },
    {
      id: 'wenzhou-international-eyewear-city',
      cityId: 'wenzhou',
      name: { ar: 'مدينة وينتشو الدولية للنظارات (Wenzhou Optics City)', en: 'Wenzhou International Eyewear City', zh: '温州国际眼镜城（瓯海）' },
      type: 'Wholesale',
      category: 'Eyewear, Optical Frames & Sunglasses',
      description: {
        ar: 'أكبر مجمع تجاري متخصص في آسيا لتجارة النظارات الطبية وإطارات النظارات المصنوعة من خلات السليلوز (Acetate) وأسلاك التيتانيوم، والنظارات الشمسية الرياضية وإكسسوارات النظارات بأسعار تصدير جملة مباشرة للمستوردين.',
        en: 'Asia leading dedicated optical wholesale center featuring titanium frames, acetate designer sunglasses, blue-light blocking lenses, and eyeglass accessories direct from Ouhai factories.'
      },
      address: { ar: 'طريق لوتشينغ الغربي، منطقة أوهاي، وينتشو', en: 'Lucheng West Rd, Ouhai District, Wenzhou', zh: '浙江省温州市瓯海区瓯海大道温州国际眼镜城' },
      nearestStation: 'Wenzhou South Railway Station (10 min taxi)',
      operatingHours: '09:00 - 17:30',
      moqLevel: 'Low'
    },
    {
      id: 'china-shoe-capital-mart-wenzhou',
      cityId: 'wenzhou',
      name: { ar: 'سوق مدينة الأحذية الصينية في وينتشو (China Shoe Capital Footwear Mart)', en: 'China Shoe Capital Footwear Wholesale Mart', zh: '中国鞋都鞋类交易中心 / 温州鞋城' },
      type: 'Wholesale',
      category: 'Leather Shoes, Boots & Safety Footwear',
      description: {
        ar: 'مركز المعارض والجملة الرئيسي للأحذية الجلدية الرجالية والنسائية الفاخرة، أحذية السلامة بمقدمة فولاذية (Steel-Toe Boots)، والصنادل الجلدية بمشاركة كبرى مصانع وينتشو.',
        en: 'Premier wholesale mart for genuine leather dress shoes, Goodyear-welted boots, certified steel-toe industrial safety footwear, and leather sandals.'
      },
      address: { ar: 'طريق شوانغيو، منطقة لوتشينغ، وينتشو', en: 'Shuangyu Town, Lucheng District, Wenzhou', zh: '浙江省温州市鹿城区双屿中国鞋都一期' },
      nearestStation: 'Wenzhou South Railway Station',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'chint-electric-industrial-park',
      cityId: 'wenzhou',
      name: { ar: 'المجمع الصناعي العالمي لشركة تشانت للكهرباء (CHINT Group HQ Base)', en: 'CHINT Electric Global Smart Manufacturing Park', zh: '正泰集团全球总部及智能电气产业基地（乐清）' },
      clusterSpecialization: { ar: 'المقر العالمي لشركة CHINT أكبر مصنع للكهرباء منخفضة الجهد والطاقة المتجددة في آسيا، مصانع روبوتية مؤتمتة بنسبة 95%', en: 'Global HQ of CHINT Group, Asia premier electrical and smart energy equipment manufacturer' },
      factoryTypes: ['Automated Robotic Assembly Lines', 'High-Voltage Testing Laboratories', 'SMT Surface Mount Fabs'],
      keyProducts: ['قواطع كهربائية ذكية', 'محولات طاقة شمسية', 'عدادات كهرباء إلكترونية'],
      specializationLevel: 'High'
    },
    {
      id: 'delixi-electric-industrial-base',
      cityId: 'wenzhou',
      name: { ar: 'قاعدة ديليكسي للكهربائيات الصناعية (Delixi Electric Park)', en: 'Delixi Electric Smart Manufacturing Base', zh: '德力西电气智能制造基地（柳市）' },
      clusterSpecialization: { ar: 'المقر العالمي لشركة Delixi المشتركة مع شنايدر إلكتريك لإنتاج حلول التوزيع الكهربائي والأتمتة الصناعية', en: 'Delixi Electric joint-venture mega factory producing breakers, contactors and industrial automation gear' },
      factoryTypes: ['Smart Automated Plants', 'Injection Molding Fabs'],
      keyProducts: ['قواطع كهربائية منزلية وصناعية', 'مفاتيح تحكم بالمحركات', 'قواطع تفاضلية RCD'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'wz-low-voltage-breakers-switches',
      productName: { ar: 'القواطع الكهربائية والمفاتيح ولوحات التوزيع المعتمدة', en: 'Low-Voltage Circuit Breakers, Industrial Contactors & Distribution Panels' },
      industryCategory: 'low-voltage-electrical',
      whyThisCity: { ar: 'عاصمة الكهرباء الصينية (CHINT وDelixi)، وتوفر أضخم طاقة تصنيع معتمدة لكافة شهادات المطابقة الدولية والخليجية SASO/GCC بأسعار لا تنافس.', en: 'China electrical capital offering complete range of IEC, CE, and SASO certified circuit breakers and switchgear at primary factory pricing.' },
      mainManufacturingArea: { ar: 'ليوشي ويويشينغ (Liushi Town)', en: 'Liushi Town, Yueqing' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'wz-leather-shoes-safety-boots',
      productName: { ar: 'الأحذية الجلدية الرجالية والنسائية وأحذية السلامة الصناعية', en: 'Genuine Leather Dress Shoes & Certified Safety Boots' },
      industryCategory: 'leather-footwear',
      whyThisCity: { ar: 'تنتج وينتشو مئات الملايين من الأحذية الجلدية وأحذية السلامة المعتمدة لمقاومة الصدمات والزيوت والكهرباء بمواصفات EN ISO 20345.', en: 'World-renowned for genuine leather dress shoes and heavy-duty steel-toe work safety footwear meeting international safety ratings.' },
      mainManufacturingArea: { ar: 'لوتشينغ وشوانغيو (Lucheng)', en: 'Lucheng District' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'wz-optical-eyewear-sunglasses',
      productName: { ar: 'إطارات النظارات الطبية والنظارات الشمسية ومستلزمات البصريات', en: 'Optical Eyewear Frames, Acetate/Titanium Sunglasses & Lenses' },
      industryCategory: 'eyewear-optics',
      whyThisCity: { ar: 'عاصمة النظارات الصينية في أوهاي، وتصنع لكبرى الماركات العالمية تصاميم مخصصة OEM بجودة تصنيع إيطالية دقيقة.', en: 'Ouhai Eyewear Capital manufactures over 70% of optical frames exported to Europe with precision Italian-standard craftsmanship.' },
      mainManufacturingArea: { ar: 'أوهاي (Ouhai District)', en: 'Ouhai District' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Wenzhou Longwan International Airport (WNZ - مطار دولي محوري يربط برحلات دولية وشحن جوي)',
      'Hangzhou Xiaoshan Airport (ساعتان بالقطار السريع)'
    ],
    seaPorts: [
      'Wenzhou Port (温州港 - محطات الحاويات في يووهوان وشوانغيو)',
      'Ningbo-Zhoushan Port (الميناء العملاق لشحن الحاويات المباشر - ساعتان بالقطار والشاحنات)'
    ],
    highSpeedRailwayStations: [
      'Wenzhou South Railway Station (温州南站 - محطة القطارات السريعة الرئيسية)',
      'Yueqing Railway Station (乐清站 - تخدم بلدة ليوشي عاصمة الكهربائيات)',
      'Wenzhou North Railway Station (温州北站)'
    ],
    seaFreightSuitability: {
      ar: 'شحن حاويات المنتجات الكهربائية والأحذية يتم بسلاسة عبر ميناء وينتشو أو عبر النقل التكاملي إلى ميناء نينغبو المجاور للشحن على الخطوط البحرية السريعة.',
      en: 'Efficient ocean freight dispatch via Wenzhou Port container berths or rapid drayage to nearby Ningbo deep-water port for non-stop global sailings.'
    },
    airFreightSuitability: {
      ar: 'مطار ونغوان يوفر شحناً جوياً سريعاً للعينات والنظارات والإلكترونيات القيمة.',
      en: 'Longwan Airport (WNZ) provides express air forwarding for high-value optical goods and electrical components.'
    },
    primaryCargoRoutes: {
      ar: [
        'خطوط بحرية منتظمة عبر ميناء نينغبو ووينتشو إلى جبل علي، جدة، الدمام، صلالة، ميناء خليفة، وموانئ شمال إفريقيا',
        'شحن سريع لعينات المفاتيح والأحذية والنظارات جواً'
      ],
      en: [
        'Regular direct container vessels to all Arabian Gulf, Red Sea, and European terminals',
        'Air courier express sample dispatch for electrical products and eyewear'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['أبريل', 'مايو (معرض النظارات الدولي WOF)', 'سبتمبر', 'أكتوبر', 'نوفمبر'],
    suggestedStayDays: 3,
    weatherSummary: {
      ar: 'طقس ساحلي لطيف شبه استوائي، الربيع والخريف هما أفضل الأوقات لجولات المصانع بين ليوشي ولوتشينغ.',
      en: 'Pleasant subtropical coastal weather; spring and autumn are ideal for visiting Liushi electrical city and Ouhai optics.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة لوتشينغ ووسط المدينة (Lucheng Downtown): الفنادق الفاخرة المطلة على نهر أو، وقريبة من أسواق الأحذية ومقرات الأعمال.',
        en: 'Lucheng Downtown: Riverside luxury hotels, close to shoe markets, dining, and metro.'
      },
      {
        ar: 'مدينة يويشينغ وبلدة ليوشي (Yueqing / Liushi): الأنسب لمستوردي الكهربائيات والقواطع للنزول بالقرب من مجمع CHINT ومدينة الكهرباء.',
        en: 'Yueqing / Liushi: Best for electrical buyers visiting CHINT, Delixi, and China Electrical City.'
      }
    ],
    localTransportAdvice: {
      ar: 'مترو وينتشو السريع (خط S1) يربط مطار ونغوان الدولي بمحطة قطارات وينتشو الجنوبية ومنطقة أوهاي للنظارات مباشرة. للذهاب إلى بلدة ليوشي للكهرباء، خذ تاكسي أو DiDi لمدة 25 دقيقة عبر جسر نهر أو.',
      en: 'Wenzhou Rail Transit S1 connects Longwan Airport directly to South Railway Station and Ouhai Eyewear City. Take DiDi across the river to Liushi in 25 mins.'
    },
    languageTips: {
      ar: 'ممثلو مبيعات التصدير في شركتي CHINT وDelixi ومصانع الأحذية الكبرى يتحدثون الإنجليزية بطلاقة وملمون بالمواصفات القياسية الخليجية والأوروبية.',
      en: 'Export departments at CHINT, Delixi, and major footwear/optics plants speak proficient business English and understand SASO/IEC requirements.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'shangri-la-wenzhou-hotel',
        name: { ar: 'فندق شانغريلا وينتشو (Shangri-La Wenzhou)', en: 'Shangri-La Hotel Wenzhou', zh: '温州香格里拉大酒店' },
        category: { ar: 'فاخر 5 نجوم عريق', en: 'Luxury 5-Star Riverfront' },
        area: { ar: 'طريق شيانغجيانغ، ضفاف نهر أو، لوتشينغ', en: 'Ou River Waterfront, Lucheng' },
        highlights: { ar: 'أفخم فندق أعمال في وينتشو، إطلالة بانورامية ساحرة على نهر أو، غرف تنفيذية واسعة ومطاعم عالمية راقية', en: 'Premier luxury hotel in Wenzhou with majestic river views and comprehensive business center' }
      },
      {
        id: 'the-westin-wenzhou',
        name: { ar: 'فندق ويستن وينتشو (The Westin Wenzhou)', en: 'The Westin Wenzhou', zh: '温州威斯汀酒店' },
        category: { ar: 'فاخر 5 نجوم ناطحة سحاب', en: 'Skyline Luxury 5-Star' },
        area: { ar: 'وسط مدينة لوتشينغ التجاري', en: 'Downtown Lucheng CBD' },
        highlights: { ar: 'يقع في أعلى برج تجاري بوسط وينتشو، قريب من محطة المترو والأسواق والمطاعم ومكاتب الشحن', en: 'Located in city highest skyscraper with 360-degree city views and top business lounge' }
      },
      {
        id: 'jinling-grand-hotel-yueqing',
        name: { ar: 'فندق جينلينغ جراند يويشينغ (Jinling Grand Hotel Yueqing)', en: 'Jinling Grand Hotel Yueqing', zh: '乐清金陵大酒店' },
        category: { ar: 'فاخر 5 نجوم لرجال الأعمال', en: 'Upscale Business 5-Star' },
        area: { ar: 'مدينة يويشينغ، بالقرب من بلدة ليوشي للكهرباء', en: 'Yueqing, near Liushi Electrical Town' },
        highlights: { ar: 'الفندق المفضل لرجال الأعمال ومستوردي القواطع الكهربائية لزيارة مقرات CHINT وDelixi', en: 'Preferred base for electrical buyers touring Liushi and Yueqing factories' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'wenzhou-ancient-mosque-halal',
        name: { ar: 'مطعم جامع وينتشو الإسلامي التاريخي (Wenzhou Mosque Halal)', en: 'Wenzhou Ancient Mosque Halal Restaurant', zh: '温州清真寺清真餐厅' },
        cuisineType: { ar: 'مأكولات إسلامية صينية ولحم ضأن حلال 100%', en: 'Traditional Chinese Muslim Halal' },
        isHalal: true,
        address: { ar: 'شارع تسانغهو، منطقة لوتشينغ، وينتشو', en: 'Canghou St, Lucheng District, Wenzhou', zh: '浙江省温州市鹿城区仓后街清真寺' },
        recommendedFor: { ar: 'صلاة الجمعة، وجبات حلال موثوقة طازجة، حساء اللحم البقري ولحم الضأن المشوي', en: 'Friday congregational prayers and certified halal mutton and beef noodles' }
      },
      {
        id: 'xinjiang-oasis-halal-wenzhou',
        name: { ar: 'مطعم واحة شينجيانغ الإسلامي بـ وينتشو', en: 'Xinjiang Oasis Halal Restaurant Wenzhou', zh: '温州绿洲新疆清真餐厅' },
        cuisineType: { ar: 'مأكولات شينجيانغ ومشاوي حلال معتمدة', en: 'Xinjiang Uyghur Halal Kebabs & Pilaf' },
        isHalal: true,
        address: { ar: 'شارع ووما التجاري، لوتشينغ، وينتشو', en: 'Wuma Commercial St, Lucheng, Wenzhou', zh: '浙江省温州市鹿城区五马街商圈' },
        recommendedFor: { ar: 'مشاوي لحم الضأن بالعظم، خبز النان الساخن، أرز البلوف، وأجواء مناسبة لرجال الأعمال', en: 'Authentic charcoal grilled lamb skewers, fresh hot naan, and pilaf' }
      },
      {
        id: 'al-salam-halal-liushi',
        name: { ar: 'مطعم السلام الإسلامي في بلدة ليوشي الكهربائية', en: 'Al-Salam Halal Restaurant Liushi', zh: '柳市清真风味餐厅' },
        cuisineType: { ar: 'مأكولات حلال ونودلز للمسافرين لمدينة الكهرباء', en: 'Halal Beef Noodles & Quick Lunch' },
        isHalal: true,
        address: { ar: 'بالقرب من مدينة الكهربائيات الصينية، بلدة ليوشي، يويشينغ', en: 'Near China Electrical City, Liushi, Yueqing', zh: '浙江省温州市乐清市柳市镇中国电器城旁' },
        recommendedFor: { ar: 'غداء حلال سريع ونظيف أثناء زيارة مصانع الكهرباء والقواطع في ليوشي', en: 'Clean quick halal lunch during electrical factory tours' }
      }
    ],
    touristAttractions: [
      {
        id: 'yandang-mountain-unesco',
        name: { ar: 'جبال ياندانغ البركانية التراثية (Yandang Mountain - 雁荡山)', en: 'Yandang Mountain UNESCO Global Geopark', zh: '雁荡山世界地质公园' },
        category: { ar: 'حديقة جيولوجية عالمية لليونسكو وأحد أشهر جبال الصين', en: 'UNESCO Global Geopark & Natural Wonder' },
        description: { ar: 'جبال بركانية أسطورية يعود تاريخها لـ 120 مليون عام، تشتهر بالقمم الصخرية العمودية الشاهقة، الكهوف المعلقة، والشلالات الضخمة الساحرة.', en: 'Spectacular 120-million-year-old ancient volcanic massif featuring dramatic vertical rock pillars, hanging monasteries, and cascading waterfalls.' }
      },
      {
        id: 'jiangxin-island-ou-river',
        name: { ar: 'جزيرة جيانغشين النهرية والمعالم التراثية (Jiangxin Island - 江心屿)', en: 'Jiangxin Island Historic Park (Ou River)', zh: '江心屿风景名胜区' },
        category: { ar: 'معلم تاريخي وثقافي عريق وسط نهر أو', en: 'Historic River Island & Ancient Pagodas' },
        description: { ar: 'جزيرة خضراء هادئة في قلب نهر أو تضم برجي المعابد التاريخيين من عصر أسرة تانغ، وحدائق كلاسيكية ومتحف ثورة وينتشو.', en: 'Picturesque river island crowned by historic East and West Pagodas, ancient temples, and tranquil garden walks.' }
      }
    ],
    essentialServices: [
      {
        id: 'wenzhou-electrical-testing-center',
        serviceType: { ar: 'فحص واختبار الأجهزة والمعدات الكهربائية', en: 'Electrical Equipment Testing & Certification' },
        title: { ar: 'المركز الوطني لفحص واختبار جودة الأجهزة الكهربائية ذات الجهد المنخفض بـ وينتشو', en: 'National Low-Voltage Electrical Apparatus Quality Inspection Center', zh: '国家低压电器产品质量监督检验中心（浙江）' },
        description: { ar: 'إجراء اختبارات الدوائر القصيرة (Short-Circuit Capacity)، اختبارات العزل الحراري، ومطابقة مواصفات IEC وCB وCE وSASO للقواطع والمفاتيح.', en: 'Accredited testing laboratory for short-circuit breaking capacity, dielectric properties, and international safety compliance reports.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'wenzhou-international-optics-fair',
      name: { ar: 'معرض وينتشو الدولي للبصريات والنظارات (WOF)', en: 'Wenzhou International Optics Fair (WOF)', zh: '温州国际眼镜展览会（WOF）' },
      industry: 'Optical Eyewear, Sunglasses, Frames & Lens Machinery',
      venue: { ar: 'مركز وينتشو الدولي للمعارض والمؤتمرات', en: 'Wenzhou International Convention & Exhibition Center', zh: '温州国际会议展览中心' },
      occurrence: { ar: 'مايو سنوياً', en: 'Annually in May' },
      officialWebsite: 'http://www.opticsfair.com',
      bestFor: ['Eyewear Importers', 'Opticians & Optical Chains', 'Sunglasses Brands', 'Frame Fabricators']
    },
    {
      id: 'china-electrical-fair-yueqing',
      name: { ar: 'معرض الصين للأجهزة الكهربائية في يويشينغ ليوشي (Yueqing Electrical Fair)', en: 'China (Yueqing) International Electrical Equipment Expo', zh: '中国（乐清）国际电工电器博览会' },
      industry: 'Low-Voltage Electricals, Circuit Breakers, Switchgear & Smart Energy',
      venue: { ar: 'مركز معارض مدينة الكهربائيات في ليوشي، يويشينغ', en: 'Liushi International Convention & Exhibition Center', zh: '乐清市柳市国际微展中心' },
      occurrence: { ar: 'أكتوبر سنوياً', en: 'Annually in October' },
      officialWebsite: 'http://www.yqdqexpo.com',
      bestFor: ['Electrical Contractors', 'Switchgear Importers', 'Circuit Breaker Wholesalers', 'Power Utilities']
    },
    {
      id: 'wenzhou-leather-shoe-machinery-fair',
      name: { ar: 'معرض وينتشو الدولي للأحذية ومعدات الجلود (Wenzhou Shoe Expo)', en: 'China (Wenzhou) International Leather, Shoe Material & Machinery Fair', zh: '中国（温州）国际皮革、鞋材、鞋机展览会' },
      industry: 'Leather Footwear, Safety Shoes, Shoe Materials & Machinery',
      venue: { ar: 'مركز وينتشو الدولي للمعارض', en: 'Wenzhou International Exhibition Center', zh: '温州国际会展中心' },
      occurrence: { ar: 'أغسطس سنوياً', en: 'Annually in August' },
      officialWebsite: 'http://www.chinaleatherfair.com',
      bestFor: ['Footwear Importers', 'Shoe Machine Buyers', 'Leather Wholesalers']
    }
  ],
  relatedCitySlugs: ['yiwu', 'ningbo', 'yongkang', 'quanzhou', 'taizhou'],
  relatedProductSlugs: ['hardware-tools', 'electronics', 'machinery', 'apparel'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل وينتشو التجاري الشامل | عاصمة الكهربائيات CHINT، الأحذية والنظارات', en: 'Wenzhou Sourcing Guide | World Capital of Low-Voltage Electricals & Shoes' },
    description: { ar: 'دليل شامل للاستيراد من وينتشو: مصانع القواطع الكهربائية في ليوشي (CHINT وDelixi)، أحذية لوتشينغ الجلدية، نظارات أوهاي، وفنادق ومطاعم حلال.', en: 'Complete sourcing guide to Wenzhou: World Low-Voltage Electrical Capital (CHINT & Delixi), China Shoe Capital, Ouhai Eyewear, and business halal travel.' }
  }
};
