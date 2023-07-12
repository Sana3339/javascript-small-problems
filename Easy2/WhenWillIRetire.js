let readlineSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

let today = new Date();
let currYear = today.getFullYear();

prompt("What is your age?");
let currAge = readlineSync.question();

prompt("At what age would you like to retire?");
let retirementAge = readlineSync.question();

let yearsUntilRetirement = retirementAge - currAge;

prompt(`It's ${currYear}. You will retire in ${currYear + yearsUntilRetirement}.`);
prompt(`You only have ${yearsUntilRetirement} of work to go!`);