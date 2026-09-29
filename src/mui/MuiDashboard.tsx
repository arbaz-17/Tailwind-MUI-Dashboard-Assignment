import { useMemo, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { MuiHeader } from "./components/MuiHeader";
import { DRAWER_WIDTH, MuiSidebar } from "./components/MuiSidebar";
import { createMuiDashboardTheme, type MuiThemeMode } from "./theme/muiTheme";

export function MuiDashboard() {
  const [themeMode, setThemeMode] = useState<MuiThemeMode>("light");

  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);

  const theme = useMemo(() => createMuiDashboardTheme(themeMode), [themeMode]);

  function toggleTheme() {
    setThemeMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        <MuiSidebar
          mobileOpen={mobileNavigationOpen}
          onClose={() => setMobileNavigationOpen(false)}
        />

        <Box
          sx={{
            minHeight: "100vh",

            ml: {
              xs: 0,
              lg: `${DRAWER_WIDTH}px`,
            },
          }}
        >
          <MuiHeader
            themeMode={themeMode}
            onToggleTheme={toggleTheme}
            onOpenNavigation={() => setMobileNavigationOpen(true)}
          />

          <Box
            component="main"
            sx={{
              p: {
                xs: 2,
                sm: 3,
                lg: 4,
              },
            }}
          >
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                minHeight: 384,
                p: 4,
                border: 1,
                borderStyle: "dashed",
                borderColor: "divider",
                borderRadius: 1.5,
                backgroundColor: "background.paper",
                textAlign: "center",
              }}
            >
              <Stack spacing={1}>
                <Typography
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  Dashboard content
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize: 14,
                  }}
                >
                  KPI cards, analytics, project status, and the projects table
                  will be added in Phase 6.
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
