import React from "react";

function ClearValueButton({ onClick }) {

  return (
    <button
      id={"clear-values-button"}
      onClick={onClick}
      className="Calculator-button-item clear-button">
      C
    </button>
  )
}

export default ClearValueButton;
