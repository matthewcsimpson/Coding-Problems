const { test, expect } = require("@jest/globals");
const generatePascalsTriangle = require("./0018-Pascals-Triangle");

test("0018-Pascals-Triangle", () => {
  expect(generatePascalsTriangle(5)).toStrictEqual(checkOne);
  expect(generatePascalsTriangle(1)).toStrictEqual(checkTwo);
  expect(generatePascalsTriangle(3)).toStrictEqual(checkThree);
});

const checkOne = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
const checkTwo = [[1]];
const checkThree = [[1], [1, 1], [1, 2, 1]];
