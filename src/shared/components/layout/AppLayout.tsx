import { useState } from "react";

import { useResponsive } from "../../hooks/useResponsive";
import styles from "./Layout.module.css";
import { SideBar } from "./sidebar";
import { TopBar } from "./topbar";
import { MobileNav } from "./mobilenav";

type Props = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const { isMdDown } = useResponsive();

  return (
    <div className={styles.layout}>
      {!isMdDown && <SideBar />}

      {/* {isMdDown && (
        <MobileNav isOpen={openMenu} onClose={() => setOpenMenu(false)} />
      )} */}

      <MobileNav
        isOpen={openMenu && isMdDown}
        onClose={() => setOpenMenu(false)}
      />

      <div className={styles.main}>
        <TopBar action={() => setOpenMenu(true)} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
