import { test, expect } from "@jest/globals";
import longestPalindrome from "./0005-Longest-Palendromic-Substring-1";
import longestPalindromeDP from "./0005-Longest-Palendromic-Substring-2";
import longestPalindromeManacher from "./0005-Longest-Palendromic-Substring-3";

test("0005-Longest-Palendromic-Substring", () => {
  expect(longestPalindrome("babad")).toBe("bab");
  expect(longestPalindrome("cbbd")).toBe("bb");
  expect(longestPalindrome("a")).toBe("a");
  expect(longestPalindrome("ac")).toBe("a");
  expect(longestPalindrome("racecar")).toBe("racecar");
  expect(longestPalindrome("asdfadfafdsfracecarasdfasfdas")).toBe("racecar");
});

test("0005-Longest-Palendromic-Substring - DynamicProgramming", () => {
  expect(longestPalindromeDP("babad")).toBe("aba");
  expect(longestPalindromeDP("cbbd")).toBe("bb");
  expect(longestPalindromeDP("a")).toBe("a");
  expect(longestPalindromeDP("ac")).toBe("a");
  expect(longestPalindromeDP("racecar")).toBe("racecar");
  expect(longestPalindromeDP("asdfadfafdsfracecarasdfasfdas")).toBe("racecar");
});

test("0005-Longest-Palendromic-Substring - Manacher's Algorithm", () => {
  expect(longestPalindromeManacher("babad")).toBe("bab");
  expect(longestPalindromeManacher("cbbd")).toBe("bb");
  expect(longestPalindromeManacher("a")).toBe("a");
  expect(longestPalindromeManacher("ac")).toBe("a");
  expect(longestPalindromeManacher("racecar")).toBe("racecar");
  expect(longestPalindromeManacher("asdfadfafdsfracecarasdfasfdas")).toBe(
    "racecar"
  );
});
