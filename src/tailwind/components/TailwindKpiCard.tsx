import {
  Activity,
  CircleCheckBig,
  FolderKanban,
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

export function TailwindKpiCard({ metric }: TailwindKpiCardProps) {
  const Icon = iconMap[metric.icon];

  return (
    <article
      className={[
        "group flex min-h-[152px] h-full flex-col rounded-xl border",
        "border-border-light bg-surface-light p-5",
        "shadow-sm transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md",
        "dark:border-border-dark dark:bg-surface-dark",
        "dark:hover:border-brand/30",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium text-muted-light dark:text-muted-dark">
            {metric.title}
          </p>

          <p className="mt-2 text-3xl font-semibold tracking-tight text-text-light dark:text-text-dark">
            {metric.value}
          </p>
        </div>

        <div
          className={[
            "grid size-11 shrink-0 place-items-center rounded-xl",
            "bg-brand/10 text-brand ring-1 ring-inset ring-brand/15",
            "transition-transform duration-200 group-hover:scale-105",
          ].join(" ")}
        >
          <Icon size={20} aria-hidden="true" />
        </div>
      </div>

      <p className="mt-auto pt-5 text-[13px] font-medium leading-5 text-muted-light dark:text-muted-dark">
        {metric.supportingText}
      </p>
    </article>
  );
}
