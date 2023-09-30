function reverseWords(string) {

  const WORD_LENGTH_MINIMUM = 5;
  let words = string.split(' ');
  let reversedWords = [];

  for (let idx = 0; idx < words.length; idx += 1) {
    let currentWord = words[idx];
    if (currentWord.length >= WORD_LENGTH_MINIMUM) {
      reversedWords.push(reverseWord(currentWord));
    } else {
      reversedWords.push(currentWord);
    }
  }
  return reversedWords.join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
