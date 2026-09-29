import { Box, Card, LinearProgress, Stack, Typography } from "@mui/material";

import { alpha, type Theme } from "@mui/material/styles";

import { projectStatusData } from "../../data/dashboardData";

import type { ProjectStatus } from "../../types/dashboard";

function getStatusColor(status: ProjectStatus, theme: Theme) {
  switch (status) {
    case "Active":
      return theme.palette.primary.main;

    case "Completed":
      return theme.palette.success.main;

    case "On Hold":
      return theme.palette.error.main;

    case "Planned":
      return theme.palette.warning.main;
  }
}

export function MuiStatusSummary() {
  const totalProjects = projectStatusData.reduce(
    (total, item) => total + item.count,
    0,
  );

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
            {totalProjects} total
          </Typography>
        </Box>
      </Stack>

      <Stack
        sx={{
          mt: 3,
          gap: 2.5,
        }}
      >
        {projectStatusData.map((item) => (
          <Box key={item.status}>
            <Stack
              direction="row"
              sx={{
                mb: 1.25,
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
                  sx={(theme) => ({
                    width: 8,
                    height: 8,
                    flexShrink: 0,
                    borderRadius: "50%",
                    backgroundColor: getStatusColor(item.status, theme),
                  })}
                />

                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {item.status}
                </Typography>

                <Box
                  sx={{
                    px: 1,
                    py: 0.25,
                    borderRadius: 999,
                    backgroundColor: "action.hover",
                  }}
                >
                  <Typography
                    color="text.secondary"
                    sx={{
                      fontSize: 11,
                      fontWeight: 500,
                    }}
                  >
                    {item.count}
                  </Typography>
                </Box>
              </Stack>

              <Typography
                color="text.secondary"
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  fontVariantNumeric: "tabular-nums",
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

                  backgroundColor: alpha(theme.palette.text.primary, 0.07),

                  "& .MuiLinearProgress-bar": {
                    borderRadius: 999,
                    backgroundColor: color,
                  },
                };
              }}
            />
          </Box>
        ))}
      </Stack>
    </Card>
  );
}
