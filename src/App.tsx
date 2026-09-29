import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Dashboard Comparison</h1>} />

      <Route
        path="/tailwind"
        element={
          <h1 className="p-6 text-2xl font-semibold text-brand">
            Tailwind Dashboard
          </h1>
        }
      />

      <Route path="/mui" element={<h1>Material UI Dashboard</h1>} />
    </Routes>
  );
}

export default App;