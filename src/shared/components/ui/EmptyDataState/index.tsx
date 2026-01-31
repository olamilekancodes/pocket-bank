import { EmptyStateStrings } from "../../../constants/strings";
import { Typography } from "../Typography";
import styles from "./EmptyDataState.module.css";

export const EmptyDataState = () => {
  return (
    <div className={styles.emptyDataContainer}>
      <Typography variant="h5">{EmptyStateStrings.title}</Typography>
    </div>
  );
};
