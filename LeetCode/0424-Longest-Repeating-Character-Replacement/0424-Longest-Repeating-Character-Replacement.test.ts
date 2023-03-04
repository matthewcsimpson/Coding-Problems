import { expect, test } from "@jest/globals";
import characterReplacement from "./0424-Longest-Repeating-Character-Replacement";

test("0424-Longest-Repeating-Character-Replacement", () => {
  expect(characterReplacement("AABABBA", 1)).toBe(4);
  expect(characterReplacement("ABAB", 2)).toBe(4);
});
