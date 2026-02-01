import { Link } from "react-router-dom";

import { Typography } from "../../../../shared/components/ui/Typography";
import { DashboardStrings } from "../../../../shared/constants/strings";
import { TransactionTable } from "../../../shared/TransactionTable";
import styles from "./DashboardTable.module.css";
import type { DashboardTableProps } from "../../type";

export const DashboardTable = ({ transactions }: DashboardTableProps) => {
  return (
    <div className={styles.tableContainer}>
      <Typography variant="h5">{DashboardStrings.table.title}</Typography>

      <TransactionTable transactions={transactions} />

      <div className={styles.linkContainer}>
        <Link to="/transactions" className={styles.seeMoreLink}>
          See more
        </Link>
      </div>
    </div>
  );
};
