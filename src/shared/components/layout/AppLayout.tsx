import { useState } from "react";

import { useResponsive } from "../../hooks/useResponsive";
import styles from "./AppLayout.module.css";
import { SideBar } from "./SideBar";
import { MobileNav } from "./MobileNav";
import { TopBar } from "./TopBar";

type Props = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const { isMdDown } = useResponsive();

  return (
    <div className={styles.layout}>
      {!isMdDown && <SideBar onLinkClose={() => setOpenMenu(false)} />}

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
