function letterCaseCount(string) {

  let counts = { uppercase: 0, lowercase: 0, neither: 0};

  string.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      counts.uppercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      counts.lowercase += 1;
    } else {
      counts.neither += 1;
    }
  });
  return counts;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
