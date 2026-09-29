import { useEffect, useState } from "react";

import { kpiMetrics } from "../data/dashboardData";

import { TailwindCompletionChart } from "./components/TailwindCompletionChart";
import { TailwindBarChart } from "./components/TailwindBarChart";
import { TailwindHeader } from "./components/TailwindHeader";
import { TailwindKpiCard } from "./components/TailwindKpiCard";
import { TailwindProjectsTable } from "./components/TailwindProjectsTable";
import { TailwindSidebar } from "./components/TailwindSidebar";
import { TailwindStatusSummary } from "./components/TailwindStatusSummary";

type ThemeMode = "light" | "dark";

export function TailwindDashboard() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  function toggleSidebar() {
    setSidebarCollapsed((currentValue) => !currentValue);
  }

  useEffect(() => {
    if (!mobileNavigationOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileNavigationOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileNavigationOpen]);

  return (
    <div
      className={["tailwind-dashboard", theme === "dark" ? "dark" : ""].join(
        " ",
      )}
    >
      <div className="min-h-screen overflow-x-hidden bg-app-light font-sans text-text-light dark:bg-app-dark dark:text-text-dark">
        <TailwindSidebar
          mobileOpen={mobileNavigationOpen}
          collapsed={sidebarCollapsed}
          onClose={() => setMobileNavigationOpen(false)}
          onToggleCollapse={toggleSidebar}
        />

        <div
          className={[
            "min-h-screen",
            "transition-[padding] duration-300 ease-in-out",
            sidebarCollapsed ? "lg:pl-20" : "lg:pl-62",
          ].join(" ")}
        >
          <TailwindHeader
            theme={theme}
            onToggleTheme={toggleTheme}
            onOpenNavigation={() => setMobileNavigationOpen(true)}
          />

          <main className="space-y-6 p-4 sm:p-6 lg:p-8">
            <section
              aria-label="Project metrics"
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {kpiMetrics.map((metric) => (
                <TailwindKpiCard key={metric.id} metric={metric} />
              ))}
            </section>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <TailwindCompletionChart theme={theme} />
              </div>

              <TailwindStatusSummary />
            </div>

            <TailwindBarChart theme={theme} />

            <TailwindProjectsTable />
          </main>
        </div>
      </div>
    </div>
  );
}
