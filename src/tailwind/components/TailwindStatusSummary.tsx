import { projectStatusData } from "../../data/dashboardData";

import type { ProjectStatus } from "../../types/dashboard";

const statusStyles: Record<ProjectStatus, string> = {
  Active: "bg-brand",
  Completed: "bg-success",
  "On Hold": "bg-hold",
  Planned: "bg-warning",
};

export function TailwindStatusSummary() {
  const totalProjects = projectStatusData.reduce(
    (total, item) => total + item.count,
    0,
  );

  return (
    <section
      className={[
        "h-full rounded-xl border border-border-light",
        "bg-surface-light p-5 shadow-sm",
        "dark:border-border-dark dark:bg-surface-dark",
      ].join(" ")}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold tracking-tight text-text-light dark:text-text-dark">
            Project Status
          </h2>

          <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
            Current project distribution
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
          {totalProjects} total
        </span>
      </div>

      <div className="space-y-5">
        {projectStatusData.map((item) => (
          <div key={item.status}>
            <div className="mb-2.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span
                  className={[
                    "size-2 shrink-0 rounded-full",
                    statusStyles[item.status],
                  ].join(" ")}
                />

                <span className="text-sm font-medium text-text-light dark:text-text-dark">
                  {item.status}
                </span>

                <span
                  className={[
                    "rounded-full px-2 py-0.5",
                    "bg-app-light text-[11px] font-medium text-muted-light",
                    "dark:bg-white/[0.05] dark:text-muted-dark",
                  ].join(" ")}
                >
                  {item.count}
                </span>
              </div>

              <span className="text-sm font-medium tabular-nums text-muted-light dark:text-muted-dark">
                {item.percentage}%
              </span>
            </div>

            <div
              className="h-2 overflow-hidden rounded-full bg-black/5 dark:bg-white/[0.07]"
              role="progressbar"
              aria-label={`${item.status} projects`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={item.percentage}
            >
              <div
                className={[
                  "h-full rounded-full transition-[width] duration-500",
                  statusStyles[item.status],
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
