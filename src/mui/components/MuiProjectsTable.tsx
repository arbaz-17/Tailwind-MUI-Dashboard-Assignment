import {
  Box,
  Card,
  Chip,
  LinearProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { alpha, type Theme } from "@mui/material/styles";

import { recentProjects } from "../../data/dashboardData";

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

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function formatDueDate(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00`));
}

export function MuiProjectsTable() {
  return (
    <Card
      component="section"
      sx={{
        overflow: "hidden",
        backgroundColor: "background.paper",
      }}
    >
      <Stack
        direction="row"
        sx={{
          px: 2.5,
          py: 2,

          borderBottom: 1,
          borderColor: "divider",

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
            Recent Projects
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 0.5,
              fontSize: 14,
            }}
          >
            Latest project activity and progress
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
            {recentProjects.length} recent
          </Typography>
        </Box>
      </Stack>

      <TableContainer
        sx={{
          overflowX: "auto",
        }}
      >
        <Table
          sx={{
            minWidth: 760,
          }}
          aria-label="Recent projects"
        >
          <caption
            style={{
              position: "absolute",
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              border: 0,
            }}
          >
            Recent projects with owners, statuses, progress, and due dates
          </caption>

          <TableHead
            sx={(theme) => ({
              backgroundColor: alpha(
                theme.palette.text.primary,
                theme.palette.mode === "dark" ? 0.025 : 0.02,
              ),
            })}
          >
            <TableRow>
              {["Project", "Owner", "Status", "Progress", "Due Date"].map(
                (heading) => (
                  <TableCell
                    key={heading}
                    sx={{
                      px: 2.5,
                      py: 1.5,

                      borderColor: "divider",

                      color: "text.secondary",

                      fontSize: 11,
                      fontWeight: 600,

                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {heading}
                  </TableCell>
                ),
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {recentProjects.map((project) => (
              <TableRow
                key={project.id}
                sx={{
                  transition: "background-color 150ms ease",

                  "&:last-child td": {
                    borderBottom: 0,
                  },

                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                }}
              >
                <TableCell
                  sx={{
                    px: 2.5,
                    py: 2,
                    borderColor: "divider",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 14,
                      lineHeight: 1.4,
                      fontWeight: 500,
                    }}
                  >
                    {project.name}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      mt: 0.5,
                      fontSize: 11,
                      fontWeight: 500,
                    }}
                  >
                    {project.id}
                  </Typography>
                </TableCell>

                <TableCell
                  sx={{
                    px: 2.5,
                    py: 2,

                    borderColor: "divider",

                    color: "text.secondary",

                    fontSize: 14,
                  }}
                >
                  {project.owner}
                </TableCell>

                <TableCell
                  sx={{
                    px: 2.5,
                    py: 2,
                    borderColor: "divider",
                  }}
                >
                  <Chip
                    label={project.status}
                    size="small"
                    sx={(theme) => {
                      const color = getStatusColor(project.status, theme);

                      return {
                        height: 24,

                        border: `1px solid ${alpha(color, 0.2)}`,

                        borderRadius: 999,

                        color,

                        backgroundColor: alpha(
                          color,
                          theme.palette.mode === "dark" ? 0.12 : 0.08,
                        ),

                        "& .MuiChip-label": {
                          px: 1.25,
                          fontSize: 12,
                          fontWeight: 600,
                        },
                      };
                    }}
                  />
                </TableCell>

                <TableCell
                  sx={{
                    px: 2.5,
                    py: 2,
                    borderColor: "divider",
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      minWidth: 128,
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <LinearProgress
                      variant="determinate"
                      value={project.progress}
                      aria-label={`${project.name} progress`}
                      sx={(theme) => {
                        const color = getStatusColor(project.status, theme);

                        return {
                          flex: 1,

                          height: 8,

                          borderRadius: 999,

                          backgroundColor: alpha(
                            theme.palette.text.primary,
                            0.07,
                          ),

                          "& .MuiLinearProgress-bar": {
                            borderRadius: 999,
                            backgroundColor: color,
                          },
                        };
                      }}
                    />

                    <Typography
                      color="text.secondary"
                      sx={{
                        width: 40,
                        flexShrink: 0,

                        textAlign: "right",

                        fontSize: 14,
                        fontWeight: 500,

                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {project.progress}%
                    </Typography>
                  </Stack>
                </TableCell>

                <TableCell
                  sx={{
                    px: 2.5,
                    py: 2,

                    borderColor: "divider",

                    color: "text.secondary",

                    fontSize: 14,

                    whiteSpace: "nowrap",
                  }}
                >
                  {formatDueDate(project.dueDate)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
