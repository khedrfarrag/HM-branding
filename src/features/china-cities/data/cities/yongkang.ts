import { ICity } from '../../types';

export const yongkangCity: ICity = {
  id: 'yongkang',
  slug: 'yongkang',
  name: { ar: 'يونغكانغ', en: 'Yongkang', zh: '永康' },
  province: { ar: 'تشيجيانغ', en: 'Zhejiang', zh: '浙江省' },
  region: 'Yangtze River Delta',
  tier: 'tier-2',
  commercialImportanceScore: 94,
  heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'العاصمة العالمية الأولى للأبواب المصفحة والخردوات المعدنية (تُلقب رسمياً بـ "عاصمة الأبواب الصينية" و"عاصمة الخردوات"). تنتج أكثر من 70% من الأبواب المصفحة والفولاذية وأبواب الفلل ومقاومة الحريق في الصين (أكثر من 100 مليون باب سنوياً)، وتستحوذ على أكثر من 80% من إنتاج أكواب وترامس الحفظ الحراري (Vacuum Flasks) في العالم، وأكبر قاعدة لتصدير الأدوات الكهربائية وأواني الطهي ومعدات اللياقة البدنية.',
    en: 'The undisputed World Capital of Hardware & Security Doors. Officially recognized as China Door Capital producing over 70% of China steel security, fireproof, and luxury villa doors (over 100M doors annually). Dominates over 80% of global vacuum flask/tumbler manufacturing, and ranks as China premier export cluster for electric power tools, cookware, and fitness gym machines.'
  },
  keyIndustries: ['hardware-tools', 'doors-building-materials', 'vacuum-flasks', 'cookware', 'fitness-equipment', 'power-tools'],
  primaryProducts: {
    ar: [
      'الأبواب المصفحة الفولاذية، أبواب الفلل النحاسية، الأبواب الخشبية والمقاومة للحريق (Buyang & Wangli)',
      'الأقفال الذكية الإلكترونية (بصمة، كود، كاميرا، بلوتوث) ومقابض الأبواب الفاخرة',
      'أكواب وقوارير وترامس الحفظ الحراري من الفولاذ المقاوم للصدأ (Haers Global HQ)',
      'الأدوات والمعدات الكهربائية (صواريخ جلخ، شنيورات، مناشير دائرية، هيلتي)',
      'أواني الطهي والمقالي غير اللاصقة وطناجر الضغط وصواني الألومنيوم المسبوك',
      'أجهزة اللياقة البدنية (مشايات رياضية، دراجات ثابتة، سكوترات كهربائية)',
      'السلالم المعدنية القابلة للطي وعدد البناء والورش'
    ],
    en: [
      'Steel Security Doors, Armored Villa Doors, Fireproof & Interior Doors (Buyang, Wangli HQs)',
      'Smart Biometric Door Locks, Architectural Hardware & Luxury Handles',
      'Stainless Steel Vacuum Flasks, Thermoses & Insulated Tumblers (Haers Global HQ)',
      'Electric Power Tools (Angle grinders, impact drills, rotary hammers, circular saws)',
      'Non-Stick Cookware, Die-Cast Aluminum Frying Pans & Pressure Cookers (Cooker King)',
      'Fitness Gym Equipment (Motorized treadmills, spin bikes, electric scooters & massage tables)',
      'Aluminum Multi-Purpose Folding Ladders & Industrial Workshop Hand Tools'
    ]
  },
  bestFor: ['Security Door Importers', 'Hardware & Power Tool Wholesalers', 'Vacuum Flask Brands', 'Cookware Distributors', 'Fitness Equipment Importers'],
  districts: [
    {
      id: 'yongkang-hardware-city-core',
      cityId: 'yongkang',
      name: { ar: 'منطقة مدينة الخردوات الصينية (China Hardware City Core)', en: 'China Science & Technology Hardware City Hub', zh: '中国科技五金城核心区（金城/金陵市场）' },
      activityType: { ar: 'أضخم مجمع تجاري متكامل لتجارة الأدوات والخردوات والمعدات الكهربائية والأبواب في آسيا', en: 'Asia Largest Wholesale Belt for Hardware, Power Tools & Security Doors' },
      mainProducts: ['أدوات كهربائية', 'أقفال ومفصلات', 'ترامس حرارية', 'أجهزة رياضية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Yongkang South Railway Station (10 min taxi)'
    },
    {
      id: 'buyang-door-industrial-base',
      cityId: 'yongkang',
      name: { ar: 'المنطقة الصناعية الكبرى للأبواب المصفحة (Security Door Mega Industrial Base)', en: 'Yongkang Security Door Manufacturing Mega Base', zh: '永康防盗门与智能锁具产业集群（步阳/王力）' },
      activityType: { ar: 'مقر كبرى شركات الأبواب العالمية (Buyang Group وWangli Security) ومصانع الأبواب المصفحة المؤتمتة', en: 'Headquarters of Buyang & Wangli, producing automated security and armored steel doors' },
      mainProducts: ['أبواب فولاذية مصفحة', 'أبواب مقاومة للحريق معتمدة', 'أقفال ذكية ببصمة الوجه'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestStation: 'Yongkang South Railway Station'
    },
    {
      id: 'haers-vacuum-flask-park',
      cityId: 'yongkang',
      name: { ar: 'مجمع صناعة الترامس وأكواب الحفظ الحراري (Haers Vacuum Flask Cluster)', en: 'Yongkang Vacuum Flask & Drinkware Industrial Base', zh: '永康保温杯产业集群（哈尔斯总部）' },
      activityType: { ar: 'عاصمة أكواب وترامس الحفظ الحراري، أكبر مصانع تجميع وتفريغ الهواء والطلاء بالبودرة في العالم', en: 'World #1 Production Center for Stainless Steel Vacuum Bottles & Tumblers' },
      mainProducts: ['أكواب ترموس حراري', 'قوارير رياضية معزولة', 'زجاجات قهوة ستانلس ستيل'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestStation: 'Yongkang South Station'
    },
    {
      id: 'zhiying-cookware-park',
      cityId: 'yongkang',
      name: { ar: 'بلدة تشيينغ لأواني الطهي ومعدات المطابخ (Zhiying Cookware Town)', en: 'Zhiying Cookware & Kitchen Hardware Industrial Town', zh: '芝英镇（中国五金名镇 / 炊具基地）' },
      activityType: { ar: 'المركز التاريخي لصناعة أواني الطهي غير اللاصقة وطناجر الضغط والسباكة الألومنيوم', en: 'Renowned Cookware Cluster: Non-Stick Pans, Pressure Cookers & Kitchenware' },
      mainProducts: ['مقالي تيفال وسيراميك', 'طناجر ضغط ألومنيوم وستانلس', 'صواني فرن وقوالب كيك'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestStation: 'Yongkang South Railway Station'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'china-hardware-city-jincheng',
      cityId: 'yongkang',
      name: { ar: 'مدينة الخردوات الصينية - سوق جينتشنغ وسوق جينلينغ (China Hardware City)', en: 'China Science & Technology Hardware City (Jincheng & Jinling)', zh: '中国科技五金城（一期金城市场 / 二期金陵市场）' },
      type: 'Wholesale',
      category: 'Hardware, Power Tools & Security Doors',
      description: {
        ar: 'أضخم مركز تجاري لبيع الخردوات والأدوات الصناعية والأبواب بالجملة في الصين، يمتد على مساحة مليون متر مربع ويضم أكثر من 5000 متجر ومصنع. ينقسم إلى: سوق الأدوات الكهربائية والميكانيكية، سوق الأبواب المصفحة والملحقات، سوق ترامس الحفظ الحراري، سوق أواني الطهي، وسوق معدات البناء والسلامة الصناعية.',
        en: 'China largest national wholesale center for hardware, tools, doors, and cookware spanning 1,000,000 sqm with over 5,000 showrooms. Features dedicated zones for electric power tools, security doors, architectural hardware, vacuum drinkware, and non-stick cookware.'
      },
      address: { ar: 'طريق ووجين الشرقي، مدينة يونغكانغ، تشيجيانغ', en: 'East Wujin Rd, Yongkang City, Jinhua, Zhejiang', zh: '浙江省金华市永康市五金北路中国科技五金城' },
      nearestStation: 'Yongkang South Railway Station (10 min taxi)',
      operatingHours: '08:00 - 17:00',
      moqLevel: 'Low'
    },
    {
      id: 'yongkang-international-door-expo-center',
      cityId: 'yongkang',
      name: { ar: 'مركز معارض الأبواب الدولي في يونغكانغ (Yongkang Door Expo Center)', en: 'Yongkang International Door & Architectural Hardware Mart', zh: '永康国际门业博览中心' },
      type: 'Wholesale',
      category: 'Doors, Windows & Smart Access Control',
      description: {
        ar: 'المركز الدائم لعرض وتسويق أحدث طرز الأبواب المصفحة، الأبواب النحاسية الفاخرة للفلل، أبواب الفنادق، الأبواب الخشبية، والأقفال الذكية مع شهادات مكافحة الحريق والسرقة المعتمدة دولياً.',
        en: 'Permanent sourcing expo showcasing advanced security doors, fireproof rated doors, copper luxury entrance gates, smart biometric locks, and interior doors.'
      },
      address: { ar: 'طريق جولينغ، مدينة يونغكانغ', en: 'Jiuling Rd, Yongkang, Zhejiang', zh: '浙江省永康市国际会展中心' },
      nearestStation: 'Yongkang South Railway Station',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'Medium'
    }
  ],
  industrialZones: [
    {
      id: 'buyang-group-industrial-park',
      cityId: 'yongkang',
      name: { ar: 'المجمع الصناعي العالمي لمجموعة بويانغ للأبواب (Buyang Group Industrial Park)', en: 'Buyang Group Global Security Door & Lock Industrial Base', zh: '步阳集团全球总部及特种防盗门制造基地' },
      clusterSpecialization: { ar: 'أكبر مصنع ومصدر للأبواب المصفحة والأبواب الفولاذية والأقفال الإلكترونية في الصين (طاقة إنتاج يومية تتجاوز 100,000 باب)', en: 'World #1 Security Door Manufacturer with automated robotic stamping and powder coating lines' },
      factoryTypes: ['Mega Hydraulic Press Stamping Plants', 'Automated Laser Cutting Lines', 'Testing Labs'],
      keyProducts: ['أبواب مصفحة فولاذية مقاومة للرصاص والكسر', 'أبواب طوارئ مقاومة للحريق', 'أقفال بصمة ذكية'],
      specializationLevel: 'High'
    },
    {
      id: 'haers-vacuum-drinkware-park',
      cityId: 'yongkang',
      name: { ar: 'القاعدة العالمية لشركة هايرس للترامس وأكواب الفولاذ (Haers Vacuum Drinkware Base)', en: 'Haers Global Stainless Steel Vacuum Flask Manufacturing Base', zh: '哈尔斯真空器皿智能制造产业基地' },
      clusterSpecialization: { ar: 'أكبر مصنع ومصدر في العالم لأكواب الحفظ الحراري وقوارير الفولاذ المقاوم للصدأ المقاومة للتسريب', en: 'World Largest Vacuum Insulated Drinkware Manufacturer (Stanley, Yeti OEM capability)' },
      factoryTypes: ['Automated Vacuum Brazing Lines', 'Hydroforming Tube Plants', 'Robotic Spray Coating'],
      keyProducts: ['أكواب قهوة حرارية معزولة', 'ترامس ماء رياضية', 'حافظات طعام حرارية مزدوجة الجدار'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'yk-steel-security-doors',
      productName: { ar: 'الأبواب المصفحة الفولاذية وأبواب الفلل والأبواب المقاومة للحريق', en: 'Steel Armored Security Doors, Villa Entry Doors & Fireproof Doors' },
      industryCategory: 'doors-building-materials',
      whyThisCity: { ar: 'تنتج يونغكانغ 70% من أبواب الصين مع أوسع تشكيلة من تصاميم الحفر والطلاء والأقفال المعتمدة وبأسعار تنافسية لا تضاهى.', en: 'Yongkang manufactures 70% of China doors with unmatched stamping die varieties, certified fire ratings, and unbeatable container pricing.' },
      mainManufacturingArea: { ar: 'مدينة يونغكانغ وبويانغ (Buyang & Wangli)', en: 'Yongkang Door Cluster' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'yk-vacuum-insulated-flasks',
      productName: { ar: 'أكواب الحفظ الحراري والترامس وقوارير الفولاذ 304/316', en: 'Stainless Steel Vacuum Flasks, Tumblers & Insulated Drinkware' },
      industryCategory: 'vacuum-flasks',
      whyThisCity: { ar: 'تستحوذ على أكثر من 80% من إنتاج ترامس الحفظ الحراري في العالم، وتوفر أعلى مواصفات العزل الحراري (24 ساعة) وحلول الماركات الخاصة OEM.', en: 'Controls over 80% of global insulated flask production, offering 24-hour thermal vacuum insulation and custom laser engraving OEM.' },
      mainManufacturingArea: { ar: 'يونغكانغ وبلدة وويي المجاورة', en: 'Yongkang and nearby Wuyi' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'yk-power-tools-machinery',
      productName: { ar: 'الأدوات والمعدات الكهربائية وعدد البناء والورش', en: 'Electric Power Tools, Angle Grinders, Drills & Workshop Machinery' },
      industryCategory: 'power-tools',
      whyThisCity: { ar: 'القاعدة الأولى في الصين للأدوات والمعدات الكهربائية بأسعار تجارية تنافسية مع كافة الإكسسوارات وقطع الغيار متوفرة فوراً.', en: 'China primary production base for cost-effective heavy-duty power tools, motors, and replacement parts.' },
      mainManufacturingArea: { ar: 'مدينة الخردوات الصينية', en: 'China Hardware City Belt' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Yiwu Airport (YIW - 45 دقيقة بالسيارة من وسط يونغكانغ)',
      'Hangzhou Xiaoshan International Airport (HGH - 80 دقيقة بالقطار السريع)'
    ],
    seaPorts: [
      'Ningbo-Zhoushan Port (الميناء الطبيعي والمباشر لحاويات يونغكانغ - 90 دقيقة بالشاحنات اللوجستية)',
      'Shanghai Port (عبر شبكة قطارات الشحن السريع في ساعتين ونصف)'
    ],
    highSpeedRailwayStations: [
      'Yongkang South Railway Station (永康南站 - محطة القطارات السريعة الحديثة، تبعد 25 دقيقة فقط عن إيوو)'
    ],
    seaFreightSuitability: {
      ar: 'شحن حاويات الأبواب والمعدات يتم بسلاسة فائقة عبر ميناء نينغبو العملاق بفضل قرب المسافة وتوفر ساحات تعبئة الحاويات في مصانع الأبواب مباشرة.',
      en: 'Container transport for heavy security doors and hardware is exceptionally fast and cost-effective via nearby Ningbo-Zhoushan Port.'
    },
    airFreightSuitability: {
      ar: 'شحن عينات الترامس والأدوات الكهربائية والأقفال الذكية يتم بسهولة عبر مطار إيوو أو مطار هانغتشو.',
      en: 'Express air samples for smart locks, power tools, and vacuum drinkware via nearby Yiwu or Hangzhou airports.'
    },
    primaryCargoRoutes: {
      ar: [
        'خطوط ملاحية مكثفة من ميناء نينغبو إلى جبل علي، جدة، الدمام، صلالة، طرابلس، وبورسعيد',
        'ربط بري يومي لنقل البضائع المجمعة مع مستودعات الشحن في مدينة إيوو (Yiwu)'
      ],
      en: [
        'Intensive ocean container routes from Ningbo Port to Middle Eastern and North African ports',
        'Daily dedicated consolidated trucking connecting directly to Yiwu export bonded warehouses'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['مايو (معرض الأبواب الدولي)', 'سبتمبر (معرض الخردوات الصيني الوطني)', 'أكتوبر', 'نوفمبر'],
    suggestedStayDays: 2,
    weatherSummary: {
      ar: 'معتدل في الربيع والخريف، دافئ صيفاً وبارد شتاءً. أفضل وقت للزيارة هو موسم معرض الأبواب في مايو ومعرض الخردوات في سبتمبر.',
      en: 'Pleasant Spring and Autumn, ideally timed with the Door Expo in May and Hardware Fair in September.'
    },
    recommendedStayAreas: [
      {
        ar: 'وسط مدينة يونغكانغ بالقرب من مدينة الخردوات (Hardware City Center): الأنسب لقربها من الأسواق ومراكز المعارض والفنادق الراقية.',
        en: 'Near China Hardware City: Central hub walking distance to showrooms, hotels, and dining.'
      }
    ],
    localTransportAdvice: {
      ar: 'يونغكانغ تبعد 25 دقيقة فقط بالقطار فائق السرعة عن مدينة إيوو (Yiwu)، لذا يمكن للمستوردين الإقامة في إيوو أو يونغكانغ وزيارة المصانع يومياً بسهولة بالغة.',
      en: 'Yongkang is only a 25-minute bullet train ride from Yiwu! Many buyers base in Yiwu and make day trips to Yongkang factory tours.'
    },
    languageTips: {
      ar: 'مصانع الأبواب الكبرى وشركات الترامس العالمية لديها مكاتب تصدير متمرسة وتتحدث الإنجليزية وتفهم مقاسات الأبواب القياسية في الشرق الأوسط (مثل 2050x960mm أو المقاسات المخصصة).',
      en: 'Major door factories have experienced export teams speaking good English and familiar with Middle Eastern door dimensions and standard lock specifications.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'richness-international-yongkang',
        name: { ar: 'فندق ريتشنيس يونغكانغ الدولي (Richness International Hotel)', en: 'Richness International Hotel Yongkang', zh: '永康紫微五星级国际大酒店' },
        category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
        area: { ar: 'طريق ووجين، بجوار مدينة الخردوات الصينية', en: 'Wujin Rd, Adjacent to China Hardware City' },
        highlights: { ar: 'أشهر فندق أعمال في يونغكانغ، يبعد دقائق عن صالات عرض الأبواب والخردوات، قاعات مؤتمرات فخمة ومطاعم متنوعة', en: 'Premier business hotel in Yongkang, adjacent to hardware marts, with top executive amenities' }
      },
      {
        id: 'yongkang-hotel',
        name: { ar: 'فندق يونغكانغ الحكومي التراثي (Yongkang Hotel)', en: 'Yongkang Hotel', zh: '永康宾馆' },
        category: { ar: 'أعمال راقٍ 4.5 نجوم', en: 'Upscale Business 4.5-Star' },
        area: { ar: 'وسط المدينة التاريخي، يونغكانغ', en: 'City Center, Yongkang' },
        highlights: { ar: 'موقع وسطي استراتيجي، حدائق داخلية مريحة، وقريب من محطة القطارات والمصانع', en: 'Historic city center location with tranquil gardens and reliable business services' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'lanzhou-halal-hardware-city',
        name: { ar: 'مطعم لانتشو الإسلامي الحلال - فرع مدينة الخردوات', en: 'Lanzhou Halal Beef Noodles Hardware City', zh: '兰州正宗清真牛肉拉面（五金城店）' },
        cuisineType: { ar: 'مأكولات إسلامية صينية ونودلز ولحم بقري حلال', en: 'Traditional Halal Beef Noodles' },
        isHalal: true,
        address: { ar: 'بجوار البوابة الرئيسية لمدينة الخردوات، يونغكانغ', en: 'Main Gate of China Hardware City, Yongkang', zh: '浙江省永康市五金城西大门' },
        recommendedFor: { ar: 'غداء حلال سريع وطازج ونظيف أثناء جولات سوق الخردوات والأبواب', en: 'Fresh, quick halal beef noodle bowls and lamb soup during trade sourcing' }
      },
      {
        id: 'xinjiang-oasis-halal-yongkang',
        name: { ar: 'مطعم واحة شينجيانغ الإسلامي بـ يونغكانغ', en: 'Xinjiang Oasis Halal Restaurant Yongkang', zh: '永康绿洲新疆清真餐厅' },
        cuisineType: { ar: 'مأكولات شينجيانغ ومشاوي حلال معتمدة', en: 'Xinjiang Halal Lamb & Kebabs' },
        isHalal: true,
        address: { ar: 'طريق ليتشو، وسط مدينة يونغكانغ', en: 'Lizhou Rd, Downtown Yongkang', zh: '浙江省永康市丽州中路' },
        recommendedFor: { ar: 'أسياخ لحم ضأن مشوية على الفحم، خبز النان الساخن، وأطباق أرز البلوف باللحم', en: 'Charcoal lamb skewers, fresh hot naan, and authentic halal dining' }
      }
    ],
    touristAttractions: [
      {
        id: 'fangyan-mountain-scenic',
        name: { ar: 'جبال فانغيان الصخرية ذات التضاريس الحمراء (Fangyan Mountain - 方岩风景名胜区)', en: 'Fangyan Mountain Danxia Scenic Area', zh: '方岩风景名胜区' },
        category: { ar: 'معلم طبيعي وثقافي وطني شهير', en: 'National Danxia Landform Scenic Wonder' },
        description: { ar: 'منطقة جبلية ساحرة تشتهر بتكوينات صخور الدانشيا الحمراء الشاهقة والمعابد التاريخية والمنحدرات البانورامية الخلابة.', en: 'Famous national scenic area renowned for dramatic red sandstone cliffs, waterfalls, and ancient mountain shrines.' }
      }
    ],
    essentialServices: [
      {
        id: 'yongkang-door-hardware-testing',
        serviceType: { ar: 'فحص جودة الأبواب والمعدات واعتمادها', en: 'Door & Hardware Safety Testing' },
        title: { ar: 'المركز الوطني لفحص واختبار الأبواب المصفحة والخردوات بـ يونغكانغ', en: 'National Hardware & Security Door Quality Inspection Center', zh: '国家五金工具及防盗门质量监督检验中心' },
        description: { ar: 'فحص معايير مقاومة الكسر والحرائق للأبواب المصفحة، واختبارات العزل الحراري للترامس، وإصدار شهادات المطابقة الدولية.', en: 'Official testing center for fire ratings, forced-entry resistance, thermal retention tests, and export certification.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'china-hardware-fair-yongkang',
      name: { ar: 'معرض الصين الدولي للخردوات والمعدات في يونغكانغ (China Hardware Fair)', en: 'China Hardware Fair (Yongkang)', zh: '中国五金博览会（每年9月26日定期开幕）' },
      industry: 'Hardware, Power Tools, Cookware & Industrial Supplies',
      venue: { ar: 'مركز يونغكانغ الدولي للمعارض والمؤتمرات', en: 'Yongkang International Convention & Exhibition Center', zh: '永康国际会展中心' },
      occurrence: { ar: '26-28 سبتمبر سنوياً (منذ عام 1996)', en: 'Annually in September (Sep 26-28)' },
      officialWebsite: 'http://www.hardware-fair.com',
      bestFor: ['Hardware Importers', 'Power Tool Wholesalers', 'Cookware Distributors', 'Building Contractors']
    },
    {
      id: 'china-international-door-expo-yongkang',
      name: { ar: 'معرض الصين الدولي لصناعة الأبواب والأقفال الذكية (China International Door Expo)', en: 'China International Door Industry Expo (Yongkang)', zh: '中国国际门业博览会（每年5月26日定期开幕）' },
      industry: 'Security Doors, Villa Doors, Fire Doors & Smart Locks',
      venue: { ar: 'مركز يونغكانغ الدولي للمعارض', en: 'Yongkang International Exhibition Center', zh: '永康国际会展中心' },
      occurrence: { ar: '26-28 مايو سنوياً', en: 'Annually in May (May 26-28)' },
      officialWebsite: 'http://www.chindoorfair.com',
      bestFor: ['Door Importers', 'Building Materials Wholesalers', 'Architects & Contractors', 'Smart Lock Distributors']
    }
  ],
  relatedCitySlugs: ['yiwu', 'cixi', 'ningbo', 'hangzhou', 'wenzhou'],
  relatedProductSlugs: ['hardware-tools', 'building-materials', 'machinery'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل يونغكانغ التجاري الشامل | عاصمة الأبواب المصفحة والخردوات والترامس', en: 'Yongkang Commercial Sourcing Guide | World Capital of Doors & Hardware' },
    description: { ar: 'دليل شامل للاستيراد من يونغكانغ: مصانع الأبواب المصفحة، أكواب وترامس الحفظ الحراري، الأدوات الكهربائية، مدينة الخردوات الصينية، وفنادق ومطاعم حلال.', en: 'Complete sourcing guide to Yongkang: China Door & Hardware Capital, Buyang security doors, Haers vacuum drinkware, power tools & halal guide.' }
  }
};
