import { expect, test } from "@jest/globals";
import lengthOfLastWord from "./0058-Length-Last-Word-ts";

test("0058-Length-Last-Word", () => {
  expect(lengthOfLastWord("the quick brown fox jumps over the lazy dog")).toBe(
    3
  );
});
