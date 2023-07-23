let readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt("Enter the first number: ");
let num1 = Number(readline.prompt());

prompt("Enter the second number: ");
let num2 = Number(readline.prompt());

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${Math.pow(num1,num2)}`);