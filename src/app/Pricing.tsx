"use client";

import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Starter Package",
    price: "R2,500",
    highlight: false,
    description:
      "Perfect for: Freelancers or small businesses that just need a simple, clean online presence.",
    features: [
      "One-page scrolling website",
      "Mobile responsive design",
      "Contact form",
      "Social media integration",
      "Google Maps",
      "SEO optimized",
      "1 revision round",
      "Delivery: 3–5 business days",
    ],
  },
  {
    name: "Business Package",
    price: "R5,500",
    highlight: true,
    description:
      "Perfect for: Small to medium businesses ready for a full website.",
    features: [
      "Up to 5 pages (Home, About, Services, Contact, etc.)",
      "Responsive design",
      "Contact form with email notifications",
      "Social media links + WhatsApp integration",
      "Google Maps",
      "Google Search Console setup",
      "SEO optimized",
      "2 revision rounds",
      "Delivery: 7–10 business days",
    ],
  },
  {
    name: "Premium Package",
    price: "R9,500",
    highlight: false,
    description:
      "Perfect for: Businesses that want a more custom, detailed website.",
    features: [
      "Up to 10–12 pages",
      "Custom layouts and design features",
      "Blog setup (categories/tags)",
      "SEO optimized with fast load times",
      "Google Search Console setup",
      "WhatsApp chat button",
      "Advanced layout & mobile optimization",
      "3 revision rounds",
      "Delivery: 10–15 business days",
    ],
  },
  {
    name: "eCommerce Package",
    price: "Coming Soon",
    highlight: false,
    description:
      "For businesses that want to sell products or services online.",
    features: [
      "Online store setup (WooCommerce)",
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
          <h2 className={styles.heading}>Simple, Transparent Pricing</h2>
          <p className={styles.subheading}>
            Choose the plan that fits your business best.
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
                <div className={styles.planPrice}>{plan.price}</div>
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
                <button className={styles.cta}>Get Started</button>
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
