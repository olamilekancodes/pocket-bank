import type { Transaction } from "../../mock/type";

export interface AccountBalanceCardProps {
  balance: number;
  currency: string;
  onTransfer: () => void;
}

export interface DashboardTableProps {
  transactions: Transaction[];
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
}

export interface TransferContainerProps {
  closeForm: () => void;
}
