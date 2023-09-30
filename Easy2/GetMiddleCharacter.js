function centerOf(sentence) {

  let mid = Math.floor(sentence.length / 2);
  if (sentence.length % 2 === 1) {
    return sentence.slice(mid, mid + 1);
  } else {
    return sentence.slice(mid - 1, mid + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
