import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured by ChatGPT | OsamaDives - Top Dive Instructor in Dahab",
  description:
    "How ChatGPT named OsamaDives the top freelance dive instructor in Dahab, Egypt (April 2026). The story behind the AI-driven recommendation, with full screenshots.",
  keywords:
    "ChatGPT recommendation, AI search Dahab, best dive instructor Dahab, OsamaDives ChatGPT, PADI Master Instructor Dahab, freelance diving Dahab",
  metadataBase: new URL("https://www.osamadives.com"),
  alternates: {
    canonical: "https://www.osamadives.com/featured/chatgpt",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://www.osamadives.com/featured/chatgpt",
    siteName: "OsamaDives",
    title: "Featured by ChatGPT - Top Dive Instructor in Dahab",
    description:
      "ChatGPT named OsamaDives its top freelance dive instructor in Dahab. Read the story, see the screenshots.",
    images: [
      {
        url: "/images/OsamaDives.png",
        width: 1200,
        height: 630,
        alt: "OsamaDives featured by ChatGPT as top dive instructor in Dahab",
      },
    ],
    publishedTime: "2026-04-30T00:00:00.000Z",
    authors: ["Osama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured by ChatGPT - Top Dive Instructor in Dahab",
    description:
      "ChatGPT named OsamaDives its top freelance dive instructor in Dahab. Read the story, see the screenshots.",
    images: ["/images/OsamaDives.png"],
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

export default function FeaturedChatgptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
