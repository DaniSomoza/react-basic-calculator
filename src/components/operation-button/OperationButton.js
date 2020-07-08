import React from "react";

function OperationButton({ operation, onClick, customCSS }) {

  return (<button
    id={`${operation}-operation-button`}
    onClick={() => onClick(operation)}
    className={`Calculator-button-item ${customCSS}`}
  >
    {operation}
  </button>)
}

export default OperationButton;
