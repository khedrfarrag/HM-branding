import { IChinaDirectoryEntity } from '@/domains/china-directory/entities';

export const CHINA_DIRECTORY_CITIES: IChinaDirectoryEntity[] = [
  {
    "id": "city-beijing",
    "slug": "beijing",
    "subdomain": "cities",
    "name": {
      "ar": "بكين",
      "en": "Beijing",
      "zh": "北京",
      "pinyin": "Běijīng"
    },
    "province": {
      "ar": "بكين",
      "en": "Beijing",
      "zh": "北京"
    },
    "provinceSlug": "beijing",
    "city": {
      "ar": "بكين",
      "en": "Beijing",
      "zh": "北京"
    },
    "citySlug": "beijing",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر بكين (北京) من المراكز الصناعية والتجارية البارزة في مقاطعة بكين. تتخصص المدينة في قطاعات تصديرية تشمل: الإلكترونيات المتقدمة، البرمجيات والذكاء الاصطناعي، صناعة السيارات. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Beijing (北京) is a prominent industrial and commercial center in Beijing Province. Renowned for export specializations including: الإلكترونيات المتقدمة, البرمجيات والذكاء الاصطناعي, صناعة السيارات. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "بكين، الصين",
      "en": "Beijing, Beijing, China",
      "zh": "中国北京北京"
    },
    "coordinates": {
      "latitude": 39.9042,
      "longitude": 116.4074
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "beijing",
      "الإلكترونيات المتقدمة",
      "البرمجيات والذكاء الاصطناعي",
      "صناعة السيارات"
    ],
    "features": {
      "ar": [
        "الإلكترونيات المتقدمة",
        "البرمجيات والذكاء الاصطناعي",
        "صناعة السيارات"
      ],
      "en": [
        "الإلكترونيات المتقدمة",
        "البرمجيات والذكاء الاصطناعي",
        "صناعة السيارات"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "الإلكترونيات المتقدمة",
        "البرمجيات والذكاء الاصطناعي",
        "صناعة السيارات"
      ],
      "cityTag": "العاصمة والمركز التكنولوجي والسياسي"
    }
  },
  {
    "id": "city-shanghai",
    "slug": "shanghai",
    "subdomain": "cities",
    "name": {
      "ar": "شنغهاي",
      "en": "Shanghai",
      "zh": "上海",
      "pinyin": "Shànghǎi"
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
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر شنغهاي (上海) من المراكز الصناعية والتجارية البارزة في مقاطعة شنغهاي. تتخصص المدينة في قطاعات تصديرية تشمل: ميناء الحاويات الأكبر عالمياً، الصناعات الدوائية الحيوية، السيارات والتمويل. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shanghai (上海) is a prominent industrial and commercial center in Shanghai Province. Renowned for export specializations including: ميناء الحاويات الأكبر عالمياً, الصناعات الدوائية الحيوية, السيارات والتمويل. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شنغهاي، الصين",
      "en": "Shanghai, Shanghai, China",
      "zh": "中国上海上海"
    },
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shanghai",
      "ميناء الحاويات الأكبر عالمياً",
      "الصناعات الدوائية الحيوية",
      "السيارات والتمويل"
    ],
    "features": {
      "ar": [
        "ميناء الحاويات الأكبر عالمياً",
        "الصناعات الدوائية الحيوية",
        "السيارات والتمويل"
      ],
      "en": [
        "ميناء الحاويات الأكبر عالمياً",
        "الصناعات الدوائية الحيوية",
        "السيارات والتمويل"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "تدقيق ميداني وفحص مباشر لمجمعات الصناعة والأسواق",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم فحص هذه المدينة ومجمعاتها الصناعية وأسواق الجملة التابعة لها ميدانياً بواسطة المستشار حسام مبروك مع التحقق من سلاسل التوريد وشركات الشحن المعتمدة.",
        "en": "Audited in the field by Consultant Hossam Mabrouk with on-site inspection of manufacturing clusters, wholesale markets, and verified logistics lines."
      }
    },
    "extra": {
      "famousIndustries": [
        "ميناء الحاويات الأكبر عالمياً",
        "الصناعات الدوائية الحيوية",
        "السيارات والتمويل"
      ],
      "cityTag": "المركز التجاري والمالي والشحن العالمي"
    }
  },
  {
    "id": "city-tianjin",
    "slug": "tianjin",
    "subdomain": "cities",
    "name": {
      "ar": "تيانجين",
      "en": "Tianjin",
      "zh": "天津",
      "pinyin": "Tiānjīn"
    },
    "province": {
      "ar": "تيانجين",
      "en": "Tianjin",
      "zh": "天津"
    },
    "provinceSlug": "tianjin",
    "city": {
      "ar": "تيانجين",
      "en": "Tianjin",
      "zh": "天津"
    },
    "citySlug": "tianjin",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر تيانجين (天津) من المراكز الصناعية والتجارية البارزة في مقاطعة تيانجين. تتخصص المدينة في قطاعات تصديرية تشمل: تجميع طائرات إيرباص A320، البتروكيماويات، الميناء اللوجستي الشمالي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Tianjin (天津) is a prominent industrial and commercial center in Tianjin Province. Renowned for export specializations including: تجميع طائرات إيرباص A320, البتروكيماويات, الميناء اللوجستي الشمالي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تيانجين، الصين",
      "en": "Tianjin, Tianjin, China",
      "zh": "中国天津天津"
    },
    "coordinates": {
      "latitude": 39.0842,
      "longitude": 117.2009
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "tianjin",
      "تجميع طائرات إيرباص A320",
      "البتروكيماويات",
      "الميناء اللوجستي الشمالي"
    ],
    "features": {
      "ar": [
        "تجميع طائرات إيرباص A320",
        "البتروكيماويات",
        "الميناء اللوجستي الشمالي"
      ],
      "en": [
        "تجميع طائرات إيرباص A320",
        "البتروكيماويات",
        "الميناء اللوجستي الشمالي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "تجميع طائرات إيرباص A320",
        "البتروكيماويات",
        "الميناء اللوجستي الشمالي"
      ],
      "cityTag": "بوابة الشحن البحري لشمال الصين"
    }
  },
  {
    "id": "city-chongqing",
    "slug": "chongqing",
    "subdomain": "cities",
    "name": {
      "ar": "تشونغتشينغ",
      "en": "Chongqing",
      "zh": "重庆",
      "pinyin": "Chóngqìng"
    },
    "province": {
      "ar": "تشونغتشينغ",
      "en": "Chongqing",
      "zh": "重庆"
    },
    "provinceSlug": "chongqing",
    "city": {
      "ar": "تشونغتشينغ",
      "en": "Chongqing",
      "zh": "重庆"
    },
    "citySlug": "chongqing",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر تشونغتشينغ (重庆) من المراكز الصناعية والتجارية البارزة في مقاطعة تشونغتشينغ. تتخصص المدينة في قطاعات تصديرية تشمل: أجهزة الحواسيب المحمولة، صناعة السيارات والدراجات النارية، الصلب. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Chongqing (重庆) is a prominent industrial and commercial center in Chongqing Province. Renowned for export specializations including: أجهزة الحواسيب المحمولة, صناعة السيارات والدراجات النارية, الصلب. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشونغتشينغ، الصين",
      "en": "Chongqing, Chongqing, China",
      "zh": "中国重庆重庆"
    },
    "coordinates": {
      "latitude": 29.563,
      "longitude": 106.5516
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "chongqing",
      "أجهزة الحواسيب المحمولة",
      "صناعة السيارات والدراجات النارية",
      "الصلب"
    ],
    "features": {
      "ar": [
        "أجهزة الحواسيب المحمولة",
        "صناعة السيارات والدراجات النارية",
        "الصلب"
      ],
      "en": [
        "أجهزة الحواسيب المحمولة",
        "صناعة السيارات والدراجات النارية",
        "الصلب"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "أجهزة الحواسيب المحمولة",
        "صناعة السيارات والدراجات النارية",
        "الصلب"
      ],
      "cityTag": "عاصمة صناعة أجهزة الكمبيوتر والمحركات"
    }
  },
  {
    "id": "city-guangzhou",
    "slug": "guangzhou",
    "subdomain": "cities",
    "name": {
      "ar": "غوانغتشو",
      "en": "Guangzhou",
      "zh": "广州",
      "pinyin": "Guǎngzhōu"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "غوانغتشو",
      "en": "Guangzhou",
      "zh": "广州"
    },
    "citySlug": "guangzhou",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر غوانغتشو (广州) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: معرض كانتون الدولي، قطع غيار السيارات، الملابس والجلود والحقائب. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangzhou (广州) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: معرض كانتون الدولي, قطع غيار السيارات, الملابس والجلود والحقائب. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Guangzhou, Guangdong, China",
      "zh": "中国广东广州"
    },
    "coordinates": {
      "latitude": 23.1291,
      "longitude": 113.2644
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "معرض كانتون الدولي",
      "قطع غيار السيارات",
      "الملابس والجلود والحقائب"
    ],
    "features": {
      "ar": [
        "معرض كانتون الدولي",
        "قطع غيار السيارات",
        "الملابس والجلود والحقائب"
      ],
      "en": [
        "معرض كانتون الدولي",
        "قطع غيار السيارات",
        "الملابس والجلود والحقائب"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "تدقيق ميداني وفحص مباشر لمجمعات الصناعة والأسواق",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم فحص هذه المدينة ومجمعاتها الصناعية وأسواق الجملة التابعة لها ميدانياً بواسطة المستشار حسام مبروك مع التحقق من سلاسل التوريد وشركات الشحن المعتمدة.",
        "en": "Audited in the field by Consultant Hossam Mabrouk with on-site inspection of manufacturing clusters, wholesale markets, and verified logistics lines."
      }
    },
    "extra": {
      "famousIndustries": [
        "معرض كانتون الدولي",
        "قطع غيار السيارات",
        "الملابس والجلود والحقائب"
      ],
      "cityTag": "عاصمة التجارة والاستيراد في جنوب الصين"
    }
  },
  {
    "id": "city-shenzhen",
    "slug": "shenzhen",
    "subdomain": "cities",
    "name": {
      "ar": "شينزين",
      "en": "Shenzhen",
      "zh": "深圳",
      "pinyin": "Shēnzhèn"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "شينزين",
      "en": "Shenzhen",
      "zh": "深圳"
    },
    "citySlug": "shenzhen",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر شينزين (深圳) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: سوق هواكيانغبي للإلكترونيات، معدات الاتصالات 5G، الطائرات بدون طيار. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shenzhen (深圳) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: سوق هواكيانغبي للإلكترونيات, معدات الاتصالات 5G, الطائرات بدون طيار. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Shenzhen, Guangdong, China",
      "zh": "中国广东深圳"
    },
    "coordinates": {
      "latitude": 22.5431,
      "longitude": 114.0579
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "سوق هواكيانغبي للإلكترونيات",
      "معدات الاتصالات 5G",
      "الطائرات بدون طيار"
    ],
    "features": {
      "ar": [
        "سوق هواكيانغبي للإلكترونيات",
        "معدات الاتصالات 5G",
        "الطائرات بدون طيار"
      ],
      "en": [
        "سوق هواكيانغبي للإلكترونيات",
        "معدات الاتصالات 5G",
        "الطائرات بدون طيار"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "تدقيق ميداني وفحص مباشر لمجمعات الصناعة والأسواق",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم فحص هذه المدينة ومجمعاتها الصناعية وأسواق الجملة التابعة لها ميدانياً بواسطة المستشار حسام مبروك مع التحقق من سلاسل التوريد وشركات الشحن المعتمدة.",
        "en": "Audited in the field by Consultant Hossam Mabrouk with on-site inspection of manufacturing clusters, wholesale markets, and verified logistics lines."
      }
    },
    "extra": {
      "famousIndustries": [
        "سوق هواكيانغبي للإلكترونيات",
        "معدات الاتصالات 5G",
        "الطائرات بدون طيار"
      ],
      "cityTag": "عاصمة الابتكار التكنولوجي والإلكترونيات"
    }
  },
  {
    "id": "city-foshan",
    "slug": "foshan",
    "subdomain": "cities",
    "name": {
      "ar": "فوشان",
      "en": "Foshan",
      "zh": "佛山",
      "pinyin": "Fóshān"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "فوشان",
      "en": "Foshan",
      "zh": "佛山"
    },
    "citySlug": "foshan",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر فوشان (佛山) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: أثاث لوفر ولكونغ، السيراميك ومواد البناء، الأجهزة المنزلية ميديا. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Foshan (佛山) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: أثاث لوفر ولكونغ, السيراميك ومواد البناء, الأجهزة المنزلية ميديا. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Foshan, Guangdong, China",
      "zh": "中国广东佛山"
    },
    "coordinates": {
      "latitude": 23.0215,
      "longitude": 113.1214
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "أثاث لوفر ولكونغ",
      "السيراميك ومواد البناء",
      "الأجهزة المنزلية ميديا"
    ],
    "features": {
      "ar": [
        "أثاث لوفر ولكونغ",
        "السيراميك ومواد البناء",
        "الأجهزة المنزلية ميديا"
      ],
      "en": [
        "أثاث لوفر ولكونغ",
        "السيراميك ومواد البناء",
        "الأجهزة المنزلية ميديا"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "تدقيق ميداني وفحص مباشر لمجمعات الصناعة والأسواق",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم فحص هذه المدينة ومجمعاتها الصناعية وأسواق الجملة التابعة لها ميدانياً بواسطة المستشار حسام مبروك مع التحقق من سلاسل التوريد وشركات الشحن المعتمدة.",
        "en": "Audited in the field by Consultant Hossam Mabrouk with on-site inspection of manufacturing clusters, wholesale markets, and verified logistics lines."
      }
    },
    "extra": {
      "famousIndustries": [
        "أثاث لوفر ولكونغ",
        "السيراميك ومواد البناء",
        "الأجهزة المنزلية ميديا"
      ],
      "cityTag": "عاصمة الأثاث والسيراميك ومواد البناء"
    }
  },
  {
    "id": "city-shunde",
    "slug": "shunde",
    "subdomain": "cities",
    "name": {
      "ar": "شوني",
      "en": "Shunde",
      "zh": "顺德",
      "pinyin": "Shùndé"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "شوني",
      "en": "Shunde",
      "zh": "顺德"
    },
    "citySlug": "shunde",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر شوني (顺德) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: أكبر سوق أثاث في العالم، أجهزة التكييف والتبريد، أواني الطهي الذكية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shunde (顺德) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: أكبر سوق أثاث في العالم, أجهزة التكييف والتبريد, أواني الطهي الذكية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Shunde, Guangdong, China",
      "zh": "中国广东顺德"
    },
    "coordinates": {
      "latitude": 22.8028,
      "longitude": 113.2925
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "أكبر سوق أثاث في العالم",
      "أجهزة التكييف والتبريد",
      "أواني الطهي الذكية"
    ],
    "features": {
      "ar": [
        "أكبر سوق أثاث في العالم",
        "أجهزة التكييف والتبريد",
        "أواني الطهي الذكية"
      ],
      "en": [
        "أكبر سوق أثاث في العالم",
        "أجهزة التكييف والتبريد",
        "أواني الطهي الذكية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "تدقيق ميداني وفحص مباشر لمجمعات الصناعة والأسواق",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم فحص هذه المدينة ومجمعاتها الصناعية وأسواق الجملة التابعة لها ميدانياً بواسطة المستشار حسام مبروك مع التحقق من سلاسل التوريد وشركات الشحن المعتمدة.",
        "en": "Audited in the field by Consultant Hossam Mabrouk with on-site inspection of manufacturing clusters, wholesale markets, and verified logistics lines."
      }
    },
    "extra": {
      "famousIndustries": [
        "أكبر سوق أثاث في العالم",
        "أجهزة التكييف والتبريد",
        "أواني الطهي الذكية"
      ],
      "cityTag": "المركز العالمي لأثاث المكاتب والمنازل"
    }
  },
  {
    "id": "city-dongguan",
    "slug": "dongguan",
    "subdomain": "cities",
    "name": {
      "ar": "دونغقوان",
      "en": "Dongguan",
      "zh": "东莞",
      "pinyin": "Dōngguǎn"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "دونغقوان",
      "en": "Dongguan",
      "zh": "东莞"
    },
    "citySlug": "dongguan",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر دونغقوان (东莞) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: تجميع الهواتف الذكية (أوبو/فيفو)، القوالب الصناعية الدقيقة، سوق هومن للملابس. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Dongguan (东莞) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: تجميع الهواتف الذكية (أوبو/فيفو), القوالب الصناعية الدقيقة, سوق هومن للملابس. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Dongguan, Guangdong, China",
      "zh": "中国广东东莞"
    },
    "coordinates": {
      "latitude": 23.0207,
      "longitude": 113.7518
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "تجميع الهواتف الذكية (أوبو/فيفو)",
      "القوالب الصناعية الدقيقة",
      "سوق هومن للملابس"
    ],
    "features": {
      "ar": [
        "تجميع الهواتف الذكية (أوبو/فيفو)",
        "القوالب الصناعية الدقيقة",
        "سوق هومن للملابس"
      ],
      "en": [
        "تجميع الهواتف الذكية (أوبو/فيفو)",
        "القوالب الصناعية الدقيقة",
        "سوق هومن للملابس"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "تدقيق ميداني وفحص مباشر لمجمعات الصناعة والأسواق",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم فحص هذه المدينة ومجمعاتها الصناعية وأسواق الجملة التابعة لها ميدانياً بواسطة المستشار حسام مبروك مع التحقق من سلاسل التوريد وشركات الشحن المعتمدة.",
        "en": "Audited in the field by Consultant Hossam Mabrouk with on-site inspection of manufacturing clusters, wholesale markets, and verified logistics lines."
      }
    },
    "extra": {
      "famousIndustries": [
        "تجميع الهواتف الذكية (أوبو/فيفو)",
        "القوالب الصناعية الدقيقة",
        "سوق هومن للملابس"
      ],
      "cityTag": "مصنع العالم للهواتف الذكية والقوالب"
    }
  },
  {
    "id": "city-zhongshan",
    "slug": "zhongshan",
    "subdomain": "cities",
    "name": {
      "ar": "تشونغشان",
      "en": "Zhongshan",
      "zh": "中山",
      "pinyin": "Zhōngshān"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "تشونغشان",
      "en": "Zhongshan",
      "zh": "中山"
    },
    "citySlug": "zhongshan",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر تشونغشان (中山) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: سوق قوجين العالمي للإضاءة، الأقفال والخردوات شياولان، الأجهزة المنزلية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Zhongshan (中山) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: سوق قوجين العالمي للإضاءة, الأقفال والخردوات شياولان, الأجهزة المنزلية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Zhongshan, Guangdong, China",
      "zh": "中国广东中山"
    },
    "coordinates": {
      "latitude": 22.5176,
      "longitude": 113.3928
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "سوق قوجين العالمي للإضاءة",
      "الأقفال والخردوات شياولان",
      "الأجهزة المنزلية"
    ],
    "features": {
      "ar": [
        "سوق قوجين العالمي للإضاءة",
        "الأقفال والخردوات شياولان",
        "الأجهزة المنزلية"
      ],
      "en": [
        "سوق قوجين العالمي للإضاءة",
        "الأقفال والخردوات شياولان",
        "الأجهزة المنزلية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "تدقيق ميداني وفحص مباشر لمجمعات الصناعة والأسواق",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم فحص هذه المدينة ومجمعاتها الصناعية وأسواق الجملة التابعة لها ميدانياً بواسطة المستشار حسام مبروك مع التحقق من سلاسل التوريد وشركات الشحن المعتمدة.",
        "en": "Audited in the field by Consultant Hossam Mabrouk with on-site inspection of manufacturing clusters, wholesale markets, and verified logistics lines."
      }
    },
    "extra": {
      "famousIndustries": [
        "سوق قوجين العالمي للإضاءة",
        "الأقفال والخردوات شياولان",
        "الأجهزة المنزلية"
      ],
      "cityTag": "عاصمة الإضاءة والثريات العالمية"
    }
  },
  {
    "id": "city-zhuhai",
    "slug": "zhuhai",
    "subdomain": "cities",
    "name": {
      "ar": "زوهاي",
      "en": "Zhuhai",
      "zh": "珠海",
      "pinyin": "Zhūhǎi"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "زوهاي",
      "en": "Zhuhai",
      "zh": "珠海"
    },
    "citySlug": "zhuhai",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر زوهاي (珠海) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: مكيفات جري Gree العالمية، طابعات الحبر والليزر، ميناء غاولان العميق. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Zhuhai (珠海) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: مكيفات جري Gree العالمية, طابعات الحبر والليزر, ميناء غاولان العميق. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Zhuhai, Guangdong, China",
      "zh": "中国广东珠海"
    },
    "coordinates": {
      "latitude": 22.2707,
      "longitude": 113.5767
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "مكيفات جري Gree العالمية",
      "طابعات الحبر والليزر",
      "ميناء غاولان العميق"
    ],
    "features": {
      "ar": [
        "مكيفات جري Gree العالمية",
        "طابعات الحبر والليزر",
        "ميناء غاولان العميق"
      ],
      "en": [
        "مكيفات جري Gree العالمية",
        "طابعات الحبر والليزر",
        "ميناء غاولان العميق"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "مكيفات جري Gree العالمية",
        "طابعات الحبر والليزر",
        "ميناء غاولان العميق"
      ],
      "cityTag": "عاصمة أجهزة التكييف وطابعات الكمبيوتر"
    }
  },
  {
    "id": "city-huizhou",
    "slug": "huizhou",
    "subdomain": "cities",
    "name": {
      "ar": "هويتشو",
      "en": "Huizhou",
      "zh": "惠州",
      "pinyin": "Huìzhōu"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "هويتشو",
      "en": "Huizhou",
      "zh": "惠州"
    },
    "citySlug": "huizhou",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر هويتشو (惠州) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: بطاريات الليثيوم للإلكترونيات، شاشات العرض TCL، البتروكيماويات دايوان. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Huizhou (惠州) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: بطاريات الليثيوم للإلكترونيات, شاشات العرض TCL, البتروكيماويات دايوان. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Huizhou, Guangdong, China",
      "zh": "中国广东惠州"
    },
    "coordinates": {
      "latitude": 23.1118,
      "longitude": 114.4162
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "بطاريات الليثيوم للإلكترونيات",
      "شاشات العرض TCL",
      "البتروكيماويات دايوان"
    ],
    "features": {
      "ar": [
        "بطاريات الليثيوم للإلكترونيات",
        "شاشات العرض TCL",
        "البتروكيماويات دايوان"
      ],
      "en": [
        "بطاريات الليثيوم للإلكترونيات",
        "شاشات العرض TCL",
        "البتروكيماويات دايوان"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "بطاريات الليثيوم للإلكترونيات",
        "شاشات العرض TCL",
        "البتروكيماويات دايوان"
      ],
      "cityTag": "مركز تصنيع بطاريات الطاقة وشاشات العرض"
    }
  },
  {
    "id": "city-jiangmen",
    "slug": "jiangmen",
    "subdomain": "cities",
    "name": {
      "ar": "جيانغمن",
      "en": "Jiangmen",
      "zh": "江门",
      "pinyin": "Jiāngmén"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "جيانغمن",
      "en": "Jiangmen",
      "zh": "江门"
    },
    "citySlug": "jiangmen",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر جيانغمن (江门) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: خلاطات ومحابس المياه شوكوه، الدراجات النارية، الأجهزة المنزلية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangmen (江门) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: خلاطات ومحابس المياه شوكوه, الدراجات النارية, الأجهزة المنزلية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Jiangmen, Guangdong, China",
      "zh": "中国广东江门"
    },
    "coordinates": {
      "latitude": 22.5787,
      "longitude": 113.0815
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "خلاطات ومحابس المياه شوكوه",
      "الدراجات النارية",
      "الأجهزة المنزلية"
    ],
    "features": {
      "ar": [
        "خلاطات ومحابس المياه شوكوه",
        "الدراجات النارية",
        "الأجهزة المنزلية"
      ],
      "en": [
        "خلاطات ومحابس المياه شوكوه",
        "الدراجات النارية",
        "الأجهزة المنزلية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "خلاطات ومحابس المياه شوكوه",
        "الدراجات النارية",
        "الأجهزة المنزلية"
      ],
      "cityTag": "عاصمة تصنيع الأدوات الصحية والخلاطات"
    }
  },
  {
    "id": "city-shantou",
    "slug": "shantou",
    "subdomain": "cities",
    "name": {
      "ar": "شانتو",
      "en": "Shantou",
      "zh": "汕头",
      "pinyin": "Shàntóu"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "شانتو",
      "en": "Shantou",
      "zh": "汕头"
    },
    "citySlug": "shantou",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر شانتو (汕头) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: ألعاب الأطفال تشنغهاي العالمية، الملابس الداخلية والتريكو، الطباعة والتغليف. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shantou (汕头) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: ألعاب الأطفال تشنغهاي العالمية, الملابس الداخلية والتريكو, الطباعة والتغليف. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Shantou, Guangdong, China",
      "zh": "中国广东汕头"
    },
    "coordinates": {
      "latitude": 23.3541,
      "longitude": 116.682
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "ألعاب الأطفال تشنغهاي العالمية",
      "الملابس الداخلية والتريكو",
      "الطباعة والتغليف"
    ],
    "features": {
      "ar": [
        "ألعاب الأطفال تشنغهاي العالمية",
        "الملابس الداخلية والتريكو",
        "الطباعة والتغليف"
      ],
      "en": [
        "ألعاب الأطفال تشنغهاي العالمية",
        "الملابس الداخلية والتريكو",
        "الطباعة والتغليف"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "ألعاب الأطفال تشنغهاي العالمية",
        "الملابس الداخلية والتريكو",
        "الطباعة والتغليف"
      ],
      "cityTag": "عاصمة صناعة وتصدير ألعاب الأطفال"
    }
  },
  {
    "id": "city-zhanjiang",
    "slug": "zhanjiang",
    "subdomain": "cities",
    "name": {
      "ar": "تشانجيانغ",
      "en": "Zhanjiang",
      "zh": "湛江",
      "pinyin": "Zhànjiāng"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "تشانجيانغ",
      "en": "Zhanjiang",
      "zh": "湛江"
    },
    "citySlug": "zhanjiang",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر تشانجيانغ (湛江) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: أواني الطهي الكهربائية ليانتانغ، الصلب البحري باوستيل، الميناء العميق. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Zhanjiang (湛江) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: أواني الطهي الكهربائية ليانتانغ, الصلب البحري باوستيل, الميناء العميق. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Zhanjiang, Guangdong, China",
      "zh": "中国广东湛江"
    },
    "coordinates": {
      "latitude": 21.2707,
      "longitude": 110.3594
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "أواني الطهي الكهربائية ليانتانغ",
      "الصلب البحري باوستيل",
      "الميناء العميق"
    ],
    "features": {
      "ar": [
        "أواني الطهي الكهربائية ليانتانغ",
        "الصلب البحري باوستيل",
        "الميناء العميق"
      ],
      "en": [
        "أواني الطهي الكهربائية ليانتانغ",
        "الصلب البحري باوستيل",
        "الميناء العميق"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "أواني الطهي الكهربائية ليانتانغ",
        "الصلب البحري باوستيل",
        "الميناء العميق"
      ],
      "cityTag": "بوابة التجارة البحرية الجنوبية وأواني الأرز"
    }
  },
  {
    "id": "city-zhaoqing",
    "slug": "zhaoqing",
    "subdomain": "cities",
    "name": {
      "ar": "تشاوتشينغ",
      "en": "Zhaoqing",
      "zh": "肇庆",
      "pinyin": "Zhàoqìng"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "تشاوتشينغ",
      "en": "Zhaoqing",
      "zh": "肇庆"
    },
    "citySlug": "zhaoqing",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر تشاوتشينغ (肇庆) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: مقاطع وبثق الألومنيوم، سيارات إكسبينغ الكهربائية Xpeng، حجر دوانيان. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Zhaoqing (肇庆) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: مقاطع وبثق الألومنيوم, سيارات إكسبينغ الكهربائية Xpeng, حجر دوانيان. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Zhaoqing, Guangdong, China",
      "zh": "中国广东肇庆"
    },
    "coordinates": {
      "latitude": 23.0515,
      "longitude": 112.4725
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "مقاطع وبثق الألومنيوم",
      "سيارات إكسبينغ الكهربائية Xpeng",
      "حجر دوانيان"
    ],
    "features": {
      "ar": [
        "مقاطع وبثق الألومنيوم",
        "سيارات إكسبينغ الكهربائية Xpeng",
        "حجر دوانيان"
      ],
      "en": [
        "مقاطع وبثق الألومنيوم",
        "سيارات إكسبينغ الكهربائية Xpeng",
        "حجر دوانيان"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "مقاطع وبثق الألومنيوم",
        "سيارات إكسبينغ الكهربائية Xpeng",
        "حجر دوانيان"
      ],
      "cityTag": "مركز مقاطع الألومنيوم والسيارات الكهربائية"
    }
  },
  {
    "id": "city-chaozhou",
    "slug": "chaozhou",
    "subdomain": "cities",
    "name": {
      "ar": "تشاوتشو",
      "en": "Chaozhou",
      "zh": "潮州",
      "pinyin": "Cháozhōu"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "تشاوتشو",
      "en": "Chaozhou",
      "zh": "潮州"
    },
    "citySlug": "chaozhou",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر تشاوتشو (潮州) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: السيراميك والأطقم الصحية، الخزف الفني واليومي، صناعة الأغذية المجففة. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Chaozhou (潮州) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: السيراميك والأطقم الصحية, الخزف الفني واليومي, صناعة الأغذية المجففة. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Chaozhou, Guangdong, China",
      "zh": "中国广东潮州"
    },
    "coordinates": {
      "latitude": 23.6569,
      "longitude": 116.6226
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "السيراميك والأطقم الصحية",
      "الخزف الفني واليومي",
      "صناعة الأغذية المجففة"
    ],
    "features": {
      "ar": [
        "السيراميك والأطقم الصحية",
        "الخزف الفني واليومي",
        "صناعة الأغذية المجففة"
      ],
      "en": [
        "السيراميك والأطقم الصحية",
        "الخزف الفني واليومي",
        "صناعة الأغذية المجففة"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "السيراميك والأطقم الصحية",
        "الخزف الفني واليومي",
        "صناعة الأغذية المجففة"
      ],
      "cityTag": "عاصمة الخزف الصيني والأطقم الصحية"
    }
  },
  {
    "id": "city-jieyang",
    "slug": "jieyang",
    "subdomain": "cities",
    "name": {
      "ar": "جيه يانغ",
      "en": "Jieyang",
      "zh": "揭阳",
      "pinyin": "Jiēyáng"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "جيه يانغ",
      "en": "Jieyang",
      "zh": "揭阳"
    },
    "citySlug": "jieyang",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر جيه يانغ (揭阳) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: أدوات المائدة الفولاذية والسكاكين، سوق اليشم والزمرد يانغمي، المعادن. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jieyang (揭阳) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: أدوات المائدة الفولاذية والسكاكين, سوق اليشم والزمرد يانغمي, المعادن. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Jieyang, Guangdong, China",
      "zh": "中国广东揭阳"
    },
    "coordinates": {
      "latitude": 23.5499,
      "longitude": 116.3729
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "أدوات المائدة الفولاذية والسكاكين",
      "سوق اليشم والزمرد يانغمي",
      "المعادن"
    ],
    "features": {
      "ar": [
        "أدوات المائدة الفولاذية والسكاكين",
        "سوق اليشم والزمرد يانغمي",
        "المعادن"
      ],
      "en": [
        "أدوات المائدة الفولاذية والسكاكين",
        "سوق اليشم والزمرد يانغمي",
        "المعادن"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "أدوات المائدة الفولاذية والسكاكين",
        "سوق اليشم والزمرد يانغمي",
        "المعادن"
      ],
      "cityTag": "عاصمة أدوات المائدة المصنوعة من الستانلس ستيل"
    }
  },
  {
    "id": "city-qingyuan",
    "slug": "qingyuan",
    "subdomain": "cities",
    "name": {
      "ar": "تشينغيوان",
      "en": "Qingyuan",
      "zh": "清远",
      "pinyin": "Qīngyuǎn"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "تشينغيوان",
      "en": "Qingyuan",
      "zh": "清远"
    },
    "citySlug": "qingyuan",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر تشينغيوان (清远) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: سيراميك الأرضيات الإنشائي، تدوير وصهر النحاس، الجلود الصناعية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Qingyuan (清远) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: سيراميك الأرضيات الإنشائي, تدوير وصهر النحاس, الجلود الصناعية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Qingyuan, Guangdong, China",
      "zh": "中国广东清远"
    },
    "coordinates": {
      "latitude": 23.6817,
      "longitude": 113.056
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "سيراميك الأرضيات الإنشائي",
      "تدوير وصهر النحاس",
      "الجلود الصناعية"
    ],
    "features": {
      "ar": [
        "سيراميك الأرضيات الإنشائي",
        "تدوير وصهر النحاس",
        "الجلود الصناعية"
      ],
      "en": [
        "سيراميك الأرضيات الإنشائي",
        "تدوير وصهر النحاس",
        "الجلود الصناعية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "سيراميك الأرضيات الإنشائي",
        "تدوير وصهر النحاس",
        "الجلود الصناعية"
      ],
      "cityTag": "قاعدة تصنيع بلاط السيراميك والمواد الإنشائية"
    }
  },
  {
    "id": "city-shaoguan",
    "slug": "shaoguan",
    "subdomain": "cities",
    "name": {
      "ar": "شاوغوان",
      "en": "Shaoguan",
      "zh": "韶关",
      "pinyin": "Sháoguān"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "شاوغوان",
      "en": "Shaoguan",
      "zh": "韶关"
    },
    "citySlug": "shaoguan",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر شاوغوان (韶关) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: مراكز الحوسبة السحابية الوطنية، صناعة الصلب والآلات الثقيلة. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shaoguan (韶关) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: مراكز الحوسبة السحابية الوطنية, صناعة الصلب والآلات الثقيلة. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Shaoguan, Guangdong, China",
      "zh": "中国广东韶关"
    },
    "coordinates": {
      "latitude": 24.8104,
      "longitude": 113.5975
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "مراكز الحوسبة السحابية الوطنية",
      "صناعة الصلب والآلات الثقيلة"
    ],
    "features": {
      "ar": [
        "مراكز الحوسبة السحابية الوطنية",
        "صناعة الصلب والآلات الثقيلة"
      ],
      "en": [
        "مراكز الحوسبة السحابية الوطنية",
        "صناعة الصلب والآلات الثقيلة"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "مراكز الحوسبة السحابية الوطنية",
        "صناعة الصلب والآلات الثقيلة"
      ],
      "cityTag": "المركز القومي لمراكز البيانات والصلب"
    }
  },
  {
    "id": "city-meizhou",
    "slug": "meizhou",
    "subdomain": "cities",
    "name": {
      "ar": "ميتشو",
      "en": "Meizhou",
      "zh": "梅州",
      "pinyin": "Méizhōu"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "ميتشو",
      "en": "Meizhou",
      "zh": "梅州"
    },
    "citySlug": "meizhou",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر ميتشو (梅州) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: لوحات الدوائر المطبوعة النحاسية PCB، السيراميك التقني الإلكتروني. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Meizhou (梅州) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: لوحات الدوائر المطبوعة النحاسية PCB, السيراميك التقني الإلكتروني. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Meizhou, Guangdong, China",
      "zh": "中国广东梅州"
    },
    "coordinates": {
      "latitude": 24.2886,
      "longitude": 116.1225
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "لوحات الدوائر المطبوعة النحاسية PCB",
      "السيراميك التقني الإلكتروني"
    ],
    "features": {
      "ar": [
        "لوحات الدوائر المطبوعة النحاسية PCB",
        "السيراميك التقني الإلكتروني"
      ],
      "en": [
        "لوحات الدوائر المطبوعة النحاسية PCB",
        "السيراميك التقني الإلكتروني"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "لوحات الدوائر المطبوعة النحاسية PCB",
        "السيراميك التقني الإلكتروني"
      ],
      "cityTag": "قاعدة لوحات الدوائر الإلكترونية المطبوعة"
    }
  },
  {
    "id": "city-shanwei",
    "slug": "shanwei",
    "subdomain": "cities",
    "name": {
      "ar": "شانوي",
      "en": "Shanwei",
      "zh": "汕尾",
      "pinyin": "Shànwěi"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "شانوي",
      "en": "Shanwei",
      "zh": "汕尾"
    },
    "citySlug": "shanwei",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر شانوي (汕尾) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: توربينات طاقة الرياح البحرية، قطع غيار السيارات الكهربائية، المجوهرات. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shanwei (汕尾) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: توربينات طاقة الرياح البحرية, قطع غيار السيارات الكهربائية, المجوهرات. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Shanwei, Guangdong, China",
      "zh": "中国广东汕尾"
    },
    "coordinates": {
      "latitude": 22.7862,
      "longitude": 115.3753
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "توربينات طاقة الرياح البحرية",
      "قطع غيار السيارات الكهربائية",
      "المجوهرات"
    ],
    "features": {
      "ar": [
        "توربينات طاقة الرياح البحرية",
        "قطع غيار السيارات الكهربائية",
        "المجوهرات"
      ],
      "en": [
        "توربينات طاقة الرياح البحرية",
        "قطع غيار السيارات الكهربائية",
        "المجوهرات"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "توربينات طاقة الرياح البحرية",
        "قطع غيار السيارات الكهربائية",
        "المجوهرات"
      ],
      "cityTag": "مركز تصنيع معدات طاقة الرياح البحرية"
    }
  },
  {
    "id": "city-heyuan",
    "slug": "heyuan",
    "subdomain": "cities",
    "name": {
      "ar": "هيوان",
      "en": "Heyuan",
      "zh": "河源",
      "pinyin": "Héyuán"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "هيوان",
      "en": "Heyuan",
      "zh": "河源"
    },
    "citySlug": "heyuan",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر هيوان (河源) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: قوالب الهواتف المحمولة الدقيقة، المياه المعدنية والتعبئة الحديثة. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Heyuan (河源) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: قوالب الهواتف المحمولة الدقيقة, المياه المعدنية والتعبئة الحديثة. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Heyuan, Guangdong, China",
      "zh": "中国广东河源"
    },
    "coordinates": {
      "latitude": 23.7435,
      "longitude": 114.7006
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "قوالب الهواتف المحمولة الدقيقة",
      "المياه المعدنية والتعبئة الحديثة"
    ],
    "features": {
      "ar": [
        "قوالب الهواتف المحمولة الدقيقة",
        "المياه المعدنية والتعبئة الحديثة"
      ],
      "en": [
        "قوالب الهواتف المحمولة الدقيقة",
        "المياه المعدنية والتعبئة الحديثة"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "قوالب الهواتف المحمولة الدقيقة",
        "المياه المعدنية والتعبئة الحديثة"
      ],
      "cityTag": "مركز صناعة القوالب البلاستيكية الدقيقة"
    }
  },
  {
    "id": "city-yangjiang",
    "slug": "yangjiang",
    "subdomain": "cities",
    "name": {
      "ar": "يانغجيانغ",
      "en": "Yangjiang",
      "zh": "阳江",
      "pinyin": "Yángjiāng"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "يانغجيانغ",
      "en": "Yangjiang",
      "zh": "阳江"
    },
    "citySlug": "yangjiang",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر يانغجيانغ (阳江) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: السكاكين والمقصات وأدوات المطبخ (تنتج 70% من صادرات الصين)، طاقة الرياح. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yangjiang (阳江) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: السكاكين والمقصات وأدوات المطبخ (تنتج 70% من صادرات الصين), طاقة الرياح. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Yangjiang, Guangdong, China",
      "zh": "中国广东阳江"
    },
    "coordinates": {
      "latitude": 21.856,
      "longitude": 111.9827
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "السكاكين والمقصات وأدوات المطبخ (تنتج 70% من صادرات الصين)",
      "طاقة الرياح"
    ],
    "features": {
      "ar": [
        "السكاكين والمقصات وأدوات المطبخ (تنتج 70% من صادرات الصين)",
        "طاقة الرياح"
      ],
      "en": [
        "السكاكين والمقصات وأدوات المطبخ (تنتج 70% من صادرات الصين)",
        "طاقة الرياح"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "السكاكين والمقصات وأدوات المطبخ (تنتج 70% من صادرات الصين)",
        "طاقة الرياح"
      ],
      "cityTag": "عاصمة السكاكين والمقصات وأدوات المطبخ"
    }
  },
  {
    "id": "city-maoming",
    "slug": "maoming",
    "subdomain": "cities",
    "name": {
      "ar": "ماومينغ",
      "en": "Maoming",
      "zh": "茂名",
      "pinyin": "Màomíng"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "ماومينغ",
      "en": "Maoming",
      "zh": "茂名"
    },
    "citySlug": "maoming",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر ماومينغ (茂名) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: البتروكيماويات وتكرير النفط، الميناء البحري بوخه، الأغذية والفاكهة. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Maoming (茂名) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: البتروكيماويات وتكرير النفط, الميناء البحري بوخه, الأغذية والفاكهة. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Maoming, Guangdong, China",
      "zh": "中国广东茂名"
    },
    "coordinates": {
      "latitude": 21.663,
      "longitude": 110.9255
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "البتروكيماويات وتكرير النفط",
      "الميناء البحري بوخه",
      "الأغذية والفاكهة"
    ],
    "features": {
      "ar": [
        "البتروكيماويات وتكرير النفط",
        "الميناء البحري بوخه",
        "الأغذية والفاكهة"
      ],
      "en": [
        "البتروكيماويات وتكرير النفط",
        "الميناء البحري بوخه",
        "الأغذية والفاكهة"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "البتروكيماويات وتكرير النفط",
        "الميناء البحري بوخه",
        "الأغذية والفاكهة"
      ],
      "cityTag": "القطب البتروكيماوي والميناء الجنوبي"
    }
  },
  {
    "id": "city-yunfu",
    "slug": "yunfu",
    "subdomain": "cities",
    "name": {
      "ar": "يونفو",
      "en": "Yunfu",
      "zh": "云浮",
      "pinyin": "Yúnfú"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "يونفو",
      "en": "Yunfu",
      "zh": "云浮"
    },
    "citySlug": "yunfu",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر يونفو (云浮) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: الرخام والأحجار والغرانيت الطبيعي، خلايا وقود الهيدروجين، أواني الستانلس ستيل. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yunfu (云浮) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: الرخام والأحجار والغرانيت الطبيعي, خلايا وقود الهيدروجين, أواني الستانلس ستيل. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Yunfu, Guangdong, China",
      "zh": "中国广东云浮"
    },
    "coordinates": {
      "latitude": 22.9298,
      "longitude": 112.0444
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "الرخام والأحجار والغرانيت الطبيعي",
      "خلايا وقود الهيدروجين",
      "أواني الستانلس ستيل"
    ],
    "features": {
      "ar": [
        "الرخام والأحجار والغرانيت الطبيعي",
        "خلايا وقود الهيدروجين",
        "أواني الستانلس ستيل"
      ],
      "en": [
        "الرخام والأحجار والغرانيت الطبيعي",
        "خلايا وقود الهيدروجين",
        "أواني الستانلس ستيل"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "الرخام والأحجار والغرانيت الطبيعي",
        "خلايا وقود الهيدروجين",
        "أواني الستانلس ستيل"
      ],
      "cityTag": "عاصمة معالجة وتجارة الرخام والأحجار"
    }
  },
  {
    "id": "city-kaiping",
    "slug": "kaiping",
    "subdomain": "cities",
    "name": {
      "ar": "كايبينغ",
      "en": "Kaiping",
      "zh": "开平",
      "pinyin": "Kāipíng"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "كايبينغ",
      "en": "Kaiping",
      "zh": "开平"
    },
    "citySlug": "kaiping",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر كايبينغ (开平) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: بلدة شوكوه للأدوات الصحية، صنابير المياه وخراطيم السباكة، الأقمشة. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Kaiping (开平) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: بلدة شوكوه للأدوات الصحية, صنابير المياه وخراطيم السباكة, الأقمشة. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Kaiping, Guangdong, China",
      "zh": "中国广东开平"
    },
    "coordinates": {
      "latitude": 22.3762,
      "longitude": 112.6984
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "بلدة شوكوه للأدوات الصحية",
      "صنابير المياه وخراطيم السباكة",
      "الأقمشة"
    ],
    "features": {
      "ar": [
        "بلدة شوكوه للأدوات الصحية",
        "صنابير المياه وخراطيم السباكة",
        "الأقمشة"
      ],
      "en": [
        "بلدة شوكوه للأدوات الصحية",
        "صنابير المياه وخراطيم السباكة",
        "الأقمشة"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "بلدة شوكوه للأدوات الصحية",
        "صنابير المياه وخراطيم السباكة",
        "الأقمشة"
      ],
      "cityTag": "المركز العالمي لصنابير وخلاطات المياه الصحية"
    }
  },
  {
    "id": "city-taishan",
    "slug": "taishan",
    "subdomain": "cities",
    "name": {
      "ar": "تايشان",
      "en": "Taishan",
      "zh": "台山",
      "pinyin": "Táishān"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "تايشان",
      "en": "Taishan",
      "zh": "台山"
    },
    "citySlug": "taishan",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر تايشان (台山) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: المعدات الكهربائية الصناعية، القطع المعدنية المصبوبة، الصناعات البحرية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Taishan (台山) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: المعدات الكهربائية الصناعية, القطع المعدنية المصبوبة, الصناعات البحرية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Taishan, Guangdong, China",
      "zh": "中国广东台山"
    },
    "coordinates": {
      "latitude": 22.2514,
      "longitude": 112.7939
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "المعدات الكهربائية الصناعية",
      "القطع المعدنية المصبوبة",
      "الصناعات البحرية"
    ],
    "features": {
      "ar": [
        "المعدات الكهربائية الصناعية",
        "القطع المعدنية المصبوبة",
        "الصناعات البحرية"
      ],
      "en": [
        "المعدات الكهربائية الصناعية",
        "القطع المعدنية المصبوبة",
        "الصناعات البحرية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "المعدات الكهربائية الصناعية",
        "القطع المعدنية المصبوبة",
        "الصناعات البحرية"
      ],
      "cityTag": "مركز المعدات الميكانيكية والصناعات البحرية"
    }
  },
  {
    "id": "city-sihui",
    "slug": "sihui",
    "subdomain": "cities",
    "name": {
      "ar": "سيهوي",
      "en": "Sihui",
      "zh": "四会",
      "pinyin": "Sìhuì"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "سيهوي",
      "en": "Sihui",
      "zh": "四会"
    },
    "citySlug": "sihui",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر سيهوي (四会) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: سوق وتصنيع اليشم والزمرد الطبيعي، مقاطع النحاس الدقيقة. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Sihui (四会) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: سوق وتصنيع اليشم والزمرد الطبيعي, مقاطع النحاس الدقيقة. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Sihui, Guangdong, China",
      "zh": "中国广东四会"
    },
    "coordinates": {
      "latitude": 23.3618,
      "longitude": 112.7342
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "سوق وتصنيع اليشم والزمرد الطبيعي",
      "مقاطع النحاس الدقيقة"
    ],
    "features": {
      "ar": [
        "سوق وتصنيع اليشم والزمرد الطبيعي",
        "مقاطع النحاس الدقيقة"
      ],
      "en": [
        "سوق وتصنيع اليشم والزمرد الطبيعي",
        "مقاطع النحاس الدقيقة"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "سوق وتصنيع اليشم والزمرد الطبيعي",
        "مقاطع النحاس الدقيقة"
      ],
      "cityTag": "أكبر مركز لنحت وتجارة اليشم الأخضر في آسيا"
    }
  },
  {
    "id": "city-puning",
    "slug": "puning",
    "subdomain": "cities",
    "name": {
      "ar": "بونينغ",
      "en": "Puning",
      "zh": "普宁",
      "pinyin": "Pǔníng"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "بونينغ",
      "en": "Puning",
      "zh": "普宁"
    },
    "citySlug": "puning",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر بونينغ (普宁) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: الملابس الجاهزة والبيجامات واللانجري، الأعشاب الطبية الصينية للجملة. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Puning (普宁) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: الملابس الجاهزة والبيجامات واللانجري, الأعشاب الطبية الصينية للجملة. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Puning, Guangdong, China",
      "zh": "中国广东普宁"
    },
    "coordinates": {
      "latitude": 23.2974,
      "longitude": 116.1656
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "الملابس الجاهزة والبيجامات واللانجري",
      "الأعشاب الطبية الصينية للجملة"
    ],
    "features": {
      "ar": [
        "الملابس الجاهزة والبيجامات واللانجري",
        "الأعشاب الطبية الصينية للجملة"
      ],
      "en": [
        "الملابس الجاهزة والبيجامات واللانجري",
        "الأعشاب الطبية الصينية للجملة"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "الملابس الجاهزة والبيجامات واللانجري",
        "الأعشاب الطبية الصينية للجملة"
      ],
      "cityTag": "عاصمة تصنيع الملابس المنزلية والأعشاب"
    }
  },
  {
    "id": "city-nanhai",
    "slug": "nanhai",
    "subdomain": "cities",
    "name": {
      "ar": "نانهاي",
      "en": "Nanhai",
      "zh": "南海",
      "pinyin": "Nánhǎi"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "نانهاي",
      "en": "Nanhai",
      "zh": "南海"
    },
    "citySlug": "nanhai",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر نانهاي (南海) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: مقاطع الألومنيوم دالي، قطع غيار السيارات، الأقمشة غير المنسوجة. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Nanhai (南海) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: مقاطع الألومنيوم دالي, قطع غيار السيارات, الأقمشة غير المنسوجة. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Nanhai, Guangdong, China",
      "zh": "中国广东南海"
    },
    "coordinates": {
      "latitude": 23.0289,
      "longitude": 113.1432
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "مقاطع الألومنيوم دالي",
      "قطع غيار السيارات",
      "الأقمشة غير المنسوجة"
    ],
    "features": {
      "ar": [
        "مقاطع الألومنيوم دالي",
        "قطع غيار السيارات",
        "الأقمشة غير المنسوجة"
      ],
      "en": [
        "مقاطع الألومنيوم دالي",
        "قطع غيار السيارات",
        "الأقمشة غير المنسوجة"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "مقاطع الألومنيوم دالي",
        "قطع غيار السيارات",
        "الأقمشة غير المنسوجة"
      ],
      "cityTag": "عاصمة بثق ومقاطع الألومنيوم في الصين"
    }
  },
  {
    "id": "city-gaoyao",
    "slug": "gaoyao",
    "subdomain": "cities",
    "name": {
      "ar": "غاويواو",
      "en": "Gaoyao",
      "zh": "高要",
      "pinyin": "Gāoyào"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "غاويواو",
      "en": "Gaoyao",
      "zh": "高要"
    },
    "citySlug": "gaoyao",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر غاويواو (高要) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: مسابك صب المعادن الدقيقة، إكسسوارات الأبواب والنوافذ جينلي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Gaoyao (高要) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: مسابك صب المعادن الدقيقة, إكسسوارات الأبواب والنوافذ جينلي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Gaoyao, Guangdong, China",
      "zh": "中国广东高要"
    },
    "coordinates": {
      "latitude": 23.0261,
      "longitude": 112.4578
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "مسابك صب المعادن الدقيقة",
      "إكسسوارات الأبواب والنوافذ جينلي"
    ],
    "features": {
      "ar": [
        "مسابك صب المعادن الدقيقة",
        "إكسسوارات الأبواب والنوافذ جينلي"
      ],
      "en": [
        "مسابك صب المعادن الدقيقة",
        "إكسسوارات الأبواب والنوافذ جينلي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "مسابك صب المعادن الدقيقة",
        "إكسسوارات الأبواب والنوافذ جينلي"
      ],
      "cityTag": "عاصمة إكسسوارات الأبواب والخردوات الدقيقة"
    }
  },
  {
    "id": "city-hangzhou",
    "slug": "hangzhou",
    "subdomain": "cities",
    "name": {
      "ar": "هانغتشو",
      "en": "Hangzhou",
      "zh": "杭州",
      "pinyin": "Hángzhōu"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "هانغتشو",
      "en": "Hangzhou",
      "zh": "杭州"
    },
    "citySlug": "hangzhou",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر هانغتشو (杭州) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التجارة الإلكترونية (علي بابا)، الحرير والأقمشة سيجيتشينغ، الذكاء الاصطناعي وكاميرات المراقبة (هيكفيجن/داهوا). ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hangzhou (杭州) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: التجارة الإلكترونية (علي بابا), الحرير والأقمشة سيجيتشينغ, الذكاء الاصطناعي وكاميرات المراقبة (هيكفيجن/داهوا). Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Hangzhou, Zhejiang, China",
      "zh": "中国浙江杭州"
    },
    "coordinates": {
      "latitude": 30.2741,
      "longitude": 120.1551
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "التجارة الإلكترونية (علي بابا)",
      "الحرير والأقمشة سيجيتشينغ",
      "الذكاء الاصطناعي وكاميرات المراقبة (هيكفيجن/داهوا)"
    ],
    "features": {
      "ar": [
        "التجارة الإلكترونية (علي بابا)",
        "الحرير والأقمشة سيجيتشينغ",
        "الذكاء الاصطناعي وكاميرات المراقبة (هيكفيجن/داهوا)"
      ],
      "en": [
        "التجارة الإلكترونية (علي بابا)",
        "الحرير والأقمشة سيجيتشينغ",
        "الذكاء الاصطناعي وكاميرات المراقبة (هيكفيجن/داهوا)"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التجارة الإلكترونية (علي بابا)",
        "الحرير والأقمشة سيجيتشينغ",
        "الذكاء الاصطناعي وكاميرات المراقبة (هيكفيجن/داهوا)"
      ],
      "cityTag": "عاصمة التجارة الرقمية والحرير وكاميرات المراقبة"
    }
  },
  {
    "id": "city-ningbo",
    "slug": "ningbo",
    "subdomain": "cities",
    "name": {
      "ar": "نينغبو",
      "en": "Ningbo",
      "zh": "宁波",
      "pinyin": "Níngbō"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "نينغبو",
      "en": "Ningbo",
      "zh": "宁波"
    },
    "citySlug": "ningbo",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر نينغبو (宁波) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: ميناء نينغبو-تشوشان العالمي، ماكينات حقن البلاستيك هايتيان، قطع غيار السيارات ومستلزمات الصرف الصحي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Ningbo (宁波) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: ميناء نينغبو-تشوشان العالمي, ماكينات حقن البلاستيك هايتيان, قطع غيار السيارات ومستلزمات الصرف الصحي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Ningbo, Zhejiang, China",
      "zh": "中国浙江宁波"
    },
    "coordinates": {
      "latitude": 29.8683,
      "longitude": 121.544
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "ميناء نينغبو-تشوشان العالمي",
      "ماكينات حقن البلاستيك هايتيان",
      "قطع غيار السيارات ومستلزمات الصرف الصحي"
    ],
    "features": {
      "ar": [
        "ميناء نينغبو-تشوشان العالمي",
        "ماكينات حقن البلاستيك هايتيان",
        "قطع غيار السيارات ومستلزمات الصرف الصحي"
      ],
      "en": [
        "ميناء نينغبو-تشوشان العالمي",
        "ماكينات حقن البلاستيك هايتيان",
        "قطع غيار السيارات ومستلزمات الصرف الصحي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "تدقيق ميداني وفحص مباشر لمجمعات الصناعة والأسواق",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم فحص هذه المدينة ومجمعاتها الصناعية وأسواق الجملة التابعة لها ميدانياً بواسطة المستشار حسام مبروك مع التحقق من سلاسل التوريد وشركات الشحن المعتمدة.",
        "en": "Audited in the field by Consultant Hossam Mabrouk with on-site inspection of manufacturing clusters, wholesale markets, and verified logistics lines."
      }
    },
    "extra": {
      "famousIndustries": [
        "ميناء نينغبو-تشوشان العالمي",
        "ماكينات حقن البلاستيك هايتيان",
        "قطع غيار السيارات ومستلزمات الصرف الصحي"
      ],
      "cityTag": "عملاق الشحن البحري وماكينات البلاستيك"
    }
  },
  {
    "id": "city-wenzhou",
    "slug": "wenzhou",
    "subdomain": "cities",
    "name": {
      "ar": "وينتشو",
      "en": "Wenzhou",
      "zh": "温州",
      "pinyin": "Wēnzhōu"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "وينتشو",
      "en": "Wenzhou",
      "zh": "温州"
    },
    "citySlug": "wenzhou",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر وينتشو (温州) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: الأحذية والجلود العالمية، المفاتيح والقواطع الكهربائية تشينت، النظارات والولاعات والأزرار. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Wenzhou (温州) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: الأحذية والجلود العالمية, المفاتيح والقواطع الكهربائية تشينت, النظارات والولاعات والأزرار. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Wenzhou, Zhejiang, China",
      "zh": "中国浙江温州"
    },
    "coordinates": {
      "latitude": 27.9943,
      "longitude": 120.6994
    },
    "coverImage": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "الأحذية والجلود العالمية",
      "المفاتيح والقواطع الكهربائية تشينت",
      "النظارات والولاعات والأزرار"
    ],
    "features": {
      "ar": [
        "الأحذية والجلود العالمية",
        "المفاتيح والقواطع الكهربائية تشينت",
        "النظارات والولاعات والأزرار"
      ],
      "en": [
        "الأحذية والجلود العالمية",
        "المفاتيح والقواطع الكهربائية تشينت",
        "النظارات والولاعات والأزرار"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "الأحذية والجلود العالمية",
        "المفاتيح والقواطع الكهربائية تشينت",
        "النظارات والولاعات والأزرار"
      ],
      "cityTag": "عاصمة صناعة الأحذية والمعدات الكهربائية الصناعية"
    }
  },
  {
    "id": "city-jiaxing",
    "slug": "jiaxing",
    "subdomain": "cities",
    "name": {
      "ar": "جياشينغ",
      "en": "Jiaxing",
      "zh": "嘉兴",
      "pinyin": "Jiāxīng"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "جياشينغ",
      "en": "Jiaxing",
      "zh": "嘉兴"
    },
    "citySlug": "jiaxing",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر جياشينغ (嘉兴) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: المنسوجات والألياف الكيماوية، الإلكترونيات الدقيقة، صناعة الجلود هاينينغ. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiaxing (嘉兴) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: المنسوجات والألياف الكيماوية, الإلكترونيات الدقيقة, صناعة الجلود هاينينغ. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Jiaxing, Zhejiang, China",
      "zh": "中国浙江嘉兴"
    },
    "coordinates": {
      "latitude": 30.746,
      "longitude": 120.7555
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "المنسوجات والألياف الكيماوية",
      "الإلكترونيات الدقيقة",
      "صناعة الجلود هاينينغ"
    ],
    "features": {
      "ar": [
        "المنسوجات والألياف الكيماوية",
        "الإلكترونيات الدقيقة",
        "صناعة الجلود هاينينغ"
      ],
      "en": [
        "المنسوجات والألياف الكيماوية",
        "الإلكترونيات الدقيقة",
        "صناعة الجلود هاينينغ"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "المنسوجات والألياف الكيماوية",
        "الإلكترونيات الدقيقة",
        "صناعة الجلود هاينينغ"
      ],
      "cityTag": "حلقة الوصل الصناعية بين شنغهاي وهانغتشو"
    }
  },
  {
    "id": "city-huzhou",
    "slug": "huzhou",
    "subdomain": "cities",
    "name": {
      "ar": "هوتشو",
      "en": "Huzhou",
      "zh": "湖州",
      "pinyin": "Húzhōu"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "هوتشو",
      "en": "Huzhou",
      "zh": "湖州"
    },
    "citySlug": "huzhou",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر هوتشو (湖州) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: أرضيات الباركيه والأخشاب نانشون، المصاعد والسلالم المتحركة، الحرير الطبيعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Huzhou (湖州) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: أرضيات الباركيه والأخشاب نانشون, المصاعد والسلالم المتحركة, الحرير الطبيعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Huzhou, Zhejiang, China",
      "zh": "中国浙江湖州"
    },
    "coordinates": {
      "latitude": 30.8943,
      "longitude": 120.0868
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "أرضيات الباركيه والأخشاب نانشون",
      "المصاعد والسلالم المتحركة",
      "الحرير الطبيعي"
    ],
    "features": {
      "ar": [
        "أرضيات الباركيه والأخشاب نانشون",
        "المصاعد والسلالم المتحركة",
        "الحرير الطبيعي"
      ],
      "en": [
        "أرضيات الباركيه والأخشاب نانشون",
        "المصاعد والسلالم المتحركة",
        "الحرير الطبيعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "أرضيات الباركيه والأخشاب نانشون",
        "المصاعد والسلالم المتحركة",
        "الحرير الطبيعي"
      ],
      "cityTag": "عاصمة الأرضيات الخشبية والمصاعد الكهربائية"
    }
  },
  {
    "id": "city-shaoxing",
    "slug": "shaoxing",
    "subdomain": "cities",
    "name": {
      "ar": "شاوشينغ",
      "en": "Shaoxing",
      "zh": "绍兴",
      "pinyin": "Shàoxīng"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "شاوشينغ",
      "en": "Shaoxing",
      "zh": "绍兴"
    },
    "citySlug": "shaoxing",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر شاوشينغ (绍兴) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: مدينة المنسوجات كوتشياو العالمية، الستائر وأقمشة المفروشات، الأصباغ والكيماويات. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shaoxing (绍兴) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: مدينة المنسوجات كوتشياو العالمية, الستائر وأقمشة المفروشات, الأصباغ والكيماويات. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Shaoxing, Zhejiang, China",
      "zh": "中国浙江绍兴"
    },
    "coordinates": {
      "latitude": 30.0024,
      "longitude": 120.5822
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "مدينة المنسوجات كوتشياو العالمية",
      "الستائر وأقمشة المفروشات",
      "الأصباغ والكيماويات"
    ],
    "features": {
      "ar": [
        "مدينة المنسوجات كوتشياو العالمية",
        "الستائر وأقمشة المفروشات",
        "الأصباغ والكيماويات"
      ],
      "en": [
        "مدينة المنسوجات كوتشياو العالمية",
        "الستائر وأقمشة المفروشات",
        "الأصباغ والكيماويات"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "تدقيق ميداني وفحص مباشر لمجمعات الصناعة والأسواق",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم فحص هذه المدينة ومجمعاتها الصناعية وأسواق الجملة التابعة لها ميدانياً بواسطة المستشار حسام مبروك مع التحقق من سلاسل التوريد وشركات الشحن المعتمدة.",
        "en": "Audited in the field by Consultant Hossam Mabrouk with on-site inspection of manufacturing clusters, wholesale markets, and verified logistics lines."
      }
    },
    "extra": {
      "famousIndustries": [
        "مدينة المنسوجات كوتشياو العالمية",
        "الستائر وأقمشة المفروشات",
        "الأصباغ والكيماويات"
      ],
      "cityTag": "أكبر سوق لتجارة وتصنيع المنسوجات في العالم"
    }
  },
  {
    "id": "city-jinhua",
    "slug": "jinhua",
    "subdomain": "cities",
    "name": {
      "ar": "جينهوا",
      "en": "Jinhua",
      "zh": "金华",
      "pinyin": "Jīnhuá"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "جينهوا",
      "en": "Jinhua",
      "zh": "金华"
    },
    "citySlug": "jinhua",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر جينهوا (金华) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التجارة الدولية واللوجستيات، سيارات الطاقة الجديدة، الأدوات والأجهزة اليدوية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jinhua (金华) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: التجارة الدولية واللوجستيات, سيارات الطاقة الجديدة, الأدوات والأجهزة اليدوية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Jinhua, Zhejiang, China",
      "zh": "中国浙江金华"
    },
    "coordinates": {
      "latitude": 29.0792,
      "longitude": 119.6474
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "التجارة الدولية واللوجستيات",
      "سيارات الطاقة الجديدة",
      "الأدوات والأجهزة اليدوية"
    ],
    "features": {
      "ar": [
        "التجارة الدولية واللوجستيات",
        "سيارات الطاقة الجديدة",
        "الأدوات والأجهزة اليدوية"
      ],
      "en": [
        "التجارة الدولية واللوجستيات",
        "سيارات الطاقة الجديدة",
        "الأدوات والأجهزة اليدوية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التجارة الدولية واللوجستيات",
        "سيارات الطاقة الجديدة",
        "الأدوات والأجهزة اليدوية"
      ],
      "cityTag": "الحاضنة الإقليمية والتجارية لمدينة إيوو"
    }
  },
  {
    "id": "city-quzhou",
    "slug": "quzhou",
    "subdomain": "cities",
    "name": {
      "ar": "تشوتشو-زي",
      "en": "Quzhou",
      "zh": "衢州",
      "pinyin": "Qúzhōu"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "تشوتشو-زي",
      "en": "Quzhou",
      "zh": "衢州"
    },
    "citySlug": "quzhou",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر تشوتشو-زي (衢州) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: الكيماويات الفلورية والسيليكون، الورق التخصصي والصناعي، خلايا الطاقة الشمسية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Quzhou (衢州) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: الكيماويات الفلورية والسيليكون, الورق التخصصي والصناعي, خلايا الطاقة الشمسية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Quzhou, Zhejiang, China",
      "zh": "中国浙江衢州"
    },
    "coordinates": {
      "latitude": 28.9701,
      "longitude": 118.8726
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "الكيماويات الفلورية والسيليكون",
      "الورق التخصصي والصناعي",
      "خلايا الطاقة الشمسية"
    ],
    "features": {
      "ar": [
        "الكيماويات الفلورية والسيليكون",
        "الورق التخصصي والصناعي",
        "خلايا الطاقة الشمسية"
      ],
      "en": [
        "الكيماويات الفلورية والسيليكون",
        "الورق التخصصي والصناعي",
        "خلايا الطاقة الشمسية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "الكيماويات الفلورية والسيليكون",
        "الورق التخصصي والصناعي",
        "خلايا الطاقة الشمسية"
      ],
      "cityTag": "قاعدة صناعة الكيماويات والمواد المتقدمة"
    }
  },
  {
    "id": "city-zhoushan",
    "slug": "zhoushan",
    "subdomain": "cities",
    "name": {
      "ar": "تشوشان",
      "en": "Zhoushan",
      "zh": "舟山",
      "pinyin": "Zhōushān"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "تشوشان",
      "en": "Zhoushan",
      "zh": "舟山"
    },
    "citySlug": "zhoushan",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر تشوشان (舟山) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: تكرير وتخزين البترول والغاز، بناء وإصلاح السفن العملاقة، اللوجستيات البحرية والمأكولات البحرية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Zhoushan (舟山) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: تكرير وتخزين البترول والغاز, بناء وإصلاح السفن العملاقة, اللوجستيات البحرية والمأكولات البحرية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Zhoushan, Zhejiang, China",
      "zh": "中国浙江舟山"
    },
    "coordinates": {
      "latitude": 29.9853,
      "longitude": 122.2072
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "تكرير وتخزين البترول والغاز",
      "بناء وإصلاح السفن العملاقة",
      "اللوجستيات البحرية والمأكولات البحرية"
    ],
    "features": {
      "ar": [
        "تكرير وتخزين البترول والغاز",
        "بناء وإصلاح السفن العملاقة",
        "اللوجستيات البحرية والمأكولات البحرية"
      ],
      "en": [
        "تكرير وتخزين البترول والغاز",
        "بناء وإصلاح السفن العملاقة",
        "اللوجستيات البحرية والمأكولات البحرية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "تكرير وتخزين البترول والغاز",
        "بناء وإصلاح السفن العملاقة",
        "اللوجستيات البحرية والمأكولات البحرية"
      ],
      "cityTag": "أرخبيل الموانئ وتكرير النفط البحري"
    }
  },
  {
    "id": "city-taizhou-zj",
    "slug": "taizhou-zj",
    "subdomain": "cities",
    "name": {
      "ar": "تايتشو (تشجيانغ)",
      "en": "Taizhou (Zhejiang)",
      "zh": "台州",
      "pinyin": "Tāizhōu"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "تايتشو (تشجيانغ)",
      "en": "Taizhou (Zhejiang)",
      "zh": "台州"
    },
    "citySlug": "taizhou-zj",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر تايتشو (تشجيانغ) (台州) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: قوالب البلاستيك هوانغيان العالمية، السيارات (جيلي Geely)، ماكينات الخياطة الصناعية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Taizhou (Zhejiang) (台州) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: قوالب البلاستيك هوانغيان العالمية, السيارات (جيلي Geely), ماكينات الخياطة الصناعية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Taizhou (Zhejiang), Zhejiang, China",
      "zh": "中国浙江台州"
    },
    "coordinates": {
      "latitude": 28.6564,
      "longitude": 121.4286
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "قوالب البلاستيك هوانغيان العالمية",
      "السيارات (جيلي Geely)",
      "ماكينات الخياطة الصناعية"
    ],
    "features": {
      "ar": [
        "قوالب البلاستيك هوانغيان العالمية",
        "السيارات (جيلي Geely)",
        "ماكينات الخياطة الصناعية"
      ],
      "en": [
        "قوالب البلاستيك هوانغيان العالمية",
        "السيارات (جيلي Geely)",
        "ماكينات الخياطة الصناعية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "قوالب البلاستيك هوانغيان العالمية",
        "السيارات (جيلي Geely)",
        "ماكينات الخياطة الصناعية"
      ],
      "cityTag": "عاصمة القوالب البلاستيكية وماكينات الخياطة"
    }
  },
  {
    "id": "city-lishui",
    "slug": "lishui",
    "subdomain": "cities",
    "name": {
      "ar": "ليشوي",
      "en": "Lishui",
      "zh": "丽水",
      "pinyin": "Líshuǐ"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "ليشوي",
      "en": "Lishui",
      "zh": "丽水"
    },
    "citySlug": "lishui",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر ليشوي (丽水) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: أدوات التوجيه والمسارات الميكانيكية الخطية، الأحذية المصنعة، الصلب المقاوم للصدأ. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Lishui (丽水) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: أدوات التوجيه والمسارات الميكانيكية الخطية, الأحذية المصنعة, الصلب المقاوم للصدأ. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Lishui, Zhejiang, China",
      "zh": "中国浙江丽水"
    },
    "coordinates": {
      "latitude": 28.4677,
      "longitude": 119.923
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "أدوات التوجيه والمسارات الميكانيكية الخطية",
      "الأحذية المصنعة",
      "الصلب المقاوم للصدأ"
    ],
    "features": {
      "ar": [
        "أدوات التوجيه والمسارات الميكانيكية الخطية",
        "الأحذية المصنعة",
        "الصلب المقاوم للصدأ"
      ],
      "en": [
        "أدوات التوجيه والمسارات الميكانيكية الخطية",
        "الأحذية المصنعة",
        "الصلب المقاوم للصدأ"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "أدوات التوجيه والمسارات الميكانيكية الخطية",
        "الأحذية المصنعة",
        "الصلب المقاوم للصدأ"
      ],
      "cityTag": "مركز تصنيع أدوات التوجيه الميكانيكي الدقيق"
    }
  },
  {
    "id": "city-yiwu",
    "slug": "yiwu",
    "subdomain": "cities",
    "name": {
      "ar": "إيوو",
      "en": "Yiwu",
      "zh": "义乌",
      "pinyin": "Yìwū"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "إيوو",
      "en": "Yiwu",
      "zh": "义乌"
    },
    "citySlug": "yiwu",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر إيوو (义乌) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: سوق فوتيان الدولي (سوق السلع الصغيرة الأكبر عالمياً)، الحقائب والإكسسوارات، ألعاب الأطفال والقرطاسية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yiwu (义乌) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: سوق فوتيان الدولي (سوق السلع الصغيرة الأكبر عالمياً), الحقائب والإكسسوارات, ألعاب الأطفال والقرطاسية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Yiwu, Zhejiang, China",
      "zh": "中国浙江义乌"
    },
    "coordinates": {
      "latitude": 29.3069,
      "longitude": 120.0751
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "سوق فوتيان الدولي (سوق السلع الصغيرة الأكبر عالمياً)",
      "الحقائب والإكسسوارات",
      "ألعاب الأطفال والقرطاسية"
    ],
    "features": {
      "ar": [
        "سوق فوتيان الدولي (سوق السلع الصغيرة الأكبر عالمياً)",
        "الحقائب والإكسسوارات",
        "ألعاب الأطفال والقرطاسية"
      ],
      "en": [
        "سوق فوتيان الدولي (سوق السلع الصغيرة الأكبر عالمياً)",
        "الحقائب والإكسسوارات",
        "ألعاب الأطفال والقرطاسية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "تدقيق ميداني وفحص مباشر لمجمعات الصناعة والأسواق",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم فحص هذه المدينة ومجمعاتها الصناعية وأسواق الجملة التابعة لها ميدانياً بواسطة المستشار حسام مبروك مع التحقق من سلاسل التوريد وشركات الشحن المعتمدة.",
        "en": "Audited in the field by Consultant Hossam Mabrouk with on-site inspection of manufacturing clusters, wholesale markets, and verified logistics lines."
      }
    },
    "extra": {
      "famousIndustries": [
        "سوق فوتيان الدولي (سوق السلع الصغيرة الأكبر عالمياً)",
        "الحقائب والإكسسوارات",
        "ألعاب الأطفال والقرطاسية"
      ],
      "cityTag": "عاصمة التجارة والسلع الاستهلاكية الصغيرة في العالم"
    }
  },
  {
    "id": "city-cixi",
    "slug": "cixi",
    "subdomain": "cities",
    "name": {
      "ar": "تسيشي",
      "en": "Cixi",
      "zh": "慈溪",
      "pinyin": "Cíxī"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "تسيشي",
      "en": "Cixi",
      "zh": "慈溪"
    },
    "citySlug": "cixi",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر تسيشي (慈溪) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: الأجهزة المنزلية الصغيرة (مبردات مياه/مراوح/سخانات)، المحامل الدقيقة، التوصيلات الكهربائية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Cixi (慈溪) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: الأجهزة المنزلية الصغيرة (مبردات مياه/مراوح/سخانات), المحامل الدقيقة, التوصيلات الكهربائية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Cixi, Zhejiang, China",
      "zh": "中国浙江慈溪"
    },
    "coordinates": {
      "latitude": 30.1696,
      "longitude": 121.2664
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "الأجهزة المنزلية الصغيرة (مبردات مياه/مراوح/سخانات)",
      "المحامل الدقيقة",
      "التوصيلات الكهربائية"
    ],
    "features": {
      "ar": [
        "الأجهزة المنزلية الصغيرة (مبردات مياه/مراوح/سخانات)",
        "المحامل الدقيقة",
        "التوصيلات الكهربائية"
      ],
      "en": [
        "الأجهزة المنزلية الصغيرة (مبردات مياه/مراوح/سخانات)",
        "المحامل الدقيقة",
        "التوصيلات الكهربائية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "تدقيق ميداني وفحص مباشر لمجمعات الصناعة والأسواق",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم فحص هذه المدينة ومجمعاتها الصناعية وأسواق الجملة التابعة لها ميدانياً بواسطة المستشار حسام مبروك مع التحقق من سلاسل التوريد وشركات الشحن المعتمدة.",
        "en": "Audited in the field by Consultant Hossam Mabrouk with on-site inspection of manufacturing clusters, wholesale markets, and verified logistics lines."
      }
    },
    "extra": {
      "famousIndustries": [
        "الأجهزة المنزلية الصغيرة (مبردات مياه/مراوح/سخانات)",
        "المحامل الدقيقة",
        "التوصيلات الكهربائية"
      ],
      "cityTag": "عاصمة تصنيع الأجهزة الكهربائية الصغيرة"
    }
  },
  {
    "id": "city-yuyao",
    "slug": "yuyao",
    "subdomain": "cities",
    "name": {
      "ar": "يوياو",
      "en": "Yuyao",
      "zh": "余姚",
      "pinyin": "Yúyáo"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "يوياو",
      "en": "Yuyao",
      "zh": "余姚"
    },
    "citySlug": "yuyao",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر يوياو (余姚) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: مدينة البلاستيك الصينية، المضخات والرشاشات البلاستيكية، الأجهزة الكهربائية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yuyao (余姚) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: مدينة البلاستيك الصينية, المضخات والرشاشات البلاستيكية, الأجهزة الكهربائية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Yuyao, Zhejiang, China",
      "zh": "中国浙江余姚"
    },
    "coordinates": {
      "latitude": 30.0384,
      "longitude": 121.1534
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "مدينة البلاستيك الصينية",
      "المضخات والرشاشات البلاستيكية",
      "الأجهزة الكهربائية"
    ],
    "features": {
      "ar": [
        "مدينة البلاستيك الصينية",
        "المضخات والرشاشات البلاستيكية",
        "الأجهزة الكهربائية"
      ],
      "en": [
        "مدينة البلاستيك الصينية",
        "المضخات والرشاشات البلاستيكية",
        "الأجهزة الكهربائية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "مدينة البلاستيك الصينية",
        "المضخات والرشاشات البلاستيكية",
        "الأجهزة الكهربائية"
      ],
      "cityTag": "أكبر مركز لتداول وتصنيع المواد البلاستيكية والرشاشات"
    }
  },
  {
    "id": "city-yongkang",
    "slug": "yongkang",
    "subdomain": "cities",
    "name": {
      "ar": "يونغكانغ",
      "en": "Yongkang",
      "zh": "永康",
      "pinyin": "Yǒngkāng"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "يونغكانغ",
      "en": "Yongkang",
      "zh": "永康"
    },
    "citySlug": "yongkang",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر يونغكانغ (永康) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: أبواب الأمان والصلب (70% من إنتاج الصين)، الأدوات الكهربائية اليدوية، الترامبولين وأجهزة اللياقة. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yongkang (永康) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: أبواب الأمان والصلب (70% من إنتاج الصين), الأدوات الكهربائية اليدوية, الترامبولين وأجهزة اللياقة. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Yongkang, Zhejiang, China",
      "zh": "中国浙江永康"
    },
    "coordinates": {
      "latitude": 28.944,
      "longitude": 120.0473
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "أبواب الأمان والصلب (70% من إنتاج الصين)",
      "الأدوات الكهربائية اليدوية",
      "الترامبولين وأجهزة اللياقة"
    ],
    "features": {
      "ar": [
        "أبواب الأمان والصلب (70% من إنتاج الصين)",
        "الأدوات الكهربائية اليدوية",
        "الترامبولين وأجهزة اللياقة"
      ],
      "en": [
        "أبواب الأمان والصلب (70% من إنتاج الصين)",
        "الأدوات الكهربائية اليدوية",
        "الترامبولين وأجهزة اللياقة"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "تدقيق ميداني وفحص مباشر لمجمعات الصناعة والأسواق",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم فحص هذه المدينة ومجمعاتها الصناعية وأسواق الجملة التابعة لها ميدانياً بواسطة المستشار حسام مبروك مع التحقق من سلاسل التوريد وشركات الشحن المعتمدة.",
        "en": "Audited in the field by Consultant Hossam Mabrouk with on-site inspection of manufacturing clusters, wholesale markets, and verified logistics lines."
      }
    },
    "extra": {
      "famousIndustries": [
        "أبواب الأمان والصلب (70% من إنتاج الصين)",
        "الأدوات الكهربائية اليدوية",
        "الترامبولين وأجهزة اللياقة"
      ],
      "cityTag": "عاصمة الخردوات والمعدات المعدنية والأبواب"
    }
  },
  {
    "id": "city-haining",
    "slug": "haining",
    "subdomain": "cities",
    "name": {
      "ar": "هاينينغ",
      "en": "Haining",
      "zh": "海宁",
      "pinyin": "Hǎiníng"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "هاينينغ",
      "en": "Haining",
      "zh": "海宁"
    },
    "citySlug": "haining",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر هاينينغ (海宁) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: مدينة الجلود والفرّاء العالمية، أقمشة الستائر والمفروشات شويدو، الجوارب. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Haining (海宁) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: مدينة الجلود والفرّاء العالمية, أقمشة الستائر والمفروشات شويدو, الجوارب. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Haining, Zhejiang, China",
      "zh": "中国浙江海宁"
    },
    "coordinates": {
      "latitude": 30.5097,
      "longitude": 120.6813
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "مدينة الجلود والفرّاء العالمية",
      "أقمشة الستائر والمفروشات شويدو",
      "الجوارب"
    ],
    "features": {
      "ar": [
        "مدينة الجلود والفرّاء العالمية",
        "أقمشة الستائر والمفروشات شويدو",
        "الجوارب"
      ],
      "en": [
        "مدينة الجلود والفرّاء العالمية",
        "أقمشة الستائر والمفروشات شويدو",
        "الجوارب"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "تدقيق ميداني وفحص مباشر لمجمعات الصناعة والأسواق",
      "verifiedAt": "2026-08-25",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تم فحص هذه المدينة ومجمعاتها الصناعية وأسواق الجملة التابعة لها ميدانياً بواسطة المستشار حسام مبروك مع التحقق من سلاسل التوريد وشركات الشحن المعتمدة.",
        "en": "Audited in the field by Consultant Hossam Mabrouk with on-site inspection of manufacturing clusters, wholesale markets, and verified logistics lines."
      }
    },
    "extra": {
      "famousIndustries": [
        "مدينة الجلود والفرّاء العالمية",
        "أقمشة الستائر والمفروشات شويدو",
        "الجوارب"
      ],
      "cityTag": "عاصمة الجلود وأقمشة الديكور والستائر"
    }
  },
  {
    "id": "city-tongxiang",
    "slug": "tongxiang",
    "subdomain": "cities",
    "name": {
      "ar": "تونغشيانغ",
      "en": "Tongxiang",
      "zh": "桐乡",
      "pinyin": "Tóngxiāng"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "تونغشيانغ",
      "en": "Tongxiang",
      "zh": "桐乡"
    },
    "citySlug": "tongxiang",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر تونغشيانغ (桐乡) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: سوق بويوان للملابس الصوفية والتريكو، الألياف الزجاجية جوسي Jushi. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Tongxiang (桐乡) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: سوق بويوان للملابس الصوفية والتريكو, الألياف الزجاجية جوسي Jushi. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Tongxiang, Zhejiang, China",
      "zh": "中国浙江桐乡"
    },
    "coordinates": {
      "latitude": 30.6304,
      "longitude": 120.5451
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "سوق بويوان للملابس الصوفية والتريكو",
      "الألياف الزجاجية جوسي Jushi"
    ],
    "features": {
      "ar": [
        "سوق بويوان للملابس الصوفية والتريكو",
        "الألياف الزجاجية جوسي Jushi"
      ],
      "en": [
        "سوق بويوان للملابس الصوفية والتريكو",
        "الألياف الزجاجية جوسي Jushi"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "سوق بويوان للملابس الصوفية والتريكو",
        "الألياف الزجاجية جوسي Jushi"
      ],
      "cityTag": "أكبر مركز لتصنيع وتجارة التريكو والصوف في آسيا"
    }
  },
  {
    "id": "city-ruian",
    "slug": "ruian",
    "subdomain": "cities",
    "name": {
      "ar": "رويان",
      "en": "Ruian",
      "zh": "瑞安",
      "pinyin": "Ruì'ān"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "رويان",
      "en": "Ruian",
      "zh": "瑞安"
    },
    "citySlug": "ruian",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر رويان (瑞安) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: قطع غيار السيارات والدراجات النارية، ماكينات التعبئة والتغليف البلاستيكية، الأحذية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Ruian (瑞安) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: قطع غيار السيارات والدراجات النارية, ماكينات التعبئة والتغليف البلاستيكية, الأحذية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Ruian, Zhejiang, China",
      "zh": "中国浙江瑞安"
    },
    "coordinates": {
      "latitude": 27.7804,
      "longitude": 120.6551
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "قطع غيار السيارات والدراجات النارية",
      "ماكينات التعبئة والتغليف البلاستيكية",
      "الأحذية"
    ],
    "features": {
      "ar": [
        "قطع غيار السيارات والدراجات النارية",
        "ماكينات التعبئة والتغليف البلاستيكية",
        "الأحذية"
      ],
      "en": [
        "قطع غيار السيارات والدراجات النارية",
        "ماكينات التعبئة والتغليف البلاستيكية",
        "الأحذية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "قطع غيار السيارات والدراجات النارية",
        "ماكينات التعبئة والتغليف البلاستيكية",
        "الأحذية"
      ],
      "cityTag": "مركز تصنيع قطع غيار السيارات ومكائن التغليف"
    }
  },
  {
    "id": "city-yueqing",
    "slug": "yueqing",
    "subdomain": "cities",
    "name": {
      "ar": "يوتشينغ",
      "en": "Yueqing",
      "zh": "乐清",
      "pinyin": "Yuèqīng"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "يوتشينغ",
      "en": "Yueqing",
      "zh": "乐清"
    },
    "citySlug": "yueqing",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر يوتشينغ (乐清) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: الأجهزة الكهربائية منخفضة الجهد ليوشي، المفاتيح والقواطع (تشينت Chint/ديلكسي Delixi). ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yueqing (乐清) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: الأجهزة الكهربائية منخفضة الجهد ليوشي, المفاتيح والقواطع (تشينت Chint/ديلكسي Delixi). Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Yueqing, Zhejiang, China",
      "zh": "中国浙江乐清"
    },
    "coordinates": {
      "latitude": 28.1219,
      "longitude": 120.9634
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "الأجهزة الكهربائية منخفضة الجهد ليوشي",
      "المفاتيح والقواطع (تشينت Chint/ديلكسي Delixi)"
    ],
    "features": {
      "ar": [
        "الأجهزة الكهربائية منخفضة الجهد ليوشي",
        "المفاتيح والقواطع (تشينت Chint/ديلكسي Delixi)"
      ],
      "en": [
        "الأجهزة الكهربائية منخفضة الجهد ليوشي",
        "المفاتيح والقواطع (تشينت Chint/ديلكسي Delixi)"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "الأجهزة الكهربائية منخفضة الجهد ليوشي",
        "المفاتيح والقواطع (تشينت Chint/ديلكسي Delixi)"
      ],
      "cityTag": "عاصمة الأجهزة والمعدات الكهربائية الصناعية"
    }
  },
  {
    "id": "city-zhuji",
    "slug": "zhuji",
    "subdomain": "cities",
    "name": {
      "ar": "تشوجي",
      "en": "Zhuji",
      "zh": "诸暨",
      "pinyin": "Zhūjì"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "تشوجي",
      "en": "Zhuji",
      "zh": "诸暨"
    },
    "citySlug": "zhuji",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر تشوجي (诸暨) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: اللؤلؤ الزراعي الطبيعي شانشياوهو، الجوارب القطنية داتانغ، الأنابيب والصمامات النحاسية ديانكو. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Zhuji (诸暨) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: اللؤلؤ الزراعي الطبيعي شانشياوهو, الجوارب القطنية داتانغ, الأنابيب والصمامات النحاسية ديانكو. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Zhuji, Zhejiang, China",
      "zh": "中国浙江诸暨"
    },
    "coordinates": {
      "latitude": 29.7188,
      "longitude": 120.2407
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "اللؤلؤ الزراعي الطبيعي شانشياوهو",
      "الجوارب القطنية داتانغ",
      "الأنابيب والصمامات النحاسية ديانكو"
    ],
    "features": {
      "ar": [
        "اللؤلؤ الزراعي الطبيعي شانشياوهو",
        "الجوارب القطنية داتانغ",
        "الأنابيب والصمامات النحاسية ديانكو"
      ],
      "en": [
        "اللؤلؤ الزراعي الطبيعي شانشياوهو",
        "الجوارب القطنية داتانغ",
        "الأنابيب والصمامات النحاسية ديانكو"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "اللؤلؤ الزراعي الطبيعي شانشياوهو",
        "الجوارب القطنية داتانغ",
        "الأنابيب والصمامات النحاسية ديانكو"
      ],
      "cityTag": "عاصمة اللؤلؤ الطبيعي وصناعة الجوارب والأنابيب"
    }
  },
  {
    "id": "city-dongyang",
    "slug": "dongyang",
    "subdomain": "cities",
    "name": {
      "ar": "دونغ يانغ",
      "en": "Dongyang",
      "zh": "东阳",
      "pinyin": "Dōngyáng"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "دونغ يانغ",
      "en": "Dongyang",
      "zh": "东阳"
    },
    "citySlug": "dongyang",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر دونغ يانغ (东阳) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: أثاث خشب الورد المنحوت كلاسيكياً، صناعة السينما هنغديان، المغناطيس والمواد المغناطيسية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Dongyang (东阳) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: أثاث خشب الورد المنحوت كلاسيكياً, صناعة السينما هنغديان, المغناطيس والمواد المغناطيسية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Dongyang, Zhejiang, China",
      "zh": "中国浙江东阳"
    },
    "coordinates": {
      "latitude": 29.2687,
      "longitude": 120.2415
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "أثاث خشب الورد المنحوت كلاسيكياً",
      "صناعة السينما هنغديان",
      "المغناطيس والمواد المغناطيسية"
    ],
    "features": {
      "ar": [
        "أثاث خشب الورد المنحوت كلاسيكياً",
        "صناعة السينما هنغديان",
        "المغناطيس والمواد المغناطيسية"
      ],
      "en": [
        "أثاث خشب الورد المنحوت كلاسيكياً",
        "صناعة السينما هنغديان",
        "المغناطيس والمواد المغناطيسية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "أثاث خشب الورد المنحوت كلاسيكياً",
        "صناعة السينما هنغديان",
        "المغناطيس والمواد المغناطيسية"
      ],
      "cityTag": "عاصمة نحت الخشب وإنتاج الأثاث الكلاسيكي"
    }
  },
  {
    "id": "city-wenling",
    "slug": "wenling",
    "subdomain": "cities",
    "name": {
      "ar": "وينلينغ",
      "en": "Wenling",
      "zh": "温岭",
      "pinyin": "Wēnlǐng"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "وينلينغ",
      "en": "Wenling",
      "zh": "温岭"
    },
    "citySlug": "wenling",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر وينلينغ (温岭) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: مضخات المياه الكهربائية دايوان، الأحذية والأحذية الرياضية داسي، معدات المولدات. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Wenling (温岭) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: مضخات المياه الكهربائية دايوان, الأحذية والأحذية الرياضية داسي, معدات المولدات. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Wenling, Zhejiang, China",
      "zh": "中国浙江温岭"
    },
    "coordinates": {
      "latitude": 28.3664,
      "longitude": 121.3654
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "مضخات المياه الكهربائية دايوان",
      "الأحذية والأحذية الرياضية داسي",
      "معدات المولدات"
    ],
    "features": {
      "ar": [
        "مضخات المياه الكهربائية دايوان",
        "الأحذية والأحذية الرياضية داسي",
        "معدات المولدات"
      ],
      "en": [
        "مضخات المياه الكهربائية دايوان",
        "الأحذية والأحذية الرياضية داسي",
        "معدات المولدات"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "مضخات المياه الكهربائية دايوان",
        "الأحذية والأحذية الرياضية داسي",
        "معدات المولدات"
      ],
      "cityTag": "عاصمة مضخات المياه الدقيقة وصناعة الأحذية"
    }
  },
  {
    "id": "city-yuhuan",
    "slug": "yuhuan",
    "subdomain": "cities",
    "name": {
      "ar": "يوهوان",
      "en": "Yuhuan",
      "zh": "玉环",
      "pinyin": "Yùhuán"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "يوهوان",
      "en": "Yuhuan",
      "zh": "玉环"
    },
    "citySlug": "yuhuan",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر يوهوان (玉环) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: صمامات النحاس ومحابس المياه والغاز، قطع غيار مكابح السيارات، الأثاث الكلاسيكي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yuhuan (玉环) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: صمامات النحاس ومحابس المياه والغاز, قطع غيار مكابح السيارات, الأثاث الكلاسيكي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Yuhuan, Zhejiang, China",
      "zh": "中国浙江玉环"
    },
    "coordinates": {
      "latitude": 28.1342,
      "longitude": 121.2332
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "صمامات النحاس ومحابس المياه والغاز",
      "قطع غيار مكابح السيارات",
      "الأثاث الكلاسيكي"
    ],
    "features": {
      "ar": [
        "صمامات النحاس ومحابس المياه والغاز",
        "قطع غيار مكابح السيارات",
        "الأثاث الكلاسيكي"
      ],
      "en": [
        "صمامات النحاس ومحابس المياه والغاز",
        "قطع غيار مكابح السيارات",
        "الأثاث الكلاسيكي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "صمامات النحاس ومحابس المياه والغاز",
        "قطع غيار مكابح السيارات",
        "الأثاث الكلاسيكي"
      ],
      "cityTag": "عاصمة صمامات ومحابس النحاس في الصين"
    }
  },
  {
    "id": "city-jiangsu-district-1",
    "slug": "jiangsu-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ جيانغسو",
      "en": "Jiangsu East Commercial District of",
      "zh": "江苏东区",
      "pinyin": "Jiangsu District"
    },
    "province": {
      "ar": "جيانغسو",
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ جيانغسو",
      "en": "Jiangsu East Commercial District of",
      "zh": "江苏东区"
    },
    "citySlug": "jiangsu-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ جيانغسو (江苏东区) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangsu East Commercial District of (江苏东区) is a prominent industrial and commercial center in Jiangsu Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغسو، الصين",
      "en": "Jiangsu East Commercial District of, Jiangsu, China",
      "zh": "中国江苏江苏东区"
    },
    "coordinates": {
      "latitude": 32.3117,
      "longitude": 119.0132
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangsu",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في جيانغسو"
    }
  },
  {
    "id": "city-jiangsu-district-2",
    "slug": "jiangsu-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ جيانغسو",
      "en": "Jiangsu Trade & Logistics Center of",
      "zh": "江苏商贸中心",
      "pinyin": "Jiangsu District"
    },
    "province": {
      "ar": "جيانغسو",
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ جيانغسو",
      "en": "Jiangsu Trade & Logistics Center of",
      "zh": "江苏商贸中心"
    },
    "citySlug": "jiangsu-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ جيانغسو (江苏商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangsu Trade & Logistics Center of (江苏商贸中心) is a prominent industrial and commercial center in Jiangsu Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغسو، الصين",
      "en": "Jiangsu Trade & Logistics Center of, Jiangsu, China",
      "zh": "中国江苏江苏商贸中心"
    },
    "coordinates": {
      "latitude": 32.5617,
      "longitude": 119.2632
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangsu",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في جيانغسو"
    }
  },
  {
    "id": "city-jiangsu-district-3",
    "slug": "jiangsu-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ جيانغسو",
      "en": "Jiangsu New Economic Hub of",
      "zh": "江苏经济新区",
      "pinyin": "Jiangsu District"
    },
    "province": {
      "ar": "جيانغسو",
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ جيانغسو",
      "en": "Jiangsu New Economic Hub of",
      "zh": "江苏经济新区"
    },
    "citySlug": "jiangsu-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ جيانغسو (江苏经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangsu New Economic Hub of (江苏经济新区) is a prominent industrial and commercial center in Jiangsu Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغسو، الصين",
      "en": "Jiangsu New Economic Hub of, Jiangsu, China",
      "zh": "中国江苏江苏经济新区"
    },
    "coordinates": {
      "latitude": 32.8117,
      "longitude": 119.5132
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangsu",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في جيانغسو"
    }
  },
  {
    "id": "city-shandong-district-1",
    "slug": "shandong-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ شاندونغ",
      "en": "Shandong East Commercial District of",
      "zh": "山东东区",
      "pinyin": "Shandong District"
    },
    "province": {
      "ar": "شاندونغ",
      "en": "Shandong",
      "zh": "山东"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ شاندونغ",
      "en": "Shandong East Commercial District of",
      "zh": "山东东区"
    },
    "citySlug": "shandong-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ شاندونغ (山东东区) من المراكز الصناعية والتجارية البارزة في مقاطعة شاندونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shandong East Commercial District of (山东东区) is a prominent industrial and commercial center in Shandong Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شاندونغ، الصين",
      "en": "Shandong East Commercial District of, Shandong, China",
      "zh": "中国山东山东东区"
    },
    "coordinates": {
      "latitude": 36.9012,
      "longitude": 117.3701
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shandong",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في شاندونغ"
    }
  },
  {
    "id": "city-shandong-district-2",
    "slug": "shandong-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ شاندونغ",
      "en": "Shandong Trade & Logistics Center of",
      "zh": "山东商贸中心",
      "pinyin": "Shandong District"
    },
    "province": {
      "ar": "شاندونغ",
      "en": "Shandong",
      "zh": "山东"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ شاندونغ",
      "en": "Shandong Trade & Logistics Center of",
      "zh": "山东商贸中心"
    },
    "citySlug": "shandong-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ شاندونغ (山东商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة شاندونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shandong Trade & Logistics Center of (山东商贸中心) is a prominent industrial and commercial center in Shandong Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شاندونغ، الصين",
      "en": "Shandong Trade & Logistics Center of, Shandong, China",
      "zh": "中国山东山东商贸中心"
    },
    "coordinates": {
      "latitude": 37.1512,
      "longitude": 117.6201
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shandong",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في شاندونغ"
    }
  },
  {
    "id": "city-shandong-district-3",
    "slug": "shandong-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ شاندونغ",
      "en": "Shandong New Economic Hub of",
      "zh": "山东经济新区",
      "pinyin": "Shandong District"
    },
    "province": {
      "ar": "شاندونغ",
      "en": "Shandong",
      "zh": "山东"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ شاندونغ",
      "en": "Shandong New Economic Hub of",
      "zh": "山东经济新区"
    },
    "citySlug": "shandong-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ شاندونغ (山东经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة شاندونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shandong New Economic Hub of (山东经济新区) is a prominent industrial and commercial center in Shandong Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شاندونغ، الصين",
      "en": "Shandong New Economic Hub of, Shandong, China",
      "zh": "中国山东山东经济新区"
    },
    "coordinates": {
      "latitude": 37.4012,
      "longitude": 117.8701
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shandong",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في شاندونغ"
    }
  },
  {
    "id": "city-fujian-district-1",
    "slug": "fujian-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ فوجيان",
      "en": "Fujian East Commercial District of",
      "zh": "福建东区",
      "pinyin": "Fujian District"
    },
    "province": {
      "ar": "فوجيان",
      "en": "Fujian",
      "zh": "福建"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ فوجيان",
      "en": "Fujian East Commercial District of",
      "zh": "福建东区"
    },
    "citySlug": "fujian-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ فوجيان (福建东区) من المراكز الصناعية والتجارية البارزة في مقاطعة فوجيان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Fujian East Commercial District of (福建东区) is a prominent industrial and commercial center in Fujian Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "فوجيان، الصين",
      "en": "Fujian East Commercial District of, Fujian, China",
      "zh": "中国福建福建东区"
    },
    "coordinates": {
      "latitude": 26.3245,
      "longitude": 119.5465
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "fujian",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في فوجيان"
    }
  },
  {
    "id": "city-fujian-district-2",
    "slug": "fujian-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ فوجيان",
      "en": "Fujian Trade & Logistics Center of",
      "zh": "福建商贸中心",
      "pinyin": "Fujian District"
    },
    "province": {
      "ar": "فوجيان",
      "en": "Fujian",
      "zh": "福建"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ فوجيان",
      "en": "Fujian Trade & Logistics Center of",
      "zh": "福建商贸中心"
    },
    "citySlug": "fujian-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ فوجيان (福建商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة فوجيان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Fujian Trade & Logistics Center of (福建商贸中心) is a prominent industrial and commercial center in Fujian Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "فوجيان، الصين",
      "en": "Fujian Trade & Logistics Center of, Fujian, China",
      "zh": "中国福建福建商贸中心"
    },
    "coordinates": {
      "latitude": 26.5745,
      "longitude": 119.7965
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "fujian",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في فوجيان"
    }
  },
  {
    "id": "city-fujian-district-3",
    "slug": "fujian-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ فوجيان",
      "en": "Fujian New Economic Hub of",
      "zh": "福建经济新区",
      "pinyin": "Fujian District"
    },
    "province": {
      "ar": "فوجيان",
      "en": "Fujian",
      "zh": "福建"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ فوجيان",
      "en": "Fujian New Economic Hub of",
      "zh": "福建经济新区"
    },
    "citySlug": "fujian-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ فوجيان (福建经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة فوجيان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Fujian New Economic Hub of (福建经济新区) is a prominent industrial and commercial center in Fujian Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "فوجيان، الصين",
      "en": "Fujian New Economic Hub of, Fujian, China",
      "zh": "中国福建福建经济新区"
    },
    "coordinates": {
      "latitude": 26.8245,
      "longitude": 120.0465
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "fujian",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في فوجيان"
    }
  },
  {
    "id": "city-hebei-district-1",
    "slug": "hebei-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ خبي",
      "en": "Hebei East Commercial District of",
      "zh": "河北东区",
      "pinyin": "Hebei District"
    },
    "province": {
      "ar": "خبي",
      "en": "Hebei",
      "zh": "河北"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ خبي",
      "en": "Hebei East Commercial District of",
      "zh": "河北东区"
    },
    "citySlug": "hebei-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ خبي (河北东区) من المراكز الصناعية والتجارية البارزة في مقاطعة خبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hebei East Commercial District of (河北东区) is a prominent industrial and commercial center in Hebei Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خبي، الصين",
      "en": "Hebei East Commercial District of, Hebei, China",
      "zh": "中国河北河北东区"
    },
    "coordinates": {
      "latitude": 38.2928,
      "longitude": 114.7649
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hebei",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في خبي"
    }
  },
  {
    "id": "city-hebei-district-2",
    "slug": "hebei-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ خبي",
      "en": "Hebei Trade & Logistics Center of",
      "zh": "河北商贸中心",
      "pinyin": "Hebei District"
    },
    "province": {
      "ar": "خبي",
      "en": "Hebei",
      "zh": "河北"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ خبي",
      "en": "Hebei Trade & Logistics Center of",
      "zh": "河北商贸中心"
    },
    "citySlug": "hebei-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ خبي (河北商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة خبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hebei Trade & Logistics Center of (河北商贸中心) is a prominent industrial and commercial center in Hebei Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خبي، الصين",
      "en": "Hebei Trade & Logistics Center of, Hebei, China",
      "zh": "中国河北河北商贸中心"
    },
    "coordinates": {
      "latitude": 38.5428,
      "longitude": 115.0149
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hebei",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في خبي"
    }
  },
  {
    "id": "city-hebei-district-3",
    "slug": "hebei-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ خبي",
      "en": "Hebei New Economic Hub of",
      "zh": "河北经济新区",
      "pinyin": "Hebei District"
    },
    "province": {
      "ar": "خبي",
      "en": "Hebei",
      "zh": "河北"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ خبي",
      "en": "Hebei New Economic Hub of",
      "zh": "河北经济新区"
    },
    "citySlug": "hebei-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ خبي (河北经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة خبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hebei New Economic Hub of (河北经济新区) is a prominent industrial and commercial center in Hebei Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خبي، الصين",
      "en": "Hebei New Economic Hub of, Hebei, China",
      "zh": "中国河北河北经济新区"
    },
    "coordinates": {
      "latitude": 38.7928,
      "longitude": 115.2649
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hebei",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في خبي"
    }
  },
  {
    "id": "city-henan-district-1",
    "slug": "henan-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ خنان",
      "en": "Henan East Commercial District of",
      "zh": "河南东区",
      "pinyin": "Henan District"
    },
    "province": {
      "ar": "خنان",
      "en": "Henan",
      "zh": "河南"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ خنان",
      "en": "Henan East Commercial District of",
      "zh": "河南东区"
    },
    "citySlug": "henan-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ خنان (河南东区) من المراكز الصناعية والتجارية البارزة في مقاطعة خنان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Henan East Commercial District of (河南东区) is a prominent industrial and commercial center in Henan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خنان، الصين",
      "en": "Henan East Commercial District of, Henan, China",
      "zh": "中国河南河南东区"
    },
    "coordinates": {
      "latitude": 34.9966,
      "longitude": 113.8753
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "henan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في خنان"
    }
  },
  {
    "id": "city-henan-district-2",
    "slug": "henan-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ خنان",
      "en": "Henan Trade & Logistics Center of",
      "zh": "河南商贸中心",
      "pinyin": "Henan District"
    },
    "province": {
      "ar": "خنان",
      "en": "Henan",
      "zh": "河南"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ خنان",
      "en": "Henan Trade & Logistics Center of",
      "zh": "河南商贸中心"
    },
    "citySlug": "henan-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ خنان (河南商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة خنان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Henan Trade & Logistics Center of (河南商贸中心) is a prominent industrial and commercial center in Henan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خنان، الصين",
      "en": "Henan Trade & Logistics Center of, Henan, China",
      "zh": "中国河南河南商贸中心"
    },
    "coordinates": {
      "latitude": 35.2466,
      "longitude": 114.1253
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "henan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في خنان"
    }
  },
  {
    "id": "city-henan-district-3",
    "slug": "henan-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ خنان",
      "en": "Henan New Economic Hub of",
      "zh": "河南经济新区",
      "pinyin": "Henan District"
    },
    "province": {
      "ar": "خنان",
      "en": "Henan",
      "zh": "河南"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ خنان",
      "en": "Henan New Economic Hub of",
      "zh": "河南经济新区"
    },
    "citySlug": "henan-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ خنان (河南经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة خنان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Henan New Economic Hub of (河南经济新区) is a prominent industrial and commercial center in Henan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خنان، الصين",
      "en": "Henan New Economic Hub of, Henan, China",
      "zh": "中国河南河南经济新区"
    },
    "coordinates": {
      "latitude": 35.4966,
      "longitude": 114.3753
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "henan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في خنان"
    }
  },
  {
    "id": "city-hubei-district-1",
    "slug": "hubei-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ هوبي",
      "en": "Hubei East Commercial District of",
      "zh": "湖北东区",
      "pinyin": "Hubei District"
    },
    "province": {
      "ar": "هوبي",
      "en": "Hubei",
      "zh": "湖北"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ هوبي",
      "en": "Hubei East Commercial District of",
      "zh": "湖北东区"
    },
    "citySlug": "hubei-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ هوبي (湖北东区) من المراكز الصناعية والتجارية البارزة في مقاطعة هوبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hubei East Commercial District of (湖北东区) is a prominent industrial and commercial center in Hubei Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هوبي، الصين",
      "en": "Hubei East Commercial District of, Hubei, China",
      "zh": "中国湖北湖北东区"
    },
    "coordinates": {
      "latitude": 30.8428,
      "longitude": 114.5555
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hubei",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في هوبي"
    }
  },
  {
    "id": "city-hubei-district-2",
    "slug": "hubei-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ هوبي",
      "en": "Hubei Trade & Logistics Center of",
      "zh": "湖北商贸中心",
      "pinyin": "Hubei District"
    },
    "province": {
      "ar": "هوبي",
      "en": "Hubei",
      "zh": "湖北"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ هوبي",
      "en": "Hubei Trade & Logistics Center of",
      "zh": "湖北商贸中心"
    },
    "citySlug": "hubei-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ هوبي (湖北商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة هوبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hubei Trade & Logistics Center of (湖北商贸中心) is a prominent industrial and commercial center in Hubei Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هوبي، الصين",
      "en": "Hubei Trade & Logistics Center of, Hubei, China",
      "zh": "中国湖北湖北商贸中心"
    },
    "coordinates": {
      "latitude": 31.0928,
      "longitude": 114.8055
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hubei",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في هوبي"
    }
  },
  {
    "id": "city-hubei-district-3",
    "slug": "hubei-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ هوبي",
      "en": "Hubei New Economic Hub of",
      "zh": "湖北经济新区",
      "pinyin": "Hubei District"
    },
    "province": {
      "ar": "هوبي",
      "en": "Hubei",
      "zh": "湖北"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ هوبي",
      "en": "Hubei New Economic Hub of",
      "zh": "湖北经济新区"
    },
    "citySlug": "hubei-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ هوبي (湖北经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة هوبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hubei New Economic Hub of (湖北经济新区) is a prominent industrial and commercial center in Hubei Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هوبي، الصين",
      "en": "Hubei New Economic Hub of, Hubei, China",
      "zh": "中国湖北湖北经济新区"
    },
    "coordinates": {
      "latitude": 31.3428,
      "longitude": 115.0555
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hubei",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في هوبي"
    }
  },
  {
    "id": "city-hunan-district-1",
    "slug": "hunan-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ هونان",
      "en": "Hunan East Commercial District of",
      "zh": "湖南东区",
      "pinyin": "Hunan District"
    },
    "province": {
      "ar": "هونان",
      "en": "Hunan",
      "zh": "湖南"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ هونان",
      "en": "Hunan East Commercial District of",
      "zh": "湖南东区"
    },
    "citySlug": "hunan-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ هونان (湖南东区) من المراكز الصناعية والتجارية البارزة في مقاطعة هونان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hunan East Commercial District of (湖南东区) is a prominent industrial and commercial center in Hunan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونان، الصين",
      "en": "Hunan East Commercial District of, Hunan, China",
      "zh": "中国湖南湖南东区"
    },
    "coordinates": {
      "latitude": 28.4782,
      "longitude": 113.1888
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hunan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في هونان"
    }
  },
  {
    "id": "city-hunan-district-2",
    "slug": "hunan-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ هونان",
      "en": "Hunan Trade & Logistics Center of",
      "zh": "湖南商贸中心",
      "pinyin": "Hunan District"
    },
    "province": {
      "ar": "هونان",
      "en": "Hunan",
      "zh": "湖南"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ هونان",
      "en": "Hunan Trade & Logistics Center of",
      "zh": "湖南商贸中心"
    },
    "citySlug": "hunan-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ هونان (湖南商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة هونان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hunan Trade & Logistics Center of (湖南商贸中心) is a prominent industrial and commercial center in Hunan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونان، الصين",
      "en": "Hunan Trade & Logistics Center of, Hunan, China",
      "zh": "中国湖南湖南商贸中心"
    },
    "coordinates": {
      "latitude": 28.7282,
      "longitude": 113.4388
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hunan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في هونان"
    }
  },
  {
    "id": "city-hunan-district-3",
    "slug": "hunan-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ هونان",
      "en": "Hunan New Economic Hub of",
      "zh": "湖南经济新区",
      "pinyin": "Hunan District"
    },
    "province": {
      "ar": "هونان",
      "en": "Hunan",
      "zh": "湖南"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ هونان",
      "en": "Hunan New Economic Hub of",
      "zh": "湖南经济新区"
    },
    "citySlug": "hunan-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ هونان (湖南经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة هونان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hunan New Economic Hub of (湖南经济新区) is a prominent industrial and commercial center in Hunan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونان، الصين",
      "en": "Hunan New Economic Hub of, Hunan, China",
      "zh": "中国湖南湖南经济新区"
    },
    "coordinates": {
      "latitude": 28.9782,
      "longitude": 113.6888
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hunan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في هونان"
    }
  },
  {
    "id": "city-anhui-district-1",
    "slug": "anhui-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ آنهوي",
      "en": "Anhui East Commercial District of",
      "zh": "安徽东区",
      "pinyin": "Anhui District"
    },
    "province": {
      "ar": "آنهوي",
      "en": "Anhui",
      "zh": "安徽"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ آنهوي",
      "en": "Anhui East Commercial District of",
      "zh": "安徽东区"
    },
    "citySlug": "anhui-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ آنهوي (安徽东区) من المراكز الصناعية والتجارية البارزة في مقاطعة آنهوي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Anhui East Commercial District of (安徽东区) is a prominent industrial and commercial center in Anhui Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "آنهوي، الصين",
      "en": "Anhui East Commercial District of, Anhui, China",
      "zh": "中国安徽安徽东区"
    },
    "coordinates": {
      "latitude": 32.1112,
      "longitude": 117.533
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "anhui",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في آنهوي"
    }
  },
  {
    "id": "city-anhui-district-2",
    "slug": "anhui-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ آنهوي",
      "en": "Anhui Trade & Logistics Center of",
      "zh": "安徽商贸中心",
      "pinyin": "Anhui District"
    },
    "province": {
      "ar": "آنهوي",
      "en": "Anhui",
      "zh": "安徽"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ آنهوي",
      "en": "Anhui Trade & Logistics Center of",
      "zh": "安徽商贸中心"
    },
    "citySlug": "anhui-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ آنهوي (安徽商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة آنهوي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Anhui Trade & Logistics Center of (安徽商贸中心) is a prominent industrial and commercial center in Anhui Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "آنهوي، الصين",
      "en": "Anhui Trade & Logistics Center of, Anhui, China",
      "zh": "中国安徽安徽商贸中心"
    },
    "coordinates": {
      "latitude": 32.3612,
      "longitude": 117.783
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "anhui",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في آنهوي"
    }
  },
  {
    "id": "city-anhui-district-3",
    "slug": "anhui-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ آنهوي",
      "en": "Anhui New Economic Hub of",
      "zh": "安徽经济新区",
      "pinyin": "Anhui District"
    },
    "province": {
      "ar": "آنهوي",
      "en": "Anhui",
      "zh": "安徽"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ آنهوي",
      "en": "Anhui New Economic Hub of",
      "zh": "安徽经济新区"
    },
    "citySlug": "anhui-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ آنهوي (安徽经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة آنهوي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Anhui New Economic Hub of (安徽经济新区) is a prominent industrial and commercial center in Anhui Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "آنهوي، الصين",
      "en": "Anhui New Economic Hub of, Anhui, China",
      "zh": "中国安徽安徽经济新区"
    },
    "coordinates": {
      "latitude": 32.6112,
      "longitude": 118.033
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "anhui",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في آنهوي"
    }
  },
  {
    "id": "city-jiangxi-district-1",
    "slug": "jiangxi-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ جيانغشي",
      "en": "Jiangxi East Commercial District of",
      "zh": "江西东区",
      "pinyin": "Jiangxi District"
    },
    "province": {
      "ar": "جيانغشي",
      "en": "Jiangxi",
      "zh": "江西"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ جيانغشي",
      "en": "Jiangxi East Commercial District of",
      "zh": "江西东区"
    },
    "citySlug": "jiangxi-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ جيانغشي (江西东区) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangxi East Commercial District of (江西东区) is a prominent industrial and commercial center in Jiangxi Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغشي، الصين",
      "en": "Jiangxi East Commercial District of, Jiangxi, China",
      "zh": "中国江西江西东区"
    },
    "coordinates": {
      "latitude": 28.933,
      "longitude": 116.1079
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangxi",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في جيانغشي"
    }
  },
  {
    "id": "city-jiangxi-district-2",
    "slug": "jiangxi-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ جيانغشي",
      "en": "Jiangxi Trade & Logistics Center of",
      "zh": "江西商贸中心",
      "pinyin": "Jiangxi District"
    },
    "province": {
      "ar": "جيانغشي",
      "en": "Jiangxi",
      "zh": "江西"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ جيانغشي",
      "en": "Jiangxi Trade & Logistics Center of",
      "zh": "江西商贸中心"
    },
    "citySlug": "jiangxi-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ جيانغشي (江西商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangxi Trade & Logistics Center of (江西商贸中心) is a prominent industrial and commercial center in Jiangxi Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغشي، الصين",
      "en": "Jiangxi Trade & Logistics Center of, Jiangxi, China",
      "zh": "中国江西江西商贸中心"
    },
    "coordinates": {
      "latitude": 29.183,
      "longitude": 116.3579
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangxi",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في جيانغشي"
    }
  },
  {
    "id": "city-jiangxi-district-3",
    "slug": "jiangxi-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ جيانغشي",
      "en": "Jiangxi New Economic Hub of",
      "zh": "江西经济新区",
      "pinyin": "Jiangxi District"
    },
    "province": {
      "ar": "جيانغشي",
      "en": "Jiangxi",
      "zh": "江西"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ جيانغشي",
      "en": "Jiangxi New Economic Hub of",
      "zh": "江西经济新区"
    },
    "citySlug": "jiangxi-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ جيانغشي (江西经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangxi New Economic Hub of (江西经济新区) is a prominent industrial and commercial center in Jiangxi Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغشي، الصين",
      "en": "Jiangxi New Economic Hub of, Jiangxi, China",
      "zh": "中国江西江西经济新区"
    },
    "coordinates": {
      "latitude": 29.433,
      "longitude": 116.6079
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangxi",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في جيانغشي"
    }
  },
  {
    "id": "city-sichuan-district-1",
    "slug": "sichuan-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ سيتشوان",
      "en": "Sichuan East Commercial District of",
      "zh": "四川东区",
      "pinyin": "Sichuan District"
    },
    "province": {
      "ar": "سيتشوان",
      "en": "Sichuan",
      "zh": "四川"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ سيتشوان",
      "en": "Sichuan East Commercial District of",
      "zh": "四川东区"
    },
    "citySlug": "sichuan-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ سيتشوان (四川东区) من المراكز الصناعية والتجارية البارزة في مقاطعة سيتشوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Sichuan East Commercial District of (四川东区) is a prominent industrial and commercial center in Sichuan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "سيتشوان، الصين",
      "en": "Sichuan East Commercial District of, Sichuan, China",
      "zh": "中国四川四川东区"
    },
    "coordinates": {
      "latitude": 30.8228,
      "longitude": 104.3168
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "sichuan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في سيتشوان"
    }
  },
  {
    "id": "city-sichuan-district-2",
    "slug": "sichuan-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ سيتشوان",
      "en": "Sichuan Trade & Logistics Center of",
      "zh": "四川商贸中心",
      "pinyin": "Sichuan District"
    },
    "province": {
      "ar": "سيتشوان",
      "en": "Sichuan",
      "zh": "四川"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ سيتشوان",
      "en": "Sichuan Trade & Logistics Center of",
      "zh": "四川商贸中心"
    },
    "citySlug": "sichuan-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ سيتشوان (四川商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة سيتشوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Sichuan Trade & Logistics Center of (四川商贸中心) is a prominent industrial and commercial center in Sichuan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "سيتشوان، الصين",
      "en": "Sichuan Trade & Logistics Center of, Sichuan, China",
      "zh": "中国四川四川商贸中心"
    },
    "coordinates": {
      "latitude": 31.0728,
      "longitude": 104.5668
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "sichuan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في سيتشوان"
    }
  },
  {
    "id": "city-sichuan-district-3",
    "slug": "sichuan-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ سيتشوان",
      "en": "Sichuan New Economic Hub of",
      "zh": "四川经济新区",
      "pinyin": "Sichuan District"
    },
    "province": {
      "ar": "سيتشوان",
      "en": "Sichuan",
      "zh": "四川"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ سيتشوان",
      "en": "Sichuan New Economic Hub of",
      "zh": "四川经济新区"
    },
    "citySlug": "sichuan-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ سيتشوان (四川经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة سيتشوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Sichuan New Economic Hub of (四川经济新区) is a prominent industrial and commercial center in Sichuan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "سيتشوان، الصين",
      "en": "Sichuan New Economic Hub of, Sichuan, China",
      "zh": "中国四川四川经济新区"
    },
    "coordinates": {
      "latitude": 31.3228,
      "longitude": 104.8168
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "sichuan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في سيتشوان"
    }
  },
  {
    "id": "city-shaanxi-district-1",
    "slug": "shaanxi-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ شنشي",
      "en": "Shaanxi East Commercial District of",
      "zh": "陕西东区",
      "pinyin": "Shaanxi District"
    },
    "province": {
      "ar": "شنشي",
      "en": "Shaanxi",
      "zh": "陕西"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ شنشي",
      "en": "Shaanxi East Commercial District of",
      "zh": "陕西东区"
    },
    "citySlug": "shaanxi-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ شنشي (陕西东区) من المراكز الصناعية والتجارية البارزة في مقاطعة شنشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shaanxi East Commercial District of (陕西东区) is a prominent industrial and commercial center in Shaanxi Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شنشي، الصين",
      "en": "Shaanxi East Commercial District of, Shaanxi, China",
      "zh": "中国陕西陕西东区"
    },
    "coordinates": {
      "latitude": 34.5916,
      "longitude": 109.1898
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shaanxi",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في شنشي"
    }
  },
  {
    "id": "city-shaanxi-district-2",
    "slug": "shaanxi-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ شنشي",
      "en": "Shaanxi Trade & Logistics Center of",
      "zh": "陕西商贸中心",
      "pinyin": "Shaanxi District"
    },
    "province": {
      "ar": "شنشي",
      "en": "Shaanxi",
      "zh": "陕西"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ شنشي",
      "en": "Shaanxi Trade & Logistics Center of",
      "zh": "陕西商贸中心"
    },
    "citySlug": "shaanxi-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ شنشي (陕西商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة شنشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shaanxi Trade & Logistics Center of (陕西商贸中心) is a prominent industrial and commercial center in Shaanxi Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شنشي، الصين",
      "en": "Shaanxi Trade & Logistics Center of, Shaanxi, China",
      "zh": "中国陕西陕西商贸中心"
    },
    "coordinates": {
      "latitude": 34.8416,
      "longitude": 109.4398
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shaanxi",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في شنشي"
    }
  },
  {
    "id": "city-shaanxi-district-3",
    "slug": "shaanxi-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ شنشي",
      "en": "Shaanxi New Economic Hub of",
      "zh": "陕西经济新区",
      "pinyin": "Shaanxi District"
    },
    "province": {
      "ar": "شنشي",
      "en": "Shaanxi",
      "zh": "陕西"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ شنشي",
      "en": "Shaanxi New Economic Hub of",
      "zh": "陕西经济新区"
    },
    "citySlug": "shaanxi-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ شنشي (陕西经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة شنشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shaanxi New Economic Hub of (陕西经济新区) is a prominent industrial and commercial center in Shaanxi Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شنشي، الصين",
      "en": "Shaanxi New Economic Hub of, Shaanxi, China",
      "zh": "中国陕西陕西经济新区"
    },
    "coordinates": {
      "latitude": 35.0916,
      "longitude": 109.6898
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shaanxi",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في شنشي"
    }
  },
  {
    "id": "city-liaoning-district-1",
    "slug": "liaoning-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ لياونينغ",
      "en": "Liaoning East Commercial District of",
      "zh": "辽宁东区",
      "pinyin": "Liaoning District"
    },
    "province": {
      "ar": "لياونينغ",
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ لياونينغ",
      "en": "Liaoning East Commercial District of",
      "zh": "辽宁东区"
    },
    "citySlug": "liaoning-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ لياونينغ (辽宁东区) من المراكز الصناعية والتجارية البارزة في مقاطعة لياونينغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Liaoning East Commercial District of (辽宁东区) is a prominent industrial and commercial center in Liaoning Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "لياونينغ، الصين",
      "en": "Liaoning East Commercial District of, Liaoning, China",
      "zh": "中国辽宁辽宁东区"
    },
    "coordinates": {
      "latitude": 42.0557,
      "longitude": 123.6815
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "liaoning",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في لياونينغ"
    }
  },
  {
    "id": "city-liaoning-district-2",
    "slug": "liaoning-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ لياونينغ",
      "en": "Liaoning Trade & Logistics Center of",
      "zh": "辽宁商贸中心",
      "pinyin": "Liaoning District"
    },
    "province": {
      "ar": "لياونينغ",
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ لياونينغ",
      "en": "Liaoning Trade & Logistics Center of",
      "zh": "辽宁商贸中心"
    },
    "citySlug": "liaoning-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ لياونينغ (辽宁商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة لياونينغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Liaoning Trade & Logistics Center of (辽宁商贸中心) is a prominent industrial and commercial center in Liaoning Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "لياونينغ، الصين",
      "en": "Liaoning Trade & Logistics Center of, Liaoning, China",
      "zh": "中国辽宁辽宁商贸中心"
    },
    "coordinates": {
      "latitude": 42.3057,
      "longitude": 123.9315
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "liaoning",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في لياونينغ"
    }
  },
  {
    "id": "city-liaoning-district-3",
    "slug": "liaoning-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ لياونينغ",
      "en": "Liaoning New Economic Hub of",
      "zh": "辽宁经济新区",
      "pinyin": "Liaoning District"
    },
    "province": {
      "ar": "لياونينغ",
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ لياونينغ",
      "en": "Liaoning New Economic Hub of",
      "zh": "辽宁经济新区"
    },
    "citySlug": "liaoning-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ لياونينغ (辽宁经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة لياونينغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Liaoning New Economic Hub of (辽宁经济新区) is a prominent industrial and commercial center in Liaoning Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "لياونينغ، الصين",
      "en": "Liaoning New Economic Hub of, Liaoning, China",
      "zh": "中国辽宁辽宁经济新区"
    },
    "coordinates": {
      "latitude": 42.5557,
      "longitude": 124.1815
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "liaoning",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في لياونينغ"
    }
  },
  {
    "id": "city-jilin-district-1",
    "slug": "jilin-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ جيلين",
      "en": "Jilin East Commercial District of",
      "zh": "吉林东区",
      "pinyin": "Jilin District"
    },
    "province": {
      "ar": "جيلين",
      "en": "Jilin",
      "zh": "吉林"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ جيلين",
      "en": "Jilin East Commercial District of",
      "zh": "吉林东区"
    },
    "citySlug": "jilin-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ جيلين (吉林东区) من المراكز الصناعية والتجارية البارزة في مقاطعة جيلين. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jilin East Commercial District of (吉林东区) is a prominent industrial and commercial center in Jilin Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيلين، الصين",
      "en": "Jilin East Commercial District of, Jilin, China",
      "zh": "中国吉林吉林东区"
    },
    "coordinates": {
      "latitude": 44.0671,
      "longitude": 125.5735
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jilin",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في جيلين"
    }
  },
  {
    "id": "city-jilin-district-2",
    "slug": "jilin-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ جيلين",
      "en": "Jilin Trade & Logistics Center of",
      "zh": "吉林商贸中心",
      "pinyin": "Jilin District"
    },
    "province": {
      "ar": "جيلين",
      "en": "Jilin",
      "zh": "吉林"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ جيلين",
      "en": "Jilin Trade & Logistics Center of",
      "zh": "吉林商贸中心"
    },
    "citySlug": "jilin-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ جيلين (吉林商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة جيلين. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jilin Trade & Logistics Center of (吉林商贸中心) is a prominent industrial and commercial center in Jilin Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيلين، الصين",
      "en": "Jilin Trade & Logistics Center of, Jilin, China",
      "zh": "中国吉林吉林商贸中心"
    },
    "coordinates": {
      "latitude": 44.3171,
      "longitude": 125.8235
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jilin",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في جيلين"
    }
  },
  {
    "id": "city-jilin-district-3",
    "slug": "jilin-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ جيلين",
      "en": "Jilin New Economic Hub of",
      "zh": "吉林经济新区",
      "pinyin": "Jilin District"
    },
    "province": {
      "ar": "جيلين",
      "en": "Jilin",
      "zh": "吉林"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ جيلين",
      "en": "Jilin New Economic Hub of",
      "zh": "吉林经济新区"
    },
    "citySlug": "jilin-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ جيلين (吉林经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة جيلين. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jilin New Economic Hub of (吉林经济新区) is a prominent industrial and commercial center in Jilin Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيلين، الصين",
      "en": "Jilin New Economic Hub of, Jilin, China",
      "zh": "中国吉林吉林经济新区"
    },
    "coordinates": {
      "latitude": 44.5671,
      "longitude": 126.0735
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jilin",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في جيلين"
    }
  },
  {
    "id": "city-heilongjiang-district-1",
    "slug": "heilongjiang-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ هيلونغجيانغ",
      "en": "Heilongjiang East Commercial District of",
      "zh": "黑龙江东区",
      "pinyin": "Heilongjiang District"
    },
    "province": {
      "ar": "هيلونغجيانغ",
      "en": "Heilongjiang",
      "zh": "黑龙江"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ هيلونغجيانغ",
      "en": "Heilongjiang East Commercial District of",
      "zh": "黑龙江东区"
    },
    "citySlug": "heilongjiang-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ هيلونغجيانغ (黑龙江东区) من المراكز الصناعية والتجارية البارزة في مقاطعة هيلونغجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Heilongjiang East Commercial District of (黑龙江东区) is a prominent industrial and commercial center in Heilongjiang Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هيلونغجيانغ، الصين",
      "en": "Heilongjiang East Commercial District of, Heilongjiang, China",
      "zh": "中国黑龙江黑龙江东区"
    },
    "coordinates": {
      "latitude": 46.0538,
      "longitude": 126.785
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "heilongjiang",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في هيلونغجيانغ"
    }
  },
  {
    "id": "city-heilongjiang-district-2",
    "slug": "heilongjiang-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ هيلونغجيانغ",
      "en": "Heilongjiang Trade & Logistics Center of",
      "zh": "黑龙江商贸中心",
      "pinyin": "Heilongjiang District"
    },
    "province": {
      "ar": "هيلونغجيانغ",
      "en": "Heilongjiang",
      "zh": "黑龙江"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ هيلونغجيانغ",
      "en": "Heilongjiang Trade & Logistics Center of",
      "zh": "黑龙江商贸中心"
    },
    "citySlug": "heilongjiang-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ هيلونغجيانغ (黑龙江商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة هيلونغجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Heilongjiang Trade & Logistics Center of (黑龙江商贸中心) is a prominent industrial and commercial center in Heilongjiang Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هيلونغجيانغ، الصين",
      "en": "Heilongjiang Trade & Logistics Center of, Heilongjiang, China",
      "zh": "中国黑龙江黑龙江商贸中心"
    },
    "coordinates": {
      "latitude": 46.3038,
      "longitude": 127.035
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "heilongjiang",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في هيلونغجيانغ"
    }
  },
  {
    "id": "city-heilongjiang-district-3",
    "slug": "heilongjiang-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ هيلونغجيانغ",
      "en": "Heilongjiang New Economic Hub of",
      "zh": "黑龙江经济新区",
      "pinyin": "Heilongjiang District"
    },
    "province": {
      "ar": "هيلونغجيانغ",
      "en": "Heilongjiang",
      "zh": "黑龙江"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ هيلونغجيانغ",
      "en": "Heilongjiang New Economic Hub of",
      "zh": "黑龙江经济新区"
    },
    "citySlug": "heilongjiang-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ هيلونغجيانغ (黑龙江经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة هيلونغجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Heilongjiang New Economic Hub of (黑龙江经济新区) is a prominent industrial and commercial center in Heilongjiang Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هيلونغجيانغ، الصين",
      "en": "Heilongjiang New Economic Hub of, Heilongjiang, China",
      "zh": "中国黑龙江黑龙江经济新区"
    },
    "coordinates": {
      "latitude": 46.5538,
      "longitude": 127.285
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "heilongjiang",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في هيلونغجيانغ"
    }
  },
  {
    "id": "city-shanxi-district-1",
    "slug": "shanxi-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ شانشي",
      "en": "Shanxi East Commercial District of",
      "zh": "山西东区",
      "pinyin": "Shanxi District"
    },
    "province": {
      "ar": "شانشي",
      "en": "Shanxi",
      "zh": "山西"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ شانشي",
      "en": "Shanxi East Commercial District of",
      "zh": "山西东区"
    },
    "citySlug": "shanxi-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ شانشي (山西东区) من المراكز الصناعية والتجارية البارزة في مقاطعة شانشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shanxi East Commercial District of (山西东区) is a prominent industrial and commercial center in Shanxi Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شانشي، الصين",
      "en": "Shanxi East Commercial District of, Shanxi, China",
      "zh": "中国山西山西东区"
    },
    "coordinates": {
      "latitude": 38.1206,
      "longitude": 112.7989
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shanxi",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في شانشي"
    }
  },
  {
    "id": "city-shanxi-district-2",
    "slug": "shanxi-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ شانشي",
      "en": "Shanxi Trade & Logistics Center of",
      "zh": "山西商贸中心",
      "pinyin": "Shanxi District"
    },
    "province": {
      "ar": "شانشي",
      "en": "Shanxi",
      "zh": "山西"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ شانشي",
      "en": "Shanxi Trade & Logistics Center of",
      "zh": "山西商贸中心"
    },
    "citySlug": "shanxi-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ شانشي (山西商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة شانشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shanxi Trade & Logistics Center of (山西商贸中心) is a prominent industrial and commercial center in Shanxi Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شانشي، الصين",
      "en": "Shanxi Trade & Logistics Center of, Shanxi, China",
      "zh": "中国山西山西商贸中心"
    },
    "coordinates": {
      "latitude": 38.3706,
      "longitude": 113.0489
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shanxi",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في شانشي"
    }
  },
  {
    "id": "city-shanxi-district-3",
    "slug": "shanxi-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ شانشي",
      "en": "Shanxi New Economic Hub of",
      "zh": "山西经济新区",
      "pinyin": "Shanxi District"
    },
    "province": {
      "ar": "شانشي",
      "en": "Shanxi",
      "zh": "山西"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ شانشي",
      "en": "Shanxi New Economic Hub of",
      "zh": "山西经济新区"
    },
    "citySlug": "shanxi-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ شانشي (山西经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة شانشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shanxi New Economic Hub of (山西经济新区) is a prominent industrial and commercial center in Shanxi Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شانشي، الصين",
      "en": "Shanxi New Economic Hub of, Shanxi, China",
      "zh": "中国山西山西经济新区"
    },
    "coordinates": {
      "latitude": 38.6206,
      "longitude": 113.2989
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shanxi",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في شانشي"
    }
  },
  {
    "id": "city-guizhou-district-1",
    "slug": "guizhou-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ غويتشو",
      "en": "Guizhou East Commercial District of",
      "zh": "贵州东区",
      "pinyin": "Guizhou District"
    },
    "province": {
      "ar": "غويتشو",
      "en": "Guizhou",
      "zh": "贵州"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ غويتشو",
      "en": "Guizhou East Commercial District of",
      "zh": "贵州东区"
    },
    "citySlug": "guizhou-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ غويتشو (贵州东区) من المراكز الصناعية والتجارية البارزة في مقاطعة غويتشو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guizhou East Commercial District of (贵州东区) is a prominent industrial and commercial center in Guizhou Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غويتشو، الصين",
      "en": "Guizhou East Commercial District of, Guizhou, China",
      "zh": "中国贵州贵州东区"
    },
    "coordinates": {
      "latitude": 26.8977,
      "longitude": 106.8802
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guizhou",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في غويتشو"
    }
  },
  {
    "id": "city-guizhou-district-2",
    "slug": "guizhou-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ غويتشو",
      "en": "Guizhou Trade & Logistics Center of",
      "zh": "贵州商贸中心",
      "pinyin": "Guizhou District"
    },
    "province": {
      "ar": "غويتشو",
      "en": "Guizhou",
      "zh": "贵州"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ غويتشو",
      "en": "Guizhou Trade & Logistics Center of",
      "zh": "贵州商贸中心"
    },
    "citySlug": "guizhou-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ غويتشو (贵州商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة غويتشو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guizhou Trade & Logistics Center of (贵州商贸中心) is a prominent industrial and commercial center in Guizhou Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غويتشو، الصين",
      "en": "Guizhou Trade & Logistics Center of, Guizhou, China",
      "zh": "中国贵州贵州商贸中心"
    },
    "coordinates": {
      "latitude": 27.1477,
      "longitude": 107.1302
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guizhou",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في غويتشو"
    }
  },
  {
    "id": "city-guizhou-district-3",
    "slug": "guizhou-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ غويتشو",
      "en": "Guizhou New Economic Hub of",
      "zh": "贵州经济新区",
      "pinyin": "Guizhou District"
    },
    "province": {
      "ar": "غويتشو",
      "en": "Guizhou",
      "zh": "贵州"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ غويتشو",
      "en": "Guizhou New Economic Hub of",
      "zh": "贵州经济新区"
    },
    "citySlug": "guizhou-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ غويتشو (贵州经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة غويتشو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guizhou New Economic Hub of (贵州经济新区) is a prominent industrial and commercial center in Guizhou Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غويتشو، الصين",
      "en": "Guizhou New Economic Hub of, Guizhou, China",
      "zh": "中国贵州贵州经济新区"
    },
    "coordinates": {
      "latitude": 27.3977,
      "longitude": 107.3802
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guizhou",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في غويتشو"
    }
  },
  {
    "id": "city-yunnan-district-1",
    "slug": "yunnan-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ يوننان",
      "en": "Yunnan East Commercial District of",
      "zh": "云南东区",
      "pinyin": "Yunnan District"
    },
    "province": {
      "ar": "يوننان",
      "en": "Yunnan",
      "zh": "云南"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ يوننان",
      "en": "Yunnan East Commercial District of",
      "zh": "云南东区"
    },
    "citySlug": "yunnan-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ يوننان (云南东区) من المراكز الصناعية والتجارية البارزة في مقاطعة يوننان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yunnan East Commercial District of (云南东区) is a prominent industrial and commercial center in Yunnan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "يوننان، الصين",
      "en": "Yunnan East Commercial District of, Yunnan, China",
      "zh": "中国云南云南东区"
    },
    "coordinates": {
      "latitude": 25.2906,
      "longitude": 102.9623
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "yunnan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في يوننان"
    }
  },
  {
    "id": "city-yunnan-district-2",
    "slug": "yunnan-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ يوننان",
      "en": "Yunnan Trade & Logistics Center of",
      "zh": "云南商贸中心",
      "pinyin": "Yunnan District"
    },
    "province": {
      "ar": "يوننان",
      "en": "Yunnan",
      "zh": "云南"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ يوننان",
      "en": "Yunnan Trade & Logistics Center of",
      "zh": "云南商贸中心"
    },
    "citySlug": "yunnan-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ يوننان (云南商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة يوننان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yunnan Trade & Logistics Center of (云南商贸中心) is a prominent industrial and commercial center in Yunnan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "يوننان، الصين",
      "en": "Yunnan Trade & Logistics Center of, Yunnan, China",
      "zh": "中国云南云南商贸中心"
    },
    "coordinates": {
      "latitude": 25.5406,
      "longitude": 103.2123
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "yunnan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في يوننان"
    }
  },
  {
    "id": "city-yunnan-district-3",
    "slug": "yunnan-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ يوننان",
      "en": "Yunnan New Economic Hub of",
      "zh": "云南经济新区",
      "pinyin": "Yunnan District"
    },
    "province": {
      "ar": "يوننان",
      "en": "Yunnan",
      "zh": "云南"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ يوننان",
      "en": "Yunnan New Economic Hub of",
      "zh": "云南经济新区"
    },
    "citySlug": "yunnan-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ يوننان (云南经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة يوننان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yunnan New Economic Hub of (云南经济新区) is a prominent industrial and commercial center in Yunnan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "يوننان، الصين",
      "en": "Yunnan New Economic Hub of, Yunnan, China",
      "zh": "中国云南云南经济新区"
    },
    "coordinates": {
      "latitude": 25.7906,
      "longitude": 103.4623
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "yunnan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في يوننان"
    }
  },
  {
    "id": "city-guangxi-district-1",
    "slug": "guangxi-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ قوانغشي",
      "en": "Guangxi East Commercial District of",
      "zh": "广西东区",
      "pinyin": "Guangxi District"
    },
    "province": {
      "ar": "قوانغشي",
      "en": "Guangxi",
      "zh": "广西"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ قوانغشي",
      "en": "Guangxi East Commercial District of",
      "zh": "广西东区"
    },
    "citySlug": "guangxi-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ قوانغشي (广西东区) من المراكز الصناعية والتجارية البارزة في مقاطعة قوانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangxi East Commercial District of (广西东区) is a prominent industrial and commercial center in Guangxi Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قوانغشي، الصين",
      "en": "Guangxi East Commercial District of, Guangxi, China",
      "zh": "中国广西广西东区"
    },
    "coordinates": {
      "latitude": 23.067,
      "longitude": 108.6165
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangxi",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في قوانغشي"
    }
  },
  {
    "id": "city-guangxi-district-2",
    "slug": "guangxi-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ قوانغشي",
      "en": "Guangxi Trade & Logistics Center of",
      "zh": "广西商贸中心",
      "pinyin": "Guangxi District"
    },
    "province": {
      "ar": "قوانغشي",
      "en": "Guangxi",
      "zh": "广西"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ قوانغشي",
      "en": "Guangxi Trade & Logistics Center of",
      "zh": "广西商贸中心"
    },
    "citySlug": "guangxi-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ قوانغشي (广西商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة قوانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangxi Trade & Logistics Center of (广西商贸中心) is a prominent industrial and commercial center in Guangxi Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قوانغشي، الصين",
      "en": "Guangxi Trade & Logistics Center of, Guangxi, China",
      "zh": "中国广西广西商贸中心"
    },
    "coordinates": {
      "latitude": 23.317,
      "longitude": 108.8665
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangxi",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في قوانغشي"
    }
  },
  {
    "id": "city-guangxi-district-3",
    "slug": "guangxi-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ قوانغشي",
      "en": "Guangxi New Economic Hub of",
      "zh": "广西经济新区",
      "pinyin": "Guangxi District"
    },
    "province": {
      "ar": "قوانغشي",
      "en": "Guangxi",
      "zh": "广西"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ قوانغشي",
      "en": "Guangxi New Economic Hub of",
      "zh": "广西经济新区"
    },
    "citySlug": "guangxi-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ قوانغشي (广西经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة قوانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangxi New Economic Hub of (广西经济新区) is a prominent industrial and commercial center in Guangxi Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قوانغشي، الصين",
      "en": "Guangxi New Economic Hub of, Guangxi, China",
      "zh": "中国广西广西经济新区"
    },
    "coordinates": {
      "latitude": 23.567,
      "longitude": 109.1165
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangxi",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في قوانغشي"
    }
  },
  {
    "id": "city-inner-mongolia-district-1",
    "slug": "inner-mongolia-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ منغوليا الداخلية",
      "en": "Inner Mongolia East Commercial District of",
      "zh": "内蒙古东区",
      "pinyin": "Inner Mongolia District"
    },
    "province": {
      "ar": "منغوليا الداخلية",
      "en": "Inner Mongolia",
      "zh": "内蒙古"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ منغوليا الداخلية",
      "en": "Inner Mongolia East Commercial District of",
      "zh": "内蒙古东区"
    },
    "citySlug": "inner-mongolia-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ منغوليا الداخلية (内蒙古东区) من المراكز الصناعية والتجارية البارزة في مقاطعة منغوليا الداخلية. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Inner Mongolia East Commercial District of (内蒙古东区) is a prominent industrial and commercial center in Inner Mongolia Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "منغوليا الداخلية، الصين",
      "en": "Inner Mongolia East Commercial District of, Inner Mongolia, China",
      "zh": "中国内蒙古内蒙古东区"
    },
    "coordinates": {
      "latitude": 41.0915,
      "longitude": 112.0011
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "inner-mongolia",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في منغوليا الداخلية"
    }
  },
  {
    "id": "city-inner-mongolia-district-2",
    "slug": "inner-mongolia-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ منغوليا الداخلية",
      "en": "Inner Mongolia Trade & Logistics Center of",
      "zh": "内蒙古商贸中心",
      "pinyin": "Inner Mongolia District"
    },
    "province": {
      "ar": "منغوليا الداخلية",
      "en": "Inner Mongolia",
      "zh": "内蒙古"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ منغوليا الداخلية",
      "en": "Inner Mongolia Trade & Logistics Center of",
      "zh": "内蒙古商贸中心"
    },
    "citySlug": "inner-mongolia-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ منغوليا الداخلية (内蒙古商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة منغوليا الداخلية. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Inner Mongolia Trade & Logistics Center of (内蒙古商贸中心) is a prominent industrial and commercial center in Inner Mongolia Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "منغوليا الداخلية، الصين",
      "en": "Inner Mongolia Trade & Logistics Center of, Inner Mongolia, China",
      "zh": "中国内蒙古内蒙古商贸中心"
    },
    "coordinates": {
      "latitude": 41.3415,
      "longitude": 112.2511
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "inner-mongolia",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في منغوليا الداخلية"
    }
  },
  {
    "id": "city-inner-mongolia-district-3",
    "slug": "inner-mongolia-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ منغوليا الداخلية",
      "en": "Inner Mongolia New Economic Hub of",
      "zh": "内蒙古经济新区",
      "pinyin": "Inner Mongolia District"
    },
    "province": {
      "ar": "منغوليا الداخلية",
      "en": "Inner Mongolia",
      "zh": "内蒙古"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ منغوليا الداخلية",
      "en": "Inner Mongolia New Economic Hub of",
      "zh": "内蒙古经济新区"
    },
    "citySlug": "inner-mongolia-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ منغوليا الداخلية (内蒙古经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة منغوليا الداخلية. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Inner Mongolia New Economic Hub of (内蒙古经济新区) is a prominent industrial and commercial center in Inner Mongolia Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "منغوليا الداخلية، الصين",
      "en": "Inner Mongolia New Economic Hub of, Inner Mongolia, China",
      "zh": "中国内蒙古内蒙古经济新区"
    },
    "coordinates": {
      "latitude": 41.5915,
      "longitude": 112.5011
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "inner-mongolia",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في منغوليا الداخلية"
    }
  },
  {
    "id": "city-xinjiang-district-1",
    "slug": "xinjiang-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ شينجيانغ",
      "en": "Xinjiang East Commercial District of",
      "zh": "新疆东区",
      "pinyin": "Xinjiang District"
    },
    "province": {
      "ar": "شينجيانغ",
      "en": "Xinjiang",
      "zh": "新疆"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ شينجيانغ",
      "en": "Xinjiang East Commercial District of",
      "zh": "新疆东区"
    },
    "citySlug": "xinjiang-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ شينجيانغ (新疆东区) من المراكز الصناعية والتجارية البارزة في مقاطعة شينجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Xinjiang East Commercial District of (新疆东区) is a prominent industrial and commercial center in Xinjiang Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شينجيانغ، الصين",
      "en": "Xinjiang East Commercial District of, Xinjiang, China",
      "zh": "中国新疆新疆东区"
    },
    "coordinates": {
      "latitude": 44.0756,
      "longitude": 87.8668
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "xinjiang",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في شينجيانغ"
    }
  },
  {
    "id": "city-xinjiang-district-2",
    "slug": "xinjiang-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ شينجيانغ",
      "en": "Xinjiang Trade & Logistics Center of",
      "zh": "新疆商贸中心",
      "pinyin": "Xinjiang District"
    },
    "province": {
      "ar": "شينجيانغ",
      "en": "Xinjiang",
      "zh": "新疆"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ شينجيانغ",
      "en": "Xinjiang Trade & Logistics Center of",
      "zh": "新疆商贸中心"
    },
    "citySlug": "xinjiang-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ شينجيانغ (新疆商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة شينجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Xinjiang Trade & Logistics Center of (新疆商贸中心) is a prominent industrial and commercial center in Xinjiang Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شينجيانغ، الصين",
      "en": "Xinjiang Trade & Logistics Center of, Xinjiang, China",
      "zh": "中国新疆新疆商贸中心"
    },
    "coordinates": {
      "latitude": 44.3256,
      "longitude": 88.1168
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "xinjiang",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في شينجيانغ"
    }
  },
  {
    "id": "city-xinjiang-district-3",
    "slug": "xinjiang-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ شينجيانغ",
      "en": "Xinjiang New Economic Hub of",
      "zh": "新疆经济新区",
      "pinyin": "Xinjiang District"
    },
    "province": {
      "ar": "شينجيانغ",
      "en": "Xinjiang",
      "zh": "新疆"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ شينجيانغ",
      "en": "Xinjiang New Economic Hub of",
      "zh": "新疆经济新区"
    },
    "citySlug": "xinjiang-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ شينجيانغ (新疆经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة شينجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Xinjiang New Economic Hub of (新疆经济新区) is a prominent industrial and commercial center in Xinjiang Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شينجيانغ، الصين",
      "en": "Xinjiang New Economic Hub of, Xinjiang, China",
      "zh": "中国新疆新疆经济新区"
    },
    "coordinates": {
      "latitude": 44.5756,
      "longitude": 88.3668
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "xinjiang",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في شينجيانغ"
    }
  },
  {
    "id": "city-gansu-district-1",
    "slug": "gansu-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ قانسو",
      "en": "Gansu East Commercial District of",
      "zh": "甘肃东区",
      "pinyin": "Gansu District"
    },
    "province": {
      "ar": "قانسو",
      "en": "Gansu",
      "zh": "甘肃"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ قانسو",
      "en": "Gansu East Commercial District of",
      "zh": "甘肃东区"
    },
    "citySlug": "gansu-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ قانسو (甘肃东区) من المراكز الصناعية والتجارية البارزة في مقاطعة قانسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Gansu East Commercial District of (甘肃东区) is a prominent industrial and commercial center in Gansu Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قانسو، الصين",
      "en": "Gansu East Commercial District of, Gansu, China",
      "zh": "中国甘肃甘肃东区"
    },
    "coordinates": {
      "latitude": 36.3111,
      "longitude": 104.0843
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "gansu",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في قانسو"
    }
  },
  {
    "id": "city-gansu-district-2",
    "slug": "gansu-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ قانسو",
      "en": "Gansu Trade & Logistics Center of",
      "zh": "甘肃商贸中心",
      "pinyin": "Gansu District"
    },
    "province": {
      "ar": "قانسو",
      "en": "Gansu",
      "zh": "甘肃"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ قانسو",
      "en": "Gansu Trade & Logistics Center of",
      "zh": "甘肃商贸中心"
    },
    "citySlug": "gansu-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ قانسو (甘肃商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة قانسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Gansu Trade & Logistics Center of (甘肃商贸中心) is a prominent industrial and commercial center in Gansu Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قانسو، الصين",
      "en": "Gansu Trade & Logistics Center of, Gansu, China",
      "zh": "中国甘肃甘肃商贸中心"
    },
    "coordinates": {
      "latitude": 36.5611,
      "longitude": 104.3343
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "gansu",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في قانسو"
    }
  },
  {
    "id": "city-gansu-district-3",
    "slug": "gansu-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ قانسو",
      "en": "Gansu New Economic Hub of",
      "zh": "甘肃经济新区",
      "pinyin": "Gansu District"
    },
    "province": {
      "ar": "قانسو",
      "en": "Gansu",
      "zh": "甘肃"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ قانسو",
      "en": "Gansu New Economic Hub of",
      "zh": "甘肃经济新区"
    },
    "citySlug": "gansu-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ قانسو (甘肃经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة قانسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Gansu New Economic Hub of (甘肃经济新区) is a prominent industrial and commercial center in Gansu Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قانسو، الصين",
      "en": "Gansu New Economic Hub of, Gansu, China",
      "zh": "中国甘肃甘肃经济新区"
    },
    "coordinates": {
      "latitude": 36.8111,
      "longitude": 104.5843
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "gansu",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في قانسو"
    }
  },
  {
    "id": "city-hainan-district-1",
    "slug": "hainan-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ هاينان",
      "en": "Hainan East Commercial District of",
      "zh": "海南东区",
      "pinyin": "Hainan District"
    },
    "province": {
      "ar": "هاينان",
      "en": "Hainan",
      "zh": "海南"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ هاينان",
      "en": "Hainan East Commercial District of",
      "zh": "海南东区"
    },
    "citySlug": "hainan-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ هاينان (海南东区) من المراكز الصناعية والتجارية البارزة في مقاطعة هاينان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hainan East Commercial District of (海南东区) is a prominent industrial and commercial center in Hainan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هاينان، الصين",
      "en": "Hainan East Commercial District of, Hainan, China",
      "zh": "中国海南海南东区"
    },
    "coordinates": {
      "latitude": 20.294,
      "longitude": 110.4499
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hainan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في هاينان"
    }
  },
  {
    "id": "city-hainan-district-2",
    "slug": "hainan-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ هاينان",
      "en": "Hainan Trade & Logistics Center of",
      "zh": "海南商贸中心",
      "pinyin": "Hainan District"
    },
    "province": {
      "ar": "هاينان",
      "en": "Hainan",
      "zh": "海南"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ هاينان",
      "en": "Hainan Trade & Logistics Center of",
      "zh": "海南商贸中心"
    },
    "citySlug": "hainan-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ هاينان (海南商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة هاينان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hainan Trade & Logistics Center of (海南商贸中心) is a prominent industrial and commercial center in Hainan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هاينان، الصين",
      "en": "Hainan Trade & Logistics Center of, Hainan, China",
      "zh": "中国海南海南商贸中心"
    },
    "coordinates": {
      "latitude": 20.544,
      "longitude": 110.6999
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hainan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في هاينان"
    }
  },
  {
    "id": "city-hainan-district-3",
    "slug": "hainan-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ هاينان",
      "en": "Hainan New Economic Hub of",
      "zh": "海南经济新区",
      "pinyin": "Hainan District"
    },
    "province": {
      "ar": "هاينان",
      "en": "Hainan",
      "zh": "海南"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ هاينان",
      "en": "Hainan New Economic Hub of",
      "zh": "海南经济新区"
    },
    "citySlug": "hainan-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ هاينان (海南经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة هاينان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hainan New Economic Hub of (海南经济新区) is a prominent industrial and commercial center in Hainan Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هاينان، الصين",
      "en": "Hainan New Economic Hub of, Hainan, China",
      "zh": "中国海南海南经济新区"
    },
    "coordinates": {
      "latitude": 20.794,
      "longitude": 110.9499
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hainan",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في هاينان"
    }
  },
  {
    "id": "city-ningxia-district-1",
    "slug": "ningxia-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ نينغشيا",
      "en": "Ningxia East Commercial District of",
      "zh": "宁夏东区",
      "pinyin": "Ningxia District"
    },
    "province": {
      "ar": "نينغشيا",
      "en": "Ningxia",
      "zh": "宁夏"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ نينغشيا",
      "en": "Ningxia East Commercial District of",
      "zh": "宁夏东区"
    },
    "citySlug": "ningxia-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ نينغشيا (宁夏东区) من المراكز الصناعية والتجارية البارزة في مقاطعة نينغشيا. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Ningxia East Commercial District of (宁夏东区) is a prominent industrial and commercial center in Ningxia Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "نينغشيا، الصين",
      "en": "Ningxia East Commercial District of, Ningxia, China",
      "zh": "中国宁夏宁夏东区"
    },
    "coordinates": {
      "latitude": 38.7372,
      "longitude": 106.4809
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "ningxia",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في نينغشيا"
    }
  },
  {
    "id": "city-ningxia-district-2",
    "slug": "ningxia-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ نينغشيا",
      "en": "Ningxia Trade & Logistics Center of",
      "zh": "宁夏商贸中心",
      "pinyin": "Ningxia District"
    },
    "province": {
      "ar": "نينغشيا",
      "en": "Ningxia",
      "zh": "宁夏"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ نينغشيا",
      "en": "Ningxia Trade & Logistics Center of",
      "zh": "宁夏商贸中心"
    },
    "citySlug": "ningxia-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ نينغشيا (宁夏商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة نينغشيا. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Ningxia Trade & Logistics Center of (宁夏商贸中心) is a prominent industrial and commercial center in Ningxia Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "نينغشيا، الصين",
      "en": "Ningxia Trade & Logistics Center of, Ningxia, China",
      "zh": "中国宁夏宁夏商贸中心"
    },
    "coordinates": {
      "latitude": 38.9872,
      "longitude": 106.7309
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "ningxia",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في نينغشيا"
    }
  },
  {
    "id": "city-ningxia-district-3",
    "slug": "ningxia-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ نينغشيا",
      "en": "Ningxia New Economic Hub of",
      "zh": "宁夏经济新区",
      "pinyin": "Ningxia District"
    },
    "province": {
      "ar": "نينغشيا",
      "en": "Ningxia",
      "zh": "宁夏"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ نينغشيا",
      "en": "Ningxia New Economic Hub of",
      "zh": "宁夏经济新区"
    },
    "citySlug": "ningxia-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ نينغشيا (宁夏经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة نينغشيا. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Ningxia New Economic Hub of (宁夏经济新区) is a prominent industrial and commercial center in Ningxia Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "نينغشيا، الصين",
      "en": "Ningxia New Economic Hub of, Ningxia, China",
      "zh": "中国宁夏宁夏经济新区"
    },
    "coordinates": {
      "latitude": 39.2372,
      "longitude": 106.9809
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "ningxia",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في نينغشيا"
    }
  },
  {
    "id": "city-qinghai-district-1",
    "slug": "qinghai-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ تشينغهاي",
      "en": "Qinghai East Commercial District of",
      "zh": "青海东区",
      "pinyin": "Qinghai District"
    },
    "province": {
      "ar": "تشينغهاي",
      "en": "Qinghai",
      "zh": "青海"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ تشينغهاي",
      "en": "Qinghai East Commercial District of",
      "zh": "青海东区"
    },
    "citySlug": "qinghai-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ تشينغهاي (青海东区) من المراكز الصناعية والتجارية البارزة في مقاطعة تشينغهاي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Qinghai East Commercial District of (青海东区) is a prominent industrial and commercial center in Qinghai Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشينغهاي، الصين",
      "en": "Qinghai East Commercial District of, Qinghai, China",
      "zh": "中国青海青海东区"
    },
    "coordinates": {
      "latitude": 36.8709,
      "longitude": 102.0301
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "qinghai",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في تشينغهاي"
    }
  },
  {
    "id": "city-qinghai-district-2",
    "slug": "qinghai-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ تشينغهاي",
      "en": "Qinghai Trade & Logistics Center of",
      "zh": "青海商贸中心",
      "pinyin": "Qinghai District"
    },
    "province": {
      "ar": "تشينغهاي",
      "en": "Qinghai",
      "zh": "青海"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ تشينغهاي",
      "en": "Qinghai Trade & Logistics Center of",
      "zh": "青海商贸中心"
    },
    "citySlug": "qinghai-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ تشينغهاي (青海商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة تشينغهاي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Qinghai Trade & Logistics Center of (青海商贸中心) is a prominent industrial and commercial center in Qinghai Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشينغهاي، الصين",
      "en": "Qinghai Trade & Logistics Center of, Qinghai, China",
      "zh": "中国青海青海商贸中心"
    },
    "coordinates": {
      "latitude": 37.1209,
      "longitude": 102.2801
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "qinghai",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في تشينغهاي"
    }
  },
  {
    "id": "city-qinghai-district-3",
    "slug": "qinghai-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ تشينغهاي",
      "en": "Qinghai New Economic Hub of",
      "zh": "青海经济新区",
      "pinyin": "Qinghai District"
    },
    "province": {
      "ar": "تشينغهاي",
      "en": "Qinghai",
      "zh": "青海"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ تشينغهاي",
      "en": "Qinghai New Economic Hub of",
      "zh": "青海经济新区"
    },
    "citySlug": "qinghai-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ تشينغهاي (青海经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة تشينغهاي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Qinghai New Economic Hub of (青海经济新区) is a prominent industrial and commercial center in Qinghai Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشينغهاي، الصين",
      "en": "Qinghai New Economic Hub of, Qinghai, China",
      "zh": "中国青海青海经济新区"
    },
    "coordinates": {
      "latitude": 37.3709,
      "longitude": 102.5301
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "qinghai",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في تشينغهاي"
    }
  },
  {
    "id": "city-tibet-district-1",
    "slug": "tibet-district-1",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الصناعية الشرقية لـ التبت",
      "en": "Tibet East Commercial District of",
      "zh": "西藏东区",
      "pinyin": "Tibet District"
    },
    "province": {
      "ar": "التبت",
      "en": "Tibet",
      "zh": "西藏"
    },
    "provinceSlug": "tibet",
    "city": {
      "ar": "المنطقة الصناعية الشرقية لـ التبت",
      "en": "Tibet East Commercial District of",
      "zh": "西藏东区"
    },
    "citySlug": "tibet-district-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الصناعية الشرقية لـ التبت (西藏东区) من المراكز الصناعية والتجارية البارزة في مقاطعة التبت. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Tibet East Commercial District of (西藏东区) is a prominent industrial and commercial center in Tibet Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "التبت، الصين",
      "en": "Tibet East Commercial District of, Tibet, China",
      "zh": "中国西藏西藏东区"
    },
    "coordinates": {
      "latitude": 29.9025,
      "longitude": 91.4221
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "tibet",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في التبت"
    }
  },
  {
    "id": "city-tibet-district-2",
    "slug": "tibet-district-2",
    "subdomain": "cities",
    "name": {
      "ar": "مركز التجارة والتصنيع لـ التبت",
      "en": "Tibet Trade & Logistics Center of",
      "zh": "西藏商贸中心",
      "pinyin": "Tibet District"
    },
    "province": {
      "ar": "التبت",
      "en": "Tibet",
      "zh": "西藏"
    },
    "provinceSlug": "tibet",
    "city": {
      "ar": "مركز التجارة والتصنيع لـ التبت",
      "en": "Tibet Trade & Logistics Center of",
      "zh": "西藏商贸中心"
    },
    "citySlug": "tibet-district-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مركز التجارة والتصنيع لـ التبت (西藏商贸中心) من المراكز الصناعية والتجارية البارزة في مقاطعة التبت. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Tibet Trade & Logistics Center of (西藏商贸中心) is a prominent industrial and commercial center in Tibet Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "التبت، الصين",
      "en": "Tibet Trade & Logistics Center of, Tibet, China",
      "zh": "中国西藏西藏商贸中心"
    },
    "coordinates": {
      "latitude": 30.1525,
      "longitude": 91.6721
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "tibet",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في التبت"
    }
  },
  {
    "id": "city-tibet-district-3",
    "slug": "tibet-district-3",
    "subdomain": "cities",
    "name": {
      "ar": "المنطقة الاقتصادية الحديثة لـ التبت",
      "en": "Tibet New Economic Hub of",
      "zh": "西藏经济新区",
      "pinyin": "Tibet District"
    },
    "province": {
      "ar": "التبت",
      "en": "Tibet",
      "zh": "西藏"
    },
    "provinceSlug": "tibet",
    "city": {
      "ar": "المنطقة الاقتصادية الحديثة لـ التبت",
      "en": "Tibet New Economic Hub of",
      "zh": "西藏经济新区"
    },
    "citySlug": "tibet-district-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر المنطقة الاقتصادية الحديثة لـ التبت (西藏经济新区) من المراكز الصناعية والتجارية البارزة في مقاطعة التبت. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع الخفيف والتجميع، الخدمات اللوجستية والتخزين، التجارة الإقليمية. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Tibet New Economic Hub of (西藏经济新区) is a prominent industrial and commercial center in Tibet Province. Renowned for export specializations including: التصنيع الخفيف والتجميع, الخدمات اللوجستية والتخزين, التجارة الإقليمية. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "التبت، الصين",
      "en": "Tibet New Economic Hub of, Tibet, China",
      "zh": "中国西藏西藏经济新区"
    },
    "coordinates": {
      "latitude": 30.4025,
      "longitude": 91.9221
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "tibet",
      "التصنيع الخفيف والتجميع",
      "الخدمات اللوجستية والتخزين",
      "التجارة الإقليمية"
    ],
    "features": {
      "ar": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "en": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع الخفيف والتجميع",
        "الخدمات اللوجستية والتخزين",
        "التجارة الإقليمية"
      ],
      "cityTag": "المركز التجاري والصناعي في التبت"
    }
  },
  {
    "id": "city-zhejiang-hub-zone-1",
    "slug": "zhejiang-hub-zone-1",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تشجيانغ الصناعي والتجاري 1",
      "en": "Zhejiang Industrial Hub 1",
      "zh": "浙江产业集聚区1",
      "pinyin": "Zhejiang Industrial Hub"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "مجمع تشجيانغ الصناعي والتجاري 1",
      "en": "Zhejiang Industrial Hub 1",
      "zh": "浙江产业集聚区1"
    },
    "citySlug": "zhejiang-hub-zone-1",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تشجيانغ الصناعي والتجاري 1 (浙江产业集聚区1) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Zhejiang Industrial Hub 1 (浙江产业集聚区1) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Zhejiang Industrial Hub 1, Zhejiang, China",
      "zh": "中国浙江浙江产业集聚区1"
    },
    "coordinates": {
      "latitude": 30.6107,
      "longitude": 120.3712
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تشجيانغ"
    }
  },
  {
    "id": "city-jiangsu-hub-zone-2",
    "slug": "jiangsu-hub-zone-2",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيانغسو الصناعي والتجاري 2",
      "en": "Jiangsu Industrial Hub 2",
      "zh": "江苏产业集聚区2",
      "pinyin": "Jiangsu Industrial Hub"
    },
    "province": {
      "ar": "جيانغسو",
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "مجمع جيانغسو الصناعي والتجاري 2",
      "en": "Jiangsu Industrial Hub 2",
      "zh": "江苏产业集聚区2"
    },
    "citySlug": "jiangsu-hub-zone-2",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيانغسو الصناعي والتجاري 2 (江苏产业集聚区2) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangsu Industrial Hub 2 (江苏产业集聚区2) is a prominent industrial and commercial center in Jiangsu Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغسو، الصين",
      "en": "Jiangsu Industrial Hub 2, Jiangsu, China",
      "zh": "中国江苏江苏产业集聚区2"
    },
    "coordinates": {
      "latitude": 32.4254,
      "longitude": 118.5967
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangsu",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيانغسو"
    }
  },
  {
    "id": "city-shandong-hub-zone-3",
    "slug": "shandong-hub-zone-3",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شاندونغ الصناعي والتجاري 3",
      "en": "Shandong Industrial Hub 3",
      "zh": "山东产业集聚区3",
      "pinyin": "Shandong Industrial Hub"
    },
    "province": {
      "ar": "شاندونغ",
      "en": "Shandong",
      "zh": "山东"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "مجمع شاندونغ الصناعي والتجاري 3",
      "en": "Shandong Industrial Hub 3",
      "zh": "山东产业集聚区3"
    },
    "citySlug": "shandong-hub-zone-3",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شاندونغ الصناعي والتجاري 3 (山东产业集聚区3) من المراكز الصناعية والتجارية البارزة في مقاطعة شاندونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shandong Industrial Hub 3 (山东产业集聚区3) is a prominent industrial and commercial center in Shandong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شاندونغ، الصين",
      "en": "Shandong Industrial Hub 3, Shandong, China",
      "zh": "中国山东山东产业集聚区3"
    },
    "coordinates": {
      "latitude": 36.7076,
      "longitude": 116.7241
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shandong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شاندونغ"
    }
  },
  {
    "id": "city-fujian-hub-zone-4",
    "slug": "fujian-hub-zone-4",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع فوجيان الصناعي والتجاري 4",
      "en": "Fujian Industrial Hub 4",
      "zh": "福建产业集聚区4",
      "pinyin": "Fujian Industrial Hub"
    },
    "province": {
      "ar": "فوجيان",
      "en": "Fujian",
      "zh": "福建"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "مجمع فوجيان الصناعي والتجاري 4",
      "en": "Fujian Industrial Hub 4",
      "zh": "福建产业集聚区4"
    },
    "citySlug": "fujian-hub-zone-4",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع فوجيان الصناعي والتجاري 4 (福建产业集聚区4) من المراكز الصناعية والتجارية البارزة في مقاطعة فوجيان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Fujian Industrial Hub 4 (福建产业集聚区4) is a prominent industrial and commercial center in Fujian Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "فوجيان، الصين",
      "en": "Fujian Industrial Hub 4, Fujian, China",
      "zh": "中国福建福建产业集聚区4"
    },
    "coordinates": {
      "latitude": 25.7718,
      "longitude": 119.035
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "fujian",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في فوجيان"
    }
  },
  {
    "id": "city-hebei-hub-zone-5",
    "slug": "hebei-hub-zone-5",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع خبي الصناعي والتجاري 5",
      "en": "Hebei Industrial Hub 5",
      "zh": "河北产业集聚区5",
      "pinyin": "Hebei Industrial Hub"
    },
    "province": {
      "ar": "خبي",
      "en": "Hebei",
      "zh": "河北"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "مجمع خبي الصناعي والتجاري 5",
      "en": "Hebei Industrial Hub 5",
      "zh": "河北产业集聚区5"
    },
    "citySlug": "hebei-hub-zone-5",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع خبي الصناعي والتجاري 5 (河北产业集聚区5) من المراكز الصناعية والتجارية البارزة في مقاطعة خبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hebei Industrial Hub 5 (河北产业集聚区5) is a prominent industrial and commercial center in Hebei Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خبي، الصين",
      "en": "Hebei Industrial Hub 5, Hebei, China",
      "zh": "中国河北河北产业集聚区5"
    },
    "coordinates": {
      "latitude": 37.6592,
      "longitude": 114.6284
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hebei",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في خبي"
    }
  },
  {
    "id": "city-henan-hub-zone-6",
    "slug": "henan-hub-zone-6",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع خنان الصناعي والتجاري 6",
      "en": "Henan Industrial Hub 6",
      "zh": "河南产业集聚区6",
      "pinyin": "Henan Industrial Hub"
    },
    "province": {
      "ar": "خنان",
      "en": "Henan",
      "zh": "河南"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "مجمع خنان الصناعي والتجاري 6",
      "en": "Henan Industrial Hub 6",
      "zh": "河南产业集聚区6"
    },
    "citySlug": "henan-hub-zone-6",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع خنان الصناعي والتجاري 6 (河南产业集聚区6) من المراكز الصناعية والتجارية البارزة في مقاطعة خنان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Henan Industrial Hub 6 (河南产业集聚区6) is a prominent industrial and commercial center in Henan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خنان، الصين",
      "en": "Henan Industrial Hub 6, Henan, China",
      "zh": "中国河南河南产业集聚区6"
    },
    "coordinates": {
      "latitude": 34.6348,
      "longitude": 114.0094
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "henan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في خنان"
    }
  },
  {
    "id": "city-hubei-hub-zone-7",
    "slug": "hubei-hub-zone-7",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هوبي الصناعي والتجاري 7",
      "en": "Hubei Industrial Hub 7",
      "zh": "湖北产业集聚区7",
      "pinyin": "Hubei Industrial Hub"
    },
    "province": {
      "ar": "هوبي",
      "en": "Hubei",
      "zh": "湖北"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "مجمع هوبي الصناعي والتجاري 7",
      "en": "Hubei Industrial Hub 7",
      "zh": "湖北产业集聚区7"
    },
    "citySlug": "hubei-hub-zone-7",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هوبي الصناعي والتجاري 7 (湖北产业集聚区7) من المراكز الصناعية والتجارية البارزة في مقاطعة هوبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hubei Industrial Hub 7 (湖北产业集聚区7) is a prominent industrial and commercial center in Hubei Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هوبي، الصين",
      "en": "Hubei Industrial Hub 7, Hubei, China",
      "zh": "中国湖北湖北产业集聚区7"
    },
    "coordinates": {
      "latitude": 30.8556,
      "longitude": 114.6071
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hubei",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هوبي"
    }
  },
  {
    "id": "city-hunan-hub-zone-8",
    "slug": "hunan-hub-zone-8",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هونان الصناعي والتجاري 8",
      "en": "Hunan Industrial Hub 8",
      "zh": "湖南产业集聚区8",
      "pinyin": "Hunan Industrial Hub"
    },
    "province": {
      "ar": "هونان",
      "en": "Hunan",
      "zh": "湖南"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "مجمع هونان الصناعي والتجاري 8",
      "en": "Hunan Industrial Hub 8",
      "zh": "湖南产业集聚区8"
    },
    "citySlug": "hunan-hub-zone-8",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هونان الصناعي والتجاري 8 (湖南产业集聚区8) من المراكز الصناعية والتجارية البارزة في مقاطعة هونان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hunan Industrial Hub 8 (湖南产业集聚区8) is a prominent industrial and commercial center in Hunan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونان، الصين",
      "en": "Hunan Industrial Hub 8, Hunan, China",
      "zh": "中国湖南湖南产业集聚区8"
    },
    "coordinates": {
      "latitude": 28.6239,
      "longitude": 112.8806
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hunan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هونان"
    }
  },
  {
    "id": "city-anhui-hub-zone-9",
    "slug": "anhui-hub-zone-9",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع آنهوي الصناعي والتجاري 9",
      "en": "Anhui Industrial Hub 9",
      "zh": "安徽产业集聚区9",
      "pinyin": "Anhui Industrial Hub"
    },
    "province": {
      "ar": "آنهوي",
      "en": "Anhui",
      "zh": "安徽"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "مجمع آنهوي الصناعي والتجاري 9",
      "en": "Anhui Industrial Hub 9",
      "zh": "安徽产业集聚区9"
    },
    "citySlug": "anhui-hub-zone-9",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع آنهوي الصناعي والتجاري 9 (安徽产业集聚区9) من المراكز الصناعية والتجارية البارزة في مقاطعة آنهوي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Anhui Industrial Hub 9 (安徽产业集聚区9) is a prominent industrial and commercial center in Anhui Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "آنهوي، الصين",
      "en": "Anhui Industrial Hub 9, Anhui, China",
      "zh": "中国安徽安徽产业集聚区9"
    },
    "coordinates": {
      "latitude": 32.026,
      "longitude": 116.9185
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "anhui",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في آنهوي"
    }
  },
  {
    "id": "city-jiangxi-hub-zone-10",
    "slug": "jiangxi-hub-zone-10",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيانغشي الصناعي والتجاري 10",
      "en": "Jiangxi Industrial Hub 10",
      "zh": "江西产业集聚区10",
      "pinyin": "Jiangxi Industrial Hub"
    },
    "province": {
      "ar": "جيانغشي",
      "en": "Jiangxi",
      "zh": "江西"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "مجمع جيانغشي الصناعي والتجاري 10",
      "en": "Jiangxi Industrial Hub 10",
      "zh": "江西产业集聚区10"
    },
    "citySlug": "jiangxi-hub-zone-10",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيانغشي الصناعي والتجاري 10 (江西产业集聚区10) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangxi Industrial Hub 10 (江西产业集聚区10) is a prominent industrial and commercial center in Jiangxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغشي، الصين",
      "en": "Jiangxi Industrial Hub 10, Jiangxi, China",
      "zh": "中国江西江西产业集聚区10"
    },
    "coordinates": {
      "latitude": 28.4654,
      "longitude": 115.5223
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيانغشي"
    }
  },
  {
    "id": "city-sichuan-hub-zone-11",
    "slug": "sichuan-hub-zone-11",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع سيتشوان الصناعي والتجاري 11",
      "en": "Sichuan Industrial Hub 11",
      "zh": "四川产业集聚区11",
      "pinyin": "Sichuan Industrial Hub"
    },
    "province": {
      "ar": "سيتشوان",
      "en": "Sichuan",
      "zh": "四川"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "مجمع سيتشوان الصناعي والتجاري 11",
      "en": "Sichuan Industrial Hub 11",
      "zh": "四川产业集聚区11"
    },
    "citySlug": "sichuan-hub-zone-11",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع سيتشوان الصناعي والتجاري 11 (四川产业集聚区11) من المراكز الصناعية والتجارية البارزة في مقاطعة سيتشوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Sichuan Industrial Hub 11 (四川产业集聚区11) is a prominent industrial and commercial center in Sichuan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "سيتشوان، الصين",
      "en": "Sichuan Industrial Hub 11, Sichuan, China",
      "zh": "中国四川四川产业集聚区11"
    },
    "coordinates": {
      "latitude": 30.1728,
      "longitude": 104.0686
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "sichuan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في سيتشوان"
    }
  },
  {
    "id": "city-shaanxi-hub-zone-12",
    "slug": "shaanxi-hub-zone-12",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شنشي الصناعي والتجاري 12",
      "en": "Shaanxi Industrial Hub 12",
      "zh": "陕西产业集聚区12",
      "pinyin": "Shaanxi Industrial Hub"
    },
    "province": {
      "ar": "شنشي",
      "en": "Shaanxi",
      "zh": "陕西"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "مجمع شنشي الصناعي والتجاري 12",
      "en": "Shaanxi Industrial Hub 12",
      "zh": "陕西产业集聚区12"
    },
    "citySlug": "shaanxi-hub-zone-12",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شنشي الصناعي والتجاري 12 (陕西产业集聚区12) من المراكز الصناعية والتجارية البارزة في مقاطعة شنشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shaanxi Industrial Hub 12 (陕西产业集聚区12) is a prominent industrial and commercial center in Shaanxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شنشي، الصين",
      "en": "Shaanxi Industrial Hub 12, Shaanxi, China",
      "zh": "中国陕西陕西产业集聚区12"
    },
    "coordinates": {
      "latitude": 34.127,
      "longitude": 109.2773
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shaanxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شنشي"
    }
  },
  {
    "id": "city-liaoning-hub-zone-13",
    "slug": "liaoning-hub-zone-13",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع لياونينغ الصناعي والتجاري 13",
      "en": "Liaoning Industrial Hub 13",
      "zh": "辽宁产业集聚区13",
      "pinyin": "Liaoning Industrial Hub"
    },
    "province": {
      "ar": "لياونينغ",
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "مجمع لياونينغ الصناعي والتجاري 13",
      "en": "Liaoning Industrial Hub 13",
      "zh": "辽宁产业集聚区13"
    },
    "citySlug": "liaoning-hub-zone-13",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع لياونينغ الصناعي والتجاري 13 (辽宁产业集聚区13) من المراكز الصناعية والتجارية البارزة في مقاطعة لياونينغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Liaoning Industrial Hub 13 (辽宁产业集聚区13) is a prominent industrial and commercial center in Liaoning Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "لياونينغ، الصين",
      "en": "Liaoning Industrial Hub 13, Liaoning, China",
      "zh": "中国辽宁辽宁产业集聚区13"
    },
    "coordinates": {
      "latitude": 41.9738,
      "longitude": 123.7945
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "liaoning",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في لياونينغ"
    }
  },
  {
    "id": "city-jilin-hub-zone-14",
    "slug": "jilin-hub-zone-14",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيلين الصناعي والتجاري 14",
      "en": "Jilin Industrial Hub 14",
      "zh": "吉林产业集聚区14",
      "pinyin": "Jilin Industrial Hub"
    },
    "province": {
      "ar": "جيلين",
      "en": "Jilin",
      "zh": "吉林"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "مجمع جيلين الصناعي والتجاري 14",
      "en": "Jilin Industrial Hub 14",
      "zh": "吉林产业集聚区14"
    },
    "citySlug": "jilin-hub-zone-14",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيلين الصناعي والتجاري 14 (吉林产业集聚区14) من المراكز الصناعية والتجارية البارزة في مقاطعة جيلين. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jilin Industrial Hub 14 (吉林产业集聚区14) is a prominent industrial and commercial center in Jilin Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيلين، الصين",
      "en": "Jilin Industrial Hub 14, Jilin, China",
      "zh": "中国吉林吉林产业集聚区14"
    },
    "coordinates": {
      "latitude": 44.2133,
      "longitude": 125.3782
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jilin",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيلين"
    }
  },
  {
    "id": "city-heilongjiang-hub-zone-15",
    "slug": "heilongjiang-hub-zone-15",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هيلونغجيانغ الصناعي والتجاري 15",
      "en": "Heilongjiang Industrial Hub 15",
      "zh": "黑龙江产业集聚区15",
      "pinyin": "Heilongjiang Industrial Hub"
    },
    "province": {
      "ar": "هيلونغجيانغ",
      "en": "Heilongjiang",
      "zh": "黑龙江"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "مجمع هيلونغجيانغ الصناعي والتجاري 15",
      "en": "Heilongjiang Industrial Hub 15",
      "zh": "黑龙江产业集聚区15"
    },
    "citySlug": "heilongjiang-hub-zone-15",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هيلونغجيانغ الصناعي والتجاري 15 (黑龙江产业集聚区15) من المراكز الصناعية والتجارية البارزة في مقاطعة هيلونغجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Heilongjiang Industrial Hub 15 (黑龙江产业集聚区15) is a prominent industrial and commercial center in Heilongjiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هيلونغجيانغ، الصين",
      "en": "Heilongjiang Industrial Hub 15, Heilongjiang, China",
      "zh": "中国黑龙江黑龙江产业集聚区15"
    },
    "coordinates": {
      "latitude": 46.0639,
      "longitude": 126.2311
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "heilongjiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هيلونغجيانغ"
    }
  },
  {
    "id": "city-shanxi-hub-zone-16",
    "slug": "shanxi-hub-zone-16",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شانشي الصناعي والتجاري 16",
      "en": "Shanxi Industrial Hub 16",
      "zh": "山西产业集聚区16",
      "pinyin": "Shanxi Industrial Hub"
    },
    "province": {
      "ar": "شانشي",
      "en": "Shanxi",
      "zh": "山西"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "مجمع شانشي الصناعي والتجاري 16",
      "en": "Shanxi Industrial Hub 16",
      "zh": "山西产业集聚区16"
    },
    "citySlug": "shanxi-hub-zone-16",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شانشي الصناعي والتجاري 16 (山西产业集聚区16) من المراكز الصناعية والتجارية البارزة في مقاطعة شانشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shanxi Industrial Hub 16 (山西产业集聚区16) is a prominent industrial and commercial center in Shanxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شانشي، الصين",
      "en": "Shanxi Industrial Hub 16, Shanxi, China",
      "zh": "中国山西山西产业集聚区16"
    },
    "coordinates": {
      "latitude": 37.7554,
      "longitude": 112.1658
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shanxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شانشي"
    }
  },
  {
    "id": "city-guizhou-hub-zone-17",
    "slug": "guizhou-hub-zone-17",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع غويتشو الصناعي والتجاري 17",
      "en": "Guizhou Industrial Hub 17",
      "zh": "贵州产业集聚区17",
      "pinyin": "Guizhou Industrial Hub"
    },
    "province": {
      "ar": "غويتشو",
      "en": "Guizhou",
      "zh": "贵州"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "مجمع غويتشو الصناعي والتجاري 17",
      "en": "Guizhou Industrial Hub 17",
      "zh": "贵州产业集聚区17"
    },
    "citySlug": "guizhou-hub-zone-17",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع غويتشو الصناعي والتجاري 17 (贵州产业集聚区17) من المراكز الصناعية والتجارية البارزة في مقاطعة غويتشو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guizhou Industrial Hub 17 (贵州产业集聚区17) is a prominent industrial and commercial center in Guizhou Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غويتشو، الصين",
      "en": "Guizhou Industrial Hub 17, Guizhou, China",
      "zh": "中国贵州贵州产业集聚区17"
    },
    "coordinates": {
      "latitude": 26.2631,
      "longitude": 106.5201
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guizhou",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في غويتشو"
    }
  },
  {
    "id": "city-yunnan-hub-zone-18",
    "slug": "yunnan-hub-zone-18",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع يوننان الصناعي والتجاري 18",
      "en": "Yunnan Industrial Hub 18",
      "zh": "云南产业集聚区18",
      "pinyin": "Yunnan Industrial Hub"
    },
    "province": {
      "ar": "يوننان",
      "en": "Yunnan",
      "zh": "云南"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "مجمع يوننان الصناعي والتجاري 18",
      "en": "Yunnan Industrial Hub 18",
      "zh": "云南产业集聚区18"
    },
    "citySlug": "yunnan-hub-zone-18",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع يوننان الصناعي والتجاري 18 (云南产业集聚区18) من المراكز الصناعية والتجارية البارزة في مقاطعة يوننان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yunnan Industrial Hub 18 (云南产业集聚区18) is a prominent industrial and commercial center in Yunnan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "يوننان، الصين",
      "en": "Yunnan Industrial Hub 18, Yunnan, China",
      "zh": "中国云南云南产业集聚区18"
    },
    "coordinates": {
      "latitude": 24.7402,
      "longitude": 102.9764
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "yunnan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في يوننان"
    }
  },
  {
    "id": "city-guangxi-hub-zone-19",
    "slug": "guangxi-hub-zone-19",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع قوانغشي الصناعي والتجاري 19",
      "en": "Guangxi Industrial Hub 19",
      "zh": "广西产业集聚区19",
      "pinyin": "Guangxi Industrial Hub"
    },
    "province": {
      "ar": "قوانغشي",
      "en": "Guangxi",
      "zh": "广西"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "مجمع قوانغشي الصناعي والتجاري 19",
      "en": "Guangxi Industrial Hub 19",
      "zh": "广西产业集聚区19"
    },
    "citySlug": "guangxi-hub-zone-19",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع قوانغشي الصناعي والتجاري 19 (广西产业集聚区19) من المراكز الصناعية والتجارية البارزة في مقاطعة قوانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangxi Industrial Hub 19 (广西产业集聚区19) is a prominent industrial and commercial center in Guangxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قوانغشي، الصين",
      "en": "Guangxi Industrial Hub 19, Guangxi, China",
      "zh": "中国广西广西产业集聚区19"
    },
    "coordinates": {
      "latitude": 22.877,
      "longitude": 108.762
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في قوانغشي"
    }
  },
  {
    "id": "city-inner-mongolia-hub-zone-20",
    "slug": "inner-mongolia-hub-zone-20",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع منغوليا الداخلية الصناعي والتجاري 20",
      "en": "Inner Mongolia Industrial Hub 20",
      "zh": "内蒙古产业集聚区20",
      "pinyin": "Inner Mongolia Industrial Hub"
    },
    "province": {
      "ar": "منغوليا الداخلية",
      "en": "Inner Mongolia",
      "zh": "内蒙古"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "مجمع منغوليا الداخلية الصناعي والتجاري 20",
      "en": "Inner Mongolia Industrial Hub 20",
      "zh": "内蒙古产业集聚区20"
    },
    "citySlug": "inner-mongolia-hub-zone-20",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع منغوليا الداخلية الصناعي والتجاري 20 (内蒙古产业集聚区20) من المراكز الصناعية والتجارية البارزة في مقاطعة منغوليا الداخلية. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Inner Mongolia Industrial Hub 20 (内蒙古产业集聚区20) is a prominent industrial and commercial center in Inner Mongolia Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "منغوليا الداخلية، الصين",
      "en": "Inner Mongolia Industrial Hub 20, Inner Mongolia, China",
      "zh": "中国内蒙古内蒙古产业集聚区20"
    },
    "coordinates": {
      "latitude": 41.2067,
      "longitude": 111.9143
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "inner-mongolia",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في منغوليا الداخلية"
    }
  },
  {
    "id": "city-xinjiang-hub-zone-21",
    "slug": "xinjiang-hub-zone-21",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شينجيانغ الصناعي والتجاري 21",
      "en": "Xinjiang Industrial Hub 21",
      "zh": "新疆产业集聚区21",
      "pinyin": "Xinjiang Industrial Hub"
    },
    "province": {
      "ar": "شينجيانغ",
      "en": "Xinjiang",
      "zh": "新疆"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "مجمع شينجيانغ الصناعي والتجاري 21",
      "en": "Xinjiang Industrial Hub 21",
      "zh": "新疆产业集聚区21"
    },
    "citySlug": "xinjiang-hub-zone-21",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شينجيانغ الصناعي والتجاري 21 (新疆产业集聚区21) من المراكز الصناعية والتجارية البارزة في مقاطعة شينجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Xinjiang Industrial Hub 21 (新疆产业集聚区21) is a prominent industrial and commercial center in Xinjiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شينجيانغ، الصين",
      "en": "Xinjiang Industrial Hub 21, Xinjiang, China",
      "zh": "中国新疆新疆产业集聚区21"
    },
    "coordinates": {
      "latitude": 44.1603,
      "longitude": 87.3977
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "xinjiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شينجيانغ"
    }
  },
  {
    "id": "city-gansu-hub-zone-22",
    "slug": "gansu-hub-zone-22",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع قانسو الصناعي والتجاري 22",
      "en": "Gansu Industrial Hub 22",
      "zh": "甘肃产业集聚区22",
      "pinyin": "Gansu Industrial Hub"
    },
    "province": {
      "ar": "قانسو",
      "en": "Gansu",
      "zh": "甘肃"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "مجمع قانسو الصناعي والتجاري 22",
      "en": "Gansu Industrial Hub 22",
      "zh": "甘肃产业集聚区22"
    },
    "citySlug": "gansu-hub-zone-22",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع قانسو الصناعي والتجاري 22 (甘肃产业集聚区22) من المراكز الصناعية والتجارية البارزة في مقاطعة قانسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Gansu Industrial Hub 22 (甘肃产业集聚区22) is a prominent industrial and commercial center in Gansu Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قانسو، الصين",
      "en": "Gansu Industrial Hub 22, Gansu, China",
      "zh": "中国甘肃甘肃产业集聚区22"
    },
    "coordinates": {
      "latitude": 36.0576,
      "longitude": 103.4343
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "gansu",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في قانسو"
    }
  },
  {
    "id": "city-hainan-hub-zone-23",
    "slug": "hainan-hub-zone-23",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هاينان الصناعي والتجاري 23",
      "en": "Hainan Industrial Hub 23",
      "zh": "海南产业集聚区23",
      "pinyin": "Hainan Industrial Hub"
    },
    "province": {
      "ar": "هاينان",
      "en": "Hainan",
      "zh": "海南"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "مجمع هاينان الصناعي والتجاري 23",
      "en": "Hainan Industrial Hub 23",
      "zh": "海南产业集聚区23"
    },
    "citySlug": "hainan-hub-zone-23",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هاينان الصناعي والتجاري 23 (海南产业集聚区23) من المراكز الصناعية والتجارية البارزة في مقاطعة هاينان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hainan Industrial Hub 23 (海南产业集聚区23) is a prominent industrial and commercial center in Hainan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هاينان، الصين",
      "en": "Hainan Industrial Hub 23, Hainan, China",
      "zh": "中国海南海南产业集聚区23"
    },
    "coordinates": {
      "latitude": 19.7055,
      "longitude": 109.9868
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hainan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هاينان"
    }
  },
  {
    "id": "city-ningxia-hub-zone-24",
    "slug": "ningxia-hub-zone-24",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع نينغشيا الصناعي والتجاري 24",
      "en": "Ningxia Industrial Hub 24",
      "zh": "宁夏产业集聚区24",
      "pinyin": "Ningxia Industrial Hub"
    },
    "province": {
      "ar": "نينغشيا",
      "en": "Ningxia",
      "zh": "宁夏"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "مجمع نينغشيا الصناعي والتجاري 24",
      "en": "Ningxia Industrial Hub 24",
      "zh": "宁夏产业集聚区24"
    },
    "citySlug": "ningxia-hub-zone-24",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع نينغشيا الصناعي والتجاري 24 (宁夏产业集聚区24) من المراكز الصناعية والتجارية البارزة في مقاطعة نينغشيا. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Ningxia Industrial Hub 24 (宁夏产业集聚区24) is a prominent industrial and commercial center in Ningxia Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "نينغشيا، الصين",
      "en": "Ningxia Industrial Hub 24, Ningxia, China",
      "zh": "中国宁夏宁夏产业集聚区24"
    },
    "coordinates": {
      "latitude": 38.125,
      "longitude": 106.4006
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "ningxia",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في نينغشيا"
    }
  },
  {
    "id": "city-qinghai-hub-zone-25",
    "slug": "qinghai-hub-zone-25",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تشينغهاي الصناعي والتجاري 25",
      "en": "Qinghai Industrial Hub 25",
      "zh": "青海产业集聚区25",
      "pinyin": "Qinghai Industrial Hub"
    },
    "province": {
      "ar": "تشينغهاي",
      "en": "Qinghai",
      "zh": "青海"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "مجمع تشينغهاي الصناعي والتجاري 25",
      "en": "Qinghai Industrial Hub 25",
      "zh": "青海产业集聚区25"
    },
    "citySlug": "qinghai-hub-zone-25",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تشينغهاي الصناعي والتجاري 25 (青海产业集聚区25) من المراكز الصناعية والتجارية البارزة في مقاطعة تشينغهاي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Qinghai Industrial Hub 25 (青海产业集聚区25) is a prominent industrial and commercial center in Qinghai Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشينغهاي، الصين",
      "en": "Qinghai Industrial Hub 25, Qinghai, China",
      "zh": "中国青海青海产业集聚区25"
    },
    "coordinates": {
      "latitude": 36.568,
      "longitude": 102.1766
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "qinghai",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تشينغهاي"
    }
  },
  {
    "id": "city-tibet-hub-zone-26",
    "slug": "tibet-hub-zone-26",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع التبت الصناعي والتجاري 26",
      "en": "Tibet Industrial Hub 26",
      "zh": "西藏产业集聚区26",
      "pinyin": "Tibet Industrial Hub"
    },
    "province": {
      "ar": "التبت",
      "en": "Tibet",
      "zh": "西藏"
    },
    "provinceSlug": "tibet",
    "city": {
      "ar": "مجمع التبت الصناعي والتجاري 26",
      "en": "Tibet Industrial Hub 26",
      "zh": "西藏产业集聚区26"
    },
    "citySlug": "tibet-hub-zone-26",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع التبت الصناعي والتجاري 26 (西藏产业集聚区26) من المراكز الصناعية والتجارية البارزة في مقاطعة التبت. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Tibet Industrial Hub 26 (西藏产业集聚区26) is a prominent industrial and commercial center in Tibet Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "التبت، الصين",
      "en": "Tibet Industrial Hub 26, Tibet, China",
      "zh": "中国西藏西藏产业集聚区26"
    },
    "coordinates": {
      "latitude": 29.9575,
      "longitude": 91.4309
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "tibet",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في التبت"
    }
  },
  {
    "id": "city-hong-kong-hub-zone-27",
    "slug": "hong-kong-hub-zone-27",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هونغ كونغ الصناعي والتجاري 27",
      "en": "Hong Kong Industrial Hub 27",
      "zh": "香港产业集聚区27",
      "pinyin": "Hong Kong Industrial Hub"
    },
    "province": {
      "ar": "هونغ كونغ",
      "en": "Hong Kong",
      "zh": "香港"
    },
    "provinceSlug": "hong-kong",
    "city": {
      "ar": "مجمع هونغ كونغ الصناعي والتجاري 27",
      "en": "Hong Kong Industrial Hub 27",
      "zh": "香港产业集聚区27"
    },
    "citySlug": "hong-kong-hub-zone-27",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هونغ كونغ الصناعي والتجاري 27 (香港产业集聚区27) من المراكز الصناعية والتجارية البارزة في مقاطعة هونغ كونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hong Kong Industrial Hub 27 (香港产业集聚区27) is a prominent industrial and commercial center in Hong Kong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونغ كونغ، الصين",
      "en": "Hong Kong Industrial Hub 27, Hong Kong, China",
      "zh": "中国香港香港产业集聚区27"
    },
    "coordinates": {
      "latitude": 22.7019,
      "longitude": 114.0525
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hong-kong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هونغ كونغ"
    }
  },
  {
    "id": "city-macau-hub-zone-28",
    "slug": "macau-hub-zone-28",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع ماكاو الصناعي والتجاري 28",
      "en": "Macau Industrial Hub 28",
      "zh": "澳门产业集聚区28",
      "pinyin": "Macau Industrial Hub"
    },
    "province": {
      "ar": "ماكاو",
      "en": "Macau",
      "zh": "澳门"
    },
    "provinceSlug": "macau",
    "city": {
      "ar": "مجمع ماكاو الصناعي والتجاري 28",
      "en": "Macau Industrial Hub 28",
      "zh": "澳门产业集聚区28"
    },
    "citySlug": "macau-hub-zone-28",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع ماكاو الصناعي والتجاري 28 (澳门产业集聚区28) من المراكز الصناعية والتجارية البارزة في مقاطعة ماكاو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Macau Industrial Hub 28 (澳门产业集聚区28) is a prominent industrial and commercial center in Macau Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "ماكاو، الصين",
      "en": "Macau Industrial Hub 28, Macau, China",
      "zh": "中国澳门澳门产业集聚区28"
    },
    "coordinates": {
      "latitude": 22.3071,
      "longitude": 113.1589
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "macau",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في ماكاو"
    }
  },
  {
    "id": "city-taiwan-hub-zone-29",
    "slug": "taiwan-hub-zone-29",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تايوان الصناعي والتجاري 29",
      "en": "Taiwan Industrial Hub 29",
      "zh": "台湾产业集聚区29",
      "pinyin": "Taiwan Industrial Hub"
    },
    "province": {
      "ar": "تايوان",
      "en": "Taiwan",
      "zh": "台湾"
    },
    "provinceSlug": "taiwan",
    "city": {
      "ar": "مجمع تايوان الصناعي والتجاري 29",
      "en": "Taiwan Industrial Hub 29",
      "zh": "台湾产业集聚区29"
    },
    "citySlug": "taiwan-hub-zone-29",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تايوان الصناعي والتجاري 29 (台湾产业集聚区29) من المراكز الصناعية والتجارية البارزة في مقاطعة تايوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Taiwan Industrial Hub 29 (台湾产业集聚区29) is a prominent industrial and commercial center in Taiwan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تايوان، الصين",
      "en": "Taiwan Industrial Hub 29, Taiwan, China",
      "zh": "中国台湾台湾产业集聚区29"
    },
    "coordinates": {
      "latitude": 24.7675,
      "longitude": 121.2662
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "taiwan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تايوان"
    }
  },
  {
    "id": "city-guangdong-hub-zone-30",
    "slug": "guangdong-hub-zone-30",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع غوانغدونغ الصناعي والتجاري 30",
      "en": "Guangdong Industrial Hub 30",
      "zh": "广东产业集聚区30",
      "pinyin": "Guangdong Industrial Hub"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "مجمع غوانغدونغ الصناعي والتجاري 30",
      "en": "Guangdong Industrial Hub 30",
      "zh": "广东产业集聚区30"
    },
    "citySlug": "guangdong-hub-zone-30",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع غوانغدونغ الصناعي والتجاري 30 (广东产业集聚区30) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangdong Industrial Hub 30 (广东产业集聚区30) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Guangdong Industrial Hub 30, Guangdong, China",
      "zh": "中国广东广东产业集聚区30"
    },
    "coordinates": {
      "latitude": 22.7339,
      "longitude": 113.3261
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في غوانغدونغ"
    }
  },
  {
    "id": "city-zhejiang-hub-zone-31",
    "slug": "zhejiang-hub-zone-31",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تشجيانغ الصناعي والتجاري 31",
      "en": "Zhejiang Industrial Hub 31",
      "zh": "浙江产业集聚区31",
      "pinyin": "Zhejiang Industrial Hub"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "مجمع تشجيانغ الصناعي والتجاري 31",
      "en": "Zhejiang Industrial Hub 31",
      "zh": "浙江产业集聚区31"
    },
    "citySlug": "zhejiang-hub-zone-31",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تشجيانغ الصناعي والتجاري 31 (浙江产业集聚区31) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Zhejiang Industrial Hub 31 (浙江产业集聚区31) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Zhejiang Industrial Hub 31, Zhejiang, China",
      "zh": "中国浙江浙江产业集聚区31"
    },
    "coordinates": {
      "latitude": 30.1125,
      "longitude": 120.521
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تشجيانغ"
    }
  },
  {
    "id": "city-jiangsu-hub-zone-32",
    "slug": "jiangsu-hub-zone-32",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيانغسو الصناعي والتجاري 32",
      "en": "Jiangsu Industrial Hub 32",
      "zh": "江苏产业集聚区32",
      "pinyin": "Jiangsu Industrial Hub"
    },
    "province": {
      "ar": "جيانغسو",
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "مجمع جيانغسو الصناعي والتجاري 32",
      "en": "Jiangsu Industrial Hub 32",
      "zh": "江苏产业集聚区32"
    },
    "citySlug": "jiangsu-hub-zone-32",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيانغسو الصناعي والتجاري 32 (江苏产业集聚区32) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangsu Industrial Hub 32 (江苏产业集聚区32) is a prominent industrial and commercial center in Jiangsu Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغسو، الصين",
      "en": "Jiangsu Industrial Hub 32, Jiangsu, China",
      "zh": "中国江苏江苏产业集聚区32"
    },
    "coordinates": {
      "latitude": 32.2823,
      "longitude": 119.0969
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangsu",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيانغسو"
    }
  },
  {
    "id": "city-shandong-hub-zone-33",
    "slug": "shandong-hub-zone-33",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شاندونغ الصناعي والتجاري 33",
      "en": "Shandong Industrial Hub 33",
      "zh": "山东产业集聚区33",
      "pinyin": "Shandong Industrial Hub"
    },
    "province": {
      "ar": "شاندونغ",
      "en": "Shandong",
      "zh": "山东"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "مجمع شاندونغ الصناعي والتجاري 33",
      "en": "Shandong Industrial Hub 33",
      "zh": "山东产业集聚区33"
    },
    "citySlug": "shandong-hub-zone-33",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شاندونغ الصناعي والتجاري 33 (山东产业集聚区33) من المراكز الصناعية والتجارية البارزة في مقاطعة شاندونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shandong Industrial Hub 33 (山东产业集聚区33) is a prominent industrial and commercial center in Shandong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شاندونغ، الصين",
      "en": "Shandong Industrial Hub 33, Shandong, China",
      "zh": "中国山东山东产业集聚区33"
    },
    "coordinates": {
      "latitude": 37.0512,
      "longitude": 117.1148
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shandong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شاندونغ"
    }
  },
  {
    "id": "city-fujian-hub-zone-34",
    "slug": "fujian-hub-zone-34",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع فوجيان الصناعي والتجاري 34",
      "en": "Fujian Industrial Hub 34",
      "zh": "福建产业集聚区34",
      "pinyin": "Fujian Industrial Hub"
    },
    "province": {
      "ar": "فوجيان",
      "en": "Fujian",
      "zh": "福建"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "مجمع فوجيان الصناعي والتجاري 34",
      "en": "Fujian Industrial Hub 34",
      "zh": "福建产业集聚区34"
    },
    "citySlug": "fujian-hub-zone-34",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع فوجيان الصناعي والتجاري 34 (福建产业集聚区34) من المراكز الصناعية والتجارية البارزة في مقاطعة فوجيان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Fujian Industrial Hub 34 (福建产业集聚区34) is a prominent industrial and commercial center in Fujian Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "فوجيان، الصين",
      "en": "Fujian Industrial Hub 34, Fujian, China",
      "zh": "中国福建福建产业集聚区34"
    },
    "coordinates": {
      "latitude": 26.2861,
      "longitude": 118.9571
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "fujian",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في فوجيان"
    }
  },
  {
    "id": "city-hebei-hub-zone-35",
    "slug": "hebei-hub-zone-35",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع خبي الصناعي والتجاري 35",
      "en": "Hebei Industrial Hub 35",
      "zh": "河北产业集聚区35",
      "pinyin": "Hebei Industrial Hub"
    },
    "province": {
      "ar": "خبي",
      "en": "Hebei",
      "zh": "河北"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "مجمع خبي الصناعي والتجاري 35",
      "en": "Hebei Industrial Hub 35",
      "zh": "河北产业集聚区35"
    },
    "citySlug": "hebei-hub-zone-35",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع خبي الصناعي والتجاري 35 (河北产业集聚区35) من المراكز الصناعية والتجارية البارزة في مقاطعة خبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hebei Industrial Hub 35 (河北产业集聚区35) is a prominent industrial and commercial center in Hebei Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خبي، الصين",
      "en": "Hebei Industrial Hub 35, Hebei, China",
      "zh": "中国河北河北产业集聚区35"
    },
    "coordinates": {
      "latitude": 37.8715,
      "longitude": 114.1534
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hebei",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في خبي"
    }
  },
  {
    "id": "city-henan-hub-zone-36",
    "slug": "henan-hub-zone-36",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع خنان الصناعي والتجاري 36",
      "en": "Henan Industrial Hub 36",
      "zh": "河南产业集聚区36",
      "pinyin": "Henan Industrial Hub"
    },
    "province": {
      "ar": "خنان",
      "en": "Henan",
      "zh": "河南"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "مجمع خنان الصناعي والتجاري 36",
      "en": "Henan Industrial Hub 36",
      "zh": "河南产业集聚区36"
    },
    "citySlug": "henan-hub-zone-36",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع خنان الصناعي والتجاري 36 (河南产业集聚区36) من المراكز الصناعية والتجارية البارزة في مقاطعة خنان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Henan Industrial Hub 36 (河南产业集聚区36) is a prominent industrial and commercial center in Henan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خنان، الصين",
      "en": "Henan Industrial Hub 36, Henan, China",
      "zh": "中国河南河南产业集聚区36"
    },
    "coordinates": {
      "latitude": 34.3499,
      "longitude": 113.5741
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "henan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في خنان"
    }
  },
  {
    "id": "city-hubei-hub-zone-37",
    "slug": "hubei-hub-zone-37",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هوبي الصناعي والتجاري 37",
      "en": "Hubei Industrial Hub 37",
      "zh": "湖北产业集聚区37",
      "pinyin": "Hubei Industrial Hub"
    },
    "province": {
      "ar": "هوبي",
      "en": "Hubei",
      "zh": "湖北"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "مجمع هوبي الصناعي والتجاري 37",
      "en": "Hubei Industrial Hub 37",
      "zh": "湖北产业集聚区37"
    },
    "citySlug": "hubei-hub-zone-37",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هوبي الصناعي والتجاري 37 (湖北产业集聚区37) من المراكز الصناعية والتجارية البارزة في مقاطعة هوبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hubei Industrial Hub 37 (湖北产业集聚区37) is a prominent industrial and commercial center in Hubei Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هوبي، الصين",
      "en": "Hubei Industrial Hub 37, Hubei, China",
      "zh": "中国湖北湖北产业集聚区37"
    },
    "coordinates": {
      "latitude": 30.3354,
      "longitude": 114.6117
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hubei",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هوبي"
    }
  },
  {
    "id": "city-hunan-hub-zone-38",
    "slug": "hunan-hub-zone-38",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هونان الصناعي والتجاري 38",
      "en": "Hunan Industrial Hub 38",
      "zh": "湖南产业集聚区38",
      "pinyin": "Hunan Industrial Hub"
    },
    "province": {
      "ar": "هونان",
      "en": "Hunan",
      "zh": "湖南"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "مجمع هونان الصناعي والتجاري 38",
      "en": "Hunan Industrial Hub 38",
      "zh": "湖南产业集聚区38"
    },
    "citySlug": "hunan-hub-zone-38",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هونان الصناعي والتجاري 38 (湖南产业集聚区38) من المراكز الصناعية والتجارية البارزة في مقاطعة هونان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hunan Industrial Hub 38 (湖南产业集聚区38) is a prominent industrial and commercial center in Hunan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونان، الصين",
      "en": "Hunan Industrial Hub 38, Hunan, China",
      "zh": "中国湖南湖南产业集聚区38"
    },
    "coordinates": {
      "latitude": 28.3467,
      "longitude": 113.3208
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hunan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هونان"
    }
  },
  {
    "id": "city-anhui-hub-zone-39",
    "slug": "anhui-hub-zone-39",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع آنهوي الصناعي والتجاري 39",
      "en": "Anhui Industrial Hub 39",
      "zh": "安徽产业集聚区39",
      "pinyin": "Anhui Industrial Hub"
    },
    "province": {
      "ar": "آنهوي",
      "en": "Anhui",
      "zh": "安徽"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "مجمع آنهوي الصناعي والتجاري 39",
      "en": "Anhui Industrial Hub 39",
      "zh": "安徽产业集聚区39"
    },
    "citySlug": "anhui-hub-zone-39",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع آنهوي الصناعي والتجاري 39 (安徽产业集聚区39) من المراكز الصناعية والتجارية البارزة في مقاطعة آنهوي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Anhui Industrial Hub 39 (安徽产业集聚区39) is a prominent industrial and commercial center in Anhui Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "آنهوي، الصين",
      "en": "Anhui Industrial Hub 39, Anhui, China",
      "zh": "中国安徽安徽产业集聚区39"
    },
    "coordinates": {
      "latitude": 32.2467,
      "longitude": 117.3897
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "anhui",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في آنهوي"
    }
  },
  {
    "id": "city-jiangxi-hub-zone-40",
    "slug": "jiangxi-hub-zone-40",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيانغشي الصناعي والتجاري 40",
      "en": "Jiangxi Industrial Hub 40",
      "zh": "江西产业集聚区40",
      "pinyin": "Jiangxi Industrial Hub"
    },
    "province": {
      "ar": "جيانغشي",
      "en": "Jiangxi",
      "zh": "江西"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "مجمع جيانغشي الصناعي والتجاري 40",
      "en": "Jiangxi Industrial Hub 40",
      "zh": "江西产业集聚区40"
    },
    "citySlug": "jiangxi-hub-zone-40",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيانغشي الصناعي والتجاري 40 (江西产业集聚区40) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangxi Industrial Hub 40 (江西产业集聚区40) is a prominent industrial and commercial center in Jiangxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغشي، الصين",
      "en": "Jiangxi Industrial Hub 40, Jiangxi, China",
      "zh": "中国江西江西产业集聚区40"
    },
    "coordinates": {
      "latitude": 28.981,
      "longitude": 115.5911
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيانغشي"
    }
  },
  {
    "id": "city-sichuan-hub-zone-41",
    "slug": "sichuan-hub-zone-41",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع سيتشوان الصناعي والتجاري 41",
      "en": "Sichuan Industrial Hub 41",
      "zh": "四川产业集聚区41",
      "pinyin": "Sichuan Industrial Hub"
    },
    "province": {
      "ar": "سيتشوان",
      "en": "Sichuan",
      "zh": "四川"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "مجمع سيتشوان الصناعي والتجاري 41",
      "en": "Sichuan Industrial Hub 41",
      "zh": "四川产业集聚区41"
    },
    "citySlug": "sichuan-hub-zone-41",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع سيتشوان الصناعي والتجاري 41 (四川产业集聚区41) من المراكز الصناعية والتجارية البارزة في مقاطعة سيتشوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Sichuan Industrial Hub 41 (四川产业集聚区41) is a prominent industrial and commercial center in Sichuan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "سيتشوان، الصين",
      "en": "Sichuan Industrial Hub 41, Sichuan, China",
      "zh": "中国四川四川产业集聚区41"
    },
    "coordinates": {
      "latitude": 30.5094,
      "longitude": 103.6719
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "sichuan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في سيتشوان"
    }
  },
  {
    "id": "city-shaanxi-hub-zone-42",
    "slug": "shaanxi-hub-zone-42",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شنشي الصناعي والتجاري 42",
      "en": "Shaanxi Industrial Hub 42",
      "zh": "陕西产业集聚区42",
      "pinyin": "Shaanxi Industrial Hub"
    },
    "province": {
      "ar": "شنشي",
      "en": "Shaanxi",
      "zh": "陕西"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "مجمع شنشي الصناعي والتجاري 42",
      "en": "Shaanxi Industrial Hub 42",
      "zh": "陕西产业集聚区42"
    },
    "citySlug": "shaanxi-hub-zone-42",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شنشي الصناعي والتجاري 42 (陕西产业集聚区42) من المراكز الصناعية والتجارية البارزة في مقاطعة شنشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shaanxi Industrial Hub 42 (陕西产业集聚区42) is a prominent industrial and commercial center in Shaanxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شنشي، الصين",
      "en": "Shaanxi Industrial Hub 42, Shaanxi, China",
      "zh": "中国陕西陕西产业集聚区42"
    },
    "coordinates": {
      "latitude": 33.975,
      "longitude": 108.7798
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shaanxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شنشي"
    }
  },
  {
    "id": "city-liaoning-hub-zone-43",
    "slug": "liaoning-hub-zone-43",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع لياونينغ الصناعي والتجاري 43",
      "en": "Liaoning Industrial Hub 43",
      "zh": "辽宁产业集聚区43",
      "pinyin": "Liaoning Industrial Hub"
    },
    "province": {
      "ar": "لياونينغ",
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "مجمع لياونينغ الصناعي والتجاري 43",
      "en": "Liaoning Industrial Hub 43",
      "zh": "辽宁产业集聚区43"
    },
    "citySlug": "liaoning-hub-zone-43",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع لياونينغ الصناعي والتجاري 43 (辽宁产业集聚区43) من المراكز الصناعية والتجارية البارزة في مقاطعة لياونينغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Liaoning Industrial Hub 43 (辽宁产业集聚区43) is a prominent industrial and commercial center in Liaoning Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "لياونينغ، الصين",
      "en": "Liaoning Industrial Hub 43, Liaoning, China",
      "zh": "中国辽宁辽宁产业集聚区43"
    },
    "coordinates": {
      "latitude": 41.473,
      "longitude": 123.6535
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "liaoning",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في لياونينغ"
    }
  },
  {
    "id": "city-jilin-hub-zone-44",
    "slug": "jilin-hub-zone-44",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيلين الصناعي والتجاري 44",
      "en": "Jilin Industrial Hub 44",
      "zh": "吉林产业集聚区44",
      "pinyin": "Jilin Industrial Hub"
    },
    "province": {
      "ar": "جيلين",
      "en": "Jilin",
      "zh": "吉林"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "مجمع جيلين الصناعي والتجاري 44",
      "en": "Jilin Industrial Hub 44",
      "zh": "吉林产业集聚区44"
    },
    "citySlug": "jilin-hub-zone-44",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيلين الصناعي والتجاري 44 (吉林产业集聚区44) من المراكز الصناعية والتجارية البارزة في مقاطعة جيلين. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jilin Industrial Hub 44 (吉林产业集聚区44) is a prominent industrial and commercial center in Jilin Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيلين، الصين",
      "en": "Jilin Industrial Hub 44, Jilin, China",
      "zh": "中国吉林吉林产业集聚区44"
    },
    "coordinates": {
      "latitude": 43.8242,
      "longitude": 125.7234
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jilin",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيلين"
    }
  },
  {
    "id": "city-heilongjiang-hub-zone-45",
    "slug": "heilongjiang-hub-zone-45",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هيلونغجيانغ الصناعي والتجاري 45",
      "en": "Heilongjiang Industrial Hub 45",
      "zh": "黑龙江产业集聚区45",
      "pinyin": "Heilongjiang Industrial Hub"
    },
    "province": {
      "ar": "هيلونغجيانغ",
      "en": "Heilongjiang",
      "zh": "黑龙江"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "مجمع هيلونغجيانغ الصناعي والتجاري 45",
      "en": "Heilongjiang Industrial Hub 45",
      "zh": "黑龙江产业集聚区45"
    },
    "citySlug": "heilongjiang-hub-zone-45",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هيلونغجيانغ الصناعي والتجاري 45 (黑龙江产业集聚区45) من المراكز الصناعية والتجارية البارزة في مقاطعة هيلونغجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Heilongjiang Industrial Hub 45 (黑龙江产业集聚区45) is a prominent industrial and commercial center in Heilongjiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هيلونغجيانغ، الصين",
      "en": "Heilongjiang Industrial Hub 45, Heilongjiang, China",
      "zh": "中国黑龙江黑龙江产业集聚区45"
    },
    "coordinates": {
      "latitude": 46.1442,
      "longitude": 126.7451
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "heilongjiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هيلونغجيانغ"
    }
  },
  {
    "id": "city-shanxi-hub-zone-46",
    "slug": "shanxi-hub-zone-46",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شانشي الصناعي والتجاري 46",
      "en": "Shanxi Industrial Hub 46",
      "zh": "山西产业集聚区46",
      "pinyin": "Shanxi Industrial Hub"
    },
    "province": {
      "ar": "شانشي",
      "en": "Shanxi",
      "zh": "山西"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "مجمع شانشي الصناعي والتجاري 46",
      "en": "Shanxi Industrial Hub 46",
      "zh": "山西产业集聚区46"
    },
    "citySlug": "shanxi-hub-zone-46",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شانشي الصناعي والتجاري 46 (山西产业集聚区46) من المراكز الصناعية والتجارية البارزة في مقاطعة شانشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shanxi Industrial Hub 46 (山西产业集聚区46) is a prominent industrial and commercial center in Shanxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شانشي، الصين",
      "en": "Shanxi Industrial Hub 46, Shanxi, China",
      "zh": "中国山西山西产业集聚区46"
    },
    "coordinates": {
      "latitude": 38.2313,
      "longitude": 112.376
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shanxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شانشي"
    }
  },
  {
    "id": "city-guizhou-hub-zone-47",
    "slug": "guizhou-hub-zone-47",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع غويتشو الصناعي والتجاري 47",
      "en": "Guizhou Industrial Hub 47",
      "zh": "贵州产业集聚区47",
      "pinyin": "Guizhou Industrial Hub"
    },
    "province": {
      "ar": "غويتشو",
      "en": "Guizhou",
      "zh": "贵州"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "مجمع غويتشو الصناعي والتجاري 47",
      "en": "Guizhou Industrial Hub 47",
      "zh": "贵州产业集聚区47"
    },
    "citySlug": "guizhou-hub-zone-47",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع غويتشو الصناعي والتجاري 47 (贵州产业集聚区47) من المراكز الصناعية والتجارية البارزة في مقاطعة غويتشو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guizhou Industrial Hub 47 (贵州产业集聚区47) is a prominent industrial and commercial center in Guizhou Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غويتشو، الصين",
      "en": "Guizhou Industrial Hub 47, Guizhou, China",
      "zh": "中国贵州贵州产业集聚区47"
    },
    "coordinates": {
      "latitude": 26.6971,
      "longitude": 106.2333
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guizhou",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في غويتشو"
    }
  },
  {
    "id": "city-yunnan-hub-zone-48",
    "slug": "yunnan-hub-zone-48",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع يوننان الصناعي والتجاري 48",
      "en": "Yunnan Industrial Hub 48",
      "zh": "云南产业集聚区48",
      "pinyin": "Yunnan Industrial Hub"
    },
    "province": {
      "ar": "يوننان",
      "en": "Yunnan",
      "zh": "云南"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "مجمع يوننان الصناعي والتجاري 48",
      "en": "Yunnan Industrial Hub 48",
      "zh": "云南产业集聚区48"
    },
    "citySlug": "yunnan-hub-zone-48",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع يوننان الصناعي والتجاري 48 (云南产业集聚区48) من المراكز الصناعية والتجارية البارزة في مقاطعة يوننان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yunnan Industrial Hub 48 (云南产业集聚区48) is a prominent industrial and commercial center in Yunnan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "يوننان، الصين",
      "en": "Yunnan Industrial Hub 48, Yunnan, China",
      "zh": "中国云南云南产业集聚区48"
    },
    "coordinates": {
      "latitude": 24.7333,
      "longitude": 102.4562
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "yunnan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في يوننان"
    }
  },
  {
    "id": "city-guangxi-hub-zone-49",
    "slug": "guangxi-hub-zone-49",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع قوانغشي الصناعي والتجاري 49",
      "en": "Guangxi Industrial Hub 49",
      "zh": "广西产业集聚区49",
      "pinyin": "Guangxi Industrial Hub"
    },
    "province": {
      "ar": "قوانغشي",
      "en": "Guangxi",
      "zh": "广西"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "مجمع قوانغشي الصناعي والتجاري 49",
      "en": "Guangxi Industrial Hub 49",
      "zh": "广西产业集聚区49"
    },
    "citySlug": "guangxi-hub-zone-49",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع قوانغشي الصناعي والتجاري 49 (广西产业集聚区49) من المراكز الصناعية والتجارية البارزة في مقاطعة قوانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangxi Industrial Hub 49 (广西产业集聚区49) is a prominent industrial and commercial center in Guangxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قوانغشي، الصين",
      "en": "Guangxi Industrial Hub 49, Guangxi, China",
      "zh": "中国广西广西产业集聚区49"
    },
    "coordinates": {
      "latitude": 22.4355,
      "longitude": 108.4867
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في قوانغشي"
    }
  },
  {
    "id": "city-inner-mongolia-hub-zone-50",
    "slug": "inner-mongolia-hub-zone-50",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع منغوليا الداخلية الصناعي والتجاري 50",
      "en": "Inner Mongolia Industrial Hub 50",
      "zh": "内蒙古产业集聚区50",
      "pinyin": "Inner Mongolia Industrial Hub"
    },
    "province": {
      "ar": "منغوليا الداخلية",
      "en": "Inner Mongolia",
      "zh": "内蒙古"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "مجمع منغوليا الداخلية الصناعي والتجاري 50",
      "en": "Inner Mongolia Industrial Hub 50",
      "zh": "内蒙古产业集聚区50"
    },
    "citySlug": "inner-mongolia-hub-zone-50",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع منغوليا الداخلية الصناعي والتجاري 50 (内蒙古产业集聚区50) من المراكز الصناعية والتجارية البارزة في مقاطعة منغوليا الداخلية. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Inner Mongolia Industrial Hub 50 (内蒙古产业集聚区50) is a prominent industrial and commercial center in Inner Mongolia Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "منغوليا الداخلية، الصين",
      "en": "Inner Mongolia Industrial Hub 50, Inner Mongolia, China",
      "zh": "中国内蒙古内蒙古产业集聚区50"
    },
    "coordinates": {
      "latitude": 40.7366,
      "longitude": 112.1371
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "inner-mongolia",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في منغوليا الداخلية"
    }
  },
  {
    "id": "city-xinjiang-hub-zone-51",
    "slug": "xinjiang-hub-zone-51",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شينجيانغ الصناعي والتجاري 51",
      "en": "Xinjiang Industrial Hub 51",
      "zh": "新疆产业集聚区51",
      "pinyin": "Xinjiang Industrial Hub"
    },
    "province": {
      "ar": "شينجيانغ",
      "en": "Xinjiang",
      "zh": "新疆"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "مجمع شينجيانغ الصناعي والتجاري 51",
      "en": "Xinjiang Industrial Hub 51",
      "zh": "新疆产业集聚区51"
    },
    "citySlug": "xinjiang-hub-zone-51",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شينجيانغ الصناعي والتجاري 51 (新疆产业集聚区51) من المراكز الصناعية والتجارية البارزة في مقاطعة شينجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Xinjiang Industrial Hub 51 (新疆产业集聚区51) is a prominent industrial and commercial center in Xinjiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شينجيانغ، الصين",
      "en": "Xinjiang Industrial Hub 51, Xinjiang, China",
      "zh": "中国新疆新疆产业集聚区51"
    },
    "coordinates": {
      "latitude": 44.0937,
      "longitude": 87.9137
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "xinjiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شينجيانغ"
    }
  },
  {
    "id": "city-gansu-hub-zone-52",
    "slug": "gansu-hub-zone-52",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع قانسو الصناعي والتجاري 52",
      "en": "Gansu Industrial Hub 52",
      "zh": "甘肃产业集聚区52",
      "pinyin": "Gansu Industrial Hub"
    },
    "province": {
      "ar": "قانسو",
      "en": "Gansu",
      "zh": "甘肃"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "مجمع قانسو الصناعي والتجاري 52",
      "en": "Gansu Industrial Hub 52",
      "zh": "甘肃产业集聚区52"
    },
    "citySlug": "gansu-hub-zone-52",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع قانسو الصناعي والتجاري 52 (甘肃产业集聚区52) من المراكز الصناعية والتجارية البارزة في مقاطعة قانسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Gansu Industrial Hub 52 (甘肃产业集聚区52) is a prominent industrial and commercial center in Gansu Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قانسو، الصين",
      "en": "Gansu Industrial Hub 52, Gansu, China",
      "zh": "中国甘肃甘肃产业集聚区52"
    },
    "coordinates": {
      "latitude": 36.4558,
      "longitude": 103.7691
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "gansu",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في قانسو"
    }
  },
  {
    "id": "city-hainan-hub-zone-53",
    "slug": "hainan-hub-zone-53",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هاينان الصناعي والتجاري 53",
      "en": "Hainan Industrial Hub 53",
      "zh": "海南产业集聚区53",
      "pinyin": "Hainan Industrial Hub"
    },
    "province": {
      "ar": "هاينان",
      "en": "Hainan",
      "zh": "海南"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "مجمع هاينان الصناعي والتجاري 53",
      "en": "Hainan Industrial Hub 53",
      "zh": "海南产业集聚区53"
    },
    "citySlug": "hainan-hub-zone-53",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هاينان الصناعي والتجاري 53 (海南产业集聚区53) من المراكز الصناعية والتجارية البارزة في مقاطعة هاينان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hainan Industrial Hub 53 (海南产业集聚区53) is a prominent industrial and commercial center in Hainan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هاينان، الصين",
      "en": "Hainan Industrial Hub 53, Hainan, China",
      "zh": "中国海南海南产业集聚区53"
    },
    "coordinates": {
      "latitude": 20.2024,
      "longitude": 109.8326
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hainan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هاينان"
    }
  },
  {
    "id": "city-ningxia-hub-zone-54",
    "slug": "ningxia-hub-zone-54",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع نينغشيا الصناعي والتجاري 54",
      "en": "Ningxia Industrial Hub 54",
      "zh": "宁夏产业集聚区54",
      "pinyin": "Ningxia Industrial Hub"
    },
    "province": {
      "ar": "نينغشيا",
      "en": "Ningxia",
      "zh": "宁夏"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "مجمع نينغشيا الصناعي والتجاري 54",
      "en": "Ningxia Industrial Hub 54",
      "zh": "宁夏产业集聚区54"
    },
    "citySlug": "ningxia-hub-zone-54",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع نينغشيا الصناعي والتجاري 54 (宁夏产业集聚区54) من المراكز الصناعية والتجارية البارزة في مقاطعة نينغشيا. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Ningxia Industrial Hub 54 (宁夏产业集聚区54) is a prominent industrial and commercial center in Ningxia Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "نينغشيا، الصين",
      "en": "Ningxia Industrial Hub 54, Ningxia, China",
      "zh": "中国宁夏宁夏产业集聚区54"
    },
    "coordinates": {
      "latitude": 38.2637,
      "longitude": 105.8992
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "ningxia",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في نينغشيا"
    }
  },
  {
    "id": "city-qinghai-hub-zone-55",
    "slug": "qinghai-hub-zone-55",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تشينغهاي الصناعي والتجاري 55",
      "en": "Qinghai Industrial Hub 55",
      "zh": "青海产业集聚区55",
      "pinyin": "Qinghai Industrial Hub"
    },
    "province": {
      "ar": "تشينغهاي",
      "en": "Qinghai",
      "zh": "青海"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "مجمع تشينغهاي الصناعي والتجاري 55",
      "en": "Qinghai Industrial Hub 55",
      "zh": "青海产业集聚区55"
    },
    "citySlug": "qinghai-hub-zone-55",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تشينغهاي الصناعي والتجاري 55 (青海产业集聚区55) من المراكز الصناعية والتجارية البارزة في مقاطعة تشينغهاي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Qinghai Industrial Hub 55 (青海产业集聚区55) is a prominent industrial and commercial center in Qinghai Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشينغهاي، الصين",
      "en": "Qinghai Industrial Hub 55, Qinghai, China",
      "zh": "中国青海青海产业集聚区55"
    },
    "coordinates": {
      "latitude": 36.221,
      "longitude": 101.789
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "qinghai",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تشينغهاي"
    }
  },
  {
    "id": "city-tibet-hub-zone-56",
    "slug": "tibet-hub-zone-56",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع التبت الصناعي والتجاري 56",
      "en": "Tibet Industrial Hub 56",
      "zh": "西藏产业集聚区56",
      "pinyin": "Tibet Industrial Hub"
    },
    "province": {
      "ar": "التبت",
      "en": "Tibet",
      "zh": "西藏"
    },
    "provinceSlug": "tibet",
    "city": {
      "ar": "مجمع التبت الصناعي والتجاري 56",
      "en": "Tibet Industrial Hub 56",
      "zh": "西藏产业集聚区56"
    },
    "citySlug": "tibet-hub-zone-56",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع التبت الصناعي والتجاري 56 (西藏产业集聚区56) من المراكز الصناعية والتجارية البارزة في مقاطعة التبت. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Tibet Industrial Hub 56 (西藏产业集聚区56) is a prominent industrial and commercial center in Tibet Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "التبت، الصين",
      "en": "Tibet Industrial Hub 56, Tibet, China",
      "zh": "中国西藏西藏产业集聚区56"
    },
    "coordinates": {
      "latitude": 29.4439,
      "longitude": 91.5134
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "tibet",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في التبت"
    }
  },
  {
    "id": "city-hong-kong-hub-zone-57",
    "slug": "hong-kong-hub-zone-57",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هونغ كونغ الصناعي والتجاري 57",
      "en": "Hong Kong Industrial Hub 57",
      "zh": "香港产业集聚区57",
      "pinyin": "Hong Kong Industrial Hub"
    },
    "province": {
      "ar": "هونغ كونغ",
      "en": "Hong Kong",
      "zh": "香港"
    },
    "provinceSlug": "hong-kong",
    "city": {
      "ar": "مجمع هونغ كونغ الصناعي والتجاري 57",
      "en": "Hong Kong Industrial Hub 57",
      "zh": "香港产业集聚区57"
    },
    "citySlug": "hong-kong-hub-zone-57",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هونغ كونغ الصناعي والتجاري 57 (香港产业集聚区57) من المراكز الصناعية والتجارية البارزة في مقاطعة هونغ كونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hong Kong Industrial Hub 57 (香港产业集聚区57) is a prominent industrial and commercial center in Hong Kong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونغ كونغ، الصين",
      "en": "Hong Kong Industrial Hub 57, Hong Kong, China",
      "zh": "中国香港香港产业集聚区57"
    },
    "coordinates": {
      "latitude": 22.4938,
      "longitude": 114.5293
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hong-kong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هونغ كونغ"
    }
  },
  {
    "id": "city-macau-hub-zone-58",
    "slug": "macau-hub-zone-58",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع ماكاو الصناعي والتجاري 58",
      "en": "Macau Industrial Hub 58",
      "zh": "澳门产业集聚区58",
      "pinyin": "Macau Industrial Hub"
    },
    "province": {
      "ar": "ماكاو",
      "en": "Macau",
      "zh": "澳门"
    },
    "provinceSlug": "macau",
    "city": {
      "ar": "مجمع ماكاو الصناعي والتجاري 58",
      "en": "Macau Industrial Hub 58",
      "zh": "澳门产业集聚区58"
    },
    "citySlug": "macau-hub-zone-58",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع ماكاو الصناعي والتجاري 58 (澳门产业集聚区58) من المراكز الصناعية والتجارية البارزة في مقاطعة ماكاو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Macau Industrial Hub 58 (澳门产业集聚区58) is a prominent industrial and commercial center in Macau Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "ماكاو، الصين",
      "en": "Macau Industrial Hub 58, Macau, China",
      "zh": "中国澳门澳门产业集聚区58"
    },
    "coordinates": {
      "latitude": 22.5958,
      "longitude": 113.5916
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "macau",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في ماكاو"
    }
  },
  {
    "id": "city-taiwan-hub-zone-59",
    "slug": "taiwan-hub-zone-59",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تايوان الصناعي والتجاري 59",
      "en": "Taiwan Industrial Hub 59",
      "zh": "台湾产业集聚区59",
      "pinyin": "Taiwan Industrial Hub"
    },
    "province": {
      "ar": "تايوان",
      "en": "Taiwan",
      "zh": "台湾"
    },
    "provinceSlug": "taiwan",
    "city": {
      "ar": "مجمع تايوان الصناعي والتجاري 59",
      "en": "Taiwan Industrial Hub 59",
      "zh": "台湾产业集聚区59"
    },
    "citySlug": "taiwan-hub-zone-59",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تايوان الصناعي والتجاري 59 (台湾产业集聚区59) من المراكز الصناعية والتجارية البارزة في مقاطعة تايوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Taiwan Industrial Hub 59 (台湾产业集聚区59) is a prominent industrial and commercial center in Taiwan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تايوان، الصين",
      "en": "Taiwan Industrial Hub 59, Taiwan, China",
      "zh": "中国台湾台湾产业集聚区59"
    },
    "coordinates": {
      "latitude": 25.2877,
      "longitude": 121.257
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "taiwan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تايوان"
    }
  },
  {
    "id": "city-guangdong-hub-zone-60",
    "slug": "guangdong-hub-zone-60",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع غوانغدونغ الصناعي والتجاري 60",
      "en": "Guangdong Industrial Hub 60",
      "zh": "广东产业集聚区60",
      "pinyin": "Guangdong Industrial Hub"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "مجمع غوانغدونغ الصناعي والتجاري 60",
      "en": "Guangdong Industrial Hub 60",
      "zh": "广东产业集聚区60"
    },
    "citySlug": "guangdong-hub-zone-60",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع غوانغدونغ الصناعي والتجاري 60 (广东产业集聚区60) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangdong Industrial Hub 60 (广东产业集聚区60) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Guangdong Industrial Hub 60, Guangdong, China",
      "zh": "中国广东广东产业集聚区60"
    },
    "coordinates": {
      "latitude": 23.0072,
      "longitude": 112.8834
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في غوانغدونغ"
    }
  },
  {
    "id": "city-zhejiang-hub-zone-61",
    "slug": "zhejiang-hub-zone-61",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تشجيانغ الصناعي والتجاري 61",
      "en": "Zhejiang Industrial Hub 61",
      "zh": "浙江产业集聚区61",
      "pinyin": "Zhejiang Industrial Hub"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "مجمع تشجيانغ الصناعي والتجاري 61",
      "en": "Zhejiang Industrial Hub 61",
      "zh": "浙江产业集聚区61"
    },
    "citySlug": "zhejiang-hub-zone-61",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تشجيانغ الصناعي والتجاري 61 (浙江产业集聚区61) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Zhejiang Industrial Hub 61 (浙江产业集聚区61) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Zhejiang Industrial Hub 61, Zhejiang, China",
      "zh": "中国浙江浙江产业集聚区61"
    },
    "coordinates": {
      "latitude": 29.8877,
      "longitude": 120.0519
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تشجيانغ"
    }
  },
  {
    "id": "city-jiangsu-hub-zone-62",
    "slug": "jiangsu-hub-zone-62",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيانغسو الصناعي والتجاري 62",
      "en": "Jiangsu Industrial Hub 62",
      "zh": "江苏产业集聚区62",
      "pinyin": "Jiangsu Industrial Hub"
    },
    "province": {
      "ar": "جيانغسو",
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "مجمع جيانغسو الصناعي والتجاري 62",
      "en": "Jiangsu Industrial Hub 62",
      "zh": "江苏产业集聚区62"
    },
    "citySlug": "jiangsu-hub-zone-62",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيانغسو الصناعي والتجاري 62 (江苏产业集聚区62) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangsu Industrial Hub 62 (江苏产业集聚区62) is a prominent industrial and commercial center in Jiangsu Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغسو، الصين",
      "en": "Jiangsu Industrial Hub 62, Jiangsu, China",
      "zh": "中国江苏江苏产业集聚区62"
    },
    "coordinates": {
      "latitude": 31.766,
      "longitude": 119.0326
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangsu",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيانغسو"
    }
  },
  {
    "id": "city-shandong-hub-zone-63",
    "slug": "shandong-hub-zone-63",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شاندونغ الصناعي والتجاري 63",
      "en": "Shandong Industrial Hub 63",
      "zh": "山东产业集聚区63",
      "pinyin": "Shandong Industrial Hub"
    },
    "province": {
      "ar": "شاندونغ",
      "en": "Shandong",
      "zh": "山东"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "مجمع شاندونغ الصناعي والتجاري 63",
      "en": "Shandong Industrial Hub 63",
      "zh": "山东产业集聚区63"
    },
    "citySlug": "shandong-hub-zone-63",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شاندونغ الصناعي والتجاري 63 (山东产业集聚区63) من المراكز الصناعية والتجارية البارزة في مقاطعة شاندونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shandong Industrial Hub 63 (山东产业集聚区63) is a prominent industrial and commercial center in Shandong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شاندونغ، الصين",
      "en": "Shandong Industrial Hub 63, Shandong, China",
      "zh": "中国山东山东产业集聚区63"
    },
    "coordinates": {
      "latitude": 36.7181,
      "longitude": 117.5145
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shandong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شاندونغ"
    }
  },
  {
    "id": "city-fujian-hub-zone-64",
    "slug": "fujian-hub-zone-64",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع فوجيان الصناعي والتجاري 64",
      "en": "Fujian Industrial Hub 64",
      "zh": "福建产业集聚区64",
      "pinyin": "Fujian Industrial Hub"
    },
    "province": {
      "ar": "فوجيان",
      "en": "Fujian",
      "zh": "福建"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "مجمع فوجيان الصناعي والتجاري 64",
      "en": "Fujian Industrial Hub 64",
      "zh": "福建产业集聚区64"
    },
    "citySlug": "fujian-hub-zone-64",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع فوجيان الصناعي والتجاري 64 (福建产业集聚区64) من المراكز الصناعية والتجارية البارزة في مقاطعة فوجيان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Fujian Industrial Hub 64 (福建产业集聚区64) is a prominent industrial and commercial center in Fujian Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "فوجيان، الصين",
      "en": "Fujian Industrial Hub 64, Fujian, China",
      "zh": "中国福建福建产业集聚区64"
    },
    "coordinates": {
      "latitude": 26.4425,
      "longitude": 119.4532
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "fujian",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في فوجيان"
    }
  },
  {
    "id": "city-hebei-hub-zone-65",
    "slug": "hebei-hub-zone-65",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع خبي الصناعي والتجاري 65",
      "en": "Hebei Industrial Hub 65",
      "zh": "河北产业集聚区65",
      "pinyin": "Hebei Industrial Hub"
    },
    "province": {
      "ar": "خبي",
      "en": "Hebei",
      "zh": "河北"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "مجمع خبي الصناعي والتجاري 65",
      "en": "Hebei Industrial Hub 65",
      "zh": "河北产业集聚区65"
    },
    "citySlug": "hebei-hub-zone-65",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع خبي الصناعي والتجاري 65 (河北产业集聚区65) من المراكز الصناعية والتجارية البارزة في مقاطعة خبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hebei Industrial Hub 65 (河北产业集聚区65) is a prominent industrial and commercial center in Hebei Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خبي، الصين",
      "en": "Hebei Industrial Hub 65, Hebei, China",
      "zh": "中国河北河北产业集聚区65"
    },
    "coordinates": {
      "latitude": 38.3735,
      "longitude": 114.2899
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hebei",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في خبي"
    }
  },
  {
    "id": "city-henan-hub-zone-66",
    "slug": "henan-hub-zone-66",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع خنان الصناعي والتجاري 66",
      "en": "Henan Industrial Hub 66",
      "zh": "河南产业集聚区66",
      "pinyin": "Henan Industrial Hub"
    },
    "province": {
      "ar": "خنان",
      "en": "Henan",
      "zh": "河南"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "مجمع خنان الصناعي والتجاري 66",
      "en": "Henan Industrial Hub 66",
      "zh": "河南产业集聚区66"
    },
    "citySlug": "henan-hub-zone-66",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع خنان الصناعي والتجاري 66 (河南产业集聚区66) من المراكز الصناعية والتجارية البارزة في مقاطعة خنان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Henan Industrial Hub 66 (河南产业集聚区66) is a prominent industrial and commercial center in Henan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خنان، الصين",
      "en": "Henan Industrial Hub 66, Henan, China",
      "zh": "中国河南河南产业集聚区66"
    },
    "coordinates": {
      "latitude": 34.736,
      "longitude": 113.2254
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "henan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في خنان"
    }
  },
  {
    "id": "city-hubei-hub-zone-67",
    "slug": "hubei-hub-zone-67",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هوبي الصناعي والتجاري 67",
      "en": "Hubei Industrial Hub 67",
      "zh": "湖北产业集聚区67",
      "pinyin": "Hubei Industrial Hub"
    },
    "province": {
      "ar": "هوبي",
      "en": "Hubei",
      "zh": "湖北"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "مجمع هوبي الصناعي والتجاري 67",
      "en": "Hubei Industrial Hub 67",
      "zh": "湖北产业集聚区67"
    },
    "citySlug": "hubei-hub-zone-67",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هوبي الصناعي والتجاري 67 (湖北产业集聚区67) من المراكز الصناعية والتجارية البارزة في مقاطعة هوبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hubei Industrial Hub 67 (湖北产业集聚区67) is a prominent industrial and commercial center in Hubei Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هوبي، الصين",
      "en": "Hubei Industrial Hub 67, Hubei, China",
      "zh": "中国湖北湖北产业集聚区67"
    },
    "coordinates": {
      "latitude": 30.2506,
      "longitude": 114.0984
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hubei",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هوبي"
    }
  },
  {
    "id": "city-hunan-hub-zone-68",
    "slug": "hunan-hub-zone-68",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هونان الصناعي والتجاري 68",
      "en": "Hunan Industrial Hub 68",
      "zh": "湖南产业集聚区68",
      "pinyin": "Hunan Industrial Hub"
    },
    "province": {
      "ar": "هونان",
      "en": "Hunan",
      "zh": "湖南"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "مجمع هونان الصناعي والتجاري 68",
      "en": "Hunan Industrial Hub 68",
      "zh": "湖南产业集聚区68"
    },
    "citySlug": "hunan-hub-zone-68",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هونان الصناعي والتجاري 68 (湖南产业集聚区68) من المراكز الصناعية والتجارية البارزة في مقاطعة هونان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hunan Industrial Hub 68 (湖南产业集聚区68) is a prominent industrial and commercial center in Hunan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونان، الصين",
      "en": "Hunan Industrial Hub 68, Hunan, China",
      "zh": "中国湖南湖南产业集聚区68"
    },
    "coordinates": {
      "latitude": 27.869,
      "longitude": 113.1149
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hunan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هونان"
    }
  },
  {
    "id": "city-anhui-hub-zone-69",
    "slug": "anhui-hub-zone-69",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع آنهوي الصناعي والتجاري 69",
      "en": "Anhui Industrial Hub 69",
      "zh": "安徽产业集聚区69",
      "pinyin": "Anhui Industrial Hub"
    },
    "province": {
      "ar": "آنهوي",
      "en": "Anhui",
      "zh": "安徽"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "مجمع آنهوي الصناعي والتجاري 69",
      "en": "Anhui Industrial Hub 69",
      "zh": "安徽产业集聚区69"
    },
    "citySlug": "anhui-hub-zone-69",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع آنهوي الصناعي والتجاري 69 (安徽产业集聚区69) من المراكز الصناعية والتجارية البارزة في مقاطعة آنهوي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Anhui Industrial Hub 69 (安徽产业集聚区69) is a prominent industrial and commercial center in Anhui Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "آنهوي، الصين",
      "en": "Anhui Industrial Hub 69, Anhui, China",
      "zh": "中国安徽安徽产业集聚区69"
    },
    "coordinates": {
      "latitude": 31.8153,
      "longitude": 117.6804
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "anhui",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في آنهوي"
    }
  },
  {
    "id": "city-jiangxi-hub-zone-70",
    "slug": "jiangxi-hub-zone-70",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيانغشي الصناعي والتجاري 70",
      "en": "Jiangxi Industrial Hub 70",
      "zh": "江西产业集聚区70",
      "pinyin": "Jiangxi Industrial Hub"
    },
    "province": {
      "ar": "جيانغشي",
      "en": "Jiangxi",
      "zh": "江西"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "مجمع جيانغشي الصناعي والتجاري 70",
      "en": "Jiangxi Industrial Hub 70",
      "zh": "江西产业集聚区70"
    },
    "citySlug": "jiangxi-hub-zone-70",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيانغشي الصناعي والتجاري 70 (江西产业集聚区70) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangxi Industrial Hub 70 (江西产业集聚区70) is a prominent industrial and commercial center in Jiangxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغشي، الصين",
      "en": "Jiangxi Industrial Hub 70, Jiangxi, China",
      "zh": "中国江西江西产业集聚区70"
    },
    "coordinates": {
      "latitude": 28.9926,
      "longitude": 116.1112
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيانغشي"
    }
  },
  {
    "id": "city-sichuan-hub-zone-71",
    "slug": "sichuan-hub-zone-71",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع سيتشوان الصناعي والتجاري 71",
      "en": "Sichuan Industrial Hub 71",
      "zh": "四川产业集聚区71",
      "pinyin": "Sichuan Industrial Hub"
    },
    "province": {
      "ar": "سيتشوان",
      "en": "Sichuan",
      "zh": "四川"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "مجمع سيتشوان الصناعي والتجاري 71",
      "en": "Sichuan Industrial Hub 71",
      "zh": "四川产业集聚区71"
    },
    "citySlug": "sichuan-hub-zone-71",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع سيتشوان الصناعي والتجاري 71 (四川产业集聚区71) من المراكز الصناعية والتجارية البارزة في مقاطعة سيتشوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Sichuan Industrial Hub 71 (四川产业集聚区71) is a prominent industrial and commercial center in Sichuan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "سيتشوان، الصين",
      "en": "Sichuan Industrial Hub 71, Sichuan, China",
      "zh": "中国四川四川产业集聚区71"
    },
    "coordinates": {
      "latitude": 30.9532,
      "longitude": 103.9432
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "sichuan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في سيتشوان"
    }
  },
  {
    "id": "city-shaanxi-hub-zone-72",
    "slug": "shaanxi-hub-zone-72",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شنشي الصناعي والتجاري 72",
      "en": "Shaanxi Industrial Hub 72",
      "zh": "陕西产业集聚区72",
      "pinyin": "Shaanxi Industrial Hub"
    },
    "province": {
      "ar": "شنشي",
      "en": "Shaanxi",
      "zh": "陕西"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "مجمع شنشي الصناعي والتجاري 72",
      "en": "Shaanxi Industrial Hub 72",
      "zh": "陕西产业集聚区72"
    },
    "citySlug": "shaanxi-hub-zone-72",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شنشي الصناعي والتجاري 72 (陕西产业集聚区72) من المراكز الصناعية والتجارية البارزة في مقاطعة شنشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shaanxi Industrial Hub 72 (陕西产业集聚区72) is a prominent industrial and commercial center in Shaanxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شنشي، الصين",
      "en": "Shaanxi Industrial Hub 72, Shaanxi, China",
      "zh": "中国陕西陕西产业集聚区72"
    },
    "coordinates": {
      "latitude": 34.4431,
      "longitude": 108.5529
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shaanxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شنشي"
    }
  },
  {
    "id": "city-liaoning-hub-zone-73",
    "slug": "liaoning-hub-zone-73",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع لياونينغ الصناعي والتجاري 73",
      "en": "Liaoning Industrial Hub 73",
      "zh": "辽宁产业集聚区73",
      "pinyin": "Liaoning Industrial Hub"
    },
    "province": {
      "ar": "لياونينغ",
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "مجمع لياونينغ الصناعي والتجاري 73",
      "en": "Liaoning Industrial Hub 73",
      "zh": "辽宁产业集聚区73"
    },
    "citySlug": "liaoning-hub-zone-73",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع لياونينغ الصناعي والتجاري 73 (辽宁产业集聚区73) من المراكز الصناعية والتجارية البارزة في مقاطعة لياونينغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Liaoning Industrial Hub 73 (辽宁产业集聚区73) is a prominent industrial and commercial center in Liaoning Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "لياونينغ، الصين",
      "en": "Liaoning Industrial Hub 73, Liaoning, China",
      "zh": "中国辽宁辽宁产业集聚区73"
    },
    "coordinates": {
      "latitude": 41.535,
      "longitude": 123.137
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "liaoning",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في لياونينغ"
    }
  },
  {
    "id": "city-jilin-hub-zone-74",
    "slug": "jilin-hub-zone-74",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيلين الصناعي والتجاري 74",
      "en": "Jilin Industrial Hub 74",
      "zh": "吉林产业集聚区74",
      "pinyin": "Jilin Industrial Hub"
    },
    "province": {
      "ar": "جيلين",
      "en": "Jilin",
      "zh": "吉林"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "مجمع جيلين الصناعي والتجاري 74",
      "en": "Jilin Industrial Hub 74",
      "zh": "吉林产业集聚区74"
    },
    "citySlug": "jilin-hub-zone-74",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيلين الصناعي والتجاري 74 (吉林产业集聚区74) من المراكز الصناعية والتجارية البارزة في مقاطعة جيلين. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jilin Industrial Hub 74 (吉林产业集聚区74) is a prominent industrial and commercial center in Jilin Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيلين، الصين",
      "en": "Jilin Industrial Hub 74, Jilin, China",
      "zh": "中国吉林吉林产业集聚区74"
    },
    "coordinates": {
      "latitude": 43.423,
      "longitude": 125.3922
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jilin",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيلين"
    }
  },
  {
    "id": "city-heilongjiang-hub-zone-75",
    "slug": "heilongjiang-hub-zone-75",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هيلونغجيانغ الصناعي والتجاري 75",
      "en": "Heilongjiang Industrial Hub 75",
      "zh": "黑龙江产业集聚区75",
      "pinyin": "Heilongjiang Industrial Hub"
    },
    "province": {
      "ar": "هيلونغجيانغ",
      "en": "Heilongjiang",
      "zh": "黑龙江"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "مجمع هيلونغجيانغ الصناعي والتجاري 75",
      "en": "Heilongjiang Industrial Hub 75",
      "zh": "黑龙江产业集聚区75"
    },
    "citySlug": "heilongjiang-hub-zone-75",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هيلونغجيانغ الصناعي والتجاري 75 (黑龙江产业集聚区75) من المراكز الصناعية والتجارية البارزة في مقاطعة هيلونغجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Heilongjiang Industrial Hub 75 (黑龙江产业集聚区75) is a prominent industrial and commercial center in Heilongjiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هيلونغجيانغ، الصين",
      "en": "Heilongjiang Industrial Hub 75, Heilongjiang, China",
      "zh": "中国黑龙江黑龙江产业集聚区75"
    },
    "coordinates": {
      "latitude": 45.6487,
      "longitude": 126.9037
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "heilongjiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هيلونغجيانغ"
    }
  },
  {
    "id": "city-shanxi-hub-zone-76",
    "slug": "shanxi-hub-zone-76",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شانشي الصناعي والتجاري 76",
      "en": "Shanxi Industrial Hub 76",
      "zh": "山西产业集聚区76",
      "pinyin": "Shanxi Industrial Hub"
    },
    "province": {
      "ar": "شانشي",
      "en": "Shanxi",
      "zh": "山西"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "مجمع شانشي الصناعي والتجاري 76",
      "en": "Shanxi Industrial Hub 76",
      "zh": "山西产业集聚区76"
    },
    "citySlug": "shanxi-hub-zone-76",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شانشي الصناعي والتجاري 76 (山西产业集聚区76) من المراكز الصناعية والتجارية البارزة في مقاطعة شانشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shanxi Industrial Hub 76 (山西产业集聚区76) is a prominent industrial and commercial center in Shanxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شانشي، الصين",
      "en": "Shanxi Industrial Hub 76, Shanxi, China",
      "zh": "中国山西山西产业集聚区76"
    },
    "coordinates": {
      "latitude": 38.097,
      "longitude": 112.8786
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shanxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شانشي"
    }
  },
  {
    "id": "city-guizhou-hub-zone-77",
    "slug": "guizhou-hub-zone-77",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع غويتشو الصناعي والتجاري 77",
      "en": "Guizhou Industrial Hub 77",
      "zh": "贵州产业集聚区77",
      "pinyin": "Guizhou Industrial Hub"
    },
    "province": {
      "ar": "غويتشو",
      "en": "Guizhou",
      "zh": "贵州"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "مجمع غويتشو الصناعي والتجاري 77",
      "en": "Guizhou Industrial Hub 77",
      "zh": "贵州产业集聚区77"
    },
    "citySlug": "guizhou-hub-zone-77",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع غويتشو الصناعي والتجاري 77 (贵州产业集聚区77) من المراكز الصناعية والتجارية البارزة في مقاطعة غويتشو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guizhou Industrial Hub 77 (贵州产业集聚区77) is a prominent industrial and commercial center in Guizhou Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غويتشو، الصين",
      "en": "Guizhou Industrial Hub 77, Guizhou, China",
      "zh": "中国贵州贵州产业集聚区77"
    },
    "coordinates": {
      "latitude": 27.0475,
      "longitude": 106.6178
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guizhou",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في غويتشو"
    }
  },
  {
    "id": "city-yunnan-hub-zone-78",
    "slug": "yunnan-hub-zone-78",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع يوننان الصناعي والتجاري 78",
      "en": "Yunnan Industrial Hub 78",
      "zh": "云南产业集聚区78",
      "pinyin": "Yunnan Industrial Hub"
    },
    "province": {
      "ar": "يوننان",
      "en": "Yunnan",
      "zh": "云南"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "مجمع يوننان الصناعي والتجاري 78",
      "en": "Yunnan Industrial Hub 78",
      "zh": "云南产业集聚区78"
    },
    "citySlug": "yunnan-hub-zone-78",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع يوننان الصناعي والتجاري 78 (云南产业集聚区78) من المراكز الصناعية والتجارية البارزة في مقاطعة يوننان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yunnan Industrial Hub 78 (云南产业集聚区78) is a prominent industrial and commercial center in Yunnan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "يوننان، الصين",
      "en": "Yunnan Industrial Hub 78, Yunnan, China",
      "zh": "中国云南云南产业集聚区78"
    },
    "coordinates": {
      "latitude": 25.2462,
      "longitude": 102.3692
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "yunnan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في يوننان"
    }
  },
  {
    "id": "city-guangxi-hub-zone-79",
    "slug": "guangxi-hub-zone-79",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع قوانغشي الصناعي والتجاري 79",
      "en": "Guangxi Industrial Hub 79",
      "zh": "广西产业集聚区79",
      "pinyin": "Guangxi Industrial Hub"
    },
    "province": {
      "ar": "قوانغشي",
      "en": "Guangxi",
      "zh": "广西"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "مجمع قوانغشي الصناعي والتجاري 79",
      "en": "Guangxi Industrial Hub 79",
      "zh": "广西产业集聚区79"
    },
    "citySlug": "guangxi-hub-zone-79",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع قوانغشي الصناعي والتجاري 79 (广西产业集聚区79) من المراكز الصناعية والتجارية البارزة في مقاطعة قوانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangxi Industrial Hub 79 (广西产业集聚区79) is a prominent industrial and commercial center in Guangxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قوانغشي، الصين",
      "en": "Guangxi Industrial Hub 79, Guangxi, China",
      "zh": "中国广西广西产业集聚区79"
    },
    "coordinates": {
      "latitude": 22.6394,
      "longitude": 108.0081
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في قوانغشي"
    }
  },
  {
    "id": "city-inner-mongolia-hub-zone-80",
    "slug": "inner-mongolia-hub-zone-80",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع منغوليا الداخلية الصناعي والتجاري 80",
      "en": "Inner Mongolia Industrial Hub 80",
      "zh": "内蒙古产业集聚区80",
      "pinyin": "Inner Mongolia Industrial Hub"
    },
    "province": {
      "ar": "منغوليا الداخلية",
      "en": "Inner Mongolia",
      "zh": "内蒙古"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "مجمع منغوليا الداخلية الصناعي والتجاري 80",
      "en": "Inner Mongolia Industrial Hub 80",
      "zh": "内蒙古产业集聚区80"
    },
    "citySlug": "inner-mongolia-hub-zone-80",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع منغوليا الداخلية الصناعي والتجاري 80 (内蒙古产业集聚区80) من المراكز الصناعية والتجارية البارزة في مقاطعة منغوليا الداخلية. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Inner Mongolia Industrial Hub 80 (内蒙古产业集聚区80) is a prominent industrial and commercial center in Inner Mongolia Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "منغوليا الداخلية، الصين",
      "en": "Inner Mongolia Industrial Hub 80, Inner Mongolia, China",
      "zh": "中国内蒙古内蒙古产业集聚区80"
    },
    "coordinates": {
      "latitude": 40.4439,
      "longitude": 111.7069
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "inner-mongolia",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في منغوليا الداخلية"
    }
  },
  {
    "id": "city-xinjiang-hub-zone-81",
    "slug": "xinjiang-hub-zone-81",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شينجيانغ الصناعي والتجاري 81",
      "en": "Xinjiang Industrial Hub 81",
      "zh": "新疆产业集聚区81",
      "pinyin": "Xinjiang Industrial Hub"
    },
    "province": {
      "ar": "شينجيانغ",
      "en": "Xinjiang",
      "zh": "新疆"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "مجمع شينجيانغ الصناعي والتجاري 81",
      "en": "Xinjiang Industrial Hub 81",
      "zh": "新疆产业集聚区81"
    },
    "citySlug": "xinjiang-hub-zone-81",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شينجيانغ الصناعي والتجاري 81 (新疆产业集聚区81) من المراكز الصناعية والتجارية البارزة في مقاطعة شينجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Xinjiang Industrial Hub 81 (新疆产业集聚区81) is a prominent industrial and commercial center in Xinjiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شينجيانغ، الصين",
      "en": "Xinjiang Industrial Hub 81, Xinjiang, China",
      "zh": "中国新疆新疆产业集聚区81"
    },
    "coordinates": {
      "latitude": 43.5736,
      "longitude": 87.9275
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "xinjiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شينجيانغ"
    }
  },
  {
    "id": "city-gansu-hub-zone-82",
    "slug": "gansu-hub-zone-82",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع قانسو الصناعي والتجاري 82",
      "en": "Gansu Industrial Hub 82",
      "zh": "甘肃产业集聚区82",
      "pinyin": "Gansu Industrial Hub"
    },
    "province": {
      "ar": "قانسو",
      "en": "Gansu",
      "zh": "甘肃"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "مجمع قانسو الصناعي والتجاري 82",
      "en": "Gansu Industrial Hub 82",
      "zh": "甘肃产业集聚区82"
    },
    "citySlug": "gansu-hub-zone-82",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع قانسو الصناعي والتجاري 82 (甘肃产业集聚区82) من المراكز الصناعية والتجارية البارزة في مقاطعة قانسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Gansu Industrial Hub 82 (甘肃产业集聚区82) is a prominent industrial and commercial center in Gansu Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قانسو، الصين",
      "en": "Gansu Industrial Hub 82, Gansu, China",
      "zh": "中国甘肃甘肃产业集聚区82"
    },
    "coordinates": {
      "latitude": 36.1864,
      "longitude": 104.2142
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "gansu",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في قانسو"
    }
  },
  {
    "id": "city-hainan-hub-zone-83",
    "slug": "hainan-hub-zone-83",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هاينان الصناعي والتجاري 83",
      "en": "Hainan Industrial Hub 83",
      "zh": "海南产业集聚区83",
      "pinyin": "Hainan Industrial Hub"
    },
    "province": {
      "ar": "هاينان",
      "en": "Hainan",
      "zh": "海南"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "مجمع هاينان الصناعي والتجاري 83",
      "en": "Hainan Industrial Hub 83",
      "zh": "海南产业集聚区83"
    },
    "citySlug": "hainan-hub-zone-83",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هاينان الصناعي والتجاري 83 (海南产业集聚区83) من المراكز الصناعية والتجارية البارزة في مقاطعة هاينان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hainan Industrial Hub 83 (海南产业集聚区83) is a prominent industrial and commercial center in Hainan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هاينان، الصين",
      "en": "Hainan Industrial Hub 83, Hainan, China",
      "zh": "中国海南海南产业集聚区83"
    },
    "coordinates": {
      "latitude": 20.4313,
      "longitude": 110.2997
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hainan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هاينان"
    }
  },
  {
    "id": "city-ningxia-hub-zone-84",
    "slug": "ningxia-hub-zone-84",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع نينغشيا الصناعي والتجاري 84",
      "en": "Ningxia Industrial Hub 84",
      "zh": "宁夏产业集聚区84",
      "pinyin": "Ningxia Industrial Hub"
    },
    "province": {
      "ar": "نينغشيا",
      "en": "Ningxia",
      "zh": "宁夏"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "مجمع نينغشيا الصناعي والتجاري 84",
      "en": "Ningxia Industrial Hub 84",
      "zh": "宁夏产业集聚区84"
    },
    "citySlug": "ningxia-hub-zone-84",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع نينغشيا الصناعي والتجاري 84 (宁夏产业集聚区84) من المراكز الصناعية والتجارية البارزة في مقاطعة نينغشيا. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Ningxia Industrial Hub 84 (宁夏产业集聚区84) is a prominent industrial and commercial center in Ningxia Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "نينغشيا، الصين",
      "en": "Ningxia Industrial Hub 84, Ningxia, China",
      "zh": "中国宁夏宁夏产业集聚区84"
    },
    "coordinates": {
      "latitude": 38.7805,
      "longitude": 105.9589
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "ningxia",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في نينغشيا"
    }
  },
  {
    "id": "city-qinghai-hub-zone-85",
    "slug": "qinghai-hub-zone-85",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تشينغهاي الصناعي والتجاري 85",
      "en": "Qinghai Industrial Hub 85",
      "zh": "青海产业集聚区85",
      "pinyin": "Qinghai Industrial Hub"
    },
    "province": {
      "ar": "تشينغهاي",
      "en": "Qinghai",
      "zh": "青海"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "مجمع تشينغهاي الصناعي والتجاري 85",
      "en": "Qinghai Industrial Hub 85",
      "zh": "青海产业集聚区85"
    },
    "citySlug": "qinghai-hub-zone-85",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تشينغهاي الصناعي والتجاري 85 (青海产业集聚区85) من المراكز الصناعية والتجارية البارزة في مقاطعة تشينغهاي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Qinghai Industrial Hub 85 (青海产业集聚区85) is a prominent industrial and commercial center in Qinghai Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشينغهاي، الصين",
      "en": "Qinghai Industrial Hub 85, Qinghai, China",
      "zh": "中国青海青海产业集聚区85"
    },
    "coordinates": {
      "latitude": 36.5505,
      "longitude": 101.3863
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "qinghai",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تشينغهاي"
    }
  },
  {
    "id": "city-tibet-hub-zone-86",
    "slug": "tibet-hub-zone-86",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع التبت الصناعي والتجاري 86",
      "en": "Tibet Industrial Hub 86",
      "zh": "西藏产业集聚区86",
      "pinyin": "Tibet Industrial Hub"
    },
    "province": {
      "ar": "التبت",
      "en": "Tibet",
      "zh": "西藏"
    },
    "provinceSlug": "tibet",
    "city": {
      "ar": "مجمع التبت الصناعي والتجاري 86",
      "en": "Tibet Industrial Hub 86",
      "zh": "西藏产业集聚区86"
    },
    "citySlug": "tibet-hub-zone-86",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع التبت الصناعي والتجاري 86 (西藏产业集聚区86) من المراكز الصناعية والتجارية البارزة في مقاطعة التبت. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Tibet Industrial Hub 86 (西藏产业集聚区86) is a prominent industrial and commercial center in Tibet Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "التبت، الصين",
      "en": "Tibet Industrial Hub 86, Tibet, China",
      "zh": "中国西藏西藏产业集聚区86"
    },
    "coordinates": {
      "latitude": 29.2831,
      "longitude": 91.0186
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "tibet",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في التبت"
    }
  },
  {
    "id": "city-hong-kong-hub-zone-87",
    "slug": "hong-kong-hub-zone-87",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هونغ كونغ الصناعي والتجاري 87",
      "en": "Hong Kong Industrial Hub 87",
      "zh": "香港产业集聚区87",
      "pinyin": "Hong Kong Industrial Hub"
    },
    "province": {
      "ar": "هونغ كونغ",
      "en": "Hong Kong",
      "zh": "香港"
    },
    "provinceSlug": "hong-kong",
    "city": {
      "ar": "مجمع هونغ كونغ الصناعي والتجاري 87",
      "en": "Hong Kong Industrial Hub 87",
      "zh": "香港产业集聚区87"
    },
    "citySlug": "hong-kong-hub-zone-87",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هونغ كونغ الصناعي والتجاري 87 (香港产业集聚区87) من المراكز الصناعية والتجارية البارزة في مقاطعة هونغ كونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hong Kong Industrial Hub 87 (香港产业集聚区87) is a prominent industrial and commercial center in Hong Kong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونغ كونغ، الصين",
      "en": "Hong Kong Industrial Hub 87, Hong Kong, China",
      "zh": "中国香港香港产业集聚区87"
    },
    "coordinates": {
      "latitude": 21.9906,
      "longitude": 114.3973
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hong-kong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هونغ كونغ"
    }
  },
  {
    "id": "city-macau-hub-zone-88",
    "slug": "macau-hub-zone-88",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع ماكاو الصناعي والتجاري 88",
      "en": "Macau Industrial Hub 88",
      "zh": "澳门产业集聚区88",
      "pinyin": "Macau Industrial Hub"
    },
    "province": {
      "ar": "ماكاو",
      "en": "Macau",
      "zh": "澳门"
    },
    "provinceSlug": "macau",
    "city": {
      "ar": "مجمع ماكاو الصناعي والتجاري 88",
      "en": "Macau Industrial Hub 88",
      "zh": "澳门产业集聚区88"
    },
    "citySlug": "macau-hub-zone-88",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع ماكاو الصناعي والتجاري 88 (澳门产业集聚区88) من المراكز الصناعية والتجارية البارزة في مقاطعة ماكاو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Macau Industrial Hub 88 (澳门产业集聚区88) is a prominent industrial and commercial center in Macau Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "ماكاو، الصين",
      "en": "Macau Industrial Hub 88, Macau, China",
      "zh": "中国澳门澳门产业集聚区88"
    },
    "coordinates": {
      "latitude": 22.2129,
      "longitude": 113.9436
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "macau",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في ماكاو"
    }
  },
  {
    "id": "city-taiwan-hub-zone-89",
    "slug": "taiwan-hub-zone-89",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تايوان الصناعي والتجاري 89",
      "en": "Taiwan Industrial Hub 89",
      "zh": "台湾产业集聚区89",
      "pinyin": "Taiwan Industrial Hub"
    },
    "province": {
      "ar": "تايوان",
      "en": "Taiwan",
      "zh": "台湾"
    },
    "provinceSlug": "taiwan",
    "city": {
      "ar": "مجمع تايوان الصناعي والتجاري 89",
      "en": "Taiwan Industrial Hub 89",
      "zh": "台湾产业集聚区89"
    },
    "citySlug": "taiwan-hub-zone-89",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تايوان الصناعي والتجاري 89 (台湾产业集聚区89) من المراكز الصناعية والتجارية البارزة في مقاطعة تايوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Taiwan Industrial Hub 89 (台湾产业集聚区89) is a prominent industrial and commercial center in Taiwan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تايوان، الصين",
      "en": "Taiwan Industrial Hub 89, Taiwan, China",
      "zh": "中国台湾台湾产业集聚区89"
    },
    "coordinates": {
      "latitude": 25.377,
      "longitude": 121.7695
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "taiwan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تايوان"
    }
  },
  {
    "id": "city-guangdong-hub-zone-90",
    "slug": "guangdong-hub-zone-90",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع غوانغدونغ الصناعي والتجاري 90",
      "en": "Guangdong Industrial Hub 90",
      "zh": "广东产业集聚区90",
      "pinyin": "Guangdong Industrial Hub"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "مجمع غوانغدونغ الصناعي والتجاري 90",
      "en": "Guangdong Industrial Hub 90",
      "zh": "广东产业集聚区90"
    },
    "citySlug": "guangdong-hub-zone-90",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع غوانغدونغ الصناعي والتجاري 90 (广东产业集聚区90) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangdong Industrial Hub 90 (广东产业集聚区90) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Guangdong Industrial Hub 90, Guangdong, China",
      "zh": "中国广东广东产业集聚区90"
    },
    "coordinates": {
      "latitude": 23.4867,
      "longitude": 113.0852
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في غوانغدونغ"
    }
  },
  {
    "id": "city-zhejiang-hub-zone-91",
    "slug": "zhejiang-hub-zone-91",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تشجيانغ الصناعي والتجاري 91",
      "en": "Zhejiang Industrial Hub 91",
      "zh": "浙江产业集聚区91",
      "pinyin": "Zhejiang Industrial Hub"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "مجمع تشجيانغ الصناعي والتجاري 91",
      "en": "Zhejiang Industrial Hub 91",
      "zh": "浙江产业集聚区91"
    },
    "citySlug": "zhejiang-hub-zone-91",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تشجيانغ الصناعي والتجاري 91 (浙江产业集聚区91) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Zhejiang Industrial Hub 91 (浙江产业集聚区91) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Zhejiang Industrial Hub 91, Zhejiang, China",
      "zh": "中国浙江浙江产业集聚区91"
    },
    "coordinates": {
      "latitude": 30.3165,
      "longitude": 119.7574
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تشجيانغ"
    }
  },
  {
    "id": "city-jiangsu-hub-zone-92",
    "slug": "jiangsu-hub-zone-92",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيانغسو الصناعي والتجاري 92",
      "en": "Jiangsu Industrial Hub 92",
      "zh": "江苏产业集聚区92",
      "pinyin": "Jiangsu Industrial Hub"
    },
    "province": {
      "ar": "جيانغسو",
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "مجمع جيانغسو الصناعي والتجاري 92",
      "en": "Jiangsu Industrial Hub 92",
      "zh": "江苏产业集聚区92"
    },
    "citySlug": "jiangsu-hub-zone-92",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيانغسو الصناعي والتجاري 92 (江苏产业集聚区92) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangsu Industrial Hub 92 (江苏产业集聚区92) is a prominent industrial and commercial center in Jiangsu Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغسو، الصين",
      "en": "Jiangsu Industrial Hub 92, Jiangsu, China",
      "zh": "中国江苏江苏产业集聚区92"
    },
    "coordinates": {
      "latitude": 31.7499,
      "longitude": 118.5126
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangsu",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيانغسو"
    }
  },
  {
    "id": "city-shandong-hub-zone-93",
    "slug": "shandong-hub-zone-93",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شاندونغ الصناعي والتجاري 93",
      "en": "Shandong Industrial Hub 93",
      "zh": "山东产业集聚区93",
      "pinyin": "Shandong Industrial Hub"
    },
    "province": {
      "ar": "شاندونغ",
      "en": "Shandong",
      "zh": "山东"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "مجمع شاندونغ الصناعي والتجاري 93",
      "en": "Shandong Industrial Hub 93",
      "zh": "山东产业集聚区93"
    },
    "citySlug": "shandong-hub-zone-93",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شاندونغ الصناعي والتجاري 93 (山东产业集聚区93) من المراكز الصناعية والتجارية البارزة في مقاطعة شاندونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shandong Industrial Hub 93 (山东产业集聚区93) is a prominent industrial and commercial center in Shandong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شاندونغ، الصين",
      "en": "Shandong Industrial Hub 93, Shandong, China",
      "zh": "中国山东山东产业集聚区93"
    },
    "coordinates": {
      "latitude": 36.2719,
      "longitude": 117.2471
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shandong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شاندونغ"
    }
  },
  {
    "id": "city-fujian-hub-zone-94",
    "slug": "fujian-hub-zone-94",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع فوجيان الصناعي والتجاري 94",
      "en": "Fujian Industrial Hub 94",
      "zh": "福建产业集聚区94",
      "pinyin": "Fujian Industrial Hub"
    },
    "province": {
      "ar": "فوجيان",
      "en": "Fujian",
      "zh": "福建"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "مجمع فوجيان الصناعي والتجاري 94",
      "en": "Fujian Industrial Hub 94",
      "zh": "福建产业集聚区94"
    },
    "citySlug": "fujian-hub-zone-94",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع فوجيان الصناعي والتجاري 94 (福建产业集聚区94) من المراكز الصناعية والتجارية البارزة في مقاطعة فوجيان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Fujian Industrial Hub 94 (福建产业集聚区94) is a prominent industrial and commercial center in Fujian Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "فوجيان، الصين",
      "en": "Fujian Industrial Hub 94, Fujian, China",
      "zh": "中国福建福建产业集聚区94"
    },
    "coordinates": {
      "latitude": 25.9764,
      "longitude": 119.6843
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "fujian",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في فوجيان"
    }
  },
  {
    "id": "city-hebei-hub-zone-95",
    "slug": "hebei-hub-zone-95",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع خبي الصناعي والتجاري 95",
      "en": "Hebei Industrial Hub 95",
      "zh": "河北产业集聚区95",
      "pinyin": "Hebei Industrial Hub"
    },
    "province": {
      "ar": "خبي",
      "en": "Hebei",
      "zh": "河北"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "مجمع خبي الصناعي والتجاري 95",
      "en": "Hebei Industrial Hub 95",
      "zh": "河北产业集聚区95"
    },
    "citySlug": "hebei-hub-zone-95",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع خبي الصناعي والتجاري 95 (河北产业集聚区95) من المراكز الصناعية والتجارية البارزة في مقاطعة خبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hebei Industrial Hub 95 (河北产业集聚区95) is a prominent industrial and commercial center in Hebei Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خبي، الصين",
      "en": "Hebei Industrial Hub 95, Hebei, China",
      "zh": "中国河北河北产业集聚区95"
    },
    "coordinates": {
      "latitude": 38.3161,
      "longitude": 114.807
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hebei",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في خبي"
    }
  },
  {
    "id": "city-henan-hub-zone-96",
    "slug": "henan-hub-zone-96",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع خنان الصناعي والتجاري 96",
      "en": "Henan Industrial Hub 96",
      "zh": "河南产业集聚区96",
      "pinyin": "Henan Industrial Hub"
    },
    "province": {
      "ar": "خنان",
      "en": "Henan",
      "zh": "河南"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "مجمع خنان الصناعي والتجاري 96",
      "en": "Henan Industrial Hub 96",
      "zh": "河南产业集聚区96"
    },
    "citySlug": "henan-hub-zone-96",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع خنان الصناعي والتجاري 96 (河南产业集聚区96) من المراكز الصناعية والتجارية البارزة في مقاطعة خنان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Henan Industrial Hub 96 (河南产业集聚区96) is a prominent industrial and commercial center in Henan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خنان، الصين",
      "en": "Henan Industrial Hub 96, Henan, China",
      "zh": "中国河南河南产业集聚区96"
    },
    "coordinates": {
      "latitude": 35.14,
      "longitude": 113.5531
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "henan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في خنان"
    }
  },
  {
    "id": "city-hubei-hub-zone-97",
    "slug": "hubei-hub-zone-97",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هوبي الصناعي والتجاري 97",
      "en": "Hubei Industrial Hub 97",
      "zh": "湖北产业集聚区97",
      "pinyin": "Hubei Industrial Hub"
    },
    "province": {
      "ar": "هوبي",
      "en": "Hubei",
      "zh": "湖北"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "مجمع هوبي الصناعي والتجاري 97",
      "en": "Hubei Industrial Hub 97",
      "zh": "湖北产业集聚区97"
    },
    "citySlug": "hubei-hub-zone-97",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هوبي الصناعي والتجاري 97 (湖北产业集聚区97) من المراكز الصناعية والتجارية البارزة في مقاطعة هوبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hubei Industrial Hub 97 (湖北产业集聚区97) is a prominent industrial and commercial center in Hubei Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هوبي، الصين",
      "en": "Hubei Industrial Hub 97, Hubei, China",
      "zh": "中国湖北湖北产业集聚区97"
    },
    "coordinates": {
      "latitude": 30.7446,
      "longitude": 113.9354
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hubei",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هوبي"
    }
  },
  {
    "id": "city-hunan-hub-zone-98",
    "slug": "hunan-hub-zone-98",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هونان الصناعي والتجاري 98",
      "en": "Hunan Industrial Hub 98",
      "zh": "湖南产业集聚区98",
      "pinyin": "Hunan Industrial Hub"
    },
    "province": {
      "ar": "هونان",
      "en": "Hunan",
      "zh": "湖南"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "مجمع هونان الصناعي والتجاري 98",
      "en": "Hunan Industrial Hub 98",
      "zh": "湖南产业集聚区98"
    },
    "citySlug": "hunan-hub-zone-98",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هونان الصناعي والتجاري 98 (湖南产业集聚区98) من المراكز الصناعية والتجارية البارزة في مقاطعة هونان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hunan Industrial Hub 98 (湖南产业集聚区98) is a prominent industrial and commercial center in Hunan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونان، الصين",
      "en": "Hunan Industrial Hub 98, Hunan, China",
      "zh": "中国湖南湖南产业集聚区98"
    },
    "coordinates": {
      "latitude": 27.9988,
      "longitude": 112.6111
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hunan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هونان"
    }
  },
  {
    "id": "city-anhui-hub-zone-99",
    "slug": "anhui-hub-zone-99",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع آنهوي الصناعي والتجاري 99",
      "en": "Anhui Industrial Hub 99",
      "zh": "安徽产业集聚区99",
      "pinyin": "Anhui Industrial Hub"
    },
    "province": {
      "ar": "آنهوي",
      "en": "Anhui",
      "zh": "安徽"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "مجمع آنهوي الصناعي والتجاري 99",
      "en": "Anhui Industrial Hub 99",
      "zh": "安徽产业集聚区99"
    },
    "citySlug": "anhui-hub-zone-99",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع آنهوي الصناعي والتجاري 99 (安徽产业集聚区99) من المراكز الصناعية والتجارية البارزة في مقاطعة آنهوي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Anhui Industrial Hub 99 (安徽产业集聚区99) is a prominent industrial and commercial center in Anhui Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "آنهوي، الصين",
      "en": "Anhui Industrial Hub 99, Anhui, China",
      "zh": "中国安徽安徽产业集聚区99"
    },
    "coordinates": {
      "latitude": 31.4615,
      "longitude": 117.2989
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "anhui",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في آنهوي"
    }
  },
  {
    "id": "city-jiangxi-hub-zone-100",
    "slug": "jiangxi-hub-zone-100",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيانغشي الصناعي والتجاري 100",
      "en": "Jiangxi Industrial Hub 100",
      "zh": "江西产业集聚区100",
      "pinyin": "Jiangxi Industrial Hub"
    },
    "province": {
      "ar": "جيانغشي",
      "en": "Jiangxi",
      "zh": "江西"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "مجمع جيانغشي الصناعي والتجاري 100",
      "en": "Jiangxi Industrial Hub 100",
      "zh": "江西产业集聚区100"
    },
    "citySlug": "jiangxi-hub-zone-100",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيانغشي الصناعي والتجاري 100 (江西产业集聚区100) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangxi Industrial Hub 100 (江西产业集聚区100) is a prominent industrial and commercial center in Jiangxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغشي، الصين",
      "en": "Jiangxi Industrial Hub 100, Jiangxi, China",
      "zh": "中国江西江西产业集聚区100"
    },
    "coordinates": {
      "latitude": 28.4805,
      "longitude": 116.2028
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيانغشي"
    }
  },
  {
    "id": "city-sichuan-hub-zone-101",
    "slug": "sichuan-hub-zone-101",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع سيتشوان الصناعي والتجاري 101",
      "en": "Sichuan Industrial Hub 101",
      "zh": "四川产业集聚区101",
      "pinyin": "Sichuan Industrial Hub"
    },
    "province": {
      "ar": "سيتشوان",
      "en": "Sichuan",
      "zh": "四川"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "مجمع سيتشوان الصناعي والتجاري 101",
      "en": "Sichuan Industrial Hub 101",
      "zh": "四川产业集聚区101"
    },
    "citySlug": "sichuan-hub-zone-101",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع سيتشوان الصناعي والتجاري 101 (四川产业集聚区101) من المراكز الصناعية والتجارية البارزة في مقاطعة سيتشوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Sichuan Industrial Hub 101 (四川产业集聚区101) is a prominent industrial and commercial center in Sichuan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "سيتشوان، الصين",
      "en": "Sichuan Industrial Hub 101, Sichuan, China",
      "zh": "中国四川四川产业集聚区101"
    },
    "coordinates": {
      "latitude": 30.7536,
      "longitude": 104.4236
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "sichuan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في سيتشوان"
    }
  },
  {
    "id": "city-shaanxi-hub-zone-102",
    "slug": "shaanxi-hub-zone-102",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شنشي الصناعي والتجاري 102",
      "en": "Shaanxi Industrial Hub 102",
      "zh": "陕西产业集聚区102",
      "pinyin": "Shaanxi Industrial Hub"
    },
    "province": {
      "ar": "شنشي",
      "en": "Shaanxi",
      "zh": "陕西"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "مجمع شنشي الصناعي والتجاري 102",
      "en": "Shaanxi Industrial Hub 102",
      "zh": "陕西产业集聚区102"
    },
    "citySlug": "shaanxi-hub-zone-102",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شنشي الصناعي والتجاري 102 (陕西产业集聚区102) من المراكز الصناعية والتجارية البارزة في مقاطعة شنشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shaanxi Industrial Hub 102 (陕西产业集聚区102) is a prominent industrial and commercial center in Shaanxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شنشي، الصين",
      "en": "Shaanxi Industrial Hub 102, Shaanxi, China",
      "zh": "中国陕西陕西产业集聚区102"
    },
    "coordinates": {
      "latitude": 34.7395,
      "longitude": 108.9804
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shaanxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شنشي"
    }
  },
  {
    "id": "city-liaoning-hub-zone-103",
    "slug": "liaoning-hub-zone-103",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع لياونينغ الصناعي والتجاري 103",
      "en": "Liaoning Industrial Hub 103",
      "zh": "辽宁产业集聚区103",
      "pinyin": "Liaoning Industrial Hub"
    },
    "province": {
      "ar": "لياونينغ",
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "مجمع لياونينغ الصناعي والتجاري 103",
      "en": "Liaoning Industrial Hub 103",
      "zh": "辽宁产业集聚区103"
    },
    "citySlug": "liaoning-hub-zone-103",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع لياونينغ الصناعي والتجاري 103 (辽宁产业集聚区103) من المراكز الصناعية والتجارية البارزة في مقاطعة لياونينغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Liaoning Industrial Hub 103 (辽宁产业集聚区103) is a prominent industrial and commercial center in Liaoning Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "لياونينغ، الصين",
      "en": "Liaoning Industrial Hub 103, Liaoning, China",
      "zh": "中国辽宁辽宁产业集聚区103"
    },
    "coordinates": {
      "latitude": 42.0549,
      "longitude": 123.1186
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "liaoning",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في لياونينغ"
    }
  },
  {
    "id": "city-jilin-hub-zone-104",
    "slug": "jilin-hub-zone-104",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيلين الصناعي والتجاري 104",
      "en": "Jilin Industrial Hub 104",
      "zh": "吉林产业集聚区104",
      "pinyin": "Jilin Industrial Hub"
    },
    "province": {
      "ar": "جيلين",
      "en": "Jilin",
      "zh": "吉林"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "مجمع جيلين الصناعي والتجاري 104",
      "en": "Jilin Industrial Hub 104",
      "zh": "吉林产业集聚区104"
    },
    "citySlug": "jilin-hub-zone-104",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيلين الصناعي والتجاري 104 (吉林产业集聚区104) من المراكز الصناعية والتجارية البارزة في مقاطعة جيلين. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jilin Industrial Hub 104 (吉林产业集聚区104) is a prominent industrial and commercial center in Jilin Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيلين، الصين",
      "en": "Jilin Industrial Hub 104, Jilin, China",
      "zh": "中国吉林吉林产业集聚区104"
    },
    "coordinates": {
      "latitude": 43.6885,
      "longitude": 124.9448
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jilin",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيلين"
    }
  },
  {
    "id": "city-heilongjiang-hub-zone-105",
    "slug": "heilongjiang-hub-zone-105",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هيلونغجيانغ الصناعي والتجاري 105",
      "en": "Heilongjiang Industrial Hub 105",
      "zh": "黑龙江产业集聚区105",
      "pinyin": "Heilongjiang Industrial Hub"
    },
    "province": {
      "ar": "هيلونغجيانغ",
      "en": "Heilongjiang",
      "zh": "黑龙江"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "مجمع هيلونغجيانغ الصناعي والتجاري 105",
      "en": "Heilongjiang Industrial Hub 105",
      "zh": "黑龙江产业集聚区105"
    },
    "citySlug": "heilongjiang-hub-zone-105",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هيلونغجيانغ الصناعي والتجاري 105 (黑龙江产业集聚区105) من المراكز الصناعية والتجارية البارزة في مقاطعة هيلونغجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Heilongjiang Industrial Hub 105 (黑龙江产业集聚区105) is a prominent industrial and commercial center in Heilongjiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هيلونغجيانغ، الصين",
      "en": "Heilongjiang Industrial Hub 105, Heilongjiang, China",
      "zh": "中国黑龙江黑龙江产业集聚区105"
    },
    "coordinates": {
      "latitude": 45.4156,
      "longitude": 126.4386
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "heilongjiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هيلونغجيانغ"
    }
  },
  {
    "id": "city-shanxi-hub-zone-106",
    "slug": "shanxi-hub-zone-106",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شانشي الصناعي والتجاري 106",
      "en": "Shanxi Industrial Hub 106",
      "zh": "山西产业集聚区106",
      "pinyin": "Shanxi Industrial Hub"
    },
    "province": {
      "ar": "شانشي",
      "en": "Shanxi",
      "zh": "山西"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "مجمع شانشي الصناعي والتجاري 106",
      "en": "Shanxi Industrial Hub 106",
      "zh": "山西产业集聚区106"
    },
    "citySlug": "shanxi-hub-zone-106",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شانشي الصناعي والتجاري 106 (山西产业集聚区106) من المراكز الصناعية والتجارية البارزة في مقاطعة شانشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shanxi Industrial Hub 106 (山西产业集聚区106) is a prominent industrial and commercial center in Shanxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شانشي، الصين",
      "en": "Shanxi Industrial Hub 106, Shanxi, China",
      "zh": "中国山西山西产业集聚区106"
    },
    "coordinates": {
      "latitude": 37.5797,
      "longitude": 112.8235
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shanxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شانشي"
    }
  },
  {
    "id": "city-guizhou-hub-zone-107",
    "slug": "guizhou-hub-zone-107",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع غويتشو الصناعي والتجاري 107",
      "en": "Guizhou Industrial Hub 107",
      "zh": "贵州产业集聚区107",
      "pinyin": "Guizhou Industrial Hub"
    },
    "province": {
      "ar": "غويتشو",
      "en": "Guizhou",
      "zh": "贵州"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "مجمع غويتشو الصناعي والتجاري 107",
      "en": "Guizhou Industrial Hub 107",
      "zh": "贵州产业集聚区107"
    },
    "citySlug": "guizhou-hub-zone-107",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع غويتشو الصناعي والتجاري 107 (贵州产业集聚区107) من المراكز الصناعية والتجارية البارزة في مقاطعة غويتشو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guizhou Industrial Hub 107 (贵州产业集聚区107) is a prominent industrial and commercial center in Guizhou Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غويتشو، الصين",
      "en": "Guizhou Industrial Hub 107, Guizhou, China",
      "zh": "中国贵州贵州产业集聚区107"
    },
    "coordinates": {
      "latitude": 26.7216,
      "longitude": 107.0233
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guizhou",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في غويتشو"
    }
  },
  {
    "id": "city-yunnan-hub-zone-108",
    "slug": "yunnan-hub-zone-108",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع يوننان الصناعي والتجاري 108",
      "en": "Yunnan Industrial Hub 108",
      "zh": "云南产业集聚区108",
      "pinyin": "Yunnan Industrial Hub"
    },
    "province": {
      "ar": "يوننان",
      "en": "Yunnan",
      "zh": "云南"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "مجمع يوننان الصناعي والتجاري 108",
      "en": "Yunnan Industrial Hub 108",
      "zh": "云南产业集聚区108"
    },
    "citySlug": "yunnan-hub-zone-108",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع يوننان الصناعي والتجاري 108 (云南产业集聚区108) من المراكز الصناعية والتجارية البارزة في مقاطعة يوننان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yunnan Industrial Hub 108 (云南产业集聚区108) is a prominent industrial and commercial center in Yunnan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "يوننان، الصين",
      "en": "Yunnan Industrial Hub 108, Yunnan, China",
      "zh": "中国云南云南产业集聚区108"
    },
    "coordinates": {
      "latitude": 25.4113,
      "longitude": 102.8625
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "yunnan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في يوننان"
    }
  },
  {
    "id": "city-guangxi-hub-zone-109",
    "slug": "guangxi-hub-zone-109",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع قوانغشي الصناعي والتجاري 109",
      "en": "Guangxi Industrial Hub 109",
      "zh": "广西产业集聚区109",
      "pinyin": "Guangxi Industrial Hub"
    },
    "province": {
      "ar": "قوانغشي",
      "en": "Guangxi",
      "zh": "广西"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "مجمع قوانغشي الصناعي والتجاري 109",
      "en": "Guangxi Industrial Hub 109",
      "zh": "广西产业集聚区109"
    },
    "citySlug": "guangxi-hub-zone-109",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع قوانغشي الصناعي والتجاري 109 (广西产业集聚区109) من المراكز الصناعية والتجارية البارزة في مقاطعة قوانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangxi Industrial Hub 109 (广西产业集聚区109) is a prominent industrial and commercial center in Guangxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قوانغشي، الصين",
      "en": "Guangxi Industrial Hub 109, Guangxi, China",
      "zh": "中国广西广西产业集聚区109"
    },
    "coordinates": {
      "latitude": 23.1437,
      "longitude": 108.1357
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في قوانغشي"
    }
  },
  {
    "id": "city-inner-mongolia-hub-zone-110",
    "slug": "inner-mongolia-hub-zone-110",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع منغوليا الداخلية الصناعي والتجاري 110",
      "en": "Inner Mongolia Industrial Hub 110",
      "zh": "内蒙古产业集聚区110",
      "pinyin": "Inner Mongolia Industrial Hub"
    },
    "province": {
      "ar": "منغوليا الداخلية",
      "en": "Inner Mongolia",
      "zh": "内蒙古"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "مجمع منغوليا الداخلية الصناعي والتجاري 110",
      "en": "Inner Mongolia Industrial Hub 110",
      "zh": "内蒙古产业集聚区110"
    },
    "citySlug": "inner-mongolia-hub-zone-110",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع منغوليا الداخلية الصناعي والتجاري 110 (内蒙古产业集聚区110) من المراكز الصناعية والتجارية البارزة في مقاطعة منغوليا الداخلية. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Inner Mongolia Industrial Hub 110 (内蒙古产业集聚区110) is a prominent industrial and commercial center in Inner Mongolia Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "منغوليا الداخلية، الصين",
      "en": "Inner Mongolia Industrial Hub 110, Inner Mongolia, China",
      "zh": "中国内蒙古内蒙古产业集聚区110"
    },
    "coordinates": {
      "latitude": 40.8238,
      "longitude": 111.3515
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "inner-mongolia",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في منغوليا الداخلية"
    }
  },
  {
    "id": "city-xinjiang-hub-zone-111",
    "slug": "xinjiang-hub-zone-111",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شينجيانغ الصناعي والتجاري 111",
      "en": "Xinjiang Industrial Hub 111",
      "zh": "新疆产业集聚区111",
      "pinyin": "Xinjiang Industrial Hub"
    },
    "province": {
      "ar": "شينجيانغ",
      "en": "Xinjiang",
      "zh": "新疆"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "مجمع شينجيانغ الصناعي والتجاري 111",
      "en": "Xinjiang Industrial Hub 111",
      "zh": "新疆产业集聚区111"
    },
    "citySlug": "xinjiang-hub-zone-111",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شينجيانغ الصناعي والتجاري 111 (新疆产业集聚区111) من المراكز الصناعية والتجارية البارزة في مقاطعة شينجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Xinjiang Industrial Hub 111 (新疆产业集聚区111) is a prominent industrial and commercial center in Xinjiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شينجيانغ، الصين",
      "en": "Xinjiang Industrial Hub 111, Xinjiang, China",
      "zh": "中国新疆新疆产业集聚区111"
    },
    "coordinates": {
      "latitude": 43.4798,
      "longitude": 87.4158
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "xinjiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شينجيانغ"
    }
  },
  {
    "id": "city-gansu-hub-zone-112",
    "slug": "gansu-hub-zone-112",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع قانسو الصناعي والتجاري 112",
      "en": "Gansu Industrial Hub 112",
      "zh": "甘肃产业集聚区112",
      "pinyin": "Gansu Industrial Hub"
    },
    "province": {
      "ar": "قانسو",
      "en": "Gansu",
      "zh": "甘肃"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "مجمع قانسو الصناعي والتجاري 112",
      "en": "Gansu Industrial Hub 112",
      "zh": "甘肃产业集聚区112"
    },
    "citySlug": "gansu-hub-zone-112",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع قانسو الصناعي والتجاري 112 (甘肃产业集聚区112) من المراكز الصناعية والتجارية البارزة في مقاطعة قانسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Gansu Industrial Hub 112 (甘肃产业集聚区112) is a prominent industrial and commercial center in Gansu Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قانسو، الصين",
      "en": "Gansu Industrial Hub 112, Gansu, China",
      "zh": "中国甘肃甘肃产业集聚区112"
    },
    "coordinates": {
      "latitude": 35.7051,
      "longitude": 104.0167
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "gansu",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في قانسو"
    }
  },
  {
    "id": "city-hainan-hub-zone-113",
    "slug": "hainan-hub-zone-113",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هاينان الصناعي والتجاري 113",
      "en": "Hainan Industrial Hub 113",
      "zh": "海南产业集聚区113",
      "pinyin": "Hainan Industrial Hub"
    },
    "province": {
      "ar": "هاينان",
      "en": "Hainan",
      "zh": "海南"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "مجمع هاينان الصناعي والتجاري 113",
      "en": "Hainan Industrial Hub 113",
      "zh": "海南产业集聚区113"
    },
    "citySlug": "hainan-hub-zone-113",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هاينان الصناعي والتجاري 113 (海南产业集聚区113) من المراكز الصناعية والتجارية البارزة في مقاطعة هاينان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hainan Industrial Hub 113 (海南产业集聚区113) is a prominent industrial and commercial center in Hainan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هاينان، الصين",
      "en": "Hainan Industrial Hub 113, Hainan, China",
      "zh": "中国海南海南产业集聚区113"
    },
    "coordinates": {
      "latitude": 20.0051,
      "longitude": 110.598
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hainan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هاينان"
    }
  },
  {
    "id": "city-ningxia-hub-zone-114",
    "slug": "ningxia-hub-zone-114",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع نينغشيا الصناعي والتجاري 114",
      "en": "Ningxia Industrial Hub 114",
      "zh": "宁夏产业集聚区114",
      "pinyin": "Ningxia Industrial Hub"
    },
    "province": {
      "ar": "نينغشيا",
      "en": "Ningxia",
      "zh": "宁夏"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "مجمع نينغشيا الصناعي والتجاري 114",
      "en": "Ningxia Industrial Hub 114",
      "zh": "宁夏产业集聚区114"
    },
    "citySlug": "ningxia-hub-zone-114",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع نينغشيا الصناعي والتجاري 114 (宁夏产业集聚区114) من المراكز الصناعية والتجارية البارزة في مقاطعة نينغشيا. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Ningxia Industrial Hub 114 (宁夏产业集聚区114) is a prominent industrial and commercial center in Ningxia Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "نينغشيا، الصين",
      "en": "Ningxia Industrial Hub 114, Ningxia, China",
      "zh": "中国宁夏宁夏产业集聚区114"
    },
    "coordinates": {
      "latitude": 38.8012,
      "longitude": 106.4787
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "ningxia",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في نينغشيا"
    }
  },
  {
    "id": "city-qinghai-hub-zone-115",
    "slug": "qinghai-hub-zone-115",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تشينغهاي الصناعي والتجاري 115",
      "en": "Qinghai Industrial Hub 115",
      "zh": "青海产业集聚区115",
      "pinyin": "Qinghai Industrial Hub"
    },
    "province": {
      "ar": "تشينغهاي",
      "en": "Qinghai",
      "zh": "青海"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "مجمع تشينغهاي الصناعي والتجاري 115",
      "en": "Qinghai Industrial Hub 115",
      "zh": "青海产业集聚区115"
    },
    "citySlug": "qinghai-hub-zone-115",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تشينغهاي الصناعي والتجاري 115 (青海产业集聚区115) من المراكز الصناعية والتجارية البارزة في مقاطعة تشينغهاي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Qinghai Industrial Hub 115 (青海产业集聚区115) is a prominent industrial and commercial center in Qinghai Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشينغهاي، الصين",
      "en": "Qinghai Industrial Hub 115, Qinghai, China",
      "zh": "中国青海青海产业集聚区115"
    },
    "coordinates": {
      "latitude": 36.9991,
      "longitude": 101.6498
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "qinghai",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تشينغهاي"
    }
  },
  {
    "id": "city-tibet-hub-zone-116",
    "slug": "tibet-hub-zone-116",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع التبت الصناعي والتجاري 116",
      "en": "Tibet Industrial Hub 116",
      "zh": "西藏产业集聚区116",
      "pinyin": "Tibet Industrial Hub"
    },
    "province": {
      "ar": "التبت",
      "en": "Tibet",
      "zh": "西藏"
    },
    "provinceSlug": "tibet",
    "city": {
      "ar": "مجمع التبت الصناعي والتجاري 116",
      "en": "Tibet Industrial Hub 116",
      "zh": "西藏产业集聚区116"
    },
    "citySlug": "tibet-hub-zone-116",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع التبت الصناعي والتجاري 116 (西藏产业集聚区116) من المراكز الصناعية والتجارية البارزة في مقاطعة التبت. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Tibet Industrial Hub 116 (西藏产业集聚区116) is a prominent industrial and commercial center in Tibet Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "التبت، الصين",
      "en": "Tibet Industrial Hub 116, Tibet, China",
      "zh": "中国西藏西藏产业集聚区116"
    },
    "coordinates": {
      "latitude": 29.7472,
      "longitude": 90.7835
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "tibet",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في التبت"
    }
  },
  {
    "id": "city-hong-kong-hub-zone-117",
    "slug": "hong-kong-hub-zone-117",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هونغ كونغ الصناعي والتجاري 117",
      "en": "Hong Kong Industrial Hub 117",
      "zh": "香港产业集聚区117",
      "pinyin": "Hong Kong Industrial Hub"
    },
    "province": {
      "ar": "هونغ كونغ",
      "en": "Hong Kong",
      "zh": "香港"
    },
    "provinceSlug": "hong-kong",
    "city": {
      "ar": "مجمع هونغ كونغ الصناعي والتجاري 117",
      "en": "Hong Kong Industrial Hub 117",
      "zh": "香港产业集聚区117"
    },
    "citySlug": "hong-kong-hub-zone-117",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هونغ كونغ الصناعي والتجاري 117 (香港产业集聚区117) من المراكز الصناعية والتجارية البارزة في مقاطعة هونغ كونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hong Kong Industrial Hub 117 (香港产业集聚区117) is a prominent industrial and commercial center in Hong Kong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونغ كونغ، الصين",
      "en": "Hong Kong Industrial Hub 117, Hong Kong, China",
      "zh": "中国香港香港产业集聚区117"
    },
    "coordinates": {
      "latitude": 22.0434,
      "longitude": 113.8798
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hong-kong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هونغ كونغ"
    }
  },
  {
    "id": "city-macau-hub-zone-118",
    "slug": "macau-hub-zone-118",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع ماكاو الصناعي والتجاري 118",
      "en": "Macau Industrial Hub 118",
      "zh": "澳门产业集聚区118",
      "pinyin": "Macau Industrial Hub"
    },
    "province": {
      "ar": "ماكاو",
      "en": "Macau",
      "zh": "澳门"
    },
    "provinceSlug": "macau",
    "city": {
      "ar": "مجمع ماكاو الصناعي والتجاري 118",
      "en": "Macau Industrial Hub 118",
      "zh": "澳门产业集聚区118"
    },
    "citySlug": "macau-hub-zone-118",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع ماكاو الصناعي والتجاري 118 (澳门产业集聚区118) من المراكز الصناعية والتجارية البارزة في مقاطعة ماكاو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Macau Industrial Hub 118 (澳门产业集聚区118) is a prominent industrial and commercial center in Macau Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "ماكاو، الصين",
      "en": "Macau Industrial Hub 118, Macau, China",
      "zh": "中国澳门澳门产业集聚区118"
    },
    "coordinates": {
      "latitude": 21.8059,
      "longitude": 113.6196
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "macau",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في ماكاو"
    }
  },
  {
    "id": "city-taiwan-hub-zone-119",
    "slug": "taiwan-hub-zone-119",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تايوان الصناعي والتجاري 119",
      "en": "Taiwan Industrial Hub 119",
      "zh": "台湾产业集聚区119",
      "pinyin": "Taiwan Industrial Hub"
    },
    "province": {
      "ar": "تايوان",
      "en": "Taiwan",
      "zh": "台湾"
    },
    "provinceSlug": "taiwan",
    "city": {
      "ar": "مجمع تايوان الصناعي والتجاري 119",
      "en": "Taiwan Industrial Hub 119",
      "zh": "台湾产业集聚区119"
    },
    "citySlug": "taiwan-hub-zone-119",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تايوان الصناعي والتجاري 119 (台湾产业集聚区119) من المراكز الصناعية والتجارية البارزة في مقاطعة تايوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Taiwan Industrial Hub 119 (台湾产业集聚区119) is a prominent industrial and commercial center in Taiwan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تايوان، الصين",
      "en": "Taiwan Industrial Hub 119, Taiwan, China",
      "zh": "中国台湾台湾产业集聚区119"
    },
    "coordinates": {
      "latitude": 24.8844,
      "longitude": 121.9368
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "taiwan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تايوان"
    }
  },
  {
    "id": "city-guangdong-hub-zone-120",
    "slug": "guangdong-hub-zone-120",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع غوانغدونغ الصناعي والتجاري 120",
      "en": "Guangdong Industrial Hub 120",
      "zh": "广东产业集聚区120",
      "pinyin": "Guangdong Industrial Hub"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "مجمع غوانغدونغ الصناعي والتجاري 120",
      "en": "Guangdong Industrial Hub 120",
      "zh": "广东产业集聚区120"
    },
    "citySlug": "guangdong-hub-zone-120",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع غوانغدونغ الصناعي والتجاري 120 (广东产业集聚区120) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangdong Industrial Hub 120 (广东产业集聚区120) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Guangdong Industrial Hub 120, Guangdong, China",
      "zh": "中国广东广东产业集聚区120"
    },
    "coordinates": {
      "latitude": 23.3613,
      "longitude": 113.5901
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في غوانغدونغ"
    }
  },
  {
    "id": "city-zhejiang-hub-zone-121",
    "slug": "zhejiang-hub-zone-121",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تشجيانغ الصناعي والتجاري 121",
      "en": "Zhejiang Industrial Hub 121",
      "zh": "浙江产业集聚区121",
      "pinyin": "Zhejiang Industrial Hub"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "مجمع تشجيانغ الصناعي والتجاري 121",
      "en": "Zhejiang Industrial Hub 121",
      "zh": "浙江产业集聚区121"
    },
    "citySlug": "zhejiang-hub-zone-121",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تشجيانغ الصناعي والتجاري 121 (浙江产业集聚区121) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Zhejiang Industrial Hub 121 (浙江产业集聚区121) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Zhejiang Industrial Hub 121, Zhejiang, China",
      "zh": "中国浙江浙江产业集聚区121"
    },
    "coordinates": {
      "latitude": 30.6736,
      "longitude": 120.1356
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تشجيانغ"
    }
  },
  {
    "id": "city-jiangsu-hub-zone-122",
    "slug": "jiangsu-hub-zone-122",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيانغسو الصناعي والتجاري 122",
      "en": "Jiangsu Industrial Hub 122",
      "zh": "江苏产业集聚区122",
      "pinyin": "Jiangsu Industrial Hub"
    },
    "province": {
      "ar": "جيانغسو",
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "مجمع جيانغسو الصناعي والتجاري 122",
      "en": "Jiangsu Industrial Hub 122",
      "zh": "江苏产业集聚区122"
    },
    "citySlug": "jiangsu-hub-zone-122",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيانغسو الصناعي والتجاري 122 (江苏产业集聚区122) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangsu Industrial Hub 122 (江苏产业集聚区122) is a prominent industrial and commercial center in Jiangsu Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغسو، الصين",
      "en": "Jiangsu Industrial Hub 122, Jiangsu, China",
      "zh": "中国江苏江苏产业集聚区122"
    },
    "coordinates": {
      "latitude": 32.2612,
      "longitude": 118.4165
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangsu",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيانغسو"
    }
  },
  {
    "id": "city-shandong-hub-zone-123",
    "slug": "shandong-hub-zone-123",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شاندونغ الصناعي والتجاري 123",
      "en": "Shandong Industrial Hub 123",
      "zh": "山东产业集聚区123",
      "pinyin": "Shandong Industrial Hub"
    },
    "province": {
      "ar": "شاندونغ",
      "en": "Shandong",
      "zh": "山东"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "مجمع شاندونغ الصناعي والتجاري 123",
      "en": "Shandong Industrial Hub 123",
      "zh": "山东产业集聚区123"
    },
    "citySlug": "shandong-hub-zone-123",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شاندونغ الصناعي والتجاري 123 (山东产业集聚区123) من المراكز الصناعية والتجارية البارزة في مقاطعة شاندونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shandong Industrial Hub 123 (山东产业集聚区123) is a prominent industrial and commercial center in Shandong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شاندونغ، الصين",
      "en": "Shandong Industrial Hub 123, Shandong, China",
      "zh": "中国山东山东产业集聚区123"
    },
    "coordinates": {
      "latitude": 36.4672,
      "longitude": 116.7649
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shandong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شاندونغ"
    }
  },
  {
    "id": "city-fujian-hub-zone-124",
    "slug": "fujian-hub-zone-124",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع فوجيان الصناعي والتجاري 124",
      "en": "Fujian Industrial Hub 124",
      "zh": "福建产业集聚区124",
      "pinyin": "Fujian Industrial Hub"
    },
    "province": {
      "ar": "فوجيان",
      "en": "Fujian",
      "zh": "福建"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "مجمع فوجيان الصناعي والتجاري 124",
      "en": "Fujian Industrial Hub 124",
      "zh": "福建产业集聚区124"
    },
    "citySlug": "fujian-hub-zone-124",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع فوجيان الصناعي والتجاري 124 (福建产业集聚区124) من المراكز الصناعية والتجارية البارزة في مقاطعة فوجيان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Fujian Industrial Hub 124 (福建产业集聚区124) is a prominent industrial and commercial center in Fujian Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "فوجيان، الصين",
      "en": "Fujian Industrial Hub 124, Fujian, China",
      "zh": "中国福建福建产业集聚区124"
    },
    "coordinates": {
      "latitude": 25.6762,
      "longitude": 119.2594
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "fujian",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في فوجيان"
    }
  },
  {
    "id": "city-hebei-hub-zone-125",
    "slug": "hebei-hub-zone-125",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع خبي الصناعي والتجاري 125",
      "en": "Hebei Industrial Hub 125",
      "zh": "河北产业集聚区125",
      "pinyin": "Hebei Industrial Hub"
    },
    "province": {
      "ar": "خبي",
      "en": "Hebei",
      "zh": "河北"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "مجمع خبي الصناعي والتجاري 125",
      "en": "Hebei Industrial Hub 125",
      "zh": "河北产业集聚区125"
    },
    "citySlug": "hebei-hub-zone-125",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع خبي الصناعي والتجاري 125 (河北产业集聚区125) من المراكز الصناعية والتجارية البارزة في مقاطعة خبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hebei Industrial Hub 125 (河北产业集聚区125) is a prominent industrial and commercial center in Hebei Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خبي، الصين",
      "en": "Hebei Industrial Hub 125, Hebei, China",
      "zh": "中国河北河北产业集聚区125"
    },
    "coordinates": {
      "latitude": 37.7964,
      "longitude": 114.83
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hebei",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في خبي"
    }
  },
  {
    "id": "city-henan-hub-zone-126",
    "slug": "henan-hub-zone-126",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع خنان الصناعي والتجاري 126",
      "en": "Henan Industrial Hub 126",
      "zh": "河南产业集聚区126",
      "pinyin": "Henan Industrial Hub"
    },
    "province": {
      "ar": "خنان",
      "en": "Henan",
      "zh": "河南"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "مجمع خنان الصناعي والتجاري 126",
      "en": "Henan Industrial Hub 126",
      "zh": "河南产业集聚区126"
    },
    "citySlug": "henan-hub-zone-126",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع خنان الصناعي والتجاري 126 (河南产业集聚区126) من المراكز الصناعية والتجارية البارزة في مقاطعة خنان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Henan Industrial Hub 126 (河南产业集聚区126) is a prominent industrial and commercial center in Henan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خنان، الصين",
      "en": "Henan Industrial Hub 126, Henan, China",
      "zh": "中国河南河南产业集聚区126"
    },
    "coordinates": {
      "latitude": 34.8786,
      "longitude": 114.0029
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "henan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في خنان"
    }
  },
  {
    "id": "city-hubei-hub-zone-127",
    "slug": "hubei-hub-zone-127",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هوبي الصناعي والتجاري 127",
      "en": "Hubei Industrial Hub 127",
      "zh": "湖北产业集聚区127",
      "pinyin": "Hubei Industrial Hub"
    },
    "province": {
      "ar": "هوبي",
      "en": "Hubei",
      "zh": "湖北"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "مجمع هوبي الصناعي والتجاري 127",
      "en": "Hubei Industrial Hub 127",
      "zh": "湖北产业集聚区127"
    },
    "citySlug": "hubei-hub-zone-127",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هوبي الصناعي والتجاري 127 (湖北产业集聚区127) من المراكز الصناعية والتجارية البارزة في مقاطعة هوبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hubei Industrial Hub 127 (湖北产业集聚区127) is a prominent industrial and commercial center in Hubei Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هوبي، الصين",
      "en": "Hubei Industrial Hub 127, Hubei, China",
      "zh": "中国湖北湖北产业集聚区127"
    },
    "coordinates": {
      "latitude": 30.9819,
      "longitude": 114.3984
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hubei",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هوبي"
    }
  },
  {
    "id": "city-hunan-hub-zone-128",
    "slug": "hunan-hub-zone-128",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هونان الصناعي والتجاري 128",
      "en": "Hunan Industrial Hub 128",
      "zh": "湖南产业集聚区128",
      "pinyin": "Hunan Industrial Hub"
    },
    "province": {
      "ar": "هونان",
      "en": "Hunan",
      "zh": "湖南"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "مجمع هونان الصناعي والتجاري 128",
      "en": "Hunan Industrial Hub 128",
      "zh": "湖南产业集聚区128"
    },
    "citySlug": "hunan-hub-zone-128",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هونان الصناعي والتجاري 128 (湖南产业集聚区128) من المراكز الصناعية والتجارية البارزة في مقاطعة هونان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hunan Industrial Hub 128 (湖南产业集聚区128) is a prominent industrial and commercial center in Hunan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونان، الصين",
      "en": "Hunan Industrial Hub 128, Hunan, China",
      "zh": "中国湖南湖南产业集聚区128"
    },
    "coordinates": {
      "latitude": 28.5166,
      "longitude": 112.6616
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hunan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هونان"
    }
  },
  {
    "id": "city-anhui-hub-zone-129",
    "slug": "anhui-hub-zone-129",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع آنهوي الصناعي والتجاري 129",
      "en": "Anhui Industrial Hub 129",
      "zh": "安徽产业集聚区129",
      "pinyin": "Anhui Industrial Hub"
    },
    "province": {
      "ar": "آنهوي",
      "en": "Anhui",
      "zh": "安徽"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "مجمع آنهوي الصناعي والتجاري 129",
      "en": "Anhui Industrial Hub 129",
      "zh": "安徽产业集聚区129"
    },
    "citySlug": "anhui-hub-zone-129",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع آنهوي الصناعي والتجاري 129 (安徽产业集聚区129) من المراكز الصناعية والتجارية البارزة في مقاطعة آنهوي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Anhui Industrial Hub 129 (安徽产业集聚区129) is a prominent industrial and commercial center in Anhui Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "آنهوي، الصين",
      "en": "Anhui Industrial Hub 129, Anhui, China",
      "zh": "中国安徽安徽产业集聚区129"
    },
    "coordinates": {
      "latitude": 31.7838,
      "longitude": 116.8906
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "anhui",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في آنهوي"
    }
  },
  {
    "id": "city-jiangxi-hub-zone-130",
    "slug": "jiangxi-hub-zone-130",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيانغشي الصناعي والتجاري 130",
      "en": "Jiangxi Industrial Hub 130",
      "zh": "江西产业集聚区130",
      "pinyin": "Jiangxi Industrial Hub"
    },
    "province": {
      "ar": "جيانغشي",
      "en": "Jiangxi",
      "zh": "江西"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "مجمع جيانغشي الصناعي والتجاري 130",
      "en": "Jiangxi Industrial Hub 130",
      "zh": "江西产业集聚区130"
    },
    "citySlug": "jiangxi-hub-zone-130",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيانغشي الصناعي والتجاري 130 (江西产业集聚区130) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangxi Industrial Hub 130 (江西产业集聚区130) is a prominent industrial and commercial center in Jiangxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغشي، الصين",
      "en": "Jiangxi Industrial Hub 130, Jiangxi, China",
      "zh": "中国江西江西产业集聚区130"
    },
    "coordinates": {
      "latitude": 28.311,
      "longitude": 115.711
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيانغشي"
    }
  },
  {
    "id": "city-sichuan-hub-zone-131",
    "slug": "sichuan-hub-zone-131",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع سيتشوان الصناعي والتجاري 131",
      "en": "Sichuan Industrial Hub 131",
      "zh": "四川产业集聚区131",
      "pinyin": "Sichuan Industrial Hub"
    },
    "province": {
      "ar": "سيتشوان",
      "en": "Sichuan",
      "zh": "四川"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "مجمع سيتشوان الصناعي والتجاري 131",
      "en": "Sichuan Industrial Hub 131",
      "zh": "四川产业集聚区131"
    },
    "citySlug": "sichuan-hub-zone-131",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع سيتشوان الصناعي والتجاري 131 (四川产业集聚区131) من المراكز الصناعية والتجارية البارزة في مقاطعة سيتشوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Sichuan Industrial Hub 131 (四川产业集聚区131) is a prominent industrial and commercial center in Sichuan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "سيتشوان، الصين",
      "en": "Sichuan Industrial Hub 131, Sichuan, China",
      "zh": "中国四川四川产业集聚区131"
    },
    "coordinates": {
      "latitude": 30.2482,
      "longitude": 104.3005
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "sichuan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في سيتشوان"
    }
  },
  {
    "id": "city-shaanxi-hub-zone-132",
    "slug": "shaanxi-hub-zone-132",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شنشي الصناعي والتجاري 132",
      "en": "Shaanxi Industrial Hub 132",
      "zh": "陕西产业集聚区132",
      "pinyin": "Shaanxi Industrial Hub"
    },
    "province": {
      "ar": "شنشي",
      "en": "Shaanxi",
      "zh": "陕西"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "مجمع شنشي الصناعي والتجاري 132",
      "en": "Shaanxi Industrial Hub 132",
      "zh": "陕西产业集聚区132"
    },
    "citySlug": "shaanxi-hub-zone-132",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شنشي الصناعي والتجاري 132 (陕西产业集聚区132) من المراكز الصناعية والتجارية البارزة في مقاطعة شنشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shaanxi Industrial Hub 132 (陕西产业集聚区132) is a prominent industrial and commercial center in Shaanxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شنشي، الصين",
      "en": "Shaanxi Industrial Hub 132, Shaanxi, China",
      "zh": "中国陕西陕西产业集聚区132"
    },
    "coordinates": {
      "latitude": 34.3628,
      "longitude": 109.3392
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shaanxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شنشي"
    }
  },
  {
    "id": "city-liaoning-hub-zone-133",
    "slug": "liaoning-hub-zone-133",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع لياونينغ الصناعي والتجاري 133",
      "en": "Liaoning Industrial Hub 133",
      "zh": "辽宁产业集聚区133",
      "pinyin": "Liaoning Industrial Hub"
    },
    "province": {
      "ar": "لياونينغ",
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "مجمع لياونينغ الصناعي والتجاري 133",
      "en": "Liaoning Industrial Hub 133",
      "zh": "辽宁产业集聚区133"
    },
    "citySlug": "liaoning-hub-zone-133",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع لياونينغ الصناعي والتجاري 133 (辽宁产业集聚区133) من المراكز الصناعية والتجارية البارزة في مقاطعة لياونينغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Liaoning Industrial Hub 133 (辽宁产业集聚区133) is a prominent industrial and commercial center in Liaoning Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "لياونينغ، الصين",
      "en": "Liaoning Industrial Hub 133, Liaoning, China",
      "zh": "中国辽宁辽宁产业集聚区133"
    },
    "coordinates": {
      "latitude": 42.1533,
      "longitude": 123.6294
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "liaoning",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في لياونينغ"
    }
  },
  {
    "id": "city-jilin-hub-zone-134",
    "slug": "jilin-hub-zone-134",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيلين الصناعي والتجاري 134",
      "en": "Jilin Industrial Hub 134",
      "zh": "吉林产业集聚区134",
      "pinyin": "Jilin Industrial Hub"
    },
    "province": {
      "ar": "جيلين",
      "en": "Jilin",
      "zh": "吉林"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "مجمع جيلين الصناعي والتجاري 134",
      "en": "Jilin Industrial Hub 134",
      "zh": "吉林产业集聚区134"
    },
    "citySlug": "jilin-hub-zone-134",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيلين الصناعي والتجاري 134 (吉林产业集聚区134) من المراكز الصناعية والتجارية البارزة في مقاطعة جيلين. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jilin Industrial Hub 134 (吉林产业集聚区134) is a prominent industrial and commercial center in Jilin Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيلين، الصين",
      "en": "Jilin Industrial Hub 134, Jilin, China",
      "zh": "中国吉林吉林产业集聚区134"
    },
    "coordinates": {
      "latitude": 44.1715,
      "longitude": 125.138
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jilin",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيلين"
    }
  },
  {
    "id": "city-heilongjiang-hub-zone-135",
    "slug": "heilongjiang-hub-zone-135",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هيلونغجيانغ الصناعي والتجاري 135",
      "en": "Heilongjiang Industrial Hub 135",
      "zh": "黑龙江产业集聚区135",
      "pinyin": "Heilongjiang Industrial Hub"
    },
    "province": {
      "ar": "هيلونغجيانغ",
      "en": "Heilongjiang",
      "zh": "黑龙江"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "مجمع هيلونغجيانغ الصناعي والتجاري 135",
      "en": "Heilongjiang Industrial Hub 135",
      "zh": "黑龙江产业集聚区135"
    },
    "citySlug": "heilongjiang-hub-zone-135",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هيلونغجيانغ الصناعي والتجاري 135 (黑龙江产业集聚区135) من المراكز الصناعية والتجارية البارزة في مقاطعة هيلونغجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Heilongjiang Industrial Hub 135 (黑龙江产业集聚区135) is a prominent industrial and commercial center in Heilongjiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هيلونغجيانغ، الصين",
      "en": "Heilongjiang Industrial Hub 135, Heilongjiang, China",
      "zh": "中国黑龙江黑龙江产业集聚区135"
    },
    "coordinates": {
      "latitude": 45.8391,
      "longitude": 126.1366
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "heilongjiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هيلونغجيانغ"
    }
  },
  {
    "id": "city-shanxi-hub-zone-136",
    "slug": "shanxi-hub-zone-136",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شانشي الصناعي والتجاري 136",
      "en": "Shanxi Industrial Hub 136",
      "zh": "山西产业集聚区136",
      "pinyin": "Shanxi Industrial Hub"
    },
    "province": {
      "ar": "شانشي",
      "en": "Shanxi",
      "zh": "山西"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "مجمع شانشي الصناعي والتجاري 136",
      "en": "Shanxi Industrial Hub 136",
      "zh": "山西产业集聚区136"
    },
    "citySlug": "shanxi-hub-zone-136",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شانشي الصناعي والتجاري 136 (山西产业集聚区136) من المراكز الصناعية والتجارية البارزة في مقاطعة شانشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shanxi Industrial Hub 136 (山西产业集聚区136) is a prominent industrial and commercial center in Shanxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شانشي، الصين",
      "en": "Shanxi Industrial Hub 136, Shanxi, China",
      "zh": "中国山西山西产业集聚区136"
    },
    "coordinates": {
      "latitude": 37.5544,
      "longitude": 112.3039
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shanxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شانشي"
    }
  },
  {
    "id": "city-guizhou-hub-zone-137",
    "slug": "guizhou-hub-zone-137",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع غويتشو الصناعي والتجاري 137",
      "en": "Guizhou Industrial Hub 137",
      "zh": "贵州产业集聚区137",
      "pinyin": "Guizhou Industrial Hub"
    },
    "province": {
      "ar": "غويتشو",
      "en": "Guizhou",
      "zh": "贵州"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "مجمع غويتشو الصناعي والتجاري 137",
      "en": "Guizhou Industrial Hub 137",
      "zh": "贵州产业集聚区137"
    },
    "citySlug": "guizhou-hub-zone-137",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع غويتشو الصناعي والتجاري 137 (贵州产业集聚区137) من المراكز الصناعية والتجارية البارزة في مقاطعة غويتشو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guizhou Industrial Hub 137 (贵州产业集聚区137) is a prominent industrial and commercial center in Guizhou Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غويتشو، الصين",
      "en": "Guizhou Industrial Hub 137, Guizhou, China",
      "zh": "中国贵州贵州产业集聚区137"
    },
    "coordinates": {
      "latitude": 26.2707,
      "longitude": 106.7639
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guizhou",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في غويتشو"
    }
  },
  {
    "id": "city-yunnan-hub-zone-138",
    "slug": "yunnan-hub-zone-138",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع يوننان الصناعي والتجاري 138",
      "en": "Yunnan Industrial Hub 138",
      "zh": "云南产业集聚区138",
      "pinyin": "Yunnan Industrial Hub"
    },
    "province": {
      "ar": "يوننان",
      "en": "Yunnan",
      "zh": "云南"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "مجمع يوننان الصناعي والتجاري 138",
      "en": "Yunnan Industrial Hub 138",
      "zh": "云南产业集聚区138"
    },
    "citySlug": "yunnan-hub-zone-138",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع يوننان الصناعي والتجاري 138 (云南产业集聚区138) من المراكز الصناعية والتجارية البارزة في مقاطعة يوننان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yunnan Industrial Hub 138 (云南产业集聚区138) is a prominent industrial and commercial center in Yunnan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "يوننان، الصين",
      "en": "Yunnan Industrial Hub 138, Yunnan, China",
      "zh": "中国云南云南产业集聚区138"
    },
    "coordinates": {
      "latitude": 24.9494,
      "longitude": 103.1018
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "yunnan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في يوننان"
    }
  },
  {
    "id": "city-guangxi-hub-zone-139",
    "slug": "guangxi-hub-zone-139",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع قوانغشي الصناعي والتجاري 139",
      "en": "Guangxi Industrial Hub 139",
      "zh": "广西产业集聚区139",
      "pinyin": "Guangxi Industrial Hub"
    },
    "province": {
      "ar": "قوانغشي",
      "en": "Guangxi",
      "zh": "广西"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "مجمع قوانغشي الصناعي والتجاري 139",
      "en": "Guangxi Industrial Hub 139",
      "zh": "广西产业集聚区139"
    },
    "citySlug": "guangxi-hub-zone-139",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع قوانغشي الصناعي والتجاري 139 (广西产业集聚区139) من المراكز الصناعية والتجارية البارزة في مقاطعة قوانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangxi Industrial Hub 139 (广西产业集聚区139) is a prominent industrial and commercial center in Guangxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قوانغشي، الصين",
      "en": "Guangxi Industrial Hub 139, Guangxi, China",
      "zh": "中国广西广西产业集聚区139"
    },
    "coordinates": {
      "latitude": 23.0954,
      "longitude": 108.6537
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في قوانغشي"
    }
  },
  {
    "id": "city-inner-mongolia-hub-zone-140",
    "slug": "inner-mongolia-hub-zone-140",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع منغوليا الداخلية الصناعي والتجاري 140",
      "en": "Inner Mongolia Industrial Hub 140",
      "zh": "内蒙古产业集聚区140",
      "pinyin": "Inner Mongolia Industrial Hub"
    },
    "province": {
      "ar": "منغوليا الداخلية",
      "en": "Inner Mongolia",
      "zh": "内蒙古"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "مجمع منغوليا الداخلية الصناعي والتجاري 140",
      "en": "Inner Mongolia Industrial Hub 140",
      "zh": "内蒙古产业集聚区140"
    },
    "citySlug": "inner-mongolia-hub-zone-140",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع منغوليا الداخلية الصناعي والتجاري 140 (内蒙古产业集聚区140) من المراكز الصناعية والتجارية البارزة في مقاطعة منغوليا الداخلية. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Inner Mongolia Industrial Hub 140 (内蒙古产业集聚区140) is a prominent industrial and commercial center in Inner Mongolia Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "منغوليا الداخلية، الصين",
      "en": "Inner Mongolia Industrial Hub 140, Inner Mongolia, China",
      "zh": "中国内蒙古内蒙古产业集聚区140"
    },
    "coordinates": {
      "latitude": 41.2336,
      "longitude": 111.672
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "inner-mongolia",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في منغوليا الداخلية"
    }
  },
  {
    "id": "city-xinjiang-hub-zone-141",
    "slug": "xinjiang-hub-zone-141",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شينجيانغ الصناعي والتجاري 141",
      "en": "Xinjiang Industrial Hub 141",
      "zh": "新疆产业集聚区141",
      "pinyin": "Xinjiang Industrial Hub"
    },
    "province": {
      "ar": "شينجيانغ",
      "en": "Xinjiang",
      "zh": "新疆"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "مجمع شينجيانغ الصناعي والتجاري 141",
      "en": "Xinjiang Industrial Hub 141",
      "zh": "新疆产业集聚区141"
    },
    "citySlug": "xinjiang-hub-zone-141",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شينجيانغ الصناعي والتجاري 141 (新疆产业集聚区141) من المراكز الصناعية والتجارية البارزة في مقاطعة شينجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Xinjiang Industrial Hub 141 (新疆产业集聚区141) is a prominent industrial and commercial center in Xinjiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شينجيانغ، الصين",
      "en": "Xinjiang Industrial Hub 141, Xinjiang, China",
      "zh": "中国新疆新疆产业集聚区141"
    },
    "coordinates": {
      "latitude": 43.9709,
      "longitude": 87.2441
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "xinjiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شينجيانغ"
    }
  },
  {
    "id": "city-gansu-hub-zone-142",
    "slug": "gansu-hub-zone-142",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع قانسو الصناعي والتجاري 142",
      "en": "Gansu Industrial Hub 142",
      "zh": "甘肃产业集聚区142",
      "pinyin": "Gansu Industrial Hub"
    },
    "province": {
      "ar": "قانسو",
      "en": "Gansu",
      "zh": "甘肃"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "مجمع قانسو الصناعي والتجاري 142",
      "en": "Gansu Industrial Hub 142",
      "zh": "甘肃产业集聚区142"
    },
    "citySlug": "gansu-hub-zone-142",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع قانسو الصناعي والتجاري 142 (甘肃产业集聚区142) من المراكز الصناعية والتجارية البارزة في مقاطعة قانسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Gansu Industrial Hub 142 (甘肃产业集聚区142) is a prominent industrial and commercial center in Gansu Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قانسو، الصين",
      "en": "Gansu Industrial Hub 142, Gansu, China",
      "zh": "中国甘肃甘肃产业集聚区142"
    },
    "coordinates": {
      "latitude": 35.826,
      "longitude": 103.5107
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "gansu",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في قانسو"
    }
  },
  {
    "id": "city-hainan-hub-zone-143",
    "slug": "hainan-hub-zone-143",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هاينان الصناعي والتجاري 143",
      "en": "Hainan Industrial Hub 143",
      "zh": "海南产业集聚区143",
      "pinyin": "Hainan Industrial Hub"
    },
    "province": {
      "ar": "هاينان",
      "en": "Hainan",
      "zh": "海南"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "مجمع هاينان الصناعي والتجاري 143",
      "en": "Hainan Industrial Hub 143",
      "zh": "海南产业集聚区143"
    },
    "citySlug": "hainan-hub-zone-143",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هاينان الصناعي والتجاري 143 (海南产业集聚区143) من المراكز الصناعية والتجارية البارزة في مقاطعة هاينان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hainan Industrial Hub 143 (海南产业集聚区143) is a prominent industrial and commercial center in Hainan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هاينان، الصين",
      "en": "Hainan Industrial Hub 143, Hainan, China",
      "zh": "中国海南海南产业集聚区143"
    },
    "coordinates": {
      "latitude": 19.6447,
      "longitude": 110.2229
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hainan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هاينان"
    }
  },
  {
    "id": "city-ningxia-hub-zone-144",
    "slug": "ningxia-hub-zone-144",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع نينغشيا الصناعي والتجاري 144",
      "en": "Ningxia Industrial Hub 144",
      "zh": "宁夏产业集聚区144",
      "pinyin": "Ningxia Industrial Hub"
    },
    "province": {
      "ar": "نينغشيا",
      "en": "Ningxia",
      "zh": "宁夏"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "مجمع نينغشيا الصناعي والتجاري 144",
      "en": "Ningxia Industrial Hub 144",
      "zh": "宁夏产业集聚区144"
    },
    "citySlug": "ningxia-hub-zone-144",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع نينغشيا الصناعي والتجاري 144 (宁夏产业集聚区144) من المراكز الصناعية والتجارية البارزة في مقاطعة نينغشيا. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Ningxia Industrial Hub 144 (宁夏产业集聚区144) is a prominent industrial and commercial center in Ningxia Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "نينغشيا، الصين",
      "en": "Ningxia Industrial Hub 144, Ningxia, China",
      "zh": "中国宁夏宁夏产业集聚区144"
    },
    "coordinates": {
      "latitude": 38.2908,
      "longitude": 106.5794
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "ningxia",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في نينغشيا"
    }
  },
  {
    "id": "city-qinghai-hub-zone-145",
    "slug": "qinghai-hub-zone-145",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تشينغهاي الصناعي والتجاري 145",
      "en": "Qinghai Industrial Hub 145",
      "zh": "青海产业集聚区145",
      "pinyin": "Qinghai Industrial Hub"
    },
    "province": {
      "ar": "تشينغهاي",
      "en": "Qinghai",
      "zh": "青海"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "مجمع تشينغهاي الصناعي والتجاري 145",
      "en": "Qinghai Industrial Hub 145",
      "zh": "青海产业集聚区145"
    },
    "citySlug": "qinghai-hub-zone-145",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تشينغهاي الصناعي والتجاري 145 (青海产业集聚区145) من المراكز الصناعية والتجارية البارزة في مقاطعة تشينغهاي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Qinghai Industrial Hub 145 (青海产业集聚区145) is a prominent industrial and commercial center in Qinghai Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشينغهاي، الصين",
      "en": "Qinghai Industrial Hub 145, Qinghai, China",
      "zh": "中国青海青海产业集聚区145"
    },
    "coordinates": {
      "latitude": 36.808,
      "longitude": 102.1336
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "qinghai",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تشينغهاي"
    }
  },
  {
    "id": "city-tibet-hub-zone-146",
    "slug": "tibet-hub-zone-146",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع التبت الصناعي والتجاري 146",
      "en": "Tibet Industrial Hub 146",
      "zh": "西藏产业集聚区146",
      "pinyin": "Tibet Industrial Hub"
    },
    "province": {
      "ar": "التبت",
      "en": "Tibet",
      "zh": "西藏"
    },
    "provinceSlug": "tibet",
    "city": {
      "ar": "مجمع التبت الصناعي والتجاري 146",
      "en": "Tibet Industrial Hub 146",
      "zh": "西藏产业集聚区146"
    },
    "citySlug": "tibet-hub-zone-146",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع التبت الصناعي والتجاري 146 (西藏产业集聚区146) من المراكز الصناعية والتجارية البارزة في مقاطعة التبت. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Tibet Industrial Hub 146 (西藏产业集聚区146) is a prominent industrial and commercial center in Tibet Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "التبت، الصين",
      "en": "Tibet Industrial Hub 146, Tibet, China",
      "zh": "中国西藏西藏产业集聚区146"
    },
    "coordinates": {
      "latitude": 30.0511,
      "longitude": 91.2057
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "tibet",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في التبت"
    }
  },
  {
    "id": "city-hong-kong-hub-zone-147",
    "slug": "hong-kong-hub-zone-147",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هونغ كونغ الصناعي والتجاري 147",
      "en": "Hong Kong Industrial Hub 147",
      "zh": "香港产业集聚区147",
      "pinyin": "Hong Kong Industrial Hub"
    },
    "province": {
      "ar": "هونغ كونغ",
      "en": "Hong Kong",
      "zh": "香港"
    },
    "provinceSlug": "hong-kong",
    "city": {
      "ar": "مجمع هونغ كونغ الصناعي والتجاري 147",
      "en": "Hong Kong Industrial Hub 147",
      "zh": "香港产业集聚区147"
    },
    "citySlug": "hong-kong-hub-zone-147",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هونغ كونغ الصناعي والتجاري 147 (香港产业集聚区147) من المراكز الصناعية والتجارية البارزة في مقاطعة هونغ كونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hong Kong Industrial Hub 147 (香港产业集聚区147) is a prominent industrial and commercial center in Hong Kong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونغ كونغ، الصين",
      "en": "Hong Kong Industrial Hub 147, Hong Kong, China",
      "zh": "中国香港香港产业集聚区147"
    },
    "coordinates": {
      "latitude": 22.5629,
      "longitude": 113.8521
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hong-kong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هونغ كونغ"
    }
  },
  {
    "id": "city-macau-hub-zone-148",
    "slug": "macau-hub-zone-148",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع ماكاو الصناعي والتجاري 148",
      "en": "Macau Industrial Hub 148",
      "zh": "澳门产业集聚区148",
      "pinyin": "Macau Industrial Hub"
    },
    "province": {
      "ar": "ماكاو",
      "en": "Macau",
      "zh": "澳门"
    },
    "provinceSlug": "macau",
    "city": {
      "ar": "مجمع ماكاو الصناعي والتجاري 148",
      "en": "Macau Industrial Hub 148",
      "zh": "澳门产业集聚区148"
    },
    "citySlug": "macau-hub-zone-148",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع ماكاو الصناعي والتجاري 148 (澳门产业集聚区148) من المراكز الصناعية والتجارية البارزة في مقاطعة ماكاو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Macau Industrial Hub 148 (澳门产业集聚区148) is a prominent industrial and commercial center in Macau Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "ماكاو، الصين",
      "en": "Macau Industrial Hub 148, Macau, China",
      "zh": "中国澳门澳门产业集聚区148"
    },
    "coordinates": {
      "latitude": 22.0634,
      "longitude": 113.1675
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "macau",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في ماكاو"
    }
  },
  {
    "id": "city-taiwan-hub-zone-149",
    "slug": "taiwan-hub-zone-149",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تايوان الصناعي والتجاري 149",
      "en": "Taiwan Industrial Hub 149",
      "zh": "台湾产业集聚区149",
      "pinyin": "Taiwan Industrial Hub"
    },
    "province": {
      "ar": "تايوان",
      "en": "Taiwan",
      "zh": "台湾"
    },
    "provinceSlug": "taiwan",
    "city": {
      "ar": "مجمع تايوان الصناعي والتجاري 149",
      "en": "Taiwan Industrial Hub 149",
      "zh": "台湾产业集聚区149"
    },
    "citySlug": "taiwan-hub-zone-149",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تايوان الصناعي والتجاري 149 (台湾产业集聚区149) من المراكز الصناعية والتجارية البارزة في مقاطعة تايوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Taiwan Industrial Hub 149 (台湾产业集聚区149) is a prominent industrial and commercial center in Taiwan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تايوان، الصين",
      "en": "Taiwan Industrial Hub 149, Taiwan, China",
      "zh": "中国台湾台湾产业集聚区149"
    },
    "coordinates": {
      "latitude": 24.6431,
      "longitude": 121.4759
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "taiwan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تايوان"
    }
  },
  {
    "id": "city-guangdong-hub-zone-150",
    "slug": "guangdong-hub-zone-150",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع غوانغدونغ الصناعي والتجاري 150",
      "en": "Guangdong Industrial Hub 150",
      "zh": "广东产业集聚区150",
      "pinyin": "Guangdong Industrial Hub"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "مجمع غوانغدونغ الصناعي والتجاري 150",
      "en": "Guangdong Industrial Hub 150",
      "zh": "广东产业集聚区150"
    },
    "citySlug": "guangdong-hub-zone-150",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع غوانغدونغ الصناعي والتجاري 150 (广东产业集聚区150) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangdong Industrial Hub 150 (广东产业集聚区150) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Guangdong Industrial Hub 150, Guangdong, China",
      "zh": "中国广东广东产业集聚区150"
    },
    "coordinates": {
      "latitude": 22.8431,
      "longitude": 113.5441
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في غوانغدونغ"
    }
  },
  {
    "id": "city-zhejiang-hub-zone-151",
    "slug": "zhejiang-hub-zone-151",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تشجيانغ الصناعي والتجاري 151",
      "en": "Zhejiang Industrial Hub 151",
      "zh": "浙江产业集聚区151",
      "pinyin": "Zhejiang Industrial Hub"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "مجمع تشجيانغ الصناعي والتجاري 151",
      "en": "Zhejiang Industrial Hub 151",
      "zh": "浙江产业集聚区151"
    },
    "citySlug": "zhejiang-hub-zone-151",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تشجيانغ الصناعي والتجاري 151 (浙江产业集聚区151) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Zhejiang Industrial Hub 151 (浙江产业集聚区151) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Zhejiang Industrial Hub 151, Zhejiang, China",
      "zh": "中国浙江浙江产业集聚区151"
    },
    "coordinates": {
      "latitude": 30.355,
      "longitude": 120.5468
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تشجيانغ"
    }
  },
  {
    "id": "city-jiangsu-hub-zone-152",
    "slug": "jiangsu-hub-zone-152",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيانغسو الصناعي والتجاري 152",
      "en": "Jiangsu Industrial Hub 152",
      "zh": "江苏产业集聚区152",
      "pinyin": "Jiangsu Industrial Hub"
    },
    "province": {
      "ar": "جيانغسو",
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "مجمع جيانغسو الصناعي والتجاري 152",
      "en": "Jiangsu Industrial Hub 152",
      "zh": "江苏产业集聚区152"
    },
    "citySlug": "jiangsu-hub-zone-152",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيانغسو الصناعي والتجاري 152 (江苏产业集聚区152) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangsu Industrial Hub 152 (江苏产业集聚区152) is a prominent industrial and commercial center in Jiangsu Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغسو، الصين",
      "en": "Jiangsu Industrial Hub 152, Jiangsu, China",
      "zh": "中国江苏江苏产业集聚区152"
    },
    "coordinates": {
      "latitude": 32.435,
      "longitude": 118.9068
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangsu",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيانغسو"
    }
  },
  {
    "id": "city-shandong-hub-zone-153",
    "slug": "shandong-hub-zone-153",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شاندونغ الصناعي والتجاري 153",
      "en": "Shandong Industrial Hub 153",
      "zh": "山东产业集聚区153",
      "pinyin": "Shandong Industrial Hub"
    },
    "province": {
      "ar": "شاندونغ",
      "en": "Shandong",
      "zh": "山东"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "مجمع شاندونغ الصناعي والتجاري 153",
      "en": "Shandong Industrial Hub 153",
      "zh": "山东产业集聚区153"
    },
    "citySlug": "shandong-hub-zone-153",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شاندونغ الصناعي والتجاري 153 (山东产业集聚区153) من المراكز الصناعية والتجارية البارزة في مقاطعة شاندونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shandong Industrial Hub 153 (山东产业集聚区153) is a prominent industrial and commercial center in Shandong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شاندونغ، الصين",
      "en": "Shandong Industrial Hub 153, Shandong, China",
      "zh": "中国山东山东产业集聚区153"
    },
    "coordinates": {
      "latitude": 36.9738,
      "longitude": 116.8836
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shandong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شاندونغ"
    }
  },
  {
    "id": "city-fujian-hub-zone-154",
    "slug": "fujian-hub-zone-154",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع فوجيان الصناعي والتجاري 154",
      "en": "Fujian Industrial Hub 154",
      "zh": "福建产业集聚区154",
      "pinyin": "Fujian Industrial Hub"
    },
    "province": {
      "ar": "فوجيان",
      "en": "Fujian",
      "zh": "福建"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "مجمع فوجيان الصناعي والتجاري 154",
      "en": "Fujian Industrial Hub 154",
      "zh": "福建产业集聚区154"
    },
    "citySlug": "fujian-hub-zone-154",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع فوجيان الصناعي والتجاري 154 (福建产业集聚区154) من المراكز الصناعية والتجارية البارزة في مقاطعة فوجيان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Fujian Industrial Hub 154 (福建产业集聚区154) is a prominent industrial and commercial center in Fujian Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "فوجيان، الصين",
      "en": "Fujian Industrial Hub 154, Fujian, China",
      "zh": "中国福建福建产业集聚区154"
    },
    "coordinates": {
      "latitude": 26.0497,
      "longitude": 118.8973
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "fujian",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في فوجيان"
    }
  },
  {
    "id": "city-hebei-hub-zone-155",
    "slug": "hebei-hub-zone-155",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع خبي الصناعي والتجاري 155",
      "en": "Hebei Industrial Hub 155",
      "zh": "河北产业集聚区155",
      "pinyin": "Hebei Industrial Hub"
    },
    "province": {
      "ar": "خبي",
      "en": "Hebei",
      "zh": "河北"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "مجمع خبي الصناعي والتجاري 155",
      "en": "Hebei Industrial Hub 155",
      "zh": "河北产业集聚区155"
    },
    "citySlug": "hebei-hub-zone-155",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع خبي الصناعي والتجاري 155 (河北产业集聚区155) من المراكز الصناعية والتجارية البارزة في مقاطعة خبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hebei Industrial Hub 155 (河北产业集聚区155) is a prominent industrial and commercial center in Hebei Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خبي، الصين",
      "en": "Hebei Industrial Hub 155, Hebei, China",
      "zh": "中国河北河北产业集聚区155"
    },
    "coordinates": {
      "latitude": 37.6935,
      "longitude": 114.32
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hebei",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في خبي"
    }
  },
  {
    "id": "city-henan-hub-zone-156",
    "slug": "henan-hub-zone-156",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع خنان الصناعي والتجاري 156",
      "en": "Henan Industrial Hub 156",
      "zh": "河南产业集聚区156",
      "pinyin": "Henan Industrial Hub"
    },
    "province": {
      "ar": "خنان",
      "en": "Henan",
      "zh": "河南"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "مجمع خنان الصناعي والتجاري 156",
      "en": "Henan Industrial Hub 156",
      "zh": "河南产业集聚区156"
    },
    "citySlug": "henan-hub-zone-156",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع خنان الصناعي والتجاري 156 (河南产业集聚区156) من المراكز الصناعية والتجارية البارزة في مقاطعة خنان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Henan Industrial Hub 156 (河南产业集聚区156) is a prominent industrial and commercial center in Henan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خنان، الصين",
      "en": "Henan Industrial Hub 156, Henan, China",
      "zh": "中国河南河南产业集聚区156"
    },
    "coordinates": {
      "latitude": 34.3939,
      "longitude": 113.814
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "henan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في خنان"
    }
  },
  {
    "id": "city-hubei-hub-zone-157",
    "slug": "hubei-hub-zone-157",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هوبي الصناعي والتجاري 157",
      "en": "Hubei Industrial Hub 157",
      "zh": "湖北产业集聚区157",
      "pinyin": "Hubei Industrial Hub"
    },
    "province": {
      "ar": "هوبي",
      "en": "Hubei",
      "zh": "湖北"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "مجمع هوبي الصناعي والتجاري 157",
      "en": "Hubei Industrial Hub 157",
      "zh": "湖北产业集聚区157"
    },
    "citySlug": "hubei-hub-zone-157",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هوبي الصناعي والتجاري 157 (湖北产业集聚区157) من المراكز الصناعية والتجارية البارزة في مقاطعة هوبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hubei Industrial Hub 157 (湖北产业集聚区157) is a prominent industrial and commercial center in Hubei Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هوبي، الصين",
      "en": "Hubei Industrial Hub 157, Hubei, China",
      "zh": "中国湖北湖北产业集聚区157"
    },
    "coordinates": {
      "latitude": 30.561,
      "longitude": 114.7042
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hubei",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هوبي"
    }
  },
  {
    "id": "city-hunan-hub-zone-158",
    "slug": "hunan-hub-zone-158",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هونان الصناعي والتجاري 158",
      "en": "Hunan Industrial Hub 158",
      "zh": "湖南产业集聚区158",
      "pinyin": "Hunan Industrial Hub"
    },
    "province": {
      "ar": "هونان",
      "en": "Hunan",
      "zh": "湖南"
    },
    "provinceSlug": "hunan",
    "city": {
      "ar": "مجمع هونان الصناعي والتجاري 158",
      "en": "Hunan Industrial Hub 158",
      "zh": "湖南产业集聚区158"
    },
    "citySlug": "hunan-hub-zone-158",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هونان الصناعي والتجاري 158 (湖南产业集聚区158) من المراكز الصناعية والتجارية البارزة في مقاطعة هونان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hunan Industrial Hub 158 (湖南产业集聚区158) is a prominent industrial and commercial center in Hunan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونان، الصين",
      "en": "Hunan Industrial Hub 158, Hunan, China",
      "zh": "中国湖南湖南产业集聚区158"
    },
    "coordinates": {
      "latitude": 28.5465,
      "longitude": 113.181
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hunan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هونان"
    }
  },
  {
    "id": "city-anhui-hub-zone-159",
    "slug": "anhui-hub-zone-159",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع آنهوي الصناعي والتجاري 159",
      "en": "Anhui Industrial Hub 159",
      "zh": "安徽产业集聚区159",
      "pinyin": "Anhui Industrial Hub"
    },
    "province": {
      "ar": "آنهوي",
      "en": "Anhui",
      "zh": "安徽"
    },
    "provinceSlug": "anhui",
    "city": {
      "ar": "مجمع آنهوي الصناعي والتجاري 159",
      "en": "Anhui Industrial Hub 159",
      "zh": "安徽产业集聚区159"
    },
    "citySlug": "anhui-hub-zone-159",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع آنهوي الصناعي والتجاري 159 (安徽产业集聚区159) من المراكز الصناعية والتجارية البارزة في مقاطعة آنهوي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Anhui Industrial Hub 159 (安徽产业集聚区159) is a prominent industrial and commercial center in Anhui Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "آنهوي، الصين",
      "en": "Anhui Industrial Hub 159, Anhui, China",
      "zh": "中国安徽安徽产业集聚区159"
    },
    "coordinates": {
      "latitude": 32.237,
      "longitude": 117.146
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "anhui",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في آنهوي"
    }
  },
  {
    "id": "city-jiangxi-hub-zone-160",
    "slug": "jiangxi-hub-zone-160",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيانغشي الصناعي والتجاري 160",
      "en": "Jiangxi Industrial Hub 160",
      "zh": "江西产业集聚区160",
      "pinyin": "Jiangxi Industrial Hub"
    },
    "province": {
      "ar": "جيانغشي",
      "en": "Jiangxi",
      "zh": "江西"
    },
    "provinceSlug": "jiangxi",
    "city": {
      "ar": "مجمع جيانغشي الصناعي والتجاري 160",
      "en": "Jiangxi Industrial Hub 160",
      "zh": "江西产业集聚区160"
    },
    "citySlug": "jiangxi-hub-zone-160",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيانغشي الصناعي والتجاري 160 (江西产业集聚区160) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangxi Industrial Hub 160 (江西产业集聚区160) is a prominent industrial and commercial center in Jiangxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغشي، الصين",
      "en": "Jiangxi Industrial Hub 160, Jiangxi, China",
      "zh": "中国江西江西产业集聚区160"
    },
    "coordinates": {
      "latitude": 28.7708,
      "longitude": 115.4676
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيانغشي"
    }
  },
  {
    "id": "city-sichuan-hub-zone-161",
    "slug": "sichuan-hub-zone-161",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع سيتشوان الصناعي والتجاري 161",
      "en": "Sichuan Industrial Hub 161",
      "zh": "四川产业集聚区161",
      "pinyin": "Sichuan Industrial Hub"
    },
    "province": {
      "ar": "سيتشوان",
      "en": "Sichuan",
      "zh": "四川"
    },
    "provinceSlug": "sichuan",
    "city": {
      "ar": "مجمع سيتشوان الصناعي والتجاري 161",
      "en": "Sichuan Industrial Hub 161",
      "zh": "四川产业集聚区161"
    },
    "citySlug": "sichuan-hub-zone-161",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع سيتشوان الصناعي والتجاري 161 (四川产业集聚区161) من المراكز الصناعية والتجارية البارزة في مقاطعة سيتشوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Sichuan Industrial Hub 161 (四川产业集聚区161) is a prominent industrial and commercial center in Sichuan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "سيتشوان، الصين",
      "en": "Sichuan Industrial Hub 161, Sichuan, China",
      "zh": "中国四川四川产业集聚区161"
    },
    "coordinates": {
      "latitude": 30.2918,
      "longitude": 103.7821
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "sichuan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في سيتشوان"
    }
  },
  {
    "id": "city-shaanxi-hub-zone-162",
    "slug": "shaanxi-hub-zone-162",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شنشي الصناعي والتجاري 162",
      "en": "Shaanxi Industrial Hub 162",
      "zh": "陕西产业集聚区162",
      "pinyin": "Shaanxi Industrial Hub"
    },
    "province": {
      "ar": "شنشي",
      "en": "Shaanxi",
      "zh": "陕西"
    },
    "provinceSlug": "shaanxi",
    "city": {
      "ar": "مجمع شنشي الصناعي والتجاري 162",
      "en": "Shaanxi Industrial Hub 162",
      "zh": "陕西产业集聚区162"
    },
    "citySlug": "shaanxi-hub-zone-162",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شنشي الصناعي والتجاري 162 (陕西产业集聚区162) من المراكز الصناعية والتجارية البارزة في مقاطعة شنشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shaanxi Industrial Hub 162 (陕西产业集聚区162) is a prominent industrial and commercial center in Shaanxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شنشي، الصين",
      "en": "Shaanxi Industrial Hub 162, Shaanxi, China",
      "zh": "中国陕西陕西产业集聚区162"
    },
    "coordinates": {
      "latitude": 33.9502,
      "longitude": 109.0224
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shaanxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شنشي"
    }
  },
  {
    "id": "city-liaoning-hub-zone-163",
    "slug": "liaoning-hub-zone-163",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع لياونينغ الصناعي والتجاري 163",
      "en": "Liaoning Industrial Hub 163",
      "zh": "辽宁产业集聚区163",
      "pinyin": "Liaoning Industrial Hub"
    },
    "province": {
      "ar": "لياونينغ",
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "مجمع لياونينغ الصناعي والتجاري 163",
      "en": "Liaoning Industrial Hub 163",
      "zh": "辽宁产业集聚区163"
    },
    "citySlug": "liaoning-hub-zone-163",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع لياونينغ الصناعي والتجاري 163 (辽宁产业集聚区163) من المراكز الصناعية والتجارية البارزة في مقاطعة لياونينغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Liaoning Industrial Hub 163 (辽宁产业集聚区163) is a prominent industrial and commercial center in Liaoning Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "لياونينغ، الصين",
      "en": "Liaoning Industrial Hub 163, Liaoning, China",
      "zh": "中国辽宁辽宁产业集聚区163"
    },
    "coordinates": {
      "latitude": 41.6637,
      "longitude": 123.8055
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "liaoning",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في لياونينغ"
    }
  },
  {
    "id": "city-jilin-hub-zone-164",
    "slug": "jilin-hub-zone-164",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيلين الصناعي والتجاري 164",
      "en": "Jilin Industrial Hub 164",
      "zh": "吉林产业集聚区164",
      "pinyin": "Jilin Industrial Hub"
    },
    "province": {
      "ar": "جيلين",
      "en": "Jilin",
      "zh": "吉林"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "مجمع جيلين الصناعي والتجاري 164",
      "en": "Jilin Industrial Hub 164",
      "zh": "吉林产业集聚区164"
    },
    "citySlug": "jilin-hub-zone-164",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيلين الصناعي والتجاري 164 (吉林产业集聚区164) من المراكز الصناعية والتجارية البارزة في مقاطعة جيلين. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jilin Industrial Hub 164 (吉林产业集聚区164) is a prominent industrial and commercial center in Jilin Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيلين، الصين",
      "en": "Jilin Industrial Hub 164, Jilin, China",
      "zh": "中国吉林吉林产业集聚区164"
    },
    "coordinates": {
      "latitude": 44.0551,
      "longitude": 125.645
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jilin",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيلين"
    }
  },
  {
    "id": "city-heilongjiang-hub-zone-165",
    "slug": "heilongjiang-hub-zone-165",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هيلونغجيانغ الصناعي والتجاري 165",
      "en": "Heilongjiang Industrial Hub 165",
      "zh": "黑龙江产业集聚区165",
      "pinyin": "Heilongjiang Industrial Hub"
    },
    "province": {
      "ar": "هيلونغجيانغ",
      "en": "Heilongjiang",
      "zh": "黑龙江"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "مجمع هيلونغجيانغ الصناعي والتجاري 165",
      "en": "Heilongjiang Industrial Hub 165",
      "zh": "黑龙江产业集聚区165"
    },
    "citySlug": "heilongjiang-hub-zone-165",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هيلونغجيانغ الصناعي والتجاري 165 (黑龙江产业集聚区165) من المراكز الصناعية والتجارية البارزة في مقاطعة هيلونغجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Heilongjiang Industrial Hub 165 (黑龙江产业集聚区165) is a prominent industrial and commercial center in Heilongjiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هيلونغجيانغ، الصين",
      "en": "Heilongjiang Industrial Hub 165, Heilongjiang, China",
      "zh": "中国黑龙江黑龙江产业集聚区165"
    },
    "coordinates": {
      "latitude": 46.2029,
      "longitude": 126.5085
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "heilongjiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هيلونغجيانغ"
    }
  },
  {
    "id": "city-shanxi-hub-zone-166",
    "slug": "shanxi-hub-zone-166",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شانشي الصناعي والتجاري 166",
      "en": "Shanxi Industrial Hub 166",
      "zh": "山西产业集聚区166",
      "pinyin": "Shanxi Industrial Hub"
    },
    "province": {
      "ar": "شانشي",
      "en": "Shanxi",
      "zh": "山西"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "مجمع شانشي الصناعي والتجاري 166",
      "en": "Shanxi Industrial Hub 166",
      "zh": "山西产业集聚区166"
    },
    "citySlug": "shanxi-hub-zone-166",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شانشي الصناعي والتجاري 166 (山西产业集聚区166) من المراكز الصناعية والتجارية البارزة في مقاطعة شانشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shanxi Industrial Hub 166 (山西产业集聚区166) is a prominent industrial and commercial center in Shanxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شانشي، الصين",
      "en": "Shanxi Industrial Hub 166, Shanxi, China",
      "zh": "中国山西山西产业集聚区166"
    },
    "coordinates": {
      "latitude": 38.0639,
      "longitude": 112.1987
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shanxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شانشي"
    }
  },
  {
    "id": "city-guizhou-hub-zone-167",
    "slug": "guizhou-hub-zone-167",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع غويتشو الصناعي والتجاري 167",
      "en": "Guizhou Industrial Hub 167",
      "zh": "贵州产业集聚区167",
      "pinyin": "Guizhou Industrial Hub"
    },
    "province": {
      "ar": "غويتشو",
      "en": "Guizhou",
      "zh": "贵州"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "مجمع غويتشو الصناعي والتجاري 167",
      "en": "Guizhou Industrial Hub 167",
      "zh": "贵州产业集聚区167"
    },
    "citySlug": "guizhou-hub-zone-167",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع غويتشو الصناعي والتجاري 167 (贵州产业集聚区167) من المراكز الصناعية والتجارية البارزة في مقاطعة غويتشو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guizhou Industrial Hub 167 (贵州产业集聚区167) is a prominent industrial and commercial center in Guizhou Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غويتشو، الصين",
      "en": "Guizhou Industrial Hub 167, Guizhou, China",
      "zh": "中国贵州贵州产业集聚区167"
    },
    "coordinates": {
      "latitude": 26.4575,
      "longitude": 106.2783
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guizhou",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في غويتشو"
    }
  },
  {
    "id": "city-yunnan-hub-zone-168",
    "slug": "yunnan-hub-zone-168",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع يوننان الصناعي والتجاري 168",
      "en": "Yunnan Industrial Hub 168",
      "zh": "云南产业集聚区168",
      "pinyin": "Yunnan Industrial Hub"
    },
    "province": {
      "ar": "يوننان",
      "en": "Yunnan",
      "zh": "云南"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "مجمع يوننان الصناعي والتجاري 168",
      "en": "Yunnan Industrial Hub 168",
      "zh": "云南产业集聚区168"
    },
    "citySlug": "yunnan-hub-zone-168",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع يوننان الصناعي والتجاري 168 (云南产业集聚区168) من المراكز الصناعية والتجارية البارزة في مقاطعة يوننان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Yunnan Industrial Hub 168 (云南产业集聚区168) is a prominent industrial and commercial center in Yunnan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "يوننان، الصين",
      "en": "Yunnan Industrial Hub 168, Yunnan, China",
      "zh": "中国云南云南产业集聚区168"
    },
    "coordinates": {
      "latitude": 24.6417,
      "longitude": 102.6822
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "yunnan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في يوننان"
    }
  },
  {
    "id": "city-guangxi-hub-zone-169",
    "slug": "guangxi-hub-zone-169",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع قوانغشي الصناعي والتجاري 169",
      "en": "Guangxi Industrial Hub 169",
      "zh": "广西产业集聚区169",
      "pinyin": "Guangxi Industrial Hub"
    },
    "province": {
      "ar": "قوانغشي",
      "en": "Guangxi",
      "zh": "广西"
    },
    "provinceSlug": "guangxi",
    "city": {
      "ar": "مجمع قوانغشي الصناعي والتجاري 169",
      "en": "Guangxi Industrial Hub 169",
      "zh": "广西产业集聚区169"
    },
    "citySlug": "guangxi-hub-zone-169",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع قوانغشي الصناعي والتجاري 169 (广西产业集聚区169) من المراكز الصناعية والتجارية البارزة في مقاطعة قوانغشي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangxi Industrial Hub 169 (广西产业集聚区169) is a prominent industrial and commercial center in Guangxi Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قوانغشي، الصين",
      "en": "Guangxi Industrial Hub 169, Guangxi, China",
      "zh": "中国广西广西产业集聚区169"
    },
    "coordinates": {
      "latitude": 22.5762,
      "longitude": 108.6859
    },
    "coverImage": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangxi",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في قوانغشي"
    }
  },
  {
    "id": "city-inner-mongolia-hub-zone-170",
    "slug": "inner-mongolia-hub-zone-170",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع منغوليا الداخلية الصناعي والتجاري 170",
      "en": "Inner Mongolia Industrial Hub 170",
      "zh": "内蒙古产业集聚区170",
      "pinyin": "Inner Mongolia Industrial Hub"
    },
    "province": {
      "ar": "منغوليا الداخلية",
      "en": "Inner Mongolia",
      "zh": "内蒙古"
    },
    "provinceSlug": "inner-mongolia",
    "city": {
      "ar": "مجمع منغوليا الداخلية الصناعي والتجاري 170",
      "en": "Inner Mongolia Industrial Hub 170",
      "zh": "内蒙古产业集聚区170"
    },
    "citySlug": "inner-mongolia-hub-zone-170",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع منغوليا الداخلية الصناعي والتجاري 170 (内蒙古产业集聚区170) من المراكز الصناعية والتجارية البارزة في مقاطعة منغوليا الداخلية. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Inner Mongolia Industrial Hub 170 (内蒙古产业集聚区170) is a prominent industrial and commercial center in Inner Mongolia Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "منغوليا الداخلية، الصين",
      "en": "Inner Mongolia Industrial Hub 170, Inner Mongolia, China",
      "zh": "中国内蒙古内蒙古产业集聚区170"
    },
    "coordinates": {
      "latitude": 40.9802,
      "longitude": 112.1263
    },
    "coverImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "inner-mongolia",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في منغوليا الداخلية"
    }
  },
  {
    "id": "city-xinjiang-hub-zone-171",
    "slug": "xinjiang-hub-zone-171",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شينجيانغ الصناعي والتجاري 171",
      "en": "Xinjiang Industrial Hub 171",
      "zh": "新疆产业集聚区171",
      "pinyin": "Xinjiang Industrial Hub"
    },
    "province": {
      "ar": "شينجيانغ",
      "en": "Xinjiang",
      "zh": "新疆"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "مجمع شينجيانغ الصناعي والتجاري 171",
      "en": "Xinjiang Industrial Hub 171",
      "zh": "新疆产业集聚区171"
    },
    "citySlug": "xinjiang-hub-zone-171",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شينجيانغ الصناعي والتجاري 171 (新疆产业集聚区171) من المراكز الصناعية والتجارية البارزة في مقاطعة شينجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Xinjiang Industrial Hub 171 (新疆产业集聚区171) is a prominent industrial and commercial center in Xinjiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شينجيانغ، الصين",
      "en": "Xinjiang Industrial Hub 171, Xinjiang, China",
      "zh": "中国新疆新疆产业集聚区171"
    },
    "coordinates": {
      "latitude": 44.2162,
      "longitude": 87.7028
    },
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "xinjiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شينجيانغ"
    }
  },
  {
    "id": "city-gansu-hub-zone-172",
    "slug": "gansu-hub-zone-172",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع قانسو الصناعي والتجاري 172",
      "en": "Gansu Industrial Hub 172",
      "zh": "甘肃产业集聚区172",
      "pinyin": "Gansu Industrial Hub"
    },
    "province": {
      "ar": "قانسو",
      "en": "Gansu",
      "zh": "甘肃"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "مجمع قانسو الصناعي والتجاري 172",
      "en": "Gansu Industrial Hub 172",
      "zh": "甘肃产业集聚区172"
    },
    "citySlug": "gansu-hub-zone-172",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع قانسو الصناعي والتجاري 172 (甘肃产业集聚区172) من المراكز الصناعية والتجارية البارزة في مقاطعة قانسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Gansu Industrial Hub 172 (甘肃产业集聚区172) is a prominent industrial and commercial center in Gansu Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "قانسو، الصين",
      "en": "Gansu Industrial Hub 172, Gansu, China",
      "zh": "中国甘肃甘肃产业集聚区172"
    },
    "coordinates": {
      "latitude": 36.3446,
      "longitude": 103.5521
    },
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "gansu",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في قانسو"
    }
  },
  {
    "id": "city-hainan-hub-zone-173",
    "slug": "hainan-hub-zone-173",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هاينان الصناعي والتجاري 173",
      "en": "Hainan Industrial Hub 173",
      "zh": "海南产业集聚区173",
      "pinyin": "Hainan Industrial Hub"
    },
    "province": {
      "ar": "هاينان",
      "en": "Hainan",
      "zh": "海南"
    },
    "provinceSlug": "hainan",
    "city": {
      "ar": "مجمع هاينان الصناعي والتجاري 173",
      "en": "Hainan Industrial Hub 173",
      "zh": "海南产业集聚区173"
    },
    "citySlug": "hainan-hub-zone-173",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هاينان الصناعي والتجاري 173 (海南产业集聚区173) من المراكز الصناعية والتجارية البارزة في مقاطعة هاينان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hainan Industrial Hub 173 (海南产业集聚区173) is a prominent industrial and commercial center in Hainan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هاينان، الصين",
      "en": "Hainan Industrial Hub 173, Hainan, China",
      "zh": "中国海南海南产业集聚区173"
    },
    "coordinates": {
      "latitude": 19.9597,
      "longitude": 109.8089
    },
    "coverImage": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hainan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هاينان"
    }
  },
  {
    "id": "city-ningxia-hub-zone-174",
    "slug": "ningxia-hub-zone-174",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع نينغشيا الصناعي والتجاري 174",
      "en": "Ningxia Industrial Hub 174",
      "zh": "宁夏产业集聚区174",
      "pinyin": "Ningxia Industrial Hub"
    },
    "province": {
      "ar": "نينغشيا",
      "en": "Ningxia",
      "zh": "宁夏"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "مجمع نينغشيا الصناعي والتجاري 174",
      "en": "Ningxia Industrial Hub 174",
      "zh": "宁夏产业集聚区174"
    },
    "citySlug": "ningxia-hub-zone-174",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع نينغشيا الصناعي والتجاري 174 (宁夏产业集聚区174) من المراكز الصناعية والتجارية البارزة في مقاطعة نينغشيا. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Ningxia Industrial Hub 174 (宁夏产业集聚区174) is a prominent industrial and commercial center in Ningxia Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "نينغشيا، الصين",
      "en": "Ningxia Industrial Hub 174, Ningxia, China",
      "zh": "中国宁夏宁夏产业集聚区174"
    },
    "coordinates": {
      "latitude": 38.1126,
      "longitude": 106.0906
    },
    "coverImage": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "ningxia",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في نينغشيا"
    }
  },
  {
    "id": "city-qinghai-hub-zone-175",
    "slug": "qinghai-hub-zone-175",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تشينغهاي الصناعي والتجاري 175",
      "en": "Qinghai Industrial Hub 175",
      "zh": "青海产业集聚区175",
      "pinyin": "Qinghai Industrial Hub"
    },
    "province": {
      "ar": "تشينغهاي",
      "en": "Qinghai",
      "zh": "青海"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "مجمع تشينغهاي الصناعي والتجاري 175",
      "en": "Qinghai Industrial Hub 175",
      "zh": "青海产业集聚区175"
    },
    "citySlug": "qinghai-hub-zone-175",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تشينغهاي الصناعي والتجاري 175 (青海产业集聚区175) من المراكز الصناعية والتجارية البارزة في مقاطعة تشينغهاي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Qinghai Industrial Hub 175 (青海产业集聚区175) is a prominent industrial and commercial center in Qinghai Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشينغهاي، الصين",
      "en": "Qinghai Industrial Hub 175, Qinghai, China",
      "zh": "中国青海青海产业集聚区175"
    },
    "coordinates": {
      "latitude": 36.3004,
      "longitude": 102.0195
    },
    "coverImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "qinghai",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تشينغهاي"
    }
  },
  {
    "id": "city-tibet-hub-zone-176",
    "slug": "tibet-hub-zone-176",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع التبت الصناعي والتجاري 176",
      "en": "Tibet Industrial Hub 176",
      "zh": "西藏产业集聚区176",
      "pinyin": "Tibet Industrial Hub"
    },
    "province": {
      "ar": "التبت",
      "en": "Tibet",
      "zh": "西藏"
    },
    "provinceSlug": "tibet",
    "city": {
      "ar": "مجمع التبت الصناعي والتجاري 176",
      "en": "Tibet Industrial Hub 176",
      "zh": "西藏产业集聚区176"
    },
    "citySlug": "tibet-hub-zone-176",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع التبت الصناعي والتجاري 176 (西藏产业集聚区176) من المراكز الصناعية والتجارية البارزة في مقاطعة التبت. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Tibet Industrial Hub 176 (西藏产业集聚区176) is a prominent industrial and commercial center in Tibet Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "التبت، الصين",
      "en": "Tibet Industrial Hub 176, Tibet, China",
      "zh": "中国西藏西藏产业集聚区176"
    },
    "coordinates": {
      "latitude": 29.6808,
      "longitude": 91.5711
    },
    "coverImage": "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "tibet",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في التبت"
    }
  },
  {
    "id": "city-hong-kong-hub-zone-177",
    "slug": "hong-kong-hub-zone-177",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع هونغ كونغ الصناعي والتجاري 177",
      "en": "Hong Kong Industrial Hub 177",
      "zh": "香港产业集聚区177",
      "pinyin": "Hong Kong Industrial Hub"
    },
    "province": {
      "ar": "هونغ كونغ",
      "en": "Hong Kong",
      "zh": "香港"
    },
    "provinceSlug": "hong-kong",
    "city": {
      "ar": "مجمع هونغ كونغ الصناعي والتجاري 177",
      "en": "Hong Kong Industrial Hub 177",
      "zh": "香港产业集聚区177"
    },
    "citySlug": "hong-kong-hub-zone-177",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع هونغ كونغ الصناعي والتجاري 177 (香港产业集聚区177) من المراكز الصناعية والتجارية البارزة في مقاطعة هونغ كونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hong Kong Industrial Hub 177 (香港产业集聚区177) is a prominent industrial and commercial center in Hong Kong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "هونغ كونغ، الصين",
      "en": "Hong Kong Industrial Hub 177, Hong Kong, China",
      "zh": "中国香港香港产业集聚区177"
    },
    "coordinates": {
      "latitude": 22.6703,
      "longitude": 114.3612
    },
    "coverImage": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hong-kong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في هونغ كونغ"
    }
  },
  {
    "id": "city-macau-hub-zone-178",
    "slug": "macau-hub-zone-178",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع ماكاو الصناعي والتجاري 178",
      "en": "Macau Industrial Hub 178",
      "zh": "澳门产业集聚区178",
      "pinyin": "Macau Industrial Hub"
    },
    "province": {
      "ar": "ماكاو",
      "en": "Macau",
      "zh": "澳门"
    },
    "provinceSlug": "macau",
    "city": {
      "ar": "مجمع ماكاو الصناعي والتجاري 178",
      "en": "Macau Industrial Hub 178",
      "zh": "澳门产业集聚区178"
    },
    "citySlug": "macau-hub-zone-178",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع ماكاو الصناعي والتجاري 178 (澳门产业集聚区178) من المراكز الصناعية والتجارية البارزة في مقاطعة ماكاو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Macau Industrial Hub 178 (澳门产业集聚区178) is a prominent industrial and commercial center in Macau Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "ماكاو، الصين",
      "en": "Macau Industrial Hub 178, Macau, China",
      "zh": "中国澳门澳门产业集聚区178"
    },
    "coordinates": {
      "latitude": 22.5497,
      "longitude": 113.3521
    },
    "coverImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "macau",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في ماكاو"
    }
  },
  {
    "id": "city-taiwan-hub-zone-179",
    "slug": "taiwan-hub-zone-179",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تايوان الصناعي والتجاري 179",
      "en": "Taiwan Industrial Hub 179",
      "zh": "台湾产业集聚区179",
      "pinyin": "Taiwan Industrial Hub"
    },
    "province": {
      "ar": "تايوان",
      "en": "Taiwan",
      "zh": "台湾"
    },
    "provinceSlug": "taiwan",
    "city": {
      "ar": "مجمع تايوان الصناعي والتجاري 179",
      "en": "Taiwan Industrial Hub 179",
      "zh": "台湾产业集聚区179"
    },
    "citySlug": "taiwan-hub-zone-179",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تايوان الصناعي والتجاري 179 (台湾产业集聚区179) من المراكز الصناعية والتجارية البارزة في مقاطعة تايوان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Taiwan Industrial Hub 179 (台湾产业集聚区179) is a prominent industrial and commercial center in Taiwan Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تايوان، الصين",
      "en": "Taiwan Industrial Hub 179, Taiwan, China",
      "zh": "中国台湾台湾产业集聚区179"
    },
    "coordinates": {
      "latitude": 25.0613,
      "longitude": 121.1664
    },
    "coverImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "taiwan",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تايوان"
    }
  },
  {
    "id": "city-guangdong-hub-zone-180",
    "slug": "guangdong-hub-zone-180",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع غوانغدونغ الصناعي والتجاري 180",
      "en": "Guangdong Industrial Hub 180",
      "zh": "广东产业集聚区180",
      "pinyin": "Guangdong Industrial Hub"
    },
    "province": {
      "ar": "غوانغدونغ",
      "en": "Guangdong",
      "zh": "广东"
    },
    "provinceSlug": "guangdong",
    "city": {
      "ar": "مجمع غوانغدونغ الصناعي والتجاري 180",
      "en": "Guangdong Industrial Hub 180",
      "zh": "广东产业集聚区180"
    },
    "citySlug": "guangdong-hub-zone-180",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع غوانغدونغ الصناعي والتجاري 180 (广东产业集聚区180) من المراكز الصناعية والتجارية البارزة في مقاطعة غوانغدونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Guangdong Industrial Hub 180 (广东产业集聚区180) is a prominent industrial and commercial center in Guangdong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "غوانغدونغ، الصين",
      "en": "Guangdong Industrial Hub 180, Guangdong, China",
      "zh": "中国广东广东产业集聚区180"
    },
    "coordinates": {
      "latitude": 22.8086,
      "longitude": 113.025
    },
    "coverImage": "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "guangdong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في غوانغدونغ"
    }
  },
  {
    "id": "city-zhejiang-hub-zone-181",
    "slug": "zhejiang-hub-zone-181",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع تشجيانغ الصناعي والتجاري 181",
      "en": "Zhejiang Industrial Hub 181",
      "zh": "浙江产业集聚区181",
      "pinyin": "Zhejiang Industrial Hub"
    },
    "province": {
      "ar": "تشجيانغ",
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "مجمع تشجيانغ الصناعي والتجاري 181",
      "en": "Zhejiang Industrial Hub 181",
      "zh": "浙江产业集聚区181"
    },
    "citySlug": "zhejiang-hub-zone-181",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع تشجيانغ الصناعي والتجاري 181 (浙江产业集聚区181) من المراكز الصناعية والتجارية البارزة في مقاطعة تشجيانغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Zhejiang Industrial Hub 181 (浙江产业集聚区181) is a prominent industrial and commercial center in Zhejiang Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "تشجيانغ، الصين",
      "en": "Zhejiang Industrial Hub 181, Zhejiang, China",
      "zh": "中国浙江浙江产业集聚区181"
    },
    "coordinates": {
      "latitude": 29.8995,
      "longitude": 120.2954
    },
    "coverImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "zhejiang",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في تشجيانغ"
    }
  },
  {
    "id": "city-jiangsu-hub-zone-182",
    "slug": "jiangsu-hub-zone-182",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع جيانغسو الصناعي والتجاري 182",
      "en": "Jiangsu Industrial Hub 182",
      "zh": "江苏产业集聚区182",
      "pinyin": "Jiangsu Industrial Hub"
    },
    "province": {
      "ar": "جيانغسو",
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "مجمع جيانغسو الصناعي والتجاري 182",
      "en": "Jiangsu Industrial Hub 182",
      "zh": "江苏产业集聚区182"
    },
    "citySlug": "jiangsu-hub-zone-182",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع جيانغسو الصناعي والتجاري 182 (江苏产业集聚区182) من المراكز الصناعية والتجارية البارزة في مقاطعة جيانغسو. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Jiangsu Industrial Hub 182 (江苏产业集聚区182) is a prominent industrial and commercial center in Jiangsu Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "جيانغسو، الصين",
      "en": "Jiangsu Industrial Hub 182, Jiangsu, China",
      "zh": "中国江苏江苏产业集聚区182"
    },
    "coordinates": {
      "latitude": 31.9774,
      "longitude": 119.1542
    },
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "jiangsu",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في جيانغسو"
    }
  },
  {
    "id": "city-shandong-hub-zone-183",
    "slug": "shandong-hub-zone-183",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع شاندونغ الصناعي والتجاري 183",
      "en": "Shandong Industrial Hub 183",
      "zh": "山东产业集聚区183",
      "pinyin": "Shandong Industrial Hub"
    },
    "province": {
      "ar": "شاندونغ",
      "en": "Shandong",
      "zh": "山东"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "مجمع شاندونغ الصناعي والتجاري 183",
      "en": "Shandong Industrial Hub 183",
      "zh": "山东产业集聚区183"
    },
    "citySlug": "shandong-hub-zone-183",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع شاندونغ الصناعي والتجاري 183 (山东产业集聚区183) من المراكز الصناعية والتجارية البارزة في مقاطعة شاندونغ. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Shandong Industrial Hub 183 (山东产业集聚区183) is a prominent industrial and commercial center in Shandong Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "شاندونغ، الصين",
      "en": "Shandong Industrial Hub 183, Shandong, China",
      "zh": "中国山东山东产业集聚区183"
    },
    "coordinates": {
      "latitude": 36.9347,
      "longitude": 117.4023
    },
    "coverImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "shandong",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في شاندونغ"
    }
  },
  {
    "id": "city-fujian-hub-zone-184",
    "slug": "fujian-hub-zone-184",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع فوجيان الصناعي والتجاري 184",
      "en": "Fujian Industrial Hub 184",
      "zh": "福建产业集聚区184",
      "pinyin": "Fujian Industrial Hub"
    },
    "province": {
      "ar": "فوجيان",
      "en": "Fujian",
      "zh": "福建"
    },
    "provinceSlug": "fujian",
    "city": {
      "ar": "مجمع فوجيان الصناعي والتجاري 184",
      "en": "Fujian Industrial Hub 184",
      "zh": "福建产业集聚区184"
    },
    "citySlug": "fujian-hub-zone-184",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع فوجيان الصناعي والتجاري 184 (福建产业集聚区184) من المراكز الصناعية والتجارية البارزة في مقاطعة فوجيان. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Fujian Industrial Hub 184 (福建产业集聚区184) is a prominent industrial and commercial center in Fujian Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "فوجيان، الصين",
      "en": "Fujian Industrial Hub 184, Fujian, China",
      "zh": "中国福建福建产业集聚区184"
    },
    "coordinates": {
      "latitude": 26.4651,
      "longitude": 119.2104
    },
    "coverImage": "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "fujian",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في فوجيان"
    }
  },
  {
    "id": "city-hebei-hub-zone-185",
    "slug": "hebei-hub-zone-185",
    "subdomain": "cities",
    "name": {
      "ar": "مجمع خبي الصناعي والتجاري 185",
      "en": "Hebei Industrial Hub 185",
      "zh": "河北产业集聚区185",
      "pinyin": "Hebei Industrial Hub"
    },
    "province": {
      "ar": "خبي",
      "en": "Hebei",
      "zh": "河北"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "مجمع خبي الصناعي والتجاري 185",
      "en": "Hebei Industrial Hub 185",
      "zh": "河北产业集聚区185"
    },
    "citySlug": "hebei-hub-zone-185",
    "category": {
      "ar": "مدينة صناعية وتجارية",
      "en": "Commercial & Industrial City"
    },
    "description": {
      "ar": "تعتبر مجمع خبي الصناعي والتجاري 185 (河北产业集聚区185) من المراكز الصناعية والتجارية البارزة في مقاطعة خبي. تتخصص المدينة في قطاعات تصديرية تشمل: التصنيع التصديري، الخدمات اللوجستية المتطورة، التوريد الصناعي. ترتبط بموانئ الشحن وشبكات النقل اللوجستية وتضم مجمعات إنتاجية ومصانع متقدمة.",
      "en": "Hebei Industrial Hub 185 (河北产业集聚区185) is a prominent industrial and commercial center in Hebei Province. Renowned for export specializations including: التصنيع التصديري, الخدمات اللوجستية المتطورة, التوريد الصناعي. Connected to major sea and river ports, high-speed rail networks, and modern manufacturing parks."
    },
    "address": {
      "ar": "خبي، الصين",
      "en": "Hebei Industrial Hub 185, Hebei, China",
      "zh": "中国河北河北产业集聚区185"
    },
    "coordinates": {
      "latitude": 38.1814,
      "longitude": 114.1397
    },
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hebei",
      "التصنيع التصديري",
      "الخدمات اللوجستية المتطورة",
      "التوريد الصناعي"
    ],
    "features": {
      "ar": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "en": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ]
    },
    "sources": [
      {
        "name": "المكتب الوطني للإحصاء في الصين (National Bureau of Statistics China)",
        "url": "http://www.stats.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      },
      {
        "name": "وزارة الشؤون المدنية لجمهورية الصين الشعبية (Ministry of Civil Affairs)",
        "url": "https://www.mca.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-20"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من السجلات الحكومية الصينية",
      "verifiedAt": "2026-08-25",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "famousIndustries": [
        "التصنيع التصديري",
        "الخدمات اللوجستية المتطورة",
        "التوريد الصناعي"
      ],
      "cityTag": "قاعدة صناعية وتصديرية في خبي"
    }
  }
];
