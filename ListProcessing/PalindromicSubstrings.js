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
    let substring = string.slice(idx);
    res = res.concat(leadingSubstrings(substring));
  }
  return res;
}

function isPalindrome(substring) {

  return substring.length > 1 && substring === substring.split('').reverse().join('');
}

function palindromes(sentence) {

  return substrings(sentence).filter(isPalindrome);

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
