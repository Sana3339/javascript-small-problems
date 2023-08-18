function wordSizes(string) {

  let obj = {};
  let wordArray = string.split(' ');

  for (let idx = 0; idx < wordArray.length; idx += 1) {
    let length = wordArray[idx].length;
    if (length === 0) {
      continue;
    }
    if (!obj[length]) {
      obj[length] = 0;
    }
    obj[length] += 1;
  }

  return obj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}