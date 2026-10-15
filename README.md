# Ketki's portfolio

A personal travel, food and lifestyle story, built with HTML, CSS and JavaScript.
The opening is an original illustrated world with six landmarks linking to the
story. A sticky five-chapter map follows the narrative without hijacking scrolling.
Scene motion can be paused and respects the system's reduced-motion preference.

**Website:** https://ketkifadnavis.github.io/ugc-portfolio/

## Local preview

Run `node server.mjs` and open http://localhost:4173/.
No dependencies or build step are required. The local server supports video
streaming and seeking; GitHub Pages serves the published site as static files.

## Publishing updates

Push changes to `main`. GitHub Pages publishes the repository root automatically.
In Settings > Pages, the source is **Deploy from a branch**, **main**, **/ (root)**.
The `.nojekyll` file disables Jekyll processing.

Keep asset URLs relative so photos, videos and scripts work under `/ugc-portfolio/`.
The public repository contains only website files and selected web-ready media.
Original photo archives, private review materials, old theme assets and temporary
video exports are excluded by `.gitignore`.
