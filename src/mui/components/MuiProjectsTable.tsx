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
      return "#ea580c";

    case "Planned":
      return theme.palette.warning.main;
  }
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
      <Box
        sx={{
          px: 2.5,
          py: 2,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: 16,
            fontWeight: 600,
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

      <TableContainer
        sx={{
          overflowX: "auto",
        }}
      >
        <Table
          sx={{
            minWidth: 720,
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

          <TableHead>
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
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.05em",
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
                      fontWeight: 500,
                    }}
                  >
                    {project.name}
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
                        borderRadius: 999,
                        color,
                        backgroundColor: alpha(
                          color,
                          theme.palette.mode === "dark" ? 0.18 : 0.1,
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
                          backgroundColor: "action.hover",

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
                  {project.dueDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
