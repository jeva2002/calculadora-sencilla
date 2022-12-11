import { formatData, formatExpression } from './format.js';

const addition = (_first, _second) => {
  return _first + _second;
};
const substraction = (_first, _second) => {
  return _first - _second;
};
const multiplication = (_first, _second) => {
  return _first * _second;
};
const division = (_first, _second) => {
  return _first / _second;
};
const percentage = (_first, _second) => {
  return _first * (_second / 100);
};

const selectOperation = (_operator, _first, _second) => {
  switch (_operator) {
    case '+':
      return addition(_first, _second);
    case '-':
      return substraction(_first, _second);
    case 'x':
      return multiplication(_first, _second);
    case '/':
      return division(_first, _second);
    case '%':
      return percentage(_first, _second);
    default:
      console.log('holi');
      return;
  }
};

const operation = (_value) => {
  const operationsList = formatData(_value);
  let firstValue = 0;
  let accumulated = 0;

  operationsList.forEach((e) => {
    if (!isNaN(e[0])) {
      const expression = formatExpression(e);
      firstValue = expression[0];
      accumulated += selectOperation(
        expression[1],
        expression[0],
        expression[2]
      );
    } else {
      const expression = formatExpression(e);
      expression.shift();
      accumulated += selectOperation(expression[0], firstValue, expression[1]);
    }
  });
  return accumulated;
};

export default operation;