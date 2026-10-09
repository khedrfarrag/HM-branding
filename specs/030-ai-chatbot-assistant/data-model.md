# Data Model: AI Sourcing Assistant Chatbot

## Data Structures & State

### 1. `ChatMessage` Object
- `id`: Unique message ID string.
- `role`: `"user" | "assistant" | "system"`.
- `content`: Markdown text content string.
- `createdAt`: Optional timestamp.

### 2. `SuggestionPill` Object
- `id`: Unique pill identifier.
- `labelAr`: Arabic button label.
- `labelEn`: English button label.
- `prompt`: Text string sent to AI upon click.

### 3. `LeadCaptureInput`
- `name`: User full name.
- `phone`: WhatsApp number / phone.
- `serviceInterest`: Selected service (*Sourcing, QC, Verification, Consultation*).
