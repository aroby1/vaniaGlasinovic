@AGENTS.md

# Vannia Glasinovic — Attorney Website

Bilingual (Spanish-first) marketing site for Vannia Glasinovic, an immigration & environmental attorney in Eugene, Oregon. Next.js App Router, Tailwind v4, deployed on Vercel. Read `PRODUCT.md` for the full product brief (audience, positioning, CTAs, brand voice) — this file covers technical structure and standing decisions so a fresh agent session can pick up work without re-deriving context.

## Stack

- Next.js 16 (App Router, Server Components by default), React 19, TypeScript, Tailwind CSS v4 (`@import "tailwindcss"` in `app/globals.css`, no separate config file — arbitrary values used directly in JSX).
- `next/font/google` self-hosts Lora as `--font-lora` (set in `app/layout.tsx`), used for headings/serif accents via inline `style={{ fontFamily: "var(--font-lora), Georgia, serif" }}`.
- `lucide-react` for icons.
- Dev server runs on `localhost:3000` (`npm run dev`).

## Route map (all real, all live — no mockups)

- `app/page.tsx` — Home
- `app/about/page.tsx` — About
- `app/services/page.tsx` — Services (interactive click-to-switch panel)
- `app/book/page.tsx` — Book with Me
- `app/payment/page.tsx` — Make a Payment
- `app/resources/page.tsx` — Resources

Every page is a `"use client"` component that owns its own `useState<Lang>("en")` and renders `<SiteHeader>` / `<SiteFooter>` from `components/`, passing `lang`/`setLang` down. There is no shared language context — each page independently defaults to English (see Bilingual pattern below for why). Nav links use `next/link` to real routes, not `#anchor` scrolling (this was an explicit, deliberate correction earlier — do not collapse pages back into homepage sections).

Shared content/constants live in `lib/site.ts`: `PHONE_DISPLAY`, `PHONE_TEL`, `EMAIL`, `CALENDLY_URL`, `PAYMENT_URL`, `navLinks`, `SVC_PHOTOS`, `services` (the 6 practice areas with photo + bilingual copy + checklist). `Lang` type is also exported from there. `lib/site.ts` is plain data with no React hooks in it on purpose — it's imported by server components (the per-route `layout.tsx` files below) and by the `app/api/*` routes, and a hook in that file breaks the server build. The one hook the site needs (`useSyncHtmlLang`, see Metadata below) lives in its own client-only file, `lib/use-sync-html-lang.ts`.

## Metadata & `<html lang>`

Every route has its own `layout.tsx` (a plain server component, sibling to `page.tsx`) exporting `metadata: { title, description }` — `app/about/layout.tsx`, `app/services/layout.tsx`, `app/services/[slug]/layout.tsx` (uses `generateMetadata` keyed on the slug, so each practice area gets its own tab title), `app/book/layout.tsx`, `app/payment/layout.tsx`, `app/resources/layout.tsx`, `app/intake/layout.tsx`, `app/privacy/layout.tsx`. The root `app/layout.tsx` sets a `title.template` (`"%s — Vannia Glasinovic"`) plus a `default` for `/`, so a child layout only needs to pass its own page name (e.g. `"About"`) and the template does the rest. **Before this fix every route on the site shared one hardcoded Spanish title/description from the root layout** — this file already documented a "Page — Vannia Glasinovic per-page title" convention that didn't actually exist in code; it does now. Add a `layout.tsx` for any new top-level route the same way instead of letting it fall back to the root title.

`<html lang>` is `"en"` in the root layout (matching the bilingual default below) and each page calls `useSyncHtmlLang(lang)` from `lib/use-sync-html-lang.ts` so the attribute follows the visitor's toggle. This didn't exist before either — the root layout hardcoded `lang="es"` while every page defaulted to English, a real WCAG 3.1.1 mismatch.

