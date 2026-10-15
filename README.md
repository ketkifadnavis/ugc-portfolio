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
Journals have an explicit viewport-bounded scroll area with a visible scrollbar
and a sticky close button. Each journal reopens at the top, including when
quickly closing one destination and opening another.
Journal films retain their native proportions; vertical clips share a row with
a companion photo rather than leaving blank side panels.
The selected photography includes Srinagar lake rides and Kashmir snow days,
alongside city corners, food, gardens and quiet stays within the same life story.

The travel atlas highlights 27 places and regions across four countries,
including Kerala and Vietnam overview galleries, Bengaluru and Shivamogga.
Tap a photo pin to open that destination's own gallery, or use the place picker,
postcard thumbnails and previous/next controls. Nearby pins cluster rather than
overlap. Alleppey and Kanyakumari are marked as visited with photos coming soon;
their galleries never borrow images from another destination.

Pins use representative town/region centres, never embedded photo GPS positions.
The atlas does not request visitors' locations. Map tiles load only near the
atlas, normal page scrolling is not hijacked, and touch users can explicitly
unlock map dragging. Galleries remain available if map tiles cannot load.

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

## Map credits

The atlas self-hosts Leaflet 1.9.4 (BSD-2-Clause) and Leaflet.markercluster 1.5.3
(MIT); their licences are retained in `assets/vendor/`. Map tiles are served by
OpenStreetMap with visible attribution to its contributors. Browser caching is
preserved; tiles must not be bulk-downloaded or prefetched for offline use.
