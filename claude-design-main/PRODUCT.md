# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Spanish-speaking home coffee drinkers in Latin America / Mexico who already care (or are starting to care) about specialty coffee. They land on the page to choose a bag, consider a recurring subscription, learn how to brew it well, or find the physical café. Primary job: pick the right coffee for their taste and brewing method with confidence, then buy or subscribe.

## Product Purpose
Single-page marketing landing for **Crema & Nogal**, a fictional specialty coffee roaster. Built as a learning/course project to practice Tailwind CSS v4 on Astro. Success = a credible, complete, high-craft landing page that reads like a real roaster's storefront.

## Positioning
Small-batch, single-origin roaster with full traceability: every bag names its farm/origin, process and altitude; roasted weekly (Mondays) and shipped the same week; direct trade above market price; free shipping with no minimum. Pairs selling with education (brew guide per method, guide included in every shipment).

## Operating Context
Visitor flow on one page: announcement bar → hero → value props → featured coffees (origin, process, tasting notes, roast level 1–5, price) → subscription (choose coffee, grind, frequency, bags; live price with 15% discount) → origin story → brew guide tabs (Espresso, V60, Prensa francesa, Cold brew with grind/ratio/time/temp) → testimonials → FAQ → visit (address, hours) → newsletter (welcome code `PRIMERATAZA`) → footer.

## Capabilities and Constraints
- Stack: Astro 7 + Tailwind CSS v4 via `@tailwindcss/vite`; no UI framework. Content lives in `src/config/site.ts` and `src/config/content.ts`; small TS scripts for tabs, subscription calculator, newsletter.
- Landing only: CTAs, subscription calculator and newsletter are demonstrative. No cart, checkout, payments or backend.
- Landing variants exist as config: hero layout `split | fullbleed`, CTA mode `Comprar | Suscribirme`, product count 3 or 6.
- Language: Spanish (`lang="es"`).
- **Open inconsistency:** target market is LATAM/Mexico, but current content uses a Seattle address, °F temperatures and USD-style prices. Undecided whether to localize (°C, local currency, local address).

## Brand Commitments
- Name: Crema & Nogal (fictional). Logo component in `src/components/Logo.astro`.
- Voice: warm, direct, informed "tú"; practical coffee knowledge without snobbery.

## Evidence on Hand
- Product catalog (6 coffees), subscription steps/frequencies, brew recipes, FAQs: `src/config/content.ts`.
- Testimonials, address, phone, email, hours: **placeholder/illustrative**, not real. Do not add further invented social proof, press, awards, customer counts or certifications.
- No real product photography yet; `ImageSlot.astro` marks image placeholders.

## Product Principles
1. Traceability is the product: origin, process, altitude and roast date stay visible, never buried.
2. Teach while selling: brewing guidance is a first-class part of the purchase, not an afterthought.
3. Subscription is the relationship: make its cost and flexibility (pause/skip/cancel anytime) transparent.
4. Credible, not fabricated: placeholder content stays plausible and labeled; no fake proof beyond what exists.
