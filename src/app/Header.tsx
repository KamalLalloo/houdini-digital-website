"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/houdini-logo.png"
            alt="Houdini Digital Logo"
            width={140}
            height={60}
          />
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <button className={styles.cta}>Get a Quote</button>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </header>
  );
}
