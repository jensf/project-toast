import React from "react";
import ToastForm from "../ToastForm";
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";
import Footer from "../Footer";

import styles from "./App.module.css";

function App() {
  const [toasts, setToasts] = React.useState([]); // holds recent toasts
  const [toast, setToast] = React.useState({
    message: "beware of dog",
    variant: "warning",
  });

  function pushToast(toast) {
    //preview
    const newToast = { ...toast, key: crypto.randomUUID() };
    setToast(toast);

    //array
    const newToasts = [...toasts, newToast];
    console.log(newToasts);
    setToasts(newToasts);
  }

  function dropToast(toastID) {
    console.log(toastID);
    const newToasts = toasts.filter((object) => object.key !== toastID);
    //console.log(newToasts);
    setToasts(newToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground.</h1>
      </header>
      {toast && <Toast variant={toast.variant}>{toast.message}</Toast>}
      <ToastShelf toasts={toasts} dropToast={dropToast}></ToastShelf>
      <ToastForm pushToast={pushToast}></ToastForm>
      <Footer />
    </div>
  );
}

export default App;
