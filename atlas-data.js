"use strict";

const atlasPhotos = {
  "m011" : {
    "alt" : "A hand holding a few red berries beneath a green forest canopy in the Chikmagalur region",
    "category" : "Travel, food & little life",
    "height" : 1920,
    "position" : "50% 50%",
    "src" : "assets/photos/map-chikmagalur-forest-finds.jpg",
    "srcset" : "assets/photos/map-chikmagalur-forest-finds-480w.jpg 480w, assets/photos/map-chikmagalur-forest-finds-960w.jpg 960w, assets/photos/map-chikmagalur-forest-finds.jpg 1080w",
    "title" : "A handful of little discoveries",
    "width" : 1080
  },
  "m025" : {
    "alt" : "Clouds rolling above layers of green hills and trees in the Chikmagalur region",
    "category" : "Travel, food & little life",
    "height" : 1440,
    "position" : "50% 50%",
    "src" : "assets/photos/map-chikmagalur-cloud-valley.jpg",
    "srcset" : "assets/photos/map-chikmagalur-cloud-valley-480w.jpg 480w, assets/photos/map-chikmagalur-cloud-valley-960w.jpg 960w, assets/photos/map-chikmagalur-cloud-valley.jpg 1920w",
    "title" : "Let the clouds set the pace",
    "width" : 1920
  },
  "m035" : {
    "alt" : "A sunlit lake and green banks beneath billowing white clouds in the Coorg region",
    "category" : "Travel, food & little life",
    "height" : 1440,
    "position" : "50% 50%",
    "src" : "assets/photos/map-coorg-lake-and-clouds.jpg",
    "srcset" : "assets/photos/map-coorg-lake-and-clouds-480w.jpg 480w, assets/photos/map-coorg-lake-and-clouds-960w.jpg 960w, assets/photos/map-coorg-lake-and-clouds.jpg 1920w",
    "title" : "An afternoon without a hurry",
    "width" : 1920
  },
  "m039" : {
    "alt" : "Ketki in a green patterned shirt beside vivid tea gardens in Coonoor beneath a cloud-filled sky",
    "category" : "Travel, food & little life",
    "height" : 1920,
    "position" : "50% 50%",
    "src" : "assets/photos/map-coonoor-tea-gardens.jpg",
    "srcset" : "assets/photos/map-coonoor-tea-gardens-480w.jpg 480w, assets/photos/map-coonoor-tea-gardens-960w.jpg 960w, assets/photos/map-coonoor-tea-gardens.jpg 1440w",
    "title" : "Greener on this side",
    "width" : 1440
  },
  "m051" : {
    "alt" : "Ketki looking across a green Coonoor hillside from a terrace beneath a blue sky",
    "category" : "Travel, food & little life",
    "height" : 1920,
    "position" : "50% 50%",
    "src" : "assets/photos/map-coonoor-hilltop-view.jpg",
    "srcset" : "assets/photos/map-coonoor-hilltop-view-480w.jpg 480w, assets/photos/map-coonoor-hilltop-view-960w.jpg 960w, assets/photos/map-coonoor-hilltop-view.jpg 1440w",
    "title" : "The tea can wait. This view cannot.",
    "width" : 1440
  },
  "m055" : {
    "alt" : "Ketki walking among tall straight pine trees on a leaf-covered forest path in Ooty",
    "category" : "Travel, food & little life",
    "height" : 1920,
    "position" : "50% 50%",
    "src" : "assets/photos/map-ooty-pine-forest.jpg",
    "srcset" : "assets/photos/map-ooty-pine-forest-480w.jpg 480w, assets/photos/map-ooty-pine-forest-960w.jpg 960w, assets/photos/map-ooty-pine-forest.jpg 1440w",
    "title" : "The trees made me feel tiny",
    "width" : 1440
  },
  "m081" : {
    "alt" : "Ketki beside an Ooty lake with wooded hills and small boats in the background",
    "category" : "Travel, food & little life",
    "height" : 1920,
    "position" : "50% 50%",
    "src" : "assets/photos/map-ooty-lakeside.jpg",
    "srcset" : "assets/photos/map-ooty-lakeside-480w.jpg 480w, assets/photos/map-ooty-lakeside-960w.jpg 960w, assets/photos/map-ooty-lakeside.jpg 1440w",
    "title" : "A whole afternoon, unplanned",
    "width" : 1440
  },
  "m093" : {
    "alt" : "Ketki in a pink top sitting on a bench beneath a bamboo canopy in the Coorg region",
    "category" : "Travel, food & little life",
    "height" : 1920,
    "position" : "50% 50%",
    "src" : "assets/photos/map-coorg-bamboo-afternoon.jpg",
    "srcset" : "assets/photos/map-coorg-bamboo-afternoon-480w.jpg 480w, assets/photos/map-coorg-bamboo-afternoon-960w.jpg 960w, assets/photos/map-coorg-bamboo-afternoon.jpg 1440w",
    "title" : "A little shade. A lot of happy.",
    "width" : 1440
  },
  "m109" : {
    "alt" : "An ornate golden monastery rooftop against a blue sky in the Coorg region",
    "category" : "Travel, food & little life",
    "height" : 1920,
    "position" : "50% 50%",
    "src" : "assets/photos/map-coorg-golden-rooftop.jpg",
    "srcset" : "assets/photos/map-coorg-golden-rooftop-480w.jpg 480w, assets/photos/map-coorg-golden-rooftop-960w.jpg 960w, assets/photos/map-coorg-golden-rooftop.jpg 1440w",
    "title" : "A roof worth looking up for",
    "width" : 1440
  }
};

