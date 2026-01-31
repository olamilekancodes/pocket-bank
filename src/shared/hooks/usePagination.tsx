import { useState, useMemo } from "react";

interface PaginationProps<T> {
  data: T[];
  order_control: keyof T;
  initial_items_per_page?: number;
}

const isDateString = (val: unknown): val is string => {
  return typeof val === "string" && !isNaN(Date.parse(val));
};

function usePagination<T>({
  data,
  order_control,
  initial_items_per_page = 10,
}: PaginationProps<T>) {
  const [current_page, setCurrentPage] = useState(1);
  const [items_per_page, setItemPerPage] = useState(initial_items_per_page);

  const { current_data, total_pages } = useMemo(() => {
    const sorted = [...data].sort((a, b) => {
      const rawA = a[order_control];
      const rawB = b[order_control];

      let valA: string | number =
        typeof rawA === "number" ? rawA : String(rawA);
      let valB: string | number =
        typeof rawB === "number" ? rawB : String(rawB);

      if (order_control === "date" || isDateString(rawA)) {
        valA = new Date(rawA as string).getTime();
        valB = new Date(rawB as string).getTime();
      }

      if (valA < valB) return 1;
      if (valA > valB) return -1;
      return 0;
    });

    const start = (current_page - 1) * items_per_page;
    const end = start + items_per_page;
    const total = Math.ceil(data.length / items_per_page);

    return {
      current_data: sorted.slice(start, end),
      total_pages: total || 1,
    };
  }, [data, current_page, items_per_page, order_control]);

  const handleSetItemPerPage = (num: number) => {
    setItemPerPage(num);
    setCurrentPage(1);
  };

  return {
    current_data,
    total_pages,
    current_page,
    items_per_page,
    setCurrentPage,
    setItemPerPage: handleSetItemPerPage,
  };
}

export default usePagination;
