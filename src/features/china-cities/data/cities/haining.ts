import { ICity } from '../../types';

export const hainingCity: ICity = {
  id: 'haining',
  slug: 'haining',
  name: { ar: 'هاينينغ', en: 'Haining', zh: '海宁' },
  province: { ar: 'تشيجيانغ', en: 'Zhejiang', zh: '浙江省' },
  region: 'Yangtze River Delta',
  tier: 'tier-3',
  commercialImportanceScore: 90,
  heroImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'عاصمة الجلود والفراء والأزياء الشتوية الأولى في الصين (مدينة هاينينغ للجلديات - HCLC)، وعاصمة أقمشة السداء المحبوكة (Warp Knitting Capital). تنتج وتوزع أكثر من ثلث معاطف وسترات الجلد الطبيعي والصناعي وأقمشة الكنب والسيارات والسترات الواقية من البرد في آسيا.',
    en: 'China undisputed Leather, Fur & Winter Outerwear Capital (Haining China Leather City - HCLC), and global Warp Knitting Capital. Dominates global production of genuine/synthetic leather jackets, shearling coats, automotive seat fabrics, and sofa velvet upholstery.'
  },
  keyIndustries: ['leather-goods', 'fur-outerwear', 'warp-knitting', 'home-textiles', 'luggage-bags'],
  primaryProducts: {
    ar: [
      'السترات والمعاطف الجلدية الفاخرة للرجال والنساء (جلد طبيعي وصناعي)',
      'معاطف الفراء والشيرلينغ المبطنة بالصوف (Double-face Shearling)',
      'حقائب اليد والمحافظ وحقائب السفر الجلدية والأحذية',
      'خامات الجلود الخام والمدبوغة والجلود الاصطناعية PU وMicrofiber',
      'أقمشة حياكة السداء (Warp-Knitted) لمقاعد السيارات ومفروشات الكنب',
      'سترات الريش والداون جاكيت الشتوية الفاخرة مع ياقات الفراء'
    ],
    en: [
      'Genuine & Synthetic Leather Jackets & Trench Coats',
      'Double-Face Sheepskin Shearling, Fur Trims & Luxury Overcoats',
      'Leather Handbags, Wallets, Luggage Cases & Leather Footwear',
      'Raw Tanned Hides, Finished Leathers & High-End PU/Microfiber',
      'Warp-Knitted Technical Fabrics for Automotive Seats & Sofa Upholstery',
      'Down Jackets, Puffer Coats & Winter Fashion Outerwear'
    ]
  },
  bestFor: ['Leather Apparel Importers', 'Luggage & Handbag Buyers', 'Upholstery Fabric Traders', 'Winter Fashion Brands'],
  districts: [
    {
      id: 'haining-leather-city-core',
      cityId: 'haining',
      name: { ar: 'مجمع مدينة هاينينغ للجلديات (Haining Leather City Core)', en: 'Haining China Leather City Commercial Hub', zh: '海宁中国皮革城核心区' },
      activityType: { ar: 'أضخم مجمع تجاري متكامل للسترات الجلدية والحقائب والأحذية في العالم', en: 'World Largest Dedicated Leather & Fur Apparel Wholesale Complex' },
      mainProducts: ['سترات جلد طبيعي', 'معاطف فراء وشيرلينغ', 'حقائب يد ومحافظ', 'أحذية جلدية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Leather City Station (Hangzhou-Haining Intercity Rail - 皮革城站)'
    },
    {
      id: 'maqiao-warp-knitting-hub',
      cityId: 'haining',
      name: { ar: 'بلدة ماتشياو لحياكة السداء وأقمشة السيارات (Maqiao Warp Knitting Town)', en: 'Maqiao Warp Knitting Industrial Town', zh: '马桥街道（中国经编之都）' },
      activityType: { ar: 'المركز العالمي الأول لإنتاج أقمشة حياكة السداء التكنولوجية وأقمشة التنجيد ومقاعد السيارات', en: 'Global Benchmark Base for Technical Warp-Knitted Fabrics & Automotive Upholstery' },
      mainProducts: ['أقمشة مقاعد سيارات', 'أقمشة كنب مخملية', 'أقمشة لافتات إعلانية فلكس', 'أقمشة شباك جيوديسية'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestStation: 'Haining Railway Station'
    },
    {
      id: 'hushishi-raw-materials',
      cityId: 'haining',
      name: { ar: 'منطقة هوشيشي لتجارة الجلود الخام ومستلزمات الدباغة (Raw Leather Hub)', en: 'Hushishi Raw Leather & Accessory Materials District', zh: '海宁皮革原料与辅料交易市场区' },
      activityType: { ar: 'سوق الجملة المباشر لجلود الأبقار والأغنام المدبوغة، الفراء، والسحابات والإبزيمات المعدنية', en: 'Wholesale Mart for Tanned Hides, Sheepskins, Fur Pelts & Metal Hardware' },
      mainProducts: ['جلود أبقار وأغنام مدبوغة', 'فراء طبيعي وصناعي', 'إكسسوارات معدنية وسحابات'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Leather City Station'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'haining-china-leather-city-main',
      cityId: 'haining',
      name: { ar: 'مدينة هاينينغ الصينية للجلديات - المجمع الرئيسي (Haining China Leather City)', en: 'Haining China Leather City (HCLC)', zh: '海宁中国皮革城（A/B/C/D/E/F六大区）' },
      type: 'Wholesale',
      category: 'Leather Jackets, Fur, Handbags & Luggage',
      description: {
        ar: 'أكبر مجمع تجاري متخصص في العالم لمنتجات الجلود والفراء بمساحة تتجاوز مليون متر مربع وست مراحل تجارية ضخمة (المناطق A وB وC للسترات الجلدية والمعاطف، المنطقة D للأحذية والحقائب والأمتعة، والمنطقة E للبوتيكات الفاخرة، ومجمع المواد الخام). يضم أكثر من 6000 صالة عرض لمصانع الجلديات بأسعار تصدير جملة وتصنيع حسب الطلب OEM للماركات العالمية.',
        en: 'World largest wholesale and design center for leather and fur goods spanning over 1,000,000 sqm across 6 massive phases. Features over 6,000 manufacturing showrooms displaying sheepskin coats, leather jackets, cowhide luggage, designer handbags, and boots with custom OEM private label services.'
      },
      address: { ar: '1 طريق هاينينغ هايتشو، تشيجيانغ', en: '1 Haizhou West Rd, Haining, Jiaxing, Zhejiang', zh: '浙江省嘉兴市海宁市海州西路1号海宁中国皮革城' },
      nearestMetro: 'Leather City Station (Hangzhou-Haining Intercity Rail, Direct Access)',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'Low'
    },
    {
      id: 'haining-china-home-textiles-city',
      cityId: 'haining',
      name: { ar: 'مدينة هاينينغ الصينية للمنسوجات المنزلية وأقمشة التنجيد (Haining Home Textiles City)', en: 'China Haining Home Textiles City (Xucun)', zh: '海宁中国家纺城（许村市场）' },
      type: 'Wholesale',
      category: 'Jacquard Fabrics, Curtain Textiles & Sofa Upholstery',
      description: {
        ar: 'أكبر قاعدة لتجارة أقمشة الجاكار والتطريز والستائر وأقمشة تنجيد الكنب والوسائد في بلدة شوتسون بهاينينغ، مع أكثر من 3000 متجر ومصنع متخصص.',
        en: 'Major specialized wholesale market for jacquard fabrics, sofa covers, decorative curtain textiles, and cushion fabrics located in Xucun Town, Haining.'
      },
      address: { ar: 'طريق شوتسون تشن، هاينينغ', en: 'Xucun Town, Haining, Zhejiang', zh: '浙江省海宁市许村镇中国家纺城' },
      nearestStation: 'Haining West High-Speed Rail Station (10 min taxi)',
      operatingHours: '08:30 - 17:00',
      moqLevel: 'Medium'
    }
  ],
  industrialZones: [
    {
      id: 'haining-warp-knitting-science-park',
      cityId: 'haining',
      name: { ar: 'المجمع العلمي لصناعة حياكة السداء في ماتشياو (Maqiao Warp Knitting Park)', en: 'Haining Warp Knitting Science & Technology Industrial Park', zh: '浙江海宁经编产业园区（马桥）' },
      clusterSpecialization: { ar: 'أكبر مركز في العالم لآلات حياكة السداء الألمانية (Karl Mayer) لإنتاج أقمشة مقاعد السيارات والأقمشة الصناعية', en: 'World Premier Warp Knitting Cluster housing thousands of German Karl Mayer high-speed knitting machines' },
      factoryTypes: ['High-Speed Warp Knitting Plants', 'Fabric Laminating Fabs'],
      keyProducts: ['أقمشة مقاعد سيارات فخمة', 'أقمشة كنب مخملية ثلاثية الأبعاد', 'أقمشة خيام ومظلات مقاومة للماء'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'hn-genuine-leather-jackets',
      productName: { ar: 'السترات والمعاطف الجلدية الطبيعية والشيرلينغ', en: 'Genuine Leather Jackets, Shearling Coats & Winter Outerwear' },
      industryCategory: 'leather-goods',
      whyThisCity: { ar: 'عاصمة الجلود الصينية، وتوفر أحدث صيحات الموضة الأوروبية في قصات وتطريز الجلود بأسعار تنافسية وخيارات دباغة نباتية صديقة للبيئة.', en: 'China leather capital offering European styling, premium lambskin/cowhide finishing, and unmatched OEM private label flexibility.' },
      mainManufacturingArea: { ar: 'مدينة هاينينغ للجلديات (HCLC)', en: 'Haining China Leather City' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'hn-sofa-auto-fabrics',
      productName: { ar: 'أقمشة مقاعد السيارات وتنجيد الكنب والمفروشات الجاكار', en: 'Automotive Seat Fabrics, Sofa Velvets & Jacquard Upholstery' },
      industryCategory: 'textiles',
      whyThisCity: { ar: 'بلدة ماتشياو وشوتسون تزودان أكبر مصنعي السيارات وشركات الأثاث في العالم بأقمشة التنجيد المقاومة للاحتكاك والماء.', en: 'Maqiao and Xucun supply the world largest automakers and furniture manufacturers with heavy-duty abrasion-resistant upholstery.' },
      mainManufacturingArea: { ar: 'ماتشياو وشوتسون (Maqiao & Xucun)', en: 'Maqiao and Xucun Towns' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Hangzhou Xiaoshan International Airport (HGH - 45 دقيقة بالسيارة)',
      'Shanghai Hongqiao Airport (SHA - 60 دقيقة بالقطار السريع)'
    ],
    seaPorts: [
      'Shanghai Port (Yangshan / Waigaoqiao - ساعتان)',
      'Ningbo-Zhoushan Port (ساعتان بالشاحنات اللوجستية)'
    ],
    highSpeedRailwayStations: [
      'Haining West Railway Station (海宁西站 - متصلة بقطارات شنغهاي وهانغتشو السريعة وبالمترو)',
      'Haining Railway Station (海宁站 - محطة القطار العادي وسط المدينة)'
    ],
    seaFreightSuitability: {
      ar: 'تقع هاينينغ في المنتصف تماماً بين ميناء شانغهاي وميناء نينغبو، مما يمنح المستوردين مرونة تامة في حجز الحاويات على أي من الميناءين بأقل تكلفة شحن بري.',
      en: 'Strategically nestled exactly between Shanghai Port and Ningbo Port, allowing shippers optimal freight rate flexibility across both global ports.'
    },
    airFreightSuitability: {
      ar: 'شحن عينات الملابس الجلدية السريعة والكتالوجات جواً عبر مطار هانغتشو شياوشان المجاور.',
      en: 'Rapid air express cargo dispatch for seasonal apparel via Hangzhou Xiaoshan Airport.'
    },
    primaryCargoRoutes: {
      ar: [
        'خطوط بحرية منتظمة عبر شانغهاي ونينغبو إلى كافة الموانئ الدولية',
        'شحن سريع بالبريد الجوي للعينات عبر مطار هانغتشو'
      ],
      en: [
        'Weekly container sailings via Shanghai & Ningbo to Middle East, Europe & Americas',
        'Air courier express for leather fashion samples'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر (ذروة موسم الأزياء الجلدية الشتوية ومعرض الجلديات)'],
    suggestedStayDays: 2,
    weatherSummary: {
      ar: 'خريف معتدل ومنعش، وهو موسم ذروة إطلاق أحدث مجموعات الملابس الجلدية الشتوية، والشتاء بارد نسبياً ومناسب لتجربة المعاطف.',
      en: 'Crisp, pleasant Autumn is the peak sourcing window when new winter leather collections debut.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة مدينة الجلديات (China Leather City Area): الأنسب للإقامة المباشرة بالقرب من مجمعات الجلود والفنادق الفاخرة ومحطة المترو.',
        en: 'China Leather City Area: Direct walking distance to leather malls, Pullman Hotel, and intercity metro.'
      }
    ],
    localTransportAdvice: {
      ar: 'يربط قطار هانغتشو-هاينينغ السريع (Hangzhou-Haining Intercity Rail) مباشرة بين شبكة مترو هانغتشو (محطة Yuhang高铁站) ومحطة "مدينة الجلديات" (皮革城站) في هاينينغ، مما يجعل الزيارة سهلة دون الحاجة إلى سيارة خاصة.',
      en: 'Hangzhou-Haining Intercity Metro connects directly to Hangzhou Metro Line 9 and stops at Leather City Station (皮革城站).'
    },
    languageTips: {
      ar: 'الماركات الكبرى في مدينة الجلديات لديها فرق مبيعات تجيد الإنجليزية وتتعامل مع طلبيات التصدير OEM. داخل المتاجر الصغيرة، استخدم WeChat للترجمة الفورية.',
      en: 'Major brand showrooms have English-speaking sales staff for OEM orders. Small stalls easily communicate via WeChat translation.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'pullman-haining-hotel',
        name: { ar: 'فندق بولمان هاينينغ (Pullman Haining)', en: 'Pullman Haining', zh: '海宁铂尔曼酒店' },
        category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
        area: { ar: 'ملاصق لمدينة هاينينغ للجلديات', en: 'Adjacent to China Leather City' },
        highlights: { ar: 'أفخم فندق أعمال في هاينينغ، يبعد 3 دقائق سيراً على الأقدام عن أبراج مدينة الجلديات، قاعات اجتماعات واسعة ومطاعم فاخرة', en: 'Premier luxury hotel just 3 minutes walk from China Leather City, top business center and dining' }
      },
      {
        id: 'royal-palace-haining',
        name: { ar: 'فندق رويال بالاس لانغهام هاينينغ (The Langham Haining)', en: 'Langham Place Haining', zh: '海宁朗豪酒店' },
        category: { ar: 'فاخر 5 نجوم راقٍ', en: 'Boutique Luxury 5-Star' },
        area: { ar: 'وسط المدينة الجديد، هاينينغ', en: 'New City Center, Haining' },
        highlights: { ar: 'تصميم أوروبي فاخر، سبا فندقي راقٍ، وخدمة استثنائية لرجال الأعمال والوفود التجارية', en: 'High-end European luxury, fine dining, and excellent executive services' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'lanzhou-halal-leather-city',
        name: { ar: 'مطعم لانتشو الإسلامي الحلال - فرع مدينة الجلديات', en: 'Lanzhou Halal Beef Noodles Leather City', zh: '兰州正宗清真牛肉拉面（皮革城分店）' },
        cuisineType: { ar: 'مأكولات إسلامية صينية ونودلز ولحم ضأن حلال', en: 'Traditional Chinese Muslim Halal' },
        isHalal: true,
        address: { ar: 'شارع المشاة المقابل للمنطقة D، مدينة الجلديات، هاينينغ', en: 'Opposite Zone D, China Leather City, Haining', zh: '浙江省海宁市海州西路皮革城D区对面' },
        recommendedFor: { ar: 'غداء حلال سريع ونظيف أثناء جولات التسوق في مدينة الجلود', en: 'Quick, hot halal beef noodles and lamb soup during sourcing' }
      },
      {
        id: 'xinjiang-meiwei-halal-haining',
        name: { ar: 'مطعم شينجيانغ اللذيذ الحلال (Xinjiang Meiwei Halal)', en: 'Xinjiang Meiwei Halal Restaurant Haining', zh: '新疆美味清真餐厅' },
        cuisineType: { ar: 'مأكولات شينجيانغ ومشاوي حلال', en: 'Xinjiang Halal Lamb & Kebabs' },
        isHalal: true,
        address: { ar: 'طريق وينتشون، وسط مدينة هاينينغ', en: 'Wenchun Rd, Haining City', zh: '浙江省海宁市文苑路' },
        recommendedFor: { ar: 'أسياخ لحم ضأن مشوية على الفحم، خبز نان ساخن، وطعام حلال مضمون', en: 'Authentic charcoal grilled lamb skewers, pilaf, and halal dining' }
      }
    ],
    touristAttractions: [
      {
        id: 'qiantang-tidal-bore',
        name: { ar: 'ظاهرة المد والجزر الأسطورية لنهر تشيانتانغ (Qiantang River Tidal Bore - 钱塘江大潮)', en: 'Qiantang River Tidal Bore (Yanguan)', zh: '海宁盐官钱塘江大潮观潮胜地' },
        category: { ar: 'ظاهرة طبيعية عالمية فريدة', en: 'World Wonder Natural Tidal Wave' },
        description: { ar: 'أكبر مد وجزر نهري في العالم يُعرف بـ "تنين الفضة"، حيث ترتفع الأمواج النهرية العملاقة لعدة أمتار وتجتذب ملايين الزوار سنوياً في بلدة يانغوان التاريخية.', en: 'World largest river tidal bore, where spectacular surging ocean waves crash up the Qiantang River.' }
      }
    ],
    essentialServices: [
      {
        id: 'haining-leather-testing-center',
        serviceType: { ar: 'فحص جودة الجلود والشهادات', en: 'Leather Quality Testing & Inspection' },
        title: { ar: 'المركز الوطني لفحص واختبار جودة الجلود والمنتجات الجلدية بـ هاينينغ', en: 'National Leather & Fur Product Quality Supervision & Inspection Center', zh: '国家皮革制品质量监督检验中心（浙江）' },
        description: { ar: 'فحص واختبار جودة الجلود الطبيعية، مقاومة التمزق، اختبارات الحساسية، والتحقق من نقاء الجلود قبل التصدير.', en: 'Official testing center for leather authenticity, tear resistance, chemical safety, and export certificate issuance.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'china-leather-fur-fashion-expo',
      name: { ar: 'معرض الصين هاينينغ الدولي للملابس الجلدية والفراء (HCLC Fashion Expo)', en: 'China (Haining) International Leather & Fur Fashion Expo', zh: '中国（海宁）国际皮革毛皮皮草时装展' },
      industry: 'Leather Garments, Fur Fashion, Outerwear & Bags',
      venue: { ar: 'مركز معارض مدينة هاينينغ للجلديات', en: 'Haining China Leather City Exhibition Convention Center', zh: '海宁中国皮革城国际展厅' },
      occurrence: { ar: 'يوليو سنوياً (عرض مجموعات الشتاء الجديدة)', en: 'Annually in July' },
      officialWebsite: 'http://www.chinaleathercity.com',
      bestFor: ['Leather Apparel Importers', 'Fashion Retailers', 'Wholesale Distributors']
    }
  ],
  relatedCitySlugs: ['shaoxing', 'hangzhou', 'cixi', 'shanghai', 'guangzhou'],
  relatedProductSlugs: ['leather-goods', 'apparel', 'textiles'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل هاينينغ التجاري الشامل | مدينة الجلديات الصينية وأقمشة المفروشات', en: 'Haining Commercial Sourcing Guide | China Leather City & Warp Knitting' },
    description: { ar: 'دليل شامل للاستيراد من هاينينغ: مدينة الجلديات الصينية HCLC، مصانع السترات الجلدية والمعاطف، أقمشة مقاعد السيارات في ماتشياو، وفنادق ومطاعم حلال.', en: 'Complete sourcing guide to Haining: World largest Haining China Leather City, leather & fur coats, Maqiao warp knitting upholstery & business travel.' }
  }
};
