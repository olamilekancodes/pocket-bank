import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

import { TopBarStrings } from "../../../constants/strings";
import { Avatar } from "../../ui/Avatar";
import { Typography } from "../../ui/Typography";
import styles from "./TopBar.module.css";
import { useResponsive } from "../../../hooks/useResponsive";
import logo from "../../../../assets/logo/logo2.png";
import type { TopBarProps } from "../../../type";

export const TopBar = ({ action }: TopBarProps) => {
  const { isMdDown } = useResponsive();
  return (
    <header className={styles.topbar}>
      {isMdDown && (
        <div className={styles.iconContainer}>
          <IoMdMenu className={styles.menuIcon} onClick={action} />
          <img src={logo} alt={TopBarStrings.logoAlt} className={styles.logo} />
        </div>
      )}

      <IoSearch className={styles.icon} />

      <div className={styles.container}>
        <IoNotificationsOutline className={styles.icon} />
        <Avatar name={TopBarStrings.user} size="md" />
        <Typography variant="h6">{TopBarStrings.user}</Typography>
      </div>
    </header>
  );
};
