import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import { alpha } from "@mui/material/styles";

import {
  ChartColumn,
  Folder,
  LayoutDashboard,
  Settings,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

import { mainNavigation, secondaryNavigation } from "../../data/navigationData";

import type { NavigationIcon, NavigationItem } from "../../types/dashboard";

export const DRAWER_WIDTH = 248;

type MuiSidebarProps = {
  mobileOpen: boolean;
  onClose: () => void;
};

const iconMap: Record<NavigationIcon, LucideIcon> = {
  overview: LayoutDashboard,
  projects: Folder,
  analytics: ChartColumn,
  team: Users,
  settings: Settings,
};

function SidebarNavigation({
  items,
  onItemClick,
}: {
  items: NavigationItem[];
  onItemClick?: () => void;
}) {
  return (
    <List disablePadding>
      {items.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <ListItemButton
            key={item.id}
            component="button"
            selected={item.active}
            aria-current={item.active ? "page" : undefined}
            onClick={onItemClick}
            sx={(theme) => ({
              width: "100%",
              minHeight: 44,
              px: 1.5,
              py: 1,
              gap: 1.5,
              color: "text.secondary",

              "&:hover": {
                color: "text.primary",
                backgroundColor: "action.hover",
              },

              "&.Mui-selected": {
                color: "primary.main",
                backgroundColor: alpha(theme.palette.primary.main, 0.1),

                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.14),
                },
              },
            })}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                color: "inherit",
              }}
            >
              <Icon size={18} aria-hidden="true" />
            </ListItemIcon>

            <ListItemText
              primary={item.label}
              slotProps={{
                primary: {
                  sx: {
                    fontSize: 14,
                    fontWeight: 500,
                  },
                },
              }}
            />
          </ListItemButton>
        );
      })}
    </List>
  );
}

function SidebarContent({
  mobile = false,
  onClose,
}: {
  mobile?: boolean;
  onClose?: () => void;
}) {
  return (
    <Stack
      sx={{
        height: "100%",
      }}
    >
      <Stack
        direction="row"
        sx={{
          minHeight: 80,
          px: 2.5,
          borderBottom: 1,
          borderColor: "divider",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              width: 36,
              height: 36,
              borderRadius: 1,
              backgroundColor: "primary.main",
              color: "primary.contrastText",
            }}
          >
            <LayoutDashboard size={19} aria-hidden="true" />
          </Box>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
            }}
          >
            ProjectFlow
          </Typography>
        </Stack>

        {mobile && (
          <IconButton
            onClick={onClose}
            aria-label="Close navigation"
            sx={{
              width: 36,
              height: 36,
              color: "text.secondary",

              "&:hover": {
                color: "text.primary",
              },
            }}
          >
            <X size={20} aria-hidden="true" />
          </IconButton>
        )}
      </Stack>

      <Stack
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
        }}
      >
        <Box component="nav" aria-label="Main navigation">
          <SidebarNavigation
            items={mainNavigation}
            onItemClick={mobile ? onClose : undefined}
          />
        </Box>

        <Box
          sx={{
            mt: "auto",
          }}
        >
          <Divider
            sx={{
              mb: 2,
            }}
          />

          <Box component="nav" aria-label="Secondary navigation">
            <SidebarNavigation
              items={secondaryNavigation}
              onItemClick={mobile ? onClose : undefined}
            />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}

export function MuiSidebar({ mobileOpen, onClose }: MuiSidebarProps) {
  return (
    <>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },

          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            borderRight: 1,
            borderColor: "divider",
            backgroundColor: "background.paper",
          },
        }}
      >
        <SidebarContent />
      </Drawer>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            xs: "block",
            lg: "none",
          },

          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            backgroundColor: "background.paper",
          },
        }}
      >
        <SidebarContent mobile onClose={onClose} />
      </Drawer>
    </>
  );
}
