import { AccountBalanceCard } from "./components/AccountBalanceCard";
import { DashboardTable } from "./components/DashboardTable";
import styles from "./Dashboard.module.css";

export const DashboardPage = () => {
  return (
    <div className={styles.dashboardLayout}>
      <div className={styles.stickyHeader}>
        <AccountBalanceCard />
      </div>
      <div className={styles.scrollContent}>
        <DashboardTable />
      </div>
    </div>
  );
};
