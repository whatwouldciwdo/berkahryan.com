import React from "react";
import type { Metadata } from "next";
import CraneClient from "./CraneClient";

export const metadata: Metadata = {
  title: "Sewa Crane Cilegon Banten | Telescopic, Crawler, Roughter Crane K3",
  description:
    "Layanan rental crane terlengkap di Banten. Sewa Telescopic Mobile Crane 25–600 Ton, Crawler Crane 45–550 Ton, Roughter Crane 25–110 Ton, dan Truck Mounted Crane 3–16 Ton bersertifikat K3 dengan operator SIO aktif.",
  alternates: {
    canonical: "https://berkahryan.com/crane",
  },
  openGraph: {
    title: "Sewa Crane Cilegon Banten | Telescopic, Crawler & Roughter Crane K3",
    description:
      "Sewa crane kapasitas 3–600 Ton di Cilegon Banten. Tersedia Telescopic Mobile Crane, Crawler Crane, Roughter Crane, dan Truck Mounted Crane bersertifikasi K3.",
    url: "https://berkahryan.com/crane",
    type: "website",
    images: [
      {
        url: "/berkah-ryan-rental-alat-berat-cilegon.webp",
        width: 1200,
        height: 630,
        alt: "Sewa Crane Cilegon Banten - CV. Berkah Ryan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sewa Crane Cilegon Banten — CV. Berkah Ryan",
    description:
      "Rental crane 3–600 Ton bersertifikat K3 di Banten. Telescopic, Crawler, Roughter Crane. Operator SIO aktif. Hubungi kami 24/7.",
    images: ["/berkah-ryan-rental-alat-berat-cilegon.webp"],
  },
};

export default function CranePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sewa Crane Cilegon Banten",
    description:
      "Layanan rental crane profesional berkapasitas 3 hingga 600 Ton di Cilegon dan Banten, tersedia Telescopic Mobile Crane, Crawler Crane, Roughter Crane, dan Truck Mounted Crane bersertifikasi K3 Kemnaker.",
    provider: {
      "@type": "EquipmentRentalAgency",
      name: "CV. Berkah Ryan",
      url: "https://berkahryan.com",
      telephone: "+6281808999462",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cilegon",
        addressRegion: "Banten",
        postalCode: "42415",
        addressCountry: "ID",
      },
    },
    areaServed: [
      { "@type": "City", name: "Cilegon" },
      { "@type": "AdministrativeArea", name: "Banten" },
      { "@type": "City", name: "Serang" },
    ],
    serviceType: "Heavy Equipment Rental",
    url: "https://berkahryan.com/crane",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Armada Crane",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Telescopic Mobile Crane",
            description: "Tersedia merek Tadano, Sany, Kato, Liebherr, Demag kapasitas 25–600 Ton",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Crawler Crane",
            description: "Link Belt, Sumitomo, P&H, Manitowoc, Demag, Kobelco kapasitas 45–550 Ton",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Roughter Crane (Rough Terrain Crane)",
            description: "Tadano & Kato kapasitas 25–110 Ton untuk medan proyek ekstrem",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Truck Mounted Crane",
            description: "Tadano & Unic kapasitas 3–16 Ton untuk area perkotaan dan semi-offroad",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CraneClient />
    </>
  );
}
