import { getTransactionHistory } from "../../../../../mock/transactionHistory";
import { Typography } from "../../../../../shared/components/ui/Typography";
import { DashboardStrings } from "../../../../../shared/constants/strings";
import usePagination from "../../../../../shared/hooks/usePagination";
import { TransactionTable } from "../../../../shared/TransactionTable";
import styles from "./DashboardTable.module.css";

export const DashboardTable = () => {
  const data = getTransactionHistory();

  const { current_data } = usePagination({
    data: data,
    order_control: "date",
  });

  return (
    <div className={styles.tableContainer}>
      <Typography variant="h5">{DashboardStrings.table.title}</Typography>

      <TransactionTable transactions={current_data} />
    </div>
  );
};
