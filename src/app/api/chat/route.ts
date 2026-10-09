import { NextResponse } from "next/server";
import { buildHossamPersonaSystemPrompt } from "@/lib/ai/prompts";
import { detectIntent } from "@/lib/ai/intent";
import { findBestFaqMatch, getDomainFallbackResponse } from "@/lib/ai/rag";

export async function POST(req: Request) {
  try {
    const { messages, locale = "ar" } = await req.json();
    const lastUserMessage = messages?.[messages.length - 1]?.content || "";
    const isAr = locale === "ar";
    const cleanQuery = lastUserMessage.trim();

    // 1. Detect Conversational & Trade Intent
    const intent = detectIntent(cleanQuery);

    // 2. Intercept Casual Greetings immediately
    if (intent === "GREETING") {
      const greetingReply = getDomainFallbackResponse("GREETING", isAr);
      return new NextResponse(greetingReply, {
        status: 200,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    // 3. Primary AI Engine: Gemini 1.5/2.5 Flash API Integration
    const apiKey =
      process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (apiKey) {
      try {
        const systemPrompt = buildHossamPersonaSystemPrompt(locale);
        const userPromptWithContext = `[System Classification: Intent = ${intent}]\nUser Question: ${cleanQuery}`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [
                    {
                      text: `${systemPrompt}\n\n${userPromptWithContext}`,
                    },
                  ],
                },
              ],
              generationConfig: { maxOutputTokens: 800, temperature: 0.3 },
            }),
          }
        );

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (text && text.trim().length > 10) {
            return new NextResponse(text, {
              status: 200,
              headers: { "Content-Type": "text/plain; charset=utf-8" },
            });
          }
        }
      } catch (geminiError) {
        console.warn("Gemini API call warning, dropping to fallback:", geminiError);
      }
    }

    // 4. Secondary Engine: Density-Gated FAQ Search (Requires >= 50% match density and high confidence)
    const { faq, score } = findBestFaqMatch(cleanQuery);

    if (faq && score > 0) {
      const reply = isAr ? faq.answerAr : faq.answerEn;
      return new NextResponse(reply, {
        status: 200,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    // 5. Tertiary Engine: Domain-Specific Expert Response (Guarantees 100% logical, domain-targeted response)
    const domainReply = getDomainFallbackResponse(intent, isAr);
    return new NextResponse(domainReply, {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return new NextResponse(
      "عذراً، حدث خطأ في معالجة طلبك. يمكنك التواصل مباشرة عبر الواتساب: +20 107 070 7166",
      { status: 500 }
    );
  }
}
