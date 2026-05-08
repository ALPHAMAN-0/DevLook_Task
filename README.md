# DevLook_Task

Pixel-accurate mobile homepage replica for https://riseatseven.com/. This project uses a Vite + React wrapper that injects the live homepage HTML so the layout, typography, and motion match the original as closely as possible on mobile.

## Scope

- Homepage only
- Mobile layout
- Hamburger menu and its mobile behavior

## Approach

The app renders the live homepage HTML inside a React shell, then loads the original scripts and styles. This avoids reimplementing complex interactions and preserves pixel accuracy.

Key files (inside the mobile version app):

- mobile version/src/components/LegacyPage.jsx: fetches the live HTML and injects it into the DOM
- mobile version/public/riseatseven.html: cached copy of the live homepage HTML
- mobile version/public/dist: local copy of the original build assets referenced by the page

## Requirements

- Node.js 18+
- npm 9+

## Install

```bash
cd "mobile version"
npm install
```

## Run (dev)

```bash
cd "mobile version"

npm run dev
```

Open the local URL shown in the terminal and switch the devtools device toolbar to a mobile viewport (for example 390x844).

## Scripts

```bash
cd "mobile version"

npm run dev
npm run build
npm run preview
```

## Updating the Live HTML

If the live homepage changes, refresh the cached HTML with:

```bash
curl -L "https://riseatseven.com/" -o "mobile version/public/riseatseven.html"
```

The live site blocks some direct asset downloads (HTTP 403). Use the existing local asset copy in mobile version/public/dist (copied from the provided riseatseven.com folder).

## GitHub Pages Deployment

This repo includes a GitHub Actions workflow that builds the Vite app and publishes it to GitHub Pages.

1. Push to the `main` branch.
2. In GitHub, go to Settings > Pages and set Source to GitHub Actions.
3. Wait for the workflow to finish. The live URL will be shown in the Actions log.

If you change the repository name, update the `base` value in mobile version/vite.config.js to match the new path (for example `/new-repo-name/`).

## Notes

- React StrictMode is disabled to prevent scripts from running twice.
- The app keeps custom styles minimal to avoid overriding the original CSS.

## Verification Checklist

- Homepage layout matches the live site on mobile
- Fonts and colors match
- Hero animation and background behavior load
- Hamburger menu opens and closes as on the live site
