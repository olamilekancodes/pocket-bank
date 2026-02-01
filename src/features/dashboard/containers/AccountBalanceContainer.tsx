import { useState } from "react";
import { AccountBalanceCard } from "../components/AccountBalanceCard";
import { Modal } from "../../../shared/components/ui/Modal";
import { TransferContainer } from "./TransferFormContainer";
import type { AccountBalanceContainerProps } from "../type";

export const AccountBalanceContainer = ({
  transactions,
  setTransactions,
  totalBalance,
}: AccountBalanceContainerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currency = transactions[0]?.currency || "NGN";

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
        <TransferContainer
          currentBalance={totalBalance}
          closeForm={() => setIsModalOpen(false)}
          setTransactions={setTransactions}
          transactions={transactions}
        />
      </Modal>
    </>
  );
};
