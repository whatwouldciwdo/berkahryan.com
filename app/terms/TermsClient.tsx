"use client";

import React from "react";
import PageLayout from "../components/PageLayout";
import styles from "../components/SubPage.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function TermsClient() {
  const { language } = useLanguage();

  const isId = language === "id";

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.label}>
              {isId ? "Legalitas & Ketentuan" : "Legal & Terms"}
            </span>
            <h1 className={styles.title}>
              {isId ? "Syarat & Ketentuan" : "Terms & Conditions"}
            </h1>
          </header>

          <div className={styles.grid}>
            <div className={styles.leftCol}>
              {isId
                ? "Dengan menggunakan layanan CV. Berkah Ryan, Anda menyetujui syarat dan ketentuan berikut."
                : "By using the services of CV. Berkah Ryan, you agree to the following terms and conditions."}
            </div>
            <div className={styles.rightCol}>
              <p>
                {isId
                  ? "Seluruh transaksi sewa alat berat tunduk pada perjanjian sewa tertulis yang ditandatangani kedua belah pihak sebelum unit dikirimkan ke lokasi proyek. Perjanjian tersebut mencakup durasi sewa, biaya mobilisasi dan demobilisasi, tanggung jawab kerusakan, serta ketentuan perpanjangan kontrak."
                  : "All heavy equipment rental transactions are subject to a written rental agreement signed by both parties before the unit is delivered to the project site. The agreement covers the rental period, mobilization and demobilization costs, damage liability, and contract extension provisions."}
              </p>
              <p style={{ marginTop: "32px" }}>
                {isId
                  ? "Klien bertanggung jawab atas kesiapan lokasi, termasuk akses jalan, stabilitas tanah, dan izin masuk. CV. Berkah Ryan tidak bertanggung jawab atas keterlambatan yang disebabkan oleh kondisi lapangan yang tidak memadai atau izin proyek yang belum lengkap."
                  : "The client is responsible for site readiness, including road access, ground stability, and entry permits. CV. Berkah Ryan is not liable for delays caused by inadequate site conditions or incomplete project permits."}
              </p>
              <p style={{ marginTop: "32px" }}>
                {isId
                  ? "Untuk pertanyaan lebih lanjut mengenai syarat dan ketentuan, silakan hubungi kami melalui email di enquiries@berkahryan.com atau WhatsApp ke 0818 0899 9462."
                  : "For further inquiries regarding our terms and conditions, please contact us via email at enquiries@berkahryan.com or WhatsApp at 0818 0899 9462."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
