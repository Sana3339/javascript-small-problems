function calculateSum(num) {
  let numSum = 0;

  for (let idx = 1; idx <= num; idx += 1) {
    numSum += idx;
  }

  return numSum;
}

function calculateProduct(num) {

  let numProduct = 1;

  for (let idx = 1; idx <= num; idx += 1) {
    numProduct *= idx;
  }

  return numProduct;
}

let readline = require('readline-sync');

let userInputInteger = readline.question("Please enter an integer greater than 0: ");
let num = parseInt(userInputInteger, 10);

let userInputOperator = readline.question("Enter 's' to compute the sum, or 'p' to compute the product: ");

if (userInputOperator === 's') {
  console.log(`The sum of the integers between 1 and ${num} is ${calculateSum(num)}`);
} else if (userInputOperator === 'p') {
  console.log(`The product of the integers between 1 and ${num} is ${calculateProduct(num)}`);
} else {
  console.log("That's not a valid response");
}
