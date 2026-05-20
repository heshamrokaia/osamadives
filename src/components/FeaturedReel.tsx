import * as gtag from "@/lib/gtag";

const REEL_URL = "https://www.instagram.com/reel/DRNbGQLjGwb/";

export default function FeaturedReel() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-[#5a5f4e] via-[#4a4f3e] to-[#2a2e25] text-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text side */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.25em] text-white/60 font-semibold mb-4">
              Recent
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-[1.05]"
              style={{ fontFamily: "serif" }}
            >
              Twin tanks.
              <br />
              Calm hands.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-md md:max-w-none mx-auto md:mx-0">
              Sidemount is the technical-diving configuration Osama trained for through IANTD. Most Dahab guides never get certified for this. For Osama it&apos;s just another Tuesday.
            </p>
            <a
              href={REEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold border-b border-white/40 hover:border-white pb-0.5 transition-colors"
              aria-label="Watch the full reel on Instagram with sound"
            >
              Watch on Instagram
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Video side */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <a
              href={REEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full max-w-[280px] sm:max-w-xs aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_25px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10 group focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() =>
                gtag.event({
                  action: "cta_click",
                  category: "engagement",
                  label: "featured_reel_video",
                })
              }
              aria-label="Watch Osama's sidemount dive reel on Instagram"
            >
              <video
                src="/videos/osama-sidemount.mp4"
                poster="/videos/osama-sidemount-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
              {/* Subtle Instagram corner badge */}
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white text-[10px] sm:text-xs px-2 py-1 rounded-full flex items-center gap-1.5 z-10">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Reel</span>
              </div>
              {/* Hover gradient to hint clickability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 z-10">
                <span className="text-white text-sm font-semibold drop-shadow-lg">Tap for sound →</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
