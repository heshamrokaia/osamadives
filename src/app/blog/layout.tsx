import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diving Journal | OsamaDives - Stories from Dahab, Egypt",
  description:
    "Stories from beneath the surface of the Red Sea. Reflections from a PADI Master Scuba Diver Trainer who has called Dahab home since 1983. Blue Hole, night diving, reef life, and a life lived underwater.",
  keywords:
    "Dahab diving blog, Red Sea stories, Blue Hole stories, night diving Dahab, scuba blog Egypt, diving journal Dahab, PADI instructor blog, Sinai diving stories",
  alternates: {
    canonical: "https://www.osamadives.com/blog",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.osamadives.com/blog",
    siteName: "OsamaDives",
    title: "Diving Journal - Stories from Dahab, Egypt",
    description:
      "Stories from beneath the surface. Reflections from a PADI Master Scuba Diver Trainer in Dahab.",
    images: [
      {
        url: "/images/OsamaDives_The_Blue_Hole.jpeg",
        width: 1200,
        height: 630,
        alt: "Diving Journal - Stories from Dahab, Egypt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diving Journal - Stories from Dahab, Egypt",
    description: "Stories from beneath the surface. Reflections from a PADI Master Scuba Diver Trainer in Dahab.",
    images: ["/images/OsamaDives_The_Blue_Hole.jpeg"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
