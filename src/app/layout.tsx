import type { Metadata } from "next";
import localFont from "next/font/local";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Osama Dives | PADI Scuba Diving Instructor in Dahab, Egypt",
  description:
    "Learn scuba diving in Dahab with Osama, a PADI Master Scuba Diver Trainer with 15+ years experience. Discover the Blue Hole, The Canyon, and Red Sea's best dive sites. Book your diving course today!",
  keywords:
    "scuba diving Dahab, diving instructor Egypt, PADI courses Dahab, Blue Hole diving, learn to dive Egypt, Red Sea diving, diving certification Dahab, best diving instructor Dahab",
  authors: [{ name: "Osama Dives" }],
  creator: "Osama Dives",
  publisher: "Osama Dives",
  metadataBase: new URL("https://osamadives.vercel.app"),
  alternates: {
    canonical: "https://osamadives.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://osamadives.vercel.app",
    siteName: "Osama Dives",
    title: "Osama Dives | PADI Diving Instructor Dahab, Egypt",
    description:
      "Learn scuba diving in Dahab with a PADI Master Instructor. 15+ years experience, 2000+ certified divers. Blue Hole, Canyon, and Red Sea diving.",
    images: [
      {
        url: "/images/OsamaDives_Him_Self.jpeg",
        width: 1200,
        height: 630,
        alt: "Osama - PADI Diving Instructor in Dahab, Egypt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Osama Dives | Scuba Diving Instructor Dahab",
    description:
      "Learn to dive in Dahab, Egypt with a PADI Master Instructor. Book your diving adventure today!",
    images: ["/images/OsamaDives_Him_Self.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Structured Data (JSON-LD) for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://osamadives.vercel.app/#business",
      name: "Osama Dives",
      description:
        "Professional PADI scuba diving instruction in Dahab, Egypt. Learn to dive with a Master Scuba Diver Trainer with 15+ years of experience.",
      url: "https://osamadives.vercel.app",
      telephone: "+201090208050",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Masbat Bay",
        addressLocality: "Dahab",
        addressRegion: "South Sinai",
        addressCountry: "EG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "28.4936",
        longitude: "34.5135",
      },
      image: "https://osamadives.vercel.app/images/OsamaDives_Him_Self.jpeg",
      priceRange: "Contact for pricing",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
      sameAs: [
        "https://facebook.com/osamadives",
        "https://instagram.com/osamadives",
      ],
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "28.4936",
          longitude: "34.5135",
        },
        geoRadius: "50000",
      },
    },
    {
      "@type": "Person",
      "@id": "https://osamadives.vercel.app/#instructor",
      name: "Osama",
      jobTitle: "PADI Master Scuba Diver Trainer",
      worksFor: {
        "@id": "https://osamadives.vercel.app/#business",
      },
      knowsAbout: [
        "Scuba Diving",
        "PADI Certification",
        "Technical Diving",
        "Rescue Diving",
        "Blue Hole Diving",
        "Red Sea Marine Life",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional Certification",
          name: "PADI Master Scuba Diver Trainer",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional Certification",
          name: "IANTD Technical Diving Instructor",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional Certification",
          name: "PADI Enriched Air (Nitrox) Instructor",
        },
      ],
    },
    {
      "@type": "Service",
      serviceType: "Scuba Diving Instruction",
      provider: {
        "@id": "https://osamadives.vercel.app/#business",
      },
      areaServed: {
        "@type": "Place",
        name: "Dahab, Egypt",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Diving Courses",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "PADI Open Water Diver Course",
              description:
                "3-4 day beginner certification course in Dahab, Egypt",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "PADI Advanced Open Water",
              description: "2 day advanced certification course with night dive",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Discover Scuba Diving",
              description: "Half-day introductory diving experience",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Blue Hole Diving Experience",
              description:
                "Half-day guided dive at the famous Blue Hole in Dahab",
            },
          },
        ],
      },
    },
    {
      "@type": "TouristAttraction",
      name: "Blue Hole Dahab",
      description:
        "World-famous diving site with vertical walls and the Arch at 55m depth",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dahab",
        addressCountry: "Egypt",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
