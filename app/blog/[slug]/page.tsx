import React from "react";
import type { Metadata } from "next";
import { posts } from "../../data/posts";
import BlogPostClient from "./BlogPostClient";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.id.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.id.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan | CV. Berkah Ryan",
      description: "Artikel blog yang Anda cari tidak ditemukan.",
    };
  }

  // Pick a representative image — use the post's own image if it's a real OG-friendly asset
  const ogImage = post.image.startsWith("/")
    ? post.image
    : "/berkah-ryan-rental-alat-berat-cilegon.webp";

  return {
    title: `${post.title} | Jurnal CV. Berkah Ryan`,
    description: post.excerpt,
    alternates: {
      canonical: `https://berkahryan.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://berkahryan.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["CV. Berkah Ryan"],
      tags: [post.category, "Alat Berat", "K3", "Crane", "Forklift"],
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // Get post data for JSON-LD (server-side, uses Indonesian version as canonical)
  const post = posts.id.find((p) => p.slug === slug);

  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        url: `https://berkahryan.com/blog/${post.slug}`,
        datePublished: post.date,
        dateModified: post.date,
        image: {
          "@type": "ImageObject",
          url: `https://berkahryan.com${post.image}`,
          width: 1200,
          height: 630,
        },
        author: {
          "@type": "Organization",
          name: "CV. Berkah Ryan",
          url: "https://berkahryan.com",
        },
        publisher: {
          "@type": "Organization",
          name: "CV. Berkah Ryan",
          url: "https://berkahryan.com",
          logo: {
            "@type": "ImageObject",
            url: "https://berkahryan.com/berkahryan-logo.svg",
          },
        },
        articleSection: post.category,
        inLanguage: "id-ID",
        isPartOf: {
          "@type": "Blog",
          name: "Jurnal Berkah Ryan",
          url: "https://berkahryan.com/blog",
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogPostClient slug={slug} />
    </>
  );
}
