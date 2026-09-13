import { IChinaCommercialEntity } from '../types';

export const CHINA_HOTELS_DATA: IChinaCommercialEntity[] = [
  // Guangzhou (كوانزو)
  {
    id: 'the-westin-pazhou-guangzhou',
    slug: 'the-westin-pazhou-guangzhou',
    subdomain: 'hotels',
    citySlug: 'guangzhou',
    name: {
      ar: 'فندق ويستن باتشو كوانزو (The Westin Pazhou 5 Stars)',
      en: 'The Westin Pazhou Guangzhou (5 Stars)',
      zh: '广州广交会威斯汀酒店 (琶洲会展中心)'
    },
    category: {
      ar: 'فندق أعمال فاخر 5 نجوم ملتصق بمعرض كانتون',
      en: 'Luxury 5-Star Exhibition & Business Hotel'
    },
    description: {
      ar: 'الفندق الوحيد المتصل مباشرة بمجمع معرض كانتون الدولي (Canton Fair Complex) عبر ممر مكيف مغطى؛ يوفر وصولاً حصرياً إلى أجنحة المعرض، خدمات رجال الأعمال، إطلالات على برج كانتون ونهر اللؤلؤ، وقاعات مؤتمرات دولية.',
      en: 'The only hotel directly connected to the Canton Fair Complex via air-conditioned skywalk, offering seamless access to trade halls and panoramic Pearl River views.'
    },
    coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 4620,
    coordinates: { latitude: 23.0998, longitude: 113.3645 },
    address: {
      ar: 'رقم 681 طريق فنغ هوانغ 3، حي هايتشو، كوانزو',
      en: 'No. 681 Fengpu Middle Road, Haizhu District, Guangzhou',
      zh: '广州市海珠区凤浦中路681号广交会展馆C区'
    },
    contactInfo: { phone: '+86-20-8918-1818' },
    websiteUrl: 'https://www.marriott.com/en-us/hotels/canwi-the-westin-pazhou/overview/',
    features: {
      ar: ['متصل مباشرة بقاعات معرض كانتون', 'محطة مترو بازهو (Line 8)', 'مكتب خاص لرجال الأعمال وترجمة العقود', 'خيارات طعام تلبي احتياجات الضيوف المسلمين'],
      en: ['Direct Canton Fair Skywalk Access', 'Pazhou Metro Station Line 8', 'Executive Business Center & Concierge', 'Muslim-Friendly Dining Provisions']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-11',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'الخيار رقم 1 بلا منازع لتجار ومستوردي معرض كانتون الراغبين في توفير ساعات التنقل اليومية أثناء المعرض. ينصح بالحجز قبل المعرض بشهرين.',
        en: 'The undisputed #1 hotel for Canton Fair buyers, eliminating daily traffic congestion. Book 2-3 months in advance of fair phases.'
      }
    },
    lastUpdated: '2026-09-13'
  },
  {
    id: 'garden-hotel-guangzhou',
    slug: 'garden-hotel-guangzhou',
    subdomain: 'hotels',
    citySlug: 'guangzhou',
    name: {
      ar: 'فندق الغاردين كوانزو التاريخي (The Garden Hotel 5 Stars)',
      en: 'The Garden Hotel Guangzhou (Heritage 5 Stars)',
      zh: '广州花园酒店 (越秀区环市东路)'
    },
    category: {
      ar: 'فندق تراثي فاخر 5 نجوم في قلب الحي التجاري',
      en: 'Heritage Luxury 5-Star Hotel in Commercial District'
    },
    description: {
      ar: 'أعرق فنادق كوانزو وأول فندق بلاتيني 5 نجوم في الصين؛ يقع في حي تاوجين بجوار القنصليات والشركات ومطاعم الحلال الشهيرة، مع حدائق استوائية وشلالات مائية داخلية ساحرة.',
      en: 'China premier platinum 5-star heritage hotel located in Taojin, adjacent to foreign consulates, multinational trade offices, and top halal dining.'
    },
    coverImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviewCount: 3890,
    coordinates: { latitude: 23.1388, longitude: 113.2825 },
    address: {
      ar: 'رقم 368 طريق هوانشي دونغ، حي يويشيو، كوانزو',
      en: 'No. 368 Huanshi East Road, Yuexiu District, Guangzhou',
      zh: '广州市越秀区环市东路368号'
    },
    contactInfo: { phone: '+86-20-8333-8989' },
    websiteUrl: 'https://www.gardenhotel.com/',
    features: {
      ar: ['حافلات مكوكية مجانية لمعرض كانتون', 'محطة مترو تاوجين (Taojin Station)', 'محاط بأشهر المطاعم العربية والتركية', 'خدمة صرف عملات وتخليص مستندات'],
      en: ['Free Canton Fair Shuttle Buses', 'Taojin Metro Station at Doorstep', 'Surrounded by Middle Eastern Cuisine', 'Currency Exchange & Trade Assistance']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-11',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'الموقع الاستراتيجي الأفضل في كوانزو للتجار العرب؛ يمكنك الوصول سيراً على الأقدام لكافة المطاعم الحلال والشركات اللوجستية.',
        en: 'Strategic location for Arab buyers. Walking distance to premier halal restaurants, trade logistics agencies, and metro lines.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Yiwu (إيوو)
  {
    id: 'shangri-la-hotel-yiwu',
    slug: 'shangri-la-hotel-yiwu',
    subdomain: 'hotels',
    citySlug: 'yiwu',
    name: {
      ar: 'فندق شانغريلا إيوو الفاخر (Shangri-La Yiwu 5 Stars)',
      en: 'Shangri-La Hotel Yiwu (Premier 5 Stars)',
      zh: '义乌香格里拉大酒店 (金融商务区)'
    },
    category: {
      ar: 'فندق أعمال فاخر 5 نجوم بالحي المالي والتجاري',
      en: 'Premier 5-Star Luxury Business Hotel'
    },
    description: {
      ar: 'أفخم فندق أعمال في مدينة إيوو؛ يقع في الحي المالي المركزي ويبعد 5 دقائق فقط عن مجمع سوق الفوتيان الدولي للسلع الصغيرة (Yiwu International Trade City).',
      en: 'The definitive luxury business hotel in Yiwu Financial District, located just 5 minutes from the International Trade City (Futian Market).'
    },
    coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 4200,
    coordinates: { latitude: 29.3245, longitude: 120.0988 },
    address: {
      ar: 'رقم 6 طريق فوتيان، الحي المالي، إيوو، تشيجيانغ',
      en: 'No. 6 Futian Road, Financial District, Yiwu, Zhejiang',
      zh: '浙江省义乌市福田路6号'
    },
    contactInfo: { phone: '+86-579-8151-8888' },
    websiteUrl: 'https://www.shangri-la.com/yiwu/shangrila/',
    features: {
      ar: ['5 دقائق لسوق الفوتيان الدولي', 'قاعات اجتماعات تنفيذية راقية', 'فريق خدمة يجيد اللغات العربية والإنجليزية', 'بوفيه فاخر مع خيارات حلال معتمدة'],
      en: ['5 Mins to Futian Wholesale Market', 'Executive Boardrooms & Lounge', 'Arabic & English Multilingual Staff', 'Halal-Friendly Gourmet Dining']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-09',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'الخيار المفضل لكبار المستوردين ورجال الأعمال في إيوو؛ سرعة عالية في الإنترنت وإجراءات تسجيل دخول سريعة مخصصة للشركات.',
        en: 'The top executive choice in Yiwu. Ultra-fast enterprise Wi-Fi and streamlined corporate check-in for sourcing delegations.'
      }
    },
    lastUpdated: '2026-09-13'
  },
  {
    id: 'kasion-international-hotel-yiwu',
    slug: 'kasion-international-hotel-yiwu',
    subdomain: 'hotels',
    citySlug: 'yiwu',
    name: {
      ar: 'فندق كايشون الدولي إيوو (Kasion Hotel 4 Stars)',
      en: 'Kasion International Hotel Yiwu (4 Stars)',
      zh: '义乌凯旋国际大酒店 (稠州北路)'
    },
    category: {
      ar: 'فندق أعمال 4 نجوم اقتصادي بجوار سوق الفوتيان والمطاعم العربية',
      en: 'Strategic 4-Star Trade Hotel near Futian Market'
    },
    description: {
      ar: 'فندق عملي ومريح جداً يقع مباشرة على طريق تشوتشو الشمالي أمام البوابات الرئيسية لسوق الفوتيان للمصنوعات الصغيرة؛ محاط بالمطاعم العربية وشركات الشحن.',
      en: 'Extremely practical business hotel on Chouzhou North Road facing Futian Market gates, surrounded by Arab restaurants and freight agencies.'
    },
    coverImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    rating: 4.7,
    reviewCount: 2980,
    coordinates: { latitude: 29.3212, longitude: 120.0915 },
    address: {
      ar: 'طريق تشوتشو الشمالي أمام المنطقة 2 بسوق الفوتيان، إيوو',
      en: 'Chouzhou North Road opposite District 2 Futian Market, Yiwu',
      zh: '浙江省义乌市稠州北路与城北路交汇处'
    },
    contactInfo: { phone: '+86-579-8557-7777' },
    websiteUrl: 'https://www.dianping.com/shop/3358055',
    features: {
      ar: ['دقيقة واحدة سيراً إلى بوابات الفوتيان', 'أسعار تنافسية وممتازة للإقامات الطويلة', 'خدمة شحن الطرود وتخزين العينات', 'إنترنت سريع وغرف مكتبية مجهزة'],
      en: ['1-Min Walk to Futian District 2', 'Great Extended Sourcing Rates', 'Sample Storage & Freight Handling', 'High-Speed Broadband & Desks']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-09',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'الخيار الأكثر عملية وتوفيراً للوقت والجهد لرجال الأعمال الذين يقضون طوال اليوم داخل سوق الفوتيان.',
        en: 'The most cost-effective and practical base for merchants spending full business days auditing Futian Market halls.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Shenzhen (شينزن)
  {
    id: 'four-seasons-hotel-shenzhen',
    slug: 'four-seasons-hotel-shenzhen',
    subdomain: 'hotels',
    citySlug: 'shenzhen',
    name: {
      ar: 'فندق فور سيزونز شينزن (Four Seasons Shenzhen 5 Stars)',
      en: 'Four Seasons Hotel Shenzhen (Ultra-Luxury 5 Stars)',
      zh: '深圳四季酒店 (福田CBD会展中心)'
    },
    category: {
      ar: 'فندق ألترا فاخر 5 نجوم بقلب مركز المؤتمرات والمعارض (فوتيان)',
      en: 'Ultra-Luxury 5-Star CBD & Convention Hotel'
    },
    description: {
      ar: 'يقع في قلب حي فوتيان المالي أمام مركز شينزن الدولي للمعارض والمؤتمرات (SZCEC)؛ يوفر إقامة استثنائية لأصحاب الشركات ومستوردي التكنولوجيا مع سهولة الوصول لهونغ كونغ.',
      en: 'Situated directly opposite Shenzhen Convention & Exhibition Center in Futian CBD, offering world-class luxury and rapid transit to Hong Kong.'
    },
    coverImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 3780,
    coordinates: { latitude: 22.5332, longitude: 114.0558 },
    address: {
      ar: 'رقم 138 طريق جينهوا، حي فوتيان، شينزن',
      en: 'No. 138 Jinhua Road, Futian District, Shenzhen',
      zh: '深圳市福田区金华路138号 (近会展中心站)'
    },
    contactInfo: { phone: '+86-755-8826-8888' },
    websiteUrl: 'https://www.fourseasons.com/shenzhen/',
    features: {
      ar: ['أمام مركز معارض فوتيان مباشرة', '15 دقيقة لأسواق الإلكترونيات هوا تشيانغ بي', '15 دقيقة بالقطار السريع لهونغ كونغ (West Kowloon)', 'خدمات كونسيرج متطورة لحجوزات الأعمال'],
      en: ['Directly Facing Convention Center', '15 Mins to Huaqiangbei Electronics', '15 Mins High-Speed Train to Hong Kong', 'Elite Corporate Concierge Services']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-08',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'قمة الفخامة والراحة في شينزن؛ مثالي للقاء المستثمرين والشركاء التقنيين الكبار في قطاعات الإلكترونيات والسيارات الكهربائية.',
        en: 'The pinnacle of luxury in Shenzhen, ideal for high-stakes meetings with tech suppliers and hardware manufacturers.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Beijing (بكين)
  {
    id: 'kempinski-hotel-beijing-lufthansa',
    slug: 'kempinski-hotel-beijing-lufthansa',
    subdomain: 'hotels',
    citySlug: 'beijing',
    name: {
      ar: 'فندق كمبنسكي بكين لوفتهانزا (Kempinski Hotel Beijing 5 Stars)',
      en: 'Kempinski Hotel Beijing Yansha Center',
      zh: '北京燕莎中心凯宾斯基饭店 (朝阳区)'
    },
    category: {
      ar: 'فندق أعمال دولي 5 نجوم بحي السفارات والمراكز التجارية',
      en: 'Prestigious International 5-Star Business Hotel'
    },
    description: {
      ar: 'أحد أرقى فنادق الأعمال الأوروبية في بكين؛ يقع في حي تشاويانغ الدبلوماسي والتجاري ويبعد 20 دقيقة عن مطار العاصمة الدولي، ويحتضن غرف اجتماعات تنفيذية راقية.',
      en: 'Iconic European luxury business hotel located in Chaoyang Embassy District, offering quick expressway access to Beijing Capital Airport.'
    },
    coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviewCount: 3100,
    coordinates: { latitude: 39.9482, longitude: 116.4632 },
    address: {
      ar: 'رقم 50 طريق ليانغ ما تشياو، حي تشاويانغ، بكين',
      en: 'No. 50 Liangmaqiao Road, Chaoyang District, Beijing',
      zh: '北京市朝阳区亮马桥路50号'
    },
    contactInfo: { phone: '+86-10-6465-3388' },
    websiteUrl: 'https://www.kempinski.com/en/hotel-beijing',
    features: {
      ar: ['محطة مترو Liangmaqiao Line 10', 'قريب من مراكز المؤتمرات والمعارض الدولية', 'خيارات طعام حلال متوفرة وموثقة', 'خدمات ترجمة وتنسيق وفود'],
      en: ['Liangmaqiao Metro Line 10 Access', 'Proximity to International Expos', 'Halal Catering Upon Request', 'Delegation Business Support']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-10',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'موقع دبلوماسي راقي وهادئ، يضمن راحة متكاملة لرجال الأعمال أثناء زيارات العاصمة وتوقيع العقود.',
        en: 'Prestigious diplomatic setting ensuring unmatched focus and executive comfort during Beijing contract signings.'
      }
    },
    lastUpdated: '2026-09-13'
  }
];
