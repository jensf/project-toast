import React from "react";

function useEscape(escapeFunction, functionValue) {
  React.useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        //console.log("Escape key pressed");
        //setToasts([]);
        escapeFunction(functionValue);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, []);
}

export default useEscape;
