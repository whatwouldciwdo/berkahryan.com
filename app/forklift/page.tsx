import React from "react";
import type { Metadata } from "next";
import ForkliftClient from "./ForkliftClient";

export const metadata: Metadata = {
  title: "Sewa Forklift Cilegon & Alat Pendukung Logistik | CV. Berkah Ryan",
  description: "Rental forklift 5 - 15 Ton terawat di Cilegon Banten. Menyediakan sewa trailer 40 feet untuk angkutan alat berat dan steel road plate tebal 25mm.",
};

export default function ForkliftPage() {
  return <ForkliftClient />;
}
