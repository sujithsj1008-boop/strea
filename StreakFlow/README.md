# StreakFlow

A local-first productivity and habit tracker built with React 18, TypeScript, Vite, and Tailwind CSS. Tasks, XP, goals, and theme preferences stay in your browser; no account or backend is required.

## Setup

Install Node.js 18 or newer, then install project dependencies:

```sh
npm install
```

## Development

```sh
npm run dev
```

Vite prints the local development URL. The app saves your data in browser local storage.

## Build and tests

```sh
npm run build
npm test
```

`npm run build` type-checks the TypeScript and creates the production site in `dist/`. Engine tests use Node’s built-in test runner.

## Deploy to Vercel from GitHub

1. Push this project folder to a GitHub repository.
2. Import that repository in Vercel and set the project root to the folder containing `package.json` (the repository root if this project is at its root).
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy. The root `vercel.json` rewrites app routes to `index.html`.

The app has no environment variables or backend requirements. The web manifest and service worker are in `public/`; once loaded online, the app shell is cached for offline visits. SVG icons are in `public/icons/`.
