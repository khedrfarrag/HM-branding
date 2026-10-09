# Research: Hossam AI Sourcing Assistant (Chatbot)

**Feature**: `030-ai-chatbot-assistant`  
**Date**: 2026-10-03  

## Decisions & Technical Architecture

### 1. Vercel AI SDK Integration
- **Decision**: Use Vercel AI SDK (`ai` & `@ai-sdk/google` or `@ai-sdk/openai`).
- **Rationale**: Standard library for streaming Next.js AI responses; provides `useChat` hook managing state, input, loading status, and streaming UI.

### 2. Persona & System Prompt Strategy
- **Decision**: Inject Hussam Mabrouk executive persona, core services, and the 200 FAQ answers directly into the system prompt.
- **Rationale**: Eliminates external vector database complexity while ensuring zero hallucination and 100% accurate responses.

### 3. Lead Conversion UX
- **Decision**: Embed direct CTA buttons (*"احجز مكالمة استشارية"*, *"تواصل عبر الواتساب"*) when intent indicates high commercial interest.
- **Rationale**: Directly converts chatbot interactions into booked consulting revenue.
