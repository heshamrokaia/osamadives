"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as gtag from "@/lib/gtag";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const courses = [
    {
      image: "/images/20250506_2155_Split-View-Dive-Adventure_simple_compose_01jtjq33dff84rv6vkcwef3g89.png",
      title: "Discover Scuba Diving",
      tagline: "Your First Taste of the Underwater World",
      description:
        "Not sure if diving is for you? This half-day experience lets you breathe underwater with zero commitment. No certification needed - just curiosity.",
      location: "Dahab Lagoon",
      duration: "Half Day",
      requirements: "None - Try diving for the first time!",
      includes: ["Equipment", "Photos", "Instructor"],
    },
    {
      image: "/images/OsamaDives_PADI_Open_Water.jpeg",
      title: "Open Water Diver",
      tagline: "Your Passport to the Underwater World",
      description:
        "This is THE certification that opens every dive site on the planet. Learn in Dahab's calm, clear waters - the perfect classroom.",
      location: "Dahab",
      duration: "3-4 Days",
      requirements: "None - Perfect for beginners!",
      includes: ["PADI Certification", "Equipment", "Manual", "Photos"],
      popular: true,
    },
    {
      image: "/images/Advanced Open Water.jpeg",
      title: "Advanced Open Water",
      tagline: "Push Your Limits, Expand Your World",
      description:
        "Ready to go deeper? This course takes you to 30 meters and includes a night dive - experience the reef when nocturnal creatures come alive.",
      location: "Dahab + North Sinai",
      duration: "2 Days",
      requirements: "Open Water Diver",
      includes: ["PADI Certification", "Equipment", "Night Dive"],
    },
    {
      image: "/images/OsamaDives_Rescue_Diver_Course.png",
      title: "Rescue Diver Course",
      tagline: "Become the Diver Everyone Wants on Their Team",
      description:
        "This course transforms good divers into great ones. Learn to prevent problems and respond when they happen. Many say it's the most important course they ever took.",
      location: "Dahab",
      duration: "3-4 Days",
      requirements: "Advanced Open Water",
      includes: ["PADI Certification", "Equipment", "EFR Training"],
    },
    {
      image: "/images/OsamaDives_The_Blue_Hole.jpeg",
      title: "Blue Hole Experience",
      tagline: "Dive Into Legend",
      description:
        "The Blue Hole isn't just a dive - it's a bucket list item. I'll show you the best entry points, hidden features, and bring you back with a story you'll tell forever.",
      location: "Blue Hole, Dahab",
      duration: "Half Day",
      requirements: "Open Water Diver",
      includes: ["Transport", "Equipment", "Guide", "Photos"],
    },
    {
      image: "/images/Camels.jpeg",
      title: "Safari Dive Trip",
      tagline: "Camels, Desert, and Untouched Reefs",
      description:
        "Travel by camel through the Sinai desert to Ras Abu Galum - a protected area with pristine reefs most tourists never see, plus a traditional Bedouin lunch.",
      location: "Ras Abu Galum",
      duration: "Full Day",
      requirements: "Open Water Diver",
      includes: ["Camel Ride", "2 Dives", "Bedouin Lunch", "Equipment"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      country: "Germany",
      rating: 5,
      text: "Osama made my first diving experience absolutely incredible. His patience and expertise gave me the confidence to explore the underwater world. I got my Open Water certification and I'm already planning my return trip!",
      course: "Open Water Diver",
    },
    {
      name: "James T.",
      country: "United Kingdom",
      rating: 5,
      text: "The Blue Hole dive with Osama was the highlight of my trip to Egypt. His 15+ years of experience at this site really shows - he knows every inch of it. Felt completely safe the entire time.",
      course: "Blue Hole Experience",
    },
    {
      name: "Maria L.",
      country: "Spain",
      rating: 5,
      text: "I was terrified of diving but Osama's calm and reassuring approach helped me overcome my fears. The Discover Scuba experience was life-changing. Dahab is magical and Osama is the best instructor!",
      course: "Discover Scuba Diving",
    },
  ];

  const galleryImages = [
    {
      src: "/images/FB_IMG_1625154352007.jpg",
      alt: "Scuba diver exploring vibrant coral reef in Dahab Red Sea Egypt",
    },
    {
      src: "/images/FB_IMG_1632329112940.jpg",
      alt: "Underwater diving at The Canyon dive site Dahab Egypt",
    },
    {
      src: "/images/20250507_2113_Vibrant-Coral-Reef_remix_01jtn7404xftcbbj5rpbj1xh15.png",
      alt: "Colorful coral reef and tropical fish in Dahab Egypt Red Sea",
    },
    {
      src: "/images/FB_IMG_1638331910256.jpg",
      alt: "PADI diving course student exploring underwater in Dahab",
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
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo_option11_dahab_iconic.png"
              alt="Osama Dives Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-white font-bold text-xl">Osama Dives</span>
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
              href="#courses"
              className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5a5f4e] rounded"
            >
              Courses
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5a5f4e] rounded"
            >
              Reviews
            </Link>
            <Link
              href="#gallery"
              className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5a5f4e] rounded"
            >
              Gallery
            </Link>
            <Link
              href="#book"
              className="bg-white text-[#5a5f4e] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5a5f4e]"
            >
              Book Now
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
                href="#courses"
                className="block text-white/90 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="#testimonials"
                className="block text-white/90 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="#gallery"
                className="block text-white/90 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="#book"
                className="block bg-white text-[#5a5f4e] px-4 py-3 rounded-full font-semibold text-center hover:bg-gray-100 transition mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/OsamaDives_Him_Self.jpeg"
          alt="Osama - PADI Master Scuba Diver Trainer diving in the crystal clear waters of Dahab, Egypt"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />

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
            I&apos;m Osama - born and raised in Dahab, where the desert meets
            one of the world&apos;s most spectacular diving destinations. In 15
            years, I&apos;ve guided 2,000+ divers through these waters. Whether
            you&apos;re taking your first breath underwater or conquering the
            legendary Blue Hole, I&apos;ll be right beside you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#book"
              className="bg-[#5a5f4e] hover:bg-[#4a4f3e] text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() =>
                gtag.event({
                  action: "cta_click",
                  category: "engagement",
                  label: "hero_start_diving",
                })
              }
            >
              Start Your Diving Journey
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
            PADI Certified Instruction | Contact for Pricing
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
                  Your Diving Journey Starts with the Right Guide
                </h2>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  My name is Osama, and I&apos;ve been breathing underwater in
                  Dahab longer than most visitors have been diving anywhere.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  I grew up watching the sun rise over these mountains and set
                  over the Red Sea. By 18, I was a certified instructor. Now, 15
                  years and 2,000+ certified divers later, I still get the same
                  thrill watching someone&apos;s face light up after their first
                  underwater breath.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  What makes diving with me different? I&apos;m not just your
                  instructor - I&apos;m your local friend. I know which reef has
                  the best octopus sightings this season, where the Napoleon
                  wrasse hangs out, and the Blue Hole in all its moods.
                </p>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900">
                    Certified. Experienced. Trusted.
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
                        <strong>15+ Years Local Experience</strong> - Thousands
                        of dives in these exact waters
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
                        <strong>IANTD Technical Diving Instructor</strong> -
                        Advanced and technical certifications
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
                        <strong>Rescue Diver & EFR Instructor</strong> - Your
                        safety is my top priority
                      </span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="#book"
                  className="inline-block mt-8 bg-[#5a5f4e] hover:bg-[#4a4f3e] text-white font-bold py-3 px-6 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#5a5f4e] focus:ring-offset-2"
                >
                  Let&apos;s Plan Your Dive
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center"
              style={{ fontFamily: "serif" }}
            >
              Find Your Perfect Dive Experience
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Whether you&apos;ve never been underwater or you&apos;re ready to
              go deeper, there&apos;s a course waiting for you
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, i) => (
                <article
                  key={i}
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow relative"
                >
                  {course.popular && (
                    <div className="absolute top-4 right-4 bg-[#5a5f4e] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="relative h-48">
                    <Image
                      src={course.image}
                      alt={`${course.title} - PADI diving course in Dahab Egypt`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {course.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#5a5f4e] font-medium mb-3">
                      {course.tagline}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {course.description}
                    </p>
                    <div className="space-y-1 text-sm text-gray-600 mb-4">
                      <p>
                        <strong>Duration:</strong> {course.duration}
                      </p>
                      <p>
                        <strong>Location:</strong> {course.location}
                      </p>
                      <p>
                        <strong>Requirements:</strong> {course.requirements}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.includes.map((item, j) => (
                        <span
                          key={j}
                          className="bg-[#5a5f4e]/10 text-[#5a5f4e] text-xs px-2 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/201090208050?text=Hi%20Osama!%20I'm%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.%20Can%20you%20tell%20me%20more?`}
                      className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg text-center transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        gtag.event({
                          action: "whatsapp_click",
                          category: "conversion",
                          label: course.title,
                        })
                      }
                    >
                      Book via WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 bg-[#f5f5f0]">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center"
              style={{ fontFamily: "serif" }}
            >
              What Divers Say
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Join 2,000+ divers who started their underwater journey with Osama
              in Dahab
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <article
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
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
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.country} - {testimonial.course}
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
              Dive Moments from Dahab
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Glimpses of the underwater world waiting for you
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-xl overflow-hidden group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="book" className="py-20 px-4 bg-[#5a5f4e] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl font-light mb-6"
              style={{ fontFamily: "serif" }}
            >
              Your Dahab Diving Adventure Awaits
            </h2>
            <p className="text-xl mb-4 text-white/90">
              I&apos;m currently accepting bookings for the season. Spots fill
              quickly, especially for Blue Hole experiences and weekend courses.
            </p>
            <p className="text-white/70 mb-8">
              No deposit required to inquire. I typically respond within a few
              hours.
            </p>

            {/* Booking Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* WhatsApp - Primary */}
              <a
                href="https://wa.me/201090208050?text=Hi%20Osama!%20I%20found%20you%20on%20OsamaDives.com%20and%20would%20love%20to%20book%20a%20dive!"
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

              {/* Cal.com Booking */}
              <a
                href="https://cal.com/osama-dives"
                className="bg-white text-[#5a5f4e] hover:bg-gray-100 font-bold py-6 px-8 rounded-2xl text-xl transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5a5f4e]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Check available dates on calendar"
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
                  See Available Dates
                </div>
                <span className="text-sm font-normal text-[#5a5f4e]/70">
                  Check my schedule and pick your time
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
                <span className="text-white/80">Flexible Booking</span>
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
                <Image
                  src="/images/logo_option11_dahab_iconic.png"
                  alt="Osama Dives Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-white font-bold text-xl">OsamaDives</span>
              </div>
              <p className="text-sm mb-4">
                Professional PADI scuba diving instruction in Dahab, Egypt.
                Experience the Red Sea with a local expert.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/osamadives"
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
                  href="https://instagram.com/osamadives"
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
                    href="#courses"
                    className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    Diving Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="#book"
                    className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    Book a Dive
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

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 OsamaDives.com - Dahab, South Sinai, Egypt</p>
            <p className="mt-2">
              CDWS Licensed - PADI Master Scuba Diver Trainer - 15+ Years
              Experience
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/201090208050?text=Hi%20Osama!%20I%20found%20you%20on%20OsamaDives.com%20and%20would%20love%20to%20chat%20about%20diving!"
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
