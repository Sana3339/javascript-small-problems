function multiplicativeAverage(array) {

  let product = 1;

  array.forEach(value => {
    product *= value;
  });

  let res = product / array.length;

  return res.toFixed(2);
}


console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"