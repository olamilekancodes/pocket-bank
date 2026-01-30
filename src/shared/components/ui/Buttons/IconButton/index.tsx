import type { ButtonHTMLAttributes } from "react";
import styles from "./IconButton.module.css";

export type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  title: string;
  variant?: ButtonVariant;
  action?: () => void;
}

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
