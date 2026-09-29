import { ArrowRight, Blocks, Wind } from "lucide-react";
import { Link } from "react-router";

import styles from "./ComparisonLandingPage.module.css";

export function ComparisonLandingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Week 10 Assignment</span>

          <h1 className={styles.title}>
            Tailwind CSS vs Material UI
          </h1>

          <p className={styles.description}>
            The same responsive dashboard implemented with two different UI
            approaches to compare speed, customization, maintainability,
            consistency, and scalability.
          </p>
        </header>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.iconWrapper}>
              <Wind size={24} aria-hidden="true" />
            </div>

            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Tailwind CSS</h2>

              <p className={styles.cardDescription}>
                Utility-first dashboard implementation using Tailwind CSS.
              </p>
            </div>

            <Link className={styles.cardLink} to="/tailwind">
              View Tailwind Dashboard
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </article>

          <article className={styles.card}>
            <div className={styles.iconWrapper}>
              <Blocks size={24} aria-hidden="true" />
            </div>

            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Material UI</h2>

              <p className={styles.cardDescription}>
                Component-library dashboard implementation using Material UI.
              </p>
            </div>

            <Link className={styles.cardLink} to="/mui">
              View MUI Dashboard
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}