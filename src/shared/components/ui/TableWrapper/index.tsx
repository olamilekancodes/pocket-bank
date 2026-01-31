import React from "react";
import styles from "./TableWrapper.module.css";

interface HeadCell {
  id: string;
  label: string;
}

interface SimpleTableWrapperProps<T> {
  orderBy?: keyof T;
  handleRequestSort?: (property: keyof T) => void;
  headCells?: HeadCell[];
  children: React.ReactNode;
}

function SimpleTableWrapper<T>({
  orderBy,
  handleRequestSort,
  headCells = [],
  children,
}: SimpleTableWrapperProps<T>) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.simpleTable} aria-labelledby="tableTitle">
        {headCells.length > 0 && (
          <thead>
            <tr>
              {headCells.map((cell) => {
                const isSorted = orderBy === cell.id;
                return (
                  <th
                    key={String(cell.id)}
                    scope="col"
                    className={`${styles.thCell} ${
                      isSorted ? styles.isSorted : ""
                    } ${handleRequestSort ? styles.sortable : ""}`}
                    onClick={() => handleRequestSort?.(cell.id as keyof T)}
                  >
                    <span className={styles.thLabel}>{cell.label}</span>
                  </th>
                );
              })}
            </tr>
          </thead>
        )}
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default SimpleTableWrapper;
