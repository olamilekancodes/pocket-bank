import { NavLink } from "react-router-dom";
import { NavItems } from "../../../constants/strings";
import styles from "./Sidebar.module.css";

export const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>MyBank</h2>

      <nav className={styles.nav}>
        {NavItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <span className={styles.icon}>
              <Icon />
            </span>
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
