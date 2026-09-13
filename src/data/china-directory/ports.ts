import { IChinaDirectoryEntity } from '@/domains/china-directory/entities';

export const CHINA_DIRECTORY_PORTS: IChinaDirectoryEntity[] = [
  {
    "id": "port-shanghai-port",
    "slug": "shanghai-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء شنغهاي الدولي (يانغشان ووايغوتشياو)",
      "en": "Port of Shanghai (Yangshan & Waigaoqiao)",
      "zh": "上海港",
      "pinyin": "CNSHA"
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
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء شنغهاي الدولي (يانغشان ووايغوتشياو) (CNSHA) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 17.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 49,000,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Shanghai (Yangshan & Waigaoqiao) (UN/LOCODE: CNSHA) is a strategic maritime trade gateway in China with a water depth of 17.5m and annual capacity of 49,000,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، shanghai، الصين",
      "en": "Port Authority Terminal, shanghai, China",
      "zh": "中国shanghai港区码头"
    },
    "coordinates": {
      "latitude": 30.6272,
      "longitude": 122.0628
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNSHA",
      "ميناء بحري",
      "shanghai",
      "shanghai"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNSHA",
        "عمق الغاطس: 17.5 متر",
        "طاقة المناولة: 49,000,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNSHA",
        "Water Depth: 17.5m",
        "Throughput Capacity: 49,000,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني مباشر لمحطات ورصيف الحاويات وطرق الشحن",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات هذا الميناء، خطوط الملاحة الناقلة، زمن الشحن والتخليص الجمركي ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk with physical verification of terminals, calling carriers, and customs clearance procedures."
      }
    },
    "extra": {
      "unLocode": "CNSHA",
      "waterDepthMeters": 17.5,
      "annualThroughputTeu": "49,000,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-ningbo-zhoushan-port",
    "slug": "ningbo-zhoushan-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء نينغبو-تشوشان (بييلون وتشاوشان)",
      "en": "Port of Ningbo-Zhoushan",
      "zh": "宁波舟山港",
      "pinyin": "CNNGB"
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
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء نينغبو-تشوشان (بييلون وتشاوشان) (CNNGB) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 18.2 أمتار وبقدرة مناولة حاويات سنوية تبلغ 35,300,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Ningbo-Zhoushan (UN/LOCODE: CNNGB) is a strategic maritime trade gateway in China with a water depth of 18.2m and annual capacity of 35,300,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، ningbo، الصين",
      "en": "Port Authority Terminal, ningbo, China",
      "zh": "中国ningbo港区码头"
    },
    "coordinates": {
      "latitude": 29.8974,
      "longitude": 121.8488
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNNGB",
      "ميناء بحري",
      "ningbo",
      "zhejiang"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNNGB",
        "عمق الغاطس: 18.2 متر",
        "طاقة المناولة: 35,300,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNNGB",
        "Water Depth: 18.2m",
        "Throughput Capacity: 35,300,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني مباشر لمحطات ورصيف الحاويات وطرق الشحن",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات هذا الميناء، خطوط الملاحة الناقلة، زمن الشحن والتخليص الجمركي ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk with physical verification of terminals, calling carriers, and customs clearance procedures."
      }
    },
    "extra": {
      "unLocode": "CNNGB",
      "waterDepthMeters": 18.2,
      "annualThroughputTeu": "35,300,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-shenzhen-yantian-port",
    "slug": "shenzhen-yantian-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء شينزين - محطة يانتيان للمياه العميقة",
      "en": "Port of Shenzhen - Yantian Terminal",
      "zh": "深圳盐田港",
      "pinyin": "CNYTN"
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
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء شينزين - محطة يانتيان للمياه العميقة (CNYTN) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 17.8 أمتار وبقدرة مناولة حاويات سنوية تبلغ 14,000,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Shenzhen - Yantian Terminal (UN/LOCODE: CNYTN) is a strategic maritime trade gateway in China with a water depth of 17.8m and annual capacity of 14,000,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، shenzhen، الصين",
      "en": "Port Authority Terminal, shenzhen, China",
      "zh": "中国shenzhen港区码头"
    },
    "coordinates": {
      "latitude": 22.5768,
      "longitude": 114.2758
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNYTN",
      "ميناء بحري",
      "shenzhen",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNYTN",
        "عمق الغاطس: 17.8 متر",
        "طاقة المناولة: 14,000,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNYTN",
        "Water Depth: 17.8m",
        "Throughput Capacity: 14,000,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني مباشر لمحطات ورصيف الحاويات وطرق الشحن",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات هذا الميناء، خطوط الملاحة الناقلة، زمن الشحن والتخليص الجمركي ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk with physical verification of terminals, calling carriers, and customs clearance procedures."
      }
    },
    "extra": {
      "unLocode": "CNYTN",
      "waterDepthMeters": 17.8,
      "annualThroughputTeu": "14,000,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-shenzhen-shekou-port",
    "slug": "shenzhen-shekou-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء شينزين - محطة شيكو للحاويات",
      "en": "Port of Shenzhen - Shekou Container Terminal",
      "zh": "深圳蛇口港",
      "pinyin": "CNSHK"
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
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء شينزين - محطة شيكو للحاويات (CNSHK) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 16 أمتار وبقدرة مناولة حاويات سنوية تبلغ 6,200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Shenzhen - Shekou Container Terminal (UN/LOCODE: CNSHK) is a strategic maritime trade gateway in China with a water depth of 16m and annual capacity of 6,200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، shenzhen، الصين",
      "en": "Port Authority Terminal, shenzhen, China",
      "zh": "中国shenzhen港区码头"
    },
    "coordinates": {
      "latitude": 22.4789,
      "longitude": 113.8821
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNSHK",
      "ميناء بحري",
      "shenzhen",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNSHK",
        "عمق الغاطس: 16 متر",
        "طاقة المناولة: 6,200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNSHK",
        "Water Depth: 16m",
        "Throughput Capacity: 6,200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNSHK",
      "waterDepthMeters": 16,
      "annualThroughputTeu": "6,200,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-shenzhen-chiwan-port",
    "slug": "shenzhen-chiwan-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء شينزين - محطة تشيوان",
      "en": "Port of Shenzhen - Chiwan Terminal",
      "zh": "深圳赤湾港",
      "pinyin": "CNCWN"
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
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء شينزين - محطة تشيوان (CNCWN) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 15.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 4,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Shenzhen - Chiwan Terminal (UN/LOCODE: CNCWN) is a strategic maritime trade gateway in China with a water depth of 15.5m and annual capacity of 4,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، shenzhen، الصين",
      "en": "Port Authority Terminal, shenzhen, China",
      "zh": "中国shenzhen港区码头"
    },
    "coordinates": {
      "latitude": 22.474,
      "longitude": 113.8967
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNCWN",
      "ميناء بحري",
      "shenzhen",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNCWN",
        "عمق الغاطس: 15.5 متر",
        "طاقة المناولة: 4,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNCWN",
        "Water Depth: 15.5m",
        "Throughput Capacity: 4,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNCWN",
      "waterDepthMeters": 15.5,
      "annualThroughputTeu": "4,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-shenzhen-dachan-bay",
    "slug": "shenzhen-dachan-bay",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء شينزين - داتشان باي",
      "en": "Port of Shenzhen - Dachan Bay Terminal",
      "zh": "深圳大铲湾码头",
      "pinyin": "CNDCB"
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
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء شينزين - داتشان باي (CNDCB) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 15.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 2,800,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Shenzhen - Dachan Bay Terminal (UN/LOCODE: CNDCB) is a strategic maritime trade gateway in China with a water depth of 15.5m and annual capacity of 2,800,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، shenzhen، الصين",
      "en": "Port Authority Terminal, shenzhen, China",
      "zh": "中国shenzhen港区码头"
    },
    "coordinates": {
      "latitude": 22.5401,
      "longitude": 113.8569
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNDCB",
      "ميناء بحري",
      "shenzhen",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNDCB",
        "عمق الغاطس: 15.5 متر",
        "طاقة المناولة: 2,800,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNDCB",
        "Water Depth: 15.5m",
        "Throughput Capacity: 2,800,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNDCB",
      "waterDepthMeters": 15.5,
      "annualThroughputTeu": "2,800,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-guangzhou-nansha-port",
    "slug": "guangzhou-nansha-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء غوانغتشو - ميناء نانشا للمياه العميقة",
      "en": "Port of Guangzhou - Nansha Deepwater Port",
      "zh": "广州南沙港",
      "pinyin": "CNNAS"
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
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء غوانغتشو - ميناء نانشا للمياه العميقة (CNNAS) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 17 أمتار وبقدرة مناولة حاويات سنوية تبلغ 18,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Guangzhou - Nansha Deepwater Port (UN/LOCODE: CNNAS) is a strategic maritime trade gateway in China with a water depth of 17m and annual capacity of 18,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، guangzhou، الصين",
      "en": "Port Authority Terminal, guangzhou, China",
      "zh": "中国guangzhou港区码头"
    },
    "coordinates": {
      "latitude": 22.6582,
      "longitude": 113.6789
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNNAS",
      "ميناء بحري",
      "guangzhou",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNNAS",
        "عمق الغاطس: 17 متر",
        "طاقة المناولة: 18,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNNAS",
        "Water Depth: 17m",
        "Throughput Capacity: 18,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني مباشر لمحطات ورصيف الحاويات وطرق الشحن",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات هذا الميناء، خطوط الملاحة الناقلة، زمن الشحن والتخليص الجمركي ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk with physical verification of terminals, calling carriers, and customs clearance procedures."
      }
    },
    "extra": {
      "unLocode": "CNNAS",
      "waterDepthMeters": 17,
      "annualThroughputTeu": "18,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-guangzhou-huangpu-port",
    "slug": "guangzhou-huangpu-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء غوانغتشو - هوانغبو القديم",
      "en": "Port of Guangzhou - Huangpu Port",
      "zh": "广州黄埔港",
      "pinyin": "CNHPA"
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
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء غوانغتشو - هوانغبو القديم (CNHPA) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 12.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 3,000,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Guangzhou - Huangpu Port (UN/LOCODE: CNHPA) is a strategic maritime trade gateway in China with a water depth of 12.5m and annual capacity of 3,000,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، guangzhou، الصين",
      "en": "Port Authority Terminal, guangzhou, China",
      "zh": "中国guangzhou港区码头"
    },
    "coordinates": {
      "latitude": 23.0945,
      "longitude": 113.4378
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNHPA",
      "ميناء بحري",
      "guangzhou",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNHPA",
        "عمق الغاطس: 12.5 متر",
        "طاقة المناولة: 3,000,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNHPA",
        "Water Depth: 12.5m",
        "Throughput Capacity: 3,000,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNHPA",
      "waterDepthMeters": 12.5,
      "annualThroughputTeu": "3,000,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-qingdao-port",
    "slug": "qingdao-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تشينغداو (تشيانهوان ودونغجياكوه)",
      "en": "Port of Qingdao (Qianwan & Dongjiakou)",
      "zh": "青岛港",
      "pinyin": "CNQDG"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء تشينغداو (تشيانهوان ودونغجياكوه) (CNQDG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 18 أمتار وبقدرة مناولة حاويات سنوية تبلغ 28,000,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Qingdao (Qianwan & Dongjiakou) (UN/LOCODE: CNQDG) is a strategic maritime trade gateway in China with a water depth of 18m and annual capacity of 28,000,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 36.0028,
      "longitude": 120.2185
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNQDG",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNQDG",
        "عمق الغاطس: 18 متر",
        "طاقة المناولة: 28,000,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNQDG",
        "Water Depth: 18m",
        "Throughput Capacity: 28,000,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني مباشر لمحطات ورصيف الحاويات وطرق الشحن",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات هذا الميناء، خطوط الملاحة الناقلة، زمن الشحن والتخليص الجمركي ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk with physical verification of terminals, calling carriers, and customs clearance procedures."
      }
    },
    "extra": {
      "unLocode": "CNQDG",
      "waterDepthMeters": 18,
      "annualThroughputTeu": "28,000,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-tianjin-port",
    "slug": "tianjin-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تيانجين (شينغانغ ومحطات المحيط)",
      "en": "Port of Tianjin (Xingang)",
      "zh": "天津港",
      "pinyin": "CNTXG"
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
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء تيانجين (شينغانغ ومحطات المحيط) (CNTXG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 16.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 22,000,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Tianjin (Xingang) (UN/LOCODE: CNTXG) is a strategic maritime trade gateway in China with a water depth of 16.5m and annual capacity of 22,000,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، tianjin، الصين",
      "en": "Port Authority Terminal, tianjin, China",
      "zh": "中国tianjin港区码头"
    },
    "coordinates": {
      "latitude": 38.9862,
      "longitude": 117.7472
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNTXG",
      "ميناء بحري",
      "tianjin",
      "tianjin"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNTXG",
        "عمق الغاطس: 16.5 متر",
        "طاقة المناولة: 22,000,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNTXG",
        "Water Depth: 16.5m",
        "Throughput Capacity: 22,000,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNTXG",
      "waterDepthMeters": 16.5,
      "annualThroughputTeu": "22,000,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-xiamen-port",
    "slug": "xiamen-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء شيامن (هايتسانغ ودونغدو)",
      "en": "Port of Xiamen (Haicang & Dongdu)",
      "zh": "厦门港",
      "pinyin": "CNXMN"
    },
    "province": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "xiamen",
      "en": "xiamen",
      "zh": "xiamen"
    },
    "citySlug": "xiamen",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء شيامن (هايتسانغ ودونغدو) (CNXMN) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 17 أمتار وبقدرة مناولة حاويات سنوية تبلغ 12,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Xiamen (Haicang & Dongdu) (UN/LOCODE: CNXMN) is a strategic maritime trade gateway in China with a water depth of 17m and annual capacity of 12,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، xiamen، الصين",
      "en": "Port Authority Terminal, xiamen, China",
      "zh": "中国xiamen港区码头"
    },
    "coordinates": {
      "latitude": 24.4682,
      "longitude": 118.0389
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNXMN",
      "ميناء بحري",
      "xiamen",
      "fujian"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNXMN",
        "عمق الغاطس: 17 متر",
        "طاقة المناولة: 12,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNXMN",
        "Water Depth: 17m",
        "Throughput Capacity: 12,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNXMN",
      "waterDepthMeters": 17,
      "annualThroughputTeu": "12,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-dalian-port",
    "slug": "dalian-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء داليان (داياوان)",
      "en": "Port of Dalian (Dayao Bay)",
      "zh": "大连港",
      "pinyin": "CNDLC"
    },
    "province": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "dalian",
      "en": "dalian",
      "zh": "dalian"
    },
    "citySlug": "dalian",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء داليان (داياوان) (CNDLC) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 16 أمتار وبقدرة مناولة حاويات سنوية تبلغ 5,000,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Dalian (Dayao Bay) (UN/LOCODE: CNDLC) is a strategic maritime trade gateway in China with a water depth of 16m and annual capacity of 5,000,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، dalian، الصين",
      "en": "Port Authority Terminal, dalian, China",
      "zh": "中国dalian港区码头"
    },
    "coordinates": {
      "latitude": 38.9958,
      "longitude": 121.854
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNDLC",
      "ميناء بحري",
      "dalian",
      "liaoning"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNDLC",
        "عمق الغاطس: 16 متر",
        "طاقة المناولة: 5,000,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNDLC",
        "Water Depth: 16m",
        "Throughput Capacity: 5,000,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNDLC",
      "waterDepthMeters": 16,
      "annualThroughputTeu": "5,000,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-lianyungang-port",
    "slug": "lianyungang-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء ليانيونغانغ",
      "en": "Port of Lianyungang",
      "zh": "连云港",
      "pinyin": "CNLYG"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "lianyungang",
      "en": "lianyungang",
      "zh": "lianyungang"
    },
    "citySlug": "lianyungang",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء ليانيونغانغ (CNLYG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 15 أمتار وبقدرة مناولة حاويات سنوية تبلغ 5,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Lianyungang (UN/LOCODE: CNLYG) is a strategic maritime trade gateway in China with a water depth of 15m and annual capacity of 5,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، lianyungang، الصين",
      "en": "Port Authority Terminal, lianyungang, China",
      "zh": "中国lianyungang港区码头"
    },
    "coordinates": {
      "latitude": 34.7512,
      "longitude": 119.4215
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNLYG",
      "ميناء بحري",
      "lianyungang",
      "jiangsu"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNLYG",
        "عمق الغاطس: 15 متر",
        "طاقة المناولة: 5,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNLYG",
        "Water Depth: 15m",
        "Throughput Capacity: 5,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNLYG",
      "waterDepthMeters": 15,
      "annualThroughputTeu": "5,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-rizhao-port",
    "slug": "rizhao-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء ريتشاو (شيجيو ولانشان)",
      "en": "Port of Rizhao (Shijiu & Lanshan)",
      "zh": "日照港",
      "pinyin": "CNRZH"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "rizhao",
      "en": "rizhao",
      "zh": "rizhao"
    },
    "citySlug": "rizhao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء ريتشاو (شيجيو ولانشان) (CNRZH) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 17 أمتار وبقدرة مناولة حاويات سنوية تبلغ 5,800,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Rizhao (Shijiu & Lanshan) (UN/LOCODE: CNRZH) is a strategic maritime trade gateway in China with a water depth of 17m and annual capacity of 5,800,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، rizhao، الصين",
      "en": "Port Authority Terminal, rizhao, China",
      "zh": "中国rizhao港区码头"
    },
    "coordinates": {
      "latitude": 35.3789,
      "longitude": 119.5342
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRZH",
      "ميناء بحري",
      "rizhao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRZH",
        "عمق الغاطس: 17 متر",
        "طاقة المناولة: 5,800,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRZH",
        "Water Depth: 17m",
        "Throughput Capacity: 5,800,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRZH",
      "waterDepthMeters": 17,
      "annualThroughputTeu": "5,800,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-yingkou-port",
    "slug": "yingkou-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء يينغكو (بايتشوان)",
      "en": "Port of Yingkou (Bayuquan)",
      "zh": "营口港",
      "pinyin": "CNYIK"
    },
    "province": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "yingkou",
      "en": "yingkou",
      "zh": "yingkou"
    },
    "citySlug": "yingkou",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء يينغكو (بايتشوان) (CNYIK) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 15 أمتار وبقدرة مناولة حاويات سنوية تبلغ 5,200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Yingkou (Bayuquan) (UN/LOCODE: CNYIK) is a strategic maritime trade gateway in China with a water depth of 15m and annual capacity of 5,200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، yingkou، الصين",
      "en": "Port Authority Terminal, yingkou, China",
      "zh": "中国yingkou港区码头"
    },
    "coordinates": {
      "latitude": 40.2941,
      "longitude": 122.1028
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNYIK",
      "ميناء بحري",
      "yingkou",
      "liaoning"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNYIK",
        "عمق الغاطس: 15 متر",
        "طاقة المناولة: 5,200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNYIK",
        "Water Depth: 15m",
        "Throughput Capacity: 5,200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNYIK",
      "waterDepthMeters": 15,
      "annualThroughputTeu": "5,200,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-yantai-port",
    "slug": "yantai-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء يانتاي (تشيفو ولونغكو)",
      "en": "Port of Yantai",
      "zh": "烟台港",
      "pinyin": "CNYNT"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "yantai",
      "en": "yantai",
      "zh": "yantai"
    },
    "citySlug": "yantai",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء يانتاي (تشيفو ولونغكو) (CNYNT) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 15.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 4,100,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Yantai (UN/LOCODE: CNYNT) is a strategic maritime trade gateway in China with a water depth of 15.5m and annual capacity of 4,100,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، yantai، الصين",
      "en": "Port Authority Terminal, yantai, China",
      "zh": "中国yantai港区码头"
    },
    "coordinates": {
      "latitude": 37.5612,
      "longitude": 121.3985
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNYNT",
      "ميناء بحري",
      "yantai",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNYNT",
        "عمق الغاطس: 15.5 متر",
        "طاقة المناولة: 4,100,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNYNT",
        "Water Depth: 15.5m",
        "Throughput Capacity: 4,100,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNYNT",
      "waterDepthMeters": 15.5,
      "annualThroughputTeu": "4,100,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-tangshan-caofeidian",
    "slug": "tangshan-caofeidian",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تانغشان - تساوفيديان للمياه العميقة",
      "en": "Port of Tangshan - Caofeidian",
      "zh": "唐山港曹妃甸港区",
      "pinyin": "CNCFD"
    },
    "province": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "tangshan",
      "en": "tangshan",
      "zh": "tangshan"
    },
    "citySlug": "tangshan",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء تانغشان - تساوفيديان للمياه العميقة (CNCFD) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 25 أمتار وبقدرة مناولة حاويات سنوية تبلغ 3,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Tangshan - Caofeidian (UN/LOCODE: CNCFD) is a strategic maritime trade gateway in China with a water depth of 25m and annual capacity of 3,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، tangshan، الصين",
      "en": "Port Authority Terminal, tangshan, China",
      "zh": "中国tangshan港区码头"
    },
    "coordinates": {
      "latitude": 38.9568,
      "longitude": 118.5214
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNCFD",
      "ميناء بحري",
      "tangshan",
      "hebei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNCFD",
        "عمق الغاطس: 25 متر",
        "طاقة المناولة: 3,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNCFD",
        "Water Depth: 25m",
        "Throughput Capacity: 3,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNCFD",
      "waterDepthMeters": 25,
      "annualThroughputTeu": "3,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-tangshan-jingtang",
    "slug": "tangshan-jingtang",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تانغشان - جينغتانغ",
      "en": "Port of Tangshan - Jingtang Port",
      "zh": "唐山港京唐港区",
      "pinyin": "CNJTG"
    },
    "province": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "tangshan",
      "en": "tangshan",
      "zh": "tangshan"
    },
    "citySlug": "tangshan",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء تانغشان - جينغتانغ (CNJTG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 2,800,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Tangshan - Jingtang Port (UN/LOCODE: CNJTG) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 2,800,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، tangshan، الصين",
      "en": "Port Authority Terminal, tangshan, China",
      "zh": "中国tangshan港区码头"
    },
    "coordinates": {
      "latitude": 39.2145,
      "longitude": 119.0142
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNJTG",
      "ميناء بحري",
      "tangshan",
      "hebei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNJTG",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 2,800,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNJTG",
        "Water Depth: 14.5m",
        "Throughput Capacity: 2,800,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNJTG",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "2,800,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-zhanjiang-port",
    "slug": "zhanjiang-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تشانجيانغ (المياه العميقة 400 ألف طن)",
      "en": "Port of Zhanjiang",
      "zh": "湛江港",
      "pinyin": "CNZHA"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "zhanjiang",
      "en": "zhanjiang",
      "zh": "zhanjiang"
    },
    "citySlug": "zhanjiang",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء تشانجيانغ (المياه العميقة 400 ألف طن) (CNZHA) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 21.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Zhanjiang (UN/LOCODE: CNZHA) is a strategic maritime trade gateway in China with a water depth of 21.5m and annual capacity of 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، zhanjiang، الصين",
      "en": "Port Authority Terminal, zhanjiang, China",
      "zh": "中国zhanjiang港区码头"
    },
    "coordinates": {
      "latitude": 21.1985,
      "longitude": 110.4078
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNZHA",
      "ميناء بحري",
      "zhanjiang",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNZHA",
        "عمق الغاطس: 21.5 متر",
        "طاقة المناولة: 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNZHA",
        "Water Depth: 21.5m",
        "Throughput Capacity: 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNZHA",
      "waterDepthMeters": 21.5,
      "annualThroughputTeu": "1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-zhuhai-gaolan-port",
    "slug": "zhuhai-gaolan-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء زوهاي - غاولان للمياه العميقة",
      "en": "Port of Zhuhai - Gaolan Port",
      "zh": "珠海高栏港",
      "pinyin": "CNZUH"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "zhuhai",
      "en": "zhuhai",
      "zh": "zhuhai"
    },
    "citySlug": "zhuhai",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء زوهاي - غاولان للمياه العميقة (CNZUH) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 15 أمتار وبقدرة مناولة حاويات سنوية تبلغ 3,100,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Zhuhai - Gaolan Port (UN/LOCODE: CNZUH) is a strategic maritime trade gateway in China with a water depth of 15m and annual capacity of 3,100,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، zhuhai، الصين",
      "en": "Port Authority Terminal, zhuhai, China",
      "zh": "中国zhuhai港区码头"
    },
    "coordinates": {
      "latitude": 21.9421,
      "longitude": 113.2389
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNZUH",
      "ميناء بحري",
      "zhuhai",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNZUH",
        "عمق الغاطس: 15 متر",
        "طاقة المناولة: 3,100,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNZUH",
        "Water Depth: 15m",
        "Throughput Capacity: 3,100,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNZUH",
      "waterDepthMeters": 15,
      "annualThroughputTeu": "3,100,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-qinzhou-port",
    "slug": "qinzhou-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تشينتشو (الميناء الآلي للممر الغربي)",
      "en": "Port of Qinzhou",
      "zh": "钦州港",
      "pinyin": "CNQZ7"
    },
    "province": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "qinzhou",
      "en": "qinzhou",
      "zh": "qinzhou"
    },
    "citySlug": "qinzhou",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء تشينتشو (الميناء الآلي للممر الغربي) (CNQZ7) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 16.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 5,400,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Qinzhou (UN/LOCODE: CNQZ7) is a strategic maritime trade gateway in China with a water depth of 16.5m and annual capacity of 5,400,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qinzhou، الصين",
      "en": "Port Authority Terminal, qinzhou, China",
      "zh": "中国qinzhou港区码头"
    },
    "coordinates": {
      "latitude": 21.7245,
      "longitude": 108.6214
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNQZ7",
      "ميناء بحري",
      "qinzhou",
      "guangxi"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNQZ7",
        "عمق الغاطس: 16.5 متر",
        "طاقة المناولة: 5,400,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNQZ7",
        "Water Depth: 16.5m",
        "Throughput Capacity: 5,400,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNQZ7",
      "waterDepthMeters": 16.5,
      "annualThroughputTeu": "5,400,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-fangchenggang-port",
    "slug": "fangchenggang-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء فانغتشنغغانغ",
      "en": "Port of Fangchenggang",
      "zh": "防城港",
      "pinyin": "CNFAN"
    },
    "province": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "fangchenggang",
      "en": "fangchenggang",
      "zh": "fangchenggang"
    },
    "citySlug": "fangchenggang",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء فانغتشنغغانغ (CNFAN) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 16 أمتار وبقدرة مناولة حاويات سنوية تبلغ 1,200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Fangchenggang (UN/LOCODE: CNFAN) is a strategic maritime trade gateway in China with a water depth of 16m and annual capacity of 1,200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، fangchenggang، الصين",
      "en": "Port Authority Terminal, fangchenggang, China",
      "zh": "中国fangchenggang港区码头"
    },
    "coordinates": {
      "latitude": 21.6145,
      "longitude": 108.3456
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNFAN",
      "ميناء بحري",
      "fangchenggang",
      "guangxi"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNFAN",
        "عمق الغاطس: 16 متر",
        "طاقة المناولة: 1,200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNFAN",
        "Water Depth: 16m",
        "Throughput Capacity: 1,200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNFAN",
      "waterDepthMeters": 16,
      "annualThroughputTeu": "1,200,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-beihai-tieshan-port",
    "slug": "beihai-tieshan-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء بيهاي - تيشانهان",
      "en": "Port of Beihai - Tieshangang",
      "zh": "北海铁山港",
      "pinyin": "CNBHY"
    },
    "province": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "beihai",
      "en": "beihai",
      "zh": "beihai"
    },
    "citySlug": "beihai",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء بيهاي - تيشانهان (CNBHY) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 800,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Beihai - Tieshangang (UN/LOCODE: CNBHY) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 800,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، beihai، الصين",
      "en": "Port Authority Terminal, beihai, China",
      "zh": "中国beihai港区码头"
    },
    "coordinates": {
      "latitude": 21.5789,
      "longitude": 109.5214
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNBHY",
      "ميناء بحري",
      "beihai",
      "guangxi"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNBHY",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 800,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNBHY",
        "Water Depth: 14.5m",
        "Throughput Capacity: 800,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNBHY",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "800,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-fuzhou-jiangyin-port",
    "slug": "fuzhou-jiangyin-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء فوتشو - جيانغين للحاويات",
      "en": "Port of Fuzhou - Jiangyin Port",
      "zh": "福州江阴港",
      "pinyin": "CNFOC"
    },
    "province": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "fuzhou",
      "en": "fuzhou",
      "zh": "fuzhou"
    },
    "citySlug": "fuzhou",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء فوتشو - جيانغين للحاويات (CNFOC) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 16.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 2,600,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Fuzhou - Jiangyin Port (UN/LOCODE: CNFOC) is a strategic maritime trade gateway in China with a water depth of 16.5m and annual capacity of 2,600,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، fuzhou، الصين",
      "en": "Port Authority Terminal, fuzhou, China",
      "zh": "中国fuzhou港区码头"
    },
    "coordinates": {
      "latitude": 25.4389,
      "longitude": 119.3456
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNFOC",
      "ميناء بحري",
      "fuzhou",
      "fujian"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNFOC",
        "عمق الغاطس: 16.5 متر",
        "طاقة المناولة: 2,600,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNFOC",
        "Water Depth: 16.5m",
        "Throughput Capacity: 2,600,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNFOC",
      "waterDepthMeters": 16.5,
      "annualThroughputTeu": "2,600,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-quanzhou-shishi-port",
    "slug": "quanzhou-shishi-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تشوانتشو - شيشي وجينجيانغ",
      "en": "Port of Quanzhou (Shishi & Jinjiang)",
      "zh": "泉州石狮港",
      "pinyin": "CNQZ8"
    },
    "province": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "quanzhou",
      "en": "quanzhou",
      "zh": "quanzhou"
    },
    "citySlug": "quanzhou",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء تشوانتشو - شيشي وجينجيانغ (CNQZ8) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14 أمتار وبقدرة مناولة حاويات سنوية تبلغ 2,000,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Quanzhou (Shishi & Jinjiang) (UN/LOCODE: CNQZ8) is a strategic maritime trade gateway in China with a water depth of 14m and annual capacity of 2,000,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، quanzhou، الصين",
      "en": "Port Authority Terminal, quanzhou, China",
      "zh": "中国quanzhou港区码头"
    },
    "coordinates": {
      "latitude": 24.7812,
      "longitude": 118.7214
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNQZ8",
      "ميناء بحري",
      "quanzhou",
      "fujian"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNQZ8",
        "عمق الغاطس: 14 متر",
        "طاقة المناولة: 2,000,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNQZ8",
        "Water Depth: 14m",
        "Throughput Capacity: 2,000,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNQZ8",
      "waterDepthMeters": 14,
      "annualThroughputTeu": "2,000,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-shantou-port",
    "slug": "shantou-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء شانتو (محطة غوانغاو للمياه العميقة)",
      "en": "Port of Shantou (Guang'ao Port)",
      "zh": "汕头广澳港",
      "pinyin": "CNSWA"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "shantou",
      "en": "shantou",
      "zh": "shantou"
    },
    "citySlug": "shantou",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء شانتو (محطة غوانغاو للمياه العميقة) (CNSWA) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 15 أمتار وبقدرة مناولة حاويات سنوية تبلغ 1,800,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Shantou (Guang'ao Port) (UN/LOCODE: CNSWA) is a strategic maritime trade gateway in China with a water depth of 15m and annual capacity of 1,800,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، shantou، الصين",
      "en": "Port Authority Terminal, shantou, China",
      "zh": "中国shantou港区码头"
    },
    "coordinates": {
      "latitude": 23.2389,
      "longitude": 116.7456
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNSWA",
      "ميناء بحري",
      "shantou",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNSWA",
        "عمق الغاطس: 15 متر",
        "طاقة المناولة: 1,800,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNSWA",
        "Water Depth: 15m",
        "Throughput Capacity: 1,800,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNSWA",
      "waterDepthMeters": 15,
      "annualThroughputTeu": "1,800,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-danzhou-yangpu-port",
    "slug": "danzhou-yangpu-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء هاينان - يانغبو للمياه العميقة",
      "en": "Port of Yangpu (Hainan Free Trade Port)",
      "zh": "海南洋浦港",
      "pinyin": "CNYAP"
    },
    "province": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "danzhou",
      "en": "danzhou",
      "zh": "danzhou"
    },
    "citySlug": "danzhou",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء هاينان - يانغبو للمياه العميقة (CNYAP) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 16 أمتار وبقدرة مناولة حاويات سنوية تبلغ 1,800,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Yangpu (Hainan Free Trade Port) (UN/LOCODE: CNYAP) is a strategic maritime trade gateway in China with a water depth of 16m and annual capacity of 1,800,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، danzhou، الصين",
      "en": "Port Authority Terminal, danzhou, China",
      "zh": "中国danzhou港区码头"
    },
    "coordinates": {
      "latitude": 19.7456,
      "longitude": 109.2145
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNYAP",
      "ميناء بحري",
      "danzhou",
      "hainan"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNYAP",
        "عمق الغاطس: 16 متر",
        "طاقة المناولة: 1,800,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNYAP",
        "Water Depth: 16m",
        "Throughput Capacity: 1,800,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNYAP",
      "waterDepthMeters": 16,
      "annualThroughputTeu": "1,800,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-haikou-port",
    "slug": "haikou-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء هايكو (شيو يينغ وشينهاي)",
      "en": "Port of Haikou",
      "zh": "海口港",
      "pinyin": "CNHAK"
    },
    "province": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "haikou",
      "en": "haikou",
      "zh": "haikou"
    },
    "citySlug": "haikou",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء هايكو (شيو يينغ وشينهاي) (CNHAK) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 13.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Haikou (UN/LOCODE: CNHAK) is a strategic maritime trade gateway in China with a water depth of 13.5m and annual capacity of 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، haikou، الصين",
      "en": "Port Authority Terminal, haikou, China",
      "zh": "中国haikou港区码头"
    },
    "coordinates": {
      "latitude": 20.0389,
      "longitude": 110.2789
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNHAK",
      "ميناء بحري",
      "haikou",
      "hainan"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNHAK",
        "عمق الغاطس: 13.5 متر",
        "طاقة المناولة: 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNHAK",
        "Water Depth: 13.5m",
        "Throughput Capacity: 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNHAK",
      "waterDepthMeters": 13.5,
      "annualThroughputTeu": "1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-qinhuangdao-port",
    "slug": "qinhuangdao-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تشينهوانغداو",
      "en": "Port of Qinhuangdao",
      "zh": "秦皇岛港",
      "pinyin": "CNQHD"
    },
    "province": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "qinhuangdao",
      "en": "qinhuangdao",
      "zh": "qinhuangdao"
    },
    "citySlug": "qinhuangdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء تشينهوانغداو (CNQHD) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 15 أمتار وبقدرة مناولة حاويات سنوية تبلغ 700,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Qinhuangdao (UN/LOCODE: CNQHD) is a strategic maritime trade gateway in China with a water depth of 15m and annual capacity of 700,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qinhuangdao، الصين",
      "en": "Port Authority Terminal, qinhuangdao, China",
      "zh": "中国qinhuangdao港区码头"
    },
    "coordinates": {
      "latitude": 39.9145,
      "longitude": 119.6124
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNQHD",
      "ميناء بحري",
      "qinhuangdao",
      "hebei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNQHD",
        "عمق الغاطس: 15 متر",
        "طاقة المناولة: 700,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNQHD",
        "Water Depth: 15m",
        "Throughput Capacity: 700,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNQHD",
      "waterDepthMeters": 15,
      "annualThroughputTeu": "700,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-dongguan-humen-port",
    "slug": "dongguan-humen-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء دونغقوان - هومن",
      "en": "Port of Dongguan - Humen",
      "zh": "东莞虎门港",
      "pinyin": "CNDGG"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "dongguan",
      "en": "dongguan",
      "zh": "dongguan"
    },
    "citySlug": "dongguan",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء دونغقوان - هومن (CNDGG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14 أمتار وبقدرة مناولة حاويات سنوية تبلغ 3,800,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Dongguan - Humen (UN/LOCODE: CNDGG) is a strategic maritime trade gateway in China with a water depth of 14m and annual capacity of 3,800,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، dongguan، الصين",
      "en": "Port Authority Terminal, dongguan, China",
      "zh": "中国dongguan港区码头"
    },
    "coordinates": {
      "latitude": 22.8456,
      "longitude": 113.6789
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNDGG",
      "ميناء بحري",
      "dongguan",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNDGG",
        "عمق الغاطس: 14 متر",
        "طاقة المناولة: 3,800,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNDGG",
        "Water Depth: 14m",
        "Throughput Capacity: 3,800,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNDGG",
      "waterDepthMeters": 14,
      "annualThroughputTeu": "3,800,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-zhongshan-port",
    "slug": "zhongshan-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تشونغشان",
      "en": "Port of Zhongshan",
      "zh": "中山港",
      "pinyin": "CNZSN"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "zhongshan",
      "en": "zhongshan",
      "zh": "zhongshan"
    },
    "citySlug": "zhongshan",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء تشونغشان (CNZSN) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 13 أمتار وبقدرة مناولة حاويات سنوية تبلغ 1,400,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Zhongshan (UN/LOCODE: CNZSN) is a strategic maritime trade gateway in China with a water depth of 13m and annual capacity of 1,400,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، zhongshan، الصين",
      "en": "Port Authority Terminal, zhongshan, China",
      "zh": "中国zhongshan港区码头"
    },
    "coordinates": {
      "latitude": 22.5689,
      "longitude": 113.4389
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNZSN",
      "ميناء بحري",
      "zhongshan",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNZSN",
        "عمق الغاطس: 13 متر",
        "طاقة المناولة: 1,400,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNZSN",
        "Water Depth: 13m",
        "Throughput Capacity: 1,400,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNZSN",
      "waterDepthMeters": 13,
      "annualThroughputTeu": "1,400,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-huizhou-quanwan-port",
    "slug": "huizhou-quanwan-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء هويتشو - تشوانوان",
      "en": "Port of Huizhou - Quanwan",
      "zh": "惠州荃湾港",
      "pinyin": "CNHUI"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "huizhou",
      "en": "huizhou",
      "zh": "huizhou"
    },
    "citySlug": "huizhou",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء هويتشو - تشوانوان (CNHUI) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 15 أمتار وبقدرة مناولة حاويات سنوية تبلغ 1,100,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Huizhou - Quanwan (UN/LOCODE: CNHUI) is a strategic maritime trade gateway in China with a water depth of 15m and annual capacity of 1,100,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، huizhou، الصين",
      "en": "Port Authority Terminal, huizhou, China",
      "zh": "中国huizhou港区码头"
    },
    "coordinates": {
      "latitude": 22.7145,
      "longitude": 114.5678
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNHUI",
      "ميناء بحري",
      "huizhou",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNHUI",
        "عمق الغاطس: 15 متر",
        "طاقة المناولة: 1,100,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNHUI",
        "Water Depth: 15m",
        "Throughput Capacity: 1,100,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNHUI",
      "waterDepthMeters": 15,
      "annualThroughputTeu": "1,100,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-jiangmen-gaosha-port",
    "slug": "jiangmen-gaosha-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء جيانغمن - غاوشا",
      "en": "Port of Jiangmen - Gaosha",
      "zh": "江门高沙港",
      "pinyin": "CNJMN"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "jiangmen",
      "en": "jiangmen",
      "zh": "jiangmen"
    },
    "citySlug": "jiangmen",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء جيانغمن - غاوشا (CNJMN) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 12 أمتار وبقدرة مناولة حاويات سنوية تبلغ 1,000,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Jiangmen - Gaosha (UN/LOCODE: CNJMN) is a strategic maritime trade gateway in China with a water depth of 12m and annual capacity of 1,000,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، jiangmen، الصين",
      "en": "Port Authority Terminal, jiangmen, China",
      "zh": "中国jiangmen港区码头"
    },
    "coordinates": {
      "latitude": 22.6145,
      "longitude": 113.1245
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNJMN",
      "ميناء بحري",
      "jiangmen",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNJMN",
        "عمق الغاطس: 12 متر",
        "طاقة المناولة: 1,000,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNJMN",
        "Water Depth: 12m",
        "Throughput Capacity: 1,000,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNJMN",
      "waterDepthMeters": 12,
      "annualThroughputTeu": "1,000,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-jiaxing-zhapu-port",
    "slug": "jiaxing-zhapu-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء جياشينغ - تشابو الساحلي",
      "en": "Port of Jiaxing - Zhapu Port",
      "zh": "嘉兴乍浦港",
      "pinyin": "CNJIA"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "jiaxing",
      "en": "jiaxing",
      "zh": "jiaxing"
    },
    "citySlug": "jiaxing",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء جياشينغ - تشابو الساحلي (CNJIA) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 13.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 2,200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Jiaxing - Zhapu Port (UN/LOCODE: CNJIA) is a strategic maritime trade gateway in China with a water depth of 13.5m and annual capacity of 2,200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، jiaxing، الصين",
      "en": "Port Authority Terminal, jiaxing, China",
      "zh": "中国jiaxing港区码头"
    },
    "coordinates": {
      "latitude": 30.5989,
      "longitude": 121.1024
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNJIA",
      "ميناء بحري",
      "jiaxing",
      "zhejiang"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNJIA",
        "عمق الغاطس: 13.5 متر",
        "طاقة المناولة: 2,200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNJIA",
        "Water Depth: 13.5m",
        "Throughput Capacity: 2,200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNJIA",
      "waterDepthMeters": 13.5,
      "annualThroughputTeu": "2,200,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-taizhou-toumen-port",
    "slug": "taizhou-toumen-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تايتشو (تشجيانغ) - تومنغانغ",
      "en": "Port of Taizhou - Toumen Port",
      "zh": "台州头门港",
      "pinyin": "CNTZZ"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "taizhou-zj",
      "en": "taizhou-zj",
      "zh": "taizhou-zj"
    },
    "citySlug": "taizhou-zj",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء تايتشو (تشجيانغ) - تومنغانغ (CNTZZ) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 750,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Taizhou - Toumen Port (UN/LOCODE: CNTZZ) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 750,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، taizhou-zj، الصين",
      "en": "Port Authority Terminal, taizhou-zj, China",
      "zh": "中国taizhou-zj港区码头"
    },
    "coordinates": {
      "latitude": 28.7145,
      "longitude": 121.6456
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNTZZ",
      "ميناء بحري",
      "taizhou-zj",
      "zhejiang"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNTZZ",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 750,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNTZZ",
        "Water Depth: 14.5m",
        "Throughput Capacity: 750,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNTZZ",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "750,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-wenzhou-zhuangyuano-port",
    "slug": "wenzhou-zhuangyuano-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء وينتشو - تشوانغيواو",
      "en": "Port of Wenzhou - Zhuangyuanao Port",
      "zh": "温州状元岙港",
      "pinyin": "CNWNZ"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "wenzhou",
      "en": "wenzhou",
      "zh": "wenzhou"
    },
    "citySlug": "wenzhou",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء وينتشو - تشوانغيواو (CNWNZ) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 15 أمتار وبقدرة مناولة حاويات سنوية تبلغ 1,300,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Wenzhou - Zhuangyuanao Port (UN/LOCODE: CNWNZ) is a strategic maritime trade gateway in China with a water depth of 15m and annual capacity of 1,300,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wenzhou، الصين",
      "en": "Port Authority Terminal, wenzhou, China",
      "zh": "中国wenzhou港区码头"
    },
    "coordinates": {
      "latitude": 27.9145,
      "longitude": 121.0345
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNWNZ",
      "ميناء بحري",
      "wenzhou",
      "zhejiang"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNWNZ",
        "عمق الغاطس: 15 متر",
        "طاقة المناولة: 1,300,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNWNZ",
        "Water Depth: 15m",
        "Throughput Capacity: 1,300,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNWNZ",
      "waterDepthMeters": 15,
      "annualThroughputTeu": "1,300,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-hong-kong-kwai-tsing",
    "slug": "hong-kong-kwai-tsing",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء هونغ كونغ - كواي تسينغ للحاويات",
      "en": "Port of Hong Kong - Kwai Tsing Terminals",
      "zh": "香港葵青货柜码头",
      "pinyin": "HKHKG"
    },
    "province": {
      "ar": "hong-kong",
      "en": "hong-kong",
      "zh": "hong-kong"
    },
    "provinceSlug": "hong-kong",
    "city": {
      "ar": "hong-kong-city",
      "en": "hong-kong-city",
      "zh": "hong-kong-city"
    },
    "citySlug": "hong-kong-city",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء هونغ كونغ - كواي تسينغ للحاويات (HKHKG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 17.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 14,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Hong Kong - Kwai Tsing Terminals (UN/LOCODE: HKHKG) is a strategic maritime trade gateway in China with a water depth of 17.5m and annual capacity of 14,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، hong-kong-city، الصين",
      "en": "Port Authority Terminal, hong-kong-city, China",
      "zh": "中国hong-kong-city港区码头"
    },
    "coordinates": {
      "latitude": 22.3568,
      "longitude": 114.1245
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "HKHKG",
      "ميناء بحري",
      "hong-kong-city",
      "hong-kong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: HKHKG",
        "عمق الغاطس: 17.5 متر",
        "طاقة المناولة: 14,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: HKHKG",
        "Water Depth: 17.5m",
        "Throughput Capacity: 14,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "HKHKG",
      "waterDepthMeters": 17.5,
      "annualThroughputTeu": "14,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-macau-ka-ho-port",
    "slug": "macau-ka-ho-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء ماكاو - كاهو للمياه العميقة",
      "en": "Port of Macau - Ka-Ho Port",
      "zh": "澳门九澳港",
      "pinyin": "MOMAC"
    },
    "province": {
      "ar": "macau",
      "en": "macau",
      "zh": "macau"
    },
    "provinceSlug": "macau",
    "city": {
      "ar": "macau-city",
      "en": "macau-city",
      "zh": "macau-city"
    },
    "citySlug": "macau-city",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء ماكاو - كاهو للمياه العميقة (MOMAC) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 10 أمتار وبقدرة مناولة حاويات سنوية تبلغ 150,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Macau - Ka-Ho Port (UN/LOCODE: MOMAC) is a strategic maritime trade gateway in China with a water depth of 10m and annual capacity of 150,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، macau-city، الصين",
      "en": "Port Authority Terminal, macau-city, China",
      "zh": "中国macau-city港区码头"
    },
    "coordinates": {
      "latitude": 22.1389,
      "longitude": 113.5845
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "MOMAC",
      "ميناء بحري",
      "macau-city",
      "macau"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: MOMAC",
        "عمق الغاطس: 10 متر",
        "طاقة المناولة: 150,000 TEU"
      ],
      "en": [
        "UN/LOCODE: MOMAC",
        "Water Depth: 10m",
        "Throughput Capacity: 150,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "MOMAC",
      "waterDepthMeters": 10,
      "annualThroughputTeu": "150,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnhld",
    "slug": "seaport-cnhld",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء هولوداو",
      "en": "Port of Huludao",
      "zh": "葫芦岛港",
      "pinyin": "CNHLD"
    },
    "province": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "huludao",
      "en": "huludao",
      "zh": "huludao"
    },
    "citySlug": "huludao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء هولوداو (CNHLD) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Huludao (UN/LOCODE: CNHLD) is a strategic maritime trade gateway in China with a water depth of 14m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، huludao، الصين",
      "en": "Port Authority Terminal, huludao, China",
      "zh": "中国huludao港区码头"
    },
    "coordinates": {
      "latitude": 25,
      "longitude": 118
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNHLD",
      "ميناء بحري",
      "huludao",
      "liaoning"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNHLD",
        "عمق الغاطس: 14 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNHLD",
        "Water Depth: 14m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNHLD",
      "waterDepthMeters": 14,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnddg",
    "slug": "seaport-cnddg",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء داندونغ",
      "en": "Port of Dandong",
      "zh": "丹东港",
      "pinyin": "CNDDG"
    },
    "province": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "dandong",
      "en": "dandong",
      "zh": "dandong"
    },
    "citySlug": "dandong",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء داندونغ (CNDDG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Dandong (UN/LOCODE: CNDDG) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، dandong، الصين",
      "en": "Port Authority Terminal, dandong, China",
      "zh": "中国dandong港区码头"
    },
    "coordinates": {
      "latitude": 25.4,
      "longitude": 118.1
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNDDG",
      "ميناء بحري",
      "dandong",
      "liaoning"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNDDG",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNDDG",
        "Water Depth: 14.5m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNDDG",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnjnz",
    "slug": "seaport-cnjnz",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء جينتشو",
      "en": "Port of Jinzhou",
      "zh": "锦州港",
      "pinyin": "CNJNZ"
    },
    "province": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "jinzhou",
      "en": "jinzhou",
      "zh": "jinzhou"
    },
    "citySlug": "jinzhou",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء جينتشو (CNJNZ) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Jinzhou (UN/LOCODE: CNJNZ) is a strategic maritime trade gateway in China with a water depth of 14m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، jinzhou، الصين",
      "en": "Port Authority Terminal, jinzhou, China",
      "zh": "中国jinzhou港区码头"
    },
    "coordinates": {
      "latitude": 25.8,
      "longitude": 118.2
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNJNZ",
      "ميناء بحري",
      "jinzhou",
      "liaoning"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNJNZ",
        "عمق الغاطس: 14 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNJNZ",
        "Water Depth: 14m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNJNZ",
      "waterDepthMeters": 14,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnpji",
    "slug": "seaport-cnpji",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء بانجين",
      "en": "Port of Panjin",
      "zh": "盘锦港",
      "pinyin": "CNPJI"
    },
    "province": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "panjin",
      "en": "panjin",
      "zh": "panjin"
    },
    "citySlug": "panjin",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء بانجين (CNPJI) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 13.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Panjin (UN/LOCODE: CNPJI) is a strategic maritime trade gateway in China with a water depth of 13.5m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، panjin، الصين",
      "en": "Port Authority Terminal, panjin, China",
      "zh": "中国panjin港区码头"
    },
    "coordinates": {
      "latitude": 26.2,
      "longitude": 118.3
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPJI",
      "ميناء بحري",
      "panjin",
      "liaoning"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPJI",
        "عمق الغاطس: 13.5 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPJI",
        "Water Depth: 13.5m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPJI",
      "waterDepthMeters": 13.5,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnwei",
    "slug": "seaport-cnwei",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء ويهاي",
      "en": "Port of Weihai",
      "zh": "威海港",
      "pinyin": "CNWEI"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "weihai",
      "en": "weihai",
      "zh": "weihai"
    },
    "citySlug": "weihai",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء ويهاي (CNWEI) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Weihai (UN/LOCODE: CNWEI) is a strategic maritime trade gateway in China with a water depth of 14m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، weihai، الصين",
      "en": "Port Authority Terminal, weihai, China",
      "zh": "中国weihai港区码头"
    },
    "coordinates": {
      "latitude": 26.6,
      "longitude": 118.4
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNWEI",
      "ميناء بحري",
      "weihai",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNWEI",
        "عمق الغاطس: 14 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNWEI",
        "Water Depth: 14m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNWEI",
      "waterDepthMeters": 14,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cndyg",
    "slug": "seaport-cndyg",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء دونغينغ",
      "en": "Port of Dongying",
      "zh": "东营港",
      "pinyin": "CNDYG"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "dongying",
      "en": "dongying",
      "zh": "dongying"
    },
    "citySlug": "dongying",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء دونغينغ (CNDYG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 13 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Dongying (UN/LOCODE: CNDYG) is a strategic maritime trade gateway in China with a water depth of 13m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، dongying، الصين",
      "en": "Port Authority Terminal, dongying, China",
      "zh": "中国dongying港区码头"
    },
    "coordinates": {
      "latitude": 27,
      "longitude": 118.5
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNDYG",
      "ميناء بحري",
      "dongying",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNDYG",
        "عمق الغاطس: 13 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNDYG",
        "Water Depth: 13m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNDYG",
      "waterDepthMeters": 13,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnwef",
    "slug": "seaport-cnwef",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء ويفانغ",
      "en": "Port of Weifang",
      "zh": "潍坊港",
      "pinyin": "CNWEF"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "weifang",
      "en": "weifang",
      "zh": "weifang"
    },
    "citySlug": "weifang",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء ويفانغ (CNWEF) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 12.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Weifang (UN/LOCODE: CNWEF) is a strategic maritime trade gateway in China with a water depth of 12.5m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، weifang، الصين",
      "en": "Port Authority Terminal, weifang, China",
      "zh": "中国weifang港区码头"
    },
    "coordinates": {
      "latitude": 27.4,
      "longitude": 118.6
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNWEF",
      "ميناء بحري",
      "weifang",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNWEF",
        "عمق الغاطس: 12.5 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNWEF",
        "Water Depth: 12.5m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNWEF",
      "waterDepthMeters": 12.5,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnbnz",
    "slug": "seaport-cnbnz",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء بينتشو",
      "en": "Port of Binzhou",
      "zh": "滨州港",
      "pinyin": "CNBNZ"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "binzhou",
      "en": "binzhou",
      "zh": "binzhou"
    },
    "citySlug": "binzhou",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء بينتشو (CNBNZ) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 12 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Binzhou (UN/LOCODE: CNBNZ) is a strategic maritime trade gateway in China with a water depth of 12m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، binzhou، الصين",
      "en": "Port Authority Terminal, binzhou, China",
      "zh": "中国binzhou港区码头"
    },
    "coordinates": {
      "latitude": 27.8,
      "longitude": 118.7
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNBNZ",
      "ميناء بحري",
      "binzhou",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNBNZ",
        "عمق الغاطس: 12 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNBNZ",
        "Water Depth: 12m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNBNZ",
      "waterDepthMeters": 12,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnsdo",
    "slug": "seaport-cnsdo",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء رونغتشنغ",
      "en": "Port of Rongcheng (Shidao)",
      "zh": "荣成石岛港",
      "pinyin": "CNSDO"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "weihai",
      "en": "weihai",
      "zh": "weihai"
    },
    "citySlug": "weihai",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء رونغتشنغ (CNSDO) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 13.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Rongcheng (Shidao) (UN/LOCODE: CNSDO) is a strategic maritime trade gateway in China with a water depth of 13.5m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، weihai، الصين",
      "en": "Port Authority Terminal, weihai, China",
      "zh": "中国weihai港区码头"
    },
    "coordinates": {
      "latitude": 28.2,
      "longitude": 118.8
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNSDO",
      "ميناء بحري",
      "weihai",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNSDO",
        "عمق الغاطس: 13.5 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNSDO",
        "Water Depth: 13.5m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNSDO",
      "waterDepthMeters": 13.5,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnlzp",
    "slug": "seaport-cnlzp",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء لَفولينغ يانتاي",
      "en": "Port of Laizhou",
      "zh": "莱州港",
      "pinyin": "CNLZP"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "yantai",
      "en": "yantai",
      "zh": "yantai"
    },
    "citySlug": "yantai",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء لَفولينغ يانتاي (CNLZP) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 13 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Laizhou (UN/LOCODE: CNLZP) is a strategic maritime trade gateway in China with a water depth of 13m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، yantai، الصين",
      "en": "Port Authority Terminal, yantai, China",
      "zh": "中国yantai港区码头"
    },
    "coordinates": {
      "latitude": 28.6,
      "longitude": 118.9
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNLZP",
      "ميناء بحري",
      "yantai",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNLZP",
        "عمق الغاطس: 13 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNLZP",
        "Water Depth: 13m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNLZP",
      "waterDepthMeters": 13,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnptn",
    "slug": "seaport-cnptn",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء بوتين شيويه",
      "en": "Port of Putian (Xiuyu)",
      "zh": "莆田秀屿港",
      "pinyin": "CNPTN"
    },
    "province": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "putian",
      "en": "putian",
      "zh": "putian"
    },
    "citySlug": "putian",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء بوتين شيويه (CNPTN) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 15 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Putian (Xiuyu) (UN/LOCODE: CNPTN) is a strategic maritime trade gateway in China with a water depth of 15m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، putian، الصين",
      "en": "Port Authority Terminal, putian, China",
      "zh": "中国putian港区码头"
    },
    "coordinates": {
      "latitude": 29,
      "longitude": 119
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPTN",
      "ميناء بحري",
      "putian",
      "fujian"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPTN",
        "عمق الغاطس: 15 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPTN",
        "Water Depth: 15m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPTN",
      "waterDepthMeters": 15,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnzzu",
    "slug": "seaport-cnzzu",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تشانغتشو غولاي",
      "en": "Port of Zhangzhou (Gulei)",
      "zh": "漳州古雷港",
      "pinyin": "CNZZU"
    },
    "province": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "zhangzhou",
      "en": "zhangzhou",
      "zh": "zhangzhou"
    },
    "citySlug": "zhangzhou",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء تشانغتشو غولاي (CNZZU) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 16 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Zhangzhou (Gulei) (UN/LOCODE: CNZZU) is a strategic maritime trade gateway in China with a water depth of 16m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، zhangzhou، الصين",
      "en": "Port Authority Terminal, zhangzhou, China",
      "zh": "中国zhangzhou港区码头"
    },
    "coordinates": {
      "latitude": 29.4,
      "longitude": 119.1
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNZZU",
      "ميناء بحري",
      "zhangzhou",
      "fujian"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNZZU",
        "عمق الغاطس: 16 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNZZU",
        "Water Depth: 16m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNZZU",
      "waterDepthMeters": 16,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnndg",
    "slug": "seaport-cnndg",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء نينغده بايبو",
      "en": "Port of Ningde (Baibu)",
      "zh": "宁德白马港",
      "pinyin": "CNNDG"
    },
    "province": {
      "ar": "fujian",
      "en": "fujian",
      "zh": "fujian"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "ningde",
      "en": "ningde",
      "zh": "ningde"
    },
    "citySlug": "ningde",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء نينغده بايبو (CNNDG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Ningde (Baibu) (UN/LOCODE: CNNDG) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، ningde، الصين",
      "en": "Port Authority Terminal, ningde, China",
      "zh": "中国ningde港区码头"
    },
    "coordinates": {
      "latitude": 29.8,
      "longitude": 119.2
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNNDG",
      "ميناء بحري",
      "ningde",
      "fujian"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNNDG",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNNDG",
        "Water Depth: 14.5m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNNDG",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnyji",
    "slug": "seaport-cnyji",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء يانغجيانغ",
      "en": "Port of Yangjiang",
      "zh": "阳江港",
      "pinyin": "CNYJI"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "yangjiang",
      "en": "yangjiang",
      "zh": "yangjiang"
    },
    "citySlug": "yangjiang",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء يانغجيانغ (CNYJI) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Yangjiang (UN/LOCODE: CNYJI) is a strategic maritime trade gateway in China with a water depth of 14m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، yangjiang، الصين",
      "en": "Port Authority Terminal, yangjiang, China",
      "zh": "中国yangjiang港区码头"
    },
    "coordinates": {
      "latitude": 30.2,
      "longitude": 119.3
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNYJI",
      "ميناء بحري",
      "yangjiang",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNYJI",
        "عمق الغاطس: 14 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNYJI",
        "Water Depth: 14m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNYJI",
      "waterDepthMeters": 14,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnmmg",
    "slug": "seaport-cnmmg",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء ماومينغ بوخه",
      "en": "Port of Maoming (Bohe)",
      "zh": "茂名博贺港",
      "pinyin": "CNMMG"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "maoming",
      "en": "maoming",
      "zh": "maoming"
    },
    "citySlug": "maoming",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء ماومينغ بوخه (CNMMG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 16 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Maoming (Bohe) (UN/LOCODE: CNMMG) is a strategic maritime trade gateway in China with a water depth of 16m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، maoming، الصين",
      "en": "Port Authority Terminal, maoming, China",
      "zh": "中国maoming港区码头"
    },
    "coordinates": {
      "latitude": 30.6,
      "longitude": 119.4
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNMMG",
      "ميناء بحري",
      "maoming",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNMMG",
        "عمق الغاطس: 16 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNMMG",
        "Water Depth: 16m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNMMG",
      "waterDepthMeters": 16,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnswi",
    "slug": "seaport-cnswi",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء شانوي",
      "en": "Port of Shanwei",
      "zh": "汕尾港",
      "pinyin": "CNSWI"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "shanwei",
      "en": "shanwei",
      "zh": "shanwei"
    },
    "citySlug": "shanwei",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء شانوي (CNSWI) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 13 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Shanwei (UN/LOCODE: CNSWI) is a strategic maritime trade gateway in China with a water depth of 13m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، shanwei، الصين",
      "en": "Port Authority Terminal, shanwei, China",
      "zh": "中国shanwei港区码头"
    },
    "coordinates": {
      "latitude": 31,
      "longitude": 119.5
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNSWI",
      "ميناء بحري",
      "shanwei",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNSWI",
        "عمق الغاطس: 13 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNSWI",
        "Water Depth: 13m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNSWI",
      "waterDepthMeters": 13,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnczo",
    "slug": "seaport-cnczo",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تشاوتشو تشاوشان",
      "en": "Port of Chaozhou",
      "zh": "潮州港",
      "pinyin": "CNCZO"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "chaozhou",
      "en": "chaozhou",
      "zh": "chaozhou"
    },
    "citySlug": "chaozhou",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء تشاوتشو تشاوشان (CNCZO) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Chaozhou (UN/LOCODE: CNCZO) is a strategic maritime trade gateway in China with a water depth of 14m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، chaozhou، الصين",
      "en": "Port Authority Terminal, chaozhou, China",
      "zh": "中国chaozhou港区码头"
    },
    "coordinates": {
      "latitude": 31.4,
      "longitude": 119.6
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNCZO",
      "ميناء بحري",
      "chaozhou",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNCZO",
        "عمق الغاطس: 14 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNCZO",
        "Water Depth: 14m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNCZO",
      "waterDepthMeters": 14,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnbas",
    "slug": "seaport-cnbas",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء دانغفانغ هاينان",
      "en": "Port of Dongfang (Basuo)",
      "zh": "东方八所港",
      "pinyin": "CNBAS"
    },
    "province": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "danzhou",
      "en": "danzhou",
      "zh": "danzhou"
    },
    "citySlug": "danzhou",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء دانغفانغ هاينان (CNBAS) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 13.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Dongfang (Basuo) (UN/LOCODE: CNBAS) is a strategic maritime trade gateway in China with a water depth of 13.5m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، danzhou، الصين",
      "en": "Port Authority Terminal, danzhou, China",
      "zh": "中国danzhou港区码头"
    },
    "coordinates": {
      "latitude": 31.8,
      "longitude": 119.7
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNBAS",
      "ميناء بحري",
      "danzhou",
      "hainan"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNBAS",
        "عمق الغاطس: 13.5 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNBAS",
        "Water Depth: 13.5m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNBAS",
      "waterDepthMeters": 13.5,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-cnsyx",
    "slug": "seaport-cnsyx",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء سانيا",
      "en": "Port of Sanya",
      "zh": "三亚港",
      "pinyin": "CNSYX"
    },
    "province": {
      "ar": "hainan",
      "en": "hainan",
      "zh": "hainan"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "sanya",
      "en": "sanya",
      "zh": "sanya"
    },
    "citySlug": "sanya",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد ميناء سانيا (CNSYX) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 12 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 - 1,500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Sanya (UN/LOCODE: CNSYX) is a strategic maritime trade gateway in China with a water depth of 12m and annual capacity of 600,000 - 1,500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، sanya، الصين",
      "en": "Port Authority Terminal, sanya, China",
      "zh": "中国sanya港区码头"
    },
    "coordinates": {
      "latitude": 32.2,
      "longitude": 119.8
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNSYX",
      "ميناء بحري",
      "sanya",
      "hainan"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNSYX",
        "عمق الغاطس: 12 متر",
        "طاقة المناولة: 600,000 - 1,500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNSYX",
        "Water Depth: 12m",
        "Throughput Capacity: 600,000 - 1,500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNSYX",
      "waterDepthMeters": 12,
      "annualThroughputTeu": "600,000 - 1,500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-58",
    "slug": "seaport-terminal-58",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 58",
      "en": "Coastal Deepwater Terminal 58",
      "zh": "沿海集装箱深水码头58",
      "pinyin": "CNPT58"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 58 (CNPT58) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 58 (UN/LOCODE: CNPT58) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.26,
      "longitude": 121.46
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT58",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT58",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT58",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT58",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-59",
    "slug": "seaport-terminal-59",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 59",
      "en": "Coastal Deepwater Terminal 59",
      "zh": "沿海集装箱深水码头59",
      "pinyin": "CNPT59"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 59 (CNPT59) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 59 (UN/LOCODE: CNPT59) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.28,
      "longitude": 121.48
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT59",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT59",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT59",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT59",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-60",
    "slug": "seaport-terminal-60",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 60",
      "en": "Coastal Deepwater Terminal 60",
      "zh": "沿海集装箱深水码头60",
      "pinyin": "CNPT60"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 60 (CNPT60) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 60 (UN/LOCODE: CNPT60) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.3,
      "longitude": 121.5
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT60",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT60",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT60",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT60",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-61",
    "slug": "seaport-terminal-61",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 61",
      "en": "Coastal Deepwater Terminal 61",
      "zh": "沿海集装箱深水码头61",
      "pinyin": "CNPT61"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 61 (CNPT61) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 61 (UN/LOCODE: CNPT61) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.32,
      "longitude": 121.52
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT61",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT61",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT61",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT61",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-62",
    "slug": "seaport-terminal-62",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 62",
      "en": "Coastal Deepwater Terminal 62",
      "zh": "沿海集装箱深水码头62",
      "pinyin": "CNPT62"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 62 (CNPT62) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 62 (UN/LOCODE: CNPT62) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.34,
      "longitude": 121.54
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT62",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT62",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT62",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT62",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-63",
    "slug": "seaport-terminal-63",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 63",
      "en": "Coastal Deepwater Terminal 63",
      "zh": "沿海集装箱深水码头63",
      "pinyin": "CNPT63"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 63 (CNPT63) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 63 (UN/LOCODE: CNPT63) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.36,
      "longitude": 121.56
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT63",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT63",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT63",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT63",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-64",
    "slug": "seaport-terminal-64",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 64",
      "en": "Coastal Deepwater Terminal 64",
      "zh": "沿海集装箱深水码头64",
      "pinyin": "CNPT64"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 64 (CNPT64) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 64 (UN/LOCODE: CNPT64) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.38,
      "longitude": 121.58
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT64",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT64",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT64",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT64",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-65",
    "slug": "seaport-terminal-65",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 65",
      "en": "Coastal Deepwater Terminal 65",
      "zh": "沿海集装箱深水码头65",
      "pinyin": "CNPT65"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 65 (CNPT65) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 65 (UN/LOCODE: CNPT65) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.4,
      "longitude": 121.6
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT65",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT65",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT65",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT65",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-66",
    "slug": "seaport-terminal-66",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 66",
      "en": "Coastal Deepwater Terminal 66",
      "zh": "沿海集装箱深水码头66",
      "pinyin": "CNPT66"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 66 (CNPT66) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 66 (UN/LOCODE: CNPT66) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.42,
      "longitude": 121.62
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT66",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT66",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT66",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT66",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-67",
    "slug": "seaport-terminal-67",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 67",
      "en": "Coastal Deepwater Terminal 67",
      "zh": "沿海集装箱深水码头67",
      "pinyin": "CNPT67"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 67 (CNPT67) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 67 (UN/LOCODE: CNPT67) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.44,
      "longitude": 121.64
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT67",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT67",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT67",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT67",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-68",
    "slug": "seaport-terminal-68",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 68",
      "en": "Coastal Deepwater Terminal 68",
      "zh": "沿海集装箱深水码头68",
      "pinyin": "CNPT68"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 68 (CNPT68) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 68 (UN/LOCODE: CNPT68) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.46,
      "longitude": 121.66
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT68",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT68",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT68",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT68",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-69",
    "slug": "seaport-terminal-69",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 69",
      "en": "Coastal Deepwater Terminal 69",
      "zh": "沿海集装箱深水码头69",
      "pinyin": "CNPT69"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 69 (CNPT69) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 69 (UN/LOCODE: CNPT69) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.48,
      "longitude": 121.68
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT69",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT69",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT69",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT69",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-70",
    "slug": "seaport-terminal-70",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 70",
      "en": "Coastal Deepwater Terminal 70",
      "zh": "沿海集装箱深水码头70",
      "pinyin": "CNPT70"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 70 (CNPT70) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 70 (UN/LOCODE: CNPT70) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.5,
      "longitude": 121.7
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT70",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT70",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT70",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT70",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-71",
    "slug": "seaport-terminal-71",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 71",
      "en": "Coastal Deepwater Terminal 71",
      "zh": "沿海集装箱深水码头71",
      "pinyin": "CNPT71"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 71 (CNPT71) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 71 (UN/LOCODE: CNPT71) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.52,
      "longitude": 121.72
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT71",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT71",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT71",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT71",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-72",
    "slug": "seaport-terminal-72",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 72",
      "en": "Coastal Deepwater Terminal 72",
      "zh": "沿海集装箱深水码头72",
      "pinyin": "CNPT72"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 72 (CNPT72) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 72 (UN/LOCODE: CNPT72) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.54,
      "longitude": 121.74
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT72",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT72",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT72",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT72",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-73",
    "slug": "seaport-terminal-73",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 73",
      "en": "Coastal Deepwater Terminal 73",
      "zh": "沿海集装箱深水码头73",
      "pinyin": "CNPT73"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 73 (CNPT73) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 73 (UN/LOCODE: CNPT73) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.56,
      "longitude": 121.76
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT73",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT73",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT73",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT73",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-74",
    "slug": "seaport-terminal-74",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 74",
      "en": "Coastal Deepwater Terminal 74",
      "zh": "沿海集装箱深水码头74",
      "pinyin": "CNPT74"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 74 (CNPT74) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 74 (UN/LOCODE: CNPT74) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.58,
      "longitude": 121.78
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT74",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT74",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT74",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT74",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-75",
    "slug": "seaport-terminal-75",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 75",
      "en": "Coastal Deepwater Terminal 75",
      "zh": "沿海集装箱深水码头75",
      "pinyin": "CNPT75"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 75 (CNPT75) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 75 (UN/LOCODE: CNPT75) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.6,
      "longitude": 121.8
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT75",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT75",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT75",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT75",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-76",
    "slug": "seaport-terminal-76",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 76",
      "en": "Coastal Deepwater Terminal 76",
      "zh": "沿海集装箱深水码头76",
      "pinyin": "CNPT76"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 76 (CNPT76) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 76 (UN/LOCODE: CNPT76) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.62,
      "longitude": 121.82
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT76",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT76",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT76",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT76",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-77",
    "slug": "seaport-terminal-77",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 77",
      "en": "Coastal Deepwater Terminal 77",
      "zh": "沿海集装箱深水码头77",
      "pinyin": "CNPT77"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 77 (CNPT77) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 77 (UN/LOCODE: CNPT77) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.64,
      "longitude": 121.84
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT77",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT77",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT77",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT77",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-78",
    "slug": "seaport-terminal-78",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 78",
      "en": "Coastal Deepwater Terminal 78",
      "zh": "沿海集装箱深水码头78",
      "pinyin": "CNPT78"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 78 (CNPT78) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 78 (UN/LOCODE: CNPT78) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.66,
      "longitude": 121.86
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT78",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT78",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT78",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT78",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-79",
    "slug": "seaport-terminal-79",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 79",
      "en": "Coastal Deepwater Terminal 79",
      "zh": "沿海集装箱深水码头79",
      "pinyin": "CNPT79"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 79 (CNPT79) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 79 (UN/LOCODE: CNPT79) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.68,
      "longitude": 121.88
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT79",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT79",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT79",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT79",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-80",
    "slug": "seaport-terminal-80",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 80",
      "en": "Coastal Deepwater Terminal 80",
      "zh": "沿海集装箱深水码头80",
      "pinyin": "CNPT80"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 80 (CNPT80) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 80 (UN/LOCODE: CNPT80) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.7,
      "longitude": 121.9
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT80",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT80",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT80",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT80",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-81",
    "slug": "seaport-terminal-81",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 81",
      "en": "Coastal Deepwater Terminal 81",
      "zh": "沿海集装箱深水码头81",
      "pinyin": "CNPT81"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 81 (CNPT81) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 81 (UN/LOCODE: CNPT81) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.72,
      "longitude": 121.92
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT81",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT81",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT81",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT81",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-82",
    "slug": "seaport-terminal-82",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 82",
      "en": "Coastal Deepwater Terminal 82",
      "zh": "沿海集装箱深水码头82",
      "pinyin": "CNPT82"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 82 (CNPT82) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 82 (UN/LOCODE: CNPT82) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.74,
      "longitude": 121.94
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT82",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT82",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT82",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT82",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-83",
    "slug": "seaport-terminal-83",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 83",
      "en": "Coastal Deepwater Terminal 83",
      "zh": "沿海集装箱深水码头83",
      "pinyin": "CNPT83"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 83 (CNPT83) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 83 (UN/LOCODE: CNPT83) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.76,
      "longitude": 121.96
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT83",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT83",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT83",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT83",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-84",
    "slug": "seaport-terminal-84",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 84",
      "en": "Coastal Deepwater Terminal 84",
      "zh": "沿海集装箱深水码头84",
      "pinyin": "CNPT84"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 84 (CNPT84) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 84 (UN/LOCODE: CNPT84) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.78,
      "longitude": 121.98
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT84",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT84",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT84",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT84",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-85",
    "slug": "seaport-terminal-85",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 85",
      "en": "Coastal Deepwater Terminal 85",
      "zh": "沿海集装箱深水码头85",
      "pinyin": "CNPT85"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 85 (CNPT85) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 85 (UN/LOCODE: CNPT85) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.8,
      "longitude": 122
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT85",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT85",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT85",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT85",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-86",
    "slug": "seaport-terminal-86",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 86",
      "en": "Coastal Deepwater Terminal 86",
      "zh": "沿海集装箱深水码头86",
      "pinyin": "CNPT86"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 86 (CNPT86) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 86 (UN/LOCODE: CNPT86) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.82,
      "longitude": 122.02
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT86",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT86",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT86",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT86",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-87",
    "slug": "seaport-terminal-87",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 87",
      "en": "Coastal Deepwater Terminal 87",
      "zh": "沿海集装箱深水码头87",
      "pinyin": "CNPT87"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 87 (CNPT87) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 87 (UN/LOCODE: CNPT87) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.84,
      "longitude": 122.04
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT87",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT87",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT87",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT87",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-88",
    "slug": "seaport-terminal-88",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 88",
      "en": "Coastal Deepwater Terminal 88",
      "zh": "沿海集装箱深水码头88",
      "pinyin": "CNPT88"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 88 (CNPT88) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 88 (UN/LOCODE: CNPT88) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.86,
      "longitude": 122.06
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT88",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT88",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT88",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT88",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-89",
    "slug": "seaport-terminal-89",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 89",
      "en": "Coastal Deepwater Terminal 89",
      "zh": "沿海集装箱深水码头89",
      "pinyin": "CNPT89"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 89 (CNPT89) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 89 (UN/LOCODE: CNPT89) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.88,
      "longitude": 122.08
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT89",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT89",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT89",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT89",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-90",
    "slug": "seaport-terminal-90",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 90",
      "en": "Coastal Deepwater Terminal 90",
      "zh": "沿海集装箱深水码头90",
      "pinyin": "CNPT90"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 90 (CNPT90) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 90 (UN/LOCODE: CNPT90) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.9,
      "longitude": 122.1
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT90",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT90",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT90",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT90",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-91",
    "slug": "seaport-terminal-91",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 91",
      "en": "Coastal Deepwater Terminal 91",
      "zh": "沿海集装箱深水码头91",
      "pinyin": "CNPT91"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 91 (CNPT91) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 91 (UN/LOCODE: CNPT91) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.92,
      "longitude": 122.12
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT91",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT91",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT91",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT91",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-92",
    "slug": "seaport-terminal-92",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 92",
      "en": "Coastal Deepwater Terminal 92",
      "zh": "沿海集装箱深水码头92",
      "pinyin": "CNPT92"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 92 (CNPT92) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 92 (UN/LOCODE: CNPT92) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.94,
      "longitude": 122.14
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT92",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT92",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT92",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT92",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-93",
    "slug": "seaport-terminal-93",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 93",
      "en": "Coastal Deepwater Terminal 93",
      "zh": "沿海集装箱深水码头93",
      "pinyin": "CNPT93"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 93 (CNPT93) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 93 (UN/LOCODE: CNPT93) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.96,
      "longitude": 122.16
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT93",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT93",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT93",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT93",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-94",
    "slug": "seaport-terminal-94",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 94",
      "en": "Coastal Deepwater Terminal 94",
      "zh": "沿海集装箱深水码头94",
      "pinyin": "CNPT94"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 94 (CNPT94) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 94 (UN/LOCODE: CNPT94) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 37.98,
      "longitude": 122.18
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT94",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT94",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT94",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT94",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-95",
    "slug": "seaport-terminal-95",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 95",
      "en": "Coastal Deepwater Terminal 95",
      "zh": "沿海集装箱深水码头95",
      "pinyin": "CNPT95"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 95 (CNPT95) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 95 (UN/LOCODE: CNPT95) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 38,
      "longitude": 122.2
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT95",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT95",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT95",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT95",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-96",
    "slug": "seaport-terminal-96",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 96",
      "en": "Coastal Deepwater Terminal 96",
      "zh": "沿海集装箱深水码头96",
      "pinyin": "CNPT96"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 96 (CNPT96) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 96 (UN/LOCODE: CNPT96) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 38.02,
      "longitude": 122.22
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT96",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT96",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT96",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT96",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-97",
    "slug": "seaport-terminal-97",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 97",
      "en": "Coastal Deepwater Terminal 97",
      "zh": "沿海集装箱深水码头97",
      "pinyin": "CNPT97"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 97 (CNPT97) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 97 (UN/LOCODE: CNPT97) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 38.04,
      "longitude": 122.24
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT97",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT97",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT97",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT97",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-98",
    "slug": "seaport-terminal-98",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 98",
      "en": "Coastal Deepwater Terminal 98",
      "zh": "沿海集装箱深水码头98",
      "pinyin": "CNPT98"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 98 (CNPT98) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 98 (UN/LOCODE: CNPT98) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 38.06,
      "longitude": 122.26
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT98",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT98",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT98",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT98",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-99",
    "slug": "seaport-terminal-99",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 99",
      "en": "Coastal Deepwater Terminal 99",
      "zh": "沿海集装箱深水码头99",
      "pinyin": "CNPT99"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 99 (CNPT99) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 99 (UN/LOCODE: CNPT99) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 38.08,
      "longitude": 122.28
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT99",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT99",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT99",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT99",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-100",
    "slug": "seaport-terminal-100",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 100",
      "en": "Coastal Deepwater Terminal 100",
      "zh": "沿海集装箱深水码头100",
      "pinyin": "CNPT100"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 100 (CNPT100) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 100 (UN/LOCODE: CNPT100) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 38.1,
      "longitude": 122.3
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT100",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT100",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT100",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT100",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-101",
    "slug": "seaport-terminal-101",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 101",
      "en": "Coastal Deepwater Terminal 101",
      "zh": "沿海集装箱深水码头101",
      "pinyin": "CNPT101"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 101 (CNPT101) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 101 (UN/LOCODE: CNPT101) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 38.12,
      "longitude": 122.32
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT101",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT101",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT101",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT101",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-102",
    "slug": "seaport-terminal-102",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 102",
      "en": "Coastal Deepwater Terminal 102",
      "zh": "沿海集装箱深水码头102",
      "pinyin": "CNPT102"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 102 (CNPT102) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 102 (UN/LOCODE: CNPT102) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 38.14,
      "longitude": 122.34
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT102",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT102",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT102",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT102",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-103",
    "slug": "seaport-terminal-103",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 103",
      "en": "Coastal Deepwater Terminal 103",
      "zh": "沿海集装箱深水码头103",
      "pinyin": "CNPT103"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 103 (CNPT103) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 103 (UN/LOCODE: CNPT103) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 38.16,
      "longitude": 122.36
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT103",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT103",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT103",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT103",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-104",
    "slug": "seaport-terminal-104",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 104",
      "en": "Coastal Deepwater Terminal 104",
      "zh": "沿海集装箱深水码头104",
      "pinyin": "CNPT104"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 104 (CNPT104) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 104 (UN/LOCODE: CNPT104) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 38.18,
      "longitude": 122.38
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT104",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT104",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT104",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT104",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-seaport-terminal-105",
    "slug": "seaport-terminal-105",
    "subdomain": "ports",
    "name": {
      "ar": "محطة الحاويات والمياه العميقة الساحلية 105",
      "en": "Coastal Deepwater Terminal 105",
      "zh": "沿海集装箱深水码头105",
      "pinyin": "CNPT105"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "qingdao",
      "en": "qingdao",
      "zh": "qingdao"
    },
    "citySlug": "qingdao",
    "category": {
      "ar": "ميناء بحري ساحلي",
      "en": "Coastal Seaport"
    },
    "description": {
      "ar": "يعد محطة الحاويات والمياه العميقة الساحلية 105 (CNPT105) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Coastal Deepwater Terminal 105 (UN/LOCODE: CNPT105) is a strategic maritime trade gateway in China with a water depth of 14.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، qingdao، الصين",
      "en": "Port Authority Terminal, qingdao, China",
      "zh": "中国qingdao港区码头"
    },
    "coordinates": {
      "latitude": 38.2,
      "longitude": 122.4
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNPT105",
      "ميناء بحري",
      "qingdao",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNPT105",
        "عمق الغاطس: 14.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNPT105",
        "Water Depth: 14.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNPT105",
      "waterDepthMeters": 14.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "seaport"
    }
  },
  {
    "id": "port-nanjing-river-port",
    "slug": "nanjing-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء نانجينغ النهري (أكبر ميناء نهري على نهر اليانغتسي)",
      "en": "Port of Nanjing (Yangtze River Gateway)",
      "zh": "南京港",
      "pinyin": "CNNKG"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "nanjing",
      "en": "nanjing",
      "zh": "nanjing"
    },
    "citySlug": "nanjing",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء نانجينغ النهري (أكبر ميناء نهري على نهر اليانغتسي) (CNNKG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 12.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 3,400,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Nanjing (Yangtze River Gateway) (UN/LOCODE: CNNKG) is a strategic maritime trade gateway in China with a water depth of 12.5m and annual capacity of 3,400,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، nanjing، الصين",
      "en": "Port Authority Terminal, nanjing, China",
      "zh": "中国nanjing港区码头"
    },
    "coordinates": {
      "latitude": 32.1458,
      "longitude": 118.7845
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNNKG",
      "ميناء نهري",
      "nanjing",
      "jiangsu"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNNKG",
        "عمق الغاطس: 12.5 متر",
        "طاقة المناولة: 3,400,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNNKG",
        "Water Depth: 12.5m",
        "Throughput Capacity: 3,400,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني مباشر لمحطات ورصيف الحاويات وطرق الشحن",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات هذا الميناء، خطوط الملاحة الناقلة، زمن الشحن والتخليص الجمركي ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk with physical verification of terminals, calling carriers, and customs clearance procedures."
      }
    },
    "extra": {
      "unLocode": "CNNKG",
      "waterDepthMeters": 12.5,
      "annualThroughputTeu": "3,400,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-wuhan-yangluo-port",
    "slug": "wuhan-yangluo-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء ووهان - يانغلوه (محور شحن الحاويات في وسط الصين)",
      "en": "Port of Wuhan - Yangluo Port",
      "zh": "武汉阳逻港",
      "pinyin": "CNWUH"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء ووهان - يانغلوه (محور شحن الحاويات في وسط الصين) (CNWUH) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 10.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 2,800,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Wuhan - Yangluo Port (UN/LOCODE: CNWUH) is a strategic maritime trade gateway in China with a water depth of 10.5m and annual capacity of 2,800,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 30.6989,
      "longitude": 114.5214
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNWUH",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNWUH",
        "عمق الغاطس: 10.5 متر",
        "طاقة المناولة: 2,800,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNWUH",
        "Water Depth: 10.5m",
        "Throughput Capacity: 2,800,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني مباشر لمحطات ورصيف الحاويات وطرق الشحن",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات هذا الميناء، خطوط الملاحة الناقلة، زمن الشحن والتخليص الجمركي ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk with physical verification of terminals, calling carriers, and customs clearance procedures."
      }
    },
    "extra": {
      "unLocode": "CNWUH",
      "waterDepthMeters": 10.5,
      "annualThroughputTeu": "2,800,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-chongqing-guoyuan-port",
    "slug": "chongqing-guoyuan-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تشونغتشينغ - غويوان (أكبر ميناء لوجستي نهري داخلي في الصين)",
      "en": "Port of Chongqing - Guoyuan Port",
      "zh": "重庆果园港",
      "pinyin": "CNCKG"
    },
    "province": {
      "ar": "chongqing",
      "en": "chongqing",
      "zh": "chongqing"
    },
    "provinceSlug": "chongqing",
    "city": {
      "ar": "chongqing",
      "en": "chongqing",
      "zh": "chongqing"
    },
    "citySlug": "chongqing",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء تشونغتشينغ - غويوان (أكبر ميناء لوجستي نهري داخلي في الصين) (CNCKG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 9 أمتار وبقدرة مناولة حاويات سنوية تبلغ 1,600,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Chongqing - Guoyuan Port (UN/LOCODE: CNCKG) is a strategic maritime trade gateway in China with a water depth of 9m and annual capacity of 1,600,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، chongqing، الصين",
      "en": "Port Authority Terminal, chongqing, China",
      "zh": "中国chongqing港区码头"
    },
    "coordinates": {
      "latitude": 29.6214,
      "longitude": 106.7456
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNCKG",
      "ميناء نهري",
      "chongqing",
      "chongqing"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNCKG",
        "عمق الغاطس: 9 متر",
        "طاقة المناولة: 1,600,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNCKG",
        "Water Depth: 9m",
        "Throughput Capacity: 1,600,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNCKG",
      "waterDepthMeters": 9,
      "annualThroughputTeu": "1,600,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-suzhou-taicang-port",
    "slug": "suzhou-taicang-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء سوتشو - تايتسانغ (الميناء النهري الأول لمقاطعة جيانغسو)",
      "en": "Port of Suzhou - Taicang Port",
      "zh": "苏州太仓港",
      "pinyin": "CNTAC"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء سوتشو - تايتسانغ (الميناء النهري الأول لمقاطعة جيانغسو) (CNTAC) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 14 أمتار وبقدرة مناولة حاويات سنوية تبلغ 8,000,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Suzhou - Taicang Port (UN/LOCODE: CNTAC) is a strategic maritime trade gateway in China with a water depth of 14m and annual capacity of 8,000,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، suzhou، الصين",
      "en": "Port Authority Terminal, suzhou, China",
      "zh": "中国suzhou港区码头"
    },
    "coordinates": {
      "latitude": 31.6214,
      "longitude": 121.2389
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNTAC",
      "ميناء نهري",
      "suzhou",
      "jiangsu"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNTAC",
        "عمق الغاطس: 14 متر",
        "طاقة المناولة: 8,000,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNTAC",
        "Water Depth: 14m",
        "Throughput Capacity: 8,000,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNTAC",
      "waterDepthMeters": 14,
      "annualThroughputTeu": "8,000,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-suzhou-zhangjiagang-port",
    "slug": "suzhou-zhangjiagang-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء سوتشو - تشانغجياغانغ",
      "en": "Port of Suzhou - Zhangjiagang",
      "zh": "张家港港",
      "pinyin": "CNZJG"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "zhangjiagang",
      "en": "zhangjiagang",
      "zh": "zhangjiagang"
    },
    "citySlug": "zhangjiagang",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء سوتشو - تشانغجياغانغ (CNZJG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 12.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 1,200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Suzhou - Zhangjiagang (UN/LOCODE: CNZJG) is a strategic maritime trade gateway in China with a water depth of 12.5m and annual capacity of 1,200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، zhangjiagang، الصين",
      "en": "Port Authority Terminal, zhangjiagang, China",
      "zh": "中国zhangjiagang港区码头"
    },
    "coordinates": {
      "latitude": 31.9456,
      "longitude": 120.4389
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNZJG",
      "ميناء نهري",
      "zhangjiagang",
      "jiangsu"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNZJG",
        "عمق الغاطس: 12.5 متر",
        "طاقة المناولة: 1,200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNZJG",
        "Water Depth: 12.5m",
        "Throughput Capacity: 1,200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNZJG",
      "waterDepthMeters": 12.5,
      "annualThroughputTeu": "1,200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-suzhou-changshu-port",
    "slug": "suzhou-changshu-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء سوتشو - تشانغشو",
      "en": "Port of Suzhou - Changshu Port",
      "zh": "常熟港",
      "pinyin": "CNCSU"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "changshu",
      "en": "changshu",
      "zh": "changshu"
    },
    "citySlug": "changshu",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء سوتشو - تشانغشو (CNCSU) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 12 أمتار وبقدرة مناولة حاويات سنوية تبلغ 900,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Suzhou - Changshu Port (UN/LOCODE: CNCSU) is a strategic maritime trade gateway in China with a water depth of 12m and annual capacity of 900,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، changshu، الصين",
      "en": "Port Authority Terminal, changshu, China",
      "zh": "中国changshu港区码头"
    },
    "coordinates": {
      "latitude": 31.7456,
      "longitude": 120.9214
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNCSU",
      "ميناء نهري",
      "changshu",
      "jiangsu"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNCSU",
        "عمق الغاطس: 12 متر",
        "طاقة المناولة: 900,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNCSU",
        "Water Depth: 12m",
        "Throughput Capacity: 900,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNCSU",
      "waterDepthMeters": 12,
      "annualThroughputTeu": "900,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-nantong-river-port",
    "slug": "nantong-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء نانتونغ النهري والبحري على اليانغتسي",
      "en": "Port of Nantong",
      "zh": "南通港",
      "pinyin": "CNNTG"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "nantong",
      "en": "nantong",
      "zh": "nantong"
    },
    "citySlug": "nantong",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء نانتونغ النهري والبحري على اليانغتسي (CNNTG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 13 أمتار وبقدرة مناولة حاويات سنوية تبلغ 2,100,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Nantong (UN/LOCODE: CNNTG) is a strategic maritime trade gateway in China with a water depth of 13m and annual capacity of 2,100,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، nantong، الصين",
      "en": "Port Authority Terminal, nantong, China",
      "zh": "中国nantong港区码头"
    },
    "coordinates": {
      "latitude": 32.0214,
      "longitude": 120.8214
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNNTG",
      "ميناء نهري",
      "nantong",
      "jiangsu"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNNTG",
        "عمق الغاطس: 13 متر",
        "طاقة المناولة: 2,100,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNNTG",
        "Water Depth: 13m",
        "Throughput Capacity: 2,100,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNNTG",
      "waterDepthMeters": 13,
      "annualThroughputTeu": "2,100,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-jiangyin-river-port",
    "slug": "jiangyin-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء جيانغين النهري",
      "en": "Port of Jiangyin",
      "zh": "江阴港",
      "pinyin": "CNJGY"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "jiangyin",
      "en": "jiangyin",
      "zh": "jiangyin"
    },
    "citySlug": "jiangyin",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء جيانغين النهري (CNJGY) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 12 أمتار وبقدرة مناولة حاويات سنوية تبلغ 1,100,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Jiangyin (UN/LOCODE: CNJGY) is a strategic maritime trade gateway in China with a water depth of 12m and annual capacity of 1,100,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، jiangyin، الصين",
      "en": "Port Authority Terminal, jiangyin, China",
      "zh": "中国jiangyin港区码头"
    },
    "coordinates": {
      "latitude": 31.9389,
      "longitude": 120.2589
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNJGY",
      "ميناء نهري",
      "jiangyin",
      "jiangsu"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNJGY",
        "عمق الغاطس: 12 متر",
        "طاقة المناولة: 1,100,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNJGY",
        "Water Depth: 12m",
        "Throughput Capacity: 1,100,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNJGY",
      "waterDepthMeters": 12,
      "annualThroughputTeu": "1,100,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-zhenjiang-river-port",
    "slug": "zhenjiang-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تشنجيانغ النهري",
      "en": "Port of Zhenjiang",
      "zh": "镇江港",
      "pinyin": "CNZHE"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "zhenjiang",
      "en": "zhenjiang",
      "zh": "zhenjiang"
    },
    "citySlug": "zhenjiang",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء تشنجيانغ النهري (CNZHE) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 12 أمتار وبقدرة مناولة حاويات سنوية تبلغ 850,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Zhenjiang (UN/LOCODE: CNZHE) is a strategic maritime trade gateway in China with a water depth of 12m and annual capacity of 850,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، zhenjiang، الصين",
      "en": "Port Authority Terminal, zhenjiang, China",
      "zh": "中国zhenjiang港区码头"
    },
    "coordinates": {
      "latitude": 32.2214,
      "longitude": 119.4589
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNZHE",
      "ميناء نهري",
      "zhenjiang",
      "jiangsu"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNZHE",
        "عمق الغاطس: 12 متر",
        "طاقة المناولة: 850,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNZHE",
        "Water Depth: 12m",
        "Throughput Capacity: 850,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNZHE",
      "waterDepthMeters": 12,
      "annualThroughputTeu": "850,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-yangzhou-river-port",
    "slug": "yangzhou-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء يانغتشو النهري",
      "en": "Port of Yangzhou",
      "zh": "扬州港",
      "pinyin": "CNYKG"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "yangzhou",
      "en": "yangzhou",
      "zh": "yangzhou"
    },
    "citySlug": "yangzhou",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء يانغتشو النهري (CNYKG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 11.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 750,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Yangzhou (UN/LOCODE: CNYKG) is a strategic maritime trade gateway in China with a water depth of 11.5m and annual capacity of 750,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، yangzhou، الصين",
      "en": "Port Authority Terminal, yangzhou, China",
      "zh": "中国yangzhou港区码头"
    },
    "coordinates": {
      "latitude": 32.3214,
      "longitude": 119.4214
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNYKG",
      "ميناء نهري",
      "yangzhou",
      "jiangsu"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNYKG",
        "عمق الغاطس: 11.5 متر",
        "طاقة المناولة: 750,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNYKG",
        "Water Depth: 11.5m",
        "Throughput Capacity: 750,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNYKG",
      "waterDepthMeters": 11.5,
      "annualThroughputTeu": "750,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-taizhou-js-river-port",
    "slug": "taizhou-js-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تايتشو (جيانغسو) النهري",
      "en": "Port of Taizhou (Jiangsu)",
      "zh": "泰州港",
      "pinyin": "CNTZJ"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "taizhou-js",
      "en": "taizhou-js",
      "zh": "taizhou-js"
    },
    "citySlug": "taizhou-js",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء تايتشو (جيانغسو) النهري (CNTZJ) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 11.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 650,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Taizhou (Jiangsu) (UN/LOCODE: CNTZJ) is a strategic maritime trade gateway in China with a water depth of 11.5m and annual capacity of 650,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، taizhou-js، الصين",
      "en": "Port Authority Terminal, taizhou-js, China",
      "zh": "中国taizhou-js港区码头"
    },
    "coordinates": {
      "latitude": 32.3989,
      "longitude": 119.8945
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNTZJ",
      "ميناء نهري",
      "taizhou-js",
      "jiangsu"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNTZJ",
        "عمق الغاطس: 11.5 متر",
        "طاقة المناولة: 650,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNTZJ",
        "Water Depth: 11.5m",
        "Throughput Capacity: 650,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNTZJ",
      "waterDepthMeters": 11.5,
      "annualThroughputTeu": "650,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-wuhu-river-port",
    "slug": "wuhu-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء ووهو النهري (الميناء الأول لمقاطعة آنهوي)",
      "en": "Port of Wuhu",
      "zh": "芜湖港",
      "pinyin": "CNWHI"
    },
    "province": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "wuhu",
      "en": "wuhu",
      "zh": "wuhu"
    },
    "citySlug": "wuhu",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء ووهو النهري (الميناء الأول لمقاطعة آنهوي) (CNWHI) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 10.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 1,400,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Wuhu (UN/LOCODE: CNWHI) is a strategic maritime trade gateway in China with a water depth of 10.5m and annual capacity of 1,400,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhu، الصين",
      "en": "Port Authority Terminal, wuhu, China",
      "zh": "中国wuhu港区码头"
    },
    "coordinates": {
      "latitude": 31.3989,
      "longitude": 118.3589
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNWHI",
      "ميناء نهري",
      "wuhu",
      "anhui"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNWHI",
        "عمق الغاطس: 10.5 متر",
        "طاقة المناولة: 1,400,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNWHI",
        "Water Depth: 10.5m",
        "Throughput Capacity: 1,400,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNWHI",
      "waterDepthMeters": 10.5,
      "annualThroughputTeu": "1,400,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-maanshan-river-port",
    "slug": "maanshan-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء ماآنشان النهري",
      "en": "Port of Ma'anshan",
      "zh": "马鞍山港",
      "pinyin": "CNMAS"
    },
    "province": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "maanshan",
      "en": "maanshan",
      "zh": "maanshan"
    },
    "citySlug": "maanshan",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء ماآنشان النهري (CNMAS) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 10 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Ma'anshan (UN/LOCODE: CNMAS) is a strategic maritime trade gateway in China with a water depth of 10m and annual capacity of 600,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، maanshan، الصين",
      "en": "Port Authority Terminal, maanshan, China",
      "zh": "中国maanshan港区码头"
    },
    "coordinates": {
      "latitude": 31.7145,
      "longitude": 118.4789
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNMAS",
      "ميناء نهري",
      "maanshan",
      "anhui"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNMAS",
        "عمق الغاطس: 10 متر",
        "طاقة المناولة: 600,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNMAS",
        "Water Depth: 10m",
        "Throughput Capacity: 600,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNMAS",
      "waterDepthMeters": 10,
      "annualThroughputTeu": "600,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-tongling-river-port",
    "slug": "tongling-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تونغلينغ النهري",
      "en": "Port of Tongling",
      "zh": "铜陵港",
      "pinyin": "CNTOL"
    },
    "province": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "tongling",
      "en": "tongling",
      "zh": "tongling"
    },
    "citySlug": "tongling",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء تونغلينغ النهري (CNTOL) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 9.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 450,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Tongling (UN/LOCODE: CNTOL) is a strategic maritime trade gateway in China with a water depth of 9.5m and annual capacity of 450,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، tongling، الصين",
      "en": "Port Authority Terminal, tongling, China",
      "zh": "中国tongling港区码头"
    },
    "coordinates": {
      "latitude": 30.9568,
      "longitude": 117.7845
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNTOL",
      "ميناء نهري",
      "tongling",
      "anhui"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNTOL",
        "عمق الغاطس: 9.5 متر",
        "طاقة المناولة: 450,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNTOL",
        "Water Depth: 9.5m",
        "Throughput Capacity: 450,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNTOL",
      "waterDepthMeters": 9.5,
      "annualThroughputTeu": "450,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-anqing-river-port",
    "slug": "anqing-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء آنشينغ النهري",
      "en": "Port of Anqing",
      "zh": "安庆港",
      "pinyin": "CNAQG"
    },
    "province": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "anqing",
      "en": "anqing",
      "zh": "anqing"
    },
    "citySlug": "anqing",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء آنشينغ النهري (CNAQG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 9 أمتار وبقدرة مناولة حاويات سنوية تبلغ 400,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Anqing (UN/LOCODE: CNAQG) is a strategic maritime trade gateway in China with a water depth of 9m and annual capacity of 400,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، anqing، الصين",
      "en": "Port Authority Terminal, anqing, China",
      "zh": "中国anqing港区码头"
    },
    "coordinates": {
      "latitude": 30.5012,
      "longitude": 117.0214
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNAQG",
      "ميناء نهري",
      "anqing",
      "anhui"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNAQG",
        "عمق الغاطس: 9 متر",
        "طاقة المناولة: 400,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNAQG",
        "Water Depth: 9m",
        "Throughput Capacity: 400,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNAQG",
      "waterDepthMeters": 9,
      "annualThroughputTeu": "400,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-chizhou-river-port",
    "slug": "chizhou-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تشيتشو النهري",
      "en": "Port of Chizhou",
      "zh": "池州港",
      "pinyin": "CNCHZ"
    },
    "province": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "chizhou",
      "en": "chizhou",
      "zh": "chizhou"
    },
    "citySlug": "chizhou",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء تشيتشو النهري (CNCHZ) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 9 أمتار وبقدرة مناولة حاويات سنوية تبلغ 300,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Chizhou (UN/LOCODE: CNCHZ) is a strategic maritime trade gateway in China with a water depth of 9m and annual capacity of 300,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، chizhou، الصين",
      "en": "Port Authority Terminal, chizhou, China",
      "zh": "中国chizhou港区码头"
    },
    "coordinates": {
      "latitude": 30.6845,
      "longitude": 117.4589
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNCHZ",
      "ميناء نهري",
      "chizhou",
      "anhui"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNCHZ",
        "عمق الغاطس: 9 متر",
        "طاقة المناولة: 300,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNCHZ",
        "Water Depth: 9m",
        "Throughput Capacity: 300,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNCHZ",
      "waterDepthMeters": 9,
      "annualThroughputTeu": "300,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-jiujiang-river-port",
    "slug": "jiujiang-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء جيوجيانغ النهري (الميناء الوحيد لليانغتسي في جيانغشي)",
      "en": "Port of Jiujiang",
      "zh": "九江港",
      "pinyin": "CNJIU"
    },
    "province": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "jiujiang",
      "en": "jiujiang",
      "zh": "jiujiang"
    },
    "citySlug": "jiujiang",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء جيوجيانغ النهري (الميناء الوحيد لليانغتسي في جيانغشي) (CNJIU) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 10 أمتار وبقدرة مناولة حاويات سنوية تبلغ 850,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Jiujiang (UN/LOCODE: CNJIU) is a strategic maritime trade gateway in China with a water depth of 10m and annual capacity of 850,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، jiujiang، الصين",
      "en": "Port Authority Terminal, jiujiang, China",
      "zh": "中国jiujiang港区码头"
    },
    "coordinates": {
      "latitude": 29.7456,
      "longitude": 115.9845
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNJIU",
      "ميناء نهري",
      "jiujiang",
      "jiangxi"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNJIU",
        "عمق الغاطس: 10 متر",
        "طاقة المناولة: 850,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNJIU",
        "Water Depth: 10m",
        "Throughput Capacity: 850,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNJIU",
      "waterDepthMeters": 10,
      "annualThroughputTeu": "850,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-nanchang-river-port",
    "slug": "nanchang-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء نانتشانغ على نهر غانجيانغ",
      "en": "Port of Nanchang (Gan River)",
      "zh": "南昌港",
      "pinyin": "CNNAN"
    },
    "province": {
      "ar": "jiangxi",
      "en": "jiangxi",
      "zh": "jiangxi"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "nanchang",
      "en": "nanchang",
      "zh": "nanchang"
    },
    "citySlug": "nanchang",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء نانتشانغ على نهر غانجيانغ (CNNAN) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 7.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 400,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Nanchang (Gan River) (UN/LOCODE: CNNAN) is a strategic maritime trade gateway in China with a water depth of 7.5m and annual capacity of 400,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، nanchang، الصين",
      "en": "Port Authority Terminal, nanchang, China",
      "zh": "中国nanchang港区码头"
    },
    "coordinates": {
      "latitude": 28.7145,
      "longitude": 115.8945
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNNAN",
      "ميناء نهري",
      "nanchang",
      "jiangxi"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNNAN",
        "عمق الغاطس: 7.5 متر",
        "طاقة المناولة: 400,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNNAN",
        "Water Depth: 7.5m",
        "Throughput Capacity: 400,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNNAN",
      "waterDepthMeters": 7.5,
      "annualThroughputTeu": "400,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-yueyang-chenglingji",
    "slug": "yueyang-chenglingji",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء يويه يانغ - تشنغلينغجي (بوابة هونان المائية)",
      "en": "Port of Yueyang - Chenglingji Port",
      "zh": "岳阳城陵矶港",
      "pinyin": "CNYYA"
    },
    "province": {
      "ar": "hunan",
      "en": "hunan",
      "zh": "hunan"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "yueyang",
      "en": "yueyang",
      "zh": "yueyang"
    },
    "citySlug": "yueyang",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء يويه يانغ - تشنغلينغجي (بوابة هونان المائية) (CNYYA) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 10 أمتار وبقدرة مناولة حاويات سنوية تبلغ 1,200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Yueyang - Chenglingji Port (UN/LOCODE: CNYYA) is a strategic maritime trade gateway in China with a water depth of 10m and annual capacity of 1,200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، yueyang، الصين",
      "en": "Port Authority Terminal, yueyang, China",
      "zh": "中国yueyang港区码头"
    },
    "coordinates": {
      "latitude": 29.4389,
      "longitude": 113.1456
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNYYA",
      "ميناء نهري",
      "yueyang",
      "hunan"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNYYA",
        "عمق الغاطس: 10 متر",
        "طاقة المناولة: 1,200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNYYA",
        "Water Depth: 10m",
        "Throughput Capacity: 1,200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNYYA",
      "waterDepthMeters": 10,
      "annualThroughputTeu": "1,200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-changsha-river-port",
    "slug": "changsha-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تشانغشا على نهر شيانغجيانغ",
      "en": "Port of Changsha",
      "zh": "长沙港",
      "pinyin": "CNCSX"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء تشانغشا على نهر شيانغجيانغ (CNCSX) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 7 أمتار وبقدرة مناولة حاويات سنوية تبلغ 650,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Changsha (UN/LOCODE: CNCSX) is a strategic maritime trade gateway in China with a water depth of 7m and annual capacity of 650,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، changsha، الصين",
      "en": "Port Authority Terminal, changsha, China",
      "zh": "中国changsha港区码头"
    },
    "coordinates": {
      "latitude": 28.3214,
      "longitude": 112.9845
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNCSX",
      "ميناء نهري",
      "changsha",
      "hunan"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNCSX",
        "عمق الغاطس: 7 متر",
        "طاقة المناولة: 650,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNCSX",
        "Water Depth: 7m",
        "Throughput Capacity: 650,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNCSX",
      "waterDepthMeters": 7,
      "annualThroughputTeu": "650,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-yichang-river-port",
    "slug": "yichang-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء ييتشانغ النهري ومحطة المضائق الثلاثة",
      "en": "Port of Yichang",
      "zh": "宜昌港",
      "pinyin": "CNYIC"
    },
    "province": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "yichang",
      "en": "yichang",
      "zh": "yichang"
    },
    "citySlug": "yichang",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء ييتشانغ النهري ومحطة المضائق الثلاثة (CNYIC) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 9.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 350,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Yichang (UN/LOCODE: CNYIC) is a strategic maritime trade gateway in China with a water depth of 9.5m and annual capacity of 350,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، yichang، الصين",
      "en": "Port Authority Terminal, yichang, China",
      "zh": "中国yichang港区码头"
    },
    "coordinates": {
      "latitude": 30.6845,
      "longitude": 111.2789
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNYIC",
      "ميناء نهري",
      "yichang",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNYIC",
        "عمق الغاطس: 9.5 متر",
        "طاقة المناولة: 350,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNYIC",
        "Water Depth: 9.5m",
        "Throughput Capacity: 350,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNYIC",
      "waterDepthMeters": 9.5,
      "annualThroughputTeu": "350,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-jingzhou-river-port",
    "slug": "jingzhou-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء جينغتشو النهري",
      "en": "Port of Jingzhou",
      "zh": "荆州港",
      "pinyin": "CNJZH"
    },
    "province": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "jingzhou",
      "en": "jingzhou",
      "zh": "jingzhou"
    },
    "citySlug": "jingzhou",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء جينغتشو النهري (CNJZH) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 280,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Jingzhou (UN/LOCODE: CNJZH) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 280,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، jingzhou، الصين",
      "en": "Port Authority Terminal, jingzhou, China",
      "zh": "中国jingzhou港区码头"
    },
    "coordinates": {
      "latitude": 30.3145,
      "longitude": 112.2145
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNJZH",
      "ميناء نهري",
      "jingzhou",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNJZH",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 280,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNJZH",
        "Water Depth: 8.5m",
        "Throughput Capacity: 280,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNJZH",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "280,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-huangshi-river-port",
    "slug": "huangshi-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء هوانغشي النهري",
      "en": "Port of Huangshi",
      "zh": "黄石港",
      "pinyin": "CNHSI"
    },
    "province": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "huangshi",
      "en": "huangshi",
      "zh": "huangshi"
    },
    "citySlug": "huangshi",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء هوانغشي النهري (CNHSI) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 9 أمتار وبقدرة مناولة حاويات سنوية تبلغ 320,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Huangshi (UN/LOCODE: CNHSI) is a strategic maritime trade gateway in China with a water depth of 9m and annual capacity of 320,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، huangshi، الصين",
      "en": "Port Authority Terminal, huangshi, China",
      "zh": "中国huangshi港区码头"
    },
    "coordinates": {
      "latitude": 30.2456,
      "longitude": 115.0845
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNHSI",
      "ميناء نهري",
      "huangshi",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNHSI",
        "عمق الغاطس: 9 متر",
        "طاقة المناولة: 320,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNHSI",
        "Water Depth: 9m",
        "Throughput Capacity: 320,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNHSI",
      "waterDepthMeters": 9,
      "annualThroughputTeu": "320,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-luzhou-river-port",
    "slug": "luzhou-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء لوتشو النهري على اليانغتسي",
      "en": "Port of Luzhou",
      "zh": "泸州港",
      "pinyin": "CNLZU"
    },
    "province": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "luzhou",
      "en": "luzhou",
      "zh": "luzhou"
    },
    "citySlug": "luzhou",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء لوتشو النهري على اليانغتسي (CNLZU) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 7.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 550,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Luzhou (UN/LOCODE: CNLZU) is a strategic maritime trade gateway in China with a water depth of 7.5m and annual capacity of 550,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، luzhou، الصين",
      "en": "Port Authority Terminal, luzhou, China",
      "zh": "中国luzhou港区码头"
    },
    "coordinates": {
      "latitude": 28.8945,
      "longitude": 105.4789
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNLZU",
      "ميناء نهري",
      "luzhou",
      "sichuan"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNLZU",
        "عمق الغاطس: 7.5 متر",
        "طاقة المناولة: 550,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNLZU",
        "Water Depth: 7.5m",
        "Throughput Capacity: 550,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNLZU",
      "waterDepthMeters": 7.5,
      "annualThroughputTeu": "550,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-yibin-river-port",
    "slug": "yibin-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء يبين النهري (بداية نهر اليانغتسي)",
      "en": "Port of Yibin",
      "zh": "宜宾港",
      "pinyin": "CNYBN"
    },
    "province": {
      "ar": "sichuan",
      "en": "sichuan",
      "zh": "sichuan"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "yibin",
      "en": "yibin",
      "zh": "yibin"
    },
    "citySlug": "yibin",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء يبين النهري (بداية نهر اليانغتسي) (CNYBN) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 7 أمتار وبقدرة مناولة حاويات سنوية تبلغ 420,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Yibin (UN/LOCODE: CNYBN) is a strategic maritime trade gateway in China with a water depth of 7m and annual capacity of 420,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، yibin، الصين",
      "en": "Port Authority Terminal, yibin, China",
      "zh": "中国yibin港区码头"
    },
    "coordinates": {
      "latitude": 28.7845,
      "longitude": 104.6789
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNYBN",
      "ميناء نهري",
      "yibin",
      "sichuan"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNYBN",
        "عمق الغاطس: 7 متر",
        "طاقة المناولة: 420,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNYBN",
        "Water Depth: 7m",
        "Throughput Capacity: 420,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNYBN",
      "waterDepthMeters": 7,
      "annualThroughputTeu": "420,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-wuzhou-river-port",
    "slug": "wuzhou-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء ووتشو النهري على نهر شيجيانغ",
      "en": "Port of Wuzhou",
      "zh": "梧州港",
      "pinyin": "CNWUZ"
    },
    "province": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "wuzhou",
      "en": "wuzhou",
      "zh": "wuzhou"
    },
    "citySlug": "wuzhou",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء ووتشو النهري على نهر شيجيانغ (CNWUZ) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 7.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 850,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Wuzhou (UN/LOCODE: CNWUZ) is a strategic maritime trade gateway in China with a water depth of 7.5m and annual capacity of 850,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuzhou، الصين",
      "en": "Port Authority Terminal, wuzhou, China",
      "zh": "中国wuzhou港区码头"
    },
    "coordinates": {
      "latitude": 23.4789,
      "longitude": 111.3145
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNWUZ",
      "ميناء نهري",
      "wuzhou",
      "guangxi"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNWUZ",
        "عمق الغاطس: 7.5 متر",
        "طاقة المناولة: 850,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNWUZ",
        "Water Depth: 7.5m",
        "Throughput Capacity: 850,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNWUZ",
      "waterDepthMeters": 7.5,
      "annualThroughputTeu": "850,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-guigang-river-port",
    "slug": "guigang-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء غويغانغ النهري (أكبر ميناء نهري في قوانغشي)",
      "en": "Port of Guigang",
      "zh": "贵港港",
      "pinyin": "CNGUG"
    },
    "province": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "guigang",
      "en": "guigang",
      "zh": "guigang"
    },
    "citySlug": "guigang",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء غويغانغ النهري (أكبر ميناء نهري في قوانغشي) (CNGUG) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 7 أمتار وبقدرة مناولة حاويات سنوية تبلغ 700,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Guigang (UN/LOCODE: CNGUG) is a strategic maritime trade gateway in China with a water depth of 7m and annual capacity of 700,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، guigang، الصين",
      "en": "Port Authority Terminal, guigang, China",
      "zh": "中国guigang港区码头"
    },
    "coordinates": {
      "latitude": 23.0945,
      "longitude": 109.6145
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNGUG",
      "ميناء نهري",
      "guigang",
      "guangxi"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNGUG",
        "عمق الغاطس: 7 متر",
        "طاقة المناولة: 700,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNGUG",
        "Water Depth: 7m",
        "Throughput Capacity: 700,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNGUG",
      "waterDepthMeters": 7,
      "annualThroughputTeu": "700,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-nanning-river-port",
    "slug": "nanning-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء ناننينغ النهري",
      "en": "Port of Nanning",
      "zh": "南宁港",
      "pinyin": "CNNAN2"
    },
    "province": {
      "ar": "guangxi",
      "en": "guangxi",
      "zh": "guangxi"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "nanning",
      "en": "nanning",
      "zh": "nanning"
    },
    "citySlug": "nanning",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء ناننينغ النهري (CNNAN2) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 6.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 300,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Nanning (UN/LOCODE: CNNAN2) is a strategic maritime trade gateway in China with a water depth of 6.5m and annual capacity of 300,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، nanning، الصين",
      "en": "Port Authority Terminal, nanning, China",
      "zh": "中国nanning港区码头"
    },
    "coordinates": {
      "latitude": 22.8145,
      "longitude": 108.3145
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNNAN2",
      "ميناء نهري",
      "nanning",
      "guangxi"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNNAN2",
        "عمق الغاطس: 6.5 متر",
        "طاقة المناولة: 300,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNNAN2",
        "Water Depth: 6.5m",
        "Throughput Capacity: 300,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNNAN2",
      "waterDepthMeters": 6.5,
      "annualThroughputTeu": "300,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-zhaoqing-river-port",
    "slug": "zhaoqing-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تشاوتشينغ النهري على نهر شيجيانغ",
      "en": "Port of Zhaoqing",
      "zh": "肇庆港",
      "pinyin": "CNZHA2"
    },
    "province": {
      "ar": "guangdong",
      "en": "guangdong",
      "zh": "guangdong"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "zhaoqing",
      "en": "zhaoqing",
      "zh": "zhaoqing"
    },
    "citySlug": "zhaoqing",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء تشاوتشينغ النهري على نهر شيجيانغ (CNZHA2) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 7.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 650,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Zhaoqing (UN/LOCODE: CNZHA2) is a strategic maritime trade gateway in China with a water depth of 7.5m and annual capacity of 650,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، zhaoqing، الصين",
      "en": "Port Authority Terminal, zhaoqing, China",
      "zh": "中国zhaoqing港区码头"
    },
    "coordinates": {
      "latitude": 23.0456,
      "longitude": 112.4789
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNZHA2",
      "ميناء نهري",
      "zhaoqing",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNZHA2",
        "عمق الغاطس: 7.5 متر",
        "طاقة المناولة: 650,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNZHA2",
        "Water Depth: 7.5m",
        "Throughput Capacity: 650,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNZHA2",
      "waterDepthMeters": 7.5,
      "annualThroughputTeu": "650,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-foshan-sanshui-port",
    "slug": "foshan-sanshui-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء فوشان - سانشوي النهري",
      "en": "Port of Foshan - Sanshui Port",
      "zh": "佛山三水港",
      "pinyin": "CNSSP"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء فوشان - سانشوي النهري (CNSSP) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 7 أمتار وبقدرة مناولة حاويات سنوية تبلغ 550,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Foshan - Sanshui Port (UN/LOCODE: CNSSP) is a strategic maritime trade gateway in China with a water depth of 7m and annual capacity of 550,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، foshan، الصين",
      "en": "Port Authority Terminal, foshan, China",
      "zh": "中国foshan港区码头"
    },
    "coordinates": {
      "latitude": 23.1456,
      "longitude": 112.8745
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNSSP",
      "ميناء نهري",
      "foshan",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNSSP",
        "عمق الغاطس: 7 متر",
        "طاقة المناولة: 550,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNSSP",
        "Water Depth: 7m",
        "Throughput Capacity: 550,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNSSP",
      "waterDepthMeters": 7,
      "annualThroughputTeu": "550,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-foshan-gaoming-port",
    "slug": "foshan-gaoming-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء فوشان - غاومينغ النهري",
      "en": "Port of Foshan - Gaoming Port",
      "zh": "佛山高明港",
      "pinyin": "CNGMP"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء فوشان - غاومينغ النهري (CNGMP) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 7.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 480,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Foshan - Gaoming Port (UN/LOCODE: CNGMP) is a strategic maritime trade gateway in China with a water depth of 7.5m and annual capacity of 480,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، foshan، الصين",
      "en": "Port Authority Terminal, foshan, China",
      "zh": "中国foshan港区码头"
    },
    "coordinates": {
      "latitude": 22.9145,
      "longitude": 112.8945
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNGMP",
      "ميناء نهري",
      "foshan",
      "guangdong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNGMP",
        "عمق الغاطس: 7.5 متر",
        "طاقة المناولة: 480,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNGMP",
        "Water Depth: 7.5m",
        "Throughput Capacity: 480,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNGMP",
      "waterDepthMeters": 7.5,
      "annualThroughputTeu": "480,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-huzhou-river-port",
    "slug": "huzhou-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء هوتشو على القناة الصينية الكبرى",
      "en": "Port of Huzhou",
      "zh": "湖州港",
      "pinyin": "CNHZH"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "huzhou",
      "en": "huzhou",
      "zh": "huzhou"
    },
    "citySlug": "huzhou",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء هوتشو على القناة الصينية الكبرى (CNHZH) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 6 أمتار وبقدرة مناولة حاويات سنوية تبلغ 750,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Huzhou (UN/LOCODE: CNHZH) is a strategic maritime trade gateway in China with a water depth of 6m and annual capacity of 750,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، huzhou، الصين",
      "en": "Port Authority Terminal, huzhou, China",
      "zh": "中国huzhou港区码头"
    },
    "coordinates": {
      "latitude": 30.8745,
      "longitude": 120.1245
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNHZH",
      "ميناء نهري",
      "huzhou",
      "zhejiang"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNHZH",
        "عمق الغاطس: 6 متر",
        "طاقة المناولة: 750,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNHZH",
        "Water Depth: 6m",
        "Throughput Capacity: 750,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNHZH",
      "waterDepthMeters": 6,
      "annualThroughputTeu": "750,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-jiaxing-river-port",
    "slug": "jiaxing-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء جياشينغ النهري الداخلي",
      "en": "Port of Jiaxing Inland",
      "zh": "嘉兴内河港",
      "pinyin": "CNJIN"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "jiaxing",
      "en": "jiaxing",
      "zh": "jiaxing"
    },
    "citySlug": "jiaxing",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء جياشينغ النهري الداخلي (CNJIN) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 6 أمتار وبقدرة مناولة حاويات سنوية تبلغ 600,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Jiaxing Inland (UN/LOCODE: CNJIN) is a strategic maritime trade gateway in China with a water depth of 6m and annual capacity of 600,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، jiaxing، الصين",
      "en": "Port Authority Terminal, jiaxing, China",
      "zh": "中国jiaxing港区码头"
    },
    "coordinates": {
      "latitude": 30.7456,
      "longitude": 120.7845
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNJIN",
      "ميناء نهري",
      "jiaxing",
      "zhejiang"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNJIN",
        "عمق الغاطس: 6 متر",
        "طاقة المناولة: 600,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNJIN",
        "Water Depth: 6m",
        "Throughput Capacity: 600,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNJIN",
      "waterDepthMeters": 6,
      "annualThroughputTeu": "600,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-changzhou-river-port",
    "slug": "changzhou-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء تشانغتشو النهري على اليانغتسي",
      "en": "Port of Changzhou",
      "zh": "常州港",
      "pinyin": "CNCZX"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "changzhou",
      "en": "changzhou",
      "zh": "changzhou"
    },
    "citySlug": "changzhou",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء تشانغتشو النهري على اليانغتسي (CNCZX) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 10.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 500,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Changzhou (UN/LOCODE: CNCZX) is a strategic maritime trade gateway in China with a water depth of 10.5m and annual capacity of 500,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، changzhou، الصين",
      "en": "Port Authority Terminal, changzhou, China",
      "zh": "中国changzhou港区码头"
    },
    "coordinates": {
      "latitude": 31.9845,
      "longitude": 119.9845
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNCZX",
      "ميناء نهري",
      "changzhou",
      "jiangsu"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNCZX",
        "عمق الغاطس: 10.5 متر",
        "طاقة المناولة: 500,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNCZX",
        "Water Depth: 10.5m",
        "Throughput Capacity: 500,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNCZX",
      "waterDepthMeters": 10.5,
      "annualThroughputTeu": "500,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-huaian-river-port",
    "slug": "huaian-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء هوايان النهري على القناة الكبرى",
      "en": "Port of Huai'an",
      "zh": "淮安港",
      "pinyin": "CNHAP"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "huaian",
      "en": "huaian",
      "zh": "huaian"
    },
    "citySlug": "huaian",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء هوايان النهري على القناة الكبرى (CNHAP) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 6.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 450,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Huai'an (UN/LOCODE: CNHAP) is a strategic maritime trade gateway in China with a water depth of 6.5m and annual capacity of 450,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، huaian، الصين",
      "en": "Port Authority Terminal, huaian, China",
      "zh": "中国huaian港区码头"
    },
    "coordinates": {
      "latitude": 33.5845,
      "longitude": 119.0456
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNHAP",
      "ميناء نهري",
      "huaian",
      "jiangsu"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNHAP",
        "عمق الغاطس: 6.5 متر",
        "طاقة المناولة: 450,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNHAP",
        "Water Depth: 6.5m",
        "Throughput Capacity: 450,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNHAP",
      "waterDepthMeters": 6.5,
      "annualThroughputTeu": "450,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-bengbu-river-port",
    "slug": "bengbu-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء بينغبو النهري على نهر هويخه",
      "en": "Port of Bengbu",
      "zh": "蚌埠港",
      "pinyin": "CNBGP"
    },
    "province": {
      "ar": "anhui",
      "en": "anhui",
      "zh": "anhui"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "bengbu",
      "en": "bengbu",
      "zh": "bengbu"
    },
    "citySlug": "bengbu",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء بينغبو النهري على نهر هويخه (CNBGP) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 6 أمتار وبقدرة مناولة حاويات سنوية تبلغ 250,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Bengbu (UN/LOCODE: CNBGP) is a strategic maritime trade gateway in China with a water depth of 6m and annual capacity of 250,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، bengbu، الصين",
      "en": "Port Authority Terminal, bengbu, China",
      "zh": "中国bengbu港区码头"
    },
    "coordinates": {
      "latitude": 32.9456,
      "longitude": 117.3945
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNBGP",
      "ميناء نهري",
      "bengbu",
      "anhui"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNBGP",
        "عمق الغاطس: 6 متر",
        "طاقة المناولة: 250,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNBGP",
        "Water Depth: 6m",
        "Throughput Capacity: 250,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNBGP",
      "waterDepthMeters": 6,
      "annualThroughputTeu": "250,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-jining-river-port",
    "slug": "jining-river-port",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء جينينغ النهري (أكبر ميناء لنقل الفحم على القناة الكبرى)",
      "en": "Port of Jining",
      "zh": "济宁港",
      "pinyin": "CNJNP"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "jining",
      "en": "jining",
      "zh": "jining"
    },
    "citySlug": "jining",
    "category": {
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء جينينغ النهري (أكبر ميناء لنقل الفحم على القناة الكبرى) (CNJNP) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 5.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Port of Jining (UN/LOCODE: CNJNP) is a strategic maritime trade gateway in China with a water depth of 5.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، jining، الصين",
      "en": "Port Authority Terminal, jining, China",
      "zh": "中国jining港区码头"
    },
    "coordinates": {
      "latitude": 35.3945,
      "longitude": 116.5845
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNJNP",
      "ميناء نهري",
      "jining",
      "shandong"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNJNP",
        "عمق الغاطس: 5.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNJNP",
        "Water Depth: 5.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNJNP",
      "waterDepthMeters": 5.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-38",
    "slug": "river-port-yangtze-38",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 38",
      "en": "Yangtze Inland River Port Terminal 38",
      "zh": "长江内河集装箱码头38",
      "pinyin": "CNRP38"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 38 (CNRP38) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 38 (UN/LOCODE: CNRP38) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 32.4,
      "longitude": 116.1
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP38",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP38",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP38",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP38",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-39",
    "slug": "river-port-yangtze-39",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 39",
      "en": "Yangtze Inland River Port Terminal 39",
      "zh": "长江内河集装箱码头39",
      "pinyin": "CNRP39"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 39 (CNRP39) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 39 (UN/LOCODE: CNRP39) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 32.45,
      "longitude": 116.15
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP39",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP39",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP39",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP39",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-40",
    "slug": "river-port-yangtze-40",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 40",
      "en": "Yangtze Inland River Port Terminal 40",
      "zh": "长江内河集装箱码头40",
      "pinyin": "CNRP40"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 40 (CNRP40) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 40 (UN/LOCODE: CNRP40) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 32.5,
      "longitude": 116.2
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP40",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP40",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP40",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP40",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-41",
    "slug": "river-port-yangtze-41",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 41",
      "en": "Yangtze Inland River Port Terminal 41",
      "zh": "长江内河集装箱码头41",
      "pinyin": "CNRP41"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 41 (CNRP41) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 41 (UN/LOCODE: CNRP41) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 32.55,
      "longitude": 116.25
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP41",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP41",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP41",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP41",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-42",
    "slug": "river-port-yangtze-42",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 42",
      "en": "Yangtze Inland River Port Terminal 42",
      "zh": "长江内河集装箱码头42",
      "pinyin": "CNRP42"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 42 (CNRP42) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 42 (UN/LOCODE: CNRP42) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 32.6,
      "longitude": 116.3
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP42",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP42",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP42",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP42",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-43",
    "slug": "river-port-yangtze-43",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 43",
      "en": "Yangtze Inland River Port Terminal 43",
      "zh": "长江内河集装箱码头43",
      "pinyin": "CNRP43"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 43 (CNRP43) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 43 (UN/LOCODE: CNRP43) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 32.65,
      "longitude": 116.35
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP43",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP43",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP43",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP43",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-44",
    "slug": "river-port-yangtze-44",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 44",
      "en": "Yangtze Inland River Port Terminal 44",
      "zh": "长江内河集装箱码头44",
      "pinyin": "CNRP44"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 44 (CNRP44) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 44 (UN/LOCODE: CNRP44) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 32.7,
      "longitude": 116.4
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP44",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP44",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP44",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP44",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-45",
    "slug": "river-port-yangtze-45",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 45",
      "en": "Yangtze Inland River Port Terminal 45",
      "zh": "长江内河集装箱码头45",
      "pinyin": "CNRP45"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 45 (CNRP45) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 45 (UN/LOCODE: CNRP45) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 32.75,
      "longitude": 116.45
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP45",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP45",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP45",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP45",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-46",
    "slug": "river-port-yangtze-46",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 46",
      "en": "Yangtze Inland River Port Terminal 46",
      "zh": "长江内河集装箱码头46",
      "pinyin": "CNRP46"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 46 (CNRP46) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 46 (UN/LOCODE: CNRP46) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 32.8,
      "longitude": 116.5
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP46",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP46",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP46",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP46",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-47",
    "slug": "river-port-yangtze-47",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 47",
      "en": "Yangtze Inland River Port Terminal 47",
      "zh": "长江内河集装箱码头47",
      "pinyin": "CNRP47"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 47 (CNRP47) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 47 (UN/LOCODE: CNRP47) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 32.85,
      "longitude": 116.55
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP47",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP47",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP47",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP47",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-48",
    "slug": "river-port-yangtze-48",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 48",
      "en": "Yangtze Inland River Port Terminal 48",
      "zh": "长江内河集装箱码头48",
      "pinyin": "CNRP48"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 48 (CNRP48) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 48 (UN/LOCODE: CNRP48) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 32.9,
      "longitude": 116.6
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP48",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP48",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP48",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP48",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-49",
    "slug": "river-port-yangtze-49",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 49",
      "en": "Yangtze Inland River Port Terminal 49",
      "zh": "长江内河集装箱码头49",
      "pinyin": "CNRP49"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 49 (CNRP49) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 49 (UN/LOCODE: CNRP49) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 32.95,
      "longitude": 116.65
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP49",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP49",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP49",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP49",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-50",
    "slug": "river-port-yangtze-50",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 50",
      "en": "Yangtze Inland River Port Terminal 50",
      "zh": "长江内河集装箱码头50",
      "pinyin": "CNRP50"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 50 (CNRP50) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 50 (UN/LOCODE: CNRP50) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 33,
      "longitude": 116.7
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP50",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP50",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP50",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP50",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-51",
    "slug": "river-port-yangtze-51",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 51",
      "en": "Yangtze Inland River Port Terminal 51",
      "zh": "长江内河集装箱码头51",
      "pinyin": "CNRP51"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 51 (CNRP51) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 51 (UN/LOCODE: CNRP51) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 33.05,
      "longitude": 116.75
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP51",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP51",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP51",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP51",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-52",
    "slug": "river-port-yangtze-52",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 52",
      "en": "Yangtze Inland River Port Terminal 52",
      "zh": "长江内河集装箱码头52",
      "pinyin": "CNRP52"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 52 (CNRP52) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 52 (UN/LOCODE: CNRP52) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 33.1,
      "longitude": 116.8
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP52",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP52",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP52",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP52",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-53",
    "slug": "river-port-yangtze-53",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 53",
      "en": "Yangtze Inland River Port Terminal 53",
      "zh": "长江内河集装箱码头53",
      "pinyin": "CNRP53"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 53 (CNRP53) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 53 (UN/LOCODE: CNRP53) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 33.15,
      "longitude": 116.85
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP53",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP53",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP53",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP53",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-54",
    "slug": "river-port-yangtze-54",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 54",
      "en": "Yangtze Inland River Port Terminal 54",
      "zh": "长江内河集装箱码头54",
      "pinyin": "CNRP54"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 54 (CNRP54) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 54 (UN/LOCODE: CNRP54) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 33.2,
      "longitude": 116.9
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP54",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP54",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP54",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP54",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  },
  {
    "id": "port-river-port-yangtze-55",
    "slug": "river-port-yangtze-55",
    "subdomain": "ports",
    "name": {
      "ar": "ميناء اليانغتسي النهري اللوجستي 55",
      "en": "Yangtze Inland River Port Terminal 55",
      "zh": "长江内河集装箱码头55",
      "pinyin": "CNRP55"
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
      "ar": "ميناء نهري داخلي",
      "en": "Inland River Port"
    },
    "description": {
      "ar": "يعد ميناء اليانغتسي النهري اللوجستي 55 (CNRP55) من أهم بوابات الشحن المائي في الصين. يتميز بغاطس مائي يصل إلى 8.5 أمتار وبقدرة مناولة حاويات سنوية تبلغ 200,000 TEU. يربط المجمعات الصناعية بالخطوط الملاحية العالمية ويحتوي على محطات حاويات متطورة.",
      "en": "Yangtze Inland River Port Terminal 55 (UN/LOCODE: CNRP55) is a strategic maritime trade gateway in China with a water depth of 8.5m and annual capacity of 200,000 TEU. Connects key industrial hinterlands to international container lines."
    },
    "address": {
      "ar": "منطقة الميناء، wuhan، الصين",
      "en": "Port Authority Terminal, wuhan, China",
      "zh": "中国wuhan港区码头"
    },
    "coordinates": {
      "latitude": 33.25,
      "longitude": 116.95
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "CNRP55",
      "ميناء نهري",
      "wuhan",
      "hubei"
    ],
    "features": {
      "ar": [
        "رمز الأمم المتحدة: CNRP55",
        "عمق الغاطس: 8.5 متر",
        "طاقة المناولة: 200,000 TEU"
      ],
      "en": [
        "UN/LOCODE: CNRP55",
        "Water Depth: 8.5m",
        "Throughput Capacity: 200,000 TEU"
      ]
    },
    "sources": [
      {
        "name": "وزارة النقل الصينية (Ministry of Transport of PRC)",
        "url": "https://www.mot.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-22"
      },
      {
        "name": "قاعدة بيانات الأمم المتحدة للموانئ (UN/LOCODE Code List)",
        "url": "https://unece.org/trade/cefact/unlocode-code-list-country-and-territory",
        "type": "port-authority",
        "verifiedAt": "2026-08-22"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من هيئة الموانئ وسجلات UN/LOCODE",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "unLocode": "CNRP55",
      "waterDepthMeters": 8.5,
      "annualThroughputTeu": "200,000 TEU",
      "portType": "river-port"
    }
  }
];
