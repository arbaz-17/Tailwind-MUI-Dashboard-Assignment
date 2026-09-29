import {
  ChartColumn,
  Folder,
  LayoutDashboard,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

import { mainNavigation, secondaryNavigation } from "../../data/navigationData";

import type { NavigationIcon, NavigationItem } from "../../types/dashboard";

type TailwindSidebarProps = {
  mobileOpen: boolean;
  collapsed: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
};

const iconMap: Record<NavigationIcon, LucideIcon> = {
  overview: LayoutDashboard,
  projects: Folder,
  analytics: ChartColumn,
  team: Users,
  settings: Settings,
};

type SidebarNavigationProps = {
  items: NavigationItem[];
  collapsed?: boolean;
  onItemClick?: () => void;
};

function SidebarNavigation({
  items,
  collapsed = false,
  onItemClick,
}: SidebarNavigationProps) {
  return (
    <nav className="space-y-1">
      {items.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <button
            key={item.id}
            type="button"
            title={collapsed ? item.label : undefined}
            aria-current={item.active ? "page" : undefined}
            onClick={onItemClick}
            className={[
              "flex min-h-11 w-full items-center rounded-lg",
              "text-left text-sm font-medium",
              "transition-all duration-150",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-brand",
              collapsed ? "justify-center px-2" : "gap-3 px-3",
              item.active
                ? [
                    "relative bg-brand/10 text-brand",
                    "before:absolute before:bottom-2.5 before:left-0",
                    "before:top-2.5 before:w-[3px]",
                    "before:rounded-r-full before:bg-brand",
                  ].join(" ")
                : [
                    "text-muted-light",
                    "hover:bg-app-light hover:text-text-light",
                    "dark:text-muted-dark",
                    "dark:hover:bg-white/5",
                    "dark:hover:text-text-dark",
                  ].join(" "),
            ].join(" ")}
          >
            <Icon size={18} className="shrink-0" aria-hidden="true" />

            <span className={collapsed ? "sr-only" : ""}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

type SidebarContentProps = {
  collapsed?: boolean;
  mobile?: boolean;
  onClose?: () => void;
  onToggleCollapse?: () => void;
  onItemClick?: () => void;
};

function SidebarContent({
  collapsed = false,
  mobile = false,
  onClose,
  onToggleCollapse,
  onItemClick,
}: SidebarContentProps) {
  return (
    <>
      <div
        className={[
          "flex h-20 shrink-0 items-center border-b",
          "border-border-light dark:border-border-dark",
          collapsed && !mobile
            ? "justify-center gap-1 px-2"
            : "justify-between px-4",
        ].join(" ")}
      >
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={[
              "grid size-9 shrink-0 place-items-center",
              "rounded-lg bg-brand text-white",
              "shadow-sm shadow-brand/20",
            ].join(" ")}
          >
            <LayoutDashboard size={19} aria-hidden="true" />
          </div>

          {!collapsed && (
            <div className="min-w-0">
              <span className="block truncate text-base font-semibold text-text-light dark:text-text-dark">
                Optimus Fox
              </span>

            </div>
          )}
        </div>

        {mobile ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className={[
              "grid size-9 shrink-0 place-items-center rounded-lg",
              "text-muted-light transition-colors",
              "hover:bg-app-light hover:text-text-light",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-brand",
              "dark:text-muted-dark dark:hover:bg-white/5",
              "dark:hover:text-text-dark",
            ].join(" ")}
          >
            <X size={20} aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onToggleCollapse}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className={[
              "grid size-9 shrink-0 place-items-center rounded-lg",
              "text-muted-light transition-colors",
              "hover:bg-app-light hover:text-text-light",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-brand",
              "dark:text-muted-dark dark:hover:bg-white/5",
              "dark:hover:text-text-dark",
            ].join(" ")}
          >
            {collapsed ? (
              <PanelLeftOpen size={18} aria-hidden="true" />
            ) : (
              <PanelLeftClose size={18} aria-hidden="true" />
            )}
          </button>
        )}
      </div>

      <div
        className={[
          "flex flex-1 flex-col overflow-y-auto",
          collapsed && !mobile ? "px-2 py-4" : "p-4",
        ].join(" ")}
      >
        <SidebarNavigation
          items={mainNavigation}
          collapsed={collapsed && !mobile}
          onItemClick={onItemClick}
        />

        <div
          className={[
            "mt-auto border-t border-border-light",
            "pt-4 dark:border-border-dark",
          ].join(" ")}
        >
          <SidebarNavigation
            items={secondaryNavigation}
            collapsed={collapsed && !mobile}
            onItemClick={onItemClick}
          />
        </div>
      </div>
    </>
  );
}

export function TailwindSidebar({
  mobileOpen,
  collapsed,
  onClose,
  onToggleCollapse,
}: TailwindSidebarProps) {
  return (
    <>
      <aside
        aria-label="Main navigation"
        className={[
          "fixed inset-y-0 left-0 z-30 hidden flex-col",
          "border-r border-border-light bg-surface-light",
          "transition-[width] duration-300 ease-in-out",
          "dark:border-border-dark dark:bg-surface-dark",
          "lg:flex",
          collapsed ? "w-20" : "w-62",
        ].join(" ")}
      >
        <SidebarContent
          collapsed={collapsed}
          onToggleCollapse={onToggleCollapse}
        />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"
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
            <SidebarContent mobile onClose={onClose} onItemClick={onClose} />
          </aside>
        </div>
      )}
    </>
  );
}
