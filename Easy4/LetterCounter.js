function wordSizes(words) {

  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {

    let word = wordsArray[idx];
    let wordLength = cleanWordLength(word);

    if (wordLength === 0) {
      continue;
    }

    if (!count[wordLength]) {
      count[wordLength] = 0;
    }
    count[wordLength] += 1;
  }
  return count;
}

function cleanWordLength(word) {

  let count = 0;

  for (let idx = 0; idx < word.length; idx += 1) {
    let char = word[idx];
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      count += 1;
    }
  }
  return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}