function palindromes(string) {

  return allSubstrings(string).filter(isPalindrome);
}


function isPalindrome(word) {

  return word.length > 1 && word === word.split('').reverse().join('');
}

function leadingSubstrings(string) {

  let res = [];

  for (let ydx = 1; ydx <= string.length + 1; ydx += 1) {
    res.push(string.slice(0, ydx));

  }
  return res;
}

function allSubstrings(string) {

  let substrings = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    let substring = string.substring(idx);
    substrings = substrings.concat(leadingSubstrings(substring));
  }
  return substrings;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]