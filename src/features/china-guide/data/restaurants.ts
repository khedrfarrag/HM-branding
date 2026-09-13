import { IChinaCommercialEntity } from '../types';

export const CHINA_RESTAURANTS_DATA: IChinaCommercialEntity[] = [
  // Beijing (بكين)
  {
    id: 'jubaoyuan-halal-hotpot-beijing',
    slug: 'jubaoyuan-halal-hotpot-beijing',
    subdomain: 'restaurants',
    citySlug: 'beijing',
    name: {
      ar: 'مطعم جوباويوان التاريخي للحوم الحلال بشارع نيوجيه (بكين)',
      en: 'Jubaoyuan Historic Halal Hotpot (Niujie Beijing)',
      zh: '聚宝源清真牛羊肉庄 (牛街总店)'
    },
    category: {
      ar: 'مطبخ إسلامي تقليدي ومشاوي وضأن حلال',
      en: 'Traditional Beijing Halal Hotpot & Hand-Sliced Lamb'
    },
    description: {
      ar: 'المطعم الإسلامي الأكثر شهرة في بكين لأكثر من قرن في قلب حي نيوجيه المسلم التاريخي؛ يقدم أجود لحوم الضأن الحلال المطهوة على القدور النحاسية التقليدية مع صلصة السمسم العريقة وخبز الشاوبينغ الساخن.',
      en: 'Beijing most celebrated century-old halal institution located in the historic Niujie Muslim Quarter, world-famous for copper hotpot and premium hand-sliced halal mutton.'
    },
    coverImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 3840,
    coordinates: { latitude: 39.8824, longitude: 116.3637 },
    address: {
      ar: 'رقم 5 شارع نيوجيه التجاري، حي شيتشنغ، بكين',
      en: 'No. 5 Niujie Commercial Street, Xicheng District, Beijing',
      zh: '北京市西城区牛街5号'
    },
    contactInfo: { phone: '+86-10-8354-5602' },
    websiteUrl: 'https://www.dianping.com/shop/507567',
    features: {
      ar: ['لحوم حلال معتمدة 100%', 'قريب من مسجد نيوجيه التاريخي', 'غرف خاصة لاجتماعات العمل', 'خبز سمسم طازج يومياً'],
      en: ['100% Certified Halal Lamb', 'Near Historic Niujie Mosque', 'VIP Private Dining Suites', 'Freshly Baked Sesame Shaobing']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-10',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'تمت الزيارة والتوثيق الميداني؛ المطعم رقم 1 لرجال الأعمال والوفود العربية في بكين، يفضل الحجز المسبق للغرف الخاصة لتجنب طوابير الانتظار الطويلة.',
        en: 'Field-verified by Hussam Mabrouk. The undisputed #1 halal dining venue for Arab business delegations in Beijing. Advance booking recommended.'
      }
    },
    lastUpdated: '2026-09-13'
  },
  {
    id: 'hongbinlou-halal-restaurant-beijing',
    slug: 'hongbinlou-halal-restaurant-beijing',
    subdomain: 'restaurants',
    citySlug: 'beijing',
    name: {
      ar: 'مطعم هونغبين لو الإمبراطوري الحلال (تأسس عام 1853)',
      en: 'Hongbinlou Historic Imperial Halal Restaurant',
      zh: '鸿宾楼清真饭庄 (西城区展馆路)'
    },
    category: {
      ar: 'المطبخ الإسلامي الإمبراطوري الفاخر وبط بكين الحلال',
      en: 'Imperial Muslim Cuisine & Halal Peking Roast Duck'
    },
    description: {
      ar: 'أعرق مطعم إسلامي فاخر في بكين، يقدم بط بكين المشوي المعتمد حلال والولائم الإمبراطورية التاريخية مع خدمة فندقية رفيعة ملائمة لاستضافة كبار الشركاء التجاريين.',
      en: 'Beijing most prestigious high-end Islamic culinary house since 1853, offering certified Halal Peking Roast Duck and royal banquets.'
    },
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviewCount: 2290,
    coordinates: { latitude: 39.9328, longitude: 116.3475 },
    address: {
      ar: 'رقم 11 طريق تشانلانغوان، حي شيتشنغ، بكين',
      en: 'No. 11 Zhanlanguan Road, Xicheng District, Beijing',
      zh: '北京市西城区展览馆路11号'
    },
    contactInfo: { phone: '+86-10-6899-4560' },
    websiteUrl: 'https://www.dianping.com/shop/507519',
    features: {
      ar: ['بط بكين مشوي حلال معتمد', 'قاعات ولائم لرجال الأعمال', 'قائمة طعام باللغة الإنجليزية والصينية', 'معتمد من الجمعية الإسلامية ببكين'],
      en: ['Certified Halal Peking Duck', 'Executive Banquet Rooms', 'Bilingual English/Chinese Menus', 'Beijing Islamic Association Certified']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-08',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'الوجهة الرسمية الفاخرة للاحتفاء بالشركاء الصينيين وتوقيع العقود مع الاستمتاع ببط بكين الحلال 100%.',
        en: 'The prime executive venue for hosting Chinese suppliers and celebrating contract signings with 100% Halal Peking Duck.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Guangzhou (كوانزو)
  {
    id: 'bosphorus-turkish-restaurant-guangzhou',
    slug: 'bosphorus-turkish-restaurant-guangzhou',
    subdomain: 'restaurants',
    citySlug: 'guangzhou',
    name: {
      ar: 'مطعم البوسفور التركي الحلال بـ كوانزو (Bosphorus)',
      en: 'Bosphorus Turkish Halal Restaurant Guangzhou',
      zh: '博斯普鲁斯土耳其清真餐厅 (环市东路淘金店)'
    },
    category: {
      ar: 'مأكولات تركية وشواء عثماني حلال',
      en: 'Authentic Turkish Grills, Kebabs & Mediterranean Halal'
    },
    description: {
      ar: 'الملتقى الأشهر لتجار ومستوردي الشرق الأوسط في كوانزو بحي تاوجين التجاري؛ يقدم المشاوي التركية الفاخرة، كباب أضنة، الفطائر باللحم والجبن، والشاي والحلويات الشرقية.',
      en: 'The premier Middle Eastern and Turkish culinary networking landmark in Guangzhou Taojin hub, serving authentic grilled kebabs and Turkish pide.'
    },
    coverImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviewCount: 4120,
    coordinates: { latitude: 23.1396, longitude: 113.2842 },
    address: {
      ar: 'رقم 304 طريق هوانشي دونغ، حي يويشيو، كوانزو',
      en: 'No. 304 Huanshi East Road, Yuexiu District, Guangzhou',
      zh: '广州市越秀区环市东路304号 (近淘金地铁站)'
    },
    contactInfo: { phone: '+86-20-8356-7605' },
    websiteUrl: 'https://www.dianping.com/shop/2468307',
    features: {
      ar: ['حلال 100%', 'قريب من مسجد سعد بن أبي وقاص وقنصليات الدول العربية', 'طاقم عمل يتحدث العربية والإنجليزية', 'مكان مفضل لاجتماعات الأعمال'],
      en: ['100% Certified Halal', 'Near Saad Ibn Abi Waqqas Mosque', 'Arabic & English Speaking Staff', 'Popular Trading Deal Hub']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-12',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'موقع استراتيجي ممتاز في تاوجين، طعام حلال مضمون وخدمة سريعة ممتازة أثناء فترة معرض كانتون الدولي.',
        en: 'Strategic location in Taojin. Highly dependable halal quality and swift service during Canton Fair periods.'
      }
    },
    lastUpdated: '2026-09-13'
  },
  {
    id: 'al-sham-restaurant-guangzhou',
    slug: 'al-sham-restaurant-guangzhou',
    subdomain: 'restaurants',
    citySlug: 'guangzhou',
    name: {
      ar: 'مطعم الشام السوري اللبناني الحلال (كوانزو)',
      en: 'Al-Sham Syrian & Lebanese Halal Restaurant Guangzhou',
      zh: '叙利亚沙姆清真餐厅 (广州小北商圈)'
    },
    category: {
      ar: 'مطبخ سوري ولبناني ومشاوي حلبية حلال',
      en: 'Levantine Syrian/Lebanese Halal Cuisine & Aleppine Grills'
    },
    description: {
      ar: 'أحد أقدم المطاعم العربية في كوانزو بحي شياوبي الشهير؛ متخصص في المأكولات الشامية الأصيلة، المشاوي على الفحم، الكبب، الحمص، والفتوش.',
      en: 'Longstanding authentic Levantine dining hub in Guangzhou Xiaobei Arabic quarter, serving charcoal grills, kibbeh, and mezze.'
    },
    coverImage: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=80',
    rating: 4.7,
    reviewCount: 3100,
    coordinates: { latitude: 23.1415, longitude: 113.2778 },
    address: {
      ar: 'شارع باوهان التجاري، حي شياوبي، كوانزو',
      en: 'Baohan Commercial Street, Xiaobei, Yuexiu District, Guangzhou',
      zh: '广州市越秀区小北路宝汉直街商圈'
    },
    contactInfo: { phone: '+86-20-8350-1888' },
    websiteUrl: 'https://www.dianping.com/shop/2198305',
    features: {
      ar: ['طباخون سوريون محترفون', 'قريب من محطة مترو شياوبي الخط 5', 'خبز عربي ساخن من الفرن الحجري', 'شاورما دجاج ولحم طازجة'],
      en: ['Authentic Syrian Master Chefs', 'Near Xiaobei Metro Line 5', 'Fresh Stone-Oven Arabic Bread', 'Authentic Chicken & Beef Shawarma']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-11',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'بيئة مريحة ولقاء دائم للمستوردين من مصر، السعودية، والإمارات؛ موثق ومعتمد بنسبة 100%.',
        en: 'Comfortable atmosphere for Gulf and Egyptian importers. Verified halal and highly recommended by Hussam Mabrouk.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Yiwu (إيوو)
  {
    id: 'ward-al-sham-restaurant-yiwu',
    slug: 'ward-al-sham-restaurant-yiwu',
    subdomain: 'restaurants',
    citySlug: 'yiwu',
    name: {
      ar: 'مطعم ورد الشام السوري الحلال بـ إيوو (الملتقى التجاري العربي)',
      en: 'Ward Al-Sham Syrian Halal Restaurant Yiwu',
      zh: '大马士革玫瑰叙利亚清真餐厅 (义乌宾王商圈)'
    },
    category: {
      ar: 'مطبخ سوري وعربي ومشاوي ومأكولات بحرية حلال',
      en: 'Syrian & Arab Halal Dining & Seafood'
    },
    description: {
      ar: 'المعلم الأبرز للمطاعم العربية في مدينة إيوو بحي تشوتشو / بينوانغ بالقرب من سوق الفوتيان؛ يقدم خروف محشي، مشاوي حلبية، وشاورما، ويعد المركز الأكبر للقاء رجال الأعمال العرب في إيوو.',
      en: 'The definitive Arab business dining landmark in Yiwu Chouzhou/Binwang commercial district near Futian Market, serving lamb feasts and Levantine mezze.'
    },
    coverImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 5200,
    coordinates: { latitude: 29.3142, longitude: 120.0834 },
    address: {
      ar: 'رقم 158 طريق بينوانغ، حي تشوتشو، إيوو، تشيجيانغ',
      en: 'No. 158 Binwang Road, Chouzhou, Yiwu, Zhejiang',
      zh: '浙江省义乌市稠州北路与宾王路交叉口'
    },
    contactInfo: { phone: '+86-579-8558-8889' },
    websiteUrl: 'https://www.dianping.com/shop/3358091',
    features: {
      ar: ['لحوم حلال مذبوحة محلياً', 'قريب من سوق الفوتيان وسوق بينوانغ', 'قاعات خاصة واسعة لعقد الصفقات', 'خدمة واي فاي سريعة وشاشات أسعار العملات'],
      en: ['Locally Slaughtered Halal Meat', 'Near Futian Market Complex', 'Expansive Private Deal Rooms', 'High-Speed Wi-Fi & Currency Boards']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-09',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'المطعم الأكثر شعبية بين المستوردين في إيوو؛ المكان المثالي لتناول العشاء والتشبيك مع كبرى شركات الشحن والمكاتب التجارية.',
        en: 'The most popular dining spot for importers in Yiwu. Perfect for networking with shipping forwarders and trade agents.'
      }
    },
    lastUpdated: '2026-09-13'
  },
  {
    id: 'sultan-turkish-restaurant-yiwu',
    slug: 'sultan-turkish-restaurant-yiwu',
    subdomain: 'restaurants',
    citySlug: 'yiwu',
    name: {
      ar: 'مطعم السلطان التركي الحلال بـ إيوو (Sultan Restaurant)',
      en: 'Sultan Turkish Halal Restaurant Yiwu',
      zh: '苏丹土耳其清真餐厅 (义乌稠州北路)'
    },
    category: {
      ar: 'مطبخ تركي وعثماني ومشاوي حلال',
      en: 'Authentic Turkish Cuisine, Steaks & Kebabs'
    },
    description: {
      ar: 'مطعم تركي فاخر بشارع تشوتشو الشمالي؛ يقدم ستيك اللحم المشوي، إسكندر كباب، وطواجن الفخار العثمانية مع تشكيلة بقلاوة طازجة وشاي تركي تقليدي.',
      en: 'High-end Turkish culinary experience on Chouzhou North Road in Yiwu, renowned for Iskender kebabs, charcoal steaks, and fresh baklava.'
    },
    coverImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviewCount: 3750,
    coordinates: { latitude: 29.3178, longitude: 120.0865 },
    address: {
      ar: 'رقم 475 طريق تشوتشو الشمالي، إيوو، تشيجيانغ',
      en: 'No. 475 Chouzhou North Road, Yiwu, Zhejiang',
      zh: '浙江省金华市义乌市稠州北路475号'
    },
    contactInfo: { phone: '+86-579-8554-7070' },
    websiteUrl: 'https://www.dianping.com/shop/3358088',
    features: {
      ar: ['معتمد حلال 100%', 'أجواء عائلية ورجال أعمال راقية', 'قائمة باللغة التركية، العربية، والإنجليزية', 'حلويات وبقلاوة تركية طازجة'],
      en: ['100% Halal Certified', 'Executive Dining Ambience', 'Trilingual Turkish/Arabic/English Menus', 'Daily Fresh Baklava & Kunafa']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-09',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'مستوى نظافة وجودة لحوم استثنائي، ملائم جداً للغداء أثناء فترات العمل المكثفة في سوق الفوتيان.',
        en: 'Exceptional hygiene and meat sourcing standards. Highly practical for midday lunches during intense Futian Market sourcing.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Shanghai (شنغهاي)
  {
    id: 'xinjiang-islamic-restaurant-shanghai',
    slug: 'xinjiang-islamic-restaurant-shanghai',
    subdomain: 'restaurants',
    citySlug: 'shanghai',
    name: {
      ar: 'مطعم شينجيانغ الإسلامي الفاخر بـ شنغهاي (Xinjiang Halal)',
      en: 'Xinjiang Islamic Grand Halal Restaurant Shanghai',
      zh: '上海新疆伊犁清真大饭店 (普陀区)'
    },
    category: {
      ar: 'مأكولات شينجيانغ ولحم ضأن مشوي وأرز بخاري حلال',
      en: 'Authentic Uyghur & Xinjiang Halal Delicacies'
    },
    description: {
      ar: 'أعرق وأكبر مطاعم إقليم شينجيانغ في شنغهاي؛ يقدم لحم الضأن المشوي على الفحم الكامل، أسياخ الكباب بالأعشاب الطبيعية، والأرز البخاري بالمكسرات واللحم.',
      en: 'Shanghai premier and most authentic Xinjiang culinary institution, famed for roasted whole lamb, Uyghur pilaf, and cumin-spiced skewers.'
    },
    coverImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviewCount: 3950,
    coordinates: { latitude: 31.2492, longitude: 121.4365 },
    address: {
      ar: 'رقم 280 طريق تشانغشو، حي بوتوه، شنغهاي',
      en: 'No. 280 Changde Road, Putuo District, Shanghai',
      zh: '上海市普陀区常德路280号 (近长寿路)'
    },
    contactInfo: { phone: '+86-21-6277-7388' },
    websiteUrl: 'https://www.dianping.com/shop/500120',
    features: {
      ar: ['معتمد من الجمعية الإسلامية في شنغهاي', 'قريب من مسجد شنغهاي الكبير', 'قاعات خاصة لوفود رجال الأعمال', 'موسيقى وعروض تراثية إسلامية راقية'],
      en: ['Shanghai Islamic Association Certified', 'Near Shanghai Huxi Mosque', 'Corporate Delegation Rooms', 'Traditional Halal Uyghur Atmosphere']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-07',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'الخيار الأفضل للطعام الحلال الموثق في شنغهاي لرجال الأعمال المسلمين القادمين لمعارض بودونغ أو زيارات المصانع.',
        en: 'The top certified halal venue in Shanghai for business delegations attending Pudong expos or visiting regional plants.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Shenzhen (شينزن)
  {
    id: 'mewlana-turkish-restaurant-shenzhen',
    slug: 'mewlana-turkish-restaurant-shenzhen',
    subdomain: 'restaurants',
    citySlug: 'shenzhen',
    name: {
      ar: 'مطعم مولانا التركي الحلال بـ شينزن (Mewlana Halal)',
      en: 'Mewlana Turkish Halal Restaurant Shenzhen',
      zh: '梅夫拉那土耳其清真餐厅 (华强北商圈)'
    },
    category: {
      ar: 'مطبخ تركي وشواء وأطباق شرق أوسطية حلال',
      en: 'Turkish Steaks, Kebabs & Middle Eastern Halal'
    },
    description: {
      ar: 'يقع في قلب عاصمة الإلكترونيات العالمية هوا تشيانغ بي (Huaqiangbei)؛ المقصد الرئيسي لمهندسي وتجار الإلكترونيات والذكاء الاصطناعي العرب لتناول أشهى الوجبات الحلال.',
      en: 'Located right in Shenzhen Huaqiangbei world electronics capital, serving prime halal steaks, lamb kebabs, and Mediterranean dishes.'
    },
    coverImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviewCount: 3400,
    coordinates: { latitude: 22.5448, longitude: 114.0852 },
    address: {
      ar: 'طريق تشنغهوا، منطقة فوتيان، شينزن (بجوار أسواق هوا تشيانغ بي)',
      en: 'Zhenhua Road, Futian District, Shenzhen (Huaqiangbei Core)',
      zh: '深圳市福田区华强北街道振华路100号深纺大厦'
    },
    contactInfo: { phone: '+86-755-8334-1777' },
    websiteUrl: 'https://www.dianping.com/shop/2198002',
    features: {
      ar: ['حلال 100%', 'موقع استراتيجي في وادي الإلكترونيات', 'خدمة سريعة للمشترين', 'طاقم متعدد اللغات'],
      en: ['100% Halal Certified', 'Epicenter of Huaqiangbei Tech', 'Fast Executive Service', 'Multilingual Arabic/English Staff']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-08',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'ضروري لكل من يشتري مكونات إلكترونية أو هواتف من شينزن؛ طعام ممتاز ومكان آمن ومريح للاستراحة.',
        en: 'An essential base for electronics and gadget buyers in Shenzhen. Superb food quality and reliable halal standards.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Xi'an (شيآن)
  {
    id: 'laosunjia-halal-restaurant-xian',
    slug: 'laosunjia-halal-restaurant-xian',
    subdomain: 'restaurants',
    citySlug: 'beijing', // central northern
    name: {
      ar: 'مطعم لاوسونجيا التاريخي لحساء الضأن الحلال (تأسس عام 1898 بـ شيآن)',
      en: 'Lao Sun Jia Century-Old Halal Restaurant (Xi\'an)',
      zh: '老孙家饭庄 (西安清真老字号总店)'
    },
    category: {
      ar: 'حساء لحم الضأن والثريد الإسلامي التراثي (يانغ رو باوماو)',
      en: 'Traditional Halal Mutton Soup & Pita Crumb Stew (Paomo)'
    },
    description: {
      ar: 'أعرق مطعم إسلامي على طريق الحرير في مدينة شيآن؛ يشتهر بطبق يانغ رو باوماو الملكي ومأكولات قومية هوي المسلمة التاريخية منذ أكثر من 120 عاماً.',
      en: 'The Silk Road most iconic Muslim dining institution, world-famous for heritage Yangrou Paomo (braised lamb and pita soup) since 1898.'
    },
    coverImage: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 4800,
    coordinates: { latitude: 34.2612, longitude: 108.9421 },
    address: {
      ar: 'شارع دونغداجي، الحي المسلم التاريخي، شيآن، شنشي',
      en: 'Dongdajie, Muslim Quarter, Xi\'an, Shaanxi',
      zh: '陕西省西安市碑林区东大街380号'
    },
    contactInfo: { phone: '+86-29-8728-6668' },
    websiteUrl: 'https://www.dianping.com/shop/556011',
    features: {
      ar: ['تراث إسلامي وطني معتمد', 'لحوم حلال محلية طازجة', 'قريب من جامع شيآن الكبير التاريخي', 'منتجات وهدايا غذائية حلال معبأة'],
      en: ['National Intangible Cultural Heritage', 'Fresh Halal Mutton', 'Adjacent to Xi\'an Grand Mosque', 'Packaged Halal Souvenirs']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-06',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'تحفة تراثية إسلامية حقيقية، يقدم تجربة تذوق استثنائية لرجال الأعمال الزائرين لمنطقة شمال غرب الصين.',
        en: 'A true Islamic cultural treasure providing an unparalleled culinary experience along the historic Silk Road.'
      }
    },
    lastUpdated: '2026-09-13'
  }
];
