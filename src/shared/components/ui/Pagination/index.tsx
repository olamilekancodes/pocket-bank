import React from "react";
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import styles from "./Pagination.module.css";

interface CustomPaginationProps {
  current_page: number;
  total_pages: number;
  items_per_page: number;
  setItemPerPage: (num: number) => void;
  setCurrentPage: (page: number) => void;
}

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

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (total_pages <= 5) {
      for (let i = 1; i <= total_pages; i++) pages.push(i);
    } else {
      if (current_page <= 3) {
        pages.push(1, 2, 3, "...", total_pages - 1, total_pages);
      } else if (current_page >= total_pages - 2) {
        pages.push(1, 2, "...", total_pages - 2, total_pages - 1, total_pages);
      } else {
        pages.push(
          1,
          "...",
          current_page - 1,
          current_page,
          current_page + 1,
          "...",
          total_pages,
        );
      }
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationInfo}>
        <span className={styles.paginationText}>Showing</span>
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
        <span className={styles.paginationText}>results</span>
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

        {pages.map((page, idx) =>
          typeof page === "number" ? (
            <button
              key={idx}
              className={`${styles.pageBtn} ${current_page === page ? styles.active : ""}`}
              onClick={() => setCurrentPage(page)}
              aria-label={`Go to page ${page}`}
              aria-current={current_page === page ? "page" : undefined}
            >
              {page}
            </button>
          ) : (
            <span key={idx} className={styles.ellipsis} aria-hidden="true">
              {page}
            </span>
          ),
        )}

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
