import { getTransactionHistory } from "../../../../../mock/transactionHistory";
import { CustomPagination } from "../../../../../shared/components/ui/Pagination";
import StyledTd from "../../../../../shared/components/ui/StyledTableCell";
import SimpleTableWrapper from "../../../../../shared/components/ui/TableWrapper";
import { Typography } from "../../../../../shared/components/ui/Typography";
import {
  getComparator,
  stableSort,
} from "../../../../../shared/components/utils/sort";
import usePagination from "../../../../../shared/hooks/usePagination";
import styles from "./TransactionCard.module.css";

interface dataType {
  id: string;
  date: string;
  description: string;
  amount: number;
  currency: string;
  status: string;
}

export const TransactionCard = () => {
  const data = getTransactionHistory();

  const headCells = [
    { id: "description", label: "Description" },
    { id: "amount", label: "Amount" },
    { id: "status", label: "Status" },
  ];

  const {
    orderBy,
    current_data,
    total_pages,
    current_page,
    setCurrentPage,
    handleRequestSort,
    setItemPerPage,
    items_per_page,
  } = usePagination({
    data: data,
    order_control: "id",
  });

  return (
    <div className={styles.transactionContainer}>
      <Typography variant="h4">Trasactions</Typography>

      <SimpleTableWrapper
        handleRequestSort={handleRequestSort}
        headCells={headCells}
        orderBy={orderBy}
      >
        {current_data.map((data: dataType) => {
          const { id, date, description, amount, currency, status } = data;
          return (
            <tr key={id}>
              <StyledTd>{description}</StyledTd>
              <StyledTd>{amount}</StyledTd>
              <StyledTd>{status}</StyledTd>
            </tr>
          );
        })}
      </SimpleTableWrapper>
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
