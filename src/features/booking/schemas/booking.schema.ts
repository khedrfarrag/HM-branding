import { z } from "zod";

// ─── T007: PublicBookingSchema ──────────────────────────────────────────────
export const PublicBookingSchema = z.object({
  name: z.string().min(2, "الاسم يجب أن يكون أكثر من حرفين"),
  email: z.string().email("البريد الإلكتروني غير صالح"),
  phone: z.string().min(7, "رقم الهاتف غير صالح"),
  country: z.string().min(2, "بلد الإقامة مطلوب"),
  targetType: z.enum(["consultation", "experience", "corporate", "event"]),
  scheduleId: z.string().uuid("معرف الجلسة غير صالح").optional(),
  notes: z.string().max(1000, "الملاحظات لا تتجاوز 1000 حرف").optional(),
  locale: z.enum(["ar", "en"]),
});

export type PublicBookingInput = z.infer<typeof PublicBookingSchema>;
