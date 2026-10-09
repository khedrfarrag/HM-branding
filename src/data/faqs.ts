import { BIO_FAQS } from './faqs/bio';
import { CONTENT_FAQS } from './faqs/content';
import { CHINA_FAQS } from './faqs/china';
import { DIGITAL_FAQS } from './faqs/digital';
import type { FAQItem } from './faqs/types';

export type { FAQItem } from './faqs/types';

export const FAQ_CATEGORIES = [
  { id: 'all', labelAr: 'الكل (400 سؤال)', labelEn: 'All Questions (400)' },
  { id: 'bio', labelAr: '👤 من هو حسام مبروك؟ (100)', labelEn: 'About Hossam Mabrouk (100)' },
  { id: 'content', labelAr: '📚 المعرفة والمحتوى (100)', labelEn: 'Knowledge & Content (100)' },
  { id: 'china', labelAr: '🇨🇳 الصين والتجارة والتوريد (100)', labelEn: 'China, Trade & Sourcing (100)' },
  { id: 'digital', labelAr: '🌐 الموقع والهوية الرقمية (100)', labelEn: 'Official Identity & Site (100)' },
] as const;

export const FAQS_DATA: FAQItem[] = [
  ...BIO_FAQS,
  ...CONTENT_FAQS,
  ...CHINA_FAQS,
  ...DIGITAL_FAQS,
];
