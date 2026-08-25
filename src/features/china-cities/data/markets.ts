import { IWholesaleMarket } from '../types';

export const CHINA_MARKETS_DATA: IWholesaleMarket[] = [
  {
    id: 'canton-fair-complex',
    cityId: 'guangzhou',
    name: {
      ar: 'مجمع معرض كانتون (Pazhou Complex)',
      en: 'Canton Fair Complex (Pazhou)',
      zh: '广交会展馆'
    },
    type: 'Wholesale',
    category: 'Trade Fair',
    description: {
      ar: 'أكبر مجمع معارض تجارية عالمي يضم 3 فترات لمعرض كانتون الربيعي والخريفي.',
      en: 'World largest trade show complex hosting the biannual Canton Fair.'
    },
    address: {
      ar: 'شارع يويجيانغ زونغ، منطقة هايتشو، جوانزو',
      en: 'Yuejiang Middle Rd, Haizhu District, Guangzhou'
    },
    nearestMetro: 'Pazhou Station / Xingangdong Station (Line 8)',
    operatingHours: '09:00 - 18:00 (During Fairs)',
    moqLevel: 'High'
  },
  {
    id: 'zhanxi-watch-market',
    cityId: 'guangzhou',
    name: {
      ar: 'سوق جانشي للساعات',
      en: 'Zhanxi Watch Market',
      zh: '站西钟表城'
    },
    type: 'Wholesale',
    category: 'Watches',
    description: {
      ar: 'المركز الأول عالمياً لتجارة الساعات وقطع الغيار والإكسسوارات بالجملة.',
      en: 'Premier international market for wholesale watches and accessories.'
    },
    address: {
      ar: 'طريق جانشي، بجوار محطة قطار جوانزو',
      en: 'Zhanxi Road, Yuexiu District, Guangzhou'
    },
    nearestMetro: 'Guangzhou Railway Station (Line 2/5)',
    moqLevel: 'Low'
  },
  {
    id: 'baiyun-leather-center',
    cityId: 'guangzhou',
    name: {
      ar: 'مركز باييون للجلديات والحقائب',
      en: 'Baiyun World Leather Trading Center',
      zh: '白云皮具城'
    },
    type: 'Wholesale',
    category: 'Leather Goods',
    description: {
      ar: 'أكبر سوق جملة للحقائب الجلدية والمحفظات والأمتعة.',
      en: 'Leading global center for leather bags and luggage wholesale.'
    },
    address: {
      ar: 'طريق جيانغ شاي، منطقة باييون، جوانزو',
      en: 'Jiefang North Road, Baiyun District, Guangzhou'
    },
    nearestMetro: 'Sanyuanli Station (Line 2)',
    moqLevel: 'Medium'
  },
  {
    id: 'huaqiangbei-electronics',
    cityId: 'shenzhen',
    name: {
      ar: 'سوق هواكيانغبي للإلكترونيات',
      en: 'Huaqiangbei Electronics World',
      zh: '华强北商业街'
    },
    type: 'Wholesale',
    category: 'Electronics',
    description: {
      ar: 'عاصمة الإلكترونيات والمكونات الصلبة والشاشات والشرائح في العالم.',
      en: 'World largest electronics, chips, and hardware component market.'
    },
    address: {
      ar: 'شارع هواكيانغبي الشمالي، منطقة فوتيان، شينزن',
      en: 'Huaqiang North Road, Futian District, Shenzhen'
    },
    nearestMetro: 'Huaqiangbei Station (Line 2/7)',
    moqLevel: 'Low'
  },
  {
    id: 'yiwu-futian-market',
    cityId: 'yiwu',
    name: {
      ar: 'سوق فوتيان التجاري الدولي',
      en: 'Yiwu International Trade City (Futian Market)',
      zh: '义乌国际商贸城'
    },
    type: 'Wholesale',
    category: 'Small Commodities',
    description: {
      ar: 'أكبر سوق جملة للسلع الاستهلاكية والهدايا والأدوات المنزلية في العالم (75,000 كشك).',
      en: 'World largest small commodities wholesale market with 75,000+ booths.'
    },
    address: {
      ar: 'طريق شوتشو الكبيرة، إيوا، تشيجيانغ',
      en: 'Chouzhou North Road, Yiwu, Zhejiang'
    },
    nearestAirport: 'Yiwu Airport (YWU)',
    moqLevel: 'Low'
  },
  {
    id: 'louvre-furniture-lecong',
    cityId: 'foshan',
    name: {
      ar: 'مجمع اللوفر للأثاث في ليكونغ',
      en: 'Louvre Furniture Exhibition Center',
      zh: '罗浮宫国际家具博览中心'
    },
    type: 'Wholesale',
    category: 'Furniture',
    description: {
      ar: 'أفخم وأكبر مجمع تجاري للأثاث والتصميم الداخلي في العالم.',
      en: 'World-renowned luxury furniture and interior design trade center.'
    },
    address: {
      ar: 'طريق 325 الوطني، ليكونغ، شوندي، فوشان',
      en: '325 National Highway, Lecong, Shunde, Foshan'
    },
    nearestMetro: 'Kengkou Station (Line 1 then taxi)',
    moqLevel: 'Flexible'
  },
  {
    id: 'china-ceramics-city-foshan',
    cityId: 'foshan',
    name: {
      ar: 'مدينة السيراميك الصينية',
      en: 'China Ceramics City (CCC)',
      zh: '中国陶瓷城'
    },
    type: 'Wholesale',
    category: 'Building Materials',
    description: {
      ar: 'المركز التجاري الدولي لجميع أنواع السيراميك والبورسلين والأدوات الصحية.',
      en: 'International hub for ceramic tiles, porcelain, and sanitary ware.'
    },
    address: {
      ar: 'طريق جيانغوان الثالث، تشانتشنغ، فوشان',
      en: 'No. 2 Jiangwan 3rd Road, Chancheng, Foshan'
    },
    nearestMetro: 'Ancestral Temple Station (Guangfo Line)',
    moqLevel: 'Medium'
  },
  {
    id: 'keqiao-textile-city',
    cityId: 'shaoxing',
    name: {
      ar: 'مدينة الصين العالمية للأقمشة في كيشياو',
      en: 'Keqiao China Textile City',
      zh: '中国轻纺城'
    },
    type: 'Wholesale',
    category: 'Textiles',
    description: {
      ar: 'أكبر سوق جملة مغلق ومفتوح لجميع أنواع الأقمشة والمنسوجات في آسيا والعالم.',
      en: 'Asia largest textile and fabric wholesale market center.'
    },
    address: {
      ar: 'طريق كيشياو التجاري، شاوشينغ، تشيجيانغ',
      en: 'Keqiao District, Shaoxing, Zhejiang'
    },
    nearestMetro: 'Shaoxing Metro Line 1 (Keqiao Station)',
    moqLevel: 'Flexible'
  },
  {
    id: 'guzhen-lighting-plaza',
    cityId: 'zhongshan',
    name: {
      ar: 'مدينة ستارلايت للإضاءة في جوتشن',
      en: 'Guzhen Starlight Lighting Plaza',
      zh: '古镇星光联盟灯饰广场'
    },
    type: 'Wholesale',
    category: 'Lighting',
    description: {
      ar: 'أضخم مجمع تجاري معروض لوحدات الإضاءة والنجف الـ LED في العالم.',
      en: 'World-leading lighting fixture and LED commercial plaza.'
    },
    address: {
      ar: 'طريق جوتشن الرئيسي، تشونغشان، غوانغدونغ',
      en: 'Guzhen Main Road, Zhongshan, Guangdong'
    },
    nearestMetro: 'Guzhen Railway Station',
    moqLevel: 'Low'
  },
  {
    id: 'yongkang-hardware-city',
    cityId: 'yongkang',
    name: {
      ar: 'مدينة يونغكانغ الدولية الخردوات والأبواب', en: 'China Yongkang Hardware City', zh: '中国科技五金城'
    },
    type: 'Wholesale',
    category: 'Hardware & Tools',
    description: {
      ar: 'أكبر سوق لمصانع وموردي الأبواب المصفحة والأدوات والمعدات الفولاذية في الصين.',
      en: 'Largest hardware, security door, and power tool wholesale trade zone.'
    },
    address: {
      ar: 'طريق الأجهزة، يونغكانغ، تشيجيانغ', en: 'Hardware Avenue, Yongkang, Zhejiang'
    },
    operatingHours: '08:30 - 17:00',
    moqLevel: 'Low'
  },
  // SHANGHAI MARKETS
  {
    id: 'shanghai-qipu-garment',
    cityId: 'shanghai',
    name: { ar: 'سوق شيبو لو لملابس الجملة في شانغهاي', en: 'Qipu Road Garment Wholesale Market', zh: '七浦路服装批发市场' },
    type: 'Wholesale',
    category: 'Garments & Fashion',
    description: {
      ar: 'أشهر وأضخم مجمع تجاري لبيع الملابس والأزياء بالجملة في وسط مدينة شانغهاي (يضم عدة مجمعات مثل Xingwang & Saint Luo).',
      en: 'Shanghai premier apparel wholesale hub featuring multiple multi-story fashion marts (Xingwang, Saint Luo).'
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
      ar: 'سوق مخصص لأحدث أجهزة الكمبيوتر، الهواتف، قطع الإلكترونيات، والكاميرات.',
      en: 'Major digital, computer, smartphone, and photography gear wholesale center in Shanghai.'
    },
    address: { ar: '1 طريق هواهاي الوسطى، منطقة هوانغبو، شانغهاي', en: '1 Huaihai Middle Rd, Huangpu District, Shanghai' },
    nearestMetro: 'South Huangpu Road Station (Line 1)',
    operatingHours: '09:30 - 19:00',
    moqLevel: 'Low'
  },
  {
    id: 'shanghai-international-hotel-supplies',
    cityId: 'shanghai',
    name: { ar: 'سوق شانغهاي الدولي لمعدات الفنادق والمطاعم', en: 'Shanghai International Hotel Equipment & Supplies Market', zh: '上海酒店设备用品市场' },
    type: 'Wholesale',
    category: 'Hotel & Kitchen Supplies',
    description: {
      ar: 'أضخم مركز لتجهيزات المطابخ التجارية، أدوات الفنادق، وأجهزة الضيافة بالجملة.',
      en: 'Largest trade market for commercial kitchen equipment, tableware, and hotel amenities.'
    },
    address: { ar: '345 طريق أوهان، منطقة بوتو، شانغهاي', en: '345 Ao\'nan Rd, Putuo District, Shanghai' },
    nearestMetro: 'Zhenping Road Station (Line 3/4/7)',
    moqLevel: 'Medium'
  },
  // HANGZHOU MARKETS
  {
    id: 'hangzhou-sijiqing-garment',
    cityId: 'hangzhou',
    name: { ar: 'سوق سيتشيتشينغ لملابس الجملة في هانغتشو', en: 'Sijiqing Garment Wholesale Market', zh: '四季青服装批发市场' },
    type: 'Wholesale',
    category: 'Apparel & Textiles',
    description: {
      ar: 'أحد أشهر وأضخم 3 أسواق لبيع الملابس بالجملة في الصين قاطبة، يزوده ملايين التجار أسبوعياً.',
      en: 'One of China top 3 garment wholesale centers covering over 20 sub-markets and fashion plazas.'
    },
    address: { ar: 'طريق هانغهاي، منطقة شينغتشينغ، هانغتشو', en: 'Hanghai Rd, Shangcheng District, Hangzhou' },
    nearestMetro: 'Sijiqing Metro Station (Line 7/9)',
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
      ar: 'السوق التراثي والوطني الأول لتجارة منتجات الحرير الطبيعي والستائر والأقمشة الفاخرة.',
      en: 'China official premier wholesale and retail market for pure silk fabrics, scarves, and garments.'
    },
    address: { ar: '253 طريق تيبانغ، هانغتشو', en: '253 Tiyuchang Rd, Hangzhou' },
    nearestMetro: 'North Jianguo Road Station (Line 2/5)',
    operatingHours: '08:30 - 17:30',
    moqLevel: 'Flexible'
  },
  // DONGGUAN MARKETS
  {
    id: 'dongguan-humen-fumin-garment',
    cityId: 'dongguan',
    name: { ar: 'سوق فومين لملابس الجملة في هومين', en: 'Humen Fumin Garment Wholesale City', zh: '虎门富民服装城' },
    type: 'Wholesale',
    category: 'Apparel',
    description: {
      ar: 'العاصمة الشرقية لملابس الجملة والأزياء النسائية والرياضية بأسعار المصنع المباشرة.',
      en: 'Famous garment wholesale center in Humen serving domestic and global apparel importers.'
    },
    address: { ar: 'طريق بينهاي، هومين، دونغوان', en: 'Binhai Rd, Humen Town, Dongguan' },
    nearestMetro: 'Humen High-Speed Railway Station',
    moqLevel: 'Low'
  },
  // NINGBO MARKETS
  {
    id: 'ningbo-light-commodities',
    cityId: 'ningbo',
    name: { ar: 'سوق نينغبو للسلع الخفيفة والأجهزة', en: 'Ningbo Light Industrial Commodities Market', zh: '宁波轻纺城' },
    type: 'Wholesale',
    category: 'Small Commodities & Appliances',
    description: {
      ar: 'سوق جملة مجمع للسلع الاستهلاكية، الأدوات المنزلية، والمنسوجات بالقرب من الميناء.',
      en: 'Major wholesale hub for consumer goods, textiles, and small home products in Ningbo.'
    },
    address: { ar: 'طريق ينزو، نينغبو', en: 'Yinzhou Rd, Ningbo, Zhejiang' },
    nearestMetro: 'Yinzhou Center Station',
    moqLevel: 'Low'
  },
  // SUZHOU MARKETS
  {
    id: 'suzhou-huaihai-bridal',
    cityId: 'suzhou',
    name: { ar: 'مدينة فساتين الزفاف والأزياء في هوانتشي سوتشو', en: 'Huaihai (Huqiu) Bridal Dress City', zh: '虎丘婚纱城' },
    type: 'Wholesale',
    category: 'Bridal Gowns & Apparel',
    description: {
      ar: 'المركز الأول عالمياً لتصنيع وتصدير فساتين الزفاف، السهرة، والملابس الفاخرة بالجملة.',
      en: 'World leading manufacturing and wholesale center for wedding dresses, evening gowns, and accessories.'
    },
    address: { ar: 'طريق هوتشيو، سوتشو، جيانغسو', en: 'Huqiu Road, Gusu District, Suzhou' },
    nearestMetro: 'Huqiu Station (Line 6)',
    moqLevel: 'Low'
  },
  // XIAMEN MARKETS
  {
    id: 'xiamen-stone-center',
    cityId: 'xiamen',
    name: { ar: 'مركز شيامن الدولي لتجارة الرخام والحجر', en: 'Xiamen International Stone & Marble Center', zh: '厦门石材交易中心' },
    type: 'Wholesale',
    category: 'Building Materials',
    description: {
      ar: 'أضخم مركز شحن وتصدير للرخام الطبيعي والجرانيت وألواح البناء لجميع دول العالم.',
      en: 'Global trade hub for natural marble slabs, granite, and stone processing export.'
    },
    address: { ar: 'منطقة هولي، شيامن، فوجيان', en: 'Huli District, Xiamen, Fujian' },
    nearestMetro: 'Cruisecenter Station',
    moqLevel: 'High'
  },
  // QUANZHOU MARKETS
  {
    id: 'jinjiang-shoe-material-city',
    cityId: 'quanzhou',
    name: { ar: 'مدينة الأحذية والمنسوجات الدولية في جينجيانغ', en: 'Jinjiang International Shoe & Footwear City', zh: '晋江国际鞋纺城' },
    type: 'Wholesale',
    category: 'Footwear & Apparel',
    description: {
      ar: 'أكبر سوق مجمع لمصانع الأحذية الرياضية ومكوناتها ونعال الأحذية والأنسجة في العالم.',
      en: 'World largest wholesale plaza for sports shoes, soles, shoe materials, and athletic apparel.'
    },
    address: { ar: 'بلدة تشيندوي، جينجيانغ، كوانتشو، فوجيان', en: 'Chendai Town, Jinjiang, Quanzhou, Fujian' },
    nearestAirport: 'Jinjiang Airport (JJN)',
    moqLevel: 'Low'
  },
  // WENZHOU MARKETS
  {
    id: 'wenzhou-liushi-electrical',
    cityId: 'wenzhou',
    name: { ar: 'مدينة المفاتيح والكهربائيات في ليوشي', en: 'Liushi Low-Voltage Electrical Market', zh: '柳市中国电气城' },
    type: 'Wholesale',
    category: 'Electronics & Hardware',
    description: {
      ar: 'عاصمة القواطع والمفاتيح الكهربائية المنخفضة الجهد والمحولات (مقر CHINT و DELIXI).',
      en: 'China capital for circuit breakers, switches, transformers, and industrial electricals.'
    },
    address: { ar: 'بلدة ليوشي، يويشينغ، وينتشو، تشيجيانغ', en: 'Liushi Town, Yueqing, Wenzhou, Zhejiang' },
    operatingHours: '08:00 - 17:30',
    moqLevel: 'Low'
  },
  // CHENGDU MARKETS
  {
    id: 'chengdu-women-shoes-city',
    cityId: 'chengdu',
    name: { ar: 'مدينة الأحذية النسائية الصينية في تشنغدو', en: 'Chengdu China Women Footwear City', zh: '中国女鞋之都' },
    type: 'Wholesale',
    category: 'Footwear',
    description: {
      ar: 'أضخم تجمع لمصانع وتجار الأحذية الجلدية النسائية عالية الجودة والتصاميم العصرية.',
      en: 'Major wholesale hub for genuine leather women shoes and export footwear styling.'
    },
    address: { ar: 'منطقة ووهو، تشنغدو، سيتشوان', en: 'Wuhou District, Chengdu, Sichuan' },
    nearestMetro: 'Wuhou Station',
    moqLevel: 'Low'
  },
  // CHONGQING MARKETS
  {
    id: 'chongqing-chaotianmen-market',
    cityId: 'chongqing',
    name: { ar: 'سوق تشاوتيانمن للجملة في تشونغتشينغ', en: 'Chongqing Chaotianmen Wholesale Market', zh: '朝天门综合批发市场' },
    type: 'Wholesale',
    category: 'Garments & General Merchandise',
    description: {
      ar: 'أحد أقدم وأكبر مجمعات الجملة في جنوب غرب الصين للملابس والأحذية والسلع الاستهلاكية.',
      en: 'Massive traditional and modern wholesale center in Chongqing for garments and general merchandise.'
    },
    address: { ar: 'منطقة يوتشونغ، تشونغتشينغ', en: 'Yuzhong District, Chongqing' },
    nearestMetro: 'Chaotianmen Station (Line 1)',
    moqLevel: 'Low'
  },
  // LINYI MARKETS
  {
    id: 'linyi-small-commodities',
    cityId: 'linyi',
    name: { ar: 'سوق السلع الاستهلاكية والخردوات في لينبي', en: 'Linyi Small Commodities & Hardware Market', zh: '临沂小商品城' },
    type: 'Wholesale',
    category: 'Small Commodities & Hardware',
    description: {
      ar: 'إيوو الشمال: أكثر من 100 سوق مجمع للأدوات اليدوية والخردوات والبلاستيك بأسعار الجملة.',
      en: 'The Yiwu of North China: Massive multi-sector wholesale trade zone for hardware and commodities.'
    },
    address: { ar: 'منطقة لانساه، لينبي، شاندونغ', en: 'Lanshan District, Linyi, Shandong' },
    moqLevel: 'Low'
  },
  // QINGDAO MARKETS
  {
    id: 'qingdao-jimo-garment-market',
    cityId: 'qingdao',
    name: { ar: 'سوق جيمو لملابس الجملة في تشينغداو', en: 'Qingdao Jimo Garment Wholesale City', zh: '即墨服装市场' },
    type: 'Wholesale',
    category: 'Garments & Textiles',
    description: {
      ar: 'أكبر سوق لمصانع ملابس الأطفال والملابس المحبوكة والسترات الشتوية في شمال الصين.',
      en: 'Northern China largest apparel wholesale market specializing in knitwear and outerwear.'
    },
    address: { ar: 'منطقة جيمو، تشينغداo، شاندونغ', en: 'Jimo District, Qingdao, Shandong' },
    moqLevel: 'Low'
  }
];

