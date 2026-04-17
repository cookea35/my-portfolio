# Portfolio Site (Astro)

A static, Markdown-driven portfolio and interactive resume built with Astro, designed for free GitHub Pages hosting.

## Tech stack

- Astro + TypeScript
- Tailwind CSS
- Astro Content Collections
- GitHub Actions deployment

## Quick start

1. Install dependencies:
   - `npm install`
2. Start local dev server:
   - `npm run dev`
3. Build for production:
   - `npm run build`

## Configure your profile

Update personal metadata in:
- `src/config/site.ts`

Important fields:
- `name`, `role`, `description`
- `githubUrl`, `linkedinUrl`, `email`
- `enableBlog` (set to `true` when ready)

## Add a project entry

Create a Markdown file under:
- `src/content/projects/`

Required frontmatter fields:
- `title`
- `summary`
- `tech` (array)
- `publishedAt`
- `githubUrl`

Optional fields:
- `description`
- `featured`
- `updatedAt`
- `demoUrl`
- `coverImage`

Example:

```md
---
title: "My Project"
summary: "What it does and why it matters."
tech: ["Astro", "TypeScript"]
featured: true
publishedAt: 2026-04-14
githubUrl: "https://github.com/your-username/my-project"
demoUrl: "https://example.com"
---
```

## Blog (future-ready)

The blog schema and routes are already in place:
- `src/content/blog/`
- `src/pages/blog/index.astro`
- `src/pages/blog/[slug].astro`

To publish posts:
1. Set `enableBlog` to `true` in `src/config/site.ts`.
2. Add Markdown posts to `src/content/blog/`.
3. Set `draft: false` in post frontmatter.

## GitHub Pages deployment

Workflow file:
- `.github/workflows/deploy.yml`

Before first deploy:
1. In GitHub repo settings, enable **Pages** with source set to **GitHub Actions**.
2. In `astro.config.mjs`, update:
   - `SITE_URL`
   - `REPO_NAME`

## Notes

- This site is static and has no backend or runtime hosting cost.
- SEO metadata is handled in `src/components/SEO.astro`.
