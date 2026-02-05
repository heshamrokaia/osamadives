import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-cyan-900">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Hero content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Osama Dives
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-200">
            🤿 Dahab, Egypt · Since 1983
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Dive with Dahab royalty. 40+ years of experience.
            My family was the 4th to settle here — I know every rock,
            every drop-off, every secret spot in the Gulf of Aqaba.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/201090208050?text=Hi%20Osama!%20I%20found%20you%20on%20OsamaDives.com%20and%20would%20love%20to%20book%20a%20dive!"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book on WhatsApp
            </a>
            <Link
              href="#about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold py-4 px-8 rounded-full text-lg transition-all border border-white/30"
            >
              My Story ↓
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Meet Osama
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                <strong className="text-blue-800">My family was the 4th to settle in Dahab in 1983</strong>,
                when there was nothing here but sand and sea. I've watched this village transform
                from a Bedouin fishing spot to a world-famous diving destination.
              </p>
              <p>
                I've spent more time underwater than most people spend awake.
                <strong className="text-blue-800"> I know every rock, every drop-off, every secret spot</strong> in
                the Gulf of Aqaba. The new guides? They read about these places in books.
                I grew up swimming in them.
              </p>
              <p>
                After your dive, join me at my restaurant <strong className="text-blue-800">Shark</strong> for the freshest catch
                and stories from 40 years of diving.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-3xl">🏆</span>
                  <span><strong>40+ years</strong> diving experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-3xl">🤿</span>
                  <span><strong>15,000+</strong> logged dives</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-3xl">🎓</span>
                  <span><strong>PADI & SSI</strong> Certified Instructor</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-3xl">🗣️</span>
                  <span><strong>Arabic & English</strong> fluent</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-3xl">📍</span>
                  <span><strong>Born & raised</strong> in Dahab</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What I Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🔵",
                title: "Blue Hole",
                desc: "The famous 130m sinkhole. I'll show you the arch safely — I've done this dive 1000+ times."
              },
              {
                icon: "🌙",
                title: "Night Dives",
                desc: "See the reef come alive after dark. Hunting octopus, sleeping parrotfish, bioluminescence."
              },
              {
                icon: "🗺️",
                title: "Secret Spots",
                desc: "Places the new guides don't know exist. My family's fishing spots turned diving treasures."
              },
              {
                icon: "🎓",
                title: "Beginners",
                desc: "Nervous? I've taught thousands. Patient, safe, no rushing. Your pace, your comfort."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-800 to-cyan-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Dive with a Legend?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Message me on WhatsApp. Tell me what you want to experience,
            and I'll plan the perfect dive for you.
          </p>
          <a
            href="https://wa.me/201090208050?text=Hi%20Osama!%20I%20found%20you%20on%20OsamaDives.com%20and%20would%20love%20to%20book%20a%20dive!"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl transition-all transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center">
        <p>© 2025 OsamaDives.com · Dahab, Egypt</p>
        <p className="mt-2 text-sm">
          CDWS Licensed · PADI/SSI Certified · 40+ Years Experience
        </p>
      </footer>
    </div>
  );
}
