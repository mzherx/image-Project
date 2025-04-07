import React from "react";
import { toast } from "react-toastify";

export const premiumToast = {
  success: (message) =>
    toast.success(message, {
      icon: (
        <div style={iconWrapperStyle("#DCFCE7")}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17l-5-5"
              stroke="#16A34A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ),
      style: toastStyle("#F0FDF4", "#BBF7D0"),
    }),

  error: (message) =>
    toast.error(message, {
      icon: (
        <div style={iconWrapperStyle("#FEE2E2")}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="#DC2626"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ),
      style: toastStyle("#FEF2F2", "#FCA5A5"),
    }),

    info: (message) =>
      toast.info(message, {
        icon: (
          <div style={iconWrapperStyle("#DBEAFE")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 8h.01M12 12v4"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        ),
        closeButton: ({ closeToast }) => (
          <button onClick={closeToast} style={{ color: "black", fontSize: "16px" }}>
            ✕
          </button>
        ),
        style: toastStyle("#EFF6FF", "#93C5FD"),
      }),
  warning: (message) =>
    toast.warning(message, {
      icon: (
        <div style={iconWrapperStyle("#FEF3C7")}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a1 1 0 0 0 .86 1.5h18.64a1 1 0 0 0 .86-1.5L13.71 3.86a1 1 0 0 0-1.72 0z"
              stroke="#D97706"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
      style: toastStyle("#FFFBEB", "#FCD34D"),
    }),
};

// Helper styles
const iconWrapperStyle = (bg) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  borderRadius: "9999px",
  backgroundColor: bg,
});

const toastStyle = (bg, border) => ({
  background: bg,
  border: `1px solid ${border}`,
  borderRadius: "8px",
  color: "#111827",
  padding: "12px 16px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  backdropFilter: "blur(10px)",
  fontSize: "14px",
  fontWeight: "500",
});
