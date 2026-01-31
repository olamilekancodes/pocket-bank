import type { Transaction } from "../../mock/type";

export interface TransactionCardProps {
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
