import React from "react";
import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Sewa Alat Berat | CV. Berkah Ryan",
  description:
    "Syarat dan ketentuan layanan rental alat berat CV. Berkah Ryan di Cilegon Banten. Informasi perjanjian sewa, tanggung jawab klien, dan ketentuan mobilisasi unit.",
  alternates: {
    canonical: "https://berkahryan.com/terms",
  },
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: "Syarat & Ketentuan | CV. Berkah Ryan",
    description:
      "Ketentuan layanan rental alat berat CV. Berkah Ryan: perjanjian sewa tertulis, tanggung jawab klien, biaya mobilisasi, dan prosedur perpanjangan kontrak.",
    url: "https://berkahryan.com/terms",
    type: "website",
    images: [
      {
        url: "/berkah-ryan-rental-alat-berat-cilegon.webp",
        width: 1200,
        height: 630,
        alt: "Syarat dan Ketentuan — CV. Berkah Ryan",
      },
    ],
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
