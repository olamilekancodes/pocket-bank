import styles from "./StatusChip.module.css";

interface StatusChipProps {
  status: string;
}

export const StatusChip = ({ status }: StatusChipProps) => {
  return (
    <span className={`${styles.statusChip} ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};
