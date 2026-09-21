import { BIO_FAQS } from './faqs/bio';
import { CONTENT_FAQS } from './faqs/content';
import { CHINA_FAQS } from './faqs/china';
import { DIGITAL_FAQS } from './faqs/digital';
import type { FAQItem } from './faqs/types';

export type { FAQItem } from './faqs/types';

export const FAQ_CATEGORIES = [
  { id: 'all', labelAr: 'الكل (200 سؤال)', labelEn: 'All Questions (200)' },
  { id: 'bio', labelAr: '👤 من هو حسام مبروك؟ (50)', labelEn: 'About Hossam Mabrouk (50)' },
  { id: 'content', labelAr: '📚 المعرفة والمحتوى (50)', labelEn: 'Knowledge & Content (50)' },
  { id: 'china', labelAr: '🇨🇳 الصين والتجارة والتوريد (50)', labelEn: 'China, Trade & Sourcing (50)' },
  { id: 'digital', labelAr: '🌐 الموقع والهوية الرقمية (50)', labelEn: 'Official Identity & Site (50)' },
] as const;

export const FAQS_DATA: FAQItem[] = [
  ...BIO_FAQS,
  ...CONTENT_FAQS,
  ...CHINA_FAQS,
  ...DIGITAL_FAQS,
];
