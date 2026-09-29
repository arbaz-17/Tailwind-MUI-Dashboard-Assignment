import { Box, Card, Stack, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { priorityProjectData } from "../../data/dashboardData";

export function MuiPriorityPieChart() {
  const theme = useTheme();

  const totalProjects = priorityProjectData.reduce(
    (total, item) => total + item.count,
    0,
  );

  const priorityColors =
    theme.palette.mode === "dark"
      ? [theme.palette.primary.main, "#a3a3a3", "#525252"]
      : [theme.palette.primary.main, "#737373", "#d4d4d4"];

  return (
    <Card
      component="section"
      sx={{
        p: 2.5,
        backgroundColor: "background.paper",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography
          component="h2"
          sx={{
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Project Priority Distribution
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mt: 0.5,
            fontSize: 14,
          }}
        >
          Current portfolio grouped by delivery priority
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 1fr) minmax(220px, 0.55fr)",
          },

          alignItems: "center",
          gap: 3,
        }}
      >
        <Box
          role="img"
          aria-label="Donut chart showing project priority distribution"
          sx={{
            position: "relative",
            width: "100%",
            height: 260,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 8,
                  color: theme.palette.text.primary,
                }}
                labelStyle={{
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                }}
              />

              <Pie
                data={priorityProjectData}
                dataKey="count"
                nameKey="priority"
                cx="50%"
                cy="50%"
                innerRadius={68}
                outerRadius={98}
                paddingAngle={3}
                stroke={theme.palette.background.paper}
                strokeWidth={3}
              >
                {priorityProjectData.map((item, index) => (
                  <Cell key={item.priority} fill={priorityColors[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              pointerEvents: "none",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: 28,
                  lineHeight: 1,
                  fontWeight: 700,
                }}
              >
                {totalProjects}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 0.75,
                  fontSize: 12,
                }}
              >
                Projects
              </Typography>
            </Box>
          </Box>
        </Box>

        <Stack
          sx={{
            gap: 2,
          }}
        >
          {priorityProjectData.map((item, index) => {
            const percentage =
              totalProjects === 0
                ? 0
                : Math.round((item.count / totalProjects) * 100);

            return (
              <Stack
                key={item.priority}
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Stack
                  direction="row"
                  sx={{
                    alignItems: "center",
                    gap: 1.25,
                  }}
                >
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      flexShrink: 0,
                      borderRadius: "50%",
                      backgroundColor: priorityColors[index],
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    {item.priority}
                  </Typography>
                </Stack>

                <Box sx={{ textAlign: "right" }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    {item.count}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      fontSize: 12,
                    }}
                  >
                    {percentage}%
                  </Typography>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </Card>
  );
}
