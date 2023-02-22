import { expect, test } from "@jest/globals";
import isAnagram from "./0242-Valid-Anagram-1";
import isAnagramTwo from "./0242-Valid-Anagram-2";

test("/0242-Valid-Anagram-1", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
  expect(isAnagram("cat", "rat")).toBe(false);
});

test("/0242-Valid-Anagram-2", () => {
  expect(isAnagramTwo("anagram", "nagaram")).toBe(true);
  expect(isAnagramTwo("cat", "rat")).toBe(false);
});
