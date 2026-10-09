# Quickstart Validation Guide: Consultation Booking Enhancements

## Validation Scenarios

### Scenario 1: Admin Creates Multiple Slots on Same Date with Capacity
1. Navigate to `/admin/dashboard/consultations`
2. Select Date: Tomorrow's Date
3. Select Time: `09:00`, Capacity: `2` → Click "Add Slot"
4. Select Time: `14:00`, Capacity: `1` → Click "Add Slot"
5. Verify both slots appear under the same date heading with correct capacity counts.

### Scenario 2: Admin Edits Existing Slot
1. Click "Edit" on slot `09:00`
2. Change Time to `09:30` and Capacity to `5`
3. Click "Save Changes"
4. Verify the slot updates in-place without page reload.

### Scenario 3: User Booking Flow from Homepage
1. Open Homepage (`/ar` or `/en`) and scroll to "تواصل معنا" / Booking section.
2. Select tomorrow's date pill.
3. Click `09:30` slot tile. Notice remaining seat badge ("5 مقاعد متاحة").
4. Click "تأكيد الموعد".
5. Fill client details in the modal and submit.
6. Verify redirect to confirmation page and seat decrement upon return.
