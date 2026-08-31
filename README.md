# Personal Portfolio — Juan David Molano Sarmiento

Personal website built with **React + Vite + TailwindCSS**, designed as a professional
introduction geared toward **Data Analyst / BI Developer** roles. Available in English and
Spanish via a language switcher in the navbar.

## Tech stack

- React 19 + Vite
- TailwindCSS v4
- react-icons

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploying to GitHub Pages

This repo includes a workflow (`.github/workflows/deploy.yml`) that builds the site and
publishes it automatically to GitHub Pages on every push to `main`. To enable it:

1. Push this project to a repository named `molaneitor.github.io` (or whatever name you prefer).
2. On GitHub, go to **Settings → Pages** and set **Source: GitHub Actions**.
3. Push to `main` — the Action takes care of the rest.

## Content

All the content (profile, experience, skills, projects) lives in `src/data/*.js`, separate
from the visual components in `src/components/`, so it can be updated easily without touching
the design. Translatable fields are stored as `{ es, en }` objects and picked at render time
by the `useLanguage()` hook (`src/context/LanguageContext.jsx`); static UI copy (nav labels,
section headings, buttons) lives in `src/data/translations.js`.
