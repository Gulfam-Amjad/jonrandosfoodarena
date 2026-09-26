# Jonrandos Food Arena - Concept Website

A modern, animated one-page website built as a pitch for **Jonrandos Food Arena**, Seshego Plaza, Zone 7, Polokwane.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploy (free, ~1 minute)

- **Vercel:** `npx vercel` in this folder, accept the defaults.
- **Netlify:** drag the `dist/` folder onto https://app.netlify.com/drop after `npm run build`.

Send the owner the live link.

## What's real vs. placeholder

Real (from their Google Maps listing): name, address, plus code, coordinates, phone/WhatsApp (+27 76 487 3437),
opening hours (daily 09:00-23:00), 5.0 Google rating, the Albert TD Monaga review, delivery / takeaway /
card / wheelchair-accessible features.

Placeholder - swap once the client signs:

| What | Where |
| --- | --- |
| Menu items and prices | `src/data/menu.ts` |
| Food photos (currently Unsplash) | `src/data/business.ts` (`photos`, `gallery`) and `src/data/menu.ts` |
| Logo (flame icon) | `src/components/Logo.tsx`, `public/favicon.svg` |
| "Concept website" pill | set `SHOW_DEMO_BANNER = false` in `src/App.tsx` |

## Pitch talking points

- They have **no website** - Google literally shows "Add a website" on their listing.
- **WhatsApp ordering built in:** customers build an order and it lands in their WhatsApp with totals - no Uber Eats / Mr D commission.
- **Live "Open now / Closed" badge** using South African time.
- **Google-ready SEO:** Restaurant schema (JSON-LD), meta and Open Graph tags so links look great when shared.
- Mobile-first, fast, smooth animations, respects reduced-motion settings.

## Stack

Vite, React, TypeScript, Tailwind CSS v4, Framer Motion, Lenis smooth scroll, lucide-react icons.
