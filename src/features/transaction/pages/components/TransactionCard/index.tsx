import { getTransactionHistory } from "../../../../../mock/transactionHistory";
import { CustomPagination } from "../../../../../shared/components/ui/Pagination";
import { Typography } from "../../../../../shared/components/ui/Typography";
import { TransactionStrings } from "../../../../../shared/constants/strings";
import usePagination from "../../../../../shared/hooks/usePagination";
import styles from "./TransactionCard.module.css";
import { TransactionTable } from "../../../../shared/TransactionTable";
import { useMemo, useState } from "react";
import { EmptyDataState } from "../../../../../shared/components/ui/EmptyDataState/indext";

type TransactionFilter = "all" | "credit" | "debit";

export const TransactionCard = () => {
  const data = getTransactionHistory();

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<TransactionFilter>("all");
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch = item.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesType =
        filter === "all" ||
        (filter === "credit" && item.amount > 0) ||
        (filter === "debit" && item.amount < 0);

      return matchesSearch && matchesType;
    });
  }, [data, searchQuery, filter]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === "all" || value === "credit" || value === "debit") {
      setFilter(value);
      setCurrentPage(1);
    }
  };

  const {
    current_data,
    total_pages,
    current_page,
    setCurrentPage,
    setItemPerPage,
    items_per_page,
  } = usePagination({
    data: filteredData,
    order_control: "date",
  });

  return (
    <div className={styles.transactionContainer}>
      <Typography variant="h4">{TransactionStrings.pageTitle}</Typography>
      <div className={styles.filterContainer}>
        <select
          id="transaction-type-filter"
          value={filter}
          onChange={handleFilterChange}
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
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {filteredData && filteredData.length > 0 ? (
        <>
          <TransactionTable transactions={current_data} />
          <CustomPagination
            current_page={current_page}
            total_pages={total_pages}
            items_per_page={items_per_page}
            setCurrentPage={setCurrentPage}
            setItemPerPage={setItemPerPage}
          />
        </>
      ) : (
        <EmptyDataState />
      )}
    </div>
  );
};
