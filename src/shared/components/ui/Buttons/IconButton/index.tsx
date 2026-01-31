import styles from "./IconButton.module.css";
import type { ButtonProps } from "../../../../type";

export const IconButton = ({
  icon,
  title,
  variant = "primary",
  action,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className || ""}`}
      {...props}
      onClick={action}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.title}>{title}</span>
    </button>
  );
};
