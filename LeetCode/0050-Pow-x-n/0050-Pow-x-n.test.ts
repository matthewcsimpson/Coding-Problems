import { expect, test } from "@jest/globals";
import myPow from "./0050-Pow-x-n";

test("0050-Pow-x-n", () => {
  expect(myPow(2.0, 10)).toBe(1024.0);
  expect(myPow(2.1, 3)).toBeCloseTo(9.261, 5);
  expect(myPow(2.0, -2)).toBe(0.25);
  expect(myPow(0.00001, 2147483647)).toBe(0);
});
