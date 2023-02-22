import { expect, test } from "@jest/globals";
import containsDuplicate from "./0217-Contains-Duplicates-1";
import containsDuplicateTwo from "./0217-Contains-Duplicates-2";

test("0217-Contains-Duplicates-1", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

test("0217-Contains-Duplicates-2", () => {
    expect(containsDuplicateTwo([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicateTwo([1, 2, 3, 1])).toBe(true);
  });
  