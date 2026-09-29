import type { NavigationItem } from "../types/dashboard";

export const mainNavigation: NavigationItem[] = [
  {
    id: "overview",
    label: "Overview",
    icon: "overview",
    active: true,
  },
  {
    id: "projects",
    label: "Projects",
    icon: "projects",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: "analytics",
  },
  {
    id: "team",
    label: "Team",
    icon: "team",
  },
];

export const secondaryNavigation: NavigationItem[] = [
  {
    id: "profile",
    label: "Profile",
    icon: "settings",
  },
];