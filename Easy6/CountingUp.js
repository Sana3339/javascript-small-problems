function sequence(number) {

  let res = [];

  for (let idx = 1; idx <= number; idx += 1) {
    res.push(idx);
  }

  return res;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]