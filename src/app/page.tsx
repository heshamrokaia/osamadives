import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#5a5f4e]/95 backdrop-blur-sm">
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
          <div className="hidden md:flex items-center gap-8 text-white/90">
            <Link href="#why-dahab" className="hover:text-white transition">Why Dahab</Link>
            <Link href="#about" className="hover:text-white transition">About</Link>
            <Link href="#courses" className="hover:text-white transition">Courses</Link>
            <Link href="#gallery" className="hover:text-white transition">Gallery</Link>
            <Link href="#book" className="bg-white text-[#5a5f4e] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/OsamaDives_Him_Self.jpeg"
          alt="Osama diving in Dahab"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Osama Dives
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            PADI Master Scuba Diver Trainer & Dahab Native
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white/80">
            With over 15 years on these reefs, I&apos;ve certified 2,000+ divers.
            My passion? Turning first-timers into confident ocean explorers—safely, smoothly, and with a smile.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#book"
              className="bg-[#5a5f4e] hover:bg-[#4a4f3e] text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105"
            >
              Book Your Dive
            </Link>
            <Link
              href="#about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold py-4 px-8 rounded-full text-lg transition-all border border-white/30"
            >
              Know Me
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </header>

      {/* Why Dahab Section */}
      <section id="why-dahab" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center" style={{fontFamily: 'serif'}}>
            Why Dahab?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            One of the world&apos;s top diving destinations, right at my doorstep
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Blue Hole */}
            <div className="group cursor-pointer">
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/OsamaDives_The_Blue_Hole.jpeg"
                  alt="Blue Hole diving site"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">Blue Hole Magic</h3>
              </div>
              <p className="text-gray-600">
                World-famous drop-off & Arch at 55m. I&apos;ve done this dive 1000+ times safely.
              </p>
            </div>

            {/* The Canyon */}
            <div className="group cursor-pointer">
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/OsamDives_The_Canyon.jpg"
                  alt="The Canyon diving site"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">The Canyon</h3>
              </div>
              <p className="text-gray-600">
                Dramatic underwater canyon with stunning light effects and marine life.
              </p>
            </div>

            {/* Beach Launch */}
            <div className="group cursor-pointer">
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/FB_IMG_1621238990084.jpg"
                  alt="Beach diving in Dahab"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">Beach Launch</h3>
              </div>
              <p className="text-gray-600">
                No boats needed—step off the sand and dive. Perfect for all skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Know Me / About Section */}
      <section id="about" className="py-20 px-4 bg-[#f5f5f0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/Osama7Tanks.jpeg"
                  alt="Osama with diving tanks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/20250507_2113_Vibrant Coral Reef_remix_01jtn7404xftcbbj5rpbj1xh15.png"
                  alt="Coral reef diving"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden col-span-2">
                <Image
                  src="/images/FB_IMG_1625154383404.jpg"
                  alt="Osama underwater"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{fontFamily: 'serif'}}>
                Know Me
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Welcome to my underwater paradise where adventure and discovery await at every dive!
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                My passion for scuba diving brings together enthusiasts and explorers, offering an
                unforgettable experience beneath the waves full of wonder and tranquility.
              </p>

              <div className="space-y-4">
                <h3 className="font-bold text-gray-900">Certifications & Specialties:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• PADI Master Scuba Diver Trainer</li>
                  <li>• PADI Enriched Air (Nitrox) Instructor</li>
                  <li>• IANTD Technical Diving Instructor</li>
                  <li>• Rescue Diver & Emergency First Response Instructor</li>
                  <li>• PADI Specialty Instructor (Deep, Wreck, Night, Navigator)</li>
                </ul>
              </div>

              <Link
                href="#book"
                className="inline-block mt-8 bg-[#5a5f4e] hover:bg-[#4a4f3e] text-white font-bold py-3 px-6 rounded-full transition-all"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center" style={{fontFamily: 'serif'}}>
            Dive Courses & Experiences
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From your first breath underwater to technical diving mastery
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "/images/OsamaDives_PADI_Open_Water.jpeg",
                title: "Open Water Diver",
                location: "Dahab",
                duration: "3-4 Days",
                requirements: "None - Perfect for beginners!"
              },
              {
                image: "/images/Advanced Open Water.jpeg",
                title: "Advanced Open Water",
                location: "Dahab (North)",
                duration: "2 Days / 1 Night",
                requirements: "Open Water Diver or equivalent"
              },
              {
                image: "/images/OsamaDives_Rescue_Diver_Course.png",
                title: "Rescue Diver Course",
                location: "Dahab",
                duration: "3-4 Days",
                requirements: "Advanced Open Water Diver"
              },
              {
                image: "/images/OsamaDives_The_Blue_Hole.jpeg",
                title: "Blue Hole Experience",
                location: "Blue Hole, Dahab",
                duration: "Half Day",
                requirements: "Open Water Diver"
              },
              {
                image: "/images/20250506_2155_Split-View-Dive-Adventure_simple_compose_01jtjq33dff84rv6vkcwef3g89.png",
                title: "Discover Scuba Diving",
                location: "Dahab Lagoon",
                duration: "Half Day",
                requirements: "None - Try diving for the first time!"
              },
              {
                image: "/images/Camels.jpeg",
                title: "Safari Dive Trip",
                location: "Ras Abu Galum",
                duration: "Full Day",
                requirements: "Open Water Diver"
              }
            ].map((course, i) => (
              <div key={i} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Location:</strong> {course.location}</p>
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Requirements:</strong> {course.requirements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-[#f5f5f0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 text-center" style={{fontFamily: 'serif'}}>
            Dive Moments
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/FB_IMG_1625154352007.jpg",
              "/images/FB_IMG_1632329112940.jpg",
              "/images/20250507_2113_Vibrant-Coral-Reef_remix_01jtn7404xftcbbj5rpbj1xh15.png",
              "/images/FB_IMG_1638331910256.jpg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-20 px-4 bg-[#5a5f4e] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{fontFamily: 'serif'}}>
            Ready to Dive?
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Book your appointment now and let me help you explore the vibrant world beneath the waves
            with ease and excitement.
          </p>

          {/* Booking Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* WhatsApp - Primary */}
            <a
              href="https://wa.me/201090208050?text=Hi%20Osama!%20I%20found%20you%20on%20OsamaDives.com%20and%20would%20love%20to%20book%20a%20dive!"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-8 rounded-2xl text-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Me
            </a>

            {/* Cal.com Booking - Free scheduling */}
            <a
              href="https://cal.com"
              className="bg-white text-[#5a5f4e] hover:bg-gray-100 font-bold py-6 px-8 rounded-2xl text-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Check Availability
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+20 109 020 8050</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Dahab, South Sinai, Egypt</span>
            </div>
          </div>
        </div>
      </section>

      {/* Inspired Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#5a5f4e] to-[#4a4f3e]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-white/30" />
            <span className="text-white/60 text-sm uppercase tracking-widest">Social</span>
            <div className="h-px w-16 bg-white/30" />
          </div>
          <h3 className="text-3xl md:text-4xl text-white font-light italic" style={{fontFamily: 'serif'}}>
            Inspired By Human Stories & Diving Spirit
          </h3>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo_option11_dahab_iconic.png"
                  alt="Osama Dives"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-white font-bold text-xl">OsamaDives</span>
              </div>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><Link href="#why-dahab" className="hover:text-white transition">Why Dahab</Link></li>
                <li><Link href="#about" className="hover:text-white transition">About</Link></li>
                <li><Link href="#courses" className="hover:text-white transition">Courses</Link></li>
                <li><Link href="#book" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <p className="text-sm mb-4">Sign up to receive news and updates.</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-gray-800 px-4 py-2 rounded-lg text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-[#5a5f4e]"
                />
                <button
                  type="submit"
                  className="bg-[#5a5f4e] hover:bg-[#4a4f3e] text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 OsamaDives.com · Dahab, South Sinai, Egypt</p>
            <p className="mt-2">CDWS Licensed · PADI Master Scuba Diver Trainer · 15+ Years Experience</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
