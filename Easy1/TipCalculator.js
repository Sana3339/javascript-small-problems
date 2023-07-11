let readlineSync = require('readline-sync');

console.log('What is the bill?');
let billAmount = readlineSync.question();
billAmount = parseInt(billAmount, 10);

console.log('What is the tip percentage (e.g. 20 for 20%)?');
let tipPercentage = readlineSync.question();
tipPercentage = parseInt(tipPercentage) / 100;

let tipAmount = billAmount * tipPercentage;
let totalBillWithTip = billAmount + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalBillWithTip.toFixed(2)}`)