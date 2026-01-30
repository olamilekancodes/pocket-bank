import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AppLayout } from "../shared/components/layout/AppLayout";
import { DashboardPage } from "../features/dashboard/pages/Dashboard";

// Placeholder components for future features
// const AccountsPage = () => <div>Accounts Page (Coming Soon)</div>;
// const TransactionsPage = () => <div>Transactions Page (Coming Soon)</div>;

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Dashboard route */}
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Catch all: redirect to dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
