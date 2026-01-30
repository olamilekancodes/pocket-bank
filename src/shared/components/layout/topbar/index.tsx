import styles from "./Topbar.module.css";

export const TopBar = () => {
  return (
    <header className={styles.topbar}>
      <h3>Welcome back 👋</h3>
      <span>CY</span>
    </header>
  );
};
