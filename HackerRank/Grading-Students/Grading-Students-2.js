function gradingStudentsTernary(grades) {
  return grades.map((grade) => {
    return grade >= 37 && grade % 5 > 2 ? (grade += 5 - (grade % 5)) : grade;
  });
}


module.exports = gradingStudentsTernary;
