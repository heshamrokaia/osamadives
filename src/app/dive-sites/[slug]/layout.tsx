import type { Metadata } from "next";
import { diveSites, getDiveSiteBySlug } from "@/lib/dive-sites";

export async function generateStaticParams() {
  return diveSites.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const site = getDiveSiteBySlug(params.slug);
  if (!site) {
    return { title: "Dive Site Not Found | OsamaDives" };
  }

  return {
    title: `${site.name} - Dive Site Guide | OsamaDives`,
    description: site.description,
    keywords: site.keywords.join(", "),
    authors: [{ name: "Osama" }],
    alternates: {
      canonical: `https://www.osamadives.com/dive-sites/${site.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `https://www.osamadives.com/dive-sites/${site.slug}`,
      siteName: "OsamaDives",
      title: `${site.name} - Diving Guide`,
      description: site.description,
      authors: ["Osama"],
      images: [
        {
          url: site.featuredImage,
          width: 1200,
          height: 630,
          alt: site.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} - Diving Guide`,
      description: site.description,
      images: [site.featuredImage],
    },
  };
}

export default function DiveSiteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
