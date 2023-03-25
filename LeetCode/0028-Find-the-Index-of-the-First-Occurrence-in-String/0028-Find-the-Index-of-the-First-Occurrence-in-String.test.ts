import { expect, test } from "@jest/globals";
import strStr from "./0028-Find-the-Index-of-the-First-Occurrence-in-String";

test("0028-Find-the-Index-of-the-First-Occurrence-in-String", () => {
  expect(strStr("a", "a")).toBe(0);
  expect(strStr("sadbutsad", "sad")).toBe(0);
  expect(strStr("leetcode", "leeto")).toBe(-1);
  expect(strStr("abc", "c")).toBe(2);
});
