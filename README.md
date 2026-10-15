# Ketki's portfolio

A personal travel, food and lifestyle story, built with HTML, CSS and JavaScript.
The opening is an original illustrated world with six landmarks linking to the
story. A sticky five-chapter map follows the narrative without hijacking scrolling.
Scene motion can be paused and respects the system's reduced-motion preference.
Silent films play muted when prominently in view or hovered, with only one playing
at a time. They pause offscreen or in a hidden tab; manual pauses are respected
until the film leaves view. Reduced motion keeps playback manual. Popup journals
use packed, proportion-aware collages: portrait leads have companion photos, and
two- or three-photo groups share aligned edges without empty image panels.
Journal films retain their native proportions; vertical clips share a row with
a companion photo rather than leaving blank side panels.
The selected photography includes Srinagar lake rides and Kashmir snow days,
alongside city corners, food, gardens and quiet stays within the same life story.

**Website:** https://ketkifadnavis.github.io/ugc-portfolio/

## Local preview

Run `node server.mjs` and open http://localhost:4173/.
No dependencies or build step are required. The local server supports video
streaming and seeking; GitHub Pages serves the published site as static files.

## Publishing updates

Push changes to `main`. GitHub Pages publishes the repository root automatically.
Refresh the affected asset version queries in `index.html` when updating browser
code or styles so returning visitors do not mix cached and updated files.
In Settings > Pages, the source is **Deploy from a branch**, **main**, **/ (root)**.
The `.nojekyll` file disables Jekyll processing.

Keep asset URLs relative so photos, videos and scripts work under `/ugc-portfolio/`.
The public repository contains only website files and selected web-ready media.
Original photo archives, private review materials, old theme assets and temporary
video exports are excluded by `.gitignore`.
