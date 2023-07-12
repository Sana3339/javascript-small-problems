let readlineSync = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt("Please provide 2 positive integers.");
prompt("Enter the first number: ");
let num1 = Number(readlineSync.prompt());
prompt("Enter the second number: ");
let num2 = Number(readlineSync.prompt());

let sum = num1 + num2;
prompt(`${num1} + ${num2} = ${sum}`);

let subtraction = num1 - num2;
prompt(`${num1} - ${num2} = ${subtraction}`);

let product = num1 * num2;
prompt(`${num1} * ${num2} = ${product}`);

let division = Math.floor(num1 / num2);
prompt(`${num1} / ${num2} = ${division}`);

let remainder = num1 % num2;
prompt(`${num1} % ${num2} = ${remainder}`);

let power = Math.pow(num1, num2);
prompt(`${num1} ** ${num2} = ${power}`);
