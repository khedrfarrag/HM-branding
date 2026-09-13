import { ICity } from '../../types';

export const taizhouCity: ICity = {
  id: 'taizhou',
  slug: 'taizhou',
  name: {
    ar: 'تايتشو - تشيجيانغ (عاصمة القوالب الدقيقة والأدوات البلاستيكية ومضخات المياه)',
    en: 'Taizhou (Zhejiang)',
    zh: '台州'
  },
  province: { ar: 'تشيجيانغ', en: 'Zhejiang' },
  region: 'East China / Southeast Coast',
  tier: 'tier-3',
  commercialImportanceScore: 89,
  heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  description: {
    ar: 'عاصمة القوالب والأدوات البلاستيكية ومضخات المياه الأولى في الصين؛ تشتهر مقاطعة هوانغيان (黄岩) بلقب "عاصمة قوالب البلاستيك في الصين" (China Mould Capital) وقاعدة تصنيع المستلزمات البلاستيكية المنزلية، وتعد ونلينغ (温岭) عاصمة صناعة مضخات المياه الغاطسة والسطحية الأولى عالمياً، بينما تحتضن جياوجيانغ مقر شركة جاك العالمية (Jack Sewing Machine) أكبر مصنع لماكينات الخياطة الصناعية في العالم.',
    en: 'China undisputed capital for precision injection molds, plastic housewares, and small water pumps in coastal Zhejiang. Huangyan is world-famous as the "Mould Capital of China" and plastic consumer goods hub; Wenling produces over half of the nation submersible and clean-water pumps, while Jiaojiang hosts Jack Sewing Machine—the world leading manufacturer of industrial apparel sewing machinery.'
  },
  keyIndustries: [
    'precision-molds-tooling',
    'plastic-houseware-storage',
    'water-pumps-motors',
    'industrial-sewing-machines',
    'plumbing-valves-sanitary',
    'automotive-parts'
  ],
  primaryProducts: {
    ar: [
      'قوالب حقن البلاستيك الدقيقة للسيارات والأجهزة (Huangyan Moulds)',
      'الأدوات والعلب البلاستيكية المنزلية وحافظات الطعام (Plastic Houseware)',
      'مضخات المياه الغاطسة والسطحية ومضخات الآبار (Wenling Pumps)',
      'ماكينات الخياطة الصناعية وماكينات التطريز الآلي (Jack Machine)',
      'محابس النحاس وخلاطات ومستلزمات السباكة (Yuhuan Valves)',
      'قطع غيار ومكونات محركات الدراجات النارية والسيارات'
    ],
    en: [
      'Precision Plastic Injection Molds for Automotive & Home Appliances',
      'Plastic Storage Bins, Food Containers, Basin & Furniture (Huangyan)',
      'Submersible Deep-Well Pumps, Booster Pumps & Agricultural Pumps',
      'Industrial Computerized Sewing Machines & Overlockers (Jack HQ)',
      'Brass Plumbing Valves, Faucets & Pipe Fittings (Yuhuan Cluster)',
      'Automotive Chassis Components & Motorcycle Engine Parts'
    ]
  },
  bestFor: [
    'Plastic Injection Mold Importers',
    'Plastic Homeware & Storage Product Buyers',
    'Agricultural & Deep-Well Water Pump Wholesalers',
    'Garment Factory Equipment & Sewing Machine Dealers',
    'Plumbing Valve & Sanitary Ware Contractors'
  ],
  districts: [
    {
      id: 'huangyan-mould-and-plastic-capital',
      cityId: 'taizhou',
      name: {
        ar: 'حي هوانغيان (عاصمة القوالب والمنتجات البلاستيكية في الصين)',
        en: 'Huangyan District (China Mould & Plastic Capital)',
        zh: '黄岩区 (中国模具之都)'
      },
      activityType: {
        ar: 'أضخم مجمع في العالم لصناعة قوالب حقن البلاستيك (قوالب أجزاء السيارات، الكراسي، الصناديق) ومصانع الأدوات البلاستيكية المنزلية',
        en: 'World foremost cluster for precision plastic injection molds (automotive, furniture, crates) and daily plastic houseware.'
      },
      mainProducts: [
        'قوالب حقن فولاذية دقيقة للسيارات',
        'صناديق وحافظات طعام وكراسي بلاستيكية',
        'ماكينات حقن ونفخ البلاستيك'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'wenling-water-pump-shoe-capital',
      cityId: 'taizhou',
      name: {
        ar: 'مدينة ونلينغ (عاصمة مضخات المياه والأحذية الاقتصادية)',
        en: 'Wenling City (China Small Water Pump Capital)',
        zh: '温岭市 (中国小型水泵之乡)'
      },
      activityType: {
        ar: 'تنتج أكثر من 50% من مضخات المياه السطحية والغاطسة بالصين، وأكبر قاعدة لإنتاج الأحذية الرياضية والكاجوال الاقتصادية للتصدير الضخم',
        en: 'Produces over half of China clean-water and submersible pumps, alongside a massive manufacturing base for budget casual footwear.'
      },
      mainProducts: [
        'مضخات مياه غاطسة للآبار',
        'مضخات ضغط منزلي وزراعي',
        'أحذية كاجوال وأحذية رياضية اقتصادية'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'jiaojiang-sewing-machine-core',
      cityId: 'taizhou',
      name: {
        ar: 'حي جياوجيانغ (عاصمة ماكينات الخياطة الصناعية - Jack Sewing)',
        en: 'Jiaojiang District (Industrial Sewing Machine Capital)',
        zh: '椒江区 (缝纫机产业群)'
      },
      activityType: {
        ar: 'مقر مجموعة جاك العالمية ومصانع ماكينات الخياطة الصناعية، ماكينات الأوفرلوك والقص الآلي لمصانع الملابس الجاهزة',
        en: 'Headquarters of Jack Sewing Machine and leading manufacturers of computerized apparel stitching and cutting equipment.'
      },
      mainProducts: [
        'ماكينات خياطة صناعية محوسبة',
        'ماكينات أوفرلوك وتطريز آلي',
        'طاولات قص أقمشة بالليزر'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'yuhuan-plumbing-valve-hub',
      cityId: 'taizhou',
      name: {
        ar: 'مدينة يوهوان (عاصمة محابس السباكة وصمامات النحاس)',
        en: 'Yuhuan City (China Valve & Sanitary Capital)',
        zh: '玉环市 (中国阀门之都)'
      },
      activityType: {
        ar: 'تنتج وتصدر أكثر من نصف محابس المياه وصمامات الغاز النحاسية وخلاطات المطابخ والحمامات في الصين',
        en: 'Produces over half of China brass plumbing valves, heating manifold systems, gas shutoff valves, and sanitary fixtures.'
      },
      mainProducts: [
        'محابس كروية وصمامات نحاسية',
        'خلاطات مياه واكسسوارات حمامات',
        'وصلات وتوصيلات أنابيب سباكة'
      ],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    }
  ],
  wholesaleMarkets: [
    {
      id: 'huangyan-mould-and-plastic-expo-city',
      cityId: 'taizhou',
      name: {
        ar: 'مدينة هوانغيان الدولية لتجارة القوالب والمنتجات البلاستيكية',
        en: 'Huangyan International Mould & Plastic Commodity Expo City',
        zh: '黄岩模具博览城 / 中国塑料城'
      },
      type: 'Wholesale',
      category: 'Hardware & Tools',
      description: {
        ar: 'السوق والمعرض المركزي الأكبر لعرض قوالب البلاستيك المصنوعة من الصلب، ماكينات تشكيل اللدائن، ومستلزمات الأدوات المنزلية البلاستيكية للتصدير.',
        en: 'World leading trading expo center for steel injection molds, plastic extrusion machines, homeware housewares, and polymer resins.'
      },
      address: {
        ar: 'طريق هوانغيان الشمالي، حي هوانغيان، تايتشو',
        en: 'Beicheng Avenue, Huangyan District, Taizhou',
        zh: '台州市黄岩区北城模具新城'
      },
      moqLevel: 'Low'
    },
    {
      id: 'wenling-international-pump-market',
      cityId: 'taizhou',
      name: {
        ar: 'سوق ونلينغ الدولي لمضخات المياه والمحركات والمعدات الزراعية',
        en: 'Wenling International Water Pump & Motor Wholesale Market',
        zh: '温岭国际水泵机电批发城'
      },
      type: 'Wholesale',
      category: 'Industrial Machinery',
      description: {
        ar: 'أضخم مركز تجاري في الصين متخصص حصرياً في مضخات المياه الغاطسة للآبار، مضخات التبريد، ومحركات الكهرباء بقدرات من ربع حصان حتى 100 حصان.',
        en: 'Central China physical wholesale exchange for deep-well submersible pumps, sewage pumps, peripheral pumps, and agricultural motors.'
      },
      address: {
        ar: 'شارع دا شي، مدينة ونلينغ، تايتشو',
        en: 'Daxi Town Pump Commercial Belt, Wenling, Taizhou',
        zh: '台州温岭市大溪镇水泵产业交易中心'
      },
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'huangyan-precision-mould-industrial-park',
      cityId: 'taizhou',
      name: {
        ar: 'المجمع الصناعي الذكي لتصنيع القوالب الدقيقة بـ هوانغيان',
        en: 'Huangyan Smart Precision Mould Industrial Cluster Base',
        zh: '黄岩智能模具小镇产业基地'
      },
      clusterSpecialization: {
        ar: 'يضم أكثر من 2000 منشأة لصناعة القوالب الميكانيكية باستخدام ماكينات CNC ومكائن الشرارة (EDM) لإنتاج قوالب هياكل السيارات والأجهزة المنزلية',
        en: 'Concentrates over 2,000 mold making enterprises equipped with 5-axis CNC machining centers and EDM machines for automotive and consumer electronics tooling.'
      },
      factoryTypes: [
        '5-Axis High-Speed CNC Machining Shops',
        'Wire EDM & Spark Erosion Facilities',
        'Mold Trial Injection Testing Centers'
      ],
      keyProducts: [
        'قوالب مصدات وألواح السيارات',
        'قوالب غسالات وثلاجات ومكيفات',
        'قوالب علب حفظ الطعام والزجاجات'
      ],
      specializationLevel: 'High'
    },
    {
      id: 'daxi-water-pump-industrial-cluster',
      cityId: 'taizhou',
      name: {
        ar: 'القاعدة الصناعية الوطنية لمضخات المياه ببلدة دا شي (ونلينغ)',
        en: 'Daxi National Water Pump Manufacturing Industrial Cluster',
        zh: '温岭大溪水泵国家级特色产业园'
      },
      clusterSpecialization: {
        ar: 'تنتج أكثر من 30 مليون مضخة مياه سنوياً مع تصنيع داخلي بنسبة 100% للأسلاك النحاسية، العوازل، المكثفات، والمضخات النفاثة والغاطسة',
        en: 'Produces over 30 million water pumps annually with fully localized supply chains for copper windings, impellers, and stainless steel pump bodies.'
      },
      factoryTypes: [
        'Automated Motor Winding & Varnishing Lines',
        'Pump Impeller Stamping & Balancing Workshops',
        'Hydrostatic Pressure & Flow Test Benches'
      ],
      keyProducts: [
        'مضخات غاطسة للآبار الارتوازية',
        'مضخات مياه شمسية بالتيار المستمر (Solar DC Pumps)',
        'مضخات مياه الصرف المعالجة'
      ],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'tz-plastic-injection-moulds',
      productName: {
        ar: 'قوالب حقن البلاستيك الدقيقة (Plastic Injection Moulds)',
        en: 'Precision Steel Plastic Injection Molds & Tooling'
      },
      industryCategory: 'precision-molds-tooling',
      whyThisCity: {
        ar: 'هوانغيان بتايتشو هي عاصمة القوالب العالمية؛ تقدم أفضل فولاذ صلب معالج حرارياً بأسعار تنافسية تمثل ثلث تكلفة القوالب الأوروبية مع تجارب عينات فورية (T1 Trial).',
        en: 'Huangyan is the world mould capital, delivering precision-hardened steel tooling at a third of European costs with rapid T0/T1 sampling.'
      },
      mainManufacturingArea: {
        ar: 'حي هوانغيان، تايتشو',
        en: 'Huangyan District Mould New Town'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'tz-water-pumps-and-motors',
      productName: {
        ar: 'مضخات المياه الغاطسة والسطحية (Submersible & Surface Water Pumps)',
        en: 'Deep-Well Submersible, Jet & Solar Agricultural Water Pumps'
      },
      industryCategory: 'water-pumps-motors',
      whyThisCity: {
        ar: 'ونلينغ بتايتشو تصنع نصف مضخات مياه الصين وتلبي جميع متطلبات الآبار الارتوازية والري الزراعي ومضخات الطاقة الشمسية بالدول العربية.',
        en: 'Wenling manufactures half of China water pumps, catering extensively to agricultural irrigation, deep-well extraction, and solar DC pumping systems across the Arab world.'
      },
      mainManufacturingArea: {
        ar: 'بلدة دا شي، ونلينغ',
        en: 'Daxi Town, Wenling City'
      },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  tradeFairs: [
    {
      id: 'china-taizhou-plastic-expo',
      name: {
        ar: 'معرض الصين (تايتشو) الدولي للمنتجات والقوالب البلاستيكية (China Plastic Expo)',
        en: 'China (Taizhou) International Plastics & Mould Exhibition',
        zh: '中国·台州塑料与模具博览会'
      },
      industry: 'Plastic Houseware, Injection Molds, Extrusion Machinery & Raw Materials',
      venue: {
        ar: 'مركز تايتشو الدولي للمعارض، جياوجيانغ',
        en: 'Taizhou International Exhibition Center, Jiaojiang District, Taizhou',
        zh: '台州国际博览中心'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر أكتوبر',
        en: 'Annually in October'
      },
      bestFor: ['Plastic Ware Importers', 'Mould Procurement Engineers', 'Polymer Traders']
    },
    {
      id: 'china-wenling-pump-fair',
      name: {
        ar: 'معرض الصين (ونلينغ) الدولي لمضخات المياه والمحركات والكهرباء',
        en: 'China (Wenling) International Pump & Motor Fair',
        zh: '中国·温岭国际水泵及电机博览会'
      },
      industry: 'Submersible Pumps, Solar Pumps, Electric Motors & Pipeline Accessories',
      venue: {
        ar: 'مركز ونلينغ الدولي للمعارض، ونلينغ، تايتشو',
        en: 'Wenling International Convention & Exhibition Center, Taizhou',
        zh: '温岭市会展中心'
      },
      occurrence: {
        ar: 'يقام سنوياً في شهر فبراير / مارس',
        en: 'Annually in February / March'
      },
      bestFor: ['Pump Importers', 'Agricultural Irrigation Contractors', 'Hardware Wholesalers']
    }
  ],
  logistics: {
    nearestAirports: [
      'Taizhou Luqiao Airport (HYN) - 15 km from downtown (direct domestic flights to Guangzhou and Beijing)',
      'Wenzhou Longwan International Airport (WNZ) - 1 hour by HSR',
      'Ningbo Lishe International Airport (NGB) - 1 hour by HSR'
    ],
    seaPorts: [
      'Taizhou Port (ميناء تايتشو الساحلي للحاويات)',
      'Ningbo-Zhoushan Port (ميناء نينغبو العملاق - البوابة الرئيسية لصادرات تايتشو على بعد ساعة واحدة بالقطار والشاحنات)'
    ],
    highSpeedRailwayStations: [
      'Taizhou Railway Station (台州站 - محطة قطارات حديثة على خط الساحل السريع)',
      'Huangyan Railway Station (Taizhou West / 台州西站 - تخدم مباشرة منطقة مصانع القوالب)',
      'Wenling Railway Station (温岭站 - تخدم مصانع مضخات المياه والأحذية)'
    ],
    seaFreightSuitability: {
      ar: 'ممتازة؛ تقع تايتشو بين ميناء نينغبو وميناء ونتشو، وتعتمد مصانع القوالب والمضخات على ميناء نينغبو الأضخم في العالم لشحن الحاويات مباشرة إلى الشرق الأوسط.',
      en: 'Outstanding; nestled between Ningbo and Wenzhou, Taizhou industrial cargo funnels directly into Ningbo-Zhoushan Port berths with very low drayage costs.'
    },
    airFreightSuitability: {
      ar: 'مناسبة عبر مطار لوكياو المحلي ومطاري نينغبو وونتشو الدوليين القريبين لشحن عينات القوالب والمضخات.',
      en: 'Convenient via local Luqiao (HYN) and nearby Ningbo (NGB) and Wenzhou (WNZ) international airports.'
    },
    primaryCargoRoutes: {
      ar: [
        'خط النقل البري المباشر لحاويات القوالب ومضخات المياه إلى ميناء نينغبو-تشوشان',
        'شحن حاويات المنتجات البلاستيكية المنزلية مباشرة إلى موانئ الخليج العربي ومصر',
        'تصدير ماكينات الخياطة من جياوجيانغ في حاويات مجمعة عبر نينغبو'
      ],
      en: [
        'Dedicated container trucking corridor from Huangyan and Wenling to Ningbo-Zhoushan Port berths',
        'Direct plastic houseware container sailings to Jebel Ali, Jeddah, and Alexandria',
        'Consolidated export container logistics for industrial sewing machines via Ningbo'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['مارس', 'أبريل', 'أكتوبر', 'نوفمبر'],
    suggestedStayDays: 2,
    weatherSummary: {
      ar: 'طقس ساحلي ممتع ومعتدل في الربيع والخريف، دافئ صيفاً وبارد رطب شتاءً.',
      en: 'Pleasant coastal maritime climate with mild spring and autumn days perfect for touring workshops.'
    },
    recommendedStayAreas: [
      {
        ar: 'حي هوانغيان بالقرب من مصانع قوالب البلاستيك والشركات الهندسية.',
        en: 'Huangyan District near precision mold factories and tooling complexes.'
      },
      {
        ar: 'وسط مدينة جياوجيانغ للفنادق العالمية الراقية والمطاعم الحلال.',
        en: 'Jiaojiang Downtown for luxury 5-star international hospitality and dining.'
      },
      {
        ar: 'مدينة ونلينغ عند التركيز على زيارة مصانع مضخات المياه والأحذية.',
        en: 'Wenling City when dedicated exclusively to water pump and shoe factory inspections.'
      }
    ],
    localTransportAdvice: {
      ar: 'القطارات فائقة السرعة تربط تايتشو بهانغتشو ونينغبو في ساعة واحدة؛ يُفضل استئجار سيارة بسائق لزيارة مصانع هوانغيان ومصانع مضخات ونلينغ المتباعدة.',
      en: 'HSR connects Taizhou to Ningbo and Hangzhou in 1 hour; private chauffeured cars are recommended to navigate distant county hubs.'
    },
    languageTips: {
      ar: 'المندرينية القياسية هي لغة التجارة؛ مهندسو القوالب يفهمون المخططات الهندسية والمصطلحات التقنية، ويُنصح بمترجم لمناقشة التفاوتات الميكانيكية.',
      en: 'Mandarin is universally understood; mold makers read 3D CAD/CAM schematics fluently; an interpreter helps with contract tolerances.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'taizhou-marriott-hotel',
        name: {
          ar: 'فندق ماريوت تايتشو (Taizhou Marriott Hotel)',
          en: 'Taizhou Marriott Hotel',
          zh: '台州万豪酒店'
        },
        category: { ar: 'فاخر 5 نجوم دولي', en: 'Luxury 5-Star International' },
        area: {
          ar: 'حي هوانغيان، بالقرب من وادي القوالب',
          en: 'Huangyan District, near Mould Town'
        },
        address: {
          ar: '388 طريق تيانمينغ، حي هوانغيان، تايتشو',
          en: '388 Tianming Road, Huangyan District, Taizhou',
          zh: '台州市黄岩区天鸣路388号'
        },
        highlights: {
          ar: 'الموقع الأفضل على الإطلاق لرجال الأعمال ومستوردي القوالب والبلاستيك، يقع في هوانغيان مع أرقى الخدمات الفندقية',
          en: 'The prime luxury base for plastic tooling and mold buyers, situated conveniently right in Huangyan District.'
        }
      },
      {
        id: 'crowne-plaza-taizhou',
        name: {
          ar: 'فندق كراون بلازا تايتشو (Crowne Plaza Taizhou)',
          en: 'Crowne Plaza Taizhou',
          zh: '台州皇冠假日酒店'
        },
        category: { ar: 'أعمال فاخر 5 نجوم', en: 'Luxury Business 5-Star' },
        area: {
          ar: 'حي جياوجيانغ، قلب تايتشو التجاري',
          en: 'Jiaojiang District, Commercial Center'
        },
        address: {
          ar: '55 طريق شيشيا، حي جياوجيانغ، تايتشو',
          en: '55 Shixia Road, Jiaojiang District, Taizhou',
          zh: '台州市椒江区市府大道东段55号'
        },
        highlights: {
          ar: 'فندق أعمال فاخر بالقرب من مقرات كبرى الشركات وماكينات الخياطة الصناعية والمؤسسات الحكومية',
          en: 'Upscale business hotel located in the city commercial core, offering top-tier executive amenities.'
        }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'taizhou-grand-mosque-halal-dining',
        name: {
          ar: 'مطعم مسجد تايتشو التاريخي الحلال (Taizhou Mosque Halal Restaurant)',
          en: 'Taizhou Mosque Halal Restaurant',
          zh: '台州清真寺清真饭庄'
        },
        cuisineType: {
          ar: 'أطباق إسلامية صينية، لحوم ضأن وبقر حلال طازجة، وحساء اللحم المتبل',
          en: 'Traditional Chinese Muslim Braised Beef, Mutton & Local Seafood'
        },
        isHalal: true,
        address: {
          ar: 'بجوار مسجد تايتشو، حي جياوجيانغ، تايتشو',
          en: 'Adjacent to Taizhou Mosque, Jiaojiang District, Taizhou',
          zh: '台州市椒江区清真寺旁'
        },
        recommendedFor: {
          ar: 'تناول وجبات حلال موثوقة أثناء رحلات العمل وأداء الصلوات في مسجد المدينة',
          en: 'Certified halal dining and prayer access for industrial delegations visiting Taizhou.'
        }
      },
      {
        id: 'huangyan-halal-beef-noodles-house',
        name: {
          ar: 'مطعم هوانغيان الإسلامي للحوم الحلال والنودلز',
          en: 'Huangyan Halal Beef Noodles & BBQ',
          zh: '黄岩清真兰州牛肉面庄'
        },
        cuisineType: {
          ar: 'نودلز اللحم البقري الحلال، كباب لحم الضأن، والأطباق الساخنة',
          en: 'Lanzhou Hand-Pulled Halal Beef Noodles & Lamb Kebabs'
        },
        isHalal: true,
        address: {
          ar: 'شارع وادي القوالب، حي هوانغيان، تايتشو',
          en: 'Mould Town Avenue, Huangyan District, Taizhou',
          zh: '台州市黄岩区模具小镇商业区'
        },
        recommendedFor: {
          ar: 'غداء حلال سريع ومريح لمستوردي القوالب أثناء جولات المصانع في هوانغيان',
          en: 'Convenient certified halal lunches for mold buyers during busy plant audits in Huangyan.'
        }
      }
    ]
  },
  relatedCitySlugs: ['wenzhou', 'ningbo', 'yongkang', 'yiwu', 'hangzhou'],
  relatedProductSlugs: [
    'precision-molds-tooling',
    'plastic-houseware-storage',
    'water-pumps-motors',
    'machinery'
  ],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل تايتشو التجاري والصناعي | مصانع قوالب البلاستيك في هوانغيان ومضخات ونلينغ',
      en: 'Taizhou Sourcing Guide | Precision Molds in Huangyan, Plastic Houseware & Wenling Pumps'
    },
    description: {
      ar: 'دليل الاستيراد من تايتشو: مصانع قوالب حقن البلاستيك في هوانغيان، مضخات المياه في ونلينغ، ماكينات الخياطة الصناعية في جياوجيانغ، الفنادق والمطاعم الحلال.',
      en: 'Complete Taizhou sourcing guide: Precision plastic injection molds in Huangyan, water pumps in Wenling, Jack sewing machines, logistics, and halal dining.'
    }
  }
};
