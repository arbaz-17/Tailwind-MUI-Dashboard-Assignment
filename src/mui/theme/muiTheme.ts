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
        main: "#f97316",
        dark: "#ea580c",
        light: "#fb923c",
        contrastText: "#ffffff",
      },

      success: {
        main: "#16a34a",
      },

      warning: {
        main: "#ca8a04",
      },

      error: {
        main: "#dc2626",
      },

      background: {
        default: isLight ? "#f7f7f7" : "#0a0a0a",
        paper: isLight ? "#ffffff" : "#171717",
      },

      text: {
        primary: isLight ? "#171717" : "#fafafa",
        secondary: isLight ? "#737373" : "#a3a3a3",
      },

      divider: isLight ? "#e5e5e5" : "#2f2f2f",
    },

    typography: {
      fontFamily: [
        "Poppins",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "sans-serif",
      ].join(","),

      button: {
        fontFamily: "Poppins",
      },
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

      MuiCard: {
        defaultProps: {
          variant: "outlined",
        },

        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: "none",
            borderColor: isLight ? "#e5e5e5" : "#2f2f2f",
          },
        },
      },
    },
  });
}