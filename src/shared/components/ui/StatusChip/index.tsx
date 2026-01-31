import type { StatusChipProps } from "../../../type";
import styles from "./StatusChip.module.css";

export const StatusChip = ({ status }: StatusChipProps) => {
  return (
    <span className={`${styles.statusChip} ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};
