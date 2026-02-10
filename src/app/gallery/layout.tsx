import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | OsamaDives - Diving Adventures from Dahab, Egypt",
  description:
    "Explore Osama's diving adventures and stories from Dahab, Egypt. Photos from the Blue Hole, The Canyon, coral reefs, and underwater encounters in the Red Sea.",
  keywords:
    "Dahab diving photos, Blue Hole photos, Red Sea underwater photography, Dahab Egypt gallery, diving adventure photos, coral reef images",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.osamadives.com/gallery",
    siteName: "OsamaDives",
    title: "Photo Gallery | Diving Adventures from Dahab, Egypt",
    description:
      "Explore diving adventures and stories from Dahab, Egypt. Photos from the Blue Hole, The Canyon, and underwater encounters in the Red Sea.",
    images: [
      {
        url: "/images/OsamaDives_The_Blue_Hole.jpeg",
        width: 1200,
        height: 630,
        alt: "The Blue Hole - Famous Diving Site in Dahab, Egypt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | OsamaDives",
    description:
      "Explore diving adventures from Dahab, Egypt - photos from the Blue Hole, The Canyon, and Red Sea encounters.",
    images: ["/images/OsamaDives_The_Blue_Hole.jpeg"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
