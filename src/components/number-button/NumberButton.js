import React from "react";

function NumberButton({ operator, onClick, customCSS }) {

  return (
    <button
      id={`${operator}-number-button`}
      onClick={() => onClick(operator)}
      className={`Calculator-button-item ${customCSS}`}>
      {operator}
    </button>)
}


export default NumberButton;
