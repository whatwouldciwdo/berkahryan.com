"use client";

import React from "react";
import PageLayout from "../components/PageLayout";
import styles from "../components/SubPage.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function ContactClient() {
  const { t, language } = useLanguage();
  const isId = language === "id";

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.label}>{t("contactLabel")}</span>
            <h1 className={styles.title}>{t("contactTitle")}</h1>
          </header>

          <div className={styles.grid}>
            <div className={styles.leftCol}>
              {t("contactIntro")}
            </div>
            <div className={styles.rightCol}>
              <p>{t("contactP1")}</p>
              <p style={{ marginTop: "40px", fontSize: "1.3rem", color: "white" }}>
                <strong>CV. BERKAH RYAN</strong>
                <br />
                <span style={{ fontSize: "1.1rem", color: "var(--color-accent)" }}>{t("contactSpecialist")}</span>
              </p>
              <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: "1.6" }}>
                {isId ? "Alamat Kantor:" : "Office Address:"}
                <br />
                Jalan Lada BBS II Blok A-1/14, Rt 009, Rw 006,
                <br />
                Desa Ciwaduk, Kec. Cilegon, Provinsi Banten,
                <br />
                Kode Pos 42415
                <br /><br />
                Email: <a href="mailto:enquiries@berkahryan.com" style={{ textDecoration: "underline" }}>enquiries@berkahryan.com</a>
                <br />
                WhatsApp: <a href="https://wa.me/6281808999462" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>0818 0899 9462 (Admin 1)</a>
              </p>
              <p style={{ marginTop: "40px" }}>
                {t("contactP2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
