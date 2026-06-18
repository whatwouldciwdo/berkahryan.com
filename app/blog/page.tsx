import React from "react";
import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Jurnal & Wawasan Industri Alat Berat | CV. Berkah Ryan",
  description: "Kumpulan artikel, panduan logistik rigging crane, standar K3 di Indonesia, dan tips memilih kapasitas forklift untuk operasional proyek Anda.",
};

export default function BlogPage() {
  return <BlogClient />;
}
