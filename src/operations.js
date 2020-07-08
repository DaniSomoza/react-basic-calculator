export const SUM_OPERATOR = '+';
export const SUB_OPERATOR = '-';
export const MULTIPLY_OPERATOR = '*';
export const DIVIDE_OPERATOR = '/';

export const operators = [SUM_OPERATOR, SUB_OPERATOR, MULTIPLY_OPERATOR, DIVIDE_OPERATOR]

export const operations = {
  [SUM_OPERATOR]: sum,
  [SUB_OPERATOR]: sub,
  [MULTIPLY_OPERATOR]: multiply,
  [DIVIDE_OPERATOR]: divide
}

function sum(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}

function sub(firstOperand, secondOperand) {
  return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand) {
  return firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand) {
  return firstOperand / secondOperand;
}
