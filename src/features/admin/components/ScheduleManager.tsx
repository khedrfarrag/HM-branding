"use client";

import React, { useEffect, useMemo, useState, useTransition } from "react";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createScheduleAction,
  deleteScheduleAction,
} from "@/features/admin/actions/manage-schedules";
import { ScheduleManageSchema } from "@/features/admin/schemas/schedule.schema";
import type { ScheduleManageInput } from "@/features/admin/schemas/schedule.schema";
import { cn } from "@/lib/utils";
import type { getDictionary } from "@/features/i18n/get-dictionary";

interface Schedule {
  id: string;
  experience_slug: string;
  start_date: string;
  end_date: string;
  enrollment_deadline: string;
  capacity: number;
  seats_remaining: number;
  price: number;
  currency: string;
}

export interface ExperienceOption {
  slug: string;
  title_ar: string;
  title_en: string;
}

interface ScheduleManagerProps {
  initialSchedules: Schedule[];
  experienceOptions: ExperienceOption[];
  locale?: string;
  dict?: Awaited<ReturnType<typeof getDictionary>>["admin"]["dashboard"]["schedules"];
}

export default function ScheduleManager({
  initialSchedules,
  experienceOptions,
  locale = "en",
  dict,
}: ScheduleManagerProps) {
  const router = useRouter();
  const [schedules, setSchedules] = useState<Schedule[]>(initialSchedules);

  // Sync ONLY on first mount \u2014 not on every server re-render.
  // Using a ref to track whether we've applied the first server snapshot.
  const initializedRef = React.useRef(false);
  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      setSchedules(initialSchedules);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [showForm, setShowForm] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const isAr = locale === "ar";
  const hasExperiences = experienceOptions.length > 0;

  const titleBySlug = useMemo(() => {
    const map = new Map<string, string>();
    for (const exp of experienceOptions) {
      map.set(exp.slug, isAr ? exp.title_ar : exp.title_en);
    }
    return map;
  }, [experienceOptions, isAr]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ScheduleManageInput>({
    resolver: zodResolver(ScheduleManageSchema),
    defaultValues: { currency: "USD", capacity: 12 },
  });

  const labelCancel = dict?.cancelBtn || "Cancel";
  const labelAdd = dict?.addBtn || "Add Schedule Slot";
  const labelCreating = isAr ? "جاري الإنشاء..." : "Creating...";
  const labelCreate = dict?.saveBtn || "Create Schedule";
  const labelNewSchedule = dict?.modalAddTitle || "New Schedule";
  const labelExperience = dict?.labels?.experience || "Experience *";
  const labelStartDate = dict?.labels?.date || "Start Date *";
  const labelEndDate = isAr ? "تاريخ الانتهاء *" : "End Date *";
  const labelDeadline = isAr ? "الموعد النهائي للتسجيل *" : "Enrollment Deadline *";
  const labelCapacity = dict?.labels?.capacity || "Capacity *";
  const labelPrice = isAr ? "السعر *" : "Price *";
  const labelCurrency = isAr ? "العملة" : "Currency";
  const selectPlaceholder = dict?.selectExperience || "— Select experience —";
  const noExperiencesMsg =
    dict?.noExperiencesForSchedule ||
    "No experiences yet. Create one in the Experiences section first.";
  const successMsg = isAr ? "تم إنشاء الموعد بنجاح!" : "Schedule created successfully!";

  function resolveExperienceTitle(slug: string): string {
    return titleBySlug.get(slug) ?? slug;
  }

  function getLocalizedErrorMessage(err?: string, errorCode?: string): string {
    if (errorCode === "ACTIVE_BOOKINGS_EXIST" || (err && err.includes("active booking"))) {
      return isAr
        ? "لا يمكن حذف هذا الموعد لوجود حجوزات نشطة مرتبطة به."
        : "Cannot delete: active booking(s) are tied to this schedule.";
    }
    return err || (isAr ? "حدث خطأ أثناء معالجة الطلب." : "An error occurred while processing the request.");
  }

  function onSubmit(data: ScheduleManageInput) {
    setFeedback(null);
    startTransition(async () => {
      const result = await createScheduleAction(data);
      if (result.success) {
        if (result.data) {
          // Optimistically prepend the new schedule — do NOT call router.refresh()
          // because refresh() triggers a server re-render that resets initialSchedules
          // via useEffect, overwriting the optimistic state.
          setSchedules((prev) => [result.data as unknown as Schedule, ...prev]);
        } else {
          // No data returned — fall back to server refresh
          router.refresh();
        }
        setFeedback({ type: "success", msg: successMsg });
        setShowForm(false);
        reset();
      } else {
        setFeedback({ type: "error", msg: getLocalizedErrorMessage(result.error) });
      }
    });
  }

  function handleDelete(id: string) {
    setDeleteId(id);
    setFeedback(null);
    startTransition(async () => {
      const result = await deleteScheduleAction(id);
      setDeleteId(null);
      if (result.success) {
        setSchedules((prev) => prev.filter((s) => s.id !== id));
        router.refresh();
      } else {
        const errorMsg = getLocalizedErrorMessage(result.error, result.errorCode);
        setFeedback({ type: "error", msg: errorMsg });
      }
    });
  }


  const inputClass =
    "w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold/40 transition-colors";
  const labelClass = "block text-xs text-gray-400 mb-1";
  const errorClass = "mt-1 text-xs text-red-400";

  return (
    <div className="space-y-6">
      {feedback && (
        <div
          role="alert"
          className={cn(
            "rounded-lg border px-4 py-3 text-sm",
            feedback.type === "success"
              ? "border-green-500/30 bg-green-500/10 text-green-400"
              : "border-red-500/30 bg-red-500/10 text-red-400"
          )}
        >
          {feedback.msg}
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 rounded-lg bg-gold/10 border border-gold/30 px-4 py-2.5 text-sm text-gold hover:bg-gold/20 transition-colors"
          id="add-schedule-btn"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          {showForm ? labelCancel : labelAdd}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-xl border border-gold/20 bg-gold/5 p-6 space-y-4"
          id="create-schedule-form"
        >
          <h2 className="text-sm font-semibold text-gold uppercase tracking-wider">{labelNewSchedule}</h2>

          {!hasExperiences && (
            <p className="text-sm text-amber-400/90 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
              {noExperiencesMsg}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label htmlFor="sched-experience" className={labelClass}>
                {labelExperience}
              </label>
              <select
                id="sched-experience"
                className={cn(inputClass, "bg-[#0B0D11]")}
                disabled={!hasExperiences}
                {...register("experienceSlug")}
              >
                <option value="">{selectPlaceholder}</option>
                {experienceOptions.map((exp) => (
                  <option key={exp.slug} value={exp.slug}>
                    {isAr ? exp.title_ar : exp.title_en}
                  </option>
                ))}
              </select>
              {errors.experienceSlug && (
                <p className={errorClass}>{errors.experienceSlug.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="sched-start" className={labelClass}>
                {labelStartDate}
              </label>
              <input id="sched-start" type="date" className={inputClass} {...register("startDate")} />
              {errors.startDate && <p className={errorClass}>{errors.startDate.message}</p>}
            </div>

            <div>
              <label htmlFor="sched-end" className={labelClass}>
                {labelEndDate}
              </label>
              <input id="sched-end" type="date" className={inputClass} {...register("endDate")} />
              {errors.endDate && <p className={errorClass}>{errors.endDate.message}</p>}
            </div>

            <div>
              <label htmlFor="sched-deadline" className={labelClass}>
                {labelDeadline}
              </label>
              <input id="sched-deadline" type="date" className={inputClass} {...register("enrollmentDeadline")} />
              {errors.enrollmentDeadline && (
                <p className={errorClass}>{errors.enrollmentDeadline.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="sched-capacity" className={labelClass}>
                {labelCapacity}
              </label>
              <input id="sched-capacity" type="number" min={1} className={inputClass} {...register("capacity")} />
              {errors.capacity && <p className={errorClass}>{errors.capacity.message}</p>}
            </div>

            <div>
              <label htmlFor="sched-price" className={labelClass}>
                {labelPrice}
              </label>
              <input id="sched-price" type="number" min={0} step={0.01} className={inputClass} {...register("price")} />
              {errors.price && <p className={errorClass}>{errors.price.message}</p>}
            </div>

            <div>
              <label htmlFor="sched-currency" className={labelClass}>
                {labelCurrency}
              </label>
              <select id="sched-currency" className={cn(inputClass, "bg-[#0B0D11]")} {...register("currency")}>
                <option value="USD">USD</option>
                <option value="SAR">SAR</option>
                <option value="AED">AED</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                reset();
              }}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              {labelCancel}
            </button>
            <button
              type="submit"
              disabled={isPending || !hasExperiences}
              className="rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-black hover:bg-[#D4B070] disabled:opacity-50 transition-colors"
            >
              {isPending ? labelCreating : labelCreate}
            </button>
          </div>
        </form>
      )}

      <div className="rounded-xl border border-white/[0.07] bg-white/2 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.07]">
                <th className="px-4 py-3 text-left text-gray-400 font-medium">
                  {dict?.headers?.type || "Experience"}
                </th>
                <th className="px-4 py-3 text-left text-gray-400 font-medium">
                  {dict?.headers?.dateTime || "Dates"}
                </th>
                <th className="px-4 py-3 text-left text-gray-400 font-medium">
                  {isAr ? "الموعد النهائي" : "Deadline"}
                </th>
                <th className="px-4 py-3 text-left text-gray-400 font-medium">
                  {dict?.headers?.capacity || "Seats"}
                </th>
                <th className="px-4 py-3 text-left text-gray-400 font-medium">
                  {isAr ? "السعر" : "Price"}
                </th>
                <th className="px-4 py-3 text-left text-gray-400 font-medium">
                  {isAr ? "الإجراء" : "Action"}
                </th>
              </tr>
            </thead>
            <tbody>
              {schedules.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-gray-600">
                    {dict?.noSchedules || "No schedules yet. Add one above."}
                  </td>
                </tr>
              ) : (
                schedules.map((s) => {
                  const fillPct = Math.round(((s.capacity - s.seats_remaining) / s.capacity) * 100);
                  return (
                    <tr key={s.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                      <td className="px-4 py-3 text-white text-sm font-medium">
                        {resolveExperienceTitle(s.experience_slug)}
                      </td>
                      <td className="px-4 py-3 text-gray-300 text-xs whitespace-nowrap">
                        {s.start_date} → {s.end_date}
                      </td>
                      <td className="px-4 py-3 text-gray-400 text-xs">{s.enrollment_deadline}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-16 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className={cn(
                                "h-full rounded-full transition-all",
                                fillPct >= 90
                                  ? "bg-red-400"
                                  : fillPct >= 70
                                    ? "bg-yellow-400"
                                    : "bg-green-400"
                              )}
                              style={{ width: `${fillPct}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-400">
                            {s.seats_remaining}/{s.capacity}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-white text-sm font-medium">
                        {s.currency} {s.price.toLocaleString(isAr ? "ar-EG" : "en-US")}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleDelete(s.id)}
                          disabled={isPending && deleteId === s.id}
                          className="text-xs text-red-400/70 hover:text-red-400 transition-colors disabled:opacity-40"
                          id={`delete-schedule-${s.id.slice(0, 8)}`}
                          title="Delete schedule"
                        >
                          {isPending && deleteId === s.id
                            ? isAr
                              ? "جاري الحذف..."
                              : "Deleting..."
                            : dict?.actions?.delete || "Delete"}
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
