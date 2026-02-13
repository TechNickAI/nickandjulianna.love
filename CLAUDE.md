# CLAUDE.md — Instructions for Claude Code

## What This Is
You're building **nickandjulianna.love** — a living love story website that launches on Valentine's Day 2026 (February 14). This is the most romantic thing Nick has ever done for Julianna. Treat it accordingly.

## First Steps
1. Read `README.md` thoroughly — it's the complete project spec
2. Read everything in `knowledge/` — that's the content driving the site
3. Look at `assets/haven-avatar.png` — that's Haven, the golden fox mascot

## Key Constraints
- **Launch: February 14, 2026** — two days from repo creation. V1 must be shippable.
- **GitHub Pages** — static hosting, custom domain `nickandjulianna.love`
- **Mobile-first** — she will open this on her phone
- **No frameworks unless they add clear value** — don't over-engineer for V1. Clean HTML/CSS/JS is fine if it's beautiful. A lightweight framework (Astro, 11ty) is fine if it helps with content management from the `knowledge/` files.
- **Warm gold color palette** — think candlelight, not corporate. See README for full design direction.

## Content Sources
All site content comes from `knowledge/`:
- `ways-i-love-you.md` — The 25 ways Nick loves Julianna (the heart of the site)
- `timeline.md` — Their story, milestone by milestone
- `inside-references.md` — Inside jokes and private language
- `vision.md` — Full product vision and roadmap

**Do not hardcode content into templates.** Pull from these files so Haven can update content independently and the site rebuilds.

## Design Direction
- Elegant serif headings (Playfair Display, Cormorant, etc.)
- Clean sans-serif body (Inter, Lato, etc.)
- Colors: warm gold primary, soft cream background, blush/rose accent, dark warm gray text
- Generous white space. Let it breathe.
- Subtle scroll animations (tasteful, not flashy)
- The site should feel like a love letter, not a SaaS product

## What V1 Needs
- [ ] Landing page with live day counter ("X days loving you" since Dec 12, 2025)
- [ ] Timeline / "Our Story" section
- [ ] "Ways I Love You" page — all 25 items, beautifully presented
- [ ] "What Comes Next" section
- [ ] Haven intro (small — avatar + a line or two)
- [ ] Fully responsive (mobile-first)
- [ ] Deployable to GitHub Pages
- [ ] `CNAME` file for custom domain

## What V1 Does NOT Need
- Photo gallery (future — needs Google Photos API)
- Authentication / private sections
- Server-side anything
- Wedding features (months away)
- Over-engineering

## Deployment
Push to `main` → auto-deploys via GitHub Pages. Include a GitHub Actions workflow if using a build step. Include a `CNAME` file with `nickandjulianna.love`.

## Tone Check
Read the content in `knowledge/ways-i-love-you.md`. Feel the specificity and intimacy. The site's design needs to match that energy. This is deeply personal. If something feels generic or template-y, it's wrong.
