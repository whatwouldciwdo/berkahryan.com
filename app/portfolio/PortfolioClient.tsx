"use client";

import React from "react";
import PageLayout from "../components/PageLayout";
import styles from "../components/SubPage.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function PortfolioClient() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.label}>{t("portfolioLabel")}</span>
            <h1 className={styles.title}>{t("portfolioTitle")}</h1>
          </header>

          <div className={styles.grid}>
            <div className={styles.leftCol}>
              {t("portfolioIntro")}
            </div>
            <div className={styles.rightCol}>
              <p>{t("portfolioP1")}</p>
              <p>{t("portfolioP2")}</p>
              <p>{t("portfolioP3")}</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
