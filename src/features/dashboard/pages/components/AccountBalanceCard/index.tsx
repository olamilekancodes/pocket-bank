import { useMemo } from "react";
import { getTransactionHistory } from "../../../../../mock/transactionHistory";
import {
  IconButton,
  type ButtonVariant,
} from "../../../../../shared/components/ui/Buttons/IconButton";
import { Typography } from "../../../../../shared/components/ui/Typography";
import { DashboardStrings } from "../../../../../shared/constants/strings";
import styles from "./AccountBalanceCard.module.css";
import { formatCurrency } from "../../../../../shared/components/utils/currencyFormat";

export const AccountBalanceCard = () => {
  const data = getTransactionHistory();

  const totalBalance = useMemo(() => {
    if (!data || data.length === 0) return 0;

    return data.reduce((acc, curr) => {
      return curr.status === "successful" ? acc + curr.amount : acc;
    }, 0);
  }, [data]);

  const currency = data[0]?.currency;

  console.log("currency: ", totalBalance);

  const handleTransfer = () => {};
  return (
    <div className={styles.accountBalanceBackground}>
      <div className={styles.accountBalanceContainer}>
        <div className={styles.balanceContainer}>
          <div className={styles.accountNo}>
            <Typography variant="p">
              {DashboardStrings.accountBalance.accountTitle}{" "}
              {DashboardStrings.accountBalance.accountNo}
            </Typography>
          </div>
          <Typography variant="h3">
            {formatCurrency(totalBalance, currency)}
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "var(--color-secondary-primary)" }}
          >
            {DashboardStrings.accountBalance.balanceTitle}
          </Typography>
        </div>

        <div className={styles.buttonContainer}>
          {DashboardStrings.buttons.map((btn) => (
            <IconButton
              key={btn.title}
              title={btn.title}
              icon={<btn.icon />}
              variant={btn.variant as ButtonVariant}
              action={btn.title === "Transfer" ? handleTransfer : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
