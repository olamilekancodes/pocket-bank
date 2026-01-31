import { GiSandsOfTime } from "react-icons/gi";

import styles from "./ComingSoon.module.css";
import { Typography } from "../Typography";
import { ComingSoonStrings } from "../../../constants/strings";

const ComingSoon = () => {
  return (
    <div className={styles.comingSoonContainer}>
      <GiSandsOfTime size={70} />
      <Typography variant="h4">{ComingSoonStrings.title}</Typography>
    </div>
  );
};

export default ComingSoon;
