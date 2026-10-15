"use strict";

const projects = {
  ocean: { title: "Salt in the air", label: "Travel / A slower kind of escape", photo: "1002", photos: ["1182", "0969", "0983", "1297", "1295", "0412"], video: "soft-surf", type: "travel", category: "TRAVEL", idea: "Bare feet, soft surf, and the sort of blue you wish you could bottle. I came for the coastline and stayed for the feeling of having nowhere else to be." },
  cafes: { title: "One more coffee?", label: "Food & lifestyle / Little rituals", photo: "1328", photos: ["1085", "0771", "2277", "0595", "1468"], type: "food", category: "FOOD & LIFESTYLE", idea: "A seat by the window. Something warm in a good cup. The places where a quick stop turns into the best part of the afternoon." },
  city: { title: "Take the long way", label: "Travel / City-side discoveries", photo: "1778", photos: ["1735", "1671", "1685", "1114", "2384", "1392"], video: "city-after-dark", type: "travel", category: "TRAVEL", idea: "Big city views, tiny discoveries, and all the reasons I never quite stick to the itinerary. I like to see a place in daylight, then meet it all over again after dark." },
  colour: { title: "A city, a little differently", label: "Travel / Malaysia, murals & little details", photo: "2241", photos: ["1598", "1753", "2002", "2027", "1443", "0545", "2004"], type: "travel", category: "CITY LIFE & COLOUR", idea: "A playful painted window in Malaysia. Streets stretching between the buildings in Singapore. A ceiling that makes me stop and look up. Different places, the same little habit: noticing the character in the corners, not only the landmarks." },
  mountain: { title: "A change of altitude", label: "Travel / Into the green", photo: "1461", photos: ["2548", "0902", "0896", "1834", "0642", "2523"], type: "travel", category: "TRAVEL", idea: "Tea-green hills, mountain air, and the joy of putting the phone away—after one more photograph. These are the places where I remember to take my time." },
  table: { title: "Worth a second bite", label: "Food / Color on the table", photo: "1447", photos: ["1252", "0638", "1707", "2010", "1952"], video: "something-sweet", type: "food", category: "FOOD", idea: "I follow my appetite as often as the map. A beautifully plated meal, a street-side sweet, a familiar comfort: the food is part of how I get to know a place." },
  noodles: { title: "Follow your appetite", label: "Food / A very good detour", photo: "2324", photos: ["2010", "1252", "1447"], type: "food", category: "FOOD", idea: "Some travel memories come in a bowl. A small collection of comforting plates, warm tables, and very good reasons to take a food detour." },
  boat: { title: "The scenic route, always", label: "Travel / Postcards from the detour", photo: "0548", photos: ["0585", "0563", "2232", "0485", "0834", "0778"], video: "river-bends", type: "travel", category: "TRAVEL", idea: "Boat days, winding rivers, sculptural landmarks, and views that make the climb worth it. Sometimes the best part of the journey is simply watching it unfold." },
  lifestyle: { title: "The life in between", label: "Lifestyle / Everyday good things", photo: "1234", photos: ["1362", "2453", "2358", "1480", "0987", "2397", "0798", "1961"], type: "lifestyle", category: "LIFESTYLE", idea: "The laughing-at-the-table moments, the unexpected good light, the little rituals. There doesn't have to be a landmark for a day to have a story." },
  afterdark: { title: "Out past the golden hour", label: "Lifestyle / After dark", photo: "0959", photos: ["0506", "1952", "0595"], type: "lifestyle", category: "TRAVEL & LIFESTYLE", idea: "Lanterns, a glowing canal, and one more stop before calling it a night. I'm usually the one saying, 'Let's walk just a little further.'" },
  quiet: { title: "Do not disturb this moment", label: "Lifestyle / The slower side", photo: "2039", photos: ["2525", "0590", "2191", "1297", "0642", "1461"], video: "waterfall-pause", type: "lifestyle", category: "TRAVEL & LIFESTYLE", idea: "Light through the trees. A waterfall worth lingering at. The quieter places don't need much from me, just a little attention." },
  details: { title: "Look a little closer", label: "Travel / Colors & corners", photo: "0542", photos: ["1429", "2002", "1468", "1952"], type: "travel", category: "PLACES & DETAILS", idea: "A turquoise hall, a carved ceiling, a painted doorway. Sometimes the smallest part of a place is the part I remember most." },
  stays: { title: "Checked in, switched off", label: "Lifestyle / A stay with a view", photo: "0902", photos: ["0932", "0896", "1309"], type: "lifestyle", category: "TRAVEL & LIFESTYLE", idea: "The mountain backdrop, the poolside pause, the balcony I don't want to leave. I remember a stay by how it lets me settle into a place." },
};

const personalNotes = {
  ocean: "I went looking for a view. I found a reason to slow down.",
  cafes: "I remember a café by how it makes me linger, not just what's in the cup.",
  city: "I like a city best when I leave a little room to be surprised.",
  colour: "Sometimes a city says hello in colour. Sometimes I say hello back.",
  mountain: "Greener places always give me a little of myself back.",
  table: "A new place makes a lot more sense to me after a really good meal.",
  noodles: "Something warm, something new, and one more bite.",
  boat: "Big views get my attention. The journey makes the memory.",
  lifestyle: "Not every memory needs a landmark.",
  afterdark: "One more stop. The evening glow makes a good case for it.",
  quiet: "Sometimes a little green and nowhere to be is the whole story.",
  details: "There's always something worth noticing if I look a little closer.",
  stays: "More than a room. A little feeling of being somewhere else.",
};

