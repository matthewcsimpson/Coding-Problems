import { expect, test } from "@jest/globals";
import lengthOfLongestSubstringTS from "./0003-Longest-Substring-Without-Repeating";

test("0003-Longest-Substring-Without-Repeating", () => {
    expect(lengthOfLongestSubstringTS("pwwkew")).toBe(3);
    expect(lengthOfLongestSubstringTS("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstringTS("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstringTS("dvdf")).toBe(3);
    expect(lengthOfLongestSubstringTS(" ")).toBe(1);
  });