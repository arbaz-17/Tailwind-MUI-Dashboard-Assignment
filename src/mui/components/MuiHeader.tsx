import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

import { alpha } from "@mui/material/styles";

import { ArrowRightLeft, Menu, Moon, Sun } from "lucide-react";

import { Link } from "react-router";

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

        backgroundColor: alpha(theme.palette.background.paper, 0.95),

        backdropFilter: "blur(12px)",
      })}
    >
      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        sx={{
          minHeight: 80,

          alignItems: {
            xs: "stretch",
            sm: "center",
          },

          justifyContent: {
            sm: "space-between",
          },

          gap: {
            xs: 2,
            sm: 3,
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
          sx={{
            minWidth: 0,
            flex: 1,
            alignItems: "center",
            gap: 1.5,
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
                borderColor: "primary.main",
                backgroundColor: "action.hover",
              },
            }}
          >
            <Menu size={20} aria-hidden="true" />
          </IconButton>

          <Box sx={{ minWidth: 0 }}>
            <Typography
              component="h1"
              sx={{
                fontSize: 20,
                lineHeight: 1.3,
                fontWeight: 600,
                letterSpacing: "-0.015em",
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
            flexShrink: 0,
            flexWrap: "wrap",
            alignItems: "center",

            justifyContent: {
              xs: "flex-start",
              sm: "flex-end",
            },

            gap: 1,
          }}
        >
          <IconButton
            onClick={onToggleTheme}
            aria-label={
              isDark ? "Switch to light theme" : "Switch to dark theme"
            }
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            sx={{
              width: 40,
              height: 40,
              flexShrink: 0,

              border: 1,
              borderColor: "divider",

              color: "text.primary",

              "&:hover": {
                borderColor: "primary.main",
                backgroundColor: "action.hover",
              },
            }}
          >
            {isDark ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </IconButton>

          <Button
            component={Link}
            to="/tailwind"
            variant="contained"
            startIcon={<ArrowRightLeft size={17} aria-hidden="true" />}
            aria-label="View Tailwind CSS dashboard version"
            sx={(theme) => ({
              whiteSpace: "nowrap",

              boxShadow: `0 4px 12px ${alpha(
                theme.palette.primary.main,
                0.16,
              )}`,

              "&:hover": {
                boxShadow: `0 5px 16px ${alpha(
                  theme.palette.primary.main,
                  0.22,
                )}`,
              },
            })}
          >
            View Tailwind Version
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
