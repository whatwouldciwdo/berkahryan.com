import React from "react";
import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portofolio Proyek & Studi Kasus - CV. Berkah Ryan",
  description: "Lihat pengalaman CV. Berkah Ryan dalam mendukung lebih dari 8.000 proyek infrastruktur, industri petrokimia, dan logistik pergudangan di 20 kota.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
