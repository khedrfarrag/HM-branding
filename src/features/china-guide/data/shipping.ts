import { IChinaCommercialEntity } from '../types';

export const CHINA_SHIPPING_DATA: IChinaCommercialEntity[] = [
  // Guangzhou / Arab Logistics Leader
  {
    id: 'cosco-shipping-specialized-middle-east',
    slug: 'cosco-shipping-specialized-middle-east',
    subdomain: 'shipping-companies',
    citySlug: 'guangzhou',
    name: {
      ar: 'كوسكو للشحن البحري الدولي - خطوط الشرق الأوسط والخليج (COSCO Shipping)',
      en: 'COSCO Shipping Lines (Middle East & Red Sea Direct Service)',
      zh: '中远海运集装箱运输有限公司 (广州华南分公司)'
    },
    category: {
      ar: 'شحن بحري حاويات كاملة (FCL) وخطوط ملاحية مباشرة للخليج العربي والبحر الأحمر',
      en: 'Ocean Container Shipping (FCL) & Direct Middle East Liners'
    },
    description: {
      ar: 'أكبر شركة شحن بحري في الصين والخط الملاحي الرائد عالمياً؛ توفر خطوط شحن أسبوعية مباشرة من موانئ الصين (نانشا، شينزن، نينغبو، شنغهاي) إلى موانئ جبل علي، جدة، الدمام، السخنة، وبورسعيد بأسرع زمن عبور بحري.',
      en: 'China premier global ocean carrier operating direct weekly container services from South/East China ports to Jebel Ali, Jeddah, Dammam, and Sokhna.'
    },
    coverImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 3200,
    coordinates: { latitude: 23.1254, longitude: 113.3188 },
    address: {
      ar: 'برج كوسكو للشحن، شارع تيانخه، حي تيانخه، كوانزو، غوانغدونغ',
      en: 'COSCO Shipping Tower, Tianhe Road, Tianhe District, Guangzhou',
      zh: '广州市天河区天河路中远海运大厦'
    },
    contactInfo: { phone: '+86-20-8396-8888' },
    websiteUrl: 'https://lines.coscoshipping.com/home/',
    features: {
      ar: ['رحلات إبحار أسبوعية منتظمة ومباشرة', 'حاويات 20 قدم و 40 قدم و 40HQ وحاويات مبردة', 'تتبع رقمي فوري للحاويات عبر الأقمار الصناعية', 'أفضل أسعار نولون بحري للمستوردين الكبار'],
      en: ['Fixed Weekly Direct Vessel Departures', '20GP, 40GP, 40HQ & Reefer Availability', 'Real-Time Global Container Satellite Tracking', 'Competitive Volume Freight Contract Rates']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-11',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'الخط الملاحي الأكثر موثوقية وأماناً لشحن الحاويات الكاملة للشرق الأوسط، يضمن توافر مساحات الحاويات حتى في مواسم الذروة قبل الأعياد.',
        en: 'The most dependable ocean carrier for FCL cargo to Arab ports, guaranteeing container equipment availability during peak pre-holiday rushes.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Yiwu / Middle East Forwarding & DDP
  {
    id: 'yiwu-gulf-express-logistics',
    slug: 'yiwu-gulf-express-logistics',
    subdomain: 'shipping-companies',
    citySlug: 'yiwu',
    name: {
      ar: 'شركة الخليج للشحن الدولي والتخليص الجمركي DDP (إيوو)',
      en: 'Gulf Express Freight Forwarding & DDP Customs (Yiwu)',
      zh: '义乌海湾速运中东专线与双清包税物流中心'
    },
    category: {
      ar: 'شحن جزئي (LCL)، تجميع حاويات، شحن جوي سريع، وخدمات DDP شاملة الجمارك',
      en: 'Consolidated LCL Cargo, Air Freight & Middle East DDP Solutions'
    },
    description: {
      ar: 'شركة لوجستية كبرى متخصصة حصرياً في شحن بضائع سوق الفوتيان ومصانع تشيجيانغ إلى السعودية، الإمارات، الكويت، ومصر بنظام التخليص الجمركي الشامل والتوصيل حتى باب المستودع (DDP Door-to-Door).',
      en: 'Premier specialized freight forwarder in Yiwu dedicated to Gulf destinations, offering consolidated LCL, air cargo, and door-to-door DDP clearance.'
    },
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviewCount: 4100,
    coordinates: { latitude: 29.3288, longitude: 120.1012 },
    address: {
      ar: 'المنطقة اللوجستية الدولية، طريق تشوتشو الشمالي، إيوو، تشيجيانغ',
      en: 'International Logistics Park, Chouzhou North Road, Yiwu, Zhejiang',
      zh: '浙江省义乌市稠州北路与西城路交叉口现代物流园'
    },
    contactInfo: { phone: '+86-579-8566-9900', wechat: 'Yiwu_Gulf_Freight_VIP' },
    websiteUrl: 'https://hussam-mabrouk.com/ar/services/sourcing',
    features: {
      ar: ['مستودعات مجانية لتجميع البضائع في إيوو', 'شحن LCL من ربع متر مكعب (CBM) حتى حاوية كاملة', 'إصدار شهادات سابر (SABER) والتصدير الجمركي', 'تأمين شامل على البضائع ضد التلف والفقد'],
      en: ['Free Consolidation Warehousing in Yiwu', 'LCL Starting from 0.5 CBM to Full 40HQ', 'Official SASO/SABER Certification Issuance', 'Comprehensive Marine Cargo Insurance Coverage']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-09',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'الخيار الأمثل لتجار التجزئة ومنصات التجارة الإلكترونية الراغبين في شحن بضائع متنوعة دون الحاجة لملء حاوية كاملة.',
        en: 'The premier solution for e-commerce and retail merchants needing multi-supplier cargo consolidation with hassle-free door delivery.'
      }
    },
    lastUpdated: '2026-09-13'
  },

  // Shenzhen / Air Cargo & Cross-Border Logistics
  {
    id: 'shenzhen-sky-cargo-cross-border',
    slug: 'shenzhen-sky-cargo-cross-border',
    subdomain: 'shipping-companies',
    citySlug: 'shenzhen',
    name: {
      ar: 'شركة سماء شينزن للشحن الجوي السريع واللوجستيات (مطار باوان)',
      en: 'Shenzhen Sky Cargo Express & Cross-Border Air Freight',
      zh: '深圳宝安国际航空货运与跨境物流中心'
    },
    category: {
      ar: 'شحن جوي سريع للإلكترونيات والبطاريات والطرود التجارية للشرق الأوسط',
      en: 'Air Cargo Express for Electronics, Lithium Batteries & Urgent Freight'
    },
    description: {
      ar: 'مركز لوجستي متخصص في الشحن الجوي عبر مطار شينزن باوان ومطار هونغ كونغ الدولي؛ يملك تراخيص معتمدة لشحن الأجهزة الإلكترونية وبطاريات الليثيوم الحساسة مع وصول خلال 3-5 أيام لمطارات الرياض، دبي، والقاهرة.',
      en: 'Licensed air cargo forwarder operating out of Shenzhen Bao\'an and Hong Kong air hubs, specialized in expedited electronics and lithium battery shipments.'
    },
    coverImage: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewCount: 2150,
    coordinates: { latitude: 22.6392, longitude: 113.8125 },
    address: {
      ar: 'مجمع الشحن الجوي الدولي، مطار باوان، شينزن، غوانغدونغ',
      en: 'Bao\'an International Airport Cargo Terminal, Shenzhen, Guangdong',
      zh: '深圳市宝安区宝安国际机场国际货运村B栋'
    },
    contactInfo: { phone: '+86-755-2345-6789' },
    websiteUrl: 'https://hussam-mabrouk.com/ar/services/sourcing',
    features: {
      ar: ['رحلات طيران شحن مباشرة لدبي والرياض والقاهرة', 'تراخيص معتمدة لشحن بطاريات الليثيوم (MSDS / UN38.3)', 'تخليص جمركي جوي فوري خلال 24 ساعة', 'توصيل سريع خلال 72 إلى 96 ساعة'],
      en: ['Direct Freighter Flights to Riyadh, Dubai & Cairo', 'Licensed UN38.3 Lithium Battery Air Handling', 'Rapid 24-Hour Export Air Customs Clearance', 'Express 72-96 Hour Transit Times']
    },
    curatorVerification: {
      verifiedBy: { ar: 'المستشار التجاري حسام مبروك', en: 'Hussam Mabrouk' },
      verificationDate: '2026-09-08',
      consultantRole: { ar: 'مستشار الاستيراد والتوثيق الميداني في الصين', en: 'China Sourcing & Field Verification Consultant' },
      trustNotes: {
        ar: 'المنقذ لعينات البضائع المستعجلة وشحنات الإلكترونيات عالية القيمة؛ تم فحص مستودعات الشحن الجوي واعتمادها.',
        en: 'The go-to solution for urgent production samples and high-value tech cargo requiring strict flight scheduling.'
      }
    },
    lastUpdated: '2026-09-13'
  }
];
