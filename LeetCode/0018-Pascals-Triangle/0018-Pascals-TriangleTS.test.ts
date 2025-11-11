import { test, expect } from "@jest/globals";
import generatePascalsTriangleTS from "./0018-Pascals-TriangleTs";

test("0018-Pascals-Triangle", () => {
  expect(generatePascalsTriangleTS(5)).toStrictEqual(checkOne);
  expect(generatePascalsTriangleTS(1)).toStrictEqual(checkTwo);
  expect(generatePascalsTriangleTS(3)).toStrictEqual(checkThree);
});

const checkOne = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
const checkTwo = [[1]];
const checkThree = [[1], [1, 1], [1, 2, 1]];
