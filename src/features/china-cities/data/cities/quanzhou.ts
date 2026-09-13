import { ICity } from '../../types';

export const quanzhouCity: ICity = {
  id: 'quanzhou',
  slug: 'quanzhou',
  name: { ar: 'كوانتشو (جينجيانغ)', en: 'Quanzhou (Jinjiang)', zh: '泉州（晋江）' },
  province: { ar: 'فوجيان', en: 'Fujian', zh: '福建省' },
  region: 'East Coast (Fujian)',
  tier: 'tier-2',
  commercialImportanceScore: 95,
  heroImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=85',
  skylineImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'العاصمة العالمية الأولى لصناعة وتصدير الأحذية الرياضية (تنتج مدينة جينجيانغ التابعة لها 1 من كل 5 أزواج أحذية رياضية في العالم). المقر العالمي لأضخم ماركات الرياضة الصينية (Anta, Xtep, 361 Degrees, Peak)، وعاصمة الملابس الكاجوال وجاكيتات الشتاء في شيشي (Shishi)، وعاصمة الخزف والبورسلين الأبيض التصديري في ديهوا (Dehua)، ونقطة انطلاق طريق الحرير البحري التاريخي العريق وتضم أقدم جامع إسلامي في الصين (جامع تشينغجينغ 1009 م).',
    en: 'The undisputed World Footwear & Sportswear Capital (Jinjiang produces 1 in every 5 athletic shoes in the world). Global headquarters of sportswear giants (Anta, Xtep, 361 Degrees, Peak), casual apparel capital in Shishi, world ceramic porcelain capital in Dehua, and historic starting point of the Maritime Silk Road home to China oldest stone mosque (Qingjing Mosque 1009 AD).'
  },
  keyIndustries: ['footwear-sneakers', 'sportswear-apparel', 'textiles', 'ceramics-porcelain', 'stone-building-materials'],
  primaryProducts: {
    ar: [
      'الأحذية الرياضية، أحذية الجري، كرة القدم، والسنيكرز العصرية (Anta & Jinjiang OEM)',
      'مستلزمات ومكونات الأحذية (نعال EVA وRubber، أقمشة شبكية، قوالب أحذية تشيندوي)',
      'الملابس الرياضية، المعاطف والجاكيتات المقاومة للمطر والرياح (سوق شيشي للملابس)',
      'الخزف والبورسلين الأبيض الفاخر والتحف الخزفية التصديرية (Dehua Porcelain)',
      'ملابس الأطفال والسباحة والأزياء القطنية الكاجوال',
      'حبيبات المطاط والبوليمرات وخامات النعال'
    ],
    en: [
      'Athletic Shoes, Running Sneakers, Soccer Cleats & Casual Footwear (Anta, Xtep, 361)',
      'Shoe Materials, Injection EVA/Rubber Soles, Mesh Fabrics & Shoe Molds (Chendai Hub)',
      'Outdoor Jackets, Windbreakers, Sportswear & Casual Apparel (Shishi Garment City)',
      'Blanc de Chine White Ceramic Porcelain, Tableware & Art Figurines (Dehua Capital)',
      'Children Clothing, Swimwear & Export Cotton Casual Wear',
      'Synthetic Rubber Compounds, TPU Film & Shoe Components'
    ]
  },
  bestFor: ['Sneaker & Footwear Importers', 'Sportswear Brand Sourcing', 'Shoe Material Buyers', 'Ceramic & Tableware Importers'],
  districts: [
    {
      id: 'jinjiang-footwear-core',
      cityId: 'quanzhou',
      name: { ar: 'مدينة جينجيانغ - عاصمة الأحذية العالمية (Jinjiang City)', en: 'Jinjiang World Footwear Capital Hub', zh: '晋江市（中国鞋都）' },
      activityType: { ar: 'أضخم تجمع لمصانع الأحذية الرياضية والشركات العالمية ومصممي النعال والأقمشة الرياضية', en: 'Global #1 Sports Footwear Manufacturing, Soles & Textile Base' },
      mainProducts: ['أحذية رياضية', 'ملابس رياضية', 'نعال ومكونات أحذية', 'أقمشة مش'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Jinjiang Railway Station / Jinjiang Airport'
    },
    {
      id: 'chendai-shoe-materials',
      cityId: 'quanzhou',
      name: { ar: 'بلدة تشيندوي لمستلزمات الأحذية (Chendai Shoe Materials Town)', en: 'Chendai Town (China Shoe Materials Hub)', zh: '晋江市陈埭镇（中国鞋都核心区）' },
      activityType: { ar: 'مدينة الأحذية والمنسوجات الدولية، أكبر سوق لتجارة نعال الأحذية والجلود الصناعية والإكسسوارات', en: 'Jinjiang International Shoe & Textile City with thousands of sole & leather vendors' },
      mainProducts: ['نعال أحذية EVA ومطاط', 'جلود صناعية للأحذية', 'أربطة وحلقات معدنية', 'أقمشة شبكية'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Jinjiang Station'
    },
    {
      id: 'shishi-garment-city-district',
      cityId: 'quanzhou',
      name: { ar: 'مدينة شيشي للملابس الجاهزة (Shishi Garment City)', en: 'Shishi City (China Casual Apparel Capital)', zh: '石狮市（中国休闲服装名城）' },
      activityType: { ar: 'أضخم مركز لتجارة وتصنيع الملابس الكاجوال، الجاكيتات، والملابس الرجالية والنسائية الجاهزة', en: 'Major Coastal Wholesale Market for Casual Outerwear, Jackets & Menswear' },
      mainProducts: ['جاكيتات ومعاطف كاجوال', 'بنطلونات جينز وقطن', 'أزياء بحرية ورياضية', 'سحابات وأقمشة'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Shishi High-Speed Railway Station'
    },
    {
      id: 'dehua-porcelain-capital',
      cityId: 'quanzhou',
      name: { ar: 'مقاطعة ديهوا - عاصمة البورسلين والخزف العالمي (Dehua Porcelain)', en: 'Dehua County (World Porcelain Capital)', zh: '德化县（世界陶瓷之都）' },
      activityType: { ar: 'المركز العالمي الأول لتصنيع وتصدير البورسلين الأبيض وأطقم المائدة والتحف الخزفية للتصدير', en: 'World Capital of Ceramic Porcelain: Blanc de Chine Tableware & Decorative Gifts' },
      mainProducts: ['أطقم مائدة بورسلين فاخرة', 'أكواب خزفية', 'تحف وتماثيل بورسلين بيضاء', 'سيراميك حراري'],
      tradeFocus: 'Industrial',
      suitableForImporter: true,
      suitableForBusinessTravel: true,
      nearestStation: 'Dehua Railway Station'
    },
    {
      id: 'fengze-historic-downtown',
      cityId: 'quanzhou',
      name: { ar: 'منطقة فينغتزه ووسط كوانتشو التاريخي (Fengze CBD)', en: 'Fengze District & Ancient Maritime Silk Road Hub', zh: '丰泽区 / 泉州老城区' },
      activityType: { ar: 'المركز الإداري والتاريخي لكوانتشو، معالم طريق الحرير البحري، وجامع تشينغجينغ التاريخي العريق', en: 'Administrative Core, UNESCO Maritime Silk Road Sites & Historic Qingjing Mosque' },
      mainProducts: ['خدمات بنكية وتمويل تجاري', 'فنادق أعمال فاخرة', 'منتجات تراثية'],
      tradeFocus: 'Commercial Office',
      suitableForImporter: false,
      suitableForBusinessTravel: true,
      nearestStation: 'Quanzhou Railway Station'
    }
  ],
  wholesaleMarkets: [
    {
      id: 'jinjiang-international-shoe-textile-city',
      cityId: 'quanzhou',
      name: { ar: 'مدينة جينجيانغ الدولية للأحذية والمنسوجات (Jinjiang Shoe & Textile City)', en: 'Jinjiang International Shoe & Textile City', zh: '晋江国际鞋纺城（亚太最大鞋材交易中心）' },
      type: 'Wholesale',
      category: 'Shoe Soles, Materials, Mesh & Footwear Leather',
      description: {
        ar: 'أكبر سوق مجمع لمستلزمات ومواد تصنيع الأحذية والمنسوجات الرياضية في آسيا بمساحة 790,000 متر مربع وأكثر من 2000 شركة متخصصة. يوفر كل ما يلزم لإنتاج الحذاء: نعال EVA فائقة المرونة، نعال مطاطية، أقمشة مش محبوكة بتقنية Flyknit، جلود صناعية مايكروفايبر، أربطة، وبطانات بأسعار مصنعية مباشرة.',
        en: 'Asia largest trading center for footwear raw materials and technical sports textiles spanning 790,000 sqm. Supplies high-rebound EVA/rubber soles, Flyknit 3D mesh fabrics, microfiber leathers, TPU injection parts, and shoe lasting accessories directly from manufacturers.'
      },
      address: { ar: 'طريق ووجينان، بلدة تشيندوي، جينجيانغ، كوانتشو', en: 'Wujinan Rd, Chendai Town, Jinjiang, Quanzhou, Fujian', zh: '福建省泉州市晋江市陈埭镇晋江国际鞋纺城' },
      nearestStation: 'Jinjiang High-Speed Railway Station (20 min taxi) / Jinjiang Airport (15 mins)',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'Low'
    },
    {
      id: 'shishi-clothing-city',
      cityId: 'quanzhou',
      name: { ar: 'مدينة شيشي للملابس الجاهزة (Shishi Clothing City)', en: 'Shishi International Garment City', zh: '石狮服装城' },
      type: 'Wholesale',
      category: 'Casual Apparel, Jackets & Menswear',
      description: {
        ar: 'أحد أكبر أسواق الجملة للملابس الجاهزة في الصين، يمتد على مساحة 600,000 متر مربع ويضم 8 مجمعات رئيسية متخصصة في الجاكيتات والمعاطف الرجالية والنسائية، البنطلونات، والملابس الكاجوال والرياضية بأسعار منافسة وجودة تصدير ممتازة.',
        en: 'One of China largest ready-made garment wholesale complexes covering 600,000 sqm across 8 pavilions. Renowned for casual outerwear, winter puffer jackets, windbreakers, trousers, and menswear.'
      },
      address: { ar: 'طريق نانهوان، مدينة شيشي، كوانتشو', en: 'Nanhuan Rd, Shishi City, Quanzhou', zh: '福建省泉州市石狮市南环路石狮服装城' },
      nearestStation: 'Shishi High-Speed Railway Station (15 min taxi)',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'Low'
    },
    {
      id: 'china-dehua-ceramic-plaza',
      cityId: 'quanzhou',
      name: { ar: 'مدينة الخزف الصيني العالمية في ديهوا (China Porcelain City Dehua)', en: 'China Dehua International Ceramic City', zh: '中国茶具城 / 德化瓷艺城' },
      type: 'Wholesale',
      category: 'Ceramic Tableware, Tea Sets & White Porcelain',
      description: {
        ar: 'أضخم مركز جملة ومعارض لأطقم المائدة البورسلين، أطقم الشاي والقهوة، المزهريات والتحف الخزفية البيضاء العريقة (Blanc de Chine) الموجهة للمطاعم والفنادق والتصدير الدولي.',
        en: 'Major wholesale and exhibition complex for white porcelain tableware, fine bone china, luxury tea/coffee sets, and ceramic home decor direct from Dehua kiln factories.'
      },
      address: { ar: 'بلدة تشونغشان، مقاطعة ديهوا، كوانتشو', en: 'Xunzhong Town, Dehua County, Quanzhou', zh: '福建省泉州市德化县浔中镇中国茶具城' },
      nearestStation: 'Dehua High-Speed Rail Station (10 min taxi)',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'Low'
    }
  ],
  industrialZones: [
    {
      id: 'anta-sports-global-park',
      cityId: 'quanzhou',
      name: { ar: 'المقر والمجمع الصناعي العالمي لشركة أنتا للرياضة (Anta Sports Global Park)', en: 'Anta Sports Global Headquarters & Smart Factory Base', zh: '安踏集团全球总部及智能制造产业园（晋江池店）' },
      clusterSpecialization: { ar: 'أكبر شركة ملابس وأحذية رياضية في الصين وثالث أكبر شركة عالمياً (مالكة علامات Fila وSalomon وArc\'teryx وWilson)', en: 'Global HQ of Anta Sports (Owner of Fila, Salomon, Arc\'teryx, Wilson), automated shoe molding & performance labs' },
      factoryTypes: ['Robotic Shoe Lasting Lines', 'Biomechanical Motion Labs', 'Automated Logistics'],
      keyProducts: ['أحذية ركض احترافية', 'ملابس رياضية مضادة للتعرق', 'كرات وتجهيزات رياضية'],
      specializationLevel: 'High'
    },
    {
      id: 'chendai-footwear-oem-cluster',
      cityId: 'quanzhou',
      name: { ar: 'مجمع مصانع تصنيع الأحذية في تشيندوي (Chendai Footwear Mega Cluster)', en: 'Chendai Footwear OEM/ODM Industrial Mega Cluster', zh: '陈埭镇鞋业制造基地（全国最大运动鞋代工集群）' },
      clusterSpecialization: { ar: 'آلاف مصانع الأحذية المتخصصة في التجميع، قص الجلد، حقن النعال، والطباعة، تخدم علامات Nike وAdidas والمستوردين', en: 'Thousands of specialized shoe assembly, sole injection, and cutting factories powering global sneaker brands' },
      factoryTypes: ['Shoe Assembly Lines', 'EVA Foaming Sole Plants', 'Screen Printing Workshops'],
      keyProducts: ['أحذية رياضية وسنيكرز OEM', 'نعال أحذية رياضية', 'أحذية أطفال خفيفة'],
      specializationLevel: 'High'
    }
  ],
  sourcingProducts: [
    {
      id: 'qz-sports-shoes-sneakers',
      productName: { ar: 'الأحذية الرياضية والسنيكرز وأحذية كرة القدم والمشي', en: 'Athletic Shoes, Running Sneakers, Casual Trainers & Cleats' },
      industryCategory: 'footwear-sneakers',
      whyThisCity: { ar: 'جينجيانغ تنتج 20% من أحذية العالم الرياضية، مع سلسلة توريد كاملة للمكونات تتيح إنتاج أي موديل حذاء خلال 15 يوماً فقط.', en: 'Jinjiang manufactures 20% of the world athletic shoes with a hyper-dense supply chain allowing complete shoe production in 15 days.' },
      mainManufacturingArea: { ar: 'جينجيانغ وتشيندوي وتشي ديان (Jinjiang & Chendai)', en: 'Jinjiang, Chendai, Chidian' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'qz-casual-winter-outerwear',
      productName: { ar: 'الجاكيتات والمعاطف الشتوية وملابس الرياضة والخروج الكاجوال', en: 'Winter Puffer Jackets, Windbreakers & Casual Streetwear' },
      industryCategory: 'sportswear-apparel',
      whyThisCity: { ar: 'مدينة شيشي هي عاصمة الملابس الكاجوال في الصين، وتوفر كميات ضخمة جاهزة للشحن الفوري بأسعار جملة مذهلة.', en: 'Shishi provides massive ready-to-ship inventories of weather-resistant jackets, hoodies, and streetwear.' },
      mainManufacturingArea: { ar: 'مدينة شيشي (Shishi Garment Hub)', en: 'Shishi City' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    },
    {
      id: 'qz-dehua-porcelain-tableware',
      productName: { ar: 'أطقم المائدة والبورسلين الأبيض والتحف الخزفية الفاخرة', en: 'Blanc de Chine White Porcelain Tableware & Ceramic Dinner Sets' },
      industryCategory: 'ceramics-porcelain',
      whyThisCity: { ar: 'ديهوا هي عاصمة البورسلين العالمية المعتمدة لليونسكو وتنتج أنقى أنواع البورسلين المقاوم للكسر والحرارة للتصدير الفندقي.', en: 'UNESCO World Ceramic Capital producing pure translucent white porcelain tableware for luxury hotel chains.' },
      mainManufacturingArea: { ar: 'مقاطعة ديهوا (Dehua)', en: 'Dehua County' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],
  logistics: {
    nearestAirports: [
      'Quanzhou Jinjiang International Airport (JJN - مطار جينجيانغ الدولي يقع وسط منطقة مصانع الأحذية)',
      'Xiamen Gaoqi Airport (XMN - 50 دقيقة بالسيارة أو القطار السريع)'
    ],
    seaPorts: [
      'Quanzhou Port (Shijing / Weitou Port Areas - ميناء كوانتشو للحاويات)',
      'Xiamen Port (الميناء العملاق المجاور الذي يشحن معظم حاويات جينجيانغ للعالم)'
    ],
    highSpeedRailwayStations: [
      'Jinjiang Railway Station (晋江站 - الأقرب لمصانع الأحذية)',
      'Quanzhou Railway Station (泉州站 - المحطة الرئيسية لوسط المدينة)',
      'Quanzhou South Railway Station (泉州南站 - تخدم جينجيانغ وشيشي)',
      'Shishi Railway Station (石狮站)'
    ],
    seaFreightSuitability: {
      ar: 'شحن الحاويات ينطلق يومياً بسلاسة فائقة؛ إما مباشرة عبر ميناء كوانتشو أو بنقل الحاويات بالشاحنات السريعة إلى ميناء شيامن المجاور (45 دقيقة) للشحن على الخطوط البحرية العالمية المباشرة.',
      en: 'Extremely efficient container shipping; containers either load directly at Quanzhou Port or dray 45 minutes to Xiamen Port for global direct liner sailings.'
    },
    airFreightSuitability: {
      ar: 'مطار جينجيانغ ومطار شيامن يوفران شحناً جوياً سريعاً لعينات الأحذية والأزياء.',
      en: 'Jinjiang Airport (JJN) is situated right inside the footwear zone for fast courier sample dispatch.'
    },
    primaryCargoRoutes: {
      ar: [
        'خطوط حاويات بحرية مكثفة عبر ميناء شيامن وكوانتشو إلى جبل علي، جدة، الدمام، صلالة، ميناء خليفة، وموانئ شمال إفريقيا',
        'شحن سريع لعينات الأحذية والملابس عبر مكاتب DHL وFedEx المنتشرة في جينجيانغ'
      ],
      en: [
        'Weekly direct container vessels to all Arabian Gulf, Red Sea, and Mediterranean terminals',
        'Dense express courier hubs in Jinjiang for rapid shoe prototyping delivery'
      ]
    }
  },
  businessTravelGuide: {
    bestVisitMonths: ['أبريل (موسم معرض الأحذية والرياضة الدولي بجينجيانغ)', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    suggestedStayDays: 4,
    weatherSummary: {
      ar: 'طقس ساحلي معتدل ودافئ معظم أيام السنة، والربيع والخريف هما أفضل الفصول لزيارة المعارض وتفقد مصانع الأحذية والملابس.',
      en: 'Warm coastal weather year-round; spring and autumn are ideal for attending the Jinjiang Footwear Expo and touring factories.'
    },
    recommendedStayAreas: [
      {
        ar: 'وسط مدينة جينجيانغ (Jinjiang Downtown): الأنسب لمستوردي الأحذية والرياضة، لقربها من مصانع وماركات الأحذية وفندق ماركو بولو والمطار.',
        en: 'Jinjiang Downtown: Preferred hub for footwear buyers, close to factories, Marco Polo Hotel, and airport.'
      },
      {
        ar: 'وسط كوانتشو التاريخي وفينغتزه (Fengze / Ancient City): للتمتع بالآثار التاريخية الإسلامية ومعالم طريق الحرير والحدائق.',
        en: 'Quanzhou Historic City: Near ancient Qingjing Mosque, UNESCO heritage temples, and luxury hotels.'
      }
    ],
    localTransportAdvice: {
      ar: 'مطار جينجيانغ يبعد 15 دقيقة فقط عن فنادق جينجيانغ ومصانع الأحذية. القطار فائق السرعة يربط جينجيانغ بمدينة شيامن في 20 دقيقة وبمدينة فوتشو في 45 دقيقة. استخدم تطبيق DiDi للتنقل بين بلدات المصانع.',
      en: 'Jinjiang Airport is only 15 mins from shoe factories. High-speed rail connects Jinjiang to Xiamen in 20 minutes. Use DiDi for intra-city transit.'
    },
    languageTips: {
      ar: 'كوانتشو وجينجيانغ تمتلكان تاريخاً تجارياً عريقاً يمتد لألف عام مع التجار العرب؛ مكاتب التصدير في مصانع الأحذية معتادة جداً على مواصفات الأحذية العربية، وتتوفر خدمات الترجمة بسهولة.',
      en: 'Ancient Arab trading heritage creates a welcoming commercial environment. Footwear export managers know Arabic sizing and standard specifications.'
    },
    essentialApps: ['WeChat', 'Alipay', 'DiDi', 'Baidu Maps'],
    recommendedHotels: [
      {
        id: 'marco-polo-jinjiang-hotel',
        name: { ar: 'فندق ماركو بولو جينجيانغ (Marco Polo Jinjiang)', en: 'Marco Polo Jinjiang', zh: '马哥孛罗酒店（晋江）' },
        category: { ar: 'فاخر 5 نجوم عريق', en: 'Luxury 5-Star' },
        area: { ar: 'طريق سونغ تشنغ، وسط جينجيانغ', en: 'Downtown Jinjiang' },
        highlights: { ar: 'الفندق التاريخي المفضل لرجال الأعمال ومستوردي الأحذية العالميين، يقع في قلب جينجيانغ ويبعد 10 دقائق عن المطار والمصانع', en: 'The landmark hotel for international footwear traders, minutes from Jinjiang Airport and shoe material hubs' }
      },
      {
        id: 'hilton-quanzhou-riverside',
        name: { ar: 'فندق هيلتون كوانتشو ريفرسايد (Hilton Quanzhou Riverside)', en: 'Hilton Quanzhou Riverside', zh: '泉州富力希尔顿酒店' },
        category: { ar: 'فاخر 5 نجوم نهري', en: 'Riverfront Luxury 5-Star' },
        area: { ar: 'على ضفاف نهر جينجيانغ، كوانتشو', en: 'Jinjiang Riverfront, Quanzhou' },
        highlights: { ar: 'إطلالة بانورامية ساحرة على النهر، يقع في المنتصف بين كوانتشو وجينجيانغ، قاعات مؤتمرات وخدمات رجال أعمال رفيعة', en: 'Spectacular river views, perfectly placed between downtown Quanzhou and Jinjiang shoe clusters' }
      },
      {
        id: 'quanzhou-hotel',
        name: { ar: 'فندق كوانتشو التاريخي (Quanzhou Hotel)', en: 'Quanzhou Hotel', zh: '泉州大酒店' },
        category: { ar: 'أعمال فاخر 5 نجوم', en: 'Historic Business 5-Star' },
        area: { ar: 'طريق تشوانغشان، وسط كوانتشو التاريخي', en: 'Zhuangyuan St, Historic Quanzhou' },
        highlights: { ar: 'يقع بالقرب من جامع تشينغجينغ التاريخي ومعالم اليونسكو، مثالي للجمع بين العمل والسياحة الثقافية', en: 'Minutes from historic Qingjing Mosque and UNESCO heritage streetscapes' }
      }
    ],
    recommendedRestaurants: [
      {
        id: 'qingjing-mosque-halal-dining',
        name: { ar: 'مطعم ومطبخ جامع تشينغجينغ التاريخي (Qingjing Mosque Halal Hall)', en: 'Qingjing Mosque Historic Halal Canteen', zh: '清净寺清真餐馆' },
        cuisineType: { ar: 'مأكولات إسلامية صينية وعربية حلال 100%', en: 'Historic Muslim Halal Dining' },
        isHalal: true,
        address: { ar: 'طريق تو مين، منطقة لي تشنغ، كوانتشو', en: 'Tumen St, Licheng District, Quanzhou', zh: '福建省泉州市鲤城区涂门街清净寺' },
        recommendedFor: { ar: 'صلاة الجمعة وزيارة أقدم جامع إسلامي حجري بالصين (بُني 1009 م)، ووجبات حلال موثوقة ولحم ضأن طازج', en: 'Friday congregational prayers at 1009 AD stone mosque, certified halal mutton & beef meals' }
      },
      {
        id: 'al-madina-halal-jinjiang',
        name: { ar: 'مطعم المدينة العربي بـ جينجيانغ (Al-Madina Arabic Restaurant)', en: 'Al-Madina Arabic & Middle Eastern Halal Jinjiang', zh: '麦地那中东阿拉伯清真餐厅（晋江店）' },
        cuisineType: { ar: 'مأكولات عربية وخليجية ومشاوي حلال', en: 'Authentic Arabic & Middle Eastern Halal' },
        isHalal: true,
        address: { ar: 'طريق هيبين، بالقرب من فندق ماركو بولو، جينجيانغ', en: 'Hebin Rd, near Marco Polo Hotel, Jinjiang', zh: '福建省泉州市晋江市崇德路商圈' },
        recommendedFor: { ar: 'مشاوي مشكلة، كبسة، حمص، فلافل، وشاي بالنعناع لرجال الأعمال العرب في جينجيانغ', en: 'Mixed grills, chicken mandi, hummus, and Arabic business dining' }
      },
      {
        id: 'xinjiang-oasis-halal-jinjiang',
        name: { ar: 'مطعم واحة شينجيانغ الإسلامي بـ جينجيانغ', en: 'Xinjiang Oasis Halal Restaurant Jinjiang', zh: '新疆绿洲风味清真餐厅' },
        cuisineType: { ar: 'مأكولات شينجيانغ ومشاوي حلال معتمدة', en: 'Xinjiang Uyghur Halal Kebabs & Pilaf' },
        isHalal: true,
        address: { ar: 'طريق تشينغمنغ، جينجيانغ، كوانتشو', en: 'Qingmeng Rd, Jinjiang, Quanzhou', zh: '福建省泉州市晋江市' },
        recommendedFor: { ar: 'أسياخ لحم ضأن مشوية على الفحم، خبز نان ساخن، ونودلز حلال شهية', en: 'Charcoal lamb skewers, fresh hot naan, and clean halal dining' }
      }
    ],
    touristAttractions: [
      {
        id: 'qingjing-mosque-unesco',
        name: { ar: 'جامع تشينغجينغ التاريخي العريق (Qingjing Mosque - 清净寺)', en: 'Qingjing Mosque (Oldest Stone Mosque in China, 1009 AD)', zh: '泉州清净寺' },
        category: { ar: 'أقدم مسجد حجري قائم في الصين وتراث عالمي لليونسكو', en: 'UNESCO World Heritage 1,000-Year-Old Islamic Stone Mosque' },
        description: { ar: 'تأسس عام 1009 ميلادي على يد تجار مسلمين عرب خلال عصر أسرة سونغ الشمالية، ويُعتبر معلماً فريداً بطرازه المعماري المستوحى من مساجد دمشق وبغداد مع بوابته الحجرية الضخمة ونقوش الآيات القرآنية بالكوفية القديمة.', en: 'Built in 1009 AD by Arab Muslim merchants on the Maritime Silk Road; features Damascus-inspired stone architecture and ancient Kufic Quranic stone inscriptions.' }
      },
      {
        id: 'kaiyuan-temple-twin-pagodas',
        name: { ar: 'معبد كاييوان وبرجا التوأم الحجريان (Kaiyuan Temple - 开元寺)', en: 'Kaiyuan Temple & Twin Stone Pagodas UNESCO Site', zh: '泉州开元寺' },
        category: { ar: 'تراث تاريخي عالمي لليونسكو', en: 'UNESCO World Heritage Ancient Buddhist Landmark' },
        description: { ar: 'أكبر مجمع معابد بوذي تاريخي في مقاطعة فوجيان تأسس عام 686 م، يشتهر ببرجي الحجر التوأم المنحوتين بدقة وأشجار البانيان العملاقة.', en: 'Grand 7th-century temple complex renowned for China tallest twin stone pagodas and sacred ancient banyan courtyards.' }
      }
    ],
    essentialServices: [
      {
        id: 'jinjiang-footwear-testing-center',
        serviceType: { ar: 'فحص جودة الأحذية والمطابقة الدولية', en: 'Footwear Quality & Durability Testing' },
        title: { ar: 'المركز الوطني لفحص وتفتيش جودة الأحذية بـ جينجيانغ', en: 'National Footwear Quality Inspection & Supervision Center (Fujian)', zh: '国家鞋类产品质量监督检验中心（福建晋江）' },
        description: { ar: 'إجراء اختبارات انحناء النعال (Sole Flexing)، مقاومة التآكل (Abrasion Resistance)، قوة اللصق (Bonding Strength)، ومطابقة المواصفات القياسية الدولية قبل الشحن.', en: 'Accredited testing laboratory conducting flex endurance, slip resistance, and chemical safety certifications for footwear exports.' }
      }
    ]
  },
  tradeFairs: [
    {
      id: 'jinjiang-footwear-expo',
      name: { ar: 'معرض جينجيانغ الدولي لصناعة الأحذية والرياضة (Jinjiang Footwear Expo)', en: 'China (Jinjiang) International Footwear & Sports Industry Expo', zh: '中国（晋江）国际鞋业暨体育产业博览会' },
      industry: 'Footwear, Sports Sneakers, Shoe Materials & Machinery',
      venue: { ar: 'مركز جينجيانغ الدولي للمعارض', en: 'Jinjiang International Conference & Exhibition Center', zh: '晋江国际会展中心' },
      occurrence: { ar: '19-22 أبريل سنوياً', en: 'Annually in April (Apr 19-22)' },
      officialWebsite: 'http://www.cn-fpe.com',
      bestFor: ['Footwear Importers', 'Sports Brand Sourcing', 'Shoe Soles & Material Buyers', 'Shoe Machinery Traders']
    },
    {
      id: 'shishi-cross-strait-textile-fair',
      name: { ar: 'معرض شيشي الدولي للملابس الكاجوال والأقمشة', en: 'Cross-Strait Textile & Garment Fair (Shishi)', zh: '海峡两岸纺织服装博览会（石狮海博会）' },
      industry: 'Casual Garments, Outerwear, Denim & Textile Supply Chain',
      venue: { ar: 'مدينة شيشي للملابس الجاهزة', en: 'Shishi International Garment Exhibition Center', zh: '石狮服装城展览艺术中心' },
      occurrence: { ar: 'أبريل سنوياً (متزامن مع معرض الأحذية)', en: 'Annually in April' },
      officialWebsite: 'http://www.stgf.com.cn',
      bestFor: ['Casual Wear Importers', 'Outerwear Buyers', 'Denim & Garment Wholesalers']
    }
  ],
  relatedCitySlugs: ['xiamen', 'fuzhou', 'putian', 'guangzhou', 'wenzhou'],
  relatedProductSlugs: ['footwear-sneakers', 'apparel', 'textiles', 'ceramics-porcelain'],
  lastUpdated: '2026-09-13',
  seo: {
    title: { ar: 'دليل كوانتشو وجينجيانغ التجاري | عاصمة الأحذية الرياضية والملابس وخزف ديهوا', en: 'Quanzhou Jinjiang Sourcing Guide | World Footwear & Sportswear Capital' },
    description: { ar: 'دليل شامل للاستيراد من كوانتشو وجينجيانغ: مصانع الأحذية الرياضية والسنيكرز، سوق تشيندوي لمواد الأحذية، ألبسة شيشي، خزف ديهوا، والجامع التاريخي والمطاعم الحلال.', en: 'Complete sourcing guide to Quanzhou & Jinjiang: World Footwear Capital, Anta HQ, Chendai shoe material city, Shishi apparel, Dehua porcelain, and Islamic halal guide.' }
  }
};
