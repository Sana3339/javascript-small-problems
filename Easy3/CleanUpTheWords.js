function isLowerCase(char) {
  return (char >= 'a' && char <= 'z');
}

function isUpperCase(char) {
  return (char >= 'Z' && char <= 'Z');
}

function cleanUp(sentence) {

  let res = "";

  for (let idx = 0; idx < sentence.length; idx += 1) {
    let char = sentence[idx];
    if (!isUpperCase(char) && !isLowerCase(char)) {
      if (res.length > 0 && res[res.length - 1] !== ' ') {
        res += " ";
      }
    } else {
      res += char;
    }
  }
  return res;
}

console.log(cleanUp("---what's my +*& line?"));