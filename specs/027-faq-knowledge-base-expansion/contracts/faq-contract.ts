/**
 * Contract: FAQ Knowledge Base Schema
 * Feature: 027-faq-knowledge-base-expansion
 */

export type FAQCategory = 'bio' | 'content' | 'china' | 'digital';

export interface InternalLinkCTA {
  href: string;
  labelAr: string;
  labelEn: string;
}

export interface FAQItemContract {
  id: number;
  category: FAQCategory;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  credibilityLineAr: string;
  internalLink?: InternalLinkCTA;
}

export interface FAQCategoryTab {
  id: 'all' | FAQCategory;
  labelAr: string;
  labelEn: string;
  count: number;
}
