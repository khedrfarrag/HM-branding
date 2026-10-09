# Feature Specification: Hossam AI Sourcing Assistant (Interactive Chatbot)

**Feature Name**: `030-ai-chatbot-assistant`  
**Created Date**: 2026-10-03  
**Status**: DRAFT  

## Executive Summary

Integrate an interactive, real-time AI Sourcing Consultant Chatbot Widget into `hussam-mabrouk.com`. The chatbot embodies the persona of Hussam Mabrouk (Senior China Sourcing & International Trade Specialist), answers user queries with 100% precision drawing directly from the verified 200-question FAQ knowledge base and trade glossary, and converts qualified leads by prompting consultation bookings and WhatsApp inquiries.

---

## User Stories & Scenarios

### User Story 1 (P1 - Floating AI Chatbot Widget & Conversation Engine) 🎯 MVP
As a website visitor or prospective importer, I want an easily accessible, luxury floating AI Chatbot Widget at the bottom corner of any page, so that I can ask real-time questions about China sourcing, supplier verification, and trade operations in Arabic or English.

- **Acceptance Criteria**:
  - Floating widget appears on all public pages with gold/black glassmorphic styling.
  - Clicking the widget opens an interactive streaming chat interface.
  - Chatbot responds in real-time with streaming text (Vercel AI SDK + Gemini 2.5/1.5 Flash API or OpenAI GPT-4o-mini).
  - Persona strictly aligns with Hussam Mabrouk's advisory guidelines and knowledge corpus.

### User Story 2 (P2 - Quick Suggestion Pills & Frequently Asked Queries)
As a first-time visitor, I want one-click quick suggestion buttons (*e.g., "كيف أتحقق من مصنع في قوانغتشو؟", "ما الفرق بين FOB و CIF؟", "كيف أحجز استشارة؟"*), so that I can immediately receive authoritative answers without typing long prompts.

- **Acceptance Criteria**:
  - Displays 3-4 interactive suggestion pills when chat opens.
  - Clicking a suggestion automatically submits the prompt and triggers an instant AI response.

### User Story 3 (P3 - Lead Generation & Consultation Booking Prompts)
As a business owner interested in executive advisory, I want the chatbot to present direct action buttons (*"Book Consultation"* / *"WhatsApp Inquiry"*), so that I can transition seamlessly from automated QA to direct executive booking.

- **Acceptance Criteria**:
  - Relevant responses include inline call-to-action buttons leading to `/#book` or WhatsApp.
  - Option to capture user contact details (Name, Phone/WhatsApp, Product Interest) directly within the chat.

---

## Functional Requirements

- **FR-001**: System MUST expose `/api/chat` POST route handler utilizing Vercel AI SDK with streaming response support.
- **FR-002**: System MUST inject the comprehensive 200 FAQ knowledge corpus and trade glossary into the AI System Prompt to ensure hallucination-free responses.
- **FR-003**: System MUST provide a responsive, accessible React component (`ChatWidget.tsx`) with Framer Motion animations and glassmorphic styling.
- **FR-004**: System MUST support bi-directional localization (Arabic `ar` & English `en`) matching the active page locale.
- **FR-005**: System MUST provide quick suggestion buttons and inline lead conversion actions.

---

## Success Criteria

1. **Response Speed**: Streaming first-token response within 800ms.
2. **Knowledge Accuracy**: 100% adherence to verified trade answers and no hallucinated contact details or pricing.
3. **Usability**: Fully responsive across mobile, tablet, and desktop viewports without blocking page content.
4. **Conversion Impact**: Direct CTA buttons rendered in responses where user expresses intent to consult or import.
