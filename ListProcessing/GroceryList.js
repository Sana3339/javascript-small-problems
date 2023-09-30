function buyFruit(array) {

  let res = [];

  array.forEach(subArray => {
    let [fruit, count] = subArray;
    for (let idx = 0; idx < count; idx += 1) {
      res.push(fruit);
    }
  });

  return res;

}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
