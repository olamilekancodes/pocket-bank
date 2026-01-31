import { getTransactionHistory } from "../../../../../mock/transactionHistory";
import { CustomPagination } from "../../../../../shared/components/ui/Pagination";
import { Typography } from "../../../../../shared/components/ui/Typography";
import { TransactionStrings } from "../../../../../shared/constants/strings";
import usePagination from "../../../../../shared/hooks/usePagination";
import styles from "./TransactionCard.module.css";
import { TransactionTable } from "../../../../shared/TransactionTable";

export const TransactionCard = () => {
  const data = getTransactionHistory();

  const {
    current_data,
    total_pages,
    current_page,
    setCurrentPage,
    setItemPerPage,
    items_per_page,
  } = usePagination({
    data: data,
    order_control: "date",
  });

  return (
    <div className={styles.transactionContainer}>
      <Typography variant="h4">{TransactionStrings.pageTitle}</Typography>

      <TransactionTable transactions={current_data} />

      <CustomPagination
        current_page={current_page}
        total_pages={total_pages}
        items_per_page={items_per_page}
        setCurrentPage={setCurrentPage}
        setItemPerPage={setItemPerPage}
      />
    </div>
  );
};
