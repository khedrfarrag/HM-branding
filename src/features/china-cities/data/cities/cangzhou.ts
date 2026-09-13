import { ICity } from '../../types';

export const cangzhouCity: ICity = {
  id: 'cangzhou',
  slug: 'cangzhou',
  name: {
    ar: 'تسانغتشو (عاصمة توصيلات الأنابيب وآلات التغليف والزجاج الحراري)',
    en: 'Cangzhou',
    zh: '沧州'
  },
  province: { ar: 'هيبي', en: 'Hebei' },
  region: 'North China / Hebei',
  tier: 'tier-3',
  commercialImportanceScore: 88,
  heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  description: {
    ar: 'عاصمة تصنيع توصيلات أنابيب الصلب والفلنجات العالمية (Pipe Fittings & Forged Flanges) في يانشان ومينغتشوان، والمركز الأول بالصين لصناعة آلات الكرتون والتعبئة والتغليف في دونغقوانغ، وعاصمة الزجاج الحراري عالي البورسليكات في خهجيان. تمتاز بقربها الاستراتيجي من ميناء تيانجين ومينائها التجاري العملاق ميناء هوانغهوا، ووجود مجتمع إسلامي تاريخي عريق يسهل إقامة وتغذية المستوردين المسلمين.',
    en: 'Cangzhou is China\'s premier heavy industrial capital for steel pipe fittings, high-pressure forged flanges, and pipeline engineering equipment (Yanshan & Mengcun), carton packaging & corrugated board machinery (Dongguang), and heat-resistant borosilicate glassware (Hejian). Situated near Tianjin Port and its own deepwater Huanghua Port, Cangzhou also boasts a rich centuries-old Hui Muslim culture with exceptional halal dining infrastructure.'
  },
  keyIndustries: [
    'machinery',
    'hardware-tools',
    'building-materials',
    'industrial-equipment',
    'glassware-tableware',
    'castings-foundry'
  ],
  primaryProducts: {
    ar: [
      'توصيلات ومحابس أنابيب الصلب (Elbows, Tees, Reducers)',
      'فلنجات الصلب المطروقة للمشاريع البترولية (Forged Flanges)',
      'ماكينات تصنيع وطباعة الكرتون المضلع ومعدات التغليف',
      'أكواب وأواني الزجاج الحراري البورسليكات (Double-Wall & Teaware)',
      'مسبوكات الحديد والصمامات الصناعية وقوالب السيارات',
      'الجلود والفراء ومعدات تصنيع الآلات الموسيقية'
    ],
    en: [
      'Steel Pipe Fittings (Elbows, Tees, Reducers, Caps)',
      'High-Pressure Forged Steel Flanges (ASME / DIN / GOST)',
      'Corrugated Carton Packaging & Flexo Printing Machinery',
      'High Borosilicate Heat-Resistant Glassware & Teaware',
      'Industrial Foundry Castings, Valves & Auto Stamping Dies',
      'Fur Pelts, Leather Garments & Musical Instruments'
    ]
  },
  bestFor: [
    'Oil & Gas Contractors',
    'Pipeline Engineering Importers',
    'Packaging & Printing Factory Owners',
    'Kitchenware & Glassware Brand Importers',
    'Industrial Hardware & Valve Distributors'
  ],
  districts: [
    {
      id: 'yanshan-pipeline-capital',
      cityId: 'cangzhou',
      name: {
        ar: 'محافظة يانشان (عاصمة معدات وتوصيلات الأنابيب بالصين)',
        en: 'Yanshan County (Pipeline Equipment Capital)',
        zh: '盐山县'
      },
      activityType: {
        ar: 'أكبر مجمع صناعي في الصين لتصنيع مواسير الصلب الكربوني والستانلس ستيل، والفلنجات المطروقة وتوصيلات الأنابيب لمشاريع النفط والغاز ومحطات الطاقة',
        en: 'China #1 manufacturing base for pipeline equipment, forged high-pressure flanges, and industrial pipe fittings.'
      },
      mainProducts: [
        'توصيلات مواسير صلب (Elbows)',
        'فلنجات مطروقة (Forged Flanges)',
        'أنابيب مقاومة للتآكل',
        'محابس ووصلات عزل حراري'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'mengcun-elbow-flange-capital',
      cityId: 'cangzhou',
      name: {
        ar: 'محافظة مينغتشوان الذاتية الحكم لقومية هوي (عاصمة الأكواع والفلنجات)',
        en: 'Mengcun Hui Autonomous County (Elbow & Fitting Capital)',
        zh: '孟村回族自治县'
      },
      activityType: {
        ar: 'عاصمة أكواع الأنابيب والفلنجات المطروقة مع مجتمع صناعي إسلامي واسع يضم آلاف مصانع السباكة والتشكيل الميكانيكي',
        en: 'Renowned capital of steel pipe elbows and forged fittings with an extensive Hui Muslim industrial manufacturing base.'
      },
      mainProducts: [
        'أكواع توصيل الأنابيب (Elbows)',
        'فلنجات ضغط عالي',
        'وصلات ملولبة ومحابس',
        'تجهيزات خطوط الغاز والنفط'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'dongguang-carton-packaging-hub',
      cityId: 'cangzhou',
      name: {
        ar: 'محافظة دونغقوانغ (عاصمة ماكينات الكرتون والتعبئة والتغليف)',
        en: 'Dongguang County (Carton Packaging Machinery Capital)',
        zh: '东光县'
      },
      activityType: {
        ar: 'المركز الأول في شمال الصين لإنتاج ماكينات طباعة وتصنيع الكرتون المضلع، خطوط إنتاج ألواح الكرتون، ماكينات التقطيع واللصق الآلي',
        en: 'Premier packaging machinery hub producing corrugated board lines, flexo printing slotters, and automated die-cutting machines.'
      },
      mainProducts: [
        'خطوط إنتاج الكرتون المضلع',
        'ماكينات الطباعة الفلكسوغرافية',
        'ماكينات لصق وطي الصناديق',
        'ماكينات التقطيع القالبي (Die-Cutters)'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'hejian-borosilicate-glassware-hub',
      cityId: 'cangzhou',
      name: {
        ar: 'مدينة خهجيان (عاصمة الزجاج الحراري وإعادة تصنيع قطع السيارات)',
        en: 'Hejian City (Heat-Resistant Glassware & Auto Parts Hub)',
        zh: '河间市'
      },
      activityType: {
        ar: 'تنتج أكثر من 70% من إجمالي الزجاج الحراري عالي البورسليكات بالصين (أكواب مزدوجة الجدار، أباريق شاي، كيمكس قهوة) ومجمع إعادة تصنيع مولدات ومارشات السيارات',
        en: 'Produces over 70% of China heat-resistant borosilicate glassware (double-wall cups, teapots, coffee makers) and auto starter/alternator remanufacturing.'
      },
      mainProducts: [
        'أكواب زجاجية مزدوجة الجدار',
        'أباريق شاي وصانعات قهوة زجاجية',
        'أواني زجاجية للمختبرات',
        'مولدات ومحركات تشغيل السيارات المُجددة'
      ],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'botou-foundry-valves-hub',
      cityId: 'cangzhou',
      name: {
        ar: 'مدينة بوتو (عاصمة المسبوكات الصناعية ومعدات البيئة)',
        en: 'Botou City (Industrial Foundry & Environmental Machinery)',
        zh: '泊头市'
      },
      activityType: {
        ar: 'قاعدة عريقة لسباكة الحديد الزهر، تصنيع صمامات المحطات، قوالب كبس هياكل السيارات، وفلاتر تنقية الغبار للمصانع الكبرى',
        en: 'Historic casting center for cast iron valves, industrial dust collection systems, and automotive stamping dies.'
      },
      mainProducts: [
        'صمامات ومسبوكات حديد زهر',
        'قوالب صاج السيارات',
        'فلاتر ومعدات تنقية الأتربة الصناعية',
        'معدات خطوط التجميع'
      ],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false
    },
    {
      id: 'suning-fur-leather-music-hub',
      cityId: 'cangzhou',
      name: {
        ar: 'محافظة سونينغ (عاصمة الفراء والآلات الموسيقية)',
        en: 'Suning County (Fur Trading & Musical Instruments Hub)',
        zh: '肃宁县'
      },
      activityType: {
        ar: 'أكبر مركز في شمال الصين لتجارة ودباغة الفراء الطبيعي وتفصيل المعاطف الجلدية، وأكبر قاعدة لإنتاج الآلات الموسيقية الوترية التقليدية',
        en: 'Major North China center for raw/dressed fur trading, leather outerwear manufacturing, and traditional musical instruments.'
      },
      mainProducts: [
        'فراء طبيعي وجلود مدبوغة',
        'معاطف وملابس شتوية جلدية',
        'آلات موسيقية صينية (Guzheng, Pipa)',
        'إكسسوارات الفراء'
      ],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: false
    },
    {
      id: 'bohai-new-area-huanghua-port',
      cityId: 'cangzhou',
      name: {
        ar: 'منطقة بوهاي الجديدة وميناء هوانغهوا',
        en: 'Bohai New Area & Huanghua Port',
        zh: '渤海新区 / 黄骅市'
      },
      activityType: {
        ar: 'المنفذ البحري الرئيسي لتسانغتشو، مركز الصناعات البتروكيماوية الثقيلة وتداول وشحن الحاويات والمعادن عبر الميناء العميق',
        en: 'Cangzhou maritime deepwater gateway, petrochemical refining cluster, and comprehensive container/breakbulk shipping terminal.'
      },
      mainProducts: [
        'خدمات شحن الحاويات والصب الجاف',
        'منتجات بتروكيماوية',
        'ألواح وقضبان الصلب الإنشائي'
      ],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'yunhe-xinhua-urban-core',
      cityId: 'cangzhou',
      name: {
        ar: 'حيا يونهي وشينخوا (قلب تسانغتشو الإداري والتجاري)',
        en: 'Yunhe & Xinhua Districts (Downtown Commercial Core)',
        zh: '运河区 / 新华区'
      },
      activityType: {
        ar: 'المركز التجاري والمالي للمدينة على ضفاف القناة الكبرى التاريخية، يضم الفنادق الكبرى، الأسواق المركزية والمجتمع الإسلامي ومسجد تسانغتشو التاريخي',
        en: 'City downtown financial and commercial hub on the Grand Canal, featuring 5-star hotels, central trade plazas, and historic Grand Mosque.'
      },
      mainProducts: [
        'مراكز صفقات الشركات والمكاتب التجارية',
        'أسواق الأدوات الكهربائية والميكانيكية',
        'مطاعم وفنادق الضيافة الإسلامية'
      ],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    }
  ],
  wholesaleMarkets: [
    {
      id: 'cangzhou-yanshan-pipeline-market',
      cityId: 'cangzhou',
      name: {
        ar: 'المركز الدولي لتجارة معدات وتوصيلات الأنابيب بيانشان',
        en: 'China Yanshan International Pipeline Equipment Trade Center',
        zh: '中国盐山国际管道装备展销中心'
      },
      type: 'Wholesale',
      category: 'Building Materials & Hardware',
      description: {
        ar: 'أضخم تجمع تجاري متخصص لتوريد محابس وفلنجات وأكواع الأنابيب المصنوعة من الصلب الكربوني والمقاوم للصدأ بجميع معايير ASTM وASME وDIN وGOST لمشاريع البترول والغاز.',
        en: 'World-leading exhibition and wholesale complex for steel pipe fittings, forged high-pressure flanges, valves, and industrial pipelines.'
      },
      address: {
        ar: 'طريق يانشان الصناعي، محافظة يانشان، تسانغتشو',
        en: 'Pipeline Industrial Avenue, Yanshan County, Cangzhou',
        zh: '沧州市盐山县管道装备产业区'
      },
      moqLevel: 'Medium'
    },
    {
      id: 'mengcun-elbow-flange-trade-city',
      cityId: 'cangzhou',
      name: {
        ar: 'سوق مينغتشوان الدولي لتجارة الأكواع والفلنجات',
        en: 'Mengcun International Elbow & Flange Trading Center',
        zh: '孟村国际弯头管件交易市场'
      },
      type: 'Wholesale',
      category: 'Building Materials & Hardware',
      description: {
        ar: 'السوق المركزي لأكواع وتوصيلات الأنابيب الملحومة وغير الملحومة ومستلزمات خطوط الأنابيب مع آلاف المنافذ المباشرة للمصانع المحلية.',
        en: 'Massive dedicated wholesale center for seamless & welded pipe elbows, tees, forged socket fittings, and high-pressure pipe connectors.'
      },
      address: {
        ar: 'تقاطع طريق تشنشينغ، محافظة مينغتشوان ذاتية الحكم، تسانغتشو',
        en: 'Zhenxing Road, Mengcun Hui Autonomous County, Cangzhou',
        zh: '沧州市孟村回族自治县振兴路'
      },
      moqLevel: 'Medium'
    },
    {
      id: 'dongguang-carton-machinery-expo-center',
      cityId: 'cangzhou',
      name: {
        ar: 'مركز دونغقوانغ الدائم لمعارض وتجارة آلات التغليف والكرتون',
        en: 'Dongguang Packaging Machinery Permanent Exhibition Center',
        zh: '东光纸箱包装机械展销中心'
      },
      type: 'Factory Showroom',
      category: 'Industrial Machinery',
      description: {
        ar: 'صالة عرض ومبيعات دائمة تضم أحدث ماكينات الطباعة الفلكسوغرافية، خطوط تصنيع الكرتون المضلع، ماكينات التكسير واللصق الآلي بأسعار المصنع المباشرة.',
        en: 'Permanent exhibition and procurement hub for carton box flexo printing machines, corrugated board lines, and automated packaging equipment.'
      },
      address: {
        ar: 'المنطقة التنموية الاقتصادية، دونغقوانغ، تسانغتشو',
        en: 'Economic Development Zone, Dongguang County, Cangzhou',
        zh: '沧州市东光县包装机械产业园'
      },
      moqLevel: 'Low'
    },
    {
      id: 'hejian-borosilicate-glassware-city',
      cityId: 'cangzhou',
      name: {
        ar: 'مدينة خهجيان لتجارة الزجاج الحراري والصناعات اليدوية',
        en: 'Hejian Craft Glassware & Borosilicate Wholesale City',
        zh: '河间工艺玻璃交易城 (尚德玻璃城)'
      },
      type: 'Wholesale',
      category: 'Home & Kitchen',
      description: {
        ar: 'المركز التجاري الأول بالصين لشراء الأواني والأكواب الزجاجية الحرارية عالي البورسليكات (Double-wall glasses)، أطقم الشاي والقهوة المختصة، وأدوات المختبرات.',
        en: 'China top sourcing market for heat-resistant borosilicate glassware, double-wall tumblers, French presses, pour-over drippers, and teaware.'
      },
      address: {
        ar: 'المنطقة الصناعية للزجاج، مدينة خهجيان، تسانغتشو',
        en: 'Craft Glassware Industrial Zone, Hejian City, Cangzhou',
        zh: '沧州河间市工艺玻璃产业聚集区'
      },
      moqLevel: 'Low'
    },
    {
      id: 'suning-shangcun-fur-market',
      cityId: 'cangzhou',
      name: {
        ar: 'سوق شانغتسون الدولي للفراء والجلود بسونينغ',
        en: 'Suning Shangcun International Fur & Leather Market',
        zh: '肃宁尚村皮毛交易市场'
      },
      type: 'Wholesale',
      category: 'Textiles & Apparel',
      description: {
        ar: 'أضخم بورصة وسوق جملة لشراء الفراء الخام والمدبوغ، جلود المنك والثعلب والراكون، ومعاطف الشتاء الجاهزة للتصدير إلى روسيا وأوروبا وتركيا.',
        en: 'World-renowned raw & dressed fur trading center and wholesale market for mink, fox pelts, shearling, and finished winter outerwear.'
      },
      address: {
        ar: 'بلدة شانغتسون، محافظة سونينغ، تسانغتشو',
        en: 'Shangcun Town, Suning County, Cangzhou',
        zh: '沧州市肃宁县尚村镇'
      },
      moqLevel: 'Low'
    },
    {
      id: 'cangzhou-hardware-electromechanical-city',
      cityId: 'cangzhou',
      name: {
        ar: 'سوق تسانغتشو للعدد والآلات الميكانيكية والكهربائية',
        en: 'Cangzhou Hardware & Electromechanical Market',
        zh: '沧州五金机电城'
      },
      type: 'Wholesale',
      category: 'Hardware & Tools',
      description: {
        ar: 'سوق الجملة المركزي في وسط المدينة للعدد اليدوية والكهربائية، ماكينات اللحام، الصمامات، وأجهزة التحكم الهوائية والصناعية.',
        en: 'Central wholesale market for power tools, welding equipment, pneumatic fittings, pumps, valves, and industrial supplies.'
      },
      address: {
        ar: 'طريق هوانغخه، حي شينخوا، تسانغتشو',
        en: 'Huanghe Road, Xinhua District, Cangzhou',
        zh: '沧州市新华区黄河路'
      },
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'yanshan-economic-development-zone',
      cityId: 'cangzhou',
      name: {
        ar: 'منطقة يانشان للتنمية الاقتصادية ومعدات الأنابيب',
        en: 'Yanshan Economic Development Zone (Pipeline Equipment Base)',
        zh: '河北盐山经济开发区'
      },
      clusterSpecialization: {
        ar: 'قاعدة التصنيع الأكبر وطنياً لأنابيب الصلب غير الملحومة، الفلنجات المعيارية، الأكواع المقاومة للضغط والتآكل، ومعدات النقل البترولي',
        en: 'National-grade pipeline equipment cluster producing seamless steel pipes, forged high-pressure flanges, and anti-corrosion pipelines.'
      },
      factoryTypes: [
        'Steel Pipe Mills',
        'Heavy Forging Presses',
        'Pipe Coating & Anti-Corrosion Facilities',
        'CNC Flange Machining Centers'
      ],
      keyProducts: [
        'فلنجات صلب مطروقة',
        'أكواع وتوصيلات الضغط العالي',
        'مواسير عزل حراري للمشاريع',
        'صمامات خطوط الأنابيب'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'mengcun-pipe-fitting-manufacturing-zone',
      cityId: 'cangzhou',
      name: {
        ar: 'المنطقة الصناعية لتصنيع وتشكيل توصيلات الأنابيب بمينغتشوان',
        en: 'Mengcun Pipe Fitting & Forging Manufacturing Industrial Zone',
        zh: '孟村回族自治县管件产业集聚区'
      },
      clusterSpecialization: {
        ar: 'تخصص متعمق في تشكيل وسحب الأكواع الساخنة والباردة، إنتاج الفلنجات المقاومة للحرارة العالية، والوصلات الدقيقة للنفط والكيماويات',
        en: 'High-density cluster specializing in hot/cold formed pipe elbows, stainless steel reducers, tees, and petrochemical pipe fittings.'
      },
      factoryTypes: [
        'Pipe Elbow Bending & Forming Mills',
        'Induction Heating Pipe Bending Plants',
        'Flange Stamping & Lathing Workshops'
      ],
      keyProducts: [
        'أكواع أنابيب بجميع الزوايا',
        'تيهات ومخفضات أقطار',
        'فلنجات لحام عنقي (Weld Neck Flanges)'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'dongguang-carton-machinery-park',
      cityId: 'cangzhou',
      name: {
        ar: 'المنطقة الصناعية لمعدات وآلات التعبئة والتغليف بدونغقوانغ',
        en: 'Dongguang Packaging Machinery Industrial Park',
        zh: '东光县包装机械产业园区'
      },
      clusterSpecialization: {
        ar: 'مجمع تصنيع متكامل يضم مئات المصانع لإنتاج ماكينات الكرتون المضلع، وحدات الطباعة بالألوان الفلكسوغرافية، ووحدات القطع الليزري والتشطيب الآلي',
        en: 'Comprehensive packaging equipment cluster with hundreds of factories building corrugated cardboard production lines and printing machinery.'
      },
      factoryTypes: [
        'Flexo Printing Machine Manufacturers',
        'Corrugator Production Line Assemblers',
        'Die-Cutting & Creasing Machine Builders'
      ],
      keyProducts: [
        'ماكينات طباعة الكرتون الفلكسو',
        'خطوط إنتاج ألواح الكرتون 3/5/7 طبقات',
        'ماكينات تجميع ولصق الكرتون الآلية'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'hejian-borosilicate-glassware-park',
      cityId: 'cangzhou',
      name: {
        ar: 'المنطقة الصناعية لزجاج البورسليكات والأواني الحرارية بـ خهجيان',
        en: 'Hejian High Borosilicate Glassware Industrial Park',
        zh: '河间市工艺玻璃产业聚集区'
      },
      clusterSpecialization: {
        ar: 'أكبر قاعدة لتشكيل ونفخ الزجاج عالي البورسليكات 3.3 المقاوم للصدمات الحرارية، تصنيع منتجات أدوات القهوة المختصة والشاي والزجاج المزدوج',
        en: 'World major center for 3.3 high borosilicate heat-resistant blown glassware, double-wall glassware, and specialty coffee teaware.'
      },
      factoryTypes: [
        'Manual Glassblowing Studios',
        'Automated Double-Wall Pressing Plants',
        'Decal & Annealing Glass Furnaces'
      ],
      keyProducts: [
        'أكواب قهوة زجاجية مزدوجة الجدار',
        'أباريق شاي مع مصافي زجاجية',
        'أوعية زجاجية معملية ومقاومة للحرارة'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'bohai-petrochemical-marine-logistics-base',
      cityId: 'cangzhou',
      name: {
        ar: 'القاعدة الصناعية واللوجستية بميناء هوانغهوا (بوهاي الجديدة)',
        en: 'Huanghua Port Petrochemical & Industrial Logistics Base',
        zh: '沧州渤海新区黄骅港产业物流基地'
      },
      clusterSpecialization: {
        ar: 'تكرير وتخزين البتروكيماويات، صناعات الصلب الثقيل وتصنيع الهياكل البحرية وتصدير الشحنات السائبة والحاويات عبر ميناء هوانغهوا الدولي',
        en: 'Deepwater port logistics, petrochemical refining, metallurgical processing, and heavy marine engineering equipment.'
      },
      factoryTypes: [
        'Petrochemical Refineries',
        'Structural Steel Fabricators',
        'Port Logistics & Container Depots'
      ],
      keyProducts: [
        'منتجات كيميائية ولدائن',
        'هياكل فولاذية عملاقة',
        'خدمات شحن الحاويات والبضائع العامة'
      ],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'cz-pipeline-fittings-flanges',
      productName: {
        ar: 'توصيلات الأنابيب والفلنجات المطروقة (Steel Pipe Fittings & Flanges)',
        en: 'Steel Pipe Fittings, Forged Flanges & Industrial Valves'
      },
      industryCategory: 'building-materials',
      whyThisCity: {
        ar: 'تنتج تسانغتشو (يانشان ومينغتشوان) ما يزيد عن 60% من إجمالي توصيلات الأنابيب والفلنجات في الصين بأسعار منافسة وجودة معتمدة عالمياً لمشاريع النفط والغاز والبنية التحتية.',
        en: 'Cangzhou produces over 60% of China pipe fittings and flanges, offering full compliance with international standards (ASME/API/DIN/GOST) at direct-from-forge prices.'
      },
      mainManufacturingArea: {
        ar: 'محافظة يانشان ومحافظة مينغتشوان',
        en: 'Yanshan County & Mengcun Hui Autonomous County'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'cz-carton-packaging-machines',
      productName: {
        ar: 'آلات تصنيع وطباعة الكرتون المضلع (Corrugated Packaging Machinery)',
        en: 'Corrugated Box Making & Flexo Printing Machinery'
      },
      industryCategory: 'machinery',
      whyThisCity: {
        ar: 'دونغقوانغ بتسانغتشو هي عاصمة ماكينات الكرتون المعترف بها وطنياً، توفر خطوط إنتاج متكاملة بتكلفة تمثل ثلث تكلفة المعدات الأوروبية مع توافر كامل لقطع الغيار والدعم الفني.',
        en: 'Dongguang is China premier carton machinery capital, offering full production lines at a fraction of European machinery costs with rapid customization.'
      },
      mainManufacturingArea: {
        ar: 'محافظة دونغقوانغ',
        en: 'Dongguang County'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'cz-heat-resistant-borosilicate-glass',
      productName: {
        ar: 'الزجاج الحراري عالي البورسليكات وأدوات القهوة والشاي (Heat-Resistant Glassware)',
        en: 'High Borosilicate Heat-Resistant Glassware & Coffee Ware'
      },
      industryCategory: 'glassware-tableware',
      whyThisCity: {
        ar: 'تنتج خهجيان أكثر من 70% من أكواب الجدار المزدوج وأباريق الشاي المقاومة للحرارة بالصين، وهي المورد الأول للعلامات التجارية العالمية لمستلزمات القهوة والشاي.',
        en: 'Hejian accounts for over 70% of China double-wall glasses, carafes, and heat-resistant teaware, supplying leading global kitchenware brands.'
      },
      mainManufacturingArea: {
        ar: 'مدينة خهجيان',
        en: 'Hejian City'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'cz-foundry-castings-valves',
      productName: {
        ar: 'مسبوكات الحديد والصمامات الصناعية (Cast Iron Valves & Foundry Castings)',
        en: 'Industrial Cast Iron Valves & Custom Castings'
      },
      industryCategory: 'hardware-tools',
      whyThisCity: {
        ar: 'مدينة بوتو بتسانغتشو تمتاز بتاريخ عريق في سباكة وتشكيل الحديد الزهر وقوالب الصاج وصمامات المياه والمشاريع الصناعية.',
        en: 'Botou in Cangzhou is renowned for heavy-duty cast iron valves, industrial pump castings, and precision automobile stamping dies.'
      },
      mainManufacturingArea: {
        ar: 'مدينة بوتو',
        en: 'Botou City'
      },
      wholesaleAvailability: 'Medium',
      exportSuitability: 'High'
    }
  ],
  tradeFairs: [
    {
      id: 'cangzhou-pipeline-expo',
      name: {
        ar: 'معرض الصين الدولي لمعدات وتوصيلات الأنابيب بيانشان',
        en: 'China (Cangzhou/Yanshan) International Pipeline Equipment Expo',
        zh: '中国·沧州国际管道装备博览会'
      },
      industry: 'Steel Pipes, High-Pressure Flanges & Pipeline Engineering',
      venue: {
        ar: 'مركز المعارض الدولي للأنابيب، يانشان، تسانغتشو',
        en: 'Yanshan International Pipeline Exhibition Center, Cangzhou',
        zh: '沧州盐山国际管道装备展销中心'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر أكتوبر',
        en: 'Annually in October'
      },
      bestFor: ['Pipeline Contractors', 'Oil & Gas Sourcing Agents', 'Steel Flange Importers']
    },
    {
      id: 'dongguang-carton-machinery-expo',
      name: {
        ar: 'معرض الصين (دونغقوانغ) الدولي لماكينات الكرتون والتعبئة والتغليف',
        en: 'China (Dongguang) International Carton Packaging Machinery Expo',
        zh: '中国·东光国际纸箱包装机械博览会'
      },
      industry: 'Corrugated Packaging & Flexo Printing Machinery',
      venue: {
        ar: 'مركز معارض ماكينات الكرتون بدونغقوانغ، تسانغتشو',
        en: 'Dongguang Packaging Machinery Exhibition Center, Cangzhou',
        zh: '沧州东光纸箱包装机械展馆'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر أبريل',
        en: 'Annually in April'
      },
      bestFor: ['Carton Box Factory Owners', 'Packaging Importers', 'Printing Machine Distributors']
    },
    {
      id: 'hejian-craft-glassware-expo',
      name: {
        ar: 'معرض خهجيان الدولي للزجاج الحراري والتصميم الابتكاري',
        en: 'China (Hejian) International Craft Glassware Design & Trade Fair',
        zh: '中国·河间工艺玻璃设计创新大赛暨交易博览会'
      },
      industry: 'Borosilicate Glassware, Coffee Drippers & Heat-Resistant Teaware',
      venue: {
        ar: 'مركز المعارض الدولي للزجاج، خهجيان، تسانغتشو',
        en: 'Hejian International Glass Exhibition Center, Cangzhou',
        zh: '河间尚德玻璃创意产业园展厅'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر سبتمبر',
        en: 'Annually in September'
      },
      bestFor: ['Specialty Coffee Brand Buyers', 'Kitchenware Retailers', 'Laboratory Glassware Importers']
    }
  ],
  logistics: {
    nearestAirports: [
      'Tianjin Binhai International Airport (TSN) - 1.2 hrs by HSR/Car',
      'Beijing Daxing International Airport (PKX) - 1.5 hrs by Car/HSR',
      'Beijing Capital International Airport (PEK) - 2.5 hrs by HSR'
    ],
    seaPorts: [
      'Tianjin Port (ميناء تيانجين - البوابة الرئيسية لصادرات تسانغتشو على بعد 100 كم)',
      'Huanghua Port (ميناء هوانغهوا في تسانغتشو - ميناء بحري عميق مخصص للصلب والصب الجاف والحاويات)'
    ],
    highSpeedRailwayStations: [
      'Cangzhou West Railway Station (沧州西站 - محطة قطارات فائقة السرعة على خط بكين-شنغهاي: 50 دقيقة فقط من بكين)',
      'Dongguang Railway Station (东光站)',
      'Botou Railway Station (泊头站)'
    ],
    seaFreightSuitability: {
      ar: 'ممتازة للغاية؛ تقع تسانغتشو خلف ميناء تيانجين الأكبر في شمال الصين مباشرة ومينائها الخاص ميناء هوانغهوا، مما يجعل تكاليف النقل الداخلي للصلب الثقيل والماكينات منخفضة جداً.',
      en: 'Outstanding sea freight access; adjacent to Tianjin Port (100 km) and hosting deepwater Huanghua Port, keeping drayage freight costs minimal for heavy steel pipes, flanges, and machinery.'
    },
    airFreightSuitability: {
      ar: 'سهلة ومباشرة عبر مطار بكين داشينغ ومطار تيانجين بنهاي للشحنات الجوية العاجلة والعينات.',
      en: 'Convenient via Beijing Daxing (PKX) and Tianjin Binhai (TSN) international airports for quick sample dispatch and air cargo.'
    },
    primaryCargoRoutes: {
      ar: [
        'خط النقل المباشر من مصانع يانشان ومينغتشوان إلى ميناء تيانجين (أنابيب وفلنجات الصلب)',
        'شحن ماكينات التغليف من دونغقوانغ في حاويات مفتوحة ومغلقة عبر ميناء تيانجين',
        'شحن منتجات الزجاج الحراري من خهجيان في حاويات مبطنة مانعة للكسر عبر تيانجين'
      ],
      en: [
        'Direct trucking corridor from Yanshan & Mengcun steel plants to Tianjin Port',
        'Machinery containerized shipping (OT/FR & standard 40HQ) from Dongguang via Tianjin',
        'Fragile glassware containerized logistics from Hejian through Tianjin Port'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['أبريل', 'مايو', 'سبتمبر', 'أكتوبر'],
    suggestedStayDays: 3,
    weatherSummary: {
      ar: 'مناخ قاري معتدل وممتع في فصلي الربيع والخريف، دافئ صيفاً وبارد جاف شتاءً.',
      en: 'Four distinct seasons; spring (April-May) and autumn (September-October) offer pleasant weather ideal for factory tours.'
    },
    recommendedStayAreas: [
      {
        ar: 'وسط مدينة تسانغتشو (حي يونهي وشينخوا) للوصول السريع إلى محطة القطار السريع والفنادق العالمية والمطاعم الحلال.',
        en: 'Downtown Cangzhou (Yunhe/Xinhua Districts) for convenient HSR access, luxury international hotels, and historic halal dining.'
      },
      {
        ar: 'محافظة يانشان عند التركيز الكامل على زيارة مصانع الأنابيب والفلنجات.',
        en: 'Yanshan County center when dedicated exclusively to multiple pipeline and flange factory audits.'
      }
    ],
    localTransportAdvice: {
      ar: 'محطة قطار تسانغتشو الغربية (Cangzhou West) تبعد 50 دقيقة فقط بالقطار فائق السرعة من بكين جنوب؛ يُنصح باستئجار سيارة خاصة بسائق للتنقل بين المقاطعات الصناعية المتباعدة (يانشان، دونغقوانغ، خهجيان).',
      en: 'Cangzhou West is only 50 minutes by HSR from Beijing South; hiring a private car with driver is strongly recommended to tour distant county hubs (Yanshan, Dongguang, Hejian).'
    },
    languageTips: {
      ar: 'اللغة المندرينية هي الأساسية؛ وجود مترجم فني متخصص ضروري جداً لمناقشة المواصفات الهندسية الدقيقة للفلنجات والماكينات.',
      en: 'Mandarin is universally spoken; a bilingual technical sourcing guide is essential for negotiating engineering tolerances and machinery specs.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'cangzhou-grand-hotel',
        name: {
          ar: 'فندق تسانغتشو الدولي (Cangzhou International Hotel)',
          en: 'Cangzhou International Hotel',
          zh: '沧州国际饭店'
        },
        category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
        area: {
          ar: 'طريق تشينغتشيوان، حي يونهي، تسانغتشو',
          en: 'Qingquan Road, Yunhe District, Cangzhou'
        },
        address: {
          ar: 'طريق تشينغتشيوان، حي يونهي، تسانغتشو',
          en: 'Qingquan Road, Yunhe District, Cangzhou',
          zh: '沧州市运河区青川路'
        },
        highlights: {
          ar: 'فندق الأعمال الرائد والأشهر بالمدينة، غرف فسيحة ومراكز مؤتمرات وخدمات استضافة رجال الأعمال والمشترين الدوليين',
          en: 'Premier 5-star business hotel in Cangzhou downtown featuring comprehensive meeting amenities and prime city access.'
        }
      },
      {
        id: 'wyndham-cangzhou-hotel',
        name: {
          ar: 'فندق ويندهام تسانغتشو (Wyndham Cangzhou)',
          en: 'Wyndham Cangzhou',
          zh: '沧州温德姆酒店'
        },
        category: { ar: 'فاخر 5 نجوم دولي', en: 'Luxury 5-Star International' },
        area: {
          ar: 'منطقة القناة الجديدة، حي يونهي، تسانغتشو',
          en: 'Canal New District, Yunhe District, Cangzhou'
        },
        address: {
          ar: 'منطقة القناة الجديدة، حي يونهي، تسانغتشو',
          en: 'Canal New District, Yunhe District, Cangzhou',
          zh: '沧州市运河区运河新区'
        },
        highlights: {
          ar: 'فندق عالمي فاخر بإطلالة على القناة الكبرى، مرافق سبا متكاملة وخدمات استقبال وإفطار غربي وخدمات باللغة الإنجليزية',
          en: 'International luxury hotel near the Grand Canal scenic belt offering top-tier executive hospitality and English-speaking front desk.'
        }
      },
      {
        id: 'cangzhou-west-station-metropark',
        name: {
          ar: 'فندق جراند متروبارك تسانغتشو ويست ستيشن',
          en: 'Grand Metropark Hotel Cangzhou West Station',
          zh: '沧州西站维景国际大酒店'
        },
        category: { ar: 'أعمال راقي 4 نجوم', en: 'Upscale Business 4-Star' },
        area: {
          ar: 'بجوار محطة قطار تسانغتشو الغربية فائق السرعة',
          en: 'Adjacent to Cangzhou West High-Speed Railway Station'
        },
        address: {
          ar: 'بجوار محطة قطار تسانغتشو الغربية فائق السرعة',
          en: 'Adjacent to Cangzhou West High-Speed Railway Station',
          zh: '沧州西客站高铁商圈'
        },
        highlights: {
          ar: 'الخيار الأفضل للمسافرين لرحلات عمل سريعة مع وصول مباشر للقطار فائق السرعة المتجه إلى بكين وتيانجين وشانغهاي',
          en: 'Ideal for fast-turnaround business trips with immediate proximity to Cangzhou West HSR station connecting Beijing & Shanghai.'
        }
      },
      {
        id: 'yanshan-pipeline-international-hotel',
        name: {
          ar: 'فندق يانشان الدولي (Yanshan International Hotel)',
          en: 'Yanshan International Hotel',
          zh: '盐山国际酒店'
        },
        category: { ar: 'أعمال 4 نجوم', en: 'Business 4-Star' },
        area: {
          ar: 'محافظة يانشان، مركز صناعة الأنابيب والفلنجات',
          en: 'Yanshan County, Pipeline Industrial Center'
        },
        address: {
          ar: 'محافظة يانشان، مركز صناعة الأنابيب والفلنجات',
          en: 'Yanshan County, Pipeline Industrial Center',
          zh: '沧州市盐山县迎宾东路'
        },
        highlights: {
          ar: 'الفندق المعتمد الأفضل لإقامة مستوردي الأنابيب والفلنجات بالقرب من المصانع لتوفير وقت التنقل اليومي',
          en: 'Top hospitality choice in Yanshan County located conveniently close to major pipeline fitting and flange manufacturing plants.'
        }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'cangzhou-nandasi-halal-street',
        name: {
          ar: 'مطاعم شارع المسجد الكبير الحلال بتسانغتشو (South Mosque Halal Quarter)',
          en: 'Cangzhou Grand South Mosque Halal Restaurant District',
          zh: '沧州清真南大寺清真美食街'
        },
        cuisineType: {
          ar: 'مأكولات إسلامية عريقة، لحوم ضأن وبقر حلال مطبوخة ومشويه على الطريقة الهوية الأصيلة',
          en: 'Traditional Hui Muslim Braised & Roasted Halal Mutton & Beef'
        },
        isHalal: true,
        address: {
          ar: 'بجوار مسجد تسانغتشو الجنوبي التاريخي، حي شينخوا، تسانغتشو',
          en: 'Adjacent to Historic South Grand Mosque, Xinhua District, Cangzhou',
          zh: '沧州市新华区清真南大寺街'
        },
        recommendedFor: {
          ar: 'أفضل وجهة إسلامية لتناول أطباق اللحم البقري والضأن الحلال مع إمكانية أداء الصلوات في أحد أقدم وأعرق مساجد الصين',
          en: 'Premier historic culinary hub for certified halal dining and prayer services at one of China oldest famous grand mosques.'
        }
      },
      {
        id: 'cangzhou-yisiluo-halal-huoguoji',
        name: {
          ar: 'مطعم تسانغتشو الإسلامي لطبق هوغوجي الحلال (Huoguoji Restaurant)',
          en: 'Cangzhou Famous Halal Huoguoji Restaurant',
          zh: '沧州伊香斋清真火锅鸡'
        },
        cuisineType: {
          ar: 'طبق تسانغتشو الشعبي الأشهر (هوغوجي الدجاج الحلال الحار والمتبل)',
          en: 'Cangzhou Specialty Halal Spicy Chicken Hotpot (Huoguoji)'
        },
        isHalal: true,
        address: {
          ar: 'طريق جيانشه، حي يونهي، تسانغتشو',
          en: 'Jianshe Road, Yunhe District, Cangzhou',
          zh: '沧州市运河区建设北路'
        },
        recommendedFor: {
          ar: 'تجربة طبق المدينة الأشهر المعتمد حلالاً والمفضل لدى جميع رجال الأعمال وزوار المدينة',
          en: 'Experiencing Cangzhou most iconic signature chicken hotpot dish, 100% certified halal.'
        }
      },
      {
        id: 'mengcun-halal-beef-mutton-feasts',
        name: {
          ar: 'مطعم مينغتشوان التراثي للذبائح الحلال (Mengcun Halal Gourmet)',
          en: 'Mengcun Hui Halal Beef & Mutton Restaurant',
          zh: '孟村伊穆斋清真牛羊肉庄'
        },
        cuisineType: {
          ar: 'لحوم وأطباق مشوية ومرق اللحم الحلال لقومية هوي المسلمة',
          en: 'Authentic Hui Ethnic Halal Mutton Soup & BBQ'
        },
        isHalal: true,
        address: {
          ar: 'الشارع الرئيسي، محافظة مينغتشوان المسلمة، تسانغتشو',
          en: 'Main Avenue, Mengcun Hui County, Cangzhou',
          zh: '沧州市孟村回族自治县商业街'
        },
        recommendedFor: {
          ar: 'وجبات حلال طازجة ومضمونة لرجال الأعمال والمستوردين أثناء جولات مصانع الأكواع والفلنجات بمينغتشوان',
          en: 'Convenient certified halal dining for pipeline and flange buyers during factory audits in Mengcun.'
        }
      },
      {
        id: 'dongguang-qingyazhai-halal',
        name: {
          ar: 'مطعم دونغقوانغ تشينغيا تشاي الحلال',
          en: 'Dongguang Qingyazhai Halal Restaurant',
          zh: '东光清真清雅斋'
        },
        cuisineType: {
          ar: 'أطباق إسلامية صينية كلاسيكية ولحوم حلال طازجة',
          en: 'Classic Chinese Muslim Dishes & Steamed Buns'
        },
        isHalal: true,
        address: {
          ar: 'وسط محافظة دونغقوانغ، تسانغتشو',
          en: 'County Center, Dongguang County, Cangzhou',
          zh: '沧州东光县普照大街'
        },
        recommendedFor: {
          ar: 'وجبة غداء حلال مريحة لمستوردي ماكينات الكرتون والتعبئة والتغليف في دونغقوانغ',
          en: 'Reliable halal lunches for packaging machinery buyers inspecting machinery plants in Dongguang.'
        }
      }
    ]
  },
  relatedCitySlugs: ['tianjin', 'linyi', 'qingdao', 'shijiazhuang', 'beijing'],
  relatedProductSlugs: [
    'machinery',
    'hardware-tools',
    'building-materials',
    'industrial-equipment',
    'glassware-tableware'
  ],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل تسانغتشو التجاري | مصانع توصيلات الأنابيب، الفلنجات، آلات الكرتون والزجاج الحراري',
      en: 'Cangzhou Sourcing Guide | Pipe Fittings, Forged Flanges, Packaging Machinery & Glassware'
    },
    description: {
      ar: 'الدليل التجاري الشامل للاستيراد من تسانغتشو: مصانع أنابيب وفلنجات الصلب في يانشان ومينغتشوان، ماكينات الكرتون في دونغقوانغ، وزجاج البورسليكات في خهجيان مع خدمات الموانئ والفنادق والمطاعم الحلال.',
      en: 'Complete Cangzhou sourcing guide: Steel pipe fittings and forged flanges in Yanshan & Mengcun, corrugated carton machinery in Dongguang, and borosilicate glassware in Hejian with full logistics, hotels, and halal dining.'
    }
  }
};
