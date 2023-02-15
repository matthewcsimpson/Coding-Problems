const determinant = require("./Matrix-Determinant");

test("Matrix-Determinant", () => {
  expect(determinant(m1)).toBe(3);
  expect(determinant(m2)).toBe(14);
  expect(determinant(m3)).toBe(10);
  expect(determinant(m4)).toBe(-24);
});

// Test Data
const m1 = [[3]];
const m2 = [
  [4, 6],
  [3, 8],
];
const m3 = [
  [2, 4, 2],
  [3, 1, 1],
  [1, 2, 0],
];
const m4 = [
  [2, 4, 2, 4],
  [3, 1, 1, 3],
  [1, 2, 0, 1],
  [4, 5, 6, 7],
];
