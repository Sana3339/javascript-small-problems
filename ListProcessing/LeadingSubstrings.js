function leadingSubstrings(string) {

  let res = [];

  for (let idx = 1; idx <= string.length; idx += 1) {
    res.push(string.slice(0, idx));
  }
  return res;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
