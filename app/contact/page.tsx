import React from "react";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Hubungi CV. Berkah Ryan | Penawaran Sewa Crane & Forklift Banten",
  description:
    "Hubungi CV. Berkah Ryan untuk penawaran harga sewa crane dan forklift di Cilegon Banten. WhatsApp: 0818 0899 9462. Email: enquiries@berkahryan.com. Layanan 24/7 untuk keadaan darurat operasional.",
  alternates: {
    canonical: "https://berkahryan.com/contact",
  },
  openGraph: {
    title: "Hubungi CV. Berkah Ryan | Penawaran Sewa Crane & Forklift",
    description:
      "Dapatkan penawaran harga sewa crane & forklift di Cilegon Banten. Hubungi via WhatsApp 0818 0899 9462 atau email enquiries@berkahryan.com. Layanan 24/7.",
    url: "https://berkahryan.com/contact",
    type: "website",
    images: [
      {
        url: "/berkah-ryan-rental-alat-berat-cilegon.webp",
        width: 1200,
        height: 630,
        alt: "Hubungi CV. Berkah Ryan — Rental Alat Berat Cilegon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubungi CV. Berkah Ryan — Sewa Crane & Forklift Banten",
    description:
      "WA: 0818 0899 9462 | Email: enquiries@berkahryan.com. Layanan 24/7 untuk darurat operasional alat berat di Cilegon.",
    images: ["/berkah-ryan-rental-alat-berat-cilegon.webp"],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Hubungi CV. Berkah Ryan",
    url: "https://berkahryan.com/contact",
    description:
      "Halaman kontak CV. Berkah Ryan untuk penawaran sewa crane dan forklift di Cilegon Banten.",
    mainEntity: {
      "@type": "EquipmentRentalAgency",
      name: "CV. Berkah Ryan",
      url: "https://berkahryan.com",
      telephone: "+6281808999462",
      email: "enquiries@berkahryan.com",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+6281808999462",
          contactType: "customer service",
          availableLanguage: ["Indonesian", "English"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jalan Lada BBS II Blok A-1/14, Rt 009, Rw 006, Desa Ciwaduk, Kec. Cilegon",
        addressLocality: "Cilegon",
        addressRegion: "Banten",
        postalCode: "42415",
        addressCountry: "ID",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
