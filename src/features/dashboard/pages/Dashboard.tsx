import { AccountBalanceCard } from "./components/AccountBalanceCard";
import { DashboardTable } from "./components/DashboardTable";

export const DashboardPage = () => {
  return (
    <div>
      <AccountBalanceCard />
      <DashboardTable />
    </div>
  );
};
