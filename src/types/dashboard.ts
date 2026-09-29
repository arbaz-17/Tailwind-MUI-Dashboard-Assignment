export type ProjectStatus =
  | "Active"
  | "Completed"
  | "On Hold"
  | "Planned";

export type NavigationIcon =
  | "overview"
  | "projects"
  | "analytics"
  | "team"
  | "settings";

export interface NavigationItem {
  id: string;
  label: string;
  icon: NavigationIcon;
  active?: boolean;
}

export interface KpiMetric {
  id: string;
  title: string;
  value: number;
  change: string;
  icon: "projects" | "active" | "completed" | "team";
}

export interface ChartDataPoint {
  month: string;
  completed: number;
}

export interface ProjectStatusSummary {
  status: ProjectStatus;
  count: number;
  percentage: number;
}

export interface Project {
  id: number;
  name: string;
  owner: string;
  status: ProjectStatus;
  progress: number;
  dueDate: string;
}