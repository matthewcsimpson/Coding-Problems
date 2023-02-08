// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one
// solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // loop through it again to check cominations of nums[k] with nums[i]
    // starting from the same index as the first loop because we don't need to check any
    // combinations more than once.
    for (let k = i + 1; k < nums.length; k++) {
      // if nums[k] & nums[i] equal the target sum, return them as an array.
      if (nums[i] + nums[k] === target) {
        return [i, k];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
