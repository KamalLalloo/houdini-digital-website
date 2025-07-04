"use client";

import styles from "./Portfolio.module.css";
import Image from "next/image";

const projects = [
  {
    title: "Randfontein Dental",
    img: "/portfolio-dental.png",
    desc: "Designed a modern, professional website for a dental clinic, improving their online presence and attracting more local patients",
    link: "https://randfonteindental.co.za/",
  },
  {
    title: "Pinnacle Tuition",
    img: "/portfolio-tuition.jpg",
    desc: "Developed a responsive website for an online tutoring company, ensuring seamless user experience.",
    link: "https://www.pinnacletuitiononline.co.za/",
  },
  {
    title: "Shinrin AI Solutions",
    img: "/portfolio-ai.jpg",
    desc: "Developed a sleek, cutting-edge website for an AI agency, showcasing their innovative solutions and attracting high-value clients.",
    link: "https://shinrinsolutions.co.za/",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className={styles.portfolio}>
      <div className={styles.top}>
        <h2 className={styles.heading}>Our Work Speaks For Itself</h2>
        <p className={styles.subheading}>
          <em>
            Discover the projects that have helped our clients achieve digital
            success
          </em>
        </p>
      </div>
      <div className={styles.grid}>
        {projects.map((proj, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.logoWrapper}>
              <Image
                src={proj.img}
                alt={proj.title}
                width={180}
                height={180}
                className={styles.logoImg}
              />
            </div>
            <h3 className={styles.cardTitle}>{proj.title}</h3>
            <p className={styles.cardDesc}>{proj.desc}</p>
            <a
              href={proj.link}
              className={styles.cardBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
