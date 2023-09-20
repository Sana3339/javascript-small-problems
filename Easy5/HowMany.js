function countOccurrences(array) {

  let count = {};

  array.forEach(vehicle => {
    count[vehicle] = count[vehicle] || 0;
    count[vehicle] += 1;
  });

  for (let vehicle in count) {
    console.log(`${vehicle} => ${count[vehicle]}`);
  }

}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1