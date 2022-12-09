// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

// - nums1.length == m
// - nums2.length == n
// - 0 <= m <= 1000
// - 0 <= n <= 1000
// - 1 <= m + n <= 2000
// - -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // concatenate the arrays together, and sort the resulting array ascending
  let allnums = nums1.concat(nums2).sort((a, b) => {
    return a - b;
  });

  // if the array has an even length, we must average the middle two numbers and return that average.
  if (allnums.length % 2 === 0) {
    let index = Math.ceil(allnums.length / 2) - 1;
    return (allnums[index] + allnums[index + 1]) / 2;
    // if the array has an odd length, simply look for the middle number & return it.
  } else {
    let index = Math.ceil(allnums.length / 2) - 1;
    return allnums[index];
  }
};

let nums1 = [3],
  nums2 = [-1, -2];

console.log(findMedianSortedArrays(nums1, nums2));
