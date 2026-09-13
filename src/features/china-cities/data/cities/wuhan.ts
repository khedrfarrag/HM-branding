import { ICity } from '../../types';

export const wuhanCity: ICity = {
  id: 'wuhan',
  slug: 'wuhan',
  name: {
    ar: 'ووهان (عاصمة الألياف الضوئية والليزر والسيارات وأضخم أسواق وسط الصين)',
    en: 'Wuhan',
    zh: '武汉'
  },
  province: { ar: 'خوبي', en: 'Hubei' },
  region: 'Central China / Yangtze Economic Belt',
  tier: 'tier-2',
  commercialImportanceScore: 94,
  heroImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
  description: {
    ar: 'القلب الاقتصادي والصناعي النابض لوسط الصين وعاصمة مقاطعة خوبي. تشتهر عالمياً بـ "وادي البصريات في الصين" (China Optics Valley) الرائد عالمياً في تصنيع كابلات الألياف الضوئية وماكينات الليزر الصناعي، وتضم مقرات مجموعة دونغفنغ للسيارات، وميناء يانغلو النهري الأكبر على نهر يانغتسي، وتستضيف مدينة هانكو الشمالية للسلع (汉口北) التي تعد ثاني أكبر مجمع لأسواق الجملة بعد إيوو في الصين.',
    en: 'The economic and industrial powerhouse of Central China along the Yangtze River. Globally celebrated for the China Optics Valley (world leader in fiber optics, telecommunication cables, and industrial laser cutting machinery), the Dongfeng automotive conglomerate, Yangluo deepwater river port, and the Hankou North International Trade City—China second-largest wholesale commodity trading complex.'
  },
  keyIndustries: [
    'optoelectronics-lasers',
    'automotive-vehicles',
    'commodity-wholesale-markets',
    'biomedical-healthcare',
    'inland-river-shipping',
    'heavy-machinery'
  ],
  primaryProducts: {
    ar: [
      'ماكينات القطع واللحام بالليزر الليفي (Fiber Laser Machines)',
      'كابلات الألياف الضوئية ومعدات الاتصالات السلكية واللاسلكية',
      'السلع الاستهلاكية والأحذية والملابس بمدينة هانكو الشمالية',
      'سيارات الركاب والشاحنات وقطع غيار المركبات (Dongfeng)',
      'المستلزمات الطبية الحيوية ومعدات التشخيص الدقيقة',
      'خدمات النقل النهري-البحري المباشر للحاويات عبر يانغلو'
    ],
    en: [
      'Industrial Fiber Laser Cutters & Precision Welding Machines',
      'Optical Fiber Cables & Telecommunication Hardware (YOFC)',
      'Apparel, Footwear, Bags & Commodities at Hankou North',
      'Passenger Cars, Commercial Trucks & Auto Spare Parts (Dongfeng)',
      'Biomedical Testing Kits, Medical Devices & Diagnostics',
      'Direct River-to-Sea Container Shipping Services (Yangluo Port)'
    ]
  },
  bestFor: [
    'Laser Machinery & Cutting Equipment Importers',
    'Fiber Optics & Telecommunication Contractors',
    'Wholesale Apparel & General Merchandise Buyers',
    'Automotive Components & Fleet Distributors',
    'Central China Regional Sourcing Agents'
  ],
  districts: [
    {
      id: 'donghu-optics-valley-hub',
      cityId: 'wuhan',
      name: {
        ar: 'منطقة دونغهو للتكنولوجيا الفائقة (وادي البصريات في الصين - Optics Valley)',
        en: 'East Lake High-Tech Zone (China Optics Valley)',
        zh: '东湖高新区 (中国光谷)'
      },
      activityType: {
        ar: 'أكبر مجمع لتصنيع الألياف الضوئية ومصادر الليزر وماكينات الحفر والقطع بالليزر في العالم، يضم مقرات عمالقة الصناعة (YOFC, Raycus, HGTECH)',
        en: 'World largest cluster for optical communication fiber, fiber laser sources, and industrial CNC laser cutting systems.'
      },
      mainProducts: [
        'ماكينات قطع المعادن بالليزر',
        'كابلات ألياف ضوئية',
        'مكونات بصرية وأجهزة استشعار'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'huangpi-hankou-north-trade-hub',
      cityId: 'wuhan',
      name: {
        ar: 'منطقة هوانغبي (مدينة هانكو الشمالية للتجارة الدولية - Hankou North)',
        en: 'Huangpi District (Hankou North International Trade City)',
        zh: '黄陂区 (汉口北)'
      },
      activityType: {
        ar: 'أضخم مدينة أسواق جملة في وسط الصين تغطي 6 ملايين متر مربع وتضم أكثر من 30 سوقاً تخصصياً للملابس والأحذية والجلود والأدوات والسلع',
        en: 'Central China premier wholesale distribution complex covering 6 million sqm with 30 specialized markets for fashion, footwear, and consumer goods.'
      },
      mainProducts: [
        'ملابس رجالية ونسائية وأطفال',
        'أحذية وحقائب جلدية',
        'أدوات منزلية وسلع استهلاكية'
      ],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'wuhan-economic-tech-development-auto',
      cityId: 'wuhan',
      name: {
        ar: 'منطقة التنمية الاقتصادية والتكنولوجية بووهان (عاصمة السيارات - Auto Valley)',
        en: 'Wuhan Economic-Technological Development Zone (Auto Valley)',
        zh: '武汉经开区 (中国车谷)'
      },
      activityType: {
        ar: 'مجمع تصنيع السيارات الأكبر بوسط الصين ومقر مجموعة دونغفنغ، يضم مصانع محركات السيارات الكهربائية ومكونات الهياكل',
        en: 'Automotive industrial heart of Central China hosting Dongfeng Motor Corp, EV powertrain plants, and Tier-1 auto parts suppliers.'
      },
      mainProducts: [
        'سيارات ركاب وشاحنات خفيفة',
        'قطع محركات وأنظمة نقل حركة',
        'بطاريات ومحركات سيارات كهربائية'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'jiang-an-historic-muslim-quarter',
      cityId: 'wuhan',
      name: {
        ar: 'حي جيانغ آن والمركز الإسلامي التاريخي (مسجد ووهان التراثي)',
        en: "Jiang'an District & Historic Islamic Quarter",
        zh: '江岸区 (汉口清真寺)'
      },
      activityType: {
        ar: 'المنطقة التاريخية التجارية على ضفاف نهر يانغتسي، تضم مسجد هانكو العريق (المبني في القرن السابع عشر) والمطاعم الإسلامية العريقة',
        en: 'Historic riverside commercial district home to the landmark Hankou Mosque (built in the 1640s) and authentic halal food streets.'
      },
      mainProducts: [
        'أطعمة ولحوم حلال طازجة',
        'مراكز صفقات التجارة والمكاتب',
        'شوارع المشي التجارية التراثية'
      ],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    }
  ],
  wholesaleMarkets: [
    {
      id: 'hankou-north-international-trade-city',
      cityId: 'wuhan',
      name: {
        ar: 'مدينة هانكو الشمالية للتجارة الدولية (Hankou North Market City)',
        en: 'Hankou North International Trade City Complex',
        zh: '汉口北国际商品交易中心'
      },
      type: 'Wholesale',
      category: 'Apparel, Shoes & Commodities',
      description: {
        ar: 'أضخم مدينة أسواق جملة في وسط الصين؛ تضم 30 سوقاً كبيراً متخصصاً في ملابس الموضة، الأحذية، المصنوعات الجلدية، الأدوات المنزلية، والسلع الصغيرة للتصدير المباشر.',
        en: 'Massive multi-category wholesale complex spanning 30 specialized trade markets for garments, footwear, luggage, home appliances, and small commodities.'
      },
      address: {
        ar: 'طريق هانكو الشمالي، حي هوانغبي، ووهان',
        en: 'Hankou North Avenue, Huangpi District, Wuhan',
        zh: '武汉市黄陂区汉口北大道88号'
      },
      moqLevel: 'Low'
    },
    {
      id: 'wuhan-optics-valley-laser-equipment-center',
      cityId: 'wuhan',
      name: {
        ar: 'مركز وادي البصريات لتجارة معدات وتكنولوجيا الليزر الصناعي',
        en: 'Optics Valley Industrial Laser & Photonics Trade Center',
        zh: '武汉光谷激光工业装备展销中心'
      },
      type: 'Factory Showroom',
      category: 'Industrial Machinery',
      description: {
        ar: 'المعرض الدائم لمصانع ماكينات الليزر؛ يعرض ماكينات قطع المعادن بألياف الليزر بقدرات تصل إلى 60,000 واط، ماكينات اللحام اليدوي، وماكينات الوسم الليزري.',
        en: 'Premier showroom cluster for high-power CNC fiber laser cutting systems (up to 60kW), handheld laser welders, and precision laser markers.'
      },
      address: {
        ar: 'طريق غوانغقو، حي دونغهو، ووهان',
        en: 'Guanggu Avenue, East Lake High-Tech Zone, Wuhan',
        zh: '武汉市东湖高新区光谷大道特1号'
      },
      moqLevel: 'Low'
    },
    {
      id: 'hankou-hanzhengbian-small-commodities-market',
      cityId: 'wuhan',
      name: {
        ar: 'سوق شارع هانتشنغ التاريخي للجملة (Hanzheng Street Market)',
        en: 'Historic Hanzheng Street Wholesale Commercial Belt',
        zh: '汉口汉正街商品批发市场'
      },
      type: 'Wholesale',
      category: 'Textiles & Apparel',
      description: {
        ar: 'أقدم وأشهر شارع تجاري بالصين للملابس الجاهزة والأقمشة وإكسسوارات الموضة منذ عهد أسرة مينغ، ومركز حيوي لتجار التجزئة والجملة.',
        en: 'Centuries-old commercial market street famous across China for fast fashion apparel, fashion accessories, fabrics, and dry goods.'
      },
      address: {
        ar: 'شارع هانتشنغ، حي تشياوكو، ووهان',
        en: 'Hanzheng Street, Qiaokou District, Wuhan',
        zh: '武汉市硚口区汉正街'
      },
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'optics-valley-optoelectronic-industrial-base',
      cityId: 'wuhan',
      name: {
        ar: 'القاعدة الصناعية للأجهزة الكهروضوئية والليزر بـ وادي البصريات',
        en: 'Optics Valley Laser & Optoelectronic Industrial Base',
        zh: '武汉光谷光电子信息产业园'
      },
      clusterSpecialization: {
        ar: 'تنتج أكثر من 60% من مصادر ألياف الليزر بالصين (Raycus) و25% من كابلات الألياف الضوئية العالمية (YOFC) ومعدات الحفر والقطع الصناعي',
        en: 'Produces over 60% of China industrial fiber laser sources and accounts for 25% of global optical communication fiber production.'
      },
      factoryTypes: [
        'CNC Laser Cutting Machine Assembly Fabs',
        'Fiber Laser Source Integration Cleanrooms',
        'Optical Fiber Preform Drawing Towers'
      ],
      keyProducts: [
        'ماكينات قطع صفائح وأنابيب المعادن بالليزر',
        'مولدات ومصادر الليزر الليفي (Fiber Lasers)',
        'كابلات ألياف ضوئية للاتصالات'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'wuhan-dongfeng-automotive-complex',
      cityId: 'wuhan',
      name: {
        ar: 'مجمع تصنيع مركبات وسيارات مجموعة دونغفنغ',
        en: 'Dongfeng Motor Corp Smart Vehicle Manufacturing Complex',
        zh: '东风汽车武汉高端智能制造基地'
      },
      clusterSpecialization: {
        ar: 'تجميع سيارات الركاب والمركبات الكهربائية الذكية (Voyah)، الشاحنات، وتصنيع أنظمة القيادة الكهربائية والبطاريات',
        en: 'Assembly of smart electric vehicles, commercial fleet trucks, powertrain components, and high-efficiency automotive batteries.'
      },
      factoryTypes: [
        'Robotic Automobile Stamping & Welding Plants',
        'EV Powertrain & Motor Production Units',
        'Vehicle Export Testing Tracks'
      ],
      keyProducts: [
        'سيارات كهربائية وهجينة ذكية',
        'شاحنات ومركبات تجارية',
        'قطع غيار محركات وأنظمة تعليق'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'yangluo-port-container-logistics-park',
      cityId: 'wuhan',
      name: {
        ar: 'المنطقة اللوجستية لميناء يانغلو النهري الدولي',
        en: 'Yangluo Deepwater Container Port Logistics Park',
        zh: '武汉阳逻国际港综合保税物流园'
      },
      clusterSpecialization: {
        ar: 'أكبر ميناء نهري للحاويات على نهر يانغتسي، يتيح الشحن المائي المباشر للحاويات من ووهان إلى موانئ شانغهاي والعالم',
        en: 'Largest inland river container port on the Yangtze, running direct river-to-sea container barges to Shanghai and overseas routes.'
      },
      factoryTypes: [
        'Container Freight Stations',
        'Bonded Warehousing Depots',
        'Intermodal Rail-Water Transfer Yards'
      ],
      keyProducts: [
        'خدمات شحن الحاويات النهرية-البحرية',
        'تخزين وتوزيع بضائع التجارة الحرة',
        'شحن الآلات الثقيلة والسيارات'
      ],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'wh-fiber-laser-cutting-machines',
      productName: {
        ar: 'ماكينات القطع واللحام بالليزر الليفي (Fiber Laser Cutting Machines)',
        en: 'CNC Sheet & Tube Fiber Laser Cutting & Welding Machines'
      },
      industryCategory: 'optoelectronics-lasers',
      whyThisCity: {
        ar: 'ووهان هي العاصمة العالمية الأولى لتكنولوجيا الليزر الصناعي؛ مصادر الليزر (Raycus) ورؤوس القطع وماكينات CNC تبنى هنا بالكامل، مما يمنح المستوردين جودة فائقة وأسعار مصنع مباشرة بنصف تكلفة البدائل الغربية.',
        en: 'Wuhan is the world undisputed capital for industrial laser machinery; complete supply chains from laser sources (Raycus) to CNC cutting tables are localized here, providing maximum reliability and competitive factory pricing.'
      },
      mainManufacturingArea: {
        ar: 'وادي البصريات (Optics Valley)، ووهان',
        en: 'East Lake High-Tech Zone (Optics Valley)'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'wh-hankou-north-apparel-footwear',
      productName: {
        ar: 'الملابس الجاهزة والأحذية والحقائب والسلع المتنوعة (Hankou North Commodities)',
        en: 'Wholesale Apparel, Shoes, Luggage & General Commodities'
      },
      industryCategory: 'commodity-wholesale-markets',
      whyThisCity: {
        ar: 'مدينة هانكو الشمالية توفر أكثر من 30 سوقاً متكاملاً تجمع إنتاج مصانع وسط الصين بأسعار منافسة جداً لكميات الجملة الصغيرة والمتوسطة.',
        en: 'Hankou North houses over 30 specialized trade markets aggregating Central China manufacturing at unbeatable wholesale rates for container consolidations.'
      },
      mainManufacturingArea: {
        ar: 'حي هوانغبي (هانكو الشمالية)، ووهان',
        en: 'Hankou North International Trade City'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'wh-optical-fiber-telecom-cables',
      productName: {
        ar: 'كابلات الألياف الضوئية ومستلزمات الاتصالات (Optical Fiber & Telecom Gear)',
        en: 'Fiber Optic Cables, Patch Cords & Telecommunication Infrastructure'
      },
      industryCategory: 'optoelectronics-lasers',
      whyThisCity: {
        ar: 'تنتج ووهان ربع إمدادات العالم من كابلات الألياف الضوئية، وهي المركز المعتمد لتوريد مشاريع البنية التحتية للاتصالات وشبكات الإنترنت للمنطقة العربية.',
        en: 'Wuhan manufactures a quarter of the world fiber optic cables, serving as the trusted supplier for telecom infrastructure projects across the Middle East.'
      },
      mainManufacturingArea: {
        ar: 'وادي البصريات، ووهان',
        en: 'China Optics Valley Industrial Base'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  tradeFairs: [
    {
      id: 'wuhan-optics-valley-expo-oedic',
      name: {
        ar: 'معرض وادي البصريات الدولي للكهروضوئيات والليزر (Optics Valley Expo)',
        en: 'Optics Valley of China International Optoelectronic Exposition (OVC EXPO)',
        zh: '中国光谷国际光电子博览会'
      },
      industry: 'Laser Machinery, Fiber Optics, Photonics, Infrared & Advanced Sensors',
      venue: {
        ar: 'مركز المعارض الدولي للعلوم والتكنولوجيا بوادي البصريات، ووهان',
        en: 'China Optics Valley Convention & Exhibition Center, Wuhan',
        zh: '中国光谷科技会展中心'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر مايو',
        en: 'Annually in May'
      },
      officialWebsite: 'http://www.ovcexpo.com.cn',
      bestFor: ['Laser Equipment Distributors', 'Telecom Network Contractors', 'Precision Machinery Buyers']
    },
    {
      id: 'wuhan-international-motor-show',
      name: {
        ar: 'معرض ووهان الدولي للسيارات وتكنولوجيا المركبات الذكية',
        en: 'Wuhan International Motor Show',
        zh: '武汉国际汽车展览会'
      },
      industry: 'Automobiles, Electric Vehicles, Commercial Fleets & Automotive Components',
      venue: {
        ar: 'مركز ووهان الدولي للمعارض، حي هانيانغ',
        en: 'Wuhan International Expo Center, Hanyang District, Wuhan',
        zh: '武汉国际博览中心'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر أكتوبر',
        en: 'Annually in October'
      },
      bestFor: ['Automotive Dealers', 'EV Fleet Importers', 'Car Accessories Wholesalers']
    }
  ],
  logistics: {
    nearestAirports: [
      'Wuhan Tianhe International Airport (WUH) - 25 km from downtown (Direct Metro Line 2)',
      'Ezhou Huahu International Cargo Airport (EHU) - Asia first dedicated mega air cargo hub, 1 hour by highway'
    ],
    seaPorts: [
      'Wuhan Yangluo Deepwater River Port (ميناء يانغلو الدولي - أكبر ميناء حاويات نهري على نهر يانغتسي بسفن شحن مباشرة لشنغهاي والمحيط)'
    ],
    highSpeedRailwayStations: [
      'Wuhan Railway Station (武汉站 - محطة فائقة السرعة رئيسية تربط بكين وغوانزو وشنغهاي في 4 ساعات)',
      'Hankou Railway Station (汉口站 - مركز القطارات فائقة السرعة المتجهة غرباً وشرقاً)',
      'Wuchang Railway Station (武昌站)'
    ],
    seaFreightSuitability: {
      ar: 'ممتازة وفعالة من حيث التكلفة؛ يوفر ميناء يانغلو سفن حاويات نهارية-بحرية منتظمة تبحر مباشرة عبر نهر يانغتسي إلى موانئ شنغهاي لربطها بالسفن العابرة للمحيطات.',
      en: 'Outstanding river-to-sea intermodal logistics; Yangluo Port operates regular direct container barges along the Yangtze River connecting ocean carriers in Shanghai.'
    },
    airFreightSuitability: {
      ar: 'الأحدث والأقوى إقليمياً بفضل افتتاح مطار إيتشو هواهو للشحن الجوي (أول مطار محوري مخصص للشحن السريع في آسيا لشركة SF Express).',
      en: 'State-of-the-art air cargo ecosystem anchored by Asia premier dedicated cargo megahub, Ezhou Huahu Airport (EHU), offering rapid regional freight consolidation.'
    },
    primaryCargoRoutes: {
      ar: [
        'خط النقل النهري-البحري للحاويات من ميناء يانغلو بووهان إلى ميناء شنغهاي ومنه إلى موانئ الشرق الأوسط',
        'قطار الشحن المباشر الصيني-الأوروبي (ووهان - أوروبا / آسيا الوسطى)',
        'الشحن الجوي فائق السرعة عبر مطار تيانهي ومطار إيتشو هواهو اللوجستي'
      ],
      en: [
        'Yangtze River container barge shuttle connecting Yangluo Port to Shanghai ocean berths',
        'Wuhan China-Europe Freight Railway Express corridor to Central Asia and Europe',
        'Air cargo freighter network via Wuhan Tianhe (WUH) and Ezhou Huahu Cargo Hub (EHU)'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['مارس', 'أبريل', 'أكتوبر', 'نوفمبر'],
    suggestedStayDays: 3,
    weatherSummary: {
      ar: 'فصلا الربيع والخريف معتدلان ولطيفان جداً؛ الصيف حار ورطب (إحدى مدن الأفران التقليدية)، والشتاء بارد.',
      en: 'Spring (March-April) and Autumn (October-November) offer mild pleasant weather ideal for machinery factory tours.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة وادي البصريات (Optics Valley) لزيارة مصانع الليزر والتكنولوجيا والألياف الضوئية.',
        en: 'Optics Valley (Guanggu) for convenient access to laser machinery plants and technology parks.'
      },
      {
        ar: 'حي جيانغ آن وهانكو بالقرب من محطة قطار هانكو والمسجد التراثي والمطاعم الحلال.',
        en: 'Hankou / Jiang\'an District near Hankou Railway Station, historic Grand Mosque, and halal dining.'
      }
    ],
    localTransportAdvice: {
      ar: 'مترو ووهان يضم أكثر من 12 خطاً يعبر نهر يانغتسي بسرعة وسهولة؛ استخدام Didi مريح جداً للوصول إلى المصانع البعيدة في وادي البصريات وهوانغبي.',
      en: 'Wuhan Metro network crosses the Yangtze River via underwater tunnels; Didi is reliable for touring expansive county industrial parks.'
    },
    languageTips: {
      ar: 'المندرينية هي لغة التعامل؛ مهندسو مصانع الليزر الكبرى يتحدثون الإنجليزية التقنية بطلاقة، ويُنصح بمترجم للأمور التعاقدية.',
      en: 'Mandarin is universally spoken; senior engineers at major laser OEMs speak technical English; a commercial translator is recommended for custom contracts.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi', 'Baidu Maps', 'MetroMan Wuhan'],
    recommendedHotels: [
      {
        id: 'hyatt-regency-wuhan-optics-valley',
        name: {
          ar: 'فندق حياة ريجنسي ووهان أوبتيكس فالي (Hyatt Regency Wuhan)',
          en: 'Hyatt Regency Wuhan Optics Valley',
          zh: '武汉光谷凯悦酒店'
        },
        category: { ar: 'فاخر 5 نجوم دولي', en: 'Luxury 5-Star International' },
        area: {
          ar: 'طريق لوويو، وادي البصريات، ووهان',
          en: 'Luoyu Road, Optics Valley, Wuhan'
        },
        address: {
          ar: '1077 طريق لوويو، حي هونغشان، وادي البصريات، ووهان',
          en: '1077 Luoyu Road, Hongshan District, Optics Valley, Wuhan',
          zh: '武汉市洪山区珞喻路1077号'
        },
        highlights: {
          ar: 'الفندق المعتمد الأفضل لرجال الأعمال وزوار مصانع الليزر والألياف الضوئية، غرف فسيحة ومرافق متكاملة وموقع مباشر في قلب وادي البصريات',
          en: 'Premier luxury hotel situated directly in Optics Valley, ideal for laser equipment and photonics industrial buyers.'
        }
      },
      {
        id: 'shangri-la-hotel-wuhan',
        name: {
          ar: 'فندق شانغريلا ووهان (Shangri-La Hotel Wuhan)',
          en: 'Shangri-La Hotel Wuhan',
          zh: '武汉香格里拉大酒店'
        },
        category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
        area: {
          ar: 'شارع جيانشه، حي جيانغ آن، هانكو، ووهان',
          en: "Jianshe Avenue, Jiang'an District, Hankou, Wuhan"
        },
        address: {
          ar: '700 شارع جيانشه، حي جيانغ آن، هانكو، ووهان',
          en: "700 Jianshe Avenue, Jiang'an District, Hankou, Wuhan",
          zh: '武汉市江岸区建设大道700号'
        },
        highlights: {
          ar: 'فندق الأعمال الرائد في قلب المركز التجاري لهانكو، قريب من محطة القطار السريع وخيارات الطعام الحلال',
          en: 'Established executive business hotel in downtown Hankou commercial center offering top-tier hospitality and conference halls.'
        }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'wuhan-huanan-grand-mosque-halal-dining',
        name: {
          ar: 'مطاعم شارع مسجد ووهان التاريخي الحلال (Hankou Mosque Quarter)',
          en: 'Hankou Grand Mosque Halal Restaurant Quarter',
          zh: '武汉汉口清真大寺清真美食街'
        },
        cuisineType: {
          ar: 'مأكولات إسلامية محلية، لحم ضأن وبقر حلال طازج، ومعكرونة ريغانميان الحلال الشهيرة',
          en: 'Authentic Wuhan Muslim Cuisine, Halal Hot Dry Noodles & Braised Beef'
        },
        isHalal: true,
        address: {
          ar: 'بجوار مسجد هانكو الكبير، حي جيانغ آن، ووهان',
          en: "Adjacent to Hankou Mosque, Jiang'an District, Wuhan",
          zh: '武汉市江岸区二曜路清真寺旁'
        },
        recommendedFor: {
          ar: 'تناول وجبات حلال مضمونة وتجربة أشهى أطباق ووهان الحلال وأداء الصلوات في المسجد العريق',
          en: 'Experiencing certified halal authentic Wuhan noodles and performing prayers at the historic mosque.'
        }
      },
      {
        id: 'arafat-xinjiang-halal-restaurant-wuhan',
        name: {
          ar: 'مطعم عرفات شينجيانغ الحلال بووهان',
          en: 'Arafat Xinjiang Halal Restaurant Wuhan',
          zh: '阿拉法特新疆清真餐厅'
        },
        cuisineType: {
          ar: 'مشويات شينجيانغ، كباب الضأن، أرز البخاري، والخبز الإيغوري الطازج',
          en: 'Xinjiang Halal Lamb Kebabs, Pilaf & Fresh Flatbread'
        },
        isHalal: true,
        address: {
          ar: 'طريق غوانغقو، وادي البصريات، ووهان',
          en: 'Guanggu Avenue near Tech Park, Wuhan',
          zh: '武汉市洪山区光谷步行街商圈'
        },
        recommendedFor: {
          ar: 'وجبات عشاء حلال شهية ولحوم مشوية لرجال الأعمال أثناء زيارات مصانع وادي البصريات',
          en: 'Delicious halal kebabs and hearty lamb pilaf dinners for technology buyers staying in Optics Valley.'
        }
      }
    ]
  },
  relatedCitySlugs: ['zhengzhou', 'changzhou', 'wuxi', 'shanghai', 'chengdu'],
  relatedProductSlugs: [
    'optoelectronics-lasers',
    'automotive-vehicles',
    'commodity-wholesale-markets',
    'machinery'
  ],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل ووهان التجاري والصناعي | ماكينات الليزر، الألياف الضوئية، وأسواق هانكو الشمالية',
      en: 'Wuhan Sourcing Guide | Fiber Laser Machines, Optics Valley & Hankou North Wholesale'
    },
    description: {
      ar: 'دليل الاستيراد من ووهان: مصانع ماكينات القطع بالليزر في وادي البصريات، أسواق هانكو الشمالية للملابس والسلع، مصانع سيارات دونغفنغ، الفنادق والمطاعم الحلال.',
      en: 'Complete Wuhan sourcing guide: CNC fiber laser cutting machines in Optics Valley, Hankou North wholesale trade markets, Dongfeng automotive, logistics, and halal dining.'
    }
  }
};
