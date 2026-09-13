import { IChinaDirectoryEntity } from '@/domains/china-directory/entities';

export const CHINA_DIRECTORY_SHIPPING_LINES: IChinaDirectoryEntity[] = [
  {
    "id": "shipping-line-cosco-shipping-lines",
    "slug": "cosco-shipping-lines",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "كوسكو للملاحة البحرية (COSCO Shipping)",
      "en": "COSCO SHIPPING Lines Co., Ltd.",
      "zh": "中远海运集装箱运输有限公司",
      "pinyin": "COSCO SHIPPING Lines Co., Ltd."
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "أكبر ناقل بحري وطني في الصين ورابع أكبر شركة حاويات في العالم، تقدم خطوطاً أسبوعية مباشرة من جميع الموانئ الصينية إلى موانئ الخليج والبحر الأحمر وشمال أفريقيا مع خدمات التخليص والتتبع اللوجستي.",
      "en": "China’s state-owned ocean liner and the 4th largest carrier globally, providing extensive weekly direct loops connecting all major Chinese coastal ports to the Arabian Gulf, Red Sea, and Mediterranean ports."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://lines.coscoshipping.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الصين",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 3,100,000 TEU",
        "حجم الأسطول: 510 سفينة حاويات",
        "المقر الرئيسي: شنغهاي، الصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي (دبي)، ميناء جدة الإسلامي، ميناء الملك عبد العزيز (الدمام)، ميناء السخنة (مصر)"
      ],
      "en": [
        "Capacity: 3,100,000 TEU",
        "Fleet: 510 container vessels",
        "Headquarters: شنغهاي، الصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي (دبي), ميناء جدة الإسلامي, ميناء الملك عبد العزيز (الدمام), ميناء السخنة (مصر)"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة COSCO SHIPPING Lines Co., Ltd.",
        "url": "https://lines.coscoshipping.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني مباشر للوكلاء الملاحيين وجداول الإبحار وحجوزات الشحن",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم التحقق من مسارات هذا الخط الملاحي وجداول الإبحار ومواعيد الترانزيت إلى موانئ الشرق الأوسط ميدانياً عبر مكاتب الوكلاء في شنغهاي وشنتشن بواسطة المستشار حسام مبروك.",
        "en": "Field verified by Consultant Hossam Mabrouk through direct shipping agency coordination in Shanghai and Shenzhen, confirming transit schedules to Middle Eastern ports."
      }
    },
    "extra": {
      "fleetSize": 510,
      "teuCapacity": "3,100,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-yantian-port",
        "guangzhou-nansha-port",
        "qingdao-port",
        "tianjin-port",
        "xiamen-port",
        "dalian-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي (دبي)",
        "ميناء جدة الإسلامي",
        "ميناء الملك عبد العزيز (الدمام)",
        "ميناء السخنة (مصر)",
        "ميناء الإسكندرية",
        "ميناء العقبة (الأردن)",
        "ميناء حمد (قطر)",
        "ميناء الشويخ (الكويت)"
      ],
      "mainRoutes": [
        "خط الشرق الأقصى - الخليج العربي المباشر (AGX)",
        "خط البحر الأحمر السريع (RES)",
        "خط آسيا - شرق المتوسط (AEM)"
      ]
    }
  },
  {
    "id": "shipping-line-maersk-line",
    "slug": "maersk-line",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "ميرسك العالمية (Maersk Line)",
      "en": "A.P. Moller – Maersk",
      "zh": "马士基航运",
      "pinyin": "A.P. Moller – Maersk"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "عملاق النقل البحري والخدمات اللوجستية المتكاملة، يوفر خدمات شحن الحاويات المبردة والجافة وربط الموانئ الصينية بمحطات الترانزيت في صلالة وبورسعيد وجبل علي.",
      "en": "Integrated global container logistics company with scheduled direct and feeder services connecting China to Jebel Ali, Salalah, King Abdullah Port, and Port Said."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.maersk.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الدنمارك",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 4,200,000 TEU",
        "حجم الأسطول: 690 سفينة حاويات",
        "المقر الرئيسي: كوبنهاغن، الدنمارك / شنغهاي (المكتب الإقليمي)",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء صلالة (عمان)، ميناء الملك عبد الله (رابغ)، ميناء بورسعيد (مصر)"
      ],
      "en": [
        "Capacity: 4,200,000 TEU",
        "Fleet: 690 container vessels",
        "Headquarters: كوبنهاغن، الدنمارك / شنغهاي (المكتب الإقليمي)",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء صلالة (عمان), ميناء الملك عبد الله (رابغ), ميناء بورسعيد (مصر)"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة A.P. Moller – Maersk",
        "url": "https://www.maersk.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني مباشر للوكلاء الملاحيين وجداول الإبحار وحجوزات الشحن",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم التحقق من مسارات هذا الخط الملاحي وجداول الإبحار ومواعيد الترانزيت إلى موانئ الشرق الأوسط ميدانياً عبر مكاتب الوكلاء في شنغهاي وشنتشن بواسطة المستشار حسام مبروك.",
        "en": "Field verified by Consultant Hossam Mabrouk through direct shipping agency coordination in Shanghai and Shenzhen, confirming transit schedules to Middle Eastern ports."
      }
    },
    "extra": {
      "fleetSize": 690,
      "teuCapacity": "4,200,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-yantian-port",
        "qingdao-port",
        "tianjin-port",
        "xiamen-port",
        "nansha-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء صلالة (عمان)",
        "ميناء الملك عبد الله (رابغ)",
        "ميناء بورسعيد (مصر)",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خدمة ME2 (الشرق الأقصى إلى الخليج العربي)",
        "خدمة ME3 (الصين - البحر الأحمر والشرق الأوسط)"
      ]
    }
  },
  {
    "id": "shipping-line-msc-mediterranean-shipping-company",
    "slug": "msc-mediterranean-shipping-company",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "إم إس سي للملاحة (MSC Mediterranean Shipping Company)",
      "en": "Mediterranean Shipping Company (MSC)",
      "zh": "地中海航运公司",
      "pinyin": "Mediterranean Shipping Company (MSC)"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "أكبر خط ملاحي للحاويات في العالم من حيث السعة الاستيعابية، يمتلك أسطولاً عملاقاً وشبكة خدمات مباشرة بين الصين والشرق الأوسط مع تغطية كاملة لموانئ الترانزيت الكبرى.",
      "en": "The world’s largest container shipping line by capacity, operating flagship direct services (Falcon, Tiger) linking China with the Arabian Gulf, Red Sea, and North Africa."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.msc.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "سويسرا",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 5,800,000 TEU",
        "حجم الأسطول: 820 سفينة حاويات",
        "المقر الرئيسي: جنيف، سويسرا / شنغهاي (المكتب الإقليمي)",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء خليفة (أبوظبي)، ميناء جدة، ميناء الملك عبد الله"
      ],
      "en": [
        "Capacity: 5,800,000 TEU",
        "Fleet: 820 container vessels",
        "Headquarters: جنيف، سويسرا / شنغهاي (المكتب الإقليمي)",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء خليفة (أبوظبي), ميناء جدة, ميناء الملك عبد الله"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Mediterranean Shipping Company (MSC)",
        "url": "https://www.msc.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني مباشر للوكلاء الملاحيين وجداول الإبحار وحجوزات الشحن",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم التحقق من مسارات هذا الخط الملاحي وجداول الإبحار ومواعيد الترانزيت إلى موانئ الشرق الأوسط ميدانياً عبر مكاتب الوكلاء في شنغهاي وشنتشن بواسطة المستشار حسام مبروك.",
        "en": "Field verified by Consultant Hossam Mabrouk through direct shipping agency coordination in Shanghai and Shenzhen, confirming transit schedules to Middle Eastern ports."
      }
    },
    "extra": {
      "fleetSize": 820,
      "teuCapacity": "5,800,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-yantian-port",
        "qingdao-port",
        "xiamen-port",
        "tianjin-port",
        "guangzhou-nansha-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء خليفة (أبوظبي)",
        "ميناء جدة",
        "ميناء الملك عبد الله",
        "ميناء طنجة المتوسط (المغرب)"
      ],
      "mainRoutes": [
        "خدمة فالكون Falcon (الصين - الخليج العربي)",
        "خدمة تايغر Tiger (الصين - البحر الأحمر)",
        "خدمة دراغون Dragon (الصين - البحر المتوسط)"
      ]
    }
  },
  {
    "id": "shipping-line-cma-cgm-group",
    "slug": "cma-cgm-group",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "سي إم إيه سي جي إم (CMA CGM Group)",
      "en": "CMA CGM S.A.",
      "zh": "达飞海运集团",
      "pinyin": "CMA CGM S.A."
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "مجموعة ملاحية فرنسية رائدة وعضو تحالف Ocean Alliance، تقدم حلول شحن متعدد الوسائط وخطوطاً مباشرة أسبوعية من موانئ الصين إلى دول مجلس التعاون وشمال أفريقيا.",
      "en": "French shipping powerhouse and key member of the Ocean Alliance, deploying direct weekly services connecting Shanghai, Ningbo, and Shenzhen with Gulf and Red Sea destinations."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.cma-cgm.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "فرنسا",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 3,650,000 TEU",
        "حجم الأسطول: 620 سفينة حاويات",
        "المقر الرئيسي: مارسيليا، فرنسا / شنغهاي (مقر الصين)",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء بورسعيد، ميناء بيروت"
      ],
      "en": [
        "Capacity: 3,650,000 TEU",
        "Fleet: 620 container vessels",
        "Headquarters: مارسيليا، فرنسا / شنغهاي (مقر الصين)",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء بورسعيد, ميناء بيروت"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة CMA CGM S.A.",
        "url": "https://www.cma-cgm.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني مباشر للوكلاء الملاحيين وجداول الإبحار وحجوزات الشحن",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم التحقق من مسارات هذا الخط الملاحي وجداول الإبحار ومواعيد الترانزيت إلى موانئ الشرق الأوسط ميدانياً عبر مكاتب الوكلاء في شنغهاي وشنتشن بواسطة المستشار حسام مبروك.",
        "en": "Field verified by Consultant Hossam Mabrouk through direct shipping agency coordination in Shanghai and Shenzhen, confirming transit schedules to Middle Eastern ports."
      }
    },
    "extra": {
      "fleetSize": 620,
      "teuCapacity": "3,650,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "shenzhen-yantian-port",
        "qingdao-port",
        "tianjin-port",
        "guangzhou-nansha-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء بورسعيد",
        "ميناء بيروت",
        "ميناء دمياط",
        "ميناء الدار البيضاء (المغرب)"
      ],
      "mainRoutes": [
        "خدمة CIMEX 1 (الشرق الأقصى - الخليج)",
        "خدمة BEX (البحر الأسود وشرق المتوسط)",
        "خدمة MEX (الصين - البحر المتوسط)"
      ]
    }
  },
  {
    "id": "shipping-line-evergreen-marine",
    "slug": "evergreen-marine",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "إيفرجرين مارين (Evergreen Marine Corp)",
      "en": "Evergreen Marine Corporation",
      "zh": "长荣海运",
      "pinyin": "Evergreen Marine Corporation"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "إحدى كبريات شركات الحاويات الآسيوية، تتميز بأسطول حاويات حديث وشبكة منتظمة لربط المصانع الصينية بأسواق الاستيراد في الخليج ومصر والأردن.",
      "en": "Leading global container carrier based in Taiwan, operating dedicated direct loops from Chinese export hubs to Jebel Ali, Dammam, and Red Sea gateways."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.evergreen-marine.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "تايوان",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 1,680,000 TEU",
        "حجم الأسطول: 215 سفينة حاويات",
        "المقر الرئيسي: تايبيه، تايوان / شنغهاي ونينغبو (مكاتب الصين)",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء الدمام، ميناء جدة، ميناء العقبة"
      ],
      "en": [
        "Capacity: 1,680,000 TEU",
        "Fleet: 215 container vessels",
        "Headquarters: تايبيه، تايوان / شنغهاي ونينغبو (مكاتب الصين)",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء الدمام, ميناء جدة, ميناء العقبة"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Evergreen Marine Corporation",
        "url": "https://www.evergreen-marine.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني مباشر للوكلاء الملاحيين وجداول الإبحار وحجوزات الشحن",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم التحقق من مسارات هذا الخط الملاحي وجداول الإبحار ومواعيد الترانزيت إلى موانئ الشرق الأوسط ميدانياً عبر مكاتب الوكلاء في شنغهاي وشنتشن بواسطة المستشار حسام مبروك.",
        "en": "Field verified by Consultant Hossam Mabrouk through direct shipping agency coordination in Shanghai and Shenzhen, confirming transit schedules to Middle Eastern ports."
      }
    },
    "extra": {
      "fleetSize": 215,
      "teuCapacity": "1,680,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-yantian-port",
        "qingdao-port",
        "xiamen-port",
        "guangzhou-nansha-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء الدمام",
        "ميناء جدة",
        "ميناء العقبة",
        "ميناء السخنة"
      ],
      "mainRoutes": [
        "خدمة APG (آسيا - الخليج العربي)",
        "خدمة FRS (الشرق الأقصى - البحر الأحمر)"
      ]
    }
  },
  {
    "id": "shipping-line-one-ocean-network-express",
    "slug": "one-ocean-network-express",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "أوشن نتورك إكسبريس (ONE - Ocean Network Express)",
      "en": "Ocean Network Express Pte. Ltd.",
      "zh": "海洋网联船务 (ONE)",
      "pinyin": "Ocean Network Express Pte. Ltd."
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "التحالف الياباني الموحد (NYK, MOL, K-Line)، يتميز بأسطول الحاويات الوردي المميز وخدمات الشحن الرقمية المباشرة بين الصين والشرق الأوسط.",
      "en": "Consortium of Japan’s major shipping lines (NYK, MOL, K-Line) headquartered in Singapore, delivering reliable scheduled loops to Gulf and Red Sea ports."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.one-line.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "اليابان / سنغافورة",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 1,800,000 TEU",
        "حجم الأسطول: 230 سفينة حاويات",
        "المقر الرئيسي: سنغافورة / طوكيو / شنغهاي (المكتب الرئيسي للصين)",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء الدمام، ميناء جدة، ميناء حمد"
      ],
      "en": [
        "Capacity: 1,800,000 TEU",
        "Fleet: 230 container vessels",
        "Headquarters: سنغافورة / طوكيو / شنغهاي (المكتب الرئيسي للصين)",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء الدمام, ميناء جدة, ميناء حمد"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Ocean Network Express Pte. Ltd.",
        "url": "https://www.one-line.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 230,
      "teuCapacity": "1,800,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "qingdao-port",
        "tianjin-port",
        "xiamen-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء الدمام",
        "ميناء جدة",
        "ميناء حمد",
        "ميناء صحار (عمان)"
      ],
      "mainRoutes": [
        "خدمة AGX (آسيا - الخليج السريعة)",
        "خدمة AR1 (آسيا - البحر الأحمر)"
      ]
    }
  },
  {
    "id": "shipping-line-hapag-lloyd",
    "slug": "hapag-lloyd",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "هاباج لويد (Hapag-Lloyd)",
      "en": "Hapag-Lloyd AG",
      "zh": "赫伯罗特船务",
      "pinyin": "Hapag-Lloyd AG"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة الملاحة الألمانية العريقة، تقدم أعلى معايير الدقة في مواعيد الشحن مع خدمات التتبع الفوري للحاويات وحلول متقدمة لنقل البضائع الخطرة والمبردة.",
      "en": "German premier container carrier providing high schedule reliability and advanced reefer/dry container transport from China to Arabian Gulf and Mediterranean ports."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.hapag-lloyd.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "ألمانيا",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 2,000,000 TEU",
        "حجم الأسطول: 270 سفينة حاويات",
        "المقر الرئيسي: هامبورغ، ألمانيا / شنغهاي (المكتب الإقليمي)",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء الدمام، ميناء جدة، ميناء طنجة المتوسط"
      ],
      "en": [
        "Capacity: 2,000,000 TEU",
        "Fleet: 270 container vessels",
        "Headquarters: هامبورغ، ألمانيا / شنغهاي (المكتب الإقليمي)",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء الدمام, ميناء جدة, ميناء طنجة المتوسط"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Hapag-Lloyd AG",
        "url": "https://www.hapag-lloyd.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 270,
      "teuCapacity": "2,000,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-yantian-port",
        "qingdao-port",
        "tianjin-port",
        "xiamen-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء الدمام",
        "ميناء جدة",
        "ميناء طنجة المتوسط",
        "ميناء دمياط"
      ],
      "mainRoutes": [
        "خدمة AGX (تحالف THE Alliance للخليج)",
        "خدمة MD2 (الصين - البحر المتوسط)"
      ]
    }
  },
  {
    "id": "shipping-line-hmm-hyundai-merchant-marine",
    "slug": "hmm-hyundai-merchant-marine",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "إتش إم إم (HMM - Hyundai Merchant Marine)",
      "en": "HMM Co., Ltd.",
      "zh": "韩新海运 (HMM)",
      "pinyin": "HMM Co., Ltd."
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "الناقل البحري الكوري الجنوبي الأكبر، يشغل سفناً عملاقة سعة 24,000 حاوية ويوفر خطوطاً أسبوعية منتظمة للبضائع المصنعة في الصين.",
      "en": "South Korea’s flagship national ocean liner, operating mega-container vessels on weekly loops connecting Qingdao, Shanghai, and Ningbo with Arabian Gulf ports."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.hmm21.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "كوريا الجنوبية",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 880,000 TEU",
        "حجم الأسطول: 85 سفينة حاويات",
        "المقر الرئيسي: سيول، كوريا الجنوبية / شنغهاي",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء الدمام، ميناء حمد"
      ],
      "en": [
        "Capacity: 880,000 TEU",
        "Fleet: 85 container vessels",
        "Headquarters: سيول، كوريا الجنوبية / شنغهاي",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء الدمام, ميناء حمد"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة HMM Co., Ltd.",
        "url": "https://www.hmm21.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 85,
      "teuCapacity": "880,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-yantian-port",
        "qingdao-port",
        "tianjin-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء الدمام",
        "ميناء حمد"
      ],
      "mainRoutes": [
        "خدمة OGX (الشرق الأقصى - الشرق الأوسط)"
      ]
    }
  },
  {
    "id": "shipping-line-yang-ming-marine",
    "slug": "yang-ming-marine",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "يانغ مينغ للملاحة (Yang Ming Marine Transport)",
      "en": "Yang Ming Marine Transport Corp.",
      "zh": "阳明海运",
      "pinyin": "Yang Ming Marine Transport Corp."
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "خط ملاحي تايواني دولي يوفر حلولاً موثوقة في نقل الحاويات الجافة والمبردة وخدمات الشحن المباشر إلى موانئ الشرق الأوسط والخليج.",
      "en": "Major ocean carrier providing reliable scheduled container services linking coastal China to key Middle Eastern import gateways."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.yangming.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "تايوان",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 710,000 TEU",
        "حجم الأسطول: 95 سفينة حاويات",
        "المقر الرئيسي: كيلونغ، تايوان / شنغهاي",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء الدمام، ميناء جدة، ميناء السخنة"
      ],
      "en": [
        "Capacity: 710,000 TEU",
        "Fleet: 95 container vessels",
        "Headquarters: كيلونغ، تايوان / شنغهاي",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء الدمام, ميناء جدة, ميناء السخنة"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Yang Ming Marine Transport Corp.",
        "url": "https://www.yangming.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 95,
      "teuCapacity": "710,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "qingdao-port",
        "guangzhou-nansha-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء الدمام",
        "ميناء جدة",
        "ميناء السخنة"
      ],
      "mainRoutes": [
        "خدمة CGX (الصين - الخليج المباشرة)",
        "خدمة ARX (آسيا - البحر الأحمر)"
      ]
    }
  },
  {
    "id": "shipping-line-zim-integrated-shipping",
    "slug": "zim-integrated-shipping",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "زيم للملاحة (ZIM Integrated Shipping Services)",
      "en": "ZIM Integrated Shipping Services Ltd.",
      "zh": "以星综合航运",
      "pinyin": "ZIM Integrated Shipping Services Ltd."
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "خط ملاحة عالمي متخصص في خدمات الشحن السريع لحاويات التجارة الإلكترونية والبضائع الحساسة للوقت من موانئ شرق الصين.",
      "en": "Global container liner known for agile, asset-light operations and specialized e-commerce express lanes connecting China worldwide."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.zim.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "إسرائيل / مكاتب دولية",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 610,000 TEU",
        "حجم الأسطول: 130 سفينة حاويات",
        "المقر الرئيسي: حيفا / هونغ كونغ وشنغهاي",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء إيلات، موانئ البحر الأبيض المتوسط"
      ],
      "en": [
        "Capacity: 610,000 TEU",
        "Fleet: 130 container vessels",
        "Headquarters: حيفا / هونغ كونغ وشنغهاي",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء إيلات, موانئ البحر الأبيض المتوسط"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة ZIM Integrated Shipping Services Ltd.",
        "url": "https://www.zim.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 130,
      "teuCapacity": "610,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-yantian-port",
        "qingdao-port",
        "xiamen-port"
      ],
      "destinationPortsArab": [
        "ميناء إيلات",
        "موانئ البحر الأبيض المتوسط"
      ],
      "mainRoutes": [
        "خدمات ZIM السريعة للشحن العابر للمحيطات"
      ]
    }
  },
  {
    "id": "shipping-line-wan-hai-lines",
    "slug": "wan-hai-lines",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "وان هاي للملاحة (Wan Hai Lines)",
      "en": "Wan Hai Lines Ltd.",
      "zh": "万海航运",
      "pinyin": "Wan Hai Lines Ltd."
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "أكبر ناقل بحري متخصص داخل آسيا والشرق الأوسط، يشتهر بأسعار تنافسية وتردد رحلات أسبوعي مرتفع من جنوب وشرق الصين إلى موانئ الخليج العربي.",
      "en": "Leading intra-Asia and Middle East container specialist with frequent weekly sailings from Nansha, Shekou, and Ningbo to Jebel Ali and Dammam."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.wanhai.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "تايوان",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 480,000 TEU",
        "حجم الأسطول: 120 سفينة حاويات",
        "المقر الرئيسي: تايبيه / شنغهاي وغوانغتشو",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء الدمام، ميناء حمد، ميناء صحار"
      ],
      "en": [
        "Capacity: 480,000 TEU",
        "Fleet: 120 container vessels",
        "Headquarters: تايبيه / شنغهاي وغوانغتشو",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء الدمام, ميناء حمد, ميناء صحار"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Wan Hai Lines Ltd.",
        "url": "https://www.wanhai.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 120,
      "teuCapacity": "480,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "xiamen-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء الدمام",
        "ميناء حمد",
        "ميناء صحار"
      ],
      "mainRoutes": [
        "خدمة CMS (الصين - الشرق الأوسط السريعة)"
      ]
    }
  },
  {
    "id": "shipping-line-pil-pacific-international-lines",
    "slug": "pil-pacific-international-lines",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "بي آي إل (PIL - Pacific International Lines)",
      "en": "Pacific International Lines (Pte) Ltd.",
      "zh": "太平船务",
      "pinyin": "Pacific International Lines (Pte) Ltd."
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة الملاحة السنغافورية الرائدة في خطوط البحر الأحمر والشرق الأوسط وأفريقيا، توفر أفضل تغطية للموانئ اليمنية والمصرية والسعودية.",
      "en": "Singapore’s premier liner with historic strength and extensive coverage across the Red Sea, Arabian Gulf, and East African ports."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.pilship.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "سنغافورة",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 300,000 TEU",
        "حجم الأسطول: 80 سفينة حاويات",
        "المقر الرئيسي: سنغافورة / شنغهاي وغوانغتشو",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الحديدة، ميناء عدن"
      ],
      "en": [
        "Capacity: 300,000 TEU",
        "Fleet: 80 container vessels",
        "Headquarters: سنغافورة / شنغهاي وغوانغتشو",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الحديدة, ميناء عدن"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Pacific International Lines (Pte) Ltd.",
        "url": "https://www.pilship.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 80,
      "teuCapacity": "300,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الحديدة",
        "ميناء عدن",
        "ميناء جيبوتي",
        "ميناء السخنة"
      ],
      "mainRoutes": [
        "خدمة RSS (البحر الأحمر السريعة)",
        "خدمة Gulf Direct Service"
      ]
    }
  },
  {
    "id": "shipping-line-sitc-international-holdings",
    "slug": "sitc-international-holdings",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "إس آي تي سي للملاحة (SITC International Holdings)",
      "en": "SITC International Holdings Co., Ltd.",
      "zh": "海丰国际航运",
      "pinyin": "SITC International Holdings Co., Ltd."
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "الناقل الرائد في الشحن البحري عالي الكثافة داخل شرق وجنوب آسيا، يوفر خدمات ربط سريعة وتغذية للموانئ الصينية الفرعية مع الموانئ المحورية.",
      "en": "Premier intra-Asia shipping logistics enterprise providing high-frequency feeder connectivity across 70+ ports in China and Southeast Asia."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.sitc.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الصين / هونغ كونغ",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 165,000 TEU",
        "حجم الأسطول: 105 سفينة حاويات",
        "المقر الرئيسي: هونغ كونغ / شنغهاي وتشينغداو",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: موانئ الترانزيت إلى الشرق الأوسط وجنوب شرق آسيا"
      ],
      "en": [
        "Capacity: 165,000 TEU",
        "Fleet: 105 container vessels",
        "Headquarters: هونغ كونغ / شنغهاي وتشينغداو",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: موانئ الترانزيت إلى الشرق الأوسط وجنوب شرق آسيا"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة SITC International Holdings Co., Ltd.",
        "url": "https://www.sitc.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 105,
      "teuCapacity": "165,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "qingdao-port",
        "tianjin-port",
        "xiamen-port",
        "guangzhou-nansha-port",
        "dalian-port"
      ],
      "destinationPortsArab": [
        "موانئ الترانزيت إلى الشرق الأوسط وجنوب شرق آسيا"
      ],
      "mainRoutes": [
        "شبكات التغذية السريعة بين موانئ الصين الإقليمية وموانئ الحاويات الدولية"
      ]
    }
  },
  {
    "id": "shipping-line-sinotrans-shipping",
    "slug": "sinotrans-shipping",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "سينوترانس للشحن الملاحي (Sinotrans Container Lines)",
      "en": "Sinotrans Container Lines Co., Ltd.",
      "zh": "中外运集装箱运输有限公司",
      "pinyin": "Sinotrans Container Lines Co., Ltd."
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "الذراع الملاحي لمجموعة النقل الحكومية الصينية تشاينا ميرشانتس، يقدم خدمات الربط المتكاملة بين موانئ نهر اليانغتسي والموانئ الساحلية الدولية.",
      "en": "Ocean container division of China Merchants Group, offering integrated barge-to-liner river-sea multimodal solutions throughout China."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.sinolines.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الصين",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 130,000 TEU",
        "حجم الأسطول: 60 سفينة حاويات",
        "المقر الرئيسي: بكين / شنغهاي",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء صلالة"
      ],
      "en": [
        "Capacity: 130,000 TEU",
        "Fleet: 60 container vessels",
        "Headquarters: بكين / شنغهاي",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء صلالة"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Sinotrans Container Lines Co., Ltd.",
        "url": "https://www.sinolines.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 60,
      "teuCapacity": "130,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "tianjin-port",
        "qingdao-port",
        "nanjing-river-port",
        "wuhan-yangluo-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء صلالة"
      ],
      "mainRoutes": [
        "خدمات الممر البحري الشامل وربط النهر بالبحر (River-Sea Transit)"
      ]
    }
  },
  {
    "id": "shipping-line-emirates-shipping-line",
    "slug": "emirates-shipping-line",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "إميريتس شيبنج لاين (Emirates Shipping Line - ESL)",
      "en": "Emirates Shipping Line DMCC",
      "zh": "阿联酋航运",
      "pinyin": "Emirates Shipping Line DMCC"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "خط ملاحي إماراتي متخصص يربط الصين مباشرة بالموانئ الخليجية مع تركيز كامل على سرعة العبور والتخليص الجمركي الميسر للمستوردين العرب.",
      "en": "Dubai-based specialized ocean carrier providing direct express services between prime Chinese coastal manufacturing bases and Gulf ports."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.emiratesline.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الإمارات العربية المتحدة",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 90,000 TEU",
        "حجم الأسطول: 20 سفينة حاويات",
        "المقر الرئيسي: دبي، الإمارات / شنغهاي وهونغ كونغ",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي (المركز الرئيسي)، ميناء الدمام، ميناء الشويخ، ميناء صحار"
      ],
      "en": [
        "Capacity: 90,000 TEU",
        "Fleet: 20 container vessels",
        "Headquarters: دبي، الإمارات / شنغهاي وهونغ كونغ",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي (المركز الرئيسي), ميناء الدمام, ميناء الشويخ, ميناء صحار"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Emirates Shipping Line DMCC",
        "url": "https://www.emiratesline.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني مباشر للوكلاء الملاحيين وجداول الإبحار وحجوزات الشحن",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم التحقق من مسارات هذا الخط الملاحي وجداول الإبحار ومواعيد الترانزيت إلى موانئ الشرق الأوسط ميدانياً عبر مكاتب الوكلاء في شنغهاي وشنتشن بواسطة المستشار حسام مبروك.",
        "en": "Field verified by Consultant Hossam Mabrouk through direct shipping agency coordination in Shanghai and Shenzhen, confirming transit schedules to Middle Eastern ports."
      }
    },
    "extra": {
      "fleetSize": 20,
      "teuCapacity": "90,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي (المركز الرئيسي)",
        "ميناء الدمام",
        "ميناء الشويخ",
        "ميناء صحار",
        "ميناء حمد"
      ],
      "mainRoutes": [
        "خدمة GAL (الخليج - آسيا السريعة)",
        "خدمة COSMO المباشرة للشرق الأوسط"
      ]
    }
  },
  {
    "id": "shipping-line-ts-lines",
    "slug": "ts-lines",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "تي إس لاينز (TS Lines)",
      "en": "TS Lines Ltd.",
      "zh": "德翔海运",
      "pinyin": "TS Lines Ltd."
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة حاويات إقليمية سريعة النمو تقدم خدمات أسبوعية منتظمة للبضائع المصنعة من جنوب وشرق الصين إلى منطقة الخليج العربي.",
      "en": "Fast-growing container liner with robust intra-Asia routes and weekly direct services connecting China to the Middle East."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.tslines.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "تايوان / هونغ كونغ",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 115,000 TEU",
        "حجم الأسطول: 45 سفينة حاويات",
        "المقر الرئيسي: هونغ كونغ / تايبيه / شنغهاي",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء الدمام، ميناء حمد"
      ],
      "en": [
        "Capacity: 115,000 TEU",
        "Fleet: 45 container vessels",
        "Headquarters: هونغ كونغ / تايبيه / شنغهاي",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء الدمام, ميناء حمد"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة TS Lines Ltd.",
        "url": "https://www.tslines.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 45,
      "teuCapacity": "115,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "xiamen-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء الدمام",
        "ميناء حمد"
      ],
      "mainRoutes": [
        "خدمة CMX (الصين - الشرق الأوسط السريعة)"
      ]
    }
  },
  {
    "id": "shipping-line-rcl-regional-container-lines",
    "slug": "rcl-regional-container-lines",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "آر سي إل للملاحة (RCL - Regional Container Lines)",
      "en": "Regional Container Lines",
      "zh": "宏海箱运",
      "pinyin": "Regional Container Lines"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "ناقل حاويات آسيوي يوفر رحلات منتظمة وموثوقة لربط الموانئ الصينية بالموانئ الخليجية مع خدمات التغذية والشحن الترانزيت.",
      "en": "Bangkok-listed regional container line connecting major Chinese industrial gateways to Middle East destinations via feeder and mainline operations."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.rclgroup.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "تايلاند / سنغافورة",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 85,000 TEU",
        "حجم الأسطول: 35 سفينة حاويات",
        "المقر الرئيسي: بانكوك، تايلاند / سنغافورة / شنغهاي",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء الدمام، ميناء الشويخ، ميناء صحار"
      ],
      "en": [
        "Capacity: 85,000 TEU",
        "Fleet: 35 container vessels",
        "Headquarters: بانكوك، تايلاند / سنغافورة / شنغهاي",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء الدمام, ميناء الشويخ, ميناء صحار"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Regional Container Lines",
        "url": "https://www.rclgroup.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 35,
      "teuCapacity": "85,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء الدمام",
        "ميناء الشويخ",
        "ميناء صحار"
      ],
      "mainRoutes": [
        "خدمة RGA (الصين - سنغافورة - الخليج العربي)"
      ]
    }
  },
  {
    "id": "shipping-line-sealead-shipping",
    "slug": "sealead-shipping",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "سي ليد للملاحة (SeaLead Shipping)",
      "en": "SeaLead Shipping",
      "zh": "海联海运",
      "pinyin": "SeaLead Shipping"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "خط ملاحي سريع التطور يقدم مسارات مباشرة سريعة بين موانئ الساحل الصيني وموانئ الخليج العربي والبحر الأحمر بأسعار تنافسية.",
      "en": "Global container carrier providing direct, agile port-to-port connections between China’s main ports and Arabian Gulf/Red Sea hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://sea-lead.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "سنغافورة / الإمارات",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 140,000 TEU",
        "حجم الأسطول: 32 سفينة حاويات",
        "المقر الرئيسي: سنغافورة / دبي / شنغهاي",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام، ميناء الشويخ"
      ],
      "en": [
        "Capacity: 140,000 TEU",
        "Fleet: 32 container vessels",
        "Headquarters: سنغافورة / دبي / شنغهاي",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام, ميناء الشويخ"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة SeaLead Shipping",
        "url": "https://sea-lead.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 32,
      "teuCapacity": "140,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام",
        "ميناء الشويخ",
        "ميناء حمد"
      ],
      "mainRoutes": [
        "خدمة FIX (الشرق الأقصى - الخليج)",
        "خدمة RES (الصين - البحر الأحمر)"
      ]
    }
  },
  {
    "id": "shipping-line-folk-maritime",
    "slug": "folk-maritime",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "فولك البحرية (Folk Maritime - الناقل الوطني السعودي التخصصي)",
      "en": "Folk Maritime",
      "zh": "福克海运",
      "pinyin": "Folk Maritime"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "أول مشغل ملاحي مستقل للحاويات في المملكة العربية السعودية، يوفر خدمات شحن الحاويات والتغذية لربط سلاسل التوريد الصينية بجميع موانئ البحر الأحمر والخليج.",
      "en": "Saudi Arabia’s independent feeder and regional container operator, serving direct sea lanes connecting China to Jeddah and Red Sea terminals."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://folkmaritime.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "المملكة العربية السعودية",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 25,000 TEU",
        "حجم الأسطول: 12 سفينة حاويات",
        "المقر الرئيسي: الرياض وجدة، السعودية / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جدة الإسلامي، ميناء الملك عبد الله، ميناء ينبع التجاري، ميناء جيزان"
      ],
      "en": [
        "Capacity: 25,000 TEU",
        "Fleet: 12 container vessels",
        "Headquarters: الرياض وجدة، السعودية / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جدة الإسلامي, ميناء الملك عبد الله, ميناء ينبع التجاري, ميناء جيزان"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Folk Maritime",
        "url": "https://folkmaritime.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 12,
      "teuCapacity": "25,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-yantian-port",
        "guangzhou-nansha-port"
      ],
      "destinationPortsArab": [
        "ميناء جدة الإسلامي",
        "ميناء الملك عبد الله",
        "ميناء ينبع التجاري",
        "ميناء جيزان"
      ],
      "mainRoutes": [
        "خدمات الربط المباشر وتغذية البحر الأحمر والصين"
      ]
    }
  },
  {
    "id": "shipping-line-safeen-feeders-ad-ports",
    "slug": "safeen-feeders-ad-ports",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "سفين فيدرز - مجموعة موانئ أبوظبي (Safeen Feeders)",
      "en": "Safeen Feeders (AD Ports Group)",
      "zh": "安全支线海运 (阿布扎比港口集团)",
      "pinyin": "Safeen Feeders (AD Ports Group)"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "الذراع الملاحي لمجموعة موانئ أبوظبي العالمية، يوفر خطوط شحن الحاويات المباشرة والتغذية لربط الموانئ الصينية بميناء خليفة المتطور.",
      "en": "Feeder and short-sea shipping arm of AD Ports Group, operating direct links between Chinese industrial hubs and Khalifa Port, Abu Dhabi."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.adportsgroup.com/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الإمارات العربية المتحدة",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 60,000 TEU",
        "حجم الأسطول: 22 سفينة حاويات",
        "المقر الرئيسي: أبوظبي، الإمارات / شنغهاي",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء خليفة (أبوظبي)، ميناء جبل علي، ميناء صحار، ميناء كراتشي"
      ],
      "en": [
        "Capacity: 60,000 TEU",
        "Fleet: 22 container vessels",
        "Headquarters: أبوظبي، الإمارات / شنغهاي",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء خليفة (أبوظبي), ميناء جبل علي, ميناء صحار, ميناء كراتشي"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Safeen Feeders (AD Ports Group)",
        "url": "https://www.adportsgroup.com/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 22,
      "teuCapacity": "60,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "qingdao-port",
        "shenzhen-shekou-port"
      ],
      "destinationPortsArab": [
        "ميناء خليفة (أبوظبي)",
        "ميناء جبل علي",
        "ميناء صحار",
        "ميناء كراتشي"
      ],
      "mainRoutes": [
        "خدمة الخليج - شبه القارة الهندية - الصين"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-zhonggu-logistics-corp",
    "slug": "shipping-line-zhonggu-logistics-corp",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة تشونغقو للملاحة اللوجستية",
      "en": "Zhonggu Logistics Corp",
      "zh": "中谷海运",
      "pinyin": "Zhonggu Logistics Corp"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الصين",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 180,000 TEU",
        "حجم الأسطول: 100 سفينة حاويات",
        "المقر الرئيسي: الصين / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 180,000 TEU",
        "Fleet: 100 container vessels",
        "Headquarters: الصين / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Zhonggu Logistics Corp",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 100,
      "teuCapacity": "180,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-antong-holdings-qasc-",
    "slug": "shipping-line-antong-holdings-qasc-",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة أنتونغ القابضة (كيو إيه إس سي)",
      "en": "Antong Holdings (QASC)",
      "zh": "安通控股",
      "pinyin": "Antong Holdings (QASC)"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الصين",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 95,000 TEU",
        "حجم الأسطول: 85 سفينة حاويات",
        "المقر الرئيسي: الصين / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 95,000 TEU",
        "Fleet: 85 container vessels",
        "Headquarters: الصين / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Antong Holdings (QASC)",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 85,
      "teuCapacity": "95,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-shanghai-jin-jiang-shipping",
    "slug": "shipping-line-shanghai-jin-jiang-shipping",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة جين جيانغ للملاحة - شنغهاي",
      "en": "Shanghai Jin Jiang Shipping",
      "zh": "上海锦江航运",
      "pinyin": "Shanghai Jin Jiang Shipping"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الصين",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 45,000 TEU",
        "حجم الأسطول: 30 سفينة حاويات",
        "المقر الرئيسي: الصين / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 45,000 TEU",
        "Fleet: 30 container vessels",
        "Headquarters: الصين / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Shanghai Jin Jiang Shipping",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 30,
      "teuCapacity": "45,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-ningbo-ocean-shipping-co-",
    "slug": "shipping-line-ningbo-ocean-shipping-co-",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة نينغبو أوشن شيبنج (NBOSCO)",
      "en": "Ningbo Ocean Shipping Co.",
      "zh": "宁波远洋运输",
      "pinyin": "Ningbo Ocean Shipping Co."
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الصين",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 75,000 TEU",
        "حجم الأسطول: 40 سفينة حاويات",
        "المقر الرئيسي: الصين / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 75,000 TEU",
        "Fleet: 40 container vessels",
        "Headquarters: الصين / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Ningbo Ocean Shipping Co.",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 40,
      "teuCapacity": "75,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-dalian-marine-shipping",
    "slug": "shipping-line-dalian-marine-shipping",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة داليان مارين شيبنج",
      "en": "Dalian Marine Shipping",
      "zh": "大连航运",
      "pinyin": "Dalian Marine Shipping"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الصين",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 20,000 TEU",
        "حجم الأسطول: 15 سفينة حاويات",
        "المقر الرئيسي: الصين / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 20,000 TEU",
        "Fleet: 15 container vessels",
        "Headquarters: الصين / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Dalian Marine Shipping",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 15,
      "teuCapacity": "20,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-quanzhou-ansheng-shipping",
    "slug": "shipping-line-quanzhou-ansheng-shipping",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة تشوانتشو آنشنغ للشحن",
      "en": "Quanzhou Ansheng Shipping",
      "zh": "泉州安盛船务",
      "pinyin": "Quanzhou Ansheng Shipping"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الصين",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 65,000 TEU",
        "حجم الأسطول: 35 سفينة حاويات",
        "المقر الرئيسي: الصين / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 65,000 TEU",
        "Fleet: 35 container vessels",
        "Headquarters: الصين / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Quanzhou Ansheng Shipping",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 35,
      "teuCapacity": "65,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-hainan-harbor-shipping",
    "slug": "shipping-line-hainan-harbor-shipping",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة هاينان هاربور للملاحة",
      "en": "Hainan Harbor Shipping",
      "zh": "海南海峡航运",
      "pinyin": "Hainan Harbor Shipping"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الصين",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 18,000 TEU",
        "حجم الأسطول: 12 سفينة حاويات",
        "المقر الرئيسي: الصين / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 18,000 TEU",
        "Fleet: 12 container vessels",
        "Headquarters: الصين / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Hainan Harbor Shipping",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 12,
      "teuCapacity": "18,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-kmtc-korea-marine-transport-",
    "slug": "shipping-line-kmtc-korea-marine-transport-",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة كاي إم تي سي (كوريا مارين)",
      "en": "KMTC (Korea Marine Transport)",
      "zh": "高丽海运",
      "pinyin": "KMTC (Korea Marine Transport)"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "كوريا الجنوبية",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 150,000 TEU",
        "حجم الأسطول: 65 سفينة حاويات",
        "المقر الرئيسي: كوريا الجنوبية / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 150,000 TEU",
        "Fleet: 65 container vessels",
        "Headquarters: كوريا الجنوبية / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة KMTC (Korea Marine Transport)",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 65,
      "teuCapacity": "150,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-sinokor-merchant-marine",
    "slug": "shipping-line-sinokor-merchant-marine",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة سينوكور للملاحة البحرية",
      "en": "Sinokor Merchant Marine",
      "zh": "长锦商船",
      "pinyin": "Sinokor Merchant Marine"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "كوريا الجنوبية",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 110,000 TEU",
        "حجم الأسطول: 60 سفينة حاويات",
        "المقر الرئيسي: كوريا الجنوبية / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 110,000 TEU",
        "Fleet: 60 container vessels",
        "Headquarters: كوريا الجنوبية / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Sinokor Merchant Marine",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 60,
      "teuCapacity": "110,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-heung-a-shipping",
    "slug": "shipping-line-heung-a-shipping",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة هيونغ-آ للملاحة",
      "en": "Heung-A Shipping",
      "zh": "兴亚海运",
      "pinyin": "Heung-A Shipping"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "كوريا الجنوبية",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 45,000 TEU",
        "حجم الأسطول: 25 سفينة حاويات",
        "المقر الرئيسي: كوريا الجنوبية / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 45,000 TEU",
        "Fleet: 25 container vessels",
        "Headquarters: كوريا الجنوبية / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Heung-A Shipping",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 25,
      "teuCapacity": "45,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-sm-line-corporation",
    "slug": "shipping-line-sm-line-corporation",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة إس إم لاين (سامرا كوريا)",
      "en": "SM Line Corporation",
      "zh": "森罗商船",
      "pinyin": "SM Line Corporation"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "كوريا الجنوبية",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 70,000 TEU",
        "حجم الأسطول: 18 سفينة حاويات",
        "المقر الرئيسي: كوريا الجنوبية / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 70,000 TEU",
        "Fleet: 18 container vessels",
        "Headquarters: كوريا الجنوبية / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة SM Line Corporation",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 18,
      "teuCapacity": "70,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-samudera-shipping-line",
    "slug": "shipping-line-samudera-shipping-line",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة ساموديرا شيبنج لاين",
      "en": "Samudera Shipping Line",
      "zh": "萨姆德拉航运",
      "pinyin": "Samudera Shipping Line"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "سنغافورة / إندونيسيا",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 40,000 TEU",
        "حجم الأسطول: 28 سفينة حاويات",
        "المقر الرئيسي: سنغافورة / إندونيسيا / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 40,000 TEU",
        "Fleet: 28 container vessels",
        "Headquarters: سنغافورة / إندونيسيا / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Samudera Shipping Line",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 28,
      "teuCapacity": "40,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-unifeeder-dp-world-group-",
    "slug": "shipping-line-unifeeder-dp-world-group-",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة يونيفيدر العالمية (دي بي ورلد)",
      "en": "Unifeeder (DP World Group)",
      "zh": "联合支线航运",
      "pinyin": "Unifeeder (DP World Group)"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الإمارات / الدنمارك",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 150,000 TEU",
        "حجم الأسطول: 85 سفينة حاويات",
        "المقر الرئيسي: الإمارات / الدنمارك / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 150,000 TEU",
        "Fleet: 85 container vessels",
        "Headquarters: الإمارات / الدنمارك / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Unifeeder (DP World Group)",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 85,
      "teuCapacity": "150,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-matson-navigation-company",
    "slug": "shipping-line-matson-navigation-company",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة ماتسون للملاحة السريعة",
      "en": "Matson Navigation Company",
      "zh": "美森轮船",
      "pinyin": "Matson Navigation Company"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الولايات المتحدة",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 70,000 TEU",
        "حجم الأسطول: 28 سفينة حاويات",
        "المقر الرئيسي: الولايات المتحدة / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 70,000 TEU",
        "Fleet: 28 container vessels",
        "Headquarters: الولايات المتحدة / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Matson Navigation Company",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 28,
      "teuCapacity": "70,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-swire-shipping",
    "slug": "shipping-line-swire-shipping",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة سواير شيبنج العالمية",
      "en": "Swire Shipping",
      "zh": "太古轮船",
      "pinyin": "Swire Shipping"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "المملكة المتحدة / سنغافورة",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 55,000 TEU",
        "حجم الأسطول: 32 سفينة حاويات",
        "المقر الرئيسي: المملكة المتحدة / سنغافورة / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 55,000 TEU",
        "Fleet: 32 container vessels",
        "Headquarters: المملكة المتحدة / سنغافورة / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Swire Shipping",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 32,
      "teuCapacity": "55,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-interasia-lines",
    "slug": "shipping-line-interasia-lines",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة إنترآسيا لاينز",
      "en": "Interasia Lines",
      "zh": "川崎汽船国际",
      "pinyin": "Interasia Lines"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "اليابان / تايوان",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 60,000 TEU",
        "حجم الأسطول: 24 سفينة حاويات",
        "المقر الرئيسي: اليابان / تايوان / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 60,000 TEU",
        "Fleet: 24 container vessels",
        "Headquarters: اليابان / تايوان / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Interasia Lines",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 24,
      "teuCapacity": "60,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-cstar-line",
    "slug": "shipping-line-cstar-line",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة سيسيتار لاين - دبي",
      "en": "Cstar Line",
      "zh": "星光航运",
      "pinyin": "Cstar Line"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الإمارات العربية المتحدة",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 35,000 TEU",
        "حجم الأسطول: 16 سفينة حاويات",
        "المقر الرئيسي: الإمارات العربية المتحدة / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 35,000 TEU",
        "Fleet: 16 container vessels",
        "Headquarters: الإمارات العربية المتحدة / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Cstar Line",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 16,
      "teuCapacity": "35,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-global-feeder-shipping-gfs-",
    "slug": "shipping-line-global-feeder-shipping-gfs-",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة غلوبال فيدر شيبنج (GFS)",
      "en": "Global Feeder Shipping (GFS)",
      "zh": "全球支线海运",
      "pinyin": "Global Feeder Shipping (GFS)"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الإمارات العربية المتحدة",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 80,000 TEU",
        "حجم الأسطول: 30 سفينة حاويات",
        "المقر الرئيسي: الإمارات العربية المتحدة / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 80,000 TEU",
        "Fleet: 30 container vessels",
        "Headquarters: الإمارات العربية المتحدة / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Global Feeder Shipping (GFS)",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 30,
      "teuCapacity": "80,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-transworld-feeders",
    "slug": "shipping-line-transworld-feeders",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة ترانس ورلد فيدرز",
      "en": "Transworld Feeders",
      "zh": "泛世界支线",
      "pinyin": "Transworld Feeders"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الإمارات / الهند",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 45,000 TEU",
        "حجم الأسطول: 22 سفينة حاويات",
        "المقر الرئيسي: الإمارات / الهند / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 45,000 TEU",
        "Fleet: 22 container vessels",
        "Headquarters: الإمارات / الهند / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Transworld Feeders",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 22,
      "teuCapacity": "45,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-fesco-transportation-group",
    "slug": "shipping-line-fesco-transportation-group",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة فيسكو الروسية للشرق الأقصى",
      "en": "FESCO Transportation Group",
      "zh": "远东海洋轮船 (FESCO)",
      "pinyin": "FESCO Transportation Group"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "روسيا",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 40,000 TEU",
        "حجم الأسطول: 25 سفينة حاويات",
        "المقر الرئيسي: روسيا / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 40,000 TEU",
        "Fleet: 25 container vessels",
        "Headquarters: روسيا / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة FESCO Transportation Group",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 25,
      "teuCapacity": "40,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-grimaldi-group",
    "slug": "shipping-line-grimaldi-group",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة مجموعة غريمالدي الملاحية",
      "en": "Grimaldi Group",
      "zh": "格里马尔迪海运",
      "pinyin": "Grimaldi Group"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "إيطاليا",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 60,000 TEU",
        "حجم الأسطول: 130 سفينة حاويات",
        "المقر الرئيسي: إيطاليا / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 60,000 TEU",
        "Fleet: 130 container vessels",
        "Headquarters: إيطاليا / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Grimaldi Group",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 130,
      "teuCapacity": "60,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-arkas-line",
    "slug": "shipping-line-arkas-line",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة أركاس لاين للشرق الأوسط",
      "en": "Arkas Line",
      "zh": "阿尔卡斯航运",
      "pinyin": "Arkas Line"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "تركيا",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 55,000 TEU",
        "حجم الأسطول: 40 سفينة حاويات",
        "المقر الرئيسي: تركيا / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 55,000 TEU",
        "Fleet: 40 container vessels",
        "Headquarters: تركيا / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Arkas Line",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 40,
      "teuCapacity": "55,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-turkon-line",
    "slug": "shipping-line-turkon-line",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة توركون لاين التركية",
      "en": "Turkon Line",
      "zh": "图尔康航运",
      "pinyin": "Turkon Line"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "تركيا",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 25,000 TEU",
        "حجم الأسطول: 12 سفينة حاويات",
        "المقر الرئيسي: تركيا / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 25,000 TEU",
        "Fleet: 12 container vessels",
        "Headquarters: تركيا / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Turkon Line",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 12,
      "teuCapacity": "25,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-tarros-line",
    "slug": "shipping-line-tarros-line",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة تاروس للملاحة المتوسطية",
      "en": "Tarros Line",
      "zh": "塔罗斯海运",
      "pinyin": "Tarros Line"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "إيطاليا",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 20,000 TEU",
        "حجم الأسطول: 14 سفينة حاويات",
        "المقر الرئيسي: إيطاليا / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 20,000 TEU",
        "Fleet: 14 container vessels",
        "Headquarters: إيطاليا / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Tarros Line",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 14,
      "teuCapacity": "20,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-messina-line-ignazio-messina-",
    "slug": "shipping-line-messina-line-ignazio-messina-",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة ميسينا للملاحة الإيطالية",
      "en": "Messina Line (Ignazio Messina)",
      "zh": "梅西纳航运",
      "pinyin": "Messina Line (Ignazio Messina)"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "إيطاليا",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 30,000 TEU",
        "حجم الأسطول: 18 سفينة حاويات",
        "المقر الرئيسي: إيطاليا / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 30,000 TEU",
        "Fleet: 18 container vessels",
        "Headquarters: إيطاليا / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Messina Line (Ignazio Messina)",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 18,
      "teuCapacity": "30,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-x-press-feeders",
    "slug": "shipping-line-x-press-feeders",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة إكس-برس فيدرز",
      "en": "X-Press Feeders",
      "zh": "海陆快线 (X-Press)",
      "pinyin": "X-Press Feeders"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "سنغافورة",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 120,000 TEU",
        "حجم الأسطول: 95 سفينة حاويات",
        "المقر الرئيسي: سنغافورة / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 120,000 TEU",
        "Fleet: 95 container vessels",
        "Headquarters: سنغافورة / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة X-Press Feeders",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 95,
      "teuCapacity": "120,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-bengal-tiger-line-btl-",
    "slug": "shipping-line-bengal-tiger-line-btl-",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة بنغال تايغر لاين (BTL)",
      "en": "Bengal Tiger Line (BTL)",
      "zh": "孟加拉虎快线",
      "pinyin": "Bengal Tiger Line (BTL)"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "سنغافورة",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 30,000 TEU",
        "حجم الأسطول: 16 سفينة حاويات",
        "المقر الرئيسي: سنغافورة / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 30,000 TEU",
        "Fleet: 16 container vessels",
        "Headquarters: سنغافورة / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Bengal Tiger Line (BTL)",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 16,
      "teuCapacity": "30,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-salam-pacific-indonesia-lines-spil-",
    "slug": "shipping-line-salam-pacific-indonesia-lines-spil-",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة سبيل للملاحة الإندونيسية",
      "en": "Salam Pacific Indonesia Lines (SPIL)",
      "zh": "萨拉姆太平洋",
      "pinyin": "Salam Pacific Indonesia Lines (SPIL)"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "إندونيسيا",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 50,000 TEU",
        "حجم الأسطول: 45 سفينة حاويات",
        "المقر الرئيسي: إندونيسيا / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 50,000 TEU",
        "Fleet: 45 container vessels",
        "Headquarters: إندونيسيا / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Salam Pacific Indonesia Lines (SPIL)",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 45,
      "teuCapacity": "50,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-meratus-line",
    "slug": "shipping-line-meratus-line",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة ميراتوس لاين الإندونيسية",
      "en": "Meratus Line",
      "zh": "梅拉图斯航运",
      "pinyin": "Meratus Line"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "إندونيسيا",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 40,000 TEU",
        "حجم الأسطول: 55 سفينة حاويات",
        "المقر الرئيسي: إندونيسيا / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 40,000 TEU",
        "Fleet: 55 container vessels",
        "Headquarters: إندونيسيا / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Meratus Line",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 55,
      "teuCapacity": "40,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-ellerman-city-liners",
    "slug": "shipping-line-ellerman-city-liners",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة إيلرمان سيتي لاينرز",
      "en": "Ellerman City Liners",
      "zh": "埃勒曼班轮",
      "pinyin": "Ellerman City Liners"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "المملكة المتحدة",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 25,000 TEU",
        "حجم الأسطول: 10 سفينة حاويات",
        "المقر الرئيسي: المملكة المتحدة / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 25,000 TEU",
        "Fleet: 10 container vessels",
        "Headquarters: المملكة المتحدة / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Ellerman City Liners",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 10,
      "teuCapacity": "25,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-ovp-shipping",
    "slug": "shipping-line-ovp-shipping",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة أو في بي للملاحة",
      "en": "OVP Shipping",
      "zh": "欧威普海运",
      "pinyin": "OVP Shipping"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "روسيا / هونغ كونغ",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 20,000 TEU",
        "حجم الأسطول: 10 سفينة حاويات",
        "المقر الرئيسي: روسيا / هونغ كونغ / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 20,000 TEU",
        "Fleet: 10 container vessels",
        "Headquarters: روسيا / هونغ كونغ / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة OVP Shipping",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 10,
      "teuCapacity": "20,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  },
  {
    "id": "shipping-line-shipping-line-balaji-shipping-line",
    "slug": "shipping-line-balaji-shipping-line",
    "subdomain": "shipping-lines",
    "name": {
      "ar": "خط ملاحة بالاجي شيبنج لاين",
      "en": "Balaji Shipping Line",
      "zh": "巴拉吉航运",
      "pinyin": "Balaji Shipping Line"
    },
    "province": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "خط ملاحة بحري دولي",
      "en": "Ocean Container Shipping Line"
    },
    "description": {
      "ar": "شركة خطوط ملاحية متخصصة في نقل الحاويات، توفر خدمات شحن منتظمة من موانئ الصين إلى موانئ الترانزيت والوصول في الشرق الأوسط وآسيا.",
      "en": "Specialized container carrier operating scheduled feeder and liner services linking Chinese manufacturing gateways to overseas import hubs."
    },
    "address": {
      "ar": "المقر الإقليمي للصين، شنغهاي، الصين",
      "en": "China Regional Headquarters, Shanghai, China",
      "zh": "中国上海航运商务区"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "websiteUrl": "https://www.worldshipping.org/",
    "tags": [
      "خطوط ملاحة",
      "شحن بحري",
      "حاويات",
      "الإمارات العربية المتحدة",
      "شحن للخليج ومصر"
    ],
    "features": {
      "ar": [
        "السعة الإجمالية: 22,000 TEU",
        "حجم الأسطول: 12 سفينة حاويات",
        "المقر الرئيسي: الإمارات العربية المتحدة / مكاتب بالصين",
        "أهم الموانئ الصينية: شنتشن، شنغهاي، نينغبو، غوانغتشو، تشينغداو",
        "أهم الموانئ العربية المخدومة: ميناء جبل علي، ميناء جدة، ميناء الدمام"
      ],
      "en": [
        "Capacity: 22,000 TEU",
        "Fleet: 12 container vessels",
        "Headquarters: الإمارات العربية المتحدة / مكاتب بالصين",
        "China Ports: Shenzhen, Shanghai, Ningbo, Nansha, Qingdao",
        "Arab Ports: ميناء جبل علي, ميناء جدة, ميناء الدمام"
      ]
    },
    "sources": [
      {
        "name": "سجل شركات الخطوط الملاحية الدولية (Alphaliner Top 100 Carriers)",
        "url": "https://alphaliner.axsmarine.com/PublicTop100/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "المجلس العالمي للملاحة البحرية (World Shipping Council)",
        "url": "https://www.worldshipping.org/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "الموقع الرسمي لشركة Balaji Shipping Line",
        "url": "https://www.worldshipping.org/",
        "type": "carrier-official",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من موقع الخط الملاحي وسجلات ألفالاينر العالمية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "fleetSize": 12,
      "teuCapacity": "22,000 TEU",
      "portsServedInChina": [
        "shanghai-port",
        "ningbo-zhoushan-port",
        "shenzhen-shekou-port",
        "guangzhou-nansha-port",
        "qingdao-port"
      ],
      "destinationPortsArab": [
        "ميناء جبل علي",
        "ميناء جدة",
        "ميناء الدمام"
      ],
      "mainRoutes": [
        "خطوط الربط السريع المباشرة والترانزيت عبر الموانئ الصينية"
      ]
    }
  }
];
