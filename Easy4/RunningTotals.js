function runningTotal(arr) {

  let sum = 0;
  let res = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    res.push(sum += arr[idx]);
  }

  return res;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []