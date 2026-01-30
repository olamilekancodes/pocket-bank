import {
  IconButton,
  type ButtonVariant,
} from "../../../../../shared/components/ui/Buttons/IconButton";
import { Typography } from "../../../../../shared/components/ui/Typography";
import { DashboardStrings } from "../../../../../shared/constants/strings";
import styles from "./AccountBalanceCard.module.css";

export const AccountBalanceCard = () => {
  const handleTransfer = () => {
    console.log("Transferring funds...");
  };
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
            {DashboardStrings.accountBalance.currency}{" "}
            {DashboardStrings.accountBalance.currentBalance}
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
