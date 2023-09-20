function leadingSubstrings(string) {

  let res = [];

  for (let ydx = 1; ydx <= string.length + 1; ydx += 1) {
    res.push(string.slice(0, ydx));

  }
  return res;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]