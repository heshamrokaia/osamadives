import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dive Sites in Dahab | OsamaDives - Red Sea Diving Guide",
  description:
    "Guides to the best dive sites in Dahab, Egypt. The Blue Hole, The Canyon, Lighthouse Reef, Eel Garden, Three Pools and more - written by a PADI Master Scuba Diver Trainer who has been diving these reefs since the 1990s.",
  keywords:
    "Dahab dive sites, Blue Hole Dahab, The Canyon Dahab, Lighthouse Reef Dahab, Eel Garden Dahab, Three Pools, Sinai diving, Red Sea dive sites, Egypt diving guide, scuba Dahab, PADI Dahab, Dahab diving map",
  alternates: {
    canonical: "https://www.osamadives.com/dive-sites",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.osamadives.com/dive-sites",
    siteName: "OsamaDives",
    title: "Dive Sites in Dahab - Red Sea Diving Guide",
    description:
      "Guides to the best dive sites in Dahab, Egypt. Written by a PADI Master Scuba Diver Trainer who knows these reefs intimately.",
    images: [
      {
        url: "/images/OsamaDives_The_Blue_Hole.jpeg",
        width: 1200,
        height: 630,
        alt: "Dive sites in Dahab, Egypt - the Red Sea coast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dive Sites in Dahab - Red Sea Diving Guide",
    description: "Guides to the best dive sites in Dahab, Egypt.",
    images: ["/images/OsamaDives_The_Blue_Hole.jpeg"],
  },
};

export default function DiveSitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
