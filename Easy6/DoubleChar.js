function doubleConsonants(string) {

  let res = "";
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';

  string.split('').forEach(char => {
    res += char;
    if (CONSONANTS.includes(char.toLowerCase())) {
      res += char;
    }
  });

  return res;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));               // ""