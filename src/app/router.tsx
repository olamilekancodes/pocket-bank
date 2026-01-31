import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AppLayout } from "../shared/components/layout/AppLayout";
import { DashboardPage } from "../features/dashboard/pages/Dashboard";
import { Transaction } from "../features/transaction/pages/Transaction";
import ComingSoon from "../shared/components/ui/ComingSoon";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/card" element={<ComingSoon />} />
          <Route path="/insights" element={<ComingSoon />} />
          <Route path="/recipient" element={<ComingSoon />} />

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
