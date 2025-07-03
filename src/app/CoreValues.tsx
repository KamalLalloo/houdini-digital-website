"use client";

import styles from "./CoreValues.module.css";

const values = [
  {
    icon: (
      // Innovation icon (layers)
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect
          x="6"
          y="8"
          width="26"
          height="4"
          rx="2"
          stroke="#00CFFF"
          strokeWidth="2"
        />
        <rect
          x="10"
          y="16"
          width="18"
          height="4"
          rx="2"
          stroke="#00CFFF"
          strokeWidth="2"
        />
        <rect
          x="14"
          y="24"
          width="10"
          height="4"
          rx="2"
          stroke="#00CFFF"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Innovation",
    desc: "We push the boundaries of digital design and technology to create unique experiences.",
  },
  {
    icon: (
      // Quality icon (check)
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="16" stroke="#00CFFF" strokeWidth="2" />
        <path
          d="M13 20l4 4 8-8"
          stroke="#00CFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Quality",
    desc: "We are committed to delivering exceptional quality in every project we undertake.",
  },
  {
    icon: (
      // Collaboration icon (users)
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="13" cy="17" r="4" stroke="#00CFFF" strokeWidth="2" />
        <circle cx="25" cy="17" r="4" stroke="#00CFFF" strokeWidth="2" />
        <path
          d="M8 26c0-2.21 3.134-4 7-4s7 1.79 7 4"
          stroke="#00CFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Collaboration",
    desc: "We believe in the power of collaboration to create truly exceptional digital experiences.",
  },
  {
    icon: (
      // Client-Focused icon (heart)
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path
          d="M19 31s-8-6.28-8-12a6 6 0 0 1 12 0 6 6 0 0 1 12 0c0 5.72-8 12-8 12z"
          stroke="#00CFFF"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    title: "Client-Focused",
    desc: "We prioritize our clients' needs and goals, ensuring their success is at the heart of everything we do.",
  },
];

export default function CoreValues() {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Our Core Values</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.grid}>
        {values.map((val, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.iconWrapper}>{val.icon}</div>
            <div>
              <h4 className={styles.cardTitle}>{val.title}</h4>
              <p className={styles.cardDesc}>{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
