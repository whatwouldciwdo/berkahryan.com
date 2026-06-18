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
      title: "Blog Post | CV. Berkah Ryan",
    };
  }
  return {
    title: `${post.title} | Jurnal Berkah Ryan`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
