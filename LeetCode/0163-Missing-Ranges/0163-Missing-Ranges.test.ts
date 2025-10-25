import { expect, test } from "@jest/globals";
import missingRanges from "./0163-Missing-Ranges";

test("0163-Missing-Ranges", () => {
  expect(missingRanges([0, 1, 3, 50, 75], 0, 99)).toStrictEqual([
    [2, 2],
    [4, 49],
    [51, 74],
    [76, 99],
  ]);
  expect(missingRanges([-1], -1, -1)).toStrictEqual([]);
  expect(missingRanges([], 1, 1)).toStrictEqual([[1, 1]]);
});
