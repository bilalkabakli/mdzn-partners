# Design Brief — SCRUM-52 Başvuru Modal (Revision)

**From:** head-of-design  
**To:** designer  
**Date:** 2025-02-15  
**Context:** PM rejected the design for quality and consistency issues. This brief specifies the exact fixes required.

---

## PM Feedback Summary

> "Is my design and product team okay with the forms? Some of them have some padding between lines, some of them do not? Also some texts like (Opsiyonel) do not fit into the text input? I cannot believe if this is the consistency and quality delivered? How did you manage to approve these tasks of the designer and PM? Have you not given any feedback? Or did you not check the quality?"

The PM has identified **inconsistent spacing** and **text overflow** as critical quality issues. These must be fixed before the design can proceed to Product Review.

---

## Problem 1: Inconsistent Vertical Spacing

### Current behavior
- `.form-group` has `margin-bottom: 16px` (standalone fields)
- `.form-row .form-group` and `.form-row-3 .form-group` have `margin-bottom: 0`
- `.form-row` and `.form-row-3` have **no** `margin-bottom`
- **Result:** After a `.form-row` or `.form-row-3`, there is no spacing before the next element. Standalone `.form-group` items have 16px below them. This creates uneven rhythm.
- **Evidence:** Row 4 of the Influencer tab (Takipçi Sayısı + İçerik Kategorisi) uses an inline `style="margin-top: 16px;"` hack because the spacing system is broken.

### Required fix
1. Add `margin-bottom: 16px` to `.form-row` and `.form-row-3`.
2. Remove the inline `style="margin-top: 16px;"` from the form-row at line 634 (Row 4 of Influencer tab).
3. Ensure the last row/group in each tab does not create excessive bottom padding (use `:last-child` or equivalent if needed, but prefer a consistent system where the last element’s margin is acceptable).

**Target:** All form rows and groups should have consistent 16px vertical spacing between them.

---

## Problem 2: "(Opsiyonel)" Text Overflow in Narrow Fields

### Current behavior
- The 3-column social row (Instagram, YouTube, TikTok) gives each field ~1/3 of the modal width (~170px per column at 560px modal width).
- Labels like "YouTube(Opsiyonel)" and "TikTok(Opsiyonel)" are too long for these narrow inputs.
- When the label floats up (font-size: 11px), it can still overflow or wrap awkwardly.

### Required fix
**Remove "(Opsiyonel)" from the narrow social fields (YouTube and TikTok).**

- The section label "Sosyal Hesaplar" already groups these as social links.
- Instagram has the required star (*); YouTube and TikTok have no star, so users understand they are optional.
- For wider fields (e.g. Web Sitesi, Mesajınız in the Brand tab), "(Opsiyonel)" may remain if it fits without overflow.

**Do not** use abbreviations like "Ops." — either remove the text or keep it only where space allows.

---

## Problem 3: Spacing Consistency Audit (8px Grid)

### Current inconsistencies
1. **Section label "Sosyal Hesaplar":** `margin-top: 4px` + `margin-bottom: 12px` — not aligned to an 8px grid.
2. **Gap values:** `.form-row` uses `gap: 16px`; `.form-row-3` uses `gap: 12px` — inconsistent.
3. **Brand tab:** No equivalent section labels — visual imbalance between Influencer and Brand tabs.

### Required fix
1. **8px grid:** Use multiples of 8px for all margins, paddings, and gaps (8, 16, 24, 32).
2. **Section labels:** Standardize `.section-label` spacing (e.g. `margin-top: 16px`, `margin-bottom: 12px` or `16px` — pick one and apply consistently).
3. **Row gaps:** Make `.form-row` and `.form-row-3` use the same gap value (16px recommended).
4. **Tab consistency:** If the Influencer tab uses a section label for "Sosyal Hesaplar", consider whether the Brand tab needs equivalent section labels for logical grouping (e.g. "İletişim Bilgileri", "Şirket Bilgileri"). If not, ensure both tabs feel visually balanced (consistent spacing, no orphaned elements).

---

## Problem 4: Visual Consistency Between Tabs

### Current behavior
- Influencer tab has a section label "Sosyal Hesaplar" before the social row.
- Brand tab has no section labels — all fields flow without grouping labels.

### Required fix
- Audit both tabs for visual balance.
- Either:
  - Add section labels to the Brand tab where logical (e.g. "İletişim Bilgileri", "Şirket Bilgileri"), **or**
  - Remove the section label from the Influencer tab if it creates imbalance.
- Choose one approach and apply consistently. The PM expects both tabs to feel like the same quality system.

---

## Problem 5: Responsive Verification

### Required fix
- Test the form at multiple viewport widths: 560px (modal max), 400px, 320px.
- Verify that:
  - No label text overflows or wraps awkwardly.
  - Spacing remains consistent in mobile (single-column) layout.
  - The responsive breakpoint at 639px correctly stacks `.form-row` and `.form-row-3` to single column with proper spacing (`margin-bottom: 16px` on stacked groups is already in place — verify it works).

---

## Checklist for Designer

- [ ] Add `margin-bottom: 16px` to `.form-row` and `.form-row-3`
- [ ] Remove inline `style="margin-top: 16px;"` from Row 4 of Influencer tab
- [ ] Remove "(Opsiyonel)" from YouTube and TikTok labels in the 3-column social row (Instagram stays required with star only; no optional text in social row)
- [ ] Align all spacing to 8px grid (margins, paddings, gaps)
- [ ] Unify `.form-row` and `.form-row-3` gap to 16px
- [ ] Standardize `.section-label` spacing
- [ ] Ensure both tabs are visually consistent (section labels or lack thereof)
- [ ] Test at 560px, 400px, 320px — no overflow

---

## File to Update

`referances/designs/SCRUM-52/application-modal.html`

---

## Definition of Done

1. All items in the checklist are completed.
2. The HTML file opens in a browser and displays correctly at 560px, 400px, and 320px.
3. No inline style hacks remain.
4. Spacing is consistent and follows an 8px grid.
5. No text overflow in any field label.

---

**head-of-design**  
*Revision requested — address PM feedback before resubmission to Product Review.*
