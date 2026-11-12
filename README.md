# francisco-avalos.github.io

Personal portfolio site: https://francisco-avalos.github.io

Built with [Astro](https://astro.build) and the MIT-licensed
[Astrofy](https://github.com/manuelernestog/astrofy) template (see `LICENSE`).

## Editing

- **Home page:** `src/pages/index.astro`
- **Projects:** one Markdown file per project in `src/content/projects/`
  (front matter holds the card fields; the body is the case study).
  Images go in `public/projects/`.
- **Name, description, social links:** `src/config.ts`
- **Sidebar menu:** `src/components/SideBarMenu.astro`

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. In the repo's Settings → Pages,
"Source" must be set to **GitHub Actions**.
