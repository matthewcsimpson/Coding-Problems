import { test, expect } from "@jest/globals";
import climbStairs from "./0070-Climbing-Stairs";

test("0070-Climbing-Stairs", () => {
  expect(climbStairs(3)).toBe(3);
  expect(climbStairs(4)).toBe(5);
  expect(climbStairs(5)).toBe(8);
  expect(climbStairs(10)).toBe(89);
  expect(climbStairs(22)).toBe(28657);
});
