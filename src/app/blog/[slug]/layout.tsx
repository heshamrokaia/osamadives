import type { Metadata } from "next";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Story Not Found | OsamaDives",
    };
  }

  const baseKeywords = [
    "Dahab diving",
    "Red Sea diving",
    "Egypt scuba",
    "Sinai diving",
    "PADI instructor Dahab",
  ];
  const keywords = Array.from(new Set([...post.tags, ...baseKeywords])).join(", ");

  return {
    title: `${post.title} | OsamaDives - Diving Journal`,
    description: post.excerpt,
    keywords,
    authors: [{ name: "Osama" }],
    alternates: {
      canonical: `https://www.osamadives.com/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `https://www.osamadives.com/blog/${post.slug}`,
      siteName: "OsamaDives",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["Osama"],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
