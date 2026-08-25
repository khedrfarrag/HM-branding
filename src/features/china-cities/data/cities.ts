import { ICity } from '../types';

export const CHINA_CITIES_DATA: ICity[] = [
  {
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
    commercialImportanceScore: 99,
    heroImage: 'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?auto=format&fit=crop&w=1200&q=80',
    skylineImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=800&q=80'
    ],
    description: {
      ar: 'العاصمة التجارية الأولى لجنوب الصين ومقاطعة غوانغدونغ. عاصمة المعارض الدولية وحاضنة معرض كانتبون الدولي (Canton Fair). تشتهر بأنها المركز العالمي لأسواق الجملة للملابس، الأقمشة، الإلكترونيات، الساعات، الإكسسوارات، والمنتجات الاستهلاكية.',
      en: 'The premier commercial capital of South China and Guangdong province. Home of the famous Canton Fair and the global nerve center for wholesale markets covering apparel, textiles, watches, auto parts, and consumer goods.'
    },
    keyIndustries: ['textiles', 'apparel', 'watches', 'leather-goods', 'auto-parts', 'lighting', 'trade-fairs'],
    primaryProducts: {
      ar: ['الملابس والأزياء', 'الأقمشة والغزل', 'الساعات والنظارات', 'المستلزمات الجلدية والحقائب', 'قطع غيار السيارات', 'مستحضرات التجميل'],
      en: ['Apparel & Fashion', 'Textiles & Fabrics', 'Watches & Eyewear', 'Leather Bags & Goods', 'Auto Parts', 'Cosmetics & Beauty']
    },
    bestFor: ['Importer', 'Wholesaler', 'Fashion Business', 'Startup', 'Trade Fair Visitor'],
    districts: [
      {
        id: 'yuexiu',
        cityId: 'guangzhou',
        name: { ar: 'منطقة يويشيو (Yuexiu)', en: 'Yuexiu District' },
        activityType: { ar: 'أسواق الملابس والساعات والجملة', en: 'Apparel & Watch Wholesale Hub' },
        mainProducts: ['ملابس', 'ساعات', 'حقائب'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'Guangzhou Railway Station (Line 2/5)'
      },
      {
        id: 'haizhu',
        cityId: 'guangzhou',
        name: { ar: 'منطقة هايتشو (Haizhu)', en: 'Haizhu District' },
        activityType: { ar: 'سوق كانتبون والأقمشة الدولية (Zhongda)', en: 'Canton Fair & Textile Market Hub' },
        mainProducts: ['أقمشة', 'مستلزمات خياطة', 'معارض تجارية'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'Pazhou Station / Sun Yat-sen University Station'
      },
      {
        id: 'panyu',
        cityId: 'guangzhou',
        name: { ar: 'منطقة بانيو (Panyu)', en: 'Panyu District' },
        activityType: { ar: 'تصنيع المجوهرات ومعدات الملاهي والملابس', en: 'Jewelry & Amusement Equipment Manufacturing' },
        mainProducts: ['مجوهرات', 'معدات ألعاب', 'ملابس'],
        tradeFocus: 'Mixed',
        suitableForImporter: true,
        suitableForBusinessTravel: false,
        nearestMetro: 'Shiqiao Station (Line 3)'
      },
      {
        id: 'baiyun',
        cityId: 'guangzhou',
        name: { ar: 'منطقة باييون (Baiyun)', en: 'Baiyun District' },
        activityType: { ar: 'الجلديات، الحقائب، والمستحضرات التجميلية', en: 'Leather Goods & Cosmetics Hub' },
        mainProducts: ['حقائب جلدية', 'مستحضرات تجميل', 'أحذية'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'Sanyuanli Station (Line 2)'
      }
    ],
    wholesaleMarkets: [
      {
        id: 'canton-fair-complex',
        cityId: 'guangzhou',
        name: { ar: 'مجمع معرض كانتون (Pazhou Complex)', en: 'Canton Fair Complex (Pazhou)', zh: '广交会展馆' },
        type: 'Wholesale',
        category: 'Trade Fair',
        description: {
          ar: 'أكبر مركز معارض تجارية في العالم، يعقد مرتين سنوياً (أبريل وأكتوبر) ويضم 3 مراحل تغطي جميع الصناعات التجاريّة.',
          en: 'World largest trade fair complex hosting the biannual Canton Fair (April & October) across 3 comprehensive phases.'
        },
        address: { ar: 'شارع يويجيانغ زونغ، منطقة هايتشو، جوانزو', en: 'Yuejiang Middle Rd, Haizhu District, Guangzhou' },
        nearestMetro: 'Pazhou Station / Xingangdong Station (Line 8)',
        nearestAirport: 'Guangzhou Baiyun International Airport (CAN)',
        operatingHours: '09:00 - 18:00 (During Fairs)',
        moqLevel: 'High'
      },
      {
        id: 'zhanxi-watch-market',
        cityId: 'guangzhou',
        name: { ar: 'سوق الساعات في جانشي (Zhanxi Watch Market)', en: 'Zhanxi Watch Market', zh: '站西钟表城' },
        type: 'Wholesale',
        category: 'Watches',
        description: {
          ar: 'أشهر مركز جملة للساعات وإكسسواراتها وقطع غيارها في العالم.',
          en: 'Global nerve center for wholesale watches, parts, and horology accessories.'
        },
        address: { ar: 'طريق جانشي، بالقرب من محطة قطار جوانزو', en: 'Zhanxi Road, near Guangzhou Railway Station' },
        nearestMetro: 'Guangzhou Railway Station (Exit F)',
        moqLevel: 'Low'
      },
      {
        id: 'baiyun-world-leather',
        cityId: 'guangzhou',
        name: { ar: 'مركز باييون العالمي للجلديات (Baiyun Leather Center)', en: 'Baiyun World Leather Trading Center', zh: '白云皮具城' },
        type: 'Wholesale',
        category: 'Leather Bags',
        description: {
          ar: 'المركز الأول عالمياً لتجارة الحقائب والمنتجات الجلدية بالجملة.',
          en: 'World-renowned trading center for leather bags, luggage, and accessories.'
        },
        address: { ar: 'طريق جيانغ شاي، منطقة باييون، جوانزو', en: 'Jiefang North Road, Baiyun District, Guangzhou' },
        nearestMetro: 'Sanyuanli Station (Line 2)',
        moqLevel: 'Medium'
      }
    ],
    industrialZones: [
      {
        id: 'panyu-jewelry-zone',
        cityId: 'guangzhou',
        name: { ar: 'المنطقة الصناعية للمجوهرات في بانيو', en: 'Panyu Jewelry Industrial Park' },
        clusterSpecialization: { ar: 'تصنيع وصياغة الذهب والمجوهرات والفضة', en: 'Gold, Silver & Gemstone Manufacturing' },
        factoryTypes: ['Factory Showrooms', 'Custom OEM Processing'],
        keyProducts: ['مجوهرات فخمة', 'فضة', 'أحجار كريمة'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'gz-fashion-apparel',
        productName: { ar: 'الملابس الجاهزة والأزياء', en: 'Ready-made Garments & Fashion' },
        industryCategory: 'Apparel',
        whyThisCity: { ar: 'أكبر تجمع لمصانع ومصممي الملابس الجاهزة بأسعار تنافسية وتنوع ضخم.', en: 'Largest concentration of garment factories, designers, and wholesale inventory.' },
        mainManufacturingArea: { ar: 'منطقة هايتشو وبانيو ولينان', en: 'Haizhu, Panyu, and Nanhai border' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Guangzhou Baiyun International Airport (CAN)'],
      seaPorts: ['Nansha Port (ميناء نانشا)', 'Huangpu Port (ميناء هوانغبو)'],
      highSpeedRailwayStations: ['Guangzhou South Railway Station', 'Guangzhou East Station'],
      seaFreightSuitability: { ar: 'ممتازة جداً عبر ميناء نانشا وهوانغبو للربط المباشر مع جميع الموانئ العربية والعالمية.', en: 'Excellent via Nansha Port and Huangpu Port with direct global shipping routes.' },
      airFreightSuitability: { ar: 'مركز شحن جوي عالمي عبر مطار باييون (CAN).', en: 'Top-tier global air freight hub via Baiyun Airport.' },
      primaryCargoRoutes: {
        ar: ['خط البحر الأحمر (جدة/العقبة/السخنة)', 'خط الخليج العربي (جبل علي/الدمام/حمد)', 'خط شمال إفريقيا'],
        en: ['Red Sea Route (Jeddah/Aqaba/Sokhna)', 'Arabian Gulf Route (Jebel Ali/Dammam/Hamad)', 'North Africa Route']
      }
    },
    businessTravelGuide: {
      bestVisitMonths: ['أبريل (معرض كانتون)', 'أكتوبر (معرض كانتون)', 'نوفمبر', 'ديسمبر'],
      suggestedStayDays: 5,
      weatherSummary: { ar: 'شبه استوائي حار ورطب صيفاً، معتدل ولطيف شتاءً.', en: 'Subtropical, hot and humid in summer, mild and pleasant in winter.' },
      recommendedStayAreas: [
        { ar: 'منطقة تيانخه (Tianhe - Zhujiang New Town): مناسبة لرجال الأعمال والفنادق الفخمة.', en: 'Tianhe / Zhujiang New Town: Luxury business district.' },
        { ar: 'منطقة يويشيو (Yuexiu / Taojin): قريبة من أسواق الجملة والمطاعم العربية والحلال.', en: 'Yuexiu / Taojin: Close to wholesale markets and halal restaurants.' }
      ],
      localTransportAdvice: { ar: 'شبكة المترو فائقة الكفاءة. استخدام تطبيق Didi للتنقل بالتاكسي.', en: 'Metro is ultra-efficient. Use Didi for ride-hailing.' },
      languageTips: { ar: 'اللغة المندرين والكانتونية. يفضل تجهيز بطاقات العناوين باللغة الصينية.', en: 'Mandarin & Cantonese. Keep addresses in Chinese characters.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi', 'Pleco Translator'],
      recommendedHotels: [
        {
          id: 'white-swan-hotel-gz',
          name: { ar: 'فندق البجعة البيضاء التاريخي (White Swan Hotel)', en: 'White Swan Hotel Guangzhou' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'جزيرة شاميان التاريخية (Shamian Island)', en: 'Shamian Island Waterfront' },
          highlights: { ar: 'أعرق فندق 5 نجوم بـ جوانزو، ممتاز للاستجمام والاسترخاء', en: 'Historic 5-star hotel with serene Zhujiang river views' }
        },
        {
          id: 'garden-hotel-gz',
          name: { ar: 'فندق جاردن هوتيل جوانزو (The Garden Hotel)', en: 'The Garden Hotel Guangzhou' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'منطقة تاوجين، يويشيو (Taojin)', en: 'Taojin District (Halal & Wholesale Area)' },
          highlights: { ar: 'يقع مباشرة بجوار المطاعم العربية والمكاتب التجارية ومحطة المترو', en: 'Walking distance to Arab restaurants and wholesale hubs' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'al-meylas-gz',
          name: { ar: 'مطعم المجلس العربي بـ جوانزو (Al-Meylas)', en: 'Al-Meylas Arabic Restaurant' },
          cuisineType: { ar: 'مأكولات عربية وخليجية وشامية حلال', en: 'Halal Middle Eastern & Khaleeji Cuisine' },
          isHalal: true,
          address: { ar: 'شارع تاوجين، يويشيو، جوانزو', en: 'Taojin Rd, Yuexiu District, Guangzhou' },
          recommendedFor: { ar: 'كبسة، كباب، ومأكولات عربية للأسر ورجال الأعمال', en: 'Best authentic Mandi, Kabsa & Arabic BBQ' }
        },
        {
          id: 'sultan-gz',
          name: { ar: 'مطعم السلطان التركي (Sultan Restaurant)', en: 'Sultan Turkish Restaurant' },
          cuisineType: { ar: 'مأكولات تركية وشرقية حلال', en: 'Halal Turkish & Mediterranean' },
          isHalal: true,
          address: { ar: 'طريق هوانشي دونغ، جوانزو', en: 'Huanshi Dong Rd, Guangzhou' },
          recommendedFor: { ar: 'مشاوي تركية فاخرة وبوفيهات حلال', en: 'Premium Turkish kebabs & executive dining' }
        }
      ],
      touristAttractions: [
        {
          id: 'canton-tower',
          name: { ar: 'برج كانتون (Canton Tower - 广州塔)', en: 'Canton Tower' },
          category: { ar: 'معلم حديث', en: 'Modern Icon' },
          description: { ar: 'ثاني أطول برج في العالم (604m) يضيء ليلاً بإطلالة ساحرة على نهر اللؤلؤ.', en: 'Iconic 604m tower offering breathtaking panoramic views of Guangzhou skyline.' },
          nearestMetro: 'Canton Tower Station (Line 3/APM)'
        },
        {
          id: 'shamian-island',
          name: { ar: 'جزيرة شاميان التاريخية (Shamian Island)', en: 'Shamian Island' },
          category: { ar: 'تراث تاريخي', en: 'Historic District' },
          description: { ar: 'جزيرة هادئة تضم مباني كلاسيكية من القرن التاسع عشر وأشجار بانيان معمرة.', en: 'Charming pedestrian island lined with Victorian and French colonial architecture.' }
        }
      ],
      essentialServices: [
        {
          id: 'saad-mosque-service',
          serviceType: { ar: 'مساجد وخدمات حلال', en: 'Halal & Islamic Services' },
          title: { ar: 'مسجد سعد بن أبي وقاص التراثي (Huaisheng Mosque)', en: 'Saad Ibn Abi Waqqas Mosque & Halal Street' },
          description: { ar: 'أقدم مسجد في الصين مع سوق حلال متكامل حول المسجد في منطقة يويشيو.', en: 'China oldest mosque with active Friday prayers and halal dining street.' }
        }
      ]
    },
    tradeFairs: [
      {
        id: 'canton-fair-spring',
        name: { ar: 'معرض كانتون الدولي (الربيع والخريف)', en: 'Canton Fair (China Import & Export Fair)' },
        industry: 'Multi-Industry / Comprehensive Trade',
        venue: { ar: 'مجمع كانتبون في باجو (Pazhou Complex)', en: 'Pazhou Complex, Guangzhou' },
        occurrence: { ar: 'أبريل وأكتوبر سنوياً (3 مراحل لكل دورة)', en: 'Biannual in April & October (3 Phases)' },
        officialWebsite: 'https://www.cantonfair.org.cn',
        bestFor: ['Importers', 'Distributors', 'Wholesalers']
      }
    ],
    relatedCitySlugs: ['shenzhen', 'foshan', 'dongguan', 'zhongshan'],
    relatedProductSlugs: ['apparel', 'watches', 'leather-goods', 'auto-parts'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل جوانزو التجاري والاستيراد | الأسواق والمصانع والمعارض', en: 'Guangzhou Trade & Sourcing Guide | Wholesale Markets & Canton Fair' },
      description: { ar: 'دليل شامل للتجارة والاستيراد من مدينة جوانزو الصينية: أسواق الجملة، الساعات، الجلديات، معرض كانتون، والمناطق الصناعية.', en: 'Comprehensive sourcing guide to Guangzhou China: Wholesale markets, leather, watches, Canton fair, logistics & factories.' }
    }
  },

  {
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
    commercialImportanceScore: 98,
    heroImage: 'https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=1200&q=80',
    skylineImage: 'https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=80'
    ],
    description: {
      ar: 'عاصمة التكنولوجيا والإلكترونيات الأولى في العالم و"سيليكون فالي الشرق". تضم أشهر سوق إلكترونيات في العالم (هواكيانغ بي Huaqiangbei)، وتتميز بصناعة الهواتف الذكية، الطائرات المسيرة (DJI)، الشاشات، الطاقة الشمسية، ومكونات الحاسوب.',
      en: 'The Silicon Valley of Hardware and global electronics capital. Home to Huaqiangbei electronic market, DJI drones, smartphones, LED displays, and high-tech hardware supply chains.'
    },
    keyIndustries: ['electronics', 'technology', 'solar-renewable', 'hardware-tools', 'logistics-shipping'],
    primaryProducts: {
      ar: ['الهواتف وشواحن الطاقة', 'المكونات الإلكترونية الدقيقة', 'شاشات LED ومعدات الصوت', 'الطائرات المسيرة والروبوتات', 'إكسسوارات الكمبيوتر'],
      en: ['Smartphones & Power Banks', 'Electronic Components & PCBs', 'LED Displays & Audio Systems', 'Drones & Robotics', 'Computer Accessories']
    },
    bestFor: ['Importer', 'Tech Startup', 'Electronics Business', 'Manufacturer'],
    districts: [
      {
        id: 'futian',
        cityId: 'shenzhen',
        name: { ar: 'منطقة فوتيان (Futian District)', en: 'Futian District' },
        activityType: { ar: 'سوق هواكيانغ بي للإلكترونيات والمراكز المالية', en: 'Huaqiangbei Electronics & Financial Center' },
        mainProducts: ['إلكترونيات', 'قطع كمبيوتر', 'مكونات PCB'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'Huaqiangbei Station (Line 2/7)'
      },
      {
        id: 'nanshan',
        cityId: 'shenzhen',
        name: { ar: 'منطقة نانشان (Nanshan High-Tech)', en: 'Nanshan District' },
        activityType: { ar: 'شركات التكنولوجيا ومقرات الابتكار (Tencent, DJI)', en: 'High-Tech Park & Innovation HQ' },
        mainProducts: ['برمجيات', 'طائرات درون', 'أجهزة ذكية'],
        tradeFocus: 'Mixed',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'High-Tech Park Station (Line 1)'
      },
      {
        id: 'longhua',
        cityId: 'shenzhen',
        name: { ar: 'منطقة لونغوا (Longhua District)', en: 'Longhua Manufacturing Hub' },
        activityType: { ar: 'مجمعات التصنيع الضخمة (Foxconn)', en: 'Electronics Manufacturing & OEM Assemblies' },
        mainProducts: ['أجهزة إلكترونية', 'قوالب بلاستيك', 'بطاريات'],
        tradeFocus: 'Manufacturing',
        suitableForImporter: true,
        suitableForBusinessTravel: false,
        nearestMetro: 'Longhua Station (Line 4)'
      }
    ],
    wholesaleMarkets: [
      {
        id: 'huaqiangbei-electronics',
        cityId: 'shenzhen',
        name: { ar: 'سوق هواكيانغ بي للإلكترونيات (Huaqiangbei)', en: 'Huaqiangbei Electronics Market', zh: '华强北电子市场' },
        type: 'Wholesale',
        category: 'Electronics',
        description: {
          ar: 'أضخم تجمع لأسواق ومجمعات الإلكترونيات والمكونات في العالم.',
          en: 'World premier electronics sourcing hub spanning dozens of massive multi-story tech plazas.'
        },
        address: { ar: 'شارع هواكيانغ بي، منطقة فوتيان، شينزن', en: 'Huaqiangbei Road, Futian District, Shenzhen' },
        nearestMetro: 'Huaqiangbei Station (Line 2/7)',
        operatingHours: '10:00 - 19:00',
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'nanshan-tech-park',
        cityId: 'shenzhen',
        name: { ar: 'مجمع نانشان للتكنولوجيا العالية', en: 'Shenzhen High-Tech Industrial Park' },
        clusterSpecialization: { ar: 'البحث والتطوير والتصنيع الذكي', en: 'Hardware R&D & Smart Manufacturing' },
        factoryTypes: ['R&D Labs', 'High-Tech OEM'],
        keyProducts: ['كاميرات', 'روبوتات', 'شاشات متطورة'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'sz-consumer-electronics',
        productName: { ar: 'الإلكترونيات والأجهزة الذكية', en: 'Consumer Electronics & Smart Devices' },
        industryCategory: 'Electronics',
        whyThisCity: { ar: 'أسرع دورة تصنيع وتطوير للمنتجات الإلكترونية في العالم.', en: 'Fastest product prototyping and hardware supply chain on earth.' },
        mainManufacturingArea: { ar: 'منطقة فوتيان وباوان ولونغوا', en: 'Futian, Baoan, Longhua' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Shenzhen Baoan International Airport (SZX)', 'Hong Kong International Airport (HKG)'],
      seaPorts: ['Yantian Port (ميناء يانتيان)', 'Shekou Port (ميناء شيكو)'],
      highSpeedRailwayStations: ['Shenzhen North Railway Station', 'Futian Station'],
      seaFreightSuitability: { ar: 'ميناء يانتيان وشيكو من أسرع موانئ العالم لشحن الحاويات للخليج والبحر الأحمر.', en: 'Yantian & Shekou ports offer premier container shipping services globally.' },
      airFreightSuitability: { ar: 'ممتازة جداً عبر مطار شينزن ومطار هونغ كونغ المجاور.', en: 'Outstanding global air cargo capabilities.' },
      primaryCargoRoutes: {
        ar: ['خط البحر الأحمر والخليج العربي المباشر', 'خط أوروبا وأمريكا الشمالية'],
        en: ['Direct Middle East Express Routes', 'Global Tech Supply Lines']
      }
    },
    businessTravelGuide: {
      bestVisitMonths: ['أكتوبر', 'نوفمبر', 'ديسمبر', 'مارس', 'أبريل'],
      suggestedStayDays: 4,
      weatherSummary: { ar: 'استوائي حار ورطب صيفاً، معتدل ودافئ شتاءً.', en: 'Subtropical, warm and pleasant in winter.' },
      recommendedStayAreas: [
        { ar: 'منطقة فوتيان (Futian): قريبة من سوق الإلكترونيات وقطار هونغ كونغ.', en: 'Futian: Direct access to electronics markets & HK train.' },
        { ar: 'منطقة نانشان (Nanshan): للمستثمرين في شركات التكنولوجيا.', en: 'Nanshan: Ideal for tech visits.' }
      ],
      localTransportAdvice: { ar: 'مترو شينزن يربط المدينة بـ هونغ كونغ عبر معبر لوهو وفوتيان.', en: 'Seamless metro connections to Hong Kong border.' },
      languageTips: { ar: 'المندرين شائعة جداً، والإنجليزية مستخدمة بكثرة في مجالات التكنولوجيا والتجارة.', en: 'Mandarin & English widely understood in tech firms.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi', 'VPN App'],
      recommendedHotels: [
        {
          id: 'futian-shangri-la-sz',
          name: { ar: 'فندق شنجريلا فوتيان شينزن', en: 'Futian Shangri-La Shenzhen' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'فوتيان التجاري (Futian CBD)', en: 'Futian CBD (Near Huaqiangbei)' },
          highlights: { ar: 'يبعد دقائق عن سوق هواكيانغ بي ومحطة القطار المؤدية لهونغ كونغ', en: 'Minutes from Huaqiangbei market & HK High Speed Rail' }
        },
        {
          id: 'st-regis-sz',
          name: { ar: 'فندق سنت ريجيس شينزن (St. Regis Shenzhen)', en: 'The St. Regis Shenzhen' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'منطقة لوهو (Luohu)', en: 'Luohu Commercial Center' },
          highlights: { ar: 'إطلالة خلابة من أعلى البرج وقريب من معبر هونغ كونغ', en: 'Breathtaking 96th-floor views near HK border control' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'zhongdong-arab-sz',
          name: { ar: 'المطعم العربي بـ شينزن (Zhongdong Arab)', en: 'Middle East Arab Restaurant Shenzhen' },
          cuisineType: { ar: 'مأكولات عربية وخليجية وشامية حلال', en: 'Halal Arab & Middle Eastern Dishes' },
          isHalal: true,
          address: { ar: 'شارع فوتيان، شينزن', en: 'Futian Rd, Shenzhen' },
          recommendedFor: { ar: 'مشاوي عربية، كبسة، وكباب طازج', en: 'Authentic Arabic grills and business dinners' }
        },
        {
          id: 'mevlana-turkish-sz',
          name: { ar: 'مطعم ميفلانا التركي (Mevlana Turkish)', en: 'Mevlana Turkish Restaurant' },
          cuisineType: { ar: 'مأكولات تركية حلال', en: 'Halal Turkish Grill & Cuisine' },
          isHalal: true,
          address: { ar: 'شارع هواكيانغ بي، فوتيان، شينزن', en: 'Huaqiangbei, Futian, Shenzhen' },
          recommendedFor: { ar: 'وجبات غداء حلال أثناء جولات شراء الإلكترونيات', en: 'Convenient halal lunch spot in Huaqiangbei' }
        }
      ],
      touristAttractions: [
        {
          id: 'window-of-the-world',
          name: { ar: 'منتزه نافذة على العالم (Window of the World)', en: 'Window of the World' },
          category: { ar: 'منتزه ترفيهي ومعماري', en: 'Theme Park' },
          description: { ar: 'يضم 130 مجسماً لأشهر معالم العالم المعمارية كبرج ايفل والأهرامات.', en: 'Famous theme park with replicas of world landmarks.' },
          nearestMetro: 'Window of the World Station (Line 1/2)'
        },
        {
          id: 'pingan-deck',
          name: { ar: 'منصة برج بينغ آن المالي (Ping An Deck)', en: 'Ping An Finance Centre Deck' },
          category: { ar: 'معلم حديث', en: 'Modern Skyscraper Deck' },
          description: { ar: 'رابع أطول برج في العالم (599m) بإطلالة ساحرة على شينزن وهونغ كونغ.', en: '599m skyscraper offering skydeck views across Shenzhen and Hong Kong.' }
        }
      ],
      essentialServices: [
        {
          id: 'hk-border-service',
          serviceType: { ar: 'معابر ومواصلات دولية', en: 'Border Crossing & HK Transit' },
          title: { ar: 'معبر فوتيان ولوهو إلى هونغ كونغ (Futian/Luohu HK Border)', en: 'Futian / Luohu HK Checkpoint' },
          description: { ar: 'عبور مباشر بالقطار للمسافرين والتجار بين شينزن وهونغ كونغ خلال 15 دقيقة.', en: 'Direct 15-minute train crossing to Hong Kong.' }
        }
      ]
    },
    tradeFairs: [
      {
        id: 'shenzhen-hi-tech-fair',
        name: { ar: 'معرض شينزن الدولي للتكنولوجيا (China Hi-Tech Fair)', en: 'China Hi-Tech Fair (CHTF)' },
        industry: 'Electronics & High Tech',
        venue: { ar: 'مركز شينزن للمعارض والمؤتمرات (Futian)', en: 'Shenzhen Convention & Exhibition Center' },
        occurrence: { ar: 'نوفمبر سنوياً', en: 'Annually in November' },
        officialWebsite: 'https://www.chtf.com',
        bestFor: ['Tech Buyers', 'Electronics Importers', 'Startups']
      }
    ],
    relatedCitySlugs: ['guangzhou', 'dongguan', 'foshan', 'hong-kong'],
    relatedProductSlugs: ['electronics', 'solar-renewable', 'hardware-tools'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل شينزن التجاري | سوق الإلكترونيات والتكنولوجيا والمصانع', en: 'Shenzhen Sourcing Guide | Electronics Wholesale & Tech Factories' },
      description: { ar: 'دليل الاستيراد من شينزن: سوق هواكيانغ بي للإلكترونيات، مصانع التكنولوجيا، الموانئ، واللوجستيات.', en: 'Complete sourcing guide to Shenzhen China: Electronics wholesale, tech factories, Yantian port, and logistics.' }
    }
  },

  {
    id: 'yiwu',
    slug: 'yiwu',
    name: {
      ar: 'إيوو (إيو)',
      en: 'Yiwu',
      zh: '义乌'
    },
    province: {
      ar: 'تشيجيانغ',
      en: 'Zhejiang'
    },
    region: 'Yangtze River Delta',
    tier: 'tier-1',
    commercialImportanceScore: 97,
    heroImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80',
    skylineImage: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80'
    ],
    description: {
      ar: 'عاصمة المنتجات الاستهلاكية والسلع الصغيرة الأولى في العالم (Supermarket of the World). تضم مدينة التجارة الدولية (Futian Market) التي تحتوي على أكثر من 75 ألف محل جملة ثابت. المقصد الأول للتجار العرب ومستوردي الهدايا، الألعاب، الأدوات المنزلية، والإكسسوارات.',
      en: 'The Small Commodities Capital of the World and undisputed sourcing paradise for general merchandise, toys, gifts, stationery, kitchenware, and accessories.'
    },
    keyIndustries: ['small-commodities', 'toys', 'stationery', 'kitchenware', 'jewelry', 'hardware-tools'],
    primaryProducts: {
      ar: ['الألعاب والهدايا', 'الأدوات المنزلية والمطبخ', 'الإكسسوارات والمجوهرات التقليدية', 'أدوات القرطاسية والمكتب', 'الجوارب والمنسوجات الخفيفة'],
      en: ['Toys & Gifts', 'Kitchenware & Household Items', 'Fashion Jewelry & Accessories', 'Stationery & Office Supplies', 'Socks & Light Textiles']
    },
    bestFor: ['Importer', 'Wholesaler', 'Retailer', 'Startup', 'General Trader'],
    districts: [
      {
        id: 'futian-district-yiwu',
        cityId: 'yiwu',
        name: { ar: 'منطقة سوق فوتيان (Futian Market Zones 1-5)', en: 'Futian Market District' },
        activityType: { ar: 'مدينة التجارة الدولية (أضخم سوق جملة مجمع بالعالم)', en: 'Yiwu International Trade City' },
        mainProducts: ['ألعاب', 'هدايا', 'إكسسوارات', 'أدوات منزلية', 'حقائب'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'BRT Bus Routes / Yiwu High Speed Rail Station'
      }
    ],
    wholesaleMarkets: [
      {
        id: 'yiwu-trade-city',
        cityId: 'yiwu',
        name: { ar: 'مدينة التجارة الدولية في إيوو (Futian Market)', en: 'Yiwu International Trade City (Futian)', zh: '义乌国际商贸城' },
        type: 'Wholesale',
        category: 'Small Commodities',
        description: {
          ar: 'أضخم سوق جملة مغلق في العالم مقسم إلى 5 مناطق ضخمة تضم أكثر من 75 ألف مورد.',
          en: 'World largest wholesale market complex divided into 5 massive districts with over 75,000 suppliers.'
        },
        address: { ar: 'طريق شوتشوانغ، إيوو، جينخوا، تشيجيانغ', en: 'Chouzhou North Rd, Yiwu, Zhejiang' },
        nearestMetro: 'Yiwu BRT / Yiwu Airport (YIW)',
        operatingHours: '09:00 - 17:00',
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'yiwu-industrial-park',
        cityId: 'yiwu',
        name: { ar: 'المنطقة الصناعية للسلع الخفيفة في إيوو', en: 'Yiwu Light Industry Park' },
        clusterSpecialization: { ar: 'تصنيع وتعبئة الجوارب والإكسسوارات والألعاب', en: 'Socks, Zipper & Small Commodities Manufacturing' },
        factoryTypes: ['OEM Factories', 'Packaging Hubs'],
        keyProducts: ['جوارب', 'سحابات', 'أدوات تجميل'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'yw-small-commodities',
        productName: { ar: 'السلع الاستهلاكية الصغيرة والهدايا', en: 'Small Commodities & General Merchandise' },
        industryCategory: 'Small Commodities',
        whyThisCity: { ar: 'أسعار جملة متدنية جداً وتوفر خيارات شراء بكميات صغيرة أو شحن حاويات مشكلة.', en: 'Lowest wholesale prices and easy mixed-container consolidation.' },
        mainManufacturingArea: { ar: 'مدينة إيوو وجينخوا المحيطة', en: 'Yiwu city & Jinhua jurisdiction' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Yiwu Airport (YIW)', 'Hangzhou Xiaoshan Airport (HGH)', 'Shanghai Pudong (PVG)'],
      seaPorts: ['Ningbo-Zhoushan Port (ميناء نينغبو)', 'Shanghai Port (ميناء شانغهاي)'],
      highSpeedRailwayStations: ['Yiwu Railway Station (قطار سريع لـ هانغتشو وشانغهاي)'],
      seaFreightSuitability: { ar: 'ممتازة جداً عبر الميناء الجاف بـ إيوو والربط المباشر بميناء نينغبو الشحن البحري.', en: 'Yiwu Dry Port connects directly to Ningbo ocean terminals.' },
      airFreightSuitability: { ar: 'شحن جوي متوفر عبر مطار إيوو وهانغتشو.', en: 'Good air freight services via Yiwu & Hangzhou.' },
      primaryCargoRoutes: {
        ar: ['قطار الشحن إيوو-مدريد/آسيا الوسطى', 'خط الشحن البحري للشرق الأوسط من نينغبو'],
        en: ['Yiwu-Europe Railway Line', 'Middle East Direct Sea Freight via Ningbo']
      }
    },
    businessTravelGuide: {
      bestVisitMonths: ['مارس', 'أبريل', 'مايو', 'سبتمبر', 'أكتوبر', 'نوفمبر'],
      suggestedStayDays: 6,
      weatherSummary: { ar: 'معتدل في الربيع والخريف، حار صيفاً، بارد شتاءً.', en: 'Four distinct seasons, mild in spring & autumn.' },
      recommendedStayAreas: [
        { ar: 'منطقة سوق فوتيان (Futian Market Area): تتوفر فيها مطاعم عربية وحلال وفنادق مناسبة.', en: 'Futian Area: Abundant halal restaurants & trading hotels.' }
      ],
      localTransportAdvice: { ar: 'التاكسي وتطبيق Didi وتدفق حافلات BRT سريعة جداً.', en: 'Taxis & Didi are very affordable and convenient.' },
      languageTips: { ar: 'اللغة العربية والإنجليزية منتشرتان في المكاتب التجارية والمطاعم بـ إيوو.', en: 'Arabic & English widely spoken by trading agents.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi', 'Translate App'],
      recommendedHotels: [
        {
          id: 'yiwu-marriott',
          name: { ar: 'فندق ماريوت إيوو (Yiwu Marriott Hotel)', en: 'Yiwu Marriott Hotel' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'منطقة سوق فوتيان 3 (Futian District 3)', en: 'Adjacent to Futian Market District 3' },
          highlights: { ar: 'أقرب فندق 5 نجوم مدعوم بخدمات رجال الأعمال ومركز التجارة', en: 'Direct access to Futian Market District 3' }
        },
        {
          id: 'your-world-hotel-yw',
          name: { ar: 'فندق يور وورلد الدولي إيوو (Your World International)', en: 'Your World International Hotel Yiwu' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'شارع تشوتشو، إيوو', en: 'Chouzhou North Rd' },
          highlights: { ar: 'يحيط به مئات المكاتب التجارية العربية ومطاعم الشرق الأوسط', en: 'Surrounded by Arab sourcing offices and restaurants' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'al-basha-yiwu',
          name: { ar: 'مطعم الباشا العربي في إيوو (Al-Basha)', en: 'Al-Basha Arabic Restaurant Yiwu' },
          cuisineType: { ar: 'مأكولات عربية وشامية ومصريه حلال', en: 'Halal Syrian, Egyptian & Middle Eastern' },
          isHalal: true,
          address: { ar: 'شارع تشوتشو الشمالي، إيوو', en: 'Chouzhou North Rd, Yiwu' },
          recommendedFor: { ar: 'اللقاءات التجارية والكبسة والمشويات الشامية', en: 'Top Arabic business lunch & dinner spot' }
        },
        {
          id: 'sultan-yiwu',
          name: { ar: 'مطعم السلطان التركي بـ إيوو', en: 'Sultan Turkish Restaurant Yiwu' },
          cuisineType: { ar: 'مأكولات تركية حلال', en: 'Halal Turkish Grill' },
          isHalal: true,
          address: { ar: 'بالقرب من سوق فوتيان، إيوو', en: 'Near Futian Market, Yiwu' },
          recommendedFor: { ar: 'كباب تركي وشاورما وبوفيهات حلال', en: 'Famous Turkish breakfast & kebabs' }
        }
      ],
      touristAttractions: [
        {
          id: 'futian-promenade',
          name: { ar: 'ممشي ومجمع سوق فوتيان (Futian Market Complex)', en: 'Futian Market Complex Promenade' },
          category: { ar: 'معلم تجاري وسياحي', en: 'Commercial Landmark' },
          description: { ar: 'أضخم مبنى تجاري في العالم بطول يزيد عن 7 كيلومترات متواصلة.', en: 'World largest wholesale building complex spanning over 7 kilometers.' }
        },
        {
          id: 'yiwu-night-market',
          name: { ar: 'السوق الليلي التراثي في إيوو (Santinglu Night Market)', en: 'Santinglu Night Market' },
          category: { ar: 'سوق ليلي وثقافي', en: 'Night Market' },
          description: { ar: 'أشهر سوق ليلي في إيوو للمأكولات والملابس والهدايا التذكارية.', en: 'Vibrant evening market featuring street food and local crafts.' }
        }
      ],
      essentialServices: [
        {
          id: 'yiwu-arab-offices',
          serviceType: { ar: 'مكاتب الشحن والترجمة العربية', en: 'Arabic Sourcing & Shipping' },
          title: { ar: 'مكاتب الوساطة العربية في إيوو (Yiwu Arab Sourcing Hub)', en: 'Yiwu Arab Trading & Logistics Hub' },
          description: { ar: 'أكثر من 500 مكتب عربي مرخص لتجميع الشحنات والتفتيش والترجمة.', en: 'Over 500 licensed Arabic-speaking sourcing, QC & freight agents.' }
        }
      ]
    },
    tradeFairs: [
      {
        id: 'yiwu-fair',
        name: { ar: 'معرض إيوو الدولي للسلع الصغيرة (Yiwu Fair)', en: 'Yiwu International Commodities Fair' },
        industry: 'Small Commodities & Consumer Goods',
        venue: { ar: 'مركز إيوو الدولي للمعارض', en: 'Yiwu International Expo Center' },
        occurrence: { ar: 'أكتوبر سنوياً', en: 'Annually in October' },
        officialWebsite: 'http://en.yiwufair.com',
        bestFor: ['General Importers', 'Wholesalers', 'Retailers']
      }
    ],
    relatedCitySlugs: ['ningbo', 'hangzhou', 'jinhua', 'yongkang'],
    relatedProductSlugs: ['small-commodities', 'toys', 'stationery', 'kitchenware'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل إيوو التجاري | سوق فوتيان للجملة والسلع الصغيرة', en: 'Yiwu Sourcing Guide | Futian Wholesale Market & Small Commodities' },
      description: { ar: 'دليل الاستيراد من إيوو الصينية: سوق فوتيان، السلع الاستهلاكية، الألعاب، الهدايا، المكاتب العربية والشحن.', en: 'Complete Yiwu guide: Futian market wholesale, small commodities, toys, halal food, logistics & shipping.' }
    }
  },

  {
    id: 'foshan',
    slug: 'foshan',
    name: {
      ar: 'فوشان',
      en: 'Foshan',
      zh: '佛山'
    },
    province: {
      ar: 'غوانغدونغ',
      en: 'Guangdong'
    },
    region: 'Pearl River Delta',
    tier: 'tier-1',
    commercialImportanceScore: 96,
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    skylineImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
    ],
    description: {
      ar: 'العاصمة العالمية الأولى لصناعة الأثاث، السيراميك، الأدوات الصحية، والمواد الإنشائية. تضم منطقة شوند (Shunde) الشهيرة بـ مدينة الأثاث (Louvre Furniture Mall) ومدينة الصين للسيراميك (China Ceramics City). المقصد الأول لتأثيث الفنادق والمشاريع والمنازل.',
      en: 'The Furniture & Building Materials Capital of the World. Home to Shunde Lecong Furniture City and China Ceramics City. Premier global destination for hotel, residential, and construction sourcing.'
    },
    keyIndustries: ['furniture', 'building-materials', 'lighting', 'home-appliances', 'plastics-rubber'],
    primaryProducts: {
      ar: ['الأثاث المنزلي والكتبي والفندقي', 'السيراميك والبورسلين والرخام', 'الأدوات الصحية والخلاطات', 'معدات الإضاءة والديكور', 'الأجهزة المنزلية (Midea HQ)'],
      en: ['Home, Office & Hotel Furniture', 'Ceramic Tiles & Porcelain', 'Sanitary Ware & Faucets', 'Lighting Fixtures', 'Home Appliances (Midea HQ)']
    },
    bestFor: ['Importer', 'Furniture Business', 'Construction Business', 'Project Manager', 'Architect'],
    districts: [
      {
        id: 'shunde-district',
        cityId: 'foshan',
        name: { ar: 'منطقة شوند (Shunde District - Lecong)', en: 'Shunde Lecong Furniture Hub' },
        activityType: { ar: 'مدينة الأثاث العالمية (سوق ليكتشونغ)', en: 'Global Furniture Sourcing City' },
        mainProducts: ['أثاث منازل', 'أثاث فنادق', 'أثاث مكتبي'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'Guangfou Metro Line (Lecong Station)'
      },
      {
        id: 'chancheng-district',
        cityId: 'foshan',
        name: { ar: 'منطقة شانشنغ (Chancheng District)', en: 'Chancheng Ceramics Center' },
        activityType: { ar: 'مدينة الصين للسيراميك والمواد الإنشائية', en: 'China Ceramics City & Sanitary Ware' },
        mainProducts: ['سيراميك', 'رخام', 'أدوات صحية'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'Ancestral Temple Station (Guangfou Line)'
      }
    ],
    wholesaleMarkets: [
      {
        id: 'louvre-furniture-mall',
        cityId: 'foshan',
        name: { ar: 'مجمع اللوفر للأثاث (Louvre Furniture Mall)', en: 'Louvre International Furniture Art Center', zh: '罗浮宫国际家具博览中心' },
        type: 'Wholesale',
        category: 'Furniture',
        description: {
          ar: 'أفخم وأضخم معرض ومجمع للأثاث والديكور في العالم.',
          en: 'World largest high-end furniture and interior decoration exhibition mall.'
        },
        address: { ar: 'طريق ليتشونغ، منطقة شوند، فوشان', en: 'Lecong Section, 325 National Highway, Shunde, Foshan' },
        nearestMetro: 'Guangfou Line (Kuaizi Road / Lecong)',
        operatingHours: '09:00 - 18:30',
        moqLevel: 'Low'
      },
      {
        id: 'china-ceramics-city',
        cityId: 'foshan',
        name: { ar: 'مدينة الصين للسيراميك (China Ceramics City)', en: 'China Ceramics City', zh: '中国陶瓷城' },
        type: 'Wholesale',
        category: 'Building Materials',
        description: {
          ar: 'المركز الرئيسي لتصدير السيراميك والبورسلين والأدوات الصحية لجميع دول العالم.',
          en: 'Primary export center for ceramic tiles, porcelain, and sanitary ware.'
        },
        address: { ar: 'طريق جيانغ هوا 3، منطقة شانشنغ، فوشان', en: 'Jiangwan 3rd Rd, Chancheng District, Foshan' },
        nearestMetro: 'Guangfou Line (Chancheng)',
        moqLevel: 'Medium'
      }
    ],
    industrialZones: [
      {
        id: 'shunde-furniture-zone',
        cityId: 'foshan',
        name: { ar: 'التجمع الصناعي للأثاث في شوند', en: 'Shunde Furniture Industrial Manufacturing Cluster' },
        clusterSpecialization: { ar: 'تصنيع وهندسة الأثاث الخشبي والمعدني', en: 'Wooden & Metal Furniture Manufacturing' },
        factoryTypes: ['Custom Factories', 'OEM Production'],
        keyProducts: ['أطقم كنب', 'طاولات طعام', 'غرف نوم'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'fs-furniture-building',
        productName: { ar: 'الأثاث ومواد البناء والسيراميك', en: 'Furniture, Ceramic Tiles & Building Materials' },
        industryCategory: 'Furniture',
        whyThisCity: { ar: 'التجمع الصناعي المعرفي والأضخم للأثاث والسيراميك في العالم مع مراكز تصميم عالمية.', en: 'Unrivaled quality, choice, and manufacturing scale for furniture and ceramics.' },
        mainManufacturingArea: { ar: 'منطقة شوند وشانشنغ ونانهاي', en: 'Shunde, Chancheng, Nanhai' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Guangzhou Baiyun Airport (CAN) - 50 mins away', 'Foshan Shadi Airport (FUO)'],
      seaPorts: ['Sanshui Port', 'Rongqi Port (Shunde)', 'Nansha Port (Guangzhou)'],
      highSpeedRailwayStations: ['Foshan West Railway Station', 'Shunde Railway Station'],
      seaFreightSuitability: { ar: 'ممتازة جداً عبر موانئ فوشان الداخلية والنقل المباشر لميناء نانشا وشينزن.', en: 'Direct barge connections to Guangzhou & Shenzhen deepsea ports.' },
      airFreightSuitability: { ar: 'عبر مطار جوانزو باييون المباشر (45 دقيقة بالسيارة).', en: 'Convenient via Guangzhou Baiyun Airport.' },
      primaryCargoRoutes: {
        ar: ['شحن الحاويات الكاملة (FCL) لأثاث المشاريع للخليج ومصر والشرق الأوسط'],
        en: ['FCL Furniture & Ceramics Shipping Routes Globally']
      }
    },
    businessTravelGuide: {
      bestVisitMonths: ['مارس', 'أبريل', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
      suggestedStayDays: 4,
      weatherSummary: { ar: 'دافئ ورطب صيفاً، لطيف ومعتدل شتاءً.', en: 'Warm & humid, pleasant in winter.' },
      recommendedStayAreas: [
        { ar: 'منطقة شوند (Lecong / Daliang): للإقامة بالقرب من أسواق الأثاث وفنادق خمس نجوم.', en: 'Shunde / Lecong: Walking distance to furniture malls.' },
        { ar: 'منطقة شانشنغ (Chancheng): بالقرب من أسواق السيراميك والمناطق التاريخية.', en: 'Chancheng: Close to ceramics markets.' }
      ],
      localTransportAdvice: { ar: 'خط مترو غوانغفو (Guangfou Line) يربط جوانزو بـ فوشان مباشرة خلال 30 دقيقة.', en: 'Guangfou Metro Line directly connects Guangzhou to Foshan.' },
      languageTips: { ar: 'المندرين والكانتونية. الفنادق الكبرى توفر مترجمين تجاريين.', en: 'Mandarin & Cantonese. Translators available at furniture centers.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'sofitel-foshan-shunde',
          name: { ar: 'فندق سوفيتيل فوشان شوند (اللوفر للأثاث)', en: 'Sofitel Foshan Shunde' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'داخل مجمع اللوفر للأثاث بـ ليكونغ', en: 'Inside Louvre Furniture Mall Complex' },
          highlights: { ar: 'يتصل مباشرة بمعارض الأثاث الفاخر ومصمم بالكامل بأثاث عالمي', en: 'Direct elevator access to Louvre Furniture Mall' }
        },
        {
          id: 'marco-polo-foshan',
          name: { ar: 'فندق ماركو بولو فوشان (Marco Polo)', en: 'Marco Polo Foshan' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'شانشنغ (قرب مدينة السيراميك)', en: 'Chancheng District (Near Ceramics City)' },
          highlights: { ar: 'قريب من أسواق السيراميك والأدوات الصحية والمناطق التراثية', en: 'Walking distance to Ancestral Temple & Ceramics plazas' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'foshan-halal-rest',
          name: { ar: 'مطعم فوشان الإسلامي الحلال (Foshan Muslim)', en: 'Foshan Muslim Halal Restaurant' },
          cuisineType: { ar: 'مأكولات حلال / مشاوي ولحم ضأن', en: 'Halal Chinese & Mutton Dishes' },
          isHalal: true,
          address: { ar: 'طريق رينمين، شانشنغ، فوشان', en: 'Renmin Rd, Chancheng, Foshan' },
          recommendedFor: { ar: 'وجبات حلال طازجة للمستوردين والتجار', en: 'Certified halal dining in central Foshan' }
        }
      ],
      touristAttractions: [
        {
          id: 'ancestral-temple-foshan',
          name: { ar: 'معبد فوشان التراثي (Zumiao Ancestral Temple)', en: 'Foshan Ancestral Temple' },
          category: { ar: 'تراث تاريخي وثقافي', en: 'Historic & Cultural Temple' },
          description: { ar: 'متحف تاريخي شهير ومقر فنون القتال للأسطورة وونغ فاي هونغ وعروض رقصة الأسد.', en: 'Famous historic temple showcasing Chinese martial arts and Lion Dance performances.' },
          nearestMetro: 'Zumiao Station (Guangfo Line)'
        }
      ],
      essentialServices: [
        {
          id: 'shunde-furniture-shipping',
          serviceType: { ar: 'خدمات تجميع وشحن الأثاث', en: 'Furniture Shipping & Freight' },
          title: { ar: 'مكاتب تجميع الحاويات (FCL Container Sourcing)', en: 'Shunde Lecong Furniture Freight Desk' },
          description: { ar: 'خدمات تجميع الأثاث والمفروشات وسيراميك المشاريع في حاويات مخصصة.', en: 'Specialized furniture & ceramics consolidation shipping to Middle East.' }
        }
      ]
    },
    tradeFairs: [
      {
        id: 'ciff-foshan-shunde',
        name: { ar: 'معرض فوشان الدولي للأثاث والسيراميك', en: 'Foshan International Ceramics & Bathroom Fair (CeramBath)' },
        industry: 'Ceramics & Building Materials',
        venue: { ar: 'مدينة الصين للسيراميك في فوشان', en: 'China Ceramics City Venue' },
        occurrence: { ar: 'أبريل وأكتوبر سنوياً', en: 'Biannual in April & October' },
        officialWebsite: 'http://www.cerambath.org',
        bestFor: ['Furniture Buyers', 'Architects', 'Building Contractors']
      }
    ],
    relatedCitySlugs: ['guangzhou', 'shunde', 'zhongshan', 'dongguan'],
    relatedProductSlugs: ['furniture', 'building-materials', 'lighting', 'home-appliances'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل فوشان التجاري | أسواق الأثاث والسيراميك ومصانع البناء', en: 'Foshan Sourcing Guide | Furniture Markets & Ceramics City' },
      description: { ar: 'دليل الاستيراد من فوشان وشوند: أسواق الأثاث بالجملة، مجمع اللوفر، السيراميك، الأدوات الصحية، والمصانع.', en: 'Complete Foshan sourcing guide: Lecong furniture city, Louvre mall, ceramics, building materials & factories.' }
    }
  },

  {
    id: 'dongguan',
    slug: 'dongguan',
    name: {
      ar: 'دونغوان (دونغ غوان)',
      en: 'Dongguan',
      zh: '东莞'
    },
    province: {
      ar: 'غوانغدونغ',
      en: 'Guangdong'
    },
    region: 'Pearl River Delta',
    tier: 'tier-1',
    commercialImportanceScore: 94,
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    skylineImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    ],
    description: {
      ar: 'مصنع العالم (Factory of the World) ومركز التصنيع الكثيف الواقع بين جوانزو وشينزن. تشتهر بتصنيع الهواتف (OPPO, Vivo HQ)، القوالب الصناعية، الآلات، البلاستيك، والملابس الجاهزة في منطقة هومين (Humen).',
      en: 'The Factory of the World. Global manufacturing hub for smartphones (OPPO & Vivo HQs), industrial molds, machinery, plastics, and Humen apparel.'
    },
    keyIndustries: ['machinery', 'electronics', 'apparel', 'plastics-rubber', 'hardware-tools'],
    primaryProducts: {
      ar: ['الهواتف الذكية (OPPO/Vivo)', 'قوالب البلاستيك والحقن', 'الآلات ومعدات الأتمتة', 'الملابس الجاهزة في هومين', 'قطع غيار الإلكترونيات'],
      en: ['Smartphones (OPPO/Vivo)', 'Precision Plastic Molds', 'CNC Machinery & Automation', 'Humen Garments', 'Electronic Hardware']
    },
    bestFor: ['Importer', 'Manufacturer', 'Electronics Business', 'Industrial Buyer'],
    districts: [
      {
        id: 'humen-district',
        cityId: 'dongguan',
        name: { ar: 'منطقة هومين (Humen Apparel Hub)', en: 'Humen Town Garment Hub' },
        activityType: { ar: 'أسواق وسلسلة تصنيع الملابس والأقمشة', en: 'Wholesale Apparel & Textile Center' },
        mainProducts: ['ملابس نسائية', 'أقمشة', 'ملابس رياضية'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'Humen High-Speed Railway Station'
      },
      {
        id: 'chang-an-district',
        cityId: 'dongguan',
        name: { ar: 'منطقة تشانغآن (Chang\'an Electronics & Molds)', en: 'Chang\'an Hardware & Mold Hub' },
        activityType: { ar: 'تصنيع الهواتف (OPPO) وقوالب الدقة', en: 'Precision Hardware, Molds & Smartphone Mfg' },
        mainProducts: ['قوالب', 'إلكترونيات', 'آلات CNC'],
        tradeFocus: 'Manufacturing',
        suitableForImporter: true,
        suitableForBusinessTravel: false
      }
    ],
    wholesaleMarkets: [
      {
        id: 'dongguan-humen-fumin-garment',
        cityId: 'dongguan',
        name: { ar: 'سوق فومين لملابس الجملة في هومين', en: 'Humen Fumin Garment Wholesale City', zh: '虎门富民服装城' },
        type: 'Wholesale',
        category: 'Apparel',
        description: {
          ar: 'العاصمة الشرقية لملابس الجملة والأزياء النسائية بأسعار المصانع.',
          en: 'Famous garment wholesale center serving global apparel buyers.'
        },
        address: { ar: 'طريق بينهاي، هومين، دونغوان', en: 'Binhai Rd, Humen Town, Dongguan' },
        nearestMetro: 'Humen High-Speed Railway Station',
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'changan-mold-park',
        cityId: 'dongguan',
        name: { ar: 'المنطقة الصناعية للقوالب في تشانغآن', en: 'Chang\'an Precision Mold Industrial Park' },
        clusterSpecialization: { ar: 'تصنيع قوالب البلاستيك والمعادن بدقة عالية', en: 'High Precision Plastic & Metal Mold Tooling' },
        factoryTypes: ['OEM Tooling Factories', 'CNC Machine Shops'],
        keyProducts: ['قوالب إلكترونيات', 'قطع سيارات', 'آلات'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'dg-molds-machinery',
        productName: { ar: 'الآلات والقوالب والقطع الصناعية', en: 'Machinery, Precision Molds & Industrial Tooling' },
        industryCategory: 'Machinery',
        whyThisCity: { ar: 'أعلى تركيز لمصانع قوالب البلاستيك والآلات الدقيقة في مقاطعة غوانغدونغ.', en: 'Top industrial tooling and plastic injection mold hub in China.' },
        mainManufacturingArea: { ar: 'تشانغآن ودالانغ وهومين', en: 'Chang\'an, Dalang, Humen' },
        wholesaleAvailability: 'Medium',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Shenzhen Baoan Airport (SZX)', 'Guangzhou Baiyun Airport (CAN)'],
      seaPorts: ['Humen Port (Dongguan)', 'Yantian / Shekou (Shenzhen)', 'Nansha (Guangzhou)'],
      highSpeedRailwayStations: ['Humen Station', 'Dongguan Station'],
      seaFreightSuitability: { ar: 'موقعه الاستراتيجي بين جوانزو وشينزن يجعله الأسهل في الشحن البحري عبر موانئ المقاطعة.', en: 'Prime location between Shenzhen & Guangzhou ports.' },
      airFreightSuitability: { ar: 'عبر مطار شينزن أو مطار جوانزو.', en: 'Dual airport connectivity.' },
      primaryCargoRoutes: {
        ar: ['شحن بحري مباشر للمعدات والآلات والقوالب إلى الشرق الأوسط'],
        en: ['Direct sea freight for machinery & industrial goods']
      }
    },
    businessTravelGuide: {
      bestVisitMonths: ['أكتوبر', 'نوفمبر', 'ديسمبر', 'مارس'],
      suggestedStayDays: 3,
      weatherSummary: { ar: 'استوائي حار صيفاً ولطيف شتاءً.', en: 'Subtropical climate.' },
      recommendedStayAreas: [
        { ar: 'وسط مدينة دونغوان (Nancheng / Dongcheng): فنادق فاخرة ومراكز تجارية.', en: 'Nancheng / Dongcheng: Downtown business amenities.' }
      ],
      localTransportAdvice: { ar: 'القطار السريع يربط هومين بـ شينزن خلال 17 دقيقة وجوانزو خلال 20 دقيقة.', en: 'High-speed train to Shenzhen in 17 mins.' },
      languageTips: { ar: 'المندرين والكانتونية.', en: 'Mandarin & Cantonese.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'kande-international-dg',
          name: { ar: 'فندق كاندا الدولي دونغوان (Kande International)', en: 'Kande International Hotel Dongguan' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'نانتشنغ (Nancheng CBD)', en: 'Nancheng CBD' },
          highlights: { ar: 'فندق أعمال فاخر يقع في قلب المركز المالي بـ دونغوان', en: 'Premier business hotel in Dongguan financial district' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'dongguan-lanzhou-halal',
          name: { ar: 'مطعم نودلز اللانجو الحلال بـ دونغوان', en: 'Dongguan Lanzhou Halal Restaurant' },
          cuisineType: { ar: 'مأكولات حلال نودلز ولحم ضأن', en: 'Halal Beef Noodles & BBQ' },
          isHalal: true,
          address: { ar: 'دونغتشينغ، دونغوان', en: 'Dongcheng Rd, Dongguan' },
          recommendedFor: { ar: 'وجبة حلال سريعة ولذيذة للمسافرين', en: 'Reliable halal lunch near industrial centers' }
        }
      ],
      touristAttractions: [
        {
          id: 'songshan-lake',
          name: { ar: 'بحيرة سونغشان ومقر هواوي (Songshan Lake)', en: 'Songshan Lake (Huawei European Town)' },
          category: { ar: 'معلم طبيعي ومعماري', en: 'Scenic & Tech Park' },
          description: { ar: 'بحيرة ساحرة تضم مجمع شركة هواوي المصمم على طراز المدن الأوروبية.', en: 'Picturesque lake featuring Huawei fairytale European-style campus.' }
        }
      ]
    },
    tradeFairs: [],
    relatedCitySlugs: ['shenzhen', 'guangzhou', 'foshan', 'zhongshan'],
    relatedProductSlugs: ['machinery', 'electronics', 'apparel', 'plastics-rubber'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل دونغوان التجاري والصناعي | آلات، إلكترونيات، قوالب ومصانع', en: 'Dongguan Sourcing Guide | Manufacturing, Electronics & Machinery' },
      description: { ar: 'دليل الاستيراد والتصنيع من مدينة دونغوان الصينية: مصانع الإلكترونيات، قوالب البلاستيك، سوق ملابس هومين، والموانئ.', en: 'Complete sourcing guide to Dongguan: Electronics manufacturing, molds, machinery, Humen knitwear, and factories.' }
    }
  },

  {
    id: 'ningbo',
    slug: 'ningbo',
    name: {
      ar: 'نينغبو (نينغبو تشوجيانغ)',
      en: 'Ningbo',
      zh: '宁波'
    },
    province: {
      ar: 'تشيجيانغ',
      en: 'Zhejiang'
    },
    region: 'Yangtze River Delta',
    tier: 'tier-1',
    commercialImportanceScore: 95,
    heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    skylineImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    description: {
      ar: 'أحد أكبر وأهم الموانئ البحرية في العالم (ميناء نينغبو-تشوشان Ningbo-Zhoushan Port). تشتهر بتصنيع وتصدير الأجهزة المنزلية الصغيرة، البلاستيك، أدوات القرطاسية، الأدوات الكهربائية، والمعدات الهيدروليكية والصناعية.',
      en: 'Home to the world largest port by cargo volume (Ningbo-Zhoushan Port). Major manufacturing hub for small home appliances, plastics, stationery, and power tools.'
    },
    keyIndustries: ['logistics-shipping', 'home-appliances', 'plastics-rubber', 'stationery', 'hardware-tools', 'auto-parts'],
    primaryProducts: {
      ar: ['الأجهزة المنزلية الصغيرة (مراوح، خلاطات)', 'منتجات وقوالب البلاستيك', 'أدوات القرطاسية والمكتب (Deli HQ)', 'الأدوات والمعدات الكهربائية', 'قطع غيار السيارات'],
      en: ['Small Home Appliances', 'Plastic Products & Molds', 'Stationery & Office Supplies (Deli HQ)', 'Power Tools & Hardware', 'Auto Components']
    },
    bestFor: ['Importer', 'Wholesaler', 'Logistics Business', 'Appliance Importer'],
    districts: [
      {
        id: 'yinzhou-district',
        cityId: 'ningbo',
        name: { ar: 'منطقة ينزو (Yinzhou Commercial Hub)', en: 'Yinzhou Commercial District' },
        activityType: { ar: 'مقرات شركات التصدير والشركات اللوجستية', en: 'Export Trading Companies & Logistics HQ' },
        mainProducts: ['قرطاسية', 'أجهزة منزلية', 'أدوات'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'Southern Business District Station'
      }
    ],
    wholesaleMarkets: [
      {
        id: 'ningbo-light-commodities',
        cityId: 'ningbo',
        name: { ar: 'سوق نينغبو للسلع الخفيفة والأجهزة', en: 'Ningbo Light Industrial Commodities Market', zh: '宁波轻纺城' },
        type: 'Wholesale',
        category: 'Small Commodities & Appliances',
        description: {
          ar: 'سوق جملة مجمع للسلع الاستهلاكية والأدوات المنزلية والمنسوجات.',
          en: 'Major wholesale hub for consumer goods, textiles, and small appliances.'
        },
        address: { ar: 'طريق ينزو، نينغبو', en: 'Yinzhou Rd, Ningbo, Zhejiang' },
        nearestMetro: 'Yinzhou Center Station',
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'beilun-port-zone',
        cityId: 'ningbo',
        name: { ar: 'منطقة بيولون الصناعية والميناء', en: 'Beilun Port & Industrial Zone' },
        clusterSpecialization: { ar: 'الخدمات اللوجستية وحاويات الشحن وقوالب الحقن', en: 'Port Logistics & Plastic Injection Machinery' },
        factoryTypes: ['Heavy Machinery Factories', 'Logistics Depots'],
        keyProducts: ['آلات بلاستيك', 'معدات شحن'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'nb-home-appliances',
        productName: { ar: 'الأجهزة المنزلية والقرطاسية واللوجستيات', en: 'Small Home Appliances, Stationery & Plastics' },
        industryCategory: 'home-appliances',
        whyThisCity: { ar: 'أكبر مركز تصنيع وتصدير أجهزة منزلية صغيرة مع ربط مباشر بأكبر ميناء شحن بالعالم.', en: 'World #1 cargo port city with premier small appliance export infrastructure.' },
        mainManufacturingArea: { ar: 'نينغبو وسيشي ويويوان', en: 'Ningbo, Cixi, Yuyao' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Ningbo Lishe International Airport (NGB)', 'Hangzhou Xiaoshan Airport (HGH)'],
      seaPorts: ['Ningbo-Zhoushan Port (أبرز وأضخم ميناء شحن في العالم)'],
      highSpeedRailwayStations: ['Ningbo Railway Station'],
      seaFreightSuitability: { ar: 'الأفضل عالمياً. الميناء رقم 1 في حجم البضائع المنقولة عالمياً.', en: 'World #1 cargo port for ocean freight dispatch.' },
      airFreightSuitability: { ar: 'جيدة عبر مطار نينغبو وهانغتشو.', en: 'Good via Ningbo & Hangzhou airports.' },
      primaryCargoRoutes: {
        ar: ['خطوط ملاحة مباشرة يومية إلى جميع موانئ الشرق الأوسط وشمال إفريقيا والعالم'],
        en: ['Daily direct ocean liner services to global ports']
      }
    },
    businessTravelGuide: {
      bestVisitMonths: ['أبريل', 'مايو', 'سبتمبر', 'أكتوبر'],
      suggestedStayDays: 4,
      weatherSummary: { ar: 'معتدل في الربيع والخريف، رطب حار صيفاً.', en: 'Pleasant spring & autumn.' },
      recommendedStayAreas: [
        { ar: 'وسط نينغبو (Yinzhou / Haishu): فنادق الأعمال ومراكز الخدمات اللوجستية.', en: 'Yinzhou District: Modern commercial center.' }
      ],
      localTransportAdvice: { ar: 'مترو نينغبو حديث للغاية وسريع.', en: 'Modern metro network.' },
      languageTips: { ar: 'المندرين والإنجليزية في الشركات اللوجستية والتصديرية.', en: 'Mandarin & English in export firms.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'shangri-la-ningbo',
          name: { ar: 'فندق شنجريلا نينغبو (Shangri-La Ningbo)', en: 'Shangri-La Hotel Ningbo' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'منطقة هايشو التقاء الأنهار', en: 'Three Rivers Junction, Haishu' },
          highlights: { ar: 'موقع استراتيجي وسط المدينة وإطلالة ساحرة على الميناء النهري', en: 'Riverfront luxury hotel with premier business facilities' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'ningbo-muslim-rest',
          name: { ar: 'المطعم الإسلامي بـ نينغبو (Ningbo Muslim)', en: 'Ningbo Muslim Halal Restaurant' },
          cuisineType: { ar: 'مأكولات حلال ولحم ضأن ونودلز', en: 'Halal Mutton & Noodle Dishes' },
          isHalal: true,
          address: { ar: 'منطقة ينزو، نينغبو', en: 'Yinzhou District, Ningbo' },
          recommendedFor: { ar: 'غداء حلال طازج أثناء جولات المكاتب التصديرية', en: 'Reliable halal dining for export buyers' }
        }
      ],
      touristAttractions: [
        {
          id: 'tianyi-pavilion',
          name: { ar: 'مكتبة تيانيي التراثية (Tianyi Pavilion - 天一阁)', en: 'Tianyi Pavilion' },
          category: { ar: 'تراث تاريخي', en: 'Historic Library & Gardens' },
          description: { ar: 'أقدم مكتبة خاصة قائمة في آسيا محاطة بالحدائق الصينية التقليدية.', en: 'Asia oldest surviving private library built in 1561.' }
        }
      ]
    },
    tradeFairs: [
      {
        id: 'ningbo-consumer-fair',
        name: { ar: 'معرض نينغبو الدولي للسلع الاستهلاكية والقرطاسية', en: 'China International Consumer Goods Fair (CICGF)' },
        industry: 'Consumer Goods & Stationery',
        venue: { ar: 'مركز نينغبو الدولي للمعارض', en: 'Ningbo International Conference & Exhibition Center' },
        occurrence: { ar: 'يونيو سنوياً', en: 'Annually in June' },
        officialWebsite: 'http://www.cicgf.com',
        bestFor: ['Appliance Importers', 'Stationery Distributors', 'Wholesalers']
      }
    ],
    relatedCitySlugs: ['yiwu', 'cixi', 'yuyao', 'hangzhou', 'shanghai'],
    relatedProductSlugs: ['logistics', 'home-appliances', 'plastics-rubber', 'hardware-tools'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل نينغبو التجاري واللوجستي | أجهزة منزلية، بلاستيك وميناء نينغبو', en: 'Ningbo Sourcing Guide & Logistics | Port, Appliances & Plastics' },
      description: { ar: 'دليل الاستيراد والشحن من نينغبو الصينية: ميناء نينغبو-تشوشان، مصانع الأجهزة المنزلية، القرطاسية، واللوجستيات.', en: 'Complete Ningbo guide: World largest cargo port, small home appliances manufacturing, stationery & shipping logistics.' }
    }
  },

  {
    id: 'hangzhou',
    slug: 'hangzhou',
    name: { ar: 'هانغتشو (هانغتشو)', en: 'Hangzhou', zh: '杭州' },
    province: { ar: 'تشيجيانغ', en: 'Zhejiang' },
    region: 'Yangtze River Delta',
    tier: 'tier-1',
    commercialImportanceScore: 95,
    heroImage: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'عاصمة التجارة الإلكترونية العالمية ومقر عملاق التجارة Alibaba Group. تشتهر بكونها مركز التجارة الرقمية، صناعة الحرير والأقمشة (سوق الحرير السائح)، والتكنولوجيا المتقدمة.',
      en: 'Global E-Commerce Capital and headquarters of Alibaba Group. Hub for digital commerce, silk textiles, and high-tech software innovation.'
    },
    keyIndustries: ['technology', 'textiles', 'apparel', 'trade-fairs'],
    primaryProducts: {
      ar: ['منصات التجارة الرقمية', 'الحرير والملابس الراقية', 'البرمجيات والذكاء الاصطناعي', 'الأقمشة المزخرفة'],
      en: ['E-Commerce Solutions', 'Silk Products & Premium Fashion', 'Software & AI Systems', 'Decorated Textiles']
    },
    bestFor: ['Importer', 'E-Commerce Seller', 'Tech Startup', 'Fashion Business'],
    districts: [
      {
        id: 'binjiang-district',
        cityId: 'hangzhou',
        name: { ar: 'منطقة بينجيانغ التكنولوجية (Binjiang)', en: 'Binjiang Hi-Tech District' },
        activityType: { ar: 'مقرات التكنولوجيا والتجارة الإلكترونية (Alibaba, Hikvision)', en: 'Tech HQ & E-Commerce Park' },
        mainProducts: ['برمجيات', 'كاميرات مراقبة', 'حلول رقمية'],
        tradeFocus: 'Commercial Office',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'Jiangling Road Station (Line 1/6)'
      },
      {
        id: 'shangcheng-district',
        cityId: 'hangzhou',
        name: { ar: 'منطقة شانغتشينغ لأسواق الحرير والملابس (Shangcheng)', en: 'Shangcheng Garment & Silk Hub' },
        activityType: { ar: 'أسواق الملابس بالجملة وسوق الحرير الصيني', en: 'Apparel Wholesale & Silk Market Center' },
        mainProducts: ['حرير طبيعي', 'ملابس جاهزة', 'أقمشة'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'Sijiqing Metro Station (Line 7/9)'
      }
    ],
    wholesaleMarkets: [
      {
        id: 'hangzhou-sijiqing-garment',
        cityId: 'hangzhou',
        name: { ar: 'سوق سيتشيتشينغ لملابس الجملة (Sijiqing)', en: 'Sijiqing Garment Wholesale Market', zh: '四季青服装批发市场' },
        type: 'Wholesale',
        category: 'Apparel & Textiles',
        description: {
          ar: 'أحد أكبر وأشهر 3 أسواق لبيع الملابس الجاهزة والأزياء بالجملة في الصين.',
          en: 'One of China top 3 garment wholesale centers covering over 20 fashion sub-marts.'
        },
        address: { ar: 'طريق هانغهاي، منطقة شانغتشينغ، هانغتشو', en: 'Hanghai Rd, Shangcheng District, Hangzhou' },
        nearestMetro: 'Sijiqing Station (Line 7/9)',
        operatingHours: '05:00 - 15:00',
        moqLevel: 'Low'
      },
      {
        id: 'hangzhou-china-silk-city',
        cityId: 'hangzhou',
        name: { ar: 'مدينة الحرير الصيني في هانغتشو', en: 'China Silk City Market', zh: '中国丝绸城' },
        type: 'Wholesale',
        category: 'Silk & Fabrics',
        description: {
          ar: 'السوق التراثي والوطني الأول لتجارة الحرير الطبيعي والستائر والأقمشة الفاخرة.',
          en: 'China official premier wholesale and retail market for pure silk products.'
        },
        address: { ar: '253 طريق تيبانغ، هانغتشو', en: '253 Tiyuchang Rd, Hangzhou' },
        nearestMetro: 'North Jianguo Road Station (Line 2/5)',
        moqLevel: 'Flexible'
      }
    ],
    industrialZones: [
      {
        id: 'hangzhou-future-tech-city',
        cityId: 'hangzhou',
        name: { ar: 'مدينة التكنولوجيا المستقبلية (Alibaba Park)', en: 'Hangzhou Future Tech City' },
        clusterSpecialization: { ar: 'الذكاء الاصطناعي والتجارة الإلكترونية والبرمجيات', en: 'AI, Cloud Computing & E-Commerce R&D' },
        factoryTypes: ['R&D Labs', 'Tech Incubators'],
        keyProducts: ['حلول التجارة الإلكترونية', 'الأنظمة الذكية'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'hz-silk-garments',
        productName: { ar: 'الحرير الطبيعي والأزياء والتجارة الرقمية', en: 'Pure Silk, Fashion Apparel & E-Commerce Tech' },
        industryCategory: 'textiles',
        whyThisCity: { ar: 'عاصمة الحرير التاريخية وعاصمة علي بابا والتجارة عبر الحدود.', en: 'Historic silk capital and global e-commerce powerhouse.' },
        mainManufacturingArea: { ar: 'شانغتشينغ ويو هانغ وتشانغآن', en: 'Shangcheng, Yuhang, Xiaoshan' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Hangzhou Xiaoshan International Airport (HGH)'],
      seaPorts: ['Ningbo Port (90 mins by train)', 'Shanghai Port'],
      highSpeedRailwayStations: ['Hangzhou East Railway Station'],
      seaFreightSuitability: { ar: 'ممتازة عبر ميناء نينغبو المجاور.', en: 'Excellent via nearby Ningbo port.' },
      airFreightSuitability: { ar: 'مطار دولي محوري للشحن الجوي والتجارة الإلكترونية.', en: 'Major air cargo hub for cross-border e-commerce.' },
      primaryCargoRoutes: { ar: ['خطوط الشحن الجوي السريع للشرق الأوسط والعالم'], en: ['Air express routes worldwide'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['مارس', 'أبريل', 'سبتمبر', 'أكتوبر'],
      suggestedStayDays: 3,
      weatherSummary: { ar: 'معتدل ولطيف في الربيع والخريف.', en: 'Mild spring and autumn.' },
      recommendedStayAreas: [
        { ar: 'منطقة بينجيانغ (Binjiang): المقرات التكنولوجية والفنادق الحديثة.', en: 'Binjiang District: Tech HQ area & luxury hotels.' },
        { ar: 'منطقة بحيرة الغرب (West Lake): سياحية وقريبة من أسواق الحرير.', en: 'West Lake Area: Near scenic sights & silk markets.' }
      ],
      localTransportAdvice: { ar: 'شبكة مترو فائقة السهولة والسرعة.', en: 'Convenient metro lines.' },
      languageTips: { ar: 'المندرين والإنجليزية منتشرة بشكل ممتاز.', en: 'Mandarin & English widely spoken.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'midtown-shangri-la-hz',
          name: { ar: 'فندق مادتون شنجريلا هانغتشو', en: 'Midtown Shangri-La Hangzhou' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'قرب بحيرة الغرب ووسط المدينة', en: 'Downtown near West Lake' },
          highlights: { ar: 'خدمة ممتازة لرجال الأعمال وموقع قريب من أسواق الحرير', en: 'Top-tier business center close to Silk City Market' }
        },
        {
          id: 'jw-marriott-hz',
          name: { ar: 'فندق جي دبليو ماريوت هانغتشو', en: 'JW Marriott Hotel Hangzhou' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'وسط المدينة التجاري', en: 'Wulin Square Commercial Center' },
          highlights: { ar: 'قريب من مراكز التسوق ومراكز المؤتمرات', en: 'Walking distance to commercial plazas' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'xinjiang-islam-hz',
          name: { ar: 'المطعم الإسلامي بـ هانغتشو (شينجيانغ)', en: 'Hangzhou Xinjiang Muslim Restaurant' },
          cuisineType: { ar: 'مأكولات إسلامية / كباب ولحم ضأن حلال', en: 'Halal Xinjiang BBQ & Mutton Dishes' },
          isHalal: true,
          address: { ar: 'طريق تيبانغ، هانغتشو', en: 'Tiyuchang Rd, Hangzhou' },
          recommendedFor: { ar: 'وجبات حلال موثوقة ولحم ضأن طازج', en: 'Certified halal dining near silk markets' }
        }
      ],
      touristAttractions: [
        {
          id: 'west-lake',
          name: { ar: 'بحيرة الغرب (West Lake - 西湖)', en: 'West Lake' },
          category: { ar: 'معلم طبيعي وثقافي عالمي (UNESCO)', en: 'UNESCO World Heritage Landmark' },
          description: { ar: 'أشهر معالم الصين الطبيعية، تحيط بها الحدائق والمعابد الشاي التاريخية.', en: 'China iconic picturesque lake surrounded by tea hills and temples.' },
          nearestMetro: 'Longxiangqiao Station (Line 1)'
        },
        {
          id: 'lingyin-temple',
          name: { ar: 'معبد لينغين التاريخي (Lingyin Temple)', en: 'Lingyin Temple' },
          category: { ar: 'تراث تاريخي وديني', en: 'Historic Temple' },
          description: { ar: 'أحد أقدم وأكبر المعابد البوذية في الصين المحاطة بالغيوم والجبال.', en: 'Ancient Buddhist temple nestled in scenic bamboo forests.' }
        }
      ],
      essentialServices: [
        {
          id: 'alipay-hq-service',
          serviceType: { ar: 'خدمات الدفع والمالية', en: 'Digital Payments & Fintech' },
          title: { ar: 'المقر الرئيسي لـ Alipay (علي باي)', en: 'Alipay HQ Merchant Center' },
          description: { ar: 'مركز الدعم التجاري والحلول المالية الذكية للمستوردين.', en: 'Support hub for international Alipay pass & business accounts.' }
        }
      ]
    },
    tradeFairs: [
      {
        id: 'global-digital-trade-expo',
        name: { ar: 'المعرض العالمي للتجارة الرقمية (GDTE)', en: 'Global Digital Trade Expo (GDTE)' },
        industry: 'E-Commerce & Digital Tech',
        venue: { ar: 'مركز هانغتشو الدولي للمعارض (HIEC)', en: 'Hangzhou International Expo Center' },
        occurrence: { ar: 'سبتمبر سنوياً', en: 'Annually in September' },
        officialWebsite: 'https://www.gdte.org.cn',
        bestFor: ['E-Commerce Importers', 'Tech Startups', 'Logistics Merchants']
      }
    ],
    relatedCitySlugs: ['shanghai', 'yiwu', 'ningbo', 'shaoxing'],
    relatedProductSlugs: ['textiles', 'apparel', 'technology'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل هانغتشو التجاري | التجارة الإلكترونية، الحرير، والحلول الرقمية', en: 'Hangzhou Sourcing Guide | E-Commerce, Silk & Tech' },
      description: { ar: 'دليل التجارة والاستيراد من هانغتشو: عاصمة علي بابا، أسواق الحرير، والتكنولوجيا الرقمية.', en: 'Complete guide to Hangzhou: E-commerce capital, Alibaba HQ, silk markets & digital tech.' }
    }
  },

  {
    id: 'shanghai',
    slug: 'shanghai',
    name: { ar: 'شانغهاي (شنغهاي)', en: 'Shanghai', zh: '上海' },
    province: { ar: 'بلدية شانغهاي', en: 'Shanghai Municipality' },
    region: 'Yangtze River Delta',
    tier: 'tier-1',
    commercialImportanceScore: 98,
    heroImage: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab396?auto=format&fit=crop&w=1200&q=80',
    skylineImage: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab396?auto=format&fit=crop&w=800&q=80'
    ],
    description: {
      ar: 'العاصمة المالية والتجارية الأولى للصين وأكبر ميناء حاويات في العالم (Yangshan Port). المركز العالمي للمكاتب الإقليمية، المعارض الدولية الفخمة، والاستيراد والتصدير رفيع المستوى.',
      en: 'China financial and commercial metropolis and world largest container port (Yangshan Port). Global hub for trade exhibitions, regional HQs, and high-end sourcing.'
    },
    keyIndustries: ['logistics-shipping', 'trade-fairs', 'technology', 'auto-parts'],
    primaryProducts: {
      ar: ['الخدمات اللوجستية والشحن', 'الآلات المتطورة والسيارات', 'المنتجات الطبية والبيولوجية', 'المعدات المالية والتكنولوجية'],
      en: ['Shipping Logistics', 'Advanced Machinery & Autos', 'Medical Equipment', 'Financial & Tech Hardware']
    },
    bestFor: ['Importer', 'Trade Fair Visitor', 'Corporate Buyer', 'Logistics Business'],
    districts: [
      {
        id: 'pudong-lujiazui',
        cityId: 'shanghai',
        name: { ar: 'منطقة بودونغ ولوجياتزوي المالية (Pudong)', en: 'Pudong Lujiazui Financial District' },
        activityType: { ar: 'مقرات البنوك العالمية والشركات التجارية الكبرى', en: 'Financial HQ & Trade Logistics' },
        mainProducts: ['خدمات مالية', 'لوجستيات شحن', 'معدات فاخرة'],
        tradeFocus: 'Commercial Office',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'Lujiazui Station (Line 2/14)'
      },
      {
        id: 'qingpu-hongqiao',
        cityId: 'shanghai',
        name: { ar: 'منطقة هونغكياو وتينغبو للمعارض (NECC)', en: 'Hongqiao NECC Exhibition Hub' },
        activityType: { ar: 'المركز الوطني للمعارض والمؤتمرات (CIIE)', en: 'World Mega Exhibition Hub' },
        mainProducts: ['معارض تجارية', 'آلات متطورة', 'سيارات'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'East Xujing Station (Line 2)'
      },
      {
        id: 'jing-an-qipu',
        cityId: 'shanghai',
        name: { ar: 'منطقة جينغآن وشيبو للتجارة (Jing\'an / Qipu)', en: 'Jing\'an Commercial & Qipu Garment Hub' },
        activityType: { ar: 'أسواق الملابس بالجملة ومراكز التسوق الفاخرة', en: 'Apparel Wholesale & Fashion Hub' },
        mainProducts: ['ملابس وأزياء', 'حقائب', 'إكسسوارات'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true,
        nearestMetro: 'Tiantong Road Station (Line 10/12)'
      }
    ],
    wholesaleMarkets: [
      {
        id: 'shanghai-qipu-garment',
        cityId: 'shanghai',
        name: { ar: 'سوق شيبو لو لملابس الجملة في شانغهاي', en: 'Qipu Road Garment Wholesale Market', zh: '七浦路服装批发市场' },
        type: 'Wholesale',
        category: 'Garments & Fashion',
        description: {
          ar: 'أشهر وأضخم مجمع لبيع الملابس بالجملة في وسط شانغهاي.',
          en: 'Shanghai premier apparel wholesale hub with multiple fashion marts.'
        },
        address: { ar: '168 طريق شيبو، منطقة جينغآن، شانغهاي', en: '168 Qipu Rd, Jingan District, Shanghai' },
        nearestMetro: 'Tiantong Road Station (Line 10/12)',
        operatingHours: '06:00 - 16:30',
        moqLevel: 'Low'
      },
      {
        id: 'shanghai-cybermart-electronics',
        cityId: 'shanghai',
        name: { ar: 'سوق سايبرمارت وهواهاي للإلكترونيات', en: 'Shanghai Cybermart Electronics Mall', zh: '赛博数码广场' },
        type: 'Wholesale',
        category: 'Electronics',
        description: {
          ar: 'سوق مخصص لأحدث أجهزة الكمبيوتر والتكنولوجيا والهواتف.',
          en: 'Major digital, computer, and smartphone gear center.'
        },
        address: { ar: '1 طريق هواهاي الوسطى، شانغهاي', en: '1 Huaihai Middle Rd, Shanghai' },
        nearestMetro: 'South Huangpu Road Station (Line 1)',
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'zhangjiang-hi-tech',
        cityId: 'shanghai',
        name: { ar: 'مجمع تشانغجيانغ للتكنولوجيا العالية (Zhangjiang)', en: 'Zhangjiang Hi-Tech Park' },
        clusterSpecialization: { ar: 'الشرائح الإلكترونية والذكاء الاصطناعي والأدوية', en: 'Semiconductors, AI & Bio-Pharma' },
        factoryTypes: ['Semiconductor Labs', 'High-Tech Plants'],
        keyProducts: ['شرائح إلكترونية', 'معدات طبية'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'sh-advanced-machinery',
        productName: { ar: 'الآلات المتطورة ومعدات الشحن والسيارات', en: 'Advanced Machinery, Shipping Logistics & Medical Tech' },
        industryCategory: 'machinery',
        whyThisCity: { ar: 'أضخم ميناء حاويات في العالم والمركز المالي والتكنولوجي الأول للصين.', en: 'World #1 container port and premier international trade metropolis.' },
        mainManufacturingArea: { ar: 'مينهانغ وبودونغ وجيادينغ', en: 'Minhang, Pudong, Jiading' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Shanghai Pudong International Airport (PVG)', 'Shanghai Hongqiao Airport (SHA)'],
      seaPorts: ['Yangshan Deep Water Port (أضخم ميناء حاويات في العالم)', 'Waigaoqiao Port'],
      highSpeedRailwayStations: ['Shanghai Hongqiao Railway Station'],
      seaFreightSuitability: { ar: 'الميناء رقم 1 في العالم للحاويات.', en: 'World #1 container shipping hub.' },
      airFreightSuitability: { ar: 'مطار بودونغ (PVG) هو المركز الأول للشحن الجوي في الصين.', en: 'Pudong PVG is China premier air cargo gateway.' },
      primaryCargoRoutes: { ar: ['خطوط ملاحة يوكومية لجميع موانئ العالم'], en: ['Direct daily ocean vessels globally'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['أبريل', 'مايو', 'سبتمبر', 'أكتوبر', 'نوفمبر'],
      suggestedStayDays: 4,
      weatherSummary: { ar: 'معتدل ربيعاً وخريفاً، حار صيفاً، بارد شتاءً.', en: 'Four distinct seasons.' },
      recommendedStayAreas: [
        { ar: 'منطقة لوجياتزوي (Lujiazui): الفنادق الفخمة ومقرات البنوك.', en: 'Lujiazui Financial Center: Premium business hotels.' },
        { ar: 'منطقة هونغكياو (Hongqiao): بالقرب من معرض NECC والقطار السريع والمطار.', en: 'Hongqiao Airport/NECC Area: Convenient for trade fair visitors.' }
      ],
      localTransportAdvice: { ar: 'أضخم وأكفأ شبكة مترو في العالم (Metroman App).', en: 'World largest metro network.' },
      languageTips: { ar: 'اللغة الإنجليزية مستخدمة بكثرة في الفنادق والشركات.', en: 'English widely spoken in business settings.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi', 'Metroman'],
      recommendedHotels: [
        {
          id: 'grand-hyatt-shanghai',
          name: { ar: 'فندق جراند حياة شانغهاي (برج جينماو)', en: 'Grand Hyatt Shanghai (Jin Mao Tower)' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'لوجياتزوي، بودونغ', en: 'Lujiazui, Pudong' },
          highlights: { ar: 'إطلالة بانورامية ساحرة على البوند وخدمة رجال أعمال فاخرة', en: 'Panoramic skyline views of The Bund & top business amenities' }
        },
        {
          id: 'radisson-collection-heping',
          name: { ar: 'فندق راديسون كوليكشن الهانغ الإمبراطوري', en: 'Radisson Collection Hotel Shanghai' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'شارع نانجينغ والبوند', en: 'Nanjing Road & The Bund' },
          highlights: { ar: 'موقع استراتيجي وسط مراكز التسوق والتجارة', en: 'Prime location on Nanjing Road Pedestrian Mall' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'barbar-arabic-shanghai',
          name: { ar: 'مطعم بربر وسلطان العربي بـ شانغهاي', en: 'Barbar & Sultan Halal Restaurant' },
          cuisineType: { ar: 'مأكولات عربية وشرقية وحلال', en: 'Halal Middle Eastern & Turkish Cuisine' },
          isHalal: true,
          address: { ar: 'طريق فوشو / طريق هواهاي، شانغهاي', en: 'Fuzhou Rd / Huaihai Rd, Shanghai' },
          recommendedFor: { ar: 'مشاوي عربية، كباب، ومأكولات شامية لحفل العشاء', en: 'Authentic Middle Eastern grills & halal dining' }
        },
        {
          id: 'yexiya-halal-shanghai',
          name: { ar: 'مطعم اليعقوبي الإسلامي (Yexiya Halal)', en: 'Yexiya Halal Mutton Restaurant' },
          cuisineType: { ar: 'مأكولات إسلامية حلال عريقة', en: 'Traditional Halal Chinese Dining' },
          isHalal: true,
          address: { ar: 'طريق نانجينغ الغربي، شانغهاي', en: 'West Nanjing Rd, Shanghai' },
          recommendedFor: { ar: 'لحم ضأن طازج ونودلز حلال عريقة', en: 'Famous authentic halal lamb hotpot' }
        }
      ],
      touristAttractions: [
        {
          id: 'the-bund',
          name: { ar: 'منطقة البوند البحرية (The Bund - 外滩)', en: 'The Bund' },
          category: { ar: 'معلم تاريخي ومعماري عالمي', en: 'Historic Waterfront Landmark' },
          description: { ar: 'شريط واجهة شانغهاي البحرية الشهير المطل على نطحات سحاب لوجياتزوي.', en: 'World famous waterfront boulevard with colonial architecture.' },
          nearestMetro: 'East Nanjing Road Station (Line 2/10)'
        },
        {
          id: 'oriental-pearl-tower',
          name: { ar: 'برج لؤلؤة الشرق (Oriental Pearl Tower)', en: 'Oriental Pearl TV Tower' },
          category: { ar: 'معلم حديث', en: 'Modern Icon' },
          description: { ar: 'أشهر برج تلفزيوني ومعماري يرمز لنهضة شانغهاي الحديثة.', en: 'Iconic 468m tall TV tower with glass observation decks.' },
          nearestMetro: 'Lujiazui Station (Line 2)'
        }
      ],
      essentialServices: [
        {
          id: 'shanghai-pudong-forex',
          serviceType: { ar: 'خدمات المصارف والصرافة', en: 'Banking & Forex' },
          title: { ar: 'فرع بنك الصين الرئيسي (Bank of China HQ)', en: 'Bank of China Bund Forex Center' },
          description: { ar: 'تحويل العملات الأجنبية وخدمات الحسابات التجارية الدولية.', en: 'International currency exchange & corporate transaction services.' }
        }
      ]
    },
    tradeFairs: [
      {
        id: 'ciie-shanghai',
        name: { ar: 'معرض الصين الدولي للاستيراد (CIIE)', en: 'China International Import Expo (CIIE)' },
        industry: 'Multi-Industry / Global Import',
        venue: { ar: 'المركز الوطني للمعارض والمؤتمرات (NECC Shanghai)', en: 'National Exhibition and Convention Center' },
        occurrence: { ar: 'نوفمبر سنوياً', en: 'Annually in November' },
        officialWebsite: 'https://www.ciie.org',
        bestFor: ['Global Importers', 'Exporters', 'Corporations']
      },
      {
        id: 'automechanika-shanghai',
        name: { ar: 'معرض أوتوميكانيكا شانغهاي (Automechanika)', en: 'Automechanika Shanghai' },
        industry: 'Auto Parts & Automotive',
        venue: { ar: 'مركز NECC شانغهاي', en: 'NECC Shanghai' },
        occurrence: { ar: 'ديسمبر سنوياً', en: 'Annually in December' },
        officialWebsite: 'https://automechanika-shanghai.hk.messefrankfurt.com',
        bestFor: ['Auto Parts Importers', 'Car Merchants', 'Manufacturers']
      }
    ],
    relatedCitySlugs: ['ningbo', 'suzhou', 'hangzhou', 'kunshan'],
    relatedProductSlugs: ['logistics', 'auto-parts', 'machinery'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل شانغهاي التجاري | الموانئ والمعارض الدولية واللوجستيات', en: 'Shanghai Trade & Sourcing Guide | Ports, CIIE & Logistics' },
      description: { ar: 'دليل الاستيراد والتجارة من شانغهاي: ميناء يانغشان، مطار بودونغ، معرض CIIE، ومقرات التجارة.', en: 'Complete sourcing guide to Shanghai: World largest container port, PVG airport, CIIE fair & logistics.' }
    }
  },

  {
    id: 'shunde',
    slug: 'shunde',
    name: { ar: 'شوند (منطقة شوند فوشان)', en: 'Shunde', zh: '顺德' },
    province: { ar: 'غوانغدونغ', en: 'Guangdong' },
    region: 'Pearl River Delta',
    tier: 'tier-2',
    commercialImportanceScore: 93,
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'عاصمة الأثاث العالمية المقترنة بفوشان ومقر عملاق الأجهزة المنزلية Midea Group. تضم مدينة ليكتشونغ للأثاث (Lecong Furniture Town) الممتدة لأكثر من 5 كيلومترات متواصلة من أسواق ومعارض الأثاث.',
      en: 'World Furniture Capital (Lecong) and home of Midea Group HQ. Features 5+ km of continuous furniture wholesale centers.'
    },
    keyIndustries: ['furniture', 'home-appliances', 'building-materials'],
    primaryProducts: {
      ar: ['الأثاث المنزلي والفندقي', 'الأجهزة المنزلية الكبيرة والصغيرة', 'إكسسوارات الديكور'],
      en: ['Home & Hotel Furniture', 'Major & Small Appliances', 'Interior Decor Accessories']
    },
    bestFor: ['Importer', 'Furniture Business', 'Project Manager'],
    districts: [
      {
        id: 'lecong-town',
        cityId: 'shunde',
        name: { ar: 'بلدة ليكتشونغ للأثاث (Lecong)', en: 'Lecong Furniture Town' },
        activityType: { ar: 'أسواق ومعارض الأثاث والديكور الدولية', en: 'World Furniture Wholesale City' },
        mainProducts: ['أثاث منازل', 'أثاث مكتبي', 'أثاث فنادق'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'louvre-furniture-lecong',
        cityId: 'shunde',
        name: { ar: 'مجمع اللوفر للأثاث بـ ليكونغ (Louvre)', en: 'Louvre Furniture Exhibition Center', zh: '罗浮宫国际家具博览中心' },
        type: 'Wholesale',
        category: 'Furniture',
        description: {
          ar: 'أفخم وأكبر معرض ومجمع تجاري للأثاث والتصميم الداخلي في العالم.',
          en: 'World-renowned luxury furniture and interior design trade center.'
        },
        address: { ar: 'طريق 325 الوطني، ليكونغ، شوندي، فوشان', en: '325 National Highway, Lecong, Shunde' },
        moqLevel: 'Flexible'
      }
    ],
    industrialZones: [
      {
        id: 'beijiao-midea-zone',
        cityId: 'shunde',
        name: { ar: 'منطقة بيجياو الصناعية للأجهزة (Midea Industrial Park)', en: 'Beijiao Midea Appliances Industrial Zone' },
        clusterSpecialization: { ar: 'تصنيع التكييفات والأجهزة المنزلية الذكية', en: 'HVAC & Smart Home Appliances Manufacturing' },
        factoryTypes: ['Mega OEM Factories'],
        keyProducts: ['مكيفات', 'غسالات', 'مجموعات المطبخ'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'shunde-furniture-sourcing',
        productName: { ar: 'أثاث الفنادق والمنازل والأجهزة المنزلية', en: 'Home & Hotel Furniture & Appliances' },
        industryCategory: 'Furniture',
        whyThisCity: { ar: 'أكبر سوق مجمع ومصنع للأثاث والأجهزة في العالم مع خيارات شحن كاملة.', en: 'World premier furniture sourcing and home appliance hub.' },
        mainManufacturingArea: { ar: 'ليكتشونغ وبيجياو ودرونغ', en: 'Lecong, Beijiao, Ronggui' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Guangzhou Baiyun Airport (CAN)'],
      seaPorts: ['Rongqi Port (Shunde)', 'Nansha Port'],
      highSpeedRailwayStations: ['Shunde Railway Station'],
      seaFreightSuitability: { ar: 'مباشرة عبر ميناء رونغتشي وميناء نانشا.', en: 'Direct via Rongqi port to Nansha.' },
      airFreightSuitability: { ar: 'عبر مطار جوانزو باييون.', en: 'Via Guangzhou CAN airport.' },
      primaryCargoRoutes: { ar: ['شحن الأثاث الكامل FCL'], en: ['FCL Furniture container lines'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['مارس', 'أبريل', 'أكتوبر', 'نوفمبر'],
      suggestedStayDays: 3,
      weatherSummary: { ar: 'دافئ ورطب صيفاً، معتدل شتاءً.', en: 'Warm & humid.' },
      recommendedStayAreas: [{ ar: 'منطقة ليتشونغ (Lecong Furniture Zone).', en: 'Lecong Furniture Zone.' }],
      localTransportAdvice: { ar: 'التاكسي والسيارات الخاصة بين المعارض.', en: 'Taxis between furniture malls.' },
      languageTips: { ar: 'المندرين والكانتونية.', en: 'Mandarin & Cantonese.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'sofitel-shunde-louvre',
          name: { ar: 'فندق سوفيتيل فوشان شوند (Sofitel Shunde)', en: 'Sofitel Foshan Shunde' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'ليكتشونغ، شوند', en: 'Lecong, Shunde' },
          highlights: { ar: 'داخل مجمع اللوفر للأثاث مباشرة', en: 'Located directly inside Louvre Furniture Mall' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'shunde-food-specialty',
          name: { ar: 'مطاعم المأكولات الشوندية العالمية (UNESCO Culinary)', en: 'Shunde Heritage Cantonese Dining' },
          cuisineType: { ar: 'مأكولات كانتونية عريقة (عاصمة الطهي في الصين)', en: 'World UNESCO Culinary Capital Dishes' },
          isHalal: false,
          address: { ar: 'داليانغ، شوند', en: 'Daliang, Shunde' },
          recommendedFor: { ar: 'تجربة أشهر وأعرق مأكولات جنوب الصين', en: 'Experiencing China UNESCO City of Gastronomy' }
        }
      ],
      touristAttractions: [
        {
          id: 'qinghui-garden',
          name: { ar: 'حديقة تشينغهوي الملكية (Qinghui Garden - 清晖园)', en: 'Qinghui Garden' },
          category: { ar: 'تراث تاريخي', en: 'Historic Garden' },
          description: { ar: 'إحدى أعرق الحدائق الكلاسيكية الأربع الكبرى في غوانغدونغ.', en: 'One of Guangdong top 4 classical Lingnan gardens.' }
        }
      ]
    },
    tradeFairs: [],
    relatedCitySlugs: ['foshan', 'guangzhou', 'zhongshan'],
    relatedProductSlugs: ['furniture', 'home-appliances'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل شوند التجاري | عاصمة الأثاث والأجهزة المنزلية', en: 'Shunde Sourcing Guide | Lecong Furniture & Appliances' },
      description: { ar: 'دليل الاستيراد من شوند فوشان: أسواق ليكتشونغ للأثاث، مصانع الأجهزة، والتصدير.', en: 'Shunde guide: Lecong furniture city, Midea appliances, and export logistics.' }
    }
  },

  {
    id: 'zhongshan',
    slug: 'zhongshan',
    name: { ar: 'جوتشن (تشونغشان - عاصمة الإضاءة)', en: 'Zhongshan', zh: '中山' },
    province: { ar: 'غوانغدونغ', en: 'Guangdong' },
    region: 'Pearl River Delta',
    tier: 'tier-2',
    commercialImportanceScore: 92,
    heroImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'العاصمة العالمية الأولى لصناعة الإضاءة والنجف (مدينة جوتشن Guzhen Lighting Capital). تنتج أكثر من 70% من وحدات الإضاءة والـ LED والنجف الفاخر والمستلزمات الكهربائية في الصين.',
      en: 'Lighting Capital of China (Guzhen Town). Produces over 70% of China lighting fixtures, LED panels, chandeliers, and electrical fittings.'
    },
    keyIndustries: ['lighting', 'electronics', 'hardware-tools'],
    primaryProducts: {
      ar: ['النجف الكريستالي والحديث', 'إضاءات LED والمشاريع', 'كشافات الشوارع والطاقة الشمسية', 'المفاتيح الكهربائية'],
      en: ['Crystal & Modern Chandeliers', 'LED Commercial Lighting', 'Solar Street Lights', 'Switches & Outlets']
    },
    bestFor: ['Importer', 'Lighting Merchant', 'Contractor', 'Architect'],
    districts: [
      {
        id: 'guzhen-town',
        cityId: 'zhongshan',
        name: { ar: 'بلدة جوتشن الإضاءة (Guzhen Lighting Capital)', en: 'Guzhen Lighting Town' },
        activityType: { ar: 'عاصمة أسواق ومصانع الإضاءة والنجف', en: 'World Lighting Sourcing Hub' },
        mainProducts: ['نجف', 'إضاءات LED', 'كشافات طاقة شمسية'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'guzhen-lighting-plaza',
        cityId: 'zhongshan',
        name: { ar: 'مدينة ستارلايت للإضاءة في جوتشن', en: 'Guzhen Starlight Lighting Plaza', zh: '古镇星光联盟灯饰广场' },
        type: 'Wholesale',
        category: 'Lighting',
        description: {
          ar: 'أضخم مجمع تجاري معروض لوحدات الإضاءة والنجف الـ LED في العالم.',
          en: 'World-leading lighting fixture and LED commercial plaza.'
        },
        address: { ar: 'طريق جوتشن الرئيسي، تشونغشان، غوانغدونغ', en: 'Guzhen Main Road, Zhongshan' },
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'guzhen-led-park',
        cityId: 'zhongshan',
        name: { ar: 'المنطقة الصناعية لتقنيات LED في جوتشن', en: 'Guzhen LED High-Tech Industrial Zone' },
        clusterSpecialization: { ar: 'تصنيع الشرائح الضوئية ومحولات الطاقة للإضاءة', en: 'LED Driver & Luminaire Manufacturing' },
        factoryTypes: ['OEM Assembly Lines'],
        keyProducts: ['كشافات LED', 'إنارة شوارع'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'zs-lighting-fixtures',
        productName: { ar: 'النجف والـ LED وإضاءات المشاريع', en: 'Chandeliers, LED Lights & Commercial Lighting' },
        industryCategory: 'lighting',
        whyThisCity: { ar: 'المركز رقم 1 في العالم لتصنيع وتصميم النجف والإضاءات كافة.', en: 'World undisputed capital for lighting products and fixtures.' },
        mainManufacturingArea: { ar: 'بلدة جوتشن وشياولان', en: 'Guzhen & Xiaolan Town' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Guangzhou Baiyun Airport (CAN)', 'Shenzhen Baoan Airport (SZX)'],
      seaPorts: ['Zhongshan Port', 'Nansha Port'],
      highSpeedRailwayStations: ['Guzhen Railway Station'],
      seaFreightSuitability: { ar: 'ممتازة عبر ميناء تشونغشان وميناء نانشا.', en: 'Excellent ocean logistics.' },
      airFreightSuitability: { ar: 'عبر مطار جوانزو أو شينزن.', en: 'Via Guangzhou or Shenzhen CAN/SZX.' },
      primaryCargoRoutes: { ar: ['شحن بضائع الإضاءة والكهرباء للشرق الأوسط'], en: ['Direct shipping for lighting & electricals'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['مارس', 'أكتوبر'],
      suggestedStayDays: 3,
      weatherSummary: { ar: 'استوائي دافئ.', en: 'Subtropical warm climate.' },
      recommendedStayAreas: [{ ar: 'بلدة جوتشن (Guzhen Town): مركز أسواق الإضاءة.', en: 'Guzhen Town: Center of lighting plazas.' }],
      localTransportAdvice: { ar: 'القطار السريع ينزل مباشرة في محطة جوتشن (Guzhen Station).', en: 'High speed train stops directly at Guzhen Station.' },
      languageTips: { ar: 'المندرين والكانتونية.', en: 'Mandarin & Cantonese.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'hilton-guzhen',
          name: { ar: 'فندق هيلتون تشونغشان جوتشن (Hilton Guzhen)', en: 'Hilton Zhongshan Guzhen' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'وسط بلدة جوتشن للأضواء', en: 'Guzhen Town Center' },
          highlights: { ar: 'يقع أعلى أبراج المعارض والمراكز التجارية للإضاءة', en: 'Direct access to major lighting plazas' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'guzhen-halal-noodles',
          name: { ar: 'مطعم نودلز اللانجو الحلال بـ جوتشن', en: 'Guzhen Lanzhou Halal Beef Noodles' },
          cuisineType: { ar: 'مأكولات حلال', en: 'Halal Beef Noodles' },
          isHalal: true,
          address: { ar: 'طريق جوتشن الرئيسي، تشونغشان', en: 'Guzhen Main Rd, Zhongshan' },
          recommendedFor: { ar: 'وجبات حلال طازجة ومريحة', en: 'Quick halal meal during lighting shopping' }
        }
      ]
    },
    tradeFairs: [
      {
        id: 'gilf-guzhen-fair',
        name: { ar: 'معرض جوتشن الدولي للإضاءة (GILF)', en: 'Guzhen International Lighting Fair (GILF)' },
        industry: 'Lighting & Electronics',
        venue: { ar: 'مركز جوتشن للمعارض والمؤتمرات', en: 'Guzhen Convention & Exhibition Center' },
        occurrence: { ar: 'مارس وأكتوبر سنوياً', en: 'Biannual in March & October' },
        officialWebsite: 'https://en.denggle.com',
        bestFor: ['Lighting Buyers', 'Contractors', 'Architects']
      }
    ],
    relatedCitySlugs: ['foshan', 'guangzhou', 'jiangmen'],
    relatedProductSlugs: ['lighting', 'electronics', 'hardware-tools'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل تشونغشان وجوتشن للإضاءة | أسواق ومصانع النجف والـ LED', en: 'Zhongshan & Guzhen Sourcing Guide | Lighting Capital & LEDs' },
      description: { ar: 'دليل الاستيراد من جوتشن وتشونغشان: أسواق الإضاءة بالجملة، النجف، إضاءات LED والمصانع.', en: 'Zhongshan Guzhen guide: World lighting capital, LED fixtures, chandeliers & factories.' }
    }
  },

  {
    id: 'xiamen',
    slug: 'xiamen',
    name: { ar: 'شيامن (شياتشين)', en: 'Xiamen', zh: '厦门' },
    province: { ar: 'فوجيان', en: 'Fujian' },
    region: 'East Coast (Fujian)',
    tier: 'tier-2',
    commercialImportanceScore: 91,
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'أهم ميناء تجاري ومدينة ساحلية في مقاطعة فوجيان. تشتهر بتجارة وتصنيع الحجر والرخام الطبيعي (معرض شيامن للرخام)، الأحذية، الحقائب، والحرف اليدوية والشحن البحري الممتاز.',
      en: 'Major coastal port city in Fujian. World capital for natural stone & marble trade (Xiamen Stone Fair), footwear export, and shipping.'
    },
    keyIndustries: ['building-materials', 'logistics-shipping', 'apparel'],
    primaryProducts: {
      ar: ['الرخام والجرانيت الطبيعي', 'الأحذية الرياضية والتجهيزات', 'الحقائب والأدوات التصديرية'],
      en: ['Natural Stone & Granite', 'Sports Footwear', 'Bags & Export Merchandise']
    },
    bestFor: ['Importer', 'Stone & Marble Merchant', 'Contractor'],
    districts: [
      {
        id: 'huli-district-xiamen',
        cityId: 'xiamen',
        name: { ar: 'منطقة هولي وميناء شيامن (Huli Port District)', en: 'Huli Port & Trade Hub' },
        activityType: { ar: 'شركات تصدير الحجر والرخام ومكاتب الشحن', en: 'Stone Trading & Port Freight HQ' },
        mainProducts: ['رخام', 'جرانيت', 'حقائب'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'xiamen-stone-center',
        cityId: 'xiamen',
        name: { ar: 'مركز شيامن الدولي لتجارة الرخام والحجر', en: 'Xiamen International Stone & Marble Center', zh: '厦门石材交易中心' },
        type: 'Wholesale',
        category: 'Building Materials',
        description: {
          ar: 'أضخم مركز شحن وتصدير للرخام الطبيعي والجرانيت وألواح البناء.',
          en: 'Global trade hub for natural marble slabs, granite, and stone export.'
        },
        address: { ar: 'منطقة هولي، شيامن، فوجيان', en: 'Huli District, Xiamen' },
        moqLevel: 'High'
      }
    ],
    industrialZones: [
      {
        id: 'shuitou-stone-zone',
        cityId: 'xiamen',
        name: { ar: 'تجمع شويتو الصناعي للرخام والحجر', en: 'Shuitou Stone Industrial Zone (Nan\'an/Xiamen Border)' },
        clusterSpecialization: { ar: 'قص وتجهيز وتلميع الرخام والجرانيت الطبيعي', en: 'Natural Marble & Granite Processing Cluster' },
        factoryTypes: ['Stone Processing Plants'],
        keyProducts: ['ألواح رخام', 'جرانيت', 'أحجار واجهات'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'xm-marble-stone',
        productName: { ar: 'الرخام والجرانيت والحجر الطبيعي', en: 'Natural Marble, Granite & Stone Slabs' },
        industryCategory: 'building-materials',
        whyThisCity: { ar: 'أضخم مركز لتصدير ومعارض الحجر والرخام الطبيعي في العالم.', en: 'World #1 export and trade hub for natural stone & granite.' },
        mainManufacturingArea: { ar: 'منطقة شويتو وهولي', en: 'Shuitou & Huli' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Xiamen Gaoqi International Airport (XMN)'],
      seaPorts: ['Xiamen Port (ميناء شيامن الدولي)'],
      highSpeedRailwayStations: ['Xiamen North Railway Station'],
      seaFreightSuitability: { ar: 'أحد أفضل الموانئ العالمية لنقل الحاويات الثقيلة والحجر.', en: 'Major container ocean port.' },
      airFreightSuitability: { ar: 'مطار شحن دولي ممتاز.', en: 'Good international air cargo.' },
      primaryCargoRoutes: { ar: ['خطوط ملاحة مباشرة للشرق الأوسط وموانئ الخليج'], en: ['Direct Gulf shipping express'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['مارس (معرض الحجر)', 'أبريل', 'أكتوبر', 'نوفمبر'],
      suggestedStayDays: 3,
      weatherSummary: { ar: 'ساحلي لطيف معظم فصول السنة.', en: 'Pleasant coastal climate.' },
      recommendedStayAreas: [{ ar: 'منطقة سيمينغ (Siming District).', en: 'Siming Coastal Area.' }],
      localTransportAdvice: { ar: 'شبكة مترو وحافلات سريعة.', en: 'Metro & clean taxis.' },
      languageTips: { ar: 'المندرين واللغة المحلية (Min).', en: 'Mandarin & Hokkien.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'waldorf-astoria-xm',
          name: { ar: 'فندق والدورف أستوريا شيامن (Waldorf Astoria)', en: 'Waldorf Astoria Xiamen' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'سيمينغ الساحلية (Siming)', en: 'Siming District' },
          highlights: { ar: 'أفخم فندق أعمال وراحة في شيامن', en: 'World-class luxury hotel with coastal views' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'xiamen-mosque-halal',
          name: { ar: 'مطعم مسجد شيامن الحلال', en: 'Xiamen Mosque Halal Restaurant' },
          cuisineType: { ar: 'مأكولات إسلامية حلال', en: 'Halal Chinese Cuisine' },
          isHalal: true,
          address: { ar: 'شارع شيا هي، سيمينغ، شيامن', en: 'Xiahe Rd, Siming, Xiamen' },
          recommendedFor: { ar: 'أطعمة حلال موثوقة بجوار المسجد الرئيسي', en: 'Authentic halal food next to Xiamen Mosque' }
        }
      ],
      touristAttractions: [
        {
          id: 'gulangyu-island',
          name: { ar: 'جزيرة جولانغيو التراثية (Gulangyu Island - 鼓浪屿)', en: 'Gulangyu Island' },
          category: { ar: 'معلم عالمي (UNESCO)', en: 'UNESCO World Heritage Island' },
          description: { ar: 'جزيرة خالية من السيارات تضم قصوراً أثرية ومتحف البيانو الشهير.', en: 'Vehicular-free island known for historic colonial mansions.' }
        }
      ]
    },
    tradeFairs: [
      {
        id: 'xiamen-stone-fair',
        name: { ar: 'معرض شيامن الدولي للحجر والرخام', en: 'Xiamen International Stone Fair' },
        industry: 'Building Materials & Marble',
        venue: { ar: 'مركز شيامن الدولي للمعارض والمؤتمرات', en: 'Xiamen International Conference & Exhibition Center' },
        occurrence: { ar: 'مارس سنوياً', en: 'Annually in March' },
        officialWebsite: 'https://www.stonefair.org.cn',
        bestFor: ['Marble Importers', 'Architects', 'Building Contractors']
      }
    ],
    relatedCitySlugs: ['quanzhou', 'fuzhou', 'ningbo'],
    relatedProductSlugs: ['building-materials', 'logistics'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل شيامن التجاري | الرخام والحجر وميناء شيامن الدولي', en: 'Xiamen Sourcing Guide | Stone Fair & Maritime Export' },
      description: { ar: 'دليل الاستيراد من مدينة شيامن: مصانع ومعارض الرخام، الأحذية، وميناء شيامن البحري.', en: 'Xiamen sourcing guide: Stone fair, marble export, footwear & seaport.' }
    }
  },

  {
    id: 'quanzhou',
    slug: 'quanzhou',
    name: { ar: 'كوانتشو (جينجيانغ - عاصمة الأحذية والملابس)', en: 'Quanzhou (Jinjiang)', zh: '泉州' },
    province: { ar: 'فوجيان', en: 'Fujian' },
    region: 'East Coast (Fujian)',
    tier: 'tier-2',
    commercialImportanceScore: 93,
    heroImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'العاصمة العالمية الأولى لصناعة الأحذية الرياضية والملابس (مدينة جينجيانغ Jinjiang). المقر الرئيسي لعمالقة الرياضة (Anta, Xtep, 361) وتضم آلاف مصانع الأحذية والحقائب والجاكيتات.',
      en: 'World Footwear Capital (Jinjiang). HQ of global sportswear giants (Anta, 361, Xtep) and thousands of shoe & garment factories.'
    },
    keyIndustries: ['apparel', 'textiles', 'plastics-rubber'],
    primaryProducts: {
      ar: ['الأحذية الرياضية والجلدية', 'الملابس الرياضية وجاكيتات الشتاء', 'مستلزمات ومواد الأحذية', 'الأغذية والمأكولات الجافة'],
      en: ['Athletic & Casual Shoes', 'Sportswear & Winter Jackets', 'Shoe Sole & Materials', 'Processed Food']
    },
    bestFor: ['Importer', 'Footwear Merchant', 'Fashion Business', 'Wholesaler'],
    districts: [
      {
        id: 'jinjiang-town',
        cityId: 'quanzhou',
        name: { ar: 'مدينة جينجيانغ الأحذية (Jinjiang City)', en: 'Jinjiang Footwear Hub' },
        activityType: { ar: 'عاصمة أسواق ومصانع الأحذية الرياضية', en: 'World Sports Footwear Capital' },
        mainProducts: ['أحذية رياضية', 'ملابس رياضية', 'نعال أحذية'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'jinjiang-shoe-material-city',
        cityId: 'quanzhou',
        name: { ar: 'مدينة الأحذية والمنسوجات الدولية في جينجيانغ', en: 'Jinjiang International Shoe & Footwear City', zh: '晋江国际鞋纺城' },
        type: 'Wholesale',
        category: 'Footwear & Apparel',
        description: {
          ar: 'أكبر سوق مجمع لمصانع الأحذية الرياضية ومكوناتها ونعال الأحذية والأنسجة في العالم.',
          en: 'World largest wholesale plaza for sports shoes, soles, and materials.'
        },
        address: { ar: 'بلدة تشيندوي، جينجيانغ، كوانتشو', en: 'Chendai Town, Jinjiang' },
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'jinjiang-sportswear-park',
        cityId: 'quanzhou',
        name: { ar: 'المنطقة الصناعية للملابس والأحذية الرياضية بـ جينجيانغ', en: 'Jinjiang Sportswear Industrial Park' },
        clusterSpecialization: { ar: 'تصنيع وحقن الأحذية الرياضية والجاكيتات المقاومة للماء', en: 'Sportswear & Athletic Shoe Manufacturing' },
        factoryTypes: ['Mega OEM Factories (Anta/Xtep suppliers)'],
        keyProducts: ['أحذية رياضية', 'جاكيتات شتوية'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'qz-sports-shoes',
        productName: { ar: 'الأحذية الرياضية ومستلزمات تصنيع الأحذية', en: 'Athletic Shoes, Soles & Footwear Materials' },
        industryCategory: 'apparel',
        whyThisCity: { ar: 'تنتج أكثر من 20% من الأحذية الرياضية في العالم بأسعار وجودة لا تضاهى.', en: 'Produces over 20% of global sports shoes with complete supply chain.' },
        mainManufacturingArea: { ar: 'جينجيانغ وتتشيندوي', en: 'Jinjiang & Chendai' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Quanzhou Jinjiang International Airport (JJN)', 'Xiamen Airport (XMN)'],
      seaPorts: ['Quanzhou Port', 'Xiamen Port'],
      highSpeedRailwayStations: ['Quanzhou Railway Station', 'Jinjiang Station'],
      seaFreightSuitability: { ar: 'عبر ميناء كوانتشو وميناء شيامن المجاور.', en: 'Direct via Quanzhou & nearby Xiamen ports.' },
      airFreightSuitability: { ar: 'جيدة عبر مطار جينجيانغ وشيامن.', en: 'Good via Jinjiang airport.' },
      primaryCargoRoutes: { ar: ['شحن حاويات الأحذية والملابس للشرق الأوسط'], en: ['Direct shipping routes for footwear'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['أبريل (معرض الأحذية)', 'أكتوبر', 'نوفمبر'],
      suggestedStayDays: 3,
      weatherSummary: { ar: 'ساحلي معتدل.', en: 'Mild coastal weather.' },
      recommendedStayAreas: [{ ar: 'مدينة جينجيانغ (Jinjiang Center): قريبة من المصانع.', en: 'Jinjiang City Center.' }],
      localTransportAdvice: { ar: 'تطبيقات التاكسي والسيارات الخاصة.', en: 'Didi taxis between factory zones.' },
      languageTips: { ar: 'المندرين.', en: 'Mandarin.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'marco-polo-jinjiang',
          name: { ar: 'فندق ماركو بولو جينجيانغ (Marco Polo)', en: 'Marco Polo Jinjiang' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'وسط جينجيانغ (قرب مصانع الأحذية)', en: 'Jinjiang Downtown' },
          highlights: { ar: 'الفندق الأول لرجال الأعمال ومستوردي الأحذية والرياضة', en: 'Premier business hotel near shoe material market' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'jinjiang-halal-rest',
          name: { ar: 'مطعم جينجيانغ الحلال للمأكولات', en: 'Jinjiang Xinjiang Halal Restaurant' },
          cuisineType: { ar: 'مأكولات حلال', en: 'Halal Xinjiang BBQ' },
          isHalal: true,
          address: { ar: 'وسط جينجيانغ، كوانتشو', en: 'Jinjiang City Center' },
          recommendedFor: { ar: 'مشاوي حلال طازجة', en: 'Certified halal barbecue' }
        }
      ]
    },
    tradeFairs: [
      {
        id: 'jinjiang-shoe-expo',
        name: { ar: 'معرض جينجيانغ الدولي للأحذية والصناعات الرياضية', en: 'Jinjiang Footwear & Sports Industry Expo' },
        industry: 'Footwear & Sportswear',
        venue: { ar: 'مركز جينجيانغ الدولي للمعارض', en: 'Jinjiang International Conference & Exhibition Center' },
        occurrence: { ar: 'أبريل سنوياً', en: 'Annually in April' },
        officialWebsite: 'http://www.cn-fpe.com',
        bestFor: ['Footwear Importers', 'Sports Brands', 'Shoe Material Merchants']
      }
    ],
    relatedCitySlugs: ['xiamen', 'fuzhou', 'putian'],
    relatedProductSlugs: ['apparel', 'textiles'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل كوانتشو وجينجيانغ | عاصمة الأحذية والملابس الرياضية', en: 'Quanzhou Jinjiang Sourcing Guide | Footwear & Sportswear Capital' },
      description: { ar: 'دليل الاستيراد من كوانتشو وجينجيانغ: مصانع الأحذية الرياضية، الملابس الجاهزة، والموردين.', en: 'Quanzhou Jinjiang guide: World shoe capital, sportswear, factories & logistics.' }
    }
  },

  {
    id: 'wenzhou',
    slug: 'wenzhou',
    name: { ar: 'وينتشو (عاصمة الكهربائيات والأحذية)', en: 'Wenzhou', zh: '温州' },
    province: { ar: 'تشيجيانغ', en: 'Zhejiang' },
    region: 'Yangtze River Delta',
    tier: 'tier-2',
    commercialImportanceScore: 92,
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'عاصمة المفاتيح الكهربائية المنخفضة الجهد والأحذية الجلدية وصناعة الصمامات (Valves). المقر الرئيسي لعملاق الكهربائيات CHINT Group وتضم آلاف تجار العالم العصاميين.',
      en: 'China Low-Voltage Electrical & Leather Shoe Capital. HQ of CHINT Group and global industrial valve manufacturing cluster.'
    },
    keyIndustries: ['hardware-tools', 'electronics', 'apparel', 'machinery'],
    primaryProducts: {
      ar: ['المفاتيح والقواطع الكهربائية (CHINT)', 'الأحذية الجلدية والرسمية', 'الصمامات والمحابس الصناعية', 'معدات التغليف والطباعة'],
      en: ['Low-Voltage Electricals & Breakers', 'Leather Dress Shoes', 'Industrial Valves & Pumps', 'Packaging & Printing Machinery']
    },
    bestFor: ['Importer', 'Electrical Contractor', 'Footwear Importer', 'Industrial Merchant'],
    districts: [
      {
        id: 'yueqing-liushi',
        cityId: 'wenzhou',
        name: { ar: 'بلدة ليوشي الكهربائية (Liushi Town)', en: 'Liushi Low-Voltage Electrical Hub' },
        activityType: { ar: 'عاصمة المفاتيح والقواطع والمحولات الكهربائية', en: 'China Electrical Equipment HQ' },
        mainProducts: ['قواطع كهربائية', 'مفاتيح منزلية', 'محولات'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'wenzhou-liushi-electrical',
        cityId: 'wenzhou',
        name: { ar: 'مدينة المفاتيح والكهربائيات في ليوشي', en: 'Liushi Low-Voltage Electrical Market', zh: '柳市中国电气城' },
        type: 'Wholesale',
        category: 'Electronics & Hardware',
        description: {
          ar: 'عاصمة القواطع والمفاتيح الكهربائية المنخفضة الجهد والمحولات.',
          en: 'China capital for circuit breakers, switches, and industrial electricals.'
        },
        address: { ar: 'بلدة ليوشي، يويشينغ، وينتشو', en: 'Liushi Town, Yueqing, Wenzhou' },
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'chint-industrial-park',
        cityId: 'wenzhou',
        name: { ar: 'مجمع تشانت الصناعي للكهربائيات (CHINT HQ)', en: 'CHINT Electric Industrial Park' },
        clusterSpecialization: { ar: 'تصنيع لوحات التوزيع والقواطع الذكية', en: 'Smart Electrical & Breaker Manufacturing' },
        factoryTypes: ['Mega Automated Plants'],
        keyProducts: ['قواطع CHINT', 'إنفرترات'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'wz-low-voltage-electrical',
        productName: { ar: 'المفاتيح الكهربائية والقواطع والصمامات', en: 'Low-Voltage Breakers, Switches & Industrial Valves' },
        industryCategory: 'electronics',
        whyThisCity: { ar: 'أكبر مركز تصنيع وتصدير للمنتجات الكهربائية المنخفضة الجهد بالصين.', en: 'World premier exporter of low-voltage breakers and electrical fittings.' },
        mainManufacturingArea: { ar: 'ليوشي ويويشينغ ورويان', en: 'Liushi, Yueqing, Ruian' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Wenzhou Longwan International Airport (WNZ)'],
      seaPorts: ['Wenzhou Port'],
      highSpeedRailwayStations: ['Wenzhou South Railway Station'],
      seaFreightSuitability: { ar: 'ميناء رائع للشحن البحري المباشر.', en: 'Direct ocean container shipping.' },
      airFreightSuitability: { ar: 'مطار شحن جوي ممتاز.', en: 'Good regional air cargo.' },
      primaryCargoRoutes: { ar: ['شحن المعدات والكهربائيات للشرق الأوسط'], en: ['Direct shipping for electrical & machinery'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['أبريل', 'مايو', 'أكتوبر', 'نوفمبر'],
      suggestedStayDays: 3,
      weatherSummary: { ar: 'معتدل لطيف.', en: 'Pleasant subtropical climate.' },
      recommendedStayAreas: [{ ar: 'منطقة لوتشينغ (Lucheng District) وبلدة ليوشي (Liushi - عاصمة الكهرباء).', en: 'Lucheng District / Liushi Electrical Town.' }],
      localTransportAdvice: { ar: 'المترو والتاكسي.', en: 'Metro & Didi taxis.' },
      languageTips: { ar: 'المندرين ولهجة وينتشو.', en: 'Mandarin.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'shangri-la-wenzhou',
          name: { ar: 'فندق شنجريلا وينتشو (Shangri-La Wenzhou)', en: 'Shangri-La Hotel Wenzhou' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'لوتشينغ، وسط وينتشو', en: 'Lucheng District' },
          highlights: { ar: 'فندق الأعمال الأول بالمدينة ومناسب لمستوردي الكهربائيات', en: 'Top executive hotel with full business support' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'wenzhou-lanzhou-halal',
          name: { ar: 'مطعم وينتشو لانجو الحلال', en: 'Wenzhou Lanzhou Halal Beef Noodles' },
          cuisineType: { ar: 'مأكولات حلال', en: 'Halal Beef Noodles & BBQ' },
          isHalal: true,
          address: { ar: 'شارع ووما، لوتشينغ، وينتشو', en: 'Wuma St, Lucheng, Wenzhou' },
          recommendedFor: { ar: 'وجبات حلال طازجة وسريعة', en: 'Quick halal lunch in central Wenzhou' }
        }
      ]
    },
    tradeFairs: [],
    relatedCitySlugs: ['yiwu', 'ningbo', 'taizhou'],
    relatedProductSlugs: ['hardware-tools', 'electronics', 'machinery'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل وينتشو التجاري | المفاتيح الكهربائية والأحذية والصمامات', en: 'Wenzhou Sourcing Guide | Low-Voltage Electricals & Shoe Capital' },
      description: { ar: 'دليل الاستيراد من وينتشو: مصانع CHINT للكهرباء، الأحذية الجلدية، الصمامات الصناعية والموانئ.', en: 'Wenzhou guide: CHINT low-voltage electricals, leather shoes, industrial valves & export.' }
    }
  },

  {
    id: 'qingdao',
    slug: 'qingdao',
    name: { ar: 'تشينغداو (الميناء الشمالي والأجهزة)', en: 'Qingdao', zh: '青岛' },
    province: { ar: 'شاندونغ', en: 'Shandong' },
    region: 'North China / Shandong',
    tier: 'tier-2',
    commercialImportanceScore: 93,
    heroImage: 'https://images.unsplash.com/photo-1548625361-185d2eb7b17d?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'أضخم ميناء شحن تجاري في شمال الصين والمقر الرئيسي لعمالقة الأجهزة المنزلية والكهربائية (Haier Group, Hisense Group). تمتاز بصناعة المعدات البحرية، إطارات السيارات، والآلات.',
      en: 'Major Northern China seaport and HQ of electronics and appliance behemoths (Haier & Hisense). Hub for tire manufacturing, marine equipment, and heavy machinery.'
    },
    keyIndustries: ['home-appliances', 'logistics-shipping', 'machinery', 'auto-parts'],
    primaryProducts: {
      ar: ['الثلاجات والتكييفات والغسالات (Haier/Hisense)', 'إطارات السيارات والشاحنات', 'الآلات الزراعية والصناعية', 'المنتجات البحرية'],
      en: ['Home Appliances (Haier/Hisense)', 'Automotive & Truck Tires', 'Agricultural & Industrial Machinery', 'Seafood & Marine Goods']
    },
    bestFor: ['Importer', 'Appliance Buyer', 'Tire & Auto Merchant', 'Logistics Business'],
    districts: [
      {
        id: 'jimo-district',
        cityId: 'qingdao',
        name: { ar: 'منطقة جيمو لملابس وأسواق الجملة (Jimo)', en: 'Jimo Garment & Appliance Hub' },
        activityType: { ar: 'أسواق الجملة للملابس والأجهزة والتجارة', en: 'Apparel & Appliance Wholesale City' },
        mainProducts: ['أجهزة منزلية', 'ملابس نسائية ورجالية', 'إطارات'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'qingdao-jimo-garment',
        cityId: 'qingdao',
        name: { ar: 'سوق جيمو الدولي لملابس الجملة في تشينغداو', en: 'Jimo Garment Wholesale City', zh: '即墨服装市场' },
        type: 'Wholesale',
        category: 'Apparel & Textiles',
        description: {
          ar: 'أشهر وأضخم سوق جملة للملابس الجاهزة والمنسوجات في مقاطعة شاندونغ.',
          en: 'Northern China largest apparel wholesale market with thousands of vendors.'
        },
        address: { ar: 'طريق جيمو الرئيسي، تشينغداو، شاندونغ', en: 'Jimo Main Rd, Qingdao' },
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'haier-smart-home-park',
        cityId: 'qingdao',
        name: { ar: 'مجمع هايير الذكي للأجهزة المنزلية (Haier Industrial Park)', en: 'Haier Smart Home Industrial Park' },
        clusterSpecialization: { ar: 'تصنيع الثلاجات ومكيفات الهواء والغسالات الذكية', en: 'Home Appliance & HVAC Manufacturing' },
        factoryTypes: ['Automated Lighthouse Plants'],
        keyProducts: ['ثلاجات هايير', 'مكيفات', 'غسالات'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'qd-home-appliances-tires',
        productName: { ar: 'الأجهزة المنزلية وإطارات السيارات والآلات', en: 'Haier Appliances, Truck Tires & Marine Machinery' },
        industryCategory: 'home-appliances',
        whyThisCity: { ar: 'المقر الرئيسي لأضخم مصانع الأجهزة المنزلية بالعالم متصل بأكبر ميناء في شمال الصين.', en: 'Global HQ of Haier & Hisense with premier ocean shipping port.' },
        mainManufacturingArea: { ar: 'شينان وجيمو وجياوزو', en: 'Shinan, Jimo, Jiaozhou' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Qingdao Jiaodong International Airport (TAO)'],
      seaPorts: ['Qingdao Port (أبرز ميناء في شمال الصين)'],
      highSpeedRailwayStations: ['Qingdao Railway Station', 'Qingdao North Station'],
      seaFreightSuitability: { ar: 'الميناء الأول والأنشط لشمال الصين والشرق الأوسط.', en: 'Premier ocean port in North China.' },
      airFreightSuitability: { ar: 'مطار شحن دولي حديث جداً.', en: 'Modern international air cargo hub.' },
      primaryCargoRoutes: { ar: ['خط الملاحة الشمالي المباشر لموانئ الخليج والبحر الأحمر'], en: ['Direct ocean lines to Middle East & Europe'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['مايو', 'يونيو', 'سبتمبر', 'أكتوبر'],
      suggestedStayDays: 3,
      weatherSummary: { ar: 'ساحلي لطيف صيفاً، بارد جداً شتاءً.', en: 'Coastal, cool summer, cold winter.' },
      recommendedStayAreas: [{ ar: 'منطقة شينان (Shinan District) قرب البحر.', en: 'Shinan Coastal Business Hub.' }],
      localTransportAdvice: { ar: 'شبكة مترو حديثة ومريحة.', en: 'Modern metro lines.' },
      languageTips: { ar: 'المندرين والإنجليزية في الشركات الكبرى.', en: 'Mandarin & English in export firms.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'intercontinental-qingdao',
          name: { ar: 'فندق إنتركونتيننتال تشينغداو (InterContinental Qingdao)', en: 'InterContinental Qingdao' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'منطقة الإبحار الأولمبي، شينان', en: 'Olympic Sailing Center, Shinan' },
          highlights: { ar: 'إطلالة بحرية ساحرة وخدمات رجال أعمال فائقة', en: 'Waterfront luxury hotel near corporate HQs' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'qingdao-halal-dongxiang',
          name: { ar: 'مطعم دونغشيانغ الإسلامي الحلال بـ تشينغداو', en: 'Qingdao Dongxiang Halal Restaurant' },
          cuisineType: { ar: 'مأكولات حلال ولحم ضأن', en: 'Halal Chinese Mutton Dishes' },
          isHalal: true,
          address: { ar: 'طريق المطار، شينان، تشينغداو', en: 'Shinan District, Qingdao' },
          recommendedFor: { ar: 'لحم ضأن طازج وطعام حلال أصيل', en: 'Certified halal dining near downtown' }
        }
      ],
      touristAttractions: [
        {
          id: 'tsingtao-beer-museum',
          name: { ar: 'متحف تشينغداو التراثي والمعماري (Tsingtao Museum)', en: 'Tsingtao Historic Brewery & German Street' },
          category: { ar: 'تراث تاريخي ومعماري', en: 'Historic German Architecture Landmark' },
          description: { ar: 'منطقة المباني الألمانية التراثية ومتحف تشينغداو الشهير.', en: 'Famous historic German colonial district and museum.' }
        }
      ]
    },
    tradeFairs: [],
    relatedCitySlugs: ['linyi', 'jinan', 'tianjin', 'dalian'],
    relatedProductSlugs: ['home-appliances', 'logistics', 'machinery', 'auto-parts'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل تشينغداو التجاري | ميناء الشمال ومصانع هايير وهايسنس والإطارات', en: 'Qingdao Sourcing Guide | Major Port, Haier Appliances & Tires' },
      description: { ar: 'دليل الاستيراد من تشينغداو: ميناء تشينغداو البحري، أجهزة هايير وهايسنس، مصانع الإطارات والآلات.', en: 'Qingdao sourcing guide: Qingdao port, Haier & Hisense appliances, truck tires & heavy machinery.' }
    }
  },

  {
    id: 'linyi',
    slug: 'linyi',
    name: { ar: 'لينبي (عاصمة أسواق الجملة واللوجستيات في الشمال)', en: 'Linyi', zh: '临沂' },
    province: { ar: 'شاندونغ', en: 'Shandong' },
    region: 'North China / Shandong',
    tier: 'tier-2',
    commercialImportanceScore: 92,
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'إيوو الشمال (Yiwu of the North) وأضخم عاصمة لأسواق الجملة واللوجستيات البرية في شمال الصين. تضم أكثر من 120 سوق جملة تخصصي لجميع المنتجات بأسعار منافسة جداً.',
      en: 'The Yiwu of Northern China. Vast wholesale marketplace with over 120 specialized markets and inland logistics hubs.'
    },
    keyIndustries: ['small-commodities', 'hardware-tools', 'building-materials', 'logistics-shipping'],
    primaryProducts: {
      ar: ['أدوات الأجهزة والخردوات (Hardware)', 'الألواح الخشبية والمواد الإنشائية', 'المعدات والسلع الصغيرة', 'البلاستيك والتغليف'],
      en: ['Hardware & Hand Tools', 'Plywood & Building Boards', 'General Merchandise', 'Plastics & Packaging']
    },
    bestFor: ['Importer', 'Wholesaler', 'Hardware Merchant', 'General Trader'],
    districts: [
      {
        id: 'lanshan-district',
        cityId: 'linyi',
        name: { ar: 'منطقة لانساه لأسواق الجملة (Lanshan Wholesale Hub)', en: 'Lanshan Wholesale District' },
        activityType: { ar: 'أكبر مجمع لأسواق الجملة البرية في شمال الصين', en: 'Northern China Largest Wholesale City' },
        mainProducts: ['خردوات', 'أخشاب أبلكاش', 'سلع استهلاكية'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'linyi-mall-wholesale',
        cityId: 'linyi',
        name: { ar: 'مجمع أسواق لينبي الدولية بالجملة (Linyi Mall)', en: 'Linyi Small Commodities Wholesale City', zh: '临沂批发市场' },
        type: 'Wholesale',
        category: 'Hardware & Small Commodities',
        description: {
          ar: 'تجمع يضم أكثر من 100 سوق تخصصي للسلع الاستهلاكية والأدوات والخردوات بأسعار المصنع.',
          en: 'Massive wholesale trade mall cluster comprising over 100 specialized commodity markets.'
        },
        address: { ar: 'طريق لانساه الرئيسي، لينبي، شاندونغ', en: 'Lanshan District, Linyi' },
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'linyi-plywood-wood-park',
        cityId: 'linyi',
        name: { ar: 'المنطقة الصناعية للألواح الخشبية بـ لينبي', en: 'Linyi Plywood & Building Materials Park' },
        clusterSpecialization: { ar: 'تصنيع خشب الأبلكاش (Plywood) والألواح الديكورية', en: 'Plywood & Decorative Wood Sheet Manufacturing' },
        factoryTypes: ['Plywood Mills'],
        keyProducts: ['خشب أبلكاش', 'MDF', 'ألواح خشبية'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'ly-plywood-hardware',
        productName: { ar: 'خشب الأبلكاش والخردوات والسلع الاستهلاكية', en: 'Plywood Sheets, Hand Tools & General Merchandise' },
        industryCategory: 'building-materials',
        whyThisCity: { ar: 'أول منتج ومصدر لخشب الأبلكاش وأضخم مركز جملة في شمال الصين.', en: 'China premier plywood export base and wholesale hub.' },
        mainManufacturingArea: { ar: 'لانساه وفينغاي', en: 'Lanshan & Fei County' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Linyi Qiyang Airport (LYI)'],
      seaPorts: ['Qingdao Port (ساعتان بالقطار/التاكسي)', 'Rizhao Port'],
      highSpeedRailwayStations: ['Linyi North Railway Station'],
      seaFreightSuitability: { ar: 'عبر ميناء تشينغداو وريدجاو المباشر.', en: 'Via Qingdao ocean terminals.' },
      airFreightSuitability: { ar: 'إقليمية عبر مطار لينبي وتسينغداو.', en: 'Regional air links.' },
      primaryCargoRoutes: { ar: ['شحن بري لبضائع الشمال والموانئ'], en: ['Inland truck logistics to Qingdao port'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['أبريل', 'مايو', 'سبتمبر', 'أكتوبر'],
      suggestedStayDays: 3,
      weatherSummary: { ar: 'معتدل ربيعاً وخريفاً.', en: 'Mild spring & autumn.' },
      recommendedStayAreas: [{ ar: 'منطقة لانساه (Lanshan Wholesale Hub).', en: 'Lanshan District Market Center.' }],
      localTransportAdvice: { ar: 'التاكسي وتطبيقات Didi.', en: 'Taxis & Didi.' },
      languageTips: { ar: 'المندرين.', en: 'Mandarin.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'pullman-linyi',
          name: { ar: 'فندق بولمان لينبي (Pullman Linyi Lusheng)', en: 'Pullman Linyi Lusheng' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'لانساه، وسط لينبي', en: 'Lanshan District' },
          highlights: { ar: 'أفخم فندق لرجال الأعمال ومستوردي الأخشاب والخردوات', en: 'Top upscale hotel near Linyi wholesale plazas' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'linyi-lanzhou-halal',
          name: { ar: 'مطعم لينبي لانجو الحلال', en: 'Linyi Lanzhou Halal Beef Noodles' },
          cuisineType: { ar: 'مأكولات حلال', en: 'Halal Beef Noodles' },
          isHalal: true,
          address: { ar: 'لانساه، لينبي', en: 'Lanshan District, Linyi' },
          recommendedFor: { ar: 'وجبات حلال طازجة ومريحة', en: 'Clean halal food near wholesale markets' }
        }
      ]
    },
    tradeFairs: [],
    relatedCitySlugs: ['qingdao', 'jinan', 'cangzhou', 'yiwu'],
    relatedProductSlugs: ['hardware-tools', 'small-commodities', 'building-materials'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل لينبي التجاري | أسواق جملة الشمال ومواد البناء والخردوات', en: 'Linyi Sourcing Guide | Wholesale Markets of North China' },
      description: { ar: 'دليل الاستيراد من لينبي الصينية: عاصمة الجملة في الشمال، الخردوات، الأخشاب، والبضائع العامة.', en: 'Linyi guide: Northern China wholesale capital, hardware tools, plywood & logistics.' }
    }
  },

  {
    id: 'chengdu',
    slug: 'chengdu',
    name: { ar: 'تشنغدو (عاصمة الغرب التجاري)', en: 'Chengdu', zh: '成都' },
    province: { ar: 'سيتشوان', en: 'Sichuan' },
    region: 'West China',
    tier: 'tier-2',
    commercialImportanceScore: 90,
    heroImage: 'https://images.unsplash.com/photo-1543097692-fa13c6cd8595?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'المركز التجاري والصناعي والتكنولوجي الأول لغرب الصين. تشتهر بتصنيع الأحذية النسائية (عاصمة الأحذية النسائية)، تجميع الإلكترونيات، التكنولوجيا، والقطارات واللوجستيات إلى أوروبا.',
      en: 'Commercial and tech capital of Western China. Hub for women shoe manufacturing, electronics assembly, and China-Europe freight trains.'
    },
    keyIndustries: ['apparel', 'electronics', 'technology', 'logistics-shipping'],
    primaryProducts: {
      ar: ['الأحذية النسائية', 'أجهزة الكمبيوتر المحمول والتجميع', 'البرمجيات والحلول الرقمية', 'المعدات الطبية والتأهيلية'],
      en: ['Women Leather Shoes', 'Laptop & Electronics Assembly', 'Software & IT Services', 'Medical & Pharma Devices']
    },
    bestFor: ['Importer', 'Shoe Buyer', 'Tech Business', 'E-Commerce'],
    districts: [
      {
        id: 'wuhou-shoe-hub',
        cityId: 'chengdu',
        name: { ar: 'منطقة ووهو الأحذية النسائية (Wuhou)', en: 'Wuhou Women Shoes Capital' },
        activityType: { ar: 'عاصمة تصميم وتصنيع الأحذية النسائية بالصين', en: 'China Women Footwear Sourcing Hub' },
        mainProducts: ['أحذية نسائية جلدية', 'كعب عالي', 'صناديل'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'chengdu-women-shoes-city',
        cityId: 'chengdu',
        name: { ar: 'مدينة الأحذية النسائية الصينية في تشنغدو', en: 'China Women Footwear Sourcing City', zh: '中国女鞋之都' },
        type: 'Wholesale',
        category: 'Footwear & Apparel',
        description: {
          ar: 'العاصمة الأولى لتصميم وتصنيع الأحذية النسائية الفاخرة والجلدية بأسعار المصانع.',
          en: 'China premier sourcing and wholesale center dedicated exclusively to women leather shoes.'
        },
        address: { ar: 'طريق ووهو، تشنغدو، سيتشوان', en: 'Wuhou District, Chengdu' },
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'chengdu-hi-tech-zone',
        cityId: 'chengdu',
        name: { ar: 'منطقة تشنغدو للتكنولوجيا العالية (CDHT)', en: 'Chengdu Hi-Tech Industrial Zone' },
        clusterSpecialization: { ar: 'تجميع أجهزة اللاب توب والشرائح والبرمجيات', en: 'Electronics & Semiconductor Assembly' },
        factoryTypes: ['Foxconn & Intel Mega Plants'],
        keyProducts: ['أجهزة كمبيوتر', 'شرائح'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'cd-women-shoes',
        productName: { ar: 'الأحذية النسائية وتجمعات تكنولوجيا الإلكترونيات', en: 'Women Leather Shoes & IT Electronics' },
        industryCategory: 'apparel',
        whyThisCity: { ar: 'المركز رقم 1 لتصنيع وتصميم الأحذية النسائية في الصين.', en: 'China #1 manufacturing base for ladies leather footwear.' },
        mainManufacturingArea: { ar: 'ووهو وبيبو', en: 'Wuhou & Pidu' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Chengdu Tianfu International Airport (TFU)', 'Chengdu Shuangliu Airport (CTU)'],
      seaPorts: ['Inland Dry Port & Yangtze River Shipping'],
      highSpeedRailwayStations: ['Chengdu East Station (قطار تشنغدو-أوروبا السريع)'],
      seaFreightSuitability: { ar: 'عبر نهر يانغتسي وموانئ الميناء الجاف.', en: 'River-sea intermodal logistics.' },
      airFreightSuitability: { ar: 'مطار تيانفو هو أحد أكبر مطارات الشحن الجوي في غرب الصين.', en: 'Tianfu TFU is top Western air cargo gateway.' },
      primaryCargoRoutes: { ar: ['قطار الشحن السريع إلى أوروبا وآسيا الوسطى'], en: ['China-Europe Railway Express Hub'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['مارس', 'أبريل', 'مايو', 'سبتمبر', 'أكتوبر'],
      suggestedStayDays: 3,
      weatherSummary: { ar: 'لطيف ومعتدل معظم السنة مع رطوبة غائمة.', en: 'Mild & cloudy climate.' },
      recommendedStayAreas: [{ ar: 'منطقة ووهو (Wuhou District - عاصمة الأحذية).', en: 'Wuhou District / Chunxi Road.' }],
      localTransportAdvice: { ar: 'مترو تشنغدو حديث وواسع.', en: 'Extensive metro network.' },
      languageTips: { ar: 'المندرين.', en: 'Mandarin.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'niccolo-chengdu',
          name: { ar: 'فندق نيكولو تشنغدو (Niccolo Chengdu)', en: 'Niccolo Chengdu' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'شارع تشونكسي (IFS Square)', en: 'Chunxi Road IFS Plaza' },
          highlights: { ar: 'أفخم فندق في وسط تشنغدو يقع فوق مجمع التسوق والتجارة', en: 'Ultra-luxury hotel in Chengdu prime commercial center' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'chengdu-halal-huangcheng',
          name: { ar: 'مطعم هوانغتشينغ الإسلامي الحلال بـ تشنغدو', en: 'Chengdu Huangcheng Halal Restaurant' },
          cuisineType: { ar: 'مأكولات حلال سيتشوان حارة أصيلة', en: 'Authentic Halal Sichuan Cuisine' },
          isHalal: true,
          address: { ar: 'طريق المطار القديم، ووهو، تشنغدو', en: 'Wuhou District, Chengdu' },
          recommendedFor: { ar: 'تجربة أطباق سيتشوان الشهيرة بطريقة حلال', en: 'Certified halal spicy Sichuan dining' }
        }
      ],
      touristAttractions: [
        {
          id: 'panda-base-chengdu',
          name: { ar: 'محمية وقاعدة الباندا العملاقة (Chengdu Panda Base)', en: 'Chengdu Research Base of Giant Panda Breeding' },
          category: { ar: 'معلم طبيعي عالمي', en: 'World Famous Panda Sanctuary' },
          description: { ar: 'أشهر موطن ومحمية لطبيعة ودراسة حيوان الباندا العملاق بـ سيتشوان.', en: 'World renowned sanctuary caring for giant pandas in bamboo forests.' }
        }
      ]
    },
    tradeFairs: [],
    relatedCitySlugs: ['chongqing', 'xi-an', 'kunming'],
    relatedProductSlugs: ['apparel', 'electronics', 'logistics'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل تشنغدو التجاري | عاصمة غرب الصين والأحذية النسائية', en: 'Chengdu Sourcing Guide | Western China Capital & Women Shoes' },
      description: { ar: 'دليل الاستيراد والتجارة من تشنغدو: مصانع الأحذية النسائية، التكنولوجيا، وقطار الشحن الأوروبي.', en: 'Chengdu sourcing guide: Women shoe factories, electronics assembly, Tianfu airport & rail express.' }
    }
  },

  {
    id: 'chongqing',
    slug: 'chongqing',
    name: { ar: 'تشونغتشينغ (عاصمة السيارات والدراجات النارية)', en: 'Chongqing', zh: '重庆' },
    province: { ar: 'بلدية تشونغتشينغ', en: 'Chongqing Municipality' },
    region: 'West China',
    tier: 'tier-2',
    commercialImportanceScore: 91,
    heroImage: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'أضخم تجمع لصناعة السيارات والدراجات النارية في العالم (عاصمة الدراجات النارية). تضم مصانع العملاقة (Changan Auto, Lifan, Zongshen) بالإضافة للآلات الثقيلة والتصنيع الدقيق.',
      en: 'World Motorcycle & Auto Capital. Major manufacturing base for Changan Auto, Lifan, Zongshen, heavy machinery, and laptop assembly.'
    },
    keyIndustries: ['auto-parts', 'machinery', 'electronics', 'hardware-tools'],
    primaryProducts: {
      ar: ['الدراجات النارية وقطع غيارها', 'السيارات والمركبات الكهربائية', 'الآلات الثقيلة ومولدات الكهرباء', 'أجهزة الكمبيوتر المجمعة'],
      en: ['Motorcycles & Parts', 'Automobiles & EVs (Changan)', 'Heavy Machinery & Generators', 'Laptop Assembly']
    },
    bestFor: ['Importer', 'Auto Parts Importer', 'Motorcycle Merchant', 'Machinery Buyer'],
    districts: [
      {
        id: 'yuzhou-chaotianmen',
        cityId: 'chongqing',
        name: { ar: 'منطقة شاوتيانمين للجملة (Chaotianmen)', en: 'Chaotianmen Wholesale Hub' },
        activityType: { ar: 'أسواق الجملة الضخمة للسلع والملابس والمعدات', en: 'Western China Mega Wholesale Center' },
        mainProducts: ['ملابس', 'قطع غيار', 'سلع استهلاكية'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'chongqing-chaotianmen-market',
        cityId: 'chongqing',
        name: { ar: 'سوق شاوتيانمين بالجملة في تشونغتشينغ', en: 'Chaotianmen Wholesale Market', zh: '朝天门综合批发市场' },
        type: 'Wholesale',
        category: 'General Merchandise',
        description: {
          ar: 'أضخم سوق جملة مجمع لغرب الصين يقع عند التقاء نهر يانغتسي.',
          en: 'Historic multi-building wholesale market complex serving Western China merchants.'
        },
        address: { ar: 'منطقة يوتشونغ، تشونغتشينغ', en: 'Yuzhou District, Chongqing' },
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'chongqing-auto-moto-park',
        cityId: 'chongqing',
        name: { ar: 'تجمع صناعات السيارات والدراجات النارية (Changan & Lifan)', en: 'Chongqing Auto & Motorcycle Industrial Base' },
        clusterSpecialization: { ar: 'تصنيع المحركات والدراجات النارية والسيارات', en: 'Automobile & Motorcycle OEM Assembly' },
        factoryTypes: ['Automotive Mega Plants'],
        keyProducts: ['دراجات نارية', 'محركات', 'مولدات'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'cq-motorcycles-auto',
        productName: { ar: 'الدراجات النارية وقطع السيارات والمولدات', en: 'Motorcycles, EV Parts & Heavy Generators' },
        industryCategory: 'auto-parts',
        whyThisCity: { ar: 'عاصمة الدراجات النارية والمحركات في العالم مع خطوط تصنيع عملاقة.', en: 'World #1 motorcycle and engine manufacturing base.' },
        mainManufacturingArea: { ar: 'بيشان وجيانغبينغ ونائنان', en: 'Bishan, Jiangbei, Nan\'an' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Chongqing Jiangbei International Airport (CKG)'],
      seaPorts: ['Chongqing Lianglu Cuntan Inland Port (ميناء نهر يانغتسي الرئيسي)'],
      highSpeedRailwayStations: ['Chongqing North Station', 'Chongqing West Station'],
      seaFreightSuitability: { ar: 'شحن نهري-بحري متصل بميناء شانغهاي عبر نهر يانغتسي.', en: 'Direct Yangtze river-sea shipping to Shanghai.' },
      airFreightSuitability: { ar: 'مطار جيانغبي شحن دولي مميز.', en: 'Jiangbei CKG international air cargo hub.' },
      primaryCargoRoutes: { ar: ['قطار الشحن بين الصين وأوروبا عبر كازاخستان'], en: ['Yuxinou Railway Express to Europe'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['مارس', 'أبريل', 'أكتوبر', 'نوفمبر'],
      suggestedStayDays: 3,
      weatherSummary: { ar: 'حار جداً صيفاً (إحدى أفران الصين)، معتدل شتاءً.', en: 'Hot summers, mild winters.' },
      recommendedStayAreas: [{ ar: 'منطقة يوتشونغ (Yuzhong - Jiefangbei).', en: 'Jiefangbei Downtown Hub.' }],
      localTransportAdvice: { ar: 'المترو الجبلي المعلق والقطار السريع.', en: 'Famous monorail metro network.' },
      languageTips: { ar: 'المندرين.', en: 'Mandarin.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'raffles-city-cq-intercontinental',
          name: { ar: 'فندق إنتركونتيننتال تشونغتشينغ رافلز سيتي', en: 'InterContinental Chongqing Raffles City' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'رافلز سيتي (شاوتيانمين)', en: 'Raffles City, Chaotianmen' },
          highlights: { ar: 'يقع فوق الجسر المعلق في أشهر أيقونة معماري بـ تشونغتشينغ', en: 'Iconic crystal skybridge hotel overlooking the Yangtze River' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'chongqing-halal-hotpot',
          name: { ar: 'مطعم الهوت بوت الإسلامي الحلال بـ تشونغتشينغ', en: 'Chongqing Certified Halal Hotpot' },
          cuisineType: { ar: 'هوت بوت حلال سيتشواني أصيل', en: 'Halal Authentic Sichuan Hotpot' },
          isHalal: true,
          address: { ar: 'جيفانغبي، تشونغتشينغ', en: 'Jiefangbei, Chongqing' },
          recommendedFor: { ar: 'تجربة الهوت بوت الصيني المشهور بطريقة حلال 100%', en: 'Authentic spicy halal Sichuan hotpot experience' }
        }
      ],
      touristAttractions: [
        {
          id: 'hongyadong',
          name: { ar: 'مجمع هونغيا دونغ التراثي (Hongyadong - 洪崖洞)', en: 'Hongya Cave (Hongyadong)' },
          category: { ar: 'معلم سياحي ومعماري فريد', en: 'Historic Architectural Landmark' },
          description: { ar: 'مبنى تراثي معلق على الجبل يبدو كلوحة سحرية مضاءة ليلاً فوق النهر.', en: 'Stunning 11-story cliffside traditional stilt house complex illuminated at night.' }
        }
      ]
    },
    tradeFairs: [],
    relatedCitySlugs: ['chengdu', 'wuhan', 'guangzhou'],
    relatedProductSlugs: ['auto-parts', 'machinery', 'hardware-tools'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل تشونغتشينغ التجاري | مصانع الدراجات النارية والسيارات والآلات', en: 'Chongqing Sourcing Guide | Motorcycle & Auto Capital' },
      description: { ar: 'دليل الاستيراد من تشونغتشينغ: مصانع الدراجات النارية، قطع غيار السيارات، مولدات الكهرباء، والآلات.', en: 'Chongqing guide: Motorcycle factories, Changan auto parts, heavy machinery & rail express.' }
    }
  },

  {
    id: 'suzhou',
    slug: 'suzhou',
    name: { ar: 'سوتشو (عاصمة الحرير والإلكترونيات الدقيقة)', en: 'Suzhou', zh: '苏州' },
    province: { ar: 'جيانغسو', en: 'Jiangsu' },
    region: 'Yangtze River Delta',
    tier: 'tier-2',
    commercialImportanceScore: 94,
    heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'واحدة من أثرى وأرقى المدن الصناعية والتكنولوجية في مقاطعة جيانغسو بالقرب من شانغهاي. تشتهر بتصنيع الإلكترونيات الدقيقة، الشاشات، الحرير الطبيعي، ومستلزمات فساتين الزفاف (سوق فساتين الزفاف هوانتشي).',
      en: 'Premier high-tech manufacturing and silk capital in Jiangsu near Shanghai. Hub for microelectronics, LCD displays, silk, and bridal gowns.'
    },
    keyIndustries: ['electronics', 'textiles', 'apparel', 'technology'],
    primaryProducts: {
      ar: ['الإلكترونيات الدقيقة والـ PCB', 'فساتين الزفاف والأزياء الراقية', 'الحرير الطبيعي والأقمشة', 'الأجهزة الطبية والتطبيقات'],
      en: ['Microelectronics & PCBs', 'Bridal Gowns & Wedding Apparel', 'Natural Silk Products', 'Medical Devices']
    },
    bestFor: ['Importer', 'Wedding Dress Merchant', 'Electronics Importer', 'Fashion Business'],
    districts: [
      {
        id: 'gusu-huaihai-bridal',
        cityId: 'suzhou',
        name: { ar: 'منطقة غوسو لفساتين الزفاف (Huaihai)', en: 'Huaihai Bridal Dress Hub' },
        activityType: { ar: 'أضخم سوق وسلسلة تصنيع لفساتين الزفاف والسهرة', en: 'World Premier Bridal Gown Center' },
        mainProducts: ['فساتين زفاف', 'فساتين سهرة', 'طرح زفاف'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'suzhou-huaihai-bridal-city',
        cityId: 'suzhou',
        name: { ar: 'سوق هوانتشي لفساتين الزفاف بالجملة في سوتشو', en: 'Suzhou Huaihai Bridal Dress Market', zh: '虎丘婚纱一条街' },
        type: 'Wholesale',
        category: 'Apparel & Fashion',
        description: {
          ar: 'السوق الأول والأضخم في العالم لتصميم وتفصيل وبيع فساتين الزفاف بالجملة.',
          en: 'World largest wholesale market street for wedding dresses, evening gowns, and bridal accessories.'
        },
        address: { ar: 'طريق هوانتشي، منطقة غوسو، سوتشو', en: 'Huaihai Rd, Gusu District, Suzhou' },
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'suzhou-industrial-park-sip',
        cityId: 'suzhou',
        name: { ar: 'مجمع سوتشو الصناعي (SIP - China-Singapore Park)', en: 'Suzhou Industrial Park (SIP)' },
        clusterSpecialization: { ar: 'الإلكترونيات الدقيقة والمعدات الطبية والتكنولوجيا', en: 'Microelectronics, Nanotech & Bio-Pharma' },
        factoryTypes: ['Global Fortune 500 Plants'],
        keyProducts: ['لوحات PCB', 'أجهزة طبية'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'sz-bridal-gowns-silk',
        productName: { ar: 'فساتين الزفاف والحرير الطبيعي والإلكترونيات', en: 'Bridal Gowns, Pure Silk & Microelectronics' },
        industryCategory: 'apparel',
        whyThisCity: { ar: 'تنتج وتصدر أكثر من 60% من فساتين الزفاف في العالم بأسعار تنافسية.', en: 'World #1 production center for wedding dresses and bridal wear.' },
        mainManufacturingArea: { ar: 'غوسو وكونشان ووتشينغ', en: 'Gusu, Kunshan, Wuzhong' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Sunan Shuofang Airport (WUX)', 'Shanghai Hongqiao/Pudong (30 mins by train)'],
      seaPorts: ['Suzhou Port (Taicang Port)'],
      highSpeedRailwayStations: ['Suzhou Railway Station', 'Suzhou Industrial Park Station'],
      seaFreightSuitability: { ar: 'عبر ميناء تايتشانغ وميناء شانغهاي المباشر.', en: 'Direct via Taicang & Shanghai ports.' },
      airFreightSuitability: { ar: 'عبر مطار شانغهاي بودونغ وهونغكياو.', en: 'Via Shanghai PVG & SHA airports.' },
      primaryCargoRoutes: { ar: ['خطوط الملاحة البحرية لجميع الموانئ العالمية'], en: ['Direct shipping via Shanghai maritime lines'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['مارس', 'أبريل', 'مايو', 'سبتمبر', 'أكتوبر'],
      suggestedStayDays: 3,
      weatherSummary: { ar: 'معتدل ولطيف للغاية ربيعاً وخريفاً.', en: 'Pleasant spring & autumn.' },
      recommendedStayAreas: [{ ar: 'مجمع سوتشو الصناعي (SIP - Suzhou Industrial Park).', en: 'Suzhou Industrial Park (SIP).' }],
      localTransportAdvice: { ar: 'مترو سوتشو والقطار السريع لشانغهاي في 20 دقيقة.', en: '20-min high-speed train to Shanghai.' },
      languageTips: { ar: 'المندرين والإنجليزية.', en: 'Mandarin & English.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'w-suzhou',
          name: { ar: 'فندق دبليو سوتشو (W Suzhou)', en: 'W Suzhou' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'مجمع سوتشو الصناعي (SIP Lakefront)', en: 'Jinji Lakefront, SIP' },
          highlights: { ar: 'تصميم العصري وإطلالة ساحرة على بحيرة جينجي', en: 'Ultra-modern luxury hotel overlooking Jinji Lake' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'suzhou-halal-rest',
          name: { ar: 'مطعم سوتشو الإسلامي الحلال (Suzhou Muslim)', en: 'Suzhou Islamic Halal Restaurant' },
          cuisineType: { ar: 'مأكولات حلال ولحم ضأن', en: 'Halal Chinese Mutton Dishes' },
          isHalal: true,
          address: { ar: 'طريق غوسو، سوتشو', en: 'Gusu District, Suzhou' },
          recommendedFor: { ar: 'وجبة حلال مريحة بالقرب من أسواق الزفاف والحرير', en: 'Reliable halal dining near Gusu markets' }
        }
      ],
      touristAttractions: [
        {
          id: 'humble-administrator-garden',
          name: { ar: 'حديقة المدير المتواضع الملكية (Humble Administrator Garden)', en: 'Humble Administrator Garden (Zhuozheng Yuan)' },
          category: { ar: 'معلم عالمي (UNESCO)', en: 'UNESCO World Heritage Garden' },
          description: { ar: 'أشهر وأجمل حديقة كلاسيكية في الصين تحاكي الطبيعة والبحيرات.', en: 'China finest historic classical garden built during Ming dynasty.' }
        }
      ]
    },
    tradeFairs: [],
    relatedCitySlugs: ['shanghai', 'wuxi', 'nantong', 'hangzhou'],
    relatedProductSlugs: ['electronics', 'textiles', 'apparel'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل سوتشو التجاري | فساتين الزفاف، الحرير، والإلكترونيات الدقيقة', en: 'Suzhou Sourcing Guide | Bridal Gowns, Silk & High-Tech Electronics' },
      description: { ar: 'دليل الاستيراد من سوتشو: أسواق فساتين الزفاف بالجملة، الحرير، المكونات الإلكترونية، والمصانع.', en: 'Suzhou guide: Huaihai bridal dress market, silk textiles, microelectronics & SIP park.' }
    }
  },

  {
    id: 'yongkang',
    slug: 'yongkang',
    name: { ar: 'يونغكانغ (عاصمة الأبواب والخردوات المعدنية)', en: 'Yongkang', zh: '永康' },
    province: { ar: 'تشيجيانغ', en: 'Zhejiang' },
    region: 'Yangtze River Delta',
    tier: 'tier-2',
    commercialImportanceScore: 92,
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'العاصمة العالمية الأولى لصناعة الخردوات المعدنية والأبواب المصفحة (Hardware City). تنتج أكثر من 70% من الأبواب الفولاذية والمصفحة، الترموس الحراري، أدوات الطاقة، والمعدات الرياضية في الصين.',
      en: 'China Hardware & Security Door Capital. Global leader in steel security doors, vacuum flasks, power tools, and fitness equipment manufacturing.'
    },
    keyIndustries: ['hardware-tools', 'building-materials', 'machinery'],
    primaryProducts: {
      ar: ['الأبواب المصفحة والفولاذية والخشبية', 'أكواب الحفظ الحراري (الترموس)', 'الأدوات والمعدات الكهربائية (Power Tools)', 'أجهزة ومعدات اللياقة البدنية'],
      en: ['Steel Security & Wooden Doors', 'Vacuum Flasks & Thermoses', 'Electric Power Tools', 'Fitness & Gym Equipment']
    },
    bestFor: ['Importer', 'Door & Building Merchant', 'Hardware Merchant'],
    districts: [
      {
        id: 'yongkang-hardware-city-zone',
        cityId: 'yongkang',
        name: { ar: 'مدينة يونغكانغ الخردوات (China Hardware City)', en: 'Yongkang Hardware Hub' },
        activityType: { ar: 'عاصمة تجارة ومصانع الخردوات والأبواب بالصين', en: 'China Premier Hardware City' },
        mainProducts: ['أبواب مصفحة', 'ترموس', 'أدوات كهربائية'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'china-hardware-city-yongkang',
        cityId: 'yongkang',
        name: { ar: 'مدينة الخردوات الصينية العالمية في يونغكانغ', en: 'China Hardware City Market', zh: '中国科技五金城' },
        type: 'Wholesale',
        category: 'Hardware & Tools',
        description: {
          ar: 'أضخم مركز جملة ومعارض للأدوات المعدنية والخردوات والأبواب بالصين.',
          en: 'World largest wholesale center for hardware, power tools, and security doors.'
        },
        address: { ar: 'طريق ووجين، يونغكانغ، تشيجيانغ', en: 'Wujin Rd, Yongkang' },
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'yongkang-door-industry-park',
        cityId: 'yongkang',
        name: { ar: 'المنطقة الصناعية لتصنيع الأبواب المصفحة بـ يونغكانغ', en: 'Yongkang Security Door Industrial Base' },
        clusterSpecialization: { ar: 'تشكيل الفولاذ وكبس الأبواب المصفحة وحشوها', en: 'Steel Security & Fireproof Door Manufacturing' },
        factoryTypes: ['Automated Door Plants'],
        keyProducts: ['أبواب مصفحة', 'أبواب مقاومة للحريق'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'yk-doors-hardware',
        productName: { ar: 'الأبواب المصفحة والخردوات والترموس الحراري', en: 'Steel Security Doors, Hardware & Vacuum Flasks' },
        industryCategory: 'hardware-tools',
        whyThisCity: { ar: 'تنتج أكثر من 70% من الأبواب المصفحة والأدوات الحرارية بالصين.', en: 'World #1 production base for steel security doors and thermoses.' },
        mainManufacturingArea: { ar: 'يونغكانغ وواينان', en: 'Yongkang & Wuyi' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Yiwu Airport (YIW - 45 mins)', 'Hangzhou Airport (HGH)'],
      seaPorts: ['Ningbo-Zhoushan Port'],
      highSpeedRailwayStations: ['Yongkang South Railway Station'],
      seaFreightSuitability: { ar: 'مباشرة عبر ميناء نينغبو القريب.', en: 'Direct ocean container shipping via Ningbo.' },
      airFreightSuitability: { ar: 'عبر مطار إيوو وهانغتشو.', en: 'Via Yiwu & Hangzhou airports.' },
      primaryCargoRoutes: { ar: ['شحن حاويات الأبواب والمعدات للشرق الأوسط'], en: ['Direct shipping for security doors & hardware'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['مايو (معرض الخردوات)', 'أكتوبر', 'نوفمبر'],
      suggestedStayDays: 2,
      weatherSummary: { ar: 'معتدل ربيعاً وخريفاً.', en: 'Mild spring & autumn.' },
      recommendedStayAreas: [{ ar: 'وسط مدينة يونغكانغ بالقرب من مدينة الخردوات.', en: 'Yongkang China Hardware City Center.' }],
      localTransportAdvice: { ar: 'التاكسي والسيارات الخاصة.', en: 'Taxis & Didi.' },
      languageTips: { ar: 'المندرين.', en: 'Mandarin.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'hotel-richness-yongkang',
          name: { ar: 'فندق ريتشنيس يونغكانغ الدولي', en: 'Richness International Hotel Yongkang' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'قرب مدينة الخردوات، يونغكانغ', en: 'Near China Hardware City' },
          highlights: { ar: 'أشهر فندق لرجال الأعمال ومستوردي الأبواب والمعدات', en: 'Premier business hotel serving hardware & door buyers' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'yongkang-lanzhou-halal',
          name: { ar: 'مطعم نودلز اللانجو الحلال بـ يونغكانغ', en: 'Yongkang Lanzhou Halal Beef Noodles' },
          cuisineType: { ar: 'مأكولات حلال', en: 'Halal Beef Noodles' },
          isHalal: true,
          address: { ar: 'وسط يونغكانغ', en: 'Yongkang City Center' },
          recommendedFor: { ar: 'غداء حلال سريع ولذيذ', en: 'Clean halal lunch during factory visits' }
        }
      ]
    },
    tradeFairs: [],
    relatedCitySlugs: ['yiwu', 'jinhua', 'cixi', 'ningbo'],
    relatedProductSlugs: ['hardware-tools', 'building-materials', 'machinery'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل يونغكانغ التجاري | مصانع الأبواب المصفحة والخردوات والترموس', en: 'Yongkang Sourcing Guide | Hardware & Security Doors Capital' },
      description: { ar: 'دليل الاستيراد من يونغكانغ: مصانع الأبواب المصفحة الفولاذية، أدوات الترموس، والمعدات الرياضية.', en: 'Yongkang guide: China hardware capital, steel security doors, vacuum flasks & power tools.' }
    }
  },

  {
    id: 'cixi',
    slug: 'cixi',
    name: { ar: 'سيشي (نينغبو - عاصمة الأجهزة المنزلية الصغيرة)', en: 'Cixi', zh: '慈溪' },
    province: { ar: 'تشيجيانغ', en: 'Zhejiang' },
    region: 'Yangtze River Delta',
    tier: 'tier-2',
    commercialImportanceScore: 91,
    heroImage: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'إحدى أكبر القواعد العالمية لتصنيع وتجميع الأجهزة المنزلية الصغيرة (مدافئ الكهرباء، مراوح، دفيات، خلاطات، ومبردات المياه) التابعة لمدينة نينغبو.',
      en: 'Major global manufacturing base for small home appliances (electric heaters, fans, water dispensers, and kitchen appliances) under Ningbo jurisdiction.'
    },
    keyIndustries: ['home-appliances', 'electronics', 'plastics-rubber'],
    primaryProducts: {
      ar: ['الدفيات والمدافئ الكهربائية', 'مبردات وموزعات المياه', 'مراوح الهواء والتكييف', 'أجهزة المطبخ الصغيرة'],
      en: ['Electric Space Heaters', 'Water Dispensers & Purifiers', 'Electric Fans', 'Small Kitchen Appliances']
    },
    bestFor: ['Importer', 'Appliance Buyer', 'Wholesaler'],
    districts: [
      {
        id: 'zhouxiang-cixi',
        cityId: 'cixi',
        name: { ar: 'بلدة تشوشيانغ الأجهزة (Zhouxiang)', en: 'Zhouxiang Small Appliance Hub' },
        activityType: { ar: 'عاصمة أسواق ومصانع مبردات المياه والدفيات', en: 'Small Appliance Manufacturing Town' },
        mainProducts: ['دفيات', 'مبردات مياه', 'مراوح'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'cixi-home-appliance-plaza',
        cityId: 'cixi',
        name: { ar: 'مدينة الأجهزة المنزلية في سيشي نينغبو', en: 'Cixi Small Home Appliance Market', zh: '慈溪家电城' },
        type: 'Wholesale',
        category: 'Home Appliances',
        description: {
          ar: 'مركز المعارض والجملة للأجهزة الكهربائية والمطابخ والمدافئ.',
          en: 'Appliance wholesale center serving global importers and buyers.'
        },
        address: { ar: 'طريق سيشي الرئيسي، نينغبو', en: 'Cixi Main Rd, Ningbo' },
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'cixi-appliance-industrial-park',
        cityId: 'cixi',
        name: { ar: 'المنطقة الصناعية للأجهزة الكهربائية بـ سيشي', en: 'Cixi Home Appliance Industrial Base' },
        clusterSpecialization: { ar: 'حقن وتجميع الدفيات ومبردات المياه والمراوح', en: 'Appliance Injection Molding & Assembly' },
        factoryTypes: ['OEM Appliance Assembly Plants'],
        keyProducts: ['دفيات كهرباء', 'موزعات مياه'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'cx-heaters-appliances',
        productName: { ar: 'المدافئ الكهربائية ومبردات المياه والمراوح', en: 'Electric Space Heaters, Water Coolers & Fans' },
        industryCategory: 'home-appliances',
        whyThisCity: { ar: 'تنتج أكثر من 30% من مدافئ الكهرباء ومبردات المياه في العالم.', en: 'World top manufacturing exporter for electric heaters and water coolers.' },
        mainManufacturingArea: { ar: 'تشوشيانغ وسي دونغ', en: 'Zhouxiang & Cidong' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Ningbo Airport (NGB)', 'Hangzhou Airport (HGH)'],
      seaPorts: ['Ningbo-Zhoushan Port (قريب جداً)'],
      highSpeedRailwayStations: ['Yuyao North Station'],
      seaFreightSuitability: { ar: 'ممتازة جداً عبر ميناء نينغبو-تشوشان.', en: 'Direct access to Ningbo port.' },
      airFreightSuitability: { ar: 'عبر مطار نينغبو.', en: 'Via Ningbo airport.' },
      primaryCargoRoutes: { ar: ['شحن الأجهزة المنزلية لموانئ العالم'], en: ['Direct shipping routes for home appliances'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['أبريل', 'أكتوبر'],
      suggestedStayDays: 2,
      weatherSummary: { ar: 'معتدل.', en: 'Pleasant climate.' },
      recommendedStayAreas: [{ ar: 'وسط مدينة سيشي.', en: 'Cixi Downtown.' }],
      localTransportAdvice: { ar: 'التاكسي والسيارات الخاصة.', en: 'Taxis & Didi.' },
      languageTips: { ar: 'المندرين.', en: 'Mandarin.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'hyatt-regency-cixi',
          name: { ar: 'فندق حياة ريجنسي سيشي (Hyatt Regency Cixi)', en: 'Hyatt Regency Cixi' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'وسط مدينة سيشي، نينغبو', en: 'Cixi City Center' },
          highlights: { ar: 'أفخم فندق أعمال في سيشي وقريب من مصانع الأجهزة', en: 'Top-tier luxury hotel with premium executive amenities' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'cixi-halal-restaurant',
          name: { ar: 'مطعم سيشي الحلال للمأكولات', en: 'Cixi Lanzhou Halal Beef Noodles' },
          cuisineType: { ar: 'مأكولات حلال', en: 'Halal Beef Noodles' },
          isHalal: true,
          address: { ar: 'وسط سيشي', en: 'Cixi Center' },
          recommendedFor: { ar: 'وجبات حلال طازجة للمسافرين', en: 'Clean halal lunch option' }
        }
      ]
    },
    tradeFairs: [],
    relatedCitySlugs: ['ningbo', 'yuyao', 'yiwu'],
    relatedProductSlugs: ['home-appliances', 'electronics'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل سيشي التجاري | مصانع الأجهزة المنزلية الصغيرة والدفيات', en: 'Cixi Sourcing Guide | Small Home Appliances Capital' },
      description: { ar: 'دليل الاستيراد من سيشي نينغبو: مصانع المدافئ الكهربائية، مبردات المياه، والأجهزة المنزلية.', en: 'Cixi guide: Small home appliances manufacturing, electric heaters, water dispensers & Ningbo port.' }
    }
  },

  {
    id: 'shaoxing',
    slug: 'shaoxing',
    name: { ar: 'شاوشينغ (كيشياو - مدينة الأقمشة والمنسوجات العالمية)', en: 'Shaoxing (Keqiao)', zh: '绍兴' },
    province: { ar: 'تشيجيانغ', en: 'Zhejiang' },
    region: 'Yangtze River Delta',
    tier: 'tier-2',
    commercialImportanceScore: 93,
    heroImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'العاصمة العالمية الأولى لأسواق ومصانع الأقمشة والمنسوجات (مدينة الصين للأقمشة Keqiao China Textile City). تنتج وتوزع أكثر من 30% من الأقمشة والغزل والأنسجة في العالم.',
      en: 'World Textile Capital (Keqiao China Textile City). Distributes over 30% of global fabrics, polyester, cotton, and curtain textiles.'
    },
    keyIndustries: ['textiles', 'apparel'],
    primaryProducts: {
      ar: ['أقمشة الملابس والأزياء', 'أقمشة الستائر والمفروشات', 'أقمشة البوليستر والغزل', 'المنسوجات الصناعية'],
      en: ['Fashion Apparel Fabrics', 'Curtains & Upholstery Fabrics', 'Polyester & Yarn', 'Industrial Textiles']
    },
    bestFor: ['Importer', 'Textile Merchant', 'Fashion Business', 'Garment Factory Owner'],
    districts: [
      {
        id: 'keqiao-textile-hub',
        cityId: 'shaoxing',
        name: { ar: 'منطقة كيشياو للأقمشة (Keqiao Textile City)', en: 'Keqiao Textile Hub' },
        activityType: { ar: 'عاصمة أسواق ومصانع الأقمشة والمنسوجات في العالم', en: 'World Premier Fabric & Textile Market' },
        mainProducts: ['أقمشة ملابس', 'أقمشة ستائر', 'بوليستر'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'keqiao-china-textile-city',
        cityId: 'shaoxing',
        name: { ar: 'مدينة الصين العالمية للأقمشة والمنسوجات في كيشياو', en: 'China Textile City (Keqiao Market)', zh: '中国轻纺城' },
        type: 'Wholesale',
        category: 'Textiles & Fabrics',
        description: {
          ar: 'أكبر سوق جملة مجمع للأقمشة بجميع أنواعها والستائر والأنسجة في العالم.',
          en: 'World largest textile wholesale market covering over 30 specialized fabric marts.'
        },
        address: { ar: 'طريق كيشياو الرئيسي، شاوشينغ، تشيجيانغ', en: 'Keqiao District, Shaoxing' },
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'keqiao-dyeing-textile-park',
        cityId: 'shaoxing',
        name: { ar: 'مجمع كيشياو للصباغة والمنسوجات الدقيقة', en: 'Keqiao Textile Dyeing & Printing Base' },
        clusterSpecialization: { ar: 'طباعة وصباغة أقمشة البوليستر والقطن', en: 'Textile Printing, Dyeing & Weaving' },
        factoryTypes: ['Mega Dyeing & Weaving Mills'],
        keyProducts: ['أقمشة مطبوعة', 'خيوط بوليستر'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'sx-fabrics-textiles',
        productName: { ar: 'أقمشة الملابس والستائر والمفروشات', en: 'Apparel Fabrics, Curtain Textiles & Polyester Yarn' },
        industryCategory: 'textiles',
        whyThisCity: { ar: 'توزع وتنتج أكثر من 30% من أقمشة العالم بأسعار وتنوع لا مثيل له.', en: 'World #1 distribution center for all fashion and home fabrics.' },
        mainManufacturingArea: { ar: 'كيشياو وباو شين', en: 'Keqiao & Paojiang' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Hangzhou Xiaoshan Airport (HGH - 30 mins)'],
      seaPorts: ['Ningbo Port', 'Shanghai Port'],
      highSpeedRailwayStations: ['Shaoxing North Railway Station'],
      seaFreightSuitability: { ar: 'مباشرة عبر ميناء نينغبو.', en: 'Direct via Ningbo ocean terminals.' },
      airFreightSuitability: { ar: 'عبر مطار هانغتشو المجاور.', en: 'Via Hangzhou airport.' },
      primaryCargoRoutes: { ar: ['شحن حاويات الأقمشة والمنسوجات للعالم'], en: ['Direct shipping for textiles & fabrics'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['مايو (معرض كيشياو)', 'أكتوبر', 'نوفمبر'],
      suggestedStayDays: 3,
      weatherSummary: { ar: 'معتدل ربيعاً وخريفاً.', en: 'Pleasant spring & autumn.' },
      recommendedStayAreas: [{ ar: 'منطقة كيشياو (Keqiao Textile Market Hub).', en: 'Keqiao District Textile Hub.' }],
      localTransportAdvice: { ar: 'مترو شاوشينغ والقطار السريع لهانغتشو.', en: 'Shaoxing Metro & Didi.' },
      languageTips: { ar: 'المندرين والإنجليزية في مكاتب الأقمشة.', en: 'Mandarin & English in fabric trading offices.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'radisson-keqiao-shaoxing',
          name: { ar: 'فندق راديسون كيشياو شاوشينغ (Radisson Keqiao)', en: 'Radisson HOTEL Keqiao Shaoxing' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'قلب منطقة كيشياو للأقمشة', en: 'Heart of Keqiao Textile City' },
          highlights: { ar: 'يتصل بمكاتب ومعارض الأقمشة الدولية ومناسب جداً للمستوردين', en: 'Direct access to China Textile City market buildings' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'keqiao-arab-halal-rest',
          name: { ar: 'مطعم كيشياو العربي للأقمشة (Keqiao Arab Halal)', en: 'Keqiao Arab & Syrian Halal Restaurant' },
          cuisineType: { ar: 'مأكولات عربية وشامية حلال', en: 'Halal Syrian & Middle Eastern Cuisine' },
          isHalal: true,
          address: { ar: 'طريق كيشياو الرئيسي، شاوشينغ', en: 'Keqiao District, Shaoxing' },
          recommendedFor: { ar: 'لقاءات عمل تجار الأقمشة العرب ووجبات حلال طازجة', en: 'Famous Arabic business lunch spot in Keqiao' }
        }
      ],
      touristAttractions: [
        {
          id: 'an-chang-ancient-town',
          name: { ar: 'بلدة أنشانغ المائية التراثية (Anchang Ancient Town)', en: 'Anchang Water Town' },
          category: { ar: 'تراث تاريخي وثقافي', en: 'Historic Water Town' },
          description: { ar: 'بلدة مائية تاريخية ساحرة مشهورة بالجسور القديمة والقوارب التقليدية.', en: 'Charming historic Jiangnan canal water town near Keqiao.' }
        }
      ]
    },
    tradeFairs: [],
    relatedCitySlugs: ['hangzhou', 'haining', 'yiwu', 'guangzhou'],
    relatedProductSlugs: ['textiles', 'apparel'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل شاوشينغ وكيشياو للأقمشة | مدينة الصين العالمية للمنسوجات', en: 'Shaoxing Keqiao Sourcing Guide | China Textile City & Fabrics' },
      description: { ar: 'دليل الاستيراد من كيشياو وشاوشينغ: أسواق الأقمشة بالجملة، منسوجات الستائر، مصانع الغزل.', en: 'Shaoxing Keqiao guide: World textile capital, Keqiao fabric market, curtain textiles & export.' }
    }
  },

  {
    id: 'haining',
    slug: 'haining',
    name: { ar: 'هاينينغ (عاصمة الجلديات والجوارب)', en: 'Haining', zh: '海宁' },
    province: { ar: 'تشيجيانغ', en: 'Zhejiang' },
    region: 'Yangtze River Delta',
    tier: 'tier-3',
    commercialImportanceScore: 88,
    heroImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'عاصمة الملابس والسترات الجلدية والأقمشة المنزلية في الصين (مدينة هاينينغ للجلديات Haining China Leather City).',
      en: 'China Leather & Warp Knitting Capital. Home to Haining Leather City and major warp knitting fabric factories.'
    },
    keyIndustries: ['leather-goods', 'apparel', 'textiles'],
    primaryProducts: {
      ar: ['السترات والمعاطف الجلدية', 'جلد الغزال والجلود الصناعية', 'أقمشة المفروشات المنزلية'],
      en: ['Leather Jackets & Coats', 'Suede & Synthetic Leather', 'Home Upholstery Fabrics']
    },
    bestFor: ['Importer', 'Leather Merchant', 'Fashion Business'],
    districts: [
      {
        id: 'haining-leather-hub',
        cityId: 'haining',
        name: { ar: 'مدينة هاينينغ للجلديات (Leather City)', en: 'Haining Leather Market Center' },
        activityType: { ar: 'أضخم مركز لتجارة الملابس والسترات الجلدية بالصين', en: 'China Leather Apparel Capital' },
        mainProducts: ['سترات جلدية', 'جلد صناعي', 'معاطف فرائية'],
        tradeFocus: 'Wholesale',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'haining-china-leather-city',
        cityId: 'haining',
        name: { ar: 'مدينة هاينينغ الصينية للجلديات بالجملة', en: 'Haining China Leather City', zh: '海宁中国皮革城' },
        type: 'Wholesale',
        category: 'Apparel & Leather',
        description: {
          ar: 'أكبر مجمع تجاري متكامل لبيع السترات الجلدية والجلود الطبيعية والصناعية بالجملة.',
          en: 'China premier mega mall complex dedicated to leather apparel, fur, and raw materials.'
        },
        address: { ar: 'طريق هاينينغ الرئيسي، تشيجيانغ', en: 'Haining Main Rd, Zhejiang' },
        moqLevel: 'Low'
      }
    ],
    industrialZones: [
      {
        id: 'haining-warp-knitting-park',
        cityId: 'haining',
        name: { ar: 'المنطقة الصناعية لأنسجة السداء والمفروشات بـ هاينينغ', en: 'Haining Warp Knitting Industrial Zone' },
        clusterSpecialization: { ar: 'تصنيع أقمشة المفروشات والكنب والجلود الصناعية', en: 'Warp Knitting & Upholstery Fabric Production' },
        factoryTypes: ['Textile Knitting Mills'],
        keyProducts: ['أقمشة كنب', 'جلد صناعي PU'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'hn-leather-apparel',
        productName: { ar: 'السترات الجلدية والجلود الصناعية وأقمشة المفروشات', en: 'Leather Jackets, Synthetic Leather & Sofa Fabrics' },
        industryCategory: 'apparel',
        whyThisCity: { ar: 'المركز الأول لتصنيع وتصدير الجلديات والسترات في الصين.', en: 'China #1 manufacturing and trade center for leather goods.' },
        mainManufacturingArea: { ar: 'هاينينغ وموران', en: 'Haining & Maqiao' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Hangzhou Airport (HGH)', 'Shanghai Pudong (PVG)'],
      seaPorts: ['Shanghai Port', 'Ningbo Port'],
      highSpeedRailwayStations: ['Haining West Station'],
      seaFreightSuitability: { ar: 'عبر ميناء شانغهاي ونينغبو.', en: 'Via Shanghai & Ningbo ports.' },
      airFreightSuitability: { ar: 'عبر مطار هانغتشو.', en: 'Via Hangzhou airport.' },
      primaryCargoRoutes: { ar: ['شحن الجلديات والملابس'], en: ['Shipping routes for leather & garments'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['أكتوبر', 'نوفمبر', 'ديسمبر'],
      suggestedStayDays: 2,
      weatherSummary: { ar: 'معتدل.', en: 'Mild.' },
      recommendedStayAreas: [{ ar: 'قرب مدينة الجلديات.', en: 'Near Haining Leather City.' }],
      localTransportAdvice: { ar: 'التاكسي وDidi.', en: 'Taxis.' },
      languageTips: { ar: 'المندرين.', en: 'Mandarin.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'pullman-haining',
          name: { ar: 'فندق بولمان هاينينغ (Pullman Haining)', en: 'Pullman Haining' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'قرب مدينة الجلديات، هاينينغ', en: 'Near China Leather City' },
          highlights: { ar: 'الفندق الأفخم بالمدينة ومناسب لمستوردي الجلديات', en: 'Top upscale hotel near Haining Leather City' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'haining-halal-rest',
          name: { ar: 'مطعم هاينينغ الحلال', en: 'Haining Lanzhou Halal Beef Noodles' },
          cuisineType: { ar: 'مأكولات حلال', en: 'Halal Beef Noodles' },
          isHalal: true,
          address: { ar: 'وسط هاينينغ', en: 'Haining Center' },
          recommendedFor: { ar: 'غداء حلال طازج', en: 'Clean halal dining' }
        }
      ]
    },
    tradeFairs: [],
    relatedCitySlugs: ['shaoxing', 'hangzhou', 'guangzhou'],
    relatedProductSlugs: ['leather-goods', 'apparel', 'textiles'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل هاينينغ التجاري | مدينة الجلديات والسترات الجلدية', en: 'Haining Sourcing Guide | China Leather City & Apparel' },
      description: { ar: 'دليل الاستيراد من هاينينغ: مصانع السترات الجلدية، الجلود الصناعية، وأقمشة المفروشات.', en: 'Haining guide: China leather city, leather jackets, synthetic leather & textiles.' }
    }
  },

  {
    id: 'ningde',
    slug: 'ningde',
    name: { ar: 'نينغدي (عاصمة بطاريات الطاقة الجديدة CATL)', en: 'Ningde', zh: '宁德' },
    province: { ar: 'فوجيان', en: 'Fujian' },
    region: 'East Coast (Fujian)',
    tier: 'tier-3',
    commercialImportanceScore: 89,
    heroImage: 'https://images.unsplash.com/photo-1558441719-67450807e50a?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'العاصمة العالمية الأولى لتصنيع بطاريات الليثيوم والسيارات الكهربائية (المقر الرئيسي لـ CATL العالمية). التجمع الضخم لأنظمة تخزين الطاقة الشمسية وبطاريات EVs.',
      en: 'Global EV Battery & Lithium Energy Capital. World HQ of CATL, leading global EV batteries and solar energy storage manufacturing.'
    },
    keyIndustries: ['solar-renewable', 'auto-parts', 'technology'],
    primaryProducts: {
      ar: ['بطاريات السيارات الكهربائية (CATL)', 'أنظمة تخزين الطاقة الشمسية', 'خلايا الليثيوم والتطبيقات'],
      en: ['EV Lithium Batteries (CATL)', 'Solar Energy Storage Systems', 'Lithium Cells & Packs']
    },
    bestFor: ['Importer', 'Solar Energy Business', 'EV Battery Importer'],
    districts: [
      {
        id: 'jiaocheng-catl-hub',
        cityId: 'ningde',
        name: { ar: 'منطقة جياوتشينغ بطاريات CATL (Jiaocheng)', en: 'Jiaocheng CATL Battery District' },
        activityType: { ar: 'المقر الرئيسي والمصانع العملاقة لشركة CATL العالمية', en: 'Global Lithium Battery & Solar Energy Storage HQ' },
        mainProducts: ['بطاريات سيارات كهربائية', 'مخازن طاقة شمسية'],
        tradeFocus: 'Manufacturing',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [],
    industrialZones: [
      {
        id: 'catl-mega-battery-park',
        cityId: 'ningde',
        name: { ar: 'مجمع CATL لتصنيع بطاريات الليثيوم والطاقة', en: 'CATL Lithium Battery Mega Industrial Park' },
        clusterSpecialization: { ar: 'تصنيع خلايا وحزم بطاريات السيارات الكهربائية', en: 'EV Lithium Cell & Battery Pack Gigafactory' },
        factoryTypes: ['World Largest Battery Gigafactory'],
        keyProducts: ['بطاريات CATL', 'أنظمة ESS شمسية'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'nd-catl-batteries',
        productName: { ar: 'بطاريات CATL وأنظمة تخزين الطاقة الشمسية', en: 'CATL EV Lithium Batteries & Solar Energy Storage' },
        industryCategory: 'solar-renewable',
        whyThisCity: { ar: 'المقر الرئيسي والأنشط في العالم لشركة CATL المصنعة لبطاريات الطاقة.', en: 'Global HQ of CATL producing over 35% of world EV batteries.' },
        mainManufacturingArea: { ar: 'جياوتشينغ ودونغشي', en: 'Jiaocheng & Dongqiao' },
        wholesaleAvailability: 'Medium',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Fuzhou Changle Airport (FOC)'],
      seaPorts: ['Ningde Port', 'Fuzhou Port'],
      highSpeedRailwayStations: ['Ningde Railway Station'],
      seaFreightSuitability: { ar: 'شحن البطاريات والتجهيزات عبر الموانئ المحلية وشيامن.', en: 'Dangerous goods EV battery ocean shipping compliance.' },
      airFreightSuitability: { ar: 'عبر مطار فوتشو.', en: 'Via Fuzhou airport.' },
      primaryCargoRoutes: { ar: ['شحن بطاريات الطاقة والإنفرترات'], en: ['EV & Solar battery transport logistics'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['أبريل', 'مايو', 'أكتوبر'],
      suggestedStayDays: 2,
      weatherSummary: { ar: 'ساحلي لطيف.', en: 'Pleasant coastal climate.' },
      recommendedStayAreas: [{ ar: 'وسط نينغدي قرب مجمعات CATL.', en: 'Ningde Business District near CATL.' }],
      localTransportAdvice: { ar: 'التاكسي.', en: 'Taxis.' },
      languageTips: { ar: 'المندرين.', en: 'Mandarin.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'wanda-realm-ningde',
          name: { ar: 'فندق واندا ريلم نينغدي (Wanda Realm)', en: 'Wanda Realm Ningde' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'وسط نينغدي، فوجيان', en: 'Ningde City Center' },
          highlights: { ar: 'أفخم فندق أعمال بجوار مجمعات شركة CATL', en: 'Premier business hotel close to CATL Headquarters' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'ningde-halal-rest',
          name: { ar: 'مطعم نينغدي الحلال', en: 'Ningde Halal Beef Noodles' },
          cuisineType: { ar: 'مأكولات حلال', en: 'Halal Chinese Food' },
          isHalal: true,
          address: { ar: 'وسط نينغدي', en: 'Ningde Center' },
          recommendedFor: { ar: 'وجبات حلال طازجة', en: 'Reliable halal lunch' }
        }
      ]
    },
    tradeFairs: [],
    relatedCitySlugs: ['fuzhou', 'xiamen', 'shenzhen'],
    relatedProductSlugs: ['solar-renewable', 'auto-parts', 'technology'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل نينغدي التجاري | عاصمة بطاريات CATL والطاقة الشمسية', en: 'Ningde Sourcing Guide | CATL EV Batteries & Solar Storage' },
      description: { ar: 'دليل الاستيراد من نينغدي: مصانع بطاريات CATL للسيارات الكهربائية وأنظمة تخزين الطاقة.', en: 'Ningde guide: CATL EV battery headquarters, solar storage packs & energy tech.' }
    }
  },

  {
    id: 'cangzhou',
    slug: 'cangzhou',
    name: { ar: 'تسانغتشو (عاصمة توصيلات الأنابيب وآلات التغليف)', en: 'Cangzhou', zh: '沧州' },
    province: { ar: 'هيبي', en: 'Hebei' },
    region: 'North China / Hebei',
    tier: 'tier-3',
    commercialImportanceScore: 87,
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    description: {
      ar: 'عاصمة أنابيب الصلب وتوصيلات المواسير (Pipe Fittings) وآلات التغليف والتعبئة والتغليف في شمال الصين.',
      en: 'China Steel Pipe Fittings & Packaging Machinery Capital in Hebei province near Tianjin port.'
    },
    keyIndustries: ['machinery', 'hardware-tools', 'building-materials'],
    primaryProducts: {
      ar: ['توصيلات ومحابس المواسير والصلب', 'آلات التعبئة والتغليف', 'أكواب ومصنعات الزجاج'],
      en: ['Steel Pipe Fittings & Flanges', 'Packaging & Bottling Machines', 'Glassware']
    },
    bestFor: ['Importer', 'Contractor', 'Industrial Buyer'],
    districts: [
      {
        id: 'yanshan-pipe-fitting',
        cityId: 'cangzhou',
        name: { ar: 'محافظة يانشان للأنابيب (Yanshan)', en: 'Yanshan Steel Pipe Fittings Hub' },
        activityType: { ar: 'عاصمة مصانع المحابس وتوصيلات أنابيب الصلب بالصين', en: 'China Steel Flange & Pipe Fitting Base' },
        mainProducts: ['توصيلات مواسير', 'فلنجات صلب', 'محابس صناعية'],
        tradeFocus: 'Manufacturing',
        suitableForImporter: true,
        suitableForBusinessTravel: true
      }
    ],
    wholesaleMarkets: [
      {
        id: 'cangzhou-pipe-fittings-market',
        cityId: 'cangzhou',
        name: { ar: 'سوق تسانغتشو الدولي للأنابيب والمحابس', en: 'Cangzhou Steel Pipe & Fittings Market', zh: '沧州管道装备城' },
        type: 'Wholesale',
        category: 'Building Materials & Hardware',
        description: {
          ar: 'مركز المعارض والجملة للمحابس وأنابيب الصلب والفلنجات بالمشاريع.',
          en: 'Industrial wholesale plaza for steel pipes, flanges, and high-pressure fittings.'
        },
        address: { ar: 'محافظة يانشان، تسانغتشو، هيبي', en: 'Yanshan County, Cangzhou' },
        moqLevel: 'Medium'
      }
    ],
    industrialZones: [
      {
        id: 'yanshan-flange-steel-park',
        cityId: 'cangzhou',
        name: { ar: 'المنطقة الصناعية لسباكة وتشكيل الصلب بـ يانشان', en: 'Yanshan Steel Pipe & Flange Manufacturing Base' },
        clusterSpecialization: { ar: 'تصنيع الفلنجات وتوصيلات الأنابيب الخرسانية والبترولية', en: 'Steel Pipe Forging & Flange Production' },
        factoryTypes: ['Steel Forging Mills'],
        keyProducts: ['فلنجات صلب', 'توصيلات مواسير'],
        specializationLevel: 'High'
      }
    ],
    sourcingProducts: [
      {
        id: 'cz-pipe-fittings-packaging',
        productName: { ar: 'توصيلات المواسير والفلنجات وآلات التغليف', en: 'Steel Pipe Fittings, Flanges & Packaging Machinery' },
        industryCategory: 'building-materials',
        whyThisCity: { ar: 'تنتج أكثر من 50% من توصيلات أنابيب الصلب والفلنجات للمشاريع بالصين.', en: 'China #1 manufacturing hub for steel pipe fittings & flanges.' },
        mainManufacturingArea: { ar: 'يانشان ومينغتشوان', en: 'Yanshan & Mengcun' },
        wholesaleAvailability: 'High',
        exportSuitability: 'High'
      }
    ],
    logistics: {
      nearestAirports: ['Tianjin Binhai Airport (TSN)', 'Beijing Daxing (PKX)'],
      seaPorts: ['Tianjin Port (ميناء تيانجين القريب جداً)'],
      highSpeedRailwayStations: ['Cangzhou West Station'],
      seaFreightSuitability: { ar: 'مباشرة عبر ميناء تيانجين الشمالي.', en: 'Direct via Tianjin Port.' },
      airFreightSuitability: { ar: 'عبر مطار تيانجين وبكين.', en: 'Via Tianjin & Beijing airports.' },
      primaryCargoRoutes: { ar: ['شحن أنابيب الصلب والآلات'], en: ['Direct steel & machinery shipping lines'] }
    },
    businessTravelGuide: {
      bestVisitMonths: ['أبريل', 'مايو', 'سبتمبر', 'أكتوبر'],
      suggestedStayDays: 2,
      weatherSummary: { ar: 'معتدل.', en: 'Cool climate.' },
      recommendedStayAreas: [{ ar: 'وسط تسانغتشو.', en: 'Cangzhou City Center.' }],
      localTransportAdvice: { ar: 'التاكسي.', en: 'Taxis.' },
      languageTips: { ar: 'المندرين.', en: 'Mandarin.' },
      essentialApps: ['WeChat', 'Alipay', 'Didi'],
      recommendedHotels: [
        {
          id: 'grand-hotel-cangzhou',
          name: { ar: 'فندق جراند تسانغتشو (Cangzhou International Hotel)', en: 'Cangzhou International Hotel' },
          category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
          area: { ar: 'وسط تسانغتشو، هيبي', en: 'Cangzhou City Center' },
          highlights: { ar: 'فندق الأعمال الرئيسي بالمدينة ومناسب لمستوردي الآلات والصلب', en: 'Premier business hotel serving industrial machinery & steel buyers' }
        }
      ],
      recommendedRestaurants: [
        {
          id: 'cangzhou-halal-rest',
          name: { ar: 'مطعم تسانغتشو الإسلامي الحلال', en: 'Cangzhou Muslim Halal Restaurant' },
          cuisineType: { ar: 'مأكولات حلال ولحم ضأن', en: 'Halal Mutton & Beef Dishes' },
          isHalal: true,
          address: { ar: 'وسط تسانغتشو', en: 'Cangzhou Center' },
          recommendedFor: { ar: 'وجبات حلال طازجة لمستوردي الصلب', en: 'Certified halal dining near central Cangzhou' }
        }
      ]
    },
    tradeFairs: [],
    relatedCitySlugs: ['tianjin', 'linyi', 'shijiazhuang'],
    relatedProductSlugs: ['machinery', 'hardware-tools', 'building-materials'],
    lastUpdated: '2026-08-25',
    seo: {
      title: { ar: 'دليل تسانغتشو التجاري | مصانع توصيلات الأنابيب وآلات التغليف', en: 'Cangzhou Sourcing Guide | Pipe Fittings & Packaging Machinery' },
      description: { ar: 'دليل الاستيراد من تسانغتشو: مصانع أنابيب الصلب، توصيلات المواسير، وآلات التعبئة والتغليف.', en: 'Cangzhou guide: Steel pipe fittings, flanges, packaging machinery & Tianjin port export.' }
    }
  }
];
