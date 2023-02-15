import { test, expect } from "@jest/globals";
import search from "./0704-Binary-Search";

test("704-Binary-Search", () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});
