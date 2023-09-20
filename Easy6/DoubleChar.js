function repeater(string) {

  let res = "";

  string.split("").forEach(char => {
    res += char;
    res += char;
  });

  return res;

}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""