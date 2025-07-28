"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Houdini Digital</h2>
        <p className={styles.text}>
          Houdini Digital is a creative web studio that helps service-based
          businesses stand out online with clear, high-performing websites and
          landing pages.
        </p>
        <p className={styles.text}>
          We build with purpose—focusing on clarity, speed, and results. Every
          site we launch is designed to convert, optimized for search, and built
          to grow with your business.
        </p>
      </div>
    </section>
  );
}
