function leadingSubstrings(string) {

  let res = [];

  for (let ydx = 1; ydx <= string.length + 1; ydx += 1) {
    res.push(string.slice(0, ydx));

  }
  return res;
}

function substrings(string) {

  let substrings = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    let substring = string.substring(idx);
    substrings = substrings.concat(leadingSubstrings(substring));
  }
  return substrings;
}


console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]