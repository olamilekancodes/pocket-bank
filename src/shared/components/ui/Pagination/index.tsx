import React from "react";
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import styles from "./Pagination.module.css";
import { TableStrings } from "../../../constants/strings";
import type { CustomPaginationProps } from "../../../type";

export const CustomPagination = ({
  current_page,
  total_pages,
  items_per_page,
  setItemPerPage,
  setCurrentPage,
}: CustomPaginationProps) => {
  const handleItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationInfo}>
        <span className={styles.paginationText}>{TableStrings.showing}</span>
        <select
          className={styles.itemsDropdown}
          value={items_per_page}
          onChange={handleItemChange}
          aria-label="Number of items per page"
          title="Items per page"
        >
          {[10, 15, 20].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <span className={styles.paginationText}>{TableStrings.result}</span>
      </div>

      <div className={styles.paginationControls}>
        <button
          onClick={() => setCurrentPage(Math.max(current_page - 1, 1))}
          className={styles.navBtn}
          disabled={current_page === 1}
          aria-label="Go to previous page"
          title="Previous Page"
        >
          <MdOutlineArrowBackIos size={14} />
        </button>

        <div className={styles.pageIndicator}>
          <span className={styles.current}>{current_page}</span>
          <span className={styles.of}>{TableStrings.of}</span>
          <span className={styles.total}>{total_pages}</span>
        </div>

        <button
          onClick={() =>
            setCurrentPage(Math.min(current_page + 1, total_pages))
          }
          disabled={current_page === total_pages}
          className={styles.navBtn}
          aria-label="Go to next page"
          title="Next Page"
        >
          <MdArrowForwardIos size={14} />
        </button>
      </div>
    </div>
  );
};
