import { getTransactionHistory } from "../../../../../mock/transactionHistory";
import { CustomPagination } from "../../../../../shared/components/ui/Pagination";
import StyledTd from "../../../../../shared/components/ui/StyledTableCell";
import SimpleTableWrapper from "../../../../../shared/components/ui/TableWrapper";
import { Typography } from "../../../../../shared/components/ui/Typography";
import { formatDate } from "../../../../../shared/components/utils/dateFormat";
import { TransactionStrings } from "../../../../../shared/constants/strings";
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
      <Typography variant="h4">{TransactionStrings.pageTitle}</Typography>

      <SimpleTableWrapper
        handleRequestSort={handleRequestSort}
        headCells={headCells}
        orderBy={orderBy}
      >
        {current_data.map((data: dataType) => {
          const { id, date, description, amount, currency, status } = data;
          return (
            <tr key={id}>
              <StyledTd>
                <div className={styles.descriptionContainer}>
                  <Typography variant="p">{description}</Typography>
                  <Typography variant="p">{formatDate(date)}</Typography>
                </div>
              </StyledTd>
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
