---
name: Crema & Nogal
description: Small-batch specialty coffee roaster; warm, dark, editorial landing built on ink and crema.
colors:
  crema: "#c8894a"
  caramel: "#dda463"
  roast: "#6b4226"
  bean: "#3e2616"
  mocha: "#5a4636"
  mocha-deep: "#6b5848"
  ink: "#141414"
  charcoal: "#2a2a2a"
  line: "#3a3a3a"
  line-strong: "#4a4a4a"
  cream: "#f4ece1"
  cream-dim: "#e6dccf"
  paper: "#fffaf3"
  oat: "#efe3d2"
  sand: "#e6d9c7"
  soft: "#d9cfc2"
  muted: "#bfb4a6"
  hairline: "#d8c7b1"
typography:
  display:
    fontFamily: "Zodiak, ui-serif, Georgia, serif"
    fontSize: "clamp(48px, 6.4vw, 92px)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Zodiak, ui-serif, Georgia, serif"
    fontSize: "clamp(36px, 4.4vw, 58px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Zodiak, ui-serif, Georgia, serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.05
  quote:
    fontFamily: "Zodiak, ui-serif, Georgia, serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.45
  body:
    fontFamily: "Switzer, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Switzer, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Switzer, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    letterSpacing: "0.1em"
rounded:
  chip: "6px"
  control: "14px"
  inset: "16px"
  card: "22px"
  tile: "24px"
  panel: "28px"
  pill: "9999px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  section: "clamp(64px, 8vw, 112px)"
  container: "1280px"
  stack-sm: "10px"
  stack-md: "14px"
  stack-lg: "24px"
  stack-xl: "28px"
components:
  button-primary:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "16px 30px"
  button-primary-hover:
    backgroundColor: "{colors.caramel}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "15px 26px"
  chip-note:
    backgroundColor: "{colors.oat}"
    textColor: "{colors.bean}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  chip-origin:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  option-pill:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
  option-pill-selected:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.ink}"
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.bean}"
    rounded: "{rounded.pill}"
    padding: "11px 20px"
  tab-selected:
    backgroundColor: "{colors.bean}"
    textColor: "{colors.cream}"
  input-pill:
    backgroundColor: "{colors.bean}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "15px 22px"
  card-product:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "24px 24px 26px"
  card-testimonial:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.cream}"
    rounded: "{rounded.card}"
    padding: "32px"
  panel-dark:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.cream}"
    rounded: "{rounded.panel}"
    padding: "clamp(28px, 3.5vw, 44px)"
---

# Design System: Crema & Nogal

## Overview

**Creative North Star: "The Roastery at Dusk"**

The page is a roastery after hours: a near-black room (ink, charcoal, bean) lit by one warm source, the amber of fresh crema. Against that dark, the brand speaks in a confident editorial serif and lets copy breathe. Periodically the visitor steps into daylight: cream and paper sections where the practical work happens (choosing a bag, learning a recipe, reading the FAQ). That dark/light alternation is the system's pulse; every section is one or the other, never a blend.

The mood is warm, dark and editorial. Density is generous: sections pad out to 112px, headlines balance across lines, body copy caps at ~30em. Expression lives in type, warm tone and soft geometry, not in ornament, imagery tricks or effects. The world is flat: depth is a change of surface tone, never a shadow.

Confirmed rejections: chain-café green and kraft-paper/chalkboard clichés; generic SaaS styling (drop-shadow cards, decorative gradients, blue CTAs, glassmorphism); rustic farmhouse kitsch (burlap, wood textures, bean doodles, script fonts).

**Key Characteristics:**
- Dark-first canvas (ink) with crema as the single warm light source.
- Strict section alternation between dark rooms and cream daylight.
- Zodiak for voice, Switzer for everything functional.
- Flat surfaces; depth by tonal stepping and hairline borders.
- Soft, confident geometry: full pills for actions, 22–28px radii for containers.

## Colors

A coffee-chain palette in the literal sense: every hue sits between roasted bean and steamed milk, with one amber accent.

### Primary
- **Crema Amber** (crema): the light in the room. Primary buttons, announcement bar, logo mark, selected option pills, serif numerals in step lists and value props, review stars. The only saturated fill on a dark section.
- **Toasted Caramel** (caramel): crema's hover and highlight partner. Primary-button hover, the italic accent word in the hero headline, link hover on dark, newsletter code.

### Secondary
- **Medium Roast** (roast): warm brown for structure on light surfaces and for the newsletter band. Eyebrows on cream sections, FAQ/link hover on light, underline borders on dark, roast-meter end stop, newsletter background.
- **Dark Bean** (bean): deepest brown. The Story section background, image-placeholder fill, primary text and selected tab fill on cream, step-number discs, newsletter input fill.

