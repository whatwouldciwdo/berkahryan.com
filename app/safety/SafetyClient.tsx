"use client";

import React from "react";
import PageLayout from "../components/PageLayout";
import styles from "../components/SubPage.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function SafetyClient() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.label}>{t("safetyLabel")}</span>
            <h1 className={styles.title}>{t("safetyTitle")}</h1>
          </header>

          <div className={styles.grid}>
            <div className={styles.leftCol}>
              {t("safetyIntro")}
            </div>
            <div className={styles.rightCol}>
              <p>{t("safetyP1")}</p>
              <p>{t("safetyP2")}</p>
            </div>
          </div>

          <div style={{ marginTop: "80px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "60px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "400", color: "var(--color-accent)", marginBottom: "15px" }}>
                  {t("safetyPillar1Title")}
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#ccc", fontWeight: "300" }}>
                  {t("safetyPillar1Text")}
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "400", color: "var(--color-accent)", marginBottom: "15px" }}>
                  {t("safetyPillar2Title")}
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#ccc", fontWeight: "300" }}>
                  {t("safetyPillar2Text")}
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "400", color: "var(--color-accent)", marginBottom: "15px" }}>
                  {t("safetyPillar3Title")}
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#ccc", fontWeight: "300" }}>
                  {t("safetyPillar3Text")}
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "400", color: "var(--color-accent)", marginBottom: "15px" }}>
                  {t("safetyPillar4Title")}
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#ccc", fontWeight: "300" }}>
                  {t("safetyPillar4Text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
