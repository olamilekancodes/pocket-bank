import type { TypographyProps } from "../../../type";
import styles from "./Typography.module.css";

export const Typography = ({
  variant,
  children,
  ...props
}: TypographyProps) => {
  const Component = variant;

  return (
    <Component className={styles[variant]} {...props}>
      {children}
    </Component>
  );
};
