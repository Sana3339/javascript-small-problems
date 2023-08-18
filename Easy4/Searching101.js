const readlineSync = require('readline-sync');

let numbers = [];

console.log("Enter the 1st number:");
numbers.push(Number(readlineSync.prompt()));

console.log("Enter the 2nd number:");
numbers.push(Number(readlineSync.prompt()));

console.log("Enter the 3rd number:");
numbers.push(Number(readlineSync.prompt()));

console.log("Enter the 4th number:");
numbers.push(Number(readlineSync.prompt()));

console.log("Enter the 5th number:");
numbers.push(Number(readlineSync.prompt()));

console.log("Enter the last number:");
let targetNum = Number(readlineSync.prompt());

if (numbers.includes(targetNum)) {
  console.log(`The number ${targetNum} appears in ${numbers.join(',')}.`);
} else {
  console.log(`The number ${targetNum} doesn't appear in ${numbers.join(',')}.`);
};
