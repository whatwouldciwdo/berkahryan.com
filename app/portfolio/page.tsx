import React from "react";
import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portofolio Proyek Alat Berat | CV. Berkah Ryan Cilegon Banten",
  description:
    "Lihat portofolio CV. Berkah Ryan: lebih dari 8.000 proyek infrastruktur, industri petrokimia Pertamina, Chandra Asri, PLN di 20 kota Indonesia. Spesialis rigging dan lifting alat berat.",
  alternates: {
    canonical: "https://berkahryan.com/portfolio",
  },
  openGraph: {
    title: "Portofolio Proyek Alat Berat | CV. Berkah Ryan",
    description:
      "Lebih dari 8.000 proyek di 20 kota. Mitra Pertamina, Chandra Asri, PLN Indonesia Power, Lotte Chemical, Indorama. Spesialis lifting berat dan rigging K3.",
    url: "https://berkahryan.com/portfolio",
    type: "website",
    images: [
      {
        url: "/berkah-ryan-rental-alat-berat-cilegon.webp",
        width: 1200,
        height: 630,
        alt: "Portofolio Proyek CV. Berkah Ryan — Rental Alat Berat Cilegon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio Proyek — CV. Berkah Ryan",
    description:
      "8.000+ proyek di 20 kota. Mitra Pertamina, Chandra Asri, PLN, Lotte Chemical, Indorama. Alat berat bersertifikasi K3.",
    images: ["/berkah-ryan-rental-alat-berat-cilegon.webp"],
  },
};

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portofolio Proyek CV. Berkah Ryan",
    url: "https://berkahryan.com/portfolio",
    description:
      "Portofolio proyek CV. Berkah Ryan mencakup lebih dari 8.000 proyek di 20 kota Indonesia, meliputi industri petrokimia, pembangkit listrik, dan logistik pergudangan.",
    publisher: {
      "@type": "Organization",
      name: "CV. Berkah Ryan",
      url: "https://berkahryan.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioClient />
    </>
  );
}
