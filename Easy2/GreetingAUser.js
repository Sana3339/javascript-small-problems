let readline = require('readline-sync');

let name = readline.question("What is your name? ");

if (name[name.length - 1] === '!') {
  let shortenedName = name.substring(0, name.length - 1);
  console.log(`HELLO ${shortenedName.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}