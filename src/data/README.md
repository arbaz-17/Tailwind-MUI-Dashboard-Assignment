# Data

## Overview

This folder contains the shared mock data used by both the Tailwind CSS and Material UI dashboards. Keeping the data separate from the UI ensures both implementations work with the same information.

## Files

- `dashboardData.ts` — Contains project records and derived data for KPI cards, project status, charts, and recent projects.
- `navigationData.ts` — Contains the shared main and secondary sidebar navigation items.


## How It Fits Into the Project

Both dashboard implementations import data from this folder, helping keep the Tailwind and Material UI comparison consistent and focused on the styling approach rather than differences in data.
