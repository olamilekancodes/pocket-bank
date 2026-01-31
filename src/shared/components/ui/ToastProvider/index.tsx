import { Toaster } from "react-hot-toast";

export const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          borderRadius: "12px",
          padding: "16px",
          fontWeight: "500",
          fontSize: "14px",
          fontFamily: "inherit",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        },
        success: {
          style: {
            background: "#ECFDF5",
            border: "1px solid #10B981",
            color: "#065F46",
          },
          iconTheme: {
            primary: "#10B981",
            secondary: "#fff",
          },
        },
        error: {
          style: {
            background: "#FEF2F2",
            border: "1px solid #EF4444",
            color: "#991B1B",
          },
          iconTheme: {
            primary: "#EF4444",
            secondary: "#fff",
          },
        },
      }}
    />
  );
};
