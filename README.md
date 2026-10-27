# Personal Portfolio — Juan David Molano Sarmiento

Personal website built as **static HTML and CSS** (no JavaScript, no build step), designed as a
professional introduction geared toward **Data Scientist / BI Developer** roles. Available in
English (`/`) and Spanish (`/es/`), linked to each other with `hreflang`.

## Structure

- `site/index.html`: English page
- `site/es/index.html`: Spanish page
- `site/css/`: `tokens.css` (colours, type, spacing), `base.css` and `site.css`
- `site/cv/`: the two resume PDFs, served at `/cv/...`
- `site/img/`, `site/og.png`, `site/favicon.svg`, `site/apple-touch-icon.png`

## Local preview

Any static server pointed at `site/` works, for example:

```bash
py -m http.server 4173 --directory site
```

Then open http://localhost:4173/ and http://localhost:4173/es/.

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` publishes the `site/` folder to GitHub Pages
on every push to `main` (Settings → Pages → Source: GitHub Actions). There is nothing to build.

## Content

The content lives directly in the two HTML files; when you change a text, change it in both
`site/index.html` and `site/es/index.html`.

The previous React + Vite version (`src/`, `index.html`, `vite.config.js`, `package.json`) is
still in the repository but is no longer published.
