import React from "react";
import styles from "./StyledTableCell.module.css";
import type { StyledTdProps } from "../../../type";

const StyledTd: React.FC<StyledTdProps> = ({ children, ...props }) => {
  return (
    <td className={styles.tableCell} {...props}>
      {children}
    </td>
  );
};

export default StyledTd;
