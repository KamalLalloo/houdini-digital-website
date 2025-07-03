"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

const faqData = [
  {
    question: "How long does it take to build my website?",
    answer:
      "It depends on your package and requirements. Starter sites can be delivered in 3–5 business days, while larger projects may take 1–3 weeks.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "We’ll need your logo, preferred colors, content or images, and any inspiration sites you like. We’ll guide you through every step!",
  },
  {
    question: "Do you offer ongoing support or updates?",
    answer:
      "Yes! We offer affordable monthly maintenance, updates, and hosting. You can always reach out for tweaks, upgrades, or new features.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Absolutely. Every site we build is fully responsive, ensuring it looks and works great on phones, tablets, and desktops.",
  },
  {
    question: "Can I update my website myself after launch?",
    answer:
      "Yes, your site will be built so you can easily edit text, images, or add new content. We also offer training if you need it.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        <p className={styles.subheading}>
          Answers to common questions about our web design services, process,
          and support.
        </p>
      </div>
      <div className={styles.faqList}>
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.faqItem} ${
              openIndex === idx ? styles.open : ""
            }`}
            onClick={() => toggle(idx)}
          >
            <div className={styles.question}>
              <span className={styles.qIcon}>
                {openIndex === idx ? "−" : "+"}
              </span>
              {item.question}
            </div>
            <div
              className={styles.answer}
              style={{ maxHeight: openIndex === idx ? 250 : 0 }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
