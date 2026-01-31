import { AuthProvider } from "../auth/context/AuthProvider";
import { ToastProvider } from "../shared/components/ui/ToastProvider";
import { AppRouter } from "./router";

function App() {
  return (
    <AuthProvider>
      <ToastProvider />
      <AppRouter />;
    </AuthProvider>
  );
}

export default App;
