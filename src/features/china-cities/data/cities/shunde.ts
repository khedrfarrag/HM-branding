import { ICity } from '../../types';

export const shundeCity: ICity = {
  id: 'shunde',
  slug: 'shunde',
  name: {
    ar: 'شوندة (منطقة شوند فوشان)',
    en: 'Shunde',
    zh: '顺德'
  },
  province: {
    ar: 'غوانغدونغ',
    en: 'Guangdong'
  },
  region: 'Pearl River Delta',
  tier: 'tier-2',
  commercialImportanceScore: 95,
  heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  skylineImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  ],
  description: {
    ar: 'عاصمة صناعة وتجارة الأثاث الأولى في العالم وموطن عملاق الأجهزة المنزلية Midea Group. تتكون من بلدات تصنيع متخصصة عالمياً: بلدة ليكتشونغ (معارض الأثاث واللوفر)، بلدة لونغجيانغ (صناعة الكنب والمراتب ومواد الأثاث)، بلدة بيجياو (الأجهزة الكهربائية)، بلدة ليليو (إكسسوارات وسحابات وسكك الأثاث)، وعاصمة الطهي الكانتوني المعتمدة من اليونسكو.',
    en: 'World Furniture Capital and home to Midea Group Global Headquarters. Divided into specialized industrial towns: Lecong (furniture mega-malls & Louvre), Longjiang (sofa, upholstery & materials), Beijiao (appliances), Leliu (furniture hardware slides), and UNESCO City of Gastronomy.'
  },
  keyIndustries: [
    'furniture',
    'home-appliances',
    'furniture-hardware',
    'upholstery-materials',
    'woodworking-machinery',
    'gastronomy'
  ],
  primaryProducts: {
    ar: [
      'الأثاث المنزلي الفاخر، صالونات الجلود، وأثاث القصور والفنادق',
      'إكسسوارات ومفصلات وسكك وسحابات الأدراج للأثاث (ليليو)',
      'الأجهزة المنزلية الكبيرة والصغيرة ومكيفات الهواء (بيجياو)',
      'جلود الأثاث، الإسفنج، الأقمشة المنجدة، وخشب الزان المستورد (آسيا سنتر)',
      'ماكينات النجارة الصناعية وخطوط قص وقشر الخشب الآلية'
    ],
    en: [
      'Luxury Residential, Upholstered Sofas & Turnkey Hotel Suites',
      'Cabinet Hinges, Drawer Slides & Furniture Hardware Systems (Leliu)',
      'Major Air Conditioners, Microwaves & Smart Kitchen Appliances (Beijiao)',
      'Upholstery Leathers, High-Density Foam & Furniture Textiles (Asia Center)',
      'Industrial CNC Woodworking Machinery & Edge-Banding Systems'
    ]
  },
  bestFor: [
    'Furniture Importer',
    'Cabinet Maker & Woodworking Manufacturer',
    'Hotel Procurement Director',
    'Home Appliance Wholesaler',
    'Gourmet Food Lover'
  ],

  // ─── 1. ALL WHOLESALE MARKETS ───────────────────────────────────────────────
  wholesaleMarkets: [
    {
      id: 'louvre-furniture-lecong',
      cityId: 'shunde',
      name: {
        ar: 'مجمع قصر اللوفر الدولي للأثاث (Louvre Palace)',
        en: 'Louvre International Furniture Exhibition Center',
        zh: '罗浮宫国际家具博览中心'
      },
      type: 'Wholesale',
      category: 'Luxury & Bespoke Furniture',
      description: {
        ar: 'المعلم الأبرز عالمياً لتجارة الأثاث الراقي وتصاميم القصور والفنادق الفخمة؛ يمتد عبر قاعات ضخمة تضم مئات الماركات الإيطالية والفرنسية والأمريكية المصنعة في الصين.',
        en: 'The definitive epicenter of high-end furniture and interior design showrooms in China, housing hundreds of luxury European and bespoke brands.'
      },
      address: {
        ar: 'طريق 325 الوطني، بلدة ليكتشونغ، منطقة شوند، فوشان',
        en: '325 National Highway, Lecong, Shunde, Foshan'
      },
      nearestMetro: 'Guangfo Line (Directly connected to Sofitel Hotel)',
      operatingHours: '09:00 - 18:30',
      moqLevel: 'Flexible'
    },
    {
      id: 'sunlink-furniture-market-north-south',
      cityId: 'shunde',
      name: {
        ar: 'سوق سونلينك الدولي للأثاث (القسم الشمالي والجنوبي)',
        en: 'Sunlink Furniture Market (North & South Sections)',
        zh: '顺联家具城（北区 / 南区）'
      },
      type: 'Wholesale',
      category: 'Commercial & Residential Furniture',
      description: {
        ar: 'مجمعان عملاقان على طريق الأثاث؛ القسم الشمالي يركز على أثاث المكاتب وغرف النوم الحديثة، بينما يركز القسم الجنوبي على الأثاث الخشبي الكلاسيكي وأطقم الأرائك الجلدية والصالونات.',
        en: 'Twin mega-complexes along Lecong strip; North Section specializes in commercial office furniture, while South Section focuses on solid wood suites, leather sofas, and dining sets.'
      },
      address: {
        ar: 'طريق لوشين، ليكتشونغ، شوند، فوشان',
        en: 'Luxin Road, Lecong, Shunde, Foshan'
      },
      nearestMetro: 'Lecong Furniture Central Station',
      operatingHours: '09:00 - 18:00',
      moqLevel: 'Low'
    },
    {
      id: 'asia-international-furniture-material-trading-center',
      cityId: 'shunde',
      name: {
        ar: 'مركز آسيا الدولي لتجارة خامات ومواد الأثاث (AIFM)',
        en: 'Asia International Furniture Material Trading Center',
        zh: '亚洲国际家具材料交易中心'
      },
      type: 'Wholesale',
      category: 'Furniture Materials & Upholstery Fabrics',
      description: {
        ar: 'السوق المركزي لمصنعي الأثاث؛ أقمشة تنجيد، جلود طبيعية وصناعية، إسفنج عالي الكثافة، نوابض مقاعد، خيوط، دهانات وورنيش الخشب، ومعدات التنجيد الاحترافية.',
        en: 'The core materials exchange for furniture factories: upholstery velvet, genuine leather hides, PU/PVC vinyl, high-resilience foam, springs, and woodworking hardware.'
      },
      address: {
        ar: 'طريق لونغجيانغ، منطقة شوند، فوشان',
        en: 'Longjiang Town, Shunde, Foshan'
      },
      nearestMetro: 'Longjiang Town Transport Hub',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'Medium'
    },
    {
      id: 'leliu-furniture-hardware-city',
      cityId: 'shunde',
      name: {
        ar: 'مدينة ليليو لخردوات ومفصلات الأثاث (Leliu Hardware Hub)',
        en: 'Leliu Furniture Hardware City',
        zh: '顺德勒流五金产业城'
      },
      type: 'Wholesale',
      category: 'Furniture Hardware & Drawer Slides',
      description: {
        ar: 'عاصمة المفصلات الهيدروليكية وسكك وسحابات الأدراج المعمارية ومقابض المطابخ وخزائن الملابس في الصين؛ تزود كبرى مصانع المطابخ والأثاث عالمياً.',
        en: 'China’s capital for hydraulic soft-close cabinet hinges, undermount drawer slides, kitchen pull-out baskets, and precision furniture fasteners.'
      },
      address: {
        ar: 'بلدة ليليو، منطقة شوند، فوشان',
        en: 'Leliu Town, Shunde District, Foshan'
      },
      nearestMetro: 'Leliu Transport Center',
      operatingHours: '08:30 - 17:30',
      moqLevel: 'High'
    }
  ],

  // ─── 2. SPECIALIZED TOWNS & DISTRICTS ───────────────────────────────────────
  districts: [
    {
      id: 'lecong-town',
      cityId: 'shunde',
      name: { ar: 'بلدة ليكتشونغ للأثاث (Lecong Town)', en: 'Lecong Furniture Commercial Town (乐从镇)' },
      activityType: { ar: 'مدينة معارض وقصور ومجمعات الأثاث العالمية', en: 'World Furniture Wholesale Exhibition Avenue' },
      mainProducts: ['أثاث منازل وقصور', 'أثاث فنادق', 'أثاث مكتبي'],
      tradeFocus: 'Wholesale',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'longjiang-town',
      cityId: 'shunde',
      name: { ar: 'بلدة لونغجيانغ لصناعة الأرائك والمواد (Longjiang)', en: 'Longjiang Sofa & Upholstery Town (龙江镇)' },
      activityType: { ar: 'قاعدة تصنيع الكنب وخامات ومواد الأثاث وماكينات النجارة', en: 'Upholstered Sofa Factories & Furniture Raw Materials' },
      mainProducts: ['كنب منجد', 'مراتب طبية', 'أقمشة وجلود أثاث'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: false
    },
    {
      id: 'beijiao-town',
      cityId: 'shunde',
      name: { ar: 'بلدة بيجياو للأجهزة المنزلية (Beijiao)', en: 'Beijiao Home Appliances Town (北滘镇)' },
      activityType: { ar: 'المقر العالمي لمجموعة ميديا Midea وعاصمة التكييف والأجهزة', en: 'Midea Global HQ & Smart Appliances Mega-Base' },
      mainProducts: ['مكيفات هواء', 'غسالات وثلاجات', 'أفران وميكروويف'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: true
    },
    {
      id: 'leliu-town',
      cityId: 'shunde',
      name: { ar: 'بلدة ليليو لإكسسوارات الأثاث (Leliu)', en: 'Leliu Furniture Hardware Town (勒流镇)' },
      activityType: { ar: 'صناعة المفصلات وسحابات الأدراج والقطع المعدنية', en: 'Cabinet Hinges & Drawer Runners Hub' },
      mainProducts: ['مفصلات هيدروليكية', 'سكك أدراج رولمان بلي', 'مقابض كبائن'],
      tradeFocus: 'Manufacturing',
      suitableForImporter: true,
      suitableForBusinessTravel: false
    }
  ],

  // ─── 3. INDUSTRIAL CLUSTERS ─────────────────────────────────────────────────
  industrialZones: [
    {
      id: 'beijiao-midea-zone',
      cityId: 'shunde',
      name: { ar: 'مجمع ميديا الصناعي العالمي (Midea Group Park)', en: 'Midea Group Global Industrial Park' },
      clusterSpecialization: { ar: 'تصنيع التكييفات ومحركات الأجهزة والأتمتة الروبوتية (KUKA)', en: 'Smart HVAC, Home Appliance Robotics & KUKA Automation' },
      factoryTypes: ['Automated Gigafactories', 'Robotic R&D Centers'],
      keyProducts: ['مكيفات هواء منزلية وصناعية', 'غسالات ذكية', 'روبوتات صناعية KUKA'],
      specializationLevel: 'High'
    },
    {
      id: 'longjiang-furniture-manufacturing-base',
      cityId: 'shunde',
      name: { ar: 'قاعدة تصنيع الكنب والمفروشات في لونغجيانغ', en: 'Longjiang Upholstered Furniture Production Base' },
      clusterSpecialization: { ar: 'تصنيع أطقم الصالونات والمفروشات وغرف النوم بأعلى طاقة إنتاجية في آسيا', en: 'Largest Production Volume of Sofas and Beds in Asia' },
      factoryTypes: ['Upholstery Assembly Lines', 'Foam Molding Workshops'],
      keyProducts: ['صالونات جلدية', 'مراتب نوم طبية', 'طاولات قهوة مودرن'],
      specializationLevel: 'High'
    }
  ],

  // ─── 4. TRADE FAIRS ─────────────────────────────────────────────────────────
  tradeFairs: [
    {
      id: 'ciff-foshan-shunde',
      name: {
        ar: 'معرض التنين للأثاث بـ لونغجيانغ (Dragon Furniture Fair)',
        en: 'Dragon Furniture Fair (Shunde Longjiang)'
      },
      industry: 'Furniture, Upholstery & Machinery',
      venue: {
        ar: 'مركز فوشان الدولي للمعارض، لونغجيانغ، شوند',
        en: 'Forward Exhibition Center, Longjiang, Shunde'
      },
      occurrence: {
        ar: 'يقام مرتين سنوياً (مارس وأغسطس)',
        en: 'Twice a year: March and August'
      },
      officialWebsite: 'http://www.leadshow.com.cn',
      bestFor: ['Furniture Importers', 'Showroom Owners', 'Material Sourcing']
    }
  ],

  // ─── 5. SOURCING PRODUCTS ───────────────────────────────────────────────────
  sourcingProducts: [
    {
      id: 'shunde-furniture-sourcing',
      productName: { ar: 'الأثاث المنزلي والفندقي الجاهز والمخصص', en: 'Residential & Custom Hospitality Furniture' },
      industryCategory: 'Furniture',
      whyThisCity: { ar: 'القدرة الفريدة على تأثيث فندق كامل أو فيلا من الألف إلى الياء وشحنها في حاويات موحدة مباشرة.', en: 'Turnkey capability to source entire hotel or villa furnishing projects in one consolidated logistics shipment.' },
      mainManufacturingArea: { ar: 'ليكتشونغ ولونغجيانغ', en: 'Lecong & Longjiang' },
      wholesaleAvailability: 'High',
      exportSuitability: 'High'
    }
  ],

  // ─── 6. LOGISTICS ───────────────────────────────────────────────────────────
  logistics: {
    nearestAirports: [
      'Guangzhou Baiyun Airport (CAN - 55 دقيقة)',
      'Hong Kong Airport (HKG - ساعتان عبر عبارة ميناء شوند السريعة Shunde Port Ferry)'
    ],
    seaPorts: [
      'Shunde Port (ميناء شوند النهري المباشر للشحن والعبارات السريعة إلى هونغ كونغ)',
      'Nansha Deepwater Port (40 دقيقة بالحاوية البرية)'
    ],
    highSpeedRailwayStations: [
      'Shunde Railway Station (محطة قطار شوند فائقة السرعة)',
      'Guangzhou South Station (15 دقيقة بالسيارة)'
    ],
    seaFreightSuitability: {
      ar: 'تحميل مباشر للحاويات من مستودعات أثاث ليكتشونغ مع تشميع وتخليص جمركي موثق.',
      en: 'Direct factory loading and consolidation for 40HQ furniture containers.'
    },
    airFreightSuitability: {
      ar: 'شحن جوي سريع لعينات الأقمشة والكتالوجات عبر مطار كوانزو.',
      en: 'Express air shipping for catalog swatches and hardware samples.'
    },
    primaryCargoRoutes: {
      ar: ['خط حاويات الأثاث المباشر للخليج العربي (جبل علي، الدمام، جدة)'],
      en: ['Direct Middle East Furniture Container Lines']
    }
  },

  // ─── 7. BUSINESS TRAVEL GUIDE ───────────────────────────────────────────────
  businessTravelGuide: {
    bestVisitMonths: ['أكتوبر', 'نوفمبر', 'ديسمبر', 'مارس', 'أبريل'],
    suggestedStayDays: 4,
    weatherSummary: {
      ar: 'معتدل ومريح في الشتاء والربيع (16°C إلى 24°C).',
      en: 'Pleasant winter and spring seasons; ideal for touring furniture avenues.'
    },
    recommendedStayAreas: [
      {
        ar: 'بلدة ليكتشونغ (فندق سوفيتيل أو الفنادق القريبة من شارع الأثاث).',
        en: 'Lecong Town: Staying at Sofitel or near Louvre minimizes travel.'
      }
    ],
    localTransportAdvice: {
      ar: 'مترو فوشان الخط 3 يربط شوند بمحطة جوانزو الجنوبية ووسط فوشان.',
      en: 'Foshan Metro Line 3 connects Shunde with Guangzhou South Railway Station.'
    },
    languageTips: {
      ar: 'الإنجليزية شائعة في مجمع اللوفر وفنادق الـ 5 نجوم.',
      en: 'English is standard at Louvre showrooms and Sofitel concierge.'
    },
    essentialApps: ['WeChat', 'Alipay', 'Didi'],

    recommendedHotels: [
      {
        id: 'sofitel-shunde-louvre',
        name: {
          ar: 'فندق سوفيتيل فوشان شوند قصر اللوفر (Sofitel Louvre)',
          en: 'Sofitel Foshan Shunde (Louvre Mall)',
          zh: '佛山罗浮宫索菲特酒店'
        },
        starRating: 5,
        category: { ar: 'أفخم فندق أثاث 5 نجوم', en: '5-Star Luxury Furniture Concept' },
        area: { ar: 'مجمع قصر اللوفر مباشرة، ليكتشونغ', en: 'Inside Louvre Furniture Mall' },
        highlights: {
          ar: 'المقر الفندقي الفاخر الأول لتجار الأثاث؛ غرف ومطاعم مؤثثة بقطع فنية فاخرة يمكن شراؤها وشحنها فوراً.',
          en: 'Direct access to Louvre showrooms; luxury rooms equipped with sourceable furniture.'
        },
        address: {
          ar: 'طريق 325 الوطني، ليكتشونغ، شوند، فوشان',
          en: '325 National Highway, Lecong, Shunde'
        }
      }
    ],

    recommendedRestaurants: [
      {
        id: 'mevlana-lecong-shunde',
        name: {
          ar: 'مطعم مولانا التركي ليكتشونغ (Mevlana Lecong)',
          en: 'Mevlana Turkish Restaurant Lecong',
          zh: '梅夫拉那土耳其餐厅（乐从店）'
        },
        cuisineType: { ar: 'مشاوي تركية حلال', en: 'Halal Turkish Grills' },
        isHalal: true,
        address: {
          ar: 'شارع الأثاث ليكتشونغ، شوند، فوشان',
          en: 'Lecong Furniture Avenue, Shunde, Foshan'
        },
        recommendedFor: {
          ar: 'مشاوي عثمانية وكباب وشاي للتجار أثناء جولات شراء الأثاث',
          en: 'Turkish kebabs and halal lunch for furniture buyers'
        }
      },
      {
        id: 'shunde-food-specialty',
        name: {
          ar: 'مطاعم المطبخ الشوندي الكانتوني العريق (Shunde Culinary Landmark)',
          en: 'Authentic Shunde Cantonese Culinary House',
          zh: '顺德人家粤菜酒楼'
        },
        cuisineType: { ar: 'مأكولات كانتونية أصيلة معتمدة من اليونسكو', en: 'UNESCO Certified Shunde Cantonese' },
        isHalal: false,
        address: {
          ar: 'شارع تايلونغ، داليانغ، شوند، فوشان',
          en: 'Tailong Road, Daliang, Shunde'
        },
        recommendedFor: {
          ar: 'حليب الجاموس المطهو المزدوج (Double Skin Milk)، والأسماك الكانتونية الطازجة المشهورة عالمياً',
          en: 'Double-skin milk dessert, steamed river fish, and traditional Dim Sum'
        }
      }
    ],

    touristAttractions: [
      {
        id: 'qinghui-garden-shunde',
        name: {
          ar: 'حديقة تشينغهوي التاريخية (Qinghui Garden)',
          en: 'Qinghui Garden Shunde',
          zh: '顺德清晖园'
        },
        category: { ar: 'حديقة صينية كلاسيكية عريقة', en: 'One of Guangdong’s Four Famous Gardens' },
        description: {
          ar: 'إحدى أعرق الحدائق الكلاسيكية الأربع في مقاطعة غوانغدونغ؛ عمارة مائية صينية مذهلة وجسور حجرية وأشجار معمرة للاسترخاء.',
          en: 'One of the four great classic gardens of Guangdong, featuring tranquil pavilions, lotus ponds, and ancient trees.'
        },
        nearestMetro: 'Daliang Zhonglou Station (Line 3)'
      }
    ]
  },

  relatedCitySlugs: ['foshan', 'guangzhou', 'zhongshan', 'dongguan', 'shenzhen'],
  relatedProductSlugs: ['furniture', 'home-appliances', 'building-materials'],
  lastUpdated: '2026-09-13',
  seo: {
    title: {
      ar: 'دليل شوند التجاري للأثاث والأجهزة 2026 | قصر اللوفر، ليكتشونغ، وميديا',
      en: 'Shunde Sourcing Guide 2026 | Lecong Furniture Capital, Louvre & Midea HQ'
    },
    description: {
      ar: 'أشمل دليل لاستيراد الأثاث والأجهزة من شوند وفوشان: قصر اللوفر، مجمعات ليكتشونغ، مصانع ميديا، الفنادق، ومطاعم الأثاث الحلال.',
      en: 'Exhaustive trade guide to Shunde: Lecong furniture strip, Louvre mall, Midea appliance hub, Sofitel hotel, and halal dining.'
    }
  }
};
