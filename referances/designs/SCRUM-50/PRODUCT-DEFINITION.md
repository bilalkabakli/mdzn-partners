# [Product Definition] SCRUM-50 — Remove Influencer Başvurusu & Center Nav

## Summary

Remove the standalone "Influencer Başvurusu" link from the header (desktop and mobile) and center the remaining nav items. Influencer access remains via the Çözümler dropdown ("Influencer'lar İçin").

## User Flows

### Desktop
- User sees header with logo (left), centered nav (Ana Sayfa, Çözümler, İş Ortaklarımız), and CTA (right)
- "Influencer Başvurusu" is not visible as a standalone link
- User accesses influencer page via Çözümler → Influencer'lar İçin

### Mobile
- User opens mobile menu
- "Influencer Başvurusu" is not visible in the menu
- User accesses influencer page via "Influencer'lar İçin" link (which maps to the Çözümler dropdown content)

## Design

No new .html design file needed. Layout change:

- **Three-column flex:** Logo (left), nav (center with `flex-1 justify-center`), CTA (right)
- Desktop nav items: Ana Sayfa, Çözümler (dropdown), İş Ortaklarımız — centered in the header
- Mobile menu: Ana Sayfa, Markalar İçin, Influencer'lar İçin, Ajanslar İçin, İş Ortaklarımız — no "Influencer Başvurusu"

## Requirements

1. **Remove** "Influencer Başvurusu" from desktop nav
2. **Remove** "Influencer Başvurusu" from mobile menu
3. **Keep** "Influencer'lar İçin" in Çözümler dropdown (unchanged)
4. **Center** remaining nav items (Ana Sayfa, Çözümler, İş Ortaklarımız) in the header
5. **Preserve** all other header behavior (sticky, dropdown, mobile toggle, CTA, logo, styling)

## Acceptance Criteria

### AC-1: Influencer Başvurusu removed from desktop nav
**Given** the user is on any page with the header  
**When** the user views the desktop header (lg breakpoint and above)  
**Then** "Influencer Başvurusu" is not visible as a standalone nav link

### AC-2: Influencer Başvurusu removed from mobile menu
**Given** the user is on any page with the header  
**When** the user opens the mobile menu  
**Then** "Influencer Başvurusu" is not visible in the mobile menu links

### AC-3: Influencer'lar İçin remains in Çözümler dropdown
**Given** the user is on desktop  
**When** the user opens the Çözümler dropdown  
**Then** "Influencer'lar İçin" is visible and links to /influencerlar-icin

### AC-4: Remaining nav items centered on desktop
**Given** the user is on desktop  
**When** the user views the header  
**Then** Ana Sayfa, Çözümler, and İş Ortaklarımız are centered between the logo and CTA

### AC-5: Mobile menu structure preserved
**Given** the user opens the mobile menu  
**When** the menu is displayed  
**Then** Ana Sayfa, Markalar İçin, Influencer'lar İçin, Ajanslar İçin, İş Ortaklarımız, and Demo Talep Et CTA are visible; "Influencer Başvurusu" is not present

### AC-6: Cross-page consistency
**Given** the user navigates to any page (home, markalar-icin, influencerlar-icin, ajanslar-icin, is-ortaklari)  
**When** the header is rendered  
**Then** the same nav structure applies (no Influencer Başvurusu, centered items on desktop)

## Scope

- **In scope:** Header.tsx only — removal of Influencer Başvurusu link, centering of nav items
- **Out of scope:** Footer, other pages, CTA behavior, Çözümler dropdown content (except keeping Influencer'lar İçin), any non-header changes
