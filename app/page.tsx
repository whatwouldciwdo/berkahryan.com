import React from "react";
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "CV. Berkah Ryan | Rental Alat Berat & Jasa Sewa Crane Cilegon Banten",
  description: "Jasa rental alat berat terpercaya di Cilegon, Banten. Menyediakan sewa crane 20 - 550 Ton, forklift 5 - 15 Ton, trailer 40 Feet, dan steel plate dengan operator berlisensi SIO K3.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EquipmentRentalAgency",
    "name": "CV. Berkah Ryan",
    "image": "https://berkahryan.com/berkahryan-logo.svg",
    "@id": "https://berkahryan.com/#localbusiness",
    "url": "https://berkahryan.com",
    "telephone": "+6281808999462",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jalan Lada BBS II Blok A-1/14, Rt 009, Rw 006, Desa Ciwaduk, Kec. Cilegon",
      "addressLocality": "Cilegon",
      "addressRegion": "Banten",
      "postalCode": "42415",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -5.9984,
      "longitude": 106.0264
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Banten"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Cilegon"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Serang"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Tangerang"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
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
