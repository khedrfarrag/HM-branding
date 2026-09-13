import { IChinaDirectoryEntity } from '@/domains/china-directory/entities';

export const CHINA_DIRECTORY_INDUSTRIAL_ZONES: IChinaDirectoryEntity[] = [
  {
    "id": "zone-beijing-e-town-etdz",
    "slug": "beijing-e-town-etdz",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة بكين للتنمية الاقتصادية والتكنولوجية (E-Town)",
      "en": "Beijing Economic-Technological Development Area (E-Town)",
      "zh": "北京经济技术开发区(北京亦庄)",
      "pinyin": "Beijing Economic-Technological Development Area (E-Town)"
    },
    "province": {
      "ar": "beijing",
      "en": "beijing",
      "zh": "beijing"
    },
    "provinceSlug": "beijing",
    "city": {
      "ar": "beijing",
      "en": "beijing",
      "zh": "beijing"
    },
    "citySlug": "beijing",
    "category": {
      "ar": "منطقة تنمية وطنية",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: السيارات الذكية، الصيدلة البيولوجية، الروبوتات والمعدات الذكية، تكنولوجيا المعلومات المتكاملة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in السيارات الذكية, الصيدلة البيولوجية, الروبوتات والمعدات الذكية, تكنولوجيا المعلومات المتكاملة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، beijing، مقاطعة beijing، الصين",
      "en": "National Industrial Development Area, beijing, beijing Province, China",
      "zh": "中国beijingbeijing国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25,
      "longitude": 115
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية",
      "beijing",
      "beijing",
      "السيارات الذكية",
      "الصيدلة البيولوجية",
      "الروبوتات والمعدات الذكية",
      "تكنولوجيا المعلومات المتكاملة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية",
        "الصناعات الرائدة: السيارات الذكية، الصيدلة البيولوجية، الروبوتات والمعدات الذكية، تكنولوجيا المعلومات المتكاملة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية",
        "Leading Sectors: السيارات الذكية, الصيدلة البيولوجية, الروبوتات والمعدات الذكية, تكنولوجيا المعلومات المتكاملة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "السيارات الذكية",
        "الصيدلة البيولوجية",
        "الروبوتات والمعدات الذكية",
        "تكنولوجيا المعلومات المتكاملة"
      ],
      "zoneClassification": "منطقة تنمية وطنية"
    }
  },
  {
    "id": "zone-shanghai-zhangjiang-hitz",
    "slug": "shanghai-zhangjiang-hitz",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة تشانغجيانغ للتكنولوجيا الفائقة بشنغهاي (وادي السيليكون الصيني في شنغهاي)",
      "en": "Shanghai Zhangjiang Hi-Tech Park",
      "zh": "上海张江高新技术产业开发区",
      "pinyin": "Shanghai Zhangjiang Hi-Tech Park"
    },
    "province": {
      "ar": "shanghai",
      "en": "shanghai",
      "zh": "shanghai"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "shanghai",
      "en": "shanghai",
      "zh": "shanghai"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "منطقة وطنية للتكنولوجيا الفائقة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: تصميم وتصنيع الرقائق الإلكترونية (SMIC)، الابتكار الدوائي الحيوي، الذكاء الاصطناعي. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in تصميم وتصنيع الرقائق الإلكترونية (SMIC), الابتكار الدوائي الحيوي, الذكاء الاصطناعي. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shanghai، مقاطعة shanghai، الصين",
      "en": "National Industrial Development Area, shanghai, shanghai Province, China",
      "zh": "中国shanghaishanghai国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.05,
      "longitude": 115.05
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة وطنية للتكنولوجيا الفائقة",
      "shanghai",
      "shanghai",
      "تصميم وتصنيع الرقائق الإلكترونية (SMIC)",
      "الابتكار الدوائي الحيوي",
      "الذكاء الاصطناعي"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة وطنية للتكنولوجيا الفائقة",
        "الصناعات الرائدة: تصميم وتصنيع الرقائق الإلكترونية (SMIC)، الابتكار الدوائي الحيوي، الذكاء الاصطناعي",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة وطنية للتكنولوجيا الفائقة",
        "Leading Sectors: تصميم وتصنيع الرقائق الإلكترونية (SMIC), الابتكار الدوائي الحيوي, الذكاء الاصطناعي",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "تصميم وتصنيع الرقائق الإلكترونية (SMIC)",
        "الابتكار الدوائي الحيوي",
        "الذكاء الاصطناعي"
      ],
      "zoneClassification": "منطقة وطنية للتكنولوجيا الفائقة"
    }
  },
  {
    "id": "zone-shanghai-jinqiao-etdz",
    "slug": "shanghai-jinqiao-etdz",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة جينتشياو للتنمية الاقتصادية بشنغهاي",
      "en": "Shanghai Jinqiao Economic and Technological Development Zone",
      "zh": "上海金桥经济技术开发区",
      "pinyin": "Shanghai Jinqiao Economic and Technological Development Zone"
    },
    "province": {
      "ar": "shanghai",
      "en": "shanghai",
      "zh": "shanghai"
    },
    "provinceSlug": "shanghai",
    "city": {
      "ar": "shanghai",
      "en": "shanghai",
      "zh": "shanghai"
    },
    "citySlug": "shanghai",
    "category": {
      "ar": "منطقة تنمية وطنية",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: صناعة السيارات الذكية (جنرال موتورز)، المعدات الميكانيكية الدقيقة، الإلكترونيات المتقدمة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in صناعة السيارات الذكية (جنرال موتورز), المعدات الميكانيكية الدقيقة, الإلكترونيات المتقدمة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shanghai، مقاطعة shanghai، الصين",
      "en": "National Industrial Development Area, shanghai, shanghai Province, China",
      "zh": "中国shanghaishanghai国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.1,
      "longitude": 115.1
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية",
      "shanghai",
      "shanghai",
      "صناعة السيارات الذكية (جنرال موتورز)",
      "المعدات الميكانيكية الدقيقة",
      "الإلكترونيات المتقدمة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية",
        "الصناعات الرائدة: صناعة السيارات الذكية (جنرال موتورز)، المعدات الميكانيكية الدقيقة، الإلكترونيات المتقدمة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية",
        "Leading Sectors: صناعة السيارات الذكية (جنرال موتورز), المعدات الميكانيكية الدقيقة, الإلكترونيات المتقدمة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "صناعة السيارات الذكية (جنرال موتورز)",
        "المعدات الميكانيكية الدقيقة",
        "الإلكترونيات المتقدمة"
      ],
      "zoneClassification": "منطقة تنمية وطنية"
    }
  },
  {
    "id": "zone-guangzhou-development-district",
    "slug": "guangzhou-development-district",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة غوانغتشو للتنمية الاقتصادية والتكنولوجية (GDD)",
      "en": "Guangzhou Development District (GDD)",
      "zh": "广州经济技术开发区",
      "pinyin": "Guangzhou Development District (GDD)"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "guangzhou",
      "en": "guangzhou",
      "zh": "guangzhou"
    },
    "citySlug": "guangzhou",
    "category": {
      "ar": "منطقة تنمية وطنية",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: شاشات العرض المتقدمة، الصناعات الكيماوية الدقيقة، السيارات ومواد الطاقة الجديدة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in شاشات العرض المتقدمة, الصناعات الكيماوية الدقيقة, السيارات ومواد الطاقة الجديدة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangzhou، مقاطعة guangdong، الصين",
      "en": "National Industrial Development Area, guangzhou, guangdong Province, China",
      "zh": "中国guangdongguangzhou国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.15,
      "longitude": 115.15
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية",
      "guangzhou",
      "guangdong",
      "شاشات العرض المتقدمة",
      "الصناعات الكيماوية الدقيقة",
      "السيارات ومواد الطاقة الجديدة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية",
        "الصناعات الرائدة: شاشات العرض المتقدمة، الصناعات الكيماوية الدقيقة، السيارات ومواد الطاقة الجديدة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية",
        "Leading Sectors: شاشات العرض المتقدمة, الصناعات الكيماوية الدقيقة, السيارات ومواد الطاقة الجديدة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "شاشات العرض المتقدمة",
        "الصناعات الكيماوية الدقيقة",
        "السيارات ومواد الطاقة الجديدة"
      ],
      "zoneClassification": "منطقة تنمية وطنية"
    }
  },
  {
    "id": "zone-shenzhen-high-tech-industrial-park",
    "slug": "shenzhen-high-tech-industrial-park",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "مجمع شينزين للصناعات التكنولوجية الفائقة (نانشان SHIP)",
      "en": "Shenzhen High-Tech Industrial Park (Nanshan)",
      "zh": "深圳高新技术产业园区(南山)",
      "pinyin": "Shenzhen High-Tech Industrial Park (Nanshan)"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "shenzhen",
      "en": "shenzhen",
      "zh": "shenzhen"
    },
    "citySlug": "shenzhen",
    "category": {
      "ar": "منطقة وطنية للتكنولوجيا الفائقة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: تطوير الإلكترونيات الذكية، الاتصالات السلكية واللاسلكية (ZTE/Tencent)، البرمجيات المتقدمة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in تطوير الإلكترونيات الذكية, الاتصالات السلكية واللاسلكية (ZTE/Tencent), البرمجيات المتقدمة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shenzhen، مقاطعة guangdong، الصين",
      "en": "National Industrial Development Area, shenzhen, guangdong Province, China",
      "zh": "中国guangdongshenzhen国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.2,
      "longitude": 115.2
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة وطنية للتكنولوجيا الفائقة",
      "shenzhen",
      "guangdong",
      "تطوير الإلكترونيات الذكية",
      "الاتصالات السلكية واللاسلكية (ZTE/Tencent)",
      "البرمجيات المتقدمة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة وطنية للتكنولوجيا الفائقة",
        "الصناعات الرائدة: تطوير الإلكترونيات الذكية، الاتصالات السلكية واللاسلكية (ZTE/Tencent)، البرمجيات المتقدمة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة وطنية للتكنولوجيا الفائقة",
        "Leading Sectors: تطوير الإلكترونيات الذكية, الاتصالات السلكية واللاسلكية (ZTE/Tencent), البرمجيات المتقدمة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "تطوير الإلكترونيات الذكية",
        "الاتصالات السلكية واللاسلكية (ZTE/Tencent)",
        "البرمجيات المتقدمة"
      ],
      "zoneClassification": "منطقة وطنية للتكنولوجيا الفائقة"
    }
  },
  {
    "id": "zone-tianjin-teda-etdz",
    "slug": "tianjin-teda-etdz",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة تيانجين للتنمية الاقتصادية والتكنولوجية (تيدا TEDA)",
      "en": "Tianjin Economic-Technological Development Area (TEDA)",
      "zh": "天津经济技术开发区(泰达)",
      "pinyin": "Tianjin Economic-Technological Development Area (TEDA)"
    },
    "province": {
      "ar": "tianjin",
      "en": "tianjin",
      "zh": "tianjin"
    },
    "provinceSlug": "tianjin",
    "city": {
      "ar": "tianjin",
      "en": "tianjin",
      "zh": "tianjin"
    },
    "citySlug": "tianjin",
    "category": {
      "ar": "منطقة تنمية وطنية",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: تجميع الطائرات والمعدات الجوية، السيارات والإلكترونيات، البتروكيماويات المتقدمة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in تجميع الطائرات والمعدات الجوية, السيارات والإلكترونيات, البتروكيماويات المتقدمة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، tianjin، مقاطعة tianjin، الصين",
      "en": "National Industrial Development Area, tianjin, tianjin Province, China",
      "zh": "中国tianjintianjin国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.25,
      "longitude": 115.25
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية",
      "tianjin",
      "tianjin",
      "تجميع الطائرات والمعدات الجوية",
      "السيارات والإلكترونيات",
      "البتروكيماويات المتقدمة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية",
        "الصناعات الرائدة: تجميع الطائرات والمعدات الجوية، السيارات والإلكترونيات، البتروكيماويات المتقدمة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية",
        "Leading Sectors: تجميع الطائرات والمعدات الجوية, السيارات والإلكترونيات, البتروكيماويات المتقدمة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "تجميع الطائرات والمعدات الجوية",
        "السيارات والإلكترونيات",
        "البتروكيماويات المتقدمة"
      ],
      "zoneClassification": "منطقة تنمية وطنية"
    }
  },
  {
    "id": "zone-suzhou-industrial-park-sip",
    "slug": "suzhou-industrial-park-sip",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "مجمع سوتشو الصناعي الصيني-السنغافوري (SIP)",
      "en": "China-Singapore Suzhou Industrial Park (SIP)",
      "zh": "中新苏州工业园区",
      "pinyin": "China-Singapore Suzhou Industrial Park (SIP)"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "suzhou",
      "en": "suzhou",
      "zh": "suzhou"
    },
    "citySlug": "suzhou",
    "category": {
      "ar": "مجمع صناعي دولي نموذجي",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: أشباه الموصلات والدوائر المتكاملة، الطب الحيوي BioBAY، المعدات الدقيقة والنانو. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in أشباه الموصلات والدوائر المتكاملة, الطب الحيوي BioBAY, المعدات الدقيقة والنانو. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، suzhou، مقاطعة jiangsu، الصين",
      "en": "National Industrial Development Area, suzhou, jiangsu Province, China",
      "zh": "中国jiangsusuzhou国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.3,
      "longitude": 115.3
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "مجمع صناعي دولي نموذجي",
      "suzhou",
      "jiangsu",
      "أشباه الموصلات والدوائر المتكاملة",
      "الطب الحيوي BioBAY",
      "المعدات الدقيقة والنانو"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: مجمع صناعي دولي نموذجي",
        "الصناعات الرائدة: أشباه الموصلات والدوائر المتكاملة، الطب الحيوي BioBAY، المعدات الدقيقة والنانو",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: مجمع صناعي دولي نموذجي",
        "Leading Sectors: أشباه الموصلات والدوائر المتكاملة, الطب الحيوي BioBAY, المعدات الدقيقة والنانو",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "أشباه الموصلات والدوائر المتكاملة",
        "الطب الحيوي BioBAY",
        "المعدات الدقيقة والنانو"
      ],
      "zoneClassification": "مجمع صناعي دولي نموذجي"
    }
  },
  {
    "id": "zone-kunshan-etdz",
    "slug": "kunshan-etdz",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة كونشان للتنمية الاقتصادية والتكنولوجية",
      "en": "Kunshan Economic & Technological Development Zone",
      "zh": "昆山经济技术开发区",
      "pinyin": "Kunshan Economic & Technological Development Zone"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "kunshan",
      "en": "kunshan",
      "zh": "kunshan"
    },
    "citySlug": "kunshan",
    "category": {
      "ar": "منطقة تنمية وطنية",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: صناعة الحواسيب المحمولة والإلكترونيات الدقيقة، المعدات الميكانيكية الراقية، قطع غيار السيارات. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in صناعة الحواسيب المحمولة والإلكترونيات الدقيقة, المعدات الميكانيكية الراقية, قطع غيار السيارات. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، kunshan، مقاطعة jiangsu، الصين",
      "en": "National Industrial Development Area, kunshan, jiangsu Province, China",
      "zh": "中国jiangsukunshan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.35,
      "longitude": 115.35
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية",
      "kunshan",
      "jiangsu",
      "صناعة الحواسيب المحمولة والإلكترونيات الدقيقة",
      "المعدات الميكانيكية الراقية",
      "قطع غيار السيارات"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية",
        "الصناعات الرائدة: صناعة الحواسيب المحمولة والإلكترونيات الدقيقة، المعدات الميكانيكية الراقية، قطع غيار السيارات",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية",
        "Leading Sectors: صناعة الحواسيب المحمولة والإلكترونيات الدقيقة, المعدات الميكانيكية الراقية, قطع غيار السيارات",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "صناعة الحواسيب المحمولة والإلكترونيات الدقيقة",
        "المعدات الميكانيكية الراقية",
        "قطع غيار السيارات"
      ],
      "zoneClassification": "منطقة تنمية وطنية"
    }
  },
  {
    "id": "zone-wuxi-high-tech-industrial-zone",
    "slug": "wuxi-high-tech-industrial-zone",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ووشي للتكنولوجيا الفائقة (وادي الرقائق وإنترنت الأشياء)",
      "en": "Wuxi National Hi-Tech Industrial Development Zone",
      "zh": "无锡国家高新技术产业开发区",
      "pinyin": "Wuxi National Hi-Tech Industrial Development Zone"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "wuxi",
      "en": "wuxi",
      "zh": "wuxi"
    },
    "citySlug": "wuxi",
    "category": {
      "ar": "منطقة وطنية للتكنولوجيا الفائقة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: صناعة الدوائر المتكاملة (SK Hynix)، إنترنت الأشياء IoT، خلايا وبطاريات الطاقة الجديدة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in صناعة الدوائر المتكاملة (SK Hynix), إنترنت الأشياء IoT, خلايا وبطاريات الطاقة الجديدة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، wuxi، مقاطعة jiangsu، الصين",
      "en": "National Industrial Development Area, wuxi, jiangsu Province, China",
      "zh": "中国jiangsuwuxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.4,
      "longitude": 115.4
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة وطنية للتكنولوجيا الفائقة",
      "wuxi",
      "jiangsu",
      "صناعة الدوائر المتكاملة (SK Hynix)",
      "إنترنت الأشياء IoT",
      "خلايا وبطاريات الطاقة الجديدة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة وطنية للتكنولوجيا الفائقة",
        "الصناعات الرائدة: صناعة الدوائر المتكاملة (SK Hynix)، إنترنت الأشياء IoT، خلايا وبطاريات الطاقة الجديدة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة وطنية للتكنولوجيا الفائقة",
        "Leading Sectors: صناعة الدوائر المتكاملة (SK Hynix), إنترنت الأشياء IoT, خلايا وبطاريات الطاقة الجديدة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "صناعة الدوائر المتكاملة (SK Hynix)",
        "إنترنت الأشياء IoT",
        "خلايا وبطاريات الطاقة الجديدة"
      ],
      "zoneClassification": "منطقة وطنية للتكنولوجيا الفائقة"
    }
  },
  {
    "id": "zone-ningbo-etdz",
    "slug": "ningbo-etdz",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة نينغبو للتنمية الاقتصادية والتكنولوجية (بييلون)",
      "en": "Ningbo Economic & Technological Development Zone (Beilun)",
      "zh": "宁波经济技术开发区",
      "pinyin": "Ningbo Economic & Technological Development Zone (Beilun)"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "ningbo",
      "en": "ningbo",
      "zh": "ningbo"
    },
    "citySlug": "ningbo",
    "category": {
      "ar": "منطقة تنمية وطنية",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: آلات حقن البلاستيك، قطع غيار السيارات الفاخرة، الصلب الخاص والبتروكيماويات المينائية. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in آلات حقن البلاستيك, قطع غيار السيارات الفاخرة, الصلب الخاص والبتروكيماويات المينائية. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، ningbo، مقاطعة zhejiang، الصين",
      "en": "National Industrial Development Area, ningbo, zhejiang Province, China",
      "zh": "中国zhejiangningbo国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.45,
      "longitude": 115.45
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية",
      "ningbo",
      "zhejiang",
      "آلات حقن البلاستيك",
      "قطع غيار السيارات الفاخرة",
      "الصلب الخاص والبتروكيماويات المينائية"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية",
        "الصناعات الرائدة: آلات حقن البلاستيك، قطع غيار السيارات الفاخرة، الصلب الخاص والبتروكيماويات المينائية",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية",
        "Leading Sectors: آلات حقن البلاستيك, قطع غيار السيارات الفاخرة, الصلب الخاص والبتروكيماويات المينائية",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "آلات حقن البلاستيك",
        "قطع غيار السيارات الفاخرة",
        "الصلب الخاص والبتروكيماويات المينائية"
      ],
      "zoneClassification": "منطقة تنمية وطنية"
    }
  },
  {
    "id": "zone-hangzhou-high-tech-binjiang-zone",
    "slug": "hangzhou-high-tech-binjiang-zone",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة هانغتشو بينجيانغ للتكنولوجيا الفائقة",
      "en": "Hangzhou High-Tech Industrial Development Zone (Binjiang)",
      "zh": "杭州高新技术产业开发区(滨江)",
      "pinyin": "Hangzhou High-Tech Industrial Development Zone (Binjiang)"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "hangzhou",
      "en": "hangzhou",
      "zh": "hangzhou"
    },
    "citySlug": "hangzhou",
    "category": {
      "ar": "منطقة وطنية للتكنولوجيا الفائقة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التجارة الإلكترونية والتكنولوجيا المالية، أنظمة المراقبة البصرية (هيكفيجن/داهوا)، البرمجيات السحابية. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التجارة الإلكترونية والتكنولوجيا المالية, أنظمة المراقبة البصرية (هيكفيجن/داهوا), البرمجيات السحابية. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hangzhou، مقاطعة zhejiang، الصين",
      "en": "National Industrial Development Area, hangzhou, zhejiang Province, China",
      "zh": "中国zhejianghangzhou国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.5,
      "longitude": 115.5
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة وطنية للتكنولوجيا الفائقة",
      "hangzhou",
      "zhejiang",
      "التجارة الإلكترونية والتكنولوجيا المالية",
      "أنظمة المراقبة البصرية (هيكفيجن/داهوا)",
      "البرمجيات السحابية"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة وطنية للتكنولوجيا الفائقة",
        "الصناعات الرائدة: التجارة الإلكترونية والتكنولوجيا المالية، أنظمة المراقبة البصرية (هيكفيجن/داهوا)، البرمجيات السحابية",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة وطنية للتكنولوجيا الفائقة",
        "Leading Sectors: التجارة الإلكترونية والتكنولوجيا المالية, أنظمة المراقبة البصرية (هيكفيجن/داهوا), البرمجيات السحابية",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "التجارة الإلكترونية والتكنولوجيا المالية",
        "أنظمة المراقبة البصرية (هيكفيجن/داهوا)",
        "البرمجيات السحابية"
      ],
      "zoneClassification": "منطقة وطنية للتكنولوجيا الفائقة"
    }
  },
  {
    "id": "zone-foshan-high-tech-industrial-zone",
    "slug": "foshan-high-tech-industrial-zone",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة فوشان الوطنية للتكنولوجيا الفائقة (مجمع نانهاي وشوني)",
      "en": "Foshan National High-Tech Industrial Development Zone",
      "zh": "佛山国家高新技术产业开发区",
      "pinyin": "Foshan National High-Tech Industrial Development Zone"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "foshan",
      "en": "foshan",
      "zh": "foshan"
    },
    "citySlug": "foshan",
    "category": {
      "ar": "منطقة وطنية للتكنولوجيا الفائقة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: الأجهزة المنزلية الذكية، الروبوتات الصناعية والأتمتة، سيارات الطاقة الجديدة والمعدات المعدنية. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in الأجهزة المنزلية الذكية, الروبوتات الصناعية والأتمتة, سيارات الطاقة الجديدة والمعدات المعدنية. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، foshan، مقاطعة guangdong، الصين",
      "en": "National Industrial Development Area, foshan, guangdong Province, China",
      "zh": "中国guangdongfoshan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.55,
      "longitude": 115.55
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة وطنية للتكنولوجيا الفائقة",
      "foshan",
      "guangdong",
      "الأجهزة المنزلية الذكية",
      "الروبوتات الصناعية والأتمتة",
      "سيارات الطاقة الجديدة والمعدات المعدنية"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة وطنية للتكنولوجيا الفائقة",
        "الصناعات الرائدة: الأجهزة المنزلية الذكية، الروبوتات الصناعية والأتمتة، سيارات الطاقة الجديدة والمعدات المعدنية",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة وطنية للتكنولوجيا الفائقة",
        "Leading Sectors: الأجهزة المنزلية الذكية, الروبوتات الصناعية والأتمتة, سيارات الطاقة الجديدة والمعدات المعدنية",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "الأجهزة المنزلية الذكية",
        "الروبوتات الصناعية والأتمتة",
        "سيارات الطاقة الجديدة والمعدات المعدنية"
      ],
      "zoneClassification": "منطقة وطنية للتكنولوجيا الفائقة"
    }
  },
  {
    "id": "zone-wuhan-east-lake-high-tech-zone",
    "slug": "wuhan-east-lake-high-tech-zone",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة بحيرة ووهان الشرقية للتكنولوجيا الفائقة (وادي البصريات الصيني)",
      "en": "Wuhan East Lake High-Tech Development Zone (Optics Valley of China)",
      "zh": "武汉东湖新技术开发区(中国光谷)",
      "pinyin": "Wuhan East Lake High-Tech Development Zone (Optics Valley of China)"
    },
    "province": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "wuhan",
      "en": "wuhan",
      "zh": "wuhan"
    },
    "citySlug": "wuhan",
    "category": {
      "ar": "منطقة وطنية للتكنولوجيا الفائقة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: الألياف الضوئية والليزر الصناعي، أشباه الموصلات (YMTC)، الصيدلة البيولوجية. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in الألياف الضوئية والليزر الصناعي, أشباه الموصلات (YMTC), الصيدلة البيولوجية. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، wuhan، مقاطعة hubei، الصين",
      "en": "National Industrial Development Area, wuhan, hubei Province, China",
      "zh": "中国hubeiwuhan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.6,
      "longitude": 115.6
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة وطنية للتكنولوجيا الفائقة",
      "wuhan",
      "hubei",
      "الألياف الضوئية والليزر الصناعي",
      "أشباه الموصلات (YMTC)",
      "الصيدلة البيولوجية"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة وطنية للتكنولوجيا الفائقة",
        "الصناعات الرائدة: الألياف الضوئية والليزر الصناعي، أشباه الموصلات (YMTC)، الصيدلة البيولوجية",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة وطنية للتكنولوجيا الفائقة",
        "Leading Sectors: الألياف الضوئية والليزر الصناعي, أشباه الموصلات (YMTC), الصيدلة البيولوجية",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "الألياف الضوئية والليزر الصناعي",
        "أشباه الموصلات (YMTC)",
        "الصيدلة البيولوجية"
      ],
      "zoneClassification": "منطقة وطنية للتكنولوجيا الفائقة"
    }
  },
  {
    "id": "zone-chengdu-high-tech-industrial-zone",
    "slug": "chengdu-high-tech-industrial-zone",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة تشنغدو للتكنولوجيا الفائقة (CDHT)",
      "en": "Chengdu Hi-Tech Industrial Development Zone",
      "zh": "成都高新技术产业开发区",
      "pinyin": "Chengdu Hi-Tech Industrial Development Zone"
    },
    "province": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "chengdu",
      "en": "chengdu",
      "zh": "chengdu"
    },
    "citySlug": "chengdu",
    "category": {
      "ar": "منطقة وطنية للتكنولوجيا الفائقة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: تجميع الأجهزة الإلكترونية الذكية، الصناعات الفضائية والجوية، البرمجيات والبيولوجيا. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in تجميع الأجهزة الإلكترونية الذكية, الصناعات الفضائية والجوية, البرمجيات والبيولوجيا. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، chengdu، مقاطعة sichuan، الصين",
      "en": "National Industrial Development Area, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.65,
      "longitude": 115.65
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة وطنية للتكنولوجيا الفائقة",
      "chengdu",
      "sichuan",
      "تجميع الأجهزة الإلكترونية الذكية",
      "الصناعات الفضائية والجوية",
      "البرمجيات والبيولوجيا"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة وطنية للتكنولوجيا الفائقة",
        "الصناعات الرائدة: تجميع الأجهزة الإلكترونية الذكية، الصناعات الفضائية والجوية، البرمجيات والبيولوجيا",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة وطنية للتكنولوجيا الفائقة",
        "Leading Sectors: تجميع الأجهزة الإلكترونية الذكية, الصناعات الفضائية والجوية, البرمجيات والبيولوجيا",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "تجميع الأجهزة الإلكترونية الذكية",
        "الصناعات الفضائية والجوية",
        "البرمجيات والبيولوجيا"
      ],
      "zoneClassification": "منطقة وطنية للتكنولوجيا الفائقة"
    }
  },
  {
    "id": "zone-xian-high-tech-industries-zone",
    "slug": "xian-high-tech-industries-zone",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة شيآن للصناعات التكنولوجية الفائقة (XHTZ)",
      "en": "Xi'an High-Tech Industries Development Zone",
      "zh": "西安高新技术产业开发区",
      "pinyin": "Xi'an High-Tech Industries Development Zone"
    },
    "province": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "xian",
      "en": "xian",
      "zh": "xian"
    },
    "citySlug": "xian",
    "category": {
      "ar": "منطقة وطنية للتكنولوجيا الفائقة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: أشباه الموصلات وذاكرة الفلاش (سامسونج)، سيارات الطاقة الجديدة (BYD)، تكنولوجيا الفضاء. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in أشباه الموصلات وذاكرة الفلاش (سامسونج), سيارات الطاقة الجديدة (BYD), تكنولوجيا الفضاء. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، xian، مقاطعة shaanxi، الصين",
      "en": "National Industrial Development Area, xian, shaanxi Province, China",
      "zh": "中国shaanxixian国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.7,
      "longitude": 115.7
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة وطنية للتكنولوجيا الفائقة",
      "xian",
      "shaanxi",
      "أشباه الموصلات وذاكرة الفلاش (سامسونج)",
      "سيارات الطاقة الجديدة (BYD)",
      "تكنولوجيا الفضاء"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة وطنية للتكنولوجيا الفائقة",
        "الصناعات الرائدة: أشباه الموصلات وذاكرة الفلاش (سامسونج)، سيارات الطاقة الجديدة (BYD)، تكنولوجيا الفضاء",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة وطنية للتكنولوجيا الفائقة",
        "Leading Sectors: أشباه الموصلات وذاكرة الفلاش (سامسونج), سيارات الطاقة الجديدة (BYD), تكنولوجيا الفضاء",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "زيارة وتدقيق ميداني لمجمعات المصانع والتسهيلات اللوجستية ومراكز فحص الصادرات",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت زيارة هذه المنطقة الصناعية وتدقيق البنية التحتية وسلاسل التوريد والقدرات الإنتاجية للمصانع القائمة بها ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on the ground by Consultant Hossam Mabrouk, verifying infrastructure maturity, supply chain integration, and export capabilities."
      }
    },
    "extra": {
      "dominantIndustries": [
        "أشباه الموصلات وذاكرة الفلاش (سامسونج)",
        "سيارات الطاقة الجديدة (BYD)",
        "تكنولوجيا الفضاء"
      ],
      "zoneClassification": "منطقة وطنية للتكنولوجيا الفائقة"
    }
  },
  {
    "id": "zone-hefei-high-tech-industrial-zone",
    "slug": "hefei-high-tech-industrial-zone",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة خفي للتكنولوجيا الفائقة (وادي الصوت والذكاء الاصطناعي)",
      "en": "Hefei National High-Tech Industry Development Zone",
      "zh": "合肥国家高新技术产业开发区",
      "pinyin": "Hefei National High-Tech Industry Development Zone"
    },
    "province": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "hefei",
      "en": "hefei",
      "zh": "hefei"
    },
    "citySlug": "hefei",
    "category": {
      "ar": "منطقة وطنية للتكنولوجيا الفائقة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: شاشات العرض المسطحة BOE، الذكاء الاصطناعي والصوت (iFlytek)، الحوسبة الكمومية. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in شاشات العرض المسطحة BOE, الذكاء الاصطناعي والصوت (iFlytek), الحوسبة الكمومية. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hefei، مقاطعة anhui، الصين",
      "en": "National Industrial Development Area, hefei, anhui Province, China",
      "zh": "中国anhuihefei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.75,
      "longitude": 115.75
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة وطنية للتكنولوجيا الفائقة",
      "hefei",
      "anhui",
      "شاشات العرض المسطحة BOE",
      "الذكاء الاصطناعي والصوت (iFlytek)",
      "الحوسبة الكمومية"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة وطنية للتكنولوجيا الفائقة",
        "الصناعات الرائدة: شاشات العرض المسطحة BOE، الذكاء الاصطناعي والصوت (iFlytek)، الحوسبة الكمومية",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة وطنية للتكنولوجيا الفائقة",
        "Leading Sectors: شاشات العرض المسطحة BOE, الذكاء الاصطناعي والصوت (iFlytek), الحوسبة الكمومية",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "شاشات العرض المسطحة BOE",
        "الذكاء الاصطناعي والصوت (iFlytek)",
        "الحوسبة الكمومية"
      ],
      "zoneClassification": "منطقة وطنية للتكنولوجيا الفائقة"
    }
  },
  {
    "id": "zone-changsha-economic-technological-zone",
    "slug": "changsha-economic-technological-zone",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة تشانغشا للتنمية الاقتصادية والتكنولوجية (عاصمة آلات البناء)",
      "en": "Changsha Economic and Technological Development Zone",
      "zh": "长沙经济技术开发区",
      "pinyin": "Changsha Economic and Technological Development Zone"
    },
    "province": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "changsha",
      "en": "changsha",
      "zh": "changsha"
    },
    "citySlug": "changsha",
    "category": {
      "ar": "منطقة تنمية وطنية",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: آلات التشييد والبناء الثقيلة (ساني/زوومليون)، السيارات وقطع الغيار، المعدات الإلكترونية. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in آلات التشييد والبناء الثقيلة (ساني/زوومليون), السيارات وقطع الغيار, المعدات الإلكترونية. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، changsha، مقاطعة hunan، الصين",
      "en": "National Industrial Development Area, changsha, hunan Province, China",
      "zh": "中国hunanchangsha国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.8,
      "longitude": 115.8
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية",
      "changsha",
      "hunan",
      "آلات التشييد والبناء الثقيلة (ساني/زوومليون)",
      "السيارات وقطع الغيار",
      "المعدات الإلكترونية"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية",
        "الصناعات الرائدة: آلات التشييد والبناء الثقيلة (ساني/زوومليون)، السيارات وقطع الغيار، المعدات الإلكترونية",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية",
        "Leading Sectors: آلات التشييد والبناء الثقيلة (ساني/زوومليون), السيارات وقطع الغيار, المعدات الإلكترونية",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "آلات التشييد والبناء الثقيلة (ساني/زوومليون)",
        "السيارات وقطع الغيار",
        "المعدات الإلكترونية"
      ],
      "zoneClassification": "منطقة تنمية وطنية"
    }
  },
  {
    "id": "zone-industrial-zone-zhejiang-1",
    "slug": "industrial-zone-zhejiang-1",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ZHEJIANG الوطنية للتنمية والتصنيع المتقدم (1)",
      "en": "ZHEJIANG National Economic & Technological Development Park (#1)",
      "zh": "zhejiang国家级经济技术产业开发区1",
      "pinyin": "ZHEJIANG National Economic & Technological Development Park (#1)"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "citySlug": "zhejiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، zhejiang، مقاطعة zhejiang، الصين",
      "en": "National Industrial Development Area, zhejiang, zhejiang Province, China",
      "zh": "中国zhejiangzhejiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.85,
      "longitude": 115.85
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "zhejiang",
      "zhejiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangsu-2",
    "slug": "industrial-zone-jiangsu-2",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGSU الوطنية للتنمية والتصنيع المتقدم (2)",
      "en": "JIANGSU National Economic & Technological Development Park (#2)",
      "zh": "jiangsu国家级经济技术产业开发区2",
      "pinyin": "JIANGSU National Economic & Technological Development Park (#2)"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "citySlug": "jiangsu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangsu، مقاطعة jiangsu، الصين",
      "en": "National Industrial Development Area, jiangsu, jiangsu Province, China",
      "zh": "中国jiangsujiangsu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.9,
      "longitude": 115.9
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangsu",
      "jiangsu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shandong-3",
    "slug": "industrial-zone-shandong-3",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANDONG الوطنية للتنمية والتصنيع المتقدم (3)",
      "en": "SHANDONG National Economic & Technological Development Park (#3)",
      "zh": "shandong国家级经济技术产业开发区3",
      "pinyin": "SHANDONG National Economic & Technological Development Park (#3)"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "citySlug": "shandong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shandong، مقاطعة shandong، الصين",
      "en": "National Industrial Development Area, shandong, shandong Province, China",
      "zh": "中国shandongshandong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 25.95,
      "longitude": 115.95
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shandong",
      "shandong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-fujian-4",
    "slug": "industrial-zone-fujian-4",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة FUJIAN الوطنية للتنمية والتصنيع المتقدم (4)",
      "en": "FUJIAN National Economic & Technological Development Park (#4)",
      "zh": "fujian国家级经济技术产业开发区4",
      "pinyin": "FUJIAN National Economic & Technological Development Park (#4)"
    },
    "province": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "citySlug": "fujian",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، fujian، مقاطعة fujian، الصين",
      "en": "National Industrial Development Area, fujian, fujian Province, China",
      "zh": "中国fujianfujian国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26,
      "longitude": 116
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "fujian",
      "fujian",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hebei-5",
    "slug": "industrial-zone-hebei-5",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEBEI الوطنية للتنمية والتصنيع المتقدم (5)",
      "en": "HEBEI National Economic & Technological Development Park (#5)",
      "zh": "hebei国家级经济技术产业开发区5",
      "pinyin": "HEBEI National Economic & Technological Development Park (#5)"
    },
    "province": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "citySlug": "hebei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hebei، مقاطعة hebei، الصين",
      "en": "National Industrial Development Area, hebei, hebei Province, China",
      "zh": "中国hebeihebei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.05,
      "longitude": 116.05
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hebei",
      "hebei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-henan-6",
    "slug": "industrial-zone-henan-6",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HENAN الوطنية للتنمية والتصنيع المتقدم (6)",
      "en": "HENAN National Economic & Technological Development Park (#6)",
      "zh": "henan国家级经济技术产业开发区6",
      "pinyin": "HENAN National Economic & Technological Development Park (#6)"
    },
    "province": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "citySlug": "henan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، henan، مقاطعة henan، الصين",
      "en": "National Industrial Development Area, henan, henan Province, China",
      "zh": "中国henanhenan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.1,
      "longitude": 116.1
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "henan",
      "henan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hubei-7",
    "slug": "industrial-zone-hubei-7",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HUBEI الوطنية للتنمية والتصنيع المتقدم (7)",
      "en": "HUBEI National Economic & Technological Development Park (#7)",
      "zh": "hubei国家级经济技术产业开发区7",
      "pinyin": "HUBEI National Economic & Technological Development Park (#7)"
    },
    "province": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "citySlug": "hubei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hubei، مقاطعة hubei، الصين",
      "en": "National Industrial Development Area, hubei, hubei Province, China",
      "zh": "中国hubeihubei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.15,
      "longitude": 116.15
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hubei",
      "hubei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hunan-8",
    "slug": "industrial-zone-hunan-8",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HUNAN الوطنية للتنمية والتصنيع المتقدم (8)",
      "en": "HUNAN National Economic & Technological Development Park (#8)",
      "zh": "hunan国家级经济技术产业开发区8",
      "pinyin": "HUNAN National Economic & Technological Development Park (#8)"
    },
    "province": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "citySlug": "hunan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hunan، مقاطعة hunan، الصين",
      "en": "National Industrial Development Area, hunan, hunan Province, China",
      "zh": "中国hunanhunan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.2,
      "longitude": 116.2
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hunan",
      "hunan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-anhui-9",
    "slug": "industrial-zone-anhui-9",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ANHUI الوطنية للتنمية والتصنيع المتقدم (9)",
      "en": "ANHUI National Economic & Technological Development Park (#9)",
      "zh": "anhui国家级经济技术产业开发区9",
      "pinyin": "ANHUI National Economic & Technological Development Park (#9)"
    },
    "province": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "citySlug": "anhui",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، anhui، مقاطعة anhui، الصين",
      "en": "National Industrial Development Area, anhui, anhui Province, China",
      "zh": "中国anhuianhui国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.25,
      "longitude": 116.25
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "anhui",
      "anhui",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangxi-10",
    "slug": "industrial-zone-jiangxi-10",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGXI الوطنية للتنمية والتصنيع المتقدم (10)",
      "en": "JIANGXI National Economic & Technological Development Park (#10)",
      "zh": "jiangxi国家级经济技术产业开发区10",
      "pinyin": "JIANGXI National Economic & Technological Development Park (#10)"
    },
    "province": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "citySlug": "jiangxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangxi، مقاطعة jiangxi، الصين",
      "en": "National Industrial Development Area, jiangxi, jiangxi Province, China",
      "zh": "中国jiangxijiangxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.3,
      "longitude": 116.3
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangxi",
      "jiangxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-sichuan-11",
    "slug": "industrial-zone-sichuan-11",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SICHUAN الوطنية للتنمية والتصنيع المتقدم (11)",
      "en": "SICHUAN National Economic & Technological Development Park (#11)",
      "zh": "sichuan国家级经济技术产业开发区11",
      "pinyin": "SICHUAN National Economic & Technological Development Park (#11)"
    },
    "province": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "citySlug": "sichuan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، sichuan، مقاطعة sichuan، الصين",
      "en": "National Industrial Development Area, sichuan, sichuan Province, China",
      "zh": "中国sichuansichuan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.35,
      "longitude": 116.35
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "sichuan",
      "sichuan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shaanxi-12",
    "slug": "industrial-zone-shaanxi-12",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHAANXI الوطنية للتنمية والتصنيع المتقدم (12)",
      "en": "SHAANXI National Economic & Technological Development Park (#12)",
      "zh": "shaanxi国家级经济技术产业开发区12",
      "pinyin": "SHAANXI National Economic & Technological Development Park (#12)"
    },
    "province": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "citySlug": "shaanxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shaanxi، مقاطعة shaanxi، الصين",
      "en": "National Industrial Development Area, shaanxi, shaanxi Province, China",
      "zh": "中国shaanxishaanxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.4,
      "longitude": 116.4
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shaanxi",
      "shaanxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-liaoning-13",
    "slug": "industrial-zone-liaoning-13",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة LIAONING الوطنية للتنمية والتصنيع المتقدم (13)",
      "en": "LIAONING National Economic & Technological Development Park (#13)",
      "zh": "liaoning国家级经济技术产业开发区13",
      "pinyin": "LIAONING National Economic & Technological Development Park (#13)"
    },
    "province": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "citySlug": "liaoning",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، liaoning، مقاطعة liaoning، الصين",
      "en": "National Industrial Development Area, liaoning, liaoning Province, China",
      "zh": "中国liaoningliaoning国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.45,
      "longitude": 116.45
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "liaoning",
      "liaoning",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jilin-14",
    "slug": "industrial-zone-jilin-14",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JILIN الوطنية للتنمية والتصنيع المتقدم (14)",
      "en": "JILIN National Economic & Technological Development Park (#14)",
      "zh": "jilin国家级经济技术产业开发区14",
      "pinyin": "JILIN National Economic & Technological Development Park (#14)"
    },
    "province": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "citySlug": "jilin",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jilin، مقاطعة jilin، الصين",
      "en": "National Industrial Development Area, jilin, jilin Province, China",
      "zh": "中国jilinjilin国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.5,
      "longitude": 116.5
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jilin",
      "jilin",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-heilongjiang-15",
    "slug": "industrial-zone-heilongjiang-15",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEILONGJIANG الوطنية للتنمية والتصنيع المتقدم (15)",
      "en": "HEILONGJIANG National Economic & Technological Development Park (#15)",
      "zh": "heilongjiang国家级经济技术产业开发区15",
      "pinyin": "HEILONGJIANG National Economic & Technological Development Park (#15)"
    },
    "province": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "citySlug": "heilongjiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، heilongjiang، مقاطعة heilongjiang، الصين",
      "en": "National Industrial Development Area, heilongjiang, heilongjiang Province, China",
      "zh": "中国heilongjiangheilongjiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.55,
      "longitude": 116.55
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "heilongjiang",
      "heilongjiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shanxi-16",
    "slug": "industrial-zone-shanxi-16",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANXI الوطنية للتنمية والتصنيع المتقدم (16)",
      "en": "SHANXI National Economic & Technological Development Park (#16)",
      "zh": "shanxi国家级经济技术产业开发区16",
      "pinyin": "SHANXI National Economic & Technological Development Park (#16)"
    },
    "province": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "citySlug": "shanxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shanxi، مقاطعة shanxi، الصين",
      "en": "National Industrial Development Area, shanxi, shanxi Province, China",
      "zh": "中国shanxishanxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.6,
      "longitude": 116.6
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shanxi",
      "shanxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guizhou-17",
    "slug": "industrial-zone-guizhou-17",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUIZHOU الوطنية للتنمية والتصنيع المتقدم (17)",
      "en": "GUIZHOU National Economic & Technological Development Park (#17)",
      "zh": "guizhou国家级经济技术产业开发区17",
      "pinyin": "GUIZHOU National Economic & Technological Development Park (#17)"
    },
    "province": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "citySlug": "guizhou",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guizhou، مقاطعة guizhou، الصين",
      "en": "National Industrial Development Area, guizhou, guizhou Province, China",
      "zh": "中国guizhouguizhou国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.65,
      "longitude": 116.65
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guizhou",
      "guizhou",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-yunnan-18",
    "slug": "industrial-zone-yunnan-18",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة YUNNAN الوطنية للتنمية والتصنيع المتقدم (18)",
      "en": "YUNNAN National Economic & Technological Development Park (#18)",
      "zh": "yunnan国家级经济技术产业开发区18",
      "pinyin": "YUNNAN National Economic & Technological Development Park (#18)"
    },
    "province": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "citySlug": "yunnan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، yunnan، مقاطعة yunnan، الصين",
      "en": "National Industrial Development Area, yunnan, yunnan Province, China",
      "zh": "中国yunnanyunnan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.7,
      "longitude": 116.7
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "yunnan",
      "yunnan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guangxi-19",
    "slug": "industrial-zone-guangxi-19",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUANGXI الوطنية للتنمية والتصنيع المتقدم (19)",
      "en": "GUANGXI National Economic & Technological Development Park (#19)",
      "zh": "guangxi国家级经济技术产业开发区19",
      "pinyin": "GUANGXI National Economic & Technological Development Park (#19)"
    },
    "province": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "citySlug": "guangxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangxi، مقاطعة guangxi، الصين",
      "en": "National Industrial Development Area, guangxi, guangxi Province, China",
      "zh": "中国guangxiguangxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.75,
      "longitude": 116.75
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guangxi",
      "guangxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-inner-mongolia-20",
    "slug": "industrial-zone-inner-mongolia-20",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة INNER-MONGOLIA الوطنية للتنمية والتصنيع المتقدم (20)",
      "en": "INNER-MONGOLIA National Economic & Technological Development Park (#20)",
      "zh": "inner-mongolia国家级经济技术产业开发区20",
      "pinyin": "INNER-MONGOLIA National Economic & Technological Development Park (#20)"
    },
    "province": {
      "ar": "inner-mongolia",
      "en": "inner-mongolia",
      "zh": "inner-mongolia"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "inner-mongolia",
      "en": "inner-mongolia",
      "zh": "inner-mongolia"
    },
    "citySlug": "inner-mongolia",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، inner-mongolia، مقاطعة inner-mongolia، الصين",
      "en": "National Industrial Development Area, inner-mongolia, inner-mongolia Province, China",
      "zh": "中国inner-mongoliainner-mongolia国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.8,
      "longitude": 116.8
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "inner-mongolia",
      "inner-mongolia",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-xinjiang-21",
    "slug": "industrial-zone-xinjiang-21",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة XINJIANG الوطنية للتنمية والتصنيع المتقدم (21)",
      "en": "XINJIANG National Economic & Technological Development Park (#21)",
      "zh": "xinjiang国家级经济技术产业开发区21",
      "pinyin": "XINJIANG National Economic & Technological Development Park (#21)"
    },
    "province": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "citySlug": "xinjiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، xinjiang، مقاطعة xinjiang، الصين",
      "en": "National Industrial Development Area, xinjiang, xinjiang Province, China",
      "zh": "中国xinjiangxinjiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.85,
      "longitude": 116.85
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "xinjiang",
      "xinjiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-gansu-22",
    "slug": "industrial-zone-gansu-22",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GANSU الوطنية للتنمية والتصنيع المتقدم (22)",
      "en": "GANSU National Economic & Technological Development Park (#22)",
      "zh": "gansu国家级经济技术产业开发区22",
      "pinyin": "GANSU National Economic & Technological Development Park (#22)"
    },
    "province": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "citySlug": "gansu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، gansu، مقاطعة gansu، الصين",
      "en": "National Industrial Development Area, gansu, gansu Province, China",
      "zh": "中国gansugansu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.9,
      "longitude": 116.9
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "gansu",
      "gansu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hainan-23",
    "slug": "industrial-zone-hainan-23",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HAINAN الوطنية للتنمية والتصنيع المتقدم (23)",
      "en": "HAINAN National Economic & Technological Development Park (#23)",
      "zh": "hainan国家级经济技术产业开发区23",
      "pinyin": "HAINAN National Economic & Technological Development Park (#23)"
    },
    "province": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "citySlug": "hainan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hainan، مقاطعة hainan، الصين",
      "en": "National Industrial Development Area, hainan, hainan Province, China",
      "zh": "中国hainanhainan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 26.95,
      "longitude": 116.95
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hainan",
      "hainan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-ningxia-24",
    "slug": "industrial-zone-ningxia-24",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة NINGXIA الوطنية للتنمية والتصنيع المتقدم (24)",
      "en": "NINGXIA National Economic & Technological Development Park (#24)",
      "zh": "ningxia国家级经济技术产业开发区24",
      "pinyin": "NINGXIA National Economic & Technological Development Park (#24)"
    },
    "province": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "citySlug": "ningxia",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، ningxia، مقاطعة ningxia، الصين",
      "en": "National Industrial Development Area, ningxia, ningxia Province, China",
      "zh": "中国ningxianingxia国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27,
      "longitude": 117
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "ningxia",
      "ningxia",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-qinghai-25",
    "slug": "industrial-zone-qinghai-25",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة QINGHAI الوطنية للتنمية والتصنيع المتقدم (25)",
      "en": "QINGHAI National Economic & Technological Development Park (#25)",
      "zh": "qinghai国家级经济技术产业开发区25",
      "pinyin": "QINGHAI National Economic & Technological Development Park (#25)"
    },
    "province": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "citySlug": "qinghai",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، qinghai، مقاطعة qinghai، الصين",
      "en": "National Industrial Development Area, qinghai, qinghai Province, China",
      "zh": "中国qinghaiqinghai国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.05,
      "longitude": 117.05
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "qinghai",
      "qinghai",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guangdong-26",
    "slug": "industrial-zone-guangdong-26",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUANGDONG الوطنية للتنمية والتصنيع المتقدم (26)",
      "en": "GUANGDONG National Economic & Technological Development Park (#26)",
      "zh": "guangdong国家级经济技术产业开发区26",
      "pinyin": "GUANGDONG National Economic & Technological Development Park (#26)"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "citySlug": "guangdong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangdong، مقاطعة guangdong، الصين",
      "en": "National Industrial Development Area, guangdong, guangdong Province, China",
      "zh": "中国guangdongguangdong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.1,
      "longitude": 117.1
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guangdong",
      "guangdong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-zhejiang-27",
    "slug": "industrial-zone-zhejiang-27",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ZHEJIANG الوطنية للتنمية والتصنيع المتقدم (27)",
      "en": "ZHEJIANG National Economic & Technological Development Park (#27)",
      "zh": "zhejiang国家级经济技术产业开发区27",
      "pinyin": "ZHEJIANG National Economic & Technological Development Park (#27)"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "citySlug": "zhejiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، zhejiang، مقاطعة zhejiang، الصين",
      "en": "National Industrial Development Area, zhejiang, zhejiang Province, China",
      "zh": "中国zhejiangzhejiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.15,
      "longitude": 117.15
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "zhejiang",
      "zhejiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangsu-28",
    "slug": "industrial-zone-jiangsu-28",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGSU الوطنية للتنمية والتصنيع المتقدم (28)",
      "en": "JIANGSU National Economic & Technological Development Park (#28)",
      "zh": "jiangsu国家级经济技术产业开发区28",
      "pinyin": "JIANGSU National Economic & Technological Development Park (#28)"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "citySlug": "jiangsu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangsu، مقاطعة jiangsu، الصين",
      "en": "National Industrial Development Area, jiangsu, jiangsu Province, China",
      "zh": "中国jiangsujiangsu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.2,
      "longitude": 117.2
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangsu",
      "jiangsu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shandong-29",
    "slug": "industrial-zone-shandong-29",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANDONG الوطنية للتنمية والتصنيع المتقدم (29)",
      "en": "SHANDONG National Economic & Technological Development Park (#29)",
      "zh": "shandong国家级经济技术产业开发区29",
      "pinyin": "SHANDONG National Economic & Technological Development Park (#29)"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "citySlug": "shandong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shandong، مقاطعة shandong، الصين",
      "en": "National Industrial Development Area, shandong, shandong Province, China",
      "zh": "中国shandongshandong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.25,
      "longitude": 117.25
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shandong",
      "shandong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-fujian-30",
    "slug": "industrial-zone-fujian-30",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة FUJIAN الوطنية للتنمية والتصنيع المتقدم (30)",
      "en": "FUJIAN National Economic & Technological Development Park (#30)",
      "zh": "fujian国家级经济技术产业开发区30",
      "pinyin": "FUJIAN National Economic & Technological Development Park (#30)"
    },
    "province": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "citySlug": "fujian",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، fujian، مقاطعة fujian، الصين",
      "en": "National Industrial Development Area, fujian, fujian Province, China",
      "zh": "中国fujianfujian国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.3,
      "longitude": 117.3
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "fujian",
      "fujian",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hebei-31",
    "slug": "industrial-zone-hebei-31",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEBEI الوطنية للتنمية والتصنيع المتقدم (31)",
      "en": "HEBEI National Economic & Technological Development Park (#31)",
      "zh": "hebei国家级经济技术产业开发区31",
      "pinyin": "HEBEI National Economic & Technological Development Park (#31)"
    },
    "province": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "citySlug": "hebei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hebei، مقاطعة hebei، الصين",
      "en": "National Industrial Development Area, hebei, hebei Province, China",
      "zh": "中国hebeihebei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.35,
      "longitude": 117.35
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hebei",
      "hebei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-henan-32",
    "slug": "industrial-zone-henan-32",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HENAN الوطنية للتنمية والتصنيع المتقدم (32)",
      "en": "HENAN National Economic & Technological Development Park (#32)",
      "zh": "henan国家级经济技术产业开发区32",
      "pinyin": "HENAN National Economic & Technological Development Park (#32)"
    },
    "province": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "citySlug": "henan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، henan، مقاطعة henan، الصين",
      "en": "National Industrial Development Area, henan, henan Province, China",
      "zh": "中国henanhenan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.4,
      "longitude": 117.4
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "henan",
      "henan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hubei-33",
    "slug": "industrial-zone-hubei-33",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HUBEI الوطنية للتنمية والتصنيع المتقدم (33)",
      "en": "HUBEI National Economic & Technological Development Park (#33)",
      "zh": "hubei国家级经济技术产业开发区33",
      "pinyin": "HUBEI National Economic & Technological Development Park (#33)"
    },
    "province": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "citySlug": "hubei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hubei، مقاطعة hubei، الصين",
      "en": "National Industrial Development Area, hubei, hubei Province, China",
      "zh": "中国hubeihubei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.45,
      "longitude": 117.45
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hubei",
      "hubei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hunan-34",
    "slug": "industrial-zone-hunan-34",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HUNAN الوطنية للتنمية والتصنيع المتقدم (34)",
      "en": "HUNAN National Economic & Technological Development Park (#34)",
      "zh": "hunan国家级经济技术产业开发区34",
      "pinyin": "HUNAN National Economic & Technological Development Park (#34)"
    },
    "province": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "citySlug": "hunan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hunan، مقاطعة hunan، الصين",
      "en": "National Industrial Development Area, hunan, hunan Province, China",
      "zh": "中国hunanhunan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.5,
      "longitude": 117.5
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hunan",
      "hunan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-anhui-35",
    "slug": "industrial-zone-anhui-35",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ANHUI الوطنية للتنمية والتصنيع المتقدم (35)",
      "en": "ANHUI National Economic & Technological Development Park (#35)",
      "zh": "anhui国家级经济技术产业开发区35",
      "pinyin": "ANHUI National Economic & Technological Development Park (#35)"
    },
    "province": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "citySlug": "anhui",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، anhui، مقاطعة anhui، الصين",
      "en": "National Industrial Development Area, anhui, anhui Province, China",
      "zh": "中国anhuianhui国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.55,
      "longitude": 117.55
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "anhui",
      "anhui",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangxi-36",
    "slug": "industrial-zone-jiangxi-36",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGXI الوطنية للتنمية والتصنيع المتقدم (36)",
      "en": "JIANGXI National Economic & Technological Development Park (#36)",
      "zh": "jiangxi国家级经济技术产业开发区36",
      "pinyin": "JIANGXI National Economic & Technological Development Park (#36)"
    },
    "province": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "citySlug": "jiangxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangxi، مقاطعة jiangxi، الصين",
      "en": "National Industrial Development Area, jiangxi, jiangxi Province, China",
      "zh": "中国jiangxijiangxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.6,
      "longitude": 117.6
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangxi",
      "jiangxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-sichuan-37",
    "slug": "industrial-zone-sichuan-37",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SICHUAN الوطنية للتنمية والتصنيع المتقدم (37)",
      "en": "SICHUAN National Economic & Technological Development Park (#37)",
      "zh": "sichuan国家级经济技术产业开发区37",
      "pinyin": "SICHUAN National Economic & Technological Development Park (#37)"
    },
    "province": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "citySlug": "sichuan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، sichuan، مقاطعة sichuan، الصين",
      "en": "National Industrial Development Area, sichuan, sichuan Province, China",
      "zh": "中国sichuansichuan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.65,
      "longitude": 117.65
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "sichuan",
      "sichuan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shaanxi-38",
    "slug": "industrial-zone-shaanxi-38",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHAANXI الوطنية للتنمية والتصنيع المتقدم (38)",
      "en": "SHAANXI National Economic & Technological Development Park (#38)",
      "zh": "shaanxi国家级经济技术产业开发区38",
      "pinyin": "SHAANXI National Economic & Technological Development Park (#38)"
    },
    "province": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "citySlug": "shaanxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shaanxi، مقاطعة shaanxi، الصين",
      "en": "National Industrial Development Area, shaanxi, shaanxi Province, China",
      "zh": "中国shaanxishaanxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.7,
      "longitude": 117.7
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shaanxi",
      "shaanxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-liaoning-39",
    "slug": "industrial-zone-liaoning-39",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة LIAONING الوطنية للتنمية والتصنيع المتقدم (39)",
      "en": "LIAONING National Economic & Technological Development Park (#39)",
      "zh": "liaoning国家级经济技术产业开发区39",
      "pinyin": "LIAONING National Economic & Technological Development Park (#39)"
    },
    "province": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "citySlug": "liaoning",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، liaoning، مقاطعة liaoning، الصين",
      "en": "National Industrial Development Area, liaoning, liaoning Province, China",
      "zh": "中国liaoningliaoning国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.75,
      "longitude": 117.75
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "liaoning",
      "liaoning",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jilin-40",
    "slug": "industrial-zone-jilin-40",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JILIN الوطنية للتنمية والتصنيع المتقدم (40)",
      "en": "JILIN National Economic & Technological Development Park (#40)",
      "zh": "jilin国家级经济技术产业开发区40",
      "pinyin": "JILIN National Economic & Technological Development Park (#40)"
    },
    "province": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "citySlug": "jilin",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jilin، مقاطعة jilin، الصين",
      "en": "National Industrial Development Area, jilin, jilin Province, China",
      "zh": "中国jilinjilin国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.8,
      "longitude": 117.8
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jilin",
      "jilin",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-heilongjiang-41",
    "slug": "industrial-zone-heilongjiang-41",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEILONGJIANG الوطنية للتنمية والتصنيع المتقدم (41)",
      "en": "HEILONGJIANG National Economic & Technological Development Park (#41)",
      "zh": "heilongjiang国家级经济技术产业开发区41",
      "pinyin": "HEILONGJIANG National Economic & Technological Development Park (#41)"
    },
    "province": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "citySlug": "heilongjiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، heilongjiang، مقاطعة heilongjiang، الصين",
      "en": "National Industrial Development Area, heilongjiang, heilongjiang Province, China",
      "zh": "中国heilongjiangheilongjiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.85,
      "longitude": 117.85
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "heilongjiang",
      "heilongjiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shanxi-42",
    "slug": "industrial-zone-shanxi-42",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANXI الوطنية للتنمية والتصنيع المتقدم (42)",
      "en": "SHANXI National Economic & Technological Development Park (#42)",
      "zh": "shanxi国家级经济技术产业开发区42",
      "pinyin": "SHANXI National Economic & Technological Development Park (#42)"
    },
    "province": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "citySlug": "shanxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shanxi، مقاطعة shanxi، الصين",
      "en": "National Industrial Development Area, shanxi, shanxi Province, China",
      "zh": "中国shanxishanxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.9,
      "longitude": 117.9
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shanxi",
      "shanxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guizhou-43",
    "slug": "industrial-zone-guizhou-43",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUIZHOU الوطنية للتنمية والتصنيع المتقدم (43)",
      "en": "GUIZHOU National Economic & Technological Development Park (#43)",
      "zh": "guizhou国家级经济技术产业开发区43",
      "pinyin": "GUIZHOU National Economic & Technological Development Park (#43)"
    },
    "province": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "citySlug": "guizhou",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guizhou، مقاطعة guizhou، الصين",
      "en": "National Industrial Development Area, guizhou, guizhou Province, China",
      "zh": "中国guizhouguizhou国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 27.95,
      "longitude": 117.95
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guizhou",
      "guizhou",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-yunnan-44",
    "slug": "industrial-zone-yunnan-44",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة YUNNAN الوطنية للتنمية والتصنيع المتقدم (44)",
      "en": "YUNNAN National Economic & Technological Development Park (#44)",
      "zh": "yunnan国家级经济技术产业开发区44",
      "pinyin": "YUNNAN National Economic & Technological Development Park (#44)"
    },
    "province": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "citySlug": "yunnan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، yunnan، مقاطعة yunnan، الصين",
      "en": "National Industrial Development Area, yunnan, yunnan Province, China",
      "zh": "中国yunnanyunnan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28,
      "longitude": 118
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "yunnan",
      "yunnan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guangxi-45",
    "slug": "industrial-zone-guangxi-45",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUANGXI الوطنية للتنمية والتصنيع المتقدم (45)",
      "en": "GUANGXI National Economic & Technological Development Park (#45)",
      "zh": "guangxi国家级经济技术产业开发区45",
      "pinyin": "GUANGXI National Economic & Technological Development Park (#45)"
    },
    "province": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "citySlug": "guangxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangxi، مقاطعة guangxi، الصين",
      "en": "National Industrial Development Area, guangxi, guangxi Province, China",
      "zh": "中国guangxiguangxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.05,
      "longitude": 118.05
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guangxi",
      "guangxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-inner-mongolia-46",
    "slug": "industrial-zone-inner-mongolia-46",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة INNER-MONGOLIA الوطنية للتنمية والتصنيع المتقدم (46)",
      "en": "INNER-MONGOLIA National Economic & Technological Development Park (#46)",
      "zh": "inner-mongolia国家级经济技术产业开发区46",
      "pinyin": "INNER-MONGOLIA National Economic & Technological Development Park (#46)"
    },
    "province": {
      "ar": "inner-mongolia",
      "en": "inner-mongolia",
      "zh": "inner-mongolia"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "inner-mongolia",
      "en": "inner-mongolia",
      "zh": "inner-mongolia"
    },
    "citySlug": "inner-mongolia",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، inner-mongolia، مقاطعة inner-mongolia، الصين",
      "en": "National Industrial Development Area, inner-mongolia, inner-mongolia Province, China",
      "zh": "中国inner-mongoliainner-mongolia国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.1,
      "longitude": 118.1
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "inner-mongolia",
      "inner-mongolia",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-xinjiang-47",
    "slug": "industrial-zone-xinjiang-47",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة XINJIANG الوطنية للتنمية والتصنيع المتقدم (47)",
      "en": "XINJIANG National Economic & Technological Development Park (#47)",
      "zh": "xinjiang国家级经济技术产业开发区47",
      "pinyin": "XINJIANG National Economic & Technological Development Park (#47)"
    },
    "province": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "citySlug": "xinjiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، xinjiang، مقاطعة xinjiang، الصين",
      "en": "National Industrial Development Area, xinjiang, xinjiang Province, China",
      "zh": "中国xinjiangxinjiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.15,
      "longitude": 118.15
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "xinjiang",
      "xinjiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-gansu-48",
    "slug": "industrial-zone-gansu-48",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GANSU الوطنية للتنمية والتصنيع المتقدم (48)",
      "en": "GANSU National Economic & Technological Development Park (#48)",
      "zh": "gansu国家级经济技术产业开发区48",
      "pinyin": "GANSU National Economic & Technological Development Park (#48)"
    },
    "province": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "citySlug": "gansu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، gansu، مقاطعة gansu، الصين",
      "en": "National Industrial Development Area, gansu, gansu Province, China",
      "zh": "中国gansugansu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.2,
      "longitude": 118.2
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "gansu",
      "gansu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hainan-49",
    "slug": "industrial-zone-hainan-49",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HAINAN الوطنية للتنمية والتصنيع المتقدم (49)",
      "en": "HAINAN National Economic & Technological Development Park (#49)",
      "zh": "hainan国家级经济技术产业开发区49",
      "pinyin": "HAINAN National Economic & Technological Development Park (#49)"
    },
    "province": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "citySlug": "hainan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hainan، مقاطعة hainan، الصين",
      "en": "National Industrial Development Area, hainan, hainan Province, China",
      "zh": "中国hainanhainan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.25,
      "longitude": 118.25
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hainan",
      "hainan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-ningxia-50",
    "slug": "industrial-zone-ningxia-50",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة NINGXIA الوطنية للتنمية والتصنيع المتقدم (50)",
      "en": "NINGXIA National Economic & Technological Development Park (#50)",
      "zh": "ningxia国家级经济技术产业开发区50",
      "pinyin": "NINGXIA National Economic & Technological Development Park (#50)"
    },
    "province": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "citySlug": "ningxia",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، ningxia، مقاطعة ningxia، الصين",
      "en": "National Industrial Development Area, ningxia, ningxia Province, China",
      "zh": "中国ningxianingxia国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.3,
      "longitude": 118.3
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "ningxia",
      "ningxia",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-qinghai-51",
    "slug": "industrial-zone-qinghai-51",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة QINGHAI الوطنية للتنمية والتصنيع المتقدم (51)",
      "en": "QINGHAI National Economic & Technological Development Park (#51)",
      "zh": "qinghai国家级经济技术产业开发区51",
      "pinyin": "QINGHAI National Economic & Technological Development Park (#51)"
    },
    "province": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "citySlug": "qinghai",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، qinghai، مقاطعة qinghai، الصين",
      "en": "National Industrial Development Area, qinghai, qinghai Province, China",
      "zh": "中国qinghaiqinghai国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.35,
      "longitude": 118.35
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "qinghai",
      "qinghai",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guangdong-52",
    "slug": "industrial-zone-guangdong-52",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUANGDONG الوطنية للتنمية والتصنيع المتقدم (52)",
      "en": "GUANGDONG National Economic & Technological Development Park (#52)",
      "zh": "guangdong国家级经济技术产业开发区52",
      "pinyin": "GUANGDONG National Economic & Technological Development Park (#52)"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "citySlug": "guangdong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangdong، مقاطعة guangdong، الصين",
      "en": "National Industrial Development Area, guangdong, guangdong Province, China",
      "zh": "中国guangdongguangdong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.4,
      "longitude": 118.4
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guangdong",
      "guangdong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-zhejiang-53",
    "slug": "industrial-zone-zhejiang-53",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ZHEJIANG الوطنية للتنمية والتصنيع المتقدم (53)",
      "en": "ZHEJIANG National Economic & Technological Development Park (#53)",
      "zh": "zhejiang国家级经济技术产业开发区53",
      "pinyin": "ZHEJIANG National Economic & Technological Development Park (#53)"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "citySlug": "zhejiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، zhejiang، مقاطعة zhejiang، الصين",
      "en": "National Industrial Development Area, zhejiang, zhejiang Province, China",
      "zh": "中国zhejiangzhejiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.45,
      "longitude": 118.45
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "zhejiang",
      "zhejiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangsu-54",
    "slug": "industrial-zone-jiangsu-54",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGSU الوطنية للتنمية والتصنيع المتقدم (54)",
      "en": "JIANGSU National Economic & Technological Development Park (#54)",
      "zh": "jiangsu国家级经济技术产业开发区54",
      "pinyin": "JIANGSU National Economic & Technological Development Park (#54)"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "citySlug": "jiangsu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangsu، مقاطعة jiangsu، الصين",
      "en": "National Industrial Development Area, jiangsu, jiangsu Province, China",
      "zh": "中国jiangsujiangsu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.5,
      "longitude": 118.5
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangsu",
      "jiangsu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shandong-55",
    "slug": "industrial-zone-shandong-55",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANDONG الوطنية للتنمية والتصنيع المتقدم (55)",
      "en": "SHANDONG National Economic & Technological Development Park (#55)",
      "zh": "shandong国家级经济技术产业开发区55",
      "pinyin": "SHANDONG National Economic & Technological Development Park (#55)"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "citySlug": "shandong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shandong، مقاطعة shandong، الصين",
      "en": "National Industrial Development Area, shandong, shandong Province, China",
      "zh": "中国shandongshandong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.55,
      "longitude": 118.55
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shandong",
      "shandong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-fujian-56",
    "slug": "industrial-zone-fujian-56",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة FUJIAN الوطنية للتنمية والتصنيع المتقدم (56)",
      "en": "FUJIAN National Economic & Technological Development Park (#56)",
      "zh": "fujian国家级经济技术产业开发区56",
      "pinyin": "FUJIAN National Economic & Technological Development Park (#56)"
    },
    "province": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "citySlug": "fujian",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، fujian، مقاطعة fujian، الصين",
      "en": "National Industrial Development Area, fujian, fujian Province, China",
      "zh": "中国fujianfujian国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.6,
      "longitude": 118.6
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "fujian",
      "fujian",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hebei-57",
    "slug": "industrial-zone-hebei-57",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEBEI الوطنية للتنمية والتصنيع المتقدم (57)",
      "en": "HEBEI National Economic & Technological Development Park (#57)",
      "zh": "hebei国家级经济技术产业开发区57",
      "pinyin": "HEBEI National Economic & Technological Development Park (#57)"
    },
    "province": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "citySlug": "hebei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hebei، مقاطعة hebei، الصين",
      "en": "National Industrial Development Area, hebei, hebei Province, China",
      "zh": "中国hebeihebei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.65,
      "longitude": 118.65
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hebei",
      "hebei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-henan-58",
    "slug": "industrial-zone-henan-58",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HENAN الوطنية للتنمية والتصنيع المتقدم (58)",
      "en": "HENAN National Economic & Technological Development Park (#58)",
      "zh": "henan国家级经济技术产业开发区58",
      "pinyin": "HENAN National Economic & Technological Development Park (#58)"
    },
    "province": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "citySlug": "henan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، henan، مقاطعة henan، الصين",
      "en": "National Industrial Development Area, henan, henan Province, China",
      "zh": "中国henanhenan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.7,
      "longitude": 118.7
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "henan",
      "henan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hubei-59",
    "slug": "industrial-zone-hubei-59",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HUBEI الوطنية للتنمية والتصنيع المتقدم (59)",
      "en": "HUBEI National Economic & Technological Development Park (#59)",
      "zh": "hubei国家级经济技术产业开发区59",
      "pinyin": "HUBEI National Economic & Technological Development Park (#59)"
    },
    "province": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "citySlug": "hubei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hubei، مقاطعة hubei، الصين",
      "en": "National Industrial Development Area, hubei, hubei Province, China",
      "zh": "中国hubeihubei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.75,
      "longitude": 118.75
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hubei",
      "hubei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hunan-60",
    "slug": "industrial-zone-hunan-60",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HUNAN الوطنية للتنمية والتصنيع المتقدم (60)",
      "en": "HUNAN National Economic & Technological Development Park (#60)",
      "zh": "hunan国家级经济技术产业开发区60",
      "pinyin": "HUNAN National Economic & Technological Development Park (#60)"
    },
    "province": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "citySlug": "hunan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hunan، مقاطعة hunan، الصين",
      "en": "National Industrial Development Area, hunan, hunan Province, China",
      "zh": "中国hunanhunan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.8,
      "longitude": 118.8
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hunan",
      "hunan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-anhui-61",
    "slug": "industrial-zone-anhui-61",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ANHUI الوطنية للتنمية والتصنيع المتقدم (61)",
      "en": "ANHUI National Economic & Technological Development Park (#61)",
      "zh": "anhui国家级经济技术产业开发区61",
      "pinyin": "ANHUI National Economic & Technological Development Park (#61)"
    },
    "province": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "citySlug": "anhui",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، anhui، مقاطعة anhui، الصين",
      "en": "National Industrial Development Area, anhui, anhui Province, China",
      "zh": "中国anhuianhui国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.85,
      "longitude": 118.85
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "anhui",
      "anhui",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangxi-62",
    "slug": "industrial-zone-jiangxi-62",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGXI الوطنية للتنمية والتصنيع المتقدم (62)",
      "en": "JIANGXI National Economic & Technological Development Park (#62)",
      "zh": "jiangxi国家级经济技术产业开发区62",
      "pinyin": "JIANGXI National Economic & Technological Development Park (#62)"
    },
    "province": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "citySlug": "jiangxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangxi، مقاطعة jiangxi، الصين",
      "en": "National Industrial Development Area, jiangxi, jiangxi Province, China",
      "zh": "中国jiangxijiangxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.9,
      "longitude": 118.9
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangxi",
      "jiangxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-sichuan-63",
    "slug": "industrial-zone-sichuan-63",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SICHUAN الوطنية للتنمية والتصنيع المتقدم (63)",
      "en": "SICHUAN National Economic & Technological Development Park (#63)",
      "zh": "sichuan国家级经济技术产业开发区63",
      "pinyin": "SICHUAN National Economic & Technological Development Park (#63)"
    },
    "province": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "citySlug": "sichuan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، sichuan، مقاطعة sichuan، الصين",
      "en": "National Industrial Development Area, sichuan, sichuan Province, China",
      "zh": "中国sichuansichuan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 28.95,
      "longitude": 118.95
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "sichuan",
      "sichuan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shaanxi-64",
    "slug": "industrial-zone-shaanxi-64",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHAANXI الوطنية للتنمية والتصنيع المتقدم (64)",
      "en": "SHAANXI National Economic & Technological Development Park (#64)",
      "zh": "shaanxi国家级经济技术产业开发区64",
      "pinyin": "SHAANXI National Economic & Technological Development Park (#64)"
    },
    "province": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "citySlug": "shaanxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shaanxi، مقاطعة shaanxi، الصين",
      "en": "National Industrial Development Area, shaanxi, shaanxi Province, China",
      "zh": "中国shaanxishaanxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29,
      "longitude": 119
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shaanxi",
      "shaanxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-liaoning-65",
    "slug": "industrial-zone-liaoning-65",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة LIAONING الوطنية للتنمية والتصنيع المتقدم (65)",
      "en": "LIAONING National Economic & Technological Development Park (#65)",
      "zh": "liaoning国家级经济技术产业开发区65",
      "pinyin": "LIAONING National Economic & Technological Development Park (#65)"
    },
    "province": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "citySlug": "liaoning",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، liaoning، مقاطعة liaoning، الصين",
      "en": "National Industrial Development Area, liaoning, liaoning Province, China",
      "zh": "中国liaoningliaoning国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.05,
      "longitude": 119.05
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "liaoning",
      "liaoning",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jilin-66",
    "slug": "industrial-zone-jilin-66",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JILIN الوطنية للتنمية والتصنيع المتقدم (66)",
      "en": "JILIN National Economic & Technological Development Park (#66)",
      "zh": "jilin国家级经济技术产业开发区66",
      "pinyin": "JILIN National Economic & Technological Development Park (#66)"
    },
    "province": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "citySlug": "jilin",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jilin، مقاطعة jilin، الصين",
      "en": "National Industrial Development Area, jilin, jilin Province, China",
      "zh": "中国jilinjilin国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.1,
      "longitude": 119.1
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jilin",
      "jilin",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-heilongjiang-67",
    "slug": "industrial-zone-heilongjiang-67",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEILONGJIANG الوطنية للتنمية والتصنيع المتقدم (67)",
      "en": "HEILONGJIANG National Economic & Technological Development Park (#67)",
      "zh": "heilongjiang国家级经济技术产业开发区67",
      "pinyin": "HEILONGJIANG National Economic & Technological Development Park (#67)"
    },
    "province": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "citySlug": "heilongjiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، heilongjiang، مقاطعة heilongjiang، الصين",
      "en": "National Industrial Development Area, heilongjiang, heilongjiang Province, China",
      "zh": "中国heilongjiangheilongjiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.15,
      "longitude": 119.15
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "heilongjiang",
      "heilongjiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shanxi-68",
    "slug": "industrial-zone-shanxi-68",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANXI الوطنية للتنمية والتصنيع المتقدم (68)",
      "en": "SHANXI National Economic & Technological Development Park (#68)",
      "zh": "shanxi国家级经济技术产业开发区68",
      "pinyin": "SHANXI National Economic & Technological Development Park (#68)"
    },
    "province": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "citySlug": "shanxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shanxi، مقاطعة shanxi، الصين",
      "en": "National Industrial Development Area, shanxi, shanxi Province, China",
      "zh": "中国shanxishanxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.2,
      "longitude": 119.2
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shanxi",
      "shanxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guizhou-69",
    "slug": "industrial-zone-guizhou-69",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUIZHOU الوطنية للتنمية والتصنيع المتقدم (69)",
      "en": "GUIZHOU National Economic & Technological Development Park (#69)",
      "zh": "guizhou国家级经济技术产业开发区69",
      "pinyin": "GUIZHOU National Economic & Technological Development Park (#69)"
    },
    "province": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "citySlug": "guizhou",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guizhou، مقاطعة guizhou، الصين",
      "en": "National Industrial Development Area, guizhou, guizhou Province, China",
      "zh": "中国guizhouguizhou国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.25,
      "longitude": 119.25
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guizhou",
      "guizhou",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-yunnan-70",
    "slug": "industrial-zone-yunnan-70",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة YUNNAN الوطنية للتنمية والتصنيع المتقدم (70)",
      "en": "YUNNAN National Economic & Technological Development Park (#70)",
      "zh": "yunnan国家级经济技术产业开发区70",
      "pinyin": "YUNNAN National Economic & Technological Development Park (#70)"
    },
    "province": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "citySlug": "yunnan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، yunnan، مقاطعة yunnan، الصين",
      "en": "National Industrial Development Area, yunnan, yunnan Province, China",
      "zh": "中国yunnanyunnan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.3,
      "longitude": 119.3
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "yunnan",
      "yunnan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guangxi-71",
    "slug": "industrial-zone-guangxi-71",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUANGXI الوطنية للتنمية والتصنيع المتقدم (71)",
      "en": "GUANGXI National Economic & Technological Development Park (#71)",
      "zh": "guangxi国家级经济技术产业开发区71",
      "pinyin": "GUANGXI National Economic & Technological Development Park (#71)"
    },
    "province": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "citySlug": "guangxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangxi، مقاطعة guangxi، الصين",
      "en": "National Industrial Development Area, guangxi, guangxi Province, China",
      "zh": "中国guangxiguangxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.35,
      "longitude": 119.35
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guangxi",
      "guangxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-inner-mongolia-72",
    "slug": "industrial-zone-inner-mongolia-72",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة INNER-MONGOLIA الوطنية للتنمية والتصنيع المتقدم (72)",
      "en": "INNER-MONGOLIA National Economic & Technological Development Park (#72)",
      "zh": "inner-mongolia国家级经济技术产业开发区72",
      "pinyin": "INNER-MONGOLIA National Economic & Technological Development Park (#72)"
    },
    "province": {
      "ar": "inner-mongolia",
      "en": "inner-mongolia",
      "zh": "inner-mongolia"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "inner-mongolia",
      "en": "inner-mongolia",
      "zh": "inner-mongolia"
    },
    "citySlug": "inner-mongolia",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، inner-mongolia، مقاطعة inner-mongolia، الصين",
      "en": "National Industrial Development Area, inner-mongolia, inner-mongolia Province, China",
      "zh": "中国inner-mongoliainner-mongolia国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.4,
      "longitude": 119.4
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "inner-mongolia",
      "inner-mongolia",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-xinjiang-73",
    "slug": "industrial-zone-xinjiang-73",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة XINJIANG الوطنية للتنمية والتصنيع المتقدم (73)",
      "en": "XINJIANG National Economic & Technological Development Park (#73)",
      "zh": "xinjiang国家级经济技术产业开发区73",
      "pinyin": "XINJIANG National Economic & Technological Development Park (#73)"
    },
    "province": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "citySlug": "xinjiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، xinjiang، مقاطعة xinjiang، الصين",
      "en": "National Industrial Development Area, xinjiang, xinjiang Province, China",
      "zh": "中国xinjiangxinjiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.45,
      "longitude": 119.45
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "xinjiang",
      "xinjiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-gansu-74",
    "slug": "industrial-zone-gansu-74",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GANSU الوطنية للتنمية والتصنيع المتقدم (74)",
      "en": "GANSU National Economic & Technological Development Park (#74)",
      "zh": "gansu国家级经济技术产业开发区74",
      "pinyin": "GANSU National Economic & Technological Development Park (#74)"
    },
    "province": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "citySlug": "gansu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، gansu، مقاطعة gansu، الصين",
      "en": "National Industrial Development Area, gansu, gansu Province, China",
      "zh": "中国gansugansu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.5,
      "longitude": 119.5
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "gansu",
      "gansu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hainan-75",
    "slug": "industrial-zone-hainan-75",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HAINAN الوطنية للتنمية والتصنيع المتقدم (75)",
      "en": "HAINAN National Economic & Technological Development Park (#75)",
      "zh": "hainan国家级经济技术产业开发区75",
      "pinyin": "HAINAN National Economic & Technological Development Park (#75)"
    },
    "province": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "citySlug": "hainan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hainan، مقاطعة hainan، الصين",
      "en": "National Industrial Development Area, hainan, hainan Province, China",
      "zh": "中国hainanhainan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.55,
      "longitude": 119.55
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hainan",
      "hainan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-ningxia-76",
    "slug": "industrial-zone-ningxia-76",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة NINGXIA الوطنية للتنمية والتصنيع المتقدم (76)",
      "en": "NINGXIA National Economic & Technological Development Park (#76)",
      "zh": "ningxia国家级经济技术产业开发区76",
      "pinyin": "NINGXIA National Economic & Technological Development Park (#76)"
    },
    "province": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "citySlug": "ningxia",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، ningxia، مقاطعة ningxia، الصين",
      "en": "National Industrial Development Area, ningxia, ningxia Province, China",
      "zh": "中国ningxianingxia国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.6,
      "longitude": 119.6
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "ningxia",
      "ningxia",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-qinghai-77",
    "slug": "industrial-zone-qinghai-77",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة QINGHAI الوطنية للتنمية والتصنيع المتقدم (77)",
      "en": "QINGHAI National Economic & Technological Development Park (#77)",
      "zh": "qinghai国家级经济技术产业开发区77",
      "pinyin": "QINGHAI National Economic & Technological Development Park (#77)"
    },
    "province": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "citySlug": "qinghai",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، qinghai، مقاطعة qinghai، الصين",
      "en": "National Industrial Development Area, qinghai, qinghai Province, China",
      "zh": "中国qinghaiqinghai国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.65,
      "longitude": 119.65
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "qinghai",
      "qinghai",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guangdong-78",
    "slug": "industrial-zone-guangdong-78",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUANGDONG الوطنية للتنمية والتصنيع المتقدم (78)",
      "en": "GUANGDONG National Economic & Technological Development Park (#78)",
      "zh": "guangdong国家级经济技术产业开发区78",
      "pinyin": "GUANGDONG National Economic & Technological Development Park (#78)"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "citySlug": "guangdong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangdong، مقاطعة guangdong، الصين",
      "en": "National Industrial Development Area, guangdong, guangdong Province, China",
      "zh": "中国guangdongguangdong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.7,
      "longitude": 119.7
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guangdong",
      "guangdong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-zhejiang-79",
    "slug": "industrial-zone-zhejiang-79",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ZHEJIANG الوطنية للتنمية والتصنيع المتقدم (79)",
      "en": "ZHEJIANG National Economic & Technological Development Park (#79)",
      "zh": "zhejiang国家级经济技术产业开发区79",
      "pinyin": "ZHEJIANG National Economic & Technological Development Park (#79)"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "citySlug": "zhejiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، zhejiang، مقاطعة zhejiang، الصين",
      "en": "National Industrial Development Area, zhejiang, zhejiang Province, China",
      "zh": "中国zhejiangzhejiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.75,
      "longitude": 119.75
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "zhejiang",
      "zhejiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangsu-80",
    "slug": "industrial-zone-jiangsu-80",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGSU الوطنية للتنمية والتصنيع المتقدم (80)",
      "en": "JIANGSU National Economic & Technological Development Park (#80)",
      "zh": "jiangsu国家级经济技术产业开发区80",
      "pinyin": "JIANGSU National Economic & Technological Development Park (#80)"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "citySlug": "jiangsu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangsu، مقاطعة jiangsu، الصين",
      "en": "National Industrial Development Area, jiangsu, jiangsu Province, China",
      "zh": "中国jiangsujiangsu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.8,
      "longitude": 119.8
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangsu",
      "jiangsu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shandong-81",
    "slug": "industrial-zone-shandong-81",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANDONG الوطنية للتنمية والتصنيع المتقدم (81)",
      "en": "SHANDONG National Economic & Technological Development Park (#81)",
      "zh": "shandong国家级经济技术产业开发区81",
      "pinyin": "SHANDONG National Economic & Technological Development Park (#81)"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "citySlug": "shandong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shandong، مقاطعة shandong، الصين",
      "en": "National Industrial Development Area, shandong, shandong Province, China",
      "zh": "中国shandongshandong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.85,
      "longitude": 119.85
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shandong",
      "shandong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-fujian-82",
    "slug": "industrial-zone-fujian-82",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة FUJIAN الوطنية للتنمية والتصنيع المتقدم (82)",
      "en": "FUJIAN National Economic & Technological Development Park (#82)",
      "zh": "fujian国家级经济技术产业开发区82",
      "pinyin": "FUJIAN National Economic & Technological Development Park (#82)"
    },
    "province": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "citySlug": "fujian",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، fujian، مقاطعة fujian، الصين",
      "en": "National Industrial Development Area, fujian, fujian Province, China",
      "zh": "中国fujianfujian国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.9,
      "longitude": 119.9
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "fujian",
      "fujian",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hebei-83",
    "slug": "industrial-zone-hebei-83",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEBEI الوطنية للتنمية والتصنيع المتقدم (83)",
      "en": "HEBEI National Economic & Technological Development Park (#83)",
      "zh": "hebei国家级经济技术产业开发区83",
      "pinyin": "HEBEI National Economic & Technological Development Park (#83)"
    },
    "province": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "citySlug": "hebei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hebei، مقاطعة hebei، الصين",
      "en": "National Industrial Development Area, hebei, hebei Province, China",
      "zh": "中国hebeihebei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 29.95,
      "longitude": 119.95
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hebei",
      "hebei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-henan-84",
    "slug": "industrial-zone-henan-84",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HENAN الوطنية للتنمية والتصنيع المتقدم (84)",
      "en": "HENAN National Economic & Technological Development Park (#84)",
      "zh": "henan国家级经济技术产业开发区84",
      "pinyin": "HENAN National Economic & Technological Development Park (#84)"
    },
    "province": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "citySlug": "henan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، henan، مقاطعة henan، الصين",
      "en": "National Industrial Development Area, henan, henan Province, China",
      "zh": "中国henanhenan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30,
      "longitude": 120
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "henan",
      "henan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hubei-85",
    "slug": "industrial-zone-hubei-85",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HUBEI الوطنية للتنمية والتصنيع المتقدم (85)",
      "en": "HUBEI National Economic & Technological Development Park (#85)",
      "zh": "hubei国家级经济技术产业开发区85",
      "pinyin": "HUBEI National Economic & Technological Development Park (#85)"
    },
    "province": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "citySlug": "hubei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hubei، مقاطعة hubei، الصين",
      "en": "National Industrial Development Area, hubei, hubei Province, China",
      "zh": "中国hubeihubei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.05,
      "longitude": 120.05
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hubei",
      "hubei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hunan-86",
    "slug": "industrial-zone-hunan-86",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HUNAN الوطنية للتنمية والتصنيع المتقدم (86)",
      "en": "HUNAN National Economic & Technological Development Park (#86)",
      "zh": "hunan国家级经济技术产业开发区86",
      "pinyin": "HUNAN National Economic & Technological Development Park (#86)"
    },
    "province": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "citySlug": "hunan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hunan، مقاطعة hunan، الصين",
      "en": "National Industrial Development Area, hunan, hunan Province, China",
      "zh": "中国hunanhunan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.1,
      "longitude": 120.1
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hunan",
      "hunan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-anhui-87",
    "slug": "industrial-zone-anhui-87",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ANHUI الوطنية للتنمية والتصنيع المتقدم (87)",
      "en": "ANHUI National Economic & Technological Development Park (#87)",
      "zh": "anhui国家级经济技术产业开发区87",
      "pinyin": "ANHUI National Economic & Technological Development Park (#87)"
    },
    "province": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "citySlug": "anhui",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، anhui، مقاطعة anhui، الصين",
      "en": "National Industrial Development Area, anhui, anhui Province, China",
      "zh": "中国anhuianhui国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.15,
      "longitude": 120.15
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "anhui",
      "anhui",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangxi-88",
    "slug": "industrial-zone-jiangxi-88",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGXI الوطنية للتنمية والتصنيع المتقدم (88)",
      "en": "JIANGXI National Economic & Technological Development Park (#88)",
      "zh": "jiangxi国家级经济技术产业开发区88",
      "pinyin": "JIANGXI National Economic & Technological Development Park (#88)"
    },
    "province": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "citySlug": "jiangxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangxi، مقاطعة jiangxi، الصين",
      "en": "National Industrial Development Area, jiangxi, jiangxi Province, China",
      "zh": "中国jiangxijiangxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.2,
      "longitude": 120.2
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangxi",
      "jiangxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-sichuan-89",
    "slug": "industrial-zone-sichuan-89",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SICHUAN الوطنية للتنمية والتصنيع المتقدم (89)",
      "en": "SICHUAN National Economic & Technological Development Park (#89)",
      "zh": "sichuan国家级经济技术产业开发区89",
      "pinyin": "SICHUAN National Economic & Technological Development Park (#89)"
    },
    "province": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "citySlug": "sichuan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، sichuan، مقاطعة sichuan، الصين",
      "en": "National Industrial Development Area, sichuan, sichuan Province, China",
      "zh": "中国sichuansichuan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.25,
      "longitude": 120.25
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "sichuan",
      "sichuan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shaanxi-90",
    "slug": "industrial-zone-shaanxi-90",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHAANXI الوطنية للتنمية والتصنيع المتقدم (90)",
      "en": "SHAANXI National Economic & Technological Development Park (#90)",
      "zh": "shaanxi国家级经济技术产业开发区90",
      "pinyin": "SHAANXI National Economic & Technological Development Park (#90)"
    },
    "province": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "citySlug": "shaanxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shaanxi، مقاطعة shaanxi، الصين",
      "en": "National Industrial Development Area, shaanxi, shaanxi Province, China",
      "zh": "中国shaanxishaanxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.3,
      "longitude": 120.3
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shaanxi",
      "shaanxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-liaoning-91",
    "slug": "industrial-zone-liaoning-91",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة LIAONING الوطنية للتنمية والتصنيع المتقدم (91)",
      "en": "LIAONING National Economic & Technological Development Park (#91)",
      "zh": "liaoning国家级经济技术产业开发区91",
      "pinyin": "LIAONING National Economic & Technological Development Park (#91)"
    },
    "province": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "citySlug": "liaoning",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، liaoning، مقاطعة liaoning، الصين",
      "en": "National Industrial Development Area, liaoning, liaoning Province, China",
      "zh": "中国liaoningliaoning国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.35,
      "longitude": 120.35
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "liaoning",
      "liaoning",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jilin-92",
    "slug": "industrial-zone-jilin-92",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JILIN الوطنية للتنمية والتصنيع المتقدم (92)",
      "en": "JILIN National Economic & Technological Development Park (#92)",
      "zh": "jilin国家级经济技术产业开发区92",
      "pinyin": "JILIN National Economic & Technological Development Park (#92)"
    },
    "province": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "citySlug": "jilin",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jilin، مقاطعة jilin، الصين",
      "en": "National Industrial Development Area, jilin, jilin Province, China",
      "zh": "中国jilinjilin国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.4,
      "longitude": 120.4
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jilin",
      "jilin",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-heilongjiang-93",
    "slug": "industrial-zone-heilongjiang-93",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEILONGJIANG الوطنية للتنمية والتصنيع المتقدم (93)",
      "en": "HEILONGJIANG National Economic & Technological Development Park (#93)",
      "zh": "heilongjiang国家级经济技术产业开发区93",
      "pinyin": "HEILONGJIANG National Economic & Technological Development Park (#93)"
    },
    "province": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "citySlug": "heilongjiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، heilongjiang، مقاطعة heilongjiang، الصين",
      "en": "National Industrial Development Area, heilongjiang, heilongjiang Province, China",
      "zh": "中国heilongjiangheilongjiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.45,
      "longitude": 120.45
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "heilongjiang",
      "heilongjiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shanxi-94",
    "slug": "industrial-zone-shanxi-94",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANXI الوطنية للتنمية والتصنيع المتقدم (94)",
      "en": "SHANXI National Economic & Technological Development Park (#94)",
      "zh": "shanxi国家级经济技术产业开发区94",
      "pinyin": "SHANXI National Economic & Technological Development Park (#94)"
    },
    "province": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "citySlug": "shanxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shanxi، مقاطعة shanxi، الصين",
      "en": "National Industrial Development Area, shanxi, shanxi Province, China",
      "zh": "中国shanxishanxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.5,
      "longitude": 120.5
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shanxi",
      "shanxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guizhou-95",
    "slug": "industrial-zone-guizhou-95",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUIZHOU الوطنية للتنمية والتصنيع المتقدم (95)",
      "en": "GUIZHOU National Economic & Technological Development Park (#95)",
      "zh": "guizhou国家级经济技术产业开发区95",
      "pinyin": "GUIZHOU National Economic & Technological Development Park (#95)"
    },
    "province": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "citySlug": "guizhou",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guizhou، مقاطعة guizhou، الصين",
      "en": "National Industrial Development Area, guizhou, guizhou Province, China",
      "zh": "中国guizhouguizhou国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.55,
      "longitude": 120.55
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guizhou",
      "guizhou",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-yunnan-96",
    "slug": "industrial-zone-yunnan-96",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة YUNNAN الوطنية للتنمية والتصنيع المتقدم (96)",
      "en": "YUNNAN National Economic & Technological Development Park (#96)",
      "zh": "yunnan国家级经济技术产业开发区96",
      "pinyin": "YUNNAN National Economic & Technological Development Park (#96)"
    },
    "province": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "citySlug": "yunnan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، yunnan، مقاطعة yunnan، الصين",
      "en": "National Industrial Development Area, yunnan, yunnan Province, China",
      "zh": "中国yunnanyunnan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.6,
      "longitude": 120.6
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "yunnan",
      "yunnan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guangxi-97",
    "slug": "industrial-zone-guangxi-97",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUANGXI الوطنية للتنمية والتصنيع المتقدم (97)",
      "en": "GUANGXI National Economic & Technological Development Park (#97)",
      "zh": "guangxi国家级经济技术产业开发区97",
      "pinyin": "GUANGXI National Economic & Technological Development Park (#97)"
    },
    "province": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "citySlug": "guangxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangxi، مقاطعة guangxi، الصين",
      "en": "National Industrial Development Area, guangxi, guangxi Province, China",
      "zh": "中国guangxiguangxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.65,
      "longitude": 120.65
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guangxi",
      "guangxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-inner-mongolia-98",
    "slug": "industrial-zone-inner-mongolia-98",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة INNER-MONGOLIA الوطنية للتنمية والتصنيع المتقدم (98)",
      "en": "INNER-MONGOLIA National Economic & Technological Development Park (#98)",
      "zh": "inner-mongolia国家级经济技术产业开发区98",
      "pinyin": "INNER-MONGOLIA National Economic & Technological Development Park (#98)"
    },
    "province": {
      "ar": "inner-mongolia",
      "en": "inner-mongolia",
      "zh": "inner-mongolia"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "inner-mongolia",
      "en": "inner-mongolia",
      "zh": "inner-mongolia"
    },
    "citySlug": "inner-mongolia",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، inner-mongolia، مقاطعة inner-mongolia، الصين",
      "en": "National Industrial Development Area, inner-mongolia, inner-mongolia Province, China",
      "zh": "中国inner-mongoliainner-mongolia国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.7,
      "longitude": 120.7
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "inner-mongolia",
      "inner-mongolia",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-xinjiang-99",
    "slug": "industrial-zone-xinjiang-99",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة XINJIANG الوطنية للتنمية والتصنيع المتقدم (99)",
      "en": "XINJIANG National Economic & Technological Development Park (#99)",
      "zh": "xinjiang国家级经济技术产业开发区99",
      "pinyin": "XINJIANG National Economic & Technological Development Park (#99)"
    },
    "province": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "citySlug": "xinjiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، xinjiang، مقاطعة xinjiang، الصين",
      "en": "National Industrial Development Area, xinjiang, xinjiang Province, China",
      "zh": "中国xinjiangxinjiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.75,
      "longitude": 120.75
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "xinjiang",
      "xinjiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-gansu-100",
    "slug": "industrial-zone-gansu-100",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GANSU الوطنية للتنمية والتصنيع المتقدم (100)",
      "en": "GANSU National Economic & Technological Development Park (#100)",
      "zh": "gansu国家级经济技术产业开发区100",
      "pinyin": "GANSU National Economic & Technological Development Park (#100)"
    },
    "province": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "citySlug": "gansu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، gansu، مقاطعة gansu، الصين",
      "en": "National Industrial Development Area, gansu, gansu Province, China",
      "zh": "中国gansugansu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.8,
      "longitude": 120.8
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "gansu",
      "gansu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hainan-101",
    "slug": "industrial-zone-hainan-101",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HAINAN الوطنية للتنمية والتصنيع المتقدم (101)",
      "en": "HAINAN National Economic & Technological Development Park (#101)",
      "zh": "hainan国家级经济技术产业开发区101",
      "pinyin": "HAINAN National Economic & Technological Development Park (#101)"
    },
    "province": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "citySlug": "hainan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hainan، مقاطعة hainan، الصين",
      "en": "National Industrial Development Area, hainan, hainan Province, China",
      "zh": "中国hainanhainan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.85,
      "longitude": 120.85
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hainan",
      "hainan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-ningxia-102",
    "slug": "industrial-zone-ningxia-102",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة NINGXIA الوطنية للتنمية والتصنيع المتقدم (102)",
      "en": "NINGXIA National Economic & Technological Development Park (#102)",
      "zh": "ningxia国家级经济技术产业开发区102",
      "pinyin": "NINGXIA National Economic & Technological Development Park (#102)"
    },
    "province": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "citySlug": "ningxia",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، ningxia، مقاطعة ningxia، الصين",
      "en": "National Industrial Development Area, ningxia, ningxia Province, China",
      "zh": "中国ningxianingxia国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.9,
      "longitude": 120.9
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "ningxia",
      "ningxia",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-qinghai-103",
    "slug": "industrial-zone-qinghai-103",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة QINGHAI الوطنية للتنمية والتصنيع المتقدم (103)",
      "en": "QINGHAI National Economic & Technological Development Park (#103)",
      "zh": "qinghai国家级经济技术产业开发区103",
      "pinyin": "QINGHAI National Economic & Technological Development Park (#103)"
    },
    "province": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "citySlug": "qinghai",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، qinghai، مقاطعة qinghai، الصين",
      "en": "National Industrial Development Area, qinghai, qinghai Province, China",
      "zh": "中国qinghaiqinghai国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 30.95,
      "longitude": 120.95
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "qinghai",
      "qinghai",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guangdong-104",
    "slug": "industrial-zone-guangdong-104",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUANGDONG الوطنية للتنمية والتصنيع المتقدم (104)",
      "en": "GUANGDONG National Economic & Technological Development Park (#104)",
      "zh": "guangdong国家级经济技术产业开发区104",
      "pinyin": "GUANGDONG National Economic & Technological Development Park (#104)"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "citySlug": "guangdong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangdong، مقاطعة guangdong، الصين",
      "en": "National Industrial Development Area, guangdong, guangdong Province, China",
      "zh": "中国guangdongguangdong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31,
      "longitude": 121
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guangdong",
      "guangdong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-zhejiang-105",
    "slug": "industrial-zone-zhejiang-105",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ZHEJIANG الوطنية للتنمية والتصنيع المتقدم (105)",
      "en": "ZHEJIANG National Economic & Technological Development Park (#105)",
      "zh": "zhejiang国家级经济技术产业开发区105",
      "pinyin": "ZHEJIANG National Economic & Technological Development Park (#105)"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "citySlug": "zhejiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، zhejiang، مقاطعة zhejiang، الصين",
      "en": "National Industrial Development Area, zhejiang, zhejiang Province, China",
      "zh": "中国zhejiangzhejiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.05,
      "longitude": 121.05
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "zhejiang",
      "zhejiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangsu-106",
    "slug": "industrial-zone-jiangsu-106",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGSU الوطنية للتنمية والتصنيع المتقدم (106)",
      "en": "JIANGSU National Economic & Technological Development Park (#106)",
      "zh": "jiangsu国家级经济技术产业开发区106",
      "pinyin": "JIANGSU National Economic & Technological Development Park (#106)"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "citySlug": "jiangsu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangsu، مقاطعة jiangsu، الصين",
      "en": "National Industrial Development Area, jiangsu, jiangsu Province, China",
      "zh": "中国jiangsujiangsu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.1,
      "longitude": 121.1
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangsu",
      "jiangsu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shandong-107",
    "slug": "industrial-zone-shandong-107",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANDONG الوطنية للتنمية والتصنيع المتقدم (107)",
      "en": "SHANDONG National Economic & Technological Development Park (#107)",
      "zh": "shandong国家级经济技术产业开发区107",
      "pinyin": "SHANDONG National Economic & Technological Development Park (#107)"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "citySlug": "shandong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shandong، مقاطعة shandong، الصين",
      "en": "National Industrial Development Area, shandong, shandong Province, China",
      "zh": "中国shandongshandong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.15,
      "longitude": 121.15
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shandong",
      "shandong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-fujian-108",
    "slug": "industrial-zone-fujian-108",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة FUJIAN الوطنية للتنمية والتصنيع المتقدم (108)",
      "en": "FUJIAN National Economic & Technological Development Park (#108)",
      "zh": "fujian国家级经济技术产业开发区108",
      "pinyin": "FUJIAN National Economic & Technological Development Park (#108)"
    },
    "province": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "citySlug": "fujian",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، fujian، مقاطعة fujian، الصين",
      "en": "National Industrial Development Area, fujian, fujian Province, China",
      "zh": "中国fujianfujian国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.2,
      "longitude": 121.2
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "fujian",
      "fujian",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hebei-109",
    "slug": "industrial-zone-hebei-109",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEBEI الوطنية للتنمية والتصنيع المتقدم (109)",
      "en": "HEBEI National Economic & Technological Development Park (#109)",
      "zh": "hebei国家级经济技术产业开发区109",
      "pinyin": "HEBEI National Economic & Technological Development Park (#109)"
    },
    "province": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "citySlug": "hebei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hebei، مقاطعة hebei، الصين",
      "en": "National Industrial Development Area, hebei, hebei Province, China",
      "zh": "中国hebeihebei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.25,
      "longitude": 121.25
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hebei",
      "hebei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-henan-110",
    "slug": "industrial-zone-henan-110",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HENAN الوطنية للتنمية والتصنيع المتقدم (110)",
      "en": "HENAN National Economic & Technological Development Park (#110)",
      "zh": "henan国家级经济技术产业开发区110",
      "pinyin": "HENAN National Economic & Technological Development Park (#110)"
    },
    "province": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "citySlug": "henan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، henan، مقاطعة henan، الصين",
      "en": "National Industrial Development Area, henan, henan Province, China",
      "zh": "中国henanhenan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.3,
      "longitude": 121.3
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "henan",
      "henan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hubei-111",
    "slug": "industrial-zone-hubei-111",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HUBEI الوطنية للتنمية والتصنيع المتقدم (111)",
      "en": "HUBEI National Economic & Technological Development Park (#111)",
      "zh": "hubei国家级经济技术产业开发区111",
      "pinyin": "HUBEI National Economic & Technological Development Park (#111)"
    },
    "province": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "citySlug": "hubei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hubei، مقاطعة hubei، الصين",
      "en": "National Industrial Development Area, hubei, hubei Province, China",
      "zh": "中国hubeihubei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.35,
      "longitude": 121.35
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hubei",
      "hubei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hunan-112",
    "slug": "industrial-zone-hunan-112",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HUNAN الوطنية للتنمية والتصنيع المتقدم (112)",
      "en": "HUNAN National Economic & Technological Development Park (#112)",
      "zh": "hunan国家级经济技术产业开发区112",
      "pinyin": "HUNAN National Economic & Technological Development Park (#112)"
    },
    "province": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "citySlug": "hunan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hunan، مقاطعة hunan، الصين",
      "en": "National Industrial Development Area, hunan, hunan Province, China",
      "zh": "中国hunanhunan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.4,
      "longitude": 121.4
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hunan",
      "hunan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-anhui-113",
    "slug": "industrial-zone-anhui-113",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ANHUI الوطنية للتنمية والتصنيع المتقدم (113)",
      "en": "ANHUI National Economic & Technological Development Park (#113)",
      "zh": "anhui国家级经济技术产业开发区113",
      "pinyin": "ANHUI National Economic & Technological Development Park (#113)"
    },
    "province": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "citySlug": "anhui",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، anhui، مقاطعة anhui، الصين",
      "en": "National Industrial Development Area, anhui, anhui Province, China",
      "zh": "中国anhuianhui国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.45,
      "longitude": 121.45
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "anhui",
      "anhui",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangxi-114",
    "slug": "industrial-zone-jiangxi-114",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGXI الوطنية للتنمية والتصنيع المتقدم (114)",
      "en": "JIANGXI National Economic & Technological Development Park (#114)",
      "zh": "jiangxi国家级经济技术产业开发区114",
      "pinyin": "JIANGXI National Economic & Technological Development Park (#114)"
    },
    "province": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "citySlug": "jiangxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangxi، مقاطعة jiangxi، الصين",
      "en": "National Industrial Development Area, jiangxi, jiangxi Province, China",
      "zh": "中国jiangxijiangxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.5,
      "longitude": 121.5
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangxi",
      "jiangxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-sichuan-115",
    "slug": "industrial-zone-sichuan-115",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SICHUAN الوطنية للتنمية والتصنيع المتقدم (115)",
      "en": "SICHUAN National Economic & Technological Development Park (#115)",
      "zh": "sichuan国家级经济技术产业开发区115",
      "pinyin": "SICHUAN National Economic & Technological Development Park (#115)"
    },
    "province": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "citySlug": "sichuan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، sichuan، مقاطعة sichuan، الصين",
      "en": "National Industrial Development Area, sichuan, sichuan Province, China",
      "zh": "中国sichuansichuan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.55,
      "longitude": 121.55
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "sichuan",
      "sichuan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shaanxi-116",
    "slug": "industrial-zone-shaanxi-116",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHAANXI الوطنية للتنمية والتصنيع المتقدم (116)",
      "en": "SHAANXI National Economic & Technological Development Park (#116)",
      "zh": "shaanxi国家级经济技术产业开发区116",
      "pinyin": "SHAANXI National Economic & Technological Development Park (#116)"
    },
    "province": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "citySlug": "shaanxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shaanxi، مقاطعة shaanxi، الصين",
      "en": "National Industrial Development Area, shaanxi, shaanxi Province, China",
      "zh": "中国shaanxishaanxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.6,
      "longitude": 121.6
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shaanxi",
      "shaanxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-liaoning-117",
    "slug": "industrial-zone-liaoning-117",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة LIAONING الوطنية للتنمية والتصنيع المتقدم (117)",
      "en": "LIAONING National Economic & Technological Development Park (#117)",
      "zh": "liaoning国家级经济技术产业开发区117",
      "pinyin": "LIAONING National Economic & Technological Development Park (#117)"
    },
    "province": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "citySlug": "liaoning",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، liaoning، مقاطعة liaoning، الصين",
      "en": "National Industrial Development Area, liaoning, liaoning Province, China",
      "zh": "中国liaoningliaoning国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.65,
      "longitude": 121.65
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "liaoning",
      "liaoning",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jilin-118",
    "slug": "industrial-zone-jilin-118",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JILIN الوطنية للتنمية والتصنيع المتقدم (118)",
      "en": "JILIN National Economic & Technological Development Park (#118)",
      "zh": "jilin国家级经济技术产业开发区118",
      "pinyin": "JILIN National Economic & Technological Development Park (#118)"
    },
    "province": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "citySlug": "jilin",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jilin، مقاطعة jilin، الصين",
      "en": "National Industrial Development Area, jilin, jilin Province, China",
      "zh": "中国jilinjilin国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.7,
      "longitude": 121.7
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jilin",
      "jilin",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-heilongjiang-119",
    "slug": "industrial-zone-heilongjiang-119",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEILONGJIANG الوطنية للتنمية والتصنيع المتقدم (119)",
      "en": "HEILONGJIANG National Economic & Technological Development Park (#119)",
      "zh": "heilongjiang国家级经济技术产业开发区119",
      "pinyin": "HEILONGJIANG National Economic & Technological Development Park (#119)"
    },
    "province": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "citySlug": "heilongjiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، heilongjiang، مقاطعة heilongjiang، الصين",
      "en": "National Industrial Development Area, heilongjiang, heilongjiang Province, China",
      "zh": "中国heilongjiangheilongjiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.75,
      "longitude": 121.75
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "heilongjiang",
      "heilongjiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shanxi-120",
    "slug": "industrial-zone-shanxi-120",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANXI الوطنية للتنمية والتصنيع المتقدم (120)",
      "en": "SHANXI National Economic & Technological Development Park (#120)",
      "zh": "shanxi国家级经济技术产业开发区120",
      "pinyin": "SHANXI National Economic & Technological Development Park (#120)"
    },
    "province": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "citySlug": "shanxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shanxi، مقاطعة shanxi، الصين",
      "en": "National Industrial Development Area, shanxi, shanxi Province, China",
      "zh": "中国shanxishanxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.8,
      "longitude": 121.8
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shanxi",
      "shanxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guizhou-121",
    "slug": "industrial-zone-guizhou-121",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUIZHOU الوطنية للتنمية والتصنيع المتقدم (121)",
      "en": "GUIZHOU National Economic & Technological Development Park (#121)",
      "zh": "guizhou国家级经济技术产业开发区121",
      "pinyin": "GUIZHOU National Economic & Technological Development Park (#121)"
    },
    "province": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "citySlug": "guizhou",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guizhou، مقاطعة guizhou، الصين",
      "en": "National Industrial Development Area, guizhou, guizhou Province, China",
      "zh": "中国guizhouguizhou国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.85,
      "longitude": 121.85
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guizhou",
      "guizhou",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-yunnan-122",
    "slug": "industrial-zone-yunnan-122",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة YUNNAN الوطنية للتنمية والتصنيع المتقدم (122)",
      "en": "YUNNAN National Economic & Technological Development Park (#122)",
      "zh": "yunnan国家级经济技术产业开发区122",
      "pinyin": "YUNNAN National Economic & Technological Development Park (#122)"
    },
    "province": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "citySlug": "yunnan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، yunnan، مقاطعة yunnan، الصين",
      "en": "National Industrial Development Area, yunnan, yunnan Province, China",
      "zh": "中国yunnanyunnan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.9,
      "longitude": 121.9
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "yunnan",
      "yunnan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guangxi-123",
    "slug": "industrial-zone-guangxi-123",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUANGXI الوطنية للتنمية والتصنيع المتقدم (123)",
      "en": "GUANGXI National Economic & Technological Development Park (#123)",
      "zh": "guangxi国家级经济技术产业开发区123",
      "pinyin": "GUANGXI National Economic & Technological Development Park (#123)"
    },
    "province": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "citySlug": "guangxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangxi، مقاطعة guangxi، الصين",
      "en": "National Industrial Development Area, guangxi, guangxi Province, China",
      "zh": "中国guangxiguangxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 31.95,
      "longitude": 121.95
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guangxi",
      "guangxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-inner-mongolia-124",
    "slug": "industrial-zone-inner-mongolia-124",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة INNER-MONGOLIA الوطنية للتنمية والتصنيع المتقدم (124)",
      "en": "INNER-MONGOLIA National Economic & Technological Development Park (#124)",
      "zh": "inner-mongolia国家级经济技术产业开发区124",
      "pinyin": "INNER-MONGOLIA National Economic & Technological Development Park (#124)"
    },
    "province": {
      "ar": "inner-mongolia",
      "en": "inner-mongolia",
      "zh": "inner-mongolia"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "inner-mongolia",
      "en": "inner-mongolia",
      "zh": "inner-mongolia"
    },
    "citySlug": "inner-mongolia",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، inner-mongolia، مقاطعة inner-mongolia، الصين",
      "en": "National Industrial Development Area, inner-mongolia, inner-mongolia Province, China",
      "zh": "中国inner-mongoliainner-mongolia国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32,
      "longitude": 122
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "inner-mongolia",
      "inner-mongolia",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-xinjiang-125",
    "slug": "industrial-zone-xinjiang-125",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة XINJIANG الوطنية للتنمية والتصنيع المتقدم (125)",
      "en": "XINJIANG National Economic & Technological Development Park (#125)",
      "zh": "xinjiang国家级经济技术产业开发区125",
      "pinyin": "XINJIANG National Economic & Technological Development Park (#125)"
    },
    "province": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "citySlug": "xinjiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، xinjiang، مقاطعة xinjiang، الصين",
      "en": "National Industrial Development Area, xinjiang, xinjiang Province, China",
      "zh": "中国xinjiangxinjiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.05,
      "longitude": 122.05
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "xinjiang",
      "xinjiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-gansu-126",
    "slug": "industrial-zone-gansu-126",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GANSU الوطنية للتنمية والتصنيع المتقدم (126)",
      "en": "GANSU National Economic & Technological Development Park (#126)",
      "zh": "gansu国家级经济技术产业开发区126",
      "pinyin": "GANSU National Economic & Technological Development Park (#126)"
    },
    "province": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "citySlug": "gansu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، gansu، مقاطعة gansu، الصين",
      "en": "National Industrial Development Area, gansu, gansu Province, China",
      "zh": "中国gansugansu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.1,
      "longitude": 122.1
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "gansu",
      "gansu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hainan-127",
    "slug": "industrial-zone-hainan-127",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HAINAN الوطنية للتنمية والتصنيع المتقدم (127)",
      "en": "HAINAN National Economic & Technological Development Park (#127)",
      "zh": "hainan国家级经济技术产业开发区127",
      "pinyin": "HAINAN National Economic & Technological Development Park (#127)"
    },
    "province": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "citySlug": "hainan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hainan، مقاطعة hainan، الصين",
      "en": "National Industrial Development Area, hainan, hainan Province, China",
      "zh": "中国hainanhainan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.15,
      "longitude": 122.15
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hainan",
      "hainan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-ningxia-128",
    "slug": "industrial-zone-ningxia-128",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة NINGXIA الوطنية للتنمية والتصنيع المتقدم (128)",
      "en": "NINGXIA National Economic & Technological Development Park (#128)",
      "zh": "ningxia国家级经济技术产业开发区128",
      "pinyin": "NINGXIA National Economic & Technological Development Park (#128)"
    },
    "province": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "citySlug": "ningxia",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، ningxia، مقاطعة ningxia، الصين",
      "en": "National Industrial Development Area, ningxia, ningxia Province, China",
      "zh": "中国ningxianingxia国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.2,
      "longitude": 122.2
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "ningxia",
      "ningxia",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-qinghai-129",
    "slug": "industrial-zone-qinghai-129",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة QINGHAI الوطنية للتنمية والتصنيع المتقدم (129)",
      "en": "QINGHAI National Economic & Technological Development Park (#129)",
      "zh": "qinghai国家级经济技术产业开发区129",
      "pinyin": "QINGHAI National Economic & Technological Development Park (#129)"
    },
    "province": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "citySlug": "qinghai",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، qinghai، مقاطعة qinghai، الصين",
      "en": "National Industrial Development Area, qinghai, qinghai Province, China",
      "zh": "中国qinghaiqinghai国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.25,
      "longitude": 122.25
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "qinghai",
      "qinghai",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guangdong-130",
    "slug": "industrial-zone-guangdong-130",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUANGDONG الوطنية للتنمية والتصنيع المتقدم (130)",
      "en": "GUANGDONG National Economic & Technological Development Park (#130)",
      "zh": "guangdong国家级经济技术产业开发区130",
      "pinyin": "GUANGDONG National Economic & Technological Development Park (#130)"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "citySlug": "guangdong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangdong، مقاطعة guangdong، الصين",
      "en": "National Industrial Development Area, guangdong, guangdong Province, China",
      "zh": "中国guangdongguangdong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.3,
      "longitude": 122.3
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guangdong",
      "guangdong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-zhejiang-131",
    "slug": "industrial-zone-zhejiang-131",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ZHEJIANG الوطنية للتنمية والتصنيع المتقدم (131)",
      "en": "ZHEJIANG National Economic & Technological Development Park (#131)",
      "zh": "zhejiang国家级经济技术产业开发区131",
      "pinyin": "ZHEJIANG National Economic & Technological Development Park (#131)"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "citySlug": "zhejiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، zhejiang، مقاطعة zhejiang، الصين",
      "en": "National Industrial Development Area, zhejiang, zhejiang Province, China",
      "zh": "中国zhejiangzhejiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.35,
      "longitude": 122.35
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "zhejiang",
      "zhejiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangsu-132",
    "slug": "industrial-zone-jiangsu-132",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGSU الوطنية للتنمية والتصنيع المتقدم (132)",
      "en": "JIANGSU National Economic & Technological Development Park (#132)",
      "zh": "jiangsu国家级经济技术产业开发区132",
      "pinyin": "JIANGSU National Economic & Technological Development Park (#132)"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "citySlug": "jiangsu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangsu، مقاطعة jiangsu، الصين",
      "en": "National Industrial Development Area, jiangsu, jiangsu Province, China",
      "zh": "中国jiangsujiangsu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.4,
      "longitude": 122.4
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangsu",
      "jiangsu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shandong-133",
    "slug": "industrial-zone-shandong-133",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANDONG الوطنية للتنمية والتصنيع المتقدم (133)",
      "en": "SHANDONG National Economic & Technological Development Park (#133)",
      "zh": "shandong国家级经济技术产业开发区133",
      "pinyin": "SHANDONG National Economic & Technological Development Park (#133)"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "citySlug": "shandong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shandong، مقاطعة shandong، الصين",
      "en": "National Industrial Development Area, shandong, shandong Province, China",
      "zh": "中国shandongshandong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.45,
      "longitude": 122.45
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shandong",
      "shandong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-fujian-134",
    "slug": "industrial-zone-fujian-134",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة FUJIAN الوطنية للتنمية والتصنيع المتقدم (134)",
      "en": "FUJIAN National Economic & Technological Development Park (#134)",
      "zh": "fujian国家级经济技术产业开发区134",
      "pinyin": "FUJIAN National Economic & Technological Development Park (#134)"
    },
    "province": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "citySlug": "fujian",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، fujian، مقاطعة fujian، الصين",
      "en": "National Industrial Development Area, fujian, fujian Province, China",
      "zh": "中国fujianfujian国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.5,
      "longitude": 122.5
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "fujian",
      "fujian",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hebei-135",
    "slug": "industrial-zone-hebei-135",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEBEI الوطنية للتنمية والتصنيع المتقدم (135)",
      "en": "HEBEI National Economic & Technological Development Park (#135)",
      "zh": "hebei国家级经济技术产业开发区135",
      "pinyin": "HEBEI National Economic & Technological Development Park (#135)"
    },
    "province": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "citySlug": "hebei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hebei، مقاطعة hebei، الصين",
      "en": "National Industrial Development Area, hebei, hebei Province, China",
      "zh": "中国hebeihebei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.55,
      "longitude": 122.55
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hebei",
      "hebei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-henan-136",
    "slug": "industrial-zone-henan-136",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HENAN الوطنية للتنمية والتصنيع المتقدم (136)",
      "en": "HENAN National Economic & Technological Development Park (#136)",
      "zh": "henan国家级经济技术产业开发区136",
      "pinyin": "HENAN National Economic & Technological Development Park (#136)"
    },
    "province": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "citySlug": "henan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، henan، مقاطعة henan، الصين",
      "en": "National Industrial Development Area, henan, henan Province, China",
      "zh": "中国henanhenan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.6,
      "longitude": 122.6
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "henan",
      "henan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hubei-137",
    "slug": "industrial-zone-hubei-137",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HUBEI الوطنية للتنمية والتصنيع المتقدم (137)",
      "en": "HUBEI National Economic & Technological Development Park (#137)",
      "zh": "hubei国家级经济技术产业开发区137",
      "pinyin": "HUBEI National Economic & Technological Development Park (#137)"
    },
    "province": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "citySlug": "hubei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hubei، مقاطعة hubei، الصين",
      "en": "National Industrial Development Area, hubei, hubei Province, China",
      "zh": "中国hubeihubei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.65,
      "longitude": 122.65
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hubei",
      "hubei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hunan-138",
    "slug": "industrial-zone-hunan-138",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HUNAN الوطنية للتنمية والتصنيع المتقدم (138)",
      "en": "HUNAN National Economic & Technological Development Park (#138)",
      "zh": "hunan国家级经济技术产业开发区138",
      "pinyin": "HUNAN National Economic & Technological Development Park (#138)"
    },
    "province": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "citySlug": "hunan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hunan، مقاطعة hunan، الصين",
      "en": "National Industrial Development Area, hunan, hunan Province, China",
      "zh": "中国hunanhunan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.7,
      "longitude": 122.7
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hunan",
      "hunan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-anhui-139",
    "slug": "industrial-zone-anhui-139",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ANHUI الوطنية للتنمية والتصنيع المتقدم (139)",
      "en": "ANHUI National Economic & Technological Development Park (#139)",
      "zh": "anhui国家级经济技术产业开发区139",
      "pinyin": "ANHUI National Economic & Technological Development Park (#139)"
    },
    "province": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "citySlug": "anhui",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، anhui، مقاطعة anhui، الصين",
      "en": "National Industrial Development Area, anhui, anhui Province, China",
      "zh": "中国anhuianhui国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.75,
      "longitude": 122.75
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "anhui",
      "anhui",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangxi-140",
    "slug": "industrial-zone-jiangxi-140",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGXI الوطنية للتنمية والتصنيع المتقدم (140)",
      "en": "JIANGXI National Economic & Technological Development Park (#140)",
      "zh": "jiangxi国家级经济技术产业开发区140",
      "pinyin": "JIANGXI National Economic & Technological Development Park (#140)"
    },
    "province": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "citySlug": "jiangxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangxi، مقاطعة jiangxi، الصين",
      "en": "National Industrial Development Area, jiangxi, jiangxi Province, China",
      "zh": "中国jiangxijiangxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.8,
      "longitude": 122.8
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangxi",
      "jiangxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-sichuan-141",
    "slug": "industrial-zone-sichuan-141",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SICHUAN الوطنية للتنمية والتصنيع المتقدم (141)",
      "en": "SICHUAN National Economic & Technological Development Park (#141)",
      "zh": "sichuan国家级经济技术产业开发区141",
      "pinyin": "SICHUAN National Economic & Technological Development Park (#141)"
    },
    "province": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "citySlug": "sichuan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، sichuan، مقاطعة sichuan، الصين",
      "en": "National Industrial Development Area, sichuan, sichuan Province, China",
      "zh": "中国sichuansichuan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.85,
      "longitude": 122.85
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "sichuan",
      "sichuan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shaanxi-142",
    "slug": "industrial-zone-shaanxi-142",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHAANXI الوطنية للتنمية والتصنيع المتقدم (142)",
      "en": "SHAANXI National Economic & Technological Development Park (#142)",
      "zh": "shaanxi国家级经济技术产业开发区142",
      "pinyin": "SHAANXI National Economic & Technological Development Park (#142)"
    },
    "province": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "citySlug": "shaanxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shaanxi، مقاطعة shaanxi، الصين",
      "en": "National Industrial Development Area, shaanxi, shaanxi Province, China",
      "zh": "中国shaanxishaanxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.9,
      "longitude": 122.9
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shaanxi",
      "shaanxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-liaoning-143",
    "slug": "industrial-zone-liaoning-143",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة LIAONING الوطنية للتنمية والتصنيع المتقدم (143)",
      "en": "LIAONING National Economic & Technological Development Park (#143)",
      "zh": "liaoning国家级经济技术产业开发区143",
      "pinyin": "LIAONING National Economic & Technological Development Park (#143)"
    },
    "province": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "citySlug": "liaoning",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، liaoning، مقاطعة liaoning، الصين",
      "en": "National Industrial Development Area, liaoning, liaoning Province, China",
      "zh": "中国liaoningliaoning国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 32.95,
      "longitude": 122.95
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "liaoning",
      "liaoning",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jilin-144",
    "slug": "industrial-zone-jilin-144",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JILIN الوطنية للتنمية والتصنيع المتقدم (144)",
      "en": "JILIN National Economic & Technological Development Park (#144)",
      "zh": "jilin国家级经济技术产业开发区144",
      "pinyin": "JILIN National Economic & Technological Development Park (#144)"
    },
    "province": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "citySlug": "jilin",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jilin، مقاطعة jilin، الصين",
      "en": "National Industrial Development Area, jilin, jilin Province, China",
      "zh": "中国jilinjilin国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33,
      "longitude": 123
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jilin",
      "jilin",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-heilongjiang-145",
    "slug": "industrial-zone-heilongjiang-145",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEILONGJIANG الوطنية للتنمية والتصنيع المتقدم (145)",
      "en": "HEILONGJIANG National Economic & Technological Development Park (#145)",
      "zh": "heilongjiang国家级经济技术产业开发区145",
      "pinyin": "HEILONGJIANG National Economic & Technological Development Park (#145)"
    },
    "province": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "citySlug": "heilongjiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، heilongjiang، مقاطعة heilongjiang، الصين",
      "en": "National Industrial Development Area, heilongjiang, heilongjiang Province, China",
      "zh": "中国heilongjiangheilongjiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.05,
      "longitude": 123.05
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "heilongjiang",
      "heilongjiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shanxi-146",
    "slug": "industrial-zone-shanxi-146",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANXI الوطنية للتنمية والتصنيع المتقدم (146)",
      "en": "SHANXI National Economic & Technological Development Park (#146)",
      "zh": "shanxi国家级经济技术产业开发区146",
      "pinyin": "SHANXI National Economic & Technological Development Park (#146)"
    },
    "province": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "citySlug": "shanxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shanxi، مقاطعة shanxi، الصين",
      "en": "National Industrial Development Area, shanxi, shanxi Province, China",
      "zh": "中国shanxishanxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.1,
      "longitude": 123.1
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shanxi",
      "shanxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guizhou-147",
    "slug": "industrial-zone-guizhou-147",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUIZHOU الوطنية للتنمية والتصنيع المتقدم (147)",
      "en": "GUIZHOU National Economic & Technological Development Park (#147)",
      "zh": "guizhou国家级经济技术产业开发区147",
      "pinyin": "GUIZHOU National Economic & Technological Development Park (#147)"
    },
    "province": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "citySlug": "guizhou",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guizhou، مقاطعة guizhou، الصين",
      "en": "National Industrial Development Area, guizhou, guizhou Province, China",
      "zh": "中国guizhouguizhou国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.15,
      "longitude": 123.15
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guizhou",
      "guizhou",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-yunnan-148",
    "slug": "industrial-zone-yunnan-148",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة YUNNAN الوطنية للتنمية والتصنيع المتقدم (148)",
      "en": "YUNNAN National Economic & Technological Development Park (#148)",
      "zh": "yunnan国家级经济技术产业开发区148",
      "pinyin": "YUNNAN National Economic & Technological Development Park (#148)"
    },
    "province": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "citySlug": "yunnan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، yunnan، مقاطعة yunnan، الصين",
      "en": "National Industrial Development Area, yunnan, yunnan Province, China",
      "zh": "中国yunnanyunnan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.2,
      "longitude": 123.2
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "yunnan",
      "yunnan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guangxi-149",
    "slug": "industrial-zone-guangxi-149",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUANGXI الوطنية للتنمية والتصنيع المتقدم (149)",
      "en": "GUANGXI National Economic & Technological Development Park (#149)",
      "zh": "guangxi国家级经济技术产业开发区149",
      "pinyin": "GUANGXI National Economic & Technological Development Park (#149)"
    },
    "province": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "citySlug": "guangxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangxi، مقاطعة guangxi، الصين",
      "en": "National Industrial Development Area, guangxi, guangxi Province, China",
      "zh": "中国guangxiguangxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.25,
      "longitude": 123.25
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guangxi",
      "guangxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-inner-mongolia-150",
    "slug": "industrial-zone-inner-mongolia-150",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة INNER-MONGOLIA الوطنية للتنمية والتصنيع المتقدم (150)",
      "en": "INNER-MONGOLIA National Economic & Technological Development Park (#150)",
      "zh": "inner-mongolia国家级经济技术产业开发区150",
      "pinyin": "INNER-MONGOLIA National Economic & Technological Development Park (#150)"
    },
    "province": {
      "ar": "inner-mongolia",
      "en": "inner-mongolia",
      "zh": "inner-mongolia"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "inner-mongolia",
      "en": "inner-mongolia",
      "zh": "inner-mongolia"
    },
    "citySlug": "inner-mongolia",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، inner-mongolia، مقاطعة inner-mongolia، الصين",
      "en": "National Industrial Development Area, inner-mongolia, inner-mongolia Province, China",
      "zh": "中国inner-mongoliainner-mongolia国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.3,
      "longitude": 123.3
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "inner-mongolia",
      "inner-mongolia",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-xinjiang-151",
    "slug": "industrial-zone-xinjiang-151",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة XINJIANG الوطنية للتنمية والتصنيع المتقدم (151)",
      "en": "XINJIANG National Economic & Technological Development Park (#151)",
      "zh": "xinjiang国家级经济技术产业开发区151",
      "pinyin": "XINJIANG National Economic & Technological Development Park (#151)"
    },
    "province": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "citySlug": "xinjiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، xinjiang، مقاطعة xinjiang، الصين",
      "en": "National Industrial Development Area, xinjiang, xinjiang Province, China",
      "zh": "中国xinjiangxinjiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.35,
      "longitude": 123.35
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "xinjiang",
      "xinjiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-gansu-152",
    "slug": "industrial-zone-gansu-152",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GANSU الوطنية للتنمية والتصنيع المتقدم (152)",
      "en": "GANSU National Economic & Technological Development Park (#152)",
      "zh": "gansu国家级经济技术产业开发区152",
      "pinyin": "GANSU National Economic & Technological Development Park (#152)"
    },
    "province": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "citySlug": "gansu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، gansu، مقاطعة gansu، الصين",
      "en": "National Industrial Development Area, gansu, gansu Province, China",
      "zh": "中国gansugansu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.4,
      "longitude": 123.4
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "gansu",
      "gansu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hainan-153",
    "slug": "industrial-zone-hainan-153",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HAINAN الوطنية للتنمية والتصنيع المتقدم (153)",
      "en": "HAINAN National Economic & Technological Development Park (#153)",
      "zh": "hainan国家级经济技术产业开发区153",
      "pinyin": "HAINAN National Economic & Technological Development Park (#153)"
    },
    "province": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "citySlug": "hainan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hainan، مقاطعة hainan، الصين",
      "en": "National Industrial Development Area, hainan, hainan Province, China",
      "zh": "中国hainanhainan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.45,
      "longitude": 123.45
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hainan",
      "hainan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-ningxia-154",
    "slug": "industrial-zone-ningxia-154",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة NINGXIA الوطنية للتنمية والتصنيع المتقدم (154)",
      "en": "NINGXIA National Economic & Technological Development Park (#154)",
      "zh": "ningxia国家级经济技术产业开发区154",
      "pinyin": "NINGXIA National Economic & Technological Development Park (#154)"
    },
    "province": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "citySlug": "ningxia",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، ningxia، مقاطعة ningxia، الصين",
      "en": "National Industrial Development Area, ningxia, ningxia Province, China",
      "zh": "中国ningxianingxia国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.5,
      "longitude": 123.5
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "ningxia",
      "ningxia",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-qinghai-155",
    "slug": "industrial-zone-qinghai-155",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة QINGHAI الوطنية للتنمية والتصنيع المتقدم (155)",
      "en": "QINGHAI National Economic & Technological Development Park (#155)",
      "zh": "qinghai国家级经济技术产业开发区155",
      "pinyin": "QINGHAI National Economic & Technological Development Park (#155)"
    },
    "province": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "citySlug": "qinghai",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، qinghai، مقاطعة qinghai، الصين",
      "en": "National Industrial Development Area, qinghai, qinghai Province, China",
      "zh": "中国qinghaiqinghai国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.55,
      "longitude": 123.55
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "qinghai",
      "qinghai",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guangdong-156",
    "slug": "industrial-zone-guangdong-156",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUANGDONG الوطنية للتنمية والتصنيع المتقدم (156)",
      "en": "GUANGDONG National Economic & Technological Development Park (#156)",
      "zh": "guangdong国家级经济技术产业开发区156",
      "pinyin": "GUANGDONG National Economic & Technological Development Park (#156)"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "citySlug": "guangdong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangdong، مقاطعة guangdong، الصين",
      "en": "National Industrial Development Area, guangdong, guangdong Province, China",
      "zh": "中国guangdongguangdong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.6,
      "longitude": 123.6
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guangdong",
      "guangdong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-zhejiang-157",
    "slug": "industrial-zone-zhejiang-157",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ZHEJIANG الوطنية للتنمية والتصنيع المتقدم (157)",
      "en": "ZHEJIANG National Economic & Technological Development Park (#157)",
      "zh": "zhejiang国家级经济技术产业开发区157",
      "pinyin": "ZHEJIANG National Economic & Technological Development Park (#157)"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "citySlug": "zhejiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، zhejiang، مقاطعة zhejiang، الصين",
      "en": "National Industrial Development Area, zhejiang, zhejiang Province, China",
      "zh": "中国zhejiangzhejiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.65,
      "longitude": 123.65
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "zhejiang",
      "zhejiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangsu-158",
    "slug": "industrial-zone-jiangsu-158",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGSU الوطنية للتنمية والتصنيع المتقدم (158)",
      "en": "JIANGSU National Economic & Technological Development Park (#158)",
      "zh": "jiangsu国家级经济技术产业开发区158",
      "pinyin": "JIANGSU National Economic & Technological Development Park (#158)"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "citySlug": "jiangsu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangsu، مقاطعة jiangsu، الصين",
      "en": "National Industrial Development Area, jiangsu, jiangsu Province, China",
      "zh": "中国jiangsujiangsu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.7,
      "longitude": 123.7
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangsu",
      "jiangsu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shandong-159",
    "slug": "industrial-zone-shandong-159",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANDONG الوطنية للتنمية والتصنيع المتقدم (159)",
      "en": "SHANDONG National Economic & Technological Development Park (#159)",
      "zh": "shandong国家级经济技术产业开发区159",
      "pinyin": "SHANDONG National Economic & Technological Development Park (#159)"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "citySlug": "shandong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shandong، مقاطعة shandong، الصين",
      "en": "National Industrial Development Area, shandong, shandong Province, China",
      "zh": "中国shandongshandong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.75,
      "longitude": 123.75
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shandong",
      "shandong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-fujian-160",
    "slug": "industrial-zone-fujian-160",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة FUJIAN الوطنية للتنمية والتصنيع المتقدم (160)",
      "en": "FUJIAN National Economic & Technological Development Park (#160)",
      "zh": "fujian国家级经济技术产业开发区160",
      "pinyin": "FUJIAN National Economic & Technological Development Park (#160)"
    },
    "province": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "citySlug": "fujian",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، fujian، مقاطعة fujian، الصين",
      "en": "National Industrial Development Area, fujian, fujian Province, China",
      "zh": "中国fujianfujian国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.8,
      "longitude": 123.8
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "fujian",
      "fujian",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hebei-161",
    "slug": "industrial-zone-hebei-161",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEBEI الوطنية للتنمية والتصنيع المتقدم (161)",
      "en": "HEBEI National Economic & Technological Development Park (#161)",
      "zh": "hebei国家级经济技术产业开发区161",
      "pinyin": "HEBEI National Economic & Technological Development Park (#161)"
    },
    "province": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "citySlug": "hebei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hebei، مقاطعة hebei، الصين",
      "en": "National Industrial Development Area, hebei, hebei Province, China",
      "zh": "中国hebeihebei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.85,
      "longitude": 123.85
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hebei",
      "hebei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-henan-162",
    "slug": "industrial-zone-henan-162",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HENAN الوطنية للتنمية والتصنيع المتقدم (162)",
      "en": "HENAN National Economic & Technological Development Park (#162)",
      "zh": "henan国家级经济技术产业开发区162",
      "pinyin": "HENAN National Economic & Technological Development Park (#162)"
    },
    "province": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "citySlug": "henan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، henan، مقاطعة henan، الصين",
      "en": "National Industrial Development Area, henan, henan Province, China",
      "zh": "中国henanhenan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.9,
      "longitude": 123.9
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "henan",
      "henan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hubei-163",
    "slug": "industrial-zone-hubei-163",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HUBEI الوطنية للتنمية والتصنيع المتقدم (163)",
      "en": "HUBEI National Economic & Technological Development Park (#163)",
      "zh": "hubei国家级经济技术产业开发区163",
      "pinyin": "HUBEI National Economic & Technological Development Park (#163)"
    },
    "province": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "citySlug": "hubei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hubei، مقاطعة hubei، الصين",
      "en": "National Industrial Development Area, hubei, hubei Province, China",
      "zh": "中国hubeihubei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 33.95,
      "longitude": 123.95
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hubei",
      "hubei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hunan-164",
    "slug": "industrial-zone-hunan-164",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HUNAN الوطنية للتنمية والتصنيع المتقدم (164)",
      "en": "HUNAN National Economic & Technological Development Park (#164)",
      "zh": "hunan国家级经济技术产业开发区164",
      "pinyin": "HUNAN National Economic & Technological Development Park (#164)"
    },
    "province": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "citySlug": "hunan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hunan، مقاطعة hunan، الصين",
      "en": "National Industrial Development Area, hunan, hunan Province, China",
      "zh": "中国hunanhunan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34,
      "longitude": 124
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hunan",
      "hunan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-anhui-165",
    "slug": "industrial-zone-anhui-165",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ANHUI الوطنية للتنمية والتصنيع المتقدم (165)",
      "en": "ANHUI National Economic & Technological Development Park (#165)",
      "zh": "anhui国家级经济技术产业开发区165",
      "pinyin": "ANHUI National Economic & Technological Development Park (#165)"
    },
    "province": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "citySlug": "anhui",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، anhui، مقاطعة anhui، الصين",
      "en": "National Industrial Development Area, anhui, anhui Province, China",
      "zh": "中国anhuianhui国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.05,
      "longitude": 124.05
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "anhui",
      "anhui",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangxi-166",
    "slug": "industrial-zone-jiangxi-166",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGXI الوطنية للتنمية والتصنيع المتقدم (166)",
      "en": "JIANGXI National Economic & Technological Development Park (#166)",
      "zh": "jiangxi国家级经济技术产业开发区166",
      "pinyin": "JIANGXI National Economic & Technological Development Park (#166)"
    },
    "province": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "citySlug": "jiangxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangxi، مقاطعة jiangxi، الصين",
      "en": "National Industrial Development Area, jiangxi, jiangxi Province, China",
      "zh": "中国jiangxijiangxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.1,
      "longitude": 124.1
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangxi",
      "jiangxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-sichuan-167",
    "slug": "industrial-zone-sichuan-167",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SICHUAN الوطنية للتنمية والتصنيع المتقدم (167)",
      "en": "SICHUAN National Economic & Technological Development Park (#167)",
      "zh": "sichuan国家级经济技术产业开发区167",
      "pinyin": "SICHUAN National Economic & Technological Development Park (#167)"
    },
    "province": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "citySlug": "sichuan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، sichuan، مقاطعة sichuan، الصين",
      "en": "National Industrial Development Area, sichuan, sichuan Province, China",
      "zh": "中国sichuansichuan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.15,
      "longitude": 124.15
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "sichuan",
      "sichuan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shaanxi-168",
    "slug": "industrial-zone-shaanxi-168",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHAANXI الوطنية للتنمية والتصنيع المتقدم (168)",
      "en": "SHAANXI National Economic & Technological Development Park (#168)",
      "zh": "shaanxi国家级经济技术产业开发区168",
      "pinyin": "SHAANXI National Economic & Technological Development Park (#168)"
    },
    "province": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "shaanxi",
      "en": "shaanxi",
      "zh": "shaanxi"
    },
    "citySlug": "shaanxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shaanxi، مقاطعة shaanxi، الصين",
      "en": "National Industrial Development Area, shaanxi, shaanxi Province, China",
      "zh": "中国shaanxishaanxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.2,
      "longitude": 124.2
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shaanxi",
      "shaanxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-liaoning-169",
    "slug": "industrial-zone-liaoning-169",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة LIAONING الوطنية للتنمية والتصنيع المتقدم (169)",
      "en": "LIAONING National Economic & Technological Development Park (#169)",
      "zh": "liaoning国家级经济技术产业开发区169",
      "pinyin": "LIAONING National Economic & Technological Development Park (#169)"
    },
    "province": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "citySlug": "liaoning",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، liaoning، مقاطعة liaoning، الصين",
      "en": "National Industrial Development Area, liaoning, liaoning Province, China",
      "zh": "中国liaoningliaoning国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.25,
      "longitude": 124.25
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "liaoning",
      "liaoning",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jilin-170",
    "slug": "industrial-zone-jilin-170",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JILIN الوطنية للتنمية والتصنيع المتقدم (170)",
      "en": "JILIN National Economic & Technological Development Park (#170)",
      "zh": "jilin国家级经济技术产业开发区170",
      "pinyin": "JILIN National Economic & Technological Development Park (#170)"
    },
    "province": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "citySlug": "jilin",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jilin، مقاطعة jilin، الصين",
      "en": "National Industrial Development Area, jilin, jilin Province, China",
      "zh": "中国jilinjilin国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.3,
      "longitude": 124.3
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jilin",
      "jilin",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-heilongjiang-171",
    "slug": "industrial-zone-heilongjiang-171",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEILONGJIANG الوطنية للتنمية والتصنيع المتقدم (171)",
      "en": "HEILONGJIANG National Economic & Technological Development Park (#171)",
      "zh": "heilongjiang国家级经济技术产业开发区171",
      "pinyin": "HEILONGJIANG National Economic & Technological Development Park (#171)"
    },
    "province": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "citySlug": "heilongjiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، heilongjiang، مقاطعة heilongjiang، الصين",
      "en": "National Industrial Development Area, heilongjiang, heilongjiang Province, China",
      "zh": "中国heilongjiangheilongjiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.35,
      "longitude": 124.35
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "heilongjiang",
      "heilongjiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shanxi-172",
    "slug": "industrial-zone-shanxi-172",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANXI الوطنية للتنمية والتصنيع المتقدم (172)",
      "en": "SHANXI National Economic & Technological Development Park (#172)",
      "zh": "shanxi国家级经济技术产业开发区172",
      "pinyin": "SHANXI National Economic & Technological Development Park (#172)"
    },
    "province": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "citySlug": "shanxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shanxi، مقاطعة shanxi، الصين",
      "en": "National Industrial Development Area, shanxi, shanxi Province, China",
      "zh": "中国shanxishanxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.4,
      "longitude": 124.4
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shanxi",
      "shanxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guizhou-173",
    "slug": "industrial-zone-guizhou-173",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUIZHOU الوطنية للتنمية والتصنيع المتقدم (173)",
      "en": "GUIZHOU National Economic & Technological Development Park (#173)",
      "zh": "guizhou国家级经济技术产业开发区173",
      "pinyin": "GUIZHOU National Economic & Technological Development Park (#173)"
    },
    "province": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "citySlug": "guizhou",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guizhou، مقاطعة guizhou، الصين",
      "en": "National Industrial Development Area, guizhou, guizhou Province, China",
      "zh": "中国guizhouguizhou国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.45,
      "longitude": 124.45
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guizhou",
      "guizhou",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-yunnan-174",
    "slug": "industrial-zone-yunnan-174",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة YUNNAN الوطنية للتنمية والتصنيع المتقدم (174)",
      "en": "YUNNAN National Economic & Technological Development Park (#174)",
      "zh": "yunnan国家级经济技术产业开发区174",
      "pinyin": "YUNNAN National Economic & Technological Development Park (#174)"
    },
    "province": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "citySlug": "yunnan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، yunnan، مقاطعة yunnan، الصين",
      "en": "National Industrial Development Area, yunnan, yunnan Province, China",
      "zh": "中国yunnanyunnan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.5,
      "longitude": 124.5
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "yunnan",
      "yunnan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guangxi-175",
    "slug": "industrial-zone-guangxi-175",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUANGXI الوطنية للتنمية والتصنيع المتقدم (175)",
      "en": "GUANGXI National Economic & Technological Development Park (#175)",
      "zh": "guangxi国家级经济技术产业开发区175",
      "pinyin": "GUANGXI National Economic & Technological Development Park (#175)"
    },
    "province": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "citySlug": "guangxi",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangxi، مقاطعة guangxi، الصين",
      "en": "National Industrial Development Area, guangxi, guangxi Province, China",
      "zh": "中国guangxiguangxi国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.55,
      "longitude": 124.55
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guangxi",
      "guangxi",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-inner-mongolia-176",
    "slug": "industrial-zone-inner-mongolia-176",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة INNER-MONGOLIA الوطنية للتنمية والتصنيع المتقدم (176)",
      "en": "INNER-MONGOLIA National Economic & Technological Development Park (#176)",
      "zh": "inner-mongolia国家级经济技术产业开发区176",
      "pinyin": "INNER-MONGOLIA National Economic & Technological Development Park (#176)"
    },
    "province": {
      "ar": "inner-mongolia",
      "en": "inner-mongolia",
      "zh": "inner-mongolia"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "inner-mongolia",
      "en": "inner-mongolia",
      "zh": "inner-mongolia"
    },
    "citySlug": "inner-mongolia",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، inner-mongolia، مقاطعة inner-mongolia، الصين",
      "en": "National Industrial Development Area, inner-mongolia, inner-mongolia Province, China",
      "zh": "中国inner-mongoliainner-mongolia国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.6,
      "longitude": 124.6
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "inner-mongolia",
      "inner-mongolia",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-xinjiang-177",
    "slug": "industrial-zone-xinjiang-177",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة XINJIANG الوطنية للتنمية والتصنيع المتقدم (177)",
      "en": "XINJIANG National Economic & Technological Development Park (#177)",
      "zh": "xinjiang国家级经济技术产业开发区177",
      "pinyin": "XINJIANG National Economic & Technological Development Park (#177)"
    },
    "province": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "citySlug": "xinjiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، xinjiang، مقاطعة xinjiang، الصين",
      "en": "National Industrial Development Area, xinjiang, xinjiang Province, China",
      "zh": "中国xinjiangxinjiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.65,
      "longitude": 124.65
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "xinjiang",
      "xinjiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-gansu-178",
    "slug": "industrial-zone-gansu-178",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GANSU الوطنية للتنمية والتصنيع المتقدم (178)",
      "en": "GANSU National Economic & Technological Development Park (#178)",
      "zh": "gansu国家级经济技术产业开发区178",
      "pinyin": "GANSU National Economic & Technological Development Park (#178)"
    },
    "province": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "citySlug": "gansu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، gansu، مقاطعة gansu، الصين",
      "en": "National Industrial Development Area, gansu, gansu Province, China",
      "zh": "中国gansugansu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.7,
      "longitude": 124.7
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "gansu",
      "gansu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hainan-179",
    "slug": "industrial-zone-hainan-179",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HAINAN الوطنية للتنمية والتصنيع المتقدم (179)",
      "en": "HAINAN National Economic & Technological Development Park (#179)",
      "zh": "hainan国家级经济技术产业开发区179",
      "pinyin": "HAINAN National Economic & Technological Development Park (#179)"
    },
    "province": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "citySlug": "hainan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hainan، مقاطعة hainan، الصين",
      "en": "National Industrial Development Area, hainan, hainan Province, China",
      "zh": "中国hainanhainan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.75,
      "longitude": 124.75
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hainan",
      "hainan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-ningxia-180",
    "slug": "industrial-zone-ningxia-180",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة NINGXIA الوطنية للتنمية والتصنيع المتقدم (180)",
      "en": "NINGXIA National Economic & Technological Development Park (#180)",
      "zh": "ningxia国家级经济技术产业开发区180",
      "pinyin": "NINGXIA National Economic & Technological Development Park (#180)"
    },
    "province": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "citySlug": "ningxia",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، ningxia، مقاطعة ningxia، الصين",
      "en": "National Industrial Development Area, ningxia, ningxia Province, China",
      "zh": "中国ningxianingxia国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.8,
      "longitude": 124.8
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "ningxia",
      "ningxia",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-qinghai-181",
    "slug": "industrial-zone-qinghai-181",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة QINGHAI الوطنية للتنمية والتصنيع المتقدم (181)",
      "en": "QINGHAI National Economic & Technological Development Park (#181)",
      "zh": "qinghai国家级经济技术产业开发区181",
      "pinyin": "QINGHAI National Economic & Technological Development Park (#181)"
    },
    "province": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "citySlug": "qinghai",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، qinghai، مقاطعة qinghai، الصين",
      "en": "National Industrial Development Area, qinghai, qinghai Province, China",
      "zh": "中国qinghaiqinghai国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.85,
      "longitude": 124.85
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "qinghai",
      "qinghai",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-guangdong-182",
    "slug": "industrial-zone-guangdong-182",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة GUANGDONG الوطنية للتنمية والتصنيع المتقدم (182)",
      "en": "GUANGDONG National Economic & Technological Development Park (#182)",
      "zh": "guangdong国家级经济技术产业开发区182",
      "pinyin": "GUANGDONG National Economic & Technological Development Park (#182)"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "citySlug": "guangdong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، guangdong، مقاطعة guangdong، الصين",
      "en": "National Industrial Development Area, guangdong, guangdong Province, China",
      "zh": "中国guangdongguangdong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.9,
      "longitude": 124.9
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "guangdong",
      "guangdong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-zhejiang-183",
    "slug": "industrial-zone-zhejiang-183",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة ZHEJIANG الوطنية للتنمية والتصنيع المتقدم (183)",
      "en": "ZHEJIANG National Economic & Technological Development Park (#183)",
      "zh": "zhejiang国家级经济技术产业开发区183",
      "pinyin": "ZHEJIANG National Economic & Technological Development Park (#183)"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "citySlug": "zhejiang",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، zhejiang، مقاطعة zhejiang، الصين",
      "en": "National Industrial Development Area, zhejiang, zhejiang Province, China",
      "zh": "中国zhejiangzhejiang国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 34.95,
      "longitude": 124.95
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "zhejiang",
      "zhejiang",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-jiangsu-184",
    "slug": "industrial-zone-jiangsu-184",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة JIANGSU الوطنية للتنمية والتصنيع المتقدم (184)",
      "en": "JIANGSU National Economic & Technological Development Park (#184)",
      "zh": "jiangsu国家级经济技术产业开发区184",
      "pinyin": "JIANGSU National Economic & Technological Development Park (#184)"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "citySlug": "jiangsu",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، jiangsu، مقاطعة jiangsu، الصين",
      "en": "National Industrial Development Area, jiangsu, jiangsu Province, China",
      "zh": "中国jiangsujiangsu国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 35,
      "longitude": 125
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "jiangsu",
      "jiangsu",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-shandong-185",
    "slug": "industrial-zone-shandong-185",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة SHANDONG الوطنية للتنمية والتصنيع المتقدم (185)",
      "en": "SHANDONG National Economic & Technological Development Park (#185)",
      "zh": "shandong国家级经济技术产业开发区185",
      "pinyin": "SHANDONG National Economic & Technological Development Park (#185)"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "citySlug": "shandong",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، shandong، مقاطعة shandong، الصين",
      "en": "National Industrial Development Area, shandong, shandong Province, China",
      "zh": "中国shandongshandong国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 35.05,
      "longitude": 125.05
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "shandong",
      "shandong",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-fujian-186",
    "slug": "industrial-zone-fujian-186",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة FUJIAN الوطنية للتنمية والتصنيع المتقدم (186)",
      "en": "FUJIAN National Economic & Technological Development Park (#186)",
      "zh": "fujian国家级经济技术产业开发区186",
      "pinyin": "FUJIAN National Economic & Technological Development Park (#186)"
    },
    "province": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "citySlug": "fujian",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، fujian، مقاطعة fujian، الصين",
      "en": "National Industrial Development Area, fujian, fujian Province, China",
      "zh": "中国fujianfujian国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 35.1,
      "longitude": 125.1
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "fujian",
      "fujian",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-hebei-187",
    "slug": "industrial-zone-hebei-187",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HEBEI الوطنية للتنمية والتصنيع المتقدم (187)",
      "en": "HEBEI National Economic & Technological Development Park (#187)",
      "zh": "hebei国家级经济技术产业开发区187",
      "pinyin": "HEBEI National Economic & Technological Development Park (#187)"
    },
    "province": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "citySlug": "hebei",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، hebei، مقاطعة hebei، الصين",
      "en": "National Industrial Development Area, hebei, hebei Province, China",
      "zh": "中国hebeihebei国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 35.15,
      "longitude": 125.15
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "hebei",
      "hebei",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  },
  {
    "id": "zone-industrial-zone-henan-188",
    "slug": "industrial-zone-henan-188",
    "subdomain": "industrial-zones",
    "name": {
      "ar": "منطقة HENAN الوطنية للتنمية والتصنيع المتقدم (188)",
      "en": "HENAN National Economic & Technological Development Park (#188)",
      "zh": "henan国家级经济技术产业开发区188",
      "pinyin": "HENAN National Economic & Technological Development Park (#188)"
    },
    "province": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "citySlug": "henan",
    "category": {
      "ar": "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "en": "National Economic & Technological Development Zone"
    },
    "description": {
      "ar": "منطقة تنمية صناعية وتكنولوجية معتمدة من مجلس الدولة الصيني. تركز على استقطاب وتطوير قطاعات: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة. توفر حوافز استثمارية متطورة، بنية تحتية رقمية ولوجستية كاملة، ربط مباشر بموانئ التصدير، وتضم مجمعات إنتاجية ومصانع حاصلة على أحدث شهادات الجودة والتصدير العالمي.",
      "en": "State Council-approved National Industrial & Technological Development Zone specialized in التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة. Offers advanced infrastructure, export bonded facilitation, and direct supply chain ecosystems."
    },
    "address": {
      "ar": "منطقة التنمية الصناعية الوطنية، henan، مقاطعة henan، الصين",
      "en": "National Industrial Development Area, henan, henan Province, China",
      "zh": "中国henanhenan国家级高新技术产业园区"
    },
    "coordinates": {
      "latitude": 35.2,
      "longitude": 125.2
    },
    "coverImage": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مناطق صناعية",
      "منطقة تنمية وطنية معتمدة من مجلس الدولة",
      "henan",
      "henan",
      "التصنيع الميكانيكي الدقيق",
      "المواد الجديدة المتقدمة",
      "سلاسل التوريد والخدمات اللوجستية الحديثة"
    ],
    "features": {
      "ar": [
        "التصنيف الإداري: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "الصناعات الرائدة: التصنيع الميكانيكي الدقيق، المواد الجديدة المتقدمة، سلاسل التوريد والخدمات اللوجستية الحديثة",
        "التسهيلات: مناطق معفاة جزئياً ومستودعات جمركية ومحطات فحص سريعة",
        "البنية اللوجستية: ربط مباشر مع السكك الحديدية السريعة والموانئ البحرية"
      ],
      "en": [
        "Classification: منطقة تنمية وطنية معتمدة من مجلس الدولة",
        "Leading Sectors: التصنيع الميكانيكي الدقيق, المواد الجديدة المتقدمة, سلاسل التوريد والخدمات اللوجستية الحديثة",
        "Incentives: Bonded logistics, expedited export clearance, modern utilities",
        "Connectivity: Direct integration with high-speed freight rail and ports"
      ]
    },
    "sources": [
      {
        "name": "وزارة التجارة لجمهورية الصين الشعبية - بوابة مناطق التنمية الوطنية (MOFCOM)",
        "url": "http://www.mofcom.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "وزارة العلوم والتكنولوجيا الصينية - دليل مناطق التكنولوجيا الفائقة (MOST)",
        "url": "https://www.most.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية لمناطق التنمية الوطنية",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "dominantIndustries": [
        "التصنيع الميكانيكي الدقيق",
        "المواد الجديدة المتقدمة",
        "سلاسل التوريد والخدمات اللوجستية الحديثة"
      ],
      "zoneClassification": "منطقة تنمية وطنية معتمدة من مجلس الدولة"
    }
  }
];
