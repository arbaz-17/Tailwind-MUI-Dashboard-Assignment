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
          Projects by Department
        </h2>

        <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
          Current project distribution across delivery teams
        </p>
      </div>

      <div
        className="h-72 w-full"
        role="img"
        aria-label="Bar chart showing the number of projects by department"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={departmentProjectData}
            margin={{
              top: 8,
              right: 8,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke={gridColor}
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="department"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: mutedColor,
                fontSize: 12,
              }}
              tickMargin={12}
            />

            <YAxis
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: mutedColor,
                fontSize: 12,
              }}
            />

            <Tooltip
              cursor={{
                fill: isDark ? "#262626" : "#fafafa",
              }}
              contentStyle={{
                backgroundColor: surfaceColor,
                border: `1px solid ${gridColor}`,
                borderRadius: 8,
                color: textColor,
              }}
              labelStyle={{
                color: textColor,
                fontWeight: 600,
              }}
            />

            <Bar
              dataKey="count"
              name="Projects"
              fill={primaryColor}
              radius={[6, 6, 0, 0]}
              maxBarSize={56}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
