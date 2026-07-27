"use client";

import React, { useTransition, useState } from "react";
import {
  createConsultationSlotAction,
  updateConsultationSlotAction,
  deleteConsultationSlotAction,
  toggleConsultationSlotAction,
} from "@/features/admin/actions/manage-consultations";

export interface Slot {
  id: string;
  slot_date: string;
  slot_time: string;
  capacity: number;
  seats_remaining: number;
  is_active: boolean;
}

interface ConsultationSlotManagerProps {
  initialSlots: Slot[];
  locale?: string;
}

const ALL_TIME_SLOTS = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00",
];

export default function ConsultationSlotManager({
  initialSlots,
  locale = "en",
}: ConsultationSlotManagerProps) {
  const isAr = locale === "ar";
  const [slots, setSlots] = useState<Slot[]>(initialSlots);
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  // Creation Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [selectedTimes, setSelectedTimes] = useState<string[]>(["09:00", "10:30"]);
  const [newCapacity, setNewCapacity] = useState<number>(1);

  // Edit Modal State
  const [editingSlot, setEditingSlot] = useState<Slot | null>(null);
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editCapacity, setEditCapacity] = useState<number>(1);
  const [editSeatsRemaining, setEditSeatsRemaining] = useState<number>(1);
  const [editIsActive, setEditIsActive] = useState<boolean>(true);

  // Group slots by date
  const grouped = React.useMemo(() => {
    const map = new Map<string, Slot[]>();
    for (const s of slots) {
      if (!map.has(s.slot_date)) map.set(s.slot_date, []);
      map.get(s.slot_date)!.push(s);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [slots]);

  function formatDate(dateStr: string) {
    return new Date(dateStr + "T00:00:00").toLocaleDateString(
      isAr ? "ar-EG" : "en-US",
      { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    );
  }

  function toggleTimeSelection(time: string) {
    setSelectedTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  }

  function selectAllTimes() {
    setSelectedTimes(ALL_TIME_SLOTS);
  }

  function clearTimes() {
    setSelectedTimes([]);
  }

  function handleAddMultipleSlots() {
    if (!newDate) {
      setFeedback({ type: "error", msg: isAr ? "حدد التاريخ أولاً" : "Please select a date first" });
      return;
    }
    if (selectedTimes.length === 0) {
      setFeedback({ type: "error", msg: isAr ? "اختر وقتاً واحداً على الأقل" : "Select at least one time slot" });
      return;
    }

    setFeedback(null);
    startTransition(async () => {
      let createdCount = 0;
      let hasError = false;
      let lastErrMsg = "";

      for (const time of selectedTimes) {
        const result = await createConsultationSlotAction({
          slot_date: newDate,
          slot_time: time,
          capacity: Number(newCapacity),
        });

        if (result.success) {
          createdCount++;
          const newSlot: Slot = {
            id: result.id || Math.random().toString(),
            slot_date: newDate,
            slot_time: time,
            capacity: Number(newCapacity),
            seats_remaining: Number(newCapacity),
            is_active: true,
          };
          setSlots((prev) =>
            [...prev, newSlot].sort((a, b) =>
              a.slot_date === b.slot_date ? a.slot_time.localeCompare(b.slot_time) : a.slot_date.localeCompare(b.slot_date)
            )
          );
        } else {
          hasError = true;
          lastErrMsg = result.error;
        }
      }

      if (createdCount > 0) {
        setFeedback({
          type: "success",
          msg: isAr
            ? `تم إضافة ${createdCount} مواعيد بنجاح ليوم ${newDate}`
            : `Successfully added ${createdCount} slot(s) for ${newDate}`,
        });
        setShowAddForm(false);
        setNewDate("");
        setSelectedTimes(["09:00", "10:30"]);
      } else if (hasError) {
        setFeedback({ type: "error", msg: lastErrMsg });
      }
    });
  }

  function openEdit(slot: Slot) {
    setEditingSlot(slot);
    setEditDate(slot.slot_date);
    setEditTime(slot.slot_time);
    setEditCapacity(slot.capacity);
    setEditSeatsRemaining(slot.seats_remaining);
    setEditIsActive(slot.is_active);
  }

  function handleSaveEdit() {
    if (!editingSlot) return;
    setFeedback(null);
    startTransition(async () => {
      const payload = {
        id: editingSlot.id,
        slot_date: editDate,
        slot_time: editTime,
        capacity: Number(editCapacity),
        seats_remaining: Number(editSeatsRemaining),
        is_active: editIsActive,
      };

      const result = await updateConsultationSlotAction(payload);
      if (result.success) {
        setSlots((prev) =>
          prev.map((s) => (s.id === editingSlot.id ? { ...s, ...payload } : s))
        );
        setFeedback({ type: "success", msg: isAr ? "تم تعديل الموعد بنجاح" : "Slot updated successfully" });
        setEditingSlot(null);
      } else {
        setFeedback({ type: "error", msg: result.error });
      }
    });
  }

  function handleDelete(id: string) {
    if (!confirm(isAr ? "هل تريد حذف هذا الموعد نهائياً؟" : "Permanently delete this slot?")) return;
    startTransition(async () => {
      const result = await deleteConsultationSlotAction(id);
      if (result.success) {
        setSlots((prev) => prev.filter((s) => s.id !== id));
        setFeedback({ type: "success", msg: isAr ? "تم حذف الموعد" : "Slot deleted" });
      } else {
        setFeedback({ type: "error", msg: result.error });
      }
    });
  }

  function handleToggle(id: string, current: boolean) {
    startTransition(async () => {
      const result = await toggleConsultationSlotAction(id, !current);
      if (result.success) {
        setSlots((prev) =>
          prev.map((s) => (s.id === id ? { ...s, is_active: !current } : s))
        );
      } else {
        setFeedback({ type: "error", msg: result.error });
      }
    });
  }

  const minDate = new Date().toISOString().split("T")[0];

  return (
    <div dir={isAr ? "rtl" : "ltr"} className="space-y-6">
      {/* Feedback Toast */}
      {feedback && (
        <div
          className={`rounded-lg border px-4 py-3 text-sm flex items-center justify-between transition-all ${
            feedback.type === "success"
              ? "border-green-500/30 bg-green-500/10 text-green-400"
              : "border-red-500/30 bg-red-500/10 text-red-400"
          }`}
        >
          <span>{feedback.msg}</span>
          <button onClick={() => setFeedback(null)} className="text-xs opacity-70 hover:opacity-100 ms-3">
            ✕
          </button>
        </div>
      )}

      {/* Header + Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            {isAr ? "مواعيد الاستشارات المتاحة" : "Available Consultation Slots"}
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            {isAr
              ? `${slots.filter((s) => s.is_active).length} موعد نشط`
              : `${slots.filter((s) => s.is_active).length} active slots`}
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 rounded-lg bg-[#C7A15C]/10 border border-[#C7A15C]/30 px-4 py-2 text-sm font-medium text-[#C7A15C] hover:bg-[#C7A15C]/20 transition-colors"
        >
          <span className="text-lg leading-none">{showAddForm ? "×" : "+"}</span>
          {isAr ? "إضافة مواعيد ليوم" : "Add Slots for Day"}
        </button>
      </div>

      {/* Multi-Time Add Slot Form */}
      {showAddForm && (
        <div className="rounded-xl border border-[#C7A15C]/20 bg-white/[0.02] p-6 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-base font-semibold text-white">
              {isAr ? "إضافة مواعيد استشارة جديدة (اختيار متعدد للأوقات)" : "Add Consultation Slots (Multi-Time Selection)"}
            </h3>
            <span className="text-xs text-[#C7A15C]">
              {selectedTimes.length} {isAr ? "أوقات محددة" : "times selected"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 font-medium">
                {isAr ? "اختر التاريخ *" : "Select Date *"}
              </label>
              <input
                type="date"
                min={minDate}
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-[#0B0D11] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C7A15C]/60 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 font-medium">
                {isAr ? "السعة لكل موعد (عدد المقاعد)" : "Capacity per slot (Seats)"}
              </label>
              <input
                type="number"
                min={1}
                max={50}
                value={newCapacity}
                onChange={(e) => setNewCapacity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full rounded-lg border border-white/10 bg-[#0B0D11] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C7A15C]/60 transition-colors"
              />
            </div>
          </div>

          {/* Multi-Time Checkbox Grid */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs text-gray-400 font-medium">
                {isAr ? "حدد الأوقات المتاحة لهذا اليوم *" : "Select Available Times for This Day *"}
              </label>
              <div className="flex gap-3 text-xs">
                <button type="button" onClick={selectAllTimes} className="text-[#C7A15C] hover:underline">
                  {isAr ? "تحديد الكل" : "Select All"}
                </button>
                <button type="button" onClick={clearTimes} className="text-gray-400 hover:underline">
                  {isAr ? "إلغاء الكل" : "Clear All"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 bg-[#0B0D11] p-3 rounded-xl border border-white/10">
              {ALL_TIME_SLOTS.map((t) => {
                const isSelected = selectedTimes.includes(t);
                return (
                  <button
                    type="button"
                    key={t}
                    onClick={() => toggleTimeSelection(t)}
                    className={`px-2 py-2 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#C7A15C] border-[#C7A15C] text-black font-bold shadow-md"
                        : "border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {t} {isSelected && "✓"}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleAddMultipleSlots}
              disabled={isPending || selectedTimes.length === 0}
              className="rounded-lg bg-[#C7A15C] px-6 py-2.5 text-sm font-semibold text-black hover:bg-[#d4b06a] disabled:opacity-50 transition-colors shadow-lg shadow-[#C7A15C]/20"
            >
              {isPending
                ? (isAr ? "جاري الإضافة..." : "Adding...")
                : (isAr ? `إضافة (${selectedTimes.length}) مواعيد` : `Add (${selectedTimes.length}) Slots`)}
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="rounded-lg border border-white/10 px-5 py-2.5 text-sm text-gray-400 hover:text-white transition-colors"
            >
              {isAr ? "إلغاء" : "Cancel"}
            </button>
          </div>
        </div>
      )}

      {/* Edit Slot Modal */}
      {editingSlot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-lg rounded-xl border border-white/10 bg-[#0F1218] p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white">
                {isAr ? "تعديل موعد الاستشارة" : "Edit Consultation Slot"}
              </h3>
              <button onClick={() => setEditingSlot(null)} className="text-gray-400 hover:text-white text-lg">
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">{isAr ? "التاريخ" : "Date"}</label>
                  <input
                    type="date"
                    value={editDate}
                    onChange={(e) => setEditDate(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-[#0B0D11] px-3 py-2 text-white focus:outline-none focus:border-[#C7A15C]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">{isAr ? "الوقت" : "Time"}</label>
                  <select
                    value={editTime}
                    onChange={(e) => setEditTime(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-[#0B0D11] px-3 py-2 text-white focus:outline-none focus:border-[#C7A15C]"
                  >
                    {ALL_TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">{isAr ? "السعة الإجمالية" : "Total Capacity"}</label>
                  <input
                    type="number"
                    min={1}
                    value={editCapacity}
                    onChange={(e) => setEditCapacity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full rounded-lg border border-white/10 bg-[#0B0D11] px-3 py-2 text-white focus:outline-none focus:border-[#C7A15C]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">{isAr ? "المقاعد المتبقية" : "Seats Remaining"}</label>
                  <input
                    type="number"
                    min={0}
                    max={editCapacity}
                    value={editSeatsRemaining}
                    onChange={(e) => setEditSeatsRemaining(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full rounded-lg border border-white/10 bg-[#0B0D11] px-3 py-2 text-white focus:outline-none focus:border-[#C7A15C]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="edit-is-active"
                  checked={editIsActive}
                  onChange={(e) => setEditIsActive(e.target.checked)}
                  className="rounded border-white/20 bg-white/5 text-[#C7A15C] focus:ring-0"
                />
                <label htmlFor="edit-is-active" className="text-xs text-gray-300 cursor-pointer">
                  {isAr ? "الموعد نشط ومتاح للحجز" : "Slot is active and visible for booking"}
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-white/10">
              <button
                onClick={() => setEditingSlot(null)}
                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 hover:text-white"
              >
                {isAr ? "إلغاء" : "Cancel"}
              </button>
              <button
                onClick={handleSaveEdit}
                disabled={isPending}
                className="rounded-lg bg-[#C7A15C] px-5 py-2 text-sm font-semibold text-black hover:bg-[#d4b06a] disabled:opacity-50"
              >
                {isPending ? (isAr ? "جاري الحفظ..." : "Saving...") : (isAr ? "حفظ التعديلات" : "Save Changes")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Slots Grouped by Date */}
      {grouped.length === 0 ? (
        <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-12 text-center">
          <p className="text-gray-500 text-sm">
            {isAr ? "لا توجد مواعيد متاحة. أضف مواعيد جديدة أعلاه." : "No slots yet. Add your first slots above."}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {grouped.map(([date, daySlots]) => (
            <div key={date} className="rounded-xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
              {/* Date Header */}
              <div className="border-b border-white/[0.07] bg-white/[0.03] px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#C7A15C]">
                  {formatDate(date)}
                </span>
                <span className="text-xs text-gray-500 font-mono">
                  {daySlots.length} {isAr ? "أوقات مسجلة" : "time slots"}
                </span>
              </div>

              {/* Slots List */}
              <div className="p-4 flex flex-wrap gap-3">
                {daySlots.map((slot) => (
                  <div
                    key={slot.id}
                    className={`flex items-center gap-3 rounded-lg border px-3 py-2 text-sm transition-all ${
                      slot.is_active
                        ? "border-[#C7A15C]/20 bg-[#C7A15C]/5 text-white"
                        : "border-white/5 bg-white/[0.01] text-gray-600 opacity-60"
                    }`}
                  >
                    <div>
                      <span className="font-mono font-bold block leading-none">{slot.slot_time}</span>
                      <span className="text-[10px] text-gray-400 block mt-1 font-mono">
                        {slot.seats_remaining}/{slot.capacity} {isAr ? "مقعد" : "seats"}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 border-s border-white/10 ps-2 ms-1">
                      {/* Edit Button */}
                      <button
                        onClick={() => openEdit(slot)}
                        title={isAr ? "تعديل" : "Edit"}
                        className="p-1 text-gray-400 hover:text-[#C7A15C] transition-colors"
                      >
                        ✏️
                      </button>
                      {/* Toggle Button */}
                      <button
                        onClick={() => handleToggle(slot.id, slot.is_active)}
                        disabled={isPending}
                        title={slot.is_active ? (isAr ? "تعطيل" : "Disable") : (isAr ? "تفعيل" : "Enable")}
                        className={`p-1 text-xs transition-colors ${
                          slot.is_active ? "text-green-400 hover:text-yellow-400" : "text-gray-500 hover:text-green-400"
                        }`}
                      >
                        {slot.is_active ? "●" : "○"}
                      </button>
                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(slot.id)}
                        disabled={isPending}
                        title={isAr ? "حذف" : "Delete"}
                        className="p-1 text-xs text-gray-500 hover:text-red-400 transition-colors"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
