import { expect, test } from "@jest/globals";
import kidsWithCandies2 from "./1431-Kids-With-the-Greatest-Number-of-Candies-2";

test("1431-Kids-With-the-Greatest-Number-of-Candies-2", () => {
  expect(kidsWithCandies2([2, 3, 5, 1, 3], 3)).toStrictEqual([
    true,
    true,
    true,
    false,
    true,
  ]);
  expect(kidsWithCandies2([4, 2, 1, 1, 2], 1)).toStrictEqual([
    true,
    false,
    false,
    false,
    false,
  ]);
  expect(kidsWithCandies2([12, 1, 12], 10)).toStrictEqual([true, false, true]);
});
