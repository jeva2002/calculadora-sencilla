import operation from './src/operations.js';

const output = document.getElementById('output');
const history = document.getElementById('history');

const write = (_e) => {
  output.innerHTML += _e;
  document.getElementById('delete').value = 'CE';
};

document.querySelector('form').addEventListener('click', (e) => {
  const value = e.target.value;
  if (value !== undefined) {
    if (value !== 'AC' && value !== '=' && value !== 'CE') {
      write(value);
    } else if (value === 'AC') {
      output.innerHTML = '';
    } else if (value === 'CE') {
      output.innerHTML = output.innerHTML.slice(0, -1);
    } else {
      history.innerHTML = output.innerHTML;
      output.innerHTML = operation(output.innerHTML);
      document.getElementById('delete').value = 'AC';
    }
  }
  // if (isNaN(value)) {
  //   if (value === '(' || value === ')') {
  //     write(value)
  //   } else if (value === AC){}

  // } else {
  //   write(value)
  // }
});
