function copyNonDupsTo(resultArray, array) {

  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(array1, array2) {

  let res = [];
  copyNonDupsTo(res, array1);
  copyNonDupsTo(res, array2);
  return res;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
