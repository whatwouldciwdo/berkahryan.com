"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import styles from "../components/SubPage.module.css";
import pcStyles from "./portfolio-client.module.css";
import { useLanguage } from "../context/LanguageContext";
import { portfolioProjects, portfolioArticles, portfolioArticlesEn } from "../data/portfolio";

export default function PortfolioClient() {
  const { t, language } = useLanguage();
  const isId = language === "id";
  const articlesMap = isId ? portfolioArticles : portfolioArticlesEn;

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* PAGE HEADER */}
          <header className={styles.header}>
            <span className={styles.label}>{t("portfolioLabel")}</span>
            <h1 className={styles.title}>{t("portfolioTitle")}</h1>
          </header>

          {/* INTRO TEXT */}
          <div className={styles.grid}>
            <div className={styles.leftCol}>{t("portfolioIntro")}</div>
            <div className={styles.rightCol}>
              <p>{t("portfolioP1")}</p>
              <p>{t("portfolioP2")}</p>
            </div>
          </div>
        </div>

        {/* PORTFOLIO GRID */}
        <div className={pcStyles.projectsGrid}>
          {portfolioProjects.map((project, index) => {
            const article = articlesMap[project.slug];
            return (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className={pcStyles.projectCard}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* IMAGE */}
                <div className={pcStyles.imageWrapper}>
                  <Image
                    src={project.heroImage}
                    alt={`Proyek ${project.clientName} — CV. Berkah Ryan`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={pcStyles.image}
                    priority={index < 2}
                  />
                  <div
                    className={pcStyles.imageOverlay}
                    style={{ background: project.gradient }}
                  />

                  {/* Tags */}
                  <div className={pcStyles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={pcStyles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CARD BODY */}
                <div className={pcStyles.cardBody}>
                  {/* Client Logo */}
                  <div className={pcStyles.clientLogoRow}>
                    <div className={pcStyles.logoWrap}>
                      <Image
                        src={project.logo}
                        alt={`Logo ${project.clientName}`}
                        width={80}
                        height={32}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <span className={pcStyles.year}>{project.year}</span>
                  </div>

                  <h2 className={pcStyles.clientName}>{project.clientName}</h2>
                  <p className={pcStyles.excerpt}>
                    {article?.excerpt?.slice(0, 140)}…
                  </p>

                  {/* Meta row */}
                  <div className={pcStyles.metaRow}>
                    <span className={pcStyles.metaChip}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {project.location}
                    </span>
                    <span className={pcStyles.metaChip}>
                      {project.mainEquipment}
                    </span>
                  </div>

                  <div className={pcStyles.readMore}>
                    <span>{isId ? "Lihat Studi Kasus" : "View Case Study"}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className={pcStyles.bottomCta}>
          <div className={pcStyles.bottomCtaInner}>
            <h2 className={pcStyles.bottomCtaTitle}>
              {isId ? "Siap Mendukung Proyek Anda Berikutnya" : "Ready to Support Your Next Project"}
            </h2>
            <p className={pcStyles.bottomCtaText}>
              {isId
                ? "Hubungi tim kami untuk penawaran crane, forklift, dan logistik alat berat yang disesuaikan dengan kebutuhan spesifik proyek Anda."
                : "Contact our team for a customized crane, forklift, and heavy equipment logistics quote tailored to your project's specific needs."}
            </p>
            <Link href="/contact" className={pcStyles.bottomCtaBtn}>
              {isId ? "Diskusikan Proyek Anda" : "Discuss Your Project"}
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
