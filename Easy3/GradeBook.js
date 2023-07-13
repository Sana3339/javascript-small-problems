function getGrade(grade1, grade2, grade3) {

  let mean = ((grade1 + grade2 + grade3) / 3);

  if (mean <= 100 && mean >= 90) {
    return "A";
  } else if (mean <= 89 && mean >= 80) {
    return "B";
  } else if (mean <= 79 && mean >= 70) {
    return "C";
  } else if (mean <= 69 && mean >= 60) {
    return "D";
  } else if (mean <= 59) {
    return "F";
  } else {
    return "invalid entry";
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"