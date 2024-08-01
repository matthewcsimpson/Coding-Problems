import { expect, test } from "@jest/globals";
import isPalindromeTS from "./0009-Palindrome-Number";

test("0009-Palindrome-Number", () => {
  expect(isPalindromeTS(121)).toBe(true);
  expect(isPalindromeTS(1221)).toBe(true);
  expect(isPalindromeTS(12321)).toBe(true);
  expect(isPalindromeTS(12322)).toBe(false);
  expect(isPalindromeTS(-1221)).toBe(false);
});
