import { useMemo, useState } from "react";
import { AccountBalanceCard } from "../components/AccountBalanceCard";
import { getTransactionHistory } from "../../../mock/transactionHistory";
import { Modal } from "../../../shared/components/ui/Modal";
import { TransferContainer } from "./TransferFormContainer";

export const AccountBalanceContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = getTransactionHistory();

  const totalBalance = useMemo(() => {
    if (!data || data.length === 0) return 0;
    return data.reduce(
      (acc, curr) => (curr.status === "successful" ? acc + curr.amount : acc),
      0,
    );
  }, [data]);

  const currency = data[0]?.currency || "NGN";

  return (
    <>
      <AccountBalanceCard
        balance={totalBalance}
        currency={currency}
        onTransfer={() => setIsModalOpen(true)}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Send Money"
      >
        <TransferContainer closeForm={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};
