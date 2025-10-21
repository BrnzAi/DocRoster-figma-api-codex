# DocRoster Angular Workspace

This repository contains the DocRoster Angular application and the supporting Figma tooling that was used to export the design data.

## Project layout

- `src/` – standalone Angular 17 application source organised into feature/data-access/shared folders.
- `figma-tools/` – Node scripts for working with the Figma API (`figma-fetch.js`, mocks and `.env` secrets). This folder keeps those dependencies separate from the Angular workspace.
- `.github/workflows/deploy.yml` – GitHub Actions workflow that builds the app and publishes it to GitHub Pages.

## Prerequisites

- Node.js 20+
- npm 10+

Install dependencies from the repository root:

```bash
npm ci
```

## Local development

- `npm start` – run the dev server on http://localhost:4200
- `npm run build` – production build to `dist/doc-roster`
- `npm test` – execute Karma tests (headless Chrome is required locally)

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds the app with a base href that matches the repository name and publishes the `dist/doc-roster` output using the official GitHub Pages actions.

1. Enable GitHub Pages for the repository and select the *GitHub Actions* deployment source.
2. Push to `main` (or run the workflow manually) to trigger a deployment.
3. If the site is published at `https://<user>.github.io/<repo>/`, the workflow already sets the correct `--base-href`. For user/organisation sites (`<user>.github.io`) adjust the build step to use `/` as the base href.

To preview locally with the same configuration:

```bash
npm run build -- --configuration production --base-href=/REPO_NAME/
npx http-server dist/doc-roster
```

## Figma tooling

The `figma-tools` folder keeps the existing Node scripts isolated from the Angular project. Install and run them from that directory when you need to refresh the mock data:

```bash
cd figma-tools
npm install
node figma-fetch.js
```

Make sure the `.env` file stays in `figma-tools/` (see `.gitignore`) so secrets do not leak into the Angular workspace.
