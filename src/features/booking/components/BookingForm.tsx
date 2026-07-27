"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PublicBookingSchema } from "../schemas/booking.schema";
import type { PublicBookingInput } from "../schemas/booking.schema";
import type { Locale } from "@/domains/shared/value-objects";
import type { BookingActionResult } from "../actions/submit-booking";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  locale: Locale;
  targetType: "consultation" | "experience" | "corporate" | "event";
  scheduleId?: string;
  onSuccess?: (bookingId: string, code: string) => void;
}

type FieldKey = keyof Pick<PublicBookingInput, "name" | "email" | "phone" | "country" | "notes">;

const LABELS: Record<FieldKey, { ar: string; en: string }> = {
  name:    { ar: "الاسم الكامل",            en: "Full Name" },
  email:   { ar: "البريد الإلكتروني",       en: "Email Address" },
  phone:   { ar: "الهاتف / واتساب",         en: "Phone / WhatsApp" },
  country: { ar: "بلد الإقامة",             en: "Country" },
  notes:   { ar: "ملاحظات أو متطلبات خاصة", en: "Notes or Special Requirements" },
};

const PLACEHOLDERS: Record<FieldKey, { ar: string; en: string }> = {
  name:    { ar: "اسمك الكريم",          en: "Your full name" },
  email:   { ar: "example@email.com",    en: "example@email.com" },
  phone:   { ar: "+966 5x xxxx xxxx",   en: "+1 555 000 0000" },
  country: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" },
  notes:   { ar: "اكتب استفساراتك هنا...", en: "Write your inquiries here..." },
};

export function BookingForm({
  locale,
  targetType,
  scheduleId,
  onSuccess,
}: BookingFormProps) {
  const isAr = locale === "ar";
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PublicBookingInput>({
    resolver: zodResolver(PublicBookingSchema),
    defaultValues: { targetType, scheduleId, locale },
  });

  const label = (key: FieldKey) => LABELS[key][isAr ? "ar" : "en"];
  const placeholder = (key: FieldKey) => PLACEHOLDERS[key][isAr ? "ar" : "en"];

  function onSubmit(data: PublicBookingInput) {
    setServerError(null);
    startTransition(async () => {
      try {
        const res = await fetch("/api/submit-booking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result: BookingActionResult = await res.json();
        if (result.success) {
          onSuccess?.(result.bookingId, result.confirmationCode);
        } else {
          setServerError(result.error);
        }
      } catch {
        setServerError(
          isAr
            ? "حدث خطأ في الاتصال. يرجى المحاولة مجدداً."
            : "A connection error occurred. Please try again."
        );
      }
    });
  }

  const fieldClass = cn(
    "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3",
    "text-white placeholder-gray-500 text-sm",
    "focus:outline-none focus:border-gold/60 transition-colors duration-200"
  );
  const errorClass = "mt-1 text-xs text-red-400";
  const labelClass = "mb-1.5 block text-sm text-gray-300";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      dir={isAr ? "rtl" : "ltr"}
      className="space-y-5"
      id="booking-form"
      noValidate
    >
      {/* Hidden fields */}
      <input type="hidden" {...register("targetType")} />
      <input type="hidden" {...register("locale")} />
      {scheduleId && <input type="hidden" {...register("scheduleId")} />}

      {/* Row: Name + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="booking-name" className={labelClass}>{label("name")}</label>
          <input
            id="booking-name"
            type="text"
            autoComplete="name"
            className={fieldClass}
            placeholder={placeholder("name")}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="booking-email" className={labelClass}>{label("email")}</label>
          <input
            id="booking-email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            placeholder={placeholder("email")}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Row: Phone + Country */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="booking-phone" className={labelClass}>{label("phone")}</label>
          <input
            id="booking-phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder={placeholder("phone")}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="booking-country" className={labelClass}>{label("country")}</label>
          <input
            id="booking-country"
            type="text"
            autoComplete="country-name"
            className={fieldClass}
            placeholder={placeholder("country")}
            aria-invalid={!!errors.country}
            {...register("country")}
          />
          {errors.country && <p className={errorClass}>{errors.country.message}</p>}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="booking-notes" className={labelClass}>{label("notes")}</label>
        <textarea
          id="booking-notes"
          rows={4}
          className={cn(fieldClass, "resize-none")}
          placeholder={placeholder("notes")}
          {...register("notes")}
        />
      </div>

      {/* Server error */}
      {serverError && (
        <div
          role="alert"
          className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
        >
          {serverError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className={cn(
          "w-full rounded-full bg-linear-to-b from-gold-soft to-gold px-6 py-3.5",
          "text-sm font-semibold text-black shadow-gold",
          "transition-all duration-300",
          "hover:translate-y-[-2px] hover:shadow-[0_14px_50px_rgba(199,161,92,0.32)]",
          "disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
        )}
      >
        {isPending
          ? isAr ? "جاري الإرسال..." : "Submitting..."
          : isAr ? "إرسال الطلب" : "Submit Booking Request"}
      </button>
    </form>
  );
}
