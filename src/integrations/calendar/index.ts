/**
 * ICalendarGateway — Calendar / Scheduling Integration Interface
 * Phase 1: static link stub. Phase 2: Calendly / custom DB.
 */
export interface BookingSlot {
  targetType: string;
  targetSlug: string;
  clientEmail: string;
  preferredDate: string;
}

export interface ICalendarGateway {
  createBookingSlot(slot: BookingSlot): Promise<{ confirmationCode: string }>;
  getAvailableSlots(targetSlug: string): Promise<string[]>;
}

export class StubCalendarGateway implements ICalendarGateway {
  async createBookingSlot(slot: BookingSlot): Promise<{ confirmationCode: string }> {
    console.log("[Calendar] createBookingSlot", slot);
    return { confirmationCode: "MOCK-CONF-001" };
  }
  async getAvailableSlots(_targetSlug: string): Promise<string[]> {
    return ["2026-10-15", "2026-10-22", "2026-11-01"];
  }
}
