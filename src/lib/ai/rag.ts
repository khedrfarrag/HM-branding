import { FAQS_DATA } from "@/data/faqs";
import { FAQItem } from "@/data/faqs/types";
import { ChatIntent } from "./intent";
import { getKnowledgeResponse } from "./knowledge";

const STOP_WORDS = new Set([
  "اي",
  "أى",
  "أي",
  "عامل",
  "ازيك",
  "هذا",
  "هذه",
  "على",
  "علي",
  "في",
  "من",
  "عن",
  "مع",
  "هل",
  "ما",
  "ماذا",
  "كيف",
  "اريد",
  "أريد",
  "تقدر",
  "ممكن",
  "تساعدني",
  "بدي",
  "عاوز",
  "عايز",
  "الي",
  "إلى",
  "تقولي",
  "بخصوص",
  "عمل",
  "يعمل",
  "كان",
  "يكون",
]);

/**
 * Density-gated Question-Only RAG search against verified FAQ database.
 * Requires high token match ratio (>= 50%) so generic broad terms don't hijack queries.
 */
export function findBestFaqMatch(
  query: string
): { faq: FAQItem | null; score: number; matchRatio: number } {
  const cleanQuery = query.trim().toLowerCase();
  const queryTokens = Array.from(
    new Set(
      cleanQuery
        .split(/\s+/)
        .map((t) => t.replace(/[^\p{L}\p{N}]/gu, ""))
        .filter((k) => k.length > 2 && !STOP_WORDS.has(k))
    )
  );

  if (queryTokens.length === 0) {
    return { faq: null, score: 0, matchRatio: 0 };
  }

  let matchedFaq: FAQItem | null = null;
  let maxScore = 0;

  for (const faq of FAQS_DATA) {
    const questionText = (faq.questionAr + " " + faq.questionEn).toLowerCase();
    let score = 0;

    for (const token of queryTokens) {
      if (questionText.includes(token)) {
        score += 1;
      }
    }

    if (score > maxScore) {
      maxScore = score;
      matchedFaq = faq;
    }
  }

  const matchRatio = maxScore / queryTokens.length;

  // Strict Density Gating: Require >=50% token coverage AND min 3 hits for multi-word queries
  const isHighConfidence =
    (queryTokens.length >= 3 && maxScore >= 3 && matchRatio >= 0.5) ||
    (queryTokens.length < 3 && maxScore >= 2 && matchRatio >= 0.5);

  if (matchedFaq && isHighConfidence) {
    return { faq: matchedFaq, score: maxScore, matchRatio };
  }

  return { faq: null, score: 0, matchRatio: 0 };
}

/**
 * Delegates to Comprehensive Knowledge Resolver for country, material & domain fallback responses.
 */
export function getDomainFallbackResponse(
  intent: ChatIntent,
  isAr: boolean
): string {
  return getKnowledgeResponse(intent, isAr);
}
