# Quickstart & Verification: Hero Section Enhancements

This guide outlines the steps to verify the Hero Section Enhancements end-to-end.

## Prerequisites

- Next.js development server running locally (`npm run dev`)
- Access to a web browser
- Personal image asset `/public/images/personal-img.png` loaded successfully

## Run Verification Scenarios

### Scenario 1: Typing Animation Validation
1. Open the landing page at `http://localhost:3000/ar`.
2. Inspect the headline on the left side of the Hero section.
3. **Verify**:
   - The headline renders the animated text cycling through:
     1. "نقل بضائع العالم، بهدوء نبني الثقة."
     2. "خبرة لوجستية تمتد عبر 40 دولة."
     3. "شريكك الاستراتيجي في سلاسل الإمداد العالمية."
   - The layout remains stable (no layout shifts or content jumping).
4. Switch the language to English by clicking the language switcher.
5. **Verify**:
   - The headline cycles through the English phrases:
     1. "Moving the world's goods, quietly building trust."
     2. "Logistics expertise spanning 40+ countries."
     3. "Your strategic partner in global supply chains."

### Scenario 2: Circular Profile & Floating Badges Validation
1. Inspect the profile picture on the right side.
2. **Verify**:
   - The image is rendered as a circle with golden/glass borders and dynamic ambient background glow.
   - Four social badges (LinkedIn, WhatsApp, Email, X) are floating around the circle.
   - Each badge has a gentle, continuous drift animation.
3. Hover over the WhatsApp badge:
   - **Verify**: It scales up, glows with a green tint, and shows a tooltip in the current language.
4. Click the WhatsApp badge:
   - **Verify**: It opens the WhatsApp API url in a new tab.
5. Repeat hover and click tests for LinkedIn, Email, and X (Twitter) badges.
