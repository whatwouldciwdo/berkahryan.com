"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PinnedScroll from "./components/PinnedScroll";
import styles from "./page.module.css";
import PageLayout from "./components/PageLayout";
import { useLanguage } from "./context/LanguageContext";
import { posts } from "./data/posts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const clients = [
  {
    id: "pertamina",
    name: "Pertamina",
    logo: "/images/client-logo/Pertamina_Logo.svg",
    descKey: "clientPertaminaDesc",
  },
  {
    id: "chandra-asri",
    name: "Chandra Asri",
    logo: "/images/client-logo/chandra-asri-logo.svg",
    descKey: "clientChandraAsriDesc",
  },
  {
    id: "pln",
    name: "PLN Indonesia Power",
    logo: "/images/client-logo/plnip.png",
    descKey: "clientPlnDesc",
  },
  {
    id: "lotte",
    name: "Lotte Chemical",
    logo: "/images/client-logo/lotte-chemical.png",
    descKey: "clientLotteDesc",
  },
  {
    id: "indorama",
    name: "Indorama",
    logo: "/images/client-logo/indorama-logo.png",
    descKey: "clientIndoramaDesc",
  },
];

const serviceSlides = [
  {
    id: 1,
    titleKey: "homeServicesCraneTitle",
    descKey: "homeServicesCraneDesc",
    altKey: "homeServicesCraneAlt",
    link: "/crane",
    image: "/images/fleet/sewa-crane-terpercaya-cilegon.webp",
    highlights: {
      id: [
        "Telescopic Truck Mobile Crane (Kato, Tadano, Sany)",
        "Crawler Crane Kelas Berat 50 - 550 Ton",
        "Roughter Crane untuk Medan Proyek Ekstrem",
        "Kepatuhan K3 & Operator Berlisensi SIO Aktif"
      ],
      en: [
        "Telescopic Truck Mobile Cranes (Kato, Tadano, Sany)",
        "Heavy-duty Crawler Cranes 50 - 550 Tons",
        "Roughter Cranes for Muddy & Extreme Terrains",
        "Full HSE Compliance & Licensed SIO Operators"
      ]
    }
  },
  {
    id: 2,
    titleKey: "homeServicesForkliftTitle",
    descKey: "homeServicesForkliftDesc",
    altKey: "homeServicesForkliftAlt",
    link: "/forklift",
    image: "/images/fleet/forklift.png",
    highlights: {
      id: [
        "Kapasitas Fleet Komplet 5 Ton, 10 Ton, & 15 Ton",
        "Unit Handal & Terawat (TCM, Daewoo)",
        "Skema Sewa Fleksibel (Harian, Mingguan, Bulanan)",
        "Dukungan Operator untuk Bongkar Muat Industri"
      ],
      en: [
        "Complete Capacities: 5, 10, & 15 Tons",
        "Reliable & Maintained Fleet (TCM, Daewoo)",
        "Flexible Rental Plans (Daily, Weekly, Monthly)",
        "Operator Support for Industrial Loading-Unloading"
      ]
    }
  },
  {
    id: 3,
    titleKey: "homeServicesLogisticsTitle",
    descKey: "homeServicesLogisticsDesc",
    altKey: "homeServicesLogisticsAlt",
    link: "/forklift",
    image: "/images/fleet/trailer.png",
    highlights: {
      id: [
        "Sewa Trailer Cargo 40 Feet (Flatbed / Lowbed)",
        "Sewa Steel Road Plate Tebal 25mm",
        "Penyetabil Tumpuan Crawler Crane di Tanah Lunak",
        "Layanan Pengiriman Alat Berat Tepat Waktu"
      ],
      en: [
        "40 Feet Cargo Trailer Rentals (Flatbed & Lowbed)",
        "25mm Heavy Road Steel Plates Rental",
        "Stabilizing Ground Pads for Crawler Crane Setups",
        "Punctual Heavy Equipment Mobilization Services"
      ]
    }
  }
];

