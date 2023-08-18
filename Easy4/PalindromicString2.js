function isPalindrome(string) {

  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {

  let revisedString = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx].toLowerCase();
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      revisedString += char;
    }
  }

  return isPalindrome(revisedString);
}


console.log(isRealPalindrome('madam'));            // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false