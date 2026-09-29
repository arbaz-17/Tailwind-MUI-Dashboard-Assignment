import {
  Area,
  AreaChart,
  CartesianGrid,
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

  const gridColor = isDark ? "#2f2f2f" : "#e5e5e5";
  const mutedColor = isDark ? "#a3a3a3" : "#737373";
  const surfaceColor = isDark ? "#171717" : "#ffffff";
  const textColor = isDark ? "#fafafa" : "#171717";
  const primaryColor = "#f97316";

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
            Project Completion Trend
          </h2>

          <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
            Cumulative project deliveries over the last five months
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
          5 months
        </span>
      </div>

      <div
        className="h-72 w-full"
        role="img"
        aria-label="Area chart showing cumulative project completions from May to September"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={completionTrendData}
            margin={{
              top: 8,
              right: 8,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="tailwindCompletionGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={primaryColor} stopOpacity={0.32} />

                <stop offset="55%" stopColor={primaryColor} stopOpacity={0.1} />

                <stop offset="100%" stopColor={primaryColor} stopOpacity={0} />
              </linearGradient>
            </defs>

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
                stroke: primaryColor,
                strokeOpacity: 0.25,
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

            <Area
              type="monotone"
              dataKey="completed"
              name="Completed Projects"
              stroke={primaryColor}
              strokeWidth={2.5}
              fill="url(#tailwindCompletionGradient)"
              dot={{
                r: 3.5,
                fill: primaryColor,
                stroke: surfaceColor,
                strokeWidth: 2,
              }}
              activeDot={{
                r: 5.5,
                fill: primaryColor,
                stroke: surfaceColor,
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
