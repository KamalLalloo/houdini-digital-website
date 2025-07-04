// src/app/Footer.tsx
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Logo + About */}
        <div className={styles.about}>
          <div className={styles.logoRow}>
            <Image
              src="/houdini-logo.png"
              alt="Houdini Digital Logo"
              width={180}
              height={90}
              priority
            />
          </div>
          <p className={styles.description}>
            At Houdini Digital, we craft stunning websites, optimize SEO, and
            design high-performing digital strategies to help your business
            thrive online.
          </p>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h2 className={styles.getInTouch}>
            Get In Touch With Us <span className={styles.arrow}>&rarr;</span>
          </h2>
          <div className={styles.contactItem}>
            {/* Email SVG */}
            <span className={styles.icon}>
              <svg
                width="48"
                height="48"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                viewBox="0 0 48 48"
              >
                <rect
                  x="6"
                  y="12"
                  width="36"
                  height="24"
                  rx="3"
                  stroke="#fff"
                  fill="none"
                />
                <path
                  d="M6 12l18 14L42 12"
                  stroke="#00CFFF"
                  strokeWidth="2"
                  fill="none"
                />
                <text
                  x="24"
                  y="28"
                  fontSize="13"
                  fill="#fff"
                  textAnchor="middle"
                  fontFamily="Montserrat"
                >
                  @
                </text>
              </svg>
            </span>
            <span>houdinidigital@gmail.com</span>
          </div>
          <div className={styles.contactItem}>
            {/* Phone SVG */}
            <span className={styles.icon}>
              <svg
                width="48"
                height="48"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                viewBox="0 0 48 48"
              >
                <path
                  d="M36 31c-2 2-4.5 3-7 3s-5-1-7-3l-5-5c-2-2-3-4.5-3-7s1-5 3-7l3-3a2 2 0 012 0l4 4a2 2 0 010 2l-2 2c-.3.3-.5.7-.5 1.2.5 1.7 1.6 3.5 3.2 5.1 1.7 1.7 3.4 2.7 5.1 3.2.5 0 .9-.2 1.2-.5l2-2a2 2 0 012 0l4 4a2 2 0 010 2l-3 3z"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M39 18c1.7 1.7 3 4 3 7s-1.3 5.3-3 7"
                  stroke="#00CFFF"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
            <span>+27 79 424 7635</span>
          </div>
          <div className={styles.contactItem}>
            {/* Location SVG */}
            <span className={styles.icon}>
              <svg
                width="48"
                height="48"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                viewBox="0 0 48 48"
              >
                <path
                  d="M24 42s12-13.7 12-22A12 12 0 0024 8a12 12 0 00-12 12c0 8.3 12 22 12 22z"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="#fff"
                />
                <circle cx="24" cy="20" r="5" fill="#00CFFF" stroke="none" />
              </svg>
            </span>
            <span>South Africa</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h2 className={styles.linksHeading}>Quick Links</h2>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#work">Our Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
          Houdini Digital
        </span>
      </div>
    </footer>
  );
}
