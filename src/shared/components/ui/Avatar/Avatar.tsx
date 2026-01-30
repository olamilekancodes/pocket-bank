import React from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  src?: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

export const Avatar: React.FC<AvatarProps> = ({ src, name, size = "md" }) => {
  const getInitial = (fullName: string) => {
    if (!fullName) return "?";
    return fullName.trim().charAt(0).toUpperCase();
  };

  return (
    <div className={`${styles.avatar} ${styles[size]}`}>
      {src ? (
        <img src={src} alt={name} className={styles.image} />
      ) : (
        <span className={styles.initial}>{getInitial(name)}</span>
      )}
    </div>
  );
};
