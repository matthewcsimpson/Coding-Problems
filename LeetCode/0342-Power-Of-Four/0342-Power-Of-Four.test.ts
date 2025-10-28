import { expect, test } from "@jest/globals";
import isPowerOfFour from "./0342-Power-Of-Four";

test("0342-Power-Of-Four", () => {
  expect(isPowerOfFour(16)).toBe(true);
  expect(isPowerOfFour(5)).toBe(false);
  expect(isPowerOfFour(1)).toBe(true);
  expect(isPowerOfFour(0)).toBe(false);
  expect(isPowerOfFour(64)).toBe(true);
  expect(isPowerOfFour(68719476736)).toBe(true);
  expect(isPowerOfFour(68719476737)).toBe(false);
});
