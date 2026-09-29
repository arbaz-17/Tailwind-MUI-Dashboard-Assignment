import { createTheme } from "@mui/material/styles";

export type MuiThemeMode = "light" | "dark";

export function createMuiDashboardTheme(mode: MuiThemeMode) {
  const isLight = mode === "light";

  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },

    palette: {
      mode,

      primary: {
        main: "#2563eb",
      },

      success: {
        main: "#16a34a",
      },

      warning: {
        main: "#d97706",
      },

      background: {
        default: isLight ? "#f8fafc" : "#0f172a",
        paper: isLight ? "#ffffff" : "#1e293b",
      },

      text: {
        primary: isLight ? "#0f172a" : "#f8fafc",
        secondary: isLight ? "#64748b" : "#94a3b8",
      },

      divider: isLight ? "#e2e8f0" : "#334155",
    },

    typography: {
      fontFamily: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "sans-serif",
      ].join(","),
    },

    shape: {
      borderRadius: 8,
    },

    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },

        styleOverrides: {
          root: {
            minHeight: 40,
            borderRadius: 8,
            textTransform: "none",
            fontWeight: 600,
          },
        },
      },

      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },

      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
    },
  });
}
