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

const storyChapters = [
  { id: "little-me", label: "Little me", icon: "curiosity" },
  { id: "developer-life", label: "Code & coffee", icon: "laptop" },
  { id: "the-detours", label: "The detours", icon: "mountain" },
  { id: "at-the-table", label: "At the table", icon: "coffee" },
  { id: "little-things", label: "Little joys", icon: "leaf" },
];

function chapterIcon(kind) {
  const drawings = {
    curiosity: '<circle cx="12" cy="12" r="8"/><path d="M5 7c4 0 6 4 6 9m4-12c-4 5-3 11 3 14M4 14c4-5 11-6 16-3"/>',
    laptop: '<rect x="4" y="4" width="16" height="12" rx="2"/><path d="m2 20 2-4h16l2 4H2m7-12-2 2 2 2m6-4 2 2-2 2"/>',
    mountain: '<path d="m2 20 8-15 7 15H2m12-7 3-6 5 13h-5M7 11l3 2 3-2"/><circle cx="19" cy="4" r="2"/>',
    coffee: '<path d="M4 9h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9m13 1h2a3 3 0 0 1 0 6h-2M8 2c-3 3 3 3 0 5m5-5c-3 3 3 3 0 5"/>',
    leaf: '<path d="M20 3C6 2 1 9 6 16S22 15 20 3ZM3 22 16 8m-9 9v-6m5 1h5"/>',
    city: '<path d="M3 21V7h7v14m0 0V3h10v18H3m3-10h1m-1 4h1m7-11h2m-2 4h2m-2 4h2m-2 4h2"/>',
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${drawings[kind]}</svg>`;
}

function illustratedWorld() {
  return `<svg class="world-art" viewBox="0 0 1320 680" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="world-sky" x2="0" y2="680" gradientUnits="userSpaceOnUse"><stop stop-color="#deece9"/><stop offset=".7" stop-color="#f5efda"/></linearGradient>
      <linearGradient id="world-water" x1="950" y1="400" x2="1150" y2="680" gradientUnits="userSpaceOnUse"><stop stop-color="#abd0cf"/><stop offset="1" stop-color="#84b4b9"/></linearGradient>
      <pattern id="world-grain" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r=".65" fill="#56452d" opacity=".09"/><circle cx="6" cy="6" r=".4" fill="#fffaf0" opacity=".6"/></pattern>
    </defs>
    <path fill="url(#world-sky)" d="M0 0h1320v680H0z"/>
    <circle class="world-sun" cx="1100" cy="105" r="52" fill="#edb76b"/><circle cx="1100" cy="105" r="65" stroke="#edb76b" stroke-dasharray="2 13"/>
    <g class="world-cloud cloud-one" fill="#fffcf2"><path d="M244 101c-22-25-57-10-56 10-25-7-41 18-28 29h144c23-18-2-43-24-32-5-16-26-22-36-7Z"/></g>
    <g class="world-cloud cloud-two" fill="#fffcf2"><path d="M790 77c-10-24-45-26-54-2-23-12-47 5-39 21h132c18-15-8-39-28-24-1-1-6 0-11 5Z"/></g>
    <g stroke="#687d72" stroke-width="2.5" stroke-linecap="round"><path d="M869 145q9-10 18 0 9-10 18 0m42 23q7-8 14 0 7-8 14 0"/></g>
    <path d="m234 334 130-183 124 183" fill="#a8bca5"/><path d="m364 151-35 49 30-8 23 20 14-14Z" fill="#f8f4e7"/>
    <path d="m347 355 161-229 169 229" fill="#829f92"/><path d="m508 126-48 68 40-17 26 25 23-20Z" fill="#faf7ec"/>
    <path d="M0 346C162 231 318 294 464 339s252-128 422-78 259 3 434-41v460H0Z" fill="#c5d0ad"/>
    <path d="M0 454C164 320 316 381 456 406s192-111 375-55 300 4 489-47v376H0Z" fill="#a5bb92"/>
    <path d="M0 560C146 447 240 504 393 509s175-73 355-25 210-6 349-78 177-38 223-32v306H0Z" fill="#d5d8b4"/>
    <path d="M723 302c-107 41 72 77-12 116-85 40-77 78 45 111l116 151h225c-72-53-72-96-192-133-118-35-208-51-154-91 104-79-91-96-28-154Z" fill="#b9d5d1"/>
    <path d="M1320 412c-95-43-210-16-226 70-16 88-111 73-169 95-74 28-49 67-73 103h468Z" fill="#f3deb0"/>
    <path d="M1320 450c-121-54-183 18-193 65-15 67-101 66-151 91-49 24-43 51-53 74h397Z" fill="url(#world-water)"/>
    <g stroke="#e1eeea" stroke-width="2.5" stroke-linecap="round"><path d="M1192 518q22 10 44 0m-134 95q24 10 49 0m41-38q29 10 54 0m-81 75q24 10 51 0"/></g>
    <path d="M165 588c-68-42-10-95 76-115s205 54 244 10-8-74 48-96 64 51 116 80 113 81 198 63 167 7 224 52" stroke="#eee1bb" stroke-width="35" stroke-linecap="round"/>
    <path class="world-route-line" d="M165 588c-68-42-10-95 76-115s205 54 244 10-8-74 48-96 64 51 116 80 113 81 198 63 167 7 224 52" stroke="#9a8260" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 9"/>
    <g class="world-trees" fill="#769774" stroke="#66836a" stroke-width="2">
      <path d="m89 301-39 94h78Zm40 20-31 76h62Zm442-26-27 69h54Zm-437 143-39 91h77Zm713-170-31 76h62Z"/>
      <path d="M89 375v43m40-36v31m442-60v30m-437 139v24m713-212v27" stroke="#867858" stroke-width="6"/>
    </g>
    <g transform="translate(211 370)" stroke="#6a705c" stroke-width="2" stroke-linejoin="round">
      <path d="M0 51 77 0l79 51" fill="#b77961"/><path d="M12 49h132v108H12Z" fill="#f5e9c9"/>
      <path d="M144 157h18V63l-18-14Z" fill="#d8cba9"/><path d="M12 49h132v13H12Z" fill="#a96c59"/>
      <path d="M28 78h38v37H28Zm65 0h32v37H93Z" fill="#a4bec1"/>
      <path d="M47 78v37m-19-18h38m43-19v37m-16-18h32" stroke="#fffae9"/>
      <path d="M62 123h39v34H62Z" fill="#7f9a8e"/><circle cx="93" cy="140" r="2" fill="#f7db93"/>
      <path d="M91 2v-22h18v33" fill="#d6b48c"/><path d="M85-20h30" stroke-width="5"/>
      <path d="M53 43h50" stroke="#f6d8a4" stroke-width="4"/>
      <path d="M97-41c-16-13 9-15-2-29" stroke="#fef9ec" stroke-width="9" stroke-linecap="round"/>
    </g>
    <g class="world-balloon" transform="translate(615 120)">
      <path d="M-21 7c-43-48 2-87 35-64 26 20 10 52-4 64Z" fill="#c98670"/>
      <path d="M-10 7c-21-48-2-80 13-68C18-39 11-9 1 7Z" fill="#edcf96"/>
      <path d="m-17 10 5 16m18-16-5 16" stroke="#847257" stroke-width="2"/><path d="M-13 26H3l-2 13h-12Z" fill="#967e5f"/>
    </g>
    <g transform="translate(575 340)" stroke="#79654e" stroke-width="2" stroke-linejoin="round">
      <path d="M0 45 75 5l75 40" fill="#8d9e82"/><path d="M9 43h132v124H9Z" fill="#f8e7bd"/>
      <path d="M18 69h114l12 25H6Z" fill="#ce8673"/><path d="m29 69-3 25m31-25-1 25m30-25 3 25m21-25 7 25" stroke="#fae7c0" stroke-width="13"/>
      <path d="M23 107h45v40H23Zm65-1h35v61H88Z" fill="#b4c8bd"/><path d="M45 107v40m-22-20h45" stroke="#fff7df"/>
      <rect x="36" y="37" width="77" height="22" rx="3" fill="#fbf3dd"/>
      <path d="M56 48h36m-29-5v10m10-10v10m10-10v10" stroke="#b88164"/>
      <path d="M-20 174h61m-31-32v32m-11-31h22" stroke="#8c7b5a" stroke-width="4"/>
      <ellipse cx="10" cy="141" rx="25" ry="6" fill="#ebd9ae"/>
      <path d="M-8 121h12v12H-8Z" fill="#c98670"/><path d="M4 123c9-2 9 8 0 8"/>
      <path d="M110 153h43v14h-43Z" fill="#9baf7f"/><path d="m116 153 5-16 6 16 7-20 6 20" stroke="#6d8a6d" stroke-width="4"/>
    </g>
    <g transform="translate(912 224)" stroke="#7c7669" stroke-width="2" stroke-linejoin="round">
      <path d="M0 76h58v143H0Z" fill="#e5bd92"/><path d="M58 28h62v191H58Z" fill="#b6b7c4"/>
      <path d="M120 106h78v113h-78Z" fill="#e6c8a4"/><path d="M198 57h54v162h-54Z" fill="#a7bdb7"/>
      <path d="m56 28 33-25 33 25M209 57V32h31v25" fill="#8f9fa1"/>
      <g stroke="#fff4d9" stroke-width="7"><path d="M15 98h27m-27 23h27m-27 23h27m-27 23h27m-27 23h27M73 53h31M73 79h31M73 105h31M73 131h31M73 157h31M73 183h31m31-55h48m-48 27h48m-48 27h48m30-99h25m-25 27h25m-25 27h25m-25 27h25m-25 27h25"/></g>
      <path d="M132 219v-23h23v23m8 0v-23h23v23" fill="#b17f78"/>
      <path d="M-12 220h280" stroke="#9c9275" stroke-width="5" stroke-linecap="round"/>
    </g>
    <g transform="translate(1146 444)" stroke="#777557" stroke-linecap="round">
      <path d="M0 103C5 58 6 25-4 0" stroke-width="8"/>
      <path d="M-3 4c-29-32-59-9-63 10C-34-2-20 0-3 4Zm0 0c22-38 53-24 65-5C29-10 13-2-3 4Zm0 0c-5-38-29-44-45-31C-21-22-17-7-3 4Zm0 0c18-20 36-1 35 18C19 7 11 6-3 4Z" fill="#7d9d7b" stroke-width="2"/>
      <path d="m-81 96 15-32 26 32m-38-25 22 14m-24 12h51" stroke="#ad8261" stroke-width="4"/>
    </g>
    <g fill="#f6e7b6"><circle cx="398" cy="547" r="5"/><circle cx="410" cy="534" r="4"/><circle cx="386" cy="535" r="4"/><circle cx="816" cy="394" r="4"/><circle cx="828" cy="402" r="5"/></g>
    <path d="M0 0h1320v680H0z" fill="url(#world-grain)"/>
  </svg>`;
}

function worldOpening() {
  const stops = [
    { id: "little-me", name: "Little me", note: "where it all began", icon: "curiosity", className: "world-childhood" },
    { id: "developer-life", name: "Build mode: on", note: "a life in open tabs", icon: "laptop", className: "world-developer" },
    { id: "the-detours", name: "The scenic route", note: "beyond the screen", icon: "mountain", className: "world-travel" },
    { id: "city-colours", name: "A little city colour", note: "look a little closer", icon: "city", className: "world-city" },
    { id: "at-the-table", name: "Stay for a bite", note: "follow your appetite", icon: "coffee", className: "world-food" },
    { id: "little-things", name: "The little in-between", note: "nowhere else to be", icon: "leaf", className: "world-everyday" },
  ];
  return `<section class="world-opening" aria-labelledby="world-title">
    <div class="world-intro wrap"><span class="eyebrow">DEVELOPER BY PROFESSION. EXPLORER AT HEART.</span><h1 id="world-title">same curiosity.<br><em>bigger world.</em></h1><p>I'm Ketki. I build software, follow my appetite, and find stories around the world. This little world? It's made of all those things.</p><a class="pill" href="#little-me">Start at the beginning ${arrow}</a><span class="world-invitation">or take a little detour below ↓</span></div>
    <div class="world-scene" id="curious-world">
      ${illustratedWorld()}
      <div class="world-scene-caption"><span class="eyebrow">A LITTLE MAP OF WHAT MAKES ME, ME</span><span>not to scale. very much to heart.</span></div>
      <figure class="world-film hero-film">${video("waterfall-pause")}<button class="hero-play" data-action="hero-play" aria-label="Play the waterfall moment" aria-pressed="false">▶ Play moment</button><figcaption class="photo-label">a little pause.</figcaption><span class="pencil-tape" aria-hidden="true"></span></figure>
      <nav class="world-stops" aria-label="Explore Ketki's illustrated world">${stops.map((stop, index) => `<a href="#${stop.id}" class="world-stop ${stop.className}">${stop.id === "little-me" ? littleExplorer("world-little-me") : chapterIcon(stop.icon)}<span><small>0${index + 1} / ${stop.note}</small><strong>${stop.name}</strong></span><span class="world-stop-arrow" aria-hidden="true">↗</span></a>`).join("")}</nav>
      <div class="world-scene-footer"><span>different little places. the same curious me.</span><button class="world-motion" data-action="world-motion" aria-pressed="false" aria-controls="curious-world">Ⅱ Pause scene motion</button></div>
    </div>
    <div class="world-paper-edge" aria-hidden="true"></div>
  </section>`;
}

function chapterMap() {
  return `<nav class="chapter-map" aria-label="Life story chapter map"><span class="chapter-map-title">follow the thread ${scribble}</span><ol>${storyChapters.map((chapter, index) => `<li><a href="#${chapter.id}" data-chapter="${chapter.id}"${index === 0 ? ' aria-current="location"' : ""}>${chapterIcon(chapter.icon)}<span><small>0${index + 1}</small>${chapter.label}</span></a></li>`).join("")}</ol></nav>`;
}

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
    ${chapterMap()}
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
    ${worldOpening()}
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
let scenePaused = false;
function syncSceneMotion() {
  const paused = scenePaused || reducedMotion.matches;
  document.querySelector(".world-opening").classList.toggle("motion-paused", paused);
  const control = document.querySelector('[data-action="world-motion"]');
  control.disabled = reducedMotion.matches;
  control.setAttribute("aria-pressed", String(paused));
  control.textContent = reducedMotion.matches ? "Scene motion off · reduced motion" : paused ? "▷ Resume scene motion" : "Ⅱ Pause scene motion";
}
document.querySelector('[data-action="world-motion"]').addEventListener("click", () => {
  scenePaused = !scenePaused;
  syncSceneMotion();
});
reducedMotion.addEventListener("change", syncSceneMotion);
syncSceneMotion();
const chapterLinks = [...document.querySelectorAll("[data-chapter]")];
const chapterSections = storyChapters.map(chapter => document.getElementById(chapter.id));
let journeyFrame = null;
function updateStoryPosition() {
  journeyFrame = null;
  const chapterLine = Math.min(180, innerHeight * .3);
  let currentChapter = chapterSections[0];
  chapterSections.forEach(section => {
    if (section.getBoundingClientRect().top <= chapterLine) currentChapter = section;
  });
  chapterLinks.forEach(link => {
    if (link.dataset.chapter === currentChapter.id) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  if (reducedMotion.matches || getComputedStyle(wanderer.parentElement).display === "none") {
    wanderer.style.transform = "";
    return;
  }
  const bounds = journey.getBoundingClientRect();
  const offset = Math.min(bounds.height - wanderer.offsetHeight, Math.max(0, innerHeight * 0.55 - bounds.top));
  wanderer.style.transform = `translateY(${offset}px) rotate(${Math.sin(offset / 140) * 4}deg)`;
}
function scheduleStoryPosition() {
  if (journeyFrame === null) journeyFrame = requestAnimationFrame(updateStoryPosition);
}
window.addEventListener("scroll", scheduleStoryPosition, { passive: true });
window.addEventListener("resize", scheduleStoryPosition);
reducedMotion.addEventListener("change", scheduleStoryPosition);
scheduleStoryPosition();
if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
