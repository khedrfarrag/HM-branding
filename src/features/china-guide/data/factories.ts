import { IChinaCommercialEntity } from '../types';

export const CHINA_FACTORIES_DATA: IChinaCommercialEntity[] = [
  // Shenzhen / BYD Mega Base
  {
    id: 'byd-global-headquarters-and-ev-base',
    slug: 'byd-global-headquarters-and-ev-base',
    subdomain: 'factories',
    citySlug: 'shenzhen',
    name: {
      ar: 'المقر والمصنع العالمي لشركة بي واي دي للسيارات والبطاريات (BYD HQ)',
      en: 'BYD Global Headquarters & New Energy Vehicle Mega Base',
      zh: '比亚迪全球总部及新能源汽车智能制造基地 (深圳坪山)'
    },
    category: {
      ar: 'تصنيع السيارات الكهربائية (EV) وبطاريات بليد (Blade Battery)',
      en: 'Electric Vehicles (EV), Blade Batteries & Semiconductor Manufacturing'
    },
    description: {
      ar: 'أكبر مجمع تصنيع للسيارات الكهربائية وبطاريات الليثيوم في العالم؛ يمتد على مساحة شاسعة في منطقة بينغشان بشينزن، ويضم خطوط تجميع روبوتية فائقة التطور لسيارات بي واي دي وحافلات النقل العام ومكونات بطاريات بليد الثورية.',
      en: 'The world largest manufacturing complex for electric vehicles and lithium blade batteries, featuring cutting-edge automated robotic assembly lines in Pingshan, Shenzhen.'
    },
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 4800,
    coordinates: { latitude: 22.6952, longitude: 114.3725 },
    address: {
      ar: 'رقم 3009 طريق بينغشان، حي بينغشان، شينزن، غوانغدونغ',
      en: 'No. 3009 Pingshan Road, Pingshan District, Shenzhen, Guangdong',
      zh: '广东省深圳市坪山区比亚迪路3009号'
    },
    contactInfo: { phone: '+86-755-8988-8888' },
    websiteUrl: 'https://www.bydglobal.com/',
    features: {
      ar: ['خطوط روبوتية ألمانية الصنع', 'طاقة تصنيع تتجاوز 2 مليون سيارة سنوياً', 'مركز اختبارات أمان البطاريات الدولية', 'مرافق استقبال الوفود التجارية العالمية'],
      en: ['Advanced Robotic Production Lines', '2M+ Annual Vehicle Capacity', 'Global Battery Safety Testing Lab', 'Corporate Delegation VIP Facilities']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-08',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'العملاق العالمي الأول في الطاقة النظيفة؛ يتم ترتيب زيارات المستوردين والوكلاء التجاريين للمصنع عبر القنوات الرسمية وبإشراف استشاري مباشر.',
        en: 'The world leader in new energy vehicles. Factory inspections for commercial distributors require structured executive protocol.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Shunde / Midea Home Appliances
  {
    id: 'midea-group-smart-appliances-headquarters',
    slug: 'midea-group-smart-appliances-headquarters',
    subdomain: 'factories',
    citySlug: 'shunde',
    name: {
      ar: 'المقر والمجمع الصناعي الذكي لمجموعة ميديا للأجهزة المنزلية (Midea HQ)',
      en: 'Midea Group Smart Home Appliances Global Manufacturing Base',
      zh: '美的集团智能家电全球智造基地 (顺德北滘)'
    },
    category: {
      ar: 'تصنيع المكيفات والأجهزة المنزلية الذكية والروبوتات الصناعية (Kuka)',
      en: 'Air Conditioning, Smart Appliances & Kuka Robotics Manufacturing'
    },
    description: {
      ar: 'عاصمة الأجهزة المنزلية الأولى في العالم؛ يضم مجمع ميديا في بلدة بيجياو بـ شونده أضخم مصانع مكيفات الهواء، الثلاجات، الغسالات، وغسالات الأطباق بنظام الإنتاج الآلي 4.0.',
      en: 'The world foremost home appliance manufacturing base in Beijiao, Shunde, producing millions of certified smart air conditioners, fridges, and washing machines.'
    },
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 3950,
    coordinates: { latitude: 22.9285, longitude: 113.2084 },
    address: {
      ar: 'رقم 6 طريق ميديا، بلدة بيجياو، شونده، فوشان، غوانغدونغ',
      en: 'No. 6 Midea Avenue, Beijiao Town, Shunde, Foshan, Guangdong',
      zh: '广东省佛山市顺德区北滘镇美的大道6号'
    },
    contactInfo: { phone: '+86-757-2633-8888' },
    websiteUrl: 'https://www.midea.com/global',
    features: {
      ar: ['أكبر مصنع مكيفات في العالم', 'روبوتات كوكا الألمانية في خطوط التجميع', 'شهادات الجودة العالمية (CE, CB, SASO, UL)', 'حلول OEM/ODM لكبرى البراندات العالمية'],
      en: ['World Largest A/C Factory', 'Automated Kuka Robotics Lines', 'Full Global Certifications (CE/SASO/UL)', 'Premier OEM/ODM Partner for Global Brands']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-10',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'الوجهة الإلزامية لمستوردي الأجهزة الكهربائية المنزلية؛ تمتاز بجودة فائقة في التبريد والتكييف ومطابقة تامة للمواصفات القياسية الخليجية والعربية.',
        en: 'Essential factory base for home appliance importers. Exceptional cooling engineering complying with Gulf SASO standards.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Taizhou / Jack Sewing Machine
  {
    id: 'jack-technology-global-sewing-machine-base',
    slug: 'jack-technology-global-sewing-machine-base',
    subdomain: 'factories',
    citySlug: 'taizhou',
    name: {
      ar: 'المقر والمصنع العالمي لماكينات الخياطة الصناعية جاك (Jack Machine HQ)',
      en: 'Jack Technology Co. Industrial Sewing Machine Global Base',
      zh: '杰克科技全球缝纫机智能制造基地 (台州椒江)'
    },
    category: {
      ar: 'ماكينات الخياطة الصناعية المحوسبة وماكينات التطريز الآلي',
      en: 'Industrial Computerized Sewing Machines & Automated Cutting Systems'
    },
    description: {
      ar: 'أكبر مصنع لماكينات الخياطة الصناعية في العالم من حيث حجم المبيعات والإنتاج؛ يقع في حي جياوجيانغ بتايتشو، ويزود مصانع الملابس في أكثر من 150 دولة بماكينات الخياطة الذكية المعززة بالذكاء الاصطناعي.',
      en: 'The world #1 manufacturer of industrial sewing machinery by sales volume, providing AI-powered fabric sewing and automated pattern systems.'
    },
    coverImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviewCount: 3120,
    coordinates: { latitude: 28.6754, longitude: 121.4398 },
    address: {
      ar: 'رقم 1 طريق شيتشينغ، حي جياوجيانغ، تايتشو، تشيجيانغ',
      en: 'No. 1 Shiqing Road, Jiaojiang District, Taizhou, Zhejiang',
      zh: '浙江省台州市椒江区机场路东侧'
    },
    contactInfo: { phone: '+86-576-8817-7782' },
    websiteUrl: 'https://www.jack-sewing.com/',
    features: {
      ar: ['المرتبة الأولى عالمياً في ماكينات الخياطة', 'ماكينات متطورة بالأوامر الصوتية', 'وكلاء ومراكز صيانة معتمدة في الشرق الأوسط', 'ضمان شامل وقطع غيار أصلية'],
      en: ['World #1 in Industrial Sewing Units', 'Voice-Controlled Smart Machines', 'Direct Middle East Service Centers', 'Complete OEM Parts & Long Warranty']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-12',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'الخيار الأول والأساسي لكل أصحاب مصانع الملابس والعبايات والمنسوجات في الشرق الأوسط الراغبين في تحديث خطوط الإنتاج بأقل تكلفة تشغيلية.',
        en: 'The primary choice for garment factory owners in Egypt, Saudi Arabia, and UAE seeking automated high-efficiency sewing lines.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Zhengzhou / Yutong Commercial Bus
  {
    id: 'yutong-bus-global-manufacturing-base',
    slug: 'yutong-bus-global-manufacturing-base',
    subdomain: 'factories',
    citySlug: 'zhengzhou',
    name: {
      ar: 'المجمع الصناعي العالمي لحافلات يوتونغ (Yutong Bus Mega Base)',
      en: 'Yutong Bus Global Intelligent Manufacturing Facility',
      zh: '宇通客车全球高端智能制造基地 (郑州十八里河)'
    },
    category: {
      ar: 'حافلات النقل العام الفاخرة والحافلات الكهربائية',
      en: 'Commercial Coaches, Transit Buses & Electric Mobility Fleets'
    },
    description: {
      ar: 'أكبر مصنع لحافلات الركاب في العالم؛ يمتد المجمع على مساحة تفوق 1.1 مليون متر مربع في تشنغتشو وينتج أكثر من 400 حافلة يومياً تم تصدير الآلاف منها للبلدان العربية وأساطيل كأس العالم والنقل المدرسي والسياحي.',
      en: 'World largest single commercial bus manufacturing base, producing over 400 coaches daily, heavily exported to Saudi Arabia, Qatar, Egypt, and the UAE.'
    },
    coverImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 3600,
    coordinates: { latitude: 34.6985, longitude: 113.7125 },
    address: {
      ar: 'طريق يوتونغ، منطقة قويلينغ، تشنغتشو، خنان',
      en: 'Yutong Road, Guancheng District, Zhengzhou, Henan',
      zh: '河南省郑州市管城回族区宇通路与中州大道交叉口'
    },
    contactInfo: { phone: '+86-371-6671-8999' },
    websiteUrl: 'https://en.yutong.com/',
    features: {
      ar: ['طاقة إنتاجية تتجاوز 65,000 حافلة سنوياً', 'حافلات مخصصة لأجواء الخليج شديدة الحرارة (55°C)', 'خطوط لحام روبوتية وتغطيس كهربائي مقاوم للصدأ', 'شبكة دعم وقطع غيار إقليمية'],
      en: ['65,000+ Annual Bus Capacity', 'Desert-Proof 55°C Tropical A/C Systems', 'Automated Robotic Welding & Cathodic E-Coat', 'Dedicated Middle East Fleet Support']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-12',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'المصنع المعتمد لأكبر صفقات توريد الحافلات السياحية والمدرسية وحافلات الحج والعمرة في السعودية والشرق الأوسط.',
        en: 'The certified supplier for major public transit and Hajj pilgrim bus fleets in Saudi Arabia and the GCC region.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Tongxiang / China Jushi Fiberglass
  {
    id: 'china-jushi-fiberglass-global-base',
    slug: 'china-jushi-fiberglass-global-base',
    subdomain: 'factories',
    citySlug: 'tongxiang',
    name: {
      ar: 'مجمع جوشي العالمي لألياف الزجاج والمواد المركبة (China Jushi HQ)',
      en: 'China Jushi Co. Global Fiberglass Composites Base',
      zh: '中国巨石新材料智能制造基地 (桐乡经济开发区)'
    },
    category: {
      ar: 'ألياف الزجاج المقوى (Fiberglass) والمواد المركبة الصناعية',
      en: 'High-Performance Fiberglass Roving, Mats & Composite Materials'
    },
    description: {
      ar: 'المقر والمصنع الأكبر لشركة تشاينا جوشي؛ أكبر منتج لألياف الزجاج في العالم بطاقة إنتاجية تتجاوز 2.6 مليون طن سنوياً، وتستخدم أليافها في شفرات طاقة الرياح، هياكل السيارات، الأنابيب، ومواد البناء المقاومة للحرارة.',
      en: 'Global headquarters of China Jushi, the world largest fiberglass manufacturer with annual output exceeding 2.6M tons for wind turbine and automotive industries.'
    },
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 2890,
    coordinates: { latitude: 30.6325, longitude: 120.5518 },
    address: {
      ar: 'رقم 669 شارع ون هوا الجنوبي، منطقة تونغشيانغ الاقتصادية، تشيجيانغ',
      en: 'No. 669 Wenhua South Road, Tongxiang Economic Tech Zone, Zhejiang',
      zh: '浙江省桐乡市经济开发区文华南路669号'
    },
    contactInfo: { phone: '+86-573-8818-1888' },
    websiteUrl: 'https://www.jushi.com/en/',
    features: {
      ar: ['المرتبة الأولى عالمياً في إنتاج ألياف الفايبر جلاس', 'أفران صهر مستمر ذكية بدون انبعاثات', 'تصدير لأكثر من 100 دولة وموانئ الشرق الأوسط', 'مختبرات فحص قوى الشد والمطابقة'],
      en: ['World #1 Fiberglass Manufacturer', 'Zero-Emission Continuous Tank Furnaces', 'Direct Middle East Container Exports', 'ISO & DNV Certified Testing Laboratories']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-13',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'المصدر الأساسي للمواد المركبة للمصانع ومقاولي البنية التحتية وخطوط أنابيب البترول والغاز في الخليج العربي.',
        en: 'The core raw materials supplier for composite pipelines and infrastructure contractors across the Arabian Gulf.'
      }
    },
    lastUpdated: '2026-09-13'
  }
];
