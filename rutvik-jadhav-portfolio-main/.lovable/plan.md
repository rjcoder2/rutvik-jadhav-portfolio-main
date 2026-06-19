# Rutvik Jadhav — Data Analyst Portfolio

A single-page portfolio with sticky nav, anchor-linked sections, and the bold black-and-white typographic aesthetic from the PRD (Matthew Portfolio inspired). All content from the PRD + resume.

## Design System

- **Palette:** bg `#F0F0EF`, surface `#FFFFFF`, text `#0A0A0A`, secondary `#555`, muted `#888`, divider `#E0E0E0`. Black "About"/"Contact" sections for rhythm.
- **Type:** Inter (display Black + Bold + Regular) for headlines/body; JetBrains Mono for tags, labels, and small caps metadata. Loaded via Google Fonts `<link>` in `__root.tsx`.
- **Layout:** max-width 1280px, 12-col grid, generous whitespace, oversized section labels layered behind content, dotted/horizontal-rule dividers.
- **Tokens:** define all colors and fonts in `src/styles.css` via `@theme inline` (oklch) — no hardcoded colors in components.

## Sections (single route: `/`)

1. **Sticky Nav** — `RJ` black-square monogram + "RUTVIK JADHAV" caps, links (About / Skills / Projects / Experience / Contact), "HIRE ME" black pill CTA. Mobile: hamburger → full-screen overlay. Shadow appears on scroll.
2. **Hero** — `#F0F0EF` bg, label "Data Analyst & MCA Student", oversized "RUTVIK JADHAV" display type (clamp ~64→160px), tagline "Turning raw data into clear insights", decorative thin SVG circle/curve, "Scroll down ↓" indicator bottom-right.
3. **About** — Black bg, giant "ABOUT" backdrop word, two-column: large quote-style left / bio paragraph right (PRD copy).
4. **Skills** — Light bg, "TECHNICAL SKILLS" label, 4 category groups (Data Analysis / Programming / Web / Tools) as pill tags. "Learning" tags use outline style; solid tags = proficient.
5. **Projects** — "SELECTED WORKS" dotted-rule list header (like inspiration), then two alternating full-width cards: Netflix Power BI Dashboard, Blood Bank Management System — each with tools, bullet outcomes, and CTA.
6. **Experience** — Vertical timeline: Digital Marketing Intern (3 months) and MCA/BCA at Shivaji University 2021–2025.
7. **Certifications** — 3-col grid (1-col mobile): IBM RDBMS (SQL), jQuery Intro, Digital Marketing Internship.
8. **Contact** — "LET'S WORK TOGETHER" label, huge "Get in Touch", contact form (name/email/message — client-side validation, mailto fallback since no backend in v1), email + LinkedIn icon links, location.
9. **Footer** — "© 2026 Rutvik Jadhav. Built with passion for data."

## Interactions

- Smooth anchor scrolling.
- IntersectionObserver-based fade/slide-up on section entry.
- Hover states on pills, project cards, and CTA.

## SEO / Head

In the route's `head()`:
- Title: "Rutvik Jadhav — Data Analyst Portfolio"
- Description per PRD
- og:title / og:description / og:type=website / og:url (relative)
- JSON-LD Person schema (name, jobTitle, email, url, sameAs LinkedIn, address Maharashtra IN)
- Canonical (relative `/`)

## Technical Notes

- TanStack Start, single route `src/routes/index.tsx` replacing placeholder.
- New components under `src/components/portfolio/`: `Nav`, `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Certifications`, `Contact`, `Footer`, plus `useScrollReveal` hook.
- Tokens added to `src/styles.css`; Google Fonts link added in `__root.tsx` head.
- No images required for v1 (typography-led). No backend; contact form opens prefilled mailto draft.
- Resume PDF download button in nav — I'll wire it but the actual PDF can be added later via uploads.

## Out of Scope (v1, per PRD)

Backend, CMS, blog, dark mode toggle, GA4, live Power BI embed, custom domain config.
