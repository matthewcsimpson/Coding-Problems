const gradingStudentsCon = require("./Grading-Students-1");
const gradingStudentsTernary = require("./Grading-Students-2");

test("Grading Students (Conditional)", () => {
  expect(gradingStudentsCon([27, 23, 65, 43, 0, 82, 0])).toStrictEqual([
    27, 23, 65, 45, 0, 82, 0,
  ]);
  expect(gradingStudentsCon([73, 67, 38, 33])).toStrictEqual([75, 67, 40, 33]);
});

test("Grading Students (Conditional)", () => {
  expect(gradingStudentsTernary([27, 23, 65, 43, 0, 82, 0])).toStrictEqual([
    27, 23, 65, 45, 0, 82, 0,
  ]);
  expect(gradingStudentsTernary([73, 67, 38, 33])).toStrictEqual([
    75, 67, 40, 33,
  ]);
});
