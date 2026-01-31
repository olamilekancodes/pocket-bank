// import { useState } from "react";

// import { useResponsive } from "../../hooks/useResponsive";
// import styles from "./AppLayout.module.css";
// import { SideBar } from "./SideBar";
// import { MobileNav } from "./MobileNav";
// import { TopBar } from "./TopBar";

// type Props = {
//   children: React.ReactNode;
// };

// export const AppLayout = ({ children }: Props) => {
//   const [openMenu, setOpenMenu] = useState(false);

//   const { isMdDown } = useResponsive();

//   return (
//     <div className={styles.layout}>
//       {!isMdDown && <SideBar onLinkClose={() => setOpenMenu(false)} />}

//       <MobileNav
//         isOpen={openMenu && isMdDown}
//         onClose={() => setOpenMenu(false)}
//       />

//       <div className={styles.main}>
//         <TopBar action={() => setOpenMenu(true)} />
//         <div className={styles.content}>{children}</div>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { Outlet } from "react-router-dom"; // Add this import

import { useResponsive } from "../../hooks/useResponsive";
import styles from "./AppLayout.module.css";
import { SideBar } from "./SideBar";
import { MobileNav } from "./MobileNav";
import { TopBar } from "./TopBar";

// We remove the children prop because React Router handles injection via <Outlet />
export const AppLayout = () => {
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
        <div className={styles.content}>
          {/* React Router will render the matched child route here. 
             e.g., if the path is /dashboard, DashboardPage renders here. 
          */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};