export default function HomeClient() {
  const { t, language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % serviceSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + serviceSlides.length) % serviceSlides.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeSlide, isHovered]);

  // Get the latest 3 posts based on active language
  const currentPosts = posts[language] || posts.id;
  const latestPosts = currentPosts.slice(0, 3);

  useGSAP(() => {
    gsap.fromTo(`.${styles.hero} h1`, 
      { opacity: 0, y: 35 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.2 }
    );
    gsap.fromTo(`.${styles.heroBottomLeft}`, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.6 }
    );
    gsap.fromTo(`.${styles.heroPattern}`, 
      { opacity: 0, scale: 0.85 }, 
      { opacity: 0.1, scale: 1, duration: 1.6, ease: "power2.out", delay: 0.1 }
    );

    gsap.from(`.${styles.historyContent} > *`, {
      scrollTrigger: {
        trigger: `.${styles.history}`,
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    gsap.from(`.${styles.historyImageFrame}`, {
      scrollTrigger: {
        trigger: `.${styles.history}`,
        start: "top 80%",
      },
      opacity: 0,
      x: 50,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.fromTo(`.${styles.historyImage}`, 
      { scale: 1.25 }, 
      {
        scrollTrigger: {
          trigger: `.${styles.history}`,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        scale: 1.0,
        ease: "none"
      }
    );

    const statItems = gsap.utils.toArray(`.${styles.statItem}`);
    statItems.forEach((item: any) => {
      const numEl = item.querySelector(`.${styles.statNumber}`);
      if (numEl) {
        const finalVal = parseInt(numEl.innerText.replace(/,/g, ""), 10);
        const obj = { val: 0 };
        
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out"
        });
        
        gsap.to(obj, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          val: finalVal,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            numEl.innerText = Math.floor(obj.val).toLocaleString();
          }
        });
      }
    });

    gsap.from(`.${styles.servicesHeader} > *`, {
      scrollTrigger: {
        trigger: `.${styles.servicesSection}`,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    gsap.from(`.${styles.carouselContainer}`, {
      scrollTrigger: {
        trigger: `.${styles.servicesSection}`,
        start: "top 75%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(`.${styles.whyLeft} > *`, {
      scrollTrigger: {
        trigger: `.${styles.whySection}`,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    gsap.from(`.${styles.whyRight} .${styles.whyItem}`, {
      scrollTrigger: {
        trigger: `.${styles.whySection}`,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    gsap.from(`.${styles.clientsHeader} > *`, {
      scrollTrigger: {
        trigger: `.${styles.clientsSection}`,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    gsap.from(`.${styles.clientsGrid} .client-card-wrapper`, {
      scrollTrigger: {
        trigger: `.${styles.clientsSection}`,
        start: "top 75%",
      },
      opacity: 0,
      y: 35,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out"
    });

    gsap.from(`.${styles.blogHeader} > *`, {
      scrollTrigger: {
        trigger: `.${styles.homeBlogSection}`,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    gsap.from(`.${styles.blogGrid} .blog-card-wrapper`, {
      scrollTrigger: {
        trigger: `.${styles.homeBlogSection}`,
        start: "top 75%",
      },
      opacity: 0,
      y: 35,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

  }, { scope: containerRef });

  return (
    <PageLayout>
      <main className={styles.main} ref={containerRef}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <Image
            src="/berkah-ryan-rental-alat-berat-cilegon.webp"
            alt={t("heroImageAlt")}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              {/* Diamond SVG pattern behind text */}
              <Image
                src="/berkahryan-logo.svg"
                alt="Logo Pattern"
                width={800}
                height={800}
                className={styles.heroPattern}
                style={{ height: "auto" }}
                priority
              />
              {t("heroTitle")}
            </h1>
          </div>
          <div className={styles.heroBottomLeft}>
            {t("heroSubtitle")}
          </div>
        </section>

        {/* TRUST BAND (CLIENT LOGOS MARQUEE) */}
        <div className={styles.trustBand}>
          <div className="container">
            <div className={styles.trustInner}>
              <div className={styles.trustHeader}>
                <h3 className={styles.trustLabel}>{t("trustLabel")}</h3>
                <p className={styles.trustSubLabel}>{t("trustSubLabel")}</p>
              </div>
              <div className={styles.marqueeContainer}>
                <div className={styles.marqueeTrack}>
                  {[...clients, ...clients].map((client, idx) => (
                    <div key={`${client.id}-marquee-${idx}`} className={styles.marqueeLogoWrapper}>
                      <Image
                        src={client.logo}
                        alt={`${client.name} Logo`}
                        fill
                        sizes="160px"
                        className={styles.marqueeLogo}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* HISTORY SECTION */}
        <section className={styles.history}>
          <div className={`container ${styles.historyGrid}`}>
            <div className={styles.historyContent}>
              <span className={styles.historyLabel}>{t("historyLabel")}</span>
              <h2 className={styles.historyTitle}>
                {language === "id" ? (
                  <>
                    Selama lebih dari <span className={styles.highlight}>3 tahun</span>, Berkah Ryan bangga hadir di <span className={styles.highlight}>jantung industri</span> alat berat.
                  </>
                ) : (
                  <>
                    For more than <span className={styles.highlight}>3 years</span>, Berkah Ryan has been a proud presence at the <span className={styles.highlight}>heart of the heavy equipment</span> industry.
                  </>
                )}
              </h2>
              <p className={styles.historySubtitle}>{t("historySubtitleText")}</p>
              <Link href="/company" className={styles.historyLink}>
                {t("historyCta")} <span className={styles.historyLinkArrow}>→</span>
              </Link>
            </div>
            <div className={styles.historyImageWrapper}>
              <div className={styles.historyImageFrame}>
                <div className={styles.historyImageContainer}>
                  <Image
                    src="/images/crane/sejarah-berkah-ryan-heavy-equipment.webp"
                    alt={t("historyImageAlt")}
                    width={500}
                    height={375}
                    className={styles.historyImage}
                  />
                </div>
                <div className={styles.historyBadge}>
                  <span className={styles.historyBadgeNumber}>
                    {language === "id" ? "3+ Tahun" : "3+ Years"}
                  </span>
                  <span className={styles.historyBadgeLabel}>
                    {language === "id" ? "Pengalaman" : "Experience"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* STATS SECTION */}
        <section className={styles.stats}>
          <div className={`container ${styles.statsGrid}`}>
            <div>
              <h2 className={styles.statsLeftTitle}>{t("statsLeftTitle")}</h2>
              <p className={styles.statsLeftText}>
                {t("statsLeftText")}
              </p>
            </div>
            <div className={styles.statsRight}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>1,500</div>
                <div className={styles.statDesc}>
                  {t("stat1Desc")}
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>800</div>
                <div className={styles.statDesc}>
                  {t("stat2Desc")}
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>20</div>
                <div className={styles.statDesc}>
                  {t("stat3Desc")}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.servicesHeader}>
              <h2 className={styles.servicesTitle}>{t("homeServicesTitle")}</h2>
              <p className={styles.servicesSubtitle}>{t("homeServicesSubtitle")}</p>
            </div>

            <div 
              className={styles.carouselContainer}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Left Side: Big soft-faded Image wrapper */}
              <div className={styles.carouselImageWrapper}>
                {serviceSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`${styles.carouselImageItem} ${
                      index === activeSlide ? styles.carouselImageItemActive : ""
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={t(slide.altKey || slide.titleKey)}
                      fill
                      sizes="(max-width: 991px) 100vw, 50vw"
                      className={styles.carouselImage}
                      priority
                    />
                  </div>
                ))}
              </div>

              {/* Right Side: Frosted Glass details Card */}
              <div className={styles.carouselCard}>
                <div className={styles.carouselCardHeader}>
                  <span className={styles.carouselCardNum}>0{serviceSlides[activeSlide].id}</span>
                  <h3 className={styles.carouselCardTitle}>
                    {t(serviceSlides[activeSlide].titleKey)}
                  </h3>
                </div>

                <p className={styles.carouselCardDesc}>
                  {t(serviceSlides[activeSlide].descKey)}
                </p>

                {/* Structured Highlights List */}
                <ul className={styles.carouselCardHighlights}>
                  {serviceSlides[activeSlide].highlights[language === "en" ? "en" : "id"].map((highlight, idx) => (
                    <li key={idx} className={styles.highlightItem}>
                      <span className={styles.highlightBullet}>✦</span>
                      <span className={styles.highlightText}>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer of the Card: Nav Arrows + Bullet dots + Read More */}
                <div className={styles.carouselCardFooter}>
                  <div className={styles.carouselNav}>
                    <button
                      onClick={prevSlide}
                      className={styles.carouselNavBtn}
                      aria-label="Previous service"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextSlide}
                      className={styles.carouselNavBtn}
                      aria-label="Next service"
                    >
                      →
                    </button>
                  </div>

                  {/* Bullet slide indicators */}
                  <div className={styles.carouselDots}>
                    {serviceSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`${styles.carouselDot} ${
                          index === activeSlide ? styles.carouselDotActive : ""
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <Link href={serviceSlides[activeSlide].link} className={styles.carouselReadMore}>
                    {t("homeReadMore")} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DISCOVER SECTION (Pinned Scroll) */}
        <PinnedScroll />

        {/* WHY CHOOSE US SECTION */}
        <section className={styles.whySection}>
          <div className="container">
            <div className={styles.whyGrid}>
              <div className={styles.whyLeft}>
                <h2 className={styles.whyTitle}>{t("homeWhyTitle")}</h2>
                <p className={styles.whySubtitle}>{t("homeWhySubtitle")}</p>
              </div>
              <div className={styles.whyRight}>
                <div className={styles.whyItem}>
                  <h3 className={styles.whyItemTitle}>{t("homeWhy1Title")}</h3>
                  <p className={styles.whyItemDesc}>{t("homeWhy1Desc")}</p>
                </div>
                <div className={styles.whyItem}>
                  <h3 className={styles.whyItemTitle}>{t("homeWhy2Title")}</h3>
                  <p className={styles.whyItemDesc}>{t("homeWhy2Desc")}</p>
                </div>
                <div className={styles.whyItem}>
                  <h3 className={styles.whyItemTitle}>{t("homeWhy3Title")}</h3>
                  <p className={styles.whyItemDesc}>{t("homeWhy3Desc")}</p>
                </div>
                <div className={styles.whyItem}>
                  <h3 className={styles.whyItemTitle}>{t("homeWhy4Title")}</h3>
                  <p className={styles.whyItemDesc}>{t("homeWhy4Desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENTS SECTION (Case Highlights Grid) */}
        <section className={styles.clientsSection}>
          <div className="container">
            <div className={styles.clientsHeader}>
              <h2 className={styles.clientsTitle}>{t("homeClientsTitle")}</h2>
              <p className={styles.clientsSubtitle}>{t("homeClientsSubtitle")}</p>
            </div>

            {/* Client Cards Grid */}
            <div className={styles.clientsGrid}>
              {clients.map((client) => (
                <div key={client.id} className="client-card-wrapper">
                  <div className={styles.clientCard}>
                    <div className={styles.clientCardLogoWrapper}>
                      <Image
                        src={client.logo}
                        alt={`${client.name} Logo`}
                        fill
                        sizes="130px"
                        className={styles.clientCardLogo}
                      />
                    </div>
                    <h3 className={styles.clientCardTitle}>{client.name}</h3>
                    <p className={styles.clientCardDesc}>{t(client.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LATEST INSIGHTS SECTION */}
        <section className={styles.homeBlogSection}>
          <div className="container">
            <div className={styles.blogHeader}>
              <h2 className={styles.blogTitle}>{t("homeBlogTitle")}</h2>
              <p className={styles.blogSubtitle}>{t("homeBlogSubtitle")}</p>
            </div>
            
            <div className={styles.blogGrid}>
              {latestPosts.map((post) => (
                <div key={post.slug} className="blog-card-wrapper">
                  <Link href={`/blog/${post.slug}`} className={styles.blogCard}>
                    <div className={styles.blogImageWrapper}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className={styles.blogImage}
                      />
                    </div>
                    <div className={styles.blogMeta}>
                      <span className={styles.blogMetaCategory}>{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className={styles.blogCardTitle}>{post.title}</h3>
                    <p className={styles.blogCardExcerpt}>{post.excerpt}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
