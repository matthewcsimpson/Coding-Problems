const lengthOfLongestSubstring = require("./0003-Longest-Substring-Without-Repeating");

test("0003-Longest-Substring-Without-Repeating", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  expect(lengthOfLongestSubstring(" ")).toBe(1);
});

