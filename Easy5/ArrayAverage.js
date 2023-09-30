function average(array) {

  let numSum = array.reduce((accum, ele) => accum + ele);
  return Math.floor(numSum / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
