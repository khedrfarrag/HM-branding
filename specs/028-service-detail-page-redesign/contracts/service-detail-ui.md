# Interface Contract: Service Detail UI Components

## UI Component Contract: `ServiceDetailPage`

### Inputs
- **params**: `Promise<{ locale: string; slug: string }>`

### Data Access Contracts
- `LocalFsServiceRepository.getServiceBySlug(locale: Locale, slug: string): Promise<Service | null>`
- `LocalFsServiceRepository.getSuccessStories(locale: Locale): Promise<SuccessStory[]>`

### Component Layout Sections
1. **Background Decorator**: Ambient glow blur circles (`bg-amber-500/10 blur-[120px]`).
2. **Hero Article Card**: Glassmorphism container (`backdrop-blur-xl bg-zinc-950/70 border border-amber-500/20`).
3. **Badge & Header**: Verified service pill badge + gradient heading (`from-white via-zinc-100 to-amber-200`).
4. **Description Block**: Icon-highlighted description summary.
5. **Timeline Section**: Connected vertical stepper (`border-r-2 border-dashed border-amber-500/30` for RTL).
6. **Social Proof Card**: Case study quote and verified result badge.
7. **Conversion CTA Section**: Dual action buttons (Consultation Booking + WhatsApp Inquiry).
