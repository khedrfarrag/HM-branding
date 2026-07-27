"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  getConsultationSlotsAction,
  type ConsultationDayGroup,
  type ConsultationSlot,
} from "@/features/booking/actions/get-consultation-slots";
import BookingFormWrapper from "@/features/booking/components/BookingFormWrapper";
import type { Locale } from "@/domains/shared/value-objects";

interface BookingSectionProps {
  dict: Record<string, unknown>;
  locale: Locale;
}

export default function BookingSection({ dict: rawDict, locale }: BookingSectionProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict = rawDict as any;
  const isAr = locale === "ar";
  const [dayGroups, setDayGroups] = useState<ConsultationDayGroup[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<ConsultationSlot | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function loadSlots() {
      setLoading(true);
      try {
        let groups: ConsultationDayGroup[] = [];
        const res = await fetch("/api/consultation-slots", { cache: "no-store" });
        if (res.ok) {
          groups = await res.json();
        } else {
          groups = await getConsultationSlotsAction();
        }

        setDayGroups(groups);
        if (groups && groups.length > 0) {
          setSelectedDate(groups[0].date);
        }
      } catch (err) {
        console.warn("API fetch failed, attempting direct Server Action fallback...", err);
        try {
          const fallback = await getConsultationSlotsAction();
          setDayGroups(fallback || []);
          if (fallback && fallback.length > 0) setSelectedDate(fallback[0].date);
        } catch (actionErr) {
          console.error("Action fallback failed:", actionErr);
          setDayGroups([]);
        }
      } finally {
        setLoading(false);
      }
    }
    loadSlots();
  }, []);

  const activeGroup = dayGroups.find((g) => g.date === selectedDate);
  const slotsForSelectedDate = activeGroup ? activeGroup.slots : [];

  function formatDateLabel(dateStr: string) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString(isAr ? "ar-EG" : "en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  }

  function handleConfirmBooking() {
    if (!selectedSlot) return;
    setIsModalOpen(true);
  }

  return (
    <section id="book" className="bg-black px-sp-6 py-sp-10 md:px-sp-8" dir={isAr ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-[1360px] w-full">
        <div className="overflow-hidden rounded-2xl border border-glass bg-gradient-to-br from-blue-deep via-black to-[#0C0E12] grid grid-cols-1 lg:grid-cols-2 relative shadow-2xl">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gold/5 filter blur-3xl" />

          {/* Left Column: Details */}
          <div className="p-sp-6 md:p-sp-8 flex flex-col items-start text-start relative z-10">
            <span className="eyebrow">{dict?.book?.eyebrow || (isAr ? "تواصل معنا" : "Contact Us")}</span>
            <h3 className="mt-sp-3 font-display text-fs-h2 font-semibold leading-tight text-white">
              {dict?.book?.title || (isAr ? "جاهز لتأمين سلاسل التوريد الخاصة بك؟" : "Ready to Secure Your Supply Chain?")}
            </h3>
            <p className="mt-sp-5 text-fs-body font-light leading-lh-relaxed text-silver">
              {dict?.book?.desc || (isAr ? "احجز مكالمة استشارية مباشرة مع حسام مبروك لمناقشة أهداف عملك." : "Book a direct consultation call with Hussam Mabrouk to discuss your trade goals.")}
            </p>

            {/* Consultation Details Card */}
            <div className="mt-sp-6 w-full max-w-[420px] rounded-xl border border-glass bg-glass p-sp-5 backdrop-blur-[24px]">
              <div className="flex justify-between border-b border-glass pb-sp-2.5 font-mono text-fs-micro text-silver-dim tracking-wider uppercase">
                <span>{dict?.book?.details?.duration || (isAr ? "المدة: 30 دقيقة" : "Duration: 30 mins")}</span>
              </div>
              <div className="flex justify-between border-b border-glass py-sp-2.5 font-mono text-fs-micro text-silver-dim tracking-wider uppercase">
                <span>{dict?.book?.details?.location || (isAr ? "النوع: مكالمة فيديو" : "Type: Video Call")}</span>
              </div>
              <div className="flex justify-between pt-sp-2.5 font-mono text-fs-micro text-silver-dim tracking-wider uppercase">
                <span>{dict?.book?.details?.timezone || (isAr ? "التوقيت: GMT+3" : "Timezone: GMT+3")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Time Slot Scheduler */}
          <div className="p-sp-6 md:p-sp-8 flex flex-col justify-center relative z-10 lg:border-s lg:border-glass bg-white/[0.01]">
            <span className="slot-label text-start mb-sp-3 font-semibold text-white">
              {dict?.book?.slots?.label || (isAr ? "اختر اليوم والوقت المناسب:" : "Choose suitable day & time:")}
            </span>

            {loading ? (
              <div className="text-silver text-sm py-12 text-center animate-pulse flex flex-col items-center gap-2">
                <div className="h-5 w-5 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                <span>{isAr ? "جاري جلب المواعيد المتاحة..." : "Loading available slots..."}</span>
              </div>
            ) : dayGroups.length === 0 ? (
              <div className="text-silver-dim text-sm py-10 text-center border border-dashed border-glass rounded-xl space-y-2">
                <p>{isAr ? "لا توجد مواعيد متاحة حالياً." : "No available slots at the moment."}</p>
                <p className="text-xs text-gold">{isAr ? "يرجى التواصل معنا مباشرةً لإعداد موعد مناسب." : "Please contact us directly to arrange a session."}</p>
              </div>
            ) : (
              <>
                {/* Dates Selector Carousel / Grid */}
                <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
                  {dayGroups.map((g) => {
                    const isSelected = g.date === selectedDate;
                    return (
                      <button
                        key={g.date}
                        onClick={() => {
                          setSelectedDate(g.date);
                          setSelectedSlot(null);
                        }}
                        className={cn(
                          "px-4 py-2.5 rounded-xl text-xs font-mono whitespace-nowrap border transition-all duration-200 cursor-pointer flex flex-col items-center",
                          isSelected
                            ? "bg-[#C7A15C]/20 border-[#C7A15C] text-[#C7A15C] font-bold shadow-[0_0_15px_rgba(199,161,92,0.2)]"
                            : "border-glass bg-glass text-silver hover:text-white hover:border-silver/40"
                        )}
                      >
                        <span>{formatDateLabel(g.date)}</span>
                        <span className="text-[10px] opacity-70 mt-0.5">
                          {g.slots.length} {isAr ? "أوقات" : "slots"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Slots Grid with Seat Counter */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {slotsForSelectedDate.map((slot) => {
                    const isSelected = selectedSlot?.id === slot.id;
                    const isFull = slot.seats_remaining <= 0;
                    return (
                      <button
                        key={slot.id}
                        disabled={isFull}
                        onClick={() => setSelectedSlot(slot)}
                        className={cn(
                          "flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-200 cursor-pointer text-center",
                          isSelected
                            ? "bg-[#C7A15C] border-[#C7A15C] text-black font-bold shadow-lg shadow-[#C7A15C]/20 scale-[1.02]"
                            : isFull
                            ? "border-white/5 bg-white/[0.01] text-gray-600 cursor-not-allowed line-through"
                            : "border-glass bg-white/[0.03] text-white hover:border-[#C7A15C]/50 hover:bg-white/[0.06]"
                        )}
                      >
                        <span className="font-mono text-sm font-semibold">{slot.slot_time}</span>
                        <span
                          className={cn(
                            "text-[10px] mt-1 font-mono tracking-wider",
                            isSelected
                              ? "text-black/80 font-medium"
                              : "text-[#C7A15C]"
                          )}
                        >
                          {slot.capacity > 1
                            ? isAr
                              ? `${slot.seats_remaining} مقاعد متبقية`
                              : `${slot.seats_remaining} seats left`
                            : isAr
                            ? "جلسة خاصة"
                            : "Private session"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Action Button */}
                <button
                  onClick={handleConfirmBooking}
                  disabled={!selectedSlot}
                  className={cn(
                    "mt-sp-6 w-full h-[52px] rounded-full bg-gradient-to-b from-gold-soft to-gold text-sm font-semibold text-black hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300",
                    !selectedSlot && "opacity-50 cursor-not-allowed hover:translate-y-0 shadow-none"
                  )}
                >
                  {selectedSlot
                    ? isAr
                      ? `تأكيد حجز موعد (${selectedSlot.slot_time})`
                      : `Confirm Booking (${selectedSlot.slot_time})`
                    : dict?.book?.slots?.confirm || (isAr ? "تأكيد الموعد" : "Confirm Slot")}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-xl bg-[#0F1218] border border-glass rounded-2xl p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-silver-dim hover:text-white text-xl font-bold p-2 transition-colors"
            >
              ✕
            </button>

            {/* Header Context */}
            <div className="mb-6 text-start">
              <span className="text-gold uppercase tracking-widest text-[11px] font-mono font-semibold">
                {isAr ? "استشارة خاصة" : "Private Consultation"}
              </span>
              <h4 className="text-xl font-bold text-white mt-1">
                {isAr ? "إكمال تفاصيل حجز الاستشارة" : "Complete Consultation Booking"}
              </h4>
              {selectedSlot && selectedDate && (
                <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-gold/10 border border-gold/30 px-3 py-1.5 text-xs text-gold font-mono">
                  <span>📅 {formatDateLabel(selectedDate)}</span>
                  <span>⏰ {selectedSlot.slot_time}</span>
                </div>
              )}
            </div>

            {/* Booking Form Component */}
            <BookingFormWrapper
              locale={locale}
              targetType="consultation"
              scheduleId={selectedSlot?.id}
            />
          </div>
        </div>
      )}
    </section>
  );
}
