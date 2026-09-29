export type ProjectStatus =
  | "Active"
  | "Completed"
  | "On Hold"
  | "Planned";

export type ProjectPriority =
  | "High"
  | "Medium"
  | "Low";

export type ProjectDepartment =
  | "Engineering"
  | "Design"
  | "Product"
  | "Marketing"
  | "Operations";

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
  supportingText: string;
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
  id: string;
  name: string;
  owner: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  department: ProjectDepartment;
  progress: number;
  startDate: string;
  dueDate: string;
  updatedAt: string;
}