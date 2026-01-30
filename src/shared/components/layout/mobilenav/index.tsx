import { SideBar } from "../sidebar";
import styles from "./MobileNav.module.css";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

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
