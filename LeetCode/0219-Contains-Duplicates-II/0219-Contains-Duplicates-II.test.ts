import { test, expect } from "@jest/globals";
import containsNearbyDuplicate from "./0219-Contains-Duplicates-II-1";
import containsNearbyDuplicateSliding from "./0219-Contains-Duplicates-II-2";

test("0219-Contains-Duplicates-II", () => {
  expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
  expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
  expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
});

test("0219-Contains-Duplicates-II-Sliding", () => {
  expect(containsNearbyDuplicateSliding([1, 2, 3, 1], 3)).toBe(true);
  expect(containsNearbyDuplicateSliding([1, 0, 1, 1], 1)).toBe(true);
  expect(containsNearbyDuplicateSliding([1, 2, 3, 1, 2, 3], 2)).toBe(false);
});
