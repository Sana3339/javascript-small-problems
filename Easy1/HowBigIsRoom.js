let readline = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

let length = readline.question("Enter the length of the room in meters: ");
length = parseInt(length, 10);

let width = readline.question("Enter the width of the room in meters: ");
width = parseInt(width, 10);

let areaInMeters = (length * width).toFixed(2);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET).toFixed(2);

console.log(
  `The area of the room is ${areaInMeters} sq meters (${areaInFeet} sq feet)`
);