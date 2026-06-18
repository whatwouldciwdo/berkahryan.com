import React from "react";
import type { Metadata } from "next";
import SafetyClient from "./SafetyClient";

export const metadata: Metadata = {
  title: "Kebijakan Keselamatan & K3 Alat Berat | CV. Berkah Ryan",
  description: "Komitmen keselamatan kerja K3 CV. Berkah Ryan dalam persewaan crane & forklift di Banten. Informasi riksa uji alat, lisensi operator SIO, dan lift plan.",
};

export default function SafetyPage() {
  return <SafetyClient />;
}
