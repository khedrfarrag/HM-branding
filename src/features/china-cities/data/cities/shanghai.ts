import { ICity } from '../../types';

export const shanghaiCity: ICity = {
  id: 'shanghai',
  slug: 'shanghai',
  name: { ar: 'شانغهاي (شنغهاي)', en: 'Shanghai', zh: '上海' },
  province: { ar: 'بلدية شانغهاي المباشرة', en: 'Shanghai Municipality', zh: '上海市' },
  region: 'Yangtze River Delta',
  tier: 'tier-1',
  commercialImportanceScore: 99,
  heroImage: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'العاصمة المالية والتجارية الأولى للصين وأكبر ميناء حاويات في العالم (Yangshan Deep-Water Port). المركز العالمي للمقار الإقليمية للشركات متعددة الجنسيات، وأضخم مجمع معارض دولية (NECC Hongqiao)، وبوابة الاستيراد والتصدير الفاخر والآلات المتطورة والسيارات والكيماويات ومعدات الفنادق.',
    en: 'China premier commercial, financial and logistics powerhouse, home to the world #1 container port (Yangshan Deep-Water Port) and mega exhibition complex (NECC). Global headquarters capital and ultimate gateway for industrial machinery, automotive tech, cosmetics, hotel supplies, and trade financing.'
  },
  keyIndustries: ['logistics-shipping', 'trade-fairs', 'technology', 'auto-parts', 'machinery', 'cosmetics', 'medical-equipment'],
  primaryProducts: {
    ar: [
      'الخدمات اللوجستية والشحن البحري والجوي الدولي',
      'السيارات وقطع الغيار والمركبات الكهربائية الذكية',
      'الآلات الصناعية الثقيلة ومعدات الأتمتة الروبوتية',
      'الأجهزة الطبية والتكنولوجيا الحيوية المتقدمة',
      'الملابس والأقمشة والأزياء بالجملة (Qipu Rd & Fabrics)',
      'مستحضرات التجميل والعناية الشخصية (Oriental Beauty Valley)',
      'معدات الفنادق والمطاعم الفاخرة (Wanrun Mart)'
    ],
    en: [
      'Global Ocean & Air Freight Logistics',
      'Automotive Systems, EVs & Auto Parts',
      'Heavy Industrial Machinery & Robotic Automation',
      'Medical Devices & Advanced Bio-Pharma',
      'Fashion Apparel & Soft Spinning Fabrics Wholesale',
      'Cosmetics & Personal Care (Oriental Beauty Valley)',
      'Hospitality & Hotel Commercial Supplies'
    ]
  },
  bestFor: ['Global Importer', 'Trade Fair Attendee', 'Corporate Buyer', 'Logistics Business', 'High-Tech Sourcing'],
  districts: [
    {
      id: 'pudong-new-area',
      cityId: 'shanghai',
      name: { ar: 'منطقة بودونغ الجديدة ولوجياتزوي (Pudong New Area)', en: 'Pudong New Area & Lujiazui CBD', zh: '浦东新区 / 陆家嘴' },
      activityType: { ar: 'المركز المالي العالمي، وميناء وايغاوكياو للتجارة الحرة، ومجمع تشانغجيانغ التكنولوجي', en: 'Global Financial Hub, Waigaoqiao Free Trade Zone & Zhangjiang Hi-Tech' },
      mainProducts: ['خدمات مالية وتجارية', 'أشباه موصلات', 'شحن بحري دولي', 'سيارات تيسلا'],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Lujiazui Station (Line 2/14) / Zhangjiang Hi-Tech (Line 2)'
    },
    {
      id: 'qingpu-hongqiao-hub',
      cityId: 'shanghai',
      name: { ar: 'منطقة هونغكياو وتشينغبو للمعارض (Hongqiao & Qingpu)', en: 'Hongqiao Hub & Qingpu NECC Expo District', zh: '青浦区 / 虹桥枢纽 / 国家会展中心' },
      activityType: { ar: 'المركز الوطني للمعارض والمؤتمرات (NECC) ومحور النقل الجوي والحديدي السريع', en: 'National Exhibition and Convention Center (NECC) & Mega Transport Hub' },
      mainProducts: ['معارض دولية (CIIE)', 'آلات صناعية', 'سيارات', 'إلكترونيات استهلاكية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'East Xujing Station (Line 2) / Hongqiao Railway Station (Line 2/10/17)'
    },
    {
      id: 'jing-an-district',
      cityId: 'shanghai',
      name: { ar: 'منطقة جينغآن وشيبو (Jing\'an & Qipu Road)', en: 'Jing\'an District & Qipu Road Fashion Marts', zh: '静安区 / 七浦路' },
      activityType: { ar: 'أكبر تجمع لأسواق تجارة الملابس بالجملة في شانغهاي ومقار الشركات العالمية', en: 'Premier Apparel Wholesale Strip & High-End Commercial Offices' },
      mainProducts: ['ملابس نسائية ورجالية', 'ملابس أطفال', 'حقائب وإكسسوارات', 'أحذية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Tiantong Road Station (Line 10/12)'
    },
    {
      id: 'huangpu-district',
      cityId: 'shanghai',
      name: { ar: 'منطقة هوانغبو والبوند (Huangpu & The Bund)', en: 'Huangpu District & The Bund', zh: '黄浦区 / 外滩 / 南外滩' },
      activityType: { ar: 'قلب شانغهاي التاريخي والتجاري، أسواق الأقمشة والحرير، والشركات التجارية العريقة', en: 'Historic Commercial Core, Soft Spinning Fabric Markets & Old Foreign Trade Houses' },
      mainProducts: ['أقمشة وحرير وتفصيل أزياء', 'شاي صيني فاخر', 'مجوهرات وهدايا فندقية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'East Nanjing Road Station (Line 2/10) / Nanpu Bridge Station (Line 4)'
    },
    {
      id: 'minhang-district',
      cityId: 'shanghai',
      name: { ar: 'منطقة مينهانغ اللوجستية والصناعية (Minhang District)', en: 'Minhang Industrial & Logistics District', zh: '闵行区' },
      activityType: { ar: 'مستودعات الشحن الدولي، الآلات الثقيلة، ومجمع وانرون لأدوات الفنادق والمطاعم', en: 'Air Freight Warehouses, Heavy Machinery & Wanrun Hospitality Equipment Mart' },
      mainProducts: ['معدات فنادق ومطاعم', 'أجهزة كهرومنزلية', 'أدوات مطابخ تجارية', 'شحن جوي'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Qibao Station (Line 9) / Xinzhuang Station (Line 1/5)'
    },
    {
      id: 'jiading-auto-city',
      cityId: 'shanghai',
      name: { ar: 'مدينة جيادينغ الدولية للسيارات (Jiading Auto City)', en: 'Jiading International Auto City', zh: '嘉定区 / 上海国际汽车城' },
      activityType: { ar: 'عاصمة صناعة السيارات الصينية، مصانع سايك وفولكس فاجن وموردي قطع الغيار', en: 'China Premier Automotive Capital, SAIC, VW, NIO & Auto Parts Ecosystem' },
      mainProducts: ['قطع غيار سيارات', 'حساسات ومحركات كهربائية', 'بطاريات سيارات', 'أنظمة فرامل وتكييف'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Anting Station (Line 11)'
    },
    {
      id: 'fengxian-beauty-valley',
      cityId: 'shanghai',
      name: { ar: 'منطقة فنغشيان - وادي الجمال الشرقي (Fengxian Beauty Valley)', en: 'Fengxian Oriental Beauty Valley', zh: '奉贤区 / 东方美谷' },
      activityType: { ar: 'القاعدة الوطنية لتصنيع مستحضرات التجميل والعناية بالبشرة والعطور والصناعات الحيوية', en: 'National Cosmetics, Skincare, Fragrance & Bio-Beauty Industrial Cluster' },
      mainProducts: ['مستحضرات تجميل OEM/ODM', 'عبوات عطور وتجميل', 'منتجات عناية بالبشرة', 'أجهزة عناية شخصية'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Fengxian Xincheng Station (Line 5)'
    },
    {
      id: 'baoshan-logistics-optical',
      cityId: 'shanghai',
      name: { ar: 'منطقة باوشان والنظارات (Baoshan & Optical City)', en: 'Baoshan Port & Optical Wholesale Mart', zh: '宝山区 / 国际眼镜城' },
      activityType: { ar: 'مدينة النظارات الدولية وموانئ الحاويات النهرية ومصانع الحديد والصلب (Baosteel)', en: 'International Eyewear Wholesale Mart, River Container Terminals & Steel Trading' },
      mainProducts: ['نظارات طبية وشمسية وإطارات', 'عدسات بصرية', 'معدات فحص نظر', 'منتجات فولاذية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Shanghai Railway Station (Line 1/3/4)'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'shanghai-qipu-garment-complex',
      cityId: 'shanghai',
      name: { ar: 'مجمع شيبو لو لملابس الجملة (Qipu Road Fashion Strip)', en: 'Qipu Road Garment Wholesale Complex', zh: '七浦路服装批发市场群（兴旺/白马/联兴）' },
      type: 'Wholesale',
      category: 'Garments & Fashion',
      description: {
        ar: 'أشهر وأضخم شارع جملة لملابس الموضة في وسط شانغهاي يضم أكثر من 6 أبراج تجارية ضخمة متصلة (Xingwang International, Baima Garment City, Chao Baile, Xindalu). يقصده تجار البوتيكات من آسيا والشرق الأوسط للملابس النسائية العصرية والأزياء الكورية والملابس الجاهزة بأسعار منافسة وجودة متوسطة إلى ممتازة.',
        en: 'Shanghai most famous multi-tower fashion wholesale strip along Qipu Road (including Xingwang International, Baima Garment City, Superbaile, and Xindalu). Key sourcing ground for women fast fashion, Korean style apparel, streetwear, and boutique garments.'
      },
      address: { ar: 'تقاطع طريق شيبو مع طريق خنان الشمالي، منطقة جينغآن، شانغهاي', en: 'Intersection of Qipu Rd & North Henan Rd, Jingan District, Shanghai', zh: '上海市静安区七浦路与河南北路交汇处' },
      nearestMetro: 'Tiantong Road Station (Lines 10 & 12, Exit 6)',
      operatingHours: '06:30 - 16:30',
      moqLevel: 'Low'
    },
    {
      id: 'shanghai-south-bund-fabric',
      cityId: 'shanghai',
      name: { ar: 'سوق جنوب البوند للأقمشة والمنسوجات (South Bund Soft Spinning Mart)', en: 'South Bund Soft Spinning Material Market', zh: '南外滩轻纺面料市场' },
      type: 'Wholesale',
      category: 'Textiles & Fabrics',
      description: {
        ar: 'سوق الجملة المرجعي في شانغهاي للأقمشة والحرير الطبيعي والكشمير والصوف والكتان ومستلزمات الحياكة وتفصيل البدل والقمصان والفساتين. يمتد عبر ثلاثة طوابق ويعمل به كبار مصنعي الأقمشة في مقاطعتي جيانغسو وتشيجيانغ.',
        en: 'Shanghai premier fabric and tailoring wholesale market. Over 300 booths offering silk, cashmere, wool, cotton, linen, and custom bespoke garment manufacturing directly connected to Jiangsu and Zhejiang mills.'
      },
      address: { ar: '399 طريق لوجيابانغ، منطقة هوانغبو، شانغهاي', en: '399 Lujiabang Rd, Huangpu District, Shanghai', zh: '上海市黄浦区陆家浜路399号' },
      nearestMetro: 'Nanpu Bridge Station (Line 4, Exit 1)',
      operatingHours: '09:00 - 18:00',
      moqLevel: 'Low'
    },
    {
      id: 'shanghai-wanrun-hotel-supplies',
      cityId: 'shanghai',
      name: { ar: 'سوق وانرون الدولي لمعدات الفنادق والمطاعم (Wanrun Hotel Supplies)', en: 'Shanghai Wanrun International Hotel Equipment Mart', zh: '上海万润国际酒店用品市场' },
      type: 'Wholesale',
      category: 'Hospitality & Commercial Kitchen',
      description: {
        ar: 'أضخم مركز تجاري متخصص في شرق الصين لمعدات الفنادق الفاخرة والمطاعم والمقاهي. يغطي أدوات المطابخ المصنوعة من الفولاذ المقاوم للصدأ، ثلاجات العرض الصناعية، ماكينات القهوة الاحترافية، أواني البورسلين والزجاج الفاخر، والبياضات ومستلزمات الغرف الفندقية.',
        en: 'East China largest wholesale center for 5-star hotel and restaurant equipment. Spans commercial stainless steel kitchenware, commercial refrigeration, espresso machines, luxury tableware, ceramics, and guestroom linens.'
      },
      address: { ar: '2088 طريق جيوليو، منطقة مينهانغ / سونغجيانغ، شانغهاي', en: '2088 Jiuxin Rd, Minhang / Songjiang District, Shanghai', zh: '上海市九新公路2088号' },
      nearestMetro: 'Jiuting Station (Line 9) + 5 min taxi',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'Medium'
    },
    {
      id: 'shanghai-international-glasses-mall',
      cityId: 'shanghai',
      name: { ar: 'سوق شانغهاي الدولي للنظارات (Shanghai International Optical City)', en: 'Shanghai International Glasses City', zh: '上海国际眼镜城 / 三叶眼镜城' },
      type: 'Wholesale',
      category: 'Eyewear & Optical',
      description: {
        ar: 'المركز الرئيسي لتوزيع النظارات الطبية والشمسية والعدسات اللاصقة والإطارات ومعدات فحص العيون في شرق الصين بجوار محطة قطار شانغهاي الرئيسية، يربط مباشرة بمصانع دانيانغ ووينتشو.',
        en: 'Major optical wholesale center located right by Shanghai Railway Station, supplying prescription frames, designer sunglasses, lenses, optical cases, and ophthalmic testing equipment.'
      },
      address: { ar: '1688 طريق تشونغشان الشمالي، منطقة جينغآن، شانغهاي', en: '1688 North Zhongshan Rd, Jingan District, Shanghai', zh: '上海市静安区中山北路1688号（上海铁道大厦）' },
      nearestMetro: 'Shanghai Railway Station (Lines 1, 3 & 4, North Square)',
      operatingHours: '09:00 - 17:30',
      moqLevel: 'Low'
    },
    {
      id: 'shanghai-tianshan-tea-city',
      cityId: 'shanghai',
      name: { ar: 'سوق تيانشان الدولي للشاي (Shanghai Tianshan Tea City)', en: 'Shanghai Tianshan Tea Wholesale City', zh: '天山茶城' },
      type: 'Wholesale',
      category: 'Tea & Beverage Supplies',
      description: {
        ar: 'مجمع تجاري ضخم مكرس لجميع أنواع الشاي الصيني (أخضر، أسود، بو-إيره، أولونغ، أبيض) وأطقم الشاي الفخمة المصنوعة من فخار ييشينغ والبورسلين، وعبوات تغليف الشاي الفاخرة للتصدير.',
        en: 'Three-building tea wholesale plaza with hundreds of merchant stalls trading green, black, oolong, pu-erh, and jasmine teas alongside Yixing purple clay teapots, ceramics, and export gift packaging.'
      },
      address: { ar: '520 طريق تشونغشان الغربي، منطقة تشانغنينغ، شانغهاي', en: '520 West Zhongshan Rd, Changning District, Shanghai', zh: '上海市长宁区中山西路520号' },
      nearestMetro: 'Yan\'an West Road Station (Lines 3 & 4)',
      operatingHours: '09:00 - 18:30',
      moqLevel: 'Low'
    },
    {
      id: 'shanghai-jiuxing-hardware-materials',
      cityId: 'shanghai',
      name: { ar: 'سوق جيوشينغ الدولي لمواد البناء والأدوات (Jiuxing Building Materials & Hardware City)', en: 'Shanghai Jiuxing Hardware & Building Materials Mart', zh: '上海九星综合批发市场 / 九星城' },
      type: 'Wholesale',
      category: 'Building Materials & Hardware',
      description: {
        ar: 'أكبر سوق مدمج لمواد البناء والأدوات الصحية، بلاط السيراميك، الأبواب والنوافذ، أدوات السباكة والكهرباء، ومعدات الإنارة في شانغهاي تم تجديده كمجمع لوجستي ذكي عملاق.',
        en: 'Giant newly redeveloped mega-complex for hardware, plumbing, ceramic tiles, sanitary ware, electrical switches, decorative panels, and building materials.'
      },
      address: { ar: 'طريق جيوشينغ، منطقة مينهانغ، شانغهاي', en: 'Jiuxing Rd, Minhang District, Shanghai', zh: '上海市闵行区九星路（九星城）' },
      nearestMetro: 'Xingzhong Road Station (Line 9)',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'Medium'
    },
    {
      id: 'shanghai-cybermart-electronics',
      cityId: 'shanghai',
      name: { ar: 'مركز سايبرمارت وهواهاي للإلكترونيات والذكاء الاصطناعي (Shanghai Cybermart)', en: 'Shanghai Cybermart Digital & Tech Plaza', zh: '赛博数码广场（淮海中路）' },
      type: 'Wholesale',
      category: 'Electronics & Gadgets',
      description: {
        ar: 'سوق متخصص لأجهزة الكمبيوتر المحمولة، وحدات المعالجة، معدات الواقع الافتراضي، كاميرات المراقبة، والإلكترونيات الاستهلاكية الذكية في قلب شارع هواهاي التجاري.',
        en: 'Prominent digital tech mall located on Huaihai Middle Road featuring enterprise IT hardware, PC peripherals, gaming rigs, VR equipment, and smart consumer gadgets.'
      },
      address: { ar: '1 طريق هواهاي الوسطى، منطقة هوانغبو، شانغهاي', en: '1 Huaihai Middle Rd, Huangpu District, Shanghai', zh: '上海市黄浦区淮海中路1号' },
      nearestMetro: 'Dashijie Station (Line 8 / Line 14)',
      operatingHours: '10:00 - 20:00',
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'zhangjiang-hi-tech-park',
      cityId: 'shanghai',
      name: { ar: 'مجمع تشانغجيانغ للتكنولوجيا العالية وادي السيليكون الصيني (Zhangjiang Hi-Tech)', en: 'Zhangjiang Hi-Tech Park & Science City', zh: '张江高科技园区 / 张江科学城' },
      clusterSpecialization: { ar: 'تصميم وتصنيع أشباه الموصلات، الذكاء الاصطناعي، الروبوتات، والأدوية الحيوية', en: 'Semiconductors (SMIC), AI, Advanced Robotics & Biopharmaceuticals' },
      factoryTypes: ['Semiconductor Fabs', 'AI Research Labs', 'Biotech Cleanrooms'],
      keyProducts: ['رقائق إلكترونية ومعالجات', 'برمجيات وخوارزميات ذكاء اصطناعي', 'أجهزة طبية متطورة'],
      specializationLevel: 'High'
    },
    {
      id: 'jiading-auto-industrial-base',
      cityId: 'shanghai',
      name: { ar: 'القاعدة الصناعية لسيارات جيادينغ (Jiading Auto Industrial Cluster)', en: 'Jiading Auto Manufacturing & Component Base', zh: '嘉定汽车产业集群（安亭）' },
      clusterSpecialization: { ar: 'صناعة السيارات المتكاملة، محركات الطاقة الجديدة، وأنظمة القيادة الذاتية وقطع الغيار', en: 'Automobile Assembly (SAIC-VW, NIO), EV Powertrains & Autonomous Driving Systems' },
      factoryTypes: ['Automated Assembly Plants', 'Tier-1 Auto Parts Manufacturers', 'Stamping & Injection Molds'],
      keyProducts: ['سيارات كاملة وسيارات كهربائية', 'محركات كهربائية وبطاريات', 'أجهزة فرامل وأنظمة تعليق', 'إلكترونيات مقصورة القيادة'],
      specializationLevel: 'High'
    },
    {
      id: 'oriental-beauty-valley-fengxian',
      cityId: 'shanghai',
      name: { ar: 'وادي الجمال الشرقي لمستحضرات التجميل (Oriental Beauty Valley)', en: 'Fengxian Oriental Beauty Valley Industrial Park', zh: '东方美谷（奉贤化妆品产业园）' },
      clusterSpecialization: { ar: 'الصناعات التجميلية العالمية وتصنيع العطور ومستحضرات العناية بالبشرة بنظام OEM/ODM', en: 'Cosmetics OEM/ODM, Skincare Formulations, Fragrance & Beauty Packaging' },
      factoryTypes: ['GMP Cosmetics Factories', 'Aerosol & Bottle Packaging Plants', 'R&D Labs'],
      keyProducts: ['كريمات وسيرومات عناية بالبشرة', 'مكياج وأحمر شفاه وماسكارا', 'عبوات زجاجية وبلاستيكية للتجميل', 'عطور وزيوت عطرية'],
      specializationLevel: 'High'
    },
    {
      id: 'pudong-lingang-special-area',
      cityId: 'shanghai',
      name: { ar: 'منطقة لينغانغ الصناعية الحرة المتطورة (Lingang Special Area & Tesla Gigafactory)', en: 'Lingang Special Area & Advanced Heavy Manufacturing Base', zh: '临港新片区（特斯拉超级工厂/重型装备）' },
      clusterSpecialization: { ar: 'مصنع تيسلا العملاق (Gigafactory 3)، تصنيع السفن الضخمة، توربينات الرياح، ومعدات الطاقة النووية', en: 'Tesla Gigafactory Shanghai, Commercial Shipbuilding, Aero Engines & Clean Energy Gear' },
      factoryTypes: ['Mega Automated Gigafactories', 'Heavy Machinery Shipyards', 'Clean Energy Plants'],
      keyProducts: ['سيارات تيسلا الكهربائية', 'محركات طائرات وسفن ضخمة', 'توربينات توليد طاقة', 'معدات اتصالات وموانئ'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'sh-advanced-machinery-robotics',
      productName: { ar: 'الآلات الصناعية المتطورة والروبوتات وخطوط الإنتاج', en: 'Advanced Industrial Machinery, Robotics & SMT Automation' },
      industryCategory: 'machinery',
      whyThisCity: { ar: 'المركز التكنولوجي الأول للصين وتضم مقرات كبرى شركات الأتمتة ومعدات التصنيع الدقيقة والموانئ المتصلة عالمياً.', en: 'China premier technology capital hosting top robotics, automation suppliers and world-class industrial machinery manufacturers.' },
      mainManufacturingArea: { ar: 'بودونغ لينغانغ، مينهانغ، وسونغجيانغ', en: 'Pudong Lingang, Minhang, Songjiang' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'sh-auto-parts-ev',
      productName: { ar: 'قطع غيار السيارات ومكونات المركبات الكهربائية', en: 'Automotive Parts, EV Batteries & Vehicle Electronics' },
      industryCategory: 'auto-parts',
      whyThisCity: { ar: 'قاعدة جيادينغ ومصانع سايك وفولكس فاجن وتيسلا تجعل شانغهاي المصدر الأكبر لقطع الغيار المعتمدة دولياً.', en: 'Jiading Auto City and Tesla/SAIC supply ecosystem offer world-standard automotive OEM & aftermarket components.' },
      mainManufacturingArea: { ar: 'جيادينغ (Anting) وبودونغ (Lingang)', en: 'Jiading Anting & Pudong Lingang' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'sh-cosmetics-skincare',
      productName: { ar: 'مستحضرات التجميل والعناية بالبشرة وعبوات التغليف الفاخرة', en: 'Cosmetics, Skincare Formulations & Luxury Cosmetic Packaging' },
      industryCategory: 'cosmetics',
      whyThisCity: { ar: 'وادي الجمال الشرقي في فنغشيان يضم أكثر من 400 مصنع معتمد عالمياً لإنتاج الماركات الخاصة OEM/ODM.', en: 'Oriental Beauty Valley hosts over 400 certified cosmetics plants with state-of-the-art OEM/ODM capacity.' },
      mainManufacturingArea: { ar: 'منطقة فنغشيان (Fengxian)', en: 'Fengxian Oriental Beauty Valley' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'sh-hotel-restaurant-supplies',
      productName: { ar: 'معدات الفنادق الفاخرة وأجهزة المطابخ التجارية وأطقم المائدة', en: 'Hospitality Equipment, Commercial Kitchenware & Tableware' },
      industryCategory: 'hospitality',
      whyThisCity: { ar: 'سوق وانرون ومعارض Hotelex السنوية تجعل شانغهاي المركز الرئيسي لتجهيز الفنادق 5 نجوم والمطاعم والمقاهي.', en: 'Shanghai Wanrun Mart and annual Hotelex trade expo make Shanghai the global benchmark for hotel procurement.' },
      mainManufacturingArea: { ar: 'مينهانغ وسونغجيانغ', en: 'Minhang & Songjiang' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Shanghai Pudong International Airport (PVG - أضخم مطار شحن جوي في الصين والبوابة العالمية الأولى)',
      'Shanghai Hongqiao International Airport (SHA - متصل بالقطار السريع والرحلات الإقليمية والمعارض)'
    ],
    seaPorts: [
      'Yangshan Deep-Water Port (洋山深水港 - أضخم ميناء حاويات في العالم متصل بجسر دونغهاي المائي 32 كم)',
      'Waigaoqiao Port (外高桥港区 - ميناء الحاويات النهري والبحري في منطقة التجارة الحرة)',
      'Wusongkou International Cruise Terminal (Baoshan)'
    ],
    highSpeedRailwayStations: [
      'Shanghai Hongqiao Railway Station (上海虹桥站 - أضخم محطة قطارات سريعة في آسيا)',
      'Shanghai Railway Station (上海站 - وسط المدينة)',
      'Shanghai South Railway Station (上海南站)'
    ],
    seaFreightSuitability: {
      ar: 'الميناء رقم 1 في العالم للعام الرابع عشر على التوالي بمناولة تتجاوز 49 مليون حاوية TEU سنوياً، برحلات بحرية يومية مباشرة لكافة موانئ الشرق الأوسط والخليج وأوروبا وأمريكا.',
      en: 'Ranked world #1 container port for 14 consecutive years handling over 49M TEUs annually, with daily non-stop line sailings to all Arabian Gulf, Red Sea, European, and American terminals.'
    },
    airFreightSuitability: {
      ar: 'مطار بودونغ (PVG) هو المركز رقم 3 عالمياً في الشحن الجوي مع رحلات شحن بضائع مباشرة على مدار الساعة.',
      en: 'Pudong (PVG) ranks world top-3 air cargo terminal with 24/7 dedicated freighter flights across all continents.'
    },
    primaryCargoRoutes: {
      ar: [
        'خطوط ملاحية مباشرة إلى موانئ جبل علي، جدة، السخنة، الدمام، صلالة، وحمد (ترانزيت 14-22 يوماً)',
        'رحلات شحن جوي يومية مباشرة إلى دبي، الرياض، الدوحة، القاهرة، وإسطنبول',
        'قطارات الشحن السريع إلى آسيا الوسطى وأوروبا (Yixin\'ou & China-Europe Railway Express)'
      ],
      en: [
        'Direct daily container liners to Jebel Ali, Jeddah, Sokhna, Dammam, Salalah, and Hamad (14-22 days transit)',
        'Daily dedicated cargo flights to Dubai (DXB), Riyadh (RUH), Doha (DOH), and Cairo (CAI)',
        'China-Europe Railway Express freight routes departing Shanghai'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['أبريل', 'مايو', 'سبتمبر', 'أكتوبر', 'نوفمبر'],
    suggestedStayDays: 5,
    weatherSummary: {
      ar: 'أربعة فصول واضحة؛ الربيع والخريف معتدلان ومثاليان جداً لحضور المعارض، الصيف حار ورطب وتكثر فيه الأمطار، الشتاء بارد مع رياح بحرية.',
      en: 'Four distinct seasons: Spring and Autumn offer mild, pleasant weather ideal for trade fairs; Summer is warm and humid; Winter is chilly.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة هونغكياو وتينغبو (Hongqiao & NECC): الأنسب لزوار المعارض الدولية المقامة في المركز الوطني NECC وقرب المطار والقطار السريع.',
        en: 'Hongqiao / NECC Area: Best for trade fair attendees visiting National Exhibition and Convention Center.'
      },
      {
        ar: 'منطقة لوجياتزوي وبودونغ (Lujiazui & Pudong CBD): فنادق الأعمال الفاخرة، مقرات البنوك، وإطلالات بانورامية على برج لؤلؤة الشرق والبوند.',
        en: 'Lujiazui Pudong: 5-star international business hotels and banking headquarters with iconic skyline views.'
      },
      {
        ar: 'منطقة ساحة الشعب وشارع نانجينغ (People\'s Square & Nanjing Rd): موقع وسطي ممتاز للتسوق وسهولة الوصول لأسواق شيبو للقطارات.',
        en: 'People\'s Square / Nanjing Road: Central downtown location with direct metro access to markets.'
      }
    ],
    localTransportAdvice: {
      ar: 'مترو شانغهاي هو الأطول والأكثر تطوراً في العالم بـ 20 خطاً يغطي كل زاوية في المدينة. استخدم تطبيق Shanghai Metro أو Alipay لتمرير كود المترو مباشرة. كما يتوفر تطبيق DiDi لسيارات الأجرة بسهولة.',
      en: 'Shanghai Metro is the world longest metro network with 20 lines reaching every market and airport. Use Alipay Transport QR or DiDi for instant ride-hailing.'
    },
    languageTips: {
      ar: 'اللغة الإنجليزية شائعة جداً في فنادق الـ 5 نجوم والمراكز المالية والمعارض الدولية، ولكن في أسواق الجملة الشعبية (مثل شيبو أو سوق الأقمشة) ستحتاج لتطبيق الترجمة WeChat / Baidu Translate للتفاوض بالأرقام.',
      en: 'English is widely spoken in luxury hotels, banks, and exhibition centers. In local wholesale markets, use WeChat translation or an interpreter.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'MetroMan Shanghai', 'Apple Maps / Baidu Maps'],
    recommendedHotels: [
      {
        id: 'intercontinental-shanghai-necc',
        name: { ar: 'فندق إنتركونتيننتال المركز الوطني للمعارض (InterContinental Shanghai NECC)', en: 'InterContinental Shanghai NECC', zh: '上海国家会展中心洲际酒店' },
        category: { ar: 'فاخر 5 نجوم - ملاصق للمعارض', en: 'Luxury 5-Star - Directly Inside NECC' },
        area: { ar: 'المركز الوطني للمعارض NECC، هونغكياو', en: 'National Exhibition Center, Qingpu / Hongqiao' },
        highlights: { ar: 'الفندق الوحيد الواقع مباشرة داخل مجمع معارض CIIE وAutomechanika، مدخل خاص لصالات العرض وخدمات رجال أعمال فائقة', en: 'Direct enclosed skybridge access into all NECC exhibition halls, VIP lounge, concierge translation' }
      },
      {
        id: 'the-ritz-carlton-shanghai-pudong',
        name: { ar: 'فندق ريتز كارلتون شانغهاي بودونغ (The Ritz-Carlton Shanghai Pudong)', en: 'The Ritz-Carlton Shanghai Pudong', zh: '上海浦东丽思卡尔顿酒店' },
        category: { ar: 'فاخر 5 نجوم فائق', en: 'Ultra-Luxury 5-Star' },
        area: { ar: 'مركز لوجياتزوي المالي IFC، بودونغ', en: 'Lujiazui Financial Center (IFC Mall), Pudong' },
        highlights: { ar: 'إطلالة مباشرة على برج لؤلؤة الشرق ونهر هوانغبو، خدمات مصرفية وتجارية رفيعة المستوى', en: 'Iconic panoramic Bund views, directly linked to Shanghai IFC Mall & Metro Lines 2/14' }
      },
      {
        id: 'grand-hyatt-shanghai',
        name: { ar: 'فندق جراند حياة شانغهاي - برج جينماو (Grand Hyatt Shanghai)', en: 'Grand Hyatt Shanghai (Jin Mao Tower)', zh: '上海金茂君悦大酒店' },
        category: { ar: 'فاخر 5 نجوم ناطحة سحاب', en: 'Skyline Luxury 5-Star' },
        area: { ar: 'برج جينماو، لوجياتزوي', en: 'Jin Mao Tower, Lujiazui, Pudong' },
        highlights: { ar: 'يقع في الطوابق 53 إلى 87 من برج جينماو الشهير مع ردهة داخلية أسطورية وقاعات اجتماعات تنفيذية', en: 'Spectacular 33-story atrium, executive business facilities, central Lujiazui location' }
      },
      {
        id: 'radisson-collection-hyland',
        name: { ar: 'فندق راديسون كوليكشن هايلاند شانغهاي (Radisson Collection Hyland)', en: 'Radisson Collection Hotel Hyland Shanghai', zh: '上海海仑宾馆' },
        category: { ar: 'أعمال 4.5 نجوم وسطي ممتاز', en: 'Upscale Business 4.5-Star' },
        area: { ar: 'شارع نانجينغ للمشاة، هوانغبو', en: 'Nanjing Road Pedestrian Street, Huangpu' },
        highlights: { ar: 'موقع استراتيجي وسط مراكز الأعمال وبالقرب من سوق شيبو للملابس والبوند ومحطة المترو الرئيسية', en: 'Prime spot right on Nanjing East Rd, easy walking to Bund and quick metro to wholesale marts' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'barbar-arabic-restaurant-shanghai',
        name: { ar: 'مطعم بربر اللبناني العربي (Barbar Lebanese & Arab Restaurant)', en: 'Barbar Lebanese & Middle Eastern Restaurant', zh: '巴巴尔黎巴嫩中东清真餐厅' },
        cuisineType: { ar: 'مأكولات لبنانية وعربية وشامية وحلال معتمد', en: 'Authentic Lebanese, Levantine & Halal Grills' },
        isHalal: true,
        address: { ar: 'طريق هواهاي الأوسط / طريق وويي، شانغهاي', en: 'Huaihai Middle Rd / Wuyi Rd, Shanghai', zh: '上海市淮海中路商圈 / 长宁区武夷路' },
        recommendedFor: { ar: 'مشاوي مشكلة، حمص، تبولة، شاورما، أرز باللحم، وأجواء عائلية ورجال أعمال عرب', en: 'Mixed charcoal grills, shawarma, hummus, falafel & halal business banquets' }
      },
      {
        id: 'sultan-turkish-shanghai',
        name: { ar: 'مطعم سلطان التركي للمأكولات الشرقية (Sultan Turkish Restaurant)', en: 'Sultan Turkish Restaurant Shanghai', zh: '苏丹土耳其清真餐厅' },
        cuisineType: { ar: 'مأكولات تركية وعثمانية وحلال', en: 'Traditional Turkish & Mediterranean Halal' },
        isHalal: true,
        address: { ar: '268 طريق تشانغشو، منطقة شوهوي، شانغهاي', en: '268 Changshu Rd, Xuhui District, Shanghai', zh: '上海市徐汇区常熟路268号' },
        recommendedFor: { ar: 'كباب إسكندر، فطائر تركية بالجبن، مشاوي الأضنة، شاي وحلويات بقلاوة تركية', en: 'Iskender kebab, Adana kebab, Turkish pide, and baklava' }
      },
      {
        id: 'yershari-xinjiang-shanghai',
        name: { ar: 'مطعم ييرشاري شينجيانغ الإسلامي الشهير (Yershari Halal Xinjiang)', en: 'Yershari Xinjiang Halal Restaurant', zh: '耶里夏丽西域清真餐厅（陆家嘴/徐家汇店）' },
        cuisineType: { ar: 'مأكولات شينجيانغ وإسلامية صينية حلال معتمدة', en: 'Xinjiang Uyghur & Northwest Chinese Halal' },
        isHalal: true,
        address: { ar: 'فروع متعددة: مول سوبر براند لوجياتزوي ومجمع شوجياهوي، شانغهاي', en: 'Super Brand Mall (Lujiazui) & Grand Gateway (Xujiahui), Shanghai', zh: '上海市浦东新区陆家嘴正大广场 / 徐家汇' },
        recommendedFor: { ar: 'لحم ضأن مشوي على الفحم، خبز النان الساخن، أرز البلوف باللحم، ودجاج دابانجي', en: 'Roast lamb skewers, Uyghur pilaf, big plate chicken (Dapanji), and naan' }
      },
      {
        id: 'shanghai-xiaotaoyuan-halal',
        name: { ar: 'مطعم ومطبخ جامع شياوتاويوان التاريخي (Xiaotaoyuan Halal Canteen)', en: 'Xiaotaoyuan Mosque Halal Dining Hall', zh: '小桃园清真寺清真餐厅' },
        cuisineType: { ar: 'مأكولات إسلامية محلية صينية حلال 100%', en: 'Authentic Local Chinese Muslim Cuisine' },
        isHalal: true,
        address: { ar: '52 شارع شياوتاويوان، منطقة هوانغبو، شانغهاي', en: '52 Xiaotaoyuan St, Huangpu District, Shanghai', zh: '上海市黄浦区小桃园街52号' },
        recommendedFor: { ar: 'لحم بقري مسلوق، حساء لحم الضأن، نودلز إسلامية، وموقع ملاصق لأقدم مساجد شانغهاي', en: 'Traditional Chinese Muslim beef soup, hand-pulled noodles, adjacent to historical mosque' }
      }
    ],
    touristAttractions: [
      {
        id: 'the-bund-shanghai',
        name: { ar: 'كورنيش البوند التاريخي (The Bund - 外滩)', en: 'The Bund Waterfront Promenade', zh: '外滩' },
        category: { ar: 'معلم تاريخي ومعماري عالمي', en: 'World-Renowned Historic Landmark' },
        description: { ar: 'شريط واجهة شانغهاي البحرية الأيقوني الممتد على طول نهر هوانغبو، يضم 52 مبنى كلاسيكياً تاريخياً يقابله أفق ناطحات سحاب لوجياتزوي الساحر.', en: 'World famous 1.5km waterfront promenade featuring 52 colonial European buildings facing the futuristic Pudong skyline.' },
        nearestMetro: 'East Nanjing Road Station (Lines 2 & 10)'
      },
      {
        id: 'oriental-pearl-tower',
        name: { ar: 'برج لؤلؤة الشرق التلفزيوني (Oriental Pearl Tower)', en: 'Oriental Pearl TV Tower', zh: '东方明珠广播电视塔' },
        category: { ar: 'رمز شانغهاي الحديث', en: 'Futuristic Modern Icon' },
        description: { ar: 'البرج الأيقوني بارتفاع 468 متراً مع منصات مراقبة زجاجية معلقة ومطعم دوار ومتحف تاريخ شانغهاي.', en: '468m iconic communications tower with transparent skywalk observation sphere offering 360-degree city views.' },
        nearestMetro: 'Lujiazui Station (Lines 2 & 14)'
      },
      {
        id: 'yu-garden-bazaar',
        name: { ar: 'حديقة يو وبازار شنغهاي القديم (Yu Garden & City God Temple)', en: 'Yu Garden & Yuyuan Commercial Bazaar', zh: '豫园 / 城隍庙商业街' },
        category: { ar: 'تراث صيني عريق وتسوق تقليدي', en: 'Classical Ming Dynasty Garden & Heritage Bazaar' },
        description: { ar: 'حديقة تاريخية تعود لأسرة مينغ محاطة بأسواق شعبية تقليدية للمشغولات اليدوية والذهب والحرير والشاي والوجبات الخفيفة.', en: 'Historic 16th-century Ming classical garden surrounded by traditional Chinese shopping courtyards.' },
        nearestMetro: 'Yuyuan Garden Station (Lines 10 & 14)'
      }
    ],
    essentialServices: [
      {
        id: 'shanghai-boc-bund-forex',
        serviceType: { ar: 'خدمات الصرافة والتحويلات الدولية', en: 'Banking & Foreign Exchange' },
        title: { ar: 'فرع بنك الصين الرئيسي في البوند (Bank of China Bund Flagship)', en: 'Bank of China Bund Forex & Trade Center', zh: '中国银行上海市分行（外滩大楼）' },
        description: { ar: 'أكبر مركز مصرفي لتبديل العملات الأجنبية وفتح الاعتمادات المستندية التجارية الدولية والتسويات النقدية باليوان.', en: 'Major banking branch for currency exchange, corporate trade LC issuance, and international business banking.' }
      },
      {
        id: 'shanghai-entry-exit-bureau',
        serviceType: { ar: 'شؤون التأشيرات وتصاريح الإقامة التجارية', en: 'Visa Extension & Immigration Services' },
        title: { ar: 'مكتب إدارة الدخول والخروج ببلدية شانغهاي (Shanghai Exit-Entry Administration)', en: 'Shanghai Exit-Entry Administration Bureau', zh: '上海市公安局出入境管理局' },
        description: { ar: 'المقر المركزي لتمديد التأشيرات التجارية (M Visa)، تجديد الإقامات وتصاريح الدخول لرجال الأعمال.', en: 'Central office for foreign business visa extensions (M Visa), residence permits, and consular services.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'ciie-shanghai',
      name: { ar: 'معرض الصين الدولي للاستيراد (CIIE)', en: 'China International Import Expo (CIIE)', zh: '中国国际进口博览会（进博会）' },
      industry: 'Multi-Industry / Global Import & Trade',
      venue: { ar: 'المركز الوطني للمعارض والمؤتمرات (NECC Shanghai)', en: 'National Exhibition and Convention Center (Shanghai)', zh: '国家会展中心（上海）' },
      occurrence: { ar: '5-10 نوفمبر سنوياً', en: 'Annually in November (Nov 5-10)' },
      officialWebsite: 'https://www.ciie.org',
      bestFor: ['Global Importers', 'Corporate Exporters', 'Government Delegations', 'Tech Innovators']
    },
    {
      id: 'automechanika-shanghai',
      name: { ar: 'معرض أوتوميكانيكا شانغهاي الدولي لقطع غيار السيارات (Automechanika Shanghai)', en: 'Automechanika Shanghai', zh: '上海国际汽车零配件、维修检测诊断设备及服务用品展览会' },
      industry: 'Auto Parts, Diagnostics & Aftermarket',
      venue: { ar: 'المركز الوطني للمعارض والمؤتمرات (NECC Shanghai)', en: 'National Exhibition and Convention Center (NECC)', zh: '国家会展中心（上海）' },
      occurrence: { ar: 'ديسمبر سنوياً', en: 'Annually in December' },
      officialWebsite: 'https://automechanika-shanghai.hk.messefrankfurt.com',
      bestFor: ['Auto Parts Importers', 'Automotive Aftermarket Traders', 'Car Electronics Buyers']
    },
    {
      id: 'furniture-china-shanghai',
      name: { ar: 'معرض شانغهاي الدولي للأثاث الفاخر (Furniture China / Maison Shanghai)', en: 'Furniture China & Maison Shanghai', zh: '中国国际家具展览会（上海家具展）' },
      industry: 'Furniture, Home Decor & Interior Design',
      venue: { ar: 'مركز شانغهاي الدولي الجديد للمعارض (SNIEC Pudong)', en: 'Shanghai New International Expo Centre (SNIEC)', zh: '上海新国际博览中心（浦东）' },
      occurrence: { ar: 'سبتمبر سنوياً', en: 'Annually in September' },
      officialWebsite: 'https://www.furniture-china.cn',
      bestFor: ['Luxury Furniture Buyers', 'Interior Designers', 'Home Decor Retailers']
    },
    {
      id: 'hotelex-shanghai',
      name: { ar: 'معرض هوتيليكس الدولي لمعدات الفنادق والمقاهي (HOTELEX Shanghai)', en: 'HOTELEX Shanghai International Hospitality Expo', zh: '上海国际酒店及餐饮业博览会' },
      industry: 'Hospitality, Catering Equipment & Specialty Coffee',
      venue: { ar: 'المركز الوطني للمعارض NECC شانغهاي', en: 'National Exhibition and Convention Center (NECC)', zh: '国家会展中心（上海）' },
      occurrence: { ar: 'مارس / أبريل سنوياً', en: 'Annually in March / April' },
      officialWebsite: 'https://www.hotelex.cn',
      bestFor: ['Hotel Equipment Importers', 'Restaurant Chain Owners', 'Coffee & Baking Sourcing']
    },
    {
      id: 'chinaplas-shanghai',
      name: { ar: 'معرض تشاينابلاس الدولي للبلاستيك والمطاط (Chinaplas)', en: 'Chinaplas International Exhibition on Plastics & Rubber', zh: '中国国际塑料橡胶工业展览会' },
      industry: 'Plastics, Raw Polymers & Moulding Machinery',
      venue: { ar: 'المركز الوطني للمعارض NECC (بالتناوب مع شنجن)', en: 'National Exhibition and Convention Center (NECC)', zh: '国家会展中心（上海）' },
      occurrence: { ar: 'أبريل سنوياً (بالتناوب مع شنجن)', en: 'Annually in April (Rotates Shanghai / Shenzhen)' },
      officialWebsite: 'https://www.chinaplasonline.com',
      bestFor: ['Plastic Raw Materials Buyers', 'Injection Moulding Buyers', 'Packaging Manufacturers']
    }
  ],
  relatedCitySlugs: ['ningbo', 'suzhou', 'hangzhou', 'cixi', 'shaoxing'],
  relatedProductSlugs: ['logistics', 'auto-parts', 'machinery', 'cosmetics'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل شانغهاي التجاري الشامل | موانئ الحاويات، معارض NECC، وأسواق الجملة', en: 'Shanghai Commercial Sourcing Guide | World Container Port, NECC Fairs & Wholesale' },
    description: { ar: 'دليل شامل للاستيراد من شانغهاي: ميناء يانغشان الأول عالمياً، مجمع معارض NECC (معرض CIIE)، أسواق ملابس شيبو، معدات الفنادق وانرون، والمطاعم الحلال.', en: 'Exhaustive trade guide to Shanghai: World #1 Yangshan container port, NECC expo complex (CIIE & Automechanika), Qipu apparel marts, Wanrun hotel supplies & halal dining.' }
  }
};
