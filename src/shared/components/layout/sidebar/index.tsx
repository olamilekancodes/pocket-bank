import { Link, NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import { NavItems, NavStrings } from "../../../constants/strings";
import styles from "./SideBar.module.css";
import logo from "../../../../assets/logo/logo3.png";

interface SideBarProps {
  onLinkClose: () => void;
}

export const SideBar = ({ onLinkClose }: SideBarProps) => {
  return (
    <aside className={styles.sidebar}>
      <Link to="/dashboard" className={styles.logoContainer}>
        <img src={logo} alt={NavStrings.logoAlt} className={styles.logoImage} />
      </Link>

      <div className={styles.navItemsContainer}>
        <nav className={styles.nav}>
          {NavItems.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
              onClick={onLinkClose}
            >
              <Icon className={styles.icon} />
              {label}
            </NavLink>
          ))}
        </nav>
        <button className={`${styles.navItem} ${styles.navBtn}`}>
          <FiLogOut className={styles.icon} />
          {NavStrings.buttonTitle}
        </button>
      </div>
    </aside>
  );
};
