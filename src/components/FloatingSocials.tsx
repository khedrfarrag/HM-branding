"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  SnapchatIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/SocialIcons";
import { useState } from "react";

interface FloatingSocialsProps {
  locale: string;
}

export default function FloatingSocials({ locale }: FloatingSocialsProps) {
  const isAr = locale === "ar";
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const socials = [
    {
      id: "whatsapp",
      icon: WhatsAppIcon,
      url: "https://wa.me/201070707166",
      label: isAr ? "راسلني على واتساب" : "Message on WhatsApp",
      colorClass:
        "hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]",
      position: "top-[10%] -right-2 sm:right-0",
      duration: 6,
      delay: 0,
    },
    {
      id: "instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/hossam.mabrouk9",
      label: isAr ? "تابعني على انستجرام" : "Follow on Instagram",
      colorClass:
        "hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] hover:shadow-[0_0_20px_rgba(228,64,95,0.5)]",
      position: "bottom-[14%] -right-2 sm:right-0",
      duration: 5.5,
      delay: 0.8,
    },
    {
      id: "snapchat",
      icon: SnapchatIcon,
      url: "https://snapchat.com/t/EwaOf46A",
      label: isAr ? "تابعني على سناب شات" : "Follow on Snapchat",
      colorClass:
        "hover:bg-[#FFFC00] hover:text-black hover:border-[#FFFC00] hover:shadow-[0_0_20px_rgba(255,252,0,0.5)]",
      position: "top-[10%] -left-2 sm:left-0",
      duration: 5,
      delay: 0.4,
    },
    {
      id: "tiktok",
      icon: TikTokIcon,
      url: "https://www.tiktok.com/@hossammabrouk9",
      label: isAr ? "تابعني على تيك توك" : "Follow on TikTok",
      colorClass:
        "hover:bg-black hover:text-[#25F4EE] hover:border-[#FE2C55] hover:shadow-[0_0_20px_rgba(254,44,85,0.5)]",
      position: "bottom-[14%] -left-2 sm:left-0",
      duration: 6.5,
      delay: 1.2,
    },
    {
      id: "facebook",
      icon: FacebookIcon,
      url: "https://www.facebook.com/share/1Buf9pVnFe/?mibextid=wwXIfr",
      label: isAr ? "تابعني على فيسبوك" : "Follow on Facebook",
      colorClass:
        "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-[0_0_20px_rgba(24,119,242,0.5)]",
      position: "-top-3 sm:-top-4 left-1/2 -translate-x-1/2",
      duration: 5.8,
      delay: 0.6,
    },
    {
      id: "email",
      icon: EmailIcon,
      url: "mailto:support@hossammabrouk.com",
      label: isAr ? "راسلني بالبريد الإلكتروني" : "Send me an Email",
      colorClass:
        "hover:bg-amber-500 hover:text-black hover:border-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]",
      position: "-bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2",
      duration: 6.2,
      delay: 1.0,
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
            src="/images/hossam-mabrouk-hero.jpg"
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
