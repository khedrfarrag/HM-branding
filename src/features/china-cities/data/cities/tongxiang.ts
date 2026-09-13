import { ICity } from '../../types';

export const tongxiangCity: ICity = {
  id: 'tongxiang',
  slug: 'tongxiang',
  name: {
    ar: 'تونغشيانغ - بويوان (عاصمة التريكو وكنزات الصوف والكشمير وألياف الفايبر جلاس الأولى عالمياً)',
    en: 'Tongxiang - Puyuan (Zhejiang)',
    zh: '桐乡 (濮院)'
  },
  province: { ar: 'تشيجيانغ', en: 'Zhejiang', zh: '浙江省' },
  region: 'Yangtze River Delta',
  tier: 'tier-3',
  commercialImportanceScore: 91,
  heroImage: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=80',
  description: {
    ar: 'عاصمة صناعة التريكو وكنزات الصوف والكشمير الأولى في العالم؛ تضم بلدة بويوان (濮院) أضخم سوق لتجارة الملابس المحبوكة (Knitwear) في آسيا بأكثر من 15 مجمعاً تجارياً و10,000 معرضاً توفر أكثر من 70% من إجمالي كنزات وبلوفرات الصوف في الصين. كما تحتضن تونغشيانغ مقر شركة جوشي الصينية (China Jushi - 中国巨石) أكبر منتج لألياف الزجاج (Fiberglass) في العالم، وبلدة تشونغفو (崇福) أكبر عاصمة لمعالجة الفراء والجلود الطبيعية في الصين، وعمالقة البوليستر العالميين (Tongkun Group).',
    en: 'World foremost knitwear and cashmere sweater manufacturing capital located in Jiaxing, Zhejiang. Tongxiang Puyuan town (濮院) hosts Asia largest wholesale cluster for knitted apparel, producing over 70% of China woolen sweaters and knit garments. The city is also home to China Jushi (world largest fiberglass composites producer), Chongfu town (China premier fur and leather garment capital), and global synthetic polyester filament titans Tongkun and Xinfengming.'
  },
  keyIndustries: [
    'knitwear-woolen-sweaters',
    'cashmere-coats-cardigans',
    'fiberglass-composites',
    'polyester-chemical-fibers',
    'fur-leather-garments',
    'smart-fashion-textiles'
  ],
  primaryProducts: {
    ar: [
      'كنزات وبلوفرات التريكو الصوفية للرجال والنساء والأطفال (Puyuan Sweaters)',
      'معاطف وسترات الكشمير الفاخرة والأوشحة المحبوكة (Cashmere & Wool Coats)',
      'ألياف الزجاج المقوى (Fiberglass & Roving) لقطاعات الطاقة والسيارات (Jushi)',
      'خيوط وألياف البوليستر الصناعية (POY, DTY, FDY) من تونغكون',
      'معاطف وجواكت الفراء والجلود الطبيعية (Chongfu Fur)',
      'الأقمشة المحبوكة عالية المرونة والأزياء الجاهزة'
    ],
    en: [
      'Men, Women & Children Woolen & Knitted Sweaters & Cardigans (Puyuan)',
      'Premium 100% Cashmere Overcoats, Double-Faced Wool Coats & Scarves',
      'High-Performance Fiberglass Roving, Chopped Strands & Fabrics (Jushi HQ)',
      'Industrial Polyester Filament Yarn (POY, DTY, FDY - Tongkun Group)',
      'Genuine Fur Coats, Shearling Jackets & Leather Outerwear (Chongfu Base)',
      'Circular Knitwear Fabrics, Ribbed Textiles & Autumn/Winter Fashion'
    ]
  },
  bestFor: [
    'Knitwear & Winter Sweaters Bulk Importers',
    'Cashmere Overcoat & Luxury Wool Retailers',
    'Apparel Brands Seeking OEM/ODM Knitwear Factories',
    'Fiberglass & Composite Industrial Material Wholesalers',
    'Fur & Genuine Leather Outerwear Buyers'
  ],
  districts: [
    {
      id: 'puyuan-knitwear-fashion-town',
      cityId: 'tongxiang',
      name: {
        ar: 'بلدة بويوان (عاصمة التريكو والأزياء المحبوكة في الصين)',
        en: 'Puyuan Knitwear Town (China Sweater Capital)',
        zh: '濮院针织时尚小镇'
      },
      activityType: {
        ar: 'أضخم تجمع عالمي لصناعة وتصميم وتجارة ملابس التريكو والبلوفرات وكنزات الصوف والسترات الشتوية والمعاطف المزدوجة',
        en: 'World largest production and wholesale hub for knitted sweaters, cardigans, and cashmere apparel.'
      },
      mainProducts: [
        'كنزات صوف وتريكو كمبيوتر أوتوماتيك',
        'كارديجان وسترات شتوية حريمي ورجالي',
        'معاطف كشمير وصوف دبل فيس'
      ],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Tongxiang Railway Station (桐乡站)'
    },
    {
      id: 'chongfu-fur-leather-town',
      cityId: 'tongxiang',
      name: {
        ar: 'بلدة تشونغفو (عاصمة الفراء والجلود في الصين)',
        en: 'Chongfu Fur & Leather Capital',
        zh: '崇福皮草名镇'
      },
      activityType: {
        ar: 'أكبر مركز في الصين لدباغة وتصنيع وتجارة معاطف الفراء الطبيعي وجواكت الجلد الطبيعي والصوف المقصوص',
        en: 'China premier center for genuine fur tanning, shearling, and luxury leather outerwear manufacturing.'
      },
      mainProducts: [
        'معاطف فراء المنك والثعلب والراكون',
        'جواكت جلد طبيعي وشيرلينغ',
        'ياقات وإكسسوارات الفراء الفاخرة'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Tongxiang Railway Station (桐乡站)'
    },
    {
      id: 'tongxiang-economic-and-composites-zone',
      cityId: 'tongxiang',
      name: {
        ar: 'منطقة تونغشيانغ الاقتصادية والتكنولوجية (قاعدة الفايبر جلاس والبوليستر)',
        en: 'Tongxiang Economic & Composites Tech Zone',
        zh: '桐乡经济开发区 (高新技术与新材料基地)'
      },
      activityType: {
        ar: 'المقر العالمي لشركة China Jushi عملاق ألياف الزجاج وشركات خيوط البوليستر والألياف الكيماوية',
        en: 'Global headquarters of China Jushi (fiberglass titan) and world-scale polyester filament yarn producers.'
      },
      mainProducts: [
        'ألياف فايبر جلاس ومواد مركبة متطورة',
        'خيوط بوليستر صناعي POY و DTY',
        'مكونات سيارات ومعدات صناعية'
      ],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    }
  ],
  wholesaleMarkets: [
    {
      id: 'puyuan-woolen-sweater-market-complex',
      cityId: 'tongxiang',
      name: {
        ar: 'مجمع أسواق بويوان لكنزات الصوف والتريكو (أكبر سوق تريكو في العالم)',
        en: 'Puyuan Woolen Sweater Market Mega Complex',
        zh: '濮院羊毛衫市场集群'
      },
      type: 'Wholesale',
      category: 'Knitwear & Winter Apparel',
      description: {
        ar: 'المصدر الرئيسي لجميع تجار الملابس الشتوية في العالم والشرق الأوسط وأوروبا؛ تمتاز بوجود آلاف المصانع التي تملك ماكينات Shima Seiki وStoll الألمانية لتنفيذ أرقى تصاميم التريكو وبأسعار جملة تنافسية لا تضاهى.',
        en: 'The prime global source for winter knitwear. Thousands of vendor showrooms backed by high-speed computerized Shima Seiki and Stoll flat knitting machines. Unbeatable factory-direct prices for OEM/ODM.'
      },
      address: {
        ar: 'شارع بويوان شيداي، بلدة بويوان، تونغشيانغ، تشيجيانغ',
        en: 'Puyuan Fashion Avenue, Puyuan Town, Tongxiang, Jiaxing, Zhejiang',
        zh: '浙江省嘉兴市桐乡市濮院镇工销路与时代大道'
      },
      nearestStation: 'Tongxiang High-Speed Rail Station (桐乡站) + Bus K284/K288',
      moqLevel: 'Medium'
    },
    {
      id: 'puyuan-world-trade-knitwear-center',
      cityId: 'tongxiang',
      name: {
        ar: 'مركز بويوان شيداي التجاري للتريكو الفاخر (世贸大厦)',
        en: 'Puyuan World Trade Center Knitwear Building',
        zh: '濮院世贸大厦针织博览城'
      },
      type: 'Factory Showroom',
      category: 'High-End Knitwear & Cashmere',
      description: {
        ar: 'مخصص للبراندات المتوسطة والفاخرة والتصاميم المبتكرة مع عينات جاهزة للاختبار، وهو المكان المفضل للعلامات التجارية الراغبة في تصنيع منتجات كشمير عالية الجودة.',
        en: 'Dedicated to mid-to-high-end fashion labels, original knitwear design studios, and luxury cashmere sampling.'
      },
      address: {
        ar: 'تقاطع طريق هونغ تشي مع شارع شيداي، بويوان، تونغشيانغ',
        en: 'Intersection of Hongqi Rd & Shidai Ave, Puyuan, Tongxiang, Zhejiang',
        zh: '浙江省桐乡市濮院镇红旗路世贸大厦'
      },
      nearestStation: 'Tongxiang Station + 20 mins Taxi',
      moqLevel: 'Flexible'
    },
    {
      id: 'chongfu-fur-world-center',
      cityId: 'tongxiang',
      name: {
        ar: 'مدينة تشونغفو للفراء والجلود الطبيعية (عاصمة الفرو الصينية)',
        en: 'Chongfu Fur World International Market',
        zh: '崇福皮草大世界'
      },
      type: 'Wholesale',
      category: 'Fur, Shearling & Leather Coats',
      description: {
        ar: 'أكبر سوق لتجارة الجلود والفراء الطبيعي في جنوب وشرق الصين؛ يوفر منتجات فاخرة بمعايير عالمية للمتاجر الكبرى ومستوردي الملابس الفاخرة لروسيا والشرق الأوسط وأوروبا.',
        en: 'The largest natural fur and luxury leather outerwear wholesale destination in Southern China, supplying department stores globally.'
      },
      address: {
        ar: 'شارع تونغده، بلدة تشونغفو، تونغشيانغ، تشيجيانغ',
        en: 'Tongde Road, Chongfu Town, Tongxiang, Zhejiang',
        zh: '浙江省桐乡市崇福镇同德路皮草大世界'
      },
      nearestStation: 'Tongxiang High-Speed Station + 15 mins Taxi (7 km)',
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'puyuan-modern-fashion-industrial-zone',
      cityId: 'tongxiang',
      name: {
        ar: 'المنطقة الصناعية لملابس التريكو الحديثة في بويوان',
        en: 'Puyuan Modern Knitwear & Fashion Industrial Park',
        zh: '濮院毛衫时尚产业园区'
      },
      clusterSpecialization: {
        ar: 'تضم آلاف المصانع المزودة بماكينات حياكة أوتوماتيكية كمبيوترية تعمل على مدار الساعة بقدرة إنتاجية تتجاوز 700 مليون قطعة ملابس سنوياً',
        en: 'Equipped with hundreds of thousands of computerized flat knitting units producing over 700 million knitwear garments annually.'
      },
      factoryTypes: [
        'Computerized Shima Seiki & Stoll Flat Knitting Mills',
        'Automated Linking, Stitching & Garment Assembly Lines',
        'Textile Washing, Shrinking & Steam Pressing Workshops'
      ],
      keyProducts: [
        'بلوفرات وسترات صوف وتريكو رجالي وحريمي',
        'معاطف كشمير مزدوجة الحياكة',
        'أوشحة وقبعات صوفية محبوكة'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'jushi-fiberglass-materials-base',
      cityId: 'tongxiang',
      name: {
        ar: 'مجمع جوشي العالمي للألياف الزجاجية والمواد المركبة (China Jushi HQ)',
        en: 'China Jushi Fiberglass Composites Global Production Base',
        zh: '中国巨石新材料智能制造基地 (桐乡经济技术开发区)'
      },
      clusterSpecialization: {
        ar: 'المقر الرئيسي والمصنع الأكبر لشركة جوشي الموردة للمواد المركبة لألواح طاقة الرياح والسيارات والطيران في العالم بأكثر من مليوني طن سنوياً',
        en: 'The world headquarters of China Jushi, supplying industrial fiberglass to wind turbine blades, automotive, and aerospace industries worldwide.'
      },
      factoryTypes: [
        'Continuous Direct Melt Fiberglass Furnaces',
        'Fiber Roving & Chopped Strand Production Plants',
        'Advanced Composite Research & Testing Labs'
      ],
      keyProducts: [
        'ألياف فايبر جلاس لصناعة طاقة الرياح',
        'أقمشة زجاجية مقواة لصناعة هياكل السيارات',
        'مركبات بوليمرية مقاومة للتآكل'
      ],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'tx-knitwear-sweaters',
      productName: {
        ar: 'كنزات وبلوفرات التريكو والصوف (Puyuan Knit Sweaters)',
        en: 'Computerized Knitted Sweaters, Cardigans & Pullovers'
      },
      industryCategory: 'knitwear-woolen-sweaters',
      whyThisCity: {
        ar: 'بويوان في تونغشيانغ هي عاصمة التريكو الأولى عالمياً، تصنع أكثر من 70% من كنزات وبلوفرات الصوف في الصين مع قدرات تصنيع OEM فورية وأسعار جملة لا تقارن.',
        en: 'Puyuan produces over 70% of China knitted woolen sweaters with cutting-edge German and Japanese computerized knitting looms and unbeatable volume pricing.'
      },
      mainManufacturingArea: {
        ar: 'بلدة بويوان للأزياء، تونغشيانغ',
        en: 'Puyuan Knitwear Town, Tongxiang'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'tx-cashmere-overcoats',
      productName: {
        ar: 'معاطف الكشمير والصوف الفاخر دبل فيس (Double-Faced Cashmere Coats)',
        en: 'Luxury Double-Faced Cashmere & Wool Overcoats'
      },
      industryCategory: 'cashmere-coats-cardigans',
      whyThisCity: {
        ar: 'مركز التميز الصيني في حياكة معاطف الكشمير الفاخرة يدوياً وتطريز أطرافها بدقة، وتوفيرها للعلامات التجارية العالمية بأسعار المصنع المباشرة.',
        en: 'China premier center for hand-stitched double-faced cashmere overcoats, providing private-label luxury outerwear at direct factory prices.'
      },
      mainManufacturingArea: {
        ar: 'مركز بويوان شيداي التجاري، تونغشيانغ',
        en: 'Puyuan Fashion Design District, Tongxiang'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'tx-fiberglass-composites',
      productName: {
        ar: 'ألياف الزجاج المقوى والمواد المركبة (China Jushi Fiberglass)',
        en: 'Industrial Fiberglass Roving, Mats & Composite Resins'
      },
      industryCategory: 'fiberglass-composites',
      whyThisCity: {
        ar: 'تونغشيانغ هي المقر العالمي لشركة تشاينا جوشي (China Jushi) أكبر منتج لألياف الزجاج في العالم المعتمدة في مشاريع الطاقة والسيارات والبناء.',
        en: 'Tongxiang hosts the global headquarters of China Jushi, the undisputed world #1 producer of high-grade fiberglass composite materials.'
      },
      mainManufacturingArea: {
        ar: 'منطقة تونغشيانغ الاقتصادية والتكنولوجية',
        en: 'Tongxiang Economic Development Zone'
      },
      wholesaleAvailability: 'Direct Factory Only',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Hangzhou Xiaoshan International Airport (HGH) - 55 mins via highway',
      'Shanghai Hongqiao International Airport (SHA) - 40 mins via G-train'
    ],
    seaPorts: [
      'Jiaxing Inland Port Container Wharf',
      'Ningbo-Zhoushan Port (Direct Highway Container Feeder)',
      'Shanghai Yangshan Deepwater Container Port'
    ],
    highSpeedRailwayStations: [
      'Tongxiang Railway Station (桐乡站 - G-trains to Shanghai in 35 mins, Hangzhou in 18 mins)'
    ],
    seaFreightSuitability: {
      ar: 'مثالية وممتازة للغاية؛ شحن الحاويات يتم بسلاسة عبر موانئ نينغبو أو شنغهاي مع خدمات تخليص جمركي سريعة في جياشينغ.',
      en: 'Outstanding ocean freight logistics with rapid direct container trucking to Shanghai Yangshan or Ningbo-Zhoushan ports.'
    },
    airFreightSuitability: {
      ar: 'عالية جداً بفضل القرب الشديد من مطاري هانغتشو شياوشان وشنغهاي هونغكياو لشحن عينات التريكو والكشمير الفاخر جواً.',
      en: 'High-speed air freight access via Hangzhou Xiaoshan and Shanghai Hongqiao hubs for rapid express apparel sampling.'
    },
    primaryCargoRoutes: {
      ar: [
        'تونغشيانغ ← شاحنات النقل السريع ← ميناء نينغبو-تشوشان ← خطوط الشحن المباشرة لموانئ الشرق الأوسط والخليج',
        'تونغشيانغ ← قطارات الشحن السريع أو الشاحنات ← ميناء شنغهاي يانغشان ← موانئ أوروبا وأمريكا'
      ],
      en: [
        'Tongxiang -> Expressway Drayage -> Ningbo-Zhoushan Port -> Middle East / Red Sea / Europe',
        'Tongxiang -> Container Shuttle -> Shanghai Yangshan Port -> Global Container Terminals'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['March', 'April', 'August', 'September', 'October'],
    suggestedStayDays: 3,
    weatherSummary: {
      ar: 'مناخ معتدل رطب في منطقة دلتا اليانغتسي؛ الربيع والخريف هما أفضل مواسم الأعمال والتوريد لمعارض التريكو الشتوي.',
      en: 'Temperate Jiangnan climate. Autumn (August to October) is the prime sourcing window for winter knitwear collections.'
    },
    recommendedStayAreas: [
      {
        ar: 'منطقة بلدة بويوان للأزياء (بجوار أسواق التريكو ومجمع المعارض)',
        en: 'Puyuan Fashion Town area near wholesale sweater markets'
      },
      {
        ar: 'وسط مدينة تونغشيانغ بالقرب من محطة القطارات السريعة وشارع تشنشينغ التجاري',
        en: 'Central Tongxiang near High-Speed Railway Station and Zhenxing Road'
      }
    ],
    localTransportAdvice: {
      ar: 'التنقل سلس جداً عبر سيارات الأجرة وتطبيقات Didi؛ المسافة بين وسط تونغشيانغ وأسواق بويوان تستغرق 15-20 دقيقة بالسيارة.',
      en: 'Getting around is effortless via Didi and local taxis. Puyuan knitwear markets are 15-20 minutes drive from central Tongxiang.'
    },
    languageTips: {
      ar: 'يتحدث معظم التجار اللغة الصينية الماندرين مع القليل من الإنجليزية؛ يفضل الاستعانة بمترجم تجاري متخصص لفحص خامات الصوف وتفاصيل الأوزان (Grams/Gauge).',
      en: 'Mandarin is predominantly used. A bilingual sourcing agent is recommended when discussing technical knitting gauges and fabric weights.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'tongxiang-zhenshi-grand-hotel',
        name: {
          ar: 'فندق تونغشيانغ تشنشي جراند (Zhenshi Grand Hotel 5 Stars)',
          en: 'Zhenshi Grand Hotel Tongxiang',
          zh: '桐乡振石大酒店'
        },
        starRating: 5,
        category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star Business' },
        area: {
          ar: 'وسط مدينة تونغشيانغ، شارع تشنشي',
          en: 'Tongxiang Commercial Core, Zhenshi Road'
        },
        address: {
          ar: 'رقم 199 طريق تشنشي، تونغشيانغ، تشيجيانغ',
          en: 'No. 199 Zhenshi Road, Tongxiang, Zhejiang',
          zh: '浙江省桐乡市振兴中路与振石路交汇处'
        },
        highlights: {
          ar: 'أفخم فنادق المدينة لرجال الأعمال، مرافق مؤتمرات متطورة وقريب من محطة القطارات ومناطق المصانع',
          en: 'Premier luxury hotel with world-class amenities, close to high-speed rail and corporate industrial zones.'
        }
      },
      {
        id: 'puyuan-meishan-resort-hotel',
        name: {
          ar: 'فندق ومنتجع بويوان ميشان فاشن (Puyuan Fashion Resort)',
          en: 'Puyuan Fashion Resort Hotel',
          zh: '濮院梅尚度假酒店 (濮院时尚古镇)'
        },
        starRating: 5,
        category: { ar: 'منتجع فندقي وتراثي فاخر', en: 'Luxury Heritage & Fashion Resort' },
        area: {
          ar: 'بلدة بويوان القديمة للأزياء',
          en: 'Puyuan Ancient Fashion Town'
        },
        address: {
          ar: 'بلدة بويوان القديمة للأزياء، تونغشيانغ، تشيجيانغ',
          en: 'Puyuan Ancient Fashion Town, Puyuan, Tongxiang, Zhejiang',
          zh: '浙江省嘉兴市桐乡市濮院镇梅泾路'
        },
        highlights: {
          ar: 'يقع مباشرة بجوار أسواق التريكو ومعارض الأزياء في قلب بلدة بويوان المائية التراثية الفاخرة',
          en: 'Directly adjacent to the knitwear mega showrooms in the heart of the newly renovated scenic canal town.'
        }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'tongxiang-xibei-halal-restaurant',
        name: {
          ar: 'مطعم شمال غرب شينجيانغ الحلال (Tongxiang Xinjiang Halal Restaurant)',
          en: 'Tongxiang Xinjiang Lanzhou Halal Restaurant',
          zh: '桐乡清真·西北伊香牛肉面 (振兴东路店)'
        },
        cuisineType: {
          ar: 'مأكولات إسلامية حلال من شينجيانغ وشمال غرب الصين، لحم ضأن مشوي ونودلز طازجة',
          en: 'Authentic Uyghur & Northwest Lanzhou Halal Hand-Pulled Noodles & Lamb Skewers'
        },
        isHalal: true,
        address: {
          ar: 'شارع تشنشينغ الشرقي بجوار المركز التجاري، تونغشيانغ',
          en: 'Zhenxing East Road near Commercial Center, Tongxiang, Zhejiang',
          zh: '浙江省桐乡市振兴东路与世纪大道交叉口'
        },
        recommendedFor: {
          ar: 'مشاوي لحم الضأن الحلال الطازجة ووجبات الغداء السريعة لرجال الأعمال المسلمين',
          en: 'Fresh halal roast mutton skewers and hearty noodle bowls during business trips.'
        }
      },
      {
        id: 'puyuan-market-halal-beef-restaurant',
        name: {
          ar: 'مطعم بويوان الإسلامي للحوم الحلال والوجبات السريعة',
          en: 'Puyuan Knitwear Market Hui Halal Restaurant',
          zh: '濮院清真回民清香斋 (工销路濮院市场店)'
        },
        cuisineType: {
          ar: 'أطباق لحم البقر والضأن الحلال، أرز مقلي باللحم، وزلابية إسلامية',
          en: 'Traditional Halal Beef Dishes, Lamb Dumplings & Noodle Soups'
        },
        isHalal: true,
        address: {
          ar: 'طريق غونغشياو بالقرب من بوابة سوق بويوان للتريكو، بويوان، تونغشيانغ',
          en: 'Gongxiao Road near Puyuan Woolen Sweater Market Gate, Puyuan, Tongxiang',
          zh: '浙江省桐乡市濮院镇工销路濮院羊毛衫市场南门旁'
        },
        recommendedFor: {
          ar: 'غداء حلال موثوق ومريح بجوار أسواق التريكو مباشرة في بويوان',
          en: 'Convenient certified halal meals directly adjacent to the sweater wholesale pavilions.'
        }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'puyuan-international-knitwear-fair',
      name: {
        ar: 'معرض بويوان الدولي السنوي لكنزات الصوف والتريكو وموضة الخريف والشتاء',
        en: 'China Puyuan International Knitwear & Fashion Expo',
        zh: '中国·濮院国际针织时尚博览会 / 濮院毛衫展'
      },
      industry: 'Knitwear, Cashmere, Sweaters & Computerized Knitting Looms',
      venue: {
        ar: 'مركز بويوان للمؤتمرات والمعارض، تونغشيانغ، تشيجيانغ',
        en: 'Puyuan Fashion Center & International Convention Center, Tongxiang',
        zh: '桐乡市濮院国际会议中心'
      },
      occurrence: {
        ar: 'مرتان سنوياً (سبتمبر لخريف/شتاء، وأبريل لربيع/صيف)',
        en: 'Biannual (Autumn edition in September/October, Spring in April)'
      },
      bestFor: [
        'Knitwear Importers',
        'Fashion Apparel Brands',
        'Sweater Wholesalers',
        'Department Store Sourcing Teams'
      ]
    },
    {
      id: 'chongfu-international-fur-leather-expo',
      name: {
        ar: 'معرض تشونغفو الدولي للفراء والجلود والملابس الشتوية',
        en: 'China Chongfu International Fur & Leather Garment Expo',
        zh: '中国·崇福国际皮草博览会'
      },
      industry: 'Fur Outerwear, Shearling, Tanned Leather & Winter Outerwear',
      venue: {
        ar: 'مركز تشونغفو الدولي للمعارض، تونغشيانغ، تشيجيانغ',
        en: 'Chongfu International Fur Expo Center, Tongxiang, Zhejiang',
        zh: '桐乡市崇福国际博览中心'
      },
      occurrence: {
        ar: 'سنوياً في أكتوبر / نوفمبر',
        en: 'Annual (Late October / November)'
      },
      bestFor: [
        'Fur & Shearling Retailers',
        'Luxury Outerwear Importers',
        'Leather Garment Wholesalers'
      ]
    }
  ],
  relatedCitySlugs: ['hangzhou', 'shanghai', 'shaoxing', 'haining', 'suzhou', 'cixi'],
  relatedProductSlugs: [
    'knitwear-woolen-sweaters',
    'cashmere-coats-cardigans',
    'fiberglass-composites',
    'apparel',
    'textiles'
  ],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل تونغشيانغ وبويوان التجاري | عاصمة كنزات الصوف والتريكو وألياف الزجاج',
      en: 'Tongxiang Puyuan Sourcing Guide | Knitwear Capital, Cashmere Sweaters & Fiberglass'
    },
    description: {
      ar: 'دليل شامل للاستيراد من بويوان وتونغشيانغ: أسواق كنزات الصوف والتريكو بالجملة، مصانع ألياف الزجاج جوشي، فنادق ومطاعم حلال، وتفاصيل الشحن واللوجستيات.',
      en: 'Comprehensive sourcing guide to Tongxiang and Puyuan: World Knitwear Capital, Puyuan sweater wholesale markets, China Jushi fiberglass, logistics, and halal dining.'
    }
  }
};
