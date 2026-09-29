import { projectStatusData } from "../../data/dashboardData";

import type { ProjectStatus } from "../../types/dashboard";

const statusBarStyles: Record<ProjectStatus, string> = {
  Active: "bg-brand",
  Completed: "bg-success",
  "On Hold": "bg-hold",
  Planned: "bg-warning",
};

export function TailwindStatusSummary() {
  return (
    <section
      className={[
        "rounded-xl border border-border-light",
        "bg-surface-light p-5",
        "dark:border-border-dark dark:bg-surface-dark",
      ].join(" ")}
    >
      <div className="mb-6">
        <h2 className="text-base font-semibold text-text-light dark:text-text-dark">
          Project Status
        </h2>

        <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
          Current project distribution
        </p>
      </div>

      <div className="space-y-5">
        {projectStatusData.map((item) => (
          <div key={item.status}>
            <div className="mb-2 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-text-light dark:text-text-dark">
                  {item.status}
                </span>

                <span className="text-xs text-muted-light dark:text-muted-dark">
                  {item.count}
                </span>
              </div>

              <span className="text-sm font-medium text-muted-light dark:text-muted-dark">
                {item.percentage}%
              </span>
            </div>

            <div
              className="h-2 overflow-hidden rounded-full bg-app-light dark:bg-app-dark"
              role="progressbar"
              aria-label={`${item.status} projects`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={item.percentage}
            >
              <div
                className={[
                  "h-full rounded-full",
                  statusBarStyles[item.status],
                ].join(" ")}
                style={{
                  width: `${item.percentage}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
