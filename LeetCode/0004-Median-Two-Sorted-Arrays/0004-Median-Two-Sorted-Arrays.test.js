const findMedianSortedArrays = require("./0004-Median-Two-Sorted-Arrays");

test("0004-Median-Two-Sorted-Arrays", () => {
  expect(findMedianSortedArrays(nums1, nums2)).toBe(-1);
  expect(findMedianSortedArrays(nums2, nums3)).toBe(2);
  expect(findMedianSortedArrays(nums3, nums4)).toBe(5.5);
});

// Test Data
let nums1 = [3];
let nums2 = [-1, -2];
let nums3 = [2, 3, 4];
let nums4 = [7, 8, 9];
