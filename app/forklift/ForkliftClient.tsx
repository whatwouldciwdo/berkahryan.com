"use client";

import React from "react";
import Image from "next/image";
import PageLayout from "../components/PageLayout";
import styles from "../components/SubPage.module.css";
import { useLanguage } from "../context/LanguageContext";

const forkliftFleet = [
  {
    id: 5,
    titleKey: "forkliftSec1Title",
    descKey: "forkliftSec1Desc",
    image: "/images/fleet/forklift.png",
    specs: [
      { label: "TCM", value: "3, 5, 10 Ton" },
      { label: "Daewoo / Mitsubishi", value: "15, 25, 35 Ton" },
    ]
  },
  {
    id: 6,
    titleKey: "forkliftSec2Title",
    descKey: "forkliftSec2Desc",
    image: "/images/fleet/trailer.png",
    specs: [
      { label: "Capacity / Type", value: "Flatbed / Lowbed" },
      { label: "Size", value: "40 Feet" },
    ]
  },
  {
    id: 7,
    titleKey: "forkliftSec3Title",
    descKey: "forkliftSec3Desc",
    image: "/images/fleet/steel_plate.png",
    specs: [
      { label: "Thickness", value: "25 mm" },
      { label: "Dimensions", value: "1.5m x 6m" },
    ]
  }
];

export default function ForkliftClient() {
  const { language, t } = useLanguage();

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.label}>{t("forkliftLabel")}</span>
            <h1 className={styles.title}>{t("forkliftTitle")}</h1>
          </header>

          <div className={styles.grid}>
            <div className={styles.leftCol}>
              {t("forkliftIntro")}
            </div>
            <div className={styles.rightCol}>
              <p>{t("forkliftP1")}</p>
            </div>
          </div>

          <div className={styles.fleetShowcase}>
            {forkliftFleet.map((item, index) => {
              const formattedNumber = String(item.id).padStart(2, "0");
              return (
                <div key={item.id} className={styles.fleetRow}>
                  <div className={styles.fleetImageWrapper}>
                    <Image
                      src={item.image}
                      alt={t(item.titleKey)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className={styles.fleetImage}
                      priority={index === 0}
                    />
                  </div>
                  
                  <div className={styles.fleetMeta}>
                    <span className={styles.fleetNumber}>{formattedNumber}</span>
                    <div className={styles.fleetHeader}>
                      <span className={styles.badgeK3}>
                        <svg 
                          className={styles.safetyIcon}
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
                          <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                          <path d="M4 15a8 8 0 0 1 16 0" />
                        </svg>
                        Ready for Operations
                      </span>
                      <h2 className={styles.fleetCategoryTitle}>
                        {t(item.titleKey).replace(/^\d+\.\s*/, "")}
                      </h2>
                      <p className={styles.fleetDesc}>
                        {t(item.descKey)}
                      </p>
                    </div>
                  </div>

                  <div className={styles.specsList}>
                    <div className={styles.specsHeader}>
                      {language === "id" ? "Spesifikasi & Ukuran" : "Specifications & Size"}
                    </div>
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className={styles.specRow}>
                        <span className={styles.specRowBrand}>{spec.label}</span>
                        <span className={styles.specRowCapacity}>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
