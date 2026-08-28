# Portafolio personal — Juan David Molano Sarmiento

Página web personal construida con **React + Vite + TailwindCSS**, pensada como carta de presentación
profesional orientada a roles de **Data Scientist / BI Developer**.

## Tecnologías

- React 19 + Vite
- TailwindCSS v4
- react-icons

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Despliegue en GitHub Pages

Este repo incluye un workflow (`.github/workflows/deploy.yml`) que compila el sitio y lo publica
automáticamente en GitHub Pages cada vez que se hace push a `main`. Para activarlo:

1. Sube este proyecto a un repositorio llamado `molaneitor.github.io` (o el nombre que prefieras).
2. En GitHub, ve a **Settings → Pages** y selecciona **Source: GitHub Actions**.
3. Haz push a `main` — la Action se encarga del resto.

## Contenido

Toda la información (perfil, experiencia, habilidades, proyectos) vive en `src/data/*.js`,
separada de los componentes visuales en `src/components/`, para poder actualizarla fácilmente
sin tocar el diseño.
