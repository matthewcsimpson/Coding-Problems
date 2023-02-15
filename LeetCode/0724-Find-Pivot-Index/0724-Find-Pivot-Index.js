// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the
// left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are
// no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Example 2:
// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// Example 3:
// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// Constraints:
// 1 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // new variable to hold the total value of the array
  let total = 0;
  // new variable to do a running sum of the array.
  let runningSum = 0;
  // loop the array and find the total sum.
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  // loop the array again, this time creating a running sum.
  for (let i = 0; i < nums.length; i++) {
    // if the running sum (ie, the total of the indexes looped) is equal to the total,
    // minus the running sum and minus the current index value, return the current index
    // because it is the pivot index.
    if (runningSum === total - runningSum - nums[i]) {
      return i;
    }
    // update the running sum with the current value
    runningSum += nums[i];
  }

  // if the loop doesn't return a pivot index, returm -1
  return -1;
};

let nums1 = [1, 7, 3, 6, 5, 6];
let nums2 = [1, 2, 3];
let nums3 = [2, 1, -1];

console.log(pivotIndex(nums1));
console.log(pivotIndex(nums2));
console.log(pivotIndex(nums3));
