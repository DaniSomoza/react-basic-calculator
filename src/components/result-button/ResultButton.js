import React from "react";

function ResultButton({ onClick }) {

  return (
    <button
      id={"calculate-result-button"}
      onClick={onClick}
      className="Calculator-button-item result-button">
      =
    </button>)
}

export default ResultButton;
