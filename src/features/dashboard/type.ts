import type { Transaction } from "../../mock/type";

export interface AccountBalanceCardProps {
  balance: number;
  currency: string;
  onTransfer: () => void;
}

export interface DashboardTableProps {
  transactions: Transaction[];
}

export interface DashboardTableContainerProps {
  transactions: Transaction[];
}

export interface AccountBalanceContainerProps {
  transactions: Transaction[];
  totalBalance: number;
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

export interface TransferFormValues {
  account_number: number | string;
  amount: number | string;
  bank_name: string;
}

export interface TransferFormProps {
  onSubmit: (values: TransferFormValues) => void;
  availableBalance: number;
  closeForm: () => void;
  handleFormSubmit: (values: TransferFormValues) => void;
}

export interface TransferContainerProps {
  closeForm: () => void;
  currentBalance: number;
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
  transactions: Transaction[];
}
