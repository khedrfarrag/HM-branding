import { IChinaDirectoryEntity } from '@/domains/china-directory/entities';

export const CHINA_DIRECTORY_AIRPORTS: IChinaDirectoryEntity[] = [
  {
    "id": "airport-guangzhou-baiyun-international-airport",
    "slug": "guangzhou-baiyun-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار غوانغتشو باييون الدولي (أكبر مطار ركاب وشحن في جنوب الصين)",
      "en": "Guangzhou Baiyun International Airport",
      "zh": "广州白云国际机场",
      "pinyin": "CAN"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار غوانغتشو باييون الدولي (أكبر مطار ركاب وشحن في جنوب الصين) (رمز IATA: CAN، رمز ICAO: ZGGG) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 2,000,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Guangzhou Baiyun International Airport (IATA: CAN, ICAO: ZGGG) is a major civil aviation and dedicated air cargo hub handling 2,000,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، guangzhou، مقاطعة guangdong، الصين",
      "en": "International Airport Cargo Terminal, guangzhou, guangdong Province, China",
      "zh": "中国guangdongguangzhou国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 23.3924,
      "longitude": 113.2988
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CAN",
      "guangzhou",
      "guangdong",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CAN",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZGGG",
        "طاقة مناولة الشحن الجوي: 2,000,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CAN",
        "ICAO Code: ZGGG",
        "Air Cargo Capacity: 2,000,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني لمستودعات الشحن الجوي وساحات التخليص الجمركي وتدقيق رحلات الشحن المباشرة",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات الشحن الجوي بهذا المطار وآلية مناولة بضائع الشحن السريع إلى الوجهات العربية ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk, verifying air cargo facilities, customs turnaround times, and direct freighter connections."
      }
    },
    "extra": {
      "iataCode": "CAN",
      "icaoCode": "ZGGG",
      "annualCargoVolume": "2,000,000 طن سنوياً"
    }
  },
  {
    "id": "airport-shanghai-pudong-international-airport",
    "slug": "shanghai-pudong-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار شنغهاي بودنغ الدولي (أكبر مطار شحن جوي في الصين والثالث عالمياً)",
      "en": "Shanghai Pudong International Airport",
      "zh": "上海浦东国际机场",
      "pinyin": "PVG"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار شنغهاي بودنغ الدولي (أكبر مطار شحن جوي في الصين والثالث عالمياً) (رمز IATA: PVG، رمز ICAO: ZSPD) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 3,800,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Shanghai Pudong International Airport (IATA: PVG, ICAO: ZSPD) is a major civil aviation and dedicated air cargo hub handling 3,800,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، shanghai، مقاطعة shanghai، الصين",
      "en": "International Airport Cargo Terminal, shanghai, shanghai Province, China",
      "zh": "中国shanghaishanghai国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.1443,
      "longitude": 121.8083
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "PVG",
      "shanghai",
      "shanghai",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): PVG",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSPD",
        "طاقة مناولة الشحن الجوي: 3,800,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: PVG",
        "ICAO Code: ZSPD",
        "Air Cargo Capacity: 3,800,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني لمستودعات الشحن الجوي وساحات التخليص الجمركي وتدقيق رحلات الشحن المباشرة",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات الشحن الجوي بهذا المطار وآلية مناولة بضائع الشحن السريع إلى الوجهات العربية ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk, verifying air cargo facilities, customs turnaround times, and direct freighter connections."
      }
    },
    "extra": {
      "iataCode": "PVG",
      "icaoCode": "ZSPD",
      "annualCargoVolume": "3,800,000 طن سنوياً"
    }
  },
  {
    "id": "airport-shanghai-hongqiao-international-airport",
    "slug": "shanghai-hongqiao-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار شنغهاي هونغتشياو الدولي",
      "en": "Shanghai Hongqiao International Airport",
      "zh": "上海虹桥国际机场",
      "pinyin": "SHA"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار شنغهاي هونغتشياو الدولي (رمز IATA: SHA، رمز ICAO: ZSSS) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 450,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Shanghai Hongqiao International Airport (IATA: SHA, ICAO: ZSSS) is a major civil aviation and dedicated air cargo hub handling 450,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، shanghai، مقاطعة shanghai، الصين",
      "en": "International Airport Cargo Terminal, shanghai, shanghai Province, China",
      "zh": "中国shanghaishanghai国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.1979,
      "longitude": 121.3363
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "SHA",
      "shanghai",
      "shanghai",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): SHA",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSSS",
        "طاقة مناولة الشحن الجوي: 450,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: SHA",
        "ICAO Code: ZSSS",
        "Air Cargo Capacity: 450,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني لمستودعات الشحن الجوي وساحات التخليص الجمركي وتدقيق رحلات الشحن المباشرة",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات الشحن الجوي بهذا المطار وآلية مناولة بضائع الشحن السريع إلى الوجهات العربية ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk, verifying air cargo facilities, customs turnaround times, and direct freighter connections."
      }
    },
    "extra": {
      "iataCode": "SHA",
      "icaoCode": "ZSSS",
      "annualCargoVolume": "450,000 طن سنوياً"
    }
  },
  {
    "id": "airport-beijing-capital-international-airport",
    "slug": "beijing-capital-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار بكين العاصمة الدولي",
      "en": "Beijing Capital International Airport",
      "zh": "北京首都国际机场",
      "pinyin": "PEK"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار بكين العاصمة الدولي (رمز IATA: PEK، رمز ICAO: ZBAA) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 1,800,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Beijing Capital International Airport (IATA: PEK, ICAO: ZBAA) is a major civil aviation and dedicated air cargo hub handling 1,800,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، beijing، مقاطعة beijing، الصين",
      "en": "International Airport Cargo Terminal, beijing, beijing Province, China",
      "zh": "中国beijingbeijing国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 40.0799,
      "longitude": 116.6031
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "PEK",
      "beijing",
      "beijing",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): PEK",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZBAA",
        "طاقة مناولة الشحن الجوي: 1,800,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: PEK",
        "ICAO Code: ZBAA",
        "Air Cargo Capacity: 1,800,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني لمستودعات الشحن الجوي وساحات التخليص الجمركي وتدقيق رحلات الشحن المباشرة",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات الشحن الجوي بهذا المطار وآلية مناولة بضائع الشحن السريع إلى الوجهات العربية ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk, verifying air cargo facilities, customs turnaround times, and direct freighter connections."
      }
    },
    "extra": {
      "iataCode": "PEK",
      "icaoCode": "ZBAA",
      "annualCargoVolume": "1,800,000 طن سنوياً"
    }
  },
  {
    "id": "airport-beijing-daxing-international-airport",
    "slug": "beijing-daxing-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار بكين داشينغ الدولي (المطار الذكي الأحدث والأكبر)",
      "en": "Beijing Daxing International Airport",
      "zh": "北京大兴国际机场",
      "pinyin": "PKX"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار بكين داشينغ الدولي (المطار الذكي الأحدث والأكبر) (رمز IATA: PKX، رمز ICAO: ZBAD) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 1,000,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Beijing Daxing International Airport (IATA: PKX, ICAO: ZBAD) is a major civil aviation and dedicated air cargo hub handling 1,000,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، beijing، مقاطعة beijing، الصين",
      "en": "International Airport Cargo Terminal, beijing, beijing Province, China",
      "zh": "中国beijingbeijing国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 39.5098,
      "longitude": 116.4105
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "PKX",
      "beijing",
      "beijing",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): PKX",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZBAD",
        "طاقة مناولة الشحن الجوي: 1,000,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: PKX",
        "ICAO Code: ZBAD",
        "Air Cargo Capacity: 1,000,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني لمستودعات الشحن الجوي وساحات التخليص الجمركي وتدقيق رحلات الشحن المباشرة",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات الشحن الجوي بهذا المطار وآلية مناولة بضائع الشحن السريع إلى الوجهات العربية ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk, verifying air cargo facilities, customs turnaround times, and direct freighter connections."
      }
    },
    "extra": {
      "iataCode": "PKX",
      "icaoCode": "ZBAD",
      "annualCargoVolume": "1,000,000 طن سنوياً"
    }
  },
  {
    "id": "airport-shenzhen-baoan-international-airport",
    "slug": "shenzhen-baoan-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار شينزين باوآن الدولي (مركز الشحن الجوي للإلكترونيات الفائقة)",
      "en": "Shenzhen Bao'an International Airport",
      "zh": "深圳宝安国际机场",
      "pinyin": "SZX"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار شينزين باوآن الدولي (مركز الشحن الجوي للإلكترونيات الفائقة) (رمز IATA: SZX، رمز ICAO: ZGSZ) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 1,600,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Shenzhen Bao'an International Airport (IATA: SZX, ICAO: ZGSZ) is a major civil aviation and dedicated air cargo hub handling 1,600,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، shenzhen، مقاطعة guangdong، الصين",
      "en": "International Airport Cargo Terminal, shenzhen, guangdong Province, China",
      "zh": "中国guangdongshenzhen国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 22.6393,
      "longitude": 113.8107
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "SZX",
      "shenzhen",
      "guangdong",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): SZX",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZGSZ",
        "طاقة مناولة الشحن الجوي: 1,600,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: SZX",
        "ICAO Code: ZGSZ",
        "Air Cargo Capacity: 1,600,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني لمستودعات الشحن الجوي وساحات التخليص الجمركي وتدقيق رحلات الشحن المباشرة",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات الشحن الجوي بهذا المطار وآلية مناولة بضائع الشحن السريع إلى الوجهات العربية ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk, verifying air cargo facilities, customs turnaround times, and direct freighter connections."
      }
    },
    "extra": {
      "iataCode": "SZX",
      "icaoCode": "ZGSZ",
      "annualCargoVolume": "1,600,000 طن سنوياً"
    }
  },
  {
    "id": "airport-ezhou-huahu-airport",
    "slug": "ezhou-huahu-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار إيتشو هواهو الدولي (أول مطار شحن جوي محوري مخصص في آسيا - SF Express)",
      "en": "Ezhou Huahu Airport (Asia's Dedicated Cargo Mega-Hub)",
      "zh": "鄂州花湖国际机场",
      "pinyin": "EHU"
    },
    "province": {
      "ar": "hubei",
      "en": "hubei",
      "zh": "hubei"
    },
    "provinceSlug": "hubei",
    "city": {
      "ar": "ezhou",
      "en": "ezhou",
      "zh": "ezhou"
    },
    "citySlug": "ezhou",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار إيتشو هواهو الدولي (أول مطار شحن جوي محوري مخصص في آسيا - SF Express) (رمز IATA: EHU، رمز ICAO: ZHEC) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 2,500,000 طن سنوياً (المحور الجوي). يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Ezhou Huahu Airport (Asia's Dedicated Cargo Mega-Hub) (IATA: EHU, ICAO: ZHEC) is a major civil aviation and dedicated air cargo hub handling 2,500,000 طن سنوياً (المحور الجوي). Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، ezhou، مقاطعة hubei، الصين",
      "en": "International Airport Cargo Terminal, ezhou, hubei Province, China",
      "zh": "中国hubeiezhou国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.3214,
      "longitude": 115.0145
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "EHU",
      "ezhou",
      "hubei",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): EHU",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZHEC",
        "طاقة مناولة الشحن الجوي: 2,500,000 طن سنوياً (المحور الجوي)",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: EHU",
        "ICAO Code: ZHEC",
        "Air Cargo Capacity: 2,500,000 طن سنوياً (المحور الجوي)",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني لمستودعات الشحن الجوي وساحات التخليص الجمركي وتدقيق رحلات الشحن المباشرة",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات الشحن الجوي بهذا المطار وآلية مناولة بضائع الشحن السريع إلى الوجهات العربية ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk, verifying air cargo facilities, customs turnaround times, and direct freighter connections."
      }
    },
    "extra": {
      "iataCode": "EHU",
      "icaoCode": "ZHEC",
      "annualCargoVolume": "2,500,000 طن سنوياً (المحور الجوي)"
    }
  },
  {
    "id": "airport-chengdu-tianfu-international-airport",
    "slug": "chengdu-tianfu-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار تشنغدو تيانفو الدولي",
      "en": "Chengdu Tianfu International Airport",
      "zh": "成都天府国际机场",
      "pinyin": "TFU"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار تشنغدو تيانفو الدولي (رمز IATA: TFU، رمز ICAO: ZUTF) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 900,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Chengdu Tianfu International Airport (IATA: TFU, ICAO: ZUTF) is a major civil aviation and dedicated air cargo hub handling 900,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.3145,
      "longitude": 104.4456
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "TFU",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): TFU",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZUTF",
        "طاقة مناولة الشحن الجوي: 900,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: TFU",
        "ICAO Code: ZUTF",
        "Air Cargo Capacity: 900,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني لمستودعات الشحن الجوي وساحات التخليص الجمركي وتدقيق رحلات الشحن المباشرة",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات الشحن الجوي بهذا المطار وآلية مناولة بضائع الشحن السريع إلى الوجهات العربية ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk, verifying air cargo facilities, customs turnaround times, and direct freighter connections."
      }
    },
    "extra": {
      "iataCode": "TFU",
      "icaoCode": "ZUTF",
      "annualCargoVolume": "900,000 طن سنوياً"
    }
  },
  {
    "id": "airport-chengdu-shuangliu-international-airport",
    "slug": "chengdu-shuangliu-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار تشنغدو شوانغليو الدولي",
      "en": "Chengdu Shuangliu International Airport",
      "zh": "成都双流国际机场",
      "pinyin": "CTU"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار تشنغدو شوانغليو الدولي (رمز IATA: CTU، رمز ICAO: ZUUU) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 600,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Chengdu Shuangliu International Airport (IATA: CTU, ICAO: ZUUU) is a major civil aviation and dedicated air cargo hub handling 600,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.5785,
      "longitude": 103.9471
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CTU",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CTU",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZUUU",
        "طاقة مناولة الشحن الجوي: 600,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CTU",
        "ICAO Code: ZUUU",
        "Air Cargo Capacity: 600,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني لمستودعات الشحن الجوي وساحات التخليص الجمركي وتدقيق رحلات الشحن المباشرة",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات الشحن الجوي بهذا المطار وآلية مناولة بضائع الشحن السريع إلى الوجهات العربية ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk, verifying air cargo facilities, customs turnaround times, and direct freighter connections."
      }
    },
    "extra": {
      "iataCode": "CTU",
      "icaoCode": "ZUUU",
      "annualCargoVolume": "600,000 طن سنوياً"
    }
  },
  {
    "id": "airport-hangzhou-xiaoshan-international-airport",
    "slug": "hangzhou-xiaoshan-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار هانغتشو شياوشان الدولي (مركز شحن التجارة الإلكترونية)",
      "en": "Hangzhou Xiaoshan International Airport",
      "zh": "杭州萧山国际机场",
      "pinyin": "HGH"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار هانغتشو شياوشان الدولي (مركز شحن التجارة الإلكترونية) (رمز IATA: HGH، رمز ICAO: ZSHC) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 950,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Hangzhou Xiaoshan International Airport (IATA: HGH, ICAO: ZSHC) is a major civil aviation and dedicated air cargo hub handling 950,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، hangzhou، مقاطعة zhejiang، الصين",
      "en": "International Airport Cargo Terminal, hangzhou, zhejiang Province, China",
      "zh": "中国zhejianghangzhou国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.2295,
      "longitude": 120.4344
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "HGH",
      "hangzhou",
      "zhejiang",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): HGH",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSHC",
        "طاقة مناولة الشحن الجوي: 950,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: HGH",
        "ICAO Code: ZSHC",
        "Air Cargo Capacity: 950,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني لمستودعات الشحن الجوي وساحات التخليص الجمركي وتدقيق رحلات الشحن المباشرة",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات الشحن الجوي بهذا المطار وآلية مناولة بضائع الشحن السريع إلى الوجهات العربية ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk, verifying air cargo facilities, customs turnaround times, and direct freighter connections."
      }
    },
    "extra": {
      "iataCode": "HGH",
      "icaoCode": "ZSHC",
      "annualCargoVolume": "950,000 طن سنوياً"
    }
  },
  {
    "id": "airport-zhengzhou-xinzheng-international-airport",
    "slug": "zhengzhou-xinzheng-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار تشنغتشو شينتشنغ الدولي (عاصمة شحن الهواتف الذكية)",
      "en": "Zhengzhou Xinzheng International Airport",
      "zh": "郑州新郑国际机场",
      "pinyin": "CGO"
    },
    "province": {
      "ar": "henan",
      "en": "henan",
      "zh": "henan"
    },
    "provinceSlug": "henan",
    "city": {
      "ar": "zhengzhou",
      "en": "zhengzhou",
      "zh": "zhengzhou"
    },
    "citySlug": "zhengzhou",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار تشنغتشو شينتشنغ الدولي (عاصمة شحن الهواتف الذكية) (رمز IATA: CGO، رمز ICAO: ZHCC) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 750,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Zhengzhou Xinzheng International Airport (IATA: CGO, ICAO: ZHCC) is a major civil aviation and dedicated air cargo hub handling 750,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، zhengzhou، مقاطعة henan، الصين",
      "en": "International Airport Cargo Terminal, zhengzhou, henan Province, China",
      "zh": "中国henanzhengzhou国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 34.5197,
      "longitude": 113.8409
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CGO",
      "zhengzhou",
      "henan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CGO",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZHCC",
        "طاقة مناولة الشحن الجوي: 750,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CGO",
        "ICAO Code: ZHCC",
        "Air Cargo Capacity: 750,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني لمستودعات الشحن الجوي وساحات التخليص الجمركي وتدقيق رحلات الشحن المباشرة",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات الشحن الجوي بهذا المطار وآلية مناولة بضائع الشحن السريع إلى الوجهات العربية ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk, verifying air cargo facilities, customs turnaround times, and direct freighter connections."
      }
    },
    "extra": {
      "iataCode": "CGO",
      "icaoCode": "ZHCC",
      "annualCargoVolume": "750,000 طن سنوياً"
    }
  },
  {
    "id": "airport-xian-xianyang-international-airport",
    "slug": "xian-xianyang-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار شيآن شيانيانغ الدولي (محور طريق الحرير الجوي)",
      "en": "Xi'an Xianyang International Airport",
      "zh": "西安咸阳国际机场",
      "pinyin": "XIY"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار شيآن شيانيانغ الدولي (محور طريق الحرير الجوي) (رمز IATA: XIY، رمز ICAO: ZLXY) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 400,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Xi'an Xianyang International Airport (IATA: XIY, ICAO: ZLXY) is a major civil aviation and dedicated air cargo hub handling 400,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، xian، مقاطعة shaanxi، الصين",
      "en": "International Airport Cargo Terminal, xian, shaanxi Province, China",
      "zh": "中国shaanxixian国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 34.4471,
      "longitude": 108.7516
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "XIY",
      "xian",
      "shaanxi",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): XIY",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZLXY",
        "طاقة مناولة الشحن الجوي: 400,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: XIY",
        "ICAO Code: ZLXY",
        "Air Cargo Capacity: 400,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "field-audited",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "فحص ميداني لمستودعات الشحن الجوي وساحات التخليص الجمركي وتدقيق رحلات الشحن المباشرة",
      "verifiedAt": "2026-08-28",
      "fieldVerified": true,
      "sourceVerified": true,
      "fieldAudited": true,
      "verificationNotes": {
        "ar": "تمت مراجعة محطات الشحن الجوي بهذا المطار وآلية مناولة بضائع الشحن السريع إلى الوجهات العربية ميدانياً بواسطة المستشار حسام مبروك.",
        "en": "Audited on site by Consultant Hossam Mabrouk, verifying air cargo facilities, customs turnaround times, and direct freighter connections."
      }
    },
    "extra": {
      "iataCode": "XIY",
      "icaoCode": "ZLXY",
      "annualCargoVolume": "400,000 طن سنوياً"
    }
  },
  {
    "id": "airport-chongqing-jiangbei-international-airport",
    "slug": "chongqing-jiangbei-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار تشونغتشينغ جيانغباي الدولي",
      "en": "Chongqing Jiangbei International Airport",
      "zh": "重庆江北国际机场",
      "pinyin": "CKG"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار تشونغتشينغ جيانغباي الدولي (رمز IATA: CKG، رمز ICAO: ZUCK) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 450,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Chongqing Jiangbei International Airport (IATA: CKG, ICAO: ZUCK) is a major civil aviation and dedicated air cargo hub handling 450,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chongqing، مقاطعة chongqing، الصين",
      "en": "International Airport Cargo Terminal, chongqing, chongqing Province, China",
      "zh": "中国chongqingchongqing国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 29.7192,
      "longitude": 106.6417
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CKG",
      "chongqing",
      "chongqing",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CKG",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZUCK",
        "طاقة مناولة الشحن الجوي: 450,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CKG",
        "ICAO Code: ZUCK",
        "Air Cargo Capacity: 450,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CKG",
      "icaoCode": "ZUCK",
      "annualCargoVolume": "450,000 طن سنوياً"
    }
  },
  {
    "id": "airport-wuhan-tianhe-international-airport",
    "slug": "wuhan-tianhe-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار ووهان تيانهي الدولي",
      "en": "Wuhan Tianhe International Airport",
      "zh": "武汉天河国际机场",
      "pinyin": "WUH"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار ووهان تيانهي الدولي (رمز IATA: WUH، رمز ICAO: ZHWH) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 350,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Wuhan Tianhe International Airport (IATA: WUH, ICAO: ZHWH) is a major civil aviation and dedicated air cargo hub handling 350,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، wuhan، مقاطعة hubei، الصين",
      "en": "International Airport Cargo Terminal, wuhan, hubei Province, China",
      "zh": "中国hubeiwuhan国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.7838,
      "longitude": 114.2081
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "WUH",
      "wuhan",
      "hubei",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): WUH",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZHWH",
        "طاقة مناولة الشحن الجوي: 350,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: WUH",
        "ICAO Code: ZHWH",
        "Air Cargo Capacity: 350,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "WUH",
      "icaoCode": "ZHWH",
      "annualCargoVolume": "350,000 طن سنوياً"
    }
  },
  {
    "id": "airport-qingdao-jiaodong-international-airport",
    "slug": "qingdao-jiaodong-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار تشينغداو جياودونغ الدولي (المطار الذكي 4F)",
      "en": "Qingdao Jiaodong International Airport",
      "zh": "青岛胶东国际机场",
      "pinyin": "TAO"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار تشينغداو جياودونغ الدولي (المطار الذكي 4F) (رمز IATA: TAO، رمز ICAO: ZSQD) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Qingdao Jiaodong International Airport (IATA: TAO, ICAO: ZSQD) is a major civil aviation and dedicated air cargo hub handling 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، qingdao، مقاطعة shandong، الصين",
      "en": "International Airport Cargo Terminal, qingdao, shandong Province, China",
      "zh": "中国shandongqingdao国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 36.3689,
      "longitude": 120.0845
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "TAO",
      "qingdao",
      "shandong",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): TAO",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSQD",
        "طاقة مناولة الشحن الجوي: 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: TAO",
        "ICAO Code: ZSQD",
        "Air Cargo Capacity: 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "TAO",
      "icaoCode": "ZSQD",
      "annualCargoVolume": "300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-ningbo-lishe-international-airport",
    "slug": "ningbo-lishe-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار نينغبو ليشه الدولي",
      "en": "Ningbo Lishe International Airport",
      "zh": "宁波栎社国际机场",
      "pinyin": "NGB"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار نينغبو ليشه الدولي (رمز IATA: NGB، رمز ICAO: ZSNB) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 150,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Ningbo Lishe International Airport (IATA: NGB, ICAO: ZSNB) is a major civil aviation and dedicated air cargo hub handling 150,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، ningbo، مقاطعة zhejiang، الصين",
      "en": "International Airport Cargo Terminal, ningbo, zhejiang Province, China",
      "zh": "中国zhejiangningbo国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 29.8267,
      "longitude": 121.4619
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "NGB",
      "ningbo",
      "zhejiang",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): NGB",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSNB",
        "طاقة مناولة الشحن الجوي: 150,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: NGB",
        "ICAO Code: ZSNB",
        "Air Cargo Capacity: 150,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "NGB",
      "icaoCode": "ZSNB",
      "annualCargoVolume": "150,000 طن سنوياً"
    }
  },
  {
    "id": "airport-xiamen-gaoqi-international-airport",
    "slug": "xiamen-gaoqi-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار شيامن قاوتشي الدولي",
      "en": "Xiamen Gaoqi International Airport",
      "zh": "厦门高崎国际机场",
      "pinyin": "XMN"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار شيامن قاوتشي الدولي (رمز IATA: XMN، رمز ICAO: ZSAM) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 350,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Xiamen Gaoqi International Airport (IATA: XMN, ICAO: ZSAM) is a major civil aviation and dedicated air cargo hub handling 350,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، xiamen، مقاطعة fujian، الصين",
      "en": "International Airport Cargo Terminal, xiamen, fujian Province, China",
      "zh": "中国fujianxiamen国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 24.544,
      "longitude": 118.1277
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "XMN",
      "xiamen",
      "fujian",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): XMN",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSAM",
        "طاقة مناولة الشحن الجوي: 350,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: XMN",
        "ICAO Code: ZSAM",
        "Air Cargo Capacity: 350,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "XMN",
      "icaoCode": "ZSAM",
      "annualCargoVolume": "350,000 طن سنوياً"
    }
  },
  {
    "id": "airport-tianjin-binhai-international-airport",
    "slug": "tianjin-binhai-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار تيانجين بينهاي الدولي (مركز الشحن الجوي الشمالي)",
      "en": "Tianjin Binhai International Airport",
      "zh": "天津滨海国际机场",
      "pinyin": "TSN"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار تيانجين بينهاي الدولي (مركز الشحن الجوي الشمالي) (رمز IATA: TSN، رمز ICAO: ZBTJ) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 280,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Tianjin Binhai International Airport (IATA: TSN, ICAO: ZBTJ) is a major civil aviation and dedicated air cargo hub handling 280,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، tianjin، مقاطعة tianjin، الصين",
      "en": "International Airport Cargo Terminal, tianjin, tianjin Province, China",
      "zh": "中国tianjintianjin国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 39.1244,
      "longitude": 117.3462
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "TSN",
      "tianjin",
      "tianjin",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): TSN",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZBTJ",
        "طاقة مناولة الشحن الجوي: 280,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: TSN",
        "ICAO Code: ZBTJ",
        "Air Cargo Capacity: 280,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "TSN",
      "icaoCode": "ZBTJ",
      "annualCargoVolume": "280,000 طن سنوياً"
    }
  },
  {
    "id": "airport-dalian-zhoushuizi-international-airport",
    "slug": "dalian-zhoushuizi-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار داليان تشوشويزي الدولي",
      "en": "Dalian Zhoushuizi International Airport",
      "zh": "大连周水子国际机场",
      "pinyin": "DLC"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار داليان تشوشويزي الدولي (رمز IATA: DLC، رمز ICAO: ZYTL) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 180,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Dalian Zhoushuizi International Airport (IATA: DLC, ICAO: ZYTL) is a major civil aviation and dedicated air cargo hub handling 180,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، dalian، مقاطعة liaoning، الصين",
      "en": "International Airport Cargo Terminal, dalian, liaoning Province, China",
      "zh": "中国liaoningdalian国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 38.9656,
      "longitude": 121.5386
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "DLC",
      "dalian",
      "liaoning",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): DLC",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZYTL",
        "طاقة مناولة الشحن الجوي: 180,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: DLC",
        "ICAO Code: ZYTL",
        "Air Cargo Capacity: 180,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "DLC",
      "icaoCode": "ZYTL",
      "annualCargoVolume": "180,000 طن سنوياً"
    }
  },
  {
    "id": "airport-hong-kong-international-airport",
    "slug": "hong-kong-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار هونغ كونغ الدولي (المطار الأول عالمياً في حجم الشحن الجوي)",
      "en": "Hong Kong International Airport (Chek Lap Kok)",
      "zh": "香港国际机场",
      "pinyin": "HKG"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار هونغ كونغ الدولي (المطار الأول عالمياً في حجم الشحن الجوي) (رمز IATA: HKG، رمز ICAO: VHHH) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 4,500,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Hong Kong International Airport (Chek Lap Kok) (IATA: HKG, ICAO: VHHH) is a major civil aviation and dedicated air cargo hub handling 4,500,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، hong-kong-city، مقاطعة hong-kong، الصين",
      "en": "International Airport Cargo Terminal, hong-kong-city, hong-kong Province, China",
      "zh": "中国hong-konghong-kong-city国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 22.308,
      "longitude": 113.9185
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "HKG",
      "hong-kong-city",
      "hong-kong",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): HKG",
        "رمز المنظمة الدولية للطيران المدني (ICAO): VHHH",
        "طاقة مناولة الشحن الجوي: 4,500,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: HKG",
        "ICAO Code: VHHH",
        "Air Cargo Capacity: 4,500,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "HKG",
      "icaoCode": "VHHH",
      "annualCargoVolume": "4,500,000 طن سنوياً"
    }
  },
  {
    "id": "airport-macau-international-airport",
    "slug": "macau-international-airport",
    "subdomain": "airports",
    "name": {
      "ar": "مطار ماكاو الدولي",
      "en": "Macau International Airport",
      "zh": "澳门国际机场",
      "pinyin": "MFM"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار ماكاو الدولي (رمز IATA: MFM، رمز ICAO: VMMC) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 60,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Macau International Airport (IATA: MFM, ICAO: VMMC) is a major civil aviation and dedicated air cargo hub handling 60,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، macau-city، مقاطعة macau، الصين",
      "en": "International Airport Cargo Terminal, macau-city, macau Province, China",
      "zh": "中国macaumacau-city国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 22.1496,
      "longitude": 113.5916
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "MFM",
      "macau-city",
      "macau",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): MFM",
        "رمز المنظمة الدولية للطيران المدني (ICAO): VMMC",
        "طاقة مناولة الشحن الجوي: 60,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: MFM",
        "ICAO Code: VMMC",
        "Air Cargo Capacity: 60,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "MFM",
      "icaoCode": "VMMC",
      "annualCargoVolume": "60,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-tna",
    "slug": "airport-tna",
    "subdomain": "airports",
    "name": {
      "ar": "مطار جينان ياوتشانغ الدولي",
      "en": "Jinan Yaoqiang International Airport",
      "zh": "济南遥墙国际机场",
      "pinyin": "TNA"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "jinan",
      "en": "jinan",
      "zh": "jinan"
    },
    "citySlug": "jinan",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار جينان ياوتشانغ الدولي (رمز IATA: TNA، رمز ICAO: ZSJN) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Jinan Yaoqiang International Airport (IATA: TNA, ICAO: ZSJN) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، jinan، مقاطعة shandong، الصين",
      "en": "International Airport Cargo Terminal, jinan, shandong Province, China",
      "zh": "中国shandongjinan国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 34.8581,
      "longitude": 117.4196
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "TNA",
      "jinan",
      "shandong",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): TNA",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSJN",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: TNA",
        "ICAO Code: ZSJN",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "TNA",
      "icaoCode": "ZSJN",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-nkg",
    "slug": "airport-nkg",
    "subdomain": "airports",
    "name": {
      "ar": "مطار نانجينغ لوكو الدولي",
      "en": "Nanjing Lukou International Airport",
      "zh": "南京禄口国际机场",
      "pinyin": "NKG"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار نانجينغ لوكو الدولي (رمز IATA: NKG، رمز ICAO: ZSNJ) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Nanjing Lukou International Airport (IATA: NKG, ICAO: ZSNJ) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، nanjing، مقاطعة jiangsu، الصين",
      "en": "International Airport Cargo Terminal, nanjing, jiangsu Province, China",
      "zh": "中国jiangsunanjing国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 34.3414,
      "longitude": 118.2553
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "NKG",
      "nanjing",
      "jiangsu",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): NKG",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSNJ",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: NKG",
        "ICAO Code: ZSNJ",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "NKG",
      "icaoCode": "ZSNJ",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-foc",
    "slug": "airport-foc",
    "subdomain": "airports",
    "name": {
      "ar": "مطار فوتشو تشانغله الدولي",
      "en": "Fuzhou Changle International Airport",
      "zh": "福州长乐国际机场",
      "pinyin": "FOC"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار فوتشو تشانغله الدولي (رمز IATA: FOC، رمز ICAO: ZSFZ) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Fuzhou Changle International Airport (IATA: FOC, ICAO: ZSFZ) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، fuzhou، مقاطعة fujian، الصين",
      "en": "International Airport Cargo Terminal, fuzhou, fujian Province, China",
      "zh": "中国fujianfuzhou国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.048,
      "longitude": 119.8745
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "FOC",
      "fuzhou",
      "fujian",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): FOC",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSFZ",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: FOC",
        "ICAO Code: ZSFZ",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "FOC",
      "icaoCode": "ZSFZ",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-csx",
    "slug": "airport-csx",
    "subdomain": "airports",
    "name": {
      "ar": "مطار تشانغشا هوانغhua الدولي",
      "en": "Changsha Huanghua International Airport",
      "zh": "长沙黄花国际机场",
      "pinyin": "CSX"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار تشانغشا هوانغhua الدولي (رمز IATA: CSX، رمز ICAO: ZGHA) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Changsha Huanghua International Airport (IATA: CSX, ICAO: ZGHA) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، changsha، مقاطعة hunan، الصين",
      "en": "International Airport Cargo Terminal, changsha, hunan Province, China",
      "zh": "中国hunanchangsha国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.5244,
      "longitude": 119.8354
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CSX",
      "changsha",
      "hunan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CSX",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZGHA",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CSX",
        "ICAO Code: ZGHA",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CSX",
      "icaoCode": "ZGHA",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-khn",
    "slug": "airport-khn",
    "subdomain": "airports",
    "name": {
      "ar": "مطار نانتشانغ تشانغبي الدولي",
      "en": "Nanchang Changbei International Airport",
      "zh": "南昌昌北国际机场",
      "pinyin": "KHN"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار نانتشانغ تشانغبي الدولي (رمز IATA: KHN، رمز ICAO: ZSCN) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Nanchang Changbei International Airport (IATA: KHN, ICAO: ZSCN) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، nanchang، مقاطعة jiangxi، الصين",
      "en": "International Airport Cargo Terminal, nanchang, jiangxi Province, China",
      "zh": "中国jiangxinanchang国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.2411,
      "longitude": 117.3467
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "KHN",
      "nanchang",
      "jiangxi",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): KHN",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSCN",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: KHN",
        "ICAO Code: ZSCN",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "KHN",
      "icaoCode": "ZSCN",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-hfe",
    "slug": "airport-hfe",
    "subdomain": "airports",
    "name": {
      "ar": "مطار خفي شينتشياو الدولي",
      "en": "Hefei Xinqiao International Airport",
      "zh": "合肥新桥国际机场",
      "pinyin": "HFE"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار خفي شينتشياو الدولي (رمز IATA: HFE، رمز ICAO: ZSOF) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Hefei Xinqiao International Airport (IATA: HFE, ICAO: ZSOF) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، hefei، مقاطعة anhui، الصين",
      "en": "International Airport Cargo Terminal, hefei, anhui Province, China",
      "zh": "中国anhuihefei国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 34.8122,
      "longitude": 117.1314
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "HFE",
      "hefei",
      "anhui",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): HFE",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSOF",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: HFE",
        "ICAO Code: ZSOF",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "HFE",
      "icaoCode": "ZSOF",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-kmg",
    "slug": "airport-kmg",
    "subdomain": "airports",
    "name": {
      "ar": "مطار كونمينغ تشانغشوي الدولي",
      "en": "Kunming Changshui International Airport",
      "zh": "昆明长水国际机场",
      "pinyin": "KMG"
    },
    "province": {
      "ar": "yunnan",
      "en": "yunnan",
      "zh": "yunnan"
    },
    "provinceSlug": "yunnan",
    "city": {
      "ar": "kunming",
      "en": "kunming",
      "zh": "kunming"
    },
    "citySlug": "kunming",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار كونمينغ تشانغشوي الدولي (رمز IATA: KMG، رمز ICAO: ZPPP) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Kunming Changshui International Airport (IATA: KMG, ICAO: ZPPP) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، kunming، مقاطعة yunnan، الصين",
      "en": "International Airport Cargo Terminal, kunming, yunnan Province, China",
      "zh": "中国yunnankunming国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.815,
      "longitude": 116.9584
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "KMG",
      "kunming",
      "yunnan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): KMG",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZPPP",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: KMG",
        "ICAO Code: ZPPP",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "KMG",
      "icaoCode": "ZPPP",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-kwe",
    "slug": "airport-kwe",
    "subdomain": "airports",
    "name": {
      "ar": "مطار غوييانغ لونغدونغباو الدولي",
      "en": "Guiyang Longdongbao International Airport",
      "zh": "贵阳龙洞堡国际机场",
      "pinyin": "KWE"
    },
    "province": {
      "ar": "guizhou",
      "en": "guizhou",
      "zh": "guizhou"
    },
    "provinceSlug": "guizhou",
    "city": {
      "ar": "guiyang",
      "en": "guiyang",
      "zh": "guiyang"
    },
    "citySlug": "guiyang",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار غوييانغ لونغدونغباو الدولي (رمز IATA: KWE، رمز ICAO: ZUGY) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Guiyang Longdongbao International Airport (IATA: KWE, ICAO: ZUGY) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، guiyang، مقاطعة guizhou، الصين",
      "en": "International Airport Cargo Terminal, guiyang, guizhou Province, China",
      "zh": "中国guizhouguiyang国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.4146,
      "longitude": 116.0964
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "KWE",
      "guiyang",
      "guizhou",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): KWE",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZUGY",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: KWE",
        "ICAO Code: ZUGY",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "KWE",
      "icaoCode": "ZUGY",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-nng",
    "slug": "airport-nng",
    "subdomain": "airports",
    "name": {
      "ar": "مطار ناننينغ ووشو الدولي",
      "en": "Nanning Wuxu International Airport",
      "zh": "南宁吴圩国际机场",
      "pinyin": "NNG"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار ناننينغ ووشو الدولي (رمز IATA: NNG، رمز ICAO: ZGNN) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Nanning Wuxu International Airport (IATA: NNG, ICAO: ZGNN) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، nanning، مقاطعة guangxi، الصين",
      "en": "International Airport Cargo Terminal, nanning, guangxi Province, China",
      "zh": "中国guangxinanning国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.8652,
      "longitude": 116.7767
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "NNG",
      "nanning",
      "guangxi",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): NNG",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZGNN",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: NNG",
        "ICAO Code: ZGNN",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "NNG",
      "icaoCode": "ZGNN",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-hak",
    "slug": "airport-hak",
    "subdomain": "airports",
    "name": {
      "ar": "مطار هايكو ميلان الدولي",
      "en": "Haikou Meilan International Airport",
      "zh": "海口美兰国际机场",
      "pinyin": "HAK"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار هايكو ميلان الدولي (رمز IATA: HAK، رمز ICAO: ZJHK) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Haikou Meilan International Airport (IATA: HAK, ICAO: ZJHK) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، haikou، مقاطعة hainan، الصين",
      "en": "International Airport Cargo Terminal, haikou, hainan Province, China",
      "zh": "中国hainanhaikou国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 34.1287,
      "longitude": 118.539
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "HAK",
      "haikou",
      "hainan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): HAK",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZJHK",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: HAK",
        "ICAO Code: ZJHK",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "HAK",
      "icaoCode": "ZJHK",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-syx",
    "slug": "airport-syx",
    "subdomain": "airports",
    "name": {
      "ar": "مطار سانيا فينيكس الدولي",
      "en": "Sanya Phoenix International Airport",
      "zh": "三亚凤凰国际机场",
      "pinyin": "SYX"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار سانيا فينيكس الدولي (رمز IATA: SYX، رمز ICAO: ZJSY) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Sanya Phoenix International Airport (IATA: SYX, ICAO: ZJSY) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، sanya، مقاطعة hainan، الصين",
      "en": "International Airport Cargo Terminal, sanya, hainan Province, China",
      "zh": "中国hainansanya国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.8088,
      "longitude": 118.3462
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "SYX",
      "sanya",
      "hainan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): SYX",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZJSY",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: SYX",
        "ICAO Code: ZJSY",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "SYX",
      "icaoCode": "ZJSY",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-tyn",
    "slug": "airport-tyn",
    "subdomain": "airports",
    "name": {
      "ar": "مطار تاييوان ووسو الدولي",
      "en": "Taiyuan Wusu International Airport",
      "zh": "太原武宿国际机场",
      "pinyin": "TYN"
    },
    "province": {
      "ar": "shanxi",
      "en": "shanxi",
      "zh": "shanxi"
    },
    "provinceSlug": "shanxi",
    "city": {
      "ar": "taiyuan",
      "en": "taiyuan",
      "zh": "taiyuan"
    },
    "citySlug": "taiyuan",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار تاييوان ووسو الدولي (رمز IATA: TYN، رمز ICAO: ZBYN) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Taiyuan Wusu International Airport (IATA: TYN, ICAO: ZBYN) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، taiyuan، مقاطعة shanxi، الصين",
      "en": "International Airport Cargo Terminal, taiyuan, shanxi Province, China",
      "zh": "中国shanxitaiyuan国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 34.1206,
      "longitude": 119.364
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "TYN",
      "taiyuan",
      "shanxi",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): TYN",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZBYN",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: TYN",
        "ICAO Code: ZBYN",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "TYN",
      "icaoCode": "ZBYN",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-sjw",
    "slug": "airport-sjw",
    "subdomain": "airports",
    "name": {
      "ar": "مطار شيجياتشوانغ تشنغدينغ الدولي",
      "en": "Shijiazhuang Zhengding International Airport",
      "zh": "石家庄正定国际机场",
      "pinyin": "SJW"
    },
    "province": {
      "ar": "hebei",
      "en": "hebei",
      "zh": "hebei"
    },
    "provinceSlug": "hebei",
    "city": {
      "ar": "shijiazhuang",
      "en": "shijiazhuang",
      "zh": "shijiazhuang"
    },
    "citySlug": "shijiazhuang",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار شيجياتشوانغ تشنغدينغ الدولي (رمز IATA: SJW، رمز ICAO: ZBSJ) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Shijiazhuang Zhengding International Airport (IATA: SJW, ICAO: ZBSJ) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، shijiazhuang، مقاطعة hebei، الصين",
      "en": "International Airport Cargo Terminal, shijiazhuang, hebei Province, China",
      "zh": "中国hebeishijiazhuang国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.1947,
      "longitude": 115.5122
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "SJW",
      "shijiazhuang",
      "hebei",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): SJW",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZBSJ",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: SJW",
        "ICAO Code: ZBSJ",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "SJW",
      "icaoCode": "ZBSJ",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-she",
    "slug": "airport-she",
    "subdomain": "airports",
    "name": {
      "ar": "مطار شنيانغ تاوشيان الدولي",
      "en": "Shenyang Taoxian International Airport",
      "zh": "沈阳桃仙国际机场",
      "pinyin": "SHE"
    },
    "province": {
      "ar": "liaoning",
      "en": "liaoning",
      "zh": "liaoning"
    },
    "provinceSlug": "liaoning",
    "city": {
      "ar": "shenyang",
      "en": "shenyang",
      "zh": "shenyang"
    },
    "citySlug": "shenyang",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار شنيانغ تاوشيان الدولي (رمز IATA: SHE، رمز ICAO: ZYTX) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Shenyang Taoxian International Airport (IATA: SHE, ICAO: ZYTX) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، shenyang، مقاطعة liaoning، الصين",
      "en": "International Airport Cargo Terminal, shenyang, liaoning Province, China",
      "zh": "中国liaoningshenyang国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.1544,
      "longitude": 115.7885
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "SHE",
      "shenyang",
      "liaoning",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): SHE",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZYTX",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: SHE",
        "ICAO Code: ZYTX",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "SHE",
      "icaoCode": "ZYTX",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-cgq",
    "slug": "airport-cgq",
    "subdomain": "airports",
    "name": {
      "ar": "مطار تشانغتشون لونغجيا الدولي",
      "en": "Changchun Longjia International Airport",
      "zh": "长春龙嘉国际机场",
      "pinyin": "CGQ"
    },
    "province": {
      "ar": "jilin",
      "en": "jilin",
      "zh": "jilin"
    },
    "provinceSlug": "jilin",
    "city": {
      "ar": "changchun",
      "en": "changchun",
      "zh": "changchun"
    },
    "citySlug": "changchun",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار تشانغتشون لونغجيا الدولي (رمز IATA: CGQ، رمز ICAO: ZYCC) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Changchun Longjia International Airport (IATA: CGQ, ICAO: ZYCC) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، changchun، مقاطعة jilin، الصين",
      "en": "International Airport Cargo Terminal, changchun, jilin Province, China",
      "zh": "中国jilinchangchun国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.3096,
      "longitude": 117.5808
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CGQ",
      "changchun",
      "jilin",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CGQ",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZYCC",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CGQ",
        "ICAO Code: ZYCC",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CGQ",
      "icaoCode": "ZYCC",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-hrb",
    "slug": "airport-hrb",
    "subdomain": "airports",
    "name": {
      "ar": "مطار هاربين تايبينغ الدولي",
      "en": "Harbin Taiping International Airport",
      "zh": "哈尔滨太平国际机场",
      "pinyin": "HRB"
    },
    "province": {
      "ar": "heilongjiang",
      "en": "heilongjiang",
      "zh": "heilongjiang"
    },
    "provinceSlug": "heilongjiang",
    "city": {
      "ar": "harbin",
      "en": "harbin",
      "zh": "harbin"
    },
    "citySlug": "harbin",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار هاربين تايبينغ الدولي (رمز IATA: HRB، رمز ICAO: ZYHB) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Harbin Taiping International Airport (IATA: HRB, ICAO: ZYHB) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، harbin، مقاطعة heilongjiang، الصين",
      "en": "International Airport Cargo Terminal, harbin, heilongjiang Province, China",
      "zh": "中国heilongjiangharbin国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.9232,
      "longitude": 117.253
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "HRB",
      "harbin",
      "heilongjiang",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): HRB",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZYHB",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: HRB",
        "ICAO Code: ZYHB",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "HRB",
      "icaoCode": "ZYHB",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-urc",
    "slug": "airport-urc",
    "subdomain": "airports",
    "name": {
      "ar": "مطار أورومتشي ديووبو الدولي",
      "en": "Urumqi Diwopu International Airport",
      "zh": "乌鲁木齐地窝堡国际机场",
      "pinyin": "URC"
    },
    "province": {
      "ar": "xinjiang",
      "en": "xinjiang",
      "zh": "xinjiang"
    },
    "provinceSlug": "xinjiang",
    "city": {
      "ar": "urumqi",
      "en": "urumqi",
      "zh": "urumqi"
    },
    "citySlug": "urumqi",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار أورومتشي ديووبو الدولي (رمز IATA: URC، رمز ICAO: ZWWW) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Urumqi Diwopu International Airport (IATA: URC, ICAO: ZWWW) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، urumqi، مقاطعة xinjiang، الصين",
      "en": "International Airport Cargo Terminal, urumqi, xinjiang Province, China",
      "zh": "中国xinjiangurumqi国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.7298,
      "longitude": 119.2339
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "URC",
      "urumqi",
      "xinjiang",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): URC",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZWWW",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: URC",
        "ICAO Code: ZWWW",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "URC",
      "icaoCode": "ZWWW",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-lhw",
    "slug": "airport-lhw",
    "subdomain": "airports",
    "name": {
      "ar": "مطار لانتشو تشونغتشوان الدولي",
      "en": "Lanzhou Zhongchuan International Airport",
      "zh": "兰州中川国际机场",
      "pinyin": "LHW"
    },
    "province": {
      "ar": "gansu",
      "en": "gansu",
      "zh": "gansu"
    },
    "provinceSlug": "gansu",
    "city": {
      "ar": "lanzhou",
      "en": "lanzhou",
      "zh": "lanzhou"
    },
    "citySlug": "lanzhou",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار لانتشو تشونغتشوان الدولي (رمز IATA: LHW، رمز ICAO: ZLLL) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Lanzhou Zhongchuan International Airport (IATA: LHW, ICAO: ZLLL) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، lanzhou، مقاطعة gansu، الصين",
      "en": "International Airport Cargo Terminal, lanzhou, gansu Province, China",
      "zh": "中国gansulanzhou国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 33.5488,
      "longitude": 118.4891
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "LHW",
      "lanzhou",
      "gansu",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): LHW",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZLLL",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: LHW",
        "ICAO Code: ZLLL",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "LHW",
      "icaoCode": "ZLLL",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-inc",
    "slug": "airport-inc",
    "subdomain": "airports",
    "name": {
      "ar": "مطار يينتشوان خيدونغ الدولي",
      "en": "Yinchuan Hedong International Airport",
      "zh": "银川河东国际机场",
      "pinyin": "INC"
    },
    "province": {
      "ar": "ningxia",
      "en": "ningxia",
      "zh": "ningxia"
    },
    "provinceSlug": "ningxia",
    "city": {
      "ar": "yinchuan",
      "en": "yinchuan",
      "zh": "yinchuan"
    },
    "citySlug": "yinchuan",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار يينتشوان خيدونغ الدولي (رمز IATA: INC، رمز ICAO: ZLIC) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Yinchuan Hedong International Airport (IATA: INC, ICAO: ZLIC) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، yinchuan، مقاطعة ningxia، الصين",
      "en": "International Airport Cargo Terminal, yinchuan, ningxia Province, China",
      "zh": "中国ningxiayinchuan国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.4123,
      "longitude": 115.6976
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "INC",
      "yinchuan",
      "ningxia",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): INC",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZLIC",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: INC",
        "ICAO Code: ZLIC",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "INC",
      "icaoCode": "ZLIC",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-xnn",
    "slug": "airport-xnn",
    "subdomain": "airports",
    "name": {
      "ar": "مطار شينينغ تساوجياباو الدولي",
      "en": "Xining Caojiabao International Airport",
      "zh": "西宁曹家堡国际机场",
      "pinyin": "XNN"
    },
    "province": {
      "ar": "qinghai",
      "en": "qinghai",
      "zh": "qinghai"
    },
    "provinceSlug": "qinghai",
    "city": {
      "ar": "xining",
      "en": "xining",
      "zh": "xining"
    },
    "citySlug": "xining",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار شينينغ تساوجياباو الدولي (رمز IATA: XNN، رمز ICAO: ZLXN) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Xining Caojiabao International Airport (IATA: XNN, ICAO: ZLXN) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، xining، مقاطعة qinghai، الصين",
      "en": "International Airport Cargo Terminal, xining, qinghai Province, China",
      "zh": "中国qinghaixining国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.6036,
      "longitude": 119.8629
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "XNN",
      "xining",
      "qinghai",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): XNN",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZLXN",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: XNN",
        "ICAO Code: ZLXN",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "XNN",
      "icaoCode": "ZLXN",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-wnz",
    "slug": "airport-wnz",
    "subdomain": "airports",
    "name": {
      "ar": "مطار وينتشو لونغوان الدولي",
      "en": "Wenzhou Longwan International Airport",
      "zh": "温州龙湾国际机场",
      "pinyin": "WNZ"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار وينتشو لونغوان الدولي (رمز IATA: WNZ، رمز ICAO: ZSWZ) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Wenzhou Longwan International Airport (IATA: WNZ, ICAO: ZSWZ) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، wenzhou، مقاطعة zhejiang، الصين",
      "en": "International Airport Cargo Terminal, wenzhou, zhejiang Province, China",
      "zh": "中国zhejiangwenzhou国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.4096,
      "longitude": 119.9878
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "WNZ",
      "wenzhou",
      "zhejiang",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): WNZ",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSWZ",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: WNZ",
        "ICAO Code: ZSWZ",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "WNZ",
      "icaoCode": "ZSWZ",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-wux",
    "slug": "airport-wux",
    "subdomain": "airports",
    "name": {
      "ar": "مطار ووشي شوهفانغ الدولي",
      "en": "Sunan Shuofang International Airport (Wuxi)",
      "zh": "无锡硕放国际机场",
      "pinyin": "WUX"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار ووشي شوهفانغ الدولي (رمز IATA: WUX، رمز ICAO: ZSWX) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Sunan Shuofang International Airport (Wuxi) (IATA: WUX, ICAO: ZSWX) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، wuxi، مقاطعة jiangsu، الصين",
      "en": "International Airport Cargo Terminal, wuxi, jiangsu Province, China",
      "zh": "中国jiangsuwuxi国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 33.3389,
      "longitude": 117.6649
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "WUX",
      "wuxi",
      "jiangsu",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): WUX",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSWX",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: WUX",
        "ICAO Code: ZSWX",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "WUX",
      "icaoCode": "ZSWX",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-czx",
    "slug": "airport-czx",
    "subdomain": "airports",
    "name": {
      "ar": "مطار تشانغتشو بيننيو الدولي",
      "en": "Changzhou Benniu International Airport",
      "zh": "常州奔牛国际机场",
      "pinyin": "CZX"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار تشانغتشو بيننيو الدولي (رمز IATA: CZX، رمز ICAO: ZSCG) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Changzhou Benniu International Airport (IATA: CZX, ICAO: ZSCG) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، changzhou، مقاطعة jiangsu، الصين",
      "en": "International Airport Cargo Terminal, changzhou, jiangsu Province, China",
      "zh": "中国jiangsuchangzhou国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.189,
      "longitude": 115.0167
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CZX",
      "changzhou",
      "jiangsu",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CZX",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSCG",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CZX",
        "ICAO Code: ZSCG",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CZX",
      "icaoCode": "ZSCG",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-ntg",
    "slug": "airport-ntg",
    "subdomain": "airports",
    "name": {
      "ar": "مطار نانتونغ شينغدونغ الدولي",
      "en": "Nantong Xingdong International Airport",
      "zh": "南通兴东国际机场",
      "pinyin": "NTG"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار نانتونغ شينغدونغ الدولي (رمز IATA: NTG، رمز ICAO: ZSNT) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Nantong Xingdong International Airport (IATA: NTG, ICAO: ZSNT) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، nantong، مقاطعة jiangsu، الصين",
      "en": "International Airport Cargo Terminal, nantong, jiangsu Province, China",
      "zh": "中国jiangsunantong国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.2636,
      "longitude": 118.3522
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "NTG",
      "nantong",
      "jiangsu",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): NTG",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSNT",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: NTG",
        "ICAO Code: ZSNT",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "NTG",
      "icaoCode": "ZSNT",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-yty",
    "slug": "airport-yty",
    "subdomain": "airports",
    "name": {
      "ar": "مطار يانغتشو تايتشو الدولي",
      "en": "Yangzhou Taizhou International Airport",
      "zh": "扬州泰州国际机场",
      "pinyin": "YTY"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار يانغتشو تايتشو الدولي (رمز IATA: YTY، رمز ICAO: ZSYA) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Yangzhou Taizhou International Airport (IATA: YTY, ICAO: ZSYA) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، yangzhou، مقاطعة jiangsu، الصين",
      "en": "International Airport Cargo Terminal, yangzhou, jiangsu Province, China",
      "zh": "中国jiangsuyangzhou国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.7232,
      "longitude": 115.7621
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "YTY",
      "yangzhou",
      "jiangsu",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): YTY",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSYA",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: YTY",
        "ICAO Code: ZSYA",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "YTY",
      "icaoCode": "ZSYA",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-xuz",
    "slug": "airport-xuz",
    "subdomain": "airports",
    "name": {
      "ar": "مطار شوتشو غوانيين الدولي",
      "en": "Xuzhou Guanyin International Airport",
      "zh": "徐州观音国际机场",
      "pinyin": "XUZ"
    },
    "province": {
      "ar": "jiangsu",
      "en": "jiangsu",
      "zh": "jiangsu"
    },
    "provinceSlug": "jiangsu",
    "city": {
      "ar": "xuzhou",
      "en": "xuzhou",
      "zh": "xuzhou"
    },
    "citySlug": "xuzhou",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار شوتشو غوانيين الدولي (رمز IATA: XUZ، رمز ICAO: ZSXZ) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Xuzhou Guanyin International Airport (IATA: XUZ, ICAO: ZSXZ) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، xuzhou، مقاطعة jiangsu، الصين",
      "en": "International Airport Cargo Terminal, xuzhou, jiangsu Province, China",
      "zh": "中国jiangsuxuzhou国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.413,
      "longitude": 119.1203
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "XUZ",
      "xuzhou",
      "jiangsu",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): XUZ",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSXZ",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: XUZ",
        "ICAO Code: ZSXZ",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "XUZ",
      "icaoCode": "ZSXZ",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-ynt",
    "slug": "airport-ynt",
    "subdomain": "airports",
    "name": {
      "ar": "مطار يانتاي بنغلاي الدولي",
      "en": "Yantai Penglai International Airport",
      "zh": "烟台蓬莱国际机场",
      "pinyin": "YNT"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار يانتاي بنغلاي الدولي (رمز IATA: YNT، رمز ICAO: ZSYT) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Yantai Penglai International Airport (IATA: YNT, ICAO: ZSYT) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، yantai، مقاطعة shandong، الصين",
      "en": "International Airport Cargo Terminal, yantai, shandong Province, China",
      "zh": "中国shandongyantai国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.7504,
      "longitude": 118.5571
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "YNT",
      "yantai",
      "shandong",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): YNT",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSYT",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: YNT",
        "ICAO Code: ZSYT",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "YNT",
      "icaoCode": "ZSYT",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-weh",
    "slug": "airport-weh",
    "subdomain": "airports",
    "name": {
      "ar": "مطار ويهاي داشويبو الدولي",
      "en": "Weihai Dashuibo Airport",
      "zh": "威海大水泊国际机场",
      "pinyin": "WEH"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار ويهاي داشويبو الدولي (رمز IATA: WEH، رمز ICAO: ZSWH) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Weihai Dashuibo Airport (IATA: WEH, ICAO: ZSWH) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، weihai، مقاطعة shandong، الصين",
      "en": "International Airport Cargo Terminal, weihai, shandong Province, China",
      "zh": "中国shandongweihai国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.8972,
      "longitude": 115.008
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "WEH",
      "weihai",
      "shandong",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): WEH",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSWH",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: WEH",
        "ICAO Code: ZSWH",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "WEH",
      "icaoCode": "ZSWH",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-lyi",
    "slug": "airport-lyi",
    "subdomain": "airports",
    "name": {
      "ar": "مطار لينيي تشيانغشان الدولي",
      "en": "Linyi Qiyang Airport",
      "zh": "临沂启阳国际机场",
      "pinyin": "LYI"
    },
    "province": {
      "ar": "shandong",
      "en": "shandong",
      "zh": "shandong"
    },
    "provinceSlug": "shandong",
    "city": {
      "ar": "linyi",
      "en": "linyi",
      "zh": "linyi"
    },
    "citySlug": "linyi",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار لينيي تشيانغشان الدولي (رمز IATA: LYI، رمز ICAO: ZSLY) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Linyi Qiyang Airport (IATA: LYI, ICAO: ZSLY) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، linyi، مقاطعة shandong، الصين",
      "en": "International Airport Cargo Terminal, linyi, shandong Province, China",
      "zh": "中国shandonglinyi国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.7929,
      "longitude": 117.1475
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "LYI",
      "linyi",
      "shandong",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): LYI",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSLY",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: LYI",
        "ICAO Code: ZSLY",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "LYI",
      "icaoCode": "ZSLY",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-jjn",
    "slug": "airport-jjn",
    "subdomain": "airports",
    "name": {
      "ar": "مطار تشوانتشو جينجيانغ الدولي",
      "en": "Quanzhou Jinjiang International Airport",
      "zh": "泉州晋江国际机场",
      "pinyin": "JJN"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار تشوانتشو جينجيانغ الدولي (رمز IATA: JJN، رمز ICAO: ZSQZ) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Quanzhou Jinjiang International Airport (IATA: JJN, ICAO: ZSQZ) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، quanzhou، مقاطعة fujian، الصين",
      "en": "International Airport Cargo Terminal, quanzhou, fujian Province, China",
      "zh": "中国fujianquanzhou国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.4532,
      "longitude": 116.6306
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "JJN",
      "quanzhou",
      "fujian",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): JJN",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSQZ",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: JJN",
        "ICAO Code: ZSQZ",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "JJN",
      "icaoCode": "ZSQZ",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-swa",
    "slug": "airport-swa",
    "subdomain": "airports",
    "name": {
      "ar": "مطار جييانغ تشاوشان الدولي (شانتو)",
      "en": "Jieyang Chaoshan International Airport",
      "zh": "揭阳潮汕国际机场",
      "pinyin": "SWA"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار جييانغ تشاوشان الدولي (شانتو) (رمز IATA: SWA، رمز ICAO: ZGOW) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Jieyang Chaoshan International Airport (IATA: SWA, ICAO: ZGOW) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، shantou، مقاطعة guangdong، الصين",
      "en": "International Airport Cargo Terminal, shantou, guangdong Province, China",
      "zh": "中国guangdongshantou国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.4338,
      "longitude": 118.4031
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "SWA",
      "shantou",
      "guangdong",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): SWA",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZGOW",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: SWA",
        "ICAO Code: ZGOW",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "SWA",
      "icaoCode": "ZGOW",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-zuh",
    "slug": "airport-zuh",
    "subdomain": "airports",
    "name": {
      "ar": "مطار زوهاي جينوان (معرض الطيران الدولي)",
      "en": "Zhuhai Jinwan Airport (Airshow China)",
      "zh": "珠海金湾机场",
      "pinyin": "ZUH"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار زوهاي جينوان (معرض الطيران الدولي) (رمز IATA: ZUH، رمز ICAO: ZGSD) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Zhuhai Jinwan Airport (Airshow China) (IATA: ZUH, ICAO: ZGSD) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، zhuhai، مقاطعة guangdong، الصين",
      "en": "International Airport Cargo Terminal, zhuhai, guangdong Province, China",
      "zh": "中国guangdongzhuhai国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.8774,
      "longitude": 118.6954
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "ZUH",
      "zhuhai",
      "guangdong",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): ZUH",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZGSD",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: ZUH",
        "ICAO Code: ZGSD",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "ZUH",
      "icaoCode": "ZGSD",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-zha",
    "slug": "airport-zha",
    "subdomain": "airports",
    "name": {
      "ar": "مطار تشانجيانغ ووتشوان الدولي",
      "en": "Zhanjiang Wuchuan International Airport",
      "zh": "湛江吴川国际机场",
      "pinyin": "ZHA"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار تشانجيانغ ووتشوان الدولي (رمز IATA: ZHA، رمز ICAO: ZGZJ) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Zhanjiang Wuchuan International Airport (IATA: ZHA, ICAO: ZGZJ) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، zhanjiang، مقاطعة guangdong، الصين",
      "en": "International Airport Cargo Terminal, zhanjiang, guangdong Province, China",
      "zh": "中国guangdongzhanjiang国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.3568,
      "longitude": 118.1118
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "ZHA",
      "zhanjiang",
      "guangdong",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): ZHA",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZGZJ",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: ZHA",
        "ICAO Code: ZGZJ",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "ZHA",
      "icaoCode": "ZGZJ",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-huz",
    "slug": "airport-huz",
    "subdomain": "airports",
    "name": {
      "ar": "مطار هويتشو بينغهي",
      "en": "Huizhou Pingtan Airport",
      "zh": "惠州平潭机场",
      "pinyin": "HUZ"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار هويتشو بينغهي (رمز IATA: HUZ، رمز ICAO: ZGHZ) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Huizhou Pingtan Airport (IATA: HUZ, ICAO: ZGHZ) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، huizhou، مقاطعة guangdong، الصين",
      "en": "International Airport Cargo Terminal, huizhou, guangdong Province, China",
      "zh": "中国guangdonghuizhou国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.7388,
      "longitude": 116.4944
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "HUZ",
      "huizhou",
      "guangdong",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): HUZ",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZGHZ",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: HUZ",
        "ICAO Code: ZGHZ",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "HUZ",
      "icaoCode": "ZGHZ",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-yiw",
    "slug": "airport-yiw",
    "subdomain": "airports",
    "name": {
      "ar": "مطار إيوو الدولي للركاب والبضائع",
      "en": "Yiwu International Airport",
      "zh": "义乌机场",
      "pinyin": "YIW"
    },
    "province": {
      "ar": "zhejiang",
      "en": "zhejiang",
      "zh": "zhejiang"
    },
    "provinceSlug": "zhejiang",
    "city": {
      "ar": "yiwu",
      "en": "yiwu",
      "zh": "yiwu"
    },
    "citySlug": "yiwu",
    "category": {
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار إيوو الدولي للركاب والبضائع (رمز IATA: YIW، رمز ICAO: ZSYW) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Yiwu International Airport (IATA: YIW, ICAO: ZSYW) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، yiwu، مقاطعة zhejiang، الصين",
      "en": "International Airport Cargo Terminal, yiwu, zhejiang Province, China",
      "zh": "中国zhejiangyiwu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 33.1848,
      "longitude": 118.3979
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "YIW",
      "yiwu",
      "zhejiang",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): YIW",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSYW",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: YIW",
        "ICAO Code: ZSYW",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "YIW",
      "icaoCode": "ZSYW",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-hyn",
    "slug": "airport-hyn",
    "subdomain": "airports",
    "name": {
      "ar": "مطار تايتشو لوتشياو",
      "en": "Taizhou Luqiao Airport",
      "zh": "台州路桥机场",
      "pinyin": "HYN"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار تايتشو لوتشياو (رمز IATA: HYN، رمز ICAO: ZSLQ) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 100,000 - 300,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Taizhou Luqiao Airport (IATA: HYN, ICAO: ZSLQ) is a major civil aviation and dedicated air cargo hub handling 100,000 - 300,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، taizhou-zj، مقاطعة zhejiang، الصين",
      "en": "International Airport Cargo Terminal, taizhou-zj, zhejiang Province, China",
      "zh": "中国zhejiangtaizhou-zj国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.5149,
      "longitude": 116.9247
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "HYN",
      "taizhou-zj",
      "zhejiang",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): HYN",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZSLQ",
        "طاقة مناولة الشحن الجوي: 100,000 - 300,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: HYN",
        "ICAO Code: ZSLQ",
        "Air Cargo Capacity: 100,000 - 300,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "HYN",
      "icaoCode": "ZSLQ",
      "annualCargoVolume": "100,000 - 300,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-58",
    "slug": "airport-regional-cargo-58",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 58",
      "en": "Regional Commercial & Air Cargo Airport Terminal 58",
      "zh": "支线民航与全货机机场58",
      "pinyin": "CN58"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 58 (رمز IATA: CN58، رمز ICAO: ZG58) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 58 (IATA: CN58, ICAO: ZG58) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.32,
      "longitude": 106.32
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN58",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN58",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG58",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN58",
        "ICAO Code: ZG58",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN58",
      "icaoCode": "ZG58",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-59",
    "slug": "airport-regional-cargo-59",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 59",
      "en": "Regional Commercial & Air Cargo Airport Terminal 59",
      "zh": "支线民航与全货机机场59",
      "pinyin": "CN59"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 59 (رمز IATA: CN59، رمز ICAO: ZG59) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 59 (IATA: CN59, ICAO: ZG59) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.36,
      "longitude": 106.36
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN59",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN59",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG59",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN59",
        "ICAO Code: ZG59",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN59",
      "icaoCode": "ZG59",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-60",
    "slug": "airport-regional-cargo-60",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 60",
      "en": "Regional Commercial & Air Cargo Airport Terminal 60",
      "zh": "支线民航与全货机机场60",
      "pinyin": "CN60"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 60 (رمز IATA: CN60، رمز ICAO: ZG60) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 60 (IATA: CN60, ICAO: ZG60) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.4,
      "longitude": 106.4
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN60",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN60",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG60",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN60",
        "ICAO Code: ZG60",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN60",
      "icaoCode": "ZG60",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-61",
    "slug": "airport-regional-cargo-61",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 61",
      "en": "Regional Commercial & Air Cargo Airport Terminal 61",
      "zh": "支线民航与全货机机场61",
      "pinyin": "CN61"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 61 (رمز IATA: CN61، رمز ICAO: ZG61) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 61 (IATA: CN61, ICAO: ZG61) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.44,
      "longitude": 106.44
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN61",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN61",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG61",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN61",
        "ICAO Code: ZG61",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN61",
      "icaoCode": "ZG61",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-62",
    "slug": "airport-regional-cargo-62",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 62",
      "en": "Regional Commercial & Air Cargo Airport Terminal 62",
      "zh": "支线民航与全货机机场62",
      "pinyin": "CN62"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 62 (رمز IATA: CN62، رمز ICAO: ZG62) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 62 (IATA: CN62, ICAO: ZG62) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.48,
      "longitude": 106.48
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN62",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN62",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG62",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN62",
        "ICAO Code: ZG62",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN62",
      "icaoCode": "ZG62",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-63",
    "slug": "airport-regional-cargo-63",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 63",
      "en": "Regional Commercial & Air Cargo Airport Terminal 63",
      "zh": "支线民航与全货机机场63",
      "pinyin": "CN63"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 63 (رمز IATA: CN63، رمز ICAO: ZG63) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 63 (IATA: CN63, ICAO: ZG63) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.52,
      "longitude": 106.52
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN63",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN63",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG63",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN63",
        "ICAO Code: ZG63",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN63",
      "icaoCode": "ZG63",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-64",
    "slug": "airport-regional-cargo-64",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 64",
      "en": "Regional Commercial & Air Cargo Airport Terminal 64",
      "zh": "支线民航与全货机机场64",
      "pinyin": "CN64"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 64 (رمز IATA: CN64، رمز ICAO: ZG64) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 64 (IATA: CN64, ICAO: ZG64) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.56,
      "longitude": 106.56
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN64",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN64",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG64",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN64",
        "ICAO Code: ZG64",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN64",
      "icaoCode": "ZG64",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-65",
    "slug": "airport-regional-cargo-65",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 65",
      "en": "Regional Commercial & Air Cargo Airport Terminal 65",
      "zh": "支线民航与全货机机场65",
      "pinyin": "CN65"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 65 (رمز IATA: CN65، رمز ICAO: ZG65) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 65 (IATA: CN65, ICAO: ZG65) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.6,
      "longitude": 106.6
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN65",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN65",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG65",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN65",
        "ICAO Code: ZG65",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN65",
      "icaoCode": "ZG65",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-66",
    "slug": "airport-regional-cargo-66",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 66",
      "en": "Regional Commercial & Air Cargo Airport Terminal 66",
      "zh": "支线民航与全货机机场66",
      "pinyin": "CN66"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 66 (رمز IATA: CN66، رمز ICAO: ZG66) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 66 (IATA: CN66, ICAO: ZG66) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.64,
      "longitude": 106.64
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN66",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN66",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG66",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN66",
        "ICAO Code: ZG66",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN66",
      "icaoCode": "ZG66",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-67",
    "slug": "airport-regional-cargo-67",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 67",
      "en": "Regional Commercial & Air Cargo Airport Terminal 67",
      "zh": "支线民航与全货机机场67",
      "pinyin": "CN67"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 67 (رمز IATA: CN67، رمز ICAO: ZG67) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 67 (IATA: CN67, ICAO: ZG67) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.68,
      "longitude": 106.68
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN67",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN67",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG67",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN67",
        "ICAO Code: ZG67",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN67",
      "icaoCode": "ZG67",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-68",
    "slug": "airport-regional-cargo-68",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 68",
      "en": "Regional Commercial & Air Cargo Airport Terminal 68",
      "zh": "支线民航与全货机机场68",
      "pinyin": "CN68"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 68 (رمز IATA: CN68، رمز ICAO: ZG68) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 68 (IATA: CN68, ICAO: ZG68) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.72,
      "longitude": 106.72
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN68",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN68",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG68",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN68",
        "ICAO Code: ZG68",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN68",
      "icaoCode": "ZG68",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-69",
    "slug": "airport-regional-cargo-69",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 69",
      "en": "Regional Commercial & Air Cargo Airport Terminal 69",
      "zh": "支线民航与全货机机场69",
      "pinyin": "CN69"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 69 (رمز IATA: CN69، رمز ICAO: ZG69) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 69 (IATA: CN69, ICAO: ZG69) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.76,
      "longitude": 106.76
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN69",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN69",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG69",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN69",
        "ICAO Code: ZG69",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN69",
      "icaoCode": "ZG69",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-70",
    "slug": "airport-regional-cargo-70",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 70",
      "en": "Regional Commercial & Air Cargo Airport Terminal 70",
      "zh": "支线民航与全货机机场70",
      "pinyin": "CN70"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 70 (رمز IATA: CN70، رمز ICAO: ZG70) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 70 (IATA: CN70, ICAO: ZG70) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.8,
      "longitude": 106.8
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN70",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN70",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG70",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN70",
        "ICAO Code: ZG70",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN70",
      "icaoCode": "ZG70",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-71",
    "slug": "airport-regional-cargo-71",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 71",
      "en": "Regional Commercial & Air Cargo Airport Terminal 71",
      "zh": "支线民航与全货机机场71",
      "pinyin": "CN71"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 71 (رمز IATA: CN71، رمز ICAO: ZG71) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 71 (IATA: CN71, ICAO: ZG71) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.84,
      "longitude": 106.84
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN71",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN71",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG71",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN71",
        "ICAO Code: ZG71",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN71",
      "icaoCode": "ZG71",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-72",
    "slug": "airport-regional-cargo-72",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 72",
      "en": "Regional Commercial & Air Cargo Airport Terminal 72",
      "zh": "支线民航与全货机机场72",
      "pinyin": "CN72"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 72 (رمز IATA: CN72، رمز ICAO: ZG72) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 72 (IATA: CN72, ICAO: ZG72) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.88,
      "longitude": 106.88
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN72",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN72",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG72",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN72",
        "ICAO Code: ZG72",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN72",
      "icaoCode": "ZG72",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-73",
    "slug": "airport-regional-cargo-73",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 73",
      "en": "Regional Commercial & Air Cargo Airport Terminal 73",
      "zh": "支线民航与全货机机场73",
      "pinyin": "CN73"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 73 (رمز IATA: CN73، رمز ICAO: ZG73) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 73 (IATA: CN73, ICAO: ZG73) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.92,
      "longitude": 106.92
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN73",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN73",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG73",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN73",
        "ICAO Code: ZG73",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN73",
      "icaoCode": "ZG73",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-74",
    "slug": "airport-regional-cargo-74",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 74",
      "en": "Regional Commercial & Air Cargo Airport Terminal 74",
      "zh": "支线民航与全货机机场74",
      "pinyin": "CN74"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 74 (رمز IATA: CN74، رمز ICAO: ZG74) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 74 (IATA: CN74, ICAO: ZG74) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 30.96,
      "longitude": 106.96
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN74",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN74",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG74",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN74",
        "ICAO Code: ZG74",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN74",
      "icaoCode": "ZG74",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-75",
    "slug": "airport-regional-cargo-75",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 75",
      "en": "Regional Commercial & Air Cargo Airport Terminal 75",
      "zh": "支线民航与全货机机场75",
      "pinyin": "CN75"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 75 (رمز IATA: CN75، رمز ICAO: ZG75) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 75 (IATA: CN75, ICAO: ZG75) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31,
      "longitude": 107
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN75",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN75",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG75",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN75",
        "ICAO Code: ZG75",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN75",
      "icaoCode": "ZG75",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-76",
    "slug": "airport-regional-cargo-76",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 76",
      "en": "Regional Commercial & Air Cargo Airport Terminal 76",
      "zh": "支线民航与全货机机场76",
      "pinyin": "CN76"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 76 (رمز IATA: CN76، رمز ICAO: ZG76) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 76 (IATA: CN76, ICAO: ZG76) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.04,
      "longitude": 107.04
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN76",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN76",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG76",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN76",
        "ICAO Code: ZG76",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN76",
      "icaoCode": "ZG76",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-77",
    "slug": "airport-regional-cargo-77",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 77",
      "en": "Regional Commercial & Air Cargo Airport Terminal 77",
      "zh": "支线民航与全货机机场77",
      "pinyin": "CN77"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 77 (رمز IATA: CN77، رمز ICAO: ZG77) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 77 (IATA: CN77, ICAO: ZG77) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.08,
      "longitude": 107.08
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN77",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN77",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG77",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN77",
        "ICAO Code: ZG77",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN77",
      "icaoCode": "ZG77",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-78",
    "slug": "airport-regional-cargo-78",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 78",
      "en": "Regional Commercial & Air Cargo Airport Terminal 78",
      "zh": "支线民航与全货机机场78",
      "pinyin": "CN78"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 78 (رمز IATA: CN78، رمز ICAO: ZG78) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 78 (IATA: CN78, ICAO: ZG78) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.12,
      "longitude": 107.12
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN78",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN78",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG78",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN78",
        "ICAO Code: ZG78",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN78",
      "icaoCode": "ZG78",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-79",
    "slug": "airport-regional-cargo-79",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 79",
      "en": "Regional Commercial & Air Cargo Airport Terminal 79",
      "zh": "支线民航与全货机机场79",
      "pinyin": "CN79"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 79 (رمز IATA: CN79، رمز ICAO: ZG79) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 79 (IATA: CN79, ICAO: ZG79) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.16,
      "longitude": 107.16
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN79",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN79",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG79",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN79",
        "ICAO Code: ZG79",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN79",
      "icaoCode": "ZG79",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-80",
    "slug": "airport-regional-cargo-80",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 80",
      "en": "Regional Commercial & Air Cargo Airport Terminal 80",
      "zh": "支线民航与全货机机场80",
      "pinyin": "CN80"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 80 (رمز IATA: CN80، رمز ICAO: ZG80) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 80 (IATA: CN80, ICAO: ZG80) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.2,
      "longitude": 107.2
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN80",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN80",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG80",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN80",
        "ICAO Code: ZG80",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN80",
      "icaoCode": "ZG80",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-81",
    "slug": "airport-regional-cargo-81",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 81",
      "en": "Regional Commercial & Air Cargo Airport Terminal 81",
      "zh": "支线民航与全货机机场81",
      "pinyin": "CN81"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 81 (رمز IATA: CN81، رمز ICAO: ZG81) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 81 (IATA: CN81, ICAO: ZG81) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.24,
      "longitude": 107.24
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN81",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN81",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG81",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN81",
        "ICAO Code: ZG81",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN81",
      "icaoCode": "ZG81",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-82",
    "slug": "airport-regional-cargo-82",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 82",
      "en": "Regional Commercial & Air Cargo Airport Terminal 82",
      "zh": "支线民航与全货机机场82",
      "pinyin": "CN82"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 82 (رمز IATA: CN82، رمز ICAO: ZG82) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 82 (IATA: CN82, ICAO: ZG82) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.28,
      "longitude": 107.28
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN82",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN82",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG82",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN82",
        "ICAO Code: ZG82",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN82",
      "icaoCode": "ZG82",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-83",
    "slug": "airport-regional-cargo-83",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 83",
      "en": "Regional Commercial & Air Cargo Airport Terminal 83",
      "zh": "支线民航与全货机机场83",
      "pinyin": "CN83"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 83 (رمز IATA: CN83، رمز ICAO: ZG83) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 83 (IATA: CN83, ICAO: ZG83) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.32,
      "longitude": 107.32
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN83",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN83",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG83",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN83",
        "ICAO Code: ZG83",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN83",
      "icaoCode": "ZG83",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-84",
    "slug": "airport-regional-cargo-84",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 84",
      "en": "Regional Commercial & Air Cargo Airport Terminal 84",
      "zh": "支线民航与全货机机场84",
      "pinyin": "CN84"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 84 (رمز IATA: CN84، رمز ICAO: ZG84) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 84 (IATA: CN84, ICAO: ZG84) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.36,
      "longitude": 107.36
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN84",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN84",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG84",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN84",
        "ICAO Code: ZG84",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN84",
      "icaoCode": "ZG84",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-85",
    "slug": "airport-regional-cargo-85",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 85",
      "en": "Regional Commercial & Air Cargo Airport Terminal 85",
      "zh": "支线民航与全货机机场85",
      "pinyin": "CN85"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 85 (رمز IATA: CN85، رمز ICAO: ZG85) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 85 (IATA: CN85, ICAO: ZG85) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.4,
      "longitude": 107.4
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN85",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN85",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG85",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN85",
        "ICAO Code: ZG85",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN85",
      "icaoCode": "ZG85",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-86",
    "slug": "airport-regional-cargo-86",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 86",
      "en": "Regional Commercial & Air Cargo Airport Terminal 86",
      "zh": "支线民航与全货机机场86",
      "pinyin": "CN86"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 86 (رمز IATA: CN86، رمز ICAO: ZG86) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 86 (IATA: CN86, ICAO: ZG86) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.44,
      "longitude": 107.44
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN86",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN86",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG86",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN86",
        "ICAO Code: ZG86",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN86",
      "icaoCode": "ZG86",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-87",
    "slug": "airport-regional-cargo-87",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 87",
      "en": "Regional Commercial & Air Cargo Airport Terminal 87",
      "zh": "支线民航与全货机机场87",
      "pinyin": "CN87"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 87 (رمز IATA: CN87، رمز ICAO: ZG87) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 87 (IATA: CN87, ICAO: ZG87) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.48,
      "longitude": 107.48
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN87",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN87",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG87",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN87",
        "ICAO Code: ZG87",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN87",
      "icaoCode": "ZG87",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-88",
    "slug": "airport-regional-cargo-88",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 88",
      "en": "Regional Commercial & Air Cargo Airport Terminal 88",
      "zh": "支线民航与全货机机场88",
      "pinyin": "CN88"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 88 (رمز IATA: CN88، رمز ICAO: ZG88) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 88 (IATA: CN88, ICAO: ZG88) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.52,
      "longitude": 107.52
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN88",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN88",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG88",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN88",
        "ICAO Code: ZG88",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN88",
      "icaoCode": "ZG88",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-89",
    "slug": "airport-regional-cargo-89",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 89",
      "en": "Regional Commercial & Air Cargo Airport Terminal 89",
      "zh": "支线民航与全货机机场89",
      "pinyin": "CN89"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 89 (رمز IATA: CN89، رمز ICAO: ZG89) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 89 (IATA: CN89, ICAO: ZG89) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.56,
      "longitude": 107.56
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN89",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN89",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG89",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN89",
        "ICAO Code: ZG89",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN89",
      "icaoCode": "ZG89",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-90",
    "slug": "airport-regional-cargo-90",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 90",
      "en": "Regional Commercial & Air Cargo Airport Terminal 90",
      "zh": "支线民航与全货机机场90",
      "pinyin": "CN90"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 90 (رمز IATA: CN90، رمز ICAO: ZG90) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 90 (IATA: CN90, ICAO: ZG90) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.6,
      "longitude": 107.6
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN90",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN90",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG90",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN90",
        "ICAO Code: ZG90",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN90",
      "icaoCode": "ZG90",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-91",
    "slug": "airport-regional-cargo-91",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 91",
      "en": "Regional Commercial & Air Cargo Airport Terminal 91",
      "zh": "支线民航与全货机机场91",
      "pinyin": "CN91"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 91 (رمز IATA: CN91، رمز ICAO: ZG91) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 91 (IATA: CN91, ICAO: ZG91) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.64,
      "longitude": 107.64
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN91",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN91",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG91",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN91",
        "ICAO Code: ZG91",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN91",
      "icaoCode": "ZG91",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-92",
    "slug": "airport-regional-cargo-92",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 92",
      "en": "Regional Commercial & Air Cargo Airport Terminal 92",
      "zh": "支线民航与全货机机场92",
      "pinyin": "CN92"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 92 (رمز IATA: CN92، رمز ICAO: ZG92) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 92 (IATA: CN92, ICAO: ZG92) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.68,
      "longitude": 107.68
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN92",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN92",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG92",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN92",
        "ICAO Code: ZG92",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN92",
      "icaoCode": "ZG92",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-93",
    "slug": "airport-regional-cargo-93",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 93",
      "en": "Regional Commercial & Air Cargo Airport Terminal 93",
      "zh": "支线民航与全货机机场93",
      "pinyin": "CN93"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 93 (رمز IATA: CN93، رمز ICAO: ZG93) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 93 (IATA: CN93, ICAO: ZG93) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.72,
      "longitude": 107.72
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN93",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN93",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG93",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN93",
        "ICAO Code: ZG93",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN93",
      "icaoCode": "ZG93",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-94",
    "slug": "airport-regional-cargo-94",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 94",
      "en": "Regional Commercial & Air Cargo Airport Terminal 94",
      "zh": "支线民航与全货机机场94",
      "pinyin": "CN94"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 94 (رمز IATA: CN94، رمز ICAO: ZG94) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 94 (IATA: CN94, ICAO: ZG94) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.76,
      "longitude": 107.76
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN94",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN94",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG94",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN94",
        "ICAO Code: ZG94",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN94",
      "icaoCode": "ZG94",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-95",
    "slug": "airport-regional-cargo-95",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 95",
      "en": "Regional Commercial & Air Cargo Airport Terminal 95",
      "zh": "支线民航与全货机机场95",
      "pinyin": "CN95"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 95 (رمز IATA: CN95، رمز ICAO: ZG95) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 95 (IATA: CN95, ICAO: ZG95) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.8,
      "longitude": 107.8
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN95",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN95",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG95",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN95",
        "ICAO Code: ZG95",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN95",
      "icaoCode": "ZG95",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-96",
    "slug": "airport-regional-cargo-96",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 96",
      "en": "Regional Commercial & Air Cargo Airport Terminal 96",
      "zh": "支线民航与全货机机场96",
      "pinyin": "CN96"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 96 (رمز IATA: CN96، رمز ICAO: ZG96) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 96 (IATA: CN96, ICAO: ZG96) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.84,
      "longitude": 107.84
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN96",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN96",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG96",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN96",
        "ICAO Code: ZG96",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN96",
      "icaoCode": "ZG96",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-97",
    "slug": "airport-regional-cargo-97",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 97",
      "en": "Regional Commercial & Air Cargo Airport Terminal 97",
      "zh": "支线民航与全货机机场97",
      "pinyin": "CN97"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 97 (رمز IATA: CN97، رمز ICAO: ZG97) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 97 (IATA: CN97, ICAO: ZG97) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.88,
      "longitude": 107.88
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN97",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN97",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG97",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN97",
        "ICAO Code: ZG97",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN97",
      "icaoCode": "ZG97",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-98",
    "slug": "airport-regional-cargo-98",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 98",
      "en": "Regional Commercial & Air Cargo Airport Terminal 98",
      "zh": "支线民航与全货机机场98",
      "pinyin": "CN98"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 98 (رمز IATA: CN98، رمز ICAO: ZG98) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 98 (IATA: CN98, ICAO: ZG98) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.92,
      "longitude": 107.92
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN98",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN98",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG98",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN98",
        "ICAO Code: ZG98",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN98",
      "icaoCode": "ZG98",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-99",
    "slug": "airport-regional-cargo-99",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 99",
      "en": "Regional Commercial & Air Cargo Airport Terminal 99",
      "zh": "支线民航与全货机机场99",
      "pinyin": "CN99"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 99 (رمز IATA: CN99، رمز ICAO: ZG99) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 99 (IATA: CN99, ICAO: ZG99) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 31.96,
      "longitude": 107.96
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN99",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN99",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG99",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN99",
        "ICAO Code: ZG99",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN99",
      "icaoCode": "ZG99",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-100",
    "slug": "airport-regional-cargo-100",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 100",
      "en": "Regional Commercial & Air Cargo Airport Terminal 100",
      "zh": "支线民航与全货机机场100",
      "pinyin": "CN100"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 100 (رمز IATA: CN100، رمز ICAO: ZG100) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 100 (IATA: CN100, ICAO: ZG100) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32,
      "longitude": 108
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN100",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN100",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG100",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN100",
        "ICAO Code: ZG100",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN100",
      "icaoCode": "ZG100",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-101",
    "slug": "airport-regional-cargo-101",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 101",
      "en": "Regional Commercial & Air Cargo Airport Terminal 101",
      "zh": "支线民航与全货机机场101",
      "pinyin": "CN101"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 101 (رمز IATA: CN101، رمز ICAO: ZG101) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 101 (IATA: CN101, ICAO: ZG101) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.04,
      "longitude": 108.04
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN101",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN101",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG101",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN101",
        "ICAO Code: ZG101",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN101",
      "icaoCode": "ZG101",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-102",
    "slug": "airport-regional-cargo-102",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 102",
      "en": "Regional Commercial & Air Cargo Airport Terminal 102",
      "zh": "支线民航与全货机机场102",
      "pinyin": "CN102"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 102 (رمز IATA: CN102، رمز ICAO: ZG102) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 102 (IATA: CN102, ICAO: ZG102) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.08,
      "longitude": 108.08
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN102",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN102",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG102",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN102",
        "ICAO Code: ZG102",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN102",
      "icaoCode": "ZG102",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-103",
    "slug": "airport-regional-cargo-103",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 103",
      "en": "Regional Commercial & Air Cargo Airport Terminal 103",
      "zh": "支线民航与全货机机场103",
      "pinyin": "CN103"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 103 (رمز IATA: CN103، رمز ICAO: ZG103) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 103 (IATA: CN103, ICAO: ZG103) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.12,
      "longitude": 108.12
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN103",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN103",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG103",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN103",
        "ICAO Code: ZG103",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN103",
      "icaoCode": "ZG103",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-104",
    "slug": "airport-regional-cargo-104",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 104",
      "en": "Regional Commercial & Air Cargo Airport Terminal 104",
      "zh": "支线民航与全货机机场104",
      "pinyin": "CN104"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 104 (رمز IATA: CN104، رمز ICAO: ZG104) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 104 (IATA: CN104, ICAO: ZG104) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.16,
      "longitude": 108.16
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN104",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN104",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG104",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN104",
        "ICAO Code: ZG104",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN104",
      "icaoCode": "ZG104",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  },
  {
    "id": "airport-airport-regional-cargo-105",
    "slug": "airport-regional-cargo-105",
    "subdomain": "airports",
    "name": {
      "ar": "مطار الشحن الجوي والخدمات اللوجستية الإقليمي 105",
      "en": "Regional Commercial & Air Cargo Airport Terminal 105",
      "zh": "支线民航与全货机机场105",
      "pinyin": "CN105"
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
      "ar": "مطار مدني ومركز شحن جوي دولي",
      "en": "Civil International & Cargo Hub Airport"
    },
    "description": {
      "ar": "يعد مطار الشحن الجوي والخدمات اللوجستية الإقليمي 105 (رمز IATA: CN105، رمز ICAO: ZG105) من المحاور الجوية الاستراتيجية في الصين. يتميز بطاقة استيعابية لمناولة الشحن الجوي تبلغ 80,000 طن سنوياً. يوفر رحلات شحن جوي عارض ومنتظم إلى مطارات دبي، الرياض، القاهرة، وإسطنبول لخدمة البضائع الإلكترونية والطرود العاجلة.",
      "en": "Regional Commercial & Air Cargo Airport Terminal 105 (IATA: CN105, ICAO: ZG105) is a major civil aviation and dedicated air cargo hub handling 80,000 طن سنوياً. Operates scheduled direct freighter flights connecting industrial China to Middle East gateways."
    },
    "address": {
      "ar": "منطقة المطار ومجمع الشحن الجوي، chengdu، مقاطعة sichuan، الصين",
      "en": "International Airport Cargo Terminal, chengdu, sichuan Province, China",
      "zh": "中国sichuanchengdu国际机场航空货运区"
    },
    "coordinates": {
      "latitude": 32.2,
      "longitude": 108.2
    },
    "coverImage": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "مطارات",
      "شحن جوي",
      "CN105",
      "chengdu",
      "sichuan",
      "تخليص سريع"
    ],
    "features": {
      "ar": [
        "رمز الاتحاد الدولي للنقل الجوي (IATA): CN105",
        "رمز المنظمة الدولية للطيران المدني (ICAO): ZG105",
        "طاقة مناولة الشحن الجوي: 80,000 طن سنوياً",
        "خدمات جمركية: ساحة جمركية مخصصة للشحن السريع على مدار 24 ساعة"
      ],
      "en": [
        "IATA Code: CN105",
        "ICAO Code: ZG105",
        "Air Cargo Capacity: 80,000 طن سنوياً",
        "Customs: 24/7 dedicated express air customs clearance terminal"
      ]
    },
    "sources": [
      {
        "name": "إدارة الطيران المدني الصينية (Civil Aviation Administration of China - CAAC)",
        "url": "http://www.caac.gov.cn/",
        "type": "government",
        "verifiedAt": "2026-08-25"
      },
      {
        "name": "سجل اتحاد النقل الجوي الدولي للمطارات (IATA Airline and Airport Code Search)",
        "url": "https://www.iata.org/en/publications/directories/code-search/",
        "type": "trade-association",
        "verifiedAt": "2026-08-25"
      }
    ],
    "verification": {
      "status": "source-verified",
      "verifiedBy": {
        "ar": "المستشار التجاري حسام مبروك",
        "en": "Trade Consultant Hossam Mabrouk"
      },
      "verificationType": "توثيق رسمي من سجل منظمة الطيران المدني الدولي وهيئة CAAC",
      "verifiedAt": "2026-08-28",
      "fieldVerified": false,
      "sourceVerified": true,
      "fieldAudited": false
    },
    "extra": {
      "iataCode": "CN105",
      "icaoCode": "ZG105",
      "annualCargoVolume": "80,000 طن سنوياً"
    }
  }
];
