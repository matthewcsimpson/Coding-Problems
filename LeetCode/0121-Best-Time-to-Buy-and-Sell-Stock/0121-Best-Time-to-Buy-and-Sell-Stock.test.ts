import { expect, test } from "@jest/globals";
import maxProfitTS from "./0121-Best-Time-to-Buy-and-Sell-Stock";

test("0121-Best-Time-to-Buy-and-Sell-Stock", () => {
  expect(maxProfitTS([3, 2, 6, 5, 0, 3])).toBe(4);
  expect(maxProfitTS([8, 12, 6, 5, 80, 4, 100])).toBe(96);
  expect(maxProfitTS([7, 6, 4, 3, 1])).toBe(0);
});
