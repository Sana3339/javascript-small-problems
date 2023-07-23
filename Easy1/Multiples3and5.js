function multisum(targetNum) {

  let result = 0;

  for (let idx = 0; idx <= targetNum; idx += 1) {
    if (idx % 3 === 0 || idx % 5 === 0) {
      result += idx;
    }
  }

  return result;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168