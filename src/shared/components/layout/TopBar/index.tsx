import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";

import { TopBarStrings } from "../../../constants/strings";
import { Avatar } from "../../ui/Avatar";
import { Typography } from "../../ui/Typography";
import styles from "./TopBar.module.css";
import { useResponsive } from "../../../hooks/useResponsive";
import logo from "../../../../assets/logo/logo2.png";
import type { TopBarProps } from "../../../type";
import { useAuth } from "../../../../auth/hooks/useAuth";
import { formatNameShort } from "../../utils/formatName";

export const TopBar = ({ action }: TopBarProps) => {
  const { isMdDown } = useResponsive();

  const { user } = useAuth();

  return (
    <header className={styles.topbar}>
      {isMdDown && (
        <div className={styles.iconContainer}>
          <IoMdMenu className={styles.menuIcon} onClick={action} />
          <img src={logo} alt={TopBarStrings.logoAlt} className={styles.logo} />
        </div>
      )}

      <div className={styles.container}>
        <IoSearch className={styles.icon} />
        <FaRegBell className={styles.icon} />
        {user?.name && <Avatar name={user?.name} size="md" />}
        <Typography variant="h6">{formatNameShort(user?.name)}</Typography>
      </div>
    </header>
  );
};
