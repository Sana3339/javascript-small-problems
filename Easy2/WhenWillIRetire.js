let readline = require("readline-sync");

let currAge = parseInt(readline.question("What is your age? "), 10);

let retirementAge = parseInt(readline.question("At what age would you like to retire? "), 10);

let today = new Date();
let currYear = today.getFullYear();

console.log(`It's ${currYear}.  You will retire in ${retirementAge - currAge + currYear}.` );
console.log(`You only have ${retirementAge - currAge} years of work to go!`);
