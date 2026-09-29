import type {
  ChartDataPoint,
  KpiMetric,
  Project,
  ProjectDepartment,
  ProjectPriority,
  ProjectStatus,
  ProjectStatusSummary,
} from "../types/dashboard";

const TEAM_MEMBER_COUNT = 26;

const PROJECT_STATUS_ORDER: ProjectStatus[] = [
  "Active",
  "Completed",
  "On Hold",
  "Planned",
];

const PROJECT_DEPARTMENT_ORDER: ProjectDepartment[] = [
  "Engineering",
  "Design",
  "Product",
  "Marketing",
  "Operations",
];

const PROJECT_PRIORITY_ORDER: ProjectPriority[] = [
  "High",
  "Medium",
  "Low",
];

export const projects: Project[] = [
  {
    id: "PRJ-1048",
    name: "Customer Analytics Platform",
    owner: "Sofia Martinez",
    status: "Active",
    priority: "High",
    department: "Product",
    progress: 81,
    startDate: "2026-08-04",
    dueDate: "2026-10-29",
    updatedAt: "2026-09-29",
  },
  {
    id: "PRJ-1047",
    name: "Mobile Banking App",
    owner: "Ahmed Khan",
    status: "Active",
    priority: "High",
    department: "Engineering",
    progress: 58,
    startDate: "2026-07-15",
    dueDate: "2026-11-07",
    updatedAt: "2026-09-29",
  },
  {
    id: "PRJ-1046",
    name: "Checkout Experience Redesign",
    owner: "Maya Chen",
    status: "Active",
    priority: "High",
    department: "Design",
    progress: 72,
    startDate: "2026-09-01",
    dueDate: "2026-10-18",
    updatedAt: "2026-09-28",
  },
  {
    id: "PRJ-1045",
    name: "API Modernization",
    owner: "Ethan Lee",
    status: "Active",
    priority: "High",
    department: "Engineering",
    progress: 63,
    startDate: "2026-06-10",
    dueDate: "2026-11-14",
    updatedAt: "2026-09-28",
  },
  {
    id: "PRJ-1044",
    name: "Design System v2",
    owner: "Olivia Parker",
    status: "Active",
    priority: "Medium",
    department: "Design",
    progress: 67,
    startDate: "2026-08-18",
    dueDate: "2026-10-25",
    updatedAt: "2026-09-27",
  },
  {
    id: "PRJ-1043",
    name: "CRM Migration",
    owner: "Daniel Brooks",
    status: "On Hold",
    priority: "Medium",
    department: "Operations",
    progress: 46,
    startDate: "2026-05-20",
    dueDate: "2026-11-21",
    updatedAt: "2026-09-26",
  },
  {
    id: "PRJ-1042",
    name: "Marketing Automation Hub",
    owner: "Noah Williams",
    status: "Planned",
    priority: "Medium",
    department: "Marketing",
    progress: 8,
    startDate: "2026-10-05",
    dueDate: "2026-12-10",
    updatedAt: "2026-09-25",
  },
  {
    id: "PRJ-1041",
    name: "E-commerce Expansion",
    owner: "Priya Sharma",
    status: "Completed",
    priority: "High",
    department: "Product",
    progress: 100,
    startDate: "2026-06-02",
    dueDate: "2026-09-22",
    updatedAt: "2026-09-22",
  },
  {
    id: "PRJ-1040",
    name: "Support Portal Refresh",
    owner: "Liam Wilson",
    status: "Completed",
    priority: "Low",
    department: "Engineering",
    progress: 100,
    startDate: "2026-05-12",
    dueDate: "2026-09-15",
    updatedAt: "2026-09-18",
  },
  {
    id: "PRJ-1039",
    name: "Data Warehouse Optimization",
    owner: "Ava Thompson",
    status: "On Hold",
    priority: "Medium",
    department: "Operations",
    progress: 52,
    startDate: "2026-07-01",
    dueDate: "2026-11-30",
    updatedAt: "2026-09-17",
  },
  {
    id: "PRJ-1038",
    name: "Brand Campaign Launch",
    owner: "Grace Kim",
    status: "Completed",
    priority: "Medium",
    department: "Marketing",
    progress: 100,
    startDate: "2026-07-20",
    dueDate: "2026-09-10",
    updatedAt: "2026-09-12",
  },
  {
    id: "PRJ-1037",
    name: "Employee Onboarding Portal",
    owner: "Lucas Martin",
    status: "Completed",
    priority: "Low",
    department: "Operations",
    progress: 100,
    startDate: "2026-04-14",
    dueDate: "2026-08-28",
    updatedAt: "2026-09-02",
  },
];

const totalProjects = projects.length;

function getProjectCountByStatus(
  status: ProjectStatus,
) {
  return projects.filter(
    (project) => project.status === status,
  ).length;
}

const activeProjects = getProjectCountByStatus("Active");

const completedProjects =
  getProjectCountByStatus("Completed");

const departmentCount = new Set(
  projects.map((project) => project.department),
).size;

export const kpiMetrics: KpiMetric[] = [
  {
    id: "total-projects",
    title: "Total Projects",
    value: totalProjects,
    supportingText: "2 new projects added this month",
    icon: "projects",
  },
  {
    id: "active-projects",
    title: "Active Projects",
    value: activeProjects,
    supportingText: `${Math.round(
      (activeProjects / totalProjects) * 100,
    )}% of the portfolio is in delivery`,
    icon: "active",
  },
  {
    id: "completed-projects",
    title: "Completed Projects",
    value: completedProjects,
    supportingText: `${completedProjects} projects delivered this quarter`,
    icon: "completed",
  },
  {
    id: "team-members",
    title: "Team Members",
    value: TEAM_MEMBER_COUNT,
    supportingText: `Across ${departmentCount} delivery teams`,
    icon: "team",
  },
];

export const projectStatusData: ProjectStatusSummary[] =
  PROJECT_STATUS_ORDER.map((status) => {
    const count = getProjectCountByStatus(status);

    return {
      status,
      count,
      percentage:
        totalProjects === 0
          ? 0
          : Math.round((count / totalProjects) * 100),
    };
  });

export const recentProjects: Project[] = [
  ...projects,
]
  .sort((firstProject, secondProject) =>
    secondProject.updatedAt.localeCompare(
      firstProject.updatedAt,
    ),
  )
  .slice(0, 6);

export const completionTrendData: ChartDataPoint[] = [
  {
    month: "May",
    completed: 0,
  },
  {
    month: "June",
    completed: 2,
  },
  {
    month: "July",
    completed: 1,
  },
  {
    month: "August",
    completed: 2,
  },
  {
    month: "September",
    completed: 5,
  },
];

export const departmentProjectData =
  PROJECT_DEPARTMENT_ORDER.map((department) => ({
    department,
    count: projects.filter(
      (project) => project.department === department,
    ).length,
  }));

export const priorityProjectData =
  PROJECT_PRIORITY_ORDER.map((priority) => ({
    priority,
    count: projects.filter(
      (project) => project.priority === priority,
    ).length,
  }));