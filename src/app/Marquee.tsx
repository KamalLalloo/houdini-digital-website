"use client";

import styles from "./Marquee.module.css";

export default function Marquee() {
  const items = ["Web Design", "SEO", "Hosting", "Landing Pages"];

  const repeatedItems = Array.from({ length: 10 }, () => items).flat();

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        {repeatedItems.map((item, index) => (
          <span key={index} className={styles.item}>
            ◆ {item}
          </span>
        ))}
      </div>
    </div>
  );
}
