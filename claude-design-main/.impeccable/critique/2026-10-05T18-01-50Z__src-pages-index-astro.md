---
target: homepage
total_score: 22
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 3
target_identity: "file:/Users/strider/Desktop/ClaudeCode/06-coffee-shop/src/pages/index.astro"
target_fingerprint: "sha256:b811f62c68685668b08ca7579f979b6e8c28b062c6ea3f469d16fa3bbb4d750b"
target_path: /Users/strider/Desktop/ClaudeCode/06-coffee-shop/src/pages/index.astro
timestamp: 2026-10-05T18-01-50Z
slug: src-pages-index-astro
---
# Critique: src/pages/index.astro (Crema & Nogal landing). Method: dual-agent

## Heuristics: 22/36, Acceptable (61%); #7 n/a
1 Status 3: live price aria-live ok; "Lo quiero" no feedback.
2 Real world 2: °F, oz, USD, Seattle, (555) for LATAM audience.
3 Control 3: newsletter email not editable after success.
4 Consistency 2: 3 buy labels; newsletter 10% vs sub 15%; step 1 promises coffee+grind picker that doesn't exist.
5 Error prevention 2: frequency doesn't affect price; a@b accepted.
6 Recognition 3: grind must be recalled from FAQ.
7 n/a (landing, no expert path).
8 Aesthetic 3: "Envío gratis" said 4x.
9 Error recovery 1: native English validation bubble only.
10 Help 3: FAQ + email.

## Specificity
Skin specific (tokens faithful), skeleton generic DTC sequence. Traceability is shallow: no farm, producer, or roast date. Hero half is a placeholder.
Detector: CLI 5 advisory design-system-font-size (13px AnnouncementBar:5, Footer:29, ProductCard:31,34; 32px Subscription:34). Browser 20: 17 low-contrast (FP, link-draw gradient), italic-serif (FP, documented), stripes (FP, placeholder), nested-cards (borderline FP), skipped-heading h1→h3 (real), width transition BrewGuide:14 (real, minor).

## Priority issues
P1 Purchase CTAs → #visitanos map (ProductCard:51, Subscription:72). clarify/onboard
P1 Subscription calc breaks its promise: frequency has no price effect (utils/subscription.ts), no coffee/grind picker, no monthly total, no reassurance at CTA. shape→clarify
P1 Wrong-market localization: °F/oz/USD/Seattle/555/dead WhatsApp. clarify
P2 Mobile tap targets <44px (nav 25px, footer 20px), clipped nav/tab scrollers with no affordance. adapt
P2 Traceability buried, generic structure: add farm, roast date, lot; hero placeholder → roast ticket. bolder/delight

## Personas
Jordan: buy → Seattle map; tabs and products not linked; roast labels unexplained.
Riley: radios 6 tab stops, no arrow support; tabs no Home/End; tabpanel not focusable; no skip link; h1→h3; focus lost after newsletter success.
Casey: tap targets; scroller clipping.
Lucía (GDL V60): can't parse 205°F or 12 oz; USD; no grind choice; dead WhatsApp.

## Minor
Bright map iframe breaks dusk mood + 1px sliver; logo href="#"; "Cada 2 semanas" pill wraps; 13px off-ramp; width transition; collage all placeholders.

## Questions
Farm name missing while bag photo gets 4:3? Subscription as hero? Map section → "Tueste de esta semana"?
