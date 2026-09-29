import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

import { CalendarDays, Menu, Moon, Plus, Sun } from "lucide-react";

import type { MuiThemeMode } from "../theme/muiTheme";

type MuiHeaderProps = {
  themeMode: MuiThemeMode;
  onToggleTheme: () => void;
  onOpenNavigation: () => void;
};

export function MuiHeader({
  themeMode,
  onToggleTheme,
  onOpenNavigation,
}: MuiHeaderProps) {
  const isDark = themeMode === "dark";

  return (
    <Box
      component="header"
      sx={(theme) => ({
        position: "sticky",
        top: 0,
        zIndex: theme.zIndex.appBar,
        minHeight: 80,
        borderBottom: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
      })}
    >
      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={2}
        sx={{
          minHeight: 80,

          alignItems: {
            xs: "stretch",
            sm: "center",
          },

          px: {
            xs: 2,
            sm: 3,
            lg: 4,
          },

          py: 2,
        }}
      >
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            minWidth: 0,
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={onOpenNavigation}
            aria-label="Open navigation"
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },

              width: 40,
              height: 40,
              flexShrink: 0,
              border: 1,
              borderColor: "divider",
              color: "text.secondary",

              "&:hover": {
                color: "text.primary",
                backgroundColor: "action.hover",
              },
            }}
          >
            <Menu size={20} aria-hidden="true" />
          </IconButton>

          <Box
            sx={{
              minWidth: 0,
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: 20,
                lineHeight: 1.3,
                fontWeight: 600,
              }}
            >
              Dashboard
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mt: 0.5,
                fontSize: 14,
              }}
            >
              Overview of your team's projects and performance
            </Typography>
          </Box>
        </Stack>

        <Stack
          direction="row"
          sx={{
            ml: {
              sm: "auto",
            },

            gap: 1,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<CalendarDays size={17} aria-hidden="true" />}
            sx={{
              color: "text.primary",
              borderColor: "divider",

              "&:hover": {
                borderColor: "divider",
                backgroundColor: "action.hover",
              },
            }}
          >
            Last 30 Days
          </Button>

          <IconButton
            onClick={onToggleTheme}
            aria-label={
              isDark ? "Switch to light theme" : "Switch to dark theme"
            }
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            sx={{
              width: 40,
              height: 40,
              border: 1,
              borderColor: "divider",
              color: "text.primary",
            }}
          >
            {isDark ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </IconButton>

          <Button
            variant="contained"
            startIcon={<Plus size={17} aria-hidden="true" />}
          >
            New Project
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
