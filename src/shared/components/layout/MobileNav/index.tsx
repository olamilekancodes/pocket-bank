import type { MobileNavProps } from "../../../type";
import { SideBar } from "../SideBar";
import styles from "./MobileNav.module.css";

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  return (
    <div className={styles.mobileNavContainer}>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
        onClick={onClose}
      />

      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
        <SideBar onLinkClose={onClose} />
      </div>
    </div>
  );
};
