# Tailwind vs MUI Dashboard Assignment - Week 10

## Overview

This Week 10 assignment compares **Tailwind CSS** and **Material UI** by building the same responsive project dashboard with both approaches. The goal is to understand the differences in styling workflow, customization, consistency, maintainability, and responsive UI development.

## What Was Created

The project contains a comparison landing page and two separate dashboard implementations:

- **Tailwind CSS Dashboard** — built with Tailwind utility classes and scoped Tailwind styling.
- **Material UI Dashboard** — built with MUI components, `sx` styling, and a custom theme.
- **Comparison Landing Page** — provides access to both implementations and space for assignment information.

Both dashboards use the same shared mock project data and overall dashboard structure while keeping their framework-specific UI implementation separate.

## Key Features

- Responsive dashboard layout for mobile, tablet, and desktop.
- Collapsible desktop sidebar and mobile navigation drawer.
- Light and dark theme support.
- Shared KPI metrics, project status data, and recent projects.
- Project completion area chart in both implementations.
- Tailwind bar chart and MUI pie chart.
- Recent projects table with status and progress indicators.
- Direct switching between Tailwind and MUI dashboards.
- Shared TypeScript data models and mock data.
- Scoped Tailwind reset to avoid styling conflicts with Material UI.

## Module Responsibility

| Module | Responsibility |
| --- | --- |
| `src/pages/` | Contains the comparison landing page used to access both dashboard implementations. |
| `src/tailwind/` | Contains the complete Tailwind CSS dashboard, its components, and Tailwind-specific styling. |
| `src/mui/` | Contains the Material UI dashboard, reusable MUI components, and custom MUI theme. |
| `src/data/` | Stores shared mock dashboard and navigation data used by both implementations. |
| `src/types/` | Defines shared TypeScript types for projects, metrics, navigation, charts, and dashboard data. |
| `src/styles/` | Contains global application styling and shared typography setup. |
| `src/App.tsx` | Defines the application routes for the landing page, Tailwind dashboard, and MUI dashboard. |
| `src/main.tsx` | Initializes the React application, router, and global styles. |

## Week 10 Concepts Used

- **Responsive CSS** — layouts adapt across mobile, tablet, and desktop breakpoints.
- **Tailwind CSS Utilities** — utility classes handle layout, spacing, typography, colors, states, and responsiveness.
- **Tailwind Theme Tokens** — custom colors, typography, and dark-mode styling are configured through Tailwind.
- **Material UI Components** — MUI components are composed to create a consistent dashboard interface.
- **MUI ThemeProvider** — a custom theme controls colors, typography, breakpoints, shape, and component defaults.
- **MUI `sx` Prop** — component-level responsive and theme-aware styling is handled with `sx`.
- **Theme Customization** — both dashboards support custom light and dark themes using the same visual direction.
- **Responsive Breakpoints** — MUI breakpoints were aligned with Tailwind breakpoints for a fair comparison.
- **CSS Isolation** — Tailwind normalization is scoped so it does not interfere with Material UI.
- **Reusable UI Structure** — dashboard sections are separated into focused React components for maintainability.

## Live Demo

[Live Demo](https://arbaz-17.github.io/Tailwind-MUI-Dashboard-Assignment/)
