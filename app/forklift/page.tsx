import React from "react";
import type { Metadata } from "next";
import ForkliftClient from "./ForkliftClient";

export const metadata: Metadata = {
  title: "Sewa Forklift Cilegon & Trailer 40 Feet | Logistik Alat Berat Banten",
  description:
    "Rental forklift 3–35 Ton terawat di Cilegon Banten (merek TCM, Daewoo, Mitsubishi). Juga tersedia sewa trailer 40 feet flatbed/lowbed dan steel road plate 25mm untuk mobilisasi alat berat.",
  alternates: {
    canonical: "https://berkahryan.com/forklift",
  },
  openGraph: {
    title: "Sewa Forklift Cilegon & Trailer 40 Feet | Logistik Alat Berat Banten",
    description:
      "Rental forklift 3–35 Ton, trailer 40 feet, dan steel plate 25mm di Cilegon Banten. Operator berpengalaman, sewa harian/mingguan/bulanan. K3 certified.",
    url: "https://berkahryan.com/forklift",
    type: "website",
    images: [
      {
        url: "/berkah-ryan-rental-alat-berat-cilegon.webp",
        width: 1200,
        height: 630,
        alt: "Sewa Forklift & Trailer Cilegon Banten - CV. Berkah Ryan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sewa Forklift Cilegon — CV. Berkah Ryan",
    description:
      "Rental forklift 3–35 Ton, trailer 40 Feet & steel plate 25mm di Banten. Sewa harian/mingguan/bulanan. Hubungi kami 24/7.",
    images: ["/berkah-ryan-rental-alat-berat-cilegon.webp"],
  },
};

export default function ForkliftPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sewa Forklift & Logistik Alat Berat Cilegon Banten",
    description:
      "Layanan rental forklift 3–35 Ton, trailer 40 feet, dan steel road plate 25mm di Cilegon Banten untuk bongkar muat material pabrik, gudang, dan mobilisasi alat berat.",
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
    ],
    serviceType: "Heavy Equipment Rental",
    url: "https://berkahryan.com/forklift",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Armada Forklift & Logistik",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Forklift",
            description: "TCM (3, 5, 10 Ton), Daewoo/Mitsubishi (15, 25, 35 Ton). Sewa harian, mingguan, bulanan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Trailer 40 Feet",
            description: "Trailer cargo flatbed dan lowbed untuk mobilisasi alat berat di wilayah Banten.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Steel Road Plate (Pelat Baja)",
            description: "Pelat baja tebal 25mm ukuran 1.5m x 6m untuk proteksi tanah dan stabilisasi medan berlumpur.",
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
      <ForkliftClient />
    </>
  );
}
