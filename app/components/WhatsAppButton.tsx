"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const message = "Halo CV Berkah Ryan, saya ingin bertanya tentang penyewaan alat berat.";
  const encodedMessage = encodeURIComponent(message);

  const admin1Url = `https://wa.me/6281808999462?text=${encodedMessage}`;
  const admin2Url = `https://wa.me/6285218154148?text=${encodedMessage}`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={styles.waContainer}>
      {/* Popover Menu */}
      {isOpen && (
        <div className={styles.waPopover}>
          <div className={styles.waPopoverHeader}>Hubungi Admin WhatsApp</div>
          <div className={styles.waPopoverBody}>
            <a
              href={admin1Url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waAdminLink}
              onClick={() => setIsOpen(false)}
            >
              <span className={styles.waAdminName}>Admin 1</span>
              <span className={styles.waAdminPhone}>0818-0899-9462</span>
            </a>
            <a
              href={admin2Url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waAdminLink}
              onClick={() => setIsOpen(false)}
            >
              <span className={styles.waAdminName}>Admin 2</span>
              <span className={styles.waAdminPhone}>0852-1815-4148</span>
            </a>
          </div>
        </div>
      )}

      {/* Hover Badge */}
      <div className={`${styles.waBadge} ${isOpen ? styles.waBadgeHidden : ""}`}>
        Hubungi Kami via WhatsApp
      </div>

      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.waButton} ${isOpen ? styles.waButtonActive : ""}`}
        aria-label="Hubungi kami melalui WhatsApp"
      >
        <div className={styles.pulse}></div>
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
          className={styles.waIcon}
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.117-2.887-6.981-1.864-1.864-4.348-2.887-6.985-2.888-5.439 0-9.865 4.423-9.87 9.865-.001 1.714.457 3.39 1.32 4.894l-.994 3.635 3.722-.977zM18.268 15c-.347-.174-2.054-1.014-2.369-1.129-.315-.114-.545-.174-.775.174-.23.348-.89 1.129-1.09 1.359-.201.23-.402.259-.75.085-1.928-.962-3.18-1.748-4.437-3.905-.332-.57-.332-.924-.166-1.092.15-.15.347-.406.52-.609.172-.203.23-.348.347-.58.117-.232.058-.435-.03-.609-.087-.174-.776-1.87-.962-2.32-.24-.582-.486-.5-.668-.51l-.57-.01c-.197 0-.516.073-.786.37-.27.296-1.03 1.008-1.03 2.46s1.057 2.859 1.204 3.061c.148.203 2.08 3.177 5.039 4.455.704.304 1.254.486 1.682.622.709.226 1.353.193 1.862.117.568-.085 2.054-.838 2.342-1.649.288-.812.288-1.507.202-1.649-.088-.142-.315-.229-.663-.403z"/>
        </svg>
      </button>
    </div>
  );
}
