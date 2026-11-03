# Aleem Developer

A React portfolio and digital studio website for Muhammad Aleem. It presents web and software services, selected projects, background and experience, and a project inquiry form.

## Technology

- React 18 and JavaScript (JSX)
- Vite 6 for development and production builds
- React Router with `HashRouter` for static-host-compatible navigation
- SCSS and Bootstrap 5
- Three.js with React Three Fiber and Drei for interactive 3D scenes
- React Slick and React Parallax for carousel and parallax sections
- ESLint 9

## Run locally

From this directory:

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run lint
npm run build
```

The production files are written to `dist/`. To test the GitHub Pages repository path locally:

```sh
BASE_PATH=/aleemdev/ npm run build
```

## GitHub Pages

The repository-level GitHub Actions workflow builds this app from `Website actuall code/` and deploys `dist/` to GitHub Pages at `https://aleemdevaloper.github.io/aleemdev/`. It runs lint and build checks on pushes to `main` or `master` and pull requests targeting those branches; it deploys only pushes and manual runs.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The workflow supplies `/aleemdev/` as Vite's base path so bundled files and public 3D assets resolve on the project site.

## Contact form

The inquiry form opens a prefilled email draft; the visitor must send it from their own email app. It does not submit to a server or store visitor data.
