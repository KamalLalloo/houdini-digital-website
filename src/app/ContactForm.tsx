"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      contactMethod: (
        form.elements.namedItem("contactMethod") as HTMLSelectElement
      ).value,
      subject: "Houdini Digital Contact Form",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) setSubmitted(true);
      else alert("There was a problem submitting your form.");
    } catch {
      alert("There was a problem submitting your form.");
    }
    setLoading(false);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.subheading}>
          Ready to start your project? Fill out the form below and {"we'll"} get
          back to you within 24 hours.
        </p>
        {!submitted ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <input
                className={styles.input}
                type="text"
                name="name"
                required
                placeholder="Your Name"
                autoComplete="name"
              />
              <input
                className={styles.input}
                type="email"
                name="email"
                required
                placeholder="Your Email"
                autoComplete="email"
              />
              <input
                className={styles.input}
                type="tel"
                name="phone"
                required
                placeholder="Your Phone Number"
                autoComplete="tel"
              />
            </div>
            <div className={styles.row}>
              <select
                className={styles.input}
                name="contactMethod"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  How should we contact you?
                </option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </div>
            <textarea
              className={styles.textarea}
              name="message"
              required
              placeholder="Tell us about your project"
              rows={5}
            ></textarea>
            <button className={styles.cta} type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        ) : (
          <div className={styles.thankyou}>
            <h3>Thank you!</h3>
            <p>
              Your message has been received. We’ll respond as soon as possible.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
