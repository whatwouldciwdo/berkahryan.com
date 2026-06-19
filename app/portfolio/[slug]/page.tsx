import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioProjects, portfolioArticles } from "../../data/portfolio";
import PortfolioDetailClient from "./PortfolioDetailClient";

interface PortfolioDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  const article = portfolioArticles[slug];

  if (!project || !article) {
    return {
      title: "Proyek Tidak Ditemukan | CV. Berkah Ryan",
    };
  }

  const canonicalUrl = `https://berkahryan.com/portfolio/${slug}`;
  const ogImage = project.heroImage.startsWith("/")
    ? project.heroImage
    : "/berkah-ryan-rental-alat-berat-cilegon.webp";

  return {
    title: `${article.title} | CV. Berkah Ryan`,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: canonicalUrl,
      type: "article",
      authors: ["CV. Berkah Ryan"],
      tags: [...article.keywords, "Alat Berat", "K3", "Banten"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.clientName} — Proyek Alat Berat CV. Berkah Ryan`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt.slice(0, 200),
      images: [ogImage],
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  const article = portfolioArticles[slug];

  if (!project || !article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        url: `https://berkahryan.com/portfolio/${slug}`,
        datePublished: article.date,
        dateModified: article.date,
        image: {
          "@type": "ImageObject",
          url: `https://berkahryan.com${project.heroImage}`,
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
        about: {
          "@type": "Organization",
          name: project.clientNameFull,
        },
        keywords: article.keywords.join(", "),
        inLanguage: "id-ID",
        isPartOf: {
          "@type": "CollectionPage",
          name: "Portofolio CV. Berkah Ryan",
          url: "https://berkahryan.com/portfolio",
        },
      },
      // FAQ Schema for rich results
      ...(article.faq && article.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              url: `https://berkahryan.com/portfolio/${slug}`,
              mainEntity: article.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioDetailClient slug={slug} />
    </>
  );
}
