"use client";

import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1>Custom Websites & Funnels That Drive Results</h1>
        <p>
          We design fast, SEO-optimized websites and high-converting landing
          pages tailored for businesses ready to grow.
        </p>
        <div className={styles.buttons}>
          <a href="#contact">
            <button className={styles.primary}>Get a Free Quote</button>
          </a>

          <a href="#work">
            <button className={styles.secondary}>View Our Work</button>
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <Image
          src="/hero-graphic.png"
          alt="Marketing Illustration"
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  );
}
