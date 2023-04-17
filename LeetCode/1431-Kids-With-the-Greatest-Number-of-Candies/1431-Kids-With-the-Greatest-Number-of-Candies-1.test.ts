import { expect, test } from "@jest/globals";
import kidsWithCandies from "./1431-Kids-With-the-Greatest-Number-of-Candies-1";

test("1431-Kids-With-the-Greatest-Number-of-Candies-1", () => {
  expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toStrictEqual([
    true,
    true,
    true,
    false,
    true,
  ]);
  expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toStrictEqual([
    true,
    false,
    false,
    false,
    false,
  ]);
  expect(kidsWithCandies([12, 1, 12], 10)).toStrictEqual([true, false, true]);
});
