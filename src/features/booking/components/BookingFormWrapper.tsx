"use client";

import { useRouter } from "next/navigation";
import { BookingForm } from "@/features/booking/components/BookingForm";
import type { Locale } from "@/domains/shared/value-objects";

interface BookingFormWrapperProps {
  locale: Locale;
  targetType: "consultation" | "experience" | "corporate" | "event";
  scheduleId?: string;
}

export default function BookingFormWrapper({
  locale,
  targetType,
  scheduleId,
}: BookingFormWrapperProps) {
  const router = useRouter();

  function handleSuccess(bookingId: string, _code: string) {
    router.push(`/${locale}/booking/confirmation/${bookingId}`);
  }

  return (
    <BookingForm
      locale={locale}
      targetType={targetType}
      scheduleId={scheduleId}
      onSuccess={handleSuccess}
    />
  );
}
