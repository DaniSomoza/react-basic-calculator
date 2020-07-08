import React from "react";
import { operators } from '../../operations';

function CalculatorScreen({
  firstOperand,
  operator,
  secondOperand,
  calculateOperation,
  setOperator,
  setFirstOperand,
  setSecondOperand
}) {

  const screenValueLabel = getScreenValueLabel(firstOperand, operator, secondOperand);

  function onChangeScreenInput(value) {

    const operator = operators.find(operator => value.includes(operator));

    if (operator) {
      const [firstOperand, secondOperand] = value.split(operator);
      setOperator(operator);
      setFirstOperand(Number(firstOperand));
      setSecondOperand(Number(secondOperand));
    } else {
      setFirstOperand(Number(value));
    }
  }

  function handleEnterKeyDown(event) {
    if (event.key === 'Enter') {
      calculateOperation();
    }
  }

  return <input
    onChange={event => onChangeScreenInput(event.target.value)}
    onKeyDown={handleEnterKeyDown}
    id={"screen-input"}
    value={screenValueLabel}
    className="screen-input"
  />
}

function getScreenValueLabel(firstOperand, operator, secondOperand) {
  return `${firstOperand || ""}${operator || ""}${secondOperand || ""}` || "0";
}

export default CalculatorScreen;
