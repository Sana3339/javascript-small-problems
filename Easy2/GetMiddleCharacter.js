function centerOf(sentence) {

  let length = sentence.length;
  let midIdx = Math.floor(length / 2);
  if (length % 2 === 0) {
    return sentence[midIdx - 1] + sentence[midIdx];
  } else {
    return sentence[midIdx];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"