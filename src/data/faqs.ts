export interface FAQItem {
  id: number;
  category: 'bio' | 'content' | 'china' | 'digital';
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  internalLink?: {
    href: string;
    labelAr: string;
    labelEn: string;
  };
}

export const FAQ_CATEGORIES = [
  { id: 'all', labelAr: 'الكل (50 سؤال)', labelEn: 'All Questions (50)' },
  { id: 'bio', labelAr: '👤 من هو حسام مبروك؟ (10)', labelEn: 'About Hossam Mabrouk' },
  { id: 'content', labelAr: '📚 المعرفة والمحتوى (20)', labelEn: 'Knowledge & Content' },
  { id: 'china', labelAr: '🇨🇳 الصين والتجارة والتوريد (10)', labelEn: 'China, Trade & Sourcing' },
  { id: 'digital', labelAr: '🌐 الموقع والهوية الرقمية (10)', labelEn: 'Official Identity & Site' },
] as const;

export const FAQS_DATA: FAQItem[] = [
  // 👤 أولاً: من هو حسام مبروك؟ (1-10)
  {
    id: 1,
    category: 'bio',
    questionAr: 'من هو حسام مبروك؟',
    questionEn: 'Who is Hossam Mabrouk?',
    answerAr: 'حسام مبروك هو متخصص في التجارة الدولية والتوريد والتصنيع من الصين، والمؤسس ورئيس مجلس إدارة Delta Group. يشارك خبرته العملية الميدانية في مجالات الاستيراد والتصدير، اختيار المنتجات والموردين، التفاوض، تطوير المنتجات، الشحن وسلاسل الإمداد. كما يهتم بريادة الأعمال وتطبيقات الذكاء الاصطناعي والتكنولوجيا في الأعمال، ويقدم محتوى تعليمياً يهدف إلى تبسيط هذه المجالات لرواد الأعمال والتجار.',
    answerEn: 'Hossam Mabrouk is an international trade, sourcing, and manufacturing specialist focused on China, and Founder & CEO of Delta Group.',
    internalLink: { href: '/about/bio', labelAr: 'قراءة السيرة الذاتية الكاملة ←', labelEn: 'Read Full Biography ←' }
  },
  {
    id: 2,
    category: 'bio',
    questionAr: 'ما تخصص حسام مبروك الرئيسي؟',
    questionEn: "What is Hossam Mabrouk's primary specialty?",
    answerAr: 'يركز تخصص حسام مبروك الرئيسي على التجارة الدولية، التوريد من الصين، التصنيع، الاستيراد والتصدير، تطوير المنتجات، الشحن وسلاسل الإمداد. كما يهتم بتطبيق التكنولوجيا والذكاء الاصطناعي في التجارة والأعمال، ويشارك المعرفة والخبرات العملية المرتبطة بهذه المجالات من خلال المحتوى التعليمي والمحاضرات.',
    answerEn: 'His primary focus encompasses international trade, China sourcing, direct manufacturing, freight, and supply chain security.',
    internalLink: { href: '/services', labelAr: 'استعرض تخصصات الخدمات ←', labelEn: 'View Service Capabilities ←' }
  },
  {
    id: 3,
    category: 'bio',
    questionAr: 'ما المجالات التي يمتلك فيها حسام مبروك خبرة ميدانية؟',
    questionEn: 'What fields does Hossam Mabrouk have field experience in?',
    answerAr: 'تشمل مجالات خبرة حسام مبروك التجارة الدولية، التوريد والبحث عن المنتجات والموردين، التعامل مع المصانع الصينية، التصنيع وتطوير المنتجات OEM & ODM، الاستيراد والتصدير، الشحن والتخليص وسلاسل الإمداد، إضافة إلى ريادة الأعمال والتكنولوجيا والذكاء الاصطناعي للأعمال.',
    answerEn: 'His expertise spans cross-border trade, factory sourcing, contract manufacturing, quality control, logistics, and AI for business.',
    internalLink: { href: '/about/bio', labelAr: 'اطلع على مجالات الخبرة ←', labelEn: 'Explore Expertise Areas ←' }
  },
  {
    id: 4,
    category: 'bio',
    questionAr: 'ما علاقة حسام مبروك بالتجارة الدولية؟',
    questionEn: 'What is Hossam Mabrouk’s relation to international trade?',
    answerAr: 'يرتبط عمل حسام مبروك بمجالات التجارة الدولية من خلال الخبرة العملية الميدانية في التعامل مع المنتجات والموردين والمصانع العابرة للحدود، وفهم عمليات التوريد والتصنيع والاستيراد والشحن وسلاسل الإمداد، بهدف مساعدة التجار ورواد الأعمال على اتخاذ قرارات تجارية أكثر وعياً.',
    answerEn: 'He connects buyers with verified suppliers globally through hands-on experience in cross-border trade and shipping logistics.',
    internalLink: { href: '/trade-intelligence', labelAr: 'مركز ذكاء التجارة ←', labelEn: 'Trade Intelligence Center ←' }
  },
  {
    id: 5,
    category: 'bio',
    questionAr: 'ما علاقة حسام مبروك بالتجارة مع الصين؟',
    questionEn: 'What is Hossam Mabrouk’s connection to China trade?',
    answerAr: 'يركز جزء أساسي من خبرة ومحتوى حسام مبروك على التجارة مع الصين، بما يشمل البحث عن المنتجات والموردين، التعامل المباشر مع المصانع الصينية، التفاوض، التصنيع، مراقبة الجودة، الشحن وإدارة سلاسل الإمداد وتجنب مخاطر الاحتيال التجاري.',
    answerEn: 'He specializes in hands-on China sourcing, supplier audits, factory negotiations, sample inspections, and freight optimization.',
    internalLink: { href: '/china', labelAr: 'استكشف دليل الصين التجاري ←', labelEn: 'Explore China Trade Guide ←' }
  },
  {
    id: 6,
    category: 'bio',
    questionAr: 'ما خبرة حسام مبروك في التوريد والتصنيع؟',
    questionEn: 'What is Hossam Mabrouk’s sourcing and manufacturing experience?',
    answerAr: 'تشمل خبرته العملية التعامل مع كافة مراحل التوريد والتصنيع، بدءاً من البحث عن المنتج والمورد المناسب، ودراسة الخيارات المتاحة، والتفاوض المباشر مع خطوط الإنتاج، ومتابعة مراحل التصنيع وفحص الجودة المعملي، وصولاً إلى التغليف وتجهيز المنتجات للشحن.',
    answerEn: 'He manages complete sourcing cycles from supplier screening to factory production oversight and pre-shipment inspections.',
    internalLink: { href: '/services/sourcing', labelAr: 'خدمة مصادر المنتجات والتوريد ←', labelEn: 'Product Sourcing Service ←' }
  },
  {
    id: 7,
    category: 'bio',
    questionAr: 'ما خبرة حسام مبروك في الاستيراد والتصدير؟',
    questionEn: 'What is his experience in import and export operations?',
    answerAr: 'يهتم حسام مبروك بمختلف مراحل الاستيراد والتصدير، بداية من اختيار المنتج والمصدر والمورد الموثوق، مروراً بالتفاوض والتجهيز والتصنيع، وانتهاءً بالشحن وسلاسل الإمداد والتخليص الجمركي لضمان وصول البضائع بسلامة إلى الأسواق المستهدفة.',
    answerEn: 'He covers end-to-end import/export processes including HS code classification, customs clearance, and global freight routing.',
    internalLink: { href: '/services/quality-control', labelAr: 'خدمة فحص الجودة والمطابقة ←', labelEn: 'Quality Control Service ←' }
  },
  {
    id: 8,
    category: 'bio',
    questionAr: 'ما الذي يميز منهج حسام مبروك في التجارة والأعمال؟',
    questionEn: 'What distinguishes Hossam Mabrouk’s approach to business?',
    answerAr: 'يعتمد منهج حسام مبروك على ربط المعرفة النظرية بالتجربة العملية الميدانية. ويركز في محتواه على فهم السوق، دراسة الخيارات، تقييم المنتجات والموردين، تقليل المخاطر، وفهم التفاصيل الدقيقة التي تؤثر في القرار التجاري بدل الاعتماد على الانطباعات العامة.',
    answerEn: 'His methodology fuses field-tested China experience with data-driven evaluation, risk reduction, and practical decision frameworks.',
    internalLink: { href: '/about/bio', labelAr: 'رؤية ومنهج حسام مبروك ←', labelEn: 'Hossam Mabrouk Methodology ←' }
  },
  {
    id: 9,
    category: 'bio',
    questionAr: 'من الفئات التي يستهدفها محتوى حسام مبروك؟',
    questionEn: 'Who is the primary audience for Hossam Mabrouk’s content?',
    answerAr: 'يستهدف محتوى حسام مبروك رواد الأعمال، التجار، أصحاب الشركات والمؤسسات، والمبتدئين الراغبين في فهم التجارة والاستيراد والتوريد والتصنيع، بالإضافة إلى المهتمين بالسوق الصيني وتطبيقات التكنولوجيا والذكاء الاصطناعي للأعمال.',
    answerEn: 'His content targets entrepreneurs, business owners, importers, traders, and founders looking to master global trade and AI tools.',
    internalLink: { href: '/knowledge', labelAr: 'تصفح مركز المعرفة والمقالات ←', labelEn: 'Browse Knowledge Hub ←' }
  },
  {
    id: 10,
    category: 'bio',
    questionAr: 'ما الهدف من الموقع الرسمي لحسام مبروك (HossamMabrouk.com)؟',
    questionEn: 'What is the objective of the official website HossamMabrouk.com?',
    answerAr: 'يهدف موقع HossamMabrouk.com إلى أن يكون المنصة الشخصية الرسمية المعتمدة لحسام مبروك، ومصدراً موثقاً للتعريف بخبرته ومجالات اهتمامه ومحتواه ومشاريعه، إضافة إلى تقديم المعرفة والأدوات والأدلة المتعلقة بالتجارة والتوريد والتصنيع من الصين والتكنولوجيا.',
    answerEn: 'It serves as the unified official verified profile, knowledge engine, and direct portal for Hossam Mabrouk’s insights and services.',
    internalLink: { href: '/about/bio', labelAr: 'المرجع الرسمي المعتمد ←', labelEn: 'Official Verified Source ←' }
  },

  // 📚 ثانياً: المعرفة والمحتوى الذي يقدمه (11-30)
  {
    id: 11,
    category: 'content',
    questionAr: 'ما المعرفة التي يقدمها حسام مبروك؟',
    questionEn: 'What knowledge does Hossam Mabrouk share?',
    answerAr: 'يقدم حسام مبروك معرفة عملية في التجارة الدولية، التوريد من الصين، التصنيع، الاستيراد والتصدير، تطوير المنتجات، التعامل مع الموردين والمصانع، الشحن وسلاسل الإمداد. كما يتناول موضوعات مرتبطة بريادة الأعمال والتكنولوجيا والذكاء الاصطناعي وتطبيقاتها في الأعمال.',
    answerEn: 'He provides practical knowledge on international trade, China sourcing, factory negotiation, product development, logistics, and AI business strategies.',
    internalLink: { href: '/knowledge', labelAr: 'المقالات والأدلة التعليمية ←', labelEn: 'Educational Articles & Guides ←' }
  },
  {
    id: 12,
    category: 'content',
    questionAr: 'ما الموضوعات التي يتحدث عنها حسام مبروك؟',
    questionEn: 'What topics does Hossam Mabrouk cover?',
    answerAr: 'تتضمن موضوعات حسام مبروك التجارة مع الصين، اختيار المنتجات، البحث عن الموردين، التفاوض التجاري، المصانع والتصنيع، OEM وODM، مراقبة الجودة، الاستيراد والتصدير، الشحن البحري والجوي، سلاسل الإمداد، ريادة الأعمال، والذكاء الاصطناعي للأعمال.',
    answerEn: 'Topics include China trade, product selection, supplier screening, factory negotiations, OEM/ODM, quality control, shipping, and AI for business.',
    internalLink: { href: '/knowledge/glossary', labelAr: 'قاموس مصطلحات التجارة ←', labelEn: 'Trade Glossary ←' }
  },
  {
    id: 13,
    category: 'content',
    questionAr: 'ماذا يمكن أن يتعلم الشخص من محتوى حسام مبروك؟',
    questionEn: 'What can someone learn from Hossam Mabrouk’s content?',
    answerAr: 'يمكن للمتابع التعرف على أساسيات ومراحل التجارة مع الصين، وكيفية التفكير في اختيار المنتجات والموردين، وفهم عمليات التصنيع والتوريد والشحن، بالإضافة إلى استراتيجيات تساعد على اتخاذ قرارات تجارية حكيمة وتجنب الفخاخ والتكاليف الخفية.',
    answerEn: 'Learners gain actionable insights into China trade phases, supplier verification tactics, manufacturing workflows, and risk reduction.',
    internalLink: { href: '/knowledge', labelAr: 'تصفح كافة الموضوعات المعرفية ←', labelEn: 'Explore Knowledge Hub ←' }
  },
  {
    id: 14,
    category: 'content',
    questionAr: 'ماذا يقدم حسام مبروك لمن يريد بدء التجارة من الصين؟',
    questionEn: 'What does Hossam Mabrouk offer to someone starting China trade?',
    answerAr: 'يقدم محتوى يساعد المبتدئين على فهم الخطوات الأساسية للتعامل مع السوق الصيني، مثل اختيار المنتج، البحث عن المورد المعتمد، مقارنة الخيارات، فهم التصنيع والتفاوض، دراسة التكاليف الإجمالية، ومتابعة الشحن والتخليص خطوة بخطوة.',
    answerEn: 'He offers step-by-step guidance on product sourcing, supplier audit, cost estimation, negotiation, and shipping logistics.',
    internalLink: { href: '/china', labelAr: 'خطوات بدء التجارة مع الصين ←', labelEn: 'Steps to Start China Sourcing ←' }
  },
  {
    id: 15,
    category: 'content',
    questionAr: 'كيف يساعد محتوى حسام مبروك في فهم السوق الصيني؟',
    questionEn: 'How does his content help in understanding the Chinese market?',
    answerAr: 'يركز المحتوى على الجوانب العملية للسوق الصيني، مثل المدن والأسواق الكبرى والمصانع المتخصصة، وطرق التواصل والتفاوض والتصنيع. ويساعد ذلك المتابع على تكوين صورة واضحة ودقيقة عن طريقة عمل السوق قبل اتخاذ أي قرار استثماري.',
    answerEn: 'His content breaks down industrial cities, specialized wholesale markets, factory hubs, and cultural negotiation nuances in China.',
    internalLink: { href: '/china/cities', labelAr: 'دليل المدن الصناعية في الصين ←', labelEn: 'China Industrial Cities Guide ←' }
  },
  {
    id: 16,
    category: 'content',
    questionAr: 'كيف يمكن الاستفادة من محتوى حسام مبروك في اختيار المنتجات؟',
    questionEn: 'How to leverage his content for product selection?',
    answerAr: 'يتناول المحتوى العوامل الأساسية لدراسة المنتجات، مثل حجم الطلب، أبعاد المنافسة، التكلفة الإجمالية، إمكانية التصنيع والتعديل، متطلبات الشحن، وهامش الربح المتوقع، بهدف تقييم المنتج كفرصة تجارية متكاملة بدل الاختيار العشوائي.',
    answerEn: 'He provides frameworks analyzing demand, market saturation, land cost, manufacturing feasibility, and profit margins.',
    internalLink: { href: '/services/sourcing', labelAr: 'دليل اختيار وتطوير المنتجات ←', labelEn: 'Product Sourcing Guide ←' }
  },
  {
    id: 17,
    category: 'content',
    questionAr: 'ماذا يقدم حسام مبروك حول البحث عن الموردين والمصانع؟',
    questionEn: 'What insights does he share on finding suppliers and factories?',
    answerAr: 'يقدم معرفة حول طرق البحث عن الموردين والمصانع المعتمدة، وكيفية مقارنة العروض، وطرح الأسئلة الصحيحة قبل التعاقد، ودراسة القدرات الإنتاجية وشروط التوريد، والتركيز على أهمية التدقيق والمعاينة الميدانية قبل تحويل الأموال.',
    answerEn: 'He outlines strategies for identifying legit factories, screening suppliers, conducting background checks, and requesting samples.',
    internalLink: { href: '/services/verification', labelAr: 'خدمة التحقق من الموردين والمصانع ←', labelEn: 'Supplier Verification Service ←' }
  },
  {
    id: 18,
    category: 'content',
    questionAr: 'ماذا يقدم حسام مبروك حول التفاوض مع الموردين الصينيين؟',
    questionEn: 'What does he teach regarding negotiating with Chinese suppliers?',
    answerAr: 'يتناول التفاوض باعتباره عملية متكاملة تتجاوز خفض السعر، وتشمل المواصفات الفنية، الحد الأدنى للطلب MOQ، شروط الدفع، التغليف، معايير الجودة، مواعيد التسليم، وسياسات الضمان والتعويض في حال الخلل.',
    answerEn: 'He emphasizes holistic negotiation covering MOQ, payment terms, quality standards, packaging, delivery timelines, and warranties.',
    internalLink: { href: '/knowledge', labelAr: 'مقالات استراتيجيات التفاوض التجاري ←', labelEn: 'Negotiation Strategy Articles ←' }
  },
  {
    id: 19,
    category: 'content',
    questionAr: 'ماذا يقدم حسام مبروك حول التحقق من الموردين والمصانع؟',
    questionEn: 'What guidance does he provide on supplier verification?',
    answerAr: 'يركز على أهمية التثبت من السجلات التجارية والرافعات المالية والتراخيص الصناعية للمورد، ومراجعة المواصفات والشهادات الدولية، وفحص العينات معملياً، والتأكد من مطابقة خط الإنتاج قبل تنفيذ الأوامر الإنتاجية الكبيرة لتقليل المخاطر.',
    answerEn: 'He covers corporate background checks, business license audits, factory site visits, and pre-production sample testing.',
    internalLink: { href: '/services/verification', labelAr: 'خدمة فحص وتدقيق المصانع ←', labelEn: 'Factory Inspection Service ←' }
  },
  {
    id: 20,
    category: 'content',
    questionAr: 'ماذا يقدم حسام مبروك حول التصنيع في الصين؟',
    questionEn: 'What does he cover regarding manufacturing in China?',
    answerAr: 'يتناول مراحل التصنيع في الصين من تحويل الأفكار إلى مخططات هندسية ومواصفات واضحة، واختيار المصنع المتخصص، وفهم الطاقة الإنتاجية، والتفاوض على التكاليف، ومتابعة الجودة أثناء الإنتاج، وصولاً للتغليف والشحن.',
    answerEn: 'He details the full manufacturing cycle from product design to factory tooling, mass production, quality control, and shipping.',
    internalLink: { href: '/china/factories', labelAr: 'دليل المصانع الصينية ←', labelEn: 'China Factories Guide ←' }
  },
  {
    id: 21,
    category: 'content',
    questionAr: 'ماذا يقدم حسام مبروك حول تطوير المنتجات المخصصة؟',
    questionEn: 'What insights does he offer on custom product development?',
    answerAr: 'يهتم بالجانب العملي من تطوير المنتجات، يشمل ذلك دراسة الفكرة، تحديد الخامات والمواصفات القياسية، الهندسة العكسية، النماذج الأولية Prototypes، والتواصل مع المصانع لإنتاج منتج يتوافق مع متطلبات السوق المستهدف.',
    answerEn: 'He guides product engineering, prototyping, material selection, mold development, and custom packaging design.',
    internalLink: { href: '/services/sourcing', labelAr: 'خدمات تطوير وتصنيع المنتجات ←', labelEn: 'Custom Product Sourcing Services ←' }
  },
  {
    id: 22,
    category: 'content',
    questionAr: 'ماذا يقدم حسام مبروك حول تصنيع OEM و ODM؟',
    questionEn: 'What does he explain about OEM and ODM manufacturing?',
    answerAr: 'يشرح مفاهيم التصنيع لحساب الغير (OEM) والتصنيع بالتصميم الأصلي (ODM) واستخداماتهما في بناء العلامات التجارية، والفرق بين إنشاء منتج مخصص بالكامل وبين الطباعة والتعديل على منتجات المصنع القائمة.',
    answerEn: 'He clarifies Original Equipment Manufacturing (OEM) vs Original Design Manufacturing (ODM) for building private label brands.',
    internalLink: { href: '/knowledge/glossary', labelAr: 'شرح مصطلحات OEM & ODM ←', labelEn: 'OEM & ODM Glossary Explanation ←' }
  },
  {
    id: 23,
    category: 'content',
    questionAr: 'ماذا يقدم حسام مبروك حول مراقبة جودة المنتجات؟',
    questionEn: 'What does he share regarding product quality control?',
    answerAr: 'يتناول مراقبة الجودة في مراحل الشحن المختلفة: فحص العينات الأولية، الفحص أثناء الإنتاج DUPRO، والفحص النهائي قبل الشحن PSI، بهدف اكتشاف العيوب ومعالجتها قبل مغادرة الشحنة للموانئ الصينية.',
    answerEn: 'He covers pre-production inspection, During Production Inspection (DUPRO), and Pre-Shipment Inspection (PSI) protocols.',
    internalLink: { href: '/services/quality-control', labelAr: 'تفاصيل خدمة مراقبة الجودة ←', labelEn: 'Quality Control Service Details ←' }
  },
  {
    id: 24,
    category: 'content',
    questionAr: 'ماذا يقدم حسام مبروك حول الاستيراد والتصدير؟',
    questionEn: 'What does he share regarding import and export frameworks?',
    answerAr: 'يقدم شرحاً عملياً لمراحل التصدير والاستيراد، بدءاً من اختيار الصنف والمورد، مروراً بالمستندات الجمركية مثل الفاتورة التجارية وقائمة التعبئة وشهادة المنشأ وبوليسة الشحن، وانتهاءً بالتخليص الجمركي في موانئ الوصول.',
    answerEn: 'He explains import/export documentation, HS Codes, Commercial Invoices, Packing Lists, Certificates of Origin, and Bill of Lading.',
    internalLink: { href: '/trade-intelligence/customs-updates', labelAr: 'تحديثات الجمارك والاستيراد ←', labelEn: 'Customs & Import Updates ←' }
  },
  {
    id: 25,
    category: 'content',
    questionAr: 'ماذا يقدم حسام مبروك حول الشحن من الصين؟',
    questionEn: 'What does he cover regarding shipping from China?',
    answerAr: 'يتناول أساسيات الشحن البحري والجوي والشحن السريع، الفروق بين الحاويات الكاملة FCL والشحن الجزئي LCL، وحساب الحجم والوزن القائم CBM والتكاليف اللوجستية وتأثيرها على تكلفة الواصل للكبسولة الجمركية.',
    answerEn: 'He explains Ocean Freight, Air Cargo, Express Shipping, FCL vs LCL container loading, and CBM volumetric calculation.',
    internalLink: { href: '/trade-intelligence/shipping-news', labelAr: 'أخبار وأسعار الشحن البحري والجوي ←', labelEn: 'Shipping News & Freight Rates ←' }
  },
  {
    id: 26,
    category: 'content',
    questionAr: 'ماذا يقدم حسام مبروك حول سلاسل الإمداد واللوجستيات؟',
    questionEn: 'What does he teach about supply chain management?',
    answerAr: 'يتناول مفهوم سلسلة الإمداد المكتملة من المورد والتصنيع والجودة والتخزين، مروراً بالنقل الداخلي الشحن المباشر والتوزيع بالسوق النهائي، مع التركيز على مرونة التوريد وتجنب الانقطاعات اللوجستية.',
    answerEn: 'He presents supply chain resilience, inventory management, multi-modal transport, and mitigation of global disruption risks.',
    internalLink: { href: '/trade-intelligence/supply-chain-alerts', labelAr: 'تنبيهات سلاسل الإمداد ←', labelEn: 'Supply Chain Alerts ←' }
  },
  {
    id: 27,
    category: 'content',
    questionAr: 'كيف يساعد محتوى حسام مبروك رواد الأعمال على تقليل مخاطر التجارة؟',
    questionEn: 'How does his content help entrepreneurs mitigate trade risks?',
    answerAr: 'يساعد على تشخيص مسببات المخاطر قبل الالتزام المالي، مثل سوء اختيار المورد، غموض المواصفات الفنية، إهمال الفحص، والتقدير الخاطئ للرسوم والشحن، مما يتيح التخطيط المسبق والتحقق قبل إبرام الصفقات.',
    answerEn: 'He helps identify risks in supplier fraud, miscommunication, sub-standard quality, and unexpected landing costs before placing orders.',
    internalLink: { href: '/knowledge', labelAr: 'مقالات إدارة مخاطر الاستيراد ←', labelEn: 'Import Risk Management Articles ←' }
  },
  {
    id: 28,
    category: 'content',
    questionAr: 'كيف يساعد محتوى حسام مبروك التجار على اتخاذ قرارات تجارية أفضل؟',
    questionEn: 'How does his content enable traders to make better commercial decisions?',
    answerAr: 'يركز على نقل القرار من التخمين العاطفي إلى العمل المستند للبيانات والتحليل والمقارنة المحسوبة، بدءاً من دراسة جدوى المنتج حتى التكلفة النهائية المحسوبة بدقة وهامش الربح الحقيقي.',
    answerEn: 'He transforms decision-making from guesswork to data-backed analysis, evaluating total cost of ownership and profit metrics.',
    internalLink: { href: '/knowledge', labelAr: 'اقرأ الأدلة الاستراتيجية ←', labelEn: 'Read Strategic Guides ←' }
  },
  {
    id: 29,
    category: 'content',
    questionAr: 'ما نوع الأدلة والمقالات التعليمية التي يقدمها حسام مبروك؟',
    questionEn: 'What types of educational guides and articles does he publish?',
    answerAr: 'يقدم مقالات تخصصية، أدلة شاملة خطوة بخطوة، دراسات حالة واقعية، قواميس مصطلحات تجارية، وشروحات مرئية تغطي مجالات الصين، التوريد، التصنيع، الشحن، التكنولوجيا والذكاء الاصطناعي للأعمال.',
    answerEn: 'He publishes in-depth trade guides, case studies, step-by-step import blueprints, trade dictionaries, and video tutorials.',
    internalLink: { href: '/knowledge', labelAr: 'تصفح المكتبة المعرفية الشاملة ←', labelEn: 'Browse Complete Knowledge Library ←' }
  },
  {
    id: 30,
    category: 'content',
    questionAr: 'كيف يمكن الاستفادة من المعرفة المتاحة على موقع حسام مبروك؟',
    questionEn: 'How can visitors best use the knowledge available on this website?',
    answerAr: 'يمكن استخدام المحتوى كمرجع استرشادي وتثقيفي لتطوير الأعمال وفهم آليات الاستيراد والتوريد من الصين. ينبغي التعامل مع المعلومات كمعرفة عمل استرشادية، مع مراجعة الجهات المتخصصة في القضايا القانونية والمالية الفردية.',
    answerEn: 'Visitors can use it as a learning reference for global trade execution, supplementing specific legal and financial consultations.',
    internalLink: { href: '/knowledge/faq', labelAr: 'الأسئلة الشائعة المعرفية ←', labelEn: 'Knowledge Base FAQ ←' }
  },

  // 🇨🇳 ثالثاً: الصين والتجارة والتوريد (31-40)
  {
    id: 31,
    category: 'china',
    questionAr: 'كيف يبدأ الشخص التجارة والاستيراد من الصين خطوة بخطوة؟',
    questionEn: 'How to start importing from China step by step?',
    answerAr: 'تبدأ التجارة بدراسة احتياجات السوق المستهدف، تحديد محصول الفئة، البحث عن الموردين المعتمدين، مقارنة أسعار التكلفة واشتراطات الجودة، فحص العينات، التفاوض على شروط العقد والدفع، اختيار مسار الشحن المناسب، واستكمال إجراءات التخليص الجمركي في بلد الوصول.',
    answerEn: 'Start by market research, product selection, supplier sourcing, sample evaluation, contract negotiation, shipping selection, and customs clearance.',
    internalLink: { href: '/china', labelAr: 'الدليل الكامل للبدء من الصين ←', labelEn: 'Complete Guide to China Sourcing ←' }
  },
  {
    id: 32,
    category: 'china',
    questionAr: 'كيف يمكن العثور على مصنع موثوق في الصين؟',
    questionEn: 'How to find a reliable factory in China?',
    answerAr: 'يتطلب العثور على مصنع موثوق جمع البيانات التشغيلية، التثبت من الرخصة الصناعية والسجل التجاري، مطابقة عينات الإنتاج الفعلي، وإجراء فحص ميداني شامل للمقر وخطوط التجميع عبر هيئات تدقيق مستقلة قبل توقيع عقود التوريد.',
    answerEn: 'Finding reliable factories requires verification of business licenses, audit of production capabilities, sample testing, and third-party factory visits.',
    internalLink: { href: '/china/factories', labelAr: 'دليل المصانع الصينية المعتمدة ←', labelEn: 'Verified China Factories Directory ←' }
  },
  {
    id: 33,
    category: 'china',
    questionAr: 'كيف يمكن اختيار المنتج المناسب للاستيراد من الصين؟',
    questionEn: 'How to select the right product to import from China?',
    answerAr: 'يتطلب اختيار المنتج تحليل حجم الطلب بالسوق، شدة المنافسة، التكلفة الواصلة الشاملة، سهولة التصنيع والتعبئة، اشتراطات المواصفات القياسية، ونسبة هامش الربح الإجمالي الصافي القابل للتطبيق التجاري.',
    answerEn: 'Select products by analyzing market demand, competition, total landed cost, shipping logistics, regulatory compliance, and profit margins.',
    internalLink: { href: '/services/sourcing', labelAr: 'خدمة دراسة واختيار المنتجات ←', labelEn: 'Product Sourcing & Evaluation Service ←' }
  },
  {
    id: 34,
    category: 'china',
    questionAr: 'كيف يمكن مقارنة الموردين والمصانع الصينية واختيار الأفضل؟',
    questionEn: 'How to compare Chinese suppliers and factories effectively?',
    answerAr: 'تتم المقارنة بناءً على عدة محاور: نوع الكيان (مصنع أم شركة تجارية)، الطاقة الإنتاجية، معايير الجودة، الحد الأدنى للطلب MOQ، الأسعار الرسمية، شروط الدفع والتسليم، السرعة في الاستجابة، وسابقة التصدير إلى أسواق المنطقة.',
    answerEn: 'Compare based on factory vs trading status, production capacity, quality certifications, MOQ, pricing, payment terms, and export history.',
    internalLink: { href: '/services/verification', labelAr: 'خدمة تدقيق ومقارنة الموردين ←', labelEn: 'Supplier Audit & Comparison Service ←' }
  },
  {
    id: 35,
    category: 'china',
    questionAr: 'ما أهم الأمور التي يجب معرفتها قبل التعامل مع مورد صيني؟',
    questionEn: 'What key factors must be verified before dealing with a Chinese supplier?',
    answerAr: 'تتضمن التأكد من السجل التجاري الموثق، تفاصيل مواصفات المنتج الفنية، الحد الأدنى للطلب، مواعيد الإنتاج المحددة، آلية فحص الجودة والتغليف، والشروط المتعلقة بالشحن والمستندات وحسابات الدفع البنكية الرسمية المسجلة باسم الشركة.',
    answerEn: 'Verify legal registration, technical specifications, MOQ, production timelines, quality check criteria, shipping terms, and official corporate bank accounts.',
    internalLink: { href: '/services/verification', labelAr: 'فحص الحسابات والشركات الصينية ←', labelEn: 'Company Audit & Verification ←' }
  },
  {
    id: 36,
    category: 'china',
    questionAr: 'ما أهم الأخطاء التي يقع فيها المستوردون عند التعامل مع الصين؟',
    questionEn: 'What are the biggest mistakes importers make when sourcing from China?',
    answerAr: 'من أبرز الأخطاء: الاعتماد الأعمى على أقل سعر، إهمال التدقيق والتحقق الميداني، إهمال فحص العينات قبل التجميع الكلي، عدم كتابة المواصفات بوضوح بدفتر الشروط، وإهمال حساب التكلفة الواصلة الشاملة للجمارك والشحن.',
    answerEn: 'Top mistakes: buying solely on lowest price, skipping supplier audits, omitting pre-shipment inspection, vague specs, and miscalculating landed costs.',
    internalLink: { href: '/knowledge', labelAr: 'قائمة أخطاء الاستيراد وكيف تتجنبها ←', labelEn: 'Import Mistakes Checklist & Prevention ←' }
  },
  {
    id: 37,
    category: 'china',
    questionAr: 'هل يحتاج التاجر إلى السفر إلى الصين لبدء التجارة والاستيراد؟',
    questionEn: 'Is travelling to China necessary to start importing?',
    answerAr: 'ليس شرطاً إلزامياً لكافة المشاريع، حيث يمكن تنفيذ الاستيراد والتفاوض والتدقيق والفحص الميداني عن بُعد عبر هيئات متخصصة. ولكن السفر يكون مفيداً جداً عند التوسع في صفقات كبرى، أو زيارة المعارض المتخصصة مثل معرض كانتون Canton Fair والأسواق الكبرى.',
    answerEn: 'Not mandatory for all transactions, as sourcing and audits can be managed remotely; however, visiting expos like Canton Fair adds strategic value.',
    internalLink: { href: '/experiences/canton-fair-programs', labelAr: 'برامج زيارة معرض كانتون والصين ←', labelEn: 'Canton Fair & China Trip Programs ←' }
  },
  {
    id: 38,
    category: 'china',
    questionAr: 'ما أهم المدن والأسواق التجارية الصناعية في الصين؟',
    questionEn: 'What are the primary industrial and commercial cities in China?',
    answerAr: 'تتفاوت المدن حسب الصناعة: قوانغتشو (الملابس والإلكترونيات العامة)، إيو Yiwu (البضائع الخفيفة والجملة)، شينزين (التكنولوجيا والدقائق الإلكترونية)، فوشان (الأثاث ومواد البناء)، ودونغ غوان (المعدات والبلاستيك والتصنيع الدقيق).',
    answerEn: 'Key hubs include Guangzhou (apparel & general trade), Yiwu (small commodities), Shenzhen (electronics), Foshan (furniture), and Dongguan (machinery).',
    internalLink: { href: '/china/cities', labelAr: 'دليل المدن والأسواق الصناعية في الصين ←', labelEn: 'China Cities & Industrial Hubs Guide ←' }
  },
  {
    id: 39,
    category: 'china',
    questionAr: 'كيف يمكن حساب تكلفة المنتج والشحن والجمارك (Landed Cost) قبل الشراء؟',
    questionEn: 'How to calculate total landed cost before placing an import order?',
    answerAr: 'تُحسب التكلفة الإجمالية الواصلة بالمعادلة: (سعر المنتج بالمصنع EXW/FOB) + (تكلفة النقل الداخلي والفحص) + (تكلفة الشحن البحري/الجوي) + (رسوم التأمين) + (الرسوم الجمركية ورسوم موانئ الوصول وضريبة القيمة المضافة) للحصول على التكلفة الحقيقية للقطعة.',
    answerEn: 'Calculate Landed Cost: (Product FOB price) + (Freight) + (Insurance) + (Customs Duty & Tariffs) + (Local Port Handling & VAT) = Total Cost Per Unit.',
    internalLink: { href: '/trade-intelligence/customs-updates', labelAr: 'حاسبة وتحديثات الجمارك والشحن ←', labelEn: 'Customs & Landing Cost Intelligence ←' }
  },
  {
    id: 40,
    category: 'china',
    questionAr: 'ما أهم الشروط الواجب توفرها قبل طلب تصنيع منتج خاص في الصين؟',
    questionEn: 'What prerequisites are required before ordering custom manufacturing in China?',
    answerAr: 'تشمل إعداد كراسة الشروط الفنية المكتملة CAD/Tech Pack، تحديد خامات التصنيع والدقة المطلوبة، تحديد كميات الطلب الأدنى MOQ، إقرار وتوثيق العينة المعتمدة Golden Sample، وتحديد شروط الجزاءات ومتابعة الجودة.',
    answerEn: 'Requires detailed technical specs (Tech Pack/CAD), MOQ agreement, approved Golden Sample sign-off, and strict quality inspection terms.',
    internalLink: { href: '/china/factories', labelAr: 'اشتراطات التعاقد مع المصانع الصينية ←', labelEn: 'China Factory Contracting Requirements ←' }
  },

  // 🌐 رابعاً: الموقع والمحتوى والهوية الرقمية (41-50)
  {
    id: 41,
    category: 'digital',
    questionAr: 'أين يمكن متابعة حسام مبروك عبر المنصات الرقمية؟',
    questionEn: 'Where can I follow Hossam Mabrouk across official digital platforms?',
    answerAr: 'يمكن متابعة حسام مبروك عبر القنوات الرسمية المعتمدة المرتبطة بموقعه الشخصي، حيث تُنشر المقالات التحليلية، الفيديوهات التعليمية، والتحديثات المباشرة حول أسواق التوريد والتجارة والتكنولوجيا.',
    answerEn: 'Follow Hossam Mabrouk via verified channels linked directly from his official portal for articles, video insights, and trade updates.',
    internalLink: { href: '/about/directory', labelAr: 'دليل القنوات والحسابات الرسمية ←', labelEn: 'Verified Accounts Directory ←' }
  },
  {
    id: 42,
    category: 'digital',
    questionAr: 'ما هي الحسابات الرسمية المعتمدة لحسام مبروك؟',
    questionEn: 'What are the verified official accounts for Hossam Mabrouk?',
    answerAr: 'الحسابات المعتمدة هي الحسابات الموثقة والمنشورة حصراً على المرجع الرسمي HossamMabrouk.com (يشمل ذلك لينكدإن، يوتيوب، الواتساب المعتمد، البريد الرسمي، إنستغرام، وفيسبوك) للحماية من الانتحال.',
    answerEn: 'Official accounts comprise his verified LinkedIn, YouTube, official WhatsApp, corporate Email, Instagram, and Facebook published on his portal.',
    internalLink: { href: '/about/directory', labelAr: 'استعرض الحسابات الرسمية المعتمدة ←', labelEn: 'View Verified Social Accounts ←' }
  },
  {
    id: 43,
    category: 'digital',
    questionAr: 'ما هو النطاق والموقع الرسمي لحسام مبروك؟',
    questionEn: 'What is the official domain and website of Hossam Mabrouk?',
    answerAr: 'الموقع الرسمي المعتمد هو: HossamMabrouk.com، وهو المنصة الموحدة التي تجمع السيرة الذاتية الرسمية، الإنجازات، التايم لاين المهني، المقالات المعرفية، أدلة التوريد والصين، وتطبيقات التكنولوجيا والأعمال.',
    answerEn: 'The official verified domain is HossamMabrouk.com, serving as his central personal hub, knowledge portal, and consultation booking engine.',
    internalLink: { href: '/about/bio', labelAr: 'المرجع الرسمي المعتمد ←', labelEn: 'Official Verified Source ←' }
  },
  {
    id: 44,
    category: 'digital',
    questionAr: 'أين يمكن قراءة مقالات وأدلة حسام مبروك؟',
    questionEn: 'Where can I read Hossam Mabrouk’s articles and guides?',
    answerAr: 'يمكن قراءة المقالات والأدلة عبر قسم المعرفة والمقالات التخصصية على الموقع الرسمي HossamMabrouk.com، والتي تغطي التجارة مع الصين، التوريد، التصنيع، الشحن، الجمارك، والذكاء الاصطناعي للأعمال.',
    answerEn: 'Read articles and guides on the Knowledge Hub at HossamMabrouk.com covering China sourcing, manufacturing, shipping, and AI tools.',
    internalLink: { href: '/knowledge', labelAr: 'زيارة قسم المقالات والمعرفة ←', labelEn: 'Visit Articles & Knowledge Section ←' }
  },
  {
    id: 45,
    category: 'digital',
    questionAr: 'أين يمكن مشاهدة المحتوى المرئي والفيديوهات لحسام مبروك؟',
    questionEn: 'Where can I watch Hossam Mabrouk’s videos and visual content?',
    answerAr: 'يمكن مشاهدة الفيديوهات والتغطيات الميدانية عبر القناة الرسمية المعتمدة على يوتيوب وحسابات المحتوى المرئي الموثقة والمرتبطة مباشرة بالموقع الرسمي.',
    answerEn: 'Watch video field coverage and educational trade videos on his verified YouTube channel and official video portals.',
    internalLink: { href: '/about/directory', labelAr: 'قناة يوتيوب والحسابات المرئية ←', labelEn: 'YouTube Channel & Video Portals ←' }
  },
  {
    id: 46,
    category: 'digital',
    questionAr: 'هل يقدم حسام مبروك محتوى تعليمياً وتثقيفياً مجانياً؟',
    questionEn: 'Does Hossam Mabrouk provide free educational trade content?',
    answerAr: 'نعم، يمثل المحتوى التثقيفي الميداني جزءاً أساسياً من رسالة المنصة الشخصية، حيث يقدم مقالات وأدلة وشروحات عملية تبسط التجارة مع الصين وتساعد رواد الأعمال على اتخاذ قرارات صحيحة.',
    answerEn: 'Yes, providing practical field-tested trade education and transparent China sourcing guides is a core pillar of his official portal.',
    internalLink: { href: '/knowledge', labelAr: 'تصفح المحتوى التعليمي المجاني ←', labelEn: 'Browse Free Educational Content ←' }
  },
  {
    id: 47,
    category: 'digital',
    questionAr: 'هل يقدم حسام مبروك محتوى عن الذكاء الاصطناعي وتطبيقاته في الأعمال؟',
    questionEn: 'Does Hossam Mabrouk cover AI technology and its business applications?',
    answerAr: 'نعم، يركز حسام مبروك على دمج أدوات الذكاء الاصطناعي والتكنولوجيا الحديثة في تحليلات التجارة، البحث عن المنتجات، التفاوض التجاري، وأتمتة العمليات اللوجستية وتطوير الأعمال.',
    answerEn: 'Yes, he covers practical integration of AI tools for trade analysis, supplier research, negotiation automation, and business scaling.',
    internalLink: { href: '/knowledge', labelAr: 'مقالات الذكاء الاصطناعي للأعمال ←', labelEn: 'AI for Business Articles ←' }
  },
  {
    id: 48,
    category: 'digital',
    questionAr: 'كيف يمكن التواصل الرسمي والمباشر مع حسام مبروك؟',
    questionEn: 'How to formally contact Hossam Mabrouk?',
    answerAr: 'يمكن التواصل من خلال الوسائل المعتمدة فقط المنشورة على موقعه الرسمي HossamMabrouk.com عبر البريد الإلكتروني الرسمي mabrouk@meridian-co.com أو الرقم المعتمد على واتساب +20 120 400 9000.',
    answerEn: 'Contact formally via official email (mabrouk@meridian-co.com) or verified corporate WhatsApp (+20 120 400 9000) listed on his portal.',
    internalLink: { href: '/about/directory', labelAr: 'وسائل التواصل المعتمدة ←', labelEn: 'Official Contact Channels ←' }
  },
  {
    id: 49,
    category: 'digital',
    questionAr: 'كيف يمكن حجز جلسة استشارية خاصة مع حسام مبروك؟',
    questionEn: 'How can I book a private consultation session with Hossam Mabrouk?',
    answerAr: 'يمكن حجز الاستشارات المباشرة عبر محرك الحجز الرسمي المتاح على الموقع في قسم الاستشارات، حيث يتم تحديد موعد الجلسة ومناقشة تفاصيل مشروع التوريد أو الاستيراد أو التصنيع المطلوب.',
    answerEn: 'Book direct strategy consultations through the official booking portal on the website to review your sourcing and import project.',
    internalLink: { href: '/#book', labelAr: 'احجز جلسة استشارية الآن ←', labelEn: 'Book Consultation Session Now ←' }
  },
  {
    id: 50,
    category: 'digital',
    questionAr: 'كيف يمكن متابعة أحدث تحديثات وأدلة حسام مبروك التجارية؟',
    questionEn: 'How to stay updated with Hossam Mabrouk’s latest trade insights?',
    answerAr: 'يمكن متابعة قسم أحدث التحديثات والمقالات على موقع HossamMabrouk.com، والاشتراك في النشرة المعرفية، ومتابعة الحسابات الرسمية المعتمدة للحصول على التحديثات الدورية فور صدورها.',
    answerEn: 'Check the latest insights section on HossamMabrouk.com, subscribe to trade updates, and follow official verified platforms.',
    internalLink: { href: '/knowledge', labelAr: 'تابع أحدث التحديثات المعرفية ←', labelEn: 'Follow Latest Knowledge Updates ←' }
  }
];
