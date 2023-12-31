function halvsies(arr) {

  let res = [];

  let mid = Math.ceil(arr.length / 2);
  res.push(arr.slice(0, mid));
  res.push(arr.slice(mid));

  return res;
}

console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
