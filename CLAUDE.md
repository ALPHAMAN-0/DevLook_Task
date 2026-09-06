## Build / dev / preview
Run from inside `mobile version/` (this is where package.json lives, not REPO_ROOT):

```bash
cd "mobile version"
npm install
npm run dev       # vite
npm run build      # vite build
npm run preview    # vite preview
```
(mobile version/package.json scripts)

## Rules
- The app's manifest is `mobile version/package.json`, not the repo root — root `package-lock.json` is an empty stub. Run npm commands from `mobile version/`, not REPO_ROOT.
- No test or lint script exists in `mobile version/package.json` — TODO: verify before assuming any test/lint step.

## Read first
- README.md
- mobile version/src/App.jsx
- mobile version/src/main.jsx

Architecture: see ARCHITECTURE.md — read before structural changes
