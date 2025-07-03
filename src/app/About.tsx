"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Houdini Digital</h2>
        <p className={styles.text}>
          Houdini Digital is a small web design agency that helps businesses
          grow online through custom-built, SEO-optimized websites and landing
          pages.
        </p>
        <p className={styles.text}>
          We focus on clarity, speed, and strategy — making sure your site
          doesn’t just look good, but performs. We’ve helped businesses launch
          clean, high-converting websites that speak to their audience and drive
          real results.
        </p>
      </div>
    </section>
  );
}
