import React from "react";
import styles from "./Typography.module.css";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: Variant;
  children: React.ReactNode;
}

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
