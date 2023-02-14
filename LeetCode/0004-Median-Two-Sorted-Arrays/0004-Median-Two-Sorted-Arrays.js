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
    return allnums[Math.ceil(allnums.length / 2) - 1];
  }
};

// Test Data
let nums1 = [3];
let nums2 = [-1, -2];
let nums3 = [2, 3, 4];
let nums4 = [7, 8, 9];

// Tests
console.log(findMedianSortedArrays(nums1, nums2)); // -1
console.log(findMedianSortedArrays(nums2, nums3)); // 2
console.log(findMedianSortedArrays(nums3, nums4)); // 5.5
