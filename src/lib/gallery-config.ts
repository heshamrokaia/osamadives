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
  category: 'diving' | 'underwater' | 'marine-life' | 'dive-sites' | 'training' | 'adventures' | 'stories' | 'heritage';
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
  'adventures': 'Desert & Sea Adventures'
};

// Facebook page link for "View More" CTA
export const FACEBOOK_PAGE_URL = 'https://facebook.com/osamasharks';
export const INSTAGRAM_URL = 'https://instagram.com/osama_mohamed_hassan';
