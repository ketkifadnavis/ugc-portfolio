"use strict";

const portfolioPhotos = {
  "1002": {
    "src": "assets/photos/1002-curving-sand-and-blue-sky.jpg",
    "srcset": "assets/photos/1002-curving-sand-and-blue-sky-640w.jpg 640w, assets/photos/1002-curving-sand-and-blue-sky-1280w.jpg 1280w, assets/photos/1002-curving-sand-and-blue-sky.jpg 2048w",
    "width": 2048,
    "height": 1536,
    "alt": "curving sand and blue sky",
    "title": "Meet me where it bends",
    "category": "Hero",
    "position": "50% 50%"
  },
  "1085": {
    "src": "assets/photos/1085-smiling-over-a-cafe-cup.jpg",
    "srcset": "assets/photos/1085-smiling-over-a-cafe-cup-640w.jpg 640w, assets/photos/1085-smiling-over-a-cafe-cup-1280w.jpg 1280w, assets/photos/1085-smiling-over-a-cafe-cup.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "smiling over a cafe cup",
    "title": "A little cafe happiness",
    "category": "Lifestyle",
    "position": "50% 50%"
  },
  "1114": {
    "src": "assets/photos/1114-colorful-canopy-walk.jpg",
    "srcset": "assets/photos/1114-colorful-canopy-walk-640w.jpg 640w, assets/photos/1114-colorful-canopy-walk-1280w.jpg 1280w, assets/photos/1114-colorful-canopy-walk.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "colorful canopy walk",
    "title": "Main character, tiny in the frame",
    "category": "Travel",
    "position": "50% 50%"
  },
  "1182": {
    "src": "assets/photos/1182-pastel-surf-and-green-dress.jpg",
    "srcset": "assets/photos/1182-pastel-surf-and-green-dress-640w.jpg 640w, assets/photos/1182-pastel-surf-and-green-dress-1280w.jpg 1280w, assets/photos/1182-pastel-surf-and-green-dress.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "pastel surf and green dress",
    "title": "Soft days, salt air",
    "category": "Portraits",
    "position": "50% 58%"
  },
  "1234": {
    "src": "assets/photos/1234-natural-dining-candid.jpg",
    "srcset": "assets/photos/1234-natural-dining-candid-640w.jpg 640w, assets/photos/1234-natural-dining-candid-1280w.jpg 1280w, assets/photos/1234-natural-dining-candid.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "natural dining candid",
    "title": "Actually enjoying the assignment",
    "category": "Lifestyle",
    "position": "50% 50%"
  },
  "1252": {
    "src": "assets/photos/1252-colorful-plate-on-marble.jpg",
    "srcset": "assets/photos/1252-colorful-plate-on-marble-640w.jpg 640w, assets/photos/1252-colorful-plate-on-marble.jpg 1154w",
    "width": 1154,
    "height": 2048,
    "alt": "colorful plate on marble",
    "title": "Order this for the plot",
    "category": "Food",
    "position": "50% 50%"
  },
  "1295": {
    "src": "assets/photos/1295-coastline-from-thatched-overlook.jpg",
    "srcset": "assets/photos/1295-coastline-from-thatched-overlook-640w.jpg 640w, assets/photos/1295-coastline-from-thatched-overlook-1280w.jpg 1280w, assets/photos/1295-coastline-from-thatched-overlook.jpg 2048w",
    "width": 2048,
    "height": 1536,
    "alt": "coastline from thatched overlook",
    "title": "The long way to sunset",
    "category": "Travel",
    "position": "50% 50%"
  },
  "1297": {
    "src": "assets/photos/1297-portrait-framed-by-rock-arch.jpg",
    "srcset": "assets/photos/1297-portrait-framed-by-rock-arch-640w.jpg 640w, assets/photos/1297-portrait-framed-by-rock-arch-1280w.jpg 1280w, assets/photos/1297-portrait-framed-by-rock-arch.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "portrait framed by rock arch",
    "title": "Naturally framed",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "1309": {
    "src": "assets/photos/1309-sunlit-resort-pool.jpg",
    "srcset": "assets/photos/1309-sunlit-resort-pool-640w.jpg 640w, assets/photos/1309-sunlit-resort-pool-1280w.jpg 1280w, assets/photos/1309-sunlit-resort-pool.jpg 2048w",
    "width": 2048,
    "height": 1536,
    "alt": "sunlit resort pool",
    "title": "Poolside state of mind",
    "category": "Travel",
    "position": "50% 50%"
  },
  "1328": {
    "src": "assets/photos/1328-latte-art-in-blue-cup.jpg",
    "srcset": "assets/photos/1328-latte-art-in-blue-cup-640w.jpg 640w, assets/photos/1328-latte-art-in-blue-cup.jpg 1152w",
    "width": 1152,
    "height": 2048,
    "alt": "latte art in blue cup",
    "title": "Coffee deserves a close-up",
    "category": "Food",
    "position": "50% 50%"
  },
  "1362": {
    "src": "assets/photos/1362-sunflowers-and-golden-light.jpg",
    "srcset": "assets/photos/1362-sunflowers-and-golden-light-640w.jpg 640w, assets/photos/1362-sunflowers-and-golden-light-1280w.jpg 1280w, assets/photos/1362-sunflowers-and-golden-light.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "sunflowers and golden light",
    "title": "A little sunshine, personally",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "1392": {
    "src": "assets/photos/1392-looking-into-the-aquarium.jpg",
    "srcset": "assets/photos/1392-looking-into-the-aquarium-640w.jpg 640w, assets/photos/1392-looking-into-the-aquarium-1280w.jpg 1280w, assets/photos/1392-looking-into-the-aquarium.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "looking into the aquarium",
    "title": "Blue, completely",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "1429": {
    "src": "assets/photos/1429-carved-stone-ceiling.jpg",
    "srcset": "assets/photos/1429-carved-stone-ceiling-640w.jpg 640w, assets/photos/1429-carved-stone-ceiling-1280w.jpg 1280w, assets/photos/1429-carved-stone-ceiling.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "carved stone ceiling",
    "title": "The ceiling is the story",
    "category": "Details",
    "position": "50% 50%"
  },
  "1447": {
    "src": "assets/photos/1447-colorful-regional-thali.jpg",
    "srcset": "assets/photos/1447-colorful-regional-thali-640w.jpg 640w, assets/photos/1447-colorful-regional-thali-1280w.jpg 1280w, assets/photos/1447-colorful-regional-thali.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "colorful regional thali",
    "title": "A little bit of everything",
    "category": "Food",
    "position": "50% 50%"
  },
  "1461": {
    "src": "assets/photos/1461-misty-mountain-layers.jpg",
    "srcset": "assets/photos/1461-misty-mountain-layers-640w.jpg 640w, assets/photos/1461-misty-mountain-layers-1280w.jpg 1280w, assets/photos/1461-misty-mountain-layers.jpg 2048w",
    "width": 2048,
    "height": 1536,
    "alt": "misty mountain layers",
    "title": "Layers of quiet",
    "category": "Travel",
    "position": "50% 50%"
  },
  "1468": {
    "src": "assets/photos/1468-symmetrical-restaurant-interior.jpg",
    "srcset": "assets/photos/1468-symmetrical-restaurant-interior-640w.jpg 640w, assets/photos/1468-symmetrical-restaurant-interior-1280w.jpg 1280w, assets/photos/1468-symmetrical-restaurant-interior.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "symmetrical restaurant interior",
    "title": "Before the first bite",
    "category": "Details",
    "position": "50% 50%"
  },
  "1480": {
    "src": "assets/photos/1480-white-blouse-in-lush-garden.jpg",
    "srcset": "assets/photos/1480-white-blouse-in-lush-garden-640w.jpg 640w, assets/photos/1480-white-blouse-in-lush-garden-1280w.jpg 1280w, assets/photos/1480-white-blouse-in-lush-garden.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "white blouse in lush garden",
    "title": "An easy kind of introduction",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "1671": {
    "src": "assets/photos/1671-observation-capsule-city-portrait.jpg",
    "srcset": "assets/photos/1671-observation-capsule-city-portrait-640w.jpg 640w, assets/photos/1671-observation-capsule-city-portrait-1280w.jpg 1280w, assets/photos/1671-observation-capsule-city-portrait.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "observation capsule city portrait",
    "title": "City, seen differently",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "1685": {
    "src": "assets/photos/1685-smiling-on-a-city-walkway.jpg",
    "srcset": "assets/photos/1685-smiling-on-a-city-walkway-640w.jpg 640w, assets/photos/1685-smiling-on-a-city-walkway-1280w.jpg 1280w, assets/photos/1685-smiling-on-a-city-walkway.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "smiling on a city walkway",
    "title": "A city walk and a good mood",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "1707": {
    "src": "assets/photos/1707-ice-cream-and-wafer-close-up.jpg",
    "srcset": "assets/photos/1707-ice-cream-and-wafer-close-up-640w.jpg 640w, assets/photos/1707-ice-cream-and-wafer-close-up-1280w.jpg 1280w, assets/photos/1707-ice-cream-and-wafer-close-up.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "ice cream and wafer close up",
    "title": "A very necessary pit stop",
    "category": "Food",
    "position": "50% 50%"
  },
  "1735": {
    "src": "assets/photos/1735-waterfront-gardens-from-above.jpg",
    "srcset": "assets/photos/1735-waterfront-gardens-from-above-640w.jpg 640w, assets/photos/1735-waterfront-gardens-from-above-1280w.jpg 1280w, assets/photos/1735-waterfront-gardens-from-above.jpg 2048w",
    "width": 2048,
    "height": 1536,
    "alt": "waterfront gardens from above",
    "title": "A different perspective",
    "category": "Travel",
    "position": "50% 50%"
  },
  "1778": {
    "src": "assets/photos/1778-illuminated-garden-structures.jpg",
    "srcset": "assets/photos/1778-illuminated-garden-structures-640w.jpg 640w, assets/photos/1778-illuminated-garden-structures-1280w.jpg 1280w, assets/photos/1778-illuminated-garden-structures.jpg 2048w",
    "width": 2048,
    "height": 1536,
    "alt": "illuminated garden structures",
    "title": "The city lights up",
    "category": "Travel",
    "position": "50% 50%"
  },
  "1834": {
    "src": "assets/photos/1834-red-sweater-beside-green-lake.jpg",
    "srcset": "assets/photos/1834-red-sweater-beside-green-lake-640w.jpg 640w, assets/photos/1834-red-sweater-beside-green-lake-1280w.jpg 1280w, assets/photos/1834-red-sweater-beside-green-lake.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "red sweater beside green lake",
    "title": "A very good contrast",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "1952": {
    "src": "assets/photos/1952-red-street-food-cart.jpg",
    "srcset": "assets/photos/1952-red-street-food-cart-640w.jpg 640w, assets/photos/1952-red-street-food-cart-1280w.jpg 1280w, assets/photos/1952-red-street-food-cart.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "red street food cart",
    "title": "Follow the street-food trail",
    "category": "Details",
    "position": "50% 50%"
  },
  "1961": {
    "src": "assets/photos/1961-red-outfit-by-arched-windows.jpg",
    "srcset": "assets/photos/1961-red-outfit-by-arched-windows-640w.jpg 640w, assets/photos/1961-red-outfit-by-arched-windows-1280w.jpg 1280w, assets/photos/1961-red-outfit-by-arched-windows.jpg 1844w",
    "width": 1844,
    "height": 2048,
    "alt": "red outfit by arched windows",
    "title": "Good light, good corners",
    "category": "Lifestyle",
    "position": "50% 50%"
  },
  "2002": {
    "src": "assets/photos/2002-colorful-painted-doorway.jpg",
    "srcset": "assets/photos/2002-colorful-painted-doorway-640w.jpg 640w, assets/photos/2002-colorful-painted-doorway-1280w.jpg 1280w, assets/photos/2002-colorful-painted-doorway.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "colorful painted doorway",
    "title": "A doorway with personality",
    "category": "Details",
    "position": "50% 50%"
  },
  "2010": {
    "src": "assets/photos/2010-fried-rice-and-egg.jpg",
    "srcset": "assets/photos/2010-fried-rice-and-egg-640w.jpg 640w, assets/photos/2010-fried-rice-and-egg-1280w.jpg 1280w, assets/photos/2010-fried-rice-and-egg.jpg 2048w",
    "width": 2048,
    "height": 1536,
    "alt": "fried rice and egg",
    "title": "Comfort, plated",
    "category": "Food",
    "position": "50% 50%"
  },
  "2039": {
    "src": "assets/photos/2039-golden-light-through-the-forest.jpg",
    "srcset": "assets/photos/2039-golden-light-through-the-forest-640w.jpg 640w, assets/photos/2039-golden-light-through-the-forest-1280w.jpg 1280w, assets/photos/2039-golden-light-through-the-forest.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "golden light through the forest",
    "title": "Light finds a way",
    "category": "Details",
    "position": "50% 50%"
  },
  "2191": {
    "src": "assets/photos/2191-waterfall-portrait.jpg",
    "srcset": "assets/photos/2191-waterfall-portrait-640w.jpg 640w, assets/photos/2191-waterfall-portrait-1280w.jpg 1280w, assets/photos/2191-waterfall-portrait.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "waterfall portrait",
    "title": "A little waterfall energy",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "2232": {
    "src": "assets/photos/2232-golden-bay-and-islands.jpg",
    "srcset": "assets/photos/2232-golden-bay-and-islands-640w.jpg 640w, assets/photos/2232-golden-bay-and-islands-1280w.jpg 1280w, assets/photos/2232-golden-bay-and-islands.jpg 2048w",
    "width": 2048,
    "height": 1536,
    "alt": "golden bay and islands",
    "title": "Golden hour, no rush",
    "category": "Hero",
    "position": "50% 50%"
  },
  "2277": {
    "src": "assets/photos/2277-cafe-portrait-through-a-window.jpg",
    "srcset": "assets/photos/2277-cafe-portrait-through-a-window-640w.jpg 640w, assets/photos/2277-cafe-portrait-through-a-window-1280w.jpg 1280w, assets/photos/2277-cafe-portrait-through-a-window.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "cafe portrait through a window",
    "title": "A seat by the window",
    "category": "Lifestyle",
    "position": "50% 50%"
  },
  "2324": {
    "src": "assets/photos/2324-noodle-bowl-on-warm-wood.jpg",
    "srcset": "assets/photos/2324-noodle-bowl-on-warm-wood-640w.jpg 640w, assets/photos/2324-noodle-bowl-on-warm-wood.jpg 1152w",
    "width": 1152,
    "height": 2048,
    "alt": "noodle bowl on warm wood",
    "title": "A bowl, a whole mood",
    "category": "Food",
    "position": "50% 56%"
  },
  "2358": {
    "src": "assets/photos/2358-portrait-under-pink-blossoms.jpg",
    "srcset": "assets/photos/2358-portrait-under-pink-blossoms-640w.jpg 640w, assets/photos/2358-portrait-under-pink-blossoms-1280w.jpg 1280w, assets/photos/2358-portrait-under-pink-blossoms.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "portrait under pink blossoms",
    "title": "Pink skies, almost",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "2384": {
    "src": "assets/photos/2384-aquarium-and-silhouettes.jpg",
    "srcset": "assets/photos/2384-aquarium-and-silhouettes-640w.jpg 640w, assets/photos/2384-aquarium-and-silhouettes-1280w.jpg 1280w, assets/photos/2384-aquarium-and-silhouettes.jpg 2048w",
    "width": 2048,
    "height": 1536,
    "alt": "aquarium and silhouettes",
    "title": "A world in blue",
    "category": "Travel",
    "position": "50% 50%"
  },
  "2397": {
    "src": "assets/photos/2397-mint-outfit-and-yellow-facade.jpg",
    "srcset": "assets/photos/2397-mint-outfit-and-yellow-facade-640w.jpg 640w, assets/photos/2397-mint-outfit-and-yellow-facade-1280w.jpg 1280w, assets/photos/2397-mint-outfit-and-yellow-facade.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "mint outfit and yellow facade",
    "title": "Mint condition",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "2453": {
    "src": "assets/photos/2453-relaxed-outdoor-swing-portrait.jpg",
    "srcset": "assets/photos/2453-relaxed-outdoor-swing-portrait-640w.jpg 640w, assets/photos/2453-relaxed-outdoor-swing-portrait-1280w.jpg 1280w, assets/photos/2453-relaxed-outdoor-swing-portrait.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "relaxed outdoor swing portrait",
    "title": "The slow-life assignment",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "2523": {
    "src": "assets/photos/2523-looking-out-over-the-valley.jpg",
    "srcset": "assets/photos/2523-looking-out-over-the-valley-640w.jpg 640w, assets/photos/2523-looking-out-over-the-valley-1280w.jpg 1280w, assets/photos/2523-looking-out-over-the-valley.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "looking out over the valley",
    "title": "Worth the pause",
    "category": "Travel",
    "position": "50% 50%"
  },
  "2525": {
    "src": "assets/photos/2525-quiet-riverside-swing.jpg",
    "srcset": "assets/photos/2525-quiet-riverside-swing-640w.jpg 640w, assets/photos/2525-quiet-riverside-swing-1280w.jpg 1280w, assets/photos/2525-quiet-riverside-swing.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "quiet riverside swing",
    "title": "Do not disturb this moment",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "2548": {
    "src": "assets/photos/2548-pink-outfit-at-tea-gardens.jpg",
    "srcset": "assets/photos/2548-pink-outfit-at-tea-gardens-640w.jpg 640w, assets/photos/2548-pink-outfit-at-tea-gardens-1280w.jpg 1280w, assets/photos/2548-pink-outfit-at-tea-gardens.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "pink outfit at tea gardens",
    "title": "Pink meets a thousand greens",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "0548": {
    "src": "assets/photos/0548-river-through-rice-valley.jpg",
    "srcset": "assets/photos/0548-river-through-rice-valley-640w.jpg 640w, assets/photos/0548-river-through-rice-valley-1280w.jpg 1280w, assets/photos/0548-river-through-rice-valley.jpg 2048w",
    "width": 2048,
    "height": 1152,
    "alt": "river through rice valley",
    "title": "The scenic route",
    "category": "Hero",
    "position": "50% 50%"
  },
  "0590": {
    "src": "assets/photos/0590-sunset-over-misty-forest.jpg",
    "srcset": "assets/photos/0590-sunset-over-misty-forest-640w.jpg 640w, assets/photos/0590-sunset-over-misty-forest-1280w.jpg 1280w, assets/photos/0590-sunset-over-misty-forest.jpg 2048w",
    "width": 2048,
    "height": 1536,
    "alt": "sunset over misty forest",
    "title": "Cloud nine",
    "category": "Hero",
    "position": "50% 50%"
  },
  "0902": {
    "src": "assets/photos/0902-mountain-cabins-and-tea-gardens.jpg",
    "srcset": "assets/photos/0902-mountain-cabins-and-tea-gardens-640w.jpg 640w, assets/photos/0902-mountain-cabins-and-tea-gardens-1280w.jpg 1280w, assets/photos/0902-mountain-cabins-and-tea-gardens.jpg 2048w",
    "width": 2048,
    "height": 1536,
    "alt": "mountain cabins and tea gardens",
    "title": "A stay worth staying for",
    "category": "Hero",
    "position": "50% 50%"
  },
  "0563": {
    "src": "assets/photos/0563-portrait-above-limestone-valley.jpg",
    "srcset": "assets/photos/0563-portrait-above-limestone-valley-640w.jpg 640w, assets/photos/0563-portrait-above-limestone-valley-1280w.jpg 1280w, assets/photos/0563-portrait-above-limestone-valley.jpg 2048w",
    "width": 2048,
    "height": 1536,
    "alt": "portrait above limestone valley",
    "title": "A little higher, a little happier",
    "category": "Hero",
    "position": "50% 50%"
  },
  "0896": {
    "src": "assets/photos/0896-balcony-portrait-and-mountain-clouds.jpg",
    "srcset": "assets/photos/0896-balcony-portrait-and-mountain-clouds-640w.jpg 640w, assets/photos/0896-balcony-portrait-and-mountain-clouds-1280w.jpg 1280w, assets/photos/0896-balcony-portrait-and-mountain-clouds.jpg 2048w",
    "width": 2048,
    "height": 1536,
    "alt": "balcony portrait and mountain clouds",
    "title": "Room with a mood",
    "category": "Hero",
    "position": "74% 50%"
  },
  "0834": {
    "src": "assets/photos/0834-sculptural-hands-bridge.jpg",
    "srcset": "assets/photos/0834-sculptural-hands-bridge-640w.jpg 640w, assets/photos/0834-sculptural-hands-bridge-1280w.jpg 1280w, assets/photos/0834-sculptural-hands-bridge.jpg 2048w",
    "width": 2048,
    "height": 1152,
    "alt": "sculptural hands bridge",
    "title": "Not your usual bridge",
    "category": "Travel",
    "position": "50% 50%"
  },
  "0969": {
    "src": "assets/photos/0969-shoreline-under-dramatic-clouds.jpg",
    "srcset": "assets/photos/0969-shoreline-under-dramatic-clouds-640w.jpg 640w, assets/photos/0969-shoreline-under-dramatic-clouds-1280w.jpg 1280w, assets/photos/0969-shoreline-under-dramatic-clouds.jpg 2048w",
    "width": 2048,
    "height": 1536,
    "alt": "shoreline under dramatic clouds",
    "title": "Sky doing the most",
    "category": "Travel",
    "position": "50% 50%"
  },
  "0485": {
    "src": "assets/photos/0485-bright-green-fields.jpg",
    "srcset": "assets/photos/0485-bright-green-fields-640w.jpg 640w, assets/photos/0485-bright-green-fields-1280w.jpg 1280w, assets/photos/0485-bright-green-fields.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "bright green fields",
    "title": "A greener kind of getaway",
    "category": "Travel",
    "position": "50% 50%"
  },
  "0959": {
    "src": "assets/photos/0959-canal-lights-at-night.jpg",
    "srcset": "assets/photos/0959-canal-lights-at-night-640w.jpg 640w, assets/photos/0959-canal-lights-at-night-1280w.jpg 1280w, assets/photos/0959-canal-lights-at-night.jpg 2048w",
    "width": 2048,
    "height": 1152,
    "alt": "canal lights at night",
    "title": "After-dark detour",
    "category": "Travel",
    "position": "50% 50%"
  },
  "0642": {
    "src": "assets/photos/0642-road-through-tall-forest.jpg",
    "srcset": "assets/photos/0642-road-through-tall-forest-640w.jpg 640w, assets/photos/0642-road-through-tall-forest-1280w.jpg 1280w, assets/photos/0642-road-through-tall-forest.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "road through tall forest",
    "title": "Take the green exit",
    "category": "Travel",
    "position": "50% 50%"
  },
  "0987": {
    "src": "assets/photos/0987-smiling-portrait-with-castle-bokeh.jpg",
    "srcset": "assets/photos/0987-smiling-portrait-with-castle-bokeh-640w.jpg 640w, assets/photos/0987-smiling-portrait-with-castle-bokeh-1280w.jpg 1280w, assets/photos/0987-smiling-portrait-with-castle-bokeh.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "smiling portrait with castle bokeh",
    "title": "A proper hello",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "0983": {
    "src": "assets/photos/0983-magenta-outfit-on-the-beach.jpg",
    "srcset": "assets/photos/0983-magenta-outfit-on-the-beach-640w.jpg 640w, assets/photos/0983-magenta-outfit-on-the-beach-1280w.jpg 1280w, assets/photos/0983-magenta-outfit-on-the-beach.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "magenta outfit on the beach",
    "title": "Beach days, but make it pink",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "0778": {
    "src": "assets/photos/0778-portrait-at-sculptural-bridge.jpg",
    "srcset": "assets/photos/0778-portrait-at-sculptural-bridge-640w.jpg 640w, assets/photos/0778-portrait-at-sculptural-bridge-1280w.jpg 1280w, assets/photos/0778-portrait-at-sculptural-bridge.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "portrait at sculptural bridge",
    "title": "Here for the view",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "0932": {
    "src": "assets/photos/0932-black-outfit-at-mountain-cabins.jpg",
    "srcset": "assets/photos/0932-black-outfit-at-mountain-cabins-640w.jpg 640w, assets/photos/0932-black-outfit-at-mountain-cabins-1280w.jpg 1280w, assets/photos/0932-black-outfit-at-mountain-cabins.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "black outfit at mountain cabins",
    "title": "Checked in, switched off",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "0412": {
    "src": "assets/photos/0412-orange-top-and-blue-water.jpg",
    "srcset": "assets/photos/0412-orange-top-and-blue-water-640w.jpg 640w, assets/photos/0412-orange-top-and-blue-water-1280w.jpg 1280w, assets/photos/0412-orange-top-and-blue-water.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "orange top and blue water",
    "title": "Orange you glad we went",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "0798": {
    "src": "assets/photos/0798-looking-back-at-floral-installation.jpg",
    "srcset": "assets/photos/0798-looking-back-at-floral-installation-640w.jpg 640w, assets/photos/0798-looking-back-at-floral-installation-1280w.jpg 1280w, assets/photos/0798-looking-back-at-floral-installation.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "looking back at floral installation",
    "title": "One more look",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "0585": {
    "src": "assets/photos/0585-blue-shirt-on-a-boat.jpg",
    "srcset": "assets/photos/0585-blue-shirt-on-a-boat-640w.jpg 640w, assets/photos/0585-blue-shirt-on-a-boat-1280w.jpg 1280w, assets/photos/0585-blue-shirt-on-a-boat.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "blue shirt on a boat",
    "title": "Boat days are good days",
    "category": "Portraits",
    "position": "50% 50%"
  },
  "0638": {
    "src": "assets/photos/0638-pani-puri-and-snack-spread.jpg",
    "srcset": "assets/photos/0638-pani-puri-and-snack-spread-640w.jpg 640w, assets/photos/0638-pani-puri-and-snack-spread.jpg 1150w",
    "width": 1150,
    "height": 2048,
    "alt": "pani puri and snack spread",
    "title": "A table worth gathering around",
    "category": "Food",
    "position": "50% 50%"
  },
  "0771": {
    "src": "assets/photos/0771-tea-cup-and-cafe-bokeh.jpg",
    "srcset": "assets/photos/0771-tea-cup-and-cafe-bokeh-640w.jpg 640w, assets/photos/0771-tea-cup-and-cafe-bokeh.jpg 1152w",
    "width": 1152,
    "height": 2048,
    "alt": "tea cup and cafe bokeh",
    "title": "Tea, slowly",
    "category": "Food",
    "position": "50% 50%"
  },
  "0595": {
    "src": "assets/photos/0595-warm-cafe-table-portrait.jpg",
    "srcset": "assets/photos/0595-warm-cafe-table-portrait-640w.jpg 640w, assets/photos/0595-warm-cafe-table-portrait-1280w.jpg 1280w, assets/photos/0595-warm-cafe-table-portrait.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "warm cafe table portrait",
    "title": "Stay for another conversation",
    "category": "Lifestyle",
    "position": "50% 50%"
  },
  "0506": {
    "src": "assets/photos/0506-lanterns-and-fairy-light-portrait.jpg",
    "srcset": "assets/photos/0506-lanterns-and-fairy-light-portrait-640w.jpg 640w, assets/photos/0506-lanterns-and-fairy-light-portrait-1280w.jpg 1280w, assets/photos/0506-lanterns-and-fairy-light-portrait.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "lanterns and fairy light portrait",
    "title": "Evenings, extra sparkly",
    "category": "Lifestyle",
    "position": "50% 50%"
  },
  "0542": {
    "src": "assets/photos/0542-turquoise-palace-hall.jpg",
    "srcset": "assets/photos/0542-turquoise-palace-hall-640w.jpg 640w, assets/photos/0542-turquoise-palace-hall-1280w.jpg 1280w, assets/photos/0542-turquoise-palace-hall.jpg 1536w",
    "width": 1536,
    "height": 2048,
    "alt": "turquoise palace hall",
    "title": "Details worth looking up for",
    "category": "Details",
    "position": "50% 50%"
  }
};
