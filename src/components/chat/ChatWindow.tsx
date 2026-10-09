"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, Send, Sparkles, User, Bot, Loader2 } from "lucide-react";
import SuggestionPills from "./SuggestionPills";
import ChatCTA from "./ChatCTA";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatWindowProps {
  onClose: () => void;
  locale: string;
}

export default function ChatWindow({ onClose, locale }: ChatWindowProps) {
  const isAr = locale === "ar";
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: isAr
        ? "أهلاً بك! أنا **مساعد حسام مبروك الذكي** لحلول الاستيراد والتوريد والتصنيع في الصين.\n\nكيف يمكنني مساعدتك اليوم في تيسير تجارتك وتأمين شحناتك؟"
        : "Welcome! I am **Hossam Mabrouk's AI Sourcing Assistant** for China import and manufacturing.\n\nHow can I assist you with your trade and supply chain needs today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({ role: m.role, content: m.content })),
          locale,
        }),
      });

      if (!res.ok) throw new Error("API Error");

      const responseText = await res.text();
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responseText,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: isAr
            ? "عذراً، حدث خطأ مؤقت. يمكنك حجز استشارة مباشرة أو التواصل عبر الواتساب: +20 107 070 7166"
            : "Sorry, a temporary error occurred. You can book a consultation or WhatsApp: +20 107 070 7166",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderFormattedText = (text: string) => {
    // Basic Markdown Link Parser [label](url)
    const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
    return (
      <>
        {parts.map((part, i) => {
          const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
          if (match) {
            return (
              <a
                key={i}
                href={match[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline font-bold hover:text-gold-soft transition-colors"
              >
                {match[1]}
              </a>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`fixed bottom-20 z-50 w-[92vw] sm:w-[420px] max-h-[580px] h-[78vh] rounded-3xl border border-gold/30 bg-gradient-to-b from-[#0F1117] via-[#14161F] to-black shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex flex-col overflow-hidden ${
        isAr ? "right-4 sm:right-6" : "left-4 sm:left-6"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 rounded-full overflow-hidden border border-gold/60 shrink-0">
            <Image
              src="/images/WhatsApp Image 2026-08-12 at 6.58.46 PM.jpeg"
              alt="Hossam Mabrouk"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="text-start">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-sm font-extrabold text-white">
                {isAr ? "مساعد حسام مبروك" : "Hossam AI Sourcing Assistant"}
              </span>
              <Sparkles className="h-3.5 w-3.5 text-gold animate-pulse" />
            </div>
            <span className="font-mono text-[10px] text-gold font-semibold uppercase block">
              {isAr ? "مستشار الاستيراد والذكاء الاصطناعي" : "China Import Consultant AI"}
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close Chat"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-silver hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-start text-xs sm:text-sm">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {m.role === "assistant" && (
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 text-gold border border-gold/30 shrink-0 mt-1">
                <Bot className="h-4 w-4" />
              </div>
            )}
            <div
              className={`max-w-[82%] rounded-2xl p-3.5 leading-relaxed whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-gold text-black font-semibold rounded-br-none"
                  : "bg-white/[0.04] text-silver border border-glass rounded-bl-none"
              }`}
            >
              {renderFormattedText(m.content)}
              {m.role === "assistant" && <ChatCTA locale={locale} />}
            </div>
            {m.role === "user" && (
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white shrink-0 mt-1">
                <User className="h-4 w-4" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-gold font-mono text-xs">
            <Loader2 className="h-4 w-4 animate-spin text-gold" />
            <span>{isAr ? "حسام مبروك الذكي يكتب الإجابة..." : "Hossam AI is thinking..."}</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestion Pills */}
      <div className="px-4 bg-black/20 border-t border-white/5">
        <SuggestionPills onSelectPrompt={(p) => handleSend(p)} locale={locale} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 border-t border-white/10 bg-black/60 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            isAr ? "اكتب سؤالك عن الاستيراد والتصنيع..." : "Ask about China import & sourcing..."
          }
          disabled={isLoading}
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-silver-dim focus:outline-none focus:border-gold transition-colors"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold text-black hover:bg-gold-soft disabled:opacity-40 transition-colors cursor-pointer shrink-0"
        >
          <Send className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
        </button>
      </form>
    </motion.div>
  );
}
