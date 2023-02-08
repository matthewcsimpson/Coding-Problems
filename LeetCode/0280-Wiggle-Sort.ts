// Given an integer array nums, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

// You may assume the input array always has a valid answer.

// Example 1:
// Input: nums = [3,5,2,1,6,4]
// Output: [3,5,1,6,2,4]
// Explanation: [1,6,2,5,3,4] is also accepted.

// Example 2:
// Input: nums = [6,6,5,6,3,8]
// Output: [6,6,5,6,3,8]

// Constraints:
// - 1 <= nums.length <= 5 * 104
// - 0 <= nums[i] <= 104
// - It is guaranteed that there will be an answer for the given input nums.

/**
 Do not return anything, modify nums in-place instead.
 nums[0] <= nums[1] >= nums[2] <= nums[3]
 */
//  const wiggleSort = (nums: number[]): void => {

const wiggleSort = (nums: number[]): number[] => {
  // Loop the numbers
  for (let i = 0; i < nums.length; i++) {
    // If the current index is even, and the current number is greater than the next, swap them.
    if (i % 2 === 0 && nums[i] > nums[i + 1]) {
      let temp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;
    }
    // If the current index is odd, and the current number is less than the next, swap them.
    if (i % 2 !== 0 && nums[i] < nums[i + 1]) {
      let temp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;
    }
  }
    return nums;
};

console.log(wiggleSort([3, 5, 2, 1, 6, 4])); // [3,5,1,6,2,4]
console.log(wiggleSort([6, 6, 5, 6, 3, 8])); // [6,6,5,6,3,8]
