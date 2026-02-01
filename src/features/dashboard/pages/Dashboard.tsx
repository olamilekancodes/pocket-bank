import { useMemo, useState } from "react";
import { AccountBalanceContainer } from "../containers/AccountBalanceContainer";
import { DashboardTableContainer } from "../containers/DashboardTableContainer";
import styles from "./Dashboard.module.css";
import { getTransactionHistory } from "../../../mock/transactionHistory";

export const DashboardPage = () => {
  const data = getTransactionHistory();
  const [transactions, setTransactions] = useState(data);

  const totalBalance = useMemo(() => {
    if (!transactions || transactions.length === 0) return 0;
    return transactions.reduce(
      (acc, curr) => (curr.status === "successful" ? acc + curr.amount : acc),
      0,
    );
  }, [transactions]);

  return (
    <div className={styles.dashboardLayout}>
      <div className={styles.stickyHeader}>
        <AccountBalanceContainer
          transactions={transactions}
          setTransactions={setTransactions}
          totalBalance={totalBalance}
        />
      </div>
      <div className={styles.scrollContent}>
        <DashboardTableContainer transactions={transactions} />
      </div>
    </div>
  );
};
