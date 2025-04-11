import React from "react";
import ToastForm from "../ToastForm";
import ToastShelf from "../ToastShelf";
import Footer from "../Footer";
import ToastProvider from "../ToastProvider";

import styles from "./App.module.css";

function App() {
  return (
    <ToastProvider>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground.</h1>
        </header>
        <ToastShelf></ToastShelf>
        <ToastForm></ToastForm>
        <Footer />
      </div>
    </ToastProvider>
  );
}

export default App;
