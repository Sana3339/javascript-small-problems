function multiplicativeAverage(array) {

  let product = array.reduce((accum, num) => num * accum);

  return (product / array.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
