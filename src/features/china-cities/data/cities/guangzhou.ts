import { ICity } from '../../types';

export const guangzhouCity: ICity = {
  id: 'guangzhou',
  slug: 'guangzhou',
  name: {
    ar: 'جوانزو (كوانزو)',
    en: 'Guangzhou',
    zh: '广州'
  },
  province: {
    ar: 'غوانغدونغ',
    en: 'Guangdong'
  },
  region: 'Pearl River Delta',
  tier: 'tier-1',
  commercialImportanceScore: 100,
  heroImage: 'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?auto=format&fit=crop&w=1200&q=80',
  skylineImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'العاصمة التجارية التاريخية الأولى لجنوب الصين ومقاطعة غوانغدونغ. حاضنة معرض كانتون الدولي (Canton Fair) وعاصمة التصدير الأضخم في العالم لأسواق الجملة: الملابس والأزياء السريعة، الأقمشة ومستلزمات الحياكة، الساعات، الحقائب الجلدية، مستحضرات التجميل، قطع غيار السيارات، والهدايا.',
    en: 'The historic commercial capital of South China and global trade hub. Home of the world-renowned Canton Fair and the planet’s largest wholesale clusters for apparel, fabrics, watches, leather luggage, cosmetics, auto parts, and promotional gifts.'
  },
  keyIndustries: [
    'trade-fairs',
    'apparel-fashion',
    'textiles-fabrics',
    'leather-goods-bags',
    'watches-horology',
    'cosmetics-beauty',
    'auto-parts',
    'hotel-supplies',
    'jewelry-crafts'
  ],
  primaryProducts: {
    ar: [
      'الملابس الجاهزة والفساتين والأزياء السريعة (شيسانهانغ وشاهي وبايما)',
      'الأقمشة والحرير وخامات النسيج ومستلزمات الحياكة (سوق جونغدا)',
      'ساعات اليد ومحركات الساعات والإكسسوارات (سوق جانشي)',
      'الحقائب والجلديات ومستلزمات السفر (مركز باييون وشيلينغ)',
      'مستحضرات التجميل والمكياج والعطور (مجمع شينغفا بلازا)',
      'قطع غيار السيارات ومستلزمات التعديل والصيانة (قوانغيوان دونغ)',
      'الهدايا والتحف والديكورات المنزلية والألعاب (وانلينغ بلازا)',
      'معدات الفنادق والمطاعم وأدوات الضيافة (سوق شالوكسي)'
    ],
    en: [
      'Ready-to-Wear Apparel, Fast Fashion & Dresses (Shisanhang, Shahe, Baima)',
      'Fabrics, Silk, Textile Materials & Sewing Trims (Zhongda Market)',
      'Wristwatches, Horology Movements & Straps (Zhanxi Watch Center)',
      'Leather Handbags, Luggage & Wallets (Baiyun Leather City & Shiling)',
      'Cosmetics, Skincare, Hair Salon Equipment & Perfumes (Xingfa Plaza)',
      'Auto Parts, Accessories & Vehicle Upgrade Components (Guangyuan East)',
      'Home Decor, Gifts, Toys & Seasonal Ornaments (Wanling Plaza)',
      'Commercial Hotel Supplies, Kitchenware & Hospitality Gear (Shaxi Market)'
    ]
  },
  bestFor: [
    'Clothing & Fashion Importer',
    'Fabric & Textile Sourcing Agent',
    'Watch Merchant',
    'Leather Bag & Luggage Wholesaler',
    'Cosmetics & Beauty Brand Owner',
    'Auto Parts Distributor',
    'Canton Fair Buyer'
  ],

  // ─── 1. ALL WHOLESALE MARKETS (EXHAUSTIVE) ──────────────────────────────────
  wholesaleMarkets: [
    {
      id: 'canton-fair-complex',
      cityId: 'guangzhou',
      name: {
        ar: 'مجمع معرض كانتون الدولي (Pazhou Complex)',
        en: 'Canton Fair Complex (Pazhou)',
        zh: '广交会展馆（中国进出口商品交易会展馆）'
      },
      type: 'Wholesale',
      category: 'International Trade Fair',
      description: {
        ar: 'أكبر مركز معارض تجارية متكامل في العالم؛ ينعقد مرتين سنوياً (الدورة الربيعية في أبريل والدورة الخريفية في أكتوبر) عبر 3 مراحل متخصصة تشمل الإلكترونيات، الآلات، مواد البناء، الهدايا، المنسوجات، والمنتجات الطبية.',
        en: 'The world’s largest trade exhibition complex hosting the biannual Canton Fair across 3 comprehensive phases covering electronics, machinery, building materials, gifts, home goods, textiles, and medical devices.'
      },
      address: {
        ar: '382 شارع يويجيانغ زونغ، جزيرة باتشو، منطقة هايتشو، جوانزو',
        en: '382 Yuejiang Middle Road, Pazhou Island, Haizhu District, Guangzhou'
      },
      nearestMetro: 'Xingangdong Station / Pazhou Station (Line 8)',
      operatingHours: '09:00 - 18:00 (During Exhibition Cycles)',
      moqLevel: 'High'
    },
    {
      id: 'zhongda-fabric-textile-city',
      cityId: 'guangzhou',
      name: {
        ar: 'مدينة جونغدا العالمية للأقمشة والمنسوجات (Zhongda Fabric Market)',
        en: 'Zhongda International Textile & Fabric City',
        zh: '中大国际纺织城'
      },
      type: 'Wholesale',
      category: 'Fabrics & Textile Accessories',
      description: {
        ar: 'أكبر سوق لتجارة الأقمشة وخامات النسيج في آسيا؛ يضم أكثر من 10,000 متجر ومستودع للأقمشة القطنية، الحرير، الشيفون، الدانتيل، السحابات، الأزرار، وبطانات الملابس وخامات الأزياء العصرية.',
        en: 'Asia’s largest textile trading hub with over 10,000 showrooms for natural silk, cotton, denim, lace, chiffon, linings, zippers, buttons, and custom fabric manufacturing.'
      },
      address: {
        ar: 'طريق شينغانغ الغربي، أمام جامعة سون يات سين، هايتشو، جوانزو',
        en: 'Xingang West Road, Haizhu District, Guangzhou'
      },
      nearestMetro: 'Sun Yat-sen University Station (Line 8)',
      operatingHours: '09:30 - 18:30',
      moqLevel: 'Flexible'
    },
    {
      id: 'shisanhang-clothing-market',
      cityId: 'guangzhou',
      name: {
        ar: 'سوق شيسانهانغ لملابس النساء والموضة السريعة (Shisanhang)',
        en: 'Shisanhang Garment Wholesale Market (New China Building)',
        zh: '十三行服装批发街（新中国大厦）'
      },
      type: 'Wholesale',
      category: 'Women’s Fast Fashion & Boutique Apparel',
      description: {
        ar: 'العاصمة العالمية الأولى للموضة النسائية السريعة؛ مبنى نيو تشاينا (New China Building) يحدد صيحات الموضة في آسيا، ويفتح أبوابه فجراً (الساعة 5:00 صباحاً) لتزويد تجار التجزئة والمستوردين بأحدث الموديلات اليومية.',
        en: 'The world’s primary sourcing hub for rapid fast-fashion women’s wear. The iconic New China Building opens at 5:00 AM daily supplying hundreds of thousands of retail boutiques across the Middle East and worldwide.'
      },
      address: {
        ar: 'طريق شيسانهانغ، منطقة ليوان، جوانزو',
        en: 'Shisanhang Road, Liwan District, Guangzhou'
      },
      nearestMetro: 'Cultural Park Station (Line 6/8)',
      operatingHours: '05:30 - 14:00',
      moqLevel: 'Medium'
    },
    {
      id: 'zhanxi-watch-market',
      cityId: 'guangzhou',
      name: {
        ar: 'مجمع جانشي العالمي للساعات (Zhanxi Watch Market)',
        en: 'Zhanxi Watch & Clock Wholesale Market',
        zh: '站西钟表城'
      },
      type: 'Wholesale',
      category: 'Watches, Clocks & Horology Parts',
      description: {
        ar: 'المركز العالمي الأبرز لتجارة الساعات بأنواعها؛ مئات الصالات لساعات اليد المعدنية والجلدية، حركات الساعات السويسرية واليابانية والصينية (Movements)، والأطقم الفاخرة وعلب الهدايا.',
        en: 'Global epicenter for wristwatch wholesale, quartz & mechanical movements, custom watch dials, stainless steel bracelets, leather straps, and presentation gift boxes.'
      },
      address: {
        ar: 'طريق جانشي، قرب محطة قطار جوانزو الرئيسية، يويشيو، جوانزو',
        en: 'Zhanxi Road, Yuexiu District (near Guangzhou Railway Station), Guangzhou'
      },
      nearestMetro: 'Guangzhou Railway Station (Line 2/5 - Exit F)',
      operatingHours: '10:00 - 18:30',
      moqLevel: 'Low'
    },
    {
      id: 'baiyun-world-leather-center',
      cityId: 'guangzhou',
      name: {
        ar: 'مركز باييون العالمي للجلديات والحقائب (Baiyun World Leather)',
        en: 'Baiyun World Leather Trading Center',
        zh: '白云皮具城'
      },
      type: 'Wholesale',
      category: 'Leather Bags, Luggage & Belts',
      description: {
        ar: 'أشهر وأرقى مجمع لتجارة الحقائب والمنتجات الجلدية في العالم؛ يضم طوابق مخصصة لحقائب اليد النسائية، حقائب السفر، المحافظ، الأحزمة الجلدية الطبيعية، والمصنوعات الجلدية الفاخرة.',
        en: 'The world’s top trading destination for genuine leather handbags, luxury luggage, travel suitcases, wallets, designer leather belts, and custom hardware accessories.'
      },
      address: {
        ar: '1356 طريق جيفانغ الشمالي، سانيوانلي، منطقة باييون، جوانزو',
        en: '1356 Jiefang North Road, Sanyuanli, Baiyun District, Guangzhou'
      },
      nearestMetro: 'Sanyuanli Station (Line 2)',
      operatingHours: '09:30 - 19:00',
      moqLevel: 'Medium'
    },
    {
      id: 'xingfa-plaza-cosmetics-market',
      cityId: 'guangzhou',
      name: {
        ar: 'مجمع شينغفا لمستحضرات التجميل والمكياج (Xingfa Plaza)',
        en: 'Xingfa Plaza Cosmetics & Beauty Wholesale Market',
        zh: '兴发广场美妆批发市场'
      },
      type: 'Wholesale',
      category: 'Cosmetics, Skincare & Salon Equipment',
      description: {
        ar: 'أكبر مجمع لتجارة مستحضرات التجميل ومعدات العناية بالبشرة وصالونات الحلاقة في آسيا؛ عطور، أدوات مكياج، زيوت شعر، وخطوط تصنيع OEM للعلامات الخاصة.',
        en: 'Asia’s largest wholesale beauty market complex for makeup, skincare lines, professional salon equipment, perfumes, and private-label cosmetics manufacturing.'
      },
      address: {
        ar: '138 طريق جيشانغ، سان يوان لي، منطقة باييون، جوانزو',
        en: '138 Jichang Road, Sanyuanli, Baiyun District, Guangzhou'
      },
      nearestMetro: 'Feixiang Park Station (Line 2)',
      operatingHours: '09:00 - 18:30',
      moqLevel: 'Flexible'
    },
    {
      id: 'wanling-plaza-gifts-toys',
      cityId: 'guangzhou',
      name: {
        ar: 'مجمع وانلينغ للهدايا والتحف والألعاب (Onelink / Wanling Plaza)',
        en: 'Wanling Plaza (Onelink International Plaza)',
        zh: '万菱广场'
      },
      type: 'Wholesale',
      category: 'Home Decor, Toys, Gifts & Stationery',
      description: {
        ar: 'مجمع شاهق من 7 طوابق مخصص للتحف المنزلية الراقية، الإكسسوارات الديكورية، الزهور الاصطناعية، ألعاب الأطفال، الهدايا الدعائية، والقرطاسية الفاخرة.',
        en: 'Premier multi-story sourcing mall for upscale home decor, artificial plants, novelty gifts, toys, plush dolls, stationery, and corporate promotional items.'
      },
      address: {
        ar: '39 طريق جيفانغ الجنوبي، منطقة يويشيو، جوانزو',
        en: '39 Jiefang South Road, Yuexiu District, Guangzhou'
      },
      nearestMetro: 'Haizhu Square Station (Line 2/6)',
      operatingHours: '09:30 - 19:00',
      moqLevel: 'Low'
    },
    {
      id: 'guangyuan-auto-parts-city',
      cityId: 'guangzhou',
      name: {
        ar: 'سوق قوانغيوان الشرقي لقطع غيار السيارات (Guangyuan Auto Parts)',
        en: 'Guangyuan East Auto Parts Wholesale Hub',
        zh: '广源东汽配城'
      },
      type: 'Wholesale',
      category: 'Automotive Parts & Accessories',
      description: {
        ar: 'شريان تجارة قطع غيار السيارات في الصين؛ كتل محركات، أنظمة فرامل، فلاتر، إضاءات LED وتعديل السيارات لمختلف الماركات اليابانية والأوروبية والأمريكية.',
        en: 'China’s central cluster for automotive spare parts, brake pads, suspension systems, filters, lighting units, and exterior vehicle modification accessories.'
      },
      address: {
        ar: 'طريق قوانغيوان الشرقي، منطقة يويشيو/باييون، جوانزو',
        en: 'Guangyuan East Road, Yuexiu/Baiyun Districts, Guangzhou'
      },
      nearestMetro: 'Guangzhou East Railway Station (Line 1/3)',
      operatingHours: '09:00 - 18:00',
      moqLevel: 'Medium'
    },
    {
      id: 'shahe-apparel-wholesale-market',
      cityId: 'guangzhou',
      name: {
        ar: 'سوق شاهي للملابس الجاهزة الاقتصادية (Shahe Garment Market)',
        en: 'Shahe Wholesale Apparel Market (Wanjia & Jinma)',
        zh: '沙河服装批发市场（万佳/金马）'
      },
      type: 'Wholesale',
      category: 'Budget Ready-to-Wear Apparel',
      description: {
        ar: 'السوق الشعبي الأضخم للملابس النسائية والرجالية والجينز بأسعار منخفضة جداً ومبيعات بالكميات الضخمة؛ المصدر الأول لمتاجر التجزئة ومواقع البيع الإلكتروني.',
        en: 'Massive budget apparel district specializing in high-volume, low-cost t-shirts, denim, casualwear, and activewear for online retailers and global discount chains.'
      },
      address: {
        ar: 'طريق شيانلي الشرقي، منطقة تيانهي، جوانزو',
        en: 'Xianlie East Road, Tianhe District, Guangzhou'
      },
      nearestMetro: 'Shaheding Station (Line 6)',
      operatingHours: '05:00 - 13:30',
      moqLevel: 'High'
    }
  ],

  // ─── 2. KEY COMMERCIAL & ADMINISTRATIVE DISTRICTS ───────────────────────────
  districts: [
    {
      id: 'yuexiu',
      cityId: 'guangzhou',
      name: { ar: 'منطقة يويشيو (Yuexiu District)', en: 'Yuexiu District (越秀区)' },
      activityType: { ar: 'المركز التاريخي لأسواق الساعات، الملابس، والهدايا (وانلينغ وجانشي)', en: 'Historic Wholesale Hub: Watches, Apparel & Gifts' },
      mainProducts: ['ساعات جانشي', 'ملابس يويشيو', 'تحف وانلينغ بلازا', 'أحذية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Guangzhou Railway Station & Haizhu Square'
    },
    {
      id: 'haizhu',
      cityId: 'guangzhou',
      name: { ar: 'منطقة هايتشو (Haizhu District)', en: 'Haizhu District (海珠区)' },
      activityType: { ar: 'مقر معرض كانتون الدولي (باتشو) وأسواق الأقمشة (جونغدا)', en: 'Canton Fair Pazhou Complex & Zhongda Textile Hub' },
      mainProducts: ['معارض كانتون', 'أقمشة ومنسوجات جونغدا', 'مستلزمات خياطة'],
      tradeFocus: 'Mixed',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Pazhou Station & Sun Yat-sen University'
    },
    {
      id: 'liwan',
      cityId: 'guangzhou',
      name: { ar: 'منطقة ليوان (Liwan District)', en: 'Liwan District (荔湾区)' },
      activityType: { ar: 'سوق شيسانهانغ للأزياء، واليشم، والأحجار الكريمة (ليوان بلازا)', en: 'Shisanhang Fashion & Liwan Jade/Crystal Markets' },
      mainProducts: ['أزياء شيسانهانغ السريعة', 'مجوهرات ليوان', 'شاي وفواكه'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Cultural Park Station (Line 6/8)'
    },
    {
      id: 'baiyun',
      cityId: 'guangzhou',
      name: { ar: 'منطقة باييون (Baiyun District)', en: 'Baiyun District (白云区)' },
      activityType: { ar: 'عاصمة الجلود والحقائب ومستحضرات التجميل ومطار كوانزو الدولي', en: 'Leather Luggage, Cosmetics Hub & Baiyun Airport' },
      mainProducts: ['حقائب جلدية باييون', 'مستحضرات تجميل شينغفا', 'أحذية سانيوانلي'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Sanyuanli Station & Feixiang Park'
    },
    {
      id: 'tianhe',
      cityId: 'guangzhou',
      name: { ar: 'منطقة تيانهي (Tianhe District)', en: 'Tianhe District (天河区)' },
      activityType: { ar: 'المركز المالي والتجاري الحديث (Zhujiang New Town CBD)', en: 'Financial CBD, Corporate HQs & Luxury Shopping' },
      mainProducts: ['مكاتب استيراد وتصدير', 'بنوك دولية', 'سوق شاهي للملابس'],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Zhujiang New Town Station (Line 3/5)'
    },
    {
      id: 'panyu',
      cityId: 'guangzhou',
      name: { ar: 'منطقة بانيو (Panyu District)', en: 'Panyu District (番禺区)' },
      activityType: { ar: 'صناعة وصياغة المجوهرات، ومعدات مدن الملاهي، والأجهزة الرقمية', en: 'Jewelry Manufacturing, Amusement Equipment & Audio' },
      mainProducts: ['مجوهرات ذهب وفضة بانيو', 'ألعاب ملاهي كهروميكانيكية', 'معدات صوت'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Shiqiao Station (Line 3) & Guangzhou South Station'
    },
    {
      id: 'huadu',
      cityId: 'guangzhou',
      name: { ar: 'منطقة هوادو (Huadu District)', en: 'Huadu District (花都区)' },
      activityType: { ar: 'عاصمة الجلود والحقائب المصنعة (بلدة شيلينغ Shiling)', en: 'Shiling Leather & Luggage Manufacturing Base' },
      mainProducts: ['حقائب سفر وحقائب يد شيلينغ', 'خامات جلود صناعية', 'إكسسوارات شنط'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Guangzhou North Railway Station'
    },
    {
      id: 'zengcheng',
      cityId: 'guangzhou',
      name: { ar: 'منطقة زينغتشينغ (Zengcheng District)', en: 'Zengcheng District (增城区)' },
      activityType: { ar: 'عاصمة الجينز والدنيم الأولى في العالم (شينتانغ Xintang)', en: 'World Capital of Denim & Jeans (Xintang)' },
      mainProducts: ['بنطلونات وجاكيتات جينز', 'أقمشة دنيم مصبوغة', 'غسيل الجينز الصناعي'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Xintang Station (Line 13)'
    }
  ],

  // ─── 3. INDUSTRIAL CLUSTERS & FACTORY ZONES ─────────────────────────────────
  industrialZones: [
    {
      id: 'shiling-leather-industrial-base',
      cityId: 'guangzhou',
      name: {
        ar: 'قاعدة شيلينغ لصناعة الحقائب والجلديات (Shiling Leather Base)',
        en: 'Huadu Shiling Leather & Luggage Industrial Cluster'
      },
      clusterSpecialization: {
        ar: 'تنتج أكثر من 40% من حقائب السفر وحقائب اليد المصدرة من الصين',
        en: 'Produces >40% of China’s Export Luggage and Leather Handbags'
      },
      factoryTypes: ['Leather Cutting Mills', 'Luggage Assembly Plants', 'Hardware Fitting Foundries'],
      keyProducts: ['حقائب سفر ترولي', 'حقائب يد نسائية', 'محافظ جلد طبيعي وصناعي'],
      specializationLevel: 'High'
    },
    {
      id: 'xintang-denim-apparel-cluster',
      cityId: 'guangzhou',
      name: {
        ar: 'تجمع شينتانغ لصناعة الجينز والدنيم (Xintang Denim Capital)',
        en: 'Zengcheng Xintang World Denim Manufacturing Hub'
      },
      clusterSpecialization: {
        ar: 'أكبر مركز في العالم لنسيج وغسيل وتصنيع ملابس الجينز والدنيم',
        en: 'World’s Largest Denim Weaving, Washing & Jeans Manufacturing Cluster'
      },
      factoryTypes: ['Denim Weaving Mills', 'Industrial Dyeing & Washing Facilities', 'Jeans Stitching Units'],
      keyProducts: ['بناطيل جينز لمختلف الأعمار', 'جاكيتات دنيم', 'أقمشة جينز مطاطية'],
      specializationLevel: 'High'
    },
    {
      id: 'panyu-jewelry-amusement-park',
      cityId: 'guangzhou',
      name: {
        ar: 'المنطقة الصناعية للمجوهرات ومعدات الملاهي في بانيو',
        en: 'Panyu Jewelry & Arcade Amusement Industrial Park'
      },
      clusterSpecialization: {
        ar: 'صياغة المجوهرات وتصنيع ألعاب الآركيد ومعدات الملاهي المائية والكهربائية',
        en: 'Custom Gold/Gemstone Crafting & Commercial Arcade/Amusement Attractions'
      },
      factoryTypes: ['Precious Metal Casting Labs', 'Amusement Ride Fabrication Plants'],
      keyProducts: ['مجوهرات ذهب وفضة راقية', 'ألعاب آركيد ومحاكيات VR', 'معدات ملاهي أطفال'],
      specializationLevel: 'High'
    }
  ],

  // ─── 4. MAJOR TRADE FAIRS ───────────────────────────────────────────────────
  tradeFairs: [
    {
      id: 'canton-fair-spring',
      name: {
        ar: 'معرض كانتون الدولي - دورة الربيع (Canton Fair Spring)',
        en: 'China Import and Export Fair - Spring Session'
      },
      industry: 'Comprehensive Cross-Industry Trade Fair',
      venue: {
        ar: 'مجمع معرض كانتون (Pazhou Complex)',
        en: 'Canton Fair Complex (Pazhou), Guangzhou'
      },
      occurrence: {
        ar: 'سنوياً من 15 أبريل إلى 5 مايو (3 مراحل)',
        en: 'Annually April 15 – May 5 (Phase 1, 2, 3)'
      },
      officialWebsite: 'https://www.cantonfair.org.cn',
      bestFor: ['Global Importers', 'General Wholesalers', 'Distributors']
    },
    {
      id: 'canton-fair-autumn',
      name: {
        ar: 'معرض كانتون الدولي - دورة الخريف (Canton Fair Autumn)',
        en: 'China Import and Export Fair - Autumn Session'
      },
      industry: 'Comprehensive Cross-Industry Trade Fair',
      venue: {
        ar: 'مجمع معرض كانتون (Pazhou Complex)',
        en: 'Canton Fair Complex (Pazhou), Guangzhou'
      },
      occurrence: {
        ar: 'سنوياً من 15 أكتوبر إلى 4 نوفمبر (3 مراحل)',
        en: 'Annually October 15 – November 4 (Phase 1, 2, 3)'
      },
      officialWebsite: 'https://www.cantonfair.org.cn',
      bestFor: ['Global Importers', 'General Wholesalers', 'Distributors']
    },
    {
      id: 'ciff-guangzhou-furniture-fair',
      name: {
        ar: 'معرض الصين الدولي للأثاث والديكور (CIFF Guangzhou)',
        en: 'China International Furniture Fair (CIFF Guangzhou)'
      },
      industry: 'Furniture, Home Decor & Office Furnishing',
      venue: {
        ar: 'مركز كانتون للمعارض (Pazhou) ومركز بولي الدولي',
        en: 'Canton Fair Complex & PWTC Expo, Pazhou'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر مارس (مرحلتان)',
        en: 'Annually in March (Phase 1 Home / Phase 2 Office)'
      },
      officialWebsite: 'https://www.ciff-gz.com',
      bestFor: ['Furniture Merchants', 'Interior Designers', 'Hotel Sourcing']
    },
    {
      id: 'china-beauty-expo-guangzhou',
      name: {
        ar: 'معرض كانتون الدولي للتجميل والمكياج (China International Beauty Expo)',
        en: 'China International Beauty Expo (CIBE Guangzhou)'
      },
      industry: 'Cosmetics, Skincare, Hair & Wellness',
      venue: {
        ar: 'مجمع معرض كانتون باتشو (Pazhou)',
        en: 'Canton Fair Complex, Pazhou, Guangzhou'
      },
      occurrence: {
        ar: 'دورتان سنوياً (مارس وسبتمبر)',
        en: 'Twice a year: March and September'
      },
      officialWebsite: 'http://www.chinainternationalbeauty.com',
      bestFor: ['Beauty Importers', 'Cosmetic Brand Owners', 'Spa Equipment Buyers']
    }
  ],

  // ─── 5. SOURCING PRODUCTS DEEP DIVE ─────────────────────────────────────────
  sourcingProducts: [
    {
      id: 'gz-fashion-apparel',
      productName: { ar: 'الملابس والأزياء السريعة والفساتين', en: 'Fashion Apparel & Ready-to-Wear Collections' },
      industryCategory: 'Apparel',
      whyThisCity: { ar: 'المركز الأول لتصميم وتصنيع وتصدير الموضة السريعة بأسعار الجملة التنافسية عبر شيسانهانغ وبايما.', en: 'World capital for fast fashion supply chains, instant sampling, and wholesale bulk apparel.' },
      mainManufacturingArea: { ar: 'ليوان ويويشيو وتيانهي وزينغتشينغ', en: 'Liwan, Yuexiu, Tianhe & Zengcheng' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'gz-textiles-fabrics',
      productName: { ar: 'الأقمشة الحريرية والقطنية ومستلزمات الخياطة', en: 'Silk, Cotton Fabrics & Sewing Trimmings' },
      industryCategory: 'Textiles',
      whyThisCity: { ar: 'سوق جونغدا يضم أكبر تنوع للأقمشة الجاهزة والتصاميم الحصرية وأدنى حد للطلب مقارنة بالمصانع.', en: 'Zhongda market offers infinite variety of in-stock fabrics and low MOQ sampling.' },
      mainManufacturingArea: { ar: 'منطقة هايتشو (جونغدا)', en: 'Haizhu District (Zhongda Hub)' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'gz-leather-handbags',
      productName: { ar: 'الحقائب النسائية والجلديات وحقائب السفر', en: 'Leather Handbags & Travel Luggage' },
      industryCategory: 'Leather Goods',
      whyThisCity: { ar: 'تكامل مجمع باييون مع مصانع شيلينغ يتيح تصنيع أرقى الموديلات بجودة مطابقة للماركات العالمية.', en: 'Seamless synergy between Baiyun trading center and Shiling manufacturing cluster.' },
      mainManufacturingArea: { ar: 'باييون وهوداو (شيلينغ)', en: 'Baiyun and Huadu (Shiling)' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],

  // ─── 6. LOGISTICS INFRASTRUCTURE ────────────────────────────────────────────
  logistics: {
    nearestAirports: [
      'Guangzhou Baiyun International Airport (CAN - مطار كوانزو باييون الدولي - أحد أزحم مطارات العالم للشحن والركاب)',
      'Hong Kong International Airport (HKG - ساعتان عبر القطار السريع أو الحافلة المباشرة)'
    ],
    seaPorts: [
      'Guangzhou Port - Nansha Terminal (ميناء نانشا - ميناء المياه العميقة الرئيسي لكوانزو لشحن الحاويات للشرق الأوسط وأوروبا)',
      'Huangpu Port (ميناء هوانغبو التاريخي للملاحة النهرية والساحلية)'
    ],
    highSpeedRailwayStations: [
      'Guangzhou South Railway Station (محطة جوانزو الجنوبية - أضخم محطة قطارات فائقة السرعة في آسيا)',
      'Guangzhou East Railway Station (محطة جوانزو الشرقية - قطارات مباشرة إلى كولون هونغ كونغ وشينزن)',
      'Guangzhou Railway Station (المحطة المركزية القديمة لأسواق الساعات والملابس)'
    ],
    seaFreightSuitability: {
      ar: 'ميناء نانشا مجهز بأحدث الرافعات الآلية ويوفر خطوطاً أسبوعية مباشرة إلى موانئ الخليج العربي والبحر الأحمر.',
      en: 'Nansha deepwater port provides state-of-the-art automated berths and direct weekly container loops to Middle Eastern and African ports.'
    },
    airFreightSuitability: {
      ar: 'مطار باييون يعد مركز عمليات الشحن الجوي الرئيسي لشركة فيديكس (FedEx Asia-Pacific Hub) مع رحلات شحن جوي يومية للخليج والقاهرة.',
      en: 'Baiyun Airport is FedEx Asia-Pacific Air Hub, offering daily dedicated freighter flights connecting directly to Dubai, Riyadh, and Cairo.'
    },
    primaryCargoRoutes: {
      ar: [
        'خط نانشا المباشر إلى جبل علي (دبي) والدمام',
        'خط البحر الأحمر المباشر إلى ميناء جدة الإسلامي والسخنة',
        'الشحن الجوي فائق السرعة عبر مطار باييون إلى مطارات الخليج ومصر'
      ],
      en: [
        'Nansha Direct Gulf Express (Jebel Ali, Dammam)',
        'Red Sea Express (Jeddah, Sokhna, Aqaba)',
        'Air Cargo Direct Flights via CAN to Middle East & North Africa'
      ]
    }
  },

  // ─── 7. BUSINESS TRAVEL GUIDE (HOTELS & HALAL DINING) ───────────────────────
  businessTravelGuide: {
    bestVisitMonths: ['أكتوبر', 'نوفمبر', 'ديسمبر', 'مارس', 'أبريل'],
    suggestedStayDays: 5,
    weatherSummary: {
      ar: 'مناخ شبه استوائي رطب؛ الشتاء والربيع (15°C إلى 25°C) مثاليان لحضور المعارض والتسوق، بينما الصيف حار ورطب.',
      en: 'Humid subtropical; pleasant and comfortable from October to April, hot and humid with tropical rain in summer.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة باتشو (Pazhou): الأفضل لزوار معرض كانتون الدولي ومعارض الأثاث والسيارات.',
        en: 'Pazhou: Essential for Canton Fair visitors and attendees of Pazhou exhibition halls.'
      },
      {
        ar: 'منطقة يويشيو ومحطة القطار: مثالية لتجار الساعات، الأقمشة، والملابس الجاهزة.',
        en: 'Yuexiu / Central Station: Prime location for watch, luggage, and clothing buyers.'
      },
      {
        ar: 'منطقة تيانهي (Zhujiang New Town CBD): الأفضل للوفود التجارية الراغبة بالإقامة الفاخرة والمطاعم الراقية.',
        en: 'Zhujiang New Town CBD: Premier modern hub for luxury 5-star hotels and international corporate amenities.'
      }
    ],
    localTransportAdvice: {
      ar: 'مترو جوانزو سريع وفعال ويربط المطار ومحطات القطار بجميع أسواق الجملة ومعرض كانتون عبر الخط 2 و 8.',
      en: 'Guangzhou Metro is exceptionally comprehensive; Lines 2, 5, and 8 connect all major wholesale districts and Canton Fair directly.'
    },
    languageTips: {
      ar: 'المندرين والكانتونية هما اللغتان الرئيسيتان. في أسواق الجملة الكبرى يتحدث العديد من البائعين إنجليزية تجارية بسيطة ولديهم حاسبات أسعار جاهزة.',
      en: 'Mandarin and Cantonese are dominant. Most wholesale vendors speak commercial English and use digital calculators for bargaining.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi', 'MetroMan Guangzhou', 'Google Translate / Baidu Translate'],

    // ─── Recommended Hotels ───
    recommendedHotels: [
      {
        id: 'the-westin-pazhou',
        name: {
          ar: 'فندق ويستن باتشو (ملاصق لمعرض كانتون)',
          en: 'The Westin Pazhou',
          zh: '广州广交会威斯汀酒店'
        },
        starRating: 5,
        category: { ar: 'فندق المعارض الفاخر 5 نجوم', en: '5-Star Direct Fair Hotel' },
        area: { ar: 'مركز معرض كانتون مباشرة (Pazhou)', en: 'Inside Canton Fair Complex Area' },
        highlights: {
          ar: 'الفندق الوحيد الذي يملك ممراً هوائياً مباشراً إلى قاعات معرض كانتون دون الحاجة لأي مواصلات.',
          en: 'The only hotel directly connected to the Canton Fair exhibition halls via private skybridge.'
        },
        address: {
          ar: '681 طريق فنغهوانغ، هايتشو، جوانزو',
          en: '681 Fengpu Middle Road, Haizhu District, Guangzhou'
        }
      },
      {
        id: 'garden-hotel-guangzhou',
        name: {
          ar: 'فندق جاردن هوتيل التاريخي (Garden Hotel)',
          en: 'The Garden Hotel Guangzhou',
          zh: '广州花园酒店'
        },
        starRating: 5,
        category: { ar: 'تاريخي وتجاري راقي 5 نجوم', en: 'Historic Luxury 5-Star' },
        area: { ar: 'شارع هوانشي دونغ، يويشيو (قريب من أسواق الساعات)', en: 'Huanshi East Road, Yuexiu District' },
        highlights: {
          ar: 'فندق تاريخي شهير لرجال الأعمال والتجار، قريب جداً من سوق الساعات وسوق الجلود وتكثر حوله المطاعم العربية الحلال.',
          en: 'Legendary business hotel favored by international merchants; surrounded by Arab restaurants and near watch markets.'
        },
        address: {
          ar: '368 طريق هوانشي دونغ، منطقة يويشيو، جوانزو',
          en: '368 Huanshi East Road, Yuexiu District, Guangzhou'
        }
      },
      {
        id: 'white-swan-hotel-shamian',
        name: {
          ar: 'فندق وايت سوان بجزيرة شاميان (White Swan Hotel)',
          en: 'White Swan Hotel Shamian',
          zh: '广州白天鹅宾馆'
        },
        starRating: 5,
        category: { ar: 'فاخر على ضفاف نهر اللؤلؤ', en: '5-Star Pearl River Heritage' },
        area: { ar: 'جزيرة شاميان التاريخية، ليوان', en: 'Shamian Island, Liwan District' },
        highlights: {
          ar: 'أول فندق 5 نجوم في الصين، إطلالة ساحرة على نهر اللؤلؤ وقريب من أسواق ملابس شيسانهانغ ومجمعات الأقمشة.',
          en: 'China’s first 5-star international hotel on historic Shamian Island, 5 minutes from Shisanhang apparel market.'
        },
        address: {
          ar: '1 الشارع الجنوبي، جزيرة شاميان، ليوان، جوانزو',
          en: '1 Shamian South Street, Liwan District, Guangzhou'
        }
      },
      {
        id: 'shangri-la-guangzhou-pazhou',
        name: {
          ar: 'فندق شانغريلا كوانزو باتشو',
          en: 'Shangri-La Hotel Guangzhou',
          zh: '广州香格里拉大酒店'
        },
        starRating: 5,
        category: { ar: 'فاخر للمعارض والمؤتمرات 5 نجوم', en: 'Luxury 5-Star Expo Hotel' },
        area: { ar: 'باتشو (دقيقتان عن معرض كانتون)', en: 'Pazhou Exhibition Area' },
        highlights: {
          ar: 'حدائق استوائية رحبة ومطاعم عالمية وخدمة نقل متواصلة كل 5 دقائق إلى بوابات معرض كانتون.',
          en: 'Spacious resort-style grounds with continuous private shuttles to Canton Fair entrances.'
        },
        address: {
          ar: '1 طريق هوي تشان دونغ، باتشو، هايتشو، جوانزو',
          en: '1 Huizhan East Road, Pazhou, Haizhu District, Guangzhou'
        }
      }
    ],

    // ─── Verified Halal & Arab Dining ───
    recommendedRestaurants: [
      {
        id: 'al-meylas-arab-restaurant-gz',
        name: {
          ar: 'مطعم المجلس العربي (Al Meylas Arab Restaurant)',
          en: 'Al Meylas Arabic Restaurant Guangzhou',
          zh: '阿米拉斯阿拉伯餐厅'
        },
        cuisineType: { ar: 'مأكولات عربية وخليجية وشامية حلال', en: 'Halal Arabic, Gulf & Levantine Cuisine' },
        isHalal: true,
        address: {
          ar: 'طريق هوانشي دونغ، يويشيو، جوانزو (خلف فندق جاردن)',
          en: 'Huanshi East Road (Near Garden Hotel), Yuexiu, Guangzhou'
        },
        recommendedFor: {
          ar: 'مشاوي مشكلة، كبسة ومندي، مقبلات شامية طازجة، وشاي عربي مع جلسات عمل للتجار',
          en: 'Authentic mixed grills, lamb mandi, fresh mezze, and business dining ambiance'
        }
      },
      {
        id: 'sultan-turkish-restaurant-gz',
        name: {
          ar: 'مطعم السلطان التركي الحلال (Sultan Turkish Restaurant)',
          en: 'Sultan Turkish Restaurant Guangzhou',
          zh: '苏丹土耳其餐厅'
        },
        cuisineType: { ar: 'مأكولات تركية وعثمانية حلال', en: 'Authentic Halal Turkish Cuisine' },
        isHalal: true,
        address: {
          ar: '367 طريق هوانشي دونغ، منطقة يويشيو، جوانزو',
          en: '367 Huanshi East Road, Yuexiu District, Guangzhou'
        },
        recommendedFor: {
          ar: 'كباب إسكندر، لحم عجين، شاورما تركية، وبقلاوة بالفستق؛ من أشهر وأقدم مطاعم التجار في جوانزو',
          en: 'Iskender kebab, Turkish pide, charcoal grills, and pistachio baklava; a legendary trade hub institution'
        }
      },
      {
        id: 'saad-mosque-halal-dining-gz',
        name: {
          ar: 'مطعم مجمع مسجد سعد بن أبي وقاس (Sa’ad Mosque Halal Canteen)',
          en: 'Sa’ad Abi Waqqas Mosque Halal Canteen',
          zh: '清真先贤古寺清真餐厅'
        },
        cuisineType: { ar: 'مأكولات إسلامية صينية وعربية حلال موثقة', en: 'Certified Islamic Chinese & Uyghur Halal' },
        isHalal: true,
        address: {
          ar: '901 طريق جيفانغ الشمالي، حديقة يويشيو، جوانزو',
          en: '901 Jiefang North Road, Yuexiu District, Guangzhou'
        },
        recommendedFor: {
          ar: 'أطباق لحم الضأن الحلال، نودلز لانتشو، ووجبات يوم الجمعة الموثوقة 100% بجوار أقدم مسجد تاريخي في الصين',
          en: '100% certified halal mutton, hand-pulled noodles, and Friday community dining by China’s oldest mosque'
        }
      },
      {
        id: 'bingsheng-taste-michelin-gz',
        name: {
          ar: 'مطعم بينغ شينغ الكانتوني الشهير (Bingsheng Taste)',
          en: 'Bingsheng Taste (Cantonese Culinary Icon)',
          zh: '炳胜品味（珠江新城店）'
        },
        cuisineType: { ar: 'مأكولات كانتونية محلية فاخرة (مأكولات بحرية وديم سم)', en: 'Fine Cantonese Seafood & Dim Sum' },
        isHalal: false,
        address: {
          ar: 'طريق شيانتشون، تشوجيانغ نيو تاون، تيانهي، جوانزو',
          en: 'Xiancun Road, Zhujiang New Town, Tianhe, Guangzhou'
        },
        recommendedFor: {
          ar: 'وجبات عشاء عمل واحتفالات توقيع العقود؛ أسماك بحرية طازجة، ديم سم كانتوني، وأوزة مشوية فاخرة',
          en: 'Contract signing dinners, fresh live seafood, Cantonese barbecue goose, and authentic local dim sum'
        }
      }
    ],

    // ─── Tourist & Cultural Landmarks ───
    touristAttractions: [
      {
        id: 'canton-tower-gz',
        name: {
          ar: 'برج كانتون الأيقوني (Canton Tower)',
          en: 'Canton Tower',
          zh: '广州塔（小蛮腰）'
        },
        category: { ar: 'ناطحة سحاب ومعلم عالمي', en: 'Global Architectural Landmark' },
        description: {
          ar: 'أطول برج تلفزيوني في الصين بارتفاع 600 متر؛ يوفر قطار الفقاعة الهوائي في قمته ومطلات زجاجية وإطلالات ساحرة على نهر اللؤلؤ.',
          en: 'Iconic 600-meter twisting tower featuring rooftop bubble trams and glass observation skydecks over the Pearl River.'
        },
        nearestMetro: 'Canton Tower Station (Line 3/APM)'
      },
      {
        id: 'shamian-island-gz',
        name: {
          ar: 'جزيرة شاميان التاريخية (Shamian Island)',
          en: 'Historic Shamian Island',
          zh: '沙面岛'
        },
        category: { ar: 'حي تاريخي ومعماري أوروبي', en: 'Historic European Colonial Quarter' },
        description: {
          ar: 'واحة هادئة تضم أكثر من 150 مبنى كلاسيكياً على الطراز الأوروبي، ومقرات القنصليات القديمة ومقاهي هادئة للاسترخاء بعد جولات الأسواق.',
          en: 'Peaceful island boasting 150 preserved 19th-century European buildings, leafy promenades, and boutique cafes.'
        },
        nearestMetro: 'Cultural Park Station (Line 6/8)'
      }
    ]
  },

  relatedCitySlugs: ['shenzhen', 'foshan', 'shunde', 'dongguan', 'zhongshan'],
  relatedProductSlugs: ['apparel', 'textiles', 'leather-goods', 'watches', 'cosmetics'],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل جوانزو التجاري الشامل 2026 | أسواق الجملة، معرض كانتون، والمصانع',
      en: 'Guangzhou Sourcing & Business Guide 2026 | Wholesale Markets, Canton Fair & Factories'
    },
    description: {
      ar: 'أشمل دليل لاستيراد الملابس، الأقمشة، الساعات، والجلديات من جوانزو: خريطة أسواق شيسانهانغ، جونغدا، جانشي، باييون، معارض كانتون، وفنادق ومطاعم حلال.',
      en: 'Comprehensive business guide to Guangzhou: Shisanhang fashion, Zhongda fabrics, Zhanxi watches, Baiyun leather, Canton Fair, hotels, and halal restaurants.'
    }
  }
};
