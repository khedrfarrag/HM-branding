"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ChatBadge from "./ChatBadge";
import ChatWindow from "./ChatWindow";

interface ChatWidgetProps {
  locale: string;
}

export default function ChatWidget({ locale }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isAr = locale === "ar";

  return (
    <div className={`fixed bottom-5 z-50 ${isAr ? "right-5" : "left-5"}`}>
      <ChatBadge isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} locale={locale} />
      <AnimatePresence>
        {isOpen && <ChatWindow onClose={() => setIsOpen(false)} locale={locale} />}
      </AnimatePresence>
    </div>
  );
}
