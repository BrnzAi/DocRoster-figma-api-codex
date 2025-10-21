# DocRoster Angular Workspace

This repository contains the DocRoster Angular application and the supporting Figma tooling that was used to export the design data.

## Project layout

- `src/` – standalone Angular 17 application source organised into feature/data-access/shared folders.
- `figma-tools/` – Node scripts for working with the Figma API (`figma-fetch.js`, mocks and `.env` secrets). This folder keeps those dependencies separate from the Angular workspace.
- `docs/` – built Angular artefacts ready to serve from GitHub Pages (main branch → docs folder).

## Prerequisites

- Node.js 20+
- npm 10+

Install dependencies from the repository root:

```bash
npm ci
```

## Local development

- `npm start` – run the dev server on http://localhost:4200
- `npm run build` – production build to `docs/`
- `npm test` – execute Karma tests (headless Chrome is required locally)

## GitHub Pages deployment

The Angular CLI is configured to emit production assets into `docs/` with a relative `<base href="./">`. Commit the `docs/` folder and configure GitHub Pages to serve from the `docs` directory on the `main` branch:

1. Run `npm run build` to refresh the assets inside `docs/`.
2. Commit and push both the application source and the generated `docs/` output.
3. In the repository settings, choose **Pages → Build and deployment → Source: Deploy from a branch** and select `main` / `docs`.

To preview the static build locally:

```bash
npm run build
npx http-server docs
```

## Figma tooling

The `figma-tools` folder keeps the existing Node scripts isolated from the Angular project. Install and run them from that directory when you need to refresh the mock data:

```bash
cd figma-tools
npm install
node figma-fetch.js
```

Make sure the `.env` file stays in `figma-tools/` (see `.gitignore`) so secrets do not leak into the Angular workspace.
