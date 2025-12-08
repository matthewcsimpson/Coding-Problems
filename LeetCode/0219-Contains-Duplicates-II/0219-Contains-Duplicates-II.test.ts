import { test, expect } from "@jest/globals";
import containsNearbyDuplicate from "./0219-Contains-Duplicates-II";

test("0219-Contains-Duplicates-II", () => {
  expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
  expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
  expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
});
