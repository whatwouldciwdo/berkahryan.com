import React from "react";
import type { Metadata } from "next";
import CompanyClient from "./CompanyClient";

export const metadata: Metadata = {
  title: "Tentang CV. Berkah Ryan | Penyedia Rental Alat Berat Terpercaya di Banten",
  description:
    "Profil CV. Berkah Ryan, penyedia jasa rental alat berat terpercaya di Cilegon Banten sejak 2023. Komitmen tinggi pada keselamatan K3, crane 3–600 Ton, forklift 3–35 Ton, operator SIO aktif.",
  alternates: {
    canonical: "https://berkahryan.com/company",
  },
  openGraph: {
    title: "Tentang CV. Berkah Ryan | Rental Alat Berat Banten",
    description:
      "Berdiri sejak 2023, CV. Berkah Ryan adalah penyedia rental alat berat terpercaya di Cilegon Banten. Berkomitmen pada K3, keandalan armada, dan kepuasan pelanggan.",
    url: "https://berkahryan.com/company",
    type: "website",
    images: [
      {
        url: "/berkah-ryan-rental-alat-berat-cilegon.webp",
        width: 1200,
        height: 630,
        alt: "CV. Berkah Ryan — Profil Perusahaan Rental Alat Berat Cilegon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang CV. Berkah Ryan — Rental Alat Berat Banten",
    description:
      "Penyedia rental crane & forklift sejak 2023 di Cilegon Banten. Komitmen pada keselamatan K3 & kepuasan pelanggan.",
    images: ["/berkah-ryan-rental-alat-berat-cilegon.webp"],
  },
};

export default function CompanyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Tentang CV. Berkah Ryan",
    url: "https://berkahryan.com/company",
    description:
      "Profil CV. Berkah Ryan, penyedia jasa rental alat berat berkapasitas besar di Cilegon Banten dengan sertifikasi K3 Kemnaker.",
    mainEntity: {
      "@type": "Organization",
      name: "CV. Berkah Ryan",
      foundingDate: "2023",
      url: "https://berkahryan.com",
      description:
        "CV. Berkah Ryan bergerak di bidang persewaan alat berat dengan fokus crane 3–600 Ton dan forklift 3–35 Ton di Banten.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jalan Lada BBS II Blok A-1/14, Rt 009, Rw 006, Desa Ciwaduk, Kec. Cilegon",
        addressLocality: "Cilegon",
        addressRegion: "Banten",
        postalCode: "42415",
        addressCountry: "ID",
      },
      telephone: "+6281808999462",
      email: "enquiries@berkahryan.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CompanyClient />
    </>
  );
}
