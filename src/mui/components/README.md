# Material UI Components

## Overview

This folder contains the reusable UI components used by the Material UI dashboard. Each component handles a specific part of the dashboard interface using MUI components and theme-based styling.

## Components

- `MuiSidebar.tsx` — Responsive navigation with mobile drawer and desktop collapse/expand behavior.
- `MuiHeader.tsx` — Dashboard heading, theme toggle, mobile menu trigger, and Tailwind version switch.
- `MuiKpiCard.tsx` — Displays individual dashboard KPI metrics.
- `MuiCompletionChart.tsx` — Area chart showing project completion trends.
- `MuiPieChart.tsx` — Pie chart showing project priority distribution.
- `MuiStatusSummary.tsx` — Shows project status counts, percentages, and progress bars.
- `MuiProjectsTable.tsx` — Displays recent projects, statuses, progress, owners, and due dates.

## Key Concepts

- Reusable React components
- Material UI component composition
- `sx` styling
- Theme-based colors and spacing
- Responsive layouts
- Recharts integration
- Accessible UI

## How They Fit Together

`MuiDashboard.tsx` composes these components into the complete Material UI version of the dashboard while shared mock data and types come from the common project folders.
