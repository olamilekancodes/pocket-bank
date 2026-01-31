import React from "react";
import styles from "./TableWrapper.module.css";

interface HeadCell {
  id: string;
  label: string;
}

interface SimpleTableWrapperProps {
  headCells?: HeadCell[];
  children: React.ReactNode;
}

const SimpleTableWrapper = ({
  headCells = [],
  children,
}: SimpleTableWrapperProps) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.simpleTable} aria-labelledby="tableTitle">
        {headCells.length > 0 && (
          <thead>
            <tr>
              {headCells.map((cell) => (
                <th key={cell.id} scope="col" className={styles.thCell}>
                  <span className={styles.thLabel}>{cell.label}</span>
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default SimpleTableWrapper;
