function crunch(input) {

  let result = '';
  if (input.length > 0) {
    result += input[0];
  }

  for (let idx = 1; idx <= input.length; idx++) {
    if (input[idx] !== input[idx - 1]) {
      result += input[idx];
    }
  }
  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
