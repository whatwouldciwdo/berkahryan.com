"use client";

import React from "react";
import Image from "next/image";
import PageLayout from "../components/PageLayout";
import styles from "../components/SubPage.module.css";
import { useLanguage } from "../context/LanguageContext";

const craneFleet = [
  {
    id: 1,
    titleKey: "craneSec1Title",
    descKey: "craneSec1Desc",
    image: "/images/fleet/telescopic_crane.png",
    specs: [
      { brand: "Tadano", capacity: "20, 45, 80 Ton" },
      { brand: "Sany", capacity: "25 Ton" },
      { brand: "Kato", capacity: "50, 160 Ton" },
      { brand: "Liebherr", capacity: "200 Ton" },
      { brand: "Sumitomo", capacity: "360 Ton" },
      { brand: "Zoomlion", capacity: "55 Ton" },
    ]
  },
  {
    id: 2,
    titleKey: "craneSec2Title",
    descKey: "craneSec2Desc",
    image: "/images/fleet/terrain_crane.png",
    specs: [
      { brand: "Tadano", capacity: "5, 7, 8 Ton" },
      { brand: "Unic", capacity: "10, 15 Ton" },
    ]
  },
  {
    id: 3,
    titleKey: "craneSec3Title",
    descKey: "craneSec3Desc",
    image: "/images/fleet/crawler_crane.png",
    specs: [
      { brand: "Link Belt", capacity: "50 Ton" },
      { brand: "Sumitomo", capacity: "60 Ton" },
      { brand: "P & H", capacity: "150 Ton" },
      { brand: "Manitowoc", capacity: "200 Ton" },
      { brand: "Demac", capacity: "400 Ton" },
      { brand: "Kobelco", capacity: "550 Ton" },
    ]
  },
  {
    id: 4,
    titleKey: "craneSec4Title",
    descKey: "craneSec4Desc",
    image: "/images/fleet/roughter_crane.png",
    specs: [
      { brand: "Tadano", capacity: "20, 25, 50 Ton" },
      { brand: "Kato", capacity: "45 Ton" },
    ]
  }
];

export default function CraneClient() {
  const { language, t } = useLanguage();

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.label}>{t("craneLabel")}</span>
            <h1 className={styles.title}>{t("craneTitle")}</h1>
          </header>

          <div className={styles.grid}>
            <div className={styles.leftCol}>
              {t("craneIntro")}
            </div>
            <div className={styles.rightCol}>
              <p>{t("craneP1")}</p>
            </div>
          </div>

          <div className={styles.fleetShowcase}>
            {craneFleet.map((item, index) => {
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
                        K3 Certified
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
                      {language === "id" ? "Peralatan & Kapasitas" : "Equipment & Capacity"}
                    </div>
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className={styles.specRow}>
                        <span className={styles.specRowBrand}>{spec.brand}</span>
                        <span className={styles.specRowCapacity}>{spec.capacity}</span>
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
