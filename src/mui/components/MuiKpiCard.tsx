import {
  Activity,
  CircleCheckBig,
  FolderKanban,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Box, Card, Stack, Typography } from "@mui/material";

import { alpha } from "@mui/material/styles";

import type { KpiMetric } from "../../types/dashboard";

type MuiKpiCardProps = {
  metric: KpiMetric;
};

const iconMap: Record<KpiMetric["icon"], LucideIcon> = {
  projects: FolderKanban,
  active: Activity,
  completed: CircleCheckBig,
  team: Users,
};

export function MuiKpiCard({ metric }: MuiKpiCardProps) {
  const Icon = iconMap[metric.icon];

  return (
    <Card
      component="article"
      sx={(theme) => ({
        display: "flex",
        minHeight: 152,
        height: "100%",
        flexDirection: "column",

        p: 2.5,

        backgroundColor: "background.paper",

        transition:
          "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease",

        "&:hover": {
          transform: "translateY(-2px)",

          borderColor: alpha(theme.palette.primary.main, 0.3),

          boxShadow:
            theme.palette.mode === "dark"
              ? "0 10px 28px rgba(0,0,0,0.20)"
              : "0 10px 28px rgba(0,0,0,0.07)",
        },
      })}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box sx={{ minWidth: 0 }}>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {metric.title}
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: 30,
              lineHeight: 1.2,
              fontWeight: 600,
              letterSpacing: "-0.025em",
            }}
          >
            {metric.value}
          </Typography>
        </Box>

        <Box
          sx={(theme) => ({
            display: "grid",
            placeItems: "center",

            width: 44,
            height: 44,
            flexShrink: 0,

            borderRadius: 1.5,

            color: "primary.main",

            border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,

            backgroundColor: alpha(theme.palette.primary.main, 0.1),
          })}
        >
          <Icon size={20} aria-hidden="true" />
        </Box>
      </Stack>

      <Typography
        color="text.secondary"
        sx={{
          mt: "auto",
          pt: 2.5,
          fontSize: 13,
          lineHeight: 1.55,
          fontWeight: 500,
        }}
      >
        {metric.supportingText}
      </Typography>
    </Card>
  );
}
