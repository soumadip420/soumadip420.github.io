# GitHub Pages version

This folder is a static GitHub Pages version of the portfolio. The original Django template files are not modified. Only the Django template wrappers/static URL tags are resolved so the pages can be served as plain HTML.

## Publish
1. Create a GitHub repository.
2. Upload everything inside this folder (make sure `index.html` is at the repository root).
3. In GitHub: **Settings → Pages → Deploy from a branch → main → /(root)**.
4. Open the GitHub Pages URL GitHub gives you.

## Important
GitHub Pages is static hosting. It can display the portfolio pages, CSS, JavaScript and screenshots, but it cannot run the Django/Python/PostgreSQL backend. The live Pixi application itself therefore still needs a backend host.
