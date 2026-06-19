import React from "react";
import type { Metadata } from "next";
import SafetyClient from "./SafetyClient";

export const metadata: Metadata = {
  title: "Kebijakan Keselamatan K3 Alat Berat | Riksa Uji & SIO | CV. Berkah Ryan",
  description:
    "Komitmen keselamatan kerja K3 CV. Berkah Ryan: riksa uji berkala (SIA), lisensi operator SIO Kemnaker aktif, lift plan, dan APD lengkap. Zero accident dalam setiap operasi alat berat di Banten.",
  alternates: {
    canonical: "https://berkahryan.com/safety",
  },
  openGraph: {
    title: "Kebijakan Keselamatan K3 | Riksa Uji & Operator SIO | CV. Berkah Ryan",
    description:
      "Standar K3 CV. Berkah Ryan: riksa uji alat (SIA), operator berlisensi SIO, lift plan kalkulasi, dan perimeter APD. Komitmen zero accident di setiap proyek.",
    url: "https://berkahryan.com/safety",
    type: "website",
    images: [
      {
        url: "/berkah-ryan-rental-alat-berat-cilegon.webp",
        width: 1200,
        height: 630,
        alt: "Kebijakan K3 CV. Berkah Ryan — Keselamatan Alat Berat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kebijakan K3 — CV. Berkah Ryan",
    description:
      "Riksa uji SIA, operator SIO aktif, lift plan & APD standar. Komitmen zero accident di setiap proyek alat berat Banten.",
    images: ["/berkah-ryan-rental-alat-berat-cilegon.webp"],
  },
};

export default function SafetyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kebijakan Keselamatan K3 — CV. Berkah Ryan",
    url: "https://berkahryan.com/safety",
    description:
      "Halaman kebijakan keselamatan dan kesehatan kerja (K3) CV. Berkah Ryan dalam operasional persewaan crane dan forklift di Banten.",
    publisher: {
      "@type": "Organization",
      name: "CV. Berkah Ryan",
      url: "https://berkahryan.com",
    },
    about: {
      "@type": "Thing",
      name: "Keselamatan dan Kesehatan Kerja (K3)",
      description:
        "Standar K3 Kemnaker RI yang mencakup riksa uji alat, lisensi SIO operator, lift plan, dan APD untuk operasi alat berat.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SafetyClient />
    </>
  );
}
