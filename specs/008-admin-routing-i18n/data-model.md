# Data Model & Schema: Admin Redirection & Language Localization

This document specifies the cookie structures and translation dictionary schemas used for the admin dashboard localization and routing.

## 1. Cookie Models

### `admin_lang`
Persists the selected interface language for the admin portal.

| Attribute | Value |
|-----------|-------|
| **Key** | `admin_lang` |
| **Type** | String (`"ar"` \| `"en"`) |
| **Default** | `"en"` |
| **Max Age** | 31,536,000 seconds (1 year) |
| **SameSite** | `Lax` |
| **Path** | `/` |

### Supabase Auth Session Token
Managed by Supabase GoTrue client. Used by Middleware to determine authentication status.

| Attribute | Value |
|-----------|-------|
| **Key** | `sb-<project-ref>-auth-token` (Matches regex: `^sb-.*-auth-token$`) |
| **Type** | JWT Token String |
| **SameSite** | `Lax` |

---

## 2. Dictionary JSON Schema

Below is the JSON schema structure added to `src/dictionaries/ar.json` and `src/dictionaries/en.json` under the `"admin"` key:

```json
{
  "admin": {
    "login": {
      "title": "string",
      "subtitle": "string",
      "emailLabel": "string",
      "passwordLabel": "string",
      "submitBtn": "string",
      "loadingBtn": "string",
      "error": "string",
      "footer": "string"
    },
    "sidebar": {
      "title": "string",
      "subtitle": "string",
      "overview": "string",
      "bookings": "string",
      "schedules": "string",
      "signout": "string"
    },
    "dashboard": {
      "overview": {
        "title": "string",
        "subtitle": "string",
        "kpis": {
          "totalBookings": "string",
          "pendingReview": "string",
          "confirmed": "string",
          "cancelled": "string"
        },
        "recentBookings": {
          "title": "string",
          "viewAll": "string",
          "headers": {
            "code": "string",
            "client": "string",
            "type": "string",
            "status": "string",
            "date": "string"
          },
          "noBookings": "string"
        }
      },
      "bookings": {
        "title": "string",
        "subtitle": "string",
        "filterAll": "string",
        "filterPending": "string",
        "filterConfirmed": "string",
        "filterCancelled": "string",
        "headers": {
          "code": "string",
          "client": "string",
          "type": "string",
          "status": "string",
          "date": "string",
          "actions": "string"
        },
        "viewBtn": "string",
        "noBookings": "string"
      },
      "bookingDetails": {
        "title": "string",
        "backBtn": "string",
        "detailsCard": "string",
        "statusCard": "string",
        "notesCard": "string",
        "auditCard": "string",
        "labels": {
          "code": "string",
          "status": "string",
          "name": "string",
          "email": "string",
          "phone": "string",
          "type": "string",
          "scheduleDate": "string",
          "scheduleTime": "string",
          "notes": "string",
          "createdAt": "string"
        },
        "statusOptions": {
          "pending": "string",
          "confirmed": "string",
          "cancelled": "string"
        },
        "notesPlaceholder": "string",
        "saveNotesBtn": "string",
        "saving": "string",
        "auditHeaders": {
          "event": "string",
          "performedBy": "string",
          "timestamp": "string"
        }
      },
      "schedules": {
        "title": "string",
        "subtitle": "string",
        "addBtn": "string",
        "modalAddTitle": "string",
        "modalEditTitle": "string",
        "labels": {
          "type": "string",
          "date": "string",
          "time": "string",
          "capacity": "string"
        },
        "saveBtn": "string",
        "cancelBtn": "string",
        "headers": {
          "type": "string",
          "dateTime": "string",
          "capacity": "string",
          "seatsRemaining": "string",
          "actions": "string"
        },
        "actions": {
          "edit": "string",
          "delete": "string"
        },
        "types": {
          "consultation": "string",
          "experience": "string"
        },
        "noSchedules": "string"
      }
    }
  }
}
```
