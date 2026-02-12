/**
 * Gallery Configuration
 *
 * This file stores photo metadata for Osama's diving adventures gallery.
 * Photos are stored in /public/images/ and /public/images/gallery/
 *
 * HOW TO ADD NEW PHOTOS:
 * 1. Upload the photo to /public/images/gallery/ (recommended) or /public/images/
 * 2. Add a new entry to the galleryPhotos array below
 * 3. Fill in the metadata (title, description, location, etc.)
 * 4. The photo will appear automatically on the gallery page
 *
 * FUTURE FACEBOOK AUTO-SYNC:
 * The API route at /api/gallery is designed to support future Facebook Graph API
 * integration. When Facebook approves access, the fetchFromFacebook() function
 * can be implemented to auto-sync photos from facebook.com/osamasharks
 */

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
  location?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  date?: string;
  featured?: boolean;
  category: 'diving' | 'underwater' | 'marine-life' | 'dive-sites' | 'training' | 'adventures' | 'stories' | 'heritage' | 'team' | 'dahab' | 'equipment';
  tags?: string[];
  /** Extended narrative for photos with stories - shown in lightbox */
  story?: string;
}

// Dive site coordinates for Google Maps integration
export const DIVE_SITE_COORDINATES: Record<string, { lat: number; lng: number }> = {
  'Blue Hole, Dahab': { lat: 28.5722, lng: 34.5381 },
  'The Canyon, Dahab': { lat: 28.4847, lng: 34.5189 },
  'Ras Abu Galum, Sinai': { lat: 28.6167, lng: 34.5500 },
  'Dahab Lagoon': { lat: 28.4936, lng: 34.5136 },
  'Lighthouse Reef, Dahab': { lat: 28.4794, lng: 34.5147 },
  'The Islands, Dahab': { lat: 28.5150, lng: 34.5286 },
  'Eel Garden, Dahab': { lat: 28.5011, lng: 34.5164 },
  'Dahab, Red Sea': { lat: 28.5000, lng: 34.5167 },
  'Dahab, Egypt': { lat: 28.5000, lng: 34.5167 },
};

