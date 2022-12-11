import operation from './src/operations.js';

const body = document.body;
const output = document.getElementById('output');
const history = document.getElementById('history');
const themeBlue = document.getElementById('blue');
const themeGreen = document.getElementById('green');
const themeRed = document.getElementById('red');

const defaultTheme = localStorage.getItem('theme');
if (defaultTheme)
  defaultTheme === 'red'
    ? (body.className = 'redTheme')
    : (body.className = 'greenTheme');

const write = (_e) => {
  output.innerHTML += _e;
  document.getElementById('delete').value = 'CE';
};

document.querySelector('form').addEventListener('click', (e) => {
  const value = e.target.value;
  if (output.innerHTML === 'Syntax Error') output.innerHTML = '';
  if (output.innerHTML === 0) document.getElementById('delete').value = 'AC';
  if (value !== undefined) {
    if (value !== 'AC' && value !== '=' && value !== 'CE') {
      write(value);
    } else if (value === 'AC') {
      output.innerHTML = '';
    } else if (value === 'CE') {
      output.innerHTML = output.innerHTML.slice(0, -1);
    } else {
      history.innerHTML = output.innerHTML;
      if (
        isNaN(output.innerHTML.at(-1)) &&
        output.innerHTML.at(-1) !== undefined
      )
        output.innerHTML = 'Syntax Error';
      else if (isNaN(output.innerHTML))
        output.innerHTML = operation(output.innerHTML);
      document.getElementById('delete').value = 'AC';
    }
  }
});

themeBlue.addEventListener('click', () => {
  body.className = 'blueTheme';
  localStorage.removeItem('theme');
});
themeGreen.addEventListener('click', () => {
  body.className = 'greenTheme';
  localStorage.setItem('theme', 'green');
});
themeRed.addEventListener('click', () => {
  body.className = 'redTheme';
  localStorage.setItem('theme', 'red');
});
