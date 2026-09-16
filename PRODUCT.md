# Product

## Register

brand

## Platform

web

## Users

Primarily Spanish-speaking immigrants (with English-speaking visitors as a secondary group) in Oregon and California facing immigration matters: citizenship, asylum, deportation, and status cases. Often under real stress and navigating an unfamiliar legal system, frequently on an older phone rather than a desktop. They're looking for someone who understands their situation personally, not just professionally.

## Product Purpose

Give prospective clients enough clarity and trust, in their own language, to book a consultation with Vannia. Success is a booked consultation call, with reading her story (bio/credentials) as the fallback step for visitors not ready to commit yet.

No testimonials/reviews page: her public reviews are mostly negative (one strong positive account from a long-term client, otherwise poor), so the site does not surface a reviews or testimonials surface. Do not add one without the client's explicit go-ahead.

## Positioning

A bilingual immigration attorney who has lived the immigrant journey herself, an advocate who understands the system from both sides, not a bureaucratic office processing cases.

## Conversion & proof

- Primary CTA: Book a consultation
- Secondary CTA: Meet Vannia / read her story (bio section) — not testimonials
- The line a visitor remembers after 10 seconds: she's been where you are, and she knows how to get you through this.
- Belief ladder: she understands my situation personally (her own immigrant story) → she's genuinely credentialed (licensed since 2006) → her path from activism to law is documented, not just claimed (Upward Migration) → booking a consultation is simple → book.
- Proof on hand: licensed to practice in California since 2006; personal and professional journey documented in the short film "Upward Migration" (UO Latino Roots project). No testimonials surface — reviews are not strong enough to feature. Her UO "Global Environmental Democracy" fellowship was deliberately dropped from every credential list (explicit correction — irrelevant to immigration clients); don't re-add it.

## Brand Personality

Warm, empowering, personal. She speaks to the person, not the case file. Confidence comes from her own lived experience and credentials, not from a stiff, corporate voice.

## Anti-references

Should not read as a government or bureaucratic site: no cold official tone, no USCIS-style forms-first layout, no sterile institutional feel. Also avoid generic corporate law firm tropes (navy-and-gold, gavel/column stock photography, wall-of-text bios).

## Design Principles

- Speak to the person, not the case file: language stays human and direct, never legalese-first.
- Spanish-first, not Spanish-translated: Spanish is the primary voice of the site, English is the toggle, not the other way around.
- Credentials support the story, they don't lead it: her journey comes first, the bar license and fellowship back it up.
- Every path leads gently to booking: her story, resources, and services all point back to the consultation CTA without pressuring a stressed visitor.
- Fast and legible on any phone: large tap targets, minimal friction, works on an older device on a slow connection.

## Accessibility & Inclusion

Mobile-first with large tap targets as the primary constraint (most visitors on phones, some on older/lower-end devices). Plain-language content throughout given the high-stress, high-stakes context for visitors.

## Open items (real content pending)

The site was built from Vannia's own Figma export and is otherwise final, but three pieces still use placeholders on purpose:
- Attorney photo — still an icon placeholder in the hero, About, and Services pages; swap in her real headshot when supplied.
- "Book with Me" — no real scheduler yet. `CALENDLY_URL` in `lib/site.ts` is empty, so the section shows a call/email fallback. Paste her real Calendly (or other scheduler) link into that constant to switch on the live embed.
- "Make a Payment" — links to `https://client.docketwise.com`, Docketwise's one universal client-portal login (there's no firm-specific portal address, so this link is already correct and permanent). What's actually pending is Vannia setting up a Docketwise account and connecting LawPay (the payment processor Docketwise integrates with) — until then the login page works but has no invoices behind it for clients to pay.
