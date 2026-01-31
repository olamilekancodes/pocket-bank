import { ToastProvider } from "../shared/components/ui/ToastProvider";
import { AppRouter } from "./router";

function App() {
  return (
    <>
      <ToastProvider />
      <AppRouter />;
    </>
  );
}

export default App;
