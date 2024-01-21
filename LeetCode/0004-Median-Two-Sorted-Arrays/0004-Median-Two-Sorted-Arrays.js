/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArraysJS = function (nums1, nums2) {
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

module.exports = findMedianSortedArraysJS;
