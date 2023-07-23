let readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt("What is your age?");
let currAge = Number(readline.prompt());

prompt("At what age would you like to retire?");
let retirementAge = Number(readline.prompt());

let date = new Date();

console.log(`It's ${date.getFullYear()}. You will retire in ${date.getFullYear() + (retirementAge - currAge)}`);
console.log(`You have only ${retirementAge - currAge} years of work to go!`);