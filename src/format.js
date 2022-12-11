const formatData = (_value) => {
  const operations = [];
  let expression = '';
  _value = _value.replace(')', '');
  _value = _value.replace('(', '');
  let flag = 0;
  let count = 0;
  _value.split('').forEach((e) => {
    count++;
    if (count !== _value.length) {
      if (!isNaN(e) && flag < 2) {
        expression += e;
      } else if (isNaN(e) && flag === 0) {
        if (e !== '.') flag++;
        expression += e;
      } else if (isNaN(e) && flag === 1) {
        flag++;
        operations.push(expression);
        expression = '';
        expression += e;
      } else {
        if (isNaN(e) && flag === 2) {
          flag++;
        } else if (!isNaN(e)) {
          expression += e;
        }
        if (isNaN(e) && flag === 3) {
          operations.push(expression);
          expression = '';
          flag = 2;
          expression += e;
        }
      }
    } else if (!isNaN(e)) {
      expression += e;
      operations.push(expression);
      expression = '';
    }
  });
  console.log(operations);
  return operations;
};

const formatExpression = (_expression) => {
  const newExpression = [];
  let part = '';
  let count = 0;
  _expression.split('').forEach((e) => {
    count++;
    if (!isNaN(e)) {
      part += e;
      if (count === _expression.length) {
        newExpression.push(parseFloat(part));
      }
    } else if (isNaN(e)) {
      newExpression.push(part, e);
      part = '';
    }
  });
  return newExpression;
};

export { formatData, formatExpression };
