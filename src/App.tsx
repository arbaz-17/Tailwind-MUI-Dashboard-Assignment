import { Route, Routes } from "react-router";

import { ComparisonLandingPage } from "./pages/ComparisonLandingPage";
import { TailwindDashboard } from "./tailwind/TailwindDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ComparisonLandingPage />} />

      <Route
        path="/tailwind"
        element={<TailwindDashboard />}
      />

      <Route
        path="/mui"
        element={<h1>Material UI Dashboard</h1>}
      />
    </Routes>
  );
}

export default App;