const arrow = `<span class="arrow" aria-hidden="true">↗</span>`;
const star = (className = "star") => `<svg class="${className}" viewBox="0 0 60 60" aria-hidden="true"><path fill="currentColor" d="M30 0l5.8 19.2L51.2 8.8l-10.4 15.4L60 30l-19.2 5.8 10.4 15.4-15.4-10.4L30 60l-5.8-19.2L8.8 51.2l10.4-15.4L0 30l19.2-5.8L8.8 8.8l15.4 10.4z"/></svg>`;
const scribble = `<svg class="scribble-arrow" viewBox="0 0 90 55" aria-hidden="true"><path d="M3 4c45-4 24 39 70 34M57 26l18 13-17 10"/></svg>`;
const pencilTrail = `<svg class="pencil-trail" viewBox="0 0 1100 80" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M8 56C122 2 238 74 354 34s237-10 330 9S923 9 1086 35" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 7"/><path d="m1075 22 13 13-17 4M120 42l4-10 5 10 11 1-9 6 3 10-9-6-8 6 2-10-8-6zM751 30c-11-17-30 2-2 17 28-14 13-35 2-17" stroke="currentColor" stroke-width="1.5"/></svg>`;
const travelBuddy = `<svg class="travel-buddy" viewBox="0 0 170 165" fill="none" aria-hidden="true">
  <g stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M29 87c-18-10-20 29-4 34l11-4" fill="var(--doodle-color, #efc56c)"/>
    <path d="M51 122l-5 22m43-23 7 24M31 84 15 71m88 17 22-17"/>
    <path d="M43 143c-13-3-22 7-15 10 7 4 21 2 23-1l-1-9m42 0c8-3 22 4 21 10-5 5-19 2-23-1z" fill="var(--doodle-color, #efc56c)"/>
    <path d="M32 54c-14-19 7-35 24-24 10-23 40-15 43 4 26-4 37 25 19 40 13 19-2 52-25 51-16 13-43 6-48-11-24 2-35-23-22-39-10-7-8-16 9-21z" fill="var(--doodle-paper, #fffaf0)"/>
    <path d="M34 56c-12-18 4-35 22-24m45 3c23-4 33 23 15 38M47 116c5 16 31 20 46 10" opacity=".26"/>
    <path d="M40 43c12-14 41-18 61-3l8 9c-19-7-42-3-58 4z" fill="var(--doodle-color, #efc56c)"/>
    <path d="M44 49c23-8 46-9 65 0M56 93q12 13 25-1"/>
    <path d="M120 65l3-6h11l3 6h12v22h-31V65z" fill="var(--doodle-color, #efc56c)"/>
    <circle cx="134" cy="75" r="6"/><path d="m144 36 4-6m4 17 8-1M18 45l-6-5m6 16-8 2"/>
  </g>
  <ellipse cx="54" cy="80" rx="2.4" ry="3.5" fill="currentColor"/><ellipse cx="80" cy="79" rx="2.4" ry="3.5" fill="currentColor"/>
  <ellipse cx="44" cy="91" rx="7" ry="4" fill="#e9a198" opacity=".6"/><ellipse cx="91" cy="90" rx="7" ry="4" fill="#e9a198" opacity=".6"/>
</svg>`;
const littleJoys = [
  "Still asking: what's over there?",
  "You're allowed to take the scenic route.",
  "Good food counts as an adventure.",
  "Collect the feeling. The photo is a bonus.",
];
let littleJoy = 0;
let storyFilter = "all";
let storiesExpanded = false;
let dialogTrigger = null;
const dialog = document.querySelector("#detail-dialog");
const photoLibrary = { ...portfolioPhotos, ...lifePhotos, ...cityPhotos };

const memories = [
  { photo: "1598", project: "colour", type: "city", title: "Between the buildings", detail: "Singapore / taking the long way" },
  { photo: "1447", project: "table", type: "food", title: "A very good reason to stop", detail: "A table full of colour" },
  { photo: "2039", project: "quiet", type: "lifestyle", title: "A little good light", detail: "No big plans required" },
  { photo: "2241", project: "colour", type: "city", title: "A little mischief in Malaysia", detail: "A painted window. A real memory." },
  { photo: "1328", project: "cafes", type: "food", title: "But first, this", detail: "The smallest daily adventure" },
  { photo: "0545", project: "colour", type: "city", title: "Remember to look up", detail: "Art isn't always in a gallery" },
  { photo: "1234", project: "lifestyle", type: "lifestyle", title: "The happy in-between", detail: "Little life, fully appreciated" },
  { photo: "2004", project: "colour", type: "food", title: "A cup, a corner, a little art", detail: "Coffee with a side of linework" },
  { photo: "2027", project: "colour", type: "city", title: "Stay until the lights come on", detail: "One more walk before heading back" },
  { photo: "2453", project: "lifestyle", type: "lifestyle", title: "Taking the afternoon off", detail: "A slower kind of good day" },
  { photo: "1707", project: "table", type: "food", title: "Always room for this", detail: "Something sweet along the way" },
  { photo: "1362", project: "lifestyle", type: "lifestyle", title: "A small patch of sunshine", detail: "The things I want to remember" },
];
let memoryFilter = "all";
let memoryOrder = [...memories];

