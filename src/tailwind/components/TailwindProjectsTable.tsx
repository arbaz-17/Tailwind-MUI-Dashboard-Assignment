import { recentProjects } from "../../data/dashboardData";

import type { ProjectStatus } from "../../types/dashboard";

const statusStyles: Record<ProjectStatus, string> = {
  Active: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",

  Completed:
    "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-300",

  "On Hold":
    "bg-orange-50 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300",

  Planned:
    "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
};

const progressStyles: Record<ProjectStatus, string> = {
  Active: "bg-brand",
  Completed: "bg-success",
  "On Hold": "bg-hold",
  Planned: "bg-warning",
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function formatDueDate(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00`));
}

export function TailwindProjectsTable() {
  return (
    <section
      className={[
        "overflow-hidden rounded-xl border",
        "border-border-light bg-surface-light",
        "dark:border-border-dark dark:bg-surface-dark",
      ].join(" ")}
    >
      <div className="border-b border-border-light px-5 py-4 dark:border-border-dark">
        <h2 className="text-base font-semibold text-text-light dark:text-text-dark">
          Recent Projects
        </h2>

        <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
          Latest project activity and progress
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[720px] w-full border-collapse">
          <caption className="sr-only">
            Recent projects with owners, statuses, progress, and due dates
          </caption>

          <thead>
            <tr className="border-b border-border-light dark:border-border-dark">
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-light dark:text-muted-dark"
              >
                Project
              </th>

              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-light dark:text-muted-dark"
              >
                Owner
              </th>

              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-light dark:text-muted-dark"
              >
                Status
              </th>

              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-light dark:text-muted-dark"
              >
                Progress
              </th>

              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-light dark:text-muted-dark"
              >
                Due Date
              </th>
            </tr>
          </thead>

          <tbody>
            {recentProjects.map((project) => (
              <tr
                key={project.id}
                className={[
                  "border-b border-border-light",
                  "last:border-b-0",
                  "transition-colors hover:bg-app-light/70",
                  "dark:border-border-dark",
                  "dark:hover:bg-app-dark/70",
                ].join(" ")}
              >
                <td className="px-5 py-4">
                  <span className="text-sm font-medium text-text-light dark:text-text-dark">
                    {project.name}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-muted-light dark:text-muted-dark">
                  {project.owner}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={[
                      "inline-flex rounded-full px-2.5 py-1",
                      "text-xs font-semibold",
                      statusStyles[project.status],
                    ].join(" ")}
                  >
                    {project.status}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <div className="flex min-w-32 items-center gap-3">
                    <div
                      className="h-2 flex-1 overflow-hidden rounded-full bg-app-light dark:bg-app-dark"
                      role="progressbar"
                      aria-label={`${project.name} progress`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={project.progress}
                    >
                      <div
                        className={[
                          "h-full rounded-full",
                          progressStyles[project.status],
                        ].join(" ")}
                        style={{
                          width: `${project.progress}%`,
                        }}
                      />
                    </div>

                    <span className="w-10 text-right text-sm font-medium text-muted-light dark:text-muted-dark">
                      {project.progress}%
                    </span>
                  </div>
                </td>

                <td className="px-5 py-4 text-sm text-muted-light dark:text-muted-dark">
                  {formatDueDate(project.dueDate)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
