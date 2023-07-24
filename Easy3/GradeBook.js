function getGrade(grade1, grade2, grade3) {

  let mean = (grade1 + grade2 + grade3) / 3;

  if (mean >= 90) {
    return 'A';
  } else if (mean >= 80 && mean < 90) {
    return 'B';
  } else if (mean >= 70 && mean < 80) {
    return 'C';
  } else if (mean >= 60 && mean < 70) {
    return 'D';
  } else if (mean < 60) {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"