const cameraDrawing = `<svg viewBox="0 0 220 160" aria-hidden="true"><path fill="#71608d" d="M60 26h48l13 17h65a12 12 0 0 1 12 12v83a12 12 0 0 1-12 12H24a12 12 0 0 1-12-12V55a12 12 0 0 1 12-12h25z"/><path fill="#b9a7d1" d="M12 71h186v50H12z"/><rect x="24" y="51" width="28" height="12" rx="3" fill="#f6db91"/><circle cx="112" cy="97" r="44" fill="#4a3c5e"/><circle cx="112" cy="97" r="33" fill="#d7cce3"/><circle cx="112" cy="97" r="26" fill="#645a76"/><circle cx="112" cy="97" r="17" fill="#3e394c"/><ellipse cx="102" cy="87" rx="7" ry="10" fill="#d6e6dc" opacity=".65"/><rect x="158" y="52" width="26" height="14" rx="3" fill="#e9e2f1"/><path d="M22 46C-5 3 40 5 56 27" fill="none" stroke="#8c799e" stroke-width="5"/></svg>`;
const coffeeDrawing = `<svg viewBox="0 0 200 160" aria-hidden="true"><ellipse cx="91" cy="137" rx="70" ry="12" fill="#c9b8ce"/><path d="M134 47c55-7 60 61 5 64" fill="none" stroke="#c293ac" stroke-width="15"/><path d="M34 44h114l-12 78c-3 20-88 20-90 0z" fill="#e3adc6"/><ellipse cx="91" cy="44" rx="57" ry="18" fill="#f7d6df"/><ellipse cx="91" cy="43" rx="46" ry="12" fill="#8d6654"/><path d="M90 43c-19-18-27 5 0 9 27-4 19-27 0-9" fill="#edd9b7"/><path d="M71 23c-14-15 14-14 1-29m36 28c-14-15 14-14 1-29" fill="none" stroke="#b79ec3" stroke-width="4" stroke-linecap="round"/></svg>`;
const questNotes = {
  camera: { title: "Look up. Look closer.", copy: "The carved ceilings and colourful corners I almost walked past. This is my kind of treasure hunt.", label: "THE CAMERA / A DIFFERENT PERSPECTIVE", photo: "1443", project: "colour" },
  postcard: { title: "Hello from Malaysia.", copy: "A painted window, a little mischief, and a reminder that the best travel moments don't always need a grand view.", label: "THE POSTCARD / A HAPPY LITTLE DETOUR", photo: "2241", project: "colour" },
  coffee: { title: "Make room for a little ritual.", copy: "A good cup, a slower afternoon, and absolutely no hurry to leave. Not every detour needs a boarding pass.", label: "THE COFFEE / STAY A LITTLE LONGER", photo: "1328", project: "cafes" },
};
let activeQuest = "postcard";

