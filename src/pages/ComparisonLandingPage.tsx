import {
  ArrowRight,
  Blocks,
  Code2,
  Layers3,
  Lightbulb,
  Scale,
  Wind,
} from "lucide-react";

import { Link } from "react-router";

import styles from "./ComparisonLandingPage.module.css";

const assignmentSections = [
  {
    id: "overview",
    title: "Assignment Overview",
    icon: Layers3,
    text: "Placeholder for the final assignment overview, objective, and comparison requirements.",
  },
  {
    id: "understanding",
    title: "My Understanding",
    icon: Lightbulb,
    text: "Placeholder for my understanding of the assignment and what I aimed to learn from both implementations.",
  },
  {
    id: "assumptions",
    title: "Assumptions",
    icon: Scale,
    text: "Placeholder for the assumptions, scope decisions, and limitations followed while building the dashboards.",
  },
  {
    id: "implementation",
    title: "Implementation Approach",
    icon: Code2,
    text: "Placeholder for the architecture, responsive design, shared data, theming, charts, and implementation decisions.",
  },
];

export function ComparisonLandingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section
          className={styles.dashboardSection}
          aria-labelledby="comparison-heading"
        >
          <p className={styles.assignmentLabel}>Week 10 Assignment</p>
          <h1 id="comparison-heading" className={styles.title}>
            Tailwind CSS
            <span> vs </span>
            Material UI
          </h1>

          <div className={styles.frameworkGrid}>
            <article className={styles.frameworkCard}>
              <div className={styles.iconWrapper}>
                <Wind size={24} aria-hidden="true" />
              </div>

              <h2 className={styles.cardTitle}>Tailwind CSS</h2>

              <p className={styles.cardDescription}>
                Utility-first implementation of the project dashboard using
                Tailwind CSS.
              </p>

              <Link className={styles.cardLink} to="/tailwind">
                View Tailwind Dashboard
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </article>

            <article className={styles.frameworkCard}>
              <div className={styles.iconWrapper}>
                <Blocks size={24} aria-hidden="true" />
              </div>

              <h2 className={styles.cardTitle}>Material UI</h2>

              <p className={styles.cardDescription}>
                Component-based implementation of the same dashboard using
                Material UI.
              </p>

              <Link className={styles.cardLink} to="/mui">
                View MUI Dashboard
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </article>
          </div>
        </section>

        <section
          className={styles.assignmentSection}
          aria-labelledby="assignment-heading"
        >
          <h2 id="assignment-heading" className={styles.assignmentTitle}>
            Assignment Information
          </h2>

          <div className={styles.infoGrid}>
            {assignmentSections.map((section) => {
              const Icon = section.icon;

              return (
                <article key={section.id} className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <Icon size={18} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className={styles.infoTitle}>{section.title}</h3>

                    <p className={styles.infoDescription}>{section.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
