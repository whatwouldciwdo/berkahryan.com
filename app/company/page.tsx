import React from "react";
import type { Metadata } from "next";
import CompanyClient from "./CompanyClient";

export const metadata: Metadata = {
  title: "Tentang Kami - CV. Berkah Ryan | Rental Alat Berat Banten",
  description: "Profil CV. Berkah Ryan, penyedia jasa rental alat berat terpercaya di Cilegon Banten. Komitmen tinggi pada keselamatan (K3) dan penyediaan crane serta forklift berkualitas.",
};

export default function CompanyPage() {
  return <CompanyClient />;
}
