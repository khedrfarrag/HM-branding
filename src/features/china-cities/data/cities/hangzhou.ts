import { ICity } from '../../types';

export const hangzhouCity: ICity = {
  id: 'hangzhou',
  slug: 'hangzhou',
  name: { ar: 'هانغتشو (هانغتشو)', en: 'Hangzhou', zh: '杭州' },
  province: { ar: 'تشيجيانغ', en: 'Zhejiang', zh: '浙江省' },
  region: 'Yangtze River Delta',
  tier: 'tier-1',
  commercialImportanceScore: 96,
  heroImage: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1527684651001-731c474bbb5a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'عاصمة التجارة الإلكترونية العالمية ومقر عملاق التجارة الرقمية Alibaba Group، وإحدى أهم عواصم الموضة والحرير الطبيعي في العالم. تشتهر بمجمع سيتشيتشينغ الأضخم في شرق آسيا للملابس النسائية الجاهزة، وأكبر قاعدة لشركات كاميرات المراقبة والذكاء الاصطناعي (Hikvision & Dahua)، وشاي لونغجينغ الإمبراطوري.',
    en: 'Global E-Commerce Capital and global headquarters of Alibaba Group. Leading hub for fast-fashion apparel wholesale (Sijiqing Cluster), natural silk fabrics (China Silk City), AI surveillance systems (Hikvision, Dahua), and digital cross-border trade.'
  },
  keyIndustries: ['e-commerce', 'apparel-fashion', 'textiles-silk', 'technology-ai', 'surveillance-security', 'tea'],
  primaryProducts: {
    ar: [
      'الملابس النسائية العصرية وتصميمات الموضة الجاهزة (Sijiqing)',
      'الحرير الطبيعي وأوشحة الحرير والبياضات الفاخرة (China Silk City)',
      'كاميرات المراقبة وأنظمة الأمان الذكية (Hikvision & Dahua)',
      'منصات وبرمجيات التجارة الإلكترونية العابرة للحدود والذكاء الاصطناعي',
      'شاي لونغجينغ الأخضر الفاخر وأطقم الشاي الصينية',
      'مستلزمات البث المباشر (Live-stream) ومعدات استوديوهات التجارة'
    ],
    en: [
      'Fast-Fashion Women Apparel & Boutique Garments (Sijiqing)',
      'Pure Silk Fabrics, Silk Scarves & Luxury Bedding',
      'AI Surveillance Cameras & Security Hardware (Hikvision/Dahua)',
      'Cross-Border E-Commerce SaaS, AI & Cloud Infrastructure',
      'Longjing Imperial Green Tea & Tea Ceremony Sets',
      'Live-Streaming Studio Gear & Digital Marketing Hardware'
    ]
  },
  bestFor: ['Apparel Importers', 'E-Commerce Merchants', 'Silk Buyers', 'Security & Surveillance Traders', 'Tech Innovators'],
  districts: [
    {
      id: 'shangcheng-sijiqing',
      cityId: 'hangzhou',
      name: { ar: 'منطقة شانغتشينغ وسيتشيتشينغ للملابس (Shangcheng & Sijiqing)', en: 'Shangcheng District & Sijiqing Fashion Hub', zh: '上城区 / 四季青服装特色街区' },
      activityType: { ar: 'أضخم مجمع لأسواق ملابس الجملة في شرق الصين ومراكز تصميم الموضة السريعة', en: 'Largest Fast-Fashion Apparel Wholesale Belt in East China' },
      mainProducts: ['ملابس نسائية عصرية', 'أزياء شتوية وصوفية', 'فساتين وقمصان وبنطلونات', 'أزياء كورية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Sijiqing Station (Lines 7 & 9)'
    },
    {
      id: 'binjiang-tech-zone',
      cityId: 'hangzhou',
      name: { ar: 'منطقة بينجيانغ للتكنولوجيا الفائقة (Binjiang Hi-Tech District)', en: 'Binjiang Hi-Tech National Development Zone', zh: '滨江区 / 杭州高新区' },
      activityType: { ar: 'وادي السيليكون التابع لهانغتشو ومقرات هيكفيجن ودوا وعلي بابا بينجيانغ ونت إيز', en: 'Hangzhou Silicon Valley: Hikvision, Dahua, NetEase & Tech Giant HQs' },
      mainProducts: ['كاميرات أمنية ذكية', 'أنظمة تحكم بالوصول', 'برمجيات سحابية', 'أجهزة ذكية IoT'],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Jiangling Road Station (Lines 1 & 6)'
    },
    {
      id: 'yuhang-future-tech-city',
      cityId: 'hangzhou',
      name: { ar: 'مدينة المستقبل التكنولوجية ويو هانغ (Yuhang Future Science & Tech City)', en: 'Yuhang Future Tech City (Alibaba HQ)', zh: '余杭区 / 杭州未来科技城' },
      activityType: { ar: 'المقر الرئيسي العالمي لمجموعة علي بابا (Xixi Campus) وقرى رواد الأعمال الرقميين', en: 'Alibaba Group Global HQ (Xixi Campus), AI Labs & Cross-Border Logistics' },
      mainProducts: ['حلول التجارة الإلكترونية B2B/B2C', 'حوسبة سحابية', 'خدمات الشحن واللوجستيات الرقمية (Cainiao)'],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Liangmu Road Station (Line 5) / Central Park Station (Line 19)'
    },
    {
      id: 'gongshu-china-silk-city',
      cityId: 'hangzhou',
      name: { ar: 'منطقة غونغشو ومدينة الحرير (Gongshu & China Silk City)', en: 'Gongshu District & China Silk City Bazaar', zh: '拱墅区 / 中国丝绸城' },
      activityType: { ar: 'شارع الحرير التراثي الوطني وأسواق توزيع الأقمشة الحريرية المطرزة للمصممين', en: 'National Heritage Silk Wholesale Belt & Premium Textile Showrooms' },
      mainProducts: ['حرير التوت الطبيعي 100%', 'شالات وأوشحة حريرية مطبوعة', 'بيجامات وملابس نوم حريرية', 'أقمشة كريب وشيفون حرير'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'North Jianguo Road Station (Lines 2 & 5)'
    },
    {
      id: 'xiaoshan-district',
      cityId: 'hangzhou',
      name: { ar: 'منطقة شياوشان الصناعية واللوجستية (Xiaoshan District)', en: 'Xiaoshan Industrial & Airport Logistics District', zh: '萧山区 / 萧山国际机场物流园' },
      activityType: { ar: 'مجمع مطار شياوشان للشحن، ومصانع تجميع السيارات وقطع الغيار، والمنسوجات التصديرية', en: 'Xiaoshan Airport Air Cargo Hub, Auto Components & Export Textiles' },
      mainProducts: ['قطع غيار سيارات', 'آلات نسيج وغزل', 'شحن جوي دولي سريع', 'مفروشات منزلية'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Xiaoshan International Airport Station (Lines 1, 7 & 19)'
    },
    {
      id: 'qiantang-new-district',
      cityId: 'hangzhou',
      name: { ar: 'منطقة تشيانتانغ الجديدة للتصنيع المتطور (Qiantang New District)', en: 'Qiantang Advanced Manufacturing Hub', zh: '钱塘区 / 下沙高教园与出口加工区' },
      activityType: { ar: 'منطقة التجارة الحرة الشاملة، تصنيع السيارات، والصناعات الدوائية الحيوية والأجهزة الكهربائية', en: 'Comprehensive Bonded Zone, Automotive Assembly & Bio-Pharma Base' },
      mainProducts: ['أجهزة إلكترونية استهلاكية', 'سيارات متكاملة', 'مستحضرات صيدلانية', 'مستودعات تجارة عابرة للحدود'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Wenze Road Station (Line 1)'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'hangzhou-sijiqing-apparel-cluster',
      cityId: 'hangzhou',
      name: { ar: 'مجمع سيتشيتشينغ لملابس الجملة (Sijiqing Garment Wholesale Cluster)', en: 'Sijiqing Garment Wholesale Cluster', zh: '四季青服装特色街区（意法/中洲/新世纪）' },
      type: 'Wholesale',
      category: 'Apparel & Fast Fashion',
      description: {
        ar: 'أكبر مجمع لبيع الملابس الجاهزة بالجملة في الصين، يضم أكثر من 22 مركزاً تجارياً ضخماً تمتد على جانبي طريق هانغهاي. أشهرها مبنى "إيفا" (Yifa Fashion City) المتخصص في أحدث صيحات الموضة النسائية والتصاميم الحصرية الأصلية، ومبنى "تشونغتشو" (Zhongzhou) للبوتيكات الفاخرة، ومبنى "شين شيتشي" للملابس الكاجوال ومبنى "جياباو" لملابس الأطفال. يزود المجمع آلاف المتاجر والمتاجر الإلكترونية في آسيا والخليج.',
        en: 'China undisputed top fast-fashion wholesale cluster spanning 22 giant multi-level marts along Hanghai Road. Highlights include Yifa Fashion City (famous for original women designer collections), Zhongzhou Boutique Fashion Mall, New Century Apparel Mart, and Jiabao Children Wear Market.'
      },
      address: { ar: 'طريق هانغهاي، منطقة شانغتشينغ، هانغتشو', en: 'Hanghai Rd, Shangcheng District, Hangzhou', zh: '浙江省杭州市上城区杭海路四季青服装街区' },
      nearestMetro: 'Sijiqing Station (Lines 7 & 9, Direct Exit)',
      operatingHours: '05:30 - 15:30',
      moqLevel: 'Low'
    },
    {
      id: 'hangzhou-china-silk-city',
      cityId: 'hangzhou',
      name: { ar: 'مدينة الحرير الصيني الوطنية (China Silk City)', en: 'Hangzhou China Silk City Market', zh: '中国丝绸城（新华路特色街）' },
      type: 'Wholesale',
      category: 'Pure Silk & High-End Textiles',
      description: {
        ar: 'السوق التراثي والوطني الأبرز في الصين المتخصص حصرياً في الحرير الطبيعي النقي 100%. يضم أكثر من 600 متجر ومصنع يقدمون أقمشة الحرير بالمتر، الشالات والأوشحة الحريرية الفاخرة، فساتين الكيباو الصينية الراقية، بيجامات الحرير الطبيعي، وأطقم البياضات الحريرية الفندقية المعدة للتصدير.',
        en: 'The definitive national market dedicated entirely to 100% pure mulberry silk. Over 600 specialized boutiques selling silk fabrics by bolt, pure silk printed scarves, traditional Qipao dresses, silk sleepwear, and luxury silk home bedding for export.'
      },
      address: { ar: '253 طريق شينخوا / طريق تيبانغ، منطقة غونغشو، هانغتشو', en: '253 Xinhua Rd / Tiyuchang Rd, Gongshu District, Hangzhou', zh: '浙江省杭州市拱墅区新华路253号' },
      nearestMetro: 'North Jianguo Road Station (Lines 2 & 5)',
      operatingHours: '08:30 - 18:00',
      moqLevel: 'Flexible'
    },
    {
      id: 'hangzhou-east-china-furniture-mart',
      cityId: 'hangzhou',
      name: { ar: 'سوق شرق الصين للأثاث والديكور (East China Furniture Mart)', en: 'Hangzhou East China International Furniture Mall', zh: '华东家具市场 / 欧亚达家居' },
      type: 'Wholesale',
      category: 'Furniture & Home Decor',
      description: {
        ar: 'مجمع ضخم لتجارة الأثاث المكتبي والمنزلي وأثاث الفنادق وتجهيزات الديكور الحديث، يربط مباشرة بمصانع الأثاث الكبرى في مقاطعة تشيجيانغ.',
        en: 'Extensive multi-building furniture wholesale complex offering modern office desks, home living suites, luxury hotel furniture packages, and interior furnishing fixtures.'
      },
      address: { ar: '473 طريق كيوتاو، منطقة شانغتشينغ، هانغتشو', en: '473 Qiutao Rd, Shangcheng District, Hangzhou', zh: '浙江省杭州市上城区秋涛路473号' },
      nearestMetro: 'Qiutao South Road Station (Line 1)'
    },
    {
      id: 'hangzhou-longjing-tea-exchange',
      cityId: 'hangzhou',
      name: { ar: 'مركز لونغجينغ لتجارة الشاي الأخضر بالجملة (West Lake Longjing Tea Center)', en: 'West Lake Longjing Tea Wholesale Center', zh: '西湖龙井茶交易中心（转塘/梅家坞）' },
      type: 'Wholesale',
      category: 'Tea & Agro Supplies',
      description: {
        ar: 'المركز الرئيسي لتداول شاي لونغجينغ الأخضر الإمبراطوري الشهير عالمياً، وأدوات تقديم وحفظ الشاي وعلب الهدايا الفاخرة للتصدير والتجارة الدولية.',
        en: 'Primary distribution and auction hub for authentic West Lake Longjing green tea, featuring harvest-direct tea leaves, ceramic storage canisters, and luxury gift boxes.'
      },
      address: { ar: 'بلدة تشوانتانغ / ميجياوو، منطقة شيخو، هانغتشو', en: 'Zhuantang Town / Meijiawu, Xihu District, Hangzhou', zh: '浙江省杭州市西湖区转塘街道龙井茶交易市场' },
      nearestMetro: 'Xiangshan Campus Station (Line 6) + taxi'
    }
  ],
  industrialZones: [
    {
      id: 'binjiang-iot-video-base',
      cityId: 'hangzhou',
      name: { ar: 'القاعدة الوطنية لإنترنت الأشياء وكاميرات المراقبة (Binjiang IoT Base)', en: 'Binjiang IoT & Smart Video Surveillance Industrial Base', zh: '滨江物联网产业园（海康威视/大华股份）' },
      clusterSpecialization: { ar: 'تصنيع كاميرات المراقبة بالذكاء الاصطناعي، أنظمة التعرف على الوجوه، وأجهزة الاستشعار الذكية', en: 'Hikvision & Dahua Smart Video Surveillance, Face Recognition & AI Vision Hardware' },
      factoryTypes: ['Automated SMT PCB Plants', 'Optical Lens Assembly Lines', 'Cleanrooms'],
      keyProducts: ['كاميرات مراقبة IP و4K', 'أجهزة تسجيل NVR/DVR', 'أنظمة تحكم بالبوابات الذكية', 'حساسات حرارية'],
      specializationLevel: 'High'
    },
    {
      id: 'alibaba-xixi-cloud-cluster',
      cityId: 'hangzhou',
      name: { ar: 'مجمع علي بابا العالمي للحوسبة والتجارة الرقمية (Alibaba Global Cloud Hub)', en: 'Alibaba Xixi Global Headquarters & Digital Commerce Hub', zh: '阿里巴巴西溪园区 / 菜鸟全球总部' },
      clusterSpecialization: { ar: 'بوابات التجارة الإلكترونية، شبكات الشحن السحابي اللوجستي (Cainiao)، والحلول البرمجية الدولية', en: 'Global E-Commerce Platforms, Cainiao Smart Logistics & Cross-Border SaaS Solutions' },
      factoryTypes: ['Hyperscale Data Centers', 'Digital R&D Headquarters', 'Automated Logistics Hubs'],
      keyProducts: ['منصات تجارة إلكترونية', 'أنظمة تتبع شحن دولي ذكية', 'خوادم وحلول برمجية سحابية'],
      specializationLevel: 'High'
    },
    {
      id: 'xiaoshan-auto-textile-base',
      cityId: 'hangzhou',
      name: { ar: 'قاعدة شياوشان للسيارات ومعدات النسيج (Xiaoshan Auto & Textile Base)', en: 'Xiaoshan Advanced Automotive & Textile Machinery Park', zh: '萧山经济技术开发区汽车零部件与纺机基地' },
      clusterSpecialization: { ar: 'تصنيع قطع غيار السيارات ومحاور الدفع وآلات النسيج الدقيقة ومحركات الطاقة الجديدة', en: 'Auto Parts, Powertrain Components (Wanxiang Group) & Automated Loom Machinery' },
      factoryTypes: ['Precision Forging Plants', 'CNC Machining Centers', 'Industrial Loom Assembly'],
      keyProducts: ['محاور نقل حركة سيارات', 'آلات غزل ونسيج إلكترونية', 'بطاريات سيارات كهربائية'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'hz-fast-fashion-apparel',
      productName: { ar: 'الملابس النسائية السريعة وأحدث صيحات الموضة الجاهزة', en: 'Women Fast Fashion, Knitwear & Original Boutique Apparel' },
      industryCategory: 'apparel',
      whyThisCity: { ar: 'مجمع سيتشيتشينغ ينتج آلاف الموديلات الجديدة أسبوعياً بالتعاون مع مصانع تشيجيانغ بأسعار جملة تنافسية وجودة ممتازة.', en: 'Sijiqing Fashion Cluster rolls out thousands of weekly new fashion designs backed by Zhejiang garment manufacturing prowess.' },
      mainManufacturingArea: { ar: 'شانغتشينغ ويو هانغ ومقاطعة تونغشيانغ المجاورة', en: 'Shangcheng, Yuhang, and nearby Tongxiang' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'hz-pure-silk-products',
      productName: { ar: 'الحرير الطبيعي 100% والأوشحة والمنسوجات التراثية', en: '100% Mulberry Silk, Silk Scarves & Premium Fabrics' },
      industryCategory: 'textiles',
      whyThisCity: { ar: 'عاصمة الحرير التاريخية في الصين منذ أسرة سونغ، وتضم أكبر سوق وطني مرخص لمنتجات حرير التوت التصديرية.', en: 'China historical silk capital with the largest national authorized mulberry silk bazaar and dyeing excellence.' },
      mainManufacturingArea: { ar: 'غونغشو وشياوشان', en: 'Gongshu and Xiaoshan' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'hz-security-surveillance-ai',
      productName: { ar: 'كاميرات المراقبة الأمنية والأنظمة الذكية للتحكم بالدخول', en: 'Smart Video Surveillance, CCTV Cameras & AI Access Control' },
      industryCategory: 'technology',
      whyThisCity: { ar: 'تضم هانغتشو أكبر شركتين عالميتين في كاميرات المراقبة (Hikvision و Dahua) اللتين تستحوذان على أكثر من 40% من السوق العالمي.', en: 'Home to Hikvision and Dahua, producing over 40% of the world security camera and surveillance equipment.' },
      mainManufacturingArea: { ar: 'منطقة بينجيانغ (Binjiang)', en: 'Binjiang Hi-Tech Zone' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Hangzhou Xiaoshan International Airport (HGH - مطار دولي محوري للشحن الجوي السريع والتجارة الإلكترونية)'
    ],
    seaPorts: [
      'Ningbo-Zhoushan Port (ميناء نينغبو العملاق - على بعد 90 دقيقة بالقطار السريع/الشاحنات)',
      'Shanghai Port (Yangshan / Waigaoqiao - على بعد ساعتين)'
    ],
    highSpeedRailwayStations: [
      'Hangzhou East Railway Station (杭州东站 - أضخم عقدة قطارات سريعة تربط بشنغهاي وإيوو وشنجن)',
      'Hangzhou West Railway Station (杭州西站 - تخدم مدينة المستقبل وعلي بابا)',
      'Hangzhou Railway Station (杭州站 - وسط المدينة)'
    ],
    seaFreightSuitability: {
      ar: 'شحن الحاويات يتم بسلاسة عبر ميناء نينغبو-تشوشان المجاور (أكبر ميناء في العالم من حيث حجم البضائع الإجمالي) مع إمكانية التخليص الجمركي المباشر في موانئ هانغتشو الجافة.',
      en: 'Ocean cargo seamlessly ships through nearby Ningbo-Zhoushan port (World #1 by cargo tonnage) with direct bonded customs clearance in Hangzhou dry ports.'
    },
    airFreightSuitability: {
      ar: 'مطار شياوشان الدولي هو البوابة الأولى في شرق الصين لشحن الطرود والتجارة الإلكترونية العابرة للحدود بالتعاون مع شبكة Cainiao.',
      en: 'Xiaoshan (HGH) is East China premier cross-border e-commerce air cargo hub with non-stop international freighter connections.'
    },
    primaryCargoRoutes: {
      ar: [
        'رحلات شحن جوي مباشرة أسبوعياً إلى دبي، الرياض، إسطنبول، لييج، وسول',
        'شحن بحري حاويات منتظم ينطلق من ميناء نينغبو إلى كافة موانئ الخليج العربي والبحر الأحمر',
        'قطارات الشحن السريع إلى آسيا الوسطى وأوروبا (Yixin\'ou Silk Road Hub)'
      ],
      en: [
        'Weekly dedicated air cargo freighters to Dubai, Riyadh, Istanbul, and Liege',
        'Direct ocean container sailings via Ningbo Port to Jebel Ali, Jeddah, Dammam & Salalah',
        'Silk Road China-Europe express freight trains departing nearby terminals'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['مارس', 'أبريل', 'مايو', 'سبتمبر', 'أكتوبر', 'نوفمبر'],
    suggestedStayDays: 4,
    weatherSummary: {
      ar: 'طقس شبه استوائي لطيف للغاية في الربيع والخريف، دافئ ورطب في الصيف، بارد في الشتاء. أجمل الفترات هي موسم قطاف الشاي في الربيع وموسم المعارض في الخريف.',
      en: 'Pleasant subtropical climate; Spring and Autumn offer picturesque weather perfect for factory visits and West Lake sightseeing.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة تشيانجيانغ نيو سيتي (Qianjiang New City CBD): أحدث ناطحات السحاب ومراكز المؤتمرات الدولية وفنادق الـ 5 نجوم الفاخرة.',
        en: 'Qianjiang New City CBD: Ultra-modern skyline, exhibition centers, and luxury international business hotels.'
      },
      {
        ar: 'منطقة سيتشيتشينغ ووسط المدينة (Sijiqing / Downtown Shangcheng): قريبة جداً من أسواق الملابس بالجملة ومحطة القطار الشرقية.',
        en: 'Sijiqing / Shangcheng: Ideal for fashion importers to walk directly to apparel wholesale marts.'
      },
      {
        ar: 'منطقة بينجيانغ (Binjiang): الفنادق القريبة من مقرات شركات التكنولوجيا وهيكفيجن وعلي بابا القديم.',
        en: 'Binjiang Hi-Tech: Close to Hikvision, Dahua, and high-tech headquarters.'
      }
    ],
    localTransportAdvice: {
      ar: 'شبكة مترو هانغتشو واسعة وتضم 12 خطاً تربط المطار ومحطات القطار السريع مباشرة بأسواق سيتشيتشينغ ووسط المدينة. الدفع يتم مباشرة عبر مسح كود المترو في Alipay.',
      en: 'Hangzhou Metro features 12 modern lines connecting Xiaoshan Airport, East Railway Station, and Sijiqing apparel markets. Scan Alipay QR for instant entry.'
    },
    languageTips: {
      ar: 'في مقرات التكنولوجيا (علي بابا وهيكفيجن) اللغة الإنجليزية ممتازة. أما في مجمع سيتشيتشينغ لملابس الجملة، فالتعامل حصراً باللغة الصينية وتطبيقات الترجمة أو بمرافقة مترجم تجاري.',
      en: 'English is fluent at tech HQs (Alibaba, Hikvision). In Sijiqing fashion marts, hiring a translator or using WeChat voice translation is essential.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'MetroMan Hangzhou', 'Taobao / 1688'],
    recommendedHotels: [
      {
        id: 'conrad-hangzhou',
        name: { ar: 'فندق كونراد هانغتشو - رافلز سيتي (Conrad Hangzhou)', en: 'Conrad Hangzhou (Raffles City)', zh: '杭州康莱德酒店' },
        category: { ar: 'فاخر 5 نجوم أيقوني', en: 'Ultra-Luxury 5-Star' },
        area: { ar: 'مركز تشيانجيانغ المالي الجديد، رافلز سيتي', en: 'Qianjiang New City CBD, Raffles City' },
        highlights: { ar: 'يقع داخل ناطحة سحاب رافلز سيتي الشهيرة بالقرب من مركز هانغتشو الدولي للمعارض، إطلالة ساحرة على نهر تشيانتانغ وخدمات رجال أعمال رفيعة', en: 'Iconic Raffles City tower, panoramic river views, adjacent to Grand Theatre & Metro Lines 4/9' }
      },
      {
        id: 'midtown-shangri-la-hangzhou',
        name: { ar: 'فندق مادتون شانغريلا هانغتشو (Midtown Shangri-La)', en: 'Midtown Shangri-La Hangzhou', zh: '杭州城中香格里拉大酒店' },
        category: { ar: 'فاخر 5 نجوم وسطي', en: 'Luxury 5-Star City Center' },
        area: { ar: 'مجمع كيري سنتر، بجوار بحيرة الغرب', en: 'Kerry Centre, Downtown near West Lake' },
        highlights: { ar: 'موقع ممتاز داخل مركز تسوق فاخر، على بعد 5 دقائق من بحيرة الغرب و10 دقائق من أسواق الحرير وسيتشيتشينغ للملابس', en: 'Directly linked to Kerry Centre mall, minutes from West Lake and Sijiqing markets' }
      },
      {
        id: 'park-hyatt-hangzhou',
        name: { ar: 'فندق بارك حياة هانغتشو (Park Hyatt Hangzhou)', en: 'Park Hyatt Hangzhou', zh: '杭州柏悦酒店' },
        category: { ar: 'فاخر 5 نجوم تنفيذي', en: 'Executive Luxury 5-Star' },
        area: { ar: 'مجمع ميكس سي (The MixC)، تشيانجيانغ', en: 'The MixC Mall, Qianjiang New City' },
        highlights: { ar: 'أعلى فندق في المدينة، تجربة فخامة هادئة لرجال الأعمال وكبار المستثمرين وقريب من محطة المترو', en: 'Top floors of modern tower, bespoke butler services, directly above MixC luxury hub' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'dong-yishun-halal-hangzhou',
        name: { ar: 'مطعم دونغ ييشون الإسلامي العريق (Dong Yishun Halal Restaurant)', en: 'Dong Yishun Halal Chinese Restaurant', zh: '东伊顺清真餐厅' },
        cuisineType: { ar: 'مأكولات إسلامية صينية ولحم ضأن حلال عريق', en: 'Authentic Chinese Muslim & Halal Lamb Specialties' },
        isHalal: true,
        address: { ar: '70 طريق تشينغتشون، منطقة شانغتشينغ، هانغتشو', en: '70 Qingchun Rd, Shangcheng District, Hangzhou', zh: '浙江省杭州市上城区庆春路70号' },
        recommendedFor: { ar: 'لحم ضأن مشوي، حساء اللحم البقري الصافي، وفطائر إسلامية باللحم، على بعد دقائق من سيتشيتشينغ', en: 'Traditional halal roast mutton, hand-pulled noodles & beef dumplings' }
      },
      {
        id: 'al-ameer-arab-hangzhou',
        name: { ar: 'مطعم الأمير العربي للمأكولات الشرقية (Al-Ameer Arabic Restaurant)', en: 'Al-Ameer Arabic Restaurant Hangzhou', zh: '阿米尔阿拉伯清真餐厅' },
        cuisineType: { ar: 'مأكولات عربية وشامية وخليجية حلال', en: 'Middle Eastern, Lebanese & Arab Halal Grills' },
        isHalal: true,
        address: { ar: 'طريق بينشينغ، منطقة بينجيانغ، هانغتشو', en: 'Binsheng Rd, Binjiang District, Hangzhou', zh: '浙江省杭州市滨江区滨盛路' },
        recommendedFor: { ar: 'مشاوي مشكلة، كبسة دجاج ولحم، حمص وفلافل، وشاي بالنعناع لرجال الأعمال العرب', en: 'Charcoal grills, chicken mandi, hummus, Arabic tea & business banquets' }
      },
      {
        id: 'hangzhou-grand-mosque-canteen',
        name: { ar: 'مطعم ومطبخ جامع هانغتشو الكبير (Hangzhou Grand Mosque Halal Hall)', en: 'Hangzhou Grand Mosque Halal Canteen', zh: '杭州清真寺餐厅' },
        cuisineType: { ar: 'أطباق إسلامية حلال طازجة 100%', en: 'Authentic Local Halal Canteen' },
        isHalal: true,
        address: { ar: 'طريق دونغشي، منطقة شانغتشينغ، هانغتشو', en: 'East Dongxi Rd, Shangcheng District, Hangzhou', zh: '浙江省杭州市上城区东新路杭州清真寺' },
        recommendedFor: { ar: 'وجبات حلال طازجة أيام الجمعة، لحوم ضأن مذبوحة على الطريقة الإسلامية وأجواء صلاة مريحة', en: 'Friday congregational prayers, fresh halal meals & warm community' }
      }
    ],
    touristAttractions: [
      {
        id: 'west-lake-unesco',
        name: { ar: 'بحيرة الغرب التراثية العالمية (West Lake - 西湖)', en: 'West Lake UNESCO World Heritage Site', zh: '杭州西湖' },
        category: { ar: 'تراث طبيعي وثقافي عالمي لليونسكو', en: 'UNESCO World Heritage Cultural Landscape' },
        description: { ar: 'أشهر معالم الصين الطبيعية التي ألهمت الشعراء والأباطرة منذ آلاف السنين، تحيط بها مزارع الشاي وجسور السلالات الصينية القديمة ومعبد باوتشو.', en: 'China legendary scenic lake adorned with willow-lined pagodas, classical stone bridges, and imperial tea gardens.' },
        nearestMetro: 'Longxiangqiao Station (Line 1)'
      },
      {
        id: 'lingyin-temple-scenic',
        name: { ar: 'معبد لينغين التاريخي (Lingyin Temple)', en: 'Lingyin Temple & Feilai Feng Grottos', zh: '灵隐寺 / 飞来峰' },
        category: { ar: 'معلم بوذي وتاريخي عريق', en: 'Historic Buddhist Temple & Mountain Grottos' },
        description: { ar: 'أحد أقدم وأكبر المعابد التاريخية في الصين تأسس عام 326 ميلادي بين جبال وغابات الخيزران الخضراء المنعشة.', en: 'Ancient temple complex founded in 326 AD set amidst mystical bamboo valleys and limestone Buddhist carvings.' }
      }
    ],
    essentialServices: [
      {
        id: 'hangzhou-alipay-merchant-center',
        serviceType: { ar: 'خدمات المدفوعات والمالية الرقمية', en: 'Fintech & Digital Payments' },
        title: { ar: 'مركز خدمة تجار علي باي الرئيسي (Alipay Merchant Center)', en: 'Alipay Global Merchant Service Center', zh: '蚂蚁集团 / 支付宝全球商户服务中心' },
        description: { ar: 'المقر المركزي لدعم الدفع الدولي للتجار الأجانب، وربط البطاقات الائتمانية الدولية وتسهيل المدفوعات للمستوردين.', en: 'Global support headquarters for international merchant payment gateway, cross-border settlements, and Alipay tour pass.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'global-digital-trade-expo',
      name: { ar: 'المعرض العالمي للتجارة الرقمية (GDTE)', en: 'Global Digital Trade Expo (GDTE)', zh: '全球数字贸易博览会（数贸会）' },
      industry: 'E-Commerce, AI, Cloud Tech & Digital Trade',
      venue: { ar: 'مركز هانغتشو الدولي للمعارض (HIEC)', en: 'Hangzhou International Expo Center (HIEC)', zh: '杭州国际博览中心' },
      occurrence: { ar: 'سبتمبر / نوفمبر سنوياً', en: 'Annually in Autumn' },
      officialWebsite: 'https://www.gdte.org.cn',
      bestFor: ['Cross-Border E-Commerce Importers', 'Digital Trade Startups', 'AI Solutions Buyers']
    },
    {
      id: 'hangzhou-international-textile-fair',
      name: { ar: 'معرض هانغتشو الدولي للأقمشة والغزل والأزياء', en: 'Hangzhou International Textile & Apparel Expo', zh: '杭州国际纺织服装供应链博览会' },
      industry: 'Textiles, Fabrics, Silk & Apparel Supply Chain',
      venue: { ar: 'مركز هانغتشو الدولي للمعارض (HIEC)', en: 'Hangzhou International Expo Center', zh: '杭州国际博览中心' },
      occurrence: { ar: 'يونيو / ديسمبر مرتين سنوياً', en: 'Biannually in June & December' },
      officialWebsite: 'http://www.hzzexpo.com',
      bestFor: ['Garment Manufacturers', 'Fashion Brand Buyers', 'Fabric Importers']
    }
  ],
  relatedCitySlugs: ['shanghai', 'yiwu', 'ningbo', 'shaoxing', 'cixi'],
  relatedProductSlugs: ['textiles', 'apparel', 'technology'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل هانغتشو التجاري | أسواق ملابس سيتشيتشينغ، الحرير، والحلول الرقمية', en: 'Hangzhou Commercial Sourcing Guide | Sijiqing Fashion, Silk & Tech' },
    description: { ar: 'دليل الاستيراد والتجارة من هانغتشو: مجمع سيتشيتشينغ لملابس الجملة، مدينة الحرير الصيني، مقرات علي بابا وهيكفيجن، وفنادق ومطاعم حلال.', en: 'Complete sourcing guide to Hangzhou: Sijiqing fast-fashion wholesale cluster, China Silk City, Alibaba & Hikvision headquarters, and business halal travel.' }
  }
};
