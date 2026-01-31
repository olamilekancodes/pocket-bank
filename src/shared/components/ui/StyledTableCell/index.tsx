import React from "react";
import styles from "./StyledTableCell.module.css";

interface StyledTdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

const StyledTd: React.FC<StyledTdProps> = ({ children, ...props }) => {
  return (
    <td className={styles.tableCell} {...props}>
      {children}
    </td>
  );
};

export default StyledTd;
