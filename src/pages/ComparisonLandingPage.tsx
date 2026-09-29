import {
  ArrowRight,
  Blocks,
  Gauge,
  Network,
  Palette,
  ShieldCheck,
  Wrench,
  Wind,
} from "lucide-react";

import { Link } from "react-router";

import styles from "./ComparisonLandingPage.module.css";

const comparisonSections = [
  {
    id: "speed",
    title: "Development Speed",
    icon: Gauge,
    tailwind:
      "Tailwind gave me full control, but I had to create the UI components myself and then style them using utility classes. This made the initial implementation take a little more time.",
    mui: "MUI felt faster for me because many common components such as cards, buttons, drawers, tables, and progress indicators were already available with sensible defaults.",
    takeaway: "MUI felt faster for initial development.",
  },
  {
    id: "customization",
    title: "Customization",
    icon: Palette,
    tailwind:
      "I found Tailwind easier and more enjoyable to customize. Utility classes made it simple to adjust spacing, colors, sizing, responsive behavior, and small visual details directly.",
    mui: "MUI is also highly customizable through the theme and sx prop, but deeper customization sometimes felt more complex because I was working around existing component styles and APIs.",
    takeaway: "Tailwind felt more flexible for custom design work.",
  },
  {
    id: "maintainability",
    title: "Maintainability",
    icon: Wrench,
    tailwind:
      "Tailwind can remain very maintainable when repeated UI is extracted into reusable React components and shared design tokens are used. Without that discipline, utility classes can become repetitive.",
    mui: "MUI provides a structured component system and centralized theme, which makes shared design changes easier. However, heavily customized components can introduce more complex overrides.",
    takeaway: "Both are maintainable, but they encourage different approaches.",
  },
  {
    id: "consistency",
    title: "Consistency",
    icon: ShieldCheck,
    tailwind:
      "Tailwind gives complete freedom, so visual consistency depends more on how carefully the developer follows shared colors, spacing, typography, and reusable component patterns.",
    mui: "MUI provides stronger consistency out of the box because its components already follow the same design system, spacing rules, interaction patterns, and theme configuration.",
    takeaway: "MUI provided stronger consistency with less manual effort.",
  },
  {
    id: "scalability",
    title: "Scalability",
    icon: Network,
    tailwind:
      "Tailwind can scale well for custom products when the project develops reusable components, shared tokens, and clear styling conventions. It keeps the design flexible as the application grows.",
    mui: "MUI can scale well for larger teams that need standardized components and predictable UI patterns. It can speed up feature development, although highly custom designs may require more theme work.",
    takeaway:
      "Both can scale well; the better approach depends on the product and design requirements.",
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
                Utility-first implementation of the project dashboard with
                complete control over layout, styling, responsiveness, and
                visual details.
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
                Component-based implementation of the same dashboard using MUI's
                ready-made components, theme system, and responsive styling
                APIs.
              </p>

              <Link className={styles.cardLink} to="/mui">
                View MUI Dashboard
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </article>
          </div>
        </section>

        <section
          className={styles.comparisonSection}
          aria-labelledby="framework-comparison-heading"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>After Building Both Versions</p>

            <h2
              id="framework-comparison-heading"
              className={styles.comparisonTitle}
            >
              Framework Comparison
            </h2>

            <p className={styles.comparisonIntro}>
              My observations after implementing the same dashboard with both
              approaches, focusing on the five areas required by the assignment.
            </p>
          </div>

          <div className={styles.comparisonList}>
            {comparisonSections.map((section) => {
              const Icon = section.icon;

              return (
                <article key={section.id} className={styles.comparisonCard}>
                  <div className={styles.comparisonCardHeader}>
                    <div className={styles.comparisonIcon}>
                      <Icon size={18} aria-hidden="true" />
                    </div>

                    <div>
                      <p className={styles.criteriaLabel}>
                        Comparison Criteria
                      </p>
                      <h3 className={styles.criteriaTitle}>{section.title}</h3>
                    </div>
                  </div>

                  <div className={styles.frameworkComparison}>
                    <div className={styles.frameworkResult}>
                      <div className={styles.resultHeading}>
                        <Wind size={16} aria-hidden="true" />
                        <span>Tailwind CSS</span>
                      </div>

                      <p>{section.tailwind}</p>
                    </div>

                    <div className={styles.frameworkResult}>
                      <div className={styles.resultHeading}>
                        <Blocks size={16} aria-hidden="true" />
                        <span>Material UI</span>
                      </div>

                      <p>{section.mui}</p>
                    </div>
                  </div>

                  <div className={styles.takeaway}>
                    <span>My Takeaway: </span>
                    <p>{section.takeaway}</p>
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
