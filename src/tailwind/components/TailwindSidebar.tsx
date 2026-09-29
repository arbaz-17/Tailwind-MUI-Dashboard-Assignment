import {
  ChartColumn,
  Folder,
  LayoutDashboard,
  Settings,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

import {
  mainNavigation,
  secondaryNavigation,
} from "../../data/navigationData";

import type {
  NavigationIcon,
  NavigationItem,
} from "../../types/dashboard";

type TailwindSidebarProps = {
  mobileOpen: boolean;
  onClose: () => void;
};

const iconMap: Record<NavigationIcon, LucideIcon> = {
  overview: LayoutDashboard,
  projects: Folder,
  analytics: ChartColumn,
  team: Users,
  settings: Settings,
};

type SidebarContentProps = {
  onItemClick?: () => void;
  showCloseButton?: boolean;
  onClose?: () => void;
};

function SidebarNavigation({
  items,
  onItemClick,
}: {
  items: NavigationItem[];
  onItemClick?: () => void;
}) {
  return (
    <nav className="space-y-1">
      {items.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <button
            key={item.id}
            type="button"
            aria-current={item.active ? "page" : undefined}
            onClick={onItemClick}
            className={[
              "flex w-full items-center gap-3 rounded-lg px-3 py-2.5",
              "text-left text-sm font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-brand focus-visible:ring-offset-2",
              "dark:focus-visible:ring-offset-surface-dark",
              item.active
                ? "bg-brand/10 text-brand"
                : [
                    "text-muted-light hover:bg-app-light hover:text-text-light",
                    "dark:text-muted-dark dark:hover:bg-app-dark",
                    "dark:hover:text-text-dark",
                  ].join(" "),
            ].join(" ")}
          >
            <Icon size={18} aria-hidden="true" />

            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function SidebarContent({
  onItemClick,
  showCloseButton = false,
  onClose,
}: SidebarContentProps) {
  return (
    <>
      <div className="flex h-20 items-center justify-between border-b border-border-light px-5 dark:border-border-dark">
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-lg bg-brand text-white">
            <LayoutDashboard size={19} aria-hidden="true" />
          </div>

          <span className="text-base font-semibold text-text-light dark:text-text-dark">
            ProjectFlow
          </span>
        </div>

        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className={[
              "grid size-9 place-items-center rounded-lg",
              "text-muted-light transition-colors",
              "hover:bg-app-light hover:text-text-light",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-brand",
              "dark:text-muted-dark dark:hover:bg-app-dark",
              "dark:hover:text-text-dark",
            ].join(" ")}
          >
            <X size={20} aria-hidden="true" />
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto p-4">
        <SidebarNavigation
          items={mainNavigation}
          onItemClick={onItemClick}
        />

        <div className="mt-auto border-t border-border-light pt-4 dark:border-border-dark">
          <SidebarNavigation
            items={secondaryNavigation}
            onItemClick={onItemClick}
          />
        </div>
      </div>
    </>
  );
}

export function TailwindSidebar({
  mobileOpen,
  onClose,
}: TailwindSidebarProps) {
  return (
    <>
      <aside
        aria-label="Main navigation"
        className={[
          "fixed inset-y-0 left-0 z-30 hidden w-62 flex-col",
          "border-r border-border-light bg-surface-light",
          "dark:border-border-dark dark:bg-surface-dark",
          "lg:flex",
        ].join(" ")}
      >
        <SidebarContent />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-950/50"
            onClick={onClose}
            aria-hidden="true"
          />

          <aside
            aria-label="Mobile navigation"
            className={[
              "relative flex h-full w-62 flex-col",
              "border-r border-border-light bg-surface-light",
              "shadow-2xl",
              "dark:border-border-dark dark:bg-surface-dark",
            ].join(" ")}
          >
            <SidebarContent
              showCloseButton
              onClose={onClose}
              onItemClick={onClose}
            />
          </aside>
        </div>
      )}
    </>
  );
}