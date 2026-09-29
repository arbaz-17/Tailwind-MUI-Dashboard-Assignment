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
      sx={{
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
            width: 40,
            height: 40,
            flexShrink: 0,
            borderRadius: 1,
            color: "primary.main",
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
          })}
        >
          <Icon size={19} aria-hidden="true" />
        </Box>
      </Stack>

      <Typography
        color="text.secondary"
        sx={{
          mt: 2,
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        {metric.supportingText}
      </Typography>
    </Card>
  );
}
