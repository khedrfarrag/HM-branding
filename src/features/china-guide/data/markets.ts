import { IChinaCommercialEntity } from '../types';

export const CHINA_MARKETS_DATA: IChinaCommercialEntity[] = [
  // Yiwu / Futian Market
  {
    id: 'yiwu-international-trade-city-futian',
    slug: 'yiwu-international-trade-city-futian',
    subdomain: 'markets',
    citySlug: 'yiwu',
    name: {
      ar: 'سوق الفوتيان الدولي للسلع والمصنوعات الصغيرة (إيوو - أكبر سوق في العالم)',
      en: 'Yiwu International Trade City (Futian Market Complex)',
      zh: '义乌国际商贸城 (福田市场集群一至五区)'
    },
    category: {
      ar: 'سلع استهلاكية وهدايا وإكسسوارات وأجهزة وأدوات منزلية',
      en: 'Small Commodities, Gifts, Toys, Hardware & Daily Goods'
    },
    description: {
      ar: 'أكبر سوق جملة في العالم بمساحة تتجاوز 5.5 مليون متر مربع وأكثر من 75,000 متجر ومصنع مباشر؛ مقسم إلى 5 مناطق ضخمة تضم كل ما يمكن تصوره من السلع الصغيرة والتحف والأدوات المنزلية والكهربائية والألعاب.',
      en: 'The world largest wholesale market covering over 5.5 million square meters with 75,000+ factory stalls across Districts 1 through 5, supplying everyday goods globally.'
    },
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 9500,
    coordinates: { latitude: 29.3385, longitude: 120.1084 },
    address: {
      ar: 'طريق تشوتشو الشمالي، مدينة إيوو، مقاطعة تشيجيانغ',
      en: 'Chouzhou North Road, Yiwu, Jinhua, Zhejiang',
      zh: '浙江省义乌市稠州北路与商城大道交汇处'
    },
    contactInfo: { phone: '+86-579-8518-8888' },
    websiteUrl: 'https://www.chinagoods.com/',
    features: {
      ar: ['أكثر من 75,000 محل ومعرض مصنع', 'كميات طلب دنيا (MOQ) مرنة جداً', 'منظومة شحن وتخليص جمركي فوري', 'مكاتب شحن عربية ومطاعم حلال محيطة'],
      en: ['75,000+ Verified Supplier Stalls', 'Low/Flexible Minimum Order Quantities', 'Instant Container Drayage Ecosystem', 'Surrounded by Arab Logistics & Dining']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-09',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'عاصمة التجارة العالمية؛ لتغطية السوق بشكل فعال، يجب تخصيص 4 إلى 5 أيام عمل كاملة وترتيب خط سير محدد حسب أرقام المناطق والبوابات.',
        en: 'The world small commodities capital. Plan a minimum of 4-5 dedicated working days organized methodically by district gates.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Guangzhou / Canton Fair Pazhou
  {
    id: 'canton-fair-complex-pazhou',
    slug: 'canton-fair-complex-pazhou',
    subdomain: 'markets',
    citySlug: 'guangzhou',
    name: {
      ar: 'مجمع معرض كانتون الدولي (بازلت / Pazhou Complex كوانزو)',
      en: 'Canton Fair Complex (China Import and Export Fair Pazhou)',
      zh: '中国进出口商品交易会展馆 (广交会琶洲展馆)'
    },
    category: {
      ar: 'المعرض التجاري الشامل الأكبر في العالم (3 فترات ربيعية وخريفية)',
      en: 'World Foremost Comprehensive International Trade Fair'
    },
    description: {
      ar: 'أضخم مجمع معارض تجارية في آسيا؛ يستضيف معرض كانتون الدولي مرتين سنوياً (أبريل ومايو للربيع، وأكتوبر ونوفمبر للخريف) بمشاركة أكثر من 30,000 مصنع صيني مصنف ومئات آلاف المشترين الدوليين.',
      en: 'Asia largest modern exhibition facility, hosting the biannual Canton Fair with over 30,000 vetted Chinese manufacturing exhibitors.'
    },
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    rating: 5.0,
    reviewCount: 12400,
    coordinates: { latitude: 23.1025, longitude: 113.3615 },
    address: {
      ar: 'رقم 382 طريق يويجيانغ زونغ، حي هايتشو، كوانزو، غوانغدونغ',
      en: 'No. 382 Yuejiang Middle Road, Haizhu District, Guangzhou',
      zh: '广州市海珠区阅江中路382号'
    },
    contactInfo: { phone: '+86-20-2888-8999' },
    websiteUrl: 'https://www.cantonfair.org.cn/en-US',
    features: {
      ar: ['المعرض التجاري رقم 1 في العالم', 'تغطية لكافة قطاعات الصناعة والتكنولوجيا', 'محطات مترو Xingangdong و Pazhou', 'حضور مكثف للوفود والغرف التجارية العربية'],
      en: ['World #1 Trade Exhibition', 'Exhaustive Cross-Industry Sourcing', 'Direct Xingangdong & Pazhou Metro Lines', 'Massive Middle East Commercial Delegation Presence']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-11',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'المنصة الأهم لاكتشاف أحدث خطوط الإنتاج والتقنيات؛ يتطلب الحضور إصدار شارة المشتري المسبقة وحجز الفنادق قبل موعد الفترات بوقت كاف.',
        en: 'The definitive platform for industrial innovation. Register your Buyer Badge and book hotels well ahead of scheduled phase dates.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Shenzhen / Huaqiangbei Electronics
  {
    id: 'huaqiangbei-electronics-world-market',
    slug: 'huaqiangbei-electronics-world-market',
    subdomain: 'markets',
    citySlug: 'shenzhen',
    name: {
      ar: 'سوق هوا تشيانغ بي العالمي للإلكترونيات (شينزن - وادي السيليكون للأجهزة)',
      en: 'Huaqiangbei Electronics World Wholesale Market',
      zh: '华强北商业区电子专业市场集群 (深圳福田)'
    },
    category: {
      ar: 'مكونات إلكترونية ودوائر ذكية وهواتف وإكسسوارات وطائرات درون',
      en: 'Semiconductors, Smartphone Components, Drones & Smart Hardware'
    },
    description: {
      ar: 'عاصمة الإلكترونيات العالمية بلا منازع؛ يضم مجمعات سيلكون مثل SEG وHuaqiang Electronic World، حيث يمكنك بناء أي جهاز إلكتروني أو روبوت من المكونات الأولية حتى التجميع النهائي خلال ساعات.',
      en: 'The world undisputed capital for electronics and hardware components, housing SEG Plaza and Huaqiang Plaza across multi-tier wholesale marts.'
    },
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 7800,
    coordinates: { latitude: 22.5452, longitude: 114.0868 },
    address: {
      ar: 'شارع هوا تشيانغ الشمالي، حي فوتيان، شينزن، غوانغدونغ',
      en: 'Huaqiang North Road, Futian District, Shenzhen, Guangdong',
      zh: '深圳市福田区华强北路与深南中路交汇处'
    },
    contactInfo: { phone: '+86-755-8374-8888' },
    websiteUrl: 'https://www.hqbuy.com/',
    features: {
      ar: ['المركز الأول عالمياً في رقائق السيليكون والمكونات', 'عينات فورية لتصنيع الأجهزة الذكية', 'محطات مترو Huaqiang Road و Huaqiang North', 'مترجمون وفنيون وخدمات شحن دولية مجهزة'],
      en: ['World Foremost Electronic Component Source', 'Rapid Prototype Component Sourcing', 'Huaqiang Road Station at Central Plaza', 'High-Speed International Express Couriers']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-08',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'الوجهة الذهبية لتجار الهواتف الذكية ومهندسي الأجهزة الإلكترونية؛ انتبه لفحص شهادات المطابقة الأصلية للشرائح الإلكترونية قبل التعاقد.',
        en: 'The prime hub for smartphone accessories and hardware engineers. Always verify component authenticity certificates prior to volume dispatch.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Shunde / Louvre Furniture
  {
    id: 'louvre-international-furniture-exhibition-center',
    slug: 'louvre-international-furniture-exhibition-center',
    subdomain: 'markets',
    citySlug: 'shunde',
    name: {
      ar: 'قصر اللوفر الدولي للمفروشات والأثاث الفاخر (شونده - فوشان)',
      en: 'Louvre International Furniture Exhibition Center (Lecong Shunde)',
      zh: '罗浮宫国际家具博览中心 (顺德乐从)'
    },
    category: {
      ar: 'أثاث منزلي ومكتبي وديكورات فاخرة وتجهيزات فنادق 7 نجوم',
      en: 'Luxury Home & Office Furniture, Hotel Outfitting & Bespoke Decor'
    },
    description: {
      ar: 'قصر الأثاث الأضخم والأفخم في العالم ببلدة ليتشونغ؛ يمتد على مساحة 380,000 متر مربع ويضم أرقى العلامات التجارية العالمية ومصانع الأثاث الصينية الملكية والمعاصرة.',
      en: 'The world most luxurious furniture mega showroom in Lecong, Shunde, showcasing over 2,000 premier luxury furniture and interior brands.'
    },
    coverImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 5600,
    coordinates: { latitude: 22.9554, longitude: 113.0845 },
    address: {
      ar: 'طريق ليتشونغ، حي شونده، مدينة فوشان، غوانغدونغ',
      en: 'Lecong Section, National Highway 325, Shunde, Foshan, Guangdong',
      zh: '广东省佛山市顺德区乐从镇325国道乐从路段'
    },
    contactInfo: { phone: '+86-757-2883-8888' },
    websiteUrl: 'http://www.louvre-group.cn/',
    features: {
      ar: ['أفخم مجمع أثاث في العالم', 'تجهيز كامل للقصور والفلل والفنادق', 'شحن وتغليف خشبي احترافي آمن ضد الصدمات', 'فندق سوفيتيل اللوفر الفاخر داخل المجمع'],
      en: ['World Luxury Furniture Epicenter', 'Complete Villa, Hotel & Palace Fitouts', 'Custom Wooden Export Crate Packing', 'Integrated Sofitel Foshan Luxury Hotel']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-10',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'الوجهة الأولى لأصحاب الفلل والقصور ومستوردي الأثاث الفندقي في الخليج؛ يضمن لك أعلى معايير الجودة والضمان والتشطيب الإيطالي.',
        en: 'The prime sourcing venue for hotel contractors and luxury residential projects across Saudi Arabia and the Gulf.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Shaoxing / Keqiao China Textile City
  {
    id: 'china-textile-city-keqiao',
    slug: 'china-textile-city-keqiao',
    subdomain: 'markets',
    citySlug: 'shaoxing',
    name: {
      ar: 'مدينة الصين للأقمشة والمنسوجات (كيشياو - شاوشينغ)',
      en: 'China Textile City (Keqiao Fabric & Curtain Mega Complex)',
      zh: '中国轻纺城 (绍兴柯桥轻纺城市场集群)'
    },
    category: {
      ar: 'أقمشة ملابس وستائر وبدلات وعبايات وألياف صناعية',
      en: 'Apparel Fabrics, Curtains, Gulf Abaya Silks & Linings'
    },
    description: {
      ar: 'عاصمة الأقمشة والمنسوجات الأولى في العالم؛ تنتج أو تتداول ربع أقمشة الكرة الأرضية، وتضم أسواق بيليان للستائر، السوق الشمالي للبدلات، وسوق دونغشنغ للتريكو، مع جالية تجارية عربية ضخمة.',
      en: 'The world foremost textile trading capital in Keqiao, where 1 in every 4 meters of world fabrics is traded, serving Arab fabric merchants for decades.'
    },
    coverImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 4600,
    coordinates: { latitude: 30.0825, longitude: 120.4952 },
    address: {
      ar: 'طريق يوتشياو، منطقة كيشياو، شاوشينغ، تشيجيانغ',
      en: 'Yuqiao Road, Keqiao District, Shaoxing, Zhejiang',
      zh: '浙江省绍兴市柯桥区金柯桥大道与裕民路交叉口'
    },
    contactInfo: { phone: '+86-575-8411-8888' },
    websiteUrl: 'https://www.qfc.cn/',
    features: {
      ar: ['أكبر تجمع لأسواق الأقمشة عالمياً', 'أقمشة العبايات والجلابيات الخليجية الفاخرة', 'محطة مترو China Textile City Line 1', 'مكاتب فحص ومطابقة جودة الأنسجة'],
      en: ['World Largest Fabric Wholesale Belts', 'Premium Gulf Abaya Black Silk Fabrics', 'China Textile City Metro Station Access', 'On-Site OEKO-TEX Testing Laboratories']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-12',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'المرجع الإلزامي لتجار الأقمشة ومصانع الملابس في الوطن العربي؛ تمتاز بتوفر كافة عينات الأقمشة الحديثة وأسعار تصنيع المصانع المباشرة.',
        en: 'The mandatory reference for fabric retailers and garment manufacturers across the Arab world with direct-from-mill pricing.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Shantou / BaoAo Toy City
  {
    id: 'baoao-international-toy-city-shantou',
    slug: 'baoao-international-toy-city-shantou',
    subdomain: 'markets',
    citySlug: 'shantou',
    name: {
      ar: 'مدينة باواو الدولية للألعاب (تشينغهاي - شانتو)',
      en: 'BaoAo International Toy City Mega Complex',
      zh: '宝奥国际玩具城 (汕头澄海金鸿公路)'
    },
    category: {
      ar: 'ألعاب أطفال وسيارات لاسلكية ومكعبات وطائرات درون',
      en: 'Plastic Toys, Remote Control Cars, Drones & Building Blocks'
    },
    description: {
      ar: 'أضخم معرض ألعاب في العالم بعاصمة الألعاب العالمية تشينغهاي؛ يعتمد نظام مسح الباركود الذكي لعينات مئات الآلاف من الألعاب مباشرة من أكثر من 40,000 مصنع محلي.',
      en: 'The world premier toy showroom hub in Chenghai, featuring instant barcode scanner sampling from over 40,000 certified toy factories.'
    },
    coverImage: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviewCount: 3900,
    coordinates: { latitude: 23.4754, longitude: 116.7628 },
    address: {
      ar: 'طريق جينهونغ، منطقة تشينغهاي، شانتو، غوانغدونغ',
      en: 'Jinhong Highway, Chenghai District, Shantou, Guangdong',
      zh: '广东省汕头市澄海区金鸿公路宝奥国际玩具城'
    },
    contactInfo: { phone: '+86-754-8588-8888' },
    websiteUrl: 'https://www.baoao.com.cn/',
    features: {
      ar: ['أكثر من 70% من ألعاب العالم تُصنع هنا', 'نظام مسح باركود إلكتروني فوري للعينات', 'شهادات السلامة الدولية (EN71, SASO, G-Mark)', 'أسعار جملة مباشرة من خطوط الإنتاج'],
      en: ['Source of 70%+ of Global Toys', 'Barcode Scanning Sample Carts', 'Full Global Safety Certifications', 'Direct Assembly Line FOB Quotes']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-13',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'الوجهة الأولى لتجار الألعاب في الشرق الأوسط ومستوردي منصات أمازون ونون؛ وفرة مذهلة في الألعاب التفاعلية والتعليمية.',
        en: 'The #1 destination for toy distributors and Amazon/Noon merchants in the Middle East with massive STEM variety.'
      }
    },
    lastUpdated: '2026-09-13'
  }
];
