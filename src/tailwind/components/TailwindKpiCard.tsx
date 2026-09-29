import {
  CircleCheckBig,
  FolderKanban,
  Activity,
  Users,
  type LucideIcon,
} from "lucide-react";

import type { KpiMetric } from "../../types/dashboard";

type TailwindKpiCardProps = {
  metric: KpiMetric;
};

const iconMap: Record<KpiMetric["icon"], LucideIcon> = {
  projects: FolderKanban,
  active: Activity,
  completed: CircleCheckBig,
  team: Users,
};

export function TailwindKpiCard({
  metric,
}: TailwindKpiCardProps) {
  const Icon = iconMap[metric.icon];

  return (
    <article
      className={[
        "rounded-xl border border-border-light",
        "bg-surface-light p-5",
        "dark:border-border-dark dark:bg-surface-dark",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted-light dark:text-muted-dark">
            {metric.title}
          </p>

          <p className="mt-2 text-3xl font-semibold tracking-tight text-text-light dark:text-text-dark">
            {metric.value}
          </p>
        </div>

        <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
          <Icon size={19} aria-hidden="true" />
        </div>
      </div>

      <p className="mt-4 text-sm font-medium text-success">
        {metric.change}
      </p>
    </article>
  );
}