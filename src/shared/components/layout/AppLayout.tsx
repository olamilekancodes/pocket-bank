import styles from "./Layout.module.css";
import { SideBar } from "./sidebar";
import { TopBar } from "./topbar";

type Props = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <SideBar />

      <div className={styles.main}>
        <TopBar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
