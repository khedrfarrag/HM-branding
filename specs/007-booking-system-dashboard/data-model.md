# Data Model & Schema Definitions: Booking & Admin Dashboard

**Feature**: 007-booking-system-dashboard
**Date**: 2026-07-12

---

## 1. Database Schema (PostgreSQL Entity Relations)

```mermaid
erDiagram
    CLIENT ||--o{ BOOKING : places
    EXPERIENCE_SCHEDULE ||--o{ BOOKING : schedules
    BOOKING ||--o{ AUDIT_LOG : tracks

    CLIENT {
        uuid id PK
        string name
        string email
        string phone
        string country
        timestamp created_at
    }

    EXPERIENCE_SCHEDULE {
        uuid id PK
        string experience_slug
        date start_date
        date end_date
        int capacity
        int seats_remaining
        date enrollment_deadline
        decimal price
        string currency
    }

    BOOKING {
        uuid id PK
        uuid client_id FK
        uuid schedule_id FK
        string target_type "consultation|experience|corporate|event"
        string status "pending|confirmed|cancelled|refunded"
        string notes
        string payment_receipt_id
        timestamp created_at
        timestamp updated_at
    }

    AUDIT_LOG {
        uuid id PK
        uuid booking_id FK
        string action
        string details
        string performed_by "system|admin_uid"
        timestamp created_at
    }
```

---

## 2. Zod Validation Schemas (Application Layer)

### 2.1 Public Booking Submission Schema
```typescript
import { z } from "zod";

export const PublicBookingSchema = z.object({
  name: z.string().min(2, "الاسم يجب أن يكون أكثر من حرفين | Name must be at least 2 characters"),
  email: z.string().email("البريد الإلكتروني غير صالح | Invalid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "رقم الهاتف غير صالح | Invalid phone number"),
  country: z.string().min(2, "بلد الإقامة مطلوب | Country is required"),
  targetType: z.enum(["consultation", "experience", "corporate", "event"]),
  targetId: z.string().uuid("معرف الحجز غير صالح | Invalid target session identifier"),
  notes: z.string().max(1000, "الملاحظات يجب أن لا تتجاوز 1000 حرف | Notes cannot exceed 1000 characters").optional()
});
```

### 2.2 Experience Schedule Management Schema
```typescript
export const ScheduleManageSchema = z.object({
  experienceSlug: z.string().min(1, "Slug is required"),
  startDate: z.string().date("Invalid start date"),
  endDate: z.string().date("Invalid end date"),
  capacity: z.number().int().positive("Capacity must be a positive integer"),
  enrollmentDeadline: z.string().date("Invalid deadline date"),
  price: z.number().positive("Price must be a positive number"),
  currency: z.string().length(3, "Currency code must be exactly 3 characters")
}).refine(data => new Date(data.startDate) < new Date(data.endDate), {
  message: "Start date must be before end date",
  path: ["endDate"]
}).refine(data => new Date(data.enrollmentDeadline) < new Date(data.startDate), {
  message: "Enrollment deadline must be before start date",
  path: ["enrollmentDeadline"]
});
```

---

## 3. State Machine: Booking Lifecycle

```mermaid
stateDiagram-v2
    [*] --> Pending : Customer Submits Form
    Pending --> Confirmed : Admin Verifies / Payment Clears
    Pending --> Cancelled : Customer/Admin Cancels
    Confirmed --> Cancelled : Cancelled before Deadline
    Confirmed --> Refunded : Cancelled & Refund Processed
    Cancelled --> [*]
    Refunded --> [*]
```

### Transition Constraints
- **Pending → Confirmed**: Checks that `seats_remaining > 0` on the corresponding `ExperienceSchedule`. Decrements seats by 1 inside database transaction.
- **Confirmed → Cancelled**: Increments `seats_remaining` on the corresponding `ExperienceSchedule` by 1 inside database transaction.
- **Refunded**: Can only occur from `Confirmed` state and requires a valid `payment_receipt_id`.
