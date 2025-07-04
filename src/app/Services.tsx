"use client";

import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <section className={styles.services}>
        <div className={styles.top}>
          <h3 className={styles.suptitle}>Main Services</h3>
          <h2 className={styles.heading}>Our Solutions To Help You Grow</h2>
        </div>
        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.icon}>
              {/* Monitor SVG */}
              <svg width="70" height="70" viewBox="0 0 64 64" fill="none">
                <rect
                  x="10"
                  y="12"
                  width="44"
                  height="28"
                  rx="3"
                  stroke="#00CFFF"
                  strokeWidth="3"
                />
                <rect
                  x="17"
                  y="19"
                  width="17"
                  height="10"
                  rx="2"
                  stroke="#00CFFF"
                  strokeWidth="2"
                />
                <rect
                  x="36"
                  y="23"
                  width="10"
                  height="2.5"
                  rx="1.25"
                  fill="#00CFFF"
                />
                <rect
                  x="23"
                  y="45"
                  width="18"
                  height="4"
                  rx="2"
                  stroke="#00CFFF"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h4 className={styles.cardTitle}>
              Website Design &amp; Development
            </h4>
            <p className={styles.cardDesc}>
              We build custom, responsive websites that reflect your brand
              identity and are designed to engage visitors and convert them into
              loyal customers.
            </p>
          </div>
          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.icon}>
              {/* Magnifier SVG */}
              <svg width="70" height="70" viewBox="0 0 64 64" fill="none">
                <circle
                  cx="29"
                  cy="29"
                  r="15"
                  stroke="#00CFFF"
                  strokeWidth="3"
                />
                <rect
                  x="41.778"
                  y="41.071"
                  width="13"
                  height="3"
                  rx="1.5"
                  transform="rotate(45 41.778 41.071)"
                  fill="#00CFFF"
                />
              </svg>
            </div>
            <h4 className={styles.cardTitle}>SEO Optimization</h4>
            <p className={styles.cardDesc}>
              Boost your online presence with strategies that improve search
              rankings and drive targeted traffic to your site.
            </p>
          </div>
          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.icon}>
              {/* Funnel SVG */}
              <svg width="70" height="70" viewBox="0 0 64 64" fill="none">
                <path
                  d="M14 18h36l-14 20v8a4 4 0 0 1-8 0v-8L14 18Z"
                  stroke="#00CFFF"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
            <h4 className={styles.cardTitle}>Landing Pages &amp; Funnels</h4>
            <p className={styles.cardDesc}>
              Designing landing pages and funnels that focus on converting
              visitors into paying customers seamlessly.
            </p>
          </div>
        </div>
        <div className={styles.ctaWrapper}>
          <a href="#contact" className={styles.cta}>
            Book a Free Consultation
          </a>
        </div>
      </section>
    </section>
  );
}
