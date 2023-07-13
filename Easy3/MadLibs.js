let readlineSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Enter a noun: ");
let noun = readlineSync.prompt();

prompt("Enter a verb: ");
let verb = readlineSync.prompt();

prompt("Enter an adjective: ");
let adjective = readlineSync.prompt();

prompt("Enter an adverb: ");
let adverb = readlineSync.prompt();

console.log(`Do you walk your ${adjective} ${noun} ${adverb}? ` +
  "That's hilarious!");
console.log(`The ${adjective} dog ${verb}s over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle`);