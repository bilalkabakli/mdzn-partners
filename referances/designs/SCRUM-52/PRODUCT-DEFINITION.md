# [Product Definition] SCRUM-52 — Başvuru Modal

## Competitor Research Summary

Research across major affiliate/influencer marketing platforms (Impact.com, Awin, CreatorIQ, Aspire, Grin) reveals consistent patterns for partner application forms:

- **Single-page forms are the standard** — none of these platforms use multi-step wizards for simple applications with fewer than ~10 fields. All fields are visible at once, reducing cognitive load and drop-off.
- **2-column layouts for related fields** — first name + last name, email + phone are consistently placed side-by-side on desktop. Full-width is reserved for email-only rows, textareas, and longer inputs.
- **Social links grouped in compact rows** — platforms like CreatorIQ and Aspire display all social platform inputs in a single section, often as a 3-column row with icon/label prefixes (Instagram, YouTube, TikTok).
- **Smart field sizing by content type** — dropdowns and short-answer fields get half width; textareas and URLs get full width. This creates a visually balanced, scannable form.
- **Trust elements near submit** — a privacy note or "we'll respond within X hours" message placed near the submit button increases completion rates. No progress indicators needed for single-page forms.

## Summary

A two-tab application modal ("Başvuru") allowing influencers and brands/agencies to submit partnership applications. Tab 1 collects influencer profile data (name, contact, social links, follower count, category). Tab 2 collects brand/agency data (company, contact, website, e-commerce platform). Each tab displays all fields on a single page — no multi-step navigation. Form data persists when switching tabs; no unsaved-data warning is required. Submissions show a success state and reset the form.

## User Flows

