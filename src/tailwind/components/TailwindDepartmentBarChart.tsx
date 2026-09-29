import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { departmentProjectData } from "../../data/dashboardData";

type TailwindDepartmentBarChartProps = {
  theme: "light" | "dark";
};

export function TailwindDepartmentBarChart({
  theme,
}: TailwindDepartmentBarChartProps) {
  const isDark = theme === "dark";

  const gridColor = isDark ? "#2f2f2f" : "#e5e5e5";
  const mutedColor = isDark ? "#a3a3a3" : "#737373";
  const surfaceColor = isDark ? "#171717" : "#ffffff";
  const textColor = isDark ? "#fafafa" : "#171717";
  const primaryColor = "#f97316";

  const totalProjects = departmentProjectData.reduce(
    (total, item) => total + item.count,
    0,
  );

  return (
    <section
      className={[
        "rounded-xl border border-border-light",
        "bg-surface-light p-5 shadow-sm",
        "dark:border-border-dark dark:bg-surface-dark",
      ].join(" ")}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold tracking-tight text-text-light dark:text-text-dark">
            Projects by Department
          </h2>

          <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
            Current project distribution across delivery teams
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
          {totalProjects} projects
        </span>
      </div>

      <div
        className="h-72 w-full"
        role="img"
        aria-label="Bar chart showing the number of projects by department"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={departmentProjectData}
            layout="vertical"
            margin={{
              top: 4,
              right: 16,
              left: 12,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke={gridColor}
              strokeDasharray="4 4"
              horizontal={false}
            />

            <XAxis
              type="number"
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: mutedColor,
                fontSize: 12,
              }}
            />

            <YAxis
              type="category"
              dataKey="department"
              width={88}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: mutedColor,
                fontSize: 12,
              }}
            />

            <Tooltip
              cursor={{
                fill: isDark ? "rgba(255,255,255,0.035)" : "rgba(0,0,0,0.025)",
              }}
              contentStyle={{
                backgroundColor: surfaceColor,
                border: `1px solid ${gridColor}`,
                borderRadius: 10,
                color: textColor,
                fontSize: 12,
                boxShadow: "0 10px 30px rgba(0,0,0,0.16)",
              }}
              labelStyle={{
                color: textColor,
                fontWeight: 600,
                marginBottom: 4,
              }}
            />

            <Bar
              dataKey="count"
              name="Projects"
              fill={primaryColor}
              radius={[0, 6, 6, 0]}
              maxBarSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
