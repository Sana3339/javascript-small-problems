function calculateProduct(targetNum) {

  let result = 0;
  for (let idx = 0; idx < targetNum; idx += 1) {
    result *= idx;
  }
  return result;
}

function caclulateSum(targetNum) {

  let result = 0;
  for (let idx = 0; idx < targetNum; idx += 1) {
    result += idx;
  }
  return result;
}

let readline = require('readline-sync');

let targetNum = readline.question("Please enter an integer greater than 0: ");
targetNum = parseInt(targetNum, 10);

let userInput = readline.question("Enter 's' to compute the sum or 'p' to compute the product: ");

if (userInput === 's') {
  let sum = caclulateSum(targetNum);
  console.log(`The sum of the integers between 0 and ${targetNum} is ${sum}.`);
} else if (userInput === 'p') {
  let product = calculateProduct(targetNum);
  console.log(`The product of the integers between 0 and ${targetNum} is ${product}`);
} else {
  console.log("Invalid entry.");
}