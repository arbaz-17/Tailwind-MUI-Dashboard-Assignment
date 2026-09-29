import { ArrowRightLeft, Menu, Moon, Sun } from "lucide-react";

import { Link } from "react-router";

type ThemeMode = "light" | "dark";

type TailwindHeaderProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenNavigation: () => void;
};

export function TailwindHeader({
  theme,
  onToggleTheme,
  onOpenNavigation,
}: TailwindHeaderProps) {
  const isDark = theme === "dark";

  return (
    <header
      className={[
        "sticky top-0 z-20 border-b",
        "border-border-light bg-surface-light/95",
        "backdrop-blur-xl",
        "dark:border-border-dark dark:bg-surface-dark/95",
      ].join(" ")}
    >
      <div
        className={[
          "flex min-h-20 flex-col gap-4 px-4 py-4",
          "sm:flex-row sm:items-center sm:justify-between sm:px-6",
          "lg:px-8",
        ].join(" ")}
      >
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onOpenNavigation}
            aria-label="Open navigation"
            className={[
              "grid size-10 shrink-0 place-items-center rounded-lg",
              "border border-border-light",
              "bg-surface-light text-muted-light",
              "transition-colors",
              "hover:border-brand/40 hover:bg-app-light",
              "hover:text-text-light",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-brand",
              "dark:border-border-dark",
              "dark:bg-surface-dark dark:text-muted-dark",
              "dark:hover:border-brand/40",
              "dark:hover:bg-white/5",
              "dark:hover:text-text-dark",
              "lg:hidden",
            ].join(" ")}
          >
            <Menu size={20} aria-hidden="true" />
          </button>

          <div className="min-w-0">
            <h1 className="text-xl font-semibold tracking-tight text-text-light dark:text-text-dark">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
              Overview of your team's projects and performance
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              isDark ? "Switch to light theme" : "Switch to dark theme"
            }
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className={[
              "grid size-10 place-items-center rounded-lg border",
              "border-border-light bg-surface-light",
              "text-text-light transition-colors",
              "hover:border-brand/30 hover:bg-app-light",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-brand",
              "dark:border-border-dark dark:bg-surface-dark",
              "dark:text-text-dark",
              "dark:hover:border-brand/30",
              "dark:hover:bg-white/5",
            ].join(" ")}
          >
            {isDark ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </button>

          <Link
            to="/mui"
            aria-label="View Material UI dashboard version"
            className={[
              "inline-flex h-10 items-center gap-2 rounded-lg",
              "whitespace-nowrap bg-brand px-4",
              "text-sm font-semibold text-white no-underline",
              "shadow-sm shadow-brand/15",
              "transition-colors hover:bg-brand-strong",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-brand focus-visible:ring-offset-2",
              "dark:focus-visible:ring-offset-surface-dark",
            ].join(" ")}
          >
            <ArrowRightLeft size={17} aria-hidden="true" />

            <span>View MUI Version</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
