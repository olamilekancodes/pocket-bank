import { AccountBalanceContainer } from "../containers/AccountBalanceContainer";
import { DashboardTableContainer } from "../containers/DashboardTableContainer";
import styles from "./Dashboard.module.css";

export const DashboardPage = () => {
  return (
    <div className={styles.dashboardLayout}>
      <div className={styles.stickyHeader}>
        <AccountBalanceContainer />
      </div>
      <div className={styles.scrollContent}>
        <DashboardTableContainer />
      </div>
    </div>
  );
};
