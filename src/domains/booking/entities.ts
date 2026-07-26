import { BookingTargetType, BookingStatus } from "@/domains/shared/value-objects";

export interface BookingRecord {
  bookingId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  targetType: BookingTargetType;
  targetSlug: string;
  status: BookingStatus;
  paymentReceiptId: string | null;
  notes: string;
  createdAt: string;
}
