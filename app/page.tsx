import React from "react";
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "CV. Berkah Ryan | Rental Alat Berat & Jasa Sewa Crane Cilegon Banten",
  description:
    "Jasa rental alat berat terpercaya di Cilegon, Banten. Menyediakan sewa crane 3–600 Ton, forklift 3–35 Ton, trailer 40 Feet, dan steel plate dengan operator berlisensi SIO K3.",
  alternates: {
    canonical: "https://berkahryan.com",
  },
  openGraph: {
    title: "CV. Berkah Ryan | Rental Alat Berat & Jasa Sewa Crane Cilegon Banten",
    description:
      "Sewa crane 3–600 Ton & forklift 3–35 Ton bersertifikasi K3. Tersedia Telescopic, Crawler, Roughter Crane & Forklift dengan operator berlisensi SIO Kemnaker.",
    url: "https://berkahryan.com",
    type: "website",
    images: [
      {
        url: "/berkah-ryan-rental-alat-berat-cilegon.webp",
        width: 1200,
        height: 630,
        alt: "CV. Berkah Ryan — Rental Alat Berat Crane & Forklift Cilegon Banten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV. Berkah Ryan | Rental Crane & Forklift Cilegon Banten",
    description:
      "Sewa crane 3–600 Ton & forklift 3–35 Ton bersertifikasi K3 di Cilegon. Operator berlisensi SIO aktif. Hubungi kami 24/7.",
    images: ["/berkah-ryan-rental-alat-berat-cilegon.webp"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EquipmentRentalAgency",
        "@id": "https://berkahryan.com/#localbusiness",
        name: "CV. Berkah Ryan",
        alternateName: "Berkah Ryan Heavy Equipment",
        image: "https://berkahryan.com/berkah-ryan-rental-alat-berat-cilegon.webp",
        logo: "https://berkahryan.com/berkahryan-logo.svg",
        url: "https://berkahryan.com",
        telephone: "+6281808999462",
        email: "enquiries@berkahryan.com",
        foundingDate: "2023",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jalan Lada BBS II Blok A-1/14, Rt 009, Rw 006, Desa Ciwaduk, Kec. Cilegon",
          addressLocality: "Cilegon",
          addressRegion: "Banten",
          postalCode: "42415",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -5.9984,
          longitude: 106.0264,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Banten" },
          { "@type": "City", name: "Cilegon" },
          { "@type": "City", name: "Serang" },
          { "@type": "City", name: "Tangerang" },
          { "@type": "City", name: "Anyer" },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan Rental Alat Berat",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sewa Crane Cilegon Banten",
                description: "Rental Telescopic Mobile Crane, Crawler Crane, Roughter Crane kapasitas 3–600 Ton bersertifikasi K3",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sewa Forklift Cilegon",
                description: "Rental forklift 3–35 Ton untuk bongkar muat material pabrik dan logistik gudang di Banten",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sewa Trailer & Steel Plate Banten",
                description: "Rental trailer 40 feet flatbed/lowbed dan pelat baja 25mm untuk mobilisasi alat berat",
              },
            },
          ],
        },
        sameAs: ["https://berkahryan.com"],
      },
      {
        "@type": "WebSite",
        "@id": "https://berkahryan.com/#website",
        url: "https://berkahryan.com",
        name: "CV. Berkah Ryan",
        description: "Jasa rental alat berat terpercaya di Cilegon Banten",
        inLanguage: ["id-ID", "en-US"],
        publisher: { "@id": "https://berkahryan.com/#localbusiness" },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
