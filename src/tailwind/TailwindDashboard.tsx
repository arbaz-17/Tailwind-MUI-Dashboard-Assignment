import { useEffect, useState } from "react";

import { TailwindHeader } from "./components/TailwindHeader";
import { TailwindSidebar } from "./components/TailwindSidebar";

type ThemeMode = "light" | "dark";

export function TailwindDashboard() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [mobileNavigationOpen, setMobileNavigationOpen] =
    useState(false);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light",
    );
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
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-app-light font-sans text-text-light dark:bg-app-dark dark:text-text-dark">
        <TailwindSidebar
          mobileOpen={mobileNavigationOpen}
          onClose={() => setMobileNavigationOpen(false)}
        />

        <div className="min-h-screen lg:pl-62">
          <TailwindHeader
            theme={theme}
            onToggleTheme={toggleTheme}
            onOpenNavigation={() =>
              setMobileNavigationOpen(true)
            }
          />

          <main className="p-4 sm:p-6 lg:p-8">
            <div
              className={[
                "grid min-h-96 place-items-center rounded-xl border",
                "border-dashed border-border-light bg-surface-light",
                "p-8 text-center",
                "dark:border-border-dark dark:bg-surface-dark",
              ].join(" ")}
            >
              <div>
                <p className="font-semibold text-text-light dark:text-text-dark">
                  Dashboard content
                </p>

                <p className="mt-2 text-sm text-muted-light dark:text-muted-dark">
                  KPI cards, analytics, project status, and the
                  projects table will be added in Phase 4.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}