import React from "react";
import type { Metadata } from "next";
import CraneClient from "./CraneClient";

export const metadata: Metadata = {
  title: "Sewa Crane Cilegon Banten | CV. Berkah Ryan",
  description: "Layanan rental crane terlengkap di Banten. Menyediakan sewa Telescopic Mobile Crane, All-Terrain Crane, Crawler Crane, dan Roughter Crane 5 - 550 Ton bersertifikat K3 dengan operator berlisensi.",
};

export default function CranePage() {
  return <CraneClient />;
}
