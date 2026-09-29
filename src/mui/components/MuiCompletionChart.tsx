import { Box, Card, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";

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
          Completed projects over the last five months
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: 288,
        }}
      >
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
              stroke={primaryColor}
              strokeWidth={3}
              dot={{
                r: 4,
                fill: primaryColor,
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
}
