import { expect, test } from "@jest/globals";
import findMedianSortedArraysTS from "./0004-Median-Two-Sorted-Arrays";

test("0004-median-two-sorted-arrays", () => {
  expect(findMedianSortedArraysTS([1, 3], [2])).toBe(2);
  expect(findMedianSortedArraysTS([1, 2], [3, 4])).toBe(2.5);
  expect(findMedianSortedArraysTS([0, 0], [0, 0])).toBe(0);
  expect(findMedianSortedArraysTS([], [1])).toBe(1);
  expect(findMedianSortedArraysTS([2], [])).toBe(2);
});