function image(id, options = {}) {
  const asset = photoLibrary[id];
  if (!asset) throw new Error(`Unknown portfolio photo: ${id}`);
  return `<img src="${asset.src}" srcset="${asset.srcset}" sizes="${options.sizes || "(max-width: 760px) calc(100vw - 48px), 400px"}" width="${asset.width}" height="${asset.height}" alt="${asset.alt}" style="object-position:${asset.position}" ${options.eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}

function video(id) {
  const asset = portfolioVideos[id];
  if (!asset) throw new Error(`Unknown portfolio video: ${id}`);
  return `<video controls playsinline preload="none" poster="${asset.poster}" width="${asset.width}" height="${asset.height}" aria-label="${asset.title}. ${asset.description}. Silent video.">
    <source src="${asset.src}" type="video/mp4">
    <p>Your browser cannot play this video. <a href="${asset.src}">Open the clip</a>.</p>
  </video>`;
}

function durationLabel(id) {
  return `0:${String(Math.round(portfolioVideos[id].duration)).padStart(2, "0")}`;
}

function littleExplorer(className = "") {
  return `<img class="little-explorer ${className}" src="assets/photos/little-explorer-cutout.png" width="344" height="640" alt="" aria-hidden="true" decoding="async">`;
}

function cityPages() {
  return `<aside class="city-pages" id="city-colours" aria-labelledby="city-title">
    <div class="city-intro"><span class="eyebrow">ANOTHER PAGE FROM THE SAME CURIOUS LIFE</span><h3 id="city-title">Not just the view.<br><em>The character.</em></h3><p>I love the big landscapes. But give me a city with a little personality, and I'll happily take the long way home.</p><p>Painted walls in Malaysia. A skyline between the clouds. A tiny detail I nearly missed. There's a different kind of adventure here, too.</p><button class="story-text-link" data-project="colour">Follow the colours ${arrow}</button><span class="chapter-scribble">sometimes the wall has a story, too.</span></div>
    <button class="city-postcard" data-project="colour" data-photo="2241" aria-label="Open my Malaysia street-art story">${image("2241", { sizes: "(max-width: 760px) calc(100vw - 64px), 540px" })}<span class="city-postcard-caption"><span class="eyebrow">MALAYSIA / A HAPPY LITTLE DETOUR</span><span>me, making friends with the scenery.</span>${arrow}</span><span class="pencil-tape" aria-hidden="true"></span></button>
    <div class="city-contact-sheet"><button data-project="colour" data-photo="1753" aria-label="Explore my Singapore skyline photograph">${image("1753")}<span>the city takes a breath.</span></button><button data-project="colour" data-photo="0545" aria-label="Explore the painted ceiling photograph">${image("0545")}<span>and then I remember to look up.</span></button></div>
  </aside>`;
}

function lifeStory() {
  return `<section class="life-story" id="selected-work"><div class="wrap">
    <header class="life-introduction"><span class="eyebrow">NOT A STRAIGHT LINE. A VERY PERSONAL ONE.</span><h2>Every story<br><em>starts somewhere.</em></h2><p>Mine starts with a little curiosity. It still does, really.</p>${pencilTrail}</header>
    <div class="life-chapters">
      <div class="story-route" aria-hidden="true">${littleExplorer("wandering-me")}</div>
      <article class="life-chapter childhood-chapter" id="little-me">
        <div class="chapter-visual childhood-photos">
          <figure class="photo-print childhood-print">${image("0147")}<figcaption>me, before the itineraries.</figcaption><span class="pencil-tape" aria-hidden="true"></span></figure>
          <figure class="photo-print mischief-print">${image("0171", { sizes: "200px" })}<figcaption>very serious explorer.</figcaption></figure>
        </div>
        <div class="chapter-copy"><span class="eyebrow">01 / BEFORE THE BUCKET LISTS</span><h3>Tiny feet.<br><em>Big curiosity.</em></h3><p>Before the maps, the camera, or knowing what a bucket list even was—there was this little explorer.</p><p>Looking at these old pictures, I think the question has always been the same:</p><blockquote>“What's over there?”</blockquote><span class="chapter-scribble">some things really don't change.</span></div>
      </article>
      <div class="chapter-bridge"><span>the feet grew.<br>the curiosity stayed.</span>${scribble}</div>
      <article class="life-chapter developer-chapter" id="developer-life">
        <div class="chapter-visual"><figure class="photo-print developer-print">${image("0109")}<figcaption>a different kind of exploring.</figcaption><span class="pencil-tape" aria-hidden="true"></span></figure><div class="developer-note"><span class="eyebrow">CURRENTLY RUNNING</span><code>developer mode: on<br>curiosity: also on<span aria-hidden="true">_</span></code></div></div>
        <div class="chapter-copy"><span class="eyebrow">02 / THE LIFE I BUILD</span><h3>Some days,<br><em>I speak in code.</em></h3><p>I'm a software developer. My workdays are about building things, solving problems, and making the pieces fit.</p><p>But there's a whole other side of me beyond the screen. Travel, food and lifestyle are where my curiosity runs free.</p><span class="chapter-scribble">same curious brain. different open tabs.</span></div>
      </article>
      <div class="chapter-bridge"><span>close a tab.<br>open a little world.</span>${scribble}</div>
      <article class="life-chapter travel-chapter" id="the-detours">
        <div class="chapter-visual"><figure class="chapter-film landscape-film">${video("river-bends")}<figcaption>PLAY ${durationLabel("river-bends")} / the scenic route, in motion.</figcaption></figure><figure class="photo-print travel-inset">${image("2232", { sizes: "240px" })}<figcaption>no rush to be anywhere else.</figcaption></figure></div>
        <div class="chapter-copy"><span class="eyebrow">03 / BEYOND THE SCREEN</span><h3>The world<br><em>keeps calling.</em></h3><p>And I keep finding reasons to go. A winding river. An unfamiliar street. A view that makes the early start feel worth it.</p><p>Near or far, I want to know what a place feels like—not just what it looks like on a map.</p><button class="story-text-link" data-project="boat">Come a little further ${arrow}</button><span class="chapter-scribble">little me would approve of this detour.</span></div>
      </article>
      ${cityPages()}
      <aside class="evening-interlude">
        <figure class="chapter-film">${video("city-after-dark")}<figcaption>PLAY ${durationLabel("city-after-dark")} / a city, after dark.</figcaption></figure>
        <div><span class="eyebrow">AND SOMETIMES...</span><p>“Just one more stop”<br>becomes the best<br><em>part of the day.</em></p><span class="handwritten">I blame the lights.</span>${star()}</div>
      </aside>
      <article class="life-chapter food-chapter" id="at-the-table">
        <div class="chapter-visual food-visual"><figure class="chapter-film food-film">${video("something-sweet")}<figcaption>PLAY ${durationLabel("something-sweet")} / a sweet little detour.</figcaption></figure><figure class="photo-print food-inset">${image("1447", { sizes: "240px" })}<figcaption>room for one more?</figcaption></figure></div>
        <div class="chapter-copy"><span class="eyebrow">04 / FOLLOW THE APPETITE</span><h3>A place makes<br><em>more sense over food.</em></h3><p>The street-side stops. The first bite of something new. The café where a quick coffee turns into a whole afternoon.</p><p>Food is never a separate part of the journey for me. It's how I settle into it.</p><button class="story-text-link" data-project="table">Pull up a chair ${arrow}</button><span class="chapter-scribble">a very important part of my research.</span></div>
      </article>
      <div class="chapter-bridge"><span>but life isn't<br>only the big trips...</span>${scribble}</div>
      <article class="life-chapter everyday-chapter" id="little-things">
        <div class="chapter-visual"><figure class="chapter-film landscape-film">${video("soft-surf")}<figcaption>PLAY ${durationLabel("soft-surf")} / nowhere else I need to be.</figcaption></figure><div class="everyday-details"><figure class="photo-print">${image("1328", { sizes: "180px" })}<figcaption>a little ritual.</figcaption></figure><figure class="photo-print">${image("2039", { sizes: "180px" })}<figcaption>a little good light.</figcaption></figure></div></div>
        <div class="chapter-copy"><span class="eyebrow">05 / THE LIFE IN BETWEEN</span><h3>Not every story<br><em>needs a suitcase.</em></h3><p>A good cup. Light through the trees. A moment with no particular plan. I want to notice those things, too.</p><p>That's the thread through all of this: less about collecting places, more about paying attention.</p><button class="story-text-link" data-project="quiet">Stay for the little things ${arrow}</button><span class="chapter-scribble">still curious. still looking around.</span></div>
      </article>
    </div>
    <div class="life-postscript"><button class="little-me-button" data-action="little-joy" aria-label="Tap little Ketki for a curious thought">${littleExplorer()}<span>little me has a thought. tap!</span></button><div><span class="eyebrow">SOME THINGS NEVER REALLY CHANGE</span><p id="little-joy-note" aria-live="polite">${littleJoys[littleJoy]}</p></div>${travelBuddy}</div>
  </div></section>`;
}

function filteredMemories() {
  return memoryOrder.filter(memory => memoryFilter === "all" || memory.type === memoryFilter);
}

function memoryTiles() {
  return filteredMemories().slice(0, 3).map(memory => `<button class="camera-tile" data-project="${memory.project}" data-photo="${memory.photo}" aria-label="Open ${memory.title}">
    ${image(memory.photo)}<span class="heart" aria-hidden="true">♡</span><span class="tile-caption"><strong>${memory.title}</strong><small>${memory.detail}</small></span>
  </button>`).join("");
}

function memoriesSection() {
  return `<section class="memory-pages" id="little-repeats" aria-labelledby="memories-title"><div class="wrap">
    <div class="memory-heading"><div><span class="eyebrow">AND THESE ARE THE THINGS I KEEP COMING BACK TO</span><h2 id="memories-title">Little things,<br><em>on repeat.</em></h2><p>The places are different. The things I make room for? Pretty much the same.</p></div>
      <aside class="notes-widget" aria-label="Things I make room for"><div class="widget-top"><span>‹ Notes</span><span aria-hidden="true">↗ ···</span></div><h3>things I make room for:</h3><ul><li>new places & familiar feelings</li><li>really, really good food</li><li>colour in unexpected corners</li><li><mark>the little life in between</mark></li></ul><span class="notes-signoff">a note to myself. and maybe you.</span></aside>
    </div>
    <div class="memory-toolbar"><div class="memory-filters" role="group" aria-label="Filter little memories">${[["all", "All the little things"], ["city", "City & colour"], ["food", "Good taste"], ["lifestyle", "Little life"]].map(([id, label]) => `<button data-memory-filter="${id}" aria-pressed="${memoryFilter === id}" aria-controls="memory-grid">${label}</button>`).join("")}</div><button class="shuffle-button" data-action="shuffle-memories" aria-controls="memory-grid">⇄ Shuffle memories</button></div>
    <div class="camera-grid" id="memory-grid">${memoryTiles()}</div><p class="memory-status" id="memory-status" role="status">3 little memories. Open one and stay a while.</p>
  </div></section>`;
}

function updateMemories() {
  document.querySelector("#memory-grid").innerHTML = memoryTiles();
  const total = filteredMemories().length;
  document.querySelector("#memory-status").textContent = `3 of ${total} little memories. Open one and stay a while.`;
}

function shuffleMemories() {
  const pool = filteredMemories();
  const previous = pool.slice(0, 3).map(memory => memory.photo).join();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  if (pool.slice(0, 3).map(memory => memory.photo).join() === previous) pool.push(pool.shift());
  memoryOrder = [...pool, ...memoryOrder.filter(memory => !pool.includes(memory))];
  updateMemories();
  document.querySelector("#memory-status").textContent = "Three fresh little memories, shuffled for you.";
}

function questNote() {
  const note = questNotes[activeQuest];
  return `<div class="quest-note-photo">${image(note.photo, { sizes: "(max-width: 760px) 80px, 120px" })}</div><div class="quest-note-copy"><span class="eyebrow">${note.label}</span><h3>${note.title}</h3><p>${note.copy}</p><button class="quest-story-link" data-project="${note.project}" data-photo="${note.photo}">Open this little story ${arrow}</button></div>`;
}

function sideQuestsSection() {
  return `<section class="side-quest-pages" id="happy-detours" aria-labelledby="quests-title"><div class="wrap">
    <header class="side-quest-heading"><span class="eyebrow">THE BEST BITS WEREN'T ON THE ITINERARY</span><h2 id="quests-title">Still taking<br><em>the scenic side quest.</em></h2><p>That's the thing about curiosity: it rarely takes a straight line.<br>Pick a little detour. I'll show you what I mean.</p></header>
    <div class="quest-stage">
      <svg class="quest-route" viewBox="0 0 1020 440" preserveAspectRatio="none" aria-hidden="true"><path d="M140 143C260 36 300 250 465 138S707 38 855 142 680 384 465 330 160 285 140 143" stroke="currentColor" stroke-dasharray="5 8" stroke-width="1.5" fill="none"/></svg>
      <button class="quest-object quest-camera" data-quest="camera" aria-pressed="${activeQuest === "camera"}" aria-controls="quest-notebook">${cameraDrawing}<span class="object-label">01 / FIND THE FRAME ↗</span></button>
      <button class="quest-object quest-postcard" data-quest="postcard" aria-pressed="${activeQuest === "postcard"}" aria-controls="quest-notebook"><span class="postcard-image">${image("2241")}</span><span class="object-label">02 / A POSTCARD FROM MALAYSIA ↗</span></button>
      <button class="quest-object quest-coffee" data-quest="coffee" aria-pressed="${activeQuest === "coffee"}" aria-controls="quest-notebook">${coffeeDrawing}<span class="object-label">03 / STAY FOR A SIP ↗</span></button>
      ${star("quest-spark one")}${star("quest-spark two")}
      <div class="quest-notebook" id="quest-notebook" aria-live="polite" aria-atomic="true">${questNote()}</div>
    </div><p class="quest-postscript">different little detours. the same curious me.</p>
  </div></section>`;
}

function contactLinks() {
  return `<div class="contact-links" aria-label="Contact Ketki"><a href="mailto:ketkifadnavis05@gmail.com"><span class="eyebrow">DROP ME A NOTE</span><span>ketkifadnavis05@gmail.com ${arrow}</span></a><a href="https://www.linkedin.com/in/ketki-fadnavis-b8aa60166" target="_blank" rel="noopener noreferrer"><span class="eyebrow">THE DEVELOPER SIDE OF ME</span><span>Find me on LinkedIn ${arrow}</span><span class="contact-new-tab">opens in a new tab</span></a></div>`;
}

function filteredStories() {
  return Object.entries(projects).filter(([, project]) => storyFilter === "all" || project.type === storyFilter);
}

function collectionCards() {
  const filtered = filteredStories();
  return filtered.slice(0, storiesExpanded ? filtered.length : 6).map(([id, project]) => `<button class="collection-card" data-project="${id}" aria-label="Explore ${project.title}">
    <div class="collection-image">${image(project.photo)}${project.video ? '<span class="collection-format">PHOTO + FILM</span>' : ""}</div>
    <span class="collection-category">${project.label}</span><span class="collection-title">${project.title}${arrow}</span>
  </button>`).join("");
}

function collectionsSection() {
  return `<section class="collections-section wrap" id="more-stories">
    <div class="section-heading"><div><span class="eyebrow">A FEW MORE PAGES, IF YOU'RE CURIOUS</span><h2>The story<br><em>keeps going.</em></h2></div><p>More places, flavors, and little moments from along the way. Wander wherever you like.</p></div>
    <div class="story-toolbar"><div class="story-filters" role="group" aria-label="Filter stories">${[["all", "Everything"], ["travel", "Places"], ["food", "Food"], ["lifestyle", "Everyday life"]].map(([id, title]) => `<button data-filter="${id}" aria-pressed="${id === storyFilter}" aria-controls="collection-grid">${title}</button>`).join("")}</div><span id="story-count" class="eyebrow" role="status"></span></div>
    <div class="collection-grid" id="collection-grid">${collectionCards()}</div>
    <div class="more-stories"><button class="pill" data-action="more-stories" aria-expanded="false" aria-controls="collection-grid">More stories ${arrow}</button></div>
  </section>`;
}

function renderPortfolio() {
  document.querySelector("#portfolio").innerHTML = `<article class="theme scrapbook">
    <div class="wrap"><header class="page-nav">
      <a href="#portfolio" class="wordmark" aria-label="Ketki, portfolio home">Ketki<span aria-hidden="true"> ✳</span><small>stories, near & far</small></a>
      <nav class="nav-links" aria-label="Portfolio navigation"><a href="#selected-work">My story</a><a href="#the-detours">The detours</a><a href="#about-creator">Say hello</a><button class="pill" data-action="collab">Let's create ${arrow}</button></nav>
    </header></div>
    <section class="scrap-hero wrap">
      <div class="scrap-copy"><div class="eyebrow">DEVELOPER BY PROFESSION. EXPLORER AT HEART.</div>
        <h1>same curiosity.<br><em>bigger world.</em></h1>
        <p class="intro">I'm Ketki. I build software, follow my appetite, and find stories around the world. Different sides of me. One ongoing adventure.</p>
        <a class="pill" href="#selected-work">Let me tell you a story ${arrow}</a>
        <a class="hero-little-me" href="#little-me">${littleExplorer()}<span>This curiosity?<br>It started early.</span>${scribble}</a>
      </div>
      <div class="scrap-collage" aria-label="A moving forest moment, a coffee detail and a sweeping coastline">
        <div class="collage-note handwritten">a place. a taste.<br>a little feeling.${scribble}</div>
        <figure class="polaroid primary hero-film">${video("waterfall-pause")}<button class="hero-play" data-action="hero-play" aria-label="Play the waterfall moment" aria-pressed="false">▶ Play moment</button><span class="tape" aria-hidden="true"></span><figcaption class="photo-label">a little pause in the green <span>▶ ${durationLabel("waterfall-pause")}</span></figcaption></figure>
        <button class="polaroid secondary" data-project="cafes" aria-label="Explore café stories">${image("1328", { eager: true })}<span class="photo-label">but first, this.</span></button>
        <button class="polaroid tertiary" data-project="ocean" aria-label="Explore coastal stories">${image("1002", { eager: true })}<span class="tape" aria-hidden="true"></span><span class="photo-label">nowhere else to be</span></button>
        <div class="round-stamp"><span>CURIOUS HEART</span>${star()}<span>STORIES EVERYWHERE</span></div>${star("collage-star")}<span class="scrap-caption">a little of how it felt.</span>
      </div>
    </section>
    <div class="scrap-ticker"><span>Places to get lost in</span><b aria-hidden="true">✳</b><span>Plates to fall in love with</span><b aria-hidden="true">✳</b><span>Stories to take home</span><b aria-hidden="true">✳</b></div>
    ${lifeStory()}${memoriesSection()}${sideQuestsSection()}${collectionsSection()}
    <section class="end-note wrap" id="about-creator">
      <div class="creator-portrait">${image("0987", { sizes: "(max-width: 760px) 160px, 240px" })}</div>
      <div class="creator-story"><div class="eyebrow">THIS IS WHERE THE CHAPTERS MEET</div><h2>Different chapters. Still me.</h2><p>Software developer. Travel, food & lifestyle storyteller. Curious, always.</p>
        <p class="creator-bio">The little explorer, the person behind the laptop, the one stopping for a view or another bite: it's all the same story. I bring that curiosity to the films, photographs and experiences I share—and to the stories I create with others.</p>
        <button class="pill" data-action="collab">Let's create something that feels real ${arrow}</button>
        ${contactLinks()}
      </div>
    </section>
  </article>`;
  updateCollections();
  updateMemories();
}

function updateCollections() {
  document.querySelector("#collection-grid").innerHTML = collectionCards();
  const total = filteredStories().length;
  const shown = storiesExpanded ? total : Math.min(6, total);
  document.querySelector("#story-count").textContent = `${shown} of ${total} stories`;
  const more = document.querySelector('[data-action="more-stories"]');
  more.hidden = total <= 6;
  more.setAttribute("aria-expanded", String(storiesExpanded));
  more.innerHTML = `${storiesExpanded ? "Fewer stories" : "More stories"} ${arrow}`;
}

function showDialog(content, trigger) {
  pauseVideos();
  dialogTrigger = trigger;
  document.querySelector("#dialog-content").innerHTML = content;
  dialog.showModal();
  document.body.style.overflow = "hidden";
}

function showProject(id, trigger) {
  const project = projects[id];
  if (!project) throw new Error(`Unknown portfolio story: ${id}`);
  const lead = trigger.dataset.photo || project.photo;
  const photos = [...new Set([project.photo, ...project.photos])];
  if (!photos.includes(lead)) throw new Error(`Photo ${lead} does not belong to story ${id}`);
  showDialog(`<div class="dialog-photo">${image(lead, { eager: true, sizes: "(max-width: 760px) calc(100vw - 32px), 780px" })}</div><div class="dialog-copy">
    <div class="eyebrow">${project.category} / NEAR & FAR</div><h2 id="dialog-title">${project.title}</h2>
    <p class="journal-personal-note">${personalNotes[id]}</p><p>${project.idea}</p>
    ${project.video ? `<figure class="journal-film">${video(project.video)}<figcaption>${portfolioVideos[project.video].description}. A silent moment from the journey.</figcaption></figure>` : ""}
    <div class="journal-gallery">${photos.filter(photo => photo !== lead).map(photo => `<figure>${image(photo)}<figcaption>${photoLibrary[photo].title}</figcaption></figure>`).join("")}</div>
    <p class="photo-credit" style="margin-top:24px">Original photography and footage from my travels and everyday life.</p>
  </div>`, trigger);
}

function pauseVideos(except = null) {
  document.querySelectorAll("video").forEach(player => {
    if (player !== except) player.pause();
  });
}

document.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.project) return showProject(button.dataset.project, button);
  if (button.dataset.memoryFilter) {
    memoryFilter = button.dataset.memoryFilter;
    document.querySelectorAll("[data-memory-filter]").forEach(item => item.setAttribute("aria-pressed", String(item.dataset.memoryFilter === memoryFilter)));
    updateMemories();
    return;
  }
  if (button.dataset.quest) {
    activeQuest = button.dataset.quest;
    document.querySelectorAll("[data-quest]").forEach(item => item.setAttribute("aria-pressed", String(item.dataset.quest === activeQuest)));
    document.querySelector("#quest-notebook").innerHTML = questNote();
    return;
  }
  if (button.dataset.filter) {
    storyFilter = button.dataset.filter;
    storiesExpanded = false;
    document.querySelectorAll("[data-filter]").forEach(item => item.setAttribute("aria-pressed", String(item.dataset.filter === storyFilter)));
    updateCollections();
    return;
  }
  if (button.dataset.action === "hero-play") {
    const player = button.closest(".hero-film").querySelector("video");
    if (!player) return;
    if (!player.paused) player.pause();
    else player.play().catch(error => {
      if (error instanceof DOMException && error.name === "AbortError" && player.paused) return;
      console.error("Could not start the waterfall moment:", error);
      const notice = document.createElement("p");
      notice.className = "play-error";
      notice.setAttribute("role", "alert");
      notice.textContent = "Playback could not start. Please try the video controls or refresh the page.";
      button.parentElement.querySelector(".play-error")?.remove();
      button.after(notice);
    });
  } else if (button.dataset.action === "shuffle-memories") {
    shuffleMemories();
  } else if (button.dataset.action === "more-stories") {
    storiesExpanded = !storiesExpanded;
    updateCollections();
  } else if (button.dataset.action === "little-joy") {
    littleJoy = (littleJoy + 1) % littleJoys.length;
    document.querySelector("#little-joy-note").textContent = littleJoys[littleJoy];
  } else if (button.dataset.action === "close-dialog") {
    dialog.close();
  } else if (button.dataset.action === "collab") {
    showDialog(`<div class="dialog-copy"><div class="eyebrow">FOR PLACES, PLATES & EVERYDAY WONDERS</div><h2 id="dialog-title">Let's tell a good story.</h2><p>Thoughtful travel, food and lifestyle content with a real sense of being there.</p><div class="dialog-facts"><div><strong>In motion</strong><span>Short-form UGC<br>Travel & experience films<br>Food-led storytelling</span></div><div><strong>In the frame</strong><span>Photography<br>Places & stays<br>Everyday lifestyle</span></div></div>${contactLinks()}<p class="contact-note">A place, a plate, a little idea? Send it my way. The email link opens your mail app; LinkedIn opens my profile.</p></div>`, button);
  }
});

