import {
  IBookingRepository,
  BookingRecord,
  BookingStatus,
  BookingTargetType,
  BookingAuditLog,
} from "@/domains/booking/repository";

/**
 * Phase 1 stub: stores bookings in-memory conforming to current IBookingRepository contract.
 */
export class LocalFsBookingRepository implements IBookingRepository {
  private bookings: BookingRecord[] = [];
  private auditLogs: BookingAuditLog[] = [];

  async saveBooking(booking: Omit<BookingRecord, "id" | "createdAt" | "updatedAt">): Promise<BookingRecord> {
    const record: BookingRecord = {
      ...booking,
      id: Math.random().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.bookings.push(record);
    return record;
  }

  async getBookingById(id: string): Promise<BookingRecord | null> {
    return this.bookings.find(b => b.id === id) || null;
  }

  async getBookingsByClient(_clientEmail: string): Promise<BookingRecord[]> {
    // Clients are tracked inside ClientRepository, returning empty array for stub
    return [];
  }

  async listBookings(options?: {
    status?: BookingStatus;
    targetType?: BookingTargetType;
    limit?: number;
    offset?: number;
  }): Promise<BookingRecord[]> {
    let filtered = [...this.bookings];
    if (options?.status) {
      filtered = filtered.filter(b => b.status === options.status);
    }
    if (options?.targetType) {
      filtered = filtered.filter(b => b.targetType === options.targetType);
    }
    const offset = options?.offset || 0;
    const limit = options?.limit || 20;
    return filtered.slice(offset, offset + limit);
  }

  async updateBookingStatus(id: string, status: BookingStatus, performedBy?: string): Promise<BookingRecord> {
    const booking = this.bookings.find(b => b.id === id);
    if (!booking) throw new Error("Booking not found");
    booking.status = status;
    booking.updatedAt = new Date().toISOString();

    this.auditLogs.push({
      id: Math.random().toString(),
      bookingId: id,
      action: "STATUS_CHANGED",
      details: `Status updated to ${status}`,
      performedBy: performedBy || "system",
      createdAt: new Date().toISOString()
    });

    return booking;
  }

  async updateBookingNotes(id: string, notes: string): Promise<BookingRecord> {
    const booking = this.bookings.find(b => b.id === id);
    if (!booking) throw new Error("Booking not found");
    booking.notes = notes;
    booking.updatedAt = new Date().toISOString();
    return booking;
  }

  async getAuditLogs(bookingId: string): Promise<BookingAuditLog[]> {
    return this.auditLogs.filter(log => log.bookingId === bookingId);
  }
}
