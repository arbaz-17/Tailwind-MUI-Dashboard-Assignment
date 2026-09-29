import { Card, LinearProgress, Stack, Typography } from "@mui/material";

import type { Theme } from "@mui/material/styles";

import { projectStatusData } from "../../data/dashboardData";

import type { ProjectStatus } from "../../types/dashboard";

function getStatusColor(status: ProjectStatus, theme: Theme) {
  switch (status) {
    case "Active":
      return theme.palette.primary.main;

    case "Completed":
      return theme.palette.success.main;

    case "On Hold":
      return "#ea580c";

    case "Planned":
      return theme.palette.warning.main;
  }
}

export function MuiStatusSummary() {
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
        sx={{
          height: "100%",
        }}
      >
        <div>
          <Typography
            component="h2"
            sx={{
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Project Status
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 0.5,
              fontSize: 14,
            }}
          >
            Current project distribution
          </Typography>
        </div>

        <Stack
          sx={{
            mt: 3,
            gap: 2.5,
          }}
        >
          {projectStatusData.map((item) => (
            <div key={item.status}>
              <Stack
                direction="row"
                sx={{
                  mb: 1,
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Stack
                  direction="row"
                  sx={{
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    {item.status}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      fontSize: 12,
                    }}
                  >
                    {item.count}
                  </Typography>
                </Stack>

                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {item.percentage}%
                </Typography>
              </Stack>

              <LinearProgress
                variant="determinate"
                value={item.percentage}
                aria-label={`${item.status} projects`}
                sx={(theme) => {
                  const color = getStatusColor(item.status, theme);

                  return {
                    height: 8,
                    borderRadius: 999,
                    backgroundColor: "action.hover",

                    "& .MuiLinearProgress-bar": {
                      borderRadius: 999,
                      backgroundColor: color,
                    },
                  };
                }}
              />
            </div>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
