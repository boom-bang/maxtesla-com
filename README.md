# maxtesla.com

Personal site. Built with Astro 5, React 19, Tailwind v4, shadcn/ui, and bun. Hosted on Vercel.

Inspired by [steipete.me](https://steipete.me) — markdown-driven, public source, zero-JS by default.

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

## License

MIT © Max Tesla
