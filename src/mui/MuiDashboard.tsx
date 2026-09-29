import { useMemo, useState } from "react";

import { Box } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";

import { kpiMetrics } from "../data/dashboardData";

import { MuiCompletionChart } from "./components/MuiCompletionChart";
import { MuiHeader } from "./components/MuiHeader";
import { MuiKpiCard } from "./components/MuiKpiCard";
import {MuiPieChart} from "./components/MuiPieChart";
import { MuiProjectsTable } from "./components/MuiProjectsTable";

import {
  COLLAPSED_DRAWER_WIDTH,
  DRAWER_WIDTH,
  MuiSidebar,
} from "./components/MuiSidebar";

import { MuiStatusSummary } from "./components/MuiStatusSummary";

import { createMuiDashboardTheme, type MuiThemeMode } from "./theme/muiTheme";

export function MuiDashboard() {
  const [themeMode, setThemeMode] = useState<MuiThemeMode>("dark");

  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const theme = useMemo(() => createMuiDashboardTheme(themeMode), [themeMode]);

  function toggleTheme() {
    setThemeMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
  }

  function toggleSidebar() {
    setSidebarCollapsed((currentValue) => !currentValue);
  }

  const desktopSidebarWidth = sidebarCollapsed
    ? COLLAPSED_DRAWER_WIDTH
    : DRAWER_WIDTH;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          overflowX: "hidden",
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        <MuiSidebar
          mobileOpen={mobileNavigationOpen}
          collapsed={sidebarCollapsed}
          onClose={() => setMobileNavigationOpen(false)}
          onToggleCollapse={toggleSidebar}
        />

        <Box
          sx={(theme) => ({
            minHeight: "100vh",

            ml: {
              xs: 0,
              lg: `${desktopSidebarWidth}px`,
            },

            transition: theme.transitions.create("margin-left", {
              duration: theme.transitions.duration.shorter,
            }),
          })}
        >
          <MuiHeader
            themeMode={themeMode}
            onToggleTheme={toggleTheme}
            onOpenNavigation={() => setMobileNavigationOpen(true)}
          />

          <Box
            component="main"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,

              p: {
                xs: 2,
                sm: 3,
                lg: 4,
              },
            }}
          >
            <Box
              component="section"
              aria-label="Project metrics"
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  lg: "repeat(4, minmax(0, 1fr))",
                },

                gap: 2,
              }}
            >
              {kpiMetrics.map((metric) => (
                <MuiKpiCard key={metric.id} metric={metric} />
              ))}
            </Box>

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  lg: "minmax(0, 2fr) minmax(0, 1fr)",
                },

                gap: 3,
              }}
            >
              <MuiCompletionChart />

              <MuiStatusSummary />
            </Box>

            <MuiPieChart />

            <MuiProjectsTable />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
