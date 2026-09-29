import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { completionTrendData } from "../../data/dashboardData";

type TailwindCompletionChartProps = {
  theme: "light" | "dark";
};

export function TailwindCompletionChart({
  theme,
}: TailwindCompletionChartProps) {
  const isDark = theme === "dark";

  const gridColor = isDark ? "#334155" : "#e2e8f0";
  const mutedColor = isDark ? "#94a3b8" : "#64748b";
  const surfaceColor = isDark ? "#1e293b" : "#ffffff";
  const textColor = isDark ? "#f8fafc" : "#0f172a";

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
          Project Completion Trend
        </h2>

        <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
          Completed projects over the last five months
        </p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={completionTrendData}
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
              dataKey="month"
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
                stroke: gridColor,
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

            <Line
              type="monotone"
              dataKey="completed"
              name="Completed Projects"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#2563eb",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}