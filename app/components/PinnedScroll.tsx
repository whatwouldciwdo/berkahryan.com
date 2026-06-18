"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./PinnedScroll.module.css";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedScroll() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: `.${styles.stickySection}`,
        pinSpacing: false,
      }
    });

    // Animate slide 2 and text 2 sliding up over slide 1
    tl.to([slide2Ref.current, text2Ref.current], { 
      yPercent: -100, 
      ease: "none" 
    });
      
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={styles.scrollContainer}>
      <div className={styles.stickySection}>
        <div className={styles.layout}>
          {/* LEFT SIDE: Image + Title */}
          <div className={styles.leftSide}>
            {/* Slide 1 Left */}
            <div ref={slide1Ref} className={styles.slideLeft}>
              <Image 
                src="/topdown_bg.png" 
                alt="Reliable Heavy Equipment" 
                fill 
                className={styles.image} 
              />
              <div className={styles.imageOverlay}></div>
              <h2 className={styles.title}>{t("pinnedTitle1")}</h2>
            </div>
            
            {/* Slide 2 Left */}
            <div ref={slide2Ref} className={styles.slideLeft} style={{ top: "100%" }}>
              <Image 
                src="/expert_operator.png" 
                alt="Expert Operators" 
                fill 
                className={styles.image} 
              />
              <div className={styles.imageOverlay}></div>
              <h2 className={styles.title}>{t("pinnedTitle2")}</h2>
            </div>
          </div>
          
          {/* RIGHT SIDE: Text Description */}
          <div className={styles.rightSide}>
            {/* Slide 1 Text */}
            <div ref={text1Ref} className={styles.textContainer}>
              <div className={styles.textWrapper}>
                <p>
                  {t("pinnedText1")}
                </p>
              </div>
            </div>
            
            {/* Slide 2 Text */}
            <div ref={text2Ref} className={styles.textContainer} style={{ top: "100%" }}>
              <div className={styles.textWrapper}>
                <p>
                  {t("pinnedText2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
