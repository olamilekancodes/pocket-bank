import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

import { TopBarStrings } from "../../../constants/strings";
import { Avatar } from "../../ui/Avatar";
import { Typography } from "../../ui/Typography";
import styles from "./Topbar.module.css";
import { useResponsive } from "../../../hooks/useResponsive";

interface TopBarProps {
  action: () => void;
}

export const TopBar = ({ action }: TopBarProps) => {
  const { isMdDown } = useResponsive();
  return (
    <header className={styles.topbar}>
      {isMdDown && <IoMdMenu className={styles.menuIcon} onClick={action} />}

      <IoSearch className={styles.icon} />

      <div className={styles.container}>
        <IoNotificationsOutline className={styles.icon} />
        <Avatar name={TopBarStrings.user} size="md" />
        <Typography variant="p">{TopBarStrings.user}</Typography>
      </div>
    </header>
  );
};
