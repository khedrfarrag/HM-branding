# Quickstart: Validating AI Chatbot Assistant

## Verification Scenarios

### 1. Test Streaming API Endpoint
```sh
curl -X POST -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"كيف أستورد من الصين؟"}],"locale":"ar"}' \
  http://localhost:3000/api/chat
```
**Expected**: Returns streaming HTTP 200 response with advisory answer aligned with Hussam Mabrouk persona.

### 2. Verify UI Widget
- Visit `http://localhost:3000/ar`.
- Click the floating gold AI Chatbot Widget at the bottom corner.
- Verify quick suggestion pills render and send automated prompt.

### 3. Build & Type Check
```sh
npx tsc --noEmit
```
**Expected**: Clean compilation with 0 errors.
