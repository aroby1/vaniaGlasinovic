# Vannia Glasinovic — Attorney Website

Bilingual (Spanish-first, with English) marketing site for Vannia Glasinovic, an immigration attorney in Eugene, Oregon. Live at https://www.glasinoviclaw.com.

**Pages:** Home, About, Services, Make a Payment, Resources, Privacy Policy.

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4 (`app/globals.css`, no separate config file)
- **Icons:** lucide-react
- **Fonts:** Lora and Geist via `next/font/google`
- **Deployment:** Vercel

No environment variables, database, or forms. The site is fully static.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where things live

- `app/` — one folder per page. Every page owns its own ES/EN toggle state.
- `components/` — shared header, footer, logo, language toggle, and button.
- `lib/site.ts` — phone, email, payment link, nav links, and all practice-area text (Spanish and English).
- `app/about/page.tsx` — Vannia's bio text (Spanish and English) at the top of the file.

## Outside services

- **Payments:** "Make a Payment" links to the Docketwise client portal (`PAYMENT_URL` in `lib/site.ts`). It works once Vannia has Docketwise + LawPay set up.
- **Photos:** practice-area photos are from Unsplash (free license), linked in `lib/site.ts`.

## Deploying

Push to `main` on GitHub and Vercel builds and publishes automatically, usually within a minute.
