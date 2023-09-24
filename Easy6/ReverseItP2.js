function reverseWords(string) {

  let wordsArray = string.split(' ');
  let reversedWordsArray = wordsArray.map(word => reverseWord(word));
  return reversedWordsArray.join(' ');

}

function reverseWord(word) {

  return word.split('').reverse().join('');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"