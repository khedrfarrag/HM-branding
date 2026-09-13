import { IChinaCommercialEntity } from '../types';

export const CHINA_PORTS_DATA: IChinaCommercialEntity[] = [
  // Ningbo-Zhoushan Port
  {
    id: 'port-of-ningbo-zhoushan',
    slug: 'port-of-ningbo-zhoushan',
    subdomain: 'ports',
    citySlug: 'ningbo',
    name: {
      ar: 'ميناء نينغبو-تشوشان الدولي (أكبر ميناء في العالم من حيث حجم البضائع)',
      en: 'Port of Ningbo-Zhoushan (World #1 Cargo Tonnage Port)',
      zh: '宁波舟山港 (全球第一大货物吞吐量超级枢纽)'
    },
    category: {
      ar: 'ميناء حاويات مياه عميقة وميناء التصدير الرئيسي لإيوو ومقاطعة تشيجيانغ',
      en: 'World Foremost Deepwater Container Mega Hub for Zhejiang & Yiwu'
    },
    description: {
      ar: 'المرتبة الأولى عالمياً في حجم مناولة البضائع لأكثر من 15 عاماً متتالية بما يتجاوز 1.3 مليار طن؛ يمثل شريان التصدير البحري الأساسي لبضائع سوق الفوتيان بـ إيوو ومصانع نينغبو، هانغتشو، وشاوشينغ، مع أكثر من 300 خط ملاحي دولي ومحطات قطار بضائع بحري مباشر (Sea-Rail Intermodal).',
      en: 'The world #1 port by cargo tonnage exceeding 1.3 billion metric tons annually, serving as the prime oceanic export gateway for Yiwu Futian goods and Zhejiang manufacturing.'
    },
    coverImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    rating: 5.0,
    reviewCount: 4100,
    coordinates: { latitude: 29.8785, longitude: 121.8492 },
    address: {
      ar: 'منطقة بايلون للمياه العميقة، نينغبو، مقاطعة تشيجيانغ',
      en: 'Beilun Deepwater Port Area, Ningbo, Zhejiang',
      zh: '浙江省宁波市北仑区宁波舟山港核心港区'
    },
    contactInfo: { phone: '+86-574-2768-8888' },
    websiteUrl: 'http://www.nbport.com.cn/',
    features: {
      ar: ['مناولة أكثر من 35 مليون حاوية نمطية (TEU) سنوياً', 'أرصفة مياه عميقة (-18.5 متر) لأكبر سفن الحاويات العملاقة', 'خط سكة حديد بضائع مباشر بين إيوو وميناء نينغبو خلال ساعتين', 'أكثر من 30 خط شحن بحري أسبوعي مباشر لموانئ الشرق الأوسط والخليج'],
      en: ['35M+ Annual Container Throughput (TEU)', 'Super-Deepwater (-18.5m) Ultra-Large Vessel Berths', 'Direct 2-Hour Sea-Rail Shuttle from Yiwu Market', '30+ Weekly Direct Container Calls to Arab & Red Sea Ports']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-12',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'المنفذ البحري الأهم لأي تاجر يستورد من إيوو وتشيكيا ومقاطعة تشيجيانغ؛ يمتاز بسرعة التخليص الجمركي البحري وانخفاض تكاليف نقل الشاحنات الداخلية.',
        en: 'The prime oceanic gateway for Yiwu and Zhejiang shipments. Extremely efficient customs dispatch and minimal drayage delays.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Shanghai / Yangshan Deepwater Port
  {
    id: 'port-of-shanghai-yangshan-deepwater',
    slug: 'port-of-shanghai-yangshan-deepwater',
    subdomain: 'ports',
    citySlug: 'shanghai',
    name: {
      ar: 'ميناء شنغهاي يانغشان للمياه العميقة (أكبر ميناء حاويات في العالم)',
      en: 'Port of Shanghai (Yangshan Deepwater Automated Terminal)',
      zh: '上海港洋山深水港区 (全球第一大集装箱吞吐量枢纽)'
    },
    category: {
      ar: 'ميناء حاويات مؤتمت بالكامل ذكي ورقمي (المرتبة 1 عالمياً في TEU)',
      en: 'World #1 Container Port (50M+ TEU) & Fully Automated Terminal'
    },
    description: {
      ar: 'المرتبة الأولى في العالم في مناولة الحاويات بما يتجاوز 50 مليون حاوية نمطية (TEU) سنوياً؛ يضم أكبر محطة حاويات مؤتمتة بالكامل عبر روبوتات AGV الذكية ورافعات جسرية آلية متصلة بجسر دونغهاي البحري العملاق بطول 32 كم.',
      en: 'World leading container port handling over 50 million TEUs annually, featuring the world largest automated container terminal connected via the 32km Donghai Sea Bridge.'
    },
    coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    rating: 5.0,
    reviewCount: 4900,
    coordinates: { latitude: 30.6285, longitude: 122.0625 },
    address: {
      ar: 'جزر يانغشان، جسر دونغهاي، خليج هانغتشو، شنغهاي',
      en: 'Yangshan Island, Donghai Bridge, Shanghai',
      zh: '上海市浦东新区东海大桥南端洋山深水港区'
    },
    contactInfo: { phone: '+86-21-5533-3388' },
    websiteUrl: 'https://www.portshanghai.com.cn/',
    features: {
      ar: ['أكبر محطة حاويات آلية في العالم (Phase IV)', 'تحميل وتفريغ روبوتي 24/7 دون توقف', 'ربط مباشر بشبكة الأنهار الداخلية لنهر اليانغتسي', 'رحلات بحرية يومية لجميع قارات وموانئ العالم'],
      en: ['World Largest Phase IV Automated Container Facility', '24/7 Uninterrupted Autonomous Crane Operations', 'Direct Yangtze River Inland Feeder Barge Network', 'Daily Ocean Container Sailings to Global Gateways']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-07',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'العملاق البحري الأكبر لحاويات الآلات، الإلكترونيات، والمعدات المصنعة في شنغهاي وسوتشو وتشانغتشو.',
        en: 'The heavy-industry container gateway for advanced machinery and electronics sourced across Jiangsu and Shanghai.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Shenzhen / Yantian International Container Terminals
  {
    id: 'port-of-shenzhen-yantian-terminals',
    slug: 'port-of-shenzhen-yantian-terminals',
    subdomain: 'ports',
    citySlug: 'shenzhen',
    name: {
      ar: 'ميناء شينزن يانتيان الدولي للحاويات (YICT - بوابة دلتا نهر اللؤلؤ)',
      en: 'Port of Shenzhen (Yantian International Container Terminals - YICT)',
      zh: '深圳盐田国际集装箱码头 (大湾区主力外贸深水港)'
    },
    category: {
      ar: 'ميناء المياه العميقة الأساسي لصادرات التكنولوجيا والإلكترونيات والأثاث',
      en: 'Premier Deepwater Export Terminal for Tech, Furniture & Consumer Goods'
    },
    description: {
      ar: 'شريان التصدير الأضخم في جنوب الصين وخليج غوانغدونغ الكبرى؛ يتعامل مع أكثر من ثلث تجارة غوانغدونغ الخارجية برصيف مياه عميقة يتسع لأضخم سفن الحاويات في العالم بسعة 24,000 حاوية نمطية.',
      en: 'The primary export gateway in South China, handling over a third of Guangdong foreign trade and capable of simultaneously berthing ultra-large mega container ships.'
    },
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 3800,
    coordinates: { latitude: 22.5852, longitude: 114.2758 },
    address: {
      ar: 'طريق يانتيان، حي يانتيان، شينزن، مقاطعة غوانغدونغ',
      en: 'Yantian Port Area, Yantian District, Shenzhen, Guangdong',
      zh: '广东省深圳市盐田区盐田港保税区港西大道'
    },
    contactInfo: { phone: '+86-755-2529-0888' },
    websiteUrl: 'https://www.yict.com.cn/',
    features: {
      ar: ['مناولة أكثر من 14 مليون حاوية نمطية في يانتيان وحدها', 'أسرع معدلات تفريغ وتحميل للحاويات في جنوب الصين', 'خطوط شحن سريعة (Express Service) للخليج العربي والبحر الأحمر', 'تتبع رقمي متطور للبوابات ومواعيد الشاحنات'],
      en: ['14M+ Annual TEU Handling at YICT Alone', 'Industry-Leading Berth Productivity Rates in South China', 'Expedited Direct Container Express Services to Arab Ports', 'Smart Terminal Appointment & Drayage Dispatch Systems']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-08',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'المنفذ البحري الرئيسي لكافة بضائع شينزن، دونغوان، هويتشو، وأثاث شونده المتجهة للخليج؛ تمتاز بانتظام رحلاتها ودقتها الزمنية.',
        en: 'The primary gateway for Shenzhen tech, Dongguan goods, and Shunde furniture bound for Arab and GCC ports.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Guangzhou / Nansha Port
  {
    id: 'port-of-guangzhou-nansha-automated-terminal',
    slug: 'port-of-guangzhou-nansha-automated-terminal',
    subdomain: 'ports',
    citySlug: 'guangzhou',
    name: {
      ar: 'ميناء كوانزو نانشا الذكي للحاويات (بوابة الصادرات لمعارض ومصانع كوانزو)',
      en: 'Port of Guangzhou (Nansha Smart Deepwater Container Terminal)',
      zh: '广州港南沙集装箱港区 (粤港澳大湾区全自动化超级深水码头)'
    },
    category: {
      ar: 'ميناء مياه عميقة مؤتمت بالكامل يخدم مصانع كوانزو وفوشان وتشونغشان',
      en: 'Fully Automated Deepwater Terminal Serving Guangzhou & Foshan'
    },
    description: {
      ar: 'الميناء المحوري الأسرع نمواً في دلتا نهر اللؤلؤ؛ يضم المحطة المؤتمتة بالكامل في نانشا (Phase IV) المتصلة بشبكات سكك حديدية وممرات مائية داخلية تتيح شحن الحاويات مباشرة من المصانع.',
      en: 'The fastest-growing mega hub in the Pearl River Delta, featuring fully automated Phase IV terminal operations with direct river and rail intermodal integration.'
    },
    coverImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviewCount: 3100,
    coordinates: { latitude: 22.6582, longitude: 113.6745 },
    address: {
      ar: 'جزيرة لونغشو، منطقة نانشا، كوانزو، مقاطعة غوانغدونغ',
      en: 'Longxue Island, Nansha District, Guangzhou, Guangdong',
      zh: '广州市南沙区龙穴岛南沙港区'
    },
    contactInfo: { phone: '+86-20-8305-1888' },
    websiteUrl: 'http://www.gzport.gov.cn/',
    features: {
      ar: ['مناولة أكثر من 18 مليون حاوية نمطية سنوياً', 'أول محطة مؤتمتة بالكامل بتقنية 5G والذكاء الاصطناعي في جنوب الصين', 'تكلفة شحن بري منخفضة لمصانع فوشان وتشونغشان وكوانزو', 'خطوط ملاحية مباشرة إلى جبل علي، جدة، ودمياط'],
      en: ['18M+ TEU Annual Container Throughput', 'South China First 5G + AI Fully Automated Terminal', 'Lowest Drayage Trucking Cost from Foshan & Shunde', 'Direct Express Services to Jebel Ali, Jeddah & Damietta']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-11',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'الخيار الأكثر توفيراً في تكاليف النقل البري (Drayage) لمستوردي السيراميك ومواد البناء والأجهزة المنزلية من فوشان وكوانزو.',
        en: 'The most cost-efficient port for drayage trucking when sourcing building materials and appliances in Foshan and Guangzhou.'
      }
    },
    lastUpdated: '2026-09-13'
  }
];
