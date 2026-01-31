import {
  LuCircleArrowOutDownLeft,
  LuCircleArrowOutUpRight,
} from "react-icons/lu";

import styles from "./TransactionTable.module.css";
import SimpleTableWrapper from "../../../shared/components/ui/TableWrapper";
import StyledTd from "../../../shared/components/ui/StyledTableCell";
import { Typography } from "../../../shared/components/ui/Typography";
import { formatCurrency } from "../../../shared/components/utils/currencyFormat";
import { StatusChip } from "../../../shared/components/ui/StatusChip";
import { formatDate } from "../../../shared/components/utils/dateFormat";
import { TableStrings } from "../../../shared/constants/strings";
import type { Transaction } from "../../../mock/type";
import type { TransactionTableProps } from "../../../shared/type";

export const TransactionTable = <T extends Transaction>({
  transactions,
}: TransactionTableProps<T>) => {
  return (
    <SimpleTableWrapper headCells={TableStrings.headCells}>
      {transactions.map((item) => {
        const { id, date, description, amount, currency, status } = item;
        const isNegative = amount < 0;
        const AmountIcon = isNegative
          ? LuCircleArrowOutUpRight
          : LuCircleArrowOutDownLeft;
        const amountClass = isNegative ? styles.expense : styles.income;

        return (
          <tr key={id}>
            <StyledTd>
              <div className={styles.descriptionContainer}>
                <span className={`${styles.transactionIcon} ${amountClass}`}>
                  <AmountIcon size={20} />
                </span>
                <div className={styles.description}>
                  <Typography variant="p">{description}</Typography>
                  <Typography variant="p">{formatDate(date)}</Typography>
                </div>
              </div>
            </StyledTd>
            <StyledTd className={amountClass}>
              {formatCurrency(amount, currency)}
            </StyledTd>
            <StyledTd>
              <StatusChip status={status} />
            </StyledTd>
          </tr>
        );
      })}
    </SimpleTableWrapper>
  );
};
