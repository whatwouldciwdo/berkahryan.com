import React from "react";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Hubungi Kami - CV. Berkah Ryan | Rental Alat Berat Banten",
  description: "Hubungi CV. Berkah Ryan untuk penawaran harga sewa crane dan forklift di Cilegon Banten. Layanan pelanggan 24/7 untuk keadaan darurat operasional.",
};

export default function ContactPage() {
  return <ContactClient />;
}
