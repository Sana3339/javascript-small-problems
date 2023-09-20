function sum(digits) {

  let sum = 0;

  while (digits > 0) {
    let lastDigit = digits % 10;
    sum += lastDigit;
    digits = Math.floor(digits / 10);
  }

  return sum;
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45