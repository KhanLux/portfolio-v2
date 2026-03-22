# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # TypeScript check + production build → dist/
npm run preview   # Serve dist/ locally for production preview
npm run lint      # ESLint check
```

There are no tests in this project.

## Architecture

Single-page portfolio in React 19 + TypeScript + Tailwind CSS v4 + Framer Motion, built with Vite.

**Tailwind v4** is configured via `@tailwindcss/vite` plugin (no `tailwind.config.ts`). Design tokens (colors, fonts) live in `src/index.css` inside a `@theme {}` block. Custom CSS classes for shared visual patterns also live in `index.css`:
- `.bento-card` — base card style with hover transform
- `.gradient-border` — pseudo-element gradient border overlay (place as first child inside any card)
- `.bg-glow-blue` / `.bg-glow-purple` — radial gradient background decorations
- `.pulse-dot` — animated availability indicator
- `.card-cta-gradient` — animated shifting gradient for the CTA card

**All user-editable content** lives in `src/data/`:
- `profile.ts` — name, role, tagline, about, location, availability, email, resumeUrl
- `projects.ts` — array of `Project` (title, description, tags, accent color hex, repoUrl, optional demoUrl)
- `socials.ts` — array of `Social` (label, Material Symbol icon name, url)

**Grid layout** is a 4-column CSS grid on desktop (`md:grid-cols-4`), 1-column on mobile. Card spans are set via Tailwind classes directly on each card component (`col-span-2 row-span-2`, etc.). The grid uses `gridAutoRows: minmax(180px, auto)` to keep proportions.

**Framer Motion** stagger animation runs once on mount via `BentoGrid.tsx`: parent uses `staggerChildren: 0.08`, each card fades up from `y: 20`. Card hover effects are CSS-only (faster).

**Tech Stack icons** in `TechStackCard` use devicon CDN (`cdn.jsdelivr.net/gh/devicons/devicon/icons/...`) as `<img>` tags with `loading="lazy"`. Brand-color hover glow is applied via inline `onMouseEnter`/`onMouseLeave` handlers since Tailwind can't handle dynamic hex values.

**Fonts** are loaded in `index.html` (not via CSS): Syne 700/800 (headings), Space Mono 400/700 (labels/code), Inter 400/500/600 (body). Material Symbols Outlined is also loaded there for icons.
