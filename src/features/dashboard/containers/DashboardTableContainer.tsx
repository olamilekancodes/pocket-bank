import { getTransactionHistory } from "../../../mock/transactionHistory";
import usePagination from "../../../shared/hooks/usePagination";
import { DashboardTable } from "../components/DashboardTable";

export const DashboardTableContainer = () => {
  const data = getTransactionHistory();

  const { current_data } = usePagination({
    data: data,
    order_control: "date",
  });

  return <DashboardTable transactions={current_data} />;
};
