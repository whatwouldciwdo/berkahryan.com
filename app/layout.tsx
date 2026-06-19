import type { Metadata } from "next";
import { Space_Grotesk, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://berkahryan.com"),
  title: {
    default: "CV. Berkah Ryan | Rental Alat Berat Crane & Forklift Cilegon Banten",
    template: "%s | CV. Berkah Ryan",
  },
  description:
    "Jasa rental alat berat terpercaya di Cilegon, Banten. Sewa crane 3–600 Ton, forklift 3–35 Ton, trailer 40 Feet & steel plate dengan operator berlisensi SIO K3. Layanan 24/7.",
  keywords: [
    "rental alat berat Cilegon",
    "sewa crane Banten",
    "sewa forklift Cilegon",
    "jasa crane Banten",
    "sewa crane K3",
    "rental crane Cilegon Banten",
    "CV Berkah Ryan",
    "crawler crane Cilegon",
    "telescopic crane Banten",
    "sewa forklift K3",
  ],
  authors: [{ name: "CV. Berkah Ryan", url: "https://berkahryan.com" }],
  creator: "CV. Berkah Ryan",
  publisher: "CV. Berkah Ryan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    url: "https://berkahryan.com",
    siteName: "CV. Berkah Ryan",
    title: "CV. Berkah Ryan | Rental Alat Berat Crane & Forklift Cilegon Banten",
    description:
      "Jasa rental alat berat terpercaya di Cilegon, Banten. Sewa crane 3–600 Ton, forklift 3–35 Ton, trailer 40 Feet & steel plate dengan operator berlisensi SIO K3.",
    images: [
      {
        url: "/berkah-ryan-rental-alat-berat-cilegon.webp",
        width: 1200,
        height: 630,
        alt: "CV. Berkah Ryan — Rental Alat Berat Crane & Forklift Cilegon Banten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV. Berkah Ryan | Rental Alat Berat Cilegon Banten",
    description:
      "Sewa crane 3–600 Ton & forklift 3–35 Ton bersertifikasi K3 di Cilegon Banten. Operator berlisensi SIO. Layanan 24/7.",
    images: ["/berkah-ryan-rental-alat-berat-cilegon.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon/favicon.ico" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  alternates: {
    canonical: "https://berkahryan.com",
    languages: {
      "id-ID": "https://berkahryan.com",
      "en-US": "https://berkahryan.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${outfit.variable} ${spaceMono.variable}`}
    >
      <body className={outfit.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
