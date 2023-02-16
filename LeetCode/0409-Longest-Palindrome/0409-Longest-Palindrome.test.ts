import { expect, test } from "@jest/globals";
import longestPalindrome from "./0409-Longest-Palindrome";

test("0409-Longest-Palindrome", () => {
  expect(longestPalindrome("abccccdd")).toBe(7);
  expect(longestPalindrome("a")).toBe(1);
  expect(longestPalindrome("ccc")).toBe(3);
});
