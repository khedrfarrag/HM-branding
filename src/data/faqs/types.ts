export type FAQCategory = 'bio' | 'content' | 'china' | 'digital';

export interface InternalLinkCTA {
  href: string;
  labelAr: string;
  labelEn: string;
}

export interface FAQItem {
  id: number;
  category: FAQCategory;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  credibilityLineAr?: string;
  internalLink?: InternalLinkCTA;
}
