# Interface Contracts: AI Chatbot API

## `POST /api/chat`

- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "messages": [
      { "role": "user", "content": "كيف أتحقق من مصنع في قوانغتشو؟" }
    ],
    "locale": "ar"
  }
  ```
- **Response**: `200 OK` (Chunked Plain Text Data Stream / Server-Sent Events).
