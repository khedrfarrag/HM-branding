import { z } from "zod";

// ─── T019: ScheduleManageSchema ──────────────────────────────────────────────
// Kept in a separate file (no "use server" directive) to avoid Next.js
// mistakenly treating Zod .refine() arrow functions as Server Actions.
export const ScheduleManageSchema = z.object({
  experienceSlug: z.string().min(1, "Experience slug is required"),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  enrollmentDeadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  capacity: z.coerce.number().int().min(1, "Capacity must be at least 1").max(500),
  price: z.coerce.number().min(0, "Price must be positive"),
  currency: z.string().length(3),
}).refine((d) => d.endDate > d.startDate, {
  message: "End date must be after start date",
  path: ["endDate"],
}).refine((d) => d.enrollmentDeadline < d.startDate, {
  message: "Enrollment deadline must be before start date",
  path: ["enrollmentDeadline"],
});

export type ScheduleManageInput = z.infer<typeof ScheduleManageSchema>;
export type ScheduleActionResult =
  | { success: true; id: string; data?: Record<string, unknown> }
  | { success: false; error: string; errorCode?: string; fieldErrors?: Record<string, string[]> };