### Neutral
- **Night Roast Ink** (ink): page background, header (92% with blur), footer, text on cream sections and on crema fills.
- **Charcoal Hopper** (charcoal): raised dark surface: subscription panel, testimonial cards, Visit section; also hairline dividers on ink.
- **Grinder Steel** (line): dividers and borders on charcoal surfaces.
- **Burr Grey** (line-strong): outline of ghost buttons and unselected option pills on dark. Token `line-strong`.
- **Steamed Milk Cream** (cream): primary text on dark; background of light sections (Cafés, Brew Guide, FAQ).
- **Faded Cream** (cream-dim): long-form body copy on dark imagery-heavy sections (Story, fullbleed hero). Token `cream-dim`.
- **Paper Filter** (paper): card and panel surface inside cream sections.
- **Oat Milk** (oat): tasting-note chip fill.
- **Burlap Sand** (sand): borders on paper cards, roast-meter track, spec-grid gutters.
- **Foam** (soft): secondary text on dark (hero lede, Visit lede, footer links).
- **Ash** (muted): tertiary text on dark: captions, meta, labels, strikethrough price.
- **Cocoa** (mocha): secondary text on light surfaces.
- **Deep Cocoa** (mocha-deep): small uppercase labels and fine print on paper. Token `mocha-deep`.

### Named Rules
**The One Light Rule.** Crema/caramel are the only saturated fills on dark sections. One crema button per cluster; everything else in the cluster is ghost or underline.

**The Daylight Rule.** Light sections use cream as the floor and paper for contained surfaces; text flips to ink/bean/mocha. Never put crema text on cream.

## Typography

**Display Font:** Zodiak (Fontshare, variable 100–900 + italic, self-hosted in `public/fonts`)
**Body Font:** Switzer (Fontshare, variable 100–900, self-hosted)

**Character:** Zodiak is a high-contrast editorial serif with sharp, slightly flared terminals and a calligraphic light italic; set at 500 with tight negative tracking it reads like a roaster's printed menu, not a template. Switzer is a precise neo-grotesk that stays quiet in every functional role. The serif speaks, the sans serves. Prices, step counts and specs use `tabular-nums`.

### Hierarchy
- **Display** (500, clamp(48px, 6.4vw, 92px), 0.98, −0.03em): hero H1 only. Balanced wrap; one phrase switches to 300 italic in caramel, same size.
- **Headline** (500, clamp(36px, 4.4vw, 58px), 1.02, −0.02em): every section H2 (`heading-2` utility), balanced wrap, ~13em max. Newsletter enlarges to clamp(38px, 5.4vw, 68px).
- **Title** (500, 28px, 1.05, −0.015em): product names, prices, value-prop titles (22px); brew-method names step up to clamp(30px, 3vw, 40px).
- **Quote** (serif, 21–22px, 1.45–1.5): testimonials and the Story pull-quote (italic). Serif numerals in crema (22–30px) mark lists and steps.
- **Body** (400, 17px, 1.625): section ledes and story copy, max ~30–32em, `text-wrap: pretty`. 15–16px for card/FAQ/step copy.
- **Label** (500, 12px, 0.1em, uppercase): data labels only (spec grid, Visit details, footer column titles). Never above a section heading.

### Named Rules
**The Headline-Stands-Alone Rule.** Sections open directly with the serif headline. No eyebrow/kicker above it, no decorative 01/02/03 numbering; the headline carries its own weight.

**The Serif Numeral Rule.** Ordinals and counts that structure content (subscription steps 1/2/3, prices, price total) are set in Zodiak, crema on dark. Inline UI numbers (chip counts, step discs on cream) stay sans.

## Layout

Single centered column: `container-page` caps at 1280px with a fluid gutter (clamp(20px, 4vw, 48px)). Sections stack full-bleed with fluid vertical padding (`section-y`, clamp(64px, 8vw, 112px)); the value-prop strip and footer use lighter padding.

There are no media-query breakpoints. Responsiveness is intrinsic: grids use `repeat(auto-fit | auto-fill, minmax(min(100%, N), 1fr))` with N = 220px (value props), 300px (product/review cards), 360–440px (two-column splits). Two-column sections collapse to one when a column can no longer hold its minimum. Gaps are fluid clamps (e.g. clamp(40px, 6vw, 80px) between split columns, clamp(20px, 2.5vw, 32px) between cards).

Internal rhythm uses small fixed steps: 10px, 20px between heading and lede, 24–28px between content groups, 32px+ between header and grid.

## Elevation & Depth

Fully flat. No `box-shadow` anywhere in the system. Depth is conveyed by stepping surface tone (ink → charcoal on dark; cream → paper on light; bean for the warm "back room") and by 1px hairline borders (charcoal/line on dark, sand on light). The only translucency is the sticky header: ink at 92% with a medium backdrop blur, so content scrolls under it.

### Named Rules
**The Tonal Step Rule.** To raise a surface, change its tone one step (ink→charcoal, cream→paper) and, on light, add a sand hairline. Never add a shadow, glow or gradient to signal elevation.

## Shapes

