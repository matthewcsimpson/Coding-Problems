function gradingStudentsCon(grades) {
  return grades.map((grade) => {
    if (grade >= 37 && grade % 5 > 2) {
      return (grade += 5 - (grade % 5));
    } else {
      return grade;
    }
  });
}

module.exports = gradingStudentsCon;