const portfolioPlaces = [
  { id: "kashmir", name: "Srinagar & Kashmir", country: "India", point: [34.08, 74.80], zoom: 8, photos: ["b0750", "b2793", "b2889", "b2881", "b0879", "b2182", "b2606"], note: "Cold hands. A very happy heart.", story: "A sunset shikara ride, a garden in the afternoon light, and snow days that brought out the little explorer in me. Different kinds of quiet. All worth keeping." },
  { id: "andamans", name: "Andaman & Nicobar", country: "India", point: [11.90, 92.80], zoom: 8, photos: ["1002", "0969", "0983", "1297"], note: "I wish I could bottle this blue.", story: "Curving sand, clear water, and little places to stop and take it all in. These are the island moments I keep coming back to." },
  { id: "coorg", name: "Coorg & around", country: "India", point: [12.42, 75.85], zoom: 10, photos: ["m035", "m093", "m109"], note: "A little green goes a long way.", story: "A bright lake, bamboo shade, and a golden rooftop that made me look up. A few favourite corners from a slow wander through Coorg and its surroundings." },
  { id: "ooty", name: "Ooty", country: "India", point: [11.41, 76.69], zoom: 11, photos: ["m055", "m081"], note: "Tiny in the trees. Happy by the lake.", story: "A walk between the pines, then a little time by the water. The sort of hill-town day that doesn't need a complicated plan." },
  { id: "coonoor", name: "Coonoor", country: "India", point: [11.35, 76.80], zoom: 11, photos: ["m039", "m051"], note: "The view was very good at making me linger.", story: "Tea-green hills, big skies, and a terrace I could have stayed on all afternoon. A small collection from the Nilgiri air." },
  { id: "kodaikanal", name: "Kodaikanal", country: "India", point: [10.24, 77.49], zoom: 10, photos: ["1461", "2453", "2191", "1468"], note: "A little mist changes the whole mood.", story: "Green views, quiet corners, and time to notice the details. These are a few of the moments that made this hill-town detour feel like mine." },
  { id: "wayanad", name: "Wayanad", country: "India", point: [11.69, 76.13], zoom: 9, photos: ["1362", "1480", "b1949"], note: "Found a little extra sunshine here.", story: "Sunflowers, fresh air, and the in-between moments that become part of a trip. Sometimes a bright little patch of yellow is the whole story." },
  { id: "chikmagalur", name: "Chikmagalur & around", country: "India", point: [13.32, 75.77], zoom: 9, photos: ["m025", "0642", "m011"], note: "Let the clouds set the pace.", story: "Layers of green hills, water moving through the trees, and tiny forest discoveries. A few little reasons to take this part of the world slowly." },
  { id: "gokarna", name: "Gokarna", country: "India", point: [14.55, 74.32], zoom: 10, photos: ["1295", "1182", "1309", "1085", "b1583"], note: "No rush to leave the coast.", story: "Soft surf, a slower coffee, and a place under the palms to settle in. The coast was the plan. The feeling of slowing down was the best part." },
  { id: "goa", name: "Goa", country: "India", point: [15.40, 73.95], zoom: 9, photos: ["0412"], note: "A bright little memory by the blue.", story: "One of those coastal moments I wanted to keep: a little colour, open water, and a very good reason to stop for the view." },
  { id: "munnar", name: "Munnar", country: "India", point: [10.09, 77.06], zoom: 9, photos: ["2548", "1834", "0902", "0896", "0932"], note: "Every shade of green, please.", story: "Tea-covered hills and little places to check in and switch off. A few pages from the quieter side of Kerala." },
  { id: "kerala", name: "Kerala", country: "India", point: [10.20, 76.40], bounds: [[8.20, 74.80], [12.80, 77.40]], photos: ["2548", "1834", "0902", "0896", "0932"], note: "A few tea-green pages from Kerala.", story: "A little state-wide bookmark for the green hills and quiet stays around Munnar. The individual stops have their own pins, too; these photographs are from the Munnar chapter." },
  { id: "shivamogga", name: "Shivamogga", country: "India", point: [13.93, 75.57], zoom: 9, photos: ["2039"], note: "A little water. A lot of green.", story: "One quiet, green moment from the Shivamogga region. The sort of view that makes me put the itinerary away for a while." },
  { id: "bengaluru", name: "Bengaluru", country: "India", point: [12.97, 77.59], zoom: 10, photos: ["b0638", "1328", "1447", "2358", "1234", "1961"], note: "The little city life between the bigger trips.", story: "Good coffee, colour in the trees, a table worth stopping at, and the everyday moments in between. There are little stories here, too." },
  { id: "mysuru", name: "Mysuru", country: "India", point: [12.31, 76.65], zoom: 11, photos: ["0542", "0545"], note: "And then I remembered to look up.", story: "A turquoise hall and a whole painted world overhead. The kind of details that make a place stay with me long after I've walked through it." },
  { id: "belur", name: "Belur", country: "India", point: [13.16, 75.86], zoom: 11, photos: ["1443", "1429"], note: "Some ceilings deserve a whole pause.", story: "Carved stone, intricate patterns, and all the little details I could happily keep looking at. A small reminder to give the corners some attention, too." },
  { id: "puducherry", name: "Puducherry", country: "India", point: [11.94, 79.81], zoom: 11, photos: ["2027", "2002", "2004", "2010"], note: "A café, a corner, one more little wander.", story: "Warm-lit streets, colourful doorways, a cup beside a little art, and something good on the table. This is my kind of city-side detour." },
  { id: "alleppey", name: "Alleppey", country: "India", point: [9.50, 76.34], zoom: 10, photos: [], note: "Visited. Not forgotten.", story: "This stop is part of my story, too. The photographs will join it soon." },
  { id: "kanyakumari", name: "Kanyakumari", country: "India", point: [8.09, 77.54], zoom: 10, photos: [], note: "Visited. Not forgotten.", story: "This stop is part of my story, too. The photographs will join it soon." },
  { id: "singapore", name: "Singapore", country: "Singapore", point: [1.35, 103.82], zoom: 10, photos: ["1778", "1735", "1671", "1685", "1952", "1598", "1753"], video: "city-after-dark", note: "Meet a city by day. Meet it again after dark.", story: "Skyline views, little details between the buildings, and garden trees glowing at night. A city with plenty of reasons to keep looking around." },
  { id: "kuala-lumpur", name: "Malaysia / Kuala Lumpur", country: "Malaysia", point: [3.14, 101.69], zoom: 11, photos: ["b3019", "2241", "b0809", "b0821"], note: "A city, a page at a time.", story: "A bookshop I could disappear into, a playful painted window, and a couple of very good food stops. These are my Kuala Lumpur pages from Malaysia." },
  { id: "vietnam", name: "Vietnam", country: "Vietnam", point: [16.00, 106.00], bounds: [[9.30, 102.10], [23.40, 109.50]], photos: ["0548", "b2652", "2397", "2324", "0563", "2523", "2525", "2232", "0585", "0834", "0778", "0798", "0959", "2384", "1114", "0987", "1392", "1707"], video: "river-bends", note: "A few different places. One very good chapter.", story: "From Hanoi and limestone-lined rivers to the bay, hill-side detours and Phu Quoc evenings. A country-wide collection, with separate pins if you'd like to linger in one place." },
  { id: "hanoi", name: "Hanoi", country: "Vietnam", point: [21.03, 105.85], zoom: 11, photos: ["b2652", "2324", "2397"], note: "Some detours come in a bowl.", story: "Something warm on the table and a little room to explore. These are the small, everyday-feeling moments I brought back from Hanoi." },
  { id: "ninh-binh", name: "Ninh Binh", country: "Vietnam", point: [20.25, 105.97], zoom: 10, photos: ["0548", "0563", "2523", "2525"], video: "river-bends", note: "The scenic route. Always.", story: "A winding river between limestone hills, green views, and the feeling of having nowhere else to be. This one was worth slowing right down for." },
  { id: "ha-long", name: "Ha Long", country: "Vietnam", point: [20.91, 107.08], zoom: 9, photos: ["2232", "0585"], note: "Just a little longer on the water.", story: "Rocky islands, open water, and the sort of view that makes me stop talking for a moment. A couple of favourites from the bay." },
  { id: "da-nang", name: "Da Nang", country: "Vietnam", point: [16.05, 108.20], zoom: 10, photos: ["0834", "0778", "0798"], note: "A very good day to take the long way.", story: "Big views, playful details, and a little colour along the way. A few happy pages from Da Nang and the surrounding hills." },
  { id: "phu-quoc", name: "Phu Quoc", country: "Vietnam", point: [10.23, 103.97], zoom: 10, photos: ["0959", "2384", "1114", "0987", "1392", "1707"], note: "One more stop. Then one more.", story: "A colourful canopy, an underwater world, something sweet, and a canal that glows after dark. The island had a very good case for staying out a little longer." }
];
