"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PageLayout.module.css";
import WhatsAppButton from "./WhatsAppButton";
import { useLanguage } from "../context/LanguageContext";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.wrapper}>
      {/* NAVBAR */}
      <nav className={`${styles.navbar} ${isScrolled || isMenuOpen ? styles.navbarScrolled : ""} ${isMenuOpen ? styles.navbarOpen : ""}`}>
        <div className={styles.navLeft}>
          <button 
            className={`${styles.menuBtn} ${isScrolled || isMenuOpen ? styles.menuBtnScrolled : ""}`}
            onClick={toggleMenu}
          >
            <div className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ""}`}>
              <span></span>
              <span></span>
            </div>
          </button>
          
          <Link href="/" className={styles.logoContainerMobile}>
            <Image
              src="/berkahryan-logo.svg"
              alt="Berkah Ryan Logo"
              width={150}
              height={40}
              className={styles.logo}
              style={{ width: "auto" }}
              priority
            />
          </Link>
        </div>
        
        <Link href="/" className={styles.logoContainerDesktop}>
          <Image
            src="/berkahryan-logo.svg"
            alt="Berkah Ryan Logo"
            width={150}
            height={40}
            className={styles.logo}
            style={{ width: "auto" }}
            priority
          />
          <span className={styles.logoText}>CV. BERKAH RYAN</span>
        </Link>
        
        <div className={styles.navActions}>
          <div className={styles.langSwitcher}>
            <button 
              className={`${styles.langBtn} ${language === "id" ? styles.langBtnActive : ""}`}
              onClick={() => setLanguage("id")}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button 
              className={`${styles.langBtn} ${language === "en" ? styles.langBtnActive : ""}`}
              onClick={() => setLanguage("en")}
              title="English"
            >
              EN
            </button>
          </div>
          <Link href="/contact" className={`${styles.contactBtn} ${isScrolled || isMenuOpen ? styles.contactBtnScrolled : ""}`}>
            {t("navContact")}
          </Link>
        </div>
      </nav>

      {/* MENU OVERLAY */}
      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOverlayOpen : ""}`}>
        <div className={styles.menuOverlayContainer}>
          <div className={styles.menuLeft}>
            <div className={styles.menuMainLinks}>
              <Link href="/company" onClick={() => setIsMenuOpen(false)}>{t("navCompany")}</Link>
              <Link href="/crane" onClick={() => setIsMenuOpen(false)}>{t("navCrane")}</Link>
              <Link href="/forklift" onClick={() => setIsMenuOpen(false)}>{t("navForklift")}</Link>
              <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>{t("navPortfolio")}</Link>
              <Link href="/blog" onClick={() => setIsMenuOpen(false)}>{t("navBlog")}</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>{t("navContactUs")}</Link>
            </div>
            <div className={styles.menuSubLinks}>
              <a href="tel:081808999462">0818 0899 9462</a>
              <a href="mailto:enquiries@berkahryan.com">enquiries@berkahryan.com</a>
              <div className={styles.menuAddress}>
                Jalan Lada BBS II Blok A-1/14, Rt 009, Rw 006 Desa Ciwaduk Kec Cilegon, Provinsi Banten Kode Pos 42415
              </div>
            </div>
          </div>
          <div className={styles.menuRight}>
            <div className={styles.searchBar}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" placeholder={t("searchPlaceholder")} suppressHydrationWarning />
            </div>
          </div>
        </div>
      </div>

      {/* PAGE CONTENT */}
      {children}

      {/* CTA & FOOTER SECTION */}
      <section className={styles.ctaFooter}>
        <div className="container">
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>
              {t("footerCta")}
              <br />
              <Link href="/contact"><span>{t("footerCtaSub")}</span></Link>
            </h2>
          </div>

          <div className={styles.footerLinks}>
            <div>© 2026 Berkah Ryan Heavy Equipment.</div>
            <Link href="/safety">{t("footerPolicy2")}</Link>
            <Link href="/terms">{t("footerPolicy3")}</Link>
            <Link href="/crane">{t("navCrane")}</Link>
            <Link href="/forklift">{t("navForklift")}</Link>
            <Link href="/steel-plate">Steel plate</Link>
            <a href="/profil-perusahaan-cv-berkah-ryan.pdf" download>{t("footerSoftProfile")}</a>
            <div style={{ marginLeft: "auto", fontWeight: "bold" }}>in</div>
          </div>
        </div>

        <div className={styles.footerPartners}>
          <div className={styles.footerPartnerItem}>
            <Image
              src="/berkahryan-logo.svg"
              alt="Logo"
              width={60}
              height={60}
              className={styles.footerPartnerLogo}
              style={{ width: "auto" }}
            />
          </div>
          <div className={styles.footerPartnerItem}>
            <Image
              src="/images/EBTKE-berkahryan.svg"
              alt="Terverifikasi EBTKE"
              width={120}
              height={120}
              className={styles.footerBrandLogo}
              style={{ height: "70px", width: "auto" }}
            />
          </div>
          <div className={styles.footerPartnerItem}>
            <Image
              src="/images/LOGO-K3-TRANSPARANT.png"
              alt="Safety First K3"
              width={65}
              height={65}
              className={styles.footerBrandLogo}
              style={{ width: "auto" }}
            />
          </div>
          <div className={styles.footerPartnerItem}>
            <Image
              src="/images/crane/logo/SANY_Group_logo.svg"
              alt="Sany"
              width={100}
              height={30}
              className={styles.footerBrandLogo}
              style={{ width: "auto" }}
            />
          </div>
          <div className={styles.footerPartnerItem}>
            <Image
              src="/images/crane/logo/Tadano_company_logo.svg.png"
              alt="Tadano"
              width={100}
              height={30}
              className={styles.footerBrandLogo}
              style={{ width: "auto" }}
            />
          </div>
          <div className={styles.footerPartnerItem}>
            <Image
              src="/images/crane/logo/zoomlion.svg"
              alt="Zoomlion"
              width={100}
              height={30}
              className={styles.footerBrandLogo}
              style={{ width: "auto" }}
            />
          </div>
        </div>

        <div className={styles.footerBottom}>Cookie Preference Center</div>
      </section>

      {/* Sticky WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
