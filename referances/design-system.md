# MDZN Partners — UI Design System v1.2

> Complete visual guidelines for MDZN Partners
> **Version:** 1.2 | **Date:** February 2026 | **Framework:** Tailwind CSS

---

## Table of Contents

- [00 — Design Brief](#00--design-brief)
- [01 — Color System](#01--color-system)
- [02 — Typography](#02--typography)
- [03 — Spacing & Grid](#03--spacing--grid)
- [04 — Components](#04--components)
- [05 — Glass Effects](#05--glass-effects)
- [06 — Icons](#06--icons)
- [07 — Illustrations](#07--illustrations)
- [08 — Motion](#08--motion)
- [09 — Interaction States](#09--interaction-states)
- [10 — Do's & Don'ts](#10--dos--donts)

---

## 00 — Design Brief

### Brand Values

| Value | Description |
|---|---|
| **Trust** | MDZN handles real money — commissions, payouts, revenue. Every design decision must reinforce reliability and security. Users need to feel their business is in safe hands. |
| **Premium** | Backed by Mediazone (Turkey's largest digital media network), MDZN serves established brands. The design must feel sophisticated — not cheap, not flashy — like a product worth paying for. |
| **Friendly** | B2B doesn't mean cold. Influencers and small merchants are our users too. The interface should feel approachable — warm typography, subtle gold accents, and human-centered copy. |

### Design Philosophy

#### Core Principles

1. **Precision Over Decoration** — Every element serves a purpose. No decorative gradients, no unnecessary shadows, no visual noise. If it doesn't help the user, remove it. Apple's design language is our north star.
2. **Whitespace is a Feature** — Generous spacing creates clarity and premium perception. Never crowd elements. Let content breathe. Empty space isn't wasted — it's the foundation of hierarchy.
3. **Consistency Builds Trust** — Same corners, same shadows, same spacing — everywhere. Users subconsciously notice inconsistency, and it erodes confidence. When in doubt, follow the system exactly.
4. **Soft Glass, Not Loud Glass** — Glassmorphism is used subtly — to create depth, not spectacle. The blur is soft (12px), the opacity is high (70%), and it's reserved for specific contexts like feature cards and overlays.

### Target Audience

| Audience | Description |
|---|---|
| **E-Commerce Brands** | Marketing managers and founders at Turkish e-commerce companies using İkas, Shopify, or Ticimax. They want professional tools, clear ROI, and no-nonsense interfaces. |
| **Influencers** | Content creators on Instagram, YouTube, and TikTok. They're mobile-first, visually oriented, and need to understand their earnings at a glance. Simplicity matters. |
| **Agencies** | Marketing agencies managing multiple influencer portfolios. They need efficiency, bulk actions, and clear reporting. Power-user features without complexity. |

### Quick Reference

| Token | Value |
|---|---|
| Primary | `#0F172A` |
| Accent | `#D4AF37` |
| Surface | `#F8FAFC` |
| Border | `#E2E8F0` |
| Font | Plus Jakarta Sans |
| Base Unit | 8px |
| Corners | 12–16px |
| Glass Blur | 12px |

---

## 01 — Color System

> Arctic Navy palette with gold accent. Built for trust, premium feel, and warmth.

### Why This Palette?

We chose deep navy over pure black for warmth. The gold accent (`#D4AF37`) is deliberately muted — not bright yellow — to feel premium rather than cheap. White backgrounds maximize readability and create a clean, professional canvas that lets content shine.

**The Result:** A palette that feels like a premium financial product — trustworthy and sophisticated — but with enough warmth (gold accents, soft grays) to remain approachable for influencers and small businesses.

### Core Palette

| Name | Hex | Usage |
|---|---|---|
| White | `#FFFFFF` | Page background |
| Surface | `#F8FAFC` | Section backgrounds |
| Border | `#E2E8F0` | Borders, dividers |
| Primary | `#0F172A` | Text, buttons, logo |
| Secondary | `#1E3A5F` | Hover states, depth |
| Accent | `#D4AF37` | Highlights, CTAs |

> **Designer Note:** Use gold sparingly — it's for emphasis only. Good uses: highlighting key metrics, accent on hover states, special badges. Bad uses: large backgrounds, primary buttons (use navy instead), body text.

### Primary Scale (Slate)

| Level | Hex |
|---|---|
| 900 | `#0F172A` |
| 800 | `#1E293B` |
| 700 | `#334155` |
| 600 | `#475569` |
| 500 | `#64748B` |
| 400 | `#94A3B8` |
| 300 | `#CBD5E1` |
| 200 | `#E2E8F0` |
| 100 | `#F1F5F9` |
| 50 | `#F8FAFC` |

### Secondary Scale (Navy)

| Level | Hex |
|---|---|
| 900 | `#0C2340` |
| 800 | `#1E3A5F` |
| 700 | `#2D4A6F` |
| 600 | `#3D5A7F` |
| 500 | `#4D6A8F` |
| 400 | `#6D8AAF` |
| 300 | `#8DAACF` |
| 200 | `#ADCAEF` |
| 100 | `#CDEAFF` |

### Accent Scale (Gold)

| Level | Hex |
|---|---|
| 900 | `#7A5C0A` |
| 800 | `#9A7B1A` |
| 700 | `#BA9A2A` |
| 600 | `#D4AF37` |
| 500 | `#E4C04A` |
| 400 | `#F0D060` |
| 300 | `#F8E080` |
| 200 | `#FCF0A0` |
| 100 | `#FFFACC` |

### Semantic Colors

| Name | Hex (600) | Hex (100) | Usage |
|---|---|---|---|
| Success | `#059669` | `#D1FAE5` | Positive actions |
| Warning | `#D97706` | `#FEF3C7` | Caution states |
| Error | `#DC2626` | `#FEE2E2` | Errors, destructive |
| Info | `#0284C7` | `#E0F2FE` | Information |

### Surface Colors

| Name | Value |
|---|---|
| surface-white | `#FFFFFF` |
| surface-50 | `#F8FAFC` |
| surface-100 | `#F1F5F9` |
| surface-glass | `rgba(255, 255, 255, 0.7)` |
| surface-glass-border | `rgba(255, 255, 255, 0.5)` |

---

## 02 — Typography

> Plus Jakarta Sans provides warmth and modernity with excellent readability.

### Why Plus Jakarta Sans?

We needed a typeface that balances professionalism with warmth. Inter felt too clinical. Roboto felt dated. Plus Jakarta Sans has geometric roots (trustworthy, modern) but with subtle humanist touches (friendly, approachable). The rounded terminals add warmth without sacrificing legibility.

**The Result:** Headlines feel bold and confident (800 weight), body text reads comfortably on all screens, and the overall aesthetic sits perfectly between "corporate" and "startup." It's a typeface that works for both a bank and a lifestyle brand.

### Font Family

```css
/* Primary Font */
font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;

/* Monospace (code, data, hex values) */
font-family: 'JetBrains Mono', monospace;
```

> **Designer Note:** Always use negative letter-spacing on headlines (Display: -2px, H1: -1px, H2: -0.5px). This tightens the text and creates that premium, editorial look. Body text should have 0 letter-spacing for maximum readability.

### Type Scale

| Name | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|
| Display 1 | 72px | 800 | -2px | 1.1 |
| Display 2 | 56px | 800 | -1.5px | 1.15 |
| H1 | 48px | 800 | -1px | 1.2 |
| H2 | 36px | 700 | -0.5px | 1.25 |
| H3 | 28px | 700 | -0.3px | 1.3 |
| H4 | 22px | 700 | 0 | 1.35 |
| H5 | 18px | 700 | 0 | 1.4 |
| Body Large | 18px | 500 | 0 | 1.6 |
| Body | 16px | 400 | 0 | 1.6 |
| Body Small | 14px | 400 | 0 | 1.6 |
| Caption | 12px | 500 | 0 | 1.5 |
| Overline | 11px | 700 | 1.5px | uppercase |

> **Overline Usage:** Overline text is used for section labels, categories, and subtle classification (e.g., "Hazır Entegrasyon", "Mobil Tracking"). **Important: Overline labels should stand alone without decorative border-top lines.** The text itself provides sufficient visual hierarchy — no additional decoration needed. Let the uppercase letters and letter-spacing do the work.

### Font Weights

| Weight | Value | Usage |
|---|---|---|
| Regular | `400` | Body text, paragraphs |
| Medium | `500` | Lead text, emphasized body, nav links |
| Semibold | `600` | Buttons, labels, small headings |
| Bold | `700` | Headings (H2–H5), card titles |
| Extrabold | `800` | Display, H1, hero headlines only |

---

## 03 — Spacing & Grid

> 8px base unit creates consistent rhythm and alignment across all components.

### Why 8px Base Unit?

The 8px grid is an industry standard for good reason: it divides cleanly (8, 4, 2), scales predictably (8, 16, 24, 32...), and aligns perfectly with most screen densities. More importantly, it creates a subconscious sense of order that users feel even if they can't articulate it.

**The Result:** Every element snaps to the same invisible grid. Padding, margins, heights, widths — all multiples of 8. This consistency is what makes a design feel "premium" rather than "thrown together."

### Spacing Scale

| Token | Value |
|---|---|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-20` | 80px |
| `space-24` | 96px |

### 12-Column Grid

| Property | Value |
|---|---|
| Columns | `12` |
| Gutter | `16px` (mobile) / `24px` (desktop) |
| Max Width | `1400px` |
| Container Padding | `24px` (mobile) / `48px` (desktop) |

### Breakpoints

| Name | Value |
|---|---|
| Mobile | `< 640px` |
| Tablet | `640px` |
| Laptop | `1024px` |
| Desktop | `1280px` |
| Wide | `1536px` |

### Section Spacing

Default vertical padding for homepage sections. These values optimize above-the-fold content visibility while maintaining visual breathing room.

| Context | Tailwind Class | Value |
|---|---|---|
| Standard section | `py-16` | 64px top + 64px bottom |
| Hero section | `py-12 lg:py-16` | 48px/64px (compact to maximize above-fold) |
| Lightweight section (e.g. Mediazone) | `py-12` | 48px top + 48px bottom |

> **Note:** `py-24` (96px) was the previous default. It has been reduced to `py-16` (64px) to improve content density above the fold. Internal element spacing (margins between headings, cards, etc.) remains unchanged — only the outer section wrapper padding is affected.

---

## 04 — Components

> Core UI components with precise specifications for consistent implementation.

### Buttons

#### Primary Button

| Property | Value |
|---|---|
| Background | `#0F172A` |
| Color | `#FFFFFF` |
| Hover | `#1E293B` |
| Sizes (height) | Large: `56px` / Medium: `44px` / Small: `36px` |
| Padding | Large: `0 32px` / Medium: `0 24px` / Small: `0 16px` |
| Font size | Large: `16px` / Medium: `14px` / Small: `13px` |
| Font weight | `600` |
| Border radius | Large: `12px` / Medium: `8px` / Small: `6px` |

#### Secondary Button

| Property | Value |
|---|---|
| Background | `#FFFFFF` |
| Border | `1px solid #E2E8F0` |
| Hover | bg `#F8FAFC`, border `#CBD5E1` |

#### Accent Button

| Property | Value |
|---|---|
| Background | `#D4AF37` |
| Color | `#0F172A` |
| Hover | `#BA9A2A` |

#### Ghost Button

| Property | Value |
|---|---|
| Background | `transparent` |
| Hover | `#F8FAFC` |

> **Designer Note:** Primary buttons (navy) should be used for the single most important action on a page. Never have two primary buttons side by side. Use Secondary for alternative actions. Reserve Accent (gold) buttons only for special promotions or time-sensitive CTAs.

### Navigation

| Element | Spec |
|---|---|
| Nav Height | `72px` |
| Logo Mark | `36x36px`, 2px border, 6px radius |
| Link Font | `14px / 500` |
| Link Spacing | `32px` gap |
| Mobile Breakpoint | `1024px` (hamburger menu) |

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 6px | Small buttons, chips, icon containers |
| `radius-md` | 8px | Buttons, inputs, small cards |
| `radius-lg` | 12px | Cards, dropdowns, modals |
| `radius-xl` | 16px | Large cards, feature sections |
| `radius-2xl` | 20px | Hero cards, major containers |
| `radius-full` | 9999px | Pills, avatars, badges |

### Shadows

| Token | Value |
|---|---|
| `shadow-sm` | `0 1px 2px rgba(0, 0, 0, 0.04)` |
| `shadow-md` | `0 4px 12px rgba(0, 0, 0, 0.06)` |
| `shadow-lg` | `0 8px 24px rgba(0, 0, 0, 0.08)` |
| `shadow-xl` | `0 16px 40px rgba(0, 0, 0, 0.1)` |
| `shadow-glass` | `0 8px 32px rgba(0, 0, 0, 0.08)` |
| `shadow-illustration` | `0 25px 50px rgba(0, 0, 0, 0.15)` |

---

## 05 — Glass Effects

> Soft Glass style: subtle glassmorphism for elegant depth without heaviness.

### Why Soft Glass?

Glassmorphism adds depth and sophistication when used sparingly. We chose "Soft Glass" over heavy glass effects because our brand values clarity and trust — overly blurred, colorful glass can feel gimmicky. Our glass is subtle: high opacity (70%), modest blur (12px), and always on light backgrounds.

**The Result:** Glass elements feel premium and modern without distracting from content. They create visual hierarchy on gradient backgrounds while maintaining readability. The effect is "refined sophistication" rather than "look at this cool effect."

### Glass Card Specification

```css
.glass-card {
  /* Background with transparency */
  background: rgba(255, 255, 255, 0.7);

  /* Blur effect */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  /* Semi-transparent border */
  border: 1px solid rgba(255, 255, 255, 0.5);

  /* Soft shadow */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);

  /* Rounded corners */
  border-radius: 16px;
}
```

> **Designer Note:** Glass effects ONLY work on gradient or textured backgrounds. Never use glass cards on solid white or solid color backgrounds — the effect becomes invisible and you just have a weird semi-transparent card. Always ensure there's visual "content" behind the glass for the blur to affect.

---

## 06 — Icons

> Geometric Container style: icons in square containers echoing the MDZN logo.

### Why Geometric Containers?

The MDZN logo is a square with letters inside. By placing icons inside rounded-square containers, we create visual consistency between the logo mark and the iconography. This "contained" approach also adds weight and presence to otherwise lightweight outlined icons.

**The Result:** Icons feel substantial and purposeful rather than decorative. The container provides a consistent hit target for interactive icons and creates visual rhythm when icons are placed in a row. The system feels cohesive and intentional.

### Icon Container Sizes

| Size | Container | Icon | Border Radius |
|---|---|---|---|
| Small | `32x32px` | `16px` | `6px` |
| Medium (default) | `40x40px` | `20px` | `8px` |
| Large | `48x48px` | `24px` | `12px` |

### Default Container Style

| Property | Value |
|---|---|
| Background | `#F1F5F9` |
| Border | `1px solid #E2E8F0` |
| Icon stroke width | `2px` |
| Icon stroke color | `#0F172A` |

### Icon Library: Lucide

| Property | Value |
|---|---|
| Library | Lucide Icons (lucide.dev) |
| Stroke Width | `2px` (inside containers) |
| Stroke Color | `#0F172A` (primary-900) |
| Stroke Linecap | `round` |
| Stroke Linejoin | `round` |

---

## 07 — Illustrations

> Floating Window style: screenshots in browser chrome, flat presentation (0° perspective).

### Why Flat (0°) Perspective?

We considered 3D perspective but rejected it for two reasons: (1) Our glass effects already provide depth — adding perspective would create visual competition. (2) Flat presentation is cleaner, more professional, and easier to align on the grid. It also feels more honest — "this is what you'll actually see."

**The Result:** Screenshots feel like "windows into the product" rather than marketing renders. The deep shadow (25px blur) creates the floating effect without rotation. The macOS-style chrome adds polish while remaining universally recognizable.

### Screenshot Treatment Specs

| Property | Value |
|---|---|
| Perspective | `0°` — completely flat |
| Shadow | `0 25px 50px rgba(0, 0, 0, 0.15)` |
| Border Radius | `16px` |
| Chrome Background | `#F8FAFC` |
| Traffic Light Dots | `12px` diameter |
| Dot Colors | `#EF4444` (red), `#FBBF24` (yellow), `#22C55E` (green) |
| Max Width | `500–600px` for feature sections |

> **Designer Note:** Never use real screenshots with real customer data. Always create stylized mockups with placeholder data. This protects privacy, ensures legal compliance, and allows you to design the "perfect" dashboard state rather than whatever happens to be in a real account.

---

## 08 — Motion

> Subtle, purposeful animations that enhance without distracting.

### Timing Functions

| Token | Duration | Usage |
|---|---|---|
| `transition-fast` | `150ms ease` | Hover states, color changes, micro-interactions |
| `transition-base` | `200ms ease` | Button presses, card hovers, most UI feedback |
| `transition-slow` | `300ms ease` | Page transitions, modals, large element reveals |

> **Designer Note:** Animation should be felt, not seen. If a user consciously notices an animation, it's probably too slow or too dramatic. Keep movements small (8–16px max), timing fast (under 300ms), and only animate `transform` and `opacity` for performance.

### Animation Patterns

```css
/* Fade In — for content reveals */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Slide In — for side panels */
@keyframes slideIn {
  from { opacity: 0; transform: translateX(-16px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* Scale In — for modals, popups */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}
```

---

## 09 — Interaction States

> Warm & Engaging style: gold accent appears on hover and active states for brand warmth.

### Why Warm & Engaging?

MDZN serves both enterprise brands and individual influencers. The gold accent appearing on hover creates a moment of delight — rewarding interaction while reinforcing brand identity. It's professional enough for B2B, yet friendly enough for creators.

**The Result:** Interactions feel responsive and rewarding. The gold accent creates visual continuity between the brand identity and the user experience. Elements feel "alive" without being distracting or unprofessional.

### Button States

| Button Type | Normal | Hover | Active (Click) |
|---|---|---|---|
| **Primary** | `bg: #0F172A` | `bg: #1E293B` + `box-shadow: 0 0 0 3px rgba(212,175,55,0.3)` | `bg: #334155` + `box-shadow: 0 0 0 3px rgba(212,175,55,0.5)` + `scale(0.98)` |
| **Secondary** | `bg: #FFFFFF`, `border: 1px #E2E8F0` | `bg: #FFFACC`, `border: 1px #D4AF37`, `color: #BA9A2A` | `bg: #FFFACC`, `border: 1px #BA9A2A`, `scale(0.98)` |
| **Ghost** | `bg: transparent` | `bg: #FFFACC`, `color: #BA9A2A` | `bg: #FFFACC`, `scale(0.98)` |

### Button State CSS

```css
/* Primary Button - Warm & Engaging */
.btn-primary {
  background: #0F172A;
  transition: all 200ms ease;
}
.btn-primary:hover {
  background: #1E293B;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.3);
}
.btn-primary:active {
  background: #334155;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.5);
  transform: scale(0.98);
}

/* Secondary Button - Gold Accent on Hover */
.btn-secondary:hover {
  background: #FFFACC;
  border-color: #D4AF37;
  color: #BA9A2A;
}
```

### Card States

| State | Border | Shadow | Transform |
|---|---|---|---|
| **Normal** | `1px solid #E2E8F0` | none | none |
| **Hover** | `1px solid #D4AF37` | `0 4px 16px rgba(212,175,55,0.15)` | none |
| **Active** | `1px solid #BA9A2A` | `0 2px 8px rgba(212,175,55,0.2)` | none |

```css
/* Card - Gold Border on Hover */
.card {
  border: 1px solid #E2E8F0;
  transition: all 200ms ease;
}
.card:hover {
  border-color: #D4AF37;
  box-shadow: 0 4px 16px rgba(212, 175, 55, 0.15);
}
.card:active {
  border-color: #BA9A2A;
  box-shadow: 0 2px 8px rgba(212, 175, 55, 0.2);
}
```

### Link & Navigation States

| Element | Normal | Hover | Active |
|---|---|---|---|
| **Nav Link** | `color: #475569` | `color: #BA9A2A` | `color: #D4AF37` |
| **Inline Link** | `color: #475569` | `color: #BA9A2A` | `color: #D4AF37` |
| **Footer Link** | `color: #94A3B8` | `color: #FFFFFF` | `color: #D4AF37` |

### Icon Container States

| State | Background | Border | Icon Color |
|---|---|---|---|
| **Normal** | `#F1F5F9` | `1px solid #E2E8F0` | `#64748B` |
| **Hover** | `#FFFACC` | `1px solid #D4AF37` | `#BA9A2A` |
| **Active** | `#FFFACC` | `1px solid #BA9A2A` | `#7A5C0A` |

### Tab States

| State | Background | Border | Text Color |
|---|---|---|---|
| **Normal** | `#FFFFFF` | `1px solid #E2E8F0` | `#475569` |
| **Hover** | `#FFFACC` | `1px solid #D4AF37` | `#BA9A2A` |
| **Active (Selected)** | `#D4AF37` | `1px solid #D4AF37` | `#0F172A` |

> **Designer Note:** For tabs that already use `bg: #0F172A` as the active state (like feature tabs), keep that styling. The gold hover is for the inactive tabs only. This creates a clear "preview" effect before clicking, then a "confirmed" state in navy.

### Form Input States

| State | Border | Shadow |
|---|---|---|
| **Normal** | `1px solid #E2E8F0` | none |
| **Hover** | `1px solid #CBD5E1` | none |
| **Focus** | `1px solid #D4AF37` | `0 0 0 3px rgba(212,175,55,0.2)` |
| **Error** | `1px solid #DC2626` | `0 0 0 3px rgba(220,38,38,0.1)` |

### Tailwind CSS Reference

```html
<!-- Primary Button -->
class="btn-primary transition-all duration-200
  hover:bg-primary-800 hover:shadow-[0_0_0_3px_rgba(212,175,55,0.3)]
  active:bg-primary-700 active:shadow-[0_0_0_3px_rgba(212,175,55,0.5)] active:scale-[0.98]"

<!-- Secondary Button -->
class="btn-secondary transition-all duration-200
  hover:bg-accent-100 hover:border-accent-600 hover:text-accent-700
  active:scale-[0.98]"

<!-- Card -->
class="card transition-all duration-200
  hover:border-accent-600 hover:shadow-[0_4px_16px_rgba(212,175,55,0.15)]"

<!-- Icon Container -->
class="icon-container transition-all duration-200
  hover:bg-accent-100 hover:border-accent-600"

<!-- Nav Link -->
class="text-primary-600 transition-colors duration-150
  hover:text-accent-700"

<!-- Form Input Focus -->
class="border-primary-200 transition-all duration-200
  focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20 focus:outline-none"
```

### Interaction Quick Reference

| Token | Value |
|---|---|
| Hover Duration | `200ms` |
| Active Duration | `150ms` |
| Click Transform | `scale(0.98)` |
| Hover Accent | `#D4AF37` |
| Hover Background | `#FFFACC` |
| Hover Text | `#BA9A2A` |
| Glow Opacity | `0.3` / `0.5` |
| Timing Function | `ease` |

---

## 10 — Do's & Don'ts

### Do

- Use generous whitespace — when in doubt, add more padding
- Keep button text short and action-oriented ("Demo Talep Et")
- Use gold accent sparingly — only for emphasis
- Place glass effects on gradient backgrounds only
- Use negative letter-spacing on large headlines
- Align everything to the 8px grid
- Use icons inside geometric containers for features
- Keep animations under 300ms
- Use gold accent (`#D4AF37`) on hover states for warmth
- Add gold glow ring on primary button hover/active
- Use `scale(0.98)` transform on button active states

### Don't

- Don't use pure black (`#000`) — use primary-900 (`#0F172A`)
- Don't have two primary buttons side by side
- Don't use gold for large backgrounds or body text
- Don't use glass cards on solid white backgrounds
- Don't add decorative gradients or shadows without purpose
- Don't mix border radius sizes on the same card
- Don't use perspective on screenshot illustrations
- Don't use real customer data in mockups
- Don't add border-top lines above overline labels — let them stand alone
- Don't use lift/translateY effects on hover — use gold accent instead
- Don't forget to add `transition-all duration-200` on interactive elements

---

### Final Notes for Designers

> This design system exists to make your job easier, not harder. Every specification here was chosen deliberately after multiple iterations. When you follow the system exactly, the result will feel cohesive and premium. When you deviate, even slightly, inconsistencies compound and the quality drops.
>
> **The goal is Apple-level polish.** That means pixel-perfect alignment, consistent spacing, and restraint. If something feels "too simple," resist the urge to add decoration. Simplicity is the feature. Trust the whitespace. Trust the typography. Trust the system.
>
> When in doubt, ask: "Does this element serve the user or just fill space?" If it's the latter, remove it.

---

## CSS Custom Properties (Complete Reference)

```css
:root {
  /* Primary Colors */
  --primary-900: #0F172A;
  --primary-800: #1E293B;
  --primary-700: #334155;
  --primary-600: #475569;
  --primary-500: #64748B;
  --primary-400: #94A3B8;
  --primary-300: #CBD5E1;
  --primary-200: #E2E8F0;
  --primary-100: #F1F5F9;
  --primary-50:  #F8FAFC;

  /* Secondary (Navy) */
  --secondary-900: #0C2340;
  --secondary-800: #1E3A5F;
  --secondary-700: #2D4A6F;
  --secondary-600: #3D5A7F;
  --secondary-500: #4D6A8F;
  --secondary-400: #6D8AAF;
  --secondary-300: #8DAACF;
  --secondary-200: #ADCAEF;
  --secondary-100: #CDEAFF;

  /* Accent (Gold) */
  --accent-900: #7A5C0A;
  --accent-800: #9A7B1A;
  --accent-700: #BA9A2A;
  --accent-600: #D4AF37;
  --accent-500: #E4C04A;
  --accent-400: #F0D060;
  --accent-300: #F8E080;
  --accent-200: #FCF0A0;
  --accent-100: #FFFACC;

  /* Semantic */
  --success-600: #059669;
  --success-100: #D1FAE5;
  --warning-600: #D97706;
  --warning-100: #FEF3C7;
  --error-600:   #DC2626;
  --error-100:   #FEE2E2;
  --info-600:    #0284C7;
  --info-100:    #E0F2FE;

  /* Surface */
  --surface-white: #FFFFFF;
  --surface-50:    #F8FAFC;
  --surface-100:   #F1F5F9;
  --surface-glass:        rgba(255, 255, 255, 0.7);
  --surface-glass-border: rgba(255, 255, 255, 0.5);

  /* Typography */
  --font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono:   'JetBrains Mono', monospace;

  /* Spacing */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* Border Radius */
  --radius-sm:   6px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm:           0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md:           0 4px 12px rgba(0, 0, 0, 0.06);
  --shadow-lg:           0 8px 24px rgba(0, 0, 0, 0.08);
  --shadow-xl:           0 16px 40px rgba(0, 0, 0, 0.1);
  --shadow-glass:        0 8px 32px rgba(0, 0, 0, 0.08);
  --shadow-illustration: 0 25px 50px rgba(0, 0, 0, 0.15);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;

  /* Glass */
  --glass-blur:   12px;
  --glass-bg:     rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.5);
}
```