Soft, confident geometry with no sharp corners. Actions and small tags are full pills (9999px). Containers scale their radius with their size: 14px for option controls, 16px for inset spec grids, 22px for cards, 24px for image tiles, 28px for large panels and hero/map frames. Payment-method chips (6px) are the lone near-square exception. Circles mark ordinals (32px step discs, 32px FAQ toggles, 30px logo mark). Images are always clipped inside a rounded frame; never full-bleed with square corners except the fullbleed hero.

## Components

### Buttons
Soft-edged and confident: solid, fully round, warm.
- **Shape:** full pill (9999px).
- **Primary:** crema fill, ink text, 600 weight. Sizes: 16px/30px pad at 16px text (hero), 13px/22px at 15px (card), 10px/20px at 14px (header).
- **Hover:** fill shifts to caramel, 150ms color transition. No lift, no shadow.
- **Ghost:** transparent, burr-grey 1px border, cream text; border turns crema on hover.
- **Underline link (secondary CTA):** text-only with 1px bottom border (roast on split hero, crema on fullbleed), cream text → caramel on hover.

### Chips
- **Tasting note:** oat fill, bean text, 13px, pill.
- **Origin tag:** ink fill, cream text, 12px with 0.06em tracking, pill, pinned top-left over product imagery.
- **Payment method:** 1px line border, 6px radius, 12px semibold soft text.

### Option Pills (selection)
Radio-group buttons for subscription choices. 14px radius, 1px burr-grey border, transparent, cream semibold 15px text; selected state (`aria-checked`) fills crema with ink text. Equal-width flex items with a min width.

### Tabs
Segmented pill track on cream: track `#e9dccb` with 6px inset padding; tabs are transparent pills with bean text; selected tab fills bean with cream text.

### Cards / Containers
- **Product card:** paper surface, 22px radius, 1px sand border, 4:3 image on top clipped to the card, 24px internal padding. Contains roast meter (6px sand track, caramel→roast fill) and price in bean.
- **Testimonial card:** charcoal surface, 22px radius, 32px padding, no border; serif quote, meta pinned to bottom under a line hairline. No star ratings.
- **Dark panel:** charcoal, 28px radius, fluid padding clamp(28px, 3.5vw, 44px); hosts the subscription calculator with a line-colored divider above the price row.
- **Light panel:** paper, 28px radius, sand border, fluid padding; hosts brew-guide panels with an inset 16px spec grid using 1px sand gutters.

### Inputs / Fields
Pill input on the roast newsletter band: bean fill, 1px `#8a5c3c` border, cream text, warm `#bfa58a` placeholder, 15px/22px pad. Focus shifts the border to caramel (no ring, no glow).

### Navigation
Sticky header, ink at 92% + backdrop blur, charcoal bottom hairline. Logo left (crema circle mark + serif wordmark 22px); links right in 15px cream, caramel on hover, ending with a small primary pill. Below `md` the CTA sits beside the logo and links become a single horizontally scrollable row; no hamburger.

### Image Slot (signature)
Placeholder frame for photography not yet supplied: bean fill with a faint 135° diagonal stripe (white at 3.5%), centered caption in caramel at 80%. Always lives inside a rounded, clipped container. Swap for real photography without changing the frame.

### Accordion (FAQ)
Native `<details>` rows separated by `hairline` (#d8c7b1) borders; 18px semibold ink question, outlined bean circle with an SVG plus that rotates 45° and fills bean when open; hover turns question roast.

## Do's and Don'ts

### Do:
- **Do** alternate dark (ink/charcoal/bean) and light (cream) sections; every section commits to one.
- **Do** use crema as the single warm accent on dark, with caramel for hover and highlight.
- **Do** open every section with the Zodiak headline alone; no eyebrow.
- **Do** build elevation from tone steps and 1px hairlines (sand on light, charcoal/line on dark).
- **Do** use full pills for actions and tags, and 22–28px radii for containers.
- **Do** keep grids intrinsic with `auto-fit` + `minmax(min(100%, N), 1fr)` instead of breakpoints.
- **Do** use the `line-strong`, `cream-dim`, `mocha-deep` and `hairline` tokens instead of raw hex.
- **Do** theme browser surfaces: crema `::selection`, caramel `:focus-visible` outline (2px, 3px offset), crema caret, dark scrollbar.

### Don't:
- **Don't** add box-shadows, glows, glassmorphism (beyond the header blur) or decorative gradients; the roast-meter fill and hero scrim are the only gradients.
- **Don't** introduce green, kraft-paper or chalkboard textures, or any chain-café cliché.
- **Don't** use rustic farmhouse kitsch: burlap, wood grain, hand-drawn bean doodles, script fonts.
- **Don't** use blue or any cool hue for CTAs or links.
- **Don't** put more than one crema-filled button in a CTA cluster.
- **Don't** use crema or caramel text on cream/paper; use roast or bean.
- **Don't** introduce sharp-cornered cards or square buttons.
