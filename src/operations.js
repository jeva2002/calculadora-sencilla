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
  console.log(_first, _second, _operator);
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
      break;
  }
};

const operation = (_value) => {
  _value = _value.replace(')', '');
  _value = _value.replace('(', '');
  if (!isNaN(_value)) return 'Syntax Error';
  const operationsList = formatData(_value);
  let accumulated = 0;

  operationsList.forEach((e) => {
    if (!isNaN(e[0])) {
      const expression = formatExpression(e);
      accumulated = selectOperation(
        expression[1],
        expression[0],
        expression[2]
      );
    } else {
      const expression = formatExpression(e);
      expression.shift();
      accumulated = selectOperation(expression[0], accumulated, expression[1]);
    }
  });
  return accumulated;
};

export default operation;
