"use client";

import React from "react";
import PageLayout from "../components/PageLayout";
import styles from "../components/SubPage.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function CompanyClient() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.label}>{t("companyLabel")}</span>
            <h1 className={styles.title}>{t("companyTitle")}</h1>
          </header>

          <div className={styles.grid}>
            <div className={styles.leftCol}>
              {t("companyIntro")}
            </div>
            <div className={styles.rightCol}>
              <p>{t("companyP1")}</p>
              <p>{t("companyP2")}</p>
            </div>
          </div>

          <div style={{ marginTop: "80px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "60px" }}>
            <div className={styles.grid}>
              <div className={styles.leftCol}>
                <h2 style={{ fontSize: "2rem", fontWeight: "300", color: "white", marginBottom: "20px" }}>
                  {t("companyVisiTitle")}
                </h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#ccc", fontWeight: "300" }}>
                  {t("companyVisiText")}
                </p>
              </div>
              <div className={styles.rightCol}>
                <h2 style={{ fontSize: "2rem", fontWeight: "300", color: "white", marginBottom: "20px" }}>
                  {t("companyMisiTitle")}
                </h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#ccc", fontWeight: "300" }}>
                  {t("companyMisiText")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
