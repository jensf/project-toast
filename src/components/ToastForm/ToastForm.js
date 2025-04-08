import React from "react";
import styles from "./ToastForm.module.css";
import Button from "../Button";

function ToastForm() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice"); //notice, warning, success, error

  const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

  function handleMessage(e) {
    //console.log(e.target.value);
    setMessage(e.target.value);
  }

  function toastIt(e) {
    e.preventDefault();
    console.log(`make toast: ${variant}: ${message}.`);
    setMessage("");
  }
  return (
    <form className={styles.controlsWrapper} onSubmit={toastIt}>
      <div className={styles.row}>
        <label
          htmlFor="message"
          className={styles.label}
          style={{ alignSelf: "baseline" }}
        >
          Message
        </label>
        <div className={styles.inputWrapper}>
          <textarea
            id="message"
            className={styles.messageInput}
            onChange={handleMessage}
            value={message}
          ></textarea>
          <span>{message}</span>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          {VARIANT_OPTIONS.map((variantOption) => (
            <Radio
              radioValue={variantOption}
              variant={variant}
              setVariant={setVariant}
            />
          ))}
          selectedVariant: {variant}.
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label} />
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          <Button>Pop Toast!</Button>
        </div>
      </div>
    </form>
  );
}

function Radio({ radioValue, variant, setVariant }) {
  return (
    <label htmlFor={`variant-${radioValue}`}>
      <input
        id={`variant-${radioValue}`}
        type="radio"
        name="variant"
        value={radioValue}
        checked={variant === radioValue ? true : false}
        onChange={(e) => setVariant(e.target.value)}
      />
      {radioValue}
    </label>
  );
}
export default ToastForm;
