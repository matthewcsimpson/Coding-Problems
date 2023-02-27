import { expect, test } from "@jest/globals";
import isPalindrome from "./0125-Valid-Palindrome";

test("0125-Valid-Palindrome", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  expect(isPalindrome("race a car")).toBe(false);
  expect(isPalindrome(" ")).toBe(true);
  expect(isPalindrome("abdccdba")).toBe(true);
  expect(isPalindrome("A nut for a jar of tuna.")).toBe(true);
  expect(
    isPalindrome(
      "Are we not pure? “No, sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man—a prisoner up to new era."
    )
  ).toBe(true);
});
