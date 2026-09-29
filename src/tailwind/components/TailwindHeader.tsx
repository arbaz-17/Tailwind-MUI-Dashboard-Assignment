import {
  CalendarDays,
  Menu,
  Moon,
  Plus,
  Sun,
} from "lucide-react";

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
        "border-border-light bg-surface-light",
        "dark:border-border-dark dark:bg-surface-dark",
      ].join(" ")}
    >
      <div
        className={[
          "flex min-h-20 flex-col gap-4 px-4 py-4",
          "sm:flex-row sm:items-center sm:px-6",
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
              "text-muted-light transition-colors",
              "hover:bg-app-light hover:text-text-light",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-brand",
              "dark:border-border-dark dark:text-muted-dark",
              "dark:hover:bg-app-dark dark:hover:text-text-dark",
              "lg:hidden",
            ].join(" ")}
          >
            <Menu size={20} aria-hidden="true" />
          </button>

          <div className="min-w-0">
            <h1 className="text-xl font-semibold text-text-light dark:text-text-dark">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
              Overview of your team's projects and performance
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:ml-auto">
          <button
            type="button"
            className={[
              "inline-flex h-10 items-center gap-2 rounded-lg border",
              "border-border-light bg-surface-light px-3",
              "text-sm font-medium text-text-light",
              "transition-colors hover:bg-app-light",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-brand",
              "dark:border-border-dark dark:bg-surface-dark",
              "dark:text-text-dark dark:hover:bg-app-dark",
            ].join(" ")}
          >
            <CalendarDays size={17} aria-hidden="true" />

            <span>Last 30 Days</span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              isDark
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            title={
              isDark
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            className={[
              "grid size-10 place-items-center rounded-lg border",
              "border-border-light bg-surface-light",
              "text-text-light transition-colors",
              "hover:bg-app-light",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-brand",
              "dark:border-border-dark dark:bg-surface-dark",
              "dark:text-text-dark dark:hover:bg-app-dark",
            ].join(" ")}
          >
            {isDark ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            className={[
              "inline-flex h-10 items-center gap-2 rounded-lg",
              "bg-brand px-4 text-sm font-semibold text-white",
              "transition-opacity hover:opacity-90",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-brand focus-visible:ring-offset-2",
              "dark:focus-visible:ring-offset-surface-dark",
            ].join(" ")}
          >
            <Plus size={17} aria-hidden="true" />

            <span>New Project</span>
          </button>
        </div>
      </div>
    </header>
  );
}