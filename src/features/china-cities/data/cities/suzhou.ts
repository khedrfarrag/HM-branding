import { ICity } from '../../types';

export const suzhouCity: ICity = {
  id: 'suzhou',
  slug: 'suzhou',
  name: { ar: 'سوتشو (سوزو)', en: 'Suzhou', zh: '苏州' },
  province: { ar: 'جيانغسو', en: 'Jiangsu', zh: '江苏省' },
  region: 'Yangtze River Delta',
  tier: 'tier-1',
  commercialImportanceScore: 96,
  heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'عاصمة فساتين الزفاف الأولى في العالم (تنتج وتصدر أكثر من 70% من فساتين الأعراس والسهرة عالمياً في Huqiu)، وعاصمة الحرير والمنسوجات التكنولوجية المتقدمة (Shengze Silk Market)، وأحد أضخم مراكز تصنيع الإلكترونيات الدقيقة والحواسيب المحمولة والشاشات في آسيا عبر مجمع SIP ومدينة كونشان.',
    en: 'World undisputed bridal gown capital producing over 70% of global wedding dresses (Huqiu Bridal City), global synthetic silk & textile powerhouse (Shengze China Eastern Silk Market), and high-tech manufacturing capital for microelectronics, displays, and laptop assembly across SIP and Kunshan.'
  },
  keyIndustries: ['bridal-eveningwear', 'textiles-silk', 'electronics', 'machinery-tooling', 'medical-equipment'],
  primaryProducts: {
    ar: [
      'فساتين الزفاف والأعراس الفاخرة وفساتين السهرة (Huqiu Bridal)',
      'إكسسوارات العرائس (طرحات، تيجان، قفازات، وأحذية زفاف)',
      'الحرير الطبيعي وأقمشة البوليستر والحرير الصناعي المتطورة (Shengze)',
      'لوحات الدوائر الإلكترونية المطبوعة PCB والشاشات المسطحة (SIP)',
      'أجهزة الكمبيوتر المحمولة والأجهزة اللوحية (قاعدة كونشان العالمية)',
      'الآلات الدقيقة والاسطمبات الألمانية (مجمع تايتشانغ للهندسة)'
    ],
    en: [
      'Bridal Gowns, Wedding Dresses & Evening Gowns (Huqiu)',
      'Bridal Accessories (Veils, tiaras, bridal gloves, headpieces)',
      'Mulberry Silk & Technical Synthetic Textiles (Shengze Market)',
      'Printed Circuit Boards (PCBs), TFT-LCD & OLED Panels (SIP)',
      'Laptops, Tablets & Precision Consumer Electronics (Kunshan Base)',
      'Precision German Tooling, Molds & High-End Machine Spindles (Taicang)'
    ]
  },
  bestFor: ['Bridal Boutique Owners', 'Fashion & Eveningwear Importers', 'Textile Traders', 'Electronics Importers', 'Precision Machinery Buyers'],
  districts: [
    {
      id: 'gusu-huqiu-bridal',
      cityId: 'suzhou',
      name: { ar: 'منطقة غوسو وتلال هوتشيو لفساتين الزفاف (Huqiu Gusu)', en: 'Huqiu Bridal Hub & Gusu District', zh: '姑苏区 / 虎丘婚纱城' },
      activityType: { ar: 'عاصمة فساتين الزفاف العالمية، مئات الأبراج والمشاغل المتخصصة في حياكة فساتين الأعراس والسهرة', en: 'World Premier Wedding Gown Wholesale & Custom Tailoring Belt' },
      mainProducts: ['فساتين زفاف فخمة', 'فساتين سهرة وخطوبة', 'أزياء تقليدية صينية وعالمية', 'طرحات وتيجان'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Huqiu Station (Line 6) / Shantang Street (Line 2)'
    },
    {
      id: 'suzhou-industrial-park-sip',
      cityId: 'suzhou',
      name: { ar: 'مجمع سوتشو الصناعي الصيني-السنغافوري (SIP)', en: 'China-Singapore Suzhou Industrial Park (SIP)', zh: '苏州工业园区（SIP）/ 金鸡湖CBD' },
      activityType: { ar: 'المركز المالي والتكنولوجي الراقي، بحيرة جينجي، ومقرات شركات الإلكترونيات والذكاء الاصطناعي العالمية', en: 'Financial CBD, Jinji Lake Luxury Hub, Microelectronics & AI Fabs' },
      mainProducts: ['أشباه موصلات', 'شاشات عرض ذكية', 'أجهزة طبية نانوية', 'حلول برمجية'],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Donghuachun Station / Times Square Station (Line 1)'
    },
    {
      id: 'wujiang-shengze-textile',
      cityId: 'suzhou',
      name: { ar: 'منطقة ووجيانغ وبلدة شينغتسي للأقمشة (Shengze Wujiang)', en: 'Wujiang District & Shengze Silk Town', zh: '吴江区 / 盛泽中国东方丝绸市场' },
      activityType: { ar: 'أكبر سوق لتجارة الأقمشة الصناعية والحرير وبطانات الملابس في العالم (China Eastern Silk Market)', en: 'World Largest Man-Made Silk, Microfiber & Textile Market' },
      mainProducts: ['أقمشة بوليستر حريرية', 'أقمشة ملابس رياضية وخارجية', 'بطانات ملابس', 'خيوط وألياف'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Suzhou South Railway Station (High-Speed Rail)'
    },
    {
      id: 'kunshan-electronics-base',
      cityId: 'suzhou',
      name: { ar: 'مدينة كونشان العالمية للحواسيب والإلكترونيات (Kunshan City)', en: 'Kunshan Electronics & Computer Manufacturing Capital', zh: '昆山市（全国百强县之首）' },
      activityType: { ar: 'المدينة رقم 1 في الصين في تصنيع أجهزة الكمبيوتر المحمولة والأجهزة الذكية، تجمع مصانع بيغاتيرون وكومبال وفوكسكون', en: 'Produces 1 in 3 world laptops (Pegatron, Compal, Foxconn supply chain)' },
      mainProducts: ['أجهزة كمبيوتر محمولة', 'شواحن وكابلات وبطاريات', 'ملحقات هواتف وحواسيب', 'قوالب دقيقة'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Kunshan Metro Line 11 (Connected to Shanghai Metro Line 11)'
    },
    {
      id: 'taicang-german-machinery',
      cityId: 'suzhou',
      name: { ar: 'مدينة تايتشانغ الصناعية الألمانية وميناء سوتشو (Taicang Port & German Hub)', en: 'Taicang Port & German Precision Engineering Base', zh: '太仓市（中德合作高地 / 太仓港）' },
      activityType: { ar: 'أكبر تجمع للشركات الهندسية الألمانية في الصين (أكثر من 500 شركة)، وميناء تايتشانغ البحري للحاويات', en: 'Over 500 German Precision Engineering Companies & Suzhou Taicang Container Port' },
      mainProducts: ['آلات خراطة وCNC متطورة', 'مضخات صناعية وصمامات دقيقة', 'قطع غيار سيارات أوروبية'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestStation: 'Taicang Railway Station'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'suzhou-huqiu-bridal-city',
      cityId: 'suzhou',
      name: { ar: 'مدينة هوتشيو الدولية لفساتين الزفاف (Huqiu Bridal City)', en: 'Huqiu International Bridal City', zh: '虎丘婚纱城（全国最大婚纱礼服交易中心）' },
      type: 'Wholesale',
      category: 'Bridal Gowns, Eveningwear & Accessories',
      description: {
        ar: 'أكبر مجمع تجاري متكامل لفساتين الزفاف في العالم يمتد على مساحة 300,000 متر مربع ويضم أكثر من 2000 متجر ومصمم. ينقسم إلى أقسام متخصصة: فساتين الزفاف الفاخرة ذات الذيل الطويل، فساتين السهرة والكوكتيل، فساتين الحفلات، أزياء الزفاف الصينية المطرزة (Xiuhe)، أطقم التيجان والكريستال والطرحات، وأحذية العرائس بأسعار جملة مذهلة تبدأ من 30 دولاراً وتصل للآلاف حسب التطريز والحرير.',
        en: 'The world absolute center for bridal and formal wear spanning 300,000 sqm with over 2,000 designers and manufacturer showrooms. Divided into luxury bridal gowns, haute couture evening dresses, bridesmaid gowns, traditional embroidered bridal attire, Swarovski-style tiaras, veils, and bridal shoes.'
      },
      address: { ar: '999 طريق هوتشيو، منطقة غوسو، سوتشو', en: '999 Huqiu Rd, Gusu District, Suzhou', zh: '江苏省苏州市姑苏区虎丘路999号虎丘婚纱城' },
      nearestMetro: 'Huqiu Station (Line 6) / Shantang Street (Line 2)',
      operatingHours: '09:00 - 18:00',
      moqLevel: 'Low'
    },
    {
      id: 'shengze-china-eastern-silk-market',
      cityId: 'suzhou',
      name: { ar: 'سوق شرق الصين للحرير والأقمشة في شينغتسي (China Eastern Silk Market)', en: 'China Eastern Silk Market (Shengze Wujiang)', zh: '盛泽中国东方丝绸市场' },
      type: 'Wholesale',
      category: 'Synthetic Silk & Technical Textiles',
      description: {
        ar: 'أضخم بورصة وسوق للأقمشة الاصطناعية وأقمشة السترات والملابس الخارجية والحرير في آسيا، يضم أكثر من 6000 شركة نسيج ويحقق معاملات سنوية تتجاوز 100 مليار يوان. يشتهر بتوريد أقمشة النايلون، التافتا، الشيفون، وأقمشة داون جاكيت المقاومة للماء.',
        en: 'Asia largest wholesale market for chemical fiber fabrics, silk-like textiles, down jacket outer fabrics, memory fabrics, and synthetic linings. Houses over 6,000 textile merchants with direct factory links.'
      },
      address: { ar: 'طريق شيتشنغ، بلدة شينغتسي، ووجيانغ، سوتشو', en: 'Xicheng Rd, Shengze Town, Wujiang District, Suzhou', zh: '江苏省苏州市吴江区盛泽镇市场路中国东方丝绸市场' },
      nearestStation: 'Suzhou South Railway Station (20 min taxi)',
      operatingHours: '08:30 - 17:00',
      moqLevel: 'Medium'
    },
    {
      id: 'suzhou-dongwu-silk-bazaar',
      cityId: 'suzhou',
      name: { ar: 'سوق دونغوو للحرير الطبيعي والتطريز السوتشوي (Dongwu Silk Mart)', en: 'Suzhou Dongwu Silk & Su Embroidery Mart', zh: '东吴丝绸刺绣市场 / 苏州第一丝厂' },
      type: 'Wholesale',
      category: 'Pure Silk & Hand Embroidery',
      description: {
        ar: 'المركز التاريخي الشهير لحرير التوت الطبيعي وأقمشة الساتان وتطريز سوتشو التراثي (Su Embroidery) المصنف ضمن التراث الإنساني لليونسكو، ويوفر أوشحة وبياضات وستائر حريرية فاخرة.',
        en: 'Celebrated silk center for 100% pure mulberry silk bolts, Su Embroidery silk masterworks, silk duvet bedding, and luxury scarves direct from Suzhou Silk Mill.'
      },
      address: { ar: 'طريق رينمين، منطقة غوسو، سوتشو', en: 'Renmin Rd, Gusu District, Suzhou', zh: '江苏省苏州市姑苏区人民路' },
      nearestMetro: 'Chayuanchang Station (Line 4)'
    }
  ],
  industrialZones: [
    {
      id: 'sip-biobay-nanotech-base',
      cityId: 'suzhou',
      name: { ar: 'مجمع سوتشو للنانوتكنولوجي والصناعات الطبية (SIP BioBay & Nanotech Park)', en: 'SIP Nanotech & BioBay Biomedical Base', zh: '苏州工业园区纳米城与生物医药产业园（BioBay）' },
      clusterSpecialization: { ar: 'تصميم الشرائح الإلكترونية النانوية، الأجهزة الطبية الجراحية، ومعدات التشخيص الدقيقة', en: 'Nanotechnology Chips, Advanced Medical Devices, Surgical Robotics & Bio-Pharma' },
      factoryTypes: ['Semiconductor Cleanrooms', 'GMP Medical Device Plants', 'AI Labs'],
      keyProducts: ['أجهزة مراقبة طبية', 'حساسات نانوية إلكترونية', 'رقائق اتصالات'],
      specializationLevel: 'High'
    },
    {
      id: 'kunshan-laptop-cluster',
      cityId: 'suzhou',
      name: { ar: 'مجمع كونشان لتصنيع أجهزة الحواسيب المحمولة (Kunshan Laptop Mega Cluster)', en: 'Kunshan Laptop & Smart Hardware Industrial Cluster', zh: '昆山光电产业园及笔记本电脑制造基地' },
      clusterSpecialization: { ar: 'تجميع الحواسيب المحمولة والشاشات المسطحة والمكونات البصرية الدقيقة (Compal, Wistron, AUO)', en: 'Global #1 Laptop Assembly Cluster, TFT-LCD Panels & Optical Components' },
      factoryTypes: ['Mega Automated Assembly Lines', 'SMT Surface Mount Fabs'],
      keyProducts: ['أجهزة كمبيوتر محمولة OEM', 'شاشات كريستال سائل TFT-LCD', 'لوحات مفاتيح وشواحن'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'sz-wedding-evening-dresses',
      productName: { ar: 'فساتين الزفاف والأعراس وفساتين السهرة وإكسسوارات العرائس', en: 'Bridal Gowns, Wedding Dresses, Eveningwear & Bridal Accessories' },
      industryCategory: 'apparel',
      whyThisCity: { ar: 'تنتج سوتشو 70% من فساتين الزفاف في العالم، وتوفر مرونة غير مسبوقة في التفصيل حسب الطلب (Custom Tailoring) بأسعار أقل بـ 80% من الأسواق العالمية.', en: 'Suzhou manufactures over 70% of global bridal wear with extreme custom flexibility, low MOQs, and unbeatable factory pricing.' },
      mainManufacturingArea: { ar: 'منطقة هوتشيو وغوسو (Huqiu)', en: 'Huqiu, Gusu District' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'sz-mulberry-synthetic-fabrics',
      productName: { ar: 'الحرير الطبيعي وأقمشة البوليستر والسترات التكنولوجية', en: 'Pure Mulberry Silk & Shengze Technical Synthetic Fabrics' },
      industryCategory: 'textiles',
      whyThisCity: { ar: 'بلدة شينغتسي وسوتشو تضمان أكبر طاقة نسيج لأقمشة الأزياء والسترات في العالم مع إمكانيات الصباغة والطباعة الحديثة.', en: 'Shengze and Suzhou host the world largest weaving capacity for fashion and outdoor technical fabrics.' },
      mainManufacturingArea: { ar: 'ووجيانغ شينغتسي (Shengze)', en: 'Shengze Town, Wujiang' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Shanghai Hongqiao Airport (SHA - 22 دقيقة فقط بالقطار السريع)',
      'Shanghai Pudong International Airport (PVG - ساعة واحدة)',
      'Sunan Shuofang International Airport (WUX - مطار ووشي سوتشو المشترك)'
    ],
    seaPorts: [
      'Suzhou Port / Taicang Port (太仓港 - أكبر ميناء نهري وبحري لنهر اليانغتسي ومناول للحاويات)',
      'Shanghai Yangshan & Waigaoqiao Ports (عبر الطرق السريعة والشاحنات اللوجستية في ساعتين)'
    ],
    highSpeedRailwayStations: [
      'Suzhou Railway Station (苏州站 - وسط المدينة التاريخي وقريب من أسواق فساتين الزفاف)',
      'Suzhou Industrial Park Station (苏州园区站 - تخدم مجمع SIP)',
      'Suzhou North Railway Station (苏州北站 - محطة الخط الرئيسي بكين-شانغهاي)'
    ],
    seaFreightSuitability: {
      ar: 'ميناء تايتشانغ التابع لسوتشو يوفر خطوط تغذية منتظمة (Feeder Lines) ومباشرة إلى ميناء شانغهاي يانغشان وموانئ اليابان وجنوب شرق آسيا والشرق الأوسط.',
      en: 'Suzhou Taicang Port operates intensive container feeder barges to Shanghai Yangshan deep-water port with bonded customs clearance.'
    },
    airFreightSuitability: {
      ar: 'ترتبط سوتشو بمطار شانغهاي بودونغ وهونغكياو عبر محطات شحن جوي جافة داخلية (Suzhou Cargo Terminals).',
      en: 'Connected via bonded inland airport terminals directly with Shanghai PVG and Hongqiao international flights.'
    },
    primaryCargoRoutes: {
      ar: [
        'شحن بحري مباشر من تايتشانغ وشانغهاي إلى جبل علي، جدة، السخنة، وبيروت',
        'شحن جوي سريع لفساتين الزفاف عبر مطار شانغهاي بودونغ (ترانزيت 3-5 أيام إلى العواصم العربية)'
      ],
      en: [
        'Direct ocean container sailings via Taicang & Shanghai to Jebel Ali, Jeddah, and Sokhna',
        'Express air courier lanes for bridal couture via Shanghai PVG to Middle East (3-5 days delivery)'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['مارس', 'أبريل', 'مايو', 'سبتمبر', 'أكتوبر', 'نوفمبر'],
    suggestedStayDays: 3,
    weatherSummary: {
      ar: 'معتدل ولطيف جداً في الربيع والخريف، دافئ صيفاً، بارد شتاءً. زيارة بحيرة جينجي والحدائق الكلاسيكية في الربيع والخريف تجربة ساحرة.',
      en: 'Mild and pleasant in Spring and Autumn; perfect for touring Huqiu bridal malls and UNESCO garden retreats.'
    },
    recommendedStayAreas: [
      {
        ar: 'مجمع سوتشو الصناعي وبحيرة جينجي (SIP Jinji Lake): أفخم الفنادق العالمية والمطاعم الراقية ومراكز المؤتمرات.',
        en: 'SIP & Jinji Lake: Premier modern lakefront hotels, high-end dining, and vibrant nightlife.'
      },
      {
        ar: 'منطقة غوسو وهووتشيو (Gusu & Huqiu): الأنسب لتجار فساتين الزفاف لقربها من مجمع هوتشيو للمشاغل ومحطة القطار.',
        en: 'Huqiu & Gusu Downtown: Walking distance to Huqiu Bridal City and classical canals.'
      }
    ],
    localTransportAdvice: {
      ar: 'مترو سوتشو يضم 8 خطوط حديثة، والقطار فائق السرعة يربط سوتشو بشانغهاي في 22 دقيقة فقط، مما يتيح الإقامة في سوتشو أو العكس بسهولة تامة.',
      en: 'Suzhou Metro features 8 lines reaching Huqiu Bridal City. 22-minute high-speed bullet train runs every 10 minutes to Shanghai Hongqiao.'
    },
    languageTips: {
      ar: 'في مجمع سوتشو الصناعي (SIP) وفنادق البحيرة الإنجليزية منتشرة. في أسواق فساتين الزفاف بهوتشيو، جهز صور التصاميم ومقاساتك، واستعن بتطبيق WeChat للترجمة الفورية أو بمترجم محلي.',
      en: 'English is spoken in SIP luxury hotels. In Huqiu bridal marts, bringing design sketches and using WeChat translation works wonders.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'MetroMan Suzhou'],
    recommendedHotels: [
      {
        id: 'w-suzhou-hotel',
        name: { ar: 'فندق دبليو سوتشو (W Suzhou)', en: 'W Suzhou', zh: '苏州W酒店' },
        category: { ar: 'فاخر 5 نجوم عصري', en: 'Luxury 5-Star Lakefront' },
        area: { ar: 'مجمع سوتشو الصناعي، بحيرة جينجي', en: 'Jinji Lakefront, SIP' },
        highlights: { ar: 'تصميم فائق العصرية يطل على بحيرة جينجي ونافورة سوتشو الموسيقية، ملاصق لمحطة المترو والمطاعم الفاخرة', en: 'Iconic lake views, directly connected to Suzhou Center Mall & Metro Lines 1/3' }
      },
      {
        id: 'hyatt-regency-suzhou',
        name: { ar: 'فندق حياة ريجنسي سوتشو (Hyatt Regency Suzhou)', en: 'Hyatt Regency Suzhou', zh: '苏州凯悦酒店' },
        category: { ar: 'أعمال فاخر 5 نجوم', en: 'Upscale Business 5-Star' },
        area: { ar: 'تايمز سكوير، مجمع SIP', en: 'Times Square, SIP' },
        highlights: { ar: 'ردهة أسطورية بارتفاع 29 طابقاً، متصل مباشرة بمحطة تايمز سكوير للمترو ومركز سوتشو الدولي للمعارض', en: 'Magnificent 29-story atrium, direct metro link to Suzhou Expo Center' }
      },
      {
        id: 'shangri-la-hotel-suzhou',
        name: { ar: 'فندق شانغريلا سوتشو (Shangri-La Suzhou)', en: 'Shangri-La Hotel Suzhou', zh: '苏州香格里拉大酒店' },
        category: { ar: 'فاخر 5 نجوم', en: 'Classic Luxury 5-Star' },
        area: { ar: 'منطقة التكنولوجيا الفائقة SND، مقاطعة هيشان', en: 'Suzhou New District (SND), Shishan Rd' },
        highlights: { ar: 'الأقرب لمنطقة هوتشيو لفساتين الزفاف وحدائق سوتشو الكلاسيكية مع غرف بانورامية واسعة', en: 'Closest luxury hotel to Huqiu Bridal City and historic Tiger Hill sights' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'wangshi-halal-suzhou',
        name: { ar: 'مطعم وانغ شي الإسلامي العريق (Wangshi Halal Beef & Mutton)', en: 'Wangshi Halal Restaurant Suzhou', zh: '王氏清真牛肉馆' },
        cuisineType: { ar: 'مأكولات إسلامية صينية ولحم بقري وضأن حلال', en: 'Traditional Chinese Muslim Halal' },
        isHalal: true,
        address: { ar: 'طريق شانتانغ / طريق شيشي، منطقة غوسو، سوتشو', en: 'Shantang St, Gusu District, Suzhou', zh: '江苏省苏州市姑苏区山塘街商圈' },
        recommendedFor: { ar: 'حساء اللحم البقري بالكمون، فطائر اللحم المقلية، ونودلز حلال شهية بجوار أسواق غوسو', en: 'Famous halal braised beef, lamb potstickers, and hot noodle bowls' }
      },
      {
        id: 'taipingfang-mosque-halal',
        name: { ar: 'مطعم ومطبخ جامع تايبينغفانغ التاريخي (Taipingfang Mosque Halal)', en: 'Taipingfang Mosque Halal Canteen', zh: '太平坊清真寺清真餐厅' },
        cuisineType: { ar: 'مأكولات إسلامية محلية 100%', en: 'Authentic Local Muslim Halal Dining' },
        isHalal: true,
        address: { ar: 'شارع شيدونغ، منطقة غوسو، سوتشو', en: 'Xidong St, Gusu District, Suzhou', zh: '江苏省苏州市姑苏区太平坊清真寺' },
        recommendedFor: { ar: 'صلاة الجمعة، وجبات حلال طازجة وموثوقة لرجال الأعمال العرب في سوتشو', en: 'Friday congregational prayers and guaranteed certified halal food' }
      },
      {
        id: 'arixiang-xinjiang-suzhou',
        name: { ar: 'مطعم أريشيانغ شينجيانغ الإسلامي (Arixiang Halal Xinjiang)', en: 'Arixiang Xinjiang Halal Restaurant', zh: '阿里香新疆清真风味餐厅' },
        cuisineType: { ar: 'مأكولات شينجيانغ ومشاوي حلال', en: 'Xinjiang Uyghur Halal Kebabs & Pilaf' },
        isHalal: true,
        address: { ar: 'مجمع تايمز سكوير، مجمع سوتشو الصناعي SIP', en: 'Times Square Commercial Center, SIP, Suzhou', zh: '江苏省苏州市工业园区时代广场' },
        recommendedFor: { ar: 'مشاوي لحم الضأن، خبز النان، أرز البلوف، وأجواء مناسبة لغداء عمل أنيق في مجمع SIP', en: 'Tender lamb skewers, Uyghur polo rice, and clean business lunch ambience' }
      }
    ],
    touristAttractions: [
      {
        id: 'humble-administrator-garden-unesco',
        name: { ar: 'حديقة المدير المتواضع الملكية (Humble Administrator Garden - 拙政园)', en: 'Humble Administrator Garden UNESCO Heritage', zh: '拙政园' },
        category: { ar: 'أشهر حديقة صينية كلاسيكية وتراث عالمي لليونسكو', en: 'UNESCO World Heritage Classical Ming Garden' },
        description: { ar: 'درة الحدائق الكلاسيكية في الصين بُنيت عام 1509، وتعتبر تحفة هندسية في تمازج البرك المائية وأشجار البامبو وجسور الحجر والقصور الخشبية.', en: 'China celebrated premier Ming-dynasty classical garden showcasing poetic waterscapes, pavilions, and lotus ponds.' },
        nearestMetro: 'Beiyuanlu Station (Line 4)'
      },
      {
        id: 'tiger-hill-pagoda',
        name: { ar: 'تلال النمر وبرج يونيان المائل (Tiger Hill - 虎丘山)', en: 'Tiger Hill & Leaning Pagoda (Huqiu)', zh: '虎丘山风景名胜区' },
        category: { ar: 'معلم تاريخي أثري عريق', en: 'Historical 2,500-Year-Old Landmark & Pagoda' },
        description: { ar: 'موقع أثري يمتد لأكثر من 2500 عام يضم برج سوتشو المائل الشهير (برج معبد يونيان) ويقع بجواره مباشرة سوق فساتين الزفاف العالمي.', en: 'Ancient scenic hill crowned by the 10th-century leaning Cloud Rock Pagoda, right next to Huqiu Bridal City.' }
      }
    ],
    essentialServices: [
      {
        id: 'suzhou-sip-customs-service',
        serviceType: { ar: 'الجمارك والتخليص الجمركي', en: 'Customs & Sourcing Services' },
        title: { ar: 'مركز خدمات الجمارك والتجارة بمجمع SIP (Suzhou SIP Customs Center)', en: 'Suzhou SIP Comprehensive Bonded Customs Center', zh: '苏州工业园区综合保税区通关大厅' },
        description: { ar: 'إنهاء المعاملات الجمركية لمنتجات التكنولوجيا العالية والشحن السريع لعينات فساتين الزفاف والمنسوجات.', en: 'High-tech goods declaration, express bonded clearance, and sample export dispatch.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'china-suzhou-bridal-expo',
      name: { ar: 'معرض الصين سوتشو الدولي لفساتين الزفاف ومستلزمات الأعراس', en: 'China (Suzhou) International Bridal Fair & Wedding Expo', zh: '中国（苏州）国际婚纱礼服及结婚用品博览会' },
      industry: 'Bridal Gowns, Wedding Wear & Photography Supplies',
      venue: { ar: 'مدينة هوتشيو لفساتين الزفاف ومجمع معارض سوتشو', en: 'Huqiu Bridal City Exhibition Center', zh: '虎丘婚纱城国际展厅' },
      occurrence: { ar: 'أبريل وأكتوبر سنوياً (مرتين في العام)', en: 'Biannually in April & October' },
      officialWebsite: 'http://www.huqiubridal.com',
      bestFor: ['Bridal Boutiques', 'Wedding Event Planners', 'Fashion Importers']
    },
    {
      id: 'suzhou-international-textile-fair',
      name: { ar: 'معرض سوتشو شينغتسي الدولي للمنسوجات والأقمشة', en: 'Jiangsu (Shengze) International Textile Expo', zh: '江苏（盛泽）国际纺织品博览会' },
      industry: 'Synthetic Silk, Functional Outerwear & Fabrics',
      venue: { ar: 'مركز معارض بلدة شينغتسي للمنسوجات، ووجيانغ', en: 'Shengze International Convention and Exhibition Center', zh: '盛泽国际会展中心' },
      occurrence: { ar: 'أكتوبر سنوياً', en: 'Annually in October' },
      officialWebsite: 'http://www.shengzetex.com',
      bestFor: ['Fabric Importers', 'Outerwear Brand Sourcing', 'Garment Factories']
    }
  ],
  relatedCitySlugs: ['shanghai', 'hangzhou', 'wuxi', 'shaoxing', 'nantong'],
  relatedProductSlugs: ['apparel', 'textiles', 'electronics'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل سوتشو التجاري الشامل | فساتين الزفاف، الحرير، والإلكترونيات الدقيقة', en: 'Suzhou Commercial Sourcing Guide | Bridal Gowns, Silk & High-Tech' },
    description: { ar: 'دليل الاستيراد من سوتشو: سوق هوتشيو الأضخم لفساتين الزفاف والأعراس، سوق شينغتسي للأقمشة، مصانع الحواسيب في كونشان، والفنادق والمطاعم الحلال.', en: 'Complete Suzhou sourcing guide: World #1 Huqiu Bridal City, Shengze silk textiles, Kunshan laptop electronics hub & business halal guide.' }
  }
};
