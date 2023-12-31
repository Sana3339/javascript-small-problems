function utf16Value(string) {

  let result = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    result += string.charCodeAt(idx);
  }
  return result;
}


console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811