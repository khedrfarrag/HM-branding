import { BaseContent } from "@/types/content";

export interface Article extends BaseContent {
  title: string;
  excerpt: string;
  body: string;
  category: string;
  topic: string;
  series: string | null;
  tags: string[];
  readingTimeMinutes: number;
  relatedSlugs: string[];
  coverImage: string | null;
}

export interface GlossaryTerm extends BaseContent {
  term: string;
  termEn: string;
  definition: string;
  relatedTermSlugs: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
