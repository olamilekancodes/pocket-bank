import { useMemo } from "react";
import { AccountBalanceCard } from "../components/AccountBalanceCard";
import { getTransactionHistory } from "../../../mock/transactionHistory";

export const AccountBalanceContainer = () => {
  const data = getTransactionHistory();

  const totalBalance = useMemo(() => {
    if (!data || data.length === 0) return 0;
    return data.reduce(
      (acc, curr) => (curr.status === "successful" ? acc + curr.amount : acc),
      0,
    );
  }, [data]);

  const currency = data[0]?.currency || "NGN";

  const handleTransfer = () => {
    console.log("Transfer logic triggered");
  };

  return (
    <AccountBalanceCard
      balance={totalBalance}
      currency={currency}
      onTransfer={handleTransfer}
    />
  );
};
