function centerOf(sentence) {

  let length = sentence.length;
  if (length % 2 === 0) {
    //return 2 chars
  } else {
    //return 1 char
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"