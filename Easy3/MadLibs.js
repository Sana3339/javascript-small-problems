let readlineSync = require('readline-sync');

console.log("Enter a noun: ");
let noun = readlineSync.prompt();

console.log("Enter a  verb: ");
let verb = readlineSync.prompt();

console.log("Enter an adjective: ");
let adjective = readlineSync.prompt();

console.log("Enter an adverb: ");
let adverb = readlineSync.prompt();

console.log(`Do you walk your ${adjective} ${noun} ${adverb}? ` +
  "That's hilarious!");
console.log(`The ${adjective} dog ${verb}s over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);