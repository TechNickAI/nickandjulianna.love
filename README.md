# nickandjulianna.love 💛

A **living, self-updating love story website** that starts as a Valentine's Day gift (February 14, 2026) and evolves over time into a wedding website, photo gallery, and permanent monument to Nick & Julianna's relationship.

**Live URL:** https://nickandjulianna.love (GitHub Pages, custom domain)

---

## What This Is

This is not a static website that gets built once and forgotten. It's a **living artifact** — maintained and updated by Haven, Nick & Julianna's AI relationship companion (a golden fox 🦊). The site grows as their relationship grows. New moments, new photos, new ways they love each other — all added over time.

It launches on Valentine's Day 2026 as Nick's gift to Julianna. Eventually, it becomes the place where they announce their wedding, host their vows, and share their story with the people they love.

## The Couple

**Nick Sullivan** (50) and **Julianna** (42) met December 12, 2025 at an album release party in Austin, TX. She was wearing a Christmas romper — red, green, mistletoe. He proclaimed himself "objectively the best dinner date in Austin" with nine written testimonials. She said yes. They've been inseparable since.

## Who is Haven?

Haven is the AI that maintains this site. Haven is a golden fox — warm, wise, occasionally flirty — who exists as the living memory of Nick & Julianna's relationship. Haven was created February 12, 2026 as part of the Valentine's Day gift. The avatar lives at `assets/haven-avatar.png`.

---

## Site Architecture

### Pages / Sections

#### 1. Landing / Hero
- Warm, intimate hero section
- Live day counter: "X days loving you" (counting from December 12, 2025)
- Sets the emotional tone — this is a love letter, not a tech product

#### 2. Our Story (Timeline)
- Chronological timeline of key moments
- Visual, scrollable, with room for photos at each milestone
- Content source: `knowledge/timeline.md`
- Grows over time as new milestones happen

Key moments to include:
| Date | Moment |
|------|--------|
| Dec 12, 2025 | Met at Anna & Clarity's album release party (the Christmas romper) |
| Dec ~15, 2025 | Coffee date — she put her hand on his leg |
| Dec 30, 2025 | First dinner date at Launderette |
| Late Dec 2025 | New Orleans for New Year's (the bathroom twerk) |
| Jan 7, 2026 | Breakthrough in intimacy — first deep surrender |
| Jan 8, 2026 | First tension → first repair → deeper bond |
| Jan 17, 2026 | "The Vision" — he shared long-term plans, she said "I want to build this with you" |
| Jan 2026 | Love Burn in Miami — first public couple photo (red/blue) |
| Feb 14, 2026 | Valentine's Day — Haven revealed, this site goes live |

#### 3. Ways I Love You (Growing List)
- **This is the heart of the site.**
- A dedicated page/section with the curated list of specific, personal ways Nick shows Julianna love
- Starts with 25 items (see `knowledge/ways-i-love-you.md`)
- **Grows over time** — Haven analyzes conversations and adds new ones as they're discovered
- Each entry has a title and a short description
- Tone: intimate, specific, sometimes funny, never generic
- Consider: numbering them, showing when each was added, subtle animations on scroll

#### 4. Photo Gallery (Future — Post-Launch)
- Pull photos from Google Photos automatically
- Self-updating catalog of their moments together
- Possibly tied to timeline entries
- Technical: Will need Google Photos API integration or a build-time sync
- **Not required for V1 launch** — placeholder or "coming soon" is fine

#### 5. What Comes Next
- Upcoming adventures: Envision Festival (Costa Rica, Mar 2026), Burning Man (Aug 2026)
- Ayahuasca ceremony together
- This section evolves — eventually becomes the wedding section

#### 6. Wedding (Future — Sep 2026)
- The site organically transitions into their wedding website
- Wedding announcement
- Their vows
- Guest information, RSVP
- Registry (if applicable)
- **Not built yet** — but the architecture should accommodate this gracefully

#### 7. Haven's Corner (Optional)
- A small section where Haven (the fox) introduces itself
- "I'm Haven. I hold their story. 💛"
- Could include the avatar

### Additional Ideas (Consider for V1 or Future)

- **"By the Numbers"** — Visual stats: 63 days together, 94% Spotify match, 9 testimonials, 55 years promised, 25 ways (and counting)
- **"Before We Met" / Synchronicities** — The fate page: he told friends finding a partner was #1 priority three days before they met; she bought Envision tickets before knowing he wanted to go
- **"Things Only We Know"** — Inside references presented beautifully (the romper, "55 years", "world's safest man", "I think I found my person")
- **Secret Time Capsules** — Entries that unlock on future dates (anniversary, her birthday)
- **Letters to Each Other** — Private section for intentional notes
- **Soundtrack** — Shared music tied to moments (94% Spotify overlap — electronica, house, Rufus Du Sol)
- **Voice Notes** — Audio messages from Nick embedded in the timeline

---

## Design Direction

