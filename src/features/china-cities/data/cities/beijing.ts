import { ICity } from '../../types';

export const beijingCity: ICity = {
  id: 'beijing',
  slug: 'beijing',
  name: {
    ar: 'بكين (العاصمة ومركز التكنولوجيا والصناعات المتقدمة والمعارض الدولية)',
    en: 'Beijing',
    zh: '北京'
  },
  province: { ar: 'بلدية بكين المركزية', en: 'Beijing Municipality' },
  region: 'North China / Capital Region',
  tier: 'tier-1',
  commercialImportanceScore: 99,
  heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80',
  description: {
    ar: 'عاصمة جمهورية الصين الشعبية والمركز السياسي والثقافي والتكنولوجي الأكبر في البلاد. تضم وادي السيليكون الصيني (تشونغ قوان تسون)، ومقرات أكبر شركات التكنولوجيا، وتصنيع السيارات الكهربائية (BAIC وXiaomi EV)، وتستضيف أضخم المعارض الدولية (CIFTIS وAuto China). تتميز ببنية إسلامية تاريخية عريقة في حي نيوجيه ومسجد نيوجيه التاريخي مع خيارات طعام حلال إمبراطورية فاخرة.',
    en: 'The capital of China and its foremost political, cultural, and technological innovation center. Home to China Silicon Valley (Zhongguancun), major automotive and EV manufacturing hubs (BAIC & Xiaomi Auto), mega exhibition events (CIFTIS, Auto China), and historic Islamic heritage centered around the centuries-old Niujie Mosque and Halal culinary quarter.'
  },
  keyIndustries: [
    'high-tech-electronics',
    'automotive-ev',
    'biomedical-pharmaceuticals',
    'aerospace-defense',
    'international-trade-fairs',
    'cultural-creative'
  ],
  primaryProducts: {
    ar: [
      'الإلكترونيات المتقدمة والدوائر المتكاملة وأجهزة الحوسبة',
      'السيارات الكهربائية ومكونات القيادة الذاتية (EVs)',
      'المعدات الطبية الحيوية والأدوية والمختبرات',
      'الماكينات الدقيقة ومعدات الروبوتات والذكاء الاصطناعي',
      'التحف والمقتنيات الفنية والهدايا التراثية الراقية',
      'المواد الغذائية والمنتجات الزراعية المجمعة للاستيراد والتصدير'
    ],
    en: [
      'Advanced Electronics, Integrated Circuits & Computing Hardware',
      'Electric Vehicles (EVs) & Autonomous Driving Components',
      'Biomedical Instruments, Healthcare & Laboratory Equipment',
      'Precision Industrial Robotics & AI-Powered Hardware',
      'Fine Antiques, Artwork, Jade & Cultural Commodities',
      'National Agricultural Trade Commodities & Packaged Foods'
    ]
  },
  bestFor: [
    'Technology & AI Buyers',
    'Automotive & EV Sourcing',
    'Medical & Biotech Importers',
    'International Trade Fair Attendees',
    'High-End Corporate Sourcing Agents'
  ],
  districts: [
    {
      id: 'haidian-zhongguancun-tech',
      cityId: 'beijing',
      name: {
        ar: 'حي هايديان (وادي السيليكون الصيني - تشونغ قوان تسون)',
        en: 'Haidian District (Zhongguancun Tech Hub)',
        zh: '海淀区 (中关村)'
      },
      activityType: {
        ar: 'قلب الابتكار التكنولوجي الأكبر في آسيا، يضم مقرات عمالقة التكنولوجيا (Lenovo, Baidu, Xiaomi) ومراكز أبحاث الذكاء الاصطناعي وأشباه الموصلات',
        en: 'Asia premier innovation hub, housing global tech giants (Lenovo, Baidu, Xiaomi), AI research centers, and semiconductor design labs.'
      },
      mainProducts: [
        'أجهزة الكمبيوتر والخوادم',
        'معدات الذكاء الاصطناعي والحوسبة',
        'الدوائر المتكاملة والإلكترونيات'
      ],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'yizhuang-bda-industrial-park',
      cityId: 'beijing',
      name: {
        ar: 'منطقة ييتشوانغ للتنمية الاقتصادية والتكنولوجية (BDA)',
        en: 'Yizhuang Economic-Technological Development Area (BDA)',
        zh: '北京经济技术开发区 (亦庄)'
      },
      activityType: {
        ar: 'المنطقة الصناعية الوطنية المتطورة لتصنيع السيارات الكهربائية الذكية، الشاشات الدقيقة (BOE)، والدوائر المتكاملة (SMIC)',
        en: 'National advanced manufacturing zone hosting smart EV manufacturing (Xiaomi EV, BAIC), display technologies (BOE), and semiconductor fabs.'
      },
      mainProducts: [
        'سيارات كهربائية ومركبات ذكية',
        'شاشات العرض LCD/OLED',
        'رقائق السيليكون والمعدات الدقيقة'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'chaoyang-cbd-trade-centers',
      cityId: 'beijing',
      name: {
        ar: 'حي تشاويانغ (المركز التجاري والمالي والدبلوماسي - CBD)',
        en: 'Chaoyang District (Central Business District - CBD)',
        zh: '朝阳区 (CBD)'
      },
      activityType: {
        ar: 'المركز التجاري العالمي والمقر الرئيسي للشركات متعددة الجنسيات وغرف التجارة الدولية والبنوك والمعارض',
        en: 'International commercial and financial hub, hosting multinational HQs, foreign embassies, global trade chambers, and luxury hotels.'
      },
      mainProducts: [
        'مكاتب الشركات الدولية',
        'خدمات الاستشارات الاستيرادية',
        'مراكز صفقات التجارة العالمية'
      ],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'shunyi-automotive-airport-hub',
      cityId: 'beijing',
      name: {
        ar: 'حي شونيي (مركز صناعة السيارات والمنطقة الحرة للمطار)',
        en: 'Shunyi District (Automotive & Airport Free Trade Zone)',
        zh: '顺义区'
      },
      activityType: {
        ar: 'مجمع مصانع سيارات بكين (BAIC Group) وهيونداي بكين، ومنطقة التجارة الحرة الشاملة المجاورة لمطار العاصمة الدولي',
        en: 'Automotive manufacturing base (BAIC Group, Beijing Hyundai) and comprehensive bonded logistics zone adjacent to Capital Airport.'
      },
      mainProducts: [
        'سيارات الركاب والشاحنات',
        'قطع غيار ومحركات السيارات',
        'خدمات الشحن الجوي السريع'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'daxing-biomedicine-logistics',
      cityId: 'beijing',
      name: {
        ar: 'حي داشينغ (المدينة الطبية الحيوية والمنطقة الاقتصادية للمطار الجديد)',
        en: 'Daxing District (Biomedicine Base & Airport Aerotropolis)',
        zh: '大兴区'
      },
      activityType: {
        ar: 'أكبر قاعدة وطنية للصناعات الدوائية والطبية الحيوية، والمنطقة اللوجستية المحيطة بمطار داشينغ الدولي العملاق',
        en: 'Major national bio-medicine industrial base and high-speed international cargo hub surrounding Beijing Daxing Airport.'
      },
      mainProducts: [
        'معدات طبية وأدوية حيوية',
        'أجهزة تشخيص مخبرية',
        'خدمات التخليص الجوي الدولي'
      ],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'xicheng-niujie-islamic-quarter',
      cityId: 'beijing',
      name: {
        ar: 'حي شيتشنغ وشارع نيوجيه الإسلامي التاريخي',
        en: 'Xicheng District & Historic Niujie Muslim Quarter',
        zh: '西城区 (牛街)'
      },
      activityType: {
        ar: 'الحي المالي والقلب التاريخي للمجتمع الإسلامي في بكين، يضم مسجد نيوجيه العريق وسوق المنتجات والمأكولات الحلال التراثية',
        en: 'Financial Street hub and historic center of Beijing Muslim community, featuring the thousand-year-old Niujie Mosque and halal markets.'
      },
      mainProducts: [
        'الأطعمة واللحوم الحلال المعتمدة',
        'الخدمات المالية والاستثمارية',
        'المنتجات التراثية والثقافية'
      ],
      tradeFocus: 'Retail',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    }
  ],
  wholesaleMarkets: [
    {
      id: 'xinfadi-agricultural-trade-center',
      cityId: 'beijing',
      name: {
        ar: 'سوق شينفادي الدولي للجملة (أضخم مركز تجاري للمواد الغذائية بآسيا)',
        en: 'Beijing Xinfadi International Agricultural Wholesale Market',
        zh: '北京新发地农产品中心批发市场'
      },
      type: 'Wholesale',
      category: 'Food & Agriculture',
      description: {
        ar: 'أكبر سوق لتجارة الجملة الزراعية والغذائية في آسيا؛ يغطي مساحة تفوق 1.6 مليون متر مربع ويتحكم بأكثر من 80% من الإمدادات الغذائية لبكين وشمال الصين.',
        en: 'Asia largest wholesale food and agricultural exchange center, spanning 1.6 million square meters with thousands of direct agricultural trading stalls.'
      },
      address: {
        ar: 'طريق جينغكاي، حي فنغتاي، بكين',
        en: 'Jingkai Road, Fengtai District, Beijing',
        zh: '北京市丰台区京开路新发地'
      },
      moqLevel: 'Medium'
    },
    {
      id: 'panjiayuan-antiques-cultural-market',
      cityId: 'beijing',
      name: {
        ar: 'سوق بانجيا يوان للتحف والفنون الشعبية واليشم',
        en: 'Panjiayuan Antique & Cultural Market',
        zh: '北京潘家园旧货市场'
      },
      type: 'Wholesale',
      category: 'Art, Jewelry & Antiques',
      description: {
        ar: 'أكبر وأشهر سوق جملة وتجزئة في الصين لمنتجات اليشم، التحف، الخزف، المنحوتات الخشبية، واللوحات والقطع التراثية الصينية.',
        en: 'China most famous market for folk antiques, jade ornaments, traditional ceramics, woodcarvings, calligraphy, and cultural souvenirs.'
      },
      address: {
        ar: 'طريق هواوي، حي تشاويانغ، بكين',
        en: 'Huawei Road, Chaoyang District, Beijing',
        zh: '北京市朝阳区华威里18号'
      },
      moqLevel: 'Low'
    },
    {
      id: 'shilihe-lighting-building-materials-city',
      cityId: 'beijing',
      name: {
        ar: 'مدينة شيليخه لمواد الديكور والإضاءة ومستلزمات البناء',
        en: 'Shilihe Building Materials & Lighting Plaza',
        zh: '北京十里河灯饰建材城'
      },
      type: 'Wholesale',
      category: 'Building Materials & Lighting',
      description: {
        ar: 'شارع تجاري ضخم يضم معارض كبرى الشركات الصينية لمنتجات الإضاءة، السيراميك، الأبواب، ومستلزمات الفنادق والمشاريع المعمارية في شمال الصين.',
        en: 'Massive commercial belt featuring direct manufacturer showrooms for commercial lighting, sanitary ware, tiles, and interior fixtures.'
      },
      address: {
        ar: 'طريق شيليخه التجاري، حي تشاويانغ، بكين',
        en: 'Shilihe Commercial Belt, Chaoyang District, Beijing',
        zh: '北京市朝阳区十里河商业街'
      },
      moqLevel: 'Low'
    },
    {
      id: 'zhongguancun-it-hardware-exchange',
      cityId: 'beijing',
      name: {
        ar: 'مركز تشونغ قوان تسون لتجارة معدات وتجهيزات تكنولوجيا المعلومات',
        en: 'Zhongguancun IT & Electronics Procurement Center',
        zh: '中关村科技电子交易中心'
      },
      type: 'Factory Showroom',
      category: 'High-Tech Electronics',
      description: {
        ar: 'منظومة صالات العرض التخصصية لموردي خوادم الحوسبة السحابية، أجهزة الشبكات، ومعدات الذكاء الاصطناعي الدقيقة.',
        en: 'Showroom complex and direct vendor hub for enterprise servers, AI computing modules, networking hardware, and tech components.'
      },
      address: {
        ar: 'شارع تشونغ قوان تسون، حي هايديان، بكين',
        en: 'Zhongguancun Avenue, Haidian District, Beijing',
        zh: '北京市海淀区中关村大街'
      },
      moqLevel: 'Low'
    },
    {
      id: 'beijing-tianyi-commodity-trade-center',
      cityId: 'beijing',
      name: {
        ar: 'مركز تيانيي لتجارة السلع الاستهلاكية والهدايا الإعلانية',
        en: 'Beijing Tianyi Wholesale Commodity & Gifts Trade Center',
        zh: '北京天意国际小商品贸易中心'
      },
      type: 'Wholesale',
      category: 'Consumer Goods & Gifts',
      description: {
        ar: 'سوق الجملة المعتمد للسلع الترويجية، الهدايا المكتبية، الأدوات الاحتفالية، والإكسسوارات التجارية لتجار الجملة في شمال الصين.',
        en: 'Longstanding commercial wholesale hub for corporate promotional gifts, office stationery, festive supplies, and lifestyle commodities.'
      },
      address: {
        ar: 'طريق فوتشنغمن، حي شيتشنغ، بكين',
        en: 'Fuchengmenwai Avenue, Xicheng District, Beijing',
        zh: '北京市西城区阜成门外大街'
      },
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'zhongguancun-science-park-cluster',
      cityId: 'beijing',
      name: {
        ar: 'مجمع تشونغ قوان تسون للعلوم والتكنولوجيا الوطنية',
        en: 'Zhongguancun National Science & Technology Innovation Park',
        zh: '中关村科技园区'
      },
      clusterSpecialization: {
        ar: 'أكبر بيئة حاضنة لتطوير خوارزميات الذكاء الاصطناعي، الرقائق الإلكترونية، وأجهزة الاتصالات الحديثة',
        en: 'China flagship science park driving AI algorithms, edge computing chips, quantum communication, and software engineering.'
      },
      factoryTypes: [
        'Hardware R&D Labs',
        'Semiconductor Design Studios',
        'AI Prototyping Centers'
      ],
      keyProducts: [
        'خوادم حوسبة ومحطات عمل',
        'شرائح معالجة ذكاء اصطناعي',
        'أنظمة اتصالات 5G و6G'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'beijing-bda-smart-manufacturing-zone',
      cityId: 'beijing',
      name: {
        ar: 'قاعدة التصنيع الذكي بييتشوانغ (BDA)',
        en: 'Beijing BDA Advanced Smart Manufacturing Base',
        zh: '北京经济技术开发区高端制造业基地'
      },
      clusterSpecialization: {
        ar: 'مجمع ضخم لإنتاج وتجميع السيارات الكهربائية المتطورة، شاشات العرض المتقدمة، وروبوتات الخدمات والأتمتة',
        en: 'High-end manufacturing cluster for next-gen electric vehicles, smart cockpit electronics, advanced displays, and robotics.'
      },
      factoryTypes: [
        'Automated EV Assembly Lines',
        'Cleanroom Display Fabs',
        'Robotics Integration Plants'
      ],
      keyProducts: [
        'سيارات كهربائية متطورة (Xiaomi Auto / BAIC)',
        'شاشات عرض BOE OLED',
        'أذرع روبوتية صناعية'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'shunyi-baic-automotive-industrial-park',
      cityId: 'beijing',
      name: {
        ar: 'المجمع الصناعي لمجموعة سيارات بكين بشونيي (BAIC)',
        en: 'Shunyi BAIC Automotive Industrial Park',
        zh: '顺义北京汽车产业研发制造基地'
      },
      clusterSpecialization: {
        ar: 'مقر ومصانع مجموعة بايك موتور لإنتاج سيارات الدفع الرباعي، الشاحنات الثقيلة، والمركبات التجارية والكهربائية',
        en: 'Main manufacturing and export vehicle testing base for BAIC passenger SUVs, off-road vehicles, and commercial fleet trucks.'
      },
      factoryTypes: [
        'Automobile Stamping & Welding Plants',
        'Paint & Final Assembly Shops',
        'Powertrain & Battery Integration Facilities'
      ],
      keyProducts: [
        'سيارات SUV كهربائية وبنزين',
        'شاحنات ومركبات تجارية',
        'قطع محركات وأنظمة تعليق'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'daxing-biomedicine-innovation-park',
      cityId: 'beijing',
      name: {
        ar: 'المنطقة الوطنية للصناعات الدوائية والطبية الحيوية بداشينغ',
        en: 'Daxing National Bio-Medicine Industry Park',
        zh: '北京大兴生物医药产业基地'
      },
      clusterSpecialization: {
        ar: 'تطوير وتصنيع المستلزمات الطبية المتقدمة، أجهزة الفحص والتشخيص، واللقاحات والمستحضرات الدوائية المعتمدة للتصدير',
        en: 'Premier biomedical engineering base producing diagnostic devices, medical monitoring instruments, and pharmaceutical formulations.'
      },
      factoryTypes: [
        'Medical Device Cleanroom Assembly',
        'Automated Pharmaceutical Packaging Lines',
        'Bio-Reagent Laboratories'
      ],
      keyProducts: [
        'أجهزة مراقبة طبية ومعدات غرف العمليات',
        'مستلزمات تشخيص الفيروسات والدم',
        'معدات حماية ومعالجة صحية'
      ],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'bj-ev-automotive-sourcing',
      productName: {
        ar: 'السيارات الكهربائية والمركبات الذكية ومكوناتها (Electric Vehicles & Auto Components)',
        en: 'Electric Vehicles (EVs), Smart Cockpits & Automotive Parts'
      },
      industryCategory: 'automotive-ev',
      whyThisCity: {
        ar: 'بكين هي المقر الرئيسي لمجموعات BAIC وXiaomi EV ومعهد بحور السيارات الوطني، وتوفر أحدث تكنولوجيا المركبات الكهربائية الصينية وأنظمة القيادة الذاتية بأسعار تصدير تنافسية.',
        en: 'Beijing hosts automotive heavyweights BAIC and Xiaomi Auto, offering cutting-edge EV technology, smart cockpit integration, and extensive fleet vehicle export capabilities.'
      },
      mainManufacturingArea: {
        ar: 'منطقة ييتشوانغ (BDA) ومحافظة شونيي',
        en: 'Yizhuang BDA & Shunyi Automotive Industrial Base'
      },
      wholesaleAvailability: 'Medium',
      exportSuitability: 'High'
    },
    {
      id: 'bj-ai-servers-computing-hardware',
      productName: {
        ar: 'خوادم الحوسبة وأجهزة الذكاء الاصطناعي والإلكترونيات (Computing Hardware & AI Servers)',
        en: 'AI Computing Servers, Networking Equipment & IT Hardware'
      },
      industryCategory: 'high-tech-electronics',
      whyThisCity: {
        ar: 'تضم بكين مقرات لينوفو ومراكز أبحاث كبرى السيرفرات العالمية، مما يجعلها المركز الأول لتوريد خوادم مراكز البيانات ومعدات الشبكات للمؤسسات.',
        en: 'Beijing is the global engineering center for Lenovo and leading enterprise server OEMs, providing high-reliability cloud data center equipment and networking gear.'
      },
      mainManufacturingArea: {
        ar: 'حي هايديان (تشونغ قوان تسون)',
        en: 'Haidian District (Zhongguancun Science Park)'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'bj-biomedical-diagnostic-equipment',
      productName: {
        ar: 'المعدات الطبية وأجهزة التشخيص المخبرية (Biomedical & Diagnostic Instruments)',
        en: 'Medical Diagnostic Devices, Patient Monitors & Lab Equipment'
      },
      industryCategory: 'biomedical-pharmaceuticals',
      whyThisCity: {
        ar: 'قاعدة داشينغ للطب الحيوي ببكين تضم أكثر من 600 شركة متخصصة حاصلة على شهادات CE وFDA للمستشفيات والعيادات الدولية.',
        en: 'Daxing Bio-Medicine Base houses over 600 certified medical manufacturers producing CE/FDA-compliant hospital diagnostics and surgical monitoring systems.'
      },
      mainManufacturingArea: {
        ar: 'حي داشينغ',
        en: 'Daxing Bio-Medicine Industry Park'
      },
      wholesaleAvailability: 'Medium',
      exportSuitability: 'High'
    }
  ],
  tradeFairs: [
    {
      id: 'ciftis-beijing-services-fair',
      name: {
        ar: 'معرض الصين الدولي لتجارة الخدمات (CIFTIS Beijing)',
        en: 'China International Fair for Trade in Services (CIFTIS)',
        zh: '中国国际服务贸易交易会'
      },
      industry: 'Global Services, Technology, Logistics, Cross-Border E-Commerce & Finance',
      venue: {
        ar: 'مركز الصين للمؤتمرات الوطنية وحديقة شوغانغ، بكين',
        en: 'China National Convention Center (CNCC) & Shougang Park, Beijing',
        zh: '国家会议中心 / 首钢园区'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر سبتمبر',
        en: 'Annually in September'
      },
      officialWebsite: 'https://www.ciftis.org',
      bestFor: ['Corporate Importers', 'Fintech & Logistics Sourcing', 'Cross-Border Investors']
    },
    {
      id: 'auto-china-beijing',
      name: {
        ar: 'معرض بكين الدولي للسيارات (Auto China)',
        en: 'Beijing International Automotive Exhibition (Auto China)',
        zh: '北京国际汽车展览会'
      },
      industry: 'Automobiles, Electric Vehicles, Concept Cars & Autonomous Systems',
      venue: {
        ar: 'مركز الصين الدولي للمعارض (قاعة شونيي الجديدة)',
        en: 'China International Exhibition Center (Shunyi New Venue), Beijing',
        zh: '中国国际展览中心 (顺义馆)'
      },
      occurrence: {
        ar: 'يقام كل سنتين في شهري أبريل / مايو',
        en: 'Biennially in April / May'
      },
      officialWebsite: 'http://www.autochinashow.org',
      bestFor: ['Automotive Dealers', 'EV Fleet Sourcing Buyers', 'Car Parts Distributors']
    },
    {
      id: 'china-glass-beijing',
      name: {
        ar: 'معرض الصين الدولي لتكنولوجيا وصناعة الزجاج (China Glass Beijing)',
        en: 'China International Glass Industrial Technical Exhibition (China Glass)',
        zh: '中国国际玻璃工业技术展览会'
      },
      industry: 'Architectural Glass, Solar Photovoltaic Glass & Machinery',
      venue: {
        ar: 'مركز الصين الدولي للمعارض، بكين',
        en: 'China International Exhibition Center (CIEC), Beijing',
        zh: '中国国际展览中心'
      },
      occurrence: {
        ar: 'يقام سنوياً بالتناوب بين بكين وشنغهاي (مايو)',
        en: 'Annually rotating between Beijing & Shanghai (May)'
      },
      bestFor: ['Glass Importers', 'Façade Contractors', 'Solar Module Fabricators']
    }
  ],
  logistics: {
    nearestAirports: [
      'Beijing Capital International Airport (PEK) - 25 km from downtown (Metro Express)',
      'Beijing Daxing International Airport (PKX) - Mega airport with direct HSR connection (20 mins to West Station)'
    ],
    seaPorts: [
      'Tianjin Port (ميناء تيانجين الدولي - ميناء بكين البحري التصديري على بعد 120 كم فقط بالقطار والشاحنات المباشرة)'
    ],
    highSpeedRailwayStations: [
      'Beijing South Railway Station (北京南站 - محطة قطارات فائقة السرعة لشنغهاي ونينغبو وغوانزو)',
      'Beijing West Railway Station (北京西站 - قطارات فائقة السرعة للوسط والغرب هونغ كونغ وشينزن)',
      'Beijing Fengtai Railway Station (北京丰台站 - أضخم محطة محورية في آسيا)',
      'Beijing Chaoyang Railway Station (北京朝阳站 - خطوط شمال شرق الصين)'
    ],
    seaFreightSuitability: {
      ar: 'ممتازة؛ تقع بكين بالقرب من ميناء تيانجين (رابع أكبر ميناء في العالم)، حيث ترتبط معه بطرق سريعة مخصصة وقطارات بضائع مباشرة تنقل الحاويات في أقل من ساعتين إلى أرصفة السفن.',
      en: 'Superb via the adjacent world #8 container hub, Tianjin Port (120 km), connected by dedicated freight expressways and intermodal dry ports.'
    },
    airFreightSuitability: {
      ar: 'الأقوى في شمال الصين بفضل مطاري العاصمة (PEK) وداشينغ (PKX) الدوليين اللذين يوفران مئات الرحلات الجوية المباشرة يومياً لشحن الإلكترونيات والعينات لجميع الدول العربية.',
      en: 'World-class air cargo capacity powered by Capital (PEK) and Daxing (PKX) airports offering direct freight flights across the Middle East, Europe, and Americas.'
    },
    primaryCargoRoutes: {
      ar: [
        'خط النقل البري السريع من مصانع بكين إلى أرصفة الحاويات بميناء تيانجين البحري',
        'الشحن الجوي فائق السرعة للعينات والأجهزة الطبية عبر مطاري بكين الدوليين',
        'شبكة قطارات الشحن الصينية-الأوروبية المنطلقة عبر الممرات الشمالية'
      ],
      en: [
        'Dedicated trucking corridor to Tianjin Port container terminals',
        'Direct air freight routes connecting PEK/PKX to Dubai, Riyadh, Cairo, and Doha',
        'China-Europe Railway Express links via northern rail logistics hubs'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['أبريل', 'مايو', 'سبتمبر', 'أكتوبر'],
    suggestedStayDays: 4,
    weatherSummary: {
      ar: 'الربيع والخريف هما أفضل فصول السنة في بكين، حيث تكون الأجواء صافية ومعتدلة، بينما يكون الصيف دافئاً وممطراً، والشتاء بارداً وجافاً.',
      en: 'Autumn (September-October) and Spring (April-May) provide the most comfortable weather with blue skies and pleasant temperatures.'
    },
    recommendedStayAreas: [
      {
        ar: 'حي تشاويانغ (منطقة CBD وطريق سانتليتون) لقربه من المعارض والفنادق العالمية وأرقى مراكز الأعمال والمطاعم.',
        en: 'Chaoyang District (CBD & Sanlitun) for proximity to international convention centers, luxury hospitality, and corporate headquarters.'
      },
      {
        ar: 'منطقة حي شيتشنغ وشارع نيوجيه لمن يرغب في الإقامة بالقرب من المسجد الكبير وخيارات المطاعم الحلال التاريخية.',
        en: 'Xicheng District near Niujie Mosque for direct access to historic Muslim heritage and certified halal dining.'
      },
      {
        ar: 'منطقة شونيي بالقرب من قاعات معارض السيارات ومطار العاصمة.',
        en: 'Shunyi District adjacent to CIEC exhibition complex and Capital Airport.'
      }
    ],
    localTransportAdvice: {
      ar: 'شبكة مترو أنفاق بكين هي الأطول والأكثر كفاءة عالمياً؛ يمكن استخدام تطبيق Alipay أو WeChat للدخول مباشرة لجميع الخطوط، وتطبيق Didi لطلب سيارات الأجرة بأسعار مقبولة.',
      en: 'Beijing extensive subway system is the world largest and exceptionally punctual; Alipay and Didi apps enable seamless bilingual transit.'
    },
    languageTips: {
      ar: 'اللغة المندرينية القياسية هي لغة المدينة؛ في الفنادق الكبرى والمعارض تتوفر الإنجليزية بشكل جيد، ويُنصح بمترجم للأعمال التقنية والمفاوضات المعقدة.',
      en: 'Standard Mandarin is spoken natively; international 5-star hotels and major expos feature fluent English; a professional interpreter is advised for contract negotiations.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi', 'Baidu Maps', 'MetroMan Beijing'],
    recommendedHotels: [
      {
        id: 'kempinski-hotel-beijing-yansha',
        name: {
          ar: 'فندق كمبينسكي بكين يانشا سنتر (Kempinski Hotel Beijing)',
          en: 'Kempinski Hotel Beijing Yansha Center',
          zh: '北京燕莎中心凯宾斯基饭店'
        },
        category: { ar: 'فاخر 5 نجوم دولي', en: 'Luxury 5-Star International' },
        area: {
          ar: 'طريق ليانغهواتشياو، حي تشاويانغ، بكين',
          en: 'Liangmaqiao Road, Chaoyang District, Beijing'
        },
        address: {
          ar: '50 طريق ليانغهواتشياو، حي تشاويانغ، بكين',
          en: '50 Liangmaqiao Road, Chaoyang District, Beijing',
          zh: '北京市朝阳区亮马桥路50号'
        },
        highlights: {
          ar: 'فندق رجال الأعمال الدولي الأشهر بمنطقة السفارات، موقع استراتيجي وخدمات تنفيذية باللغة الإنجليزية',
          en: 'Iconic business hotel in the diplomatic corridor offering grand banquet halls, executive suites, and English-speaking concierge.'
        }
      },
      {
        id: 'grand-metropark-hotel-beijing',
        name: {
          ar: 'فندق جراند متروبارك بكين (Grand Metropark Hotel Beijing)',
          en: 'Grand Metropark Hotel Beijing',
          zh: '北京维景国际大酒店'
        },
        category: { ar: 'أعمال فاخر 5 نجوم', en: 'Luxury Business 5-Star' },
        area: {
          ar: 'طريق سان هوان الشمالي، حي تشاويانغ، بكين',
          en: 'North 3rd Ring Road, Chaoyang District, Beijing'
        },
        address: {
          ar: '2 طريق سان هوان الشمالي، حي تشاويانغ، بكين',
          en: '2 North 3rd Ring Road East, Chaoyang District, Beijing',
          zh: '北京市朝阳区北三环东路2号'
        },
        highlights: {
          ar: 'موقع ممتاز بالقرب من مركز المعارض الدولي للمعارض، ومناسب جداً لمستوردي السلع والتكنولوجيا',
          en: 'Conveniently located near major exhibition facilities with full corporate event amenities and business services.'
        }
      },
      {
        id: 'ritz-carlton-beijing-financial-street',
        name: {
          ar: 'فندق ريتز كارلتون الحي المالي بكين',
          en: 'The Ritz-Carlton Beijing, Financial Street',
          zh: '北京金融街丽思卡尔顿酒店'
        },
        category: { ar: 'ألترا فاخر 5 نجوم', en: 'Ultra-Luxury 5-Star' },
        area: {
          ar: 'الحي المالي، حي شيتشنغ، بكين',
          en: 'Financial Street, Xicheng District, Beijing'
        },
        address: {
          ar: '1 شارع جين تشنغ، حي شيتشنغ، بكين',
          en: '1 Jinchengfang East Street, Xicheng District, Beijing',
          zh: '北京市西城区金城坊东街1号'
        },
        highlights: {
          ar: 'أرقى فنادق الأعمال في قلب الحي المالي، قريب جداً من حي نيوجيه ومطاعمها الحلال ومسجد نيوجيه',
          en: 'Premier luxury retreat in the Financial District, providing quick access to Niujie historic Mosque and upscale amenities.'
        }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'beijing-niujie-jubaoyuan-halal',
        name: {
          ar: 'مطعم جوباويوان التاريخي للحوم الحلال بشارع نيوجيه',
          en: 'Jubaoyuan Historic Halal Hotpot (Niujie Beijing)',
          zh: '聚宝源清真牛羊肉庄 (牛街总店)'
        },
        cuisineType: {
          ar: 'لحوم الضأن الحلال الطازجة المطهوة على الطريقة الإمبراطورية التاريخية',
          en: 'Authentic Beijing Traditional Halal Mutton Hotpot'
        },
        isHalal: true,
        address: {
          ar: '5 شارع نيوجيه التجاري، حي شيتشنغ، بكين',
          en: '5 Niujie Commercial Street, Xicheng District, Beijing',
          zh: '北京市西城区牛街5号'
        },
        recommendedFor: {
          ar: 'المطعم الإسلامي الأكثر شهرة في بكين منذ قرن، لحوم حلال موثقة وطوابير من السكان والزوار لتذوق أطيب لحم ضأن بالصين',
          en: 'Beijing most legendary halal restaurant for over a century, certified halal and world-famous for premium hand-sliced lamb.'
        }
      },
      {
        id: 'hongbinlou-halal-restaurant-beijing',
        name: {
          ar: 'مطعم هونغبين لو التاريخي الحلال (تأسس عام 1853)',
          en: 'Hongbinlou Historic Halal Restaurant (Est. 1853)',
          zh: '鸿宾楼清真饭庄'
        },
        cuisineType: {
          ar: 'أطباق المطبخ الإسلامي الإمبراطوري الفاخر، البط الحلال، والمأكولات الملكية',
          en: 'Imperial Muslim Cuisine & Halal Peking Roast Duck'
        },
        isHalal: true,
        address: {
          ar: '11 طريق تشانوان الشمالي، حي شيتشنغ، بكين',
          en: '11 Zhanlanguan Road, Xicheng District, Beijing',
          zh: '北京市西城区展览馆路11号'
        },
        recommendedFor: {
          ar: 'تجربة بط بكين المشوي الحلال وأفخم الولائم الإسلامية التاريخية لاستضافة كبار الشركاء والعملاء',
          en: 'The prime venue to taste certified Halal Peking Roast Duck and royal Chinese Muslim banquets for executive delegations.'
        }
      },
      {
        id: 'donglaishun-wangfujing-halal',
        name: {
          ar: 'مطعم دونغ لاي شون التراثي الحلال (شارع وانغفوجينغ)',
          en: 'Donglaishun Halal Restaurant (Wangfujing Branch)',
          zh: '东来顺饭庄 (王府井店)'
        },
        cuisineType: {
          ar: 'لحم الضأن المشوي والمسلوق الحلال على القدور النحاسية التقليدية',
          en: 'Traditional Copper Hotpot Halal Sliced Lamb'
        },
        isHalal: true,
        address: {
          ar: '198 شارع وانغفوجينغ، حي دونغتشنغ، بكين',
          en: '198 Wangfujing Street, Dongcheng District, Beijing',
          zh: '北京市东城区王府井大街198号'
        },
        recommendedFor: {
          ar: 'تناول عشاء حلال راقي في قلب أشهر شوارع التسوق في بكين',
          en: 'Enjoying certified halal dining in the heart of Beijing premier shopping avenue.'
        }
      }
    ]
  },
  relatedCitySlugs: ['tianjin', 'cangzhou', 'qingdao', 'shanghai', 'shenzhen'],
  relatedProductSlugs: [
    'high-tech-electronics',
    'automotive-ev',
    'biomedical-pharmaceuticals',
    'machinery'
  ],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل بكين التجاري والصناعي | استيراد الإلكترونيات، السيارات الكهربائية، والمعارض',
      en: 'Beijing Sourcing Guide | High-Tech Electronics, EVs, Trade Fairs & Halal Dining'
    },
    description: {
      ar: 'دليل الاستيراد ورجال الأعمال في بكين: مصانع السيارات الكهربائية والتكنولوجيا في ييتشوانغ وهايديان، أسواق شينفادي وبانجيا يوان، معارض CIFTIS والسيارات، والفنادق والمطاعم الحلال في نيوجيه.',
      en: 'Complete Beijing sourcing guide: High-tech electronics and EVs in Haidian and Yizhuang, Xinfadi and Panjiayuan wholesale markets, Auto China expo, logistics, and Niujie halal dining.'
    }
  }
};
