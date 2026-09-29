# Tailwind Components

## Overview

This folder contains the reusable UI components used by the Tailwind CSS dashboard. Each component focuses on a specific part of the dashboard interface.

## Components

- `TailwindSidebar.tsx` — Responsive navigation with mobile drawer and desktop collapse/expand behavior.
- `TailwindHeader.tsx` — Dashboard heading, theme toggle, mobile menu trigger, and MUI version switch.
- `TailwindKpiCard.tsx` — Displays individual dashboard KPI metrics.
- `TailwindCompletionChart.tsx` — Area chart showing project completion trends.
- `TailwindBarChart.tsx` — Bar chart showing projects by department.
- `TailwindStatusSummary.tsx` — Shows project status counts, percentages, and progress bars.
- `TailwindProjectsTable.tsx` — Displays recent projects, statuses, progress, owners, and due dates.

## Key Concepts

- Reusable React components
- Tailwind utility styling
- Responsive layouts
- Dark/light theme support
- Recharts integration
- Semantic and accessible UI

## How They Fit Together

`TailwindDashboard.tsx` composes these components into the complete Tailwind version of the dashboard while shared mock data and types are imported from the common project folders.
