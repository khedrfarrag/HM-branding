import { BaseContent } from "@/types/content";
import { ProcessStep } from "@/types/content";

export interface Service extends BaseContent {
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string | null;
  processSteps: ProcessStep[];
  successStorySlugs: string[];
}

export interface SuccessStory extends BaseContent {
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  testimonialQuote: string;
  serviceSlug: string;
}
