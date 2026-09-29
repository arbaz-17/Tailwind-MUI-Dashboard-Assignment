import { Route, Routes } from "react-router";

import { MuiDashboard } from "./mui/MuiDashboard";
import { ComparisonLandingPage } from "./pages/ComparisonLandingPage";
import { TailwindDashboard } from "./tailwind/TailwindDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ComparisonLandingPage />} />

      <Route path="/tailwind" element={<TailwindDashboard />} />

      <Route path="/mui" element={<MuiDashboard />} />
    </Routes>
  );
}

export default App;
