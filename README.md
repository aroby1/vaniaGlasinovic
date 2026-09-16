# Vannia Glasinovic — Attorney Website

Bilingual (English/Spanish) marketing site for Vannia Glasinovic, an immigration & environmental attorney in Eugene, Oregon. Built with Next.js App Router, React 19, and Tailwind CSS v4.

**Live routes:** Home, About, Services (with 6 individual practice-area pages), Book with Me, Make a Payment, Resources, Consultation Intake, Privacy Policy.

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4 (`app/globals.css`, no separate config file)
- **Icons:** lucide-react
- **Email:** Resend (contact form + consultation intake form)
- **Fonts:** Lora self-hosted via `next/font/google`
- **Deployment:** Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create `.env.local` for local development (never committed — see `.gitignore`):

```bash
RESEND_API_KEY=re_xxxxxxxx
```

Without this, the contact form (`components/contact-form.tsx`) and the intake form (`app/intake/page.tsx`) return a real error instead of sending mail — see `app/api/contact/route.ts` and `app/api/intake/route.ts`. The Resend account sending mail must be signed up with the address in `EMAIL` (`lib/site.ts`) for delivery to work, since the `from` address is Resend's shared testing sender (`onboarding@resend.dev`).

## Project structure

- `app/` — routes (App Router). Every page is a client component that owns its own language-toggle state; there's no shared locale context by design.
- `components/` — shared header, footer, logo mark, language toggle, and the contact form.
- `lib/site.ts` — shared constants and all six practice-area content objects (bilingual copy, requirements, process steps, FAQs).
- `lib/use-sync-html-lang.ts` — keeps `<html lang>` in sync with the visitor's language toggle.
- `archive/` — a superseded pre-Figma draft, kept for history only, not wired into routing.

For the full standing-decisions log (design system rules, bilingual pattern, what's a deliberate placeholder vs. a bug, and what's still open), see **`CLAUDE.md`**. For the product brief (audience, positioning, brand voice), see **`PRODUCT.md`**.

## Deploying

This project deploys to Vercel. Push to `main` (or open a PR) and Vercel builds automatically once the project is connected. Set `RESEND_API_KEY` in the Vercel project's Environment Variables — the app will build without it, but the forms won't send mail until it's set.
