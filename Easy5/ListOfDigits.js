function digitList(digits) {

  let res = [];

  while (digits > 0) {
    let lastDigit = digits % 10;
    res.push(lastDigit);
    digits = Math.floor(digits / 10);
  }

  return res.reverse();

}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]