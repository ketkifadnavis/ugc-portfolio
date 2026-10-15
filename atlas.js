"use strict";

function atlasPhotoCount(place) {
  return place.photos.length ? `${place.photos.length} ${place.photos.length === 1 ? "photo" : "photos"}${place.video ? " + a little film" : ""}` : "Photos coming soon";
}

function atlasPostcard(place) {
  const photos = place.photos;
  return `<div class="atlas-postcard-top"><span class="eyebrow">${place.country}</span><span class="atlas-postmark" aria-hidden="true">a memory,<br>not a checklist.</span></div>
    ${photos.length ? `<button class="atlas-cover" data-place-story="${place.id}" aria-label="Open photographs from ${place.name}">${image(photos[0], { sizes: "(max-width: 760px) 80vw, 320px" })}<span>open this memory ${arrow}</span></button>` : `<div class="atlas-unfinished" aria-label="Visited; photos coming soon">${chapterIcon("mountain")}<span>a page still<br>developing.</span></div>`}
    <div class="atlas-postcard-copy"><h4>${place.name}</h4><p class="atlas-place-note">${place.note}</p><p class="atlas-place-count">${atlasPhotoCount(place)}</p>
    ${photos.length > 1 ? `<div class="atlas-photo-strip">${photos.slice(1, 4).map(photo => `<button data-place-story="${place.id}" data-photo="${photo}" aria-label="Open ${photoLibrary[photo].title} from ${place.name}">${image(photo, { sizes: "100px" })}</button>`).join("")}</div>` : ""}
    <button class="atlas-open-story" data-place-story="${place.id}">${photos.length ? "Step into this place" : "A little note from this stop"} ${arrow}</button></div>`;
}

function travelAtlasSection() {
  const countries = [...new Set(portfolioPlaces.map(place => place.country))];
  return `<section class="travel-atlas" id="travel-atlas" aria-labelledby="atlas-title">
    <header class="atlas-heading"><div><span class="eyebrow">THE DETOURS, ON THE MAP</span><h3 id="atlas-title">Curiosity,<br><em>pinned.</em></h3></div><div><p>A few places that became part of me.<br>Pick a pin. I'll show you what I kept.</p><span class="atlas-handwritten">same little explorer. a few more miles.</span></div>${travelBuddy}</header>
    <div class="atlas-device">
      <div class="atlas-topbar"><span class="atlas-signal"><i aria-hidden="true"></i> MY LITTLE ATLAS</span><span>${portfolioPlaces.length} stops · ${countries.length} countries · one curious me</span></div>
      <div class="atlas-layout">
        <div class="atlas-map-stage"><div class="atlas-map" id="travel-map" role="region" aria-label="Interactive map of places Ketki has visited" aria-describedby="atlas-map-help"><div class="atlas-map-placeholder">unfolding the map...</div></div>
          <div class="atlas-map-tools"><button data-atlas-action="overview" aria-label="Show all visited places on the map">⊙ All the pins</button><button class="atlas-pan-toggle" data-atlas-action="pan" aria-pressed="false" hidden>Move map</button></div>
          <span class="atlas-compass" aria-hidden="true"><span>N</span>↑</span>
        </div>
        <aside class="atlas-sidebar" aria-label="Selected destination">
          <label class="atlas-picker-label" for="atlas-place-picker">WHERE SHALL WE WANDER?</label>
          <select id="atlas-place-picker" aria-controls="atlas-postcard">${countries.map(country => `<optgroup label="${country}">${portfolioPlaces.filter(place => place.country === country).map(place => `<option value="${place.id}">${place.name}${place.photos.length ? "" : " — photos coming soon"}</option>`).join("")}</optgroup>`).join("")}</select>
          <div class="atlas-postcard" id="atlas-postcard">${atlasPostcard(portfolioPlaces[0])}</div>
          <div class="atlas-stop-controls"><button data-atlas-action="previous" aria-label="Highlight the previous destination">←</button><span id="atlas-stop-count">01 / ${portfolioPlaces.length} places</span><button data-atlas-action="next" aria-label="Highlight the next destination">→</button></div>
        </aside>
      </div>
      <div class="atlas-bottom"><p id="atlas-map-help">Tap a pin to open its photos. Numbered pins unfold into more places.</p><span><i class="atlas-legend-ready" aria-hidden="true"></i> photos ready <i class="atlas-legend-soon" aria-hidden="true"></i> coming soon</span></div>
      <p class="atlas-map-error" id="atlas-map-error" role="status" hidden></p>
      <button class="atlas-retry" data-atlas-action="retry" hidden>Retry map tiles</button>
    </div>
    <p class="atlas-status" id="atlas-status" role="status">Srinagar & Kashmir · ${atlasPhotoCount(portfolioPlaces[0])}. Pick a place to follow the memory.</p>
    <p class="atlas-privacy">Pins mark towns and regions, not exact photo locations. No live location tracking.</p>
  </section>`;
}