document.addEventListener("play", event => {
  if (event.target instanceof HTMLVideoElement) {
    pauseVideos(event.target);
    syncHeroControl(event.target);
  }
}, true);
function syncHeroControl(player) {
  const hero = player.closest(".hero-film");
  if (!hero) return;
  const playing = !player.paused && !player.ended;
  hero.classList.toggle("is-playing", playing);
  const button = hero.querySelector(".hero-play");
  button.textContent = playing ? "Ⅱ Pause moment" : "▶ Play moment";
  button.setAttribute("aria-pressed", String(playing));
  button.setAttribute("aria-label", `${playing ? "Pause" : "Play"} the waterfall moment`);
}
["pause", "ended"].forEach(type => document.addEventListener(type, event => {
  if (event.target instanceof HTMLVideoElement) syncHeroControl(event.target);
}, true));
document.addEventListener("visibilitychange", () => {
  if (document.hidden) pauseVideos();
});
const visibilityObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting && !dialog.open) entry.target.pause();
  });
});

dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener("close", () => {
  pauseVideos();
  document.body.style.overflow = "";
  if (dialogTrigger?.isConnected) dialogTrigger.focus({ preventScroll: true });
  document.querySelector("#dialog-content").replaceChildren();
});
document.addEventListener("error", event => {
  const target = event.target;
  const player = target instanceof HTMLSourceElement ? target.closest("video") : target;
  if (!(player instanceof HTMLImageElement || player instanceof HTMLVideoElement) || !player.isConnected) return;
  const isVideo = player instanceof HTMLVideoElement;
  const notice = document.createElement("span");
  notice.className = "photo-error";
  notice.setAttribute("role", "alert");
  notice.textContent = `This ${isVideo ? "video" : "photograph"} could not be loaded. Please refresh the page.`;
  console.error("Portfolio media could not be loaded:", player.currentSrc || player.src || target.src);
  const playButton = player.closest(".hero-film")?.querySelector(".hero-play");
  if (playButton) playButton.hidden = true;
  player.replaceWith(notice);
}, true);

