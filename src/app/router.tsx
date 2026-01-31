import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "../shared/components/layout/AppLayout";
import { DashboardPage } from "../features/dashboard/pages/Dashboard";
import { Transaction } from "../features/transaction/pages/Transaction";
import ComingSoon from "../shared/components/ui/ComingSoon";
import { ProtectedRoute } from "../auth/components/ProtectedRoute";
import { LoginPage } from "../auth/pages/Login";
import { PublicRoute } from "../auth/components/PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/card" element={<ComingSoon />} />
            <Route path="/insights" element={<ComingSoon />} />
            <Route path="/recipient" element={<ComingSoon />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