Shared chrome lives in `components/site-header.tsx` (utility bar + sticky nav + mobile menu) and `components/site-footer.tsx` (dark footer, same on every page). Both render `components/logo-mark.tsx` — a custom inline-SVG mark (a path breaking out past a ring, terracotta) — instead of a "GL"-in-a-square monogram; that square was flagged as a generic-placeholder-logo tell and replaced site-wide. The wordmark next to it is Lora serif, not tracked-out uppercase sans, so the logo has its own typographic identity distinct from nav/button text.

## Design system

- **Home, About, Services, Book, Payment, Resources are all light/white themed.** Terracotta (`#B84832`, hover/light variant `#D4673B`) is an **accent only** — buttons, links, numbers, borders, active states — never a full-page background. This was an explicit correction: the site originally had Home as a dark ink (`#1C0A06`) single-pager; it was rebuilt white-first with burgundy/terracotta demoted to secondary.
- **No cream/beige surface color anywhere.** The site briefly used `#F9F3EC` as an alternating section background; it was removed site-wide (explicit correction — the warm-cream + serif + terracotta combination reads as a generic AI-generated design cliché). Every light section is now plain white (`#ffffff`), with `border-t border-[#1C0A06]/8` hairlines between sections doing the separation work instead of alternating fill colors. Do not reintroduce cream, beige, or any warm off-white as a section background.
- Ink/text: `#1C0A06` at full opacity for headings, `/50`–`/65` opacity for body copy.
- **Photo sections stay dark** — the hero (Eugene mountain sunset) and the "family/journey" section use a real photo with a dark gradient scrim for text contrast. That's an image treatment, not a "background color" choice, so it's exempt from the light-theme rule above.
- **Footer stays dark ink (`#080201`) on every page** — this is deliberate, matches the one already-approved treatment (About page kept a dark footer under a white body), don't lighten it.
- No green, anywhere — terracotta/burgundy is the one and only brand accent color. Green was explicitly rejected earlier.
- **The utility bar (`components/site-header.tsx`) collapses hard below `sm`**: phone number and email drop to icon-only/hidden, and the "Docketwise Portal" link (for existing clients) demotes from a solid terracotta button to a plain text link. It used to render at full size on mobile, which wrapped the phone number mid-digit and put a bold portal CTA visually ahead of the page's actual primary CTA (Free Consultation) on the exact audience (mobile, often stressed, sometimes older devices) `PRODUCT.md` centers the whole site around. Keep the portal link reachable, just not louder than Free Consultation, on any future header change.
- **The homepage hero's fade-in must never leave the H1/CTAs invisible for more than ~1s.** The `fadeUp` keyframes in `app/page.tsx` use `animation: ... both`, which holds `opacity:0` for the delay before it fires — the original delays (up to 1.25s + 0.9s duration) meant the hero photo rendered with no visible headline or buttons for over 2 seconds on load, which reads as a broken page on a slow connection. Delays are now ≤0.4s and the whole block is wrapped in `@media (prefers-reduced-motion: reduce)` to disable outright. Don't stack additional staggered delays onto hero copy without re-checking this.
- Zero em-dashes in visible copy (site-wide convention already applied) — the one exception is the `<title>` tag pattern `"Page — Vannia Glasinovic"`, kept for consistency across all six `<title>` tags.
- No testimonials/reviews anywhere on the site — her public reviews are weak (see `PRODUCT.md`). The bio/story section is the deliberate fallback CTA instead.
- **Eyebrow/kicker labels are banned site-wide, including Home** — Home originally had 5 identical uppercase-tracked-out kicker lines (one above nearly every section: hero, services preview, book section, contact section, payment section), which was the single biggest "templated" tell on the site. All were removed for consistency with the rule Services/Book already followed. Don't reintroduce an eyebrow above a section headline anywhere without a specific reason.
- **Stock photography has no color filter at all** — every photo (Home hero, Home services preview, Services grid cards, service detail hero) originally used a generic `sepia(20%) saturate(85%) brightness(x)` "vintage Instagram filter" look; a terracotta duotone and then a plain grayscale treatment were both tried as replacements and both explicitly rejected by the client ("remove the orange hue" then "shouldn't be black and white either, just make them how they came"). Photos now render at their natural, unfiltered color. The existing dark gradient scrims (`bg-gradient-to-t from-[#1C0A06]/…`) already provide enough contrast for the white text overlaid on them — don't add an image filter back for "polish" without checking with the user first, this has been corrected twice.
- **Services/Book/Payment hero structures are now intentionally different from each other**, not the same rule+headline+italic-word block copy-pasted three times: Services has no rule and a direct declarative headline ("A Clear Path For Your Case" / "Un Camino Claro Para Tu Caso" — the previous "¿Dónde Empieza Tu Caso?" / "Where Does Your Case Begin?" rhetorical-question format was dropped, since question-format headlines read as an LLM copywriting tic. The code had drifted from this decision and briefly shipped the old question headline again after the fact — verify the live headline text against this file if the two ever disagree, the file isn't automatically true); Book keeps its two-column action panel but opens with a vertical rule beside the headline instead of a horizontal one above it; Payment (a utility/task page, not a marketing page) has no rule at all and a tighter, more functional layout.
- The About page avatar placeholder is a solid ink circle with a Lora "VG" monogram, not a generic Lucide `User` icon in a circle with "Portrait Coming Soon" text — same honest placeholder, styled as a deliberate choice instead of an obviously-empty default state.
- **The Services grid isn't 6 uniform cards.** The 6th practice area, Case Consultation, is the catch-all for visitors who don't know which category fits them, so it's broken out of the `sm:grid-cols-2 lg:grid-cols-3` photo-card grid into its own full-width terracotta-tinted callout below the other 5 (`app/services/page.tsx`). This is a content-driven exception to the "no 3-equal-card grids" rule, not a decorative one — don't fold it back into the grid as a 6th identical card.
- **Service detail hero photos need a wide crop, not a square one.** `app/services/[slug]/page.tsx`'s hero band is `h-[380px] md:h-[440px]` with no max-width, so on a normal desktop it renders at roughly 3–4:1. Fetching a photo at `w=900&h=700` (close to square, still true for 4 of the 6 `SVC_PHOTOS`) and then letting `object-cover` crop it a second time in the browser only shows the middle ~30% vertical sliver of the source photo, wherever that happens to land — this is what made the Asylum and Permanent Residence hero photos look broken (cropped-off heads, an unrelated-looking close-up) even though the underlying photos were fine. Fix applied to those two: request Unsplash's own smart crop at closer to the real display ratio (`&crop=faces,entropy` instead of the default center crop) — see the two swapped `SVC_PHOTOS` entries for the working pattern. Apply the same fix to the remaining 4 if they ever get flagged instead of guessing at a new photo.

## Bilingual pattern

`Lang = "en" | "es"`, default **`"en"`** on every page (client explicitly asked to flip this from the original Spanish-first default — see PRODUCT.md's positioning note, which is now superseded on this one point). Content objects carry both: `{ en: {...}, es: {...} }`, selected via `x[L]`. There is no URL-based locale routing (no `/en/...` prefix) — it's a client-side toggle only.

Language switching goes through `components/lang-toggle.tsx` (`<LangToggle lang setLang variant="light"|"dark" />`) — a segmented EN/ES pill with the active language highlighted, not a single link that names the *other* language. It appears three times so switching is always one tap away regardless of scroll position or viewport: the header's utility bar (dark variant), the header's sticky nav row itself (light variant — this is the one that stays visible after scrolling, since the utility bar above it is not sticky and scrolls out of view), and the footer (dark variant). Use this component for any new page instead of hand-rolling another single-link toggle.

## Real business details (do not invent others)

- Phone: `(541) 908-5079` / tel: `+15419085079`
- Email: `vannia.glasinovic@gmail.com`
- Location: Eugene, Oregon
- Documentary: "Upward Migration" (UO Latino Roots project) — real, verified link: `https://latinoroots.uoregon.edu/aiovg_videos/upward-migration/`
- Her UO "Global Environmental Democracy" fellowship was removed from every credential list site-wide (explicit correction — deemed irrelevant to the immigration-client audience). Do not re-add it as a credential badge; the documentary link above is unrelated and stays.

## Known placeholders (intentional, not bugs)

- Attorney photo — still a placeholder (About page: an ink circle with a "VG" Lora monogram, see Design system notes above). Swap for her real headshot when supplied.
- Services and Book no longer use a photo hero. Both were redesigned (via `/impeccable` and `/taste`) into a photo-free masthead: a large Lora headline and a short intro paragraph, on a plain white band with a top hairline, no eyebrow label (Impeccable's craft floor bans the kicker-above-heading pattern site-wide). Services and Book each have their own distinct opening treatment now (see Design system notes above) rather than sharing one identical rule+headline block. The Eugene skyline screenshot that was briefly the Book hero (`public/book-hero-eugene.jpg`) was removed since nothing references it now.
- `CALENDLY_URL` in `lib/site.ts` still exists but is **not wired to any page** — the Book page's right-side card was changed from a Calendly-embed/fallback pattern to always showing the real `ContactForm` (explicit decision: simpler than standing up a scheduler, and it already works with no external dependency). Revisit only if Vannia specifically wants live calendar booking later.
- `PAYMENT_URL` in `lib/site.ts` is `https://client.docketwise.com` — this is correct and final, not a placeholder. Docketwise's client portal login is one universal URL for every firm (no firm-specific address exists), so there's nothing to swap in later. What's still pending is Vannia actually setting up Docketwise + connecting a LawPay account (LawPay is the payment processor Docketwise integrates with; Docketwise doesn't process payments itself). Until she does, the portal login will work but she'll have no clients/invoices in it yet. Because of this, the Payment page (`app/payment/page.tsx`) carries a small line under the "Go to Client Portal" CTA for new/first-time clients pointing them to call or email instead of hitting a portal with nothing behind it yet — remove that line once Docketwise/LawPay is actually live and confirmed working for real clients.

## Reference/inspiration sites used during design

bwanglaw.com, vanderwallimmigration.com (`/legal-services/fiance-visas/` shaped the Services page structure), lawfirmav.com, anwarilaw.com, tmsilvalaw.com, and the growlaw.co immigration-lawyer-website roundup (source of the clean white/one-accent About page direction).

## Workflow notes for whoever picks this up

- **Never build exploratory/comparison design concepts as files inside the project.** Publish them as a Claude Artifact (a link) instead, and only turn a design into a real project file once it's explicitly approved. This project got corrected on this once already — don't reintroduce a `mockup/` or `*-concepts/` folder.
- The `/impeccable` and `/taste` (design-taste-frontend) skills were used throughout for content-quality review (em-dash bans, eyebrow/kicker rationing, no 3-equal-card grids, real content depth over thin one-liners) — worth re-running after any new page/section is added.
- `archive/` holds a superseded pre-Figma Next.js Home draft — historical only, not wired into routing.
- `.impeccable/config.json` holds scoped false-positive suppressions for the design linter; check there before re-litigating a flagged pattern.

## Contact form backend

`components/contact-form.tsx` (used on Home, Services, and Book) POSTs to `app/api/contact/route.ts`, which sends the submission as an email via Resend (`resend` package, already in `package.json`) to `EMAIL` (`vannia.glasinovic@gmail.com`), with `replyTo` set to whatever the visitor typed so Vannia can just hit reply. **Requires a `RESEND_API_KEY` env var** — without it the route returns a clean 500 and the form shows a real error state ("Something went wrong… call us at…") instead of a fake success message, which is deliberate (it used to just flip local state to "Message Sent" with no backend at all — nothing was ever sent anywhere; that was a real bug, not a placeholder, and got fixed here).

To make it live: sign up at resend.com, get an API key, add `RESEND_API_KEY=re_xxx` to `.env.local` for local dev and to the Vercel project's environment variables for production. The `from` address is `onboarding@resend.dev` (Resend's shared testing sender, works without domain verification) — this only delivers to the email address that owns the Resend account, so the Resend account must be signed up with `vannia.glasinovic@gmail.com` (or whichever address `EMAIL` points to) for it to work. If she wants to send from her own domain later, that requires verifying the domain in Resend and updating the `from` field.

## Consultation intake form

`app/intake/page.tsx` — a post-booking case-history questionnaire (~33 fields grouped into six sections: Contact Information, Personal Background, Immigration History, Family Information, Employment & Taxes, Your Case), linked from the footer's "Get Started" list and from a callout on the Book page under "What to Expect". POSTs to `app/api/intake/route.ts`, which emails the full submission to `EMAIL` via Resend (same `RESEND_API_KEY` dependency as the contact form — see Contact form backend below).

This exists because a reference site (LOMA, a different immigration firm) links to an actual Google Form for this same purpose from their nav. We wrote our own questions (not copied from theirs) covering the same categories of information — this collects genuinely sensitive data (SSN/ITIN status, arrest history, alien registration number, full address, marital and immigration history), which is worth keeping in mind before changing how it's transmitted or stored. Not currently in the main nav — only linked from Book and the footer. Whether to add a top-level nav item, and whether Vannia wants this step at all, is still open; it was built ahead of that decision at the user's request ("let's just add it").

**Explicitly deferred, not decided against:** publishing consultation pricing on the site. A reference competitor site (LOMA) publishes fixed rates ($300 general consult, $500 detainee consult, $400/hr follow-ups) — those are LOMA's numbers, not Vannia's, and must never be reused here. The whole site's existing CTA is "Free Consultation," which would directly conflict with a paid-consult model, so this needs her actual answer before anything changes, not a competitor scan.

## Service page content depth

LOMA's Deportation Defense page (`lomacrimmigrationlaw.com/services/immigration/deportation-defense/`) was audited for comparison after the client asked whether our service pages should match competitors' content depth. Verdict: match the *substance*, not the *format*. LOMA's page is ~950 words of unbroken legalese prose ("aliens," "material document," passive corporate tone) — exactly the tone `PRODUCT.md` says to avoid for this audience (plain language, mobile-first, high-stress visitors). Our intro-paragraphs + process-steps + requirements + FAQ structure already covers the same ground more scannably; the fix was to close real content gaps, not adopt their format.

Every one of the 6 `services` entries in `lib/site.ts` now carries **5 FAQs instead of 4** (English and Spanish), each closing a genuine gap a competitor audit or plain "what would a real client ask" review surfaced — not padding for padding's sake:
- Citizenship & Naturalization: dual-citizenship / renunciation question.
- Asylum & Refugee Claims: asylum vs. refugee status, since the service name conflates the two.
- Deportation Defense: what happens if the judge orders deportation (BIA appeal, 30-day window) — this was a real gap, the old FAQ only covered a missed court date, never an actual loss. The "Identifying Relief" process step also now names voluntary departure and waivers alongside cancellation of removal/asylum/adjustment of status.
- Permanent Residence: the 2-year conditional green card for marriages under 2 years (Form I-751).
- Temporary Status & Visas: what happens if status expires before a renewal is approved.
- Case Consultation: remote (phone/video) consultations for clients outside Eugene.

If a future content pass wants to go deeper on any service, keep this same shape (short intro, 4-step process, 4-item requirements list, FAQ accordion) and add FAQs/requirements rather than lengthening the intro paragraphs into prose blocks — the "no data-dump sections" and "short paragraph" rules elsewhere in this file still apply.

## Open / not yet done

- Nothing has been committed to git yet — everything above is uncommitted working-tree state (confirm with the user before committing/pushing; they deploy via Vercel).
- The real attorney headshot and Calendly link are still pending from the client. The Docketwise portal link is already correct and final (see note above) — what's pending there is her setting up Docketwise + LawPay, not a link we need from her.
- **`RESEND_API_KEY` is not set anywhere yet** — the contact form's email delivery is wired up in code but inert until this is added (see Contact form backend above). This blocks the form from actually working in production.
