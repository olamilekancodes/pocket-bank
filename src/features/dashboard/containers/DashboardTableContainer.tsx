import usePagination from "../../../shared/hooks/usePagination";
import { DashboardTable } from "../components/DashboardTableCard";
import type { DashboardTableContainerProps } from "../type";

export const DashboardTableContainer = ({
  transactions,
}: DashboardTableContainerProps) => {
  const { current_data } = usePagination({
    data: transactions,
    order_control: "date",
  });

  return <DashboardTable transactions={current_data} />;
};
