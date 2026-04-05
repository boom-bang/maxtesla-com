# maxtesla.com

Personal site. Built with Astro 5, React 19, Tailwind v4, shadcn/ui, and bun. Hosted on Vercel.

Inspired by the work of two designers — see [Credits](#credits) below.

## Stack

- **Astro 5** — static site, content collections, MDX posts
- **React 19** — islands for interactive components (e.g. `SkillTags`)
- **Tailwind CSS v4** — via `@tailwindcss/vite`
- **shadcn/ui** — new-york style, neutral base
- **Biome** — lint + format
- **bun** — package manager + task runner
- **Vercel** — hosting, analytics, speed insights

## Local development

Requires **Node 22+** (shadcn CLI + Astro CLI guardrail) and **bun**.

```sh
bun install
bun run dev       # http://localhost:4321
bun run build     # static output → dist/ + .vercel/output/
bun run preview   # preview built site
bunx biome check . # lint + format check
```

> If you get a `Node.js v20… out-of-date` error, put the newer node first in `PATH` for the session:
> `export PATH="/opt/homebrew/opt/node/bin:$PATH"`

## Structure

```
src/
├── content/posts/        # Markdown/MDX posts
├── content.config.ts     # Zod schema for posts collection
├── layouts/
│   ├── BaseLayout.astro  # html shell, fonts, meta, theme toggle script
│   └── PostLayout.astro  # prose wrapper for post pages
├── pages/
│   ├── index.astro       # Home — Theo-style minimal link stack
│   ├── about.astro       # About — Daniel-style bold display + skill tags
│   ├── posts/
│   │   ├── index.astro   # Posts list (sorted by date desc)
│   │   └── [...slug].astro
│   └── rss.xml.ts        # RSS feed
├── components/
│   ├── ui/               # shadcn primitives
│   ├── Nav.astro
│   ├── Footer.astro
│   ├── LinkStack.astro
│   └── SkillTags.tsx     # React island
├── lib/utils.ts          # cn() helper
├── styles/global.css     # Tailwind v4 + shadcn + site tokens
└── consts.ts             # SITE config + socials
```

## Writing a post

Drop a `.md` or `.mdx` file in `src/content/posts/` with this frontmatter:

```yaml
---
title: "Post title"
date: 2026-04-06
summary: "One-line description for the list + RSS."
tags: ["product", "ai"]
draft: false
---
```

Slug is derived from the filename. `draft: true` hides the post from the list, RSS, and routes.

## Deployment

Pushed to `github.com/boom-bang/maxtesla-com`. Vercel deploys `main` on push.

**DNS** (maxtesla.com on Cloudflare):

- Add `CNAME` record: `maxtesla.com → cname.vercel-dns.com` (grey cloud / proxy OFF)
- Vercel manages the SSL certificate via ACME.

## Credits

This site stands on the shoulders of two humans whose work directly shaped it:

- **[Peter Steinberger](https://steipete.me)** — the overall philosophy (markdown-driven, public source on GitHub, zero-JS by default, Astro + Vercel + MDX, clean typographic prose for posts). Peter publishes the full source of his site at [github.com/steipete/steipete.me](https://github.com/steipete/steipete.me), which served as the blueprint for the content pipeline, directory layout, and deployment approach here.
- **[Daniel Sun](https://dribbble.com/shots/23530094-personal-website-web-design-visual-identity)** — home hero, specifically the **fly-apart skill-tag animation** that scatters as the reader scrolls. That idea is lifted directly from Daniel's personal website concept on Dribbble (linked above). The implementation here is pure CSS using `animation-timeline: scroll()`, but the design language — colorful pastel pill tags stacked over a bold display headline, flying apart to reveal the word underneath — is his.

Thank you both.

## License

MIT © Max Tesla
