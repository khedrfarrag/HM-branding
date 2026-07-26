/**
 * IBookingRepository — Extended Booking Domain Interface
 * Feature 007: Booking System & Admin Dashboard
 *
 * Extends the basic stub with full CRUD operations needed for the dashboard.
 */


// ─── Entity Types ─────────────────────────────────────────────────────────────

export type BookingStatus = "pending" | "confirmed" | "cancelled" | "refunded";
export type BookingTargetType = "consultation" | "experience" | "corporate" | "event";

export interface ClientRecord {
  id: string;
  name: string;
  email: string;
  phone?: string;
  country?: string;
  createdAt: string;
}

export interface ExperienceSchedule {
  id: string;
  experienceSlug: string;
  startDate: string;
  endDate: string;
  capacity: number;
  seatsRemaining: number;
  enrollmentDeadline: string;
  price: number;
  currency: string;
}

export interface BookingRecord {
  id: string;
  clientId: string;
  scheduleId?: string | null;
  targetType: BookingTargetType;
  status: BookingStatus;
  notes?: string | null;
  paymentReceiptId?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface BookingAuditLog {
  id: string;
  bookingId: string;
  action: string;
  details?: string | null;
  performedBy: string;
  createdAt: string;
}

// ─── Repository Interfaces ────────────────────────────────────────────────────

export interface IClientRepository {
  upsertClient(client: Omit<ClientRecord, "id" | "createdAt">): Promise<ClientRecord>;
  getClientByEmail(email: string): Promise<ClientRecord | null>;
}

export interface IExperienceScheduleRepository {
  getSchedulesBySlug(slug: string): Promise<ExperienceSchedule[]>;
  getScheduleById(id: string): Promise<ExperienceSchedule | null>;
  createSchedule(data: Omit<ExperienceSchedule, "id">): Promise<ExperienceSchedule>;
  updateSchedule(id: string, data: Partial<Omit<ExperienceSchedule, "id">>): Promise<ExperienceSchedule>;
  deleteSchedule(id: string): Promise<void>;
  /** Atomically decrements seats_remaining. Returns false if no seats available. */
  reserveSeat(scheduleId: string): Promise<boolean>;
  /** Increments seats_remaining (on cancellation). */
  releaseSeat(scheduleId: string): Promise<void>;
}

export interface IBookingRepository {
  saveBooking(booking: Omit<BookingRecord, "id" | "createdAt" | "updatedAt">): Promise<BookingRecord>;
  getBookingById(id: string): Promise<BookingRecord | null>;
  getBookingsByClient(clientEmail: string): Promise<BookingRecord[]>;
  listBookings(options?: {
    status?: BookingStatus;
    targetType?: BookingTargetType;
    limit?: number;
    offset?: number;
  }): Promise<BookingRecord[]>;
  updateBookingStatus(id: string, status: BookingStatus, performedBy?: string): Promise<BookingRecord>;
  updateBookingNotes(id: string, notes: string): Promise<BookingRecord>;
  getAuditLogs(bookingId: string): Promise<BookingAuditLog[]>;
}
