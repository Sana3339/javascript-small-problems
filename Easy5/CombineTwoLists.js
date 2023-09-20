function interleave(array1, array2) {

  let res = [];

  while (array1.length > 0 && array2.length > 0) {
    let element1 = array1.shift();
    res.push(element1);

    let element2 = array2.shift();
    res.push(element2);
  }

  while (array1.length > 0) {
    let element1 = array1.shift();
    res.push(element1);
  }

  while (array2.length > 0) {
    let element2 = array2.shift();
    res.push(element2);
  }

  return res;
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]