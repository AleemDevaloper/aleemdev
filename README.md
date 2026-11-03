# Aleem Developer — portfolio and digital studio

This repository contains the portfolio website source in [`Website actuall code/`](./Website%20actuall%20code/). The site showcases services, existing projects, and an email-based project inquiry form.

## Technology

React 18, Vite 6, JavaScript/JSX, SCSS, Bootstrap 5, React Router (`HashRouter`), Three.js / React Three Fiber / Drei, React Slick, React Parallax, and ESLint.

## GitHub Pages deployment

GitHub Actions builds the Vite app from `Website actuall code/` and publishes it to `https://aleemdevaloper.github.io/aleemdev/`. To enable deployment, open the repository's **Settings → Pages** and set the source to **GitHub Actions**. Pushes to `main` or `master` deploy automatically; pull requests run lint and build checks.

The workflow builds using `/aleemdev/` as the base path. To build locally:

```sh
cd "Website actuall code"
npm ci
npm run lint
npm run build
```

The contact form opens a prefilled email draft and requires the visitor to send it in their email app; it is not a server-backed form.
