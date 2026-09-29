import type {
  ChartDataPoint,
  KpiMetric,
  Project,
  ProjectStatusSummary,
} from "../types/dashboard";

export const kpiMetrics: KpiMetric[] = [
  {
    id: "total-projects",
    title: "Total Projects",
    value: 24,
    change: "+12% from last month",
    icon: "projects",
  },
  {
    id: "active-projects",
    title: "Active Projects",
    value: 12,
    change: "+8% from last month",
    icon: "active",
  },
  {
    id: "completed-projects",
    title: "Completed Projects",
    value: 8,
    change: "+18% from last month",
    icon: "completed",
  },
  {
    id: "team-members",
    title: "Team Members",
    value: 18,
    change: "+2 this month",
    icon: "team",
  },
];

export const completionTrendData: ChartDataPoint[] = [
  {
    month: "May",
    completed: 4,
  },
  {
    month: "June",
    completed: 5,
  },
  {
    month: "July",
    completed: 6,
  },
  {
    month: "August",
    completed: 7,
  },
  {
    month: "September",
    completed: 8,
  },
];

export const projectStatusData: ProjectStatusSummary[] = [
  {
    status: "Active",
    count: 12,
    percentage: 50,
  },
  {
    status: "Completed",
    count: 8,
    percentage: 33,
  },
  {
    status: "On Hold",
    count: 3,
    percentage: 13,
  },
  {
    status: "Planned",
    count: 1,
    percentage: 4,
  },
];

export const recentProjects: Project[] = [
  {
    id: 1,
    name: "Website Redesign",
    owner: "Sarah",
    status: "Active",
    progress: 72,
    dueDate: "Oct 12",
  },
  {
    id: 2,
    name: "Mobile App",
    owner: "Ahmed",
    status: "On Hold",
    progress: 45,
    dueDate: "Oct 20",
  },
  {
    id: 3,
    name: "Analytics Dashboard",
    owner: "Emma",
    status: "Completed",
    progress: 100,
    dueDate: "Sep 28",
  },
  {
    id: 4,
    name: "CRM Integration",
    owner: "Ali",
    status: "Active",
    progress: 61,
    dueDate: "Nov 04",
  },
];