const canonicalUrl = new URL(location.href);
if (canonicalUrl.searchParams.has("theme")) {
  canonicalUrl.searchParams.delete("theme");
  history.replaceState(null, "", canonicalUrl);
}
renderPortfolio();
document.querySelectorAll("main video").forEach(player => visibilityObserver.observe(player));
const journey = document.querySelector(".life-chapters");
const wanderer = document.querySelector(".wandering-me");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let journeyFrame = null;
function updateWanderer() {
  journeyFrame = null;
  if (reducedMotion.matches || getComputedStyle(wanderer.parentElement).display === "none") {
    wanderer.style.transform = "";
    return;
  }
  const bounds = journey.getBoundingClientRect();
  const offset = Math.min(bounds.height - wanderer.offsetHeight, Math.max(0, innerHeight * 0.55 - bounds.top));
  wanderer.style.transform = `translateY(${offset}px) rotate(${Math.sin(offset / 140) * 4}deg)`;
}
function scheduleWanderer() {
  if (journeyFrame === null) journeyFrame = requestAnimationFrame(updateWanderer);
}
window.addEventListener("scroll", scheduleWanderer, { passive: true });
window.addEventListener("resize", scheduleWanderer);
reducedMotion.addEventListener("change", scheduleWanderer);
scheduleWanderer();
if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
