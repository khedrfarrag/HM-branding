"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

interface FloatingSocialsProps {
  locale: string;
}

const XIcon = () => (
  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function FloatingSocials({ locale }: FloatingSocialsProps) {
  const isAr = locale === "ar";
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const socials = [
    {
      id: "linkedin",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/hussam-mabrouk/",
      label: isAr ? "تواصل عبر لينكد إن" : "Connect on LinkedIn",
      colorClass: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.5)]",
      position: "top-[12%] right-[2%]",
      duration: 5,
      delay: 0,
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      url: "https://wa.me/201204009000",
      label: isAr ? "راسلني على واتساب" : "Message on WhatsApp",
      colorClass: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]",
      position: "bottom-[16%] right-[2%]",
      duration: 6,
      delay: 0.8,
    },
    {
      id: "email",
      icon: Mail,
      url: "mailto:mabrouk@meridian-co.com",
      label: isAr ? "أرسل بريد إلكتروني" : "Send an Email",
      colorClass: "hover:bg-[#C7A15C] hover:text-black hover:border-[#C7A15C] hover:shadow-[0_0_20px_rgba(199,161,92,0.5)]",
      position: "top-[25%] left-[-4%]",
      duration: 5.5,
      delay: 0.4,
    },
    {
      id: "x",
      icon: XIcon,
      url: "https://x.com/",
      label: isAr ? "تابعني على إكس" : "Follow on X",
      colorClass: "hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]",
      position: "bottom-[22%] left-[-1%]",
      duration: 6.5,
      delay: 1.2,
    },
  ];

  return (
    <div className="relative flex items-center justify-center h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px] max-w-full">
      {/* Ambient Radial Glow Background */}
      <div className="absolute h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] lg:h-[340px] lg:w-[340px] rounded-full bg-gradient-to-br from-gold/15 via-blue-mid/20 to-cyan/10 filter blur-[70px] pointer-events-none" />

      {/* Circular Profile Frame */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 h-[200px] w-[200px] sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px] rounded-full border border-glass bg-gradient-to-br from-graphite-700 to-black p-1 shadow-2xl overflow-hidden group"
      >
        <div className="relative w-full h-full rounded-full overflow-hidden">
          {/* Hussam's Photo */}
          <Image
            src="/images/personal-img.png"
            alt="Hussam Mabrouk"
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            priority
          />
          {/* Subtle bottom dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Floating Interactive Social Media Badges */}
      {socials.map((item) => {
        const IconComponent = item.icon;

        return (
          <motion.div
            key={item.id}
            className={`absolute z-20 ${item.position}`}
            animate={{
              y: [0, -5, 0],
              x: [0, 3, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <div className="relative">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredBadge(item.id)}
                onMouseLeave={() => setHoveredBadge(null)}
                className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-glass bg-[#14161b]/90 text-silver backdrop-blur-md transition-all duration-300 ${item.colorClass} cursor-pointer active:scale-95 hover:scale-110`}
              >
                <IconComponent />
              </a>

              {/* Custom Tooltip — desktop only */}
              <AnimatePresence>
                {hoveredBadge === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute z-30 pointer-events-none whitespace-nowrap rounded-md bg-black/95 border border-glass/60 px-sp-3 py-1.5 text-[11px] text-white shadow-xl hidden sm:block ${
                      isAr ? "right-1/2 translate-x-1/2 mt-2" : "left-1/2 -translate-x-1/2 mt-2"
                    }`}
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
