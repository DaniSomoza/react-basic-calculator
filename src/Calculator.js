import React, { useState } from "react";
import "./styles/Calculator.css";
import { DIVIDE_OPERATOR, MULTIPLY_OPERATOR, SUB_OPERATOR, SUM_OPERATOR, operations } from "./operations";
import CalculatorScreen from './components/calculator-screen/CalculatorScreen';
import NumberButton from './components/number-button/NumberButton';
import OperationButton from './components/operation-button/OperationButton';
import ResultButton from './components/result-button/ResultButton';
import ClearValueButton from './components/clear-value-button/ClearValueButton';

function Calculator() {

  const [firstOperand, setFirstOperand] = useState(0);
  const [secondOperand, setSecondOperand] = useState(0);
  const [operator, setOperator] = useState("");


  function onClickNumber(number) {
    if (operator) {
      setSecondOperand(Number(`${secondOperand}${number}`));
    } else {
      setFirstOperand(Number(`${firstOperand}${number}`));
    }
  }

  function clearValues() {
    setSecondOperand(0);
    setFirstOperand(0);
    setOperator("");
  }

  function calculateOperation() {
    const operate = operations[operator];
    if (operate) {
      const result = operate(firstOperand, secondOperand);
      setFirstOperand(result);
      setSecondOperand(0);
      setOperator("");
    }
  }

  return (
    <div className="Calculator-background">
      <div className="Calculator-body">
        <CalculatorScreen
          firstOperand={firstOperand}
          operator={operator}
          secondOperand={secondOperand}
          calculateOperation={calculateOperation}
          setOperator={setOperator}
          setFirstOperand={setFirstOperand}
          setSecondOperand={setSecondOperand}
        />
        <ClearValueButton onClick={clearValues} />
        <OperationButton onClick={setOperator} operation={DIVIDE_OPERATOR} />
        <OperationButton onClick={setOperator} operation={MULTIPLY_OPERATOR} />
        <NumberButton operator={7} onClick={onClickNumber} />
        <NumberButton operator={8} onClick={onClickNumber} />
        <NumberButton operator={9} onClick={onClickNumber} />
        <OperationButton onClick={setOperator} operation={SUB_OPERATOR} />
        <NumberButton operator={4} onClick={onClickNumber} />
        <NumberButton operator={5} onClick={onClickNumber} />
        <NumberButton operator={6} onClick={onClickNumber} />
        <OperationButton onClick={setOperator} operation={SUM_OPERATOR} customCSS={"plus-button"} />
        <NumberButton operator={1} onClick={onClickNumber} />
        <NumberButton operator={2} onClick={onClickNumber} />
        <NumberButton operator={3} onClick={onClickNumber} />
        <NumberButton operator={0} onClick={onClickNumber} customCSS={"zero-button"} />
        <button id={"point-decimal-button"} onClick={() => { }} className="Calculator-button-item">.</button>
        <ResultButton onClick={calculateOperation} />
      </div>
    </div>
  );
}

export default Calculator;
