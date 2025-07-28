"use client";

import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Conversion Landing Page",
    highlight: false,
    description:
      "For freelancers, coaches, or small businesses that need a high-impact single-page website designed to convert visitors into leads.",
    features: [
      "One-page scrolling website",
      "Conversion-focused design",
      "Mobile responsive layout",
      "Contact or booking form",
      "Social media integration",
      "Google Maps",
      "SEO optimized",
    ],
  },
  {
    name: "Business Website",
    highlight: true,
    description:
      "Great for small to medium service businesses ready for a complete, multi-page website.",
    features: [
      "Up to 5 pages (Home, About, Services, Contact, etc.)",
      "Responsive design",
      "Contact form with email notifications",
      "Social media links + WhatsApp integration",
      "Google Maps",
      "Google Search Console setup",
      "SEO optimized",
    ],
  },
  {
    name: "Premium Website",
    highlight: false,
    description:
      "Ideal for businesses that want a more custom, detailed website with enhanced features.",
    features: [
      "Up to 10–12 pages",
      "Custom layouts and design features",
      "Blog setup (categories/tags)",
      "SEO optimized with fast load times",
      "Google Search Console setup",
      "WhatsApp chat button",
      "Advanced layout & mobile optimization",
    ],
  },
  {
    name: "eCommerce Package",
    price: "Coming Soon",
    highlight: false,
    description:
      "For businesses that want to sell products or services online.",
    features: [
      "Online store setup",
      "Product pages",
      "Cart, checkout, payment integration",
      "User login and order tracking",
      "SEO optimized shop structure",
      "Launching Soon",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <section className={styles.pricingSection}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Website Packages</h2>
          <p className={styles.subheading}>
            Designed for service-based businesses ready to grow online.
          </p>
        </div>
        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${
                plan.highlight ? styles.highlight : ""
              } ${plan.price === "Coming Soon" ? styles.comingSoon : ""}`}
            >
              <div className={styles.cardHead}>
                <h3 className={styles.planName}>{plan.name}</h3>
                {plan.price === "Coming Soon" && (
                  <div className={styles.planPrice}>{plan.price}</div>
                )}
              </div>
              <div className={styles.planDesc}>{plan.description}</div>
              <ul className={styles.features}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.checkmark}>
                      {plan.price !== "Coming Soon" ? "✓" : "•"}
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.price !== "Coming Soon" ? (
                <a href="#contact" className={styles.cta}>
                  Get Started
                </a>
              ) : (
                <div className={styles.soon}>Launching Soon</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
