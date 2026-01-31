import { CustomPagination } from "../../../../shared/components/ui/Pagination";
import { Typography } from "../../../../shared/components/ui/Typography";
import { TransactionStrings } from "../../../../shared/constants/strings";
import { TransactionTable } from "../../../shared/TransactionTable";
import { EmptyDataState } from "../../../../shared/components/ui/EmptyDataState";
import styles from "./TransactionCard.module.css";
import type { Transaction } from "../../../../mock/type";

interface TransactionCardProps {
  transactions: Transaction[];
  searchQuery: string;
  filter: string;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  hasData: boolean;
  onSearchChange: (value: string) => void;
  onFilterChange: (value: string) => void;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
}

export const TransactionCard = ({
  transactions,
  searchQuery,
  filter,
  currentPage,
  totalPages,
  itemsPerPage,
  hasData,
  onSearchChange,
  onFilterChange,
  onPageChange,
  onItemsPerPageChange,
}: TransactionCardProps) => {
  return (
    <div className={styles.transactionContainer}>
      <Typography variant="h4">{TransactionStrings.pageTitle}</Typography>

      <div className={styles.filterContainer}>
        <select
          id="transaction-type-filter"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          className={styles.filterDropdown}
          title="Filter transactions by type"
          aria-label="Filter transactions by type"
        >
          <option value="all">{TransactionStrings.filter.all}</option>
          <option value="credit">{TransactionStrings.filter.credit}</option>
          <option value="debit">{TransactionStrings.filter.debit}</option>
        </select>

        <input
          type="text"
          placeholder={TransactionStrings.searchPlaceHolder}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {hasData ? (
        <>
          <TransactionTable transactions={transactions} />
          <CustomPagination
            current_page={currentPage}
            total_pages={totalPages}
            items_per_page={itemsPerPage}
            setCurrentPage={onPageChange}
            setItemPerPage={onItemsPerPageChange}
          />
        </>
      ) : (
        <EmptyDataState />
      )}
    </div>
  );
};
