import { expect, test } from "@jest/globals";
import twoSumTwo from "./0167-Two-Sum-II-Input-Array-Is-Sorted";

test("0167-Two-Sum-II-Input-Array-Is-Sorted", () => {
  expect(twoSumTwo([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
  expect(twoSumTwo([2, 3, 4], 6)).toStrictEqual([1, 3]);
  expect(twoSumTwo([-1, 0], -1)).toStrictEqual([1, 2]);
});
