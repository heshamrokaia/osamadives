"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as gtag from "@/lib/gtag";
import FloatingBadge from "@/components/FloatingBadge";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Diving experiences I love sharing about (NOT services I sell)
  const divingExperiences = [
    {
      image: "/images/20250506_2155_Split-View-Dive-Adventure_simple_compose_01jtjq33dff84rv6vkcwef3g89.png",
      title: "Discover Scuba Diving",
      tagline: "Where Fear Becomes Wonder",
      description:
        "I have watched hundreds of faces transform the moment they take that first breath underwater. The panic fades, the eyes widen, and something shifts forever. Dahab's lagoon cradles beginners like a gentle hand - warm, calm, impossibly clear. This is where lifelong love affairs with the ocean begin.",
      location: "Dahab Lagoon",
      duration: "Typically Half Day",
      level: "No experience needed",
      highlights: ["Calm, shallow waters", "Warm year-round", "Life-changing moments"],
    },
    {
      image: "/images/OsamaDives_PADI_Open_Water.jpeg",
      title: "Open Water Diver",
      tagline: "The Passport to a Blue World",
      description:
        "This certification unlocks every dive site on the planet. But more than that - it gives you a new way of seeing. You will learn to breathe, to float, to become weightless. Dahab's shore diving means no boats, no seasickness. Just you, the reef, and the beginning of something beautiful.",
      location: "Dahab",
      duration: "3-4 Days",
      level: "Perfect for beginners",
      highlights: ["World-recognized certification", "Shore diving", "Personal attention"],
      popular: true,
    },
    {
      image: "/images/Advanced Open Water.jpeg",
      title: "Advanced Open Water",
      tagline: "Where Comfortable Becomes Confident",
      description:
        "Night dives where your flashlight summons curious octopus. Deep dives where nitrogen plays tricks on your mind. Navigation by compass through underwater canyons. The Advanced course takes you places you never imagined - thirty meters down, you meet yourself.",
      location: "Dahab + North Sinai",
      duration: "2-3 Days",
      level: "Open Water certified",
      highlights: ["Dive to 30 meters", "Night adventures", "Personal discovery"],
    },
    {
      image: "/images/OsamaDives_Rescue_Diver_Course.png",
      title: "Rescue Diver",
      tagline: "The Course That Transforms Divers",
      description:
        "Every diver who completes this course tells me the same thing - they feel changed. Not because they can save others now, though they can. But because they see the underwater world differently. Awareness sharpens. Compassion deepens. You stop being just a visitor to the reef and become its guardian.",
      location: "Dahab",
      duration: "3-4 Days",
      level: "Advanced certified",
      highlights: ["Emergency mastery", "Profound transformation", "Complete confidence"],
    },
    {
      image: "/images/OsamaDives_The_Blue_Hole.jpeg",
      title: "The Blue Hole",
      tagline: "A Pilgrimage for Divers",
      description:
        "People ask why I never tire of the Blue Hole after thousands of dives. How could I? This sinkhole holds more moods than the sea has colors. Some mornings it mirrors the sky like glass. Other days, currents stir stories from the deep. I know every corner, every secret passage - and it still surprises me.",
      location: "Blue Hole, Dahab",
      duration: "Half Day Trip",
      level: "Open Water certified",
      highlights: ["World-famous site", "The Arch", "Local expertise"],
    },
    {
      image: "/images/Camels.jpeg",
      title: "Ras Abu Galum Safari",
      tagline: "The Old Way to the Sea",
      description:
        "Before trucks, before cars, Bedouins crossed Sinai by camel. This safari honors that tradition - riding through bronze canyons to reach reefs that speedboats will never find. You arrive the way visitors have for centuries: slowly, gratefully, ready to receive what the sea offers.",
      location: "Ras Abu Galum",
      duration: "Full Day Adventure",
      level: "Open Water certified",
      highlights: ["Ancient traditions", "Pristine reefs", "Bedouin hospitality"],
    },
  ];

  // Stories from fellow divers I've met over the years
  const divingStories = [
    {
      name: "Sarah M.",
      country: "Germany",
      rating: 5,
      text: "Osama made my first diving experience absolutely incredible. His patience and expertise gave me the confidence to explore the underwater world. Dahab is now my favorite place on Earth!",
      experience: "First time diving in Dahab",
    },
    {
      name: "James T.",
      country: "United Kingdom",
      rating: 5,
      text: "The Blue Hole dive was the highlight of my trip to Egypt. Osama's 15+ years of experience at this site really shows. He knows every inch of it. Felt completely safe the entire time.",
      experience: "Blue Hole adventure",
    },
    {
      name: "Maria L.",
      country: "Spain",
      rating: 5,
      text: "After an amazing morning dive at the Canyon, Osama took us to his family's restaurant for the freshest seafood I've ever had. That's Dahab - the diving is incredible, but it's the hospitality that makes you want to come back.",
      experience: "The complete Dahab experience",
    },
  ];

  // Featured gallery images for homepage preview
  const galleryImages = [
    {
      src: "/images/OsamaDives_The_Blue_Hole.jpeg",
      alt: "The famous Blue Hole dive site in Dahab, Egypt",
      title: "The Blue Hole",
    },
    {
      src: "/images/OsamDives_The_Canyon.jpg",
      alt: "The Canyon dive site in Dahab with dramatic underwater formations",
      title: "The Canyon",
    },
    {
      src: "/images/20250507_2113_Vibrant-Coral-Reef_remix_01jtn7404xftcbbj5rpbj1xh15.png",
      alt: "Vibrant coral reef in the Red Sea Dahab",
      title: "Coral Gardens",
    },
    {
      src: "/images/Camels.jpeg",
      alt: "Camel safari to remote dive sites in Sinai",
      title: "Desert Safari",
    },
    {
      src: "/images/20250506_2155_Split-View-Dive-Adventure_simple_compose_01jtjq33dff84rv6vkcwef3g89.png",
      alt: "Split view showing above and below water in Dahab",
      title: "Two Worlds",
    },
    {
      src: "/images/OsamaDives_Him_Self.jpeg",
      alt: "Osama diving in crystal clear waters of Dahab",
      title: "In My Element",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-[#5a5f4e] text-white px-4 py-2 rounded-full z-[100] focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#5a5f4e]/95 backdrop-blur-sm"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-white font-bold text-xl group-hover:text-white/90 transition">OsamaDives</span>
            <span className="text-white/60 text-sm hidden sm:inline">• Dahab Since 1983</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-white/90">
            <Link
              href="#why-dahab"
              className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5a5f4e] rounded"
            >
              Why Dahab
            </Link>
            <Link
              href="#about"
              className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5a5f4e] rounded"
            >
              About
            </Link>
            <Link
              href="#experiences"
              className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5a5f4e] rounded"
            >
              Experiences
            </Link>
            <Link
              href="#stories"
              className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5a5f4e] rounded"
            >
              Stories
            </Link>
            <Link
              href="#gallery"
              className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5a5f4e] rounded"
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5a5f4e] rounded"
            >
              Journal
            </Link>
            <Link
              href="#contact"
              className="bg-white text-[#5a5f4e] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5a5f4e]"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-white rounded"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-[#5a5f4e] border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              <Link
                href="#why-dahab"
                className="block text-white/90 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Dahab
              </Link>
              <Link
                href="#about"
                className="block text-white/90 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#experiences"
                className="block text-white/90 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experiences
              </Link>
              <Link
                href="#stories"
                className="block text-white/90 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Stories
              </Link>
              <Link
                href="#gallery"
                className="block text-white/90 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/blog"
                className="block text-white/90 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Journal
              </Link>
              <Link
                href="#contact"
                className="block bg-white text-[#5a5f4e] px-4 py-3 rounded-full font-semibold text-center hover:bg-gray-100 transition mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/OsamaDives.png"
          alt="Osama teaching a diving student in the crystal clear waters of Dahab, Egypt - PADI Master Scuba Diver Trainer"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/40 z-10" />

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Discover Dahab&apos;s Underwater Paradise
            <span className="sr-only">
              {" "}
              - PADI Scuba Diving Instructor in Dahab, Egypt
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Dive the Red Sea with a Local Who Knows Every Reef by Heart
          </p>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-white/80">
            I&apos;m Osama - my family was one of the first to settle in Dahab back in 1983,
            opening the legendary{" "}
            <a href="https://facebook.com/sharkrest.official" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/90 transition">
              Shark Restaurant
            </a>. After years of hosting visitors on land,
            I took my hospitality underwater in 2011. Whether you&apos;re taking your first
            breath underwater or conquering the Blue Hole, you&apos;re not just a tourist to me -
            you&apos;re a guest in my home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-[#5a5f4e] hover:bg-[#4a4f3e] text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() =>
                gtag.event({
                  action: "cta_click",
                  category: "engagement",
                  label: "hero_start_diving",
                })
              }
            >
              Get in Touch
            </Link>
            <Link
              href="#about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold py-4 px-8 rounded-full text-lg transition-all border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() =>
                gtag.event({
                  action: "cta_click",
                  category: "engagement",
                  label: "hero_meet_instructor",
                })
              }
            >
              Meet Your Instructor
            </Link>
          </div>

          <p className="mt-6 text-white/60 text-sm">
            PADI Master Scuba Diver Trainer | Pioneer Family Since 1983 | Shark Restaurant Legacy
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
          aria-hidden="true"
        >
          <svg
            className="w-8 h-8 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content">
        {/* Why Dahab Section */}
        <section id="why-dahab" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center"
              style={{ fontFamily: "serif" }}
            >
              Why Divers Dream of Dahab
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Crystal-clear Red Sea waters, world-class dive sites, and a
              laid-back vibe you won&apos;t find anywhere else
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Blue Hole */}
              <article className="group cursor-pointer">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/images/OsamaDives_The_Blue_Hole.jpeg"
                    alt="Blue Hole diving site in Dahab Egypt - world famous vertical drop with the Arch at 55m"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    Blue Hole: A Diver&apos;s Pilgrimage
                  </h3>
                </div>
                <p className="text-gray-600">
                  There&apos;s a reason divers travel from every corner of the
                  globe to descend into this legendary sinkhole. Having explored
                  the Blue Hole over 1,000 times, I know its secrets, its moods,
                  and exactly how to show you its magic safely.
                </p>
              </article>

              {/* The Canyon */}
              <article className="group cursor-pointer">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/images/OsamDives_The_Canyon.jpg"
                    alt="The Canyon dive site in Dahab Egypt - dramatic underwater formations with stunning light effects"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    The Canyon: Nature&apos;s Cathedral
                  </h3>
                </div>
                <p className="text-gray-600">
                  Imagine descending through a narrow passage as beams of
                  sunlight pierce through the water above you. The Canyon is
                  Dahab&apos;s underwater cathedral - dramatic walls covered in
                  soft corals, home to lionfish, moray eels, and schools of
                  glassfish.
                </p>
              </article>

              {/* Beach Launch */}
              <article className="group cursor-pointer">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/images/FB_IMG_1621238990084.jpg"
                    alt="Shore diving in Dahab Egypt - easy beach entry with no boats needed"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    Shore Diving: No Boats, No Seasickness
                  </h3>
                </div>
                <p className="text-gray-600">
                  Forget crowded dive boats and rough seas. In Dahab, you walk
                  to your dive site. Gear up on the beach, wade in through calm
                  waters, and you&apos;re diving within minutes. More time
                  underwater, less time commuting.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-[#f5f5f0]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Osama7Tanks.jpeg"
                    alt="Osama preparing scuba diving equipment and tanks in Dahab"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/20250507_2113_Vibrant Coral Reef_remix_01jtn7404xftcbbj5rpbj1xh15.png"
                    alt="Vibrant coral reef ecosystem in the Red Sea Dahab Egypt"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden col-span-2">
                  <Image
                    src="/images/FB_IMG_1625154383404.jpg"
                    alt="Osama guiding underwater dive tour in Dahab Red Sea"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h2
                  className="text-4xl md:text-5xl font-light text-gray-900 mb-6"
                  style={{ fontFamily: "serif" }}
                >
                  From Shark Restaurant to the Deep Blue
                </h2>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  My name is Osama, and my family&apos;s story in Dahab begins in 1983 -
                  when we became the fourth family to settle here, moving from Cairo
                  to this remote paradise where the desert meets the sea.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  My family opened <a href="https://facebook.com/sharkrest.official" target="_blank" rel="noopener noreferrer" className="text-[#5a5f4e] font-semibold hover:underline">Shark Restaurant</a> -
                  now one of the most famous seafood restaurants in Dahab, <a href="https://www.tripadvisor.com/Restaurant_Review-g297547-d1645627-Reviews-Shark_Restaurant-Dahab_South_Sinai_Red_Sea_and_Sinai.html" target="_blank" rel="noopener noreferrer" className="text-[#5a5f4e] font-semibold hover:underline">rated 4.5 on TripAdvisor</a> with over 1,350 reviews.
                  For decades, we&apos;ve welcomed visitors to our table. In 2011, I decided to extend
                  that hospitality to a new dimension: underwater.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  What makes diving with me different? I don&apos;t treat you as a tourist -
                  you&apos;re a guest in my home. Just as we serve you at our restaurant with love,
                  I share the underwater world with the same care. I know every dive site from north
                  to south, the weather patterns, the sea life, and exactly where to find the magic.
                </p>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900">
                    Pioneer Family. Ambassador of Dahab.
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-[#5a5f4e] mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>4th Family to Settle in Dahab (1983)</strong> - Pioneer
                        roots run deep in this community
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-[#5a5f4e] mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong><a href="https://facebook.com/sharkrest.official" target="_blank" rel="noopener noreferrer" className="hover:underline">Shark Restaurant</a> Legacy</strong> - Family hospitality
                        since the early days of Dahab
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-[#5a5f4e] mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>PADI Master Scuba Diver Trainer</strong> - The
                        highest instructor rating
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-[#5a5f4e] mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Diving Since 2011</strong> - From serving guests on land
                        to guiding them underwater
                      </span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="#contact"
                  className="inline-block mt-8 bg-[#5a5f4e] hover:bg-[#4a4f3e] text-white font-bold py-3 px-6 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#5a5f4e] focus:ring-offset-2"
                >
                  Send Me a Message
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Diving Experiences Section */}
        <section id="experiences" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center"
              style={{ fontFamily: "serif" }}
            >
              Diving Experiences in Dahab
            </h2>
            <p className="text-center text-gray-600 mb-4 max-w-2xl mx-auto">
              From my years exploring Dahab&apos;s waters, here are the diving
              journeys I&apos;m most passionate about sharing
            </p>

            {/* Compliance Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto text-center">
              <p className="text-blue-800 text-sm">
                Interested in any of these experiences? I&apos;m happy to share recommendations
                and help connect you with CDWS-registered dive centers in Dahab.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {divingExperiences.map((experience, i) => (
                <article
                  key={i}
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow relative"
                >
                  {experience.popular && (
                    <div className="absolute top-4 right-4 bg-[#5a5f4e] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      MY FAVORITE
                    </div>
                  )}
                  <div className="relative h-48">
                    <Image
                      src={experience.image}
                      alt={`${experience.title} - diving experience in Dahab Egypt`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {experience.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#5a5f4e] font-medium mb-3">
                      {experience.tagline}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {experience.description}
                    </p>
                    <div className="space-y-1 text-sm text-gray-600 mb-4">
                      <p>
                        <strong>Typical Duration:</strong> {experience.duration}
                      </p>
                      <p>
                        <strong>Location:</strong> {experience.location}
                      </p>
                      <p>
                        <strong>Level:</strong> {experience.level}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.highlights.map((item, j) => (
                        <span
                          key={j}
                          className="bg-[#5a5f4e]/10 text-[#5a5f4e] text-xs px-2 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/201090208050?text=Hi%20Osama!%20I%20read%20about%20${encodeURIComponent(experience.title)}%20on%20your%20blog.%20Would%20love%20to%20hear%20more%20about%20this%20experience!`}
                      className="block w-full bg-[#5a5f4e] hover:bg-[#4a4f3e] text-white font-semibold py-2 px-4 rounded-lg text-center transition focus:outline-none focus:ring-2 focus:ring-[#5a5f4e] focus:ring-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        gtag.event({
                          action: "whatsapp_click",
                          category: "conversion",
                          label: experience.title,
                        })
                      }
                    >
                      💬 Chat About This
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Guest Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 bg-[#f5f5f0]">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center"
              style={{ fontFamily: "serif" }}
            >
              What Guests Say
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Real experiences from divers who became friends
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Testimonial 1 - German guest */}
              <article className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-[#5a5f4e]/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  Diving with Osama felt like visiting a friend, not hiring an instructor. He picked us up, we had tea with his family, then explored the Blue Hole together. His father opened Shark Restaurant in 1983 - this family knows Dahab like no one else.
                </blockquote>
                <div className="border-t pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Markus W.</p>
                    <p className="text-sm text-gray-500">Munich, Germany</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl" role="img" aria-label="German flag">🇩🇪</span>
                    <p className="text-xs text-gray-400 mt-1">Oct 2024</p>
                  </div>
                </div>
              </article>

              {/* Testimonial 2 - British guest */}
              <article className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-[#5a5f4e]/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  I was nervous about my first open water certification. Osama never rushed me, explained everything twice if needed, and somehow made me feel completely safe 18 meters under. Best decision of my life.
                </blockquote>
                <div className="border-t pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Emma T.</p>
                    <p className="text-sm text-gray-500">Bristol, UK</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl" role="img" aria-label="British flag">🇬🇧</span>
                    <p className="text-xs text-gray-400 mt-1">Jan 2025</p>
                  </div>
                </div>
              </article>

              {/* Testimonial 3 - American guest */}
              <article className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-[#5a5f4e]/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  After the dive, Osama took us to his family&apos;s restaurant - Shark. Fresh grilled fish, the Red Sea sparkling in the sunset... I&apos;ve dived all over the world but this was something else. You&apos;re not a tourist here, you&apos;re a guest.
                </blockquote>
                <div className="border-t pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Mike D.</p>
                    <p className="text-sm text-gray-500">San Diego, USA</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl" role="img" aria-label="American flag">🇺🇸</span>
                    <p className="text-xs text-gray-400 mt-1">Nov 2024</p>
                  </div>
                </div>
              </article>

              {/* Testimonial 4 - French guest */}
              <article className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-[#5a5f4e]/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  He knows where every Napoleon wrasse hides, which coral shelters the octopus, when the turtles come through. Forty years of family knowledge of these waters - you simply cannot get this from a regular dive shop.
                </blockquote>
                <div className="border-t pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Sophie L.</p>
                    <p className="text-sm text-gray-500">Lyon, France</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl" role="img" aria-label="French flag">🇫🇷</span>
                    <p className="text-xs text-gray-400 mt-1">Sep 2024</p>
                  </div>
                </div>
              </article>

              {/* Testimonial 5 - Dutch guest */}
              <article className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-[#5a5f4e]/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  Safety first, always. Osama checked our equipment three times, briefed us thoroughly, and I never once felt uncertain. For a nervous diver like me, that confidence means everything.
                </blockquote>
                <div className="border-t pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Jan V.</p>
                    <p className="text-sm text-gray-500">Amsterdam, Netherlands</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl" role="img" aria-label="Dutch flag">🇳🇱</span>
                    <p className="text-xs text-gray-400 mt-1">Dec 2024</p>
                  </div>
                </div>
              </article>

              {/* Testimonial 6 - Australian guest */}
              <article className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-[#5a5f4e]/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  Did my Advanced cert with Osama. The night dive was incredible - bioluminescence everywhere! But the real highlight was the camel trip to Abu Galum. Bedouin tea, pristine reefs, no crowds. Magical.
                </blockquote>
                <div className="border-t pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Rachel K.</p>
                    <p className="text-sm text-gray-500">Melbourne, Australia</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl" role="img" aria-label="Australian flag">🇦🇺</span>
                    <p className="text-xs text-gray-400 mt-1">Aug 2024</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Stories from Fellow Divers */}
        <section id="stories" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center"
              style={{ fontFamily: "serif" }}
            >
              Stories from Fellow Divers
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Over the years, I&apos;ve had the privilege of meeting amazing
              people from around the world who share my love for Dahab&apos;s waters
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {divingStories.map((story, i) => (
                <article
                  key={i}
                  className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(story.rating)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    &ldquo;{story.text}&rdquo;
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">
                      {story.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {story.country} - {story.experience}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center"
              style={{ fontFamily: "serif" }}
            >
              Diving Adventures & Stories
            </h2>
            <p className="text-center text-gray-600 mb-4 max-w-2xl mx-auto">
              Moments captured from the underwater paradise of Dahab - from the famous Blue Hole to hidden coral gardens
            </p>
            <div className="text-center mb-8">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-[#5a5f4e] font-semibold hover:underline"
              >
                View Full Gallery
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, i) => (
                <Link
                  key={i}
                  href="/gallery"
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* View More CTA */}
            <div className="mt-10 text-center">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-2 bg-[#5a5f4e] hover:bg-[#4a4f3e] text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Explore Full Gallery
                </Link>
                <a
                  href="https://facebook.com/osamasharks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#1565D8] text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  More on Facebook
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-[#5a5f4e] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl font-light mb-6"
              style={{ fontFamily: "serif" }}
            >
              Let&apos;s Talk About Your Diving Goals
            </h2>
            <p className="text-xl mb-4 text-white/90">
              Have questions about diving in Dahab? Want to know which course is
              right for you? I&apos;m happy to help you plan your underwater adventure.
            </p>
            <p className="text-white/70 mb-8">
              Send me a message and I typically respond within a few hours.
            </p>

            {/* Contact Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* WhatsApp - Primary */}
              <a
                href="https://wa.me/201090208050?text=Hi%20Osama!%20I%20found%20your%20website%20and%20would%20love%20to%20learn%20more%20about%20diving%20in%20Dahab!"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-8 rounded-2xl text-xl transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-[#5a5f4e]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Osama on WhatsApp"
                onClick={() =>
                  gtag.event({
                    action: "whatsapp_click",
                    category: "conversion",
                    label: "booking_section",
                  })
                }
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message Me on WhatsApp
                </div>
                <span className="text-sm font-normal text-white/80">
                  Fastest way to reach me
                </span>
              </a>

              {/* Cal.com - For Consultation */}
              <a
                href="https://cal.com/osama-dives"
                className="bg-white text-[#5a5f4e] hover:bg-gray-100 font-bold py-6 px-8 rounded-2xl text-xl transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5a5f4e]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Schedule a consultation call with Osama"
                onClick={() =>
                  gtag.event({
                    action: "calendar_click",
                    category: "conversion",
                    label: "cal_com_booking",
                  })
                }
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Schedule a Chat
                </div>
                <span className="text-sm font-normal text-[#5a5f4e]/70">
                  Let&apos;s discuss your diving plans
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 text-sm">
              <div className="flex flex-col items-center gap-1">
                <svg
                  className="w-6 h-6 text-white/80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white/80">5-Star Reviews</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <svg
                  className="w-6 h-6 text-white/80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white/80">PADI Certified</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <svg
                  className="w-6 h-6 text-white/80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span className="text-white/80">Small Groups</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <svg
                  className="w-6 h-6 text-white/80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white/80">Free Photos</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <svg
                  className="w-6 h-6 text-white/80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white/80">Flexible Schedule</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <a
                href="tel:+201090208050"
                className="flex items-center gap-2 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1"
                aria-label="Call Osama at +20 109 020 8050"
                onClick={() =>
                  gtag.event({
                    action: "phone_click",
                    category: "conversion",
                    label: "booking_section_phone",
                  })
                }
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+20 109 020 8050</span>
              </a>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Dahab, South Sinai, Egypt</span>
              </div>
            </div>
          </div>
        </section>

        {/* Social/Inspired Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#5a5f4e] to-[#4a4f3e]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-white/30" aria-hidden="true" />
              <span className="text-white/60 text-sm uppercase tracking-widest">
                Social
              </span>
              <div className="h-px w-16 bg-white/30" aria-hidden="true" />
            </div>
            <h3
              className="text-3xl md:text-4xl text-white font-light italic"
              style={{ fontFamily: "serif" }}
            >
              Every Diver Has a Story. Let Dahab Be Part of Yours.
            </h3>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-white font-bold text-2xl">OsamaDives</span>
                <span className="text-gray-500 text-sm">• Since 1983</span>
              </div>
              <p className="text-sm mb-4">
                Pioneer family since 1983. From the legendary <a href="https://facebook.com/sharkrest.official" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Shark Restaurant</a> to
                the depths of the Red Sea - Osama&apos;s family has been welcoming guests to Dahab
                for over 40 years. An ambassador for this magical place.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/osamasharks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded"
                  aria-label="Visit Osama Dives on Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/osama_mohamed_hassan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded"
                  aria-label="Visit Osama Dives on Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/sharkrest.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded"
                  aria-label="Visit Shark Restaurant on Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M11 9H9V7H7v2H5v2h2v7h2v-7h2l.5-2H9V8c0-.55.45-1 1-1h1.5V5H10c-1.66 0-3 1.34-3 3v1z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Explore</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#why-dahab"
                    className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    Why Dahab
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    About Osama
                  </Link>
                </li>
                <li>
                  <Link
                    href="#experiences"
                    className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    Diving Experiences
                  </Link>
                </li>
                <li>
                  <Link
                    href="#stories"
                    className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    Diver Stories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    Journal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">
                Dive Updates & Dahab Tips
              </h4>
              <p className="text-sm mb-4">
                Get insider tips on the best times to visit, dive conditions,
                and occasional special offers. No spam - just useful stuff for
                divers.
              </p>
              <form
                className="flex gap-2"
                onSubmit={() =>
                  gtag.event({
                    action: "newsletter_signup",
                    category: "engagement",
                    label: "footer_form",
                  })
                }
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address for newsletter"
                  className="bg-gray-800 px-4 py-2 rounded-lg text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-[#5a5f4e]"
                />
                <button
                  type="submit"
                  className="bg-[#5a5f4e] hover:bg-[#4a4f3e] text-white px-4 py-2 rounded-lg text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#5a5f4e] focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="border-t border-gray-800 pt-8 mb-6">
            <div className="bg-gray-800/50 rounded-lg p-4 text-xs text-gray-400 max-w-3xl mx-auto">
              <p className="mb-2">
                <strong className="text-gray-300">Disclaimer:</strong> This website is a personal portfolio showcasing
                Osama&apos;s diving experience and credentials. All diving activities, courses, and experiences
                are conducted through CDWS-registered dive centers in Dahab in full compliance with
                Egyptian tourism regulations and CDWS (Chamber of Diving and Water Sports) requirements.
              </p>
              <p>
                For diving inquiries and arrangements, please contact Osama directly.
                This website serves as an informational resource and does not facilitate direct bookings or sales.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 OsamaDives.com - Dahab, South Sinai, Egypt</p>
            <p className="mt-2">
              Pioneer Family Since 1983 | Shark Restaurant Legacy | PADI Master Scuba Diver Trainer
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Personal Blog &amp; Portfolio - Ambassador of Dahab
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Heritage Badge - Bottom Left (away from WhatsApp button) */}
      <FloatingBadge />

      {/* Floating WhatsApp Button - Bottom Right */}
      <a
        href="https://wa.me/201090208050?text=Hi%20Osama!%20I%20found%20your%20website%20and%20would%20love%20to%20learn%20more%20about%20diving%20in%20Dahab!"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Osama on WhatsApp"
        onClick={() =>
          gtag.event({
            action: "whatsapp_click",
            category: "conversion",
            label: "floating_button",
          })
        }
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
