const isPalindrome = require("./0009-Palindrome-Number");

test("0009-Palindrome-Number", () => {
  expect(isPalindrome(121)).toBe(true);
  expect(isPalindrome(1221)).toBe(true);
  expect(isPalindrome(12321)).toBe(true);
  expect(isPalindrome(12322)).toBe(false);
  expect(isPalindrome(-1221)).toBe(false);
});