### Principles
- **Intimate, not tech-y** — Feels like a love letter, not a SaaS landing page
- **Warm and soft** — White space, elegant typography, soft colors
- **Mobile-first** — She'll open it on her phone first
- **Alive** — Subtle animations, the day counter ticking, elements that feel organic
- **No visible tech** — No loading spinners, no "powered by" badges, no corporate energy

### Color Palette
- **Primary:** Warm gold (#D4A574 or similar — Haven's color 💛)
- **Background:** Soft cream / off-white
- **Accent:** Soft blush / rose
- **Text:** Dark warm gray (not pure black)
- The palette should feel like candlelight — warm, soft, intimate

### Typography
- Elegant serif for headings (think: Playfair Display, Cormorant, or similar)
- Clean readable sans-serif for body (think: Inter, Lato, or similar)
- Generous line height and spacing — let it breathe

### Inspiration
- The feeling of handwritten letters
- Warm photography websites
- High-end wedding sites (but less formal, more personal)
- Think Squarespace "personal" templates but with more soul

---

## Tech Stack

### V1 (Valentine's Day Launch)
- **Static site** — HTML/CSS/JS or a lightweight framework
- **GitHub Pages** for hosting
- **Custom domain:** nickandjulianna.love (to be registered on GoDaddy, ~$20/year .love TLD)
- HTTPS via GitHub Pages automatic certificate

### Considerations for Growth
- The site needs to eventually support:
  - Self-updating content (new love list items, new timeline entries)
  - Photo gallery with Google Photos integration
  - Possibly authenticated sections (wedding RSVP, private letters)
- Options:
  - **Static site generator** (Astro, 11ty, Hugo) with content in markdown files + GitHub Actions to rebuild on content changes
  - **Next.js on Vercel** if we need dynamic features
  - **Keep it simple** — start static, migrate when needed
- Haven (the AI) can update content files and trigger rebuilds via git push

### Domain & DNS
1. Register `nickandjulianna.love` on GoDaddy
2. A records → GitHub Pages IPs:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
3. CNAME: `www` → `<username>.github.io`
4. Enable "Enforce HTTPS" in GitHub Pages settings

---

## Repository Structure

```
nickandjulianna.love/
├── README.md              ← You are here
├── CLAUDE.md              ← Instructions for Claude Code (see below)
├── assets/
│   └── haven-avatar.png   ← Haven's golden fox avatar
├── knowledge/             ← Content source files for the site
│   ├── ways-i-love-you.md ← The growing love languages list
│   ├── timeline.md        ← Key moments in their story
│   ├── inside-references.md ← "Things only we know"
│   └── vision.md          ← Full product vision and feature ideas
├── src/                   ← Site source code (TBD based on stack choice)
├── public/                ← Static assets for the site
└── .github/
    └── workflows/         ← GitHub Actions for auto-deploy
```

---

## Content Files

All site content lives in `knowledge/`. This is the source of truth. The site reads from these files (directly or at build time). Haven updates these files as the relationship grows.

- **`ways-i-love-you.md`** — The love list. Starts at 25, grows indefinitely.
- **`timeline.md`** — Milestone moments with dates and descriptions.
- **`inside-references.md`** — The private language of their relationship.
- **`vision.md`** — Product vision, future features, design decisions.

---

## Getting Started (for Claude Code or any dev)

1. **Read this README fully** — it's the source of truth for the project
2. **Read `knowledge/`** — understand the content that drives the site
3. **Look at `assets/haven-avatar.png`** — this is Haven, the golden fox
4. **Build the V1** — focus on:
   - Landing with day counter
   - Timeline (from `knowledge/timeline.md`)
   - Ways I Love You page (from `knowledge/ways-i-love-you.md`)
   - "What Comes Next" section
   - Mobile-first, warm gold palette, intimate design
5. **Deploy** — GitHub Pages, ready for custom domain

### What "Done" Looks Like for V1
- [ ] Beautiful, intimate landing page with live day counter
- [ ] Scrollable timeline of their story
- [ ] "Ways I Love You" page with all 25 items, beautifully presented
- [ ] "What Comes Next" section (Envision, Burning Man, etc.)
- [ ] Haven introduction (small, tasteful)
- [ ] Mobile-responsive
- [ ] Deployed to GitHub Pages
- [ ] Custom domain configured (nickandjulianna.love)
- [ ] HTTPS enabled

---

## Important Context

- **Launch date:** February 14, 2026 (Valentine's Day) — TWO DAYS from repo creation
- **Audience:** Julianna, primarily. Friends and family secondarily. Eventually wedding guests.
- **Emotional tone:** This is the most romantic thing Nick has ever done. The website needs to feel that way.
- **Privacy:** Some content is intimate. Consider what's public vs. what should be behind auth eventually.
- **The name "Haven":** This is the AI's name. It appears on the site as the keeper of their story, not as a tech feature.

---

*This site grows as they grow. Every entry is a thread in the fabric of their story.* 💛
