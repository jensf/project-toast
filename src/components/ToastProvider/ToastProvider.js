import React from "react";
import useEscape from "../../hooks/use-escape";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]); // holds recent toasts

  const emptyArray = React.useMemo(() => [], []);
  useEscape(setToasts, emptyArray);

  function pushToast(toast) {
    const newToasts = [...toasts, { ...toast, key: crypto.randomUUID() }];
    //console.log(newToasts);
    setToasts(newToasts);
  }

  function dropToast(toastID) {
    //console.log(toastID);
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
