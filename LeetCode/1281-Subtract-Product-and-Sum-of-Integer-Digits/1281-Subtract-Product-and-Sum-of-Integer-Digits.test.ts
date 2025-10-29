import { expect, test } from "@jest/globals";
import subtractProductAndSum from "./1281-Subtract-Product-and-Sum-of-Integer-Digits";

test("Subtract Product and Sum of Integer Digits", () => {
  expect(subtractProductAndSum(234)).toBe(15);
  expect(subtractProductAndSum(4421)).toBe(21);
  expect(subtractProductAndSum(0)).toBe(0);
  expect(subtractProductAndSum(1)).toBe(0);
  expect(subtractProductAndSum(999)).toBe(702);
});
