import { Box, Card, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";

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

export function MuiCompletionChart() {
  const theme = useTheme();

  const gridColor = theme.palette.divider;
  const mutedColor = theme.palette.text.secondary;
  const surfaceColor = theme.palette.background.paper;
  const textColor = theme.palette.text.primary;
  const primaryColor = theme.palette.primary.main;

  return (
    <Card
      component="section"
      sx={{
        height: "100%",
        p: 2.5,
        backgroundColor: "background.paper",
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Typography
          component="h2"
          sx={{
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Project Completion Trend
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mt: 0.5,
            fontSize: 14,
          }}
        >
          Cumulative project deliveries over the last five months
        </Typography>
      </Box>

      <Box
        role="img"
        aria-label="Area chart showing cumulative project completions from May to September"
        sx={{
          width: "100%",
          height: 288,
        }}
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
                id="muiCompletionGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={primaryColor} stopOpacity={0.35} />

                <stop
                  offset="100%"
                  stopColor={primaryColor}
                  stopOpacity={0.02}
                />
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
                strokeOpacity: 0.3,
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

            <Area
              type="monotone"
              dataKey="completed"
              name="Completed Projects"
              stroke={primaryColor}
              strokeWidth={3}
              fill="url(#muiCompletionGradient)"
              dot={{
                r: 4,
                fill: primaryColor,
                stroke: surfaceColor,
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
                fill: primaryColor,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
}