// Helper function to generate Google Maps URL from coordinates
export const getGoogleMapsUrl = (coordinates: { lat: number; lng: number }): string => {
  return `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;
};

// Helper function to get coordinates for a location
export const getCoordinatesForLocation = (location: string): { lat: number; lng: number } | undefined => {
  return DIVE_SITE_COORDINATES[location];
};

export const galleryPhotos: GalleryPhoto[] = [
  // === PIONEER HERITAGE - Historical proof of early settlement ===
  {
    id: 'pioneer-1987',
    src: '/images/dahab-1987-pioneer-family.jpeg',
    alt: 'Young Osama with early visitors in Dahab, 1987 - proof of pioneer family settlement',
    title: 'The Beginning: Dahab, 1987',
    description: 'A rare photograph from August 1987, just four years after my family became one of the first to settle in Dahab.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    date: '1987-08-17',
    featured: true,
    category: 'heritage',
    tags: ['heritage', 'pioneer', '1987', 'history', 'family', 'story'],
    story: 'This photograph is one of my most treasured possessions. Dated August 17, 1987 - just four years after my family arrived in Dahab from Cairo. We were the fourth family to settle here, in a village with no electricity, no phones, and only dirt roads leading to the sea. That truck you see? It was one of the few vehicles that could make the journey from the mainland. Behind us, early Dahab - just a handful of buildings, some Bedouin camps, and endless possibilities. My father had a vision: that this tiny fishing village where the desert meets the Red Sea would become something special. He opened Shark Restaurant, and we began welcoming travelers from around the world to our table. Forty years later, that same hospitality continues - first on land at our restaurant, now underwater as I guide visitors through the reefs I have known since childhood. When people ask me why I love Dahab so much, I show them this photo. This is not just where I work - this is my home, my heritage, my entire life.'
  },

  // === STORIES - Photos with meaningful narratives ===
  {
    id: 'story-coral-explorer',
    src: '/images/FB_IMG_1625154383404.jpg',
    alt: 'Diver exploring coral formations',
    title: 'Coral Explorer',
    description: 'Swimming through coral gardens that have been growing for thousands of years.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    featured: true,
    category: 'stories',
    tags: ['coral', 'exploration', 'underwater', 'story'],
    story: 'There is something humbling about swimming through coral gardens that have been growing for thousands of years. Each branch, each colorful formation, is a living testament to patience and time. When I guide divers through these ancient gardens, I always ask them to pause and just float for a moment. In that stillness, you can almost feel the history of the reef - the countless fish that have called it home, the storms it has weathered, the generations of divers who have marveled at its beauty before you. This is why I dive - to be a guest in a world that was ancient before humans ever walked the earth.'
  },
  {
    id: 'story-first-breath',
    src: '/images/OsamaDives_PADI_Open_Water.jpeg',
    alt: 'PADI Open Water diving course student in Dahab',
    title: 'First Breath Underwater',
    description: 'The moment that changes everything - a student takes their first breath underwater.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    featured: true,
    category: 'stories',
    tags: ['padi', 'open-water', 'certification', 'students', 'story'],
    story: 'I have witnessed thousands of people take their first breath underwater, and it never gets old. There is this magical moment when fear transforms into wonder. Their eyes go wide behind the mask, and you can see the exact instant when they realize - "I am breathing underwater!" Some laugh, some cry, some just float there in disbelief. That transformation, from fear to freedom, is why I became an instructor. Every new diver reminds me why I fell in love with the ocean in the first place.'
  },
  {
    id: 'story-camel-safari',
    src: '/images/Camels.jpeg',
    alt: 'Camel safari to remote dive sites in Sinai',
    title: 'Journey to the Untouched Reef',
    description: 'The Ras Abu Galum safari - where desert tradition meets diving adventure.',
    location: 'Ras Abu Galum, Sinai',
    coordinates: { lat: 28.6167, lng: 34.5500 },
    featured: true,
    category: 'stories',
    tags: ['camel', 'safari', 'adventure', 'sinai', 'story'],
    story: 'The Ras Abu Galum safari is one of my favorite ways to share the magic of Sinai. We travel by camel through the ancient desert, the same way Bedouins have for centuries, and then suddenly - the sea appears. The reef here is pristine because few people make the journey. The contrast is extraordinary: burning desert above, cool blue paradise below. I have been leading these safaris for years, and each time I am reminded that Dahab is not just about diving - it is about the intersection of two worlds, the desert and the sea, tradition and adventure. When you surface after the dive and see camels waiting on the shore, you understand that you are experiencing something truly unique.'
  },
  {
    id: 'story-post-dive',
    src: '/images/Osama at the back of the truck after the dive.jpg',
    alt: 'Osama relaxing after a dive at the back of a truck',
    title: 'The Stories We Share',
    description: 'The best conversations happen after a dive, sharing stories of what we saw below.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'stories',
    tags: ['post-dive', 'relaxation', 'community', 'story'],
    story: 'Ask any diver and they will tell you - some of the best moments happen after the dive. Sitting at the back of the truck, still dripping, watching the sun set over the mountains while sharing stories of what we saw below. "Did you see that octopus?" "The Napoleon wrasse was huge!" These conversations, full of excitement and shared wonder, create bonds that last forever. I have made lifelong friends in these moments. Diving brings people together from all over the world, and in Dahab, we become a family. The salt on our skin, the stories in our hearts - this is the diving life.'
  },
  {
    id: 'story-shared-experience',
    src: '/images/FB_IMG_1638331910256.jpg',
    alt: 'Group diving experience in Dahab',
    title: 'Diving Family',
    description: 'Diving is even better when shared with fellow ocean lovers.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'stories',
    tags: ['group', 'community', 'friends', 'story'],
    story: 'In Dahab, we say that you come as a stranger but leave as family. This group came from five different countries - Germany, Japan, Brazil, Sweden, and Egypt. At the start of the week, they did not know each other. By the end, they were planning their next diving trip together. The ocean has this incredible power to connect people. Underwater, there are no language barriers, no cultural differences - just shared wonder and mutual care. We look out for each other down there, and that trust carries over to the surface. These are not just my students; they are my diving family.'
  },
  {
    id: 'story-in-my-element',
    src: '/images/OsamaDives_Him_Self.jpeg',
    alt: 'Osama diving in crystal clear waters of Dahab',
    title: 'In My Element',
    description: 'After thousands of dives, the Red Sea still amazes me every single time.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    featured: true,
    category: 'stories',
    tags: ['osama', 'portrait', 'diving', 'story'],
    story: 'People ask me how I can still be excited after thousands of dives. The truth is, every dive is different. The light changes, the fish move differently, the reef reveals new secrets. I have been diving the same sites for over 15 years, and I still discover something new almost every time. The Red Sea is my home, my office, my playground, and my teacher. When I am underwater, I am the most complete version of myself. The silence, the weightlessness, the colors - it is meditation in motion. I am not just a dive instructor; I am a student of the sea, and my education never ends.'
  },

  // === DIVE SITES ===
  {
    id: 'blue-hole-1',
    src: '/images/OsamaDives_The_Blue_Hole.jpeg',
    alt: 'The famous Blue Hole dive site in Dahab, Egypt with crystal clear waters',
    title: 'The Blue Hole',
    description: 'People ask me why I never get tired of the Blue Hole after thousands of dives. How could I? This sinkhole holds more moods than the sea has colors. Some mornings it mirrors the sky like glass. Other days, currents stir stories from the deep. I know every corner, every mood - and it still surprises me.',
    location: 'Blue Hole, Dahab',
    coordinates: { lat: 28.5722, lng: 34.5381 },
    featured: true,
    category: 'dive-sites',
    tags: ['blue-hole', 'dahab', 'famous-dive-site']
  },
  {
    id: 'blue-hole-2',
    src: '/images/OsamaDives_The_Blue_Hole.jpg',
    alt: 'Aerial view of the Blue Hole dive site showing the circular formation',
    title: 'The Eye of the Sea',
    description: 'From above, you understand why ancient Bedouins thought this place was sacred. A perfect circle carved into the reef, 100 meters deep, holding water so clear it seems to glow. My grandfather told me stories about this spot before diving even came to Dahab. Some places just hold power.',
    location: 'Blue Hole, Dahab',
    coordinates: { lat: 28.5722, lng: 34.5381 },
    category: 'dive-sites',
    tags: ['blue-hole', 'aerial', 'dahab']
  },
  {
    id: 'canyon-1',
    src: '/images/OsamDives_The_Canyon.jpg',
    alt: 'The Canyon dive site in Dahab with dramatic underwater rock formations',
    title: 'The Canyon',
    description: 'When light pierces through The Canyon at midday, divers stop breathing - not from their regulators failing, but from wonder. I discovered my favorite crevice here fifteen years ago. A secret garden of glassfish that most divers swim right past. Knowing where to pause makes all the difference.',
    location: 'The Canyon, Dahab',
    coordinates: { lat: 28.4847, lng: 34.5189 },
    featured: true,
    category: 'dive-sites',
    tags: ['canyon', 'dahab', 'rock-formations']
  },
  {
    id: 'canyon-2',
    src: '/images/OsamDives_The_Canyon(1).jpg',
    alt: 'Inside The Canyon dive site showing the narrow passage',
    title: 'Through the Narrows',
    description: 'Underwater, words become useless. You communicate through eyes, through hand signals, through presence. When I guide someone through this narrow passage, I watch their body relax as they trust me to lead them safely. That trust is sacred - the same trust my family built serving guests at our restaurant for forty years.',
    location: 'The Canyon, Dahab',
    coordinates: { lat: 28.4847, lng: 34.5189 },
    category: 'dive-sites',
    tags: ['canyon', 'passage', 'dahab']
  },
  {
    id: 'coral-reef-1',
    src: '/images/20250507_2113_Vibrant-Coral-Reef_remix_01jtn7404xftcbbj5rpbj1xh15.png',
    alt: 'Vibrant coral reef teeming with colorful fish in the Red Sea',
    title: 'Living Tapestry',
    description: 'These corals were here before my family arrived in 1983. They will be here long after. When I was young, my father showed me how to read the reef - which corals meant healthy water, which fish meant good fishing. Now I pass that knowledge to visitors. Hospitality goes deeper than tables and chairs.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    featured: true,
    category: 'marine-life',
    tags: ['coral', 'reef', 'colorful', 'red-sea']
  },
  {
    id: 'coral-reef-2',
    src: '/images/20250507_2113_Vibrant Coral Reef_remix_01jtn7404xftcbbj5rpbj1xh15.png',
    alt: 'Close-up of healthy coral formations in Dahab',
    title: 'Patience in Stone',
    description: 'A coral head this size took decades to grow, maybe centuries. Every tiny polyp a small act of faith. I think about patience differently since I started diving. The reef teaches you that the best things unfold slowly, that presence matters more than speed.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'marine-life',
    tags: ['coral', 'close-up', 'red-sea']
  },
  {
    id: 'split-view',
    src: '/images/20250506_2155_Split-View-Dive-Adventure_simple_compose_01jtjq33dff84rv6vkcwef3g89.png',
    alt: 'Split view showing above and below water in Dahab',
    title: 'Between Two Worlds',
    description: 'This is what Dahab means to me: desert mountains meeting underwater gardens. Above, Bedouin hospitality and endless tea. Below, a silence so complete you hear your own heartbeat. My family planted roots in both worlds.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    featured: true,
    category: 'diving',
    tags: ['split-view', 'creative', 'dahab']
  },
  {
    id: 'osama-himself',
    src: '/images/OsamaDives_Him_Self.jpeg',
    alt: 'Osama diving in crystal clear waters of Dahab',
    title: 'Home Waters',
    description: 'Some instructors treat diving like a job. For me, this is my backyard - waters I have swum since childhood, reefs I have memorized like the streets of my neighborhood. You are not a customer. You are a guest I am inviting into my home.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    featured: true,
    category: 'diving',
    tags: ['osama', 'portrait', 'diving']
  },
  {
    id: 'osama-tanks',
    src: '/images/Osama7Tanks.jpeg',
    alt: 'Osama preparing scuba diving equipment and tanks',
    title: 'The Ritual Before',
    description: 'My father taught me that preparation is its own form of respect - for your guests, for the sea, for yourself. I check every valve, every connection. Just like he checked every fish that went out of Shark Restaurant. Excellence is a habit passed down.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'training',
    tags: ['equipment', 'preparation', 'tanks']
  },
  {
    id: 'open-water',
    src: '/images/OsamaDives_PADI_Open_Water.jpeg',
    alt: 'PADI Open Water diving course student in Dahab',
    title: 'The Moment Everything Changes',
    description: 'I have seen hundreds of first breaths underwater. The initial panic, the confusion, then - that moment. The face softens. The eyes widen. Something shifts forever. Dahab\'s calm lagoon cradles beginners like a gentle hand.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'training',
    tags: ['padi', 'open-water', 'certification', 'students']
  },
  {
    id: 'advanced-water',
    src: '/images/Advanced Open Water.jpeg',
    alt: 'Advanced Open Water diving course in Dahab',
    title: 'Earning the Depths',
    description: 'The Advanced course is where comfortable becomes confident. Night dives where your flashlight summons curious octopus. Deep dives where nitrogen plays tricks on your mind. Thirty meters down, you meet yourself.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'training',
    tags: ['padi', 'advanced', 'certification']
  },
  {
    id: 'cpr-training',
    src: '/images/OsamaDives_CPR Training Simulation.png',
    alt: 'CPR training simulation for diving emergency response',
    title: 'When Seconds Matter',
    description: 'We train for emergencies hoping they never come. My hands have performed these compressions until the motions live in muscle memory. Care is not just about beautiful reefs - it is being prepared for when someone needs you most.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'training',
    tags: ['cpr', 'emergency', 'safety', 'training']
  },
  {
    id: 'camel-safari',
    src: '/images/Camels.jpeg',
    alt: 'Camel safari to remote dive sites in Sinai',
    title: 'The Old Way to the Sea',
    description: 'Before trucks, before cars, Bedouins crossed Sinai by camel. The Ras Abu Galum safari honors that tradition - riding through bronze canyons to reach reefs that speedboats will never find. Guests arrive the way visitors have for centuries.',
    location: 'Ras Abu Galum, Sinai',
    coordinates: { lat: 28.6167, lng: 34.5500 },
    featured: true,
    category: 'adventures',
    tags: ['camel', 'safari', 'adventure', 'sinai']
  },
  {
    id: 'after-dive',
    src: '/images/Osama at the back of the truck after the dive.jpg',
    alt: 'Osama relaxing after a dive at the back of a truck',
    title: 'The Stories We Tell',
    description: 'The truck ride back is when the magic settles in. Salt-dried skin, sun-warmed smiles, and that shared silence of people who just witnessed something beautiful together. This is when strangers become friends. The reef gives you stories; the ride home lets you savor them.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'adventures',
    tags: ['post-dive', 'relaxation', 'community']
  },
  {
    id: 'fb-dive-1',
    src: '/images/FB_IMG_1621238990084.jpg',
    alt: 'Diving adventure captured in Dahab',
    title: 'Walk In, Wonder Begins',
    description: 'No boat transfers. No diesel fumes. No seasickness. In Dahab, you gear up on the beach, wade through warm shallows, and within moments you are hovering over ancient coral gardens. The sea meets you where you stand.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'diving',
    tags: ['shore-diving', 'dahab']
  },
  {
    id: 'fb-dive-2',
    src: '/images/FB_IMG_1625154352007.jpg',
    alt: 'Underwater diving scene in the Red Sea',
    title: 'Into the Blue',
    description: 'Some days the visibility stretches beyond thirty meters. You hang in liquid space, the reef a distant wall, and for a moment the boundary between self and sea dissolves. I know spots where the blue deepens to something almost purple.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'underwater',
    tags: ['underwater', 'red-sea', 'exploration']
  },
  {
    id: 'fb-dive-3',
    src: '/images/FB_IMG_1625154383404.jpg',
    alt: 'Diver exploring coral formations',
    title: 'Reading the Garden',
    description: 'Every coral formation tells a story if you know how to listen. This table coral shelters a family of cardinalfish. That brain coral marks where the current shifts. Years of diving taught me to read the reef like my father taught me to read the weather.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'underwater',
    tags: ['coral', 'exploration', 'underwater']
  },
  {
    id: 'fb-dive-4',
    src: '/images/FB_IMG_1632329112940.jpg',
    alt: 'Diving experience at famous Dahab dive site',
    title: 'Forty-Meter Clarity',
    description: 'Visitors ask how the water stays so clear. The Red Sea has almost no river runoff, little plankton bloom, and the sun shines three hundred days a year. Nature created the perfect diving conditions. We are just lucky enough to call it home.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'diving',
    tags: ['dahab', 'visibility', 'adventure']
  },
  {
    id: 'fb-dive-5',
    src: '/images/FB_IMG_1638331910256.jpg',
    alt: 'Group diving experience in Dahab',
    title: 'Found Family',
    description: 'These are the moments I live for - strangers from different countries, different languages, different lives, surfacing with the same wonder in their eyes. Diving creates bonds that words cannot. You trusted each other thirty meters down.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'diving',
    tags: ['group', 'community', 'friends']
  },

  // === NEW GALLERY IMAGES - DIVING ===
  {
    id: 'gallery-canyon-silhouette',
    src: '/images/gallery/diving/osamdives_the_canyon.jpeg',
    alt: 'Diver silhouette ascending through The Canyon narrow gap with sunlight streaming in',
    title: 'The Canyon Ascent',
    description: 'Looking up through the narrow walls of The Canyon as a diver ascends toward the light.',
    location: 'The Canyon, Dahab',
    coordinates: { lat: 28.4847, lng: 34.5189 },
    featured: true,
    category: 'diving',
    tags: ['canyon', 'silhouette', 'underwater']
  },
  {
    id: 'gallery-osama-coral-reef',
    src: '/images/gallery/diving/fb_img_1633902371206.jpeg',
    alt: 'Osama diving over vibrant coral reef, professional underwater photo',
    title: 'Reef Explorer',
    description: 'Gliding over the reef gardens that have been my office for decades.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'diving',
    tags: ['osama', 'coral', 'underwater']
  },
  {
    id: 'gallery-canyon-pose',
    src: '/images/gallery/diving/fb_img_1636476791947.jpeg',
    alt: 'Diver posing in underwater cave with dramatic blue light, Cressi gear',
    title: 'Cathedral of Blue',
    description: 'The caves and canyons of Dahab create underwater cathedrals of light.',
    location: 'The Canyon, Dahab',
    coordinates: { lat: 28.4847, lng: 34.5189 },
    featured: true,
    category: 'diving',
    tags: ['canyon', 'cave', 'underwater']
  },
  {
    id: 'gallery-giant-stride',
    src: '/images/gallery/diving/whatsapp-image-2025-05-01-at-16.20.55.jpeg',
    alt: 'Diver doing giant stride entry off dock into crystal clear water',
    title: 'The Giant Stride',
    description: 'That exhilarating moment of the giant stride entry into the Red Sea.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'diving',
    tags: ['entry', 'dock', 'action']
  },
  {
    id: 'gallery-wreck-truck',
    src: '/images/gallery/diving/whatsapp-image-2025-05-08-at-15.46.36-1.jpeg',
    alt: 'Coral-encrusted truck inside SS Thistlegorm shipwreck',
    title: 'Trucks of the Thistlegorm',
    description: 'WWII military vehicles still rest inside the SS Thistlegorm wreck, now covered in coral.',
    location: 'SS Thistlegorm, Red Sea',
    category: 'diving',
    tags: ['wreck', 'thistlegorm', 'history']
  },
  {
    id: 'gallery-wreck-motorcycle',
    src: '/images/gallery/diving/whatsapp-image-2025-05-08-at-15.46.38.jpeg',
    alt: 'Coral-encrusted BSA motorcycle inside SS Thistlegorm shipwreck',
    title: 'Frozen in Time',
    description: 'A WWII motorcycle preserved on the ocean floor inside the SS Thistlegorm.',
    location: 'SS Thistlegorm, Red Sea',
    featured: true,
    category: 'diving',
    tags: ['wreck', 'thistlegorm', 'motorcycle']
  },
  {
    id: 'gallery-wreck-tires',
    src: '/images/gallery/diving/whatsapp-image-2025-05-08-at-15.46.39-1.jpeg',
    alt: 'Military tires inside SS Thistlegorm cargo hold',
    title: 'Cargo Hold Discovery',
    description: 'Military supply tires still stacked in the cargo hold, 80 years underwater.',
    location: 'SS Thistlegorm, Red Sea',
    category: 'diving',
    tags: ['wreck', 'thistlegorm', 'cargo']
  },
  {
    id: 'gallery-wreck-machinery',
    src: '/images/gallery/diving/whatsapp-image-2025-05-08-at-15.48.20.jpeg',
    alt: 'Coral-covered equipment and bottles inside shipwreck',
    title: 'Relics of the Deep',
    description: 'Every artifact tells a story of the ship and its crew from another era.',
    location: 'SS Thistlegorm, Red Sea',
    category: 'diving',
    tags: ['wreck', 'artifacts']
  },
  {
    id: 'gallery-eagle-ray',
    src: '/images/gallery/diving/whatsapp-image-2025-05-10-at-12.58.37-1.jpeg',
    alt: 'Diver swimming alongside a spotted eagle ray in the Red Sea',
    title: 'Dance with an Eagle Ray',
    description: 'A magical encounter with a spotted eagle ray gliding through the blue.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    featured: true,
    category: 'diving',
    tags: ['eagle-ray', 'marine-life', 'encounter']
  },
  {
    id: 'gallery-coral-pinnacle',
    src: '/images/gallery/diving/whatsapp-image-2025-05-10-at-12.58.37-2.jpeg',
    alt: 'Colorful coral reef pinnacle with vibrant hard and soft corals',
    title: 'Coral Pinnacle',
    description: 'A towering pinnacle of colorful corals reaching toward the surface.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'diving',
    tags: ['coral', 'reef', 'colorful']
  },
  {
    id: 'gallery-turtle-birthday',
    src: '/images/gallery/diving/whatsapp-image-2025-05-10-at-12.58.42-1.jpeg',
    alt: 'Diver holding Happy Birthday Osama sign next to sea turtle underwater',
    title: 'Birthday with a Turtle',
    description: 'Even the sea turtles came to celebrate! A birthday surprise underwater.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    featured: true,
    category: 'diving',
    tags: ['turtle', 'birthday', 'celebration']
  },
  {
    id: 'gallery-canyon-cressi',
    src: '/images/gallery/diving/whatsapp-image-2025-05-10-at-12.58.50-1.jpeg',
    alt: 'Diver in Cressi wetsuit posing in underwater canyon with dramatic blue light',
    title: 'Deep in The Canyon',
    description: 'The walls of The Canyon frame a world of deep blue and silence.',
    location: 'The Canyon, Dahab',
    coordinates: { lat: 28.4847, lng: 34.5189 },
    category: 'diving',
    tags: ['canyon', 'cressi', 'underwater']
  },
  {
    id: 'gallery-osama-shaka',
    src: '/images/gallery/diving/whatsapp-image-2025-05-10-at-12.58.51-1.jpeg',
    alt: 'Osama diving in shallow water doing shaka signs, professional photo by Pawel Ciecheslki',
    title: 'Good Vibes Only',
    description: 'Spreading the diving spirit with shaka signs in Dahab\'s crystal waters.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'diving',
    tags: ['osama', 'portrait', 'shaka']
  },
  {
    id: 'gallery-osama-emerging',
    src: '/images/gallery/diving/whatsapp-image-2025-05-10-at-12.58.52-2.jpeg',
    alt: 'Osama emerging from the water in full dive gear with mountains in background',
    title: 'Between the Worlds',
    description: 'Emerging from the deep blue into the warm Sinai sun.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'diving',
    tags: ['osama', 'portrait', 'surface']
  },
  {
    id: 'gallery-thistlegorm-wreck',
    src: '/images/gallery/diving/ss-thistlegorm-wreck-day.webp',
    alt: 'Divers exploring the massive SS Thistlegorm shipwreck exterior',
    title: 'SS Thistlegorm',
    description: 'The legendary WWII wreck - one of the world\'s most famous dive sites.',
    location: 'SS Thistlegorm, Red Sea',
    featured: true,
    category: 'diving',
    tags: ['wreck', 'thistlegorm', 'iconic']
  },

  // === NEW GALLERY IMAGES - TEACHING ===
  {
    id: 'gallery-teaching-shallows',
    src: '/images/gallery/teaching/fb_img_1595137616968jpg.0.jpeg',
    alt: 'Osama helping a student in shallow water while children watch from shore',
    title: 'Learning in the Shallows',
    description: 'Every great diver started in the shallows. Guiding the next generation.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'training',
    tags: ['teaching', 'beginners', 'shallows']
  },
  {
    id: 'gallery-group-entry',
    src: '/images/gallery/teaching/fb_img_1623632282122.jpeg',
    alt: 'Group of divers with full gear entering the water for training dive',
    title: 'Into the Blue Together',
    description: 'A group of students entering the water for their training dive.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'training',
    tags: ['group', 'training', 'entry']
  },
  {
    id: 'gallery-padi-certification',
    src: '/images/gallery/teaching/fb_img_1628920514141.jpeg',
    alt: 'Osama with two students holding PADI certificates at Planet Divers',
    title: 'Certified Divers',
    description: 'Two more divers certified! Proud moments at Planet Divers, Dahab.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'training',
    tags: ['padi', 'certification', 'students']
  },
  {
    id: 'gallery-teaching-child',
    src: '/images/gallery/teaching/whatsapp-image-2025-05-10-at-12.58.41-1.jpeg',
    alt: 'Young Osama helping a child put on dive gear',
    title: 'Starting Young',
    description: 'Teaching the youngest adventurers to love the sea, one bubble at a time.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    date: '2012-05-02',
    category: 'training',
    tags: ['kids', 'teaching', 'heritage']
  },
  {
    id: 'gallery-young-student',
    src: '/images/gallery/teaching/whatsapp-image-2025-05-10-at-12.58.44-1.jpeg',
    alt: 'Osama in wetsuit with young boy student at Planet Divers, both doing OK sign',
    title: 'Future Diver',
    description: 'A young diver earns his OK sign at Planet Divers.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'training',
    tags: ['kids', 'student', 'planet-divers']
  },
  {
    id: 'gallery-student-ok-sign',
    src: '/images/gallery/teaching/whatsapp-image-2025-05-10-at-12.58.46-1.jpeg',
    alt: 'Osama with female student in full dive gear in the water, both doing OK sign',
    title: 'All OK!',
    description: 'Instructor and student - the universal OK sign means confidence underwater.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'training',
    tags: ['student', 'ok-sign', 'cressi']
  },
  {
    id: 'gallery-student-gearup',
    src: '/images/gallery/teaching/whatsapp-image-2025-05-10-at-12.58.47-1.jpeg',
    alt: 'Osama with female student in dive gear at Blue Hole area',
    title: 'Ready for the Blue Hole',
    description: 'Geared up and ready for an unforgettable dive at the Blue Hole.',
    location: 'Blue Hole, Dahab',
    coordinates: { lat: 28.5722, lng: 34.5381 },
    category: 'training',
    tags: ['student', 'blue-hole', 'preparation']
  },
  {
    id: 'gallery-dive-group-rocks',
    src: '/images/gallery/teaching/whatsapp-image-2025-05-10-at-12.58.48-1.jpeg',
    alt: 'Large group of divers preparing at rocky shore dive site near Blue Hole',
    title: 'Shore Diving Preparation',
    description: 'A busy day at the dive site - groups preparing for their underwater adventure.',
    location: 'Blue Hole, Dahab',
    coordinates: { lat: 28.5722, lng: 34.5381 },
    category: 'training',
    tags: ['group', 'shore-diving', 'preparation']
  },

  // === NEW GALLERY IMAGES - TEAM ===
  {
    id: 'gallery-team-dock',
    src: '/images/gallery/team/fb_img_1611744727736.jpeg',
    alt: 'Three divers posing on dock with AwesomeTeam hashtag',
    title: 'Awesome Team',
    description: 'The OsamaDives crew ready for another day of underwater adventures.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'team',
    tags: ['team', 'dock', 'crew']
  },
  {
    id: 'gallery-blue-hole-viewpoint',
    src: '/images/gallery/team/fb_img_1617712455291.jpeg',
    alt: 'Group selfie at Blue Hole viewpoint overlooking the sea',
    title: 'Blue Hole Views',
    description: 'Team selfie at the iconic Blue Hole viewpoint.',
    location: 'Blue Hole, Dahab',
    coordinates: { lat: 28.5722, lng: 34.5381 },
    category: 'team',
    tags: ['blue-hole', 'selfie', 'viewpoint']
  },
  {
    id: 'gallery-osama-cressi',
    src: '/images/gallery/team/fb_img_1625154408370.jpeg',
    alt: 'Osama in Cressi wetsuit with two happy divers under beach shelter',
    title: 'Post-Dive Smiles',
    description: 'Nothing beats the smiles after a great dive in Dahab.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'team',
    tags: ['osama', 'cressi', 'post-dive']
  },
  {
    id: 'gallery-dahab-dive-team',
    src: '/images/gallery/team/fb_img_1625492173636.jpeg',
    alt: 'Large group on dive boat wearing Dahab Dive Team shirts',
    title: 'Dahab Dive Team',
    description: 'The full Dahab Dive Team assembled on the boat.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    featured: true,
    category: 'team',
    tags: ['team', 'boat', 'group']
  },
  {
    id: 'gallery-boat-selfie',
    src: '/images/gallery/team/img-20211019-082453.jpeg',
    alt: 'Osama selfie with young man on dive boat, turquoise water',
    title: 'Boat Day',
    description: 'Every boat trip is a new adventure with great company.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    date: '2021-10-19',
    category: 'team',
    tags: ['boat', 'selfie', 'sea']
  },
  {
    id: 'gallery-dive-center-group',
    src: '/images/gallery/team/img-20211109-135119.jpeg',
    alt: 'Group of divers and instructors posing at dive center',
    title: 'Dive Center Family',
    description: 'Guests and instructors - everyone is family at the dive center.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    date: '2021-11-09',
    category: 'team',
    tags: ['group', 'dive-center', 'family']
  },
  {
    id: 'gallery-hunts-dive-shop',
    src: '/images/gallery/team/img-20211128-095042.jpeg',
    alt: 'Osama in full dive gear with friend at dive center, tanks visible',
    title: 'Diving Brothers',
    description: 'The diving community spans the globe - connections forged underwater.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    date: '2021-11-28',
    category: 'team',
    tags: ['friends', 'gear', 'dive-center']
  },
  {
    id: 'gallery-promenade-selfie',
    src: '/images/gallery/team/whatsapp-image-2025-05-05-at-16.45.48.jpeg',
    alt: 'Group selfie on Dahab promenade with beach behind',
    title: 'Dahab Promenade',
    description: 'Friends gathered on the beautiful Dahab waterfront promenade.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'team',
    tags: ['promenade', 'friends', 'dahab']
  },
  {
    id: 'gallery-boat-trio',
    src: '/images/gallery/team/whatsapp-image-2025-05-10-at-12.58.36-1.jpeg',
    alt: 'Three guys selfie on boat with Dahab coast behind',
    title: 'Crew on the Water',
    description: 'Heading out for another dive trip along the Sinai coast.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'team',
    tags: ['boat', 'crew', 'coast']
  },
  {
    id: 'gallery-planet-divers-selfie',
    src: '/images/gallery/team/whatsapp-image-2025-05-10-at-12.58.44-2.jpeg',
    alt: 'Osama selfie with friend at Planet Divers center',
    title: 'Planet Divers',
    description: 'At the heart of Dahab\'s diving community.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'team',
    tags: ['planet-divers', 'selfie', 'dahab']
  },
  {
    id: 'gallery-dive-club-van',
    src: '/images/gallery/team/whatsapp-image-2025-05-10-at-12.58.45-1.jpeg',
    alt: 'Group of divers in wetsuits posing by dive club van at beach with gear',
    title: 'Ready to Dive',
    description: 'The team assembled with gear laid out - ready for an expedition.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'team',
    tags: ['team', 'van', 'gear', 'expedition']
  },
  {
    id: 'gallery-big-team-photo',
    src: '/images/gallery/team/whatsapp-image-2025-05-10-at-13.03.22.jpeg',
    alt: 'Large group of 25+ divers in wetsuits posing at desert dive site shelter',
    title: 'The Full Team',
    description: 'An epic gathering of divers from around the world in Dahab.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    featured: true,
    category: 'team',
    tags: ['team', 'large-group', 'desert']
  },
  {
    id: 'gallery-osama-beach-friends',
    src: '/images/gallery/team/fb_img_1619885729926.jpeg',
    alt: 'Osama selfie with two friends at the beach',
    title: 'Beach Vibes',
    description: 'Sun, sea, and great company in Dahab.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'team',
    tags: ['beach', 'friends', 'selfie']
  },
  {
    id: 'gallery-team-wetsuits',
    src: '/images/gallery/team/fb_img_1619885733450.jpeg',
    alt: 'Group of divers in wetsuits posing in Dahab town',
    title: 'Suited Up',
    description: 'The crew suited up and ready to explore.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'team',
    tags: ['team', 'wetsuits', 'town']
  },

  // === NEW GALLERY IMAGES - DAHAB ===
  {
    id: 'gallery-desert-road',
    src: '/images/gallery/dahab/fb_img_1618932010952.jpeg',
    alt: 'Three people posing on desert road in Sinai',
    title: 'Desert Roads',
    description: 'The scenic desert roads of Sinai leading to hidden dive sites.',
    location: 'Sinai, Egypt',
    category: 'dahab',
    tags: ['desert', 'road', 'sinai']
  },
  {
    id: 'gallery-bedouin-road',
    src: '/images/gallery/dahab/fb_img_1618932017418.jpeg',
    alt: 'Cars and Bedouin on desert road in Sinai',
    title: 'Sinai Journey',
    description: 'Traveling through the ancient Sinai landscape.',
    location: 'Sinai, Egypt',
    category: 'dahab',
    tags: ['desert', 'bedouin', 'travel']
  },
  {
    id: 'gallery-dahab-coastline',
    src: '/images/gallery/dahab/fb_img_1625492151580.jpeg',
    alt: 'Group posing on hilltop overlooking Dahab coastline and turquoise sea',
    title: 'Dahab from Above',
    description: 'The stunning Dahab coastline viewed from the surrounding hills.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    featured: true,
    category: 'dahab',
    tags: ['coastline', 'panorama', 'viewpoint']
  },
  {
    id: 'gallery-planet-divers-front',
    src: '/images/gallery/dahab/fb_img_1632056756922.jpeg',
    alt: 'Osama selfie at Planet Divers entrance with crowd',
    title: 'Planet Divers Hub',
    description: 'The bustling entrance of Planet Divers dive center.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'dahab',
    tags: ['planet-divers', 'dive-center', 'dahab']
  },
  {
    id: 'gallery-birthday-plate',
    src: '/images/gallery/dahab/img-20211110-155127.jpeg',
    alt: 'Hand-painted birthday plate with fish designs and Dahab text',
    title: 'Dahab Birthday Art',
    description: 'A hand-painted birthday plate - Dahab style with fish and diving motifs.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    date: '2021-11-10',
    category: 'dahab',
    tags: ['art', 'birthday', 'handmade']
  },
  {
    id: 'gallery-seafood-dinner',
    src: '/images/gallery/dahab/img-20211204-195856.jpeg',
    alt: 'Two men dining at seafood restaurant with fish mural and shrimp display',
    title: 'Dahab Seafood',
    description: 'Fresh seafood dinners in Dahab\'s colorful restaurants.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    date: '2021-12-04',
    category: 'dahab',
    tags: ['food', 'restaurant', 'seafood']
  },
  {
    id: 'gallery-bedouin-shelter',
    src: '/images/gallery/dahab/wahsh-img-1452.jpeg',
    alt: 'Group relaxing in Bedouin beach shelter between dives',
    title: 'Bedouin Beach Life',
    description: 'Relaxing between dives in a traditional Bedouin beach shelter.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'dahab',
    tags: ['bedouin', 'beach', 'relaxation']
  },
  {
    id: 'gallery-blue-hole-cliff',
    src: '/images/gallery/dahab/whatsapp-image-2025-05-10-at-12.58.35-1.jpeg',
    alt: 'Man at Blue Hole area with turquoise water and desert mountains',
    title: 'Blue Hole Lookout',
    description: 'The incredible turquoise waters of the Blue Hole from above.',
    location: 'Blue Hole, Dahab',
    coordinates: { lat: 28.5722, lng: 34.5381 },
    category: 'dahab',
    tags: ['blue-hole', 'mountains', 'turquoise']
  },
  {
    id: 'gallery-sinai-landscape',
    src: '/images/gallery/dahab/whatsapp-image-2025-05-10-at-12.58.38-1.jpeg',
    alt: 'Osama standing in Sinai desert landscape',
    title: 'Sinai Spirit',
    description: 'The vast Sinai desert - where Osama\'s family roots began.',
    location: 'Sinai, Egypt',
    category: 'dahab',
    tags: ['sinai', 'desert', 'landscape']
  },
  {
    id: 'gallery-dive-site-shelter',
    src: '/images/gallery/dahab/whatsapp-image-2025-05-10-at-12.58.49-1.jpeg',
    alt: 'Desert dive site shelter structure in Sinai landscape',
    title: 'Desert Dive Site',
    description: 'Where the desert meets the sea - a typical Dahab dive site.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'dahab',
    tags: ['dive-site', 'desert', 'shelter']
  },
  {
    id: 'gallery-between-dives-hut',
    src: '/images/gallery/dahab/whatsapp-image-2025-05-10-at-12.58.49-2.jpeg',
    alt: 'Group relaxing in Bedouin hut between dives, dive map on wall',
    title: 'Between Dives',
    description: 'Sharing stories and planning the next dive in the shade.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'dahab',
    tags: ['bedouin', 'rest', 'social']
  },
  {
    id: 'gallery-blue-hole-railing',
    src: '/images/gallery/dahab/whatsapp-image-2025-05-10-at-12.58.50-2.jpeg',
    alt: 'Osama and friend sitting on railing overlooking Blue Hole from above',
    title: 'Blue Hole Panorama',
    description: 'Taking in the view from above the famous Blue Hole.',
    location: 'Blue Hole, Dahab',
    coordinates: { lat: 28.5722, lng: 34.5381 },
    category: 'dahab',
    tags: ['blue-hole', 'panorama', 'friends']
  },
  {
    id: 'gallery-group-dinner',
    src: '/images/gallery/dahab/whatsapp-image-2025-05-10-at-13.03.17-1.jpeg',
    alt: 'Large group dinner at colorful Dahab restaurant with lanterns',
    title: 'Dahab Nights',
    description: 'After-dive dinners are when the best stories come to life.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'dahab',
    tags: ['dinner', 'restaurant', 'nightlife']
  },

  // === NEW GALLERY IMAGES - HERITAGE ===
  {
    id: 'gallery-trimix-cert',
    src: '/images/gallery/heritage/img-20211107-075545.jpeg',
    alt: 'IANTD Normoxic Trimix Diver Max Depth 60 MSW certificate for Osama Rokaia',
    title: 'Trimix Certification',
    description: 'IANTD Normoxic Trimix Diver certification - pushing the limits to 60 meters.',
    location: 'Dahab, Egypt',
    date: '2021-06-04',
    category: 'heritage',
    tags: ['certificate', 'trimix', 'iantd', 'technical']
  },
  {
    id: 'gallery-cert-handover',
    src: '/images/gallery/heritage/img-20211107-075658.jpeg',
    alt: 'Osama receiving Trimix certificate from instructor',
    title: 'Achievement Unlocked',
    description: 'Receiving the advanced Trimix diving certification from the instructor.',
    location: 'Dahab, Egypt',
    date: '2021-11-07',
    category: 'heritage',
    tags: ['certificate', 'instructor', 'achievement']
  },
  {
    id: 'gallery-vintage-photo',
    src: '/images/gallery/heritage/img-20211228-074905.jpeg',
    alt: 'Vintage photo of young Osama holding a child with friends in Dahab',
    title: 'The Early Days',
    description: 'A precious photo from the early days in Dahab - memories that shaped a lifetime.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    featured: true,
    category: 'heritage',
    tags: ['vintage', 'family', 'history']
  },
  {
    id: 'gallery-thank-you-note',
    src: '/images/gallery/heritage/whatsapp-image-2025-05-10-at-12.58.39.jpeg',
    alt: 'Handwritten thank you note: Dear Osama, thank you for being the best dive instructor - Matyas',
    title: 'Best Dive Instructor',
    description: 'Words from a student that mean more than any certificate.',
    location: 'Dahab, Egypt',
    category: 'heritage',
    tags: ['testimonial', 'note', 'student']
  },
  {
    id: 'gallery-advanced-trimix-cert',
    src: '/images/gallery/heritage/whatsapp-image-2025-05-10-at-12.58.48-2.jpeg',
    alt: 'Osama proudly holding IANTD Advanced Rec. Trimix Diver certificate',
    title: 'Advanced Technical Diver',
    description: 'Osama proudly showing his Advanced Trimix Diver certification.',
    location: 'Dahab, Egypt',
    category: 'heritage',
    tags: ['certificate', 'trimix', 'advanced']
  },
  {
    id: 'gallery-photography-calendar',
    src: '/images/gallery/heritage/whatsapp-image-2025-05-10-at-12.58.51-2.jpeg',
    alt: 'Underwater photography calendar 2020 and dive marker labeled Each Day Better Osama',
    title: 'Each Day Better',
    description: 'A personal motto and a collection of underwater photography memories.',
    location: 'Dahab, Egypt',
    category: 'heritage',
    tags: ['photography', 'motto', 'memories']
  },
  {
    id: 'gallery-iantd-card',
    src: '/images/gallery/heritage/whatsapp-image-2025-05-10-at-12.58.52-3.jpeg',
    alt: 'IANTD digital certification card for Osama Rokaia - Normoxic Trimix Diver',
    title: 'IANTD Diver Card',
    description: 'The official IANTD certification card - passport to the deep.',
    location: 'Dahab, Egypt',
    category: 'heritage',
    tags: ['iantd', 'card', 'certification']
  },

  // === NEW GALLERY IMAGES - EQUIPMENT ===
  {
    id: 'gallery-gear-prep',
    src: '/images/gallery/equipment/fb_img_1619016170986.jpeg',
    alt: 'Group preparing and checking dive gear under beach shelter',
    title: 'Gear Check',
    description: 'Safety first - thorough gear preparation before every dive.',
    location: 'Dahab, Egypt',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'equipment',
    tags: ['gear', 'preparation', 'safety']
  },
  {
    id: 'gallery-trimix-tank',
    src: '/images/gallery/equipment/whatsapp-image-2025-05-10-at-12.58.43-1.jpeg',
    alt: 'Trimix tank labeled OSAMA with ScubaTec Dahab sticker, MOD 52m',
    title: 'Osama\'s Trimix Tank',
    description: 'A personal Trimix tank configured for 52-meter maximum operating depth.',
    location: 'Dahab, Egypt',
    category: 'equipment',
    tags: ['trimix', 'tank', 'technical']
  },
  {
    id: 'gallery-bcd-check',
    src: '/images/gallery/equipment/whatsapp-image-2025-05-10-at-12.58.50-3.jpeg',
    alt: 'Osama checking BCD equipment at beach before dive',
    title: 'Pre-Dive Ritual',
    description: 'Every dive starts with a careful equipment check at the beach.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    category: 'equipment',
    tags: ['bcd', 'check', 'pre-dive']
  },

  // === NEW GALLERY IMAGES - STORIES (Underwater Proposal) ===
  {
    id: 'gallery-proposal-note',
    src: '/images/gallery/stories/whatsapp-image-2025-05-10-at-13.03.16.jpeg',
    alt: 'Marriage proposal note with engagement ring: Czy zostaniesz moja zona (Will you be my wife)',
    title: 'A Question from the Heart',
    description: 'The beginning of an underwater love story - a ring and a question.',
    location: 'Dahab, Egypt',
    date: '2021-11-04',
    category: 'stories',
    tags: ['proposal', 'love', 'ring'],
    story: 'In November 2021, Kuba asked me to help him plan something extraordinary - an underwater marriage proposal to his girlfriend Kasia. We prepared the waterproof card with the Polish words "Czy zostaniesz moja zona?" - "Will you be my wife?" It was one of the most beautiful moments I have ever been part of underwater.'
  },
  {
    id: 'gallery-proposal-underwater',
    src: '/images/gallery/stories/whatsapp-image-2025-05-10-at-13.03.19.jpeg',
    alt: 'Two divers at coral reef during underwater marriage proposal',
    title: 'The Underwater Proposal',
    description: 'The moment Kuba proposed to Kasia on the coral reef, 15 meters below the surface.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    date: '2021-11-04',
    featured: true,
    category: 'stories',
    tags: ['proposal', 'underwater', 'love'],
    story: 'At 15 meters depth, surrounded by the beauty of the Red Sea reef, Kuba reached for the waterproof card. Kasia\'s eyes went wide behind her mask. Even underwater, you could see the tears of joy mixing with the sea. She nodded yes before he even finished showing the card. The fish around us seemed to celebrate too.'
  },
  {
    id: 'gallery-proposal-card-underwater',
    src: '/images/gallery/stories/whatsapp-image-2025-05-10-at-13.03.21-1.jpeg',
    alt: 'Diver holding Polish marriage proposal card underwater with thumbs up',
    title: 'She Said Yes!',
    description: 'Kuba showing the proposal card underwater - and she said yes!',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    date: '2021-11-04',
    category: 'stories',
    tags: ['proposal', 'yes', 'celebration']
  },
  {
    id: 'gallery-engagement-ring-underwater',
    src: '/images/gallery/stories/whatsapp-image-2025-05-10-at-13.03.21.jpeg',
    alt: 'Female diver underwater showing engagement ring on her hand with OK sign',
    title: 'Ring of the Deep',
    description: 'Kasia showing off her new engagement ring underwater - the most unique proposal ever!',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    date: '2021-11-04',
    featured: true,
    category: 'stories',
    tags: ['ring', 'engagement', 'underwater']
  },
  {
    id: 'gallery-proposal-collage',
    src: '/images/gallery/stories/whatsapp-image-2025-05-10-at-13.03.18.jpeg',
    alt: 'Four-photo collage of underwater proposal: card, dive, ring, Blue Hole view',
    title: 'Love Story in Four Frames',
    description: 'The complete underwater proposal story - from the note to the ring to the Blue Hole.',
    location: 'Blue Hole, Dahab',
    coordinates: { lat: 28.5722, lng: 34.5381 },
    date: '2021-11-04',
    category: 'stories',
    tags: ['collage', 'proposal', 'love-story']
  },
  {
    id: 'gallery-proposal-facebook',
    src: '/images/gallery/stories/whatsapp-image-2025-05-10-at-13.03.20-1.jpeg',
    alt: 'Osama Facebook post congratulating Kuba and Kasia on underwater proposal',
    title: 'Congratulations Kuba & Kasia',
    description: 'Osama celebrating the engagement of Kuba and Kasia after the dive.',
    location: 'Dahab, Egypt',
    date: '2021-11-04',
    category: 'stories',
    tags: ['congratulations', 'couple', 'celebration']
  },
  {
    id: 'gallery-proposal-reef',
    src: '/images/gallery/stories/whatsapp-image-2025-05-10-at-13.03.20.jpeg',
    alt: 'Two divers at the coral reef placing the proposal note during underwater engagement',
    title: 'A Reef to Remember',
    description: 'The coral reef where two lives became one - an unforgettable moment.',
    location: 'Dahab, Red Sea',
    coordinates: { lat: 28.5000, lng: 34.5167 },
    date: '2021-11-04',
    category: 'stories',
    tags: ['reef', 'proposal', 'moment']
  }
];

// Get featured photos for homepage
export const getFeaturedPhotos = (): GalleryPhoto[] => {
  return galleryPhotos.filter(photo => photo.featured);
};

// Get photos by category
export const getPhotosByCategory = (category: GalleryPhoto['category']): GalleryPhoto[] => {
  return galleryPhotos.filter(photo => photo.category === category);
};

// Get all unique categories
export const getCategories = (): string[] => {
  const categories = galleryPhotos.map(photo => photo.category);
  return Array.from(new Set(categories));
};

// Category labels for display
export const categoryLabels: Record<GalleryPhoto['category'], string> = {
  'heritage': 'Pioneer Heritage',
  'stories': 'Diving Stories',
  'diving': 'Diving Adventures',
  'underwater': 'Underwater World',
  'marine-life': 'Marine Life',
  'dive-sites': 'Famous Dive Sites',
  'training': 'Diving Experiences',
  'adventures': 'Desert & Sea Adventures',
  'team': 'The Dive Team',
  'dahab': 'Life in Dahab',
  'equipment': 'Gear & Equipment'
};

// Facebook page link for "View More" CTA
export const FACEBOOK_PAGE_URL = 'https://facebook.com/osamasharks';
export const INSTAGRAM_URL = 'https://instagram.com/osama_mohamed_hassan';
