import React from "react";
import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Jurnal & Wawasan Industri Alat Berat | CV. Berkah Ryan",
  description:
    "Artikel edukatif seputar keselamatan K3, logistik rigging crane, standar SIO Kemnaker, dan tips memilih kapasitas forklift untuk operasional proyek industri di Indonesia.",
  alternates: {
    canonical: "https://berkahryan.com/blog",
  },
  openGraph: {
    title: "Jurnal & Wawasan Industri Alat Berat | CV. Berkah Ryan",
    description:
      "Panduan K3, logistik crane perkotaan, standar sertifikasi SIO, dan tips forklift gudang rak tinggi. Edukasi industri alat berat dari CV. Berkah Ryan.",
    url: "https://berkahryan.com/blog",
    type: "website",
    images: [
      {
        url: "/berkah-ryan-rental-alat-berat-cilegon.webp",
        width: 1200,
        height: 630,
        alt: "Jurnal Industri Alat Berat — CV. Berkah Ryan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jurnal Alat Berat — CV. Berkah Ryan",
    description:
      "Artikel K3, rigging crane, SIO Kemnaker & panduan forklift dari praktisi alat berat Indonesia.",
    images: ["/berkah-ryan-rental-alat-berat-cilegon.webp"],
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Jurnal Berkah Ryan",
    url: "https://berkahryan.com/blog",
    description:
      "Kumpulan artikel edukatif industri alat berat: keselamatan K3, logistik crane, sertifikasi SIO, dan operasional forklift di Indonesia.",
    publisher: {
      "@type": "Organization",
      name: "CV. Berkah Ryan",
      url: "https://berkahryan.com",
      logo: {
        "@type": "ImageObject",
        url: "https://berkahryan.com/berkahryan-logo.svg",
      },
    },
    inLanguage: "id-ID",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  );
}
