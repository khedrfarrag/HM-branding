import { ICity } from '../../types';

export const shaoxingCity: ICity = {
  id: 'shaoxing',
  slug: 'shaoxing',
  name: { ar: 'شاوشينغ (كيشياو)', en: 'Shaoxing (Keqiao)', zh: '绍兴（柯桥）' },
  province: { ar: 'تشيجيانغ', en: 'Zhejiang', zh: '浙江省' },
  region: 'Yangtze River Delta',
  tier: 'tier-2',
  commercialImportanceScore: 95,
  heroImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'العاصمة العالمية الأولى لتجارة وتصنيع الأقمشة والمنسوجات (مدينة الصين للأقمشة - China Textile City). المقولة الشهيرة في عالم التجارة تؤكد أن "واحداً من كل أربعة أمتار من أقمشة العالم يُنسج أو يُباع في كيشياو". تضم أكبر تجمع لتجار الأقمشة العرب في الصين، وأضخم مجمع لأسواق أقمشة الستائر والبدل والفساتين والألياف الصناعية.',
    en: 'The undisputed World Textile Capital (China Textile City in Keqiao). Globally known for the trade proverb that one in every four meters of the world fabrics is woven or traded in Keqiao. Home to Asia largest fabric wholesale marts, curtain textiles, dyeing mills, and a bustling Middle Eastern commercial community.'
  },
  keyIndustries: ['textiles-fabrics', 'curtains-home-textiles', 'dyeing-printing', 'yarn-chemical-fibers', 'garments'],
  primaryProducts: {
    ar: [
      'أقمشة الستائر والمفروشات وبياضات الفنادق (سوق بيليان للستائر)',
      'أقمشة البدل الرجالية والملابس الرسمية (صوف، TR، كشمير)',
      'أقمشة الفساتين والأزياء النسائية (شيفون، ساتان، دانتيل، حرير صناعي)',
      'الأقمشة التريكو والقطنية والمخملية (سوق دونغشنغ)',
      'أقمشة العبايات الخليجية والجلابيات السوداء الفاخرة المقاومة للحرارة',
      'البطانات ومستلزمات الخياطة والسحابات والأزرار',
      'خيوط الغزل والبوليستر والألياف الصناعية'
    ],
    en: [
      'Curtain Fabrics, Window Sheers & Upholstery Textiles (Beilian Mart)',
      'Men Suiting, Wool-Blends & TR Formal Tailoring Fabrics (North Mart)',
      'Women Fashion Fabrics (Chiffon, Satin, Georgette, Lace & Jacquard)',
      'Knitted Cotton, Jersey, Velvet & Fleece Fabrics (Dongsheng Mart)',
      'Gulf Abaya Black Fabrics & Traditional Arab Robe Textiles',
      'Garment Linings, Interlinings, Zippers & Sewing Accessories',
      'Polyester Filament Yarn & Spun Chemical Fibers'
    ]
  },
  bestFor: ['Fabric Importers', 'Curtain & Home Decor Wholesalers', 'Garment Factory Owners', 'Abaya & Tailoring Merchants'],
  districts: [
    {
      id: 'keqiao-textile-core',
      cityId: 'shaoxing',
      name: { ar: 'منطقة كيشياو ومدينة الأقمشة الصينية (Keqiao Textile City Core)', en: 'Keqiao District & China Textile City', zh: '柯桥区 / 中国轻纺城核心区' },
      activityType: { ar: 'أضخم مجمع أسواق أقمشة ومنسوجات في العالم، ومقرات مكاتب التصدير العربية والدولية', en: 'World Largest Fabric Wholesale Belt & International Trading Offices' },
      mainProducts: ['أقمشة ملابس', 'أقمشة ستائر', 'أقمشة تريكو', 'مستلزمات خياطة'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'China Textile City Station (Shaoxing Metro Line 1)'
    },
    {
      id: 'beilian-curtain-hub',
      cityId: 'shaoxing',
      name: { ar: 'منطقة بيليان لأسواق الستائر والمفروشات (Beilian Curtain District)', en: 'Beilian Curtain & Home Textile Wholesale Hub', zh: '柯桥区 / 北联窗帘布艺市场区' },
      activityType: { ar: 'المركز العالمي الأول لتجارة وتصدير أقمشة الستائر الجاهزة وبياضات المفروشات', en: 'Global #1 Wholesale Center for Curtain Textiles & Upholstery' },
      mainProducts: ['أقمشة ستائر معتمة (Blackout)', 'شيفونات ودانتيل نوافذ', 'أقمشة كنب وتنجيد', 'إكسسوارات ستائر'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestMetro: 'Mingzhu Square Station (Line 1)'
    },
    {
      id: 'binhai-dyeing-industrial-park',
      cityId: 'shaoxing',
      name: { ar: 'منطقة بينهاي الصناعية للطباعة والصباغة الخضراء (Binhai Dyeing Base)', en: 'Binhai Green Printing & Dyeing Industrial Base', zh: '柯桥区 / 滨海绿色印染产业集聚区' },
      activityType: { ar: 'أكبر مجمع لمصانع صباغة وطباعة الأقمشة الآلية والصديقة للبيئة في العالم', en: 'World Largest Automated Textile Printing & Dyeing Manufacturing Cluster' },
      mainProducts: ['أقمشة مطبوعة رقمياً', 'أقمشة مصبوغة بمواصفات ثبات لون عالمية', 'أقمشة معالجة ضد الحريق والماء'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: false,
      nearestStation: 'Shaoxing North Railway Station'
    },
    {
      id: 'yuecheng-district',
      cityId: 'shaoxing',
      name: { ar: 'منطقة يويتشينغ التاريخية (Yuecheng Downtown)', en: 'Yuecheng Historic Downtown District', zh: '越城区' },
      activityType: { ar: 'مركز شاوشينغ التاريخي، معالم لو شون، القنوات المائية القديمة ومقرات البنوك', en: 'Historic City Center, Lu Xun Cultural Heritage & Banking Offices' },
      mainProducts: ['نبيذ الأرز الأصفر التاريخي', 'خدمات مصرفية وتجارية', 'أدوات منزلية'],
      tradeFocus: 'Commercial Office',
      suitableForImporter: false,
      suitableForBusinessTravel: true,
      nearestMetro: 'Lu Xun Native Place Station (Line 1)'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'keqiao-china-textile-city-main',
      cityId: 'shaoxing',
      name: { ar: 'مدينة الصين للأقمشة - السوق الشمالي وسوق تيانهوي (North Market & Tianhui)', en: 'China Textile City (North & Tianhui Markets)', zh: '中国轻纺城（北市场 / 天汇市场）' },
      type: 'Wholesale',
      category: 'Suiting, Shirting & Formal Apparel Fabrics',
      description: {
        ar: 'القلب النابض لمدينة الأقمشة، متخصص في أقمشة البدل الرجالية والنسائية، خامات TR، الأقمشة الصوفية، القطن، أقمشة القمصان الرسمية، والزي المدرسي والموحد. يضم آلاف الموردين المباشرين من المصانع بعينات فورية وكتالوجات مجانية للمستوردين.',
        en: 'The core trading hub of China Textile City, specializing in men and women suiting fabrics, TR blended wools, pure cotton shirting, uniform fabrics, and formal apparel textiles.'
      },
      address: { ar: 'طريق يوتشياو، منطقة كيشياو، شاوشينغ', en: 'Yuqiao Rd, Keqiao District, Shaoxing, Zhejiang', zh: '浙江省绍兴市柯桥区裕民路中国轻纺城北市场' },
      nearestMetro: 'China Textile City Station (Shaoxing Metro Line 1)',
      operatingHours: '08:30 - 17:00',
      moqLevel: 'Low'
    },
    {
      id: 'keqiao-beilian-curtain-market',
      cityId: 'shaoxing',
      name: { ar: 'سوق بيليان الدولي لأقمشة الستائر والمفروشات (Beilian Curtain Market)', en: 'Keqiao Beilian Curtain & Fabric Market', zh: '中国轻纺城北联窗帘布艺市场' },
      type: 'Wholesale',
      category: 'Curtains, Drapery & Home Decor Fabrics',
      description: {
        ar: 'أكبر وأفخم مبنى مخصص لأقمشة الستائر وتجهيزات النوافذ والديكور في العالم على مساحة 200,000 متر مربع. يضم أكثر من 2300 متجر ومصنع يقدمون أقمشة البلاك أوت (العازلة للضوء)، الستائر الجاكار، الشيفونات، المخمل المطرز، وقضبان وإكسسوارات الستائر الجاهزة للتصدير بالكونتينر.',
        en: 'World largest premier curtain and window fashion wholesale mart spanning 200,000 sqm with over 2,300 showrooms. Supplies blackout drapery, luxury jacquards, embroidered sheers, velvets, and curtain hardware accessories.'
      },
      address: { ar: 'طريق كانغشينغ، منطقة كيشياو، شاوشينغ', en: 'Kangxing Rd, Keqiao District, Shaoxing', zh: '浙江省绍兴市柯桥区康兴路北联市场' },
      nearestMetro: 'Mingzhu Square Station (Shaoxing Metro Line 1)',
      operatingHours: '08:30 - 17:00',
      moqLevel: 'Low'
    },
    {
      id: 'keqiao-dongsheng-knitted-market',
      cityId: 'shaoxing',
      name: { ar: 'سوق دونغشنغ رود للأقمشة التريكو والقطنية (Dongsheng Road Knitted Market)', en: 'Dongsheng Road Knitted & Jersey Fabric Market', zh: '东升路针织布艺市场' },
      type: 'Wholesale',
      category: 'Knitted, Jersey, Cotton & Polar Fleece',
      description: {
        ar: 'سوق ضخم متخصص حصرياً في أقمشة التريكو، قطن التيشيرتات، أقمشة البولار فليس، القطيفة، المخمل الرياضي، والسباندكس المرن المناسب للملابس الرياضية والشتوية والبيجامات.',
        en: 'Massive specialized market for knitted circular fabrics, cotton jersey for T-shirts, polar fleece, French terry, and elastane spandex fabrics for sportswear and loungewear.'
      },
      address: { ar: 'طريق دونغشنغ، كيشياو، شاوشينغ', en: 'Dongsheng Rd, Keqiao District, Shaoxing', zh: '浙江省绍兴市柯桥区东升路针织市场' },
      nearestMetro: 'Keqiao Metro Line 1'
    },
    {
      id: 'keqiao-east-market-fashion',
      cityId: 'shaoxing',
      name: { ar: 'سوق كيشياو الشرقي لأقمشة الأزياء النسائية والشيفون (East Market & Fashion Fabric)', en: 'Keqiao East Market & Fashion Fabrics', zh: '中国轻纺城东市场 / 国际贸易区' },
      type: 'Wholesale',
      category: 'Women Fashion, Chiffon & Abaya Fabrics',
      description: {
        ar: 'الوجهة الأولى لتجار الخليج والشرق الأوسط الباحثين عن أقمشة العبايات السوداء الفاخرة (الصالونة، الكريب الملكي، الإنترنت)، أقمشة الشيفون الملونة، الجورجيت، الحرير المغسول، والدانتيل المطرز.',
        en: 'Premier destination for Middle Eastern buyers sourcing premium Gulf abaya black crepe textiles (Salona, Royal Crepe), printed chiffon, georgette, faux silk, and bridal lace.'
      },
      address: { ar: 'طريق كيشياو دونغ، شاوشينغ', en: 'Keqiao East Rd, Shaoxing', zh: '浙江省绍兴市柯桥区轻纺城东市场' },
      nearestMetro: 'China Textile City Station'
    }
  ],
  industrialZones: [
    {
      id: 'binhai-printing-dyeing-cluster',
      cityId: 'shaoxing',
      name: { ar: 'مجمع مصانع الصباغة والطباعة في بينهاي (Binhai Printing & Dyeing Base)', en: 'Keqiao Binhai Textile Dyeing Mega Base', zh: '柯桥滨海印染产业集聚区' },
      clusterSpecialization: { ar: 'أضخم طاقة صباغة وطباعة رقمية للأقمشة في آسيا بأحدث معايير الألوان والمعالجات المقاومة للانكماش', en: 'Asia Largest High-Speed Digital Fabric Printing & Dyeing Capacity' },
      factoryTypes: ['Mega Continuous Dyeing Mills', 'High-Speed Digital Inkjet Printing Plants'],
      keyProducts: ['أقمشة مصبوغة حسب كود Pantone', 'أقمشة مطبوعة بالكمبيوتر', 'أقمشة معالجة كيميائياً'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'sx-curtain-upholstery-fabrics',
      productName: { ar: 'أقمشة الستائر والمفروشات والديكور المنزلي', en: 'Curtain Fabrics, Sheers, Blackout & Upholstery' },
      industryCategory: 'textiles',
      whyThisCity: { ar: 'سوق بيليان في كيشياو يوفر أحدث صيحات تصاميم الستائر العالمية بأقل تكلفة إنتاج وبطاقة شحن كونتينرات يومية فورية.', en: 'Beilian Market in Keqiao offers the world broadest selection of curtain designs and rapid container loading capabilities.' },
      mainManufacturingArea: { ar: 'كيشياو (Beilian & Yangxunqiao)', en: 'Keqiao District' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'sx-apparel-abaya-fabrics',
      productName: { ar: 'أقمشة الأزياء النسائية وخامات العبايات السوداء والبدل', en: 'Women Fashion Fabrics, Black Abaya Crepe & Formal Suiting' },
      industryCategory: 'textiles',
      whyThisCity: { ar: 'أكبر مورد لأقمشة العبايات والجلابيات والبدل للأسواق السعودية والإماراتية والمصرية مع ثبات فائق للألوان السوداء.', en: 'The prime supplier of specialized deep-black abaya crepes and formal suiting to the Middle East and African markets.' },
      mainManufacturingArea: { ar: 'كيشياو (East & North Markets)', en: 'China Textile City East & North Marts' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Hangzhou Xiaoshan International Airport (HGH - 25 دقيقة فقط بالسيارة من سوق كيشياو للأقمشة)'
    ],
    seaPorts: [
      'Ningbo-Zhoushan Port (ميناء نينغبو - 90 دقيقة بالشاحنات اللوجستية، الميناء الطبيعي لصادرات كيشياو)',
      'Shanghai Port (Yangshan / Waigaoqiao - ساعتان)'
    ],
    highSpeedRailwayStations: [
      'Shaoxing North Railway Station (绍兴北站 - تخدم قطارات كيشياو السريعة المتصلة بشنغهاي وهانغتشو وشنجن)',
      'Shaoxing Railway Station (绍兴站)'
    ],
    seaFreightSuitability: {
      ar: 'ميناء كيشياو الجاف (Keqiao Dry Port) يتيح فحص وتخليص وتحميل حاويات الأقمشة مباشرة من أسواق كيشياو وشحنها بقطارات مخصصة أو شاحنات سريعة إلى سفن ميناء نينغبو.',
      en: 'Keqiao Bonded Dry Port allows direct on-site stuffing, inspection, and customs clearing of textile containers directly onto ocean feeder vessels at Ningbo Port.'
    },
    airFreightSuitability: {
      ar: 'مطار هانغتشو شياوشان يبعد 25 دقيقة فقط، مما يسهل شحن عينات الأقمشة السريعة وكتالوجات المواسم الجديدة إلى العملاء عبر DHL وFedEx وAramex خلال 48 ساعة.',
      en: 'Hangzhou Xiaoshan Airport is only 25 minutes away, facilitating 48-hour air courier express delivery for fabric swatches and sample books globally.'
    },
    primaryCargoRoutes: {
      ar: [
        'خطوط حاويات أسبوعية مكثفة من ميناء نينغبو إلى جبل علي، جدة، السخنة، بورسعيد، الجزائر، والدار البيضاء',
        'شحن سريع لعينات الأقمشة والكتالوجات جواً عبر مطار هانغتشو'
      ],
      en: [
        'Intensive weekly container sailings via Ningbo Port to Jebel Ali, Jeddah, Sokhna, Port Said, and Casablanca',
        'Daily air freight sample dispatch via nearby Hangzhou Xiaoshan Airport'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['أبريل', 'مايو (موسم معرض كيشياو الدولي)', 'سبتمبر', 'أكتوبر (معرض خريف كيشياو)'],
    suggestedStayDays: 4,
    weatherSummary: {
      ar: 'ربيع وخريف معتدلان ولطيفان جداً، مثاليان لجولات أسواق الأقمشة الواسعة. الصيف حار والشتاء بارد نسبياً.',
      en: 'Pleasant Spring and Autumn, perfectly timed with the biannual Keqiao International Textile Expo.'
    },
    recommendedStayAreas: [
      {
        ar: 'وسط منطقة كيشياو للأقمشة (Keqiao Market Core): بالقرب من أسواق الأقمشة الرئيسية، المطاعم العربية، ومحطة المترو.',
        en: 'Keqiao Textile City Center: Walking distance to all fabric malls, Arab restaurants, and metro.'
      }
    ],
    localTransportAdvice: {
      ar: 'خط مترو شاوشينغ رقم 1 يرتبط مباشرة بشبكة مترو هانغتشو في محطة جونيانغتشياو (Guniangqiao Station)، مما يجعل التنقل بين هانغتشو وكيشياو سلساً للغاية دون الحاجة لسيارة خاصة. داخل كيشياو، تتوفر سيارات DiDi بكثرة وسرعة.',
      en: 'Shaoxing Metro Line 1 links directly with Hangzhou Metro Line 5 at Guniangqiao Station. DiDi ride-hailing is exceptionally convenient within Keqiao.'
    },
    languageTips: {
      ar: 'كيشياو هي إحدى أكثر مدن الصين احتضاناً للمستوردين العرب؛ ستجد لافتات باللغة العربية في شوارع كيشياو، وتجاراً ومترجمين يتحدثون العربية بطلاقة في مكاتب الشحن وفنادق كيشياو.',
      en: 'Keqiao has a large Arab trading diaspora; Arabic signage, Arabic-speaking trade agents, and translators are widely available throughout the fabric market zone.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'MetroMan Shaoxing'],
    recommendedHotels: [
      {
        id: 'radisson-keqiao-shaoxing',
        name: { ar: 'فندق راديسون كيشياو شاوشينغ (Radisson Keqiao)', en: 'Radisson Hotel Keqiao Shaoxing', zh: '绍兴柯桥雷迪森大酒店' },
        category: { ar: 'فاخر 5 نجوم لرجال الأعمال', en: 'Upscale Business 5-Star' },
        area: { ar: 'شارع 104 الوطني، قلب مدينة الأقمشة كيشياو', en: 'Heart of China Textile City, Keqiao' },
        highlights: { ar: 'الفندق المفضل للمستوردين وتجار الأقمشة الدوليين، مجاور لمجمعات الأقمشة والمطاعم العربية ومركز المؤتمرات', en: 'Preferred hub for global textile merchants, walking distance to fabric marts and Middle Eastern restaurants' }
      },
      {
        id: 'crowne-plaza-shaoxing',
        name: { ar: 'فندق كراون بلازا شاوشينغ (Crowne Plaza Shaoxing)', en: 'Crowne Plaza Shaoxing', zh: '绍兴世茂皇冠假日酒店' },
        category: { ar: 'فاخر 5 نجوم', en: 'Luxury 5-Star' },
        area: { ar: 'مجمع شيماو التجاري، وسط المدينة', en: 'Shimao Commercial Plaza, Shaoxing' },
        highlights: { ar: 'فندق راقٍ يوفر قاعات اجتماعات واسعة ومرافق ترفيه وخدمات أعمال متكاملة', en: 'Premium business hotel with top executive lounge and leisure amenities' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'ward-al-sham-keqiao',
        name: { ar: 'مطعم ورد الشام السوري في كيشياو (Ward Al Sham Halal)', en: 'Ward Al Sham Syrian & Arab Halal Restaurant', zh: '大马士革玫瑰叙利亚清真餐厅（柯桥店）' },
        cuisineType: { ar: 'مأكولات شامية وسورية وعربية حلال معتمد', en: 'Authentic Syrian & Levantine Halal Cuisine' },
        isHalal: true,
        address: { ar: 'طريق يوتشياو، بالقرب من سوق الأقمشة، كيشياو، شاوشينغ', en: 'Yuqiao Rd, near China Textile City, Keqiao', zh: '浙江省绍兴市柯桥区轻纺城商圈' },
        recommendedFor: { ar: 'مشاوي حلبية، شاورما، مقبلات شامية، كبة، وأجواء ملتقى تجار الأقمشة العرب في كيشياو', en: 'Authentic Syrian grills, shawarma, mezze, and Arab textile merchant networking' }
      },
      {
        id: 'sultan-turkish-keqiao',
        name: { ar: 'مطعم سلطان التركي بـ كيشياو (Sultan Turkish Halal)', en: 'Sultan Turkish Halal Restaurant Keqiao', zh: '苏丹土耳其餐厅（柯桥店）' },
        cuisineType: { ar: 'مأكولات تركية وعثمانية وحلال', en: 'Authentic Turkish & Mediterranean Halal' },
        isHalal: true,
        address: { ar: 'طريق كانغشينغ، بالقرب من سوق بيليان للستائر، كيشياو', en: 'Kangxing Rd, near Beilian Curtain Mart, Keqiao', zh: '浙江省绍兴市柯桥区北联市场商圈' },
        recommendedFor: { ar: 'كباب أضنة، فطائر تركية بالجبن واللحم، وشاي وبقلاوة تركية طازجة', en: 'Adana kebab, Turkish pide, and fresh baklava' }
      },
      {
        id: 'keqiao-islamic-center-canteen',
        name: { ar: 'مصلى ومطعم المركز الإسلامي في كيشياو (Keqiao Islamic Center)', en: 'Keqiao Mosque & Halal Food Hall', zh: '柯桥伊斯兰教礼拜点及清真餐厅' },
        cuisineType: { ar: 'مأكولات إسلامية حلال طازجة 100%', en: 'Authentic Halal Dining' },
        isHalal: true,
        address: { ar: 'منطقة كيشياو، شاوشينغ', en: 'Keqiao District, Shaoxing', zh: '浙江省绍兴市柯桥区清真寺礼拜点' },
        recommendedFor: { ar: 'صلاة الجمعة، لقاء الجالية المسلمة من تجار الأقمشة، ووجبات حلال موثوقة', en: 'Friday congregation prayers & community halal food' }
      }
    ],
    touristAttractions: [
      {
        id: 'anchang-water-town',
        name: { ar: 'بلدة أنشانغ المائية التراثية (Anchang Ancient Water Town - 安昌古镇)', en: 'Anchang Ancient Canal Water Town', zh: '安昌古镇' },
        category: { ar: 'بلدة تاريخية عريقة على القنوات المائية', en: 'Historical Jiangnan Water Town' },
        description: { ar: 'بلدة مائية تعود لمئات السنين تبعد 15 دقيقة فقط عن أسواق الأقمشة، تشتهر بالجسور الحجرية المقوسة، القوارب الخشبية، والحرف التقليدية ومتاجر الصويا والتوابل.', en: 'Enchanting historic canal town 15 minutes from Keqiao fabric market, featuring ancient stone bridges, traditional sculling boats, and riverside teahouses.' }
      },
      {
        id: 'lu-xun-native-place',
        name: { ar: 'موطن الأديب لو شون التاريخي (Lu Xun Native Place - 鲁迅故里)', en: 'Lu Xun Historical Native Residence', zh: '鲁迅故里景区' },
        category: { ar: 'معلم ثقافي وأدبي وطني عريق', en: 'National Cultural Heritage Landmark' },
        description: { ar: 'المقر التراثي المحفوظ لأشهر أدباء الصين الحديثة لو شون، يعكس الحياة والبيوت الصينية التقليدية في عهد أسرة تشينغ.', en: 'The ancestral estate and academy of Lu Xun, China most revered 20th-century author.' },
        nearestMetro: 'Lu Xun Native Place Station (Line 1)'
      }
    ],
    essentialServices: [
      {
        id: 'keqiao-textile-testing-center',
        serviceType: { ar: 'فحص جودة الأقمشة والمطابقة', en: 'Textile Inspection & Testing' },
        title: { ar: 'المركز الوطني لفحص واختبار المنسوجات والأقمشة (China Textile Quality Testing Center)', en: 'National Textile Inspection & Testing Center (Keqiao)', zh: '国家纺织服装产品质量检验检测中心（浙江）' },
        description: { ar: 'إصدار شهادات مطابقة المواصفات الدولية (ثبات الألوان، مقاومة الحريق، مقاومة التمزق، وخلو الأنسجة من المواد الكيماوية الضارة) قبل الشحن.', en: 'Issues official lab test reports for international fabric standards (color fastness, tensile strength, OEKO-TEX compliance) before container dispatch.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'keqiao-international-textile-expo',
      name: { ar: 'معرض كيشياو الدولي للأقمشة والمنسوجات (Keqiao Textile Expo)', en: 'Keqiao China Textile Expo', zh: '中国柯桥国际纺织品博览会（春季/秋季）' },
      industry: 'Fabrics, Textiles, Curtains & Apparel Supply Chain',
      venue: { ar: 'مركز شاوشينغ الدولي للمؤتمرات والمعارض، كيشياو', en: 'Shaoxing International Convention & Exhibition Center, Keqiao', zh: '绍兴国际会展中心（柯桥）' },
      occurrence: { ar: 'مايو (الربيع) وأكتوبر (الخريف) سنوياً', en: 'Biannually in May (Spring) & October (Autumn)' },
      officialWebsite: 'http://www.ctexfair.com',
      bestFor: ['Fabric Importers', 'Fashion Brands', 'Garment Factories', 'Curtain Wholesalers']
    },
    {
      id: 'keqiao-curtain-home-textile-fair',
      name: { ar: 'معرض كيشياو للستائر والمفروشات والديكور المنزلي', en: 'China (Keqiao) International Curtain & Home Textiles Fair', zh: '中国（柯桥）国际窗帘布艺展览会' },
      industry: 'Curtains, Drapes, Bedding & Soft Furnishings',
      venue: { ar: 'سوق بيليان الدولي للأقمشة، كيشياو', en: 'Beilian International Exhibition Center, Keqiao', zh: '柯桥北联市场展厅' },
      occurrence: { ar: 'مارس وأغسطس سنوياً', en: 'Biannually in March & August' },
      bestFor: ['Curtain Wholesalers', 'Interior Decorators', 'Hotel Bedding Importers']
    }
  ],
  relatedCitySlugs: ['hangzhou', 'haining', 'yiwu', 'ningbo', 'guangzhou'],
  relatedProductSlugs: ['textiles', 'apparel'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل شاوشينغ وكيشياو للأقمشة | مدينة الصين العالمية للأقمشة والمنسوجات', en: 'Shaoxing Keqiao Sourcing Guide | World Textile Capital & Fabrics' },
    description: { ar: 'دليل شامل للاستيراد من كيشياو وشاوشينغ: أسواق الأقمشة بالجملة (السوق الشمالي وبيليان للستائر)، مجتمع التجار العرب، وفنادق ومطاعم حلال.', en: 'Comprehensive sourcing guide to Shaoxing Keqiao: World Textile Capital, China Textile City, Beilian curtain mart, Arab fabric community, and halal guide.' }
  }
};
