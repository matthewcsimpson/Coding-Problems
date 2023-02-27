import { expect, test } from "@jest/globals";
import twoSumTS from "./0001-Two-SumTS-1";
import twoSumTSTwo from "./0001-Two-SumTS-2";

test("0001-Two-SumTS-1", () => {
  expect(twoSumTS([3, 2, 4], 6)).toStrictEqual([1, 2]);
  expect(twoSumTS([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  expect(twoSumTS([3, 3], 6)).toStrictEqual([0, 1]);
});

test("0001-Two-SumTS-2", () => {
  expect(twoSumTSTwo([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  expect(twoSumTSTwo([3, 2, 4], 6)).toStrictEqual([1, 2]);
  expect(twoSumTSTwo([3, 3], 6)).toStrictEqual([0, 1]);
});
