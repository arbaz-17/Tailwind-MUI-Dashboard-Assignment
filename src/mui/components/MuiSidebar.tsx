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
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

import { mainNavigation, secondaryNavigation } from "../../data/navigationData";

import type { NavigationIcon, NavigationItem } from "../../types/dashboard";

export const DRAWER_WIDTH = 248;
export const COLLAPSED_DRAWER_WIDTH = 80;

type MuiSidebarProps = {
  mobileOpen: boolean;
  collapsed: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
};

const iconMap: Record<NavigationIcon, LucideIcon> = {
  overview: LayoutDashboard,
  projects: Folder,
  analytics: ChartColumn,
  team: Users,
  settings: Settings,
};

type SidebarNavigationProps = {
  items: NavigationItem[];
  collapsed?: boolean;
  onItemClick?: () => void;
};

function SidebarNavigation({
  items,
  collapsed = false,
  onItemClick,
}: SidebarNavigationProps) {
  return (
    <List disablePadding>
      {items.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <ListItemButton
            key={item.id}
            component="button"
            selected={item.active}
            title={collapsed ? item.label : undefined}
            aria-current={item.active ? "page" : undefined}
            onClick={onItemClick}
            sx={(theme) => ({
              position: "relative",
              width: "100%",
              minHeight: 44,
              px: collapsed ? 1 : 1.5,
              py: 1,

              justifyContent: collapsed ? "center" : "flex-start",

              gap: collapsed ? 0 : 1.5,

              color: "text.secondary",

              "&:hover": {
                color: "text.primary",
                backgroundColor: "action.hover",
              },

              "&.Mui-selected": {
                color: "primary.main",

                backgroundColor: alpha(theme.palette.primary.main, 0.1),

                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 10,
                  bottom: 10,
                  width: 3,
                  borderRadius: "0 4px 4px 0",
                  backgroundColor: "primary.main",
                },

                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.14),
                },
              },
            })}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 20,
                justifyContent: "center",
                color: "inherit",
              }}
            >
              <Icon size={18} aria-hidden="true" />
            </ListItemIcon>

            {!collapsed && (
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
            )}
          </ListItemButton>
        );
      })}
    </List>
  );
}

function SidebarContent({
  mobile = false,
  collapsed = false,
  onClose,
  onToggleCollapse,
}: {
  mobile?: boolean;
  collapsed?: boolean;
  onClose?: () => void;
  onToggleCollapse?: () => void;
}) {
  const isCollapsed = collapsed && !mobile;

  return (
    <Stack
      sx={{
        height: "100%",
        overflowX: "hidden",
      }}
    >
      <Stack
        direction="row"
        sx={{
          minHeight: 80,

          px: isCollapsed ? 1 : 2,

          borderBottom: 1,
          borderColor: "divider",

          alignItems: "center",

          justifyContent: isCollapsed ? "center" : "space-between",

          gap: isCollapsed ? 0.5 : 1,
        }}
      >
        <Stack
          direction="row"
          sx={{
            minWidth: 0,
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Box
            sx={(theme) => ({
              display: "grid",
              placeItems: "center",
              width: 36,
              height: 36,
              flexShrink: 0,
              borderRadius: 1,
              backgroundColor: "primary.main",
              color: "primary.contrastText",

              boxShadow: `0 4px 12px ${alpha(
                theme.palette.primary.main,
                0.18,
              )}`,
            })}
          >
            <LayoutDashboard size={19} aria-hidden="true" />
          </Box>

          {!isCollapsed && (
            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  fontSize: 16,
                  lineHeight: 1.35,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                Optimus Fox
              </Typography>
            </Box>
          )}
        </Stack>

        {mobile ? (
          <IconButton
            onClick={onClose}
            aria-label="Close navigation"
            sx={{
              width: 36,
              height: 36,
              flexShrink: 0,
              color: "text.secondary",

              "&:hover": {
                color: "text.primary",
                backgroundColor: "action.hover",
              },
            }}
          >
            <X size={20} aria-hidden="true" />
          </IconButton>
        ) : (
          <IconButton
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            sx={{
              width: 36,
              height: 36,
              flexShrink: 0,
              color: "text.secondary",

              "&:hover": {
                color: "text.primary",
                backgroundColor: "action.hover",
              },
            }}
          >
            {isCollapsed ? (
              <PanelLeftOpen size={18} aria-hidden="true" />
            ) : (
              <PanelLeftClose size={18} aria-hidden="true" />
            )}
          </IconButton>
        )}
      </Stack>

      <Stack
        sx={{
          flex: 1,
          overflowY: "auto",

          px: isCollapsed ? 1 : 2,

          py: 2,
        }}
      >
        <Box component="nav" aria-label="Main navigation">
          <SidebarNavigation
            items={mainNavigation}
            collapsed={isCollapsed}
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
              collapsed={isCollapsed}
              onItemClick={mobile ? onClose : undefined}
            />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}

export function MuiSidebar({
  mobileOpen,
  collapsed,
  onClose,
  onToggleCollapse,
}: MuiSidebarProps) {
  const desktopWidth = collapsed ? COLLAPSED_DRAWER_WIDTH : DRAWER_WIDTH;

  return (
    <>
      <Drawer
        variant="permanent"
        open
        sx={(theme) => ({
          display: {
            xs: "none",
            lg: "block",
          },

          width: desktopWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: desktopWidth,
            boxSizing: "border-box",
            overflowX: "hidden",

            borderRight: 1,
            borderColor: "divider",

            backgroundColor: "background.paper",

            transition: theme.transitions.create("width", {
              duration: theme.transitions.duration.shorter,
            }),
          },
        })}
      >
        <SidebarContent
          collapsed={collapsed}
          onToggleCollapse={onToggleCollapse}
        />
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
