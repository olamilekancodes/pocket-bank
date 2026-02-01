import { useMemo, useState } from "react";
import type { Transaction } from "../../mock/type";
import { getTransactionHistory } from "../../mock/transactionHistory";
import usePagination from "../../shared/hooks/usePagination";
import { TransactionCard } from "./TransactionCard";

type TransactionFilter = "all" | "credit" | "debit";

export const TransactionContainer = () => {
  const data: Transaction[] = getTransactionHistory();

  const [searchQuery, setSearchQuery] = useState<string>("");
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

  const handleFilterChange = (value: string) => {
    setFilter(value as TransactionFilter);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <TransactionCard
      transactions={current_data}
      searchQuery={searchQuery}
      filter={filter}
      currentPage={current_page}
      totalPages={total_pages}
      itemsPerPage={items_per_page}
      hasData={filteredData.length > 0}
      onSearchChange={handleSearchChange}
      onFilterChange={handleFilterChange}
      onPageChange={setCurrentPage}
      onItemsPerPageChange={setItemPerPage}
    />
  );
};
