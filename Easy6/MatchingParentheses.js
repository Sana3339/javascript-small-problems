function isBalanced(string) {

  let parens = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];

    if (char === "(") {
      parens += 1;
    } else if (char === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return (parens === 0);
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);