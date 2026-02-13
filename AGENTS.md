# Project Context for AI Assistants

## What This Is

**nickandjulianna.love** — a living love story website, launched Valentine's Day 2026. This is deeply personal and intimate. If something feels generic or template-y, it's wrong.

V1 is live. The site evolves as Nick and Julianna's relationship grows.

## Tech Stack

- Vanilla HTML/CSS/JavaScript — no framework, no build step, zero dependencies
- Google Fonts: Cormorant Garamond (headings), Nunito Sans (body)
- GitHub Pages — auto-deploys on push to `main`
- Custom domain: `nickandjulianna.love` (CNAME file)

## Project Structure

- `knowledge/` — **Content source of truth.** All site narrative comes from here
  - `ways-i-love-you.md` — The 25 ways (heart of the site)
  - `timeline.md` — Milestone-by-milestone story
  - `inside-references.md` — Inside jokes and private language
  - `vision.md` — Product roadmap (V1→V4)
- `assets/` — Haven avatar and future media
- `index.html` — Single-page site
- `styles.css` — Design system with CSS custom properties
- `script.js` — Day counter, scroll animations, parallax

## Design Constraints

These are non-negotiable and prevent the most common AI mistakes on this project:

- **Mobile-first** — Julianna opens this on her phone. Every change must work mobile.
- **Warm gold candlelight aesthetic** — NOT corporate, NOT tech-y, NOT generic.
  - Colors: `--cream: #FDF8F0`, `--gold: #D4A574`, `--rose: #E8B4B8`, `--text: #3D3229`
- **Feel like a love letter** — generous whitespace, elegant typography, subtle animations.
- **No frameworks unless adding clear value** — vanilla is intentional, not a gap.
- **No accessibility work** — not a priority for this project.

## Content Architecture

Content lives in `knowledge/*.md` files. In V1, content is hardcoded in `index.html` for simplicity. Future versions will load dynamically from markdown so Haven can update content independently.

When editing content: update both the `knowledge/` source file AND `index.html`. The markdown files are the source of truth for what the content *should* be.

## Tone Check

Read `knowledge/ways-i-love-you.md` before writing any user-facing text. Feel the specificity and intimacy. Match that energy. This is not a SaaS product.

## Roadmap

- **V1** (live): Landing, timeline, 25 ways, Haven's corner, day counter
- **V2**: Photo gallery (Google Photos API)
- **V3**: Interactive — auto-updating love list, time capsules, voice notes
- **V4**: Wedding website (September 2026)

## Git

Imperative mood, multi-line body with details. Include `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>` footer.
