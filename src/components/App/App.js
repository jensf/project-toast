import React from "react";
import ToastForm from "../ToastForm";

import Footer from "../Footer";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground.</h1>
      </header>

      <ToastForm></ToastForm>

      <Footer />
    </div>
  );
}

export default App;
