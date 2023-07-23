function centerOf(sentence) {

  if (sentence.length % 2 === 1) {
    let centerIndex = (sentence.length - 1) / 2;
    return sentence[centerIndex];
  } else {
    let leftIndex = (sentence.length / 2) - 1;
    return sentence.substring(leftIndex, leftIndex + 2);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"