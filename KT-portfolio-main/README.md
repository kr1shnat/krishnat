# Krishna Topale — Portfolio

A modern UI/UX portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- Next.js 14 App Router
- TypeScript throughout
- Tailwind CSS for utility styling
- Framer Motion animations
- `next/font` for optimised Google Fonts (Playfair Display, DM Sans, JetBrains Mono)
- Glassmorphism cards
- Typewriter hero animation
- Scroll-triggered section reveals
- Animated skill bars
- Expandable project accordion
- Validated contact form
- Fully responsive (mobile → desktop)
- Static generation (SSG) — perfect for Vercel / Netlify

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

## 📁 Folder Structure

```
src/
├── app/
│   ├── globals.css          # Global styles + CSS utilities
│   ├── layout.tsx           # Root layout with next/font setup + metadata
│   └── page.tsx             # Home page — assembles all sections
├── components/
│   └── sections/
│       ├── Navbar.tsx       # Sticky nav with mobile drawer
│       ├── Hero.tsx         # Animated hero with typewriter + orbit rings
│       ├── About.tsx        # About with glassmorphism cards
│       ├── Skills.tsx       # Animated skill bars + tool pills
│       ├── Projects.tsx     # Expandable project case studies
│       ├── Experience.tsx   # Timeline + education cards
│       ├── Contact.tsx      # Validated contact form
│       └── Footer.tsx       # Footer with nav links
└── lib/
    ├── data.ts              # All content data (skills, projects, experience…)
    └── useInView.ts         # Scroll-triggered animation hook
```

## 🌊 GlowyWavesHero Integration

Inside `src/components/sections/Hero.tsx`, find the comment:

```tsx
{/* ── Background ── */}
```

Replace the entire background `<div>` block with:

```tsx
<div className="absolute inset-0 z-0">
  <GlowyWavesHero />
</div>
```

The content `<div>` already has `relative z-10` so it sits above.

## 🎨 Customisation

All content lives in `src/lib/data.ts` — edit your name, projects, skills, experience there.

Design tokens (colors, etc.) are also in `data.ts` under `tokens` and in `tailwind.config.ts`.

## 🚢 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import at [vercel.com](https://vercel.com).
