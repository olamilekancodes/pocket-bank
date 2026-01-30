import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AppLayout } from "../shared/components/layout/AppLayout";
import { DashboardPage } from "../features/dashboard/pages/Dashboard";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* <Route path="/transactions" element={<DashboardPage />} />
          <Route path="/accounts" element={<DashboardPage />} />
          <Route path="/cards" element={<DashboardPage />} /> */}

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
