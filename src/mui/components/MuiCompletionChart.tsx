import { Box, Card, Stack, Typography } from "@mui/material";

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
      <Stack
        direction="row"
        sx={{
          mb: 3,
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box>
          <Typography
            component="h2"
            sx={{
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "-0.01em",
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
          sx={{
            px: 1.25,
            py: 0.5,
            border: 1,
            borderColor: "divider",
            borderRadius: 999,
            backgroundColor: "action.hover",
          }}
        >
          <Typography
            color="text.secondary"
            sx={{
              fontSize: 12,
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            5 months
          </Typography>
        </Box>
      </Stack>

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
              fill="url(#muiCompletionGradient)"
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
      </Box>
    </Card>
  );
}
