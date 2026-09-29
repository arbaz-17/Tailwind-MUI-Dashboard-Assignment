import { recentProjects } from "../../data/dashboardData";

import type { ProjectStatus } from "../../types/dashboard";

const statusStyles: Record<ProjectStatus, string> = {
  Active: "bg-brand/10 text-brand ring-1 ring-inset ring-brand/20",

  Completed:
    "bg-green-500/10 text-green-600 ring-1 ring-inset ring-green-500/20 dark:text-green-400",

  "On Hold":
    "bg-red-500/10 text-red-600 ring-1 ring-inset ring-red-500/20 dark:text-red-400",

  Planned:
    "bg-amber-500/10 text-amber-600 ring-1 ring-inset ring-amber-500/20 dark:text-amber-400",
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
        "border-border-light bg-surface-light shadow-sm",
        "dark:border-border-dark dark:bg-surface-dark",
      ].join(" ")}
    >
      <div
        className={[
          "flex items-start justify-between gap-4",
          "border-b border-border-light px-5 py-4",
          "dark:border-border-dark",
        ].join(" ")}
      >
        <div>
          <h2 className="text-base font-semibold tracking-tight text-text-light dark:text-text-dark">
            Recent Projects
          </h2>

          <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
            Latest project activity and progress
          </p>
        </div>

        <span
          className={[
            "shrink-0 rounded-full border px-2.5 py-1",
            "border-border-light bg-app-light",
            "text-xs font-medium text-muted-light",
            "dark:border-border-dark dark:bg-white/[0.04]",
            "dark:text-muted-dark",
          ].join(" ")}
        >
          {recentProjects.length} recent
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse">
          <caption className="sr-only">
            Recent projects with owners, statuses, progress, and due dates
          </caption>

          <thead className="bg-app-light/70 dark:bg-white/[0.025]">
            <tr className="border-b border-border-light dark:border-border-dark">
              {["Project", "Owner", "Status", "Progress", "Due Date"].map(
                (heading) => (
                  <th
                    key={heading}
                    scope="col"
                    className={[
                      "px-5 py-3 text-left",
                      "text-[11px] font-semibold uppercase",
                      "tracking-[0.08em]",
                      "text-muted-light dark:text-muted-dark",
                    ].join(" ")}
                  >
                    {heading}
                  </th>
                ),
              )}
            </tr>
          </thead>

          <tbody>
            {recentProjects.map((project) => (
              <tr
                key={project.id}
                className={[
                  "border-b border-border-light",
                  "last:border-b-0",
                  "transition-colors",
                  "hover:bg-app-light/70",
                  "dark:border-border-dark",
                  "dark:hover:bg-white/[0.025]",
                ].join(" ")}
              >
                <td className="px-5 py-4">
                  <div>
                    <span className="block text-sm font-medium text-text-light dark:text-text-dark">
                      {project.name}
                    </span>

                    <span className="mt-1 block text-[11px] font-medium text-muted-light dark:text-muted-dark">
                      {project.id}
                    </span>
                  </div>
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
                      className="h-2 flex-1 overflow-hidden rounded-full bg-black/5 dark:bg-white/[0.07]"
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

                    <span className="w-10 text-right text-sm font-medium tabular-nums text-muted-light dark:text-muted-dark">
                      {project.progress}%
                    </span>
                  </div>
                </td>

                <td className="whitespace-nowrap px-5 py-4 text-sm text-muted-light dark:text-muted-dark">
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
