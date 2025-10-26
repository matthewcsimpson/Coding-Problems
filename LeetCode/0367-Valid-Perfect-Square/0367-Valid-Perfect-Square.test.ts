import { test, expect } from "@jest/globals";
import isPerfectSquare from "./0367-Valid-Perfect-Square";

test("isPerfectSquare", () => {
  expect(isPerfectSquare(16)).toBe(true);
  expect(isPerfectSquare(14)).toBe(false);
  expect(isPerfectSquare(1)).toBe(true);
  expect(isPerfectSquare(0)).toBe(false);
  expect(isPerfectSquare(25)).toBe(true);
  expect(isPerfectSquare(26)).toBe(false);
});
