import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

import { TopBarStrings } from "../../../constants/strings";
import { Avatar } from "../../ui/Avatar";
import { Typography } from "../../ui/Typography";
import styles from "./Topbar.module.css";

export const TopBar = () => {
  return (
    <header className={styles.topbar}>
      <IoSearch className={styles.icon} />

      <div className={styles.container}>
        <IoNotificationsOutline className={styles.icon} />
        <Avatar name={TopBarStrings.user} size="md" />
        <Typography variant="p">{TopBarStrings.user}</Typography>
      </div>
    </header>
  );
};
