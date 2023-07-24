function crunch(text) {

  let crunchText = "";

  for (let idx = 0; idx <= text.length - 1; idx += 1) {
    if (text[idx] !== text[idx + 1]) {
      crunchText += text[idx];
    }
  }
  return crunchText;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
