function leadingSubstrings(string) {

  let res = [];

  for (let idx = 1; idx <= string.length; idx += 1) {
    res.push(string.slice(0, idx));
  }
  return res;
}

function substrings(string) {

  let res = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    let substring = string.substring(idx);
    res = res.concat(leadingSubstrings(substring));
  }
  return res;
}


console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
