function union(array1, array2) {

  let res = [];
  addUniqueValsTo(res, array1);
  addUniqueValsTo(res, array2);

  return res;
}

function addUniqueValsTo(resultArray, sourceArray) {

  sourceArray.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]