"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import styles from "../portfolio-detail.module.css";
import { useLanguage } from "../../context/LanguageContext";
import {
  portfolioProjects,
  portfolioArticles,
  portfolioArticlesEn,
  type PortfolioSection,
} from "../../data/portfolio";

interface PortfolioDetailClientProps {
  slug: string;
}

function renderSection(section: PortfolioSection, index: number, styles: Record<string, string>) {
  switch (section.type) {
    case "heading2":
      return <h2 key={index}>{section.content}</h2>;
    case "heading3":
      return <h3 key={index}>{section.content}</h3>;
    case "paragraph":
      return <p key={index}>{section.content}</p>;
    case "list":
      return (
        <ul key={index}>
          {section.items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "specs":
      return (
        <div key={index} className={styles.specsTable}>
          {section.specs?.map((spec, i) => (
            <div key={i} className={styles.specsRow}>
              <span className={styles.specsLabel}>{spec.label}</span>
              <span className={styles.specsValue}>{spec.value}</span>
            </div>
          ))}
        </div>
      );
    case "highlight":
      return (
        <div key={index} className={styles.highlightBox}>
          <p>{section.content}</p>
        </div>
      );
    default:
      return null;
  }
}

export default function PortfolioDetailClient({ slug }: PortfolioDetailClientProps) {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const project = portfolioProjects.find((p) => p.slug === slug);
  const articlesMap = language === "id" ? portfolioArticles : portfolioArticlesEn;
  const article = articlesMap[slug];

  // Fallback to ID if EN article content is empty
  const displayArticle =
    language === "en" && (!article?.content || article.content.length === 0)
      ? portfolioArticles[slug]
      : article;

  if (!project || !displayArticle) {
    return null;
  }

  const relatedProjects = portfolioProjects
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  const isId = language === "id";

  return (
    <PageLayout>
      <div className={styles.container}>
        {/* BACK NAV */}
        <div className={styles.backNav}>
          <Link href="/portfolio" className={styles.backBtn}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {isId ? "Kembali ke Portofolio" : "Back to Portfolio"}
          </Link>
        </div>

        {/* HERO */}
        <div className={styles.hero}>
          <div className={styles.heroImageWrapper}>
            <Image
              src={project.heroImage}
              alt={`${project.clientName} — ${isId ? "Proyek Alat Berat" : "Heavy Equipment Project"} CV. Berkah Ryan`}
              fill
              className={styles.heroImage}
              priority
              sizes="100vw"
            />
          </div>
          <div
            className={styles.heroGradient}
            style={{ background: project.gradient }}
          />
          <div className={styles.heroContent}>
            {/* BREADCRUMB */}
            <nav className={styles.heroBreadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/portfolio">{isId ? "Portofolio" : "Portfolio"}</Link>
              <span>/</span>
              <span>{project.clientName}</span>
            </nav>

            {/* TAGS */}
            <div className={styles.heroTags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.heroTag}>
                  {tag}
                </span>
              ))}
            </div>

            <h1 className={styles.heroTitle}>{displayArticle.title}</h1>
            <p className={styles.heroSubtitle}>{project.clientNameFull}</p>
          </div>
        </div>

        {/* META STRIP */}
        <div className={styles.metaStrip}>
          <div className={styles.metaItem}>
            <div className={styles.metaLabel}>{isId ? "Tahun" : "Year"}</div>
            <div className={styles.metaValue}>{project.year}</div>
          </div>
          <div className={styles.metaItem}>
            <div className={styles.metaLabel}>{isId ? "Lokasi" : "Location"}</div>
            <div className={styles.metaValue}>{project.location}</div>
          </div>
          <div className={styles.metaItem}>
            <div className={styles.metaLabel}>{isId ? "Durasi" : "Duration"}</div>
            <div className={styles.metaValue}>{project.duration}</div>
          </div>
          <div className={styles.metaItem}>
            <div className={styles.metaLabel}>{isId ? "Kapasitas" : "Capacity"}</div>
            <div className={styles.metaValue}>{project.capacity}</div>
          </div>
        </div>

        {/* MAIN BODY */}
        <div className={styles.body}>
          {/* ARTICLE */}
          <article className={styles.article}>
            {/* Lead excerpt */}
            <p className={styles.articleLead}>{displayArticle.excerpt}</p>

            {/* Content sections */}
            {displayArticle.content.map((section, index) =>
              renderSection(section, index, styles)
            )}

            {/* FAQ */}
            {displayArticle.faq && displayArticle.faq.length > 0 && (
              <section className={styles.faqSection}>
                <h2 className={styles.faqTitle}>
                  {isId ? "Pertanyaan yang Sering Diajukan" : "Frequently Asked Questions"}
                </h2>
                {displayArticle.faq.map((item, index) => (
                  <div key={index} className={styles.faqItem}>
                    <button
                      className={styles.faqQuestion}
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      aria-expanded={openFaq === index}
                    >
                      <span>{item.question}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{
                          transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.25s ease",
                          flexShrink: 0,
                        }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {openFaq === index && (
                      <p className={styles.faqAnswer}>{item.answer}</p>
                    )}
                  </div>
                ))}
              </section>
            )}
          </article>

          {/* SIDEBAR */}
          <aside className={styles.sidebar}>
            {/* Client Info */}
            <div className={styles.sidebarCard}>
              <div className={styles.sidebarCardTitle}>
                {isId ? "Informasi Klien" : "Client Info"}
              </div>
              <div className={styles.clientLogoWrapper}>
                <Image
                  src={project.logo}
                  alt={`Logo ${project.clientNameFull}`}
                  width={160}
                  height={60}
                  className={styles.clientLogo}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.sidebarStat}>
                <span className={styles.sidebarStatLabel}>
                  {isId ? "Perusahaan" : "Company"}
                </span>
                <span className={styles.sidebarStatValue}>{project.clientName}</span>
              </div>
              <div className={styles.sidebarStat}>
                <span className={styles.sidebarStatLabel}>
                  {isId ? "Industri" : "Industry"}
                </span>
                <span className={styles.sidebarStatValue}>{project.industry}</span>
              </div>
              <div className={styles.sidebarStat}>
                <span className={styles.sidebarStatLabel}>
                  {isId ? "Lokasi" : "Location"}
                </span>
                <span className={styles.sidebarStatValue}>{project.location}</span>
              </div>
              <div className={styles.sidebarStat}>
                <span className={styles.sidebarStatLabel}>
                  {isId ? "Alat Utama" : "Main Equipment"}
                </span>
                <span className={styles.sidebarStatValue}>{project.mainEquipment}</span>
              </div>
            </div>

            {/* CTA */}
            <div className={styles.ctaCard}>
              <div className={styles.ctaCardTitle}>
                {isId
                  ? "Butuh solusi lifting serupa?"
                  : "Need a similar lifting solution?"}
              </div>
              <p className={styles.ctaCardText}>
                {isId
                  ? "Tim kami siap menyiapkan penawaran dan lift plan sesuai kebutuhan proyek Anda."
                  : "Our team is ready to prepare a quote and lift plan tailored to your project."}
              </p>
              <Link href="/contact" className={styles.ctaCardBtn}>
                {isId ? "Hubungi Kami" : "Contact Us"}
              </Link>
            </div>

            {/* Related Projects */}
            <div className={styles.sidebarCard}>
              <div className={styles.sidebarCardTitle}>
                {isId ? "Proyek Lainnya" : "Other Projects"}
              </div>
              <div className={styles.relatedCard}>
                {relatedProjects.map((related) => {
                  const relatedArticle = portfolioArticles[related.slug];
                  return (
                    <Link
                      key={related.slug}
                      href={`/portfolio/${related.slug}`}
                      className={styles.relatedItem}
                    >
                      <span className={styles.relatedItemDot} />
                      <span>{relatedArticle?.title || related.clientName}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PageLayout>
  );
}
