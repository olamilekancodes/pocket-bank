import { stripCommas } from "../../../shared/components/utils/formatter";
import { TransferForm } from "../components/TransferFormCard";
import type { TransferContainerProps, TransferFormValues } from "../type";

export const TransferContainer = ({
  closeForm,
  currentBalance,
  transactions,
  setTransactions,
}: TransferContainerProps) => {
  const handleFormSubmit = (values: TransferFormValues) => {
    const maxId =
      transactions.length > 0
        ? Math.max(...transactions.map((t) => Number(t.id)))
        : 0;
    const newId = (maxId + 1).toString();

    const newEntry = {
      id: newId,
      date: new Date().toISOString(),
      description: `Transfer to ${values.bank_name} - ${values.account_number}`,
      amount: -Math.abs(Number(stripCommas(values.amount.toString()))),
      currency: "NGN",
      status: "successful",
    };

    setTransactions((prev) => [newEntry, ...prev]);
  };
  return (
    <TransferForm
      availableBalance={currentBalance}
      closeForm={closeForm}
      handleFormSubmit={handleFormSubmit}
    />
  );
};
