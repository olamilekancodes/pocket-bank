import { useResponsive } from "../../hooks/useResponsive";
import { isBreakpointAtLeast } from "../../utils/responsive";
import styles from "./Layout.module.css";
import { SideBar } from "./sidebar";
import { TopBar } from "./topbar";

type Props = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  const breakpoint = useResponsive();
  const isMediumScreen = isBreakpointAtLeast(breakpoint, "lg");

  return (
    <div className={styles.layout}>
      {isMediumScreen ? <SideBar /> : null}

      <div className={styles.main}>
        <TopBar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
