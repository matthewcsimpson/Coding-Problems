import { test, expect } from "@jest/globals";
import removeDuplicates from "./0026-Remove-Duplicates-From-Sorted-Array";

test("removeDuplicates", () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
  expect(removeDuplicates([1, 1, 2])).toEqual(2);
  expect(removeDuplicates([-3, -1, 0, 0, 0, 3, 3])).toEqual(4);
});