1. **Influencer application**
   - User clicks "Başvuru" (or equivalent CTA) → modal opens with Tab 1 (Influencer'lar) active
   - All fields are visible on a single page: Ad Soyad, E-posta, Telefon, Instagram/YouTube/TikTok (grouped row), Takipçi Sayısı, İçerik Kategorisi
   - User fills fields and clicks Gönder → validation runs → on success: success message shown, form resets
   - User may switch to Tab 2 and back; entered data in Tab 1 persists

2. **Brand/Agency application**
   - User switches to Tab 2 (Markalar & Ajanslar) or opens modal with Tab 2 active
   - All fields are visible on a single page: Şirket Adı, Ad Soyad, E-posta, Telefon, Web Sitesi, E-ticaret Platformu, Mesajınız
   - User fills fields and clicks Gönder → validation runs → on success: success message shown, form resets
   - User may switch to Tab 1 and back; entered data in Tab 2 persists

3. **Tab switching with partial data**
   - User partially fills Tab 1 → switches to Tab 2 → switches back to Tab 1
   - All previously entered data in Tab 1 is still present
   - No unsaved-data warning is shown when switching tabs

4. **Close modal**
   - User clicks close (×), clicks overlay, or presses Escape → modal closes

## Design

Design files stored at: `referances/designs/SCRUM-52/`

- [application-modal.html](referances/designs/SCRUM-52/application-modal.html) — Başvuru modal with two tabs (Influencer'lar, Markalar & Ajanslar), single-page layout per tab

Open `.html` files in a browser to view the interface designs.

## Requirements

### Modal structure
- Modal with title "Başvuru", subtitle "İş birliği fırsatlarını kaçırmayın", close button, and two tabs: "Influencer'lar" and "Markalar & Ajanslar"
- Tab 1: Influencer application form (single page, all fields visible)
- Tab 2: Brand/Agency application form (single page, all fields visible)
- Modal is accessible (ARIA roles, focus management)

### Layout — Single page per tab
- **No multi-step navigation** — each tab shows all its fields at once on a single scrollable page
- **No step indicator, step dots, or step labels** — removed entirely
- **No İleri/Geri (Next/Back) buttons** — only a single Gönder (Submit) button in the sticky footer

### Layout — 2-column grid (desktop ≥ 640px)
- **Tab 1 (Influencer'lar):**
  - Row 1: Ad Soyad (half) + E-posta (half)
  - Row 2: Telefon (full width)
  - Row 3: Instagram + YouTube + TikTok (3 equal columns, with platform label prefix)
  - Row 4: Takipçi Sayısı (half) + İçerik Kategorisi (half)
- **Tab 2 (Markalar & Ajanslar):**
  - Row 1: Şirket Adı (half) + Ad Soyad (half)
  - Row 2: E-posta (half) + Telefon (half)
  - Row 3: Web Sitesi (half) + E-ticaret Platformu (half)
  - Row 4: Mesajınız (full width)

### Layout — Mobile (< 640px)
- All fields stack to a single column
- Social accounts section (Instagram, YouTube, TikTok) also stacks to single column

### Social accounts section (Tab 1)
- Instagram, YouTube, and TikTok fields displayed in a single row with 3 equal columns on desktop
- Each field has a platform icon or label prefix for quick visual identification
- Instagram is required; YouTube and TikTok are optional

### Tab switching
- User can switch between tabs at any time
- **Data persistence:** Form data in each tab persists when switching tabs. No data loss when moving between Influencer and Markalar & Ajanslar tabs
- **No unsaved-data warning:** Switching tabs does not trigger an unsaved-data or leave-page warning

### Tab 1 — Influencer form fields
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Ad Soyad | text | Yes | |
| E-posta | email | Yes | |
| Telefon | tel | Yes | Turkish mobile format |
| Instagram linki | url | Yes | Platform label prefix |
| YouTube linki | url | No | Platform label prefix |
| TikTok linki | url | No | Platform label prefix |
| Takipçi Sayısı | select | Yes | See dropdown values below |
| İçerik Kategorisi | select | Yes | See dropdown values below |

**Takipçi Sayısı options (Turkish market):** 1K altı, 1K-10K, 10K-50K, 50K-100K, 100K-500K, 500K-1M, 1M+

**İçerik Kategorisi options (Turkish market):** Moda & Giyim, Kozmetik & Güzellik, Teknoloji, Yemek & İçecek, Seyahat, Fitness & Sağlık, Anne & Bebek, Ev & Dekorasyon, Gaming, Eğitim, Diğer

### Tab 2 — Brand/Agency form fields
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Şirket Adı | text | Yes | |
| Ad Soyad | text | Yes | |
| E-posta | email | Yes | |
| Telefon | tel | Yes | Turkish mobile format |
| Web Sitesi | url | No | |
| E-ticaret Platformu | select | **Yes (REQUIRED)** | See dropdown values below |
| Mesajınız | textarea | No | |

**E-ticaret Platformu options (Turkish market):** ikas, Shopify, Ticimax, WooCommerce, Trendyol, Hepsiburada, N11, Çiçeksepeti, Diğer

### Validation rules
- **Turkish phone:** Format 05XX XXX XX XX; exactly 10 digits; must start with 05
- **Email:** Valid email format (RFC 5322–compliant)
- **URL:** Valid URL format for Web Sitesi and all social links (Instagram, YouTube, TikTok); must include protocol (http:// or https://) where applicable

### Success state
- On successful submission: display a success message to the user
- After success: reset the submitted form (clear all fields in that tab)

### Sticky footer
- Submit button ("Gönder") always visible in a sticky footer area
- No İleri/Geri navigation buttons
- Privacy/trust note near submit: "Başvurunuz 24 saat içinde değerlendirilecektir"

## Acceptance Criteria

### AC-1: Modal opens and displays both tabs
**Given** the user is on a page with the Başvuru CTA
**When** the user clicks the Başvuru CTA
**Then** a modal opens with title "Başvuru", two tabs ("Influencer'lar" and "Markalar & Ajanslar"), and Tab 1 (Influencer'lar) is active by default

### AC-2: Tab 1 — all fields visible on single page
**Given** the modal is open with Tab 1 active
**When** the user views the form
**Then** the following fields are all visible on a single page without step navigation: Ad Soyad, E-posta, Telefon, Instagram linki (required), YouTube linki (optional), TikTok linki (optional), Takipçi Sayısı (dropdown), İçerik Kategorisi (dropdown), and a Gönder button in the sticky footer

### AC-3: Tab 2 — all fields visible on single page
**Given** the modal is open with Tab 2 active
**When** the user views the form
**Then** the following fields are all visible on a single page without step navigation: Şirket Adı, Ad Soyad, E-posta, Telefon, Web Sitesi, E-ticaret Platformu (required dropdown), Mesajınız (optional), and a Gönder button in the sticky footer

### AC-4: Tab switching persists data
**Given** the user has partially or fully filled fields in Tab 1
**When** the user switches to Tab 2 and then back to Tab 1
**Then** all previously entered data in Tab 1 is still present

### AC-5: Tab switching — no unsaved-data warning
**Given** the user has entered data in one or both tabs
**When** the user switches between tabs
**Then** no unsaved-data or leave-page warning is shown

### AC-6: Tab 2 data persists when switching tabs
**Given** the user has partially or fully filled fields in Tab 2
**When** the user switches to Tab 1 and then back to Tab 2
**Then** all previously entered data in Tab 2 is still present

### AC-7: Takipçi Sayısı dropdown values
**Given** the user is on Tab 1
**When** the user opens the Takipçi Sayısı dropdown
**Then** the options are: 1K altı, 1K-10K, 10K-50K, 50K-100K, 100K-500K, 500K-1M, 1M+

### AC-8: İçerik Kategorisi dropdown values
**Given** the user is on Tab 1
**When** the user opens the İçerik Kategorisi dropdown
**Then** the options are: Moda & Giyim, Kozmetik & Güzellik, Teknoloji, Yemek & İçecek, Seyahat, Fitness & Sağlık, Anne & Bebek, Ev & Dekorasyon, Gaming, Eğitim, Diğer

### AC-9: E-ticaret Platformu dropdown values and required
**Given** the user is on Tab 2
**When** the user views the E-ticaret Platformu field
**Then** it is required (must be selected before submit) and the options are: ikas, Shopify, Ticimax, WooCommerce, Trendyol, Hepsiburada, N11, Çiçeksepeti, Diğer

### AC-10: Turkish phone validation
**Given** the user enters a value in the Telefon field
**When** the form is submitted or validation runs
**Then** the value is valid only if it matches Turkish mobile format: 05XX XXX XX XX, exactly 10 digits, starting with 05

### AC-11: Email and URL validation
**Given** the user enters values in E-posta or URL fields (Web Sitesi, Instagram, YouTube, TikTok)
**When** the form is submitted or validation runs
**Then** email must match valid email format and URLs must match valid URL format

### AC-12: Success message on submit
**Given** the user has filled all required fields correctly and submits the form
**When** the submission succeeds
**Then** a success message is shown to the user

### AC-13: Form reset after success
**Given** the user has successfully submitted a form (Tab 1 or Tab 2)
**When** the success state is displayed
**Then** the submitted form is reset (all fields in that tab are cleared)

### AC-14: Modal close
**Given** the modal is open
**When** the user clicks the close button (×), the overlay, or presses Escape
**Then** the modal closes

### AC-15: Validation errors shown for invalid data
**Given** the user has entered invalid data (e.g., wrong phone format, invalid email, invalid URL)
**When** the user submits the form
**Then** validation errors are shown and the form is not submitted

### AC-16: Social accounts displayed in 3-column row (desktop)
**Given** the user views Tab 1 on a desktop viewport (≥ 640px)
**When** they see the Instagram, YouTube, and TikTok fields
**Then** the three fields are displayed in a single row with 3 equal columns, each with a platform label prefix

### AC-17: All fields visible without excessive scrolling (desktop)
**Given** the user views Tab 1 or Tab 2 on a desktop viewport
**When** all fields are visible
**Then** the form is compact enough that no scrolling is needed to reach the submit button on a standard desktop screen

### AC-18: Mobile single-column layout
**Given** the user views the modal on a viewport < 640px
**When** they see the form fields
**Then** all fields (including social accounts) stack to a single column

## Scope

- **In scope:** Başvuru modal with two tabs, single-page layout per tab (no multi-step), 2-column grid on desktop, 3-column social links row, form fields per design, tab switching with data persistence (no unsaved-data warning), dropdown values aligned with Turkish market, validation rules (Turkish phone, email, URL), success message and form reset on successful submit, modal close behavior (×, overlay, Escape), sticky footer with Gönder button
- **Out of scope:** Backend API, email notifications, analytics, A/B testing, multi-language support beyond Turkish, multi-step/wizard navigation
