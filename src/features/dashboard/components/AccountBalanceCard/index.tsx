import { IconButton } from "../../../../shared/components/ui/Buttons/IconButton";
import { Typography } from "../../../../shared/components/ui/Typography";
import { formatCurrency } from "../../../../shared/components/utils/currencyFormat";
import { DashboardStrings } from "../../../../shared/constants/strings";
import type { ButtonVariant } from "../../../../shared/type";
import type { AccountBalanceCardProps } from "../../type";
import styles from "./AccountBalanceCard.module.css";

export const AccountBalanceCard = ({
  balance,
  currency,
  onTransfer,
}: AccountBalanceCardProps) => {
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
            {formatCurrency(balance, currency)}
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
              action={btn.title === "Transfer" ? onTransfer : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
