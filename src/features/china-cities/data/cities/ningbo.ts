import { ICity } from '../../types';

export const ningboCity: ICity = {
  id: 'ningbo',
  slug: 'ningbo',
  name: { ar: 'نينغبو', en: 'Ningbo', zh: '宁波' },
  province: { ar: 'تشيجيانغ', en: 'Zhejiang', zh: '浙江省' },
  region: 'Yangtze River Delta',
  tier: 'tier-1',
  commercialImportanceScore: 97,
  heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'عاصمة الشحن البحري والصناعي الأولى، وموطن أضخم ميناء بحري في العالم من حيث حمولة البضائع (Ningbo-Zhoushan Port). تشتهر بأنها المركز العالمي الأول لتصنيع الأجهزة المنزلية الصغيرة، قوالب وماكينات حقن البلاستيك (Haitian Plastics)، الأدوات المكتبية والقرطاسية (Deli Group)، وقطع غيار السيارات، مع أكثر من 25,000 شركة تجارة خارجية ولوجستيات.',
    en: 'World #1 cargo port powerhouse (Ningbo-Zhoushan Port) and premier manufacturing cluster for small home appliances, plastic injection machinery (Haitian), stationery & office gear (Deli Group HQ), automotive parts, and industrial fasteners with over 25,000 active foreign trade export houses.'
  },
  keyIndustries: ['logistics-shipping', 'home-appliances', 'plastics-rubber', 'stationery', 'hardware-tools', 'auto-parts', 'machinery'],
  primaryProducts: {
    ar: [
      'الأجهزة المنزلية الصغيرة (غلايات، مقالي هوائية، مكاوي بخار، مراوح، دفايات)',
      'ماكينات حقن وقوالب البلاستيك الدقيقة (Haitian Plastics)',
      'الأدوات القرطاسية والمكتبية والمدرسية (المقر العالمي لشركة Deli Group)',
      'قطع غيار السيارات ومكونات إلكترونيات المركبات (Geely & Joyson)',
      'الأدوات والمعدات الكهربائية والبراغي الصناعية فائقة الصلابة',
      'البوليمرات والحبيبات البلاستيكية الخام (China Plastics City Yuyao)'
    ],
    en: [
      'Small Home Electrical Appliances (Air fryers, kettles, irons, blenders)',
      'Plastic Injection Molding Machines & Precision Molds (Haitian)',
      'Office Supplies & School Stationery (Deli Group Global HQ)',
      'Automotive Systems & Auto Components (Geely Auto HQ & Joyson)',
      'Power Tools, Hardware & High-Tensile Industrial Fasteners',
      'Raw Polymer Resins & Engineering Plastics (Yuyao Plastics City)'
    ]
  },
  bestFor: ['Appliance Importers', 'Stationery Distributors', 'Plastic Manufacturers', 'Automotive Buyers', 'Logistics Businesses'],
  districts: [
    {
      id: 'yinzhou-district',
      cityId: 'ningbo',
      name: { ar: 'منطقة ينزو التجارية والمالية (Yinzhou District & Southern CBD)', en: 'Yinzhou District & Southern Business District', zh: '鄞州区 / 宁波南部商务区' },
      activityType: { ar: 'المركز التجاري والمالي الأحدث، ومجمع يضم آلاف شركات التصدير والاستيراد والمكاتب اللوجستية', en: 'Modern CBD & Southern Business Belt with thousands of export trading firms' },
      mainProducts: ['أجهزة منزلية صغيرة', 'أدوات مكتبية وقرطاسية', 'خدمات شحن بحري وتخليص', 'هدايا ترويجية'],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Southern Business District Station (Line 3)'
    },
    {
      id: 'beilun-port-district',
      cityId: 'ningbo',
      name: { ar: 'منطقة بيولون والميناء العملاق (Beilun Port District)', en: 'Beilun Deep-Water Port & Free Trade Zone', zh: '北仑区 / 北仑深水港区' },
      activityType: { ar: 'أكبر محطات مناولة الحاويات في العالم، المقر العالمي لماكينات هايتيان للبلاستيك ومصانع تجميع السيارات', en: 'Mega Container Terminals, Haitian Plastics Global HQ & Bonded Logistics Parks' },
      mainProducts: ['ماكينات حقن بلاستيك', 'حاويات شحن بحري', 'مكونات سيارات', 'صناعات ثقيلة'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Xiazhuang Station / Zhongjie Station (Line 1)'
    },
    {
      id: 'haishu-textile-district',
      cityId: 'ningbo',
      name: { ar: 'منطقة هايشو وسوق الأقمشة (Haishu & Light Textile City)', en: 'Haishu District & Light Textile Mart', zh: '海曙区 / 宁波轻纺城' },
      activityType: { ar: 'قلب نينغبو التاريخي، وسوق نينغبو للسلع الخفيفة والمنسوجات، ومقرات ماركات الملابس الكبرى (Youngor)', en: 'Historic Downtown Core, Light Industrial Commodities Mart & Apparel Giants' },
      mainProducts: ['أقمشة ومنسوجات منزلية', 'ستائر ومفروشات', 'ملابس رجالية جاهزة', 'سلع استهلاكية خفيفة'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Qingfangcheng Station (Line 2)'
    },
    {
      id: 'yuyao-plastics-mould-hub',
      cityId: 'ningbo',
      name: { ar: 'مدينة يويوان للبلاستيك والقوالب (Yuyao Plastics & Mould City)', en: 'Yuyao City (Plastics & Mould Capital)', zh: '余姚市 / 中国塑料城 / 中国模具城' },
      activityType: { ar: 'عاصمة البلاستيك والقوالب في الصين، أكبر بورصة لتداول حبيبات البوليمر ومصانع الأجهزة المنزلية الصغيرة', en: 'China Plastics City, Mould Capital & Small Appliance Manufacturing' },
      mainProducts: ['حبيبات بلاستيك خام', 'قوالب حقن وسحب صناعية', 'أجهزة كهرومنزلية', 'رشاشات ومضخات بلاستيكية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Yuyao North Railway Station (High-Speed Rail)'
    },
    {
      id: 'zhenhai-industrial-base',
      cityId: 'ningbo',
      name: { ar: 'منطقة تشنهاي للمعدات والبتروكيماويات (Zhenhai District)', en: 'Zhenhai Advanced Fastener & Petrochem Base', zh: '镇海区 / 紧固件与绿色石化基地' },
      activityType: { ar: 'القاعدة الوطنية لتصنيع البراغي والوصلات الصناعية فائقة الدقة، واللدائن البتروكيماوية', en: 'National High-Strength Fasteners Hub & Advanced Chemical Resins' },
      mainProducts: ['براغي وصواميل صناعية', 'وصلات فولاذية', 'خامات بلاستيكية نقية'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Zhenhai Metro Station (Lines 2 & 3)'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'yuyao-china-plastics-city',
      cityId: 'ningbo',
      name: { ar: 'مدينة البلاستيك الصينية في يويوان (China Plastics City)', en: 'China Plastics City (Yuyao Ningbo)', zh: '中国塑料城（余姚）' },
      type: 'Wholesale',
      category: 'Plastics & Raw Polymers',
      description: {
        ar: 'أكبر سوق وبورصة لتداول المواد الخام البلاستيكية والبوليمرات الهندسية في آسيا بمساحة تتجاوز مليون متر مربع. يضم أكثر من 2000 شركة وموزع معتمد لكبرى شركات البتروكيماويات العالمية (Sinopec, SABIC, LG Chem, ExxonMobil) لتوريد حبيبات PP, PE, ABS, PVC, PC بأسعار البورصة الفورية.',
        en: 'Asia largest wholesale market and spot exchange for raw plastic materials and engineering polymers. Over 2,000 specialized trading houses supplying virgin and recycled PP, PE, ABS, PC, and PVC resins with direct logistics linkages.'
      },
      address: { ar: 'طريق شينجيانغ، يويوان، نينغبو', en: 'Xinjiang Rd, Yuyao, Ningbo, Zhejiang', zh: '浙江省宁波市余姚市新建北路中国塑料城' },
      nearestStation: 'Yuyao North High-Speed Rail Station (15 min taxi)',
      operatingHours: '08:30 - 17:00',
      moqLevel: 'High'
    },
    {
      id: 'yuyao-china-mould-city',
      cityId: 'ningbo',
      name: { ar: 'مدينة القوالب الصينية في يويوان (China Mould City)', en: 'China Mould City (Yuyao Ningbo)', zh: '中国模具城（余姚）' },
      type: 'Wholesale',
      category: 'Moulds, Tooling & CNC Parts',
      description: {
        ar: 'المركز الوطني المرجعي لتصميم وتصنيع قوالب حقن البلاستيك، قوالب الصب، واسطمبات السحب والمعادن، ومعدات الـ CNC، حيث تُصنع قوالب معظم الأجهزة المنزلية والسيارات المصدرة حول العالم.',
        en: 'National benchmark center for plastic injection molds, stamping dies, precision CNC tool steel, and mold components powering the global automotive and appliance supply chain.'
      },
      address: { ar: 'طريق كايفا، يويوان، نينغبو', en: 'Kaifa Rd, Yuyao, Ningbo', zh: '浙江省宁波市余姚市开发路中国模具城' },
      nearestStation: 'Yuyao North High-Speed Rail Station',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'Medium'
    },
    {
      id: 'ningbo-light-industrial-commodities',
      cityId: 'ningbo',
      name: { ar: 'سوق نينغبو للسلع الخفيفة والأقمشة (Ningbo Light Industrial City)', en: 'Ningbo Light Industrial Commodities Market', zh: '宁波轻纺城' },
      type: 'Wholesale',
      category: 'Textiles, Curtains & Consumer Goods',
      description: {
        ar: 'أحد أقدم وأضخم أسواق الجملة في نينغبو، مخصص لأقمشة الستائر، بياضات المنازل والمفروشات، الملابس الجاهزة، الأحذية، والحقائب والسلع الاستهلاكية اليومية بأسعار مصنعية ممتازة.',
        en: 'Massive long-standing wholesale center for curtain textiles, home bedding, upholstery fabrics, ready-made clothing, footwear, and daily household commodities.'
      },
      address: { ar: 'طريق ياوهانغ، منطقة هايشو، نينغبو', en: 'Yaohang Rd, Haishu District, Ningbo', zh: '浙江省宁波市海曙区雅戈尔大道宁波轻纺城' },
      nearestMetro: 'Qingfangcheng Station (Line 2, Direct Access)',
      operatingHours: '08:00 - 16:30',
      moqLevel: 'Low'
    },
    {
      id: 'ningbo-modern-hardware-mall',
      cityId: 'ningbo',
      name: { ar: 'سوق نينغبو للمعدات والأدوات الميكانيكية الحديثة (Ningbo Modern Hardware Mart)', en: 'Ningbo Modern Hardware & Electromechanical Market', zh: '宁波现代机电五金城 / 现代商城' },
      type: 'Wholesale',
      category: 'Hardware, Tools & Industrial Machinery',
      description: {
        ar: 'مجمع تجاري متخصص للأدوات الكهربائية، المضخات والمحركات، الصمامات، كابلات الكهرباء، أجهزة اللحام ومعدات السلامة المهنية ومستلزمات المصانع.',
        en: 'Large multi-floor wholesale trade hub specializing in power tools, water pumps, industrial valves, welding machines, electrical cables, and factory maintenance supplies.'
      },
      address: { ar: 'طريق تشونغشان الشرقي / كوانجي، منطقة ينزو، نينغبو', en: 'East Zhongshan Rd, Yinzhou District, Ningbo', zh: '浙江省宁波市鄞州区现代机电五金城' },
      nearestMetro: 'Century Avenue Station (Line 1)'
    }
  ],
  industrialZones: [
    {
      id: 'haitian-plastics-machinery-base',
      cityId: 'ningbo',
      name: { ar: 'المقر والقاعدة العالمية لماكينات هايتيان للبلاستيك (Haitian Plastics Machinery Park)', en: 'Haitian Plastics Machinery Global Industrial Base', zh: '海天集团总部及注塑机智能制造基地（北仑）' },
      clusterSpecialization: { ar: 'أكبر مصنّع في العالم لماكينات حقن البلاستيك الهيدروليكية والكهربائية بالكامل والروبوتات الصناعية', en: 'World largest manufacturer of hydraulic and all-electric plastic injection molding machines' },
      factoryTypes: ['Heavy Robotic Assembly Plants', 'CNC Machining Fabs', 'Foundries'],
      keyProducts: ['ماكينات حقن بلاستيك متطورة', 'روبوتات سحب القطع', 'معدات مؤازرة هيدروليكية'],
      specializationLevel: 'High'
    },
    {
      id: 'deli-stationery-park',
      cityId: 'ningbo',
      name: { ar: 'المجمع العالمي لأدوات ديلي المكتبية والقرطاسية (Deli Group Global Park)', en: 'Deli Group Global Stationery & Office Equipment Base', zh: '得力集团全球总部及智能文具制造产业园（宁海/鄞州）' },
      clusterSpecialization: { ar: 'أكبر مصنع ومصدر للأدوات المكتبية والمدرسية وآلات الطباعة والتجليد في آسيا', en: 'Asia #1 stationery, office automation equipment, paper products, and school supplies manufacturer' },
      factoryTypes: ['Automated Pen Manufacturing Lines', 'Paper Converting Plants', 'Laser Printer Assembly'],
      keyProducts: ['أقلام وأدوات كتابة', 'خزائن مصفحة وأجهزة عد نقود', 'آلات تغليف وتخريم', 'أدوات مكتبية كاملة'],
      specializationLevel: 'High'
    },
    {
      id: 'geely-auto-headquarters-ningbo',
      cityId: 'ningbo',
      name: { ar: 'المقر العالمي لسيارات جيلي وإلكترونيات السيارات (Geely Auto & Joyson Base)', en: 'Geely Auto Global HQ & Joyson Electronics Cluster', zh: '吉利汽车全球总部及均胜电子汽车零部件基地' },
      clusterSpecialization: { ar: 'تصنيع وتطوير سيارات الطاقة الجديدة، أنظمة السلامة والأكياس الهوائية، وشاشات مقصورة القيادة الذكية', en: 'Geely EV Assembly, Joyson Automotive Safety Systems (Airbags), Cockpit Electronics & Sensors' },
      factoryTypes: ['Smart Automotive Assembly Plants', 'Cleanroom Electronics Fabs'],
      keyProducts: ['سيارات ركاب كاملة', 'وسائد هوائية وأنظمة أمان', 'حساسات سيارات وكاميرات ذكية'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'nb-small-home-appliances',
      productName: { ar: 'الأجهزة المنزلية والمطبخية الصغيرة المعتمدة دولياً', en: 'Small Home & Kitchen Electrical Appliances' },
      industryCategory: 'home-appliances',
      whyThisCity: { ar: 'نينغبو ومراكزها التابعة تنتج أكثر من 60% من أجهزة المطبخ المنزلية المصدرة في العالم، وتتميز بأعلى معايير شهادات CE وCB وSASO وGCC.', en: 'Ningbo produces over 60% of world exported small kitchen appliances with full international CE, SASO, and GCC safety certifications.' },
      mainManufacturingArea: { ar: 'سيشي، يويوان، وبينزو', en: 'Cixi, Yuyao, and Yinzhou' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'nb-stationery-office-gear',
      productName: { ar: 'الأدوات القرطاسية والمكتبية ومستلزمات المدارس والشركات', en: 'Stationery, Office Supplies & Commercial Automation' },
      industryCategory: 'stationery',
      whyThisCity: { ar: 'عاصمة القرطاسية الصينية ومقر شركة Deli وComix وBeifa، وتوفر حلول التصنيع المباشر للماركات الخاصة OEM بكميات ضخمة.', en: 'China stationery capital hosting global giants Deli and Beifa, offering unmatched private label OEM stationery lines.' },
      mainManufacturingArea: { ar: 'نينغهاي وينزو', en: 'Ninghai and Yinzhou' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'nb-plastic-machinery-moulds',
      productName: { ar: 'ماكينات حقن البلاستيك وقوالب الاسطمبات الصناعية', en: 'Plastic Injection Molding Machines & Precision Tooling Dies' },
      industryCategory: 'machinery',
      whyThisCity: { ar: 'مقر هايتيان ومدينة يويوان للقوالب يتيحان للمستثمرين شراء خطوط إنتاج وتصنيع متكاملة مع القوالب في مكان واحد.', en: 'Home to Haitian Plastics and China Mould City, enabling turnkey plastic factory setup and custom die fabrication.' },
      mainManufacturingArea: { ar: 'بيولون ويويوان', en: 'Beilun and Yuyao' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Ningbo Lishe International Airport (NGB - مطار نينغبو الدولي للشحن والمسافرين)',
      'Hangzhou Xiaoshan Airport (HGH - 80 دقيقة بالقطار السريع)'
    ],
    seaPorts: [
      'Ningbo-Zhoushan Port (宁波舟山港 - الميناء رقم 1 عالمياً بحمولة تتجاوز 1.3 مليار طن و35 مليون حاوية TEU)',
      'Beilun Port Area (محطات الحاويات العملاقة والسفن الضخمة)',
      'Meishan Bonded Port Area (منطقة الميناء اللوجستي الحر للسيارات والتجارة الدولية)'
    ],
    highSpeedRailwayStations: [
      'Ningbo Railway Station (宁波站 - المحطة الرئيسية وسط المدينة)',
      'Yuyao North Railway Station (余姚北站 - تخدم مدينة البلاستيك والقوالب)'
    ],
    seaFreightSuitability: {
      ar: 'أقوى ميناء شحن في العالم بحرياً؛ محطات مياه عميقة (-20 متراً) تستقبل أضخم سفن الحاويات العالمية مع أكثر من 300 خط ملاحي بحري يربط مباشرة بكافة موانئ الشرق الأوسط والخليج العربي.',
      en: 'World #1 cargo port boasting natural deep-water berths (-20m) accommodating the world largest container vessels with over 300 container routes worldwide.'
    },
    airFreightSuitability: {
      ar: 'مطار نينغبو ليشيه يوفر شحن جوي سريع للبضائع القيمة مع ربط متكامل بمطار شانغهاي وهانغتشو للشحن الثقيل.',
      en: 'Ningbo Lishe (NGB) provides fast air freight with direct integration to Shanghai PVG and Hangzhou for mega charters.'
    },
    primaryCargoRoutes: {
      ar: [
        'خطوط ملاحية يومية مباشرة من ميناء نينغبو إلى جبل علي، الدمام، جدة، السخنة، وميناء خليفة (ترانزيت 15-22 يوماً)',
        'رحلات بحرية منتظمة إلى موانئ شمال إفريقيا (الإسكندرية، طنجة، الجزائر)',
        'رحلات قطار بضائع سريعة إلى وسط آسيا وأوروبا'
      ],
      en: [
        'Daily direct container vessels from Ningbo Port to Jebel Ali, Dammam, Jeddah, Sokhna, and Khalifa Port (15-22 days transit)',
        'Regular direct liner services to North African terminals',
        'Direct freight train connections to Central Asia & Europe'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['أبريل', 'مايو', 'سبتمبر', 'أكتوبر', 'نوفمبر'],
    suggestedStayDays: 4,
    weatherSummary: {
      ar: 'مناخ بحري لطيف، الربيع والخريف هما أفضل الأوقات لزيارة المصانع والموانئ. الصيف حار ورطب وتنشط فيه أحياناً أعاصير المحيط الهادئ.',
      en: 'Pleasant coastal climate. Spring and Autumn provide optimal weather for factory inspections. Summer is humid with occasional coastal showers.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة الأعمال الجنوبية (Southern Business District / Yinzhou): الأفضل لرجال الأعمال لقربها من كبرى شركات التجارة الخارجية والمكاتب اللوجستية والفنادق الحديثة.',
        en: 'Southern Business District Yinzhou: Prime hub for export traders, close to international logistics centers and upscale dining.'
      },
      {
        ar: 'منطقة تقاطع الأنهار الثلاثة وسانجيانغكو (Sanjiangkou / Haishu): وسط المدينة التجاري والتاريخي، وقريب من سوق نينغبو للأقمشة ومحطة القطار المركزية.',
        en: 'Sanjiangkou Downtown: Scenic three-rivers confluence with luxury riverfront hotels and Tianyi Square shopping.'
      }
    ],
    localTransportAdvice: {
      ar: 'مترو نينغبو يضم 5 خطوط رئيسية تربط المطار ومحطة القطار والموانئ ووسط المدينة بسهولة. كما يربط القطار السريع نينغبو بمدينة يويوان للبلاستيك في 18 دقيقة فقط.',
      en: 'Ningbo Metro has 5 clean lines connecting Lishe Airport, Ningbo Railway Station, and Yinzhou CBD. Fast bullet trains reach Yuyao in 18 minutes.'
    },
    languageTips: {
      ar: 'معظم شركات التجارة الخارجية والشركات اللوجستية في منطقة ينزو لديها موظفون يتقنون الإنجليزية بطلاقة. داخل المصانع الفرعية أو أسواق البلاستيك، ستحتاج مترجماً تجارياً أو تطبيق ترجمة.',
      en: 'Export trading firms in Yinzhou Southern CBD have fluent English sales reps. For factory tours in Beilun or Yuyao, an interpreter is recommended.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'MetroMan Ningbo'],
    recommendedHotels: [
      {
        id: 'shangri-la-hotel-ningbo',
        name: { ar: 'فندق شانغريلا نينغبو (Shangri-La Ningbo)', en: 'Shangri-La Hotel Ningbo', zh: '宁波香格里拉大酒店' },
        category: { ar: 'فاخر 5 نجوم عريق', en: 'Luxury 5-Star Riverfront' },
        area: { ar: 'ملتقى الأنهار الثلاثة، سانجيانغكو', en: 'Three Rivers Confluence, Downtown' },
        highlights: { ar: 'إطلالة بانورامية خلابة على التقاء أنهار نينغبو التاريخية، مركز رجال أعمال فخم وقاعات مؤتمرات دولية وخدمة ضيافة مشهورة', en: 'Panoramic riverfront views, top international business facilities, 5 minutes to Tianyi Square' }
      },
      {
        id: 'the-westin-ningbo',
        name: { ar: 'فندق ويستن نينغبو (The Westin Ningbo)', en: 'The Westin Ningbo', zh: '宁波威斯汀酒店' },
        category: { ar: 'فاخر 5 نجوم وسطي', en: 'Upscale Business 5-Star' },
        area: { ar: 'ساحة تيانيي التجارية، هايشو', en: 'Tianyi Square Central Commercial Core' },
        highlights: { ar: 'موقع مركزي وسط نينغبو مباشرة، متصل بمحطة المترو والأسواق والمطاعم الراقية', en: 'Directly on Tianyi Square commercial square, ideal for business dining and transport' }
      },
      {
        id: 'sofitel-ningbo',
        name: { ar: 'فندق سوفيتيل نينغبو (Sofitel Ningbo)', en: 'Sofitel Ningbo', zh: '宁波索菲特大饭店' },
        category: { ar: 'فاخر 5 نجوم تجاري', en: 'Executive Business 5-Star' },
        area: { ar: 'منطقة ينزو التجارية، بالقرب من واندا بلازا', en: 'Yinzhou Business District, near Wanda Plaza' },
        highlights: { ar: 'الأقرب لمنطقة الأعمال الجنوبية وشركات التصدير واللوجستيات في ينزو', en: 'Close to Southern Business District and major export agency offices' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'al-madina-halal-ningbo',
        name: { ar: 'مطعم المدينة العربي بـ نينغبو (Al-Madina Arabic Restaurant)', en: 'Al-Madina Arabic Halal Restaurant', zh: '麦地那阿拉伯清真餐厅' },
        cuisineType: { ar: 'مأكولات عربية وخليجية وشامية حلال', en: 'Middle Eastern, Halal Grills & Arabian Rice' },
        isHalal: true,
        address: { ar: 'طريق تيانتونغ، منطقة ينزو، نينغبو', en: 'Tiantong North Rd, Yinzhou District, Ningbo', zh: '浙江省宁波市鄞州区天童北路' },
        recommendedFor: { ar: 'مشاوي مشكلة، كبسة، حمص، فلافل، ومأكولات تلائم الوفود التجارية ورجال الأعمال العرب', en: 'Authentic Arabic charcoal grills, mandi, hummus & trade delegation dining' }
      },
      {
        id: 'dong-yishun-ningbo-halal',
        name: { ar: 'مطعم دونغ ييشون الإسلامي (Dong Yishun Halal Ningbo)', en: 'Dong Yishun Halal Restaurant Ningbo', zh: '东伊顺清真餐厅（宁波海曙店）' },
        cuisineType: { ar: 'مأكولات إسلامية صينية ولحم ضأن ونودلز حلال', en: 'Traditional Chinese Muslim Halal' },
        isHalal: true,
        address: { ar: 'طريق تشونغشان، منطقة هايشو، نينغبو', en: 'Zhongshan Rd, Haishu District, Ningbo', zh: '浙江省宁波市海曙区中山西路' },
        recommendedFor: { ar: 'حساء اللحم البقري، لحم ضأن مشوي على الفحم، وطعام حلال مضمون معتمد', en: 'Certified halal roast lamb, beef noodles & fresh Muslim dishes' }
      },
      {
        id: 'ningbo-moon-lake-mosque-canteen',
        name: { ar: 'مطعم ومطبخ جامع بحيرة القمر التاريخي (Moon Lake Mosque Halal Canteen)', en: 'Moon Lake Mosque Halal Dining', zh: '月湖清真寺清真餐厅' },
        cuisineType: { ar: 'مأكولات إسلامية محلية حلال 100%', en: 'Authentic Chinese Muslim Halal' },
        isHalal: true,
        address: { ar: 'شارع تشانغيوان، بحيرة القمر، منطقة هايشو، نينغبو', en: 'Cangyuan St, Moon Lake, Haishu District, Ningbo', zh: '浙江省宁波市海曙区月湖仓桥街清真寺' },
        recommendedFor: { ar: 'صلاة الجمعة ووجبات حلال طازجة بجوار أحد أقدم مساجد الصين التاريخية العريقة', en: 'Friday prayers & authentic halal food by one of China historic mosques' }
      }
    ],
    touristAttractions: [
      {
        id: 'tianyi-pavilion-library',
        name: { ar: 'مكتبة تيانيي التراثية والحدائق الإمبراطورية (Tianyi Pavilion - 天一阁)', en: 'Tianyi Pavilion UNESCO Heritage Library', zh: '天一阁博物馆' },
        category: { ar: 'أقدم مكتبة قائمة في آسيا وتراث إمبراطوري', en: 'Oldest Surviving Private Library in Asia (1561 AD)' },
        description: { ar: 'أقدم مكتبة خاصة متبقية في آسيا تأسست عام 1561 في عهد أسرة مينغ، تضم مخطوطات نادرة وحدائق كلاسيكية وأحواض مائية وباحات شاي مذهلة.', en: 'Historic Ming dynasty classical library and garden estate established in 1561 with ancient stone architecture and ponds.' },
        nearestMetro: 'Ximenkou Station (Line 1)'
      },
      {
        id: 'old-bund-ningbo',
        name: { ar: 'البوند القديم في نينغبو (Old Bund - 老外滩)', en: 'The Old Bund Ningbo (Lao Waitan)', zh: '宁波老外滩' },
        category: { ar: 'منطقة تراثية وسياحية على ضفاف النهر', en: 'Historic Treaty Port Riverfront Promenade' },
        description: { ar: 'أقدم واجهة بحرية وبوند تجاري في الصين يسبق بوند شانغهاي بعشرين عاماً، يضم مباني تاريخية ومطاعم ومقاهي عالمية على النهر.', en: 'Historic riverfront district opened in 1844, lined with European brick mansions, fine restaurants, and river views.' }
      }
    ],
    essentialServices: [
      {
        id: 'ningbo-port-customs-bureau',
        serviceType: { ar: 'الجمارك واللوجستيات البحرية', en: 'Maritime Customs & Port Logistics' },
        title: { ar: 'مركز خدمات الجمارك بميناء نينغبو (Ningbo Port Customs Center)', en: 'Ningbo Port Customs Declaration Center', zh: '宁波海关进出口通关服务大厅' },
        description: { ar: 'المقر المركزي لإنهاء إجراءات التخليص الجمركي للحاويات وشهادات المنشأ وفحص البضائع التصديرية.', en: 'Central clearing hub for customs declaration, certificate of origin issuance, and export freight inspections.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'china-international-consumer-goods-fair',
      name: { ar: 'معرض الصين الدولي للسلع الاستهلاكية والأجهزة المنزلية (CICGF)', en: 'China International Consumer Goods Fair (CICGF)', zh: '中国国际日用消费品博览会（消博会）' },
      industry: 'Consumer Goods, Home Appliances, Kitchenware & Gifts',
      venue: { ar: 'مركز نينغبو الدولي للمؤتمرات والمعارض', en: 'Ningbo International Conference & Exhibition Center', zh: '宁波国际微展中心' },
      occurrence: { ar: 'يونيو سنوياً', en: 'Annually in June' },
      officialWebsite: 'http://www.cicgf.com',
      bestFor: ['Appliance Importers', 'Consumer Goods Wholesalers', 'Retail Chains']
    },
    {
      id: 'china-plastics-expo-yuyao',
      name: { ar: 'معرض الصين الدولي للبلاستيك في يويوان (China Plastics Expo)', en: 'China Plastics Expo (Yuyao Ningbo)', zh: '中国塑料博览会（塑博会）' },
      industry: 'Raw Polymers, Plastic Machinery & Molds',
      venue: { ar: 'مركز معارض مدينة البلاستيك الصينية في يويوان', en: 'China Plastics City Exhibition Center', zh: '余姚中国塑料城国际会展中心' },
      occurrence: { ar: 'نوفمبر سنوياً', en: 'Annually in November' },
      officialWebsite: 'http://21cp.net',
      bestFor: ['Plastics Importers', 'Packaging Manufacturers', 'Moulding Buyers']
    },
    {
      id: 'ningbo-stationery-expo',
      name: { ar: 'معرض نينغبو الدولي للقرطاسية والأدوات المكتبية (China Stationery Fair Ningbo)', en: 'Ningbo Stationery Exhibition (CNSE)', zh: '宁波国际文具及办公用品展览会' },
      industry: 'Stationery, Office Supplies & Educational Equipment',
      venue: { ar: 'مركز نينغبو الدولي للمعارض', en: 'Ningbo International Exhibition Center', zh: '宁波国际会展中心' },
      occurrence: { ar: 'مارس سنوياً', en: 'Annually in March' },
      officialWebsite: 'http://www.cnstationeryfair.com',
      bestFor: ['Stationery Importers', 'School Supply Wholesalers', 'Office Automation Buyers']
    }
  ],
  relatedCitySlugs: ['cixi', 'yuyao', 'yiwu', 'hangzhou', 'shanghai'],
  relatedProductSlugs: ['logistics', 'home-appliances', 'plastics-rubber', 'hardware-tools', 'stationery'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل نينغبو التجاري واللوجستي | أضخم ميناء شحن، الأجهزة المنزلية، والبلاستيك', en: 'Ningbo Sourcing & Logistics Guide | World #1 Port, Appliances & Plastics' },
    description: { ar: 'دليل شامل للاستيراد من نينغبو: ميناء نينغبو-تشوشان، مصانع الأجهزة المنزلية الصغيرة، مدينة البلاستيك في يويوان، قرطاسية Deli، والفنادق والمطاعم الحلال.', en: 'Complete Ningbo sourcing guide: World #1 cargo port, small home appliances cluster, Yuyao Plastics & Mould City, Deli stationery HQ & business travel.' }
  }
};
