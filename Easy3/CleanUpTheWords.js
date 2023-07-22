function isLowerCaseLetter(letter) {
  return letter >= 'a' && letter <= 'z';
}

function isUpperCaseLetter(letter) {
  return letter >= 'A' && letter <= 'Z';
}

function cleanUp(sentence) {

  let res = [];

  for (let idx = 0; idx < sentence.length; idx += 1) {
    let letter = sentence[idx];
    if (isLowerCaseLetter(letter) || isUpperCaseLetter(letter)) {
      res.push(letter);
    } else if (res.length > 0 && res[res.length - 1] !== " ") {
      res.push(" ");
    }
  }
  return res.join('');
}

console.log(cleanUp("---what's my +*& line?"));