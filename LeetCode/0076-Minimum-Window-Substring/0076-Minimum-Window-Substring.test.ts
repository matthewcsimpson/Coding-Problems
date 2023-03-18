import { test, expect } from "@jest/globals";
import minWindow from "./0076-Minimum-Window-Substring";

test("0076-Minimum-Window-Substring", () => {
  expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
  expect(minWindow("a", "b")).toBe("");
  expect(minWindow("a", "a")).toBe("a");
  expect(minWindow("a", "aa")).toBe("");
});


