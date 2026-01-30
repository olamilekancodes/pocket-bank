import { IoNotificationsOutline } from "react-icons/io5";

import { TopBarStrings } from "../../../constants/strings";
import { Avatar } from "../../ui/Avatar";
import { Typography } from "../../ui/Typography";
import styles from "./Topbar.module.css";

export const TopBar = () => {
  return (
    <header className={styles.topbar}>
      <div className="">
        <Typography variant="h6">{TopBarStrings.user}</Typography>
      </div>

      <div className={styles.container}>
        <IoNotificationsOutline size={20} />
        <Avatar name={TopBarStrings.user} size="sm" />
        <Typography variant="h6">{TopBarStrings.user}</Typography>
      </div>
    </header>
  );
};
