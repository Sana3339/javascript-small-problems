function doubleConsonants(word) {

  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

  let res = [];

  for (let idx = 0; idx < word.length; idx += 1) {
    let char = word[idx];
    res.push(char);
    if (CONSONANTS.indexOf(char.toLowerCase()) >= 0) {
      res.push(char);
    }
  }
  return res.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));               // ""
