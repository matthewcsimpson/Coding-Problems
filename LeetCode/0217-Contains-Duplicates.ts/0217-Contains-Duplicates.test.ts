import { expect, test } from "@jest/globals";
import containsDuplicateDict from "./0217-Contains-Duplicates-1";
import containsDuplicateSort from "./0217-Contains-Duplicates-2";
import containsDuplicateSet from "./0217-Contains-Duplicates-3";

test("0217-Contains-Duplicates-1", () => {
  expect(containsDuplicateDict([1, 2, 3, 1])).toBe(true);
  expect(containsDuplicateDict([1, 2, 3, 4])).toBe(false);
  expect(containsDuplicateDict([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});

test("0217-Contains-Duplicates-2", () => {
  expect(containsDuplicateSort([1, 2, 3, 4])).toBe(false);
  expect(containsDuplicateSort([1, 2, 3, 1])).toBe(true);
  expect(containsDuplicateSort([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});

test("0217-Contains-Duplicates-3", () => {
  expect(containsDuplicateSet([1, 2, 3, 4])).toBe(false);
  expect(containsDuplicateSet([1, 2, 3, 1])).toBe(true);
  expect(containsDuplicateSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});