function initTravelAtlas() {
  const root = document.querySelector("#travel-atlas");
  const picker = root.querySelector("#atlas-place-picker");
  const errorNotice = root.querySelector("#atlas-map-error");
  const retry = root.querySelector(".atlas-retry");
  const panControl = root.querySelector(".atlas-pan-toggle");
  const markers = new Map();
  const touchDevice = window.matchMedia("(pointer: coarse)").matches;
  let current = 0;
  let map = null;
  let clusters = null;
  let tiles = null;
  let tileFailure = false;
  root.dataset.place = portfolioPlaces[current].id;

  function pinIcon(place, selected) {
    return L.divIcon({
      className: `atlas-marker${selected ? " is-current" : ""}${place.photos.length ? "" : " is-unfinished"}`,
      html: `<span class="atlas-pin">${place.photos.length ? image(place.photos[0], { sizes: "40px" }) : '<span aria-hidden="true">✳</span>'}</span>`,
      iconSize: [44, 56], iconAnchor: [22, 56], tooltipAnchor: [0, -46],
    });
  }

  function overview() {
    map.stop();
    map.fitBounds(portfolioPlaces.map(place => place.point), { padding: [45, 65], maxZoom: 5, animate: false });
  }

  function ensureMap() {
    if (map) return true;
    if (typeof L === "undefined" || typeof L.markerClusterGroup !== "function") {
      console.error("The travel map libraries could not be loaded.");
      errorNotice.textContent = "The map couldn't load. Refresh the page, or use the place picker and postcards to open the photos.";
      errorNotice.hidden = false;
      root.dataset.mapState = "error";
      return false;
    }
    map = L.map("travel-map", {
      scrollWheelZoom: false, dragging: !touchDevice, touchZoom: true,
      zoomAnimation: false, fadeAnimation: false, markerZoomAnimation: false,
      minZoom: 2, maxZoom: 12, worldCopyJump: true,
    });
    map.attributionControl.setPrefix('<a href="https://leafletjs.com" target="_blank" rel="noopener noreferrer">Leaflet</a>');
    tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 12,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
    });
    tiles.on("tileerror", event => {
      if (!tileFailure) console.error("Travel map tiles could not be loaded:", event.tile.src);
      tileFailure = true;
      root.dataset.tileState = "error";
      errorNotice.textContent = "Map tiles are unavailable right now. The pins, place picker and photo galleries still work.";
      errorNotice.hidden = false;
      retry.hidden = false;
    });
    tiles.on("load", () => {
      if (!tileFailure) {
        root.dataset.tileState = "ready";
        errorNotice.hidden = true;
        retry.hidden = true;
      }
    });
    tiles.addTo(map);
    clusters = L.markerClusterGroup({
      maxClusterRadius: 60, showCoverageOnHover: false, animate: false,
      iconCreateFunction: cluster => L.divIcon({
        className: `atlas-cluster${cluster.getAllChildMarkers().some(marker => marker.options.placeId === portfolioPlaces[current].id) ? " is-current" : ""}`,
        html: `<span>${cluster.getChildCount()}<small>places</small></span>`,
        iconSize: [48, 48], iconAnchor: [24, 58],
      }),
    });
    portfolioPlaces.forEach((place, index) => {
      const marker = L.marker(place.point, {
        icon: pinIcon(place, index === current),
        title: `${place.name} — ${atlasPhotoCount(place)}`, alt: place.name,
        keyboard: true, riseOnHover: true, placeId: place.id,
      });
      marker.bindTooltip(place.name, { direction: "top" });
      marker.on("add", () => {
        const element = marker.getElement();
        element.dataset.mapPlace = place.id;
        element.setAttribute("aria-label", `${place.name}: ${atlasPhotoCount(place)}. Open this place.`);
        element.setAttribute("aria-pressed", String(index === current));
      });
      marker.on("click", () => {
        selectPlace(index, false);
        showPlace(place.id, marker.getElement() || picker);
      });
      markers.set(place.id, marker);
      clusters.addLayer(marker);
    });
    map.addLayer(clusters);
    root.querySelector(".atlas-map-placeholder").remove();
    panControl.hidden = !touchDevice;
    overview();
    root.dataset.mapState = "ready";
    const resizeObserver = new ResizeObserver(() => map.invalidateSize({ pan: false }));
    resizeObserver.observe(root.querySelector(".atlas-map"));
    return true;
  }

  function selectPlace(index, move = true) {
    if (!portfolioPlaces[index]) throw new Error(`Unknown destination index: ${index}`);
    current = index;
    const place = portfolioPlaces[index];
    root.dataset.place = place.id;
    picker.value = place.id;
    root.querySelector("#atlas-postcard").innerHTML = atlasPostcard(place);
    root.querySelector("#atlas-stop-count").textContent = `${String(index + 1).padStart(2, "0")} / ${portfolioPlaces.length} places`;
    root.querySelector("#atlas-status").textContent = `${place.name} · ${atlasPhotoCount(place)}. ${place.note}`;
    if (!ensureMap()) return;
    markers.forEach((marker, id) => {
      const selected = id === place.id;
      marker.setIcon(pinIcon(portfolioPlaces.find(item => item.id === id), selected));
      const element = marker.getElement();
      if (element) {
        element.dataset.mapPlace = id;
        element.setAttribute("aria-label", `${marker.options.title}. Open this place.`);
        element.setAttribute("aria-pressed", String(selected));
      }
    });
    clusters.refreshClusters();
    if (move) {
      map.stop();
      if (place.bounds) map.fitBounds(place.bounds, { padding: [35, 45], animate: false });
      else if (reducedMotion.matches) map.setView(place.point, place.zoom, { animate: false });
      else map.flyTo(place.point, place.zoom, { duration: .75 });
    }
  }

  picker.addEventListener("change", () => selectPlace(portfolioPlaces.findIndex(place => place.id === picker.value)));
  root.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const pin = event.target.closest(".atlas-marker, .atlas-cluster");
    if (!pin) return;
    event.preventDefault();
    pin.click();
  });
  root.addEventListener("click", event => {
    const button = event.target.closest("[data-atlas-action]");
    if (!button) return;
    const action = button.dataset.atlasAction;
    if (action === "previous" || action === "next") {
      selectPlace((current + (action === "next" ? 1 : -1) + portfolioPlaces.length) % portfolioPlaces.length);
    } else if (action === "overview") {
      if (ensureMap()) overview();
    } else if (action === "pan" && ensureMap()) {
      const enabled = !map.dragging.enabled();
      if (enabled) map.dragging.enable();
      else map.dragging.disable();
      button.setAttribute("aria-pressed", String(enabled));
      button.textContent = enabled ? "Done moving" : "Move map";
      root.querySelector("#atlas-map-help").textContent = enabled ? "Map unlocked. Drag to explore; tap Done moving to scroll the page normally." : "Tap a pin to open its photos. Numbered pins unfold into more places.";
    } else if (action === "retry" && ensureMap()) {
      tileFailure = false;
      root.dataset.tileState = "loading";
      tiles.redraw();
    }
  });
  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    ensureMap();
    observer.disconnect();
  }, { rootMargin: "500px" });
  observer.observe(root);
}
