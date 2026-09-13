import { ICity } from '../../types';

export const shenzhenCity: ICity = {
  id: 'shenzhen',
  slug: 'shenzhen',
  name: {
    ar: 'شينزن (شنجن)',
    en: 'Shenzhen',
    zh: '深圳'
  },
  province: {
    ar: 'غوانغدونغ',
    en: 'Guangdong'
  },
  region: 'Pearl River Delta',
  tier: 'tier-1',
  commercialImportanceScore: 99,
  heroImage: 'https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=1200&q=80',
  skylineImage: 'https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'عاصمة التكنولوجيا والإلكترونيات الأولى في العالم و"سيليكون فالي العتاد والابتكار الصيني". تحتضن أشهر شارع للإلكترونيات في العالم (هواكيانغ بي Huaqiangbei)، وأكبر مجمع لتجارة الذهب والمجوهرات في آسيا (شويبي Shuibei)، إضافة إلى تجمعات تصنيع الهواتف، السيارات الكهربائية (BYD)، طائرات الدرون (DJI)، شاشات العرض، الملابس الراقية (نانيو Nanyou)، والنظارات الطبية الفاخرة.',
    en: 'The Silicon Valley of Hardware and global capital of consumer electronics and smart manufacturing. Home to the legendary Huaqiangbei electronics megaplex, Asia’s largest gold & jewelry exchange hub (Shuibei), world-leading EV manufacturer BYD, DJI drones, high-end designer fashion in Nanyou, and premier container ports.'
  },
  keyIndustries: [
    'consumer-electronics',
    'semiconductors-chips',
    'telecom-hardware',
    'smartphones-accessories',
    'gold-jewelry',
    'ev-batteries',
    'drones-robotics',
    'optics-displays',
    'high-end-apparel',
    'eyewear-frames',
    'freight-logistics'
  ],
  primaryProducts: {
    ar: [
      'الهواتف الذكية ومستلزماتها وشواحن GaN وبنوك الطاقة',
      'المكونات الإلكترونية الدقيقة والرقائق ولوحات PCB المطبوعة',
      'كاميرات وأنظمة المراقبة الأمنية CCTV وأجهزة التحكم بالدخول',
      'الذهب الخالص والألماس والأحجار الكريمة والمجوهرات',
      'ملابس النساء الراقية والتصاميم الأصلية (Original Design)',
      'السيارات الكهربائية ومحطات الشحن وبطاريات الليثيوم',
      'الطائرات المسيرة (Drones) والروبوتات الصناعية والتعليمية',
      'شاشات العرض LED و OLED واللوحات البصرية الذكية',
      'إطارات النظارات الطبية والشمسية الفاخرة المصنوعة من التيتانيوم',
      'قطع غيار الهواتف والشاشات البديلة الأصلية والمجددة'
    ],
    en: [
      'Smartphones, GaN Fast Chargers, Power Banks & Accessories',
      'Electronic Components, Integrated Circuits (ICs) & PCBs',
      'CCTV Surveillance Systems, Security Cameras & Access Control',
      'Pure Gold Jewelry, Diamonds, Gemstones & Silverware',
      'High-End Designer Women’s Apparel & Boutique Garments',
      'Electric Vehicles (EVs), Lithium Battery Packs & Charging Hubs',
      'Commercial Drones, Quadcopters & Service Robotics',
      'LED/OLED Displays, Smart TVs & Commercial Screen Panels',
      'Titanium & Acetate Luxury Eyewear Frames & Sunglasses',
      'Smartphone Replacement Displays, Batteries & Refurbished Spares'
    ]
  },
  bestFor: [
    'Electronics Importer',
    'Smartphone Accessories Merchant',
    'Gold & Jewelry Business',
    'Hardware Tech Startup',
    'Automotive & EV Component Buyer',
    'Security Equipment Wholesaler',
    'Boutique Fashion Importer',
    'Direct Factory Sourcing Agent'
  ],

  // ─── 1. ALL WHOLESALE MARKETS (EXHAUSTIVE) ──────────────────────────────────
  wholesaleMarkets: [
    {
      id: 'seg-electronics-plaza',
      cityId: 'shenzhen',
      name: {
        ar: 'مجمع سايج للإلكترونيات (SEG Plaza)',
        en: 'SEG Electronics Plaza',
        zh: '赛格电子市场'
      },
      type: 'Wholesale',
      category: 'Electronic Components & Computer Hardware',
      description: {
        ar: 'القلب النابض لسوق هواكيانغ بي؛ مجمع عملاق من 8 طوابق متخصص بالجملة في المكونات الإلكترونية الدقيقة، المعالجات، رقائق الـ IC، الذواكر، شاشات الحواسيب، ومعدات السيرفرات والتعدين والملحقات المتطورة.',
        en: 'The core landmark of Huaqiangbei spanning 8 commercial floors dedicated to electronic components, IC chips, microcontrollers, memory modules, server hardware, computer monitors, and precision electronics.'
      },
      address: {
        ar: 'شارع هواكيانغ الشمالي، تقاطع شنتشن شين فنغ، منطقة فوتيان، شينزن',
        en: 'Huaqiang North Road & Shennan Middle Rd, Futian District, Shenzhen'
      },
      nearestMetro: 'Huaqiang North Station (Line 2/7) / Huaqiang Road Station (Line 1)',
      operatingHours: '09:30 - 18:30',
      moqLevel: 'Flexible'
    },
    {
      id: 'huaqiang-electronic-world',
      cityId: 'shenzhen',
      name: {
        ar: 'عالم هواكيانغ للإلكترونيات (Huaqiang Electronic World)',
        en: 'Huaqiang Electronic World',
        zh: '华强电子世界'
      },
      type: 'Wholesale',
      category: 'Passive Components, PCBs & Tools',
      description: {
        ar: 'أكبر مركز متخصص في آسيا للمقاومات والمكثفات والمحولات، المفاتيح الإلكترونية، خطوط تصنيع واختبار لوحات الـ PCB، أسلاك التوصيل، أدوات اللحام والقياس الرقمي الدقيق.',
        en: 'Asia’s premier trading center for passive components, diodes, capacitors, connectors, PCB prototyping services, precision digital measuring instruments, and electronics soldering equipment.'
      },
      address: {
        ar: '1002 طريق هواكيانغ الشمالي، مبنى هواكيانغ، فوتيان، شينزن',
        en: '1002 Huaqiang North Road, Futian District, Shenzhen'
      },
      nearestMetro: 'Huaqiang North Station (Line 2/7)',
      operatingHours: '09:30 - 18:30',
      moqLevel: 'Low'
    },
    {
      id: 'yuanwang-digital-mall',
      cityId: 'shenzhen',
      name: {
        ar: 'سوق يوانوانغ الرقمي للهواتف (Yuanwang Digital Mall)',
        en: 'Yuanwang Digital Mall',
        zh: '远望数码商城'
      },
      type: 'Wholesale',
      category: 'Smartphones & Power Accessories',
      description: {
        ar: 'المركز العالمي الأول لتجارة الهواتف الذكية بالجملة، كابلات الشحن السريع، رؤوس شواحن GaN، بنوك الطاقة المعتمدة، كفرات الحماية، وسماعات البلوتوث بأسعار المصنع المباشرة.',
        en: 'The global capital for wholesale mobile phones, smartphone accessories, GaN fast chargers, certified power banks, wireless earbuds, protective cases, and tempered glass screens.'
      },
      address: {
        ar: 'شارع هواكيانغ الشمالي، مبنى يوانوانغ، منطقة فوتيان، شينزن',
        en: 'Huaqiang North Road, Futian District, Shenzhen'
      },
      nearestMetro: 'Huaqiang North Station (Line 2/7)',
      operatingHours: '10:00 - 19:00',
      moqLevel: 'Medium'
    },
    {
      id: 'mingtong-commercial-city',
      cityId: 'shenzhen',
      name: {
        ar: 'مدينة مينغتونغ التجارية (Mingtong Commercial City)',
        en: 'Mingtong Commercial City',
        zh: '明通数码城 / 明通美妆城'
      },
      type: 'Wholesale',
      category: 'Cosmetics & Digital Accessories',
      description: {
        ar: 'المجمع الشهير الذي يجمع بين إكسسوارات الهواتف ومستحضرات التجميل بالجملة؛ يضم آلاف المتاجر للعطور، العناية بالبشرة، وأدوات المكياج إلى جانب ملحقات التقنية الاستهلاكية.',
        en: 'Famous commercial center housing wholesale beauty, cosmetics, skincare, and fragrance distributors alongside consumer tech accessories and live-streaming merchandise.'
      },
      address: {
        ar: 'طريق باوهوا، هواكيانغ الشمالي، فوتيان، شينزن',
        en: 'Baohua Road, Huaqiangbei, Futian District, Shenzhen'
      },
      nearestMetro: 'Huaxin Station (Line 3/7)',
      operatingHours: '10:30 - 20:00',
      moqLevel: 'Low'
    },
    {
      id: 'pacific-security-protection-market',
      cityId: 'shenzhen',
      name: {
        ar: 'سوق باسيفيك لأنظمة الأمن والمراقبة (Pacific Security Market)',
        en: 'Pacific Security & Protection Market',
        zh: '太平洋安防专业市场'
      },
      type: 'Wholesale',
      category: 'Security & Surveillance Equipment',
      description: {
        ar: 'السوق المتخصص الأول عالمياً لأنظمة المراقبة الذكية؛ كاميرات CCTV وشبكات IP، أجهزة تسجيل NVR و DVR، بوابات التحكم بالدخول، أجهزة الإنذار وأجهزة الكشف بالأشعة السينية.',
        en: 'The premier global wholesale marketplace for security cameras, IP & CCTV systems, NVRs, biometric door access control, perimeter security, walk-through metal detectors, and commercial alarm networks.'
      },
      address: {
        ar: 'تقاطع طريق جينبينغ وطريق تشن هوا، فوتيان، شينزن',
        en: 'Zhenhua Road & Zhenping Rd, Huaqiangbei, Futian District, Shenzhen'
      },
      nearestMetro: 'Yannan Station (Line 2)',
      operatingHours: '09:30 - 18:00',
      moqLevel: 'Medium'
    },
    {
      id: 'feiyang-times-mansion',
      cityId: 'shenzhen',
      name: {
        ar: 'سوق فييانغ لقطع غيار الهواتف المجددة (Feiyang Times)',
        en: 'Feiyang Times Mansion',
        zh: '飞扬时代大厦'
      },
      type: 'Wholesale',
      category: 'Refurbished Phones & Replacement Spares',
      description: {
        ar: 'أكبر سوق مغلق عالمياً لتجارة الهواتف المستعملة والمجددة (Refurbished)، وقطع الغيار الأصلية المصلحة، والشاشات وبطاريات الاستبدال ومعدات فك وصيانة الهواتف الاحترافية.',
        en: 'The world’s central exchange for graded second-hand and refurbished smartphones, original replacement screens, motherboard repair ICs, and high-precision phone repair machinery.'
      },
      address: {
        ar: 'طريق هوافا الشمالي، فوتيان، شينزن',
        en: 'Huafa North Road, Futian District, Shenzhen'
      },
      nearestMetro: 'Huaqiang North Station (Line 2/7)',
      operatingHours: '13:00 - 19:30',
      moqLevel: 'High'
    },
    {
      id: 'shuibei-international-jewelry-center',
      cityId: 'shenzhen',
      name: {
        ar: 'مركز شويبي الدولي لتجارة المجوهرات والذهب (Shuibei Jewelry Center)',
        en: 'Shuibei International Jewelry Trade Center',
        zh: '水贝国际珠宝交易中心'
      },
      type: 'Wholesale',
      category: 'Gold, Diamonds & Fine Jewelry',
      description: {
        ar: 'عاصمة الذهب والمجوهرات الأولى في آسيا بدون منازع؛ يعالج مجمع شويبي أكثر من 70% من إجمالي مبيعات الذهب والمجوهرات في الصين، ويشمل آلاف صالات العرض للذهب الخالص (عيار 24 و 18)، الألماس، والفضة.',
        en: 'Asia’s uncontested jewelry and gold capital. Shuibei handles over 70% of China’s precious jewelry wholesale volume, featuring thousands of showrooms for 24K/18K pure gold, certified loose diamonds, platinum, and fine silver.'
      },
      address: {
        ar: 'شارع بيلي الشمالي، منطقة لوهو، شينزن',
        en: 'Beili North Road, Luohu District, Shenzhen'
      },
      nearestMetro: 'Shuibei Station (Line 3) / Tianbei Station (Line 7)',
      operatingHours: '09:30 - 18:30',
      moqLevel: 'Flexible'
    },
    {
      id: 'jinli-international-jewelry-center',
      cityId: 'shenzhen',
      name: {
        ar: 'مركز جينلي الدولي للأحجار الكريمة والمجوهرات (Jinli Center)',
        en: 'Jinli International Jewelry Center',
        zh: '金丽国际珠宝交易中心'
      },
      type: 'Wholesale',
      category: 'Gemstones, Pearls & Custom Jewelry',
      description: {
        ar: 'مركز متخصص يركز على الأحجار الكريمة الطبيعية (الياقوت، الزمرد، الزفير)، لؤلؤ المياه العذبة والمالحة، وتصنيع المجوهرات المخصصة للعلامات التجارية العالمية.',
        en: 'Specialized international jewelry mall focused on colored gemstones (rubies, sapphires, emeralds), freshwater & South Sea pearls, jadeite, and OEM custom jewelry manufacturing.'
      },
      address: {
        ar: 'طريق تيانبي الرابع، منطقة لوهو، شينزن',
        en: 'Tianbei 4th Road, Luohu District, Shenzhen'
      },
      nearestMetro: 'Tianbei Station (Line 7)',
      operatingHours: '10:00 - 18:30',
      moqLevel: 'Medium'
    },
    {
      id: 'nanyou-wholesale-clothing-market',
      cityId: 'shenzhen',
      name: {
        ar: 'سوق نانيو للملابس الراقية والتصاميم الأصلية (Nanyou Fashion)',
        en: 'Nanyou High-End Wholesale Clothing Market',
        zh: '南油服装批发市场'
      },
      type: 'Wholesale',
      category: 'High-End Fashion & Designer Apparel',
      description: {
        ar: 'الوجهة الأولى في الصين لأصحاب البوتيكات ومستوردي ملابس النساء الفاخرة؛ تصاميم مصممين مستقلين (Original Design)، أقمشة فاخرة من الحرير والصوف الطبيعي، وجودة خياطة تنافس الماركات الأوروبية.',
        en: 'China’s premier sourcing hub for high-end boutique women’s apparel and original designer collections, featuring premium natural silk, cashmere coats, runway-grade tailoring, and exclusive collections.'
      },
      address: {
        ar: 'طريق نانهوا التجاري، نانشان، شينزن',
        en: 'Nanyou Commercial Area, Dongbin Road, Nanshan District, Shenzhen'
      },
      nearestMetro: 'Nanyou Station (Line 9/12)',
      operatingHours: '10:00 - 19:00',
      moqLevel: 'Low'
    },
    {
      id: 'dongmen-baima-clothing-market',
      cityId: 'shenzhen',
      name: {
        ar: 'سوق دونغمن بايما لملابس الجملة (Dongmen Baima)',
        en: 'Dongmen Baima Garment Wholesale Market',
        zh: '东门白马服装批发市场'
      },
      type: 'Wholesale',
      category: 'Mass Market Apparel & Fashion',
      description: {
        ar: 'سوق تجاري ضخم للملابس النسائية والرجالية والشبابية بأسعار اقتصادية وجملة تجارية؛ مناسب للمتاجر الإلكترونية وتجار التجزئة والملابس اليومية السريعة.',
        en: 'High-volume fashion wholesale complex catering to mass-market women’s, men’s, and streetwear clothing with rapid turnaround times and attractive bulk wholesale pricing.'
      },
      address: {
        ar: 'شارع دونغمن للمشاة، منطقة لوهو، شينزن',
        en: 'Dongmen Pedestrian Street, Luohu District, Shenzhen'
      },
      nearestMetro: 'Laojie Station (Line 1/3)',
      operatingHours: '09:00 - 19:00',
      moqLevel: 'Medium'
    },
    {
      id: 'sungang-stationery-toys-market',
      cityId: 'shenzhen',
      name: {
        ar: 'سوق سونغانغ للقرطاسية والألعاب والهدايا (Sungang Toys & Stationery)',
        en: 'Sungang Stationery, Toys & Gifts Wholesale Market',
        zh: '笋岗文具玩具批发市场'
      },
      type: 'Wholesale',
      category: 'Toys, Stationery & Festive Gifts',
      description: {
        ar: 'السوق المركزي في شينزن لألعاب الأطفال البلاستيكية والإلكترونية، الأدوات المكتبية والمدرسية، لوازم الحفلات، زينة الأعياد، ودفاتر ومواد التغليف الفنية.',
        en: 'Shenzhen’s core trading market for children’s toys, educational stationery, office supplies, promotional gifts, holiday decorations, and creative packaging materials.'
      },
      address: {
        ar: 'طريق باوجي، سونغانغ، منطقة لوهو، شينزن',
        en: 'Bao’an North Road, Sungang, Luohu District, Shenzhen'
      },
      nearestMetro: 'Sungang Station (Line 7)',
      operatingHours: '09:00 - 18:30',
      moqLevel: 'Low'
    },
    {
      id: 'fuqiang-watch-clock-market',
      cityId: 'shenzhen',
      name: {
        ar: 'سوق فوتشيانغ للساعات وقطع الغيار (Fuqiang Watch Market)',
        en: 'Shenzhen Fuqiang Clock & Watch Wholesale Market',
        zh: '深圳福强钟表批发市场'
      },
      type: 'Wholesale',
      category: 'Watches, Straps & Watchmaking Parts',
      description: {
        ar: 'مركز الجملة لساعات اليد الكوارتز والميكانيكية، علب الساعات الفاخرة، الأحزمة الجلدية والمعدنية، ومحركات الساعات (Movements) ومعدات التجميع وفحص مقاومة الماء.',
        en: 'Specialized trading center for quartz & mechanical wristwatches, custom watch cases, stainless steel & leather straps, watch movements, precision assembly tooling, and water-resistance testing equipment.'
      },
      address: {
        ar: 'طريق بينهاي، منطقة فوتيان، شينزن',
        en: 'Futian Commercial Watch District, Shenzhen'
      },
      nearestMetro: 'Futian Checkpoint Station (Line 4/10)',
      operatingHours: '09:30 - 18:00',
      moqLevel: 'Medium'
    }
  ],

  // ─── 2. ALL 9 MUNICIPAL DISTRICTS (EXHAUSTIVE) ──────────────────────────────
  districts: [
    {
      id: 'futian',
      cityId: 'shenzhen',
      name: { ar: 'منطقة فوتيان (Futian District)', en: 'Futian District (福田区)' },
      activityType: { ar: 'مركز المال والأعمال وسوق الإلكترونيات العالمي', en: 'Financial CBD & Global Electronics Capital' },
      mainProducts: ['إلكترونيات هواكيانغ بي', 'مكونات IC', 'شواحن GaN', 'أنظمة أمن ومراقبة'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Futian Station (Line 2/3/11) & Huaqiang North (Line 2/7)'
    },
    {
      id: 'luohu',
      cityId: 'shenzhen',
      name: { ar: 'منطقة لوهو (Luohu District)', en: 'Luohu District (罗湖区)' },
      activityType: { ar: 'عاصمة الذهب والمجوهرات وسوق التجارة الحدودية', en: 'Gold & Jewelry Capital & Border Commerce' },
      mainProducts: ['ذهب خام وعيار 18', 'ألماس وأحجار كريمة', 'ملابس دونغمن', 'ألعاب وقرطاسية سونغانغ'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Luohu Station (Line 1 - HK Border) & Shuibei (Line 3)'
    },
    {
      id: 'nanshan',
      cityId: 'shenzhen',
      name: { ar: 'منطقة نانشان (Nanshan District)', en: 'Nanshan District (南山区)' },
      activityType: { ar: 'سيليكون فالي الشرق ومصممي الأزياء الراقية', en: 'High-Tech Silicon Valley & Luxury Designer Fashion' },
      mainProducts: ['أزياء نانيو الراقية', 'روبوتات وبرمجيات', 'طائرات DJI درون', 'إلكترونيات دقيقة'],
      tradeFocus: 'Mixed',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Hi-Tech Park Station (Line 1) & Nanyou (Line 9/12)'
    },
    {
      id: 'baoan',
      cityId: 'shenzhen',
      name: { ar: 'منطقة باوان (Bao’an District)', en: 'Bao’an District (宝安区)' },
      activityType: { ar: 'مركز المعارض الدولية الأكبر ومصانع القوالب والتجميع', en: 'World Exhibition Capital & SMT Hardware Manufacturing' },
      mainProducts: ['خطوط SMT وتجميع PCB', 'قوالب البلاستيك والمعادن', 'معارض تجارية دولية', 'شواحن ذكية'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Shenzhen World Station (Line 12/20) & Airport (Line 11)'
    },
    {
      id: 'longhua',
      cityId: 'shenzhen',
      name: { ar: 'منطقة لونغوا (Longhua District)', en: 'Longhua District (龙华区)' },
      activityType: { ar: 'قاعدة تصنيع الإلكترونيات الضخمة ومدينة الموضة', en: 'Mega Electronics Manufacturing (Foxconn) & Fashion Town' },
      mainProducts: ['تجميع إلكترونيات Foxconn', 'ملابس دالانغ الماركات', 'أجهزة كهرومنزلية', 'محولات طاقة'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Shenzhen North Railway Station (Line 4/5/6) & Dalang Station'
    },
    {
      id: 'longgang',
      cityId: 'shenzhen',
      name: { ar: 'منطقة لونغقانغ (Longgang District)', en: 'Longgang District (龙岗区)' },
      activityType: { ar: 'مقر هواوي العالمي وعاصمة النظارات الطبية واللوحات', en: 'Huawei Global Tech Hub, Eyewear Capital & Art Village' },
      mainProducts: ['معدات اتصالات هواوي', 'نظارات هينغقانغ الفاخرة', 'لوحات زيتية دافين', 'إلكترونيات استهلاكية'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Bantian Station (Line 5/10) & Henggang (Line 3)'
    },
    {
      id: 'yantian',
      cityId: 'shenzhen',
      name: { ar: 'منطقة يانتيان (Yantian District)', en: 'Yantian District (盐田区)' },
      activityType: { ar: 'ميناء الحاويات العملاق والخدمات اللوجستية البحرية', en: 'Deepwater Container Mega-Port & Global Maritime Logistics' },
      mainProducts: ['حاويات الشحن البحري', 'مستودعات جمركية معفاة', 'تخليص ومناولة بحرية'],
      tradeFocus: 'Commercial Office',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Yantian Port West Station (Line 8)'
    },
    {
      id: 'pingshan',
      cityId: 'shenzhen',
      name: { ar: 'منطقة بينغشان (Pingshan District)', en: 'Pingshan District (坪山区)' },
      activityType: { ar: 'مقر سيارات BYD الكهربائية والطب الحيوي', en: 'BYD Electric Vehicles Mega-Hub & Biomedical Park' },
      mainProducts: ['سيارات BYD كهربائية', 'بطاريات Blade ليثيوم', 'أجهزة طبية', 'دوائر أشباه الموصلات'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestMetro: 'Pingshan Railway Station (Line 14/16)'
    },
    {
      id: 'guangming',
      cityId: 'shenzhen',
      name: { ar: 'منطقة غوانغمينغ (Guangming District)', en: 'Guangming District (光明区)' },
      activityType: { ar: 'مدينة العلوم وشاشات العرض المتقدمة CSOT', en: 'Science City & Display Panel Mega-Hub (CSOT)' },
      mainProducts: ['شاشات تلفزيون LCD و OLED', 'رقائق بصرية', 'معدات فحص متقدمة'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: false,
      suitableForBusinessTravel: false,
      nearestMetro: 'Guangming Station (Line 6)'
    }
  ],

  // ─── 3. INDUSTRIAL CLUSTERS & FACTORY ZONES (EXHAUSTIVE) ───────────────────
  industrialZones: [
    {
      id: 'nanshan-tech-park',
      cityId: 'shenzhen',
      name: {
        ar: 'مجمع نانشان العالي للتكنولوجيا (Shenzhen High-Tech Park)',
        en: 'Shenzhen High-Tech Industrial Park (Nanshan)'
      },
      clusterSpecialization: {
        ar: 'أشباه الموصلات، الذكاء الاصطناعي، طائرات الدرون، والبرمجيات',
        en: 'Semiconductors, Artificial Intelligence, Drones & Software'
      },
      factoryTypes: ['R&D Centers', 'High-Tech Pilot Factories', 'Cleanroom Laboratories'],
      keyProducts: ['طائرات درون DJI', 'معالجات ذكاء اصطناعي', 'أنظمة تحكم روبوتية'],
      specializationLevel: 'High'
    },
    {
      id: 'longgang-huawei-tech-city',
      cityId: 'shenzhen',
      name: {
        ar: 'مدينة هواوي التكنولوجية بـ بانتيان (Huawei Bantian Base)',
        en: 'Huawei Bantian Industrial Park & Longgang Tech Base'
      },
      clusterSpecialization: {
        ar: 'شبكات الاتصالات 5G، الخوادم السحابية، والمحطات اللاسلكية',
        en: '5G Telecommunication Equipment, Cloud Servers & Wireless Terminals'
      },
      factoryTypes: ['Automated Assembly Plants', 'Testing Laboratories', 'Telecom Hardware Units'],
      keyProducts: ['أبراج ومعدات اتصالات 5G', 'راوترات وسيرفرات شبكات', 'أجهزة إلكترونية ذكية'],
      specializationLevel: 'High'
    },
    {
      id: 'baoan-fuyong-hardware-hub',
      cityId: 'shenzhen',
      name: {
        ar: 'قاعدة فويونغ للتصنيع الذكي وخطوط SMT (Bao’an Fuyong)',
        en: 'Bao’an Fuyong Smart SMT & Injection Hardware Hub'
      },
      clusterSpecialization: {
        ar: 'خطوط تركيب اللوحات SMT، قوالب الحقن البلاستيكية، والأجهزة الصغيرة',
        en: 'SMT Electronic Assembly, Plastic Injection Molds & Consumer Hardware'
      },
      factoryTypes: ['OEM/ODM Electronic Factories', 'Mold Tooling Workshops', 'Plastic Housing Plants'],
      keyProducts: ['شواحن GaN سريعة', 'لوحات تحكم إلكترونية', 'قوالب بلاستيك ومعدات استهلاكية'],
      specializationLevel: 'High'
    },
    {
      id: 'longhua-dalang-fashion-town',
      cityId: 'shenzhen',
      name: {
        ar: 'مدينة دالانغ للأزياء والملابس الجاهزة (Dalang Fashion Town)',
        en: 'Longhua Dalang Fashion Industrial Town'
      },
      clusterSpecialization: {
        ar: 'تصنيع وحياكة ملابس العلامات التجارية الصينية والملابس النسائية',
        en: 'Apparel Brands Manufacturing, Industrial Weaving & Designer Garments'
      },
      factoryTypes: ['Garment Mass Production Plants', 'Embroidery & Dyeing Units', 'Fashion Design Centers'],
      keyProducts: ['معاطف الكشمير والحرير', 'فساتين السهرة والبدلات', 'ملابس نسائية جاهزة للتصدير'],
      specializationLevel: 'High'
    },
    {
      id: 'henggang-eyewear-cluster',
      cityId: 'shenzhen',
      name: {
        ar: 'تجمع هينغقانغ لصناعة النظارات العالمية (Henggang Eyewear Base)',
        en: 'Henggang Optical & Eyewear Manufacturing Cluster'
      },
      clusterSpecialization: {
        ar: 'تصنيع أكثر من 50% من إطارات النظارات الطبية والشمسية الفاخرة عالمياً',
        en: 'Manufacturing >50% of the World’s Luxury Eyewear & Optical Frames'
      },
      factoryTypes: ['Precision Acetate Mills', 'Titanium Laser Welding Workshops', 'Lens Polishing Plants'],
      keyProducts: ['إطارات نظارات تيتانيوم فاخرة', 'نظارات شمسية مستقطبة', 'عدسات بصرية طبية'],
      specializationLevel: 'High'
    },
    {
      id: 'pingshan-byd-ev-mega-park',
      cityId: 'shenzhen',
      name: {
        ar: 'مجمع بي واي دي لصناعة السيارات الكهربائية (BYD Pingshan Base)',
        en: 'BYD Electric Vehicle & Blade Battery Industrial Park (Pingshan)'
      },
      clusterSpecialization: {
        ar: 'السيارات الكهربائية، حزم بطاريات الليثيوم، وإلكترونيات المركبات',
        en: 'Electric Vehicles, Blade Battery Packs & Automotive Semiconductor Modules'
      },
      factoryTypes: ['Automotive Robotic Assembly Lines', 'Battery Cell Gigafactories'],
      keyProducts: ['سيارات كهربائية وهجينة BYD', 'بطاريات شفرية Blade Battery', 'محركات كهربائية ومحولات'],
      specializationLevel: 'High'
    },
    {
      id: 'guangming-csot-display-base',
      cityId: 'shenzhen',
      name: {
        ar: 'قاعدة هوا شينغ لشاشات العرض الذكية (CSOT Display Hub)',
        en: 'Guangming CSOT / TCL Optoelectronics Mega-Base'
      },
      clusterSpecialization: {
        ar: 'تصنيع شاشات العرض الكبيرة وشاشات OLED و Mini-LED عالمياً',
        en: 'Ultra-Large Generation 11 LCD, OLED & Mini-LED Display Panels'
      },
      factoryTypes: ['Automated Cleanroom Glass Processing Plants', 'Display Packaging Lines'],
      keyProducts: ['شاشات تلفزيون فائقة الدقة 4K/8K', 'لوحات تحكم لمسية ذكية', 'شاشات سيارات رقمية'],
      specializationLevel: 'High'
    }
  ],

  // ─── 4. MAJOR ANNUAL TRADE FAIRS (EXHAUSTIVE) ──────────────────────────────
  tradeFairs: [
    {
      id: 'shenzhen-hi-tech-fair',
      name: {
        ar: 'معرض الصين الدولي للتقنيات العالية (China Hi-Tech Fair - CHTF)',
        en: 'China Hi-Tech Fair (CHTF - 高交会)'
      },
      industry: 'Artificial Intelligence, Semiconductors & Smart Tech',
      venue: {
        ar: 'مركز شينزن الدولي للمعارض (Bao’an) ومركز معارض فوتيان (Futian)',
        en: 'Shenzhen World Exhibition (Bao’an) & Futian Convention Center'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر نوفمبر',
        en: 'Annually in November'
      },
      officialWebsite: 'https://www.chtf.com',
      bestFor: ['Tech Importers', 'AI & Hardware Buyers', 'Venture Capitalists']
    },
    {
      id: 'cioe-optoelectronic-expo',
      name: {
        ar: 'المعرض الدولي للكهروضوئيات والبصريات والليزر (CIOE)',
        en: 'China International Optoelectronic Exposition (CIOE - 光博会)'
      },
      industry: 'Optics, Lasers, Infrared & Optical Sensors',
      venue: {
        ar: 'مركز شينزن الدولي للمعارض والمؤتمرات (باوان - Shenzhen World WECC)',
        en: 'Shenzhen World Exhibition & Convention Center (Bao’an)'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر سبتمبر',
        en: 'Annually in September'
      },
      officialWebsite: 'https://www.cioe.cn',
      bestFor: ['Optics Manufacturers', 'Fiber Optic Buyers', 'Camera & Sensor Importers']
    },
    {
      id: 'shenzhen-gift-and-home-fair',
      name: {
        ar: 'معرض شينزن الدولي للهدايا والمنتجات المنزلية (Shenzhen Gift Fair)',
        en: 'Shenzhen International Gift, Handicrafts, Watches & Houseware Fair'
      },
      industry: 'Gifts, Promotional Goods, Houseware & Electronics',
      venue: {
        ar: 'مركز شينزن الدولي للمعارض والمؤتمرات (Shenzhen World WECC)',
        en: 'Shenzhen World Exhibition & Convention Center (Bao’an)'
      },
      occurrence: {
        ar: 'دورتان سنوياً: دورة الربيع (أبريل) ودورة الخريف (أكتوبر)',
        en: 'Twice a year: Spring (April) & Autumn (October)'
      },
      officialWebsite: 'https://www.rxhuabo.com.cn',
      bestFor: ['Wholesale Traders', 'Gift Importers', 'Corporate Branding Sourcing']
    },
    {
      id: 'ites-industrial-manufacturing-fair',
      name: {
        ar: 'معرض شينزن الدولي لتصنيع المعدات الصناعية والقوالب (ITES)',
        en: 'ITES Shenzhen International Industrial Manufacturing Exhibition'
      },
      industry: 'CNC Machines, Industrial Automation, Robotics & Tooling',
      venue: {
        ar: 'مركز شينزن الدولي للمعارض والمؤتمرات (Bao’an WECC)',
        en: 'Shenzhen World Exhibition & Convention Center (Bao’an)'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر مارس / أبريل',
        en: 'Annually in March / April'
      },
      officialWebsite: 'https://www.iteschina.com',
      bestFor: ['Factory Owners', 'Machinery Importers', 'Mold Buyers']
    },
    {
      id: 'cmef-medical-equipment-fair',
      name: {
        ar: 'معرض الصين الدولي للمعدات والأجهزة الطبية (CMEF Shenzhen)',
        en: 'China International Medicinal Equipment Fair (CMEF)'
      },
      industry: 'Medical Devices, Diagnostic Imaging & Hospital Equipment',
      venue: {
        ar: 'مركز شينزن الدولي للمعارض (Shenzhen World WECC)',
        en: 'Shenzhen World Exhibition & Convention Center (Bao’an)'
      },
      occurrence: {
        ar: 'يقام دورياً في خريف كل عام',
        en: 'Autumn edition regularly hosted in Shenzhen'
      },
      officialWebsite: 'https://www.cmef.com.cn',
      bestFor: ['Medical Suppliers', 'Hospital Sourcing Directors', 'Pharma Tech Importers']
    }
  ],

  // ─── 5. SOURCING PRODUCTS DEEP DIVE ─────────────────────────────────────────
  sourcingProducts: [
    {
      id: 'sz-consumer-electronics',
      productName: { ar: 'الإلكترونيات الاستهلاكية والشواحن الذكية', en: 'Consumer Electronics & Smart Charging Hardware' },
      industryCategory: 'Electronics',
      whyThisCity: { ar: 'أسرع دورة إنتاج وتطوير للمنتجات الإلكترونية في العالم بدعم من هواكيانغ بي ومصانع باوان.', en: 'Fastest product prototyping and hardware supply chain on earth backed by Huaqiangbei and Bao’an factories.' },
      mainManufacturingArea: { ar: 'منطقة فوتيان وباوان ولونغوا', en: 'Futian, Bao’an, and Longhua' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'sz-security-cctv',
      productName: { ar: 'أنظمة المراقبة والكاميرات وأجهزة الأمان', en: 'CCTV Cameras & Smart Security Solutions' },
      industryCategory: 'Security Tech',
      whyThisCity: { ar: 'سوق باسيفيك في شينزن يزود أكثر من 60% من أسواق الشرق الأوسط بكاميرات المراقبة وأجهزة NVR.', en: 'Pacific Security Market supplies over 60% of commercial security equipment across the Middle East.' },
      mainManufacturingArea: { ar: 'فوتيان وباوان ولونغقانغ', en: 'Futian and Longgang' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'sz-precious-jewelry',
      productName: { ar: 'المجوهرات والذهب الخالص والأحجار الكريمة', en: 'Fine Gold Jewelry, Diamonds & Gemstones' },
      industryCategory: 'Jewelry',
      whyThisCity: { ar: 'سوق شويبي يعالج أكثر من 70% من مجوهرات الصين ويقدم أسعار جملة ومصنعية غير مسبوقة عالمياً.', en: 'Shuibei handles over 70% of China’s jewelry wholesale, offering unmatched pricing and precision craftsmanship.' },
      mainManufacturingArea: { ar: 'منطقة لوهو (حي شويبي)', en: 'Luohu District (Shuibei Hub)' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'sz-designer-fashion',
      productName: { ar: 'ملابس النساء الراقية والأزياء الأصلية', en: 'High-End Women’s Designer Apparel' },
      industryCategory: 'Apparel',
      whyThisCity: { ar: 'سوق نانيو ومصانع دالانغ تقدم أعلى خامات الحرير والكشمير بتصاميم تنافس بيوت الأزياء العالمية.', en: 'Nanyou and Dalang town offer runway-level silk, wool, and linen garments with original boutique patterns.' },
      mainManufacturingArea: { ar: 'نانشان (نانيو) ولونغوا (دالانغ)', en: 'Nanshan (Nanyou) & Longhua (Dalang)' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],

  // ─── 6. LOGISTICS INFRASTRUCTURE ────────────────────────────────────────────
  logistics: {
    nearestAirports: [
      'Shenzhen Bao’an International Airport (SZX - مطار شينزن باوان الدولي)',
      'Hong Kong International Airport (HKG - مطار هونغ كونغ الدولي - 45 دقيقة عبر العبارة السريعة من ميناء شيكو أو القطار)'
    ],
    seaPorts: [
      'Yantian Deepwater Port (ميناء يانتيان - أضخم محطة حاويات في جنوب الصين وأسرع خطوط للشحن للخليج والبحر الأحمر)',
      'Shekou Container & Passenger Port (ميناء شيكو - خطوط عبارات مباشرة لمطار هونغ كونغ وماكاو وحاويات تجارية)'
    ],
    highSpeedRailwayStations: [
      'Shenzhen North Railway Station (محطة قطار شينزن الشمالية - تربط بجميع مدن الصين وغوانغتشو في 29 دقيقة)',
      'Futian High-Speed Railway Station (محطة فوتيان تحت الأرض - 14 دقيقة فقط إلى محطة ويست كولون بقلب هونغ كونغ)'
    ],
    seaFreightSuitability: {
      ar: 'ميناء يانتيان وشيكو يقدمان أعلى كفاءة شحن بحري في العالم، مع خطوط مباشرة ومجدولة أسبوعياً إلى موانئ جبل علي، جدة، السخنة، وبيروت.',
      en: 'Yantian and Shekou terminals offer premier global container liner services with weekly direct express routes to Dubai Jebel Ali, Jeddah, Sokhna, and Dammam.'
    },
    airFreightSuitability: {
      ar: 'شحن جوي فائق السرعة عبر مطار باوان المخصص للبضائع التقنية، وبالتكامل السلس مع مركز الشحن الجوي العالمي بمطار هونغ كونغ المجاور.',
      en: 'Outstanding high-velocity air cargo infrastructure via Shenzhen Bao’an dedicated cargo terminals and bonded intermodal links to HKIA cargo hub.'
    },
    primaryCargoRoutes: {
      ar: [
        'خط الشرق الأوسط السريع (يانتيان ➔ سنغافورة ➔ جبل علي ➔ ميناء جدة الإسلامي)',
        'خط البحر الأحمر المباشر لميناء السخنة والعقبة',
        'خط موانئ شمال إفريقيا وأوروبا عبر مضيق ملقا وقناة السويس'
      ],
      en: [
        'Middle East Direct Liner (Yantian ➔ Singapore ➔ Jebel Ali ➔ Jeddah)',
        'Red Sea Express (Sokhna / Aqaba)',
        'Direct Transpacific & European Tech Freight Corridors'
      ]
    }
  },

  // ─── 7. BUSINESS TRAVEL GUIDE (HOTELS & HALAL DINING) ───────────────────────
  businessTravelGuide: {
    bestVisitMonths: ['أكتوبر', 'نوفمبر', 'ديسمبر', 'مارس', 'أبريل'],
    suggestedStayDays: 4,
    weatherSummary: {
      ar: 'مناخ شبه استوائي دافئ؛ شتاء معتدل وممتع جداً للزيارة والتسوق (15°C إلى 24°C)، وصيف حار ورطب مع أمطار موسمية.',
      en: 'Subtropical climate; pleasant and dry in autumn/winter (15°C - 24°C), hot and humid in summer with occasional rainfall.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة فوتيان CBD وشارع هواكيانغ بي: مثالية لتجار الإلكترونيات والراغبين بالقرب من قطار هونغ كونغ السريع.',
        en: 'Futian CBD & Huaqiangbei: Optimal for electronics buyers and quick high-speed rail access to Hong Kong.'
      },
      {
        ar: 'منطقة باوان (Shenzhen World WECC): الخيار الأول لحضور المعارض الدولية الكبرى كمعرض الهدايا والإلكترونيات.',
        en: 'Bao’an WECC: Best area for visitors attending mega-expos at Shenzhen World Exhibition Center.'
      },
      {
        ar: 'منطقة لوهو (Shuibei): الأفضل لتجار الذهب والمجوهرات والأقمشة والقرب من المعبر الحدودي التقليدي.',
        en: 'Luohu District (Near Shuibei & Dongmen): Ideal for jewelry, watch, and apparel traders near border control.'
      }
    ],
    localTransportAdvice: {
      ar: 'شبكة مترو شينزن من الأحدث عالمياً وتغطي جميع الأسواق والمعارض. يمكن استخدام تطبيق Alipay أو WeChat لدفع تذاكر المترو مباشرة عبر رمز QR.',
      en: 'Shenzhen metro is world-class, linking all wholesale markets, borders, and airports. Pay directly via Alipay or WeChat Transport QR codes.'
    },
    languageTips: {
      ar: 'اللغة المندرينية هي السائدة رسمياً، والإنجليزية مستخدمة بكثرة في شركات التكنولوجيا وهواكيانغ بي وفنادق الـ 5 نجوم. احتفظ بأسماء الأسواق بالرموز الصينية.',
      en: 'Mandarin is universally spoken. English is widely used in tech centers and 5-star hotels. Keep Chinese characters ready for taxi and Didi rides.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi Chuxing', 'MetroMan China', 'Amap (Gaode Maps)', 'VPN App'],

    // ─── Recommended Hotels ───
    recommendedHotels: [
      {
        id: 'futian-shangri-la-sz',
        name: {
          ar: 'فندق فوتيان شانغريلا شينزن',
          en: 'Futian Shangri-La Shenzhen',
          zh: '深圳福田香格里拉大酒店'
        },
        starRating: 5,
        category: { ar: 'فاخر 5 نجوم - مركز فوتيان', en: 'Luxury 5-Star - Futian CBD' },
        area: { ar: 'مركز فوتيان التجاري (قريب من سوق هواكيانغ بي)', en: 'Futian CBD (Near Huaqiangbei)' },
        highlights: {
          ar: 'موقع استراتيجي يبعد 8 دقائق عن سوق هواكيانغ بي ومباشرة أمام محطة قطار فوتيان السريع لهونغ كونغ.',
          en: 'Prime CBD location 8 minutes from Huaqiangbei and opposite Futian High-Speed Station to HK.'
        },
        address: {
          ar: '4088 طريق ييتياني، منطقة فوتيان، شينزن',
          en: '4088 Yitian Road, Futian District, Shenzhen'
        }
      },
      {
        id: 'grand-skylight-hotel-huaqiangbei',
        name: {
          ar: 'فندق جراند سكاي لايت هواكيانغ بي',
          en: 'Grand Skylight Hotel Shenzhen (Huaqiangbei)',
          zh: '深圳格兰德假日酒店（华强北）'
        },
        starRating: 4,
        category: { ar: 'تجاري ممتاز 4 نجوم - قلب سوق الإلكترونيات', en: 'Business 4-Star - In Huaqiangbei' },
        area: { ar: 'شارع هواكيانغ الشمالي مباشرة', en: 'Heart of Huaqiangbei Market Street' },
        highlights: {
          ar: 'يقع حرفياً على مدخل أسواق الإلكترونيات، يفضله تجار ومستوردو الإلكترونيات لسهولة شحن وتخزين العينات.',
          en: 'Located directly at the entrance of electronics markets; perfect for buyers moving merchandise and samples.'
        },
        address: {
          ar: 'طريق شيننان الأوسط، تقاطع هواكيانغ بي، فوتيان، شينزن',
          en: 'Shennan Central Road, Huaqiangbei, Futian, Shenzhen'
        }
      },
      {
        id: 'the-st-regis-shenzhen-luohu',
        name: {
          ar: 'فندق سانت ريجيس شينزن (برج KK100)',
          en: 'The St. Regis Shenzhen (Luohu KK100)',
          zh: '深圳瑞吉酒店'
        },
        starRating: 5,
        category: { ar: 'فاخر 5 نجوم - إطلالة ناطحة سحاب', en: 'Ultra-Luxury 5-Star Sky Hotel' },
        area: { ar: 'منطقة لوهو (قريب من أسواق الذهب شويبي ومعبر هونغ كونغ)', en: 'Luohu Financial District' },
        highlights: {
          ar: 'يحتل الطوابق من 75 إلى 100 في برج KK100، إطلالة بانورامية كاملة على شينزن وهونغ كونغ وقريب من أسواق المجوهرات.',
          en: 'Occupies top floors of KK100 tower with panoramic views over Shenzhen & HK; 10 minutes to Shuibei jewelry hub.'
        },
        address: {
          ar: '5016 طريق شيننان الشرقي، لوهو، شينزن',
          en: '5016 Shennan East Road, Luohu District, Shenzhen'
        }
      },
      {
        id: 'hilton-shenzhen-world-exhibition-baoan',
        name: {
          ar: 'فندق هيلتون مركز شينزن العالمي للمعارض',
          en: 'Hilton Shenzhen World Exhibition & Convention Center',
          zh: '深圳国际会展中心希尔顿酒店'
        },
        starRating: 5,
        category: { ar: 'فندق معارض 5 نجوم - ملاصق لمركز باوان للمعارض', en: 'Expo 5-Star - Connected to WECC' },
        area: { ar: 'مركز معارض باوان الجديد (Bao’an WECC)', en: 'Bao’an Shenzhen World Exhibition Area' },
        highlights: {
          ar: 'مربوط مباشرة بممرات مركز المعارض الأكبر عالمياً، الخيار الإلزامي لزوار معارض الهدايا والبصريات والتصنيع.',
          en: 'Directly linked to Shenzhen World Exhibition halls; unbeatable convenience for trade fair attendees.'
        },
        address: {
          ar: '1 شارع تشانفانغ، باوان، شينزن',
          en: '1 Zhanfeng Road, Bao’an District, Shenzhen'
        }
      },
      {
        id: 'crowne-plaza-shenzhen-landmark',
        name: {
          ar: 'فندق كراون بلازا لاندمارك لوهو',
          en: 'Crowne Plaza Shenzhen Landmark',
          zh: '深圳富苑皇冠假日套房酒店'
        },
        starRating: 5,
        category: { ar: 'تجاري راقي 5 نجوم - لوهو', en: 'Business 5-Star - Luohu' },
        area: { ar: 'شارع نانهو التجاري، لوهو', en: 'Nanhu Road Commercial Hub, Luohu' },
        highlights: {
          ar: 'أجنحة فندقية رحبة تلائم الإقامات الطويلة والوفود التجارية، على مقربة من معبر لوهو وأسواق الأقمشة.',
          en: 'Spacious suites suitable for business delegations and long-stay importers near Luohu port.'
        },
        address: {
          ar: '3018 طريق نانهو، منطقة لوهو، شينزن',
          en: '3018 Nanhu Road, Luohu District, Shenzhen'
        }
      }
    ],

    // ─── Verified Halal & Arab Dining ───
    recommendedRestaurants: [
      {
        id: 'zhongdong-arab-sz',
        name: {
          ar: 'مطعم الشرق الأوسط العربي (Zhongdong Arab Restaurant)',
          en: 'Middle East Arab Restaurant Shenzhen',
          zh: '中东阿拉伯餐厅'
        },
        cuisineType: { ar: 'مأكولات عربية وخليجية وشامية حلال', en: 'Halal Arabic, Gulf & Levantine Dishes' },
        isHalal: true,
        address: {
          ar: 'طريق فوتيان، مجمع فوتيان التجاري، شينزن',
          en: 'Futian Commercial Street, Futian District, Shenzhen'
        },
        recommendedFor: {
          ar: 'مشاوي عربية على الفحم، كبسة لحم ضأن، حمص ومتبل، وخبز طازج مع جلسات عائلية وتجارية',
          en: 'Charcoal grills, lamb kabsa, fresh hummus, and authentic Arab hospitality for business diners'
        }
      },
      {
        id: 'mevlana-turkish-sz',
        name: {
          ar: 'مطعم مولانا التركي الحلال (Mevlana Turkish Restaurant)',
          en: 'Mevlana Turkish Restaurant Shenzhen',
          zh: '梅夫拉那土耳其餐厅'
        },
        cuisineType: { ar: 'مأكولات تركية وشواء عثماني حلال', en: 'Halal Turkish Grills, Pide & Kebabs' },
        isHalal: true,
        address: {
          ar: 'تقاطع طريق تشن هوا وطريق هواكيانغ الشمالي، فوتيان، شينزن',
          en: 'Zhenhua Road, Huaqiang North, Futian District, Shenzhen'
        },
        recommendedFor: {
          ar: 'شاورما تركية، كباب أضنة، بيتزا تركية (Pide)، وشاي تركي؛ يقع على بعد دقيقتين من سوق الإلكترونيات',
          en: 'Adana kebab, Turkish pide, shawarma, and tea; prime lunch location for electronics buyers in Huaqiangbei'
        }
      },
      {
        id: 'bait-al-mandi-sz',
        name: {
          ar: 'مطعم بيت المندي العربي (Bait Al Mandi)',
          en: 'Bait Al Mandi Restaurant Shenzhen',
          zh: '曼迪也门手抓饭餐厅'
        },
        cuisineType: { ar: 'مندي ومأكولات يمنية وخليجية حلال', en: 'Halal Yemeni Mandi & Arabian Rice' },
        isHalal: true,
        address: {
          ar: 'طريق نانشان التجاري، قرب حي التكنولوجيا، شينزن',
          en: 'Nanshan Commercial Street, Nanshan, Shenzhen'
        },
        recommendedFor: {
          ar: 'مندي لحم تيس بلدي، مظبي دجاج، وأرز بخاري مع سلطات حارة',
          en: 'Authentic slow-cooked mandi lamb, chicken madhbi, and traditional aromatic spiced rice'
        }
      },
      {
        id: 'zhongfa-muslim-restaurant-luohu',
        name: {
          ar: 'مطعم جونغ فا الإسلامي العريق (Zhongfa Muslim Restaurant)',
          en: 'Zhongfa Muslim Restaurant Luohu',
          zh: '中发源清真餐厅（罗湖店）'
        },
        cuisineType: { ar: 'مأكولات إسلامية صينية تقليدية (شينجيانغ والشمال الغربي)', en: 'Authentic Chinese Muslim & Xinjiang Halal' },
        isHalal: true,
        address: {
          ar: '2012 طريق تشونفينغ، منطقة لوهو، شينزن',
          en: '2012 Chunfeng Road, Luohu District, Shenzhen'
        },
        recommendedFor: {
          ar: 'خروف مشوي كامل على الطريقة الإسلامية الصينية، كباب شينجيانغ، نودلز لحم بقر مسحوبة يدوياً، وخبز نان',
          en: 'Traditional Xinjiang roast whole lamb, cumin skewers, Lanzhou hand-pulled beef noodles, and hot naan'
        }
      },
      {
        id: 'shenzhen-grand-mosque-canteen',
        name: {
          ar: 'مطعم ومطبخ مسجد شينزن الكبير (Grand Mosque Halal Kitchen)',
          en: 'Shenzhen Grand Mosque Halal Kitchen',
          zh: '深圳清真大寺清真清真餐厅'
        },
        cuisineType: { ar: 'مأكولات حلال موثقة من الجمعية الإسلامية', en: 'Islamic Association Certified Halal Dining' },
        isHalal: true,
        address: {
          ar: 'شارع ميلين الشرقي، مسجد شينزن الكبير، فوتيان، شينزن',
          en: 'Meilin East Road, Shenzhen Grand Mosque, Futian, Shenzhen'
        },
        recommendedFor: {
          ar: 'وجبات غداء حلال موثوقة 100%، وخاصة يوم الجمعة بعد صلاة الجمعة مع الجالية العربية والإسلامية',
          en: 'Guaranteed 100% halal meals, ideal for Friday congregational prayers and community business networking'
        }
      }
    ],

    // ─── Tourist & Cultural Landmarks ───
    touristAttractions: [
      {
        id: 'pingan-finance-centre-deck',
        name: {
          ar: 'منصة برج بينغ آن المالي العالمي (Ping An Skydeck)',
          en: 'Ping An Finance Centre Free Skydeck',
          zh: '平安金融中心云际观光层'
        },
        category: { ar: 'ناطحة سحاب ومعلم عالمي', en: 'Super-Tall Skyscraper' },
        description: {
          ar: 'خامس أطول برج في العالم بارتفاع 599 متراً؛ يوفر إطلالة 360 درجة تمتد حتى تلال هونغ كونغ وميناء شينزن.',
          en: 'The 599-meter skyscraper offering glass skydeck observation floors overlooking Shenzhen and Hong Kong.'
        },
        nearestMetro: 'Shopping Park Station (Line 1/3)'
      },
      {
        id: 'window-of-the-world-sz',
        name: {
          ar: 'منتزه نافذة على العالم (Window of the World)',
          en: 'Window of the World Theme Park',
          zh: '世界之窗'
        },
        category: { ar: 'معلم ثقافي وترفيهي', en: 'Cultural Theme Landmark' },
        description: {
          ar: 'منتزه شهير يضم 130 مجسماً لأشهر معالم الحضارة الإنسانية (الأهرامات، برج إيفل، تاج محل) مع عروض فنية مسائية.',
          en: 'Famous landmark showcasing scaled replicas of the world’s greatest architectural wonders.'
        },
        nearestMetro: 'Window of the World Station (Line 1/2)'
      },
      {
        id: 'dafen-oil-painting-village',
        name: {
          ar: 'قرية دافين للوحات الزيتية والفنون (Dafen Oil Painting Village)',
          en: 'Dafen Oil Painting Cultural Village',
          zh: '大芬油画村'
        },
        category: { ar: 'قرية فنون وتجارة لوحات تجارية', en: 'Art Wholesale & Oil Painting Village' },
        description: {
          ar: 'أكبر مركز في العالم لنسخ وتصدير اللوحات الزيتية الفنية والأعمال الجدارية بالجملة للفنادق والشركات العالمية.',
          en: 'The world’s largest production and export village for oil paintings, fine art replicas, and commercial hotel artwork.'
        },
        nearestMetro: 'Dafen Station (Line 3)'
      }
    ]
  },

  relatedCitySlugs: ['guangzhou', 'dongguan', 'foshan', 'hong-kong'],
  relatedProductSlugs: ['electronics', 'solar-renewable', 'hardware-tools'],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل شينزن التجاري الشامل 2026 | أسواق هواكيانغ بي، المجوهرات، المصانع والفنادق',
      en: 'Shenzhen Complete Sourcing & Business Guide 2026 | Electronics, Jewelry, Factories & Logistics'
    },
    description: {
      ar: 'أشمل دليل لاستيراد الإلكترونيات والمجوهرات من شينزن: خريطة أسواق هواكيانغ بي، سوق شويبي للذهب، أزياء نانيو، المصانع، الفنادق، والمطاعم الحلال.',
      en: 'Exhaustive trade guide to Shenzhen: Huaqiangbei electronics markets, Shuibei jewelry center, Nanyou fashion, factory clusters, business hotels, and halal dining.'
    }
  }
};
