function countOccurrences(array) {

  let count = {};

  array.forEach(ele => {
    count[ele] = count[ele] || 0;
    count[ele] += 1;
  });

  Object.entries(count).forEach(entry => {
    let [car, count] = entry;
    console.log(`${car} => ${count}`);
  });
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
