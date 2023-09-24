function removeVowels(string) {

  let res = '';

  string.split('').forEach(char => {
    if (!'aeiou'.includes(char.toLowerCase()) {
      res += char;
    }
  });

  console.log(res);

}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]