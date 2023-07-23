let readline = require('readline-sync');

let billAmount = parseFloat(readline.question("What is the bill?\n"));
let tipPercentage = parseFloat(readline.question("what is the tip percentage (e.g. 15)?\n"));

let tipAmount = (tipPercentage / 100) * billAmount;
let total = billAmount + tipAmount;

console.log(`\nThe tip is $${(tipAmount).toFixed(2)}`);
console.log(`The total is $${(total).toFixed(2)}\n`);