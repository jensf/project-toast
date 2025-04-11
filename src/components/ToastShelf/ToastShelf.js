import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, dropToast }) {
  /* const toasts = [
    { message: "beware of dog", variant: "warning", key: 1 },
    { message: "welcome aboard!", variant: "notice", key: 2 },
    { message: "yea!", variant: "success", key: 3 },
  ];*/

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.key} className={styles.toastWrapper}>
          <Toast variant={toast.variant} dropToast={dropToast} id={toast.key}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
