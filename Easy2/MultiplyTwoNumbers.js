function multiply(num1, num2) {
  return num1 * num2;
}

const multiply2 = (num1, num2) => num1 * num2;

console.log(multiply(5, 3) === 15);
console.log(multiply2(5, 3) === 15);