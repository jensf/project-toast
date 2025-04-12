import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]); // holds recent toasts

  React.useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        console.log("Escape key pressed");
        setToasts([]);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  function pushToast(toast) {
    const newToasts = [...toasts, { ...toast, key: crypto.randomUUID() }];
    //console.log(newToasts);
    setToasts(newToasts);
  }

  function dropToast(toastID) {
    console.log(toastID);
    const newToasts = toasts.filter((object) => object.key !== toastID);
    //console.log(newToasts);
    setToasts(newToasts);
  }

  return (
    <ToastContext value={{ toasts, pushToast, dropToast }}>
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
