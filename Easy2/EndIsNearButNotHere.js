function penultimate(sentence) {
  let wordList = sentence.split(" ");
  if (wordList.length < 2) {
    return "";
  }
  return wordList[wordList.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true