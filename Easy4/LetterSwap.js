function swap(string) {

  let wordsArray = string.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx += 1) {

    wordsArray[idx] = swapFirstAndLastChars(wordsArray[idx]);
  }
  return wordsArray.join(' ');
}

function swapFirstAndLastChars(word) {

  if ((word.length) === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"