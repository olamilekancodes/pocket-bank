import { useState } from "react";
import { TransferForm } from "../components/TransferForm";
import { getTransactionHistory } from "../../../mock/transactionHistory";
import type { Transaction } from "../../../mock/type";
import type { TransferContainerProps } from "../type";

export const TransferContainer = ({ closeForm }: TransferContainerProps) => {
  const [transactions] = useState<Transaction[]>(getTransactionHistory());

  const currentBalance = transactions.reduce(
    (acc, curr) => (curr.status === "successful" ? acc + curr.amount : acc),
    0,
  );

  return (
    <TransferForm availableBalance={currentBalance} closeForm={closeForm} />
  );